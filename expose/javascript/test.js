let student = {
    name: 'Sarah',
    major: 'CS',
    'Grad Year': '2022',
    greeting: function() { console.log('hi'); },
    'Fav teacher': {
        name: 't p',
        course: 'cse 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student.courseLoad[0]);