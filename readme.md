# Trabalho de Aplicação DevOps


## 🔮Objetivo
Esse projeto tem como objetivo:
- Aplicar conhecimentos vistos em aula sobre *Branchs*;
- Para cada requisito criar uma nova *Branch*;
- Desenvolver uma aplicação em equipe;
- Realizar o merge de todas as branchs e garantir que a aplicação execute corretamente.

## 🛠 Integrantes
- Mara Júlia
- Gabriel Ratão


## 🚀 Como utilizar a Aplicação
Para utilizar a aplicação você seguir os seguintes passos:
- Clonar esse repositório;
- Iniciar o projeto via NPM;
- Realizar a instalação dos pacotes necessários.

Abaixo você encontra a sequência dos comandos para utilizar no seu terminal, no diretório que você desejar:

    git clone https://github.com/gabrielratao/aplicacao-devops.git
    npm init -y
    npm install

Agora seu ambiente está pronto para executar a aplicação. O próximo passo é inicializar o servidor em sua máquina local com o seguinte comando:

    node src/app.js

Nesse momento você pode realizar requisições em seu navegador dos dois endpoint presentes, são eles:
- localhost/3000     => Irá retornar uma página HTML de saudações;
- localhost/3000/integrantes => Irá retornar o nome completo de todos os integrantes do grupo.
