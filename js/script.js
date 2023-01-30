// 1. метод forEach бере кожен елемент масиву і виконує для нього функцію 
// 2. за допомогою arr.splice() не вказуючи жодних параметрів для splice
// 3. Array.isArray(variable)

function filterBy(arr, type){
    return arr.filter(el => typeof el !== type )
}
console.log(filterBy(['hello', 'world', 23, '23', null], 'string'))