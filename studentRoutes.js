const express = require('express');

const router = express.Router();

const studentController = require('../controllers/studentController');

// READ
router.get('/', studentController.getAllStudents);

// SHOW ADD FORM
router.get('/add', studentController.showAddForm);

// ADD STUDENT
router.post('/add', studentController.addStudent);

// SHOW EDIT FORM
router.get('/edit/:id', studentController.showEditForm);

// UPDATE STUDENT
router.put('/edit/:id', studentController.updateStudent);

// DELETE STUDENT
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;