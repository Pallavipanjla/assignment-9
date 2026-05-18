let students = [
    { id: 1, name: 'Ankit', course: 'MCA', marks: 88 },
    { id: 2, name: 'Riya', course: 'BCA', marks: 92 }
];

// READ - Display all students
exports.getAllStudents = (req, res) => {

    res.render('index', { students });

};

// SHOW ADD FORM
exports.showAddForm = (req, res) => {

    res.render('addStudent');

};

// CREATE - Add student
exports.addStudent = (req, res) => {

    const { name, course, marks } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        course,
        marks
    };

    students.push(newStudent);

    res.redirect('/');

};

// SHOW EDIT FORM
exports.showEditForm = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    res.render('editStudent', { student });

};

// UPDATE STUDENT
exports.updateStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const { name, course, marks } = req.body;

    const student = students.find(s => s.id === id);

    if (student) {

        student.name = name;
        student.course = course;
        student.marks = marks;

    }

    res.redirect('/');

};

// DELETE STUDENT
exports.deleteStudent = (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.redirect('/');

};