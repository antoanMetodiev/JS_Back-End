
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test1')
    .then(() => console.log('DB Connected!'));



// Трябва да си създадем схема и модел:
// 1. Схема:
const studentsSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

studentsSchema.methods.getInfo = function () {
    console.log('');
};

// 2. Модел (Чрез него се правят всички CRUD операции):
const Student = mongoose.model('Student', studentsSchema);

// Така си запазваме данни:
// 1. Първи начин
// const newStudent = new Student({
//     name: 'Eric',
//     age: 22,
// });

// newStudent.save();

// 2. Втори начин
// Student.create({
//     name: 'Jaklin',
//     age: 21,
// });

// GET Data:

Student.find()
    .then((data) => {
        console.dir(data);
    });


// Виртуално пропърти:
studentsSchema.virtual('description').get(function () {
    return `Name: ${this.name}  Age: ${this.age}`;
});


// Валидиране на пропърти: 
studentsSchema.path('age')
    .validate(function() {
        return this.age > 0 && this.age < 120;
    }, `Age should be between 0 and 120!`);












