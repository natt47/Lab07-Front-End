const { Coffee } = require('../models')

module.exports = {
  async index (req, res) {
    const coffees = await Coffee.findAll()
    res.send(coffees)
  },

  async create (req, res) {
    const coffee = await Coffee.create(req.body)
    res.send(coffee)
  },

  async show (req, res) {
    const coffee = await Coffee.findByPk(req.params.id)
    res.send(coffee)
  },

  async put (req, res) {
    console.log('ID:', req.params.id)
    console.log('BODY:', req.body)

    const result = await Coffee.update(req.body, {
      where: { id: req.params.id }
    })

    res.send(result)
  },

  async remove (req, res) {
    const coffee = await Coffee.findByPk(req.params.id)
    await coffee.destroy()
    res.send(coffee)
  }
}
