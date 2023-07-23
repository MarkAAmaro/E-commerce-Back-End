const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category, { model: Tag, through: ProductTag }]
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Category, { model: Tag, through: ProductTag }]
    });
    if (!product) res.status(404).json({ message: 'No product found with this id!' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.destroy({ where: { id: req.params.id } });
    if (!product) res.status(404).json({ message: 'No product found with this id!' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;