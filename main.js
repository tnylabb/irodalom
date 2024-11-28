const array = [ // array tomb letrehozasa
    { // array tomb elso elemenek letrehozasa
        lastName: "Szerző neve", // array tomb elso elem lastname tulajdonsaganak ertekadas
        firstName: "Korszak", // array tomb elso elem firstName tulajdonsaganak ertekadas
        loves: "Szerelmek" // array tomb elso elem loves tulajdonsaganak ertekadas

    },
    { // array tomb masodik elemenek letrehozasa
        lastName: 'Balassi Bálint', // array tomb masodik elem lastname tulajdonsaganak ertekadas
        period: 'reformáció', // array tomb masodik elem period tulajdonsaganak ertekadas
        love1: 'Losonczy Anna', // array tomb masodik elem love1 tulajdonsaganak ertekadas
        love2: 'Dobó Krisztina' // array tomb masodik elem love2 tulajdonsaganak ertekadas
    },
    { // array tomb harmadik elemenek letrehozasa
        lastName: 'Csokonai Vitéz Mihály', // array tomb harmadik elem lastname tulajdonsaganak ertekadas
        period: 'felvilágosodás', // array tomb harmadik elem period tulajdonsaganak ertekadas
        love: 'Vajda Juliána' // array tomb harmadik elem love tulajdonsaganak ertekadas
    },
    { // array tomb negyedik elemenek letrehozasa
        lastName: 'Petőfi Sándor', // array tomb negyedik elem lastname tulajdonsaganak ertekadas
        period: 'magyar romantika', // array tomb negyedik elem period tulajdonsaganak ertekadas
        love1: 'Mednyánszky Berta', // array tomb negyedik elem love1 tulajdonsaganak ertekadas
        love2: 'Szendrey Júlia' // array tomb negyedik elem love2 tulajdonsaganak ertekadas
    },
    { // array tomb otodik elemenek letrehozasa
        lastName: 'Ady Endre', // array tomb otodik elem lastname tulajdonsaganak ertekadas
        period: '20. század', // array tomb otodik elem period tulajdonsaganak ertekadas
        love1: 'Léda', // array tomb otodik elem love1 tulajdonsaganak ertekadas
        love2: 'Csinszka' // array tomb otodik elem love2 tulajdonsaganak ertekadas
    }    
]

const table = document.createElement('table'); // Letrehozok egy table elemet, ami a tablazatomat fogja tartalmazni
document.body.appendChild(table); // Hozzateszem bodyhoz

const thead = document.createElement('thead'); // Letrehozok egy thead elemet, ami a tablazatom fejlecet fogja tartalmazni
table.appendChild(thead); // Hozzafuzom a letrehozott elemet a tablazatomhoz

const headerRow = document.createElement('tr'); // Letrehozok egy tr elemet a fejlec soranak
thead.appendChild(headerRow); // Hozzafuzom a fejlechez a letrehozott elemet

const headerCell1 = document.createElement('th'); // Letrehozok egy th elemet ami a fejlecem egy cellaja lesz
headerCell1.innerHTML = array[0].lastName; // a cella tartalma az array elso elem lastname tulajdonsaganak erteke lesz
headerRow.appendChild(headerCell1); // Hozzafuzom a fejlec sorhoz a letrehozott elemet

const headerCell2 = document.createElement('th'); // Letrehozok egy ujabb th elemet, ami a fejlecem egy masik cellaja lesz
headerCell2.innerHTML = array[0].firstName; // a cella tartalma az array elso elem firstname tulajdonsaganak erteke lesz
headerRow.appendChild(headerCell2); // A letrehozott th-t hozzafuzom a fejlec sorhoz

const headerCell3 = document.createElement('th'); // Letrehozok egy ujabb th elemet, ami a fejlecem harmadik cellaja lesz
headerCell3.innerHTML = array[0].loves; // a cella tartalma az array elso elem loves tulajdonsaganak erteke lesz
headerCell3.colSpan = '2'; // Beallitom hogy 2 oszlopot foglaljon el
headerRow.appendChild(headerCell3); // A letrehozott th-t hozzafuzom a fejlec sorhoz

const tbody = document.createElement('tbody'); // Letrehozok egy tbody elemet a tablazatom torzsének
table.appendChild(tbody); // Hozzafuzom ezt a torzset a tablazatomhoz

const row1 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom elso soranak
tbody.appendChild(row1); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row1Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell1.innerHTML = array[1].lastName; // a cella tartalma az array masodik elem lastName tulajdonsaganak erteke lesz
row1.appendChild(row1Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell2.innerHTML = array[1].period; // a cella tartalma az array masodik elem period tulajdonsaganak erteke lesz
row1.appendChild(row1Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell3.innerHTML = array[1].love1; // a cella tartalma az array masodik elem love1 tulajdonsaganak erteke lesz
row1.appendChild(row1Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell4.innerHTML = array[1].love2; // a cella tartalma az array masodik elem love2 tulajdonsaganak erteke lesz
row1.appendChild(row1Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row2 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom masodik soranak
tbody.appendChild(row2); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row2Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell1.innerHTML = array[2].lastName; // a cella tartalma az array harmadik elem lastName tulajdonsaganak erteke lesz
row2.appendChild(row2Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row2Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell2.innerHTML = array[2].period ; // a cella tartalma az array harmadik elem period tulajdonsaganak erteke lesz
row2.appendChild(row2Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row2Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell3.innerHTML = array[2].love; // a cella tartalma az array harmadik elem love tulajdonsaganak erteke lesz
row2Cell3.colSpan = '2'; // Beallitom hogy 2 oszlopot foglaljon el
row2.appendChild(row2Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row3 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom harmadik soranak
tbody.appendChild(row3); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row3Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell1.innerHTML = array[3].lastName; // a cella tartalma az array negyedik elem lastName tulajdonsaganak erteke lesz
row3.appendChild(row3Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell2.innerHTML = array[3].period; // Ma cella tartalma az array negyedik elem period tulajdonsaganak erteke lesz
row3.appendChild(row3Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell3.innerHTML = array[3].love1; // a cella tartalma az array negyedik elem love1 tulajdonsaganak erteke lesz
row3.appendChild(row3Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell4.innerHTML = array[3].love2; // a cella tartalma az array negyedik elem love2 tulajdonsaganak erteke lesz
row3.appendChild(row3Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row4 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom negyedik soranak
tbody.appendChild(row4); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row4Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell1.innerHTML = array[4].lastName; // a cella tartalma az array otodik elem lastName tulajdonsaganak erteke lesz
row4.appendChild(row4Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell2.innerHTML = array[4].period; // a cella tartalma az array otodik period tulajdonsaganak erteke lesz
row4.appendChild(row4Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell3.innerHTML = array[4].love1; // a cella tartalma az array otodik love1 tulajdonsaganak erteke lesz
row4.appendChild(row4Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell4.innerHTML = array[4].love2; // a cella tartalma az array otodik love2 tulajdonsaganak erteke lesz
row4.appendChild(row4Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz
