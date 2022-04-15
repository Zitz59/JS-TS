import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';

let student:StudentType;
beforeEach(()=>{
    student = {
        id: 1,
        name: 'Sasha',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Akademika Lebedeva  16',
            city: {
                title: 'Saint-Petersburg',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'REACT'
            }
        ]
    }
})

test("new tech skill should be added", ()=>{
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

    test("should be made Active", ()=>{
        expect(student.isActive).toBe(false);

        makeStudentActive(student);

        expect(student.isActive).toBe(true);

    })

test("dose student live in city?", ()=>{
    expect(student.isActive).toBe(false);

    let result1 =  doesStudentLiveIn(student,'Moscow');
    let result2 =  doesStudentLiveIn(student,'Saint-Petersburg');

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})









