let massive = [
    Car = {}, 
    Mobile = {}, 
    Person = {
        name: 'Peter',
        age: 18,
    },
    Google = {},
    Apple = {
        year: '2010',
        owner: 'Stive Jobs',
    }
];

let massiveWithoutEmptyObjects = cleanEmptyObjects(massive);

console.log(massiveWithoutEmptyObjects);
console.log(massive);

/**
 * Функция удаляет пустые объекты из массива объектов
 * 
 * @param {object} array массив объектов
 * @returns {object} Возвращает измененный массив объектов 
 */
function cleanEmptyObjects(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (isEmpty(array[i])) {
            array.splice(i, 1);
        }
    }

    return array;
};

/**
 * Функция определяет есть-ли у объекта свои свойства, если нету - объект пуст!
 * 
 * @param {object} obj объект
 * @returns {boolean} true/false зависимо от выполнения условия 
 */
function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }

    return false;
};