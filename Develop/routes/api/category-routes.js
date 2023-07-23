const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });

    if (!categoryData) {
      return res.status(404).json({ message: 'No categories found.' });
    }

    res.status(200).json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Unable to fetch categories.' });
  }
});

// GET a specific category by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      return res.status(404).json({ message: 'Category not found with the given ID.' });
    }

    res.status(200).json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Unable to fetch the category.' });
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid data. Failed to create the category.' });
  }
});

// UPDATE a category by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedCategory[0]) {
      return res.status(404).json({ message: 'Category not found with the given ID.' });
    }

    res.status(200).json({ message: 'Category updated successfully.' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid data. Failed to update the category.' });
  }
});

// DELETE a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found with the given ID.' });
    }

    res.status(200).json({ message: 'Category deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Failed to delete the category.' });
  }
});

module.exports = router;