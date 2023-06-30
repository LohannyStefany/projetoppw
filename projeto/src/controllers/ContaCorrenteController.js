const ContaCorrente = require('../models/ContaCorrente');

const contaCorrenteController = {
  getAll: async (req, res) => {
    try {
      const contasCorrente = await ContaCorrente.findAll();
      res.json(contasCorrente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const contaCorrente = await ContaCorrente.findByPk(id);
      if (contaCorrente) {
        res.json(contaCorrente);
      } else {
        res.status(404).json({ message: 'Conta Corrente not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    const { numero, saldo } = req.body;
    try {
      const novaContaCorrente = await ContaCorrente.create({ numero, saldo });
      res.status(201).json({ message: 'Conta Corrente criada com sucesso', contaCorrente: novaContaCorrente });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { numero, saldo } = req.body;
    try {
      const contaCorrente = await ContaCorrente.findByPk(id);
      if (contaCorrente) {
        await contaCorrente.update({ numero, saldo });
        res.json({ message: 'Conta Corrente atualizada com sucesso', contaCorrente });
      } else {
        res.status(404).json({ message: 'Conta Corrente not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const contaCorrente = await ContaCorrente.findByPk(id);
      if (contaCorrente) {
        await contaCorrente.destroy();
        res.json({ message: 'Conta Corrente excluída com sucesso' });
      } else {
        res.status(404).json({ message: 'Conta Corrente not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

module.exports = contaCorrenteController;
