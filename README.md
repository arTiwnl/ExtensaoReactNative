# Controle de Presença - LM MULTFITNESS

Este repositório contém o código-fonte do aplicativo de controle de presença desenvolvido para o estúdio LM MULTFITNESS como parte de uma atividade de extensão realizada no IFMA. O aplicativo foi desenvolvido utilizando React Native e tem como objetivo registrar presenças, gerenciar mensalidades e melhorar a experiência dos alunos e colaboradores do estúdio.

Funcionalidades
Registro de Presença: Marcação de presença para diferentes modalidades (funcional de areia, funcional de studio e pilates) de maneira prática e intuitiva.
Gestão de Mensalidades: Controle e acompanhamento de pagamentos dos alunos.
Interface Intuitiva: Design simples e funcional com cor predominante em amarelo canário, proporcionando uma experiência agradável para os usuários.
Tecnologias Utilizadas
React Native: Framework para desenvolvimento mobile multiplataforma (iOS e Android).
Expo: Para facilitar o desenvolvimento e a visualização das alterações em tempo real.
Node.js: Back-end utilizado para gerenciar as operações de controle de presença e mensalidades.
Firebase: Implementado para gerenciamento de autenticação e armazenamento de dados.
Estrutura do Projeto
O projeto está organizado da seguinte forma:

bash
Copiar código
/controle-presenca-app
│
├── /assets          # Imagens e outros arquivos de mídia utilizados no app
├── /components      # Componentes reutilizáveis da interface do usuário
├── /screens         # Telas principais do aplicativo
├── /services        # Serviços de integração com APIs e Firebase
├── App.js           # Arquivo principal do aplicativo
├── package.json     # Dependências e scripts do projeto
└── README.md        # Documentação do projeto
Configuração e Execução
Pré-requisitos
Node.js (v14 ou superior)
Expo CLI
Git
Passo a Passo
Clone este repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/controle-presenca-app.git
Navegue até o diretório do projeto:
bash
Copiar código
cd controle-presenca-app
Instale as dependências:
bash
Copiar código
npm install
Execute o aplicativo:
bash
Copiar código
expo start
O Expo abrirá um terminal interativo onde você pode escolher emular o aplicativo em um dispositivo ou em um simulador.

Contribuição
Este projeto foi desenvolvido como parte de um projeto de extensão. Contribuições externas são bem-vindas para aprimorar o sistema. Para contribuir:

Faça um fork do repositório.
Crie uma branch para suas alterações (git checkout -b minha-feature).
Faça commit das suas alterações (git commit -m 'Minha nova feature').
Faça push para a branch (git push origin minha-feature).
Abra um Pull Request.
Licença
Este projeto é licenciado sob a MIT License.
