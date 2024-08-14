// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

// Cria uma nova instância do banco de dados
const db = new sqlite3.Database('./database.db');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Cria a tabela de e-mails se não existir
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS emails (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL
    )`);
});

// Rota para inscrição
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: 'E-mail é obrigatório' });
    }

    db.run('INSERT OR IGNORE INTO emails (email) VALUES (?)', [email], function(err) {
        if (err) {
            return res.status(500).json({ success: false, error: 'Erro ao adicionar o e-mail' });
        }
        if (this.changes === 0) {
            return res.status(400).json({ success: false, error: 'E-mail já cadastrado' });
        }
        res.json({ success: true });
    });
});

// Rota para cancelamento de inscrição
app.delete('/unsubscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: 'E-mail é obrigatório' });
    }

    db.run('DELETE FROM emails WHERE email = ?', [email], function(err) {
        if (err) {
            return res.status(500).json({ success: false, error: 'Erro ao remover o e-mail' });
        }
        if (this.changes === 0) {
            return res.status(400).json({ success: false, error: 'E-mail não encontrado' });
        }
        res.json({ success: true });
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
