## O que foi usado

O projeto inclui um backend em Node.js com um banco de dados SQLite para armazenar os dados, e um frontend básico em HTML/CSS/JavaScript.


## Pré-requisitos

**Node.js**: Certifique-se de ter o Node.js instalado na sua máquina. [Baixar Node.js](https://nodejs.org/)
**SQLite3**: O banco de dados utilizado é o SQLite3, que já está incluído no projeto.

## Como rodar o projeto

## 1. Clone o repositório
git clone https://github.com/LucasdsBitencourt/Software-Mindtech.git

## 2. Instruções 

Pelo terminal, entre no diretorio do projeto "backend" e instale as dependencias necessarias:
"cd backend"
"npm install"

No backend, já foram configurados os seguintes middlewares no arquivo "server.js":

CORS: Permite que o frontend, servido de uma origem diferente, consiga se comunicar com o backend.

"const cors = require('cors');
app.use(cors());"

body-parser: Permite que o servidor entenda dados no formato JSON enviados no corpo das requisições.

"const bodyParser = require('body-parser');
app.use(bodyParser.json());"

Essas configurações permitem que o backend processe corretamente as requisições enviadas pelo frontend.

## 3. Execute o server

Pelo terminal, entre no diretorio do projeto "backend" e inicie o servidor:

"node server.js"

O servidor rodará na porta 3000 por padrão.

Para fecha-lo use Ctrl + C

## 4. Execute o frontend

Volte para o diretório frontend e abra o arquivo index.html no seu navegador ou você pode usar a extensão Live Server do VSCode para servir o frontend automaticamente.

## 5. Teste API

Testar a API usando o Postman:

Inscrição na Newsletter:
Método: POST
URL: http://localhost:3000/subscribe
Body (JSON): { "email": "email@example.com" }

Cancelar Inscrição:
Método: DELETE
URL: http://localhost:3000/emails
Body (JSON): { "email": "email@example.com" }

## 6. Verificar dados

Abra o terminal
usando o comando "cd" para navegar ate o diretorio

"newsletter-api\newsletter-project\backend"

Execute o comando sqlite3

"sqlite3 database.db"

Para listar todas as tabelas existentes no banco de dados

".tables"

Para ver os dados de uma tabela específica, por exemplo, a tabela emails, use o comando SELECT

"SELECT * FROM emails;"

Para sair use 

".exit"