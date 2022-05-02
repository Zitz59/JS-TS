
function increaseAge(u:UserType){
    u.age++;
}



type UserType = {
    name:string
    age:number
    address:{title:string}

}
test('little reference type test',() => {


    var user = {
        name:"Sanek",
        age:32,
        address:{
            title:'Sankt-Petetsburg'
        }
    }



    increaseAge(user)

    expect(user.age).toBe(33)

        const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)



})



test('array test',() => {


    let users = [
        {
        name:"Sanek",
        age:32},
        {
            name:"Gvidon",
            age:43
        }
    ]

    let admins = users

    admins.push({name:'Bandyagan', age:10})

    expect(users[2]).toEqual({name:'Bandyagan', age:10})


})

test('array reference test',() => {

    const address = {
        title:"Saint-Petersburg"}

    var user = {
        name:"Sanek",
        age:32,
        address:address
    }

    // let addr = user.address

    let user2: UserType = {
        name:'Katya',
        age:27,
        address:address
    }

    address.title = 'Petrograd'

    expect(user.address.title).toBe('Petrograd')



})

test('value type test',() => {

let usersCount = 100;

    let adminsCount = usersCount

    adminsCount = adminsCount +1

})


test('little reference type array test',() => {


    const address = {
        title:"Saint-Petersburg"}

    let user = {
        name:"Sanek",
        age:32,
        address:address
    }

    // let addr = user.address

    let user2: UserType = {
        name:'Katya',
        age:27,
        address:address
    }

const users = [user, user2, {name: 'Irina', age:23, address: address}]

    const admins = [user,user2]

    admins[0].name = 'Aleksandr'

    expect(users[0].name).toBe('Aleksandr')
    expect(user.name).toBe('Aleksandr')
})

test('sort array test',() => {
    const letters = ['c','d', 'a', 'z','e']

    passportist(letters)

    expect(letters).toEqual(['c','d', 'a', 'z','e'])
})

function passportist (letters:any) {
    const copy = [...letters].sort();
    console.log(letters)

}