const ages = [18, 20, 22, 10, 14, 100, 90];

const predicate = (age: number) => {
    return age > 90;
}


const oldAges = [100];

type CourseType = {
    title:string
    price:number
}


const courses = [{title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

const cheapPredicate = (course:CourseType) => {
    return course.price < 160;

const cheapCourses = [
    {title: 'CSS', price: 100},
    {title: 'REACT', price: 150}]

}