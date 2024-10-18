
# Controle de Presença - LM MULTFITNESS

Este repositório contém o código-fonte do aplicativo de controle de presença desenvolvido para o estúdio **LM MULTFITNESS** como parte de uma atividade de extensão realizada no IFMA. O aplicativo foi desenvolvido utilizando **React Native** e tem como objetivo registrar presenças, gerenciar mensalidades e melhorar a experiência dos alunos e colaboradores do estúdio.

## Funcionalidades

- **Registro de Presença**: Marcação de presença para diferentes modalidades (funcional de areia, funcional de studio e pilates) de maneira prática e intuitiva.
- **Gestão de Mensalidades**: Controle e acompanhamento de pagamentos dos alunos.
- **Interface Intuitiva**: Design simples e funcional com cor predominante em **amarelo canário**, proporcionando uma experiência agradável para os usuários.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile multiplataforma (iOS e Android).
- **Expo**: Para facilitar o desenvolvimento e a visualização das alterações em tempo real.
- **Node.js**: Back-end utilizado para gerenciar as operações de controle de presença e mensalidades.
- **Firebase**: Implementado para gerenciamento de autenticação e armazenamento de dados.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

```
/controle-presenca-app
├── /assets          # Imagens e outros arquivos de mídia utilizados no app
├── /components      # Componentes reutilizáveis da interface do usuário
├── /screens         # Telas principais do aplicativo
├── /services        # Serviços de integração com APIs e Firebase
├── App.js           # Arquivo principal do aplicativo
├── package.json     # Dependências e scripts do projeto
└── README.md        # Documentação do projeto
```

## Configuração e Execução

### Pré-requisitos

- **Node.js** e **npm** instalados em seu sistema.
- **Expo CLI** instalada globalmente: `npm install -g expo-cli`

### Instalação

1. Clone este repositório: 
   ```bash
   git clone https://github.com/seu-usuario/controle-presenca-app.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd controle-presenca-app
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Projeto

Para rodar o aplicativo em um emulador ou dispositivo físico, utilize o comando:
```bash
expo start
```
Depois, escaneie o QR code com o aplicativo **Expo Go** no seu dispositivo móvel ou abra no emulador de sua escolha.

## Contribuição

Caso queira contribuir para o projeto, sinta-se à vontade para abrir um **pull request** ou relatar um problema em **Issues**.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
