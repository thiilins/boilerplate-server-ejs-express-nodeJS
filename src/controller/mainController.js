const mainController = {
  index: (req, res) => {
    res.send("Hello World - II");
  },
  contato: (req, res) => {
    res.send("Contato");
  },
};
module.exports = mainController;
