type UsersType =  {
    [key:string]: {id:number, name: string }
}

 let users: UsersType = {
    '101': {id: 101, name: "Dimych"},
    '1232': {id: 1232, name: "Roma"},
    '1041421': {id: 1041421, name: "Andrey"},
    '122101': {id: 122101, name: "Artem"},
    '565101': {id: 565101, name: "Katya"},
}


beforeEach(()=> {
    users = {
        '101': {id: 101, name: "Dimych"},
        '1232': {id: 1232, name: "Roma"},
        '1041421': {id: 1041421, name: "Andrey"},
        '122101': {id: 122101, name: "Artem"},
        '565101': {id: 565101, name: "Katya"},
    }
})


test('should select corresponding user from obj', () => {
    users['565101'].name = 'Ekaterina'
    users['101'].name = 'Dmitry'

    expect(users['565101']).toEqual({id: 565101, name: 'Ekaterina'});
expect(users['101']).toEqual({id:101, name:'Dmitry'})
})

test('should delete corresponding user from obj', () => {
    delete users['565101']
    delete users['1232']

    expect(users['565101']).toBeUndefined();
    expect(users['1232']).toBeUndefined()
})

