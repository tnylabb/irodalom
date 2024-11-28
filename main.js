const headerObj = { // HeaderObj objektum letrehozasa
    lastName: "Szerző neve", // headerobj lastname tulajdonsaganak ertekadas
    firstName: "Korszak", // headerobj firstName tulajdonsaganak ertekadas
    loves: "Szerelmek" // headerobj loves tulajdonsaganak ertekadas
};

const firstRowElement = { // firstRowElement objektum letrehozasa
    lastName: 'Balassi Bálint', // firstRowElement lastname tulajdonsaganak ertekadas
    period: 'reformáció', // firstRowElement period tulajdonsaganak ertekadas
    love1: 'Losonczy Anna', // firstRowElement love1 tulajdonsaganak ertekadas
    love2: 'Dobó Krisztina' // firstRowElement love2 tulajdonsaganak ertekadas
};

const secondRowElement = { // secondRowElement objektum letrehozasa
    lastName: 'Csokonai Vitéz Mihály', // secondRowElement lastname tulajdonsaganak ertekadas
    period: 'felvilágosodás', // secondRowElement period tulajdonsaganak ertekadas
    love: 'Vajda Juliána' // secondRowElement love tulajdonsaganak ertekadas
};

const thirdRowElement = { // thirdRowElement objektum letrehozasa
    lastName: 'Petőfi Sándor', // thirdRowElement lastname tulajdonsaganak ertekadas
    period: 'magyar romantika', // thirdRowElement period tulajdonsaganak ertekadas
    love1: 'Mednyánszky Berta', // thirdRowElement love1 tulajdonsaganak ertekadas
    love2: 'Szendrey Júlia' // thirdRowElement love2 tulajdonsaganak ertekadas
};

const fourthRowElement = { // fourthRowElement objektum letrehozasa
    lastName: 'Ady Endre', // fourthRowElement lastname tulajdonsaganak ertekadas
    period: '20. század', // fourthRowElement period tulajdonsaganak ertekadas
    love1: 'Léda', // fourthRowElement love1 tulajdonsaganak ertekadas
    love2: 'Csinszka' // fourthRowElement love2 tulajdonsaganak ertekadas
};

const table = document.createElement('table'); // Letrehozok egy table elemet, ami a tablazatomat fogja tartalmazni
document.body.appendChild(table); // Hozzateszem bodyhoz

const thead = document.createElement('thead'); // Letrehozok egy thead elemet, ami a tablazatom fejlecet fogja tartalmazni
table.appendChild(thead); // Hozzafuzom a letrehozott elemet a tablazatomhoz

const headerRow = document.createElement('tr'); // Letrehozok egy tr elemet a fejlec soranak
thead.appendChild(headerRow); // Hozzafuzom a fejlechez a letrehozott elemet

const headerCell1 = document.createElement('th'); // Letrehozok egy th elemet ami a fejlecem egy cellaja lesz
headerCell1.innerHTML = headerObj.lastName; // a cella tartalma a headerObj lastname tulajdonsaganak erteke lesz
headerRow.appendChild(headerCell1); // Hozzafuzom a fejlec sorhoz a letrehozott elemet

const headerCell2 = document.createElement('th'); // Letrehozok egy ujabb th elemet, ami a fejlecem egy masik cellaja lesz
headerCell2.innerHTML = headerObj.firstName; // a cella tartalma a headerObj firstname tulajdonsaganak erteke lesz
headerRow.appendChild(headerCell2); // A letrehozott th-t hozzafuzom a fejlec sorhoz

const headerCell3 = document.createElement('th'); // Letrehozok egy ujabb th elemet, ami a fejlecem harmadik cellaja lesz
headerCell3.innerHTML = headerObj.loves; // a cella tartalma a headerObj loves tulajdonsaganak erteke lesz
headerCell3.colSpan = '2'; // Beallitom hogy 2 oszlopot foglaljon el
headerRow.appendChild(headerCell3); // A letrehozott th-t hozzafuzom a fejlec sorhoz

const tbody = document.createElement('tbody'); // Letrehozok egy tbody elemet a tablazatom torzsének
table.appendChild(tbody); // Hozzafuzom ezt a torzset a tablazatomhoz

const row1 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom elso soranak
tbody.appendChild(row1); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row1Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell1.innerHTML = firstRowElement.lastName; // a cella tartalma a firstRowElement lastName tulajdonsaganak erteke lesz
row1.appendChild(row1Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell2.innerHTML = firstRowElement.period; // a cella tartalma a firstRowElement period tulajdonsaganak erteke lesz
row1.appendChild(row1Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell3.innerHTML = firstRowElement.love1; // a cella tartalma a firstRowElement love1 tulajdonsaganak erteke lesz
row1.appendChild(row1Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell4.innerHTML = firstRowElement.love2; // a cella tartalma a firstRowElement love2 tulajdonsaganak erteke lesz
row1.appendChild(row1Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row2 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom masodik soranak
tbody.appendChild(row2); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row2Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell1.innerHTML = secondRowElement.lastName; // a cella tartalma a secondRowElement lastName tulajdonsaganak erteke lesz
row2.appendChild(row2Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row2Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell2.innerHTML = secondRowElement.period ; // a cella tartalma a secondRowElement period tulajdonsaganak erteke lesz
row2.appendChild(row2Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row2Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell3.innerHTML = secondRowElement.love; // a cella tartalma a secondRowElement love tulajdonsaganak erteke lesz
row2Cell3.colSpan = '2'; // Beallitom hogy 2 oszlopot foglaljon el
row2.appendChild(row2Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row3 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom harmadik soranak
tbody.appendChild(row3); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row3Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell1.innerHTML = thirdRowElement.lastName; // a cella tartalma a thirdRowElement lastName tulajdonsaganak erteke lesz
row3.appendChild(row3Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell2.innerHTML = thirdRowElement.period; // Ma cella tartalma a thirdRowElement period tulajdonsaganak erteke lesz
row3.appendChild(row3Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell3.innerHTML = thirdRowElement.love1; // a cella tartalma a thirdRowElement love1 tulajdonsaganak erteke lesz
row3.appendChild(row3Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell4.innerHTML = thirdRowElement.love2; // a cella tartalma a thirdRowElement love2 tulajdonsaganak erteke lesz
row3.appendChild(row3Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row4 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom negyedik soranak
tbody.appendChild(row4); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row4Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell1.innerHTML = fourthRowElement.lastName; // a cella tartalma a fourthRowElement lastName tulajdonsaganak erteke lesz
row4.appendChild(row4Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell2.innerHTML = fourthRowElement.period; // a cella tartalma a fourthRowElement period tulajdonsaganak erteke lesz
row4.appendChild(row4Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell3.innerHTML = fourthRowElement.love1; // a cella tartalma a fourthRowElement love1 tulajdonsaganak erteke lesz
row4.appendChild(row4Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell4.innerHTML = fourthRowElement.love2; // a cella tartalma a fourthRowElement love2 tulajdonsaganak erteke lesz
row4.appendChild(row4Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz
