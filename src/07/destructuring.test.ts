import {ManType} from './Destructuring';

let props: ManType = {
    name: 'Sanek',
    age: 32,
    lessons: [{title: 'React'}, {title: 'TypeScript'}, {title: 'JavaScript', name:'It-Incubator'}],
    address: {
        street: {
            title: 'Svyazistov Street'
        }
    }
}


test('', () => {


//const age = props.age;
//const lessons = props.lessons;
    const {age, lessons} = props;//эквивалентно
    const {title} = props.address.street
    //вытаскивает title из обьекта address и присваивает его значение переменной title
    //const title = props.address.street.title - второй вариант

    const a = props.age;
    const l = props.lessons;

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);

    expect(a).toBe(32);
    expect(l.length).toBe(3);
    expect(title).toBe('Svyazistov Street');

})

type ComponentsType = {
    shimano: string
}


type CycleType = {
    name: string
    year: number
    color: string
    components: Array<ComponentsType>
    address: {
        street: {
            title: string
        }
    }
}


let cycles: CycleType;
beforeEach(() => {
    cycles = {
        name: 'orbea',
        year: 2009,
        color: 'white',
        components: [{shimano: 'ultegra 6600'}, {shimano: 'compact'}],
        address: {
            street: {
                title: 'Svyazistov Street'
            }
        }
    }
})


test('', () => {


    const {name, color, components,} = cycles
    const {title} = cycles.address.street

    expect(name).toBe('orbea');
    expect(color).toBe('white');
    expect(components.length).toBe(2);
    expect(title).toBe('Svyazistov Street');


})


test('', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];
    //первый варинт (длинный)

    const [,lesson2, ...restLessons] = props.lessons
    //деструктурированный вариант


    expect(l1.title).toBe('React');
    expect(l2.title).toBe('TypeScript');


    expect(lesson2.title).toBe('TypeScript');

    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe('JavaScript');
    expect(restLessons[0].name).toBe('It-Incubator');

    expect(restLessons[0]).toStrictEqual({title: 'JavaScript', name:'It-Incubator'})

})