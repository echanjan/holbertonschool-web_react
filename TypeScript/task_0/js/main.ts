// 0. Creating an interface for a student

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Nombre1',
    lastName: 'Apellido1',
    age: 30,
    location: 'Europa',
};

const student2: Student = {
    firstName: 'Nombre2',
    lastName: 'Apellido2',
    age: 35,
    location: 'America',
};

const studentsList: Student[] = [student1, student2];


function renderTableAdvance(students: Array<Student>) {
    if (students.length === 0) {
        console.log('Error: No hay datos para mostrar');
        return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const headers = ['FirstName', 'LastName', 'Age', 'Location'];

    headers.forEach((h) => {
        const th = document.createElement('th');
        th.textContent = h;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    students.forEach((student) => {
        const tr = document.createElement('tr');

        const firstName = document.createElement('td');
        firstName.textContent = student.firstName;
        tr.appendChild(firstName);

        const lastName = document.createElement('td');
        lastName.textContent = student.lastName;
        tr.appendChild(lastName);

        const age = document.createElement('td');
        age.textContent = String(student.age);
        tr.appendChild(age);

        const location = document.createElement('td');
        location.textContent = student.location;
        tr.appendChild(location);

        tbody.appendChild(tr);
        table.appendChild(tbody);
    });
    document.body.appendChild(table);
}

renderTableAdvance(studentsList);