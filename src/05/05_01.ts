export type ManType = {
    name: string,
    age: number
}

const people = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},

]

const dimychTransormator = (man: ManType) => ({

    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lasName: man.name.split(' ')[1],

})

const devs1 = [{
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Andrew', lastname: 'Ivanov'
}, {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Alexander', lastname: 'Petrov'
}, {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Dmitry', lastname: 'Sidorov'
},
]


const devs2 = [
    dimychTransormator(people[0]),
    dimychTransormator(people[1]),
    dimychTransormator(people[2])
]

const devs3 = people.map(dimychTransormator)

const devs4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lasName: man.name.split(' ')[1],

}))

const messages = people.map( man=> `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)


export const createGreetingMessage = (people:Array<ManType>) => {
    return people.map( man=> `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}