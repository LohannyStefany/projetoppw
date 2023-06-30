const Usuario = require('../models/Usuario');

const loginController = {
  exibirFormularioLogin: (req, res) => {
    // Verificar se o usuário já está autenticado
    if (req.session.user) {
      // Redirecionar para a página inicial
      res.redirect('/');
    } else {
      // Renderizar o formulário de login
      res.render('login');
    }
  },
  realizarLogin: async (req, res) => {
    const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email, password } });

    if (usuario) {
      // As credenciais são válidas, armazenar o usuário na sessão
      req.session.user = { email };
      // Redirecionar para a página inicial
      res.redirect('/');
    } else {
      // As credenciais são inválidas, redirecionar para a tela de cadastro de usuário
      res.redirect('http://localhost:3000/pessoa/cadastrar');
    }
  } catch (error) {
    console.error(error);
    res.redirect('http://localhost:3000/pessoa/cadastrar');
  }
},

  
  
  realizarLogout: (req, res) => {
    // Remover o usuário da sessão
    req.session.user = null;
    // Redirecionar para a página de login
    res.redirect('/login');
  }
};

module.exports = loginController;
