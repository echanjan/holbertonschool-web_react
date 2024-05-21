interface Teacher {
    readonly firstName: string;
    readonly lastName: string; 
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}


function printTeacher (firstName: string, lastName: string) {
    return `${firstName.slice(0,1)}.${lastName}`;
}

interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClassConstructor {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassConstructor {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public workOnHomework(): string {
        return "Currently working";
    }

    public displayName(): string {
        return this.firstName;
    } 
}


// const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     location: 'London',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
//   };
//   console.log(director1);

// console.log(printTeacher('John', 'Doe'));