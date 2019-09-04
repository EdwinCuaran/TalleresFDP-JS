const {longitud, deleteLast, invertir} = require('../src/invertirLista');

test ('invertir to [1,2,3,4] gives [4,3,2,1]', () => {
    expect (invertir([1,2,3,4])) .toStrictEqual([4,3,2,1])
});