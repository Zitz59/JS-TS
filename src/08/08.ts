
export const usersObj = {
    '0':"Dimych",
    '1':"Roma",
    '2':"Andrey",
    '3':"Artem",
    '4':"Katya",
}

users[1]

var user = {id: 100500, name:'Igor'}
users[user.id] = user;//самые быстрые
delete users[user.id]//сопособы взаимодействия
users[user.id].name = 'Vitya'//с ассоциативным массивом

export const userArray = [{id: 101, name: "Dimych"},
    {id: 1232, name: "Roma"},
    {id: 1041421, name: "Andrey"},
    {id: 122101, name: "Artem"},
    {id: 565101, name: "Katya"}]

//userArray.find(u => u.id ===1)
//var userCopy = [...userArray.filter(),user]
//var users = usersArray.filter(u => u.id !== user.id)