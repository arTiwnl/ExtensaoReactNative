import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';

const App = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [newStudentName, setNewStudentName] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const sessions = ['Funcional de Areia', 'Funcional de Studio', 'Pilates'];

  const addStudent = () => {
    if (newStudentName.trim() === '') return;
    setStudents([...students, newStudentName]);
    setAttendance({
      ...attendance,
      [newStudentName]: []
    });
    setNewStudentName('');
  };

  const handleCheckIn = (session) => {
    if (!selectedStudent) return;
    const timestamp = new Date().toLocaleString();
    const record = { session, timestamp };
    setAttendance({
      ...attendance,
      [selectedStudent]: [...attendance[selectedStudent], record]
    });
    setModalVisible(false); // Fecha o modal após registrar presença
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Presença</Text>
      
      <View style={styles.addStudentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Aluno"
          value={newStudentName}
          onChangeText={setNewStudentName}
        />
        <Button title="Adicionar Aluno" onPress={addStudent} />
      </View>

      <Text style={styles.subtitle}>Selecione um aluno:</Text>
      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.studentButton,
              selectedStudent === item && styles.selectedButton
            ]}
            onPress={() => setSelectedStudent(item)}
          >
            <Text style={styles.studentText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {selectedStudent && (
        <>
          <Button title="Registrar Presença" onPress={() => setModalVisible(true)} />
          <Text style={styles.subtitle}>Registros de Presença para {selectedStudent}:</Text>
          <FlatList
            data={attendance[selectedStudent]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.attendanceRecord}>
                <Text style={styles.recordText}>
                  {item.session} - {item.timestamp}
                </Text>
              </View>
            )}
          />
        </>
      )}

      {/* Modal para registrar presença */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Registrar Presença para {selectedStudent}</Text>
          {sessions.map((session, index) => (
            <TouchableOpacity
              key={index}
              style={styles.sessionButton}
              onPress={() => handleCheckIn(session)}
            >
              <Text style={styles.sessionText}>{session}</Text>
            </TouchableOpacity>
          ))}
          <Button title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFACD', // amarelo canário
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  addStudentContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  studentButton: {
    padding: 15,
    backgroundColor: '#FFD700', // amarelo canário
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#FFEC8B',
  },
  studentText: {
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  sessionButton: {
    padding: 15,
    backgroundColor: '#FFD700', // amarelo canário
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  sessionText: {
    fontSize: 16,
  },
  attendanceRecord: {
    padding: 10,
    backgroundColor: '#FFECB3',
    borderRadius: 5,
    marginBottom: 5,
  },
  recordText: {
    fontSize: 14,
  },
});

export default App;
