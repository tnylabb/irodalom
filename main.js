// Fejléc címkék
const lastnameHeaderLabel = 'Szerző neve';
const periodHeaderLabel = 'Korszak';
const lovesHeaderLabel = 'Szerelmek';

// Első sor értékei
const firstRowAuthorValue = 'Balassi Bálint';
const firstRowPeriodValue = 'reformáció';
const firstRowLove1Value = 'Losonczy Anna';
const firstRowLove2Value = 'Dobó Krisztina';

// Második sor értékei
const secondRowAuthorValue = 'Csokonai Vitéz Mihály';
const secondRowPeriodValue = 'felvilágosodás';
const secondRowLoveValue = 'Vajda Juliána';

// Harmadik sor értékei
const thirdRowAuthorValue = 'Petőfi Sándor';
const thirdRowPeriodValue = 'magyar romantika';
const thirdRowLove1Value = 'Mednyánszky Berta';
const thirdRowLove2Value = 'Szendrey Júlia';

// Negyedik sor értékei
const fourthRowAuthorValue = 'Ady Endre';
const fourthRowPeriodValue = '20. század';
const fourthRowLove1Value = 'Léda';
const fourthRowLove2Value = 'Csinszka';

const table = document.createElement('table'); // Letrehozok egy table elemet, ami a tablazatomat fogja tartalmazni
document.body.appendChild(table); // Hozzateszem bodyhoz

const thead = document.createElement('thead'); // Letrehozok egy thead elemet, ami a tablazatom fejlecet fogja tartalmazni
table.appendChild(thead); // Hozzafuzom a letrehozott elemet a tablazatomhoz

const headerRow = document.createElement('tr'); // Letrehozok egy tr elemet a fejlec soranak
thead.appendChild(headerRow); // Hozzafuzom a fejlechez a letrehozott elemet

const headerCell1 = document.createElement('th'); // Letrehozok egy th elemet ami a fejlecem egy cellaja lesz
headerCell1.innerHTML = lastnameHeaderLabel; // A tagek kozott erteknek megadom a Szerző neve stringet (const)
headerRow.appendChild(headerCell1); // Hozzafuzom a fejlec sorhoz a letrehozott elemet

const headerCell2 = document.createElement('th'); // Letrehozok egy ujabb th elemet, ami a fejlecem egy masik cellaja lesz
headerCell2.innerHTML = periodHeaderLabel; // A th tagek kozott erteknek megadom a Korszak stringet (const)
headerRow.appendChild(headerCell2); // A letrehozott th-t hozzafuzom a fejlec sorhoz

const headerCell3 = document.createElement('th'); // Letrehozok egy ujabb th elemet, ami a fejlecem harmadik cellaja lesz
headerCell3.innerHTML = lovesHeaderLabel; // A th tagek kozott erteknek megadom a Szerelmek stringet (const)
headerCell3.colSpan = '2'; // Beallitom hogy 2 oszlopot foglaljon el
headerRow.appendChild(headerCell3); // A letrehozott th-t hozzafuzom a fejlec sorhoz

const tbody = document.createElement('tbody'); // Letrehozok egy tbody elemet a tablazatom torzsének
table.appendChild(tbody); // Hozzafuzom ezt a torzset a tablazatomhoz

const row1 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom elso soranak
tbody.appendChild(row1); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row1Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell1.innerHTML = firstRowAuthorValue; // Megadom a tagek kozott erteket (const)
row1.appendChild(row1Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell2.innerHTML = firstRowPeriodValue; // Megadom a tagek kozott erteket (const)
row1.appendChild(row1Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell3.innerHTML = firstRowLove1Value; // Megadom a tagek kozott erteket (const)
row1.appendChild(row1Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row1Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row1Cell4.innerHTML = firstRowLove2Value; // Megadom a tagek kozott erteket (const)
row1.appendChild(row1Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom elso sorahoz

const row2 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom masodik soranak
tbody.appendChild(row2); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row2Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell1.innerHTML = secondRowAuthorValue; // Megadom a tagek kozott erteket (const)
row2.appendChild(row2Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row2Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell2.innerHTML = secondRowPeriodValue ; // Megadom a tagek kozott erteket (const)
row2.appendChild(row2Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row2Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row2Cell3.innerHTML = secondRowLoveValue; // Megadom a tagek kozott erteket (const)
row2Cell3.colSpan = '2'; // Beallitom hogy 2 oszlopot foglaljon el
row2.appendChild(row2Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom masodik sorahoz

const row3 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom harmadik soranak
tbody.appendChild(row3); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row3Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell1.innerHTML = thirdRowAuthorValue; // Megadom a tagek kozott erteket (const)
row3.appendChild(row3Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell2.innerHTML = thirdRowPeriodValue; // Megadom a tagek kozott erteket (const)
row3.appendChild(row3Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell3.innerHTML = thirdRowLove1Value; // Megadom a tagek kozott erteket (const)
row3.appendChild(row3Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row3Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row3Cell4.innerHTML = thirdRowLove2Value; // Megadom a tagek kozott erteket (const)
row3.appendChild(row3Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom harmadik sorahoz

const row4 = document.createElement('tr'); // Letrehozok egy tr elemet a tablazatom negyedik soranak
tbody.appendChild(row4); // Hozzafuzom ezt a sort a tablazatom torzsehez

const row4Cell1 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell1.innerHTML = fourthRowAuthorValue; // Megadom a tagek kozott erteket (const)
row4.appendChild(row4Cell1); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell2 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell2.innerHTML = fourthRowPeriodValue; // Megadom a tagek kozott erteket (const)
row4.appendChild(row4Cell2); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell3 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell3.innerHTML = fourthRowLove2Value; // Megadom a tagek kozott erteket (const)
row4.appendChild(row4Cell3); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz

const row4Cell4 = document.createElement('td'); // Letrehozok egy uj td elemet
row4Cell4.innerHTML = fourthRowLove1Value; // Megadom a tagek kozott erteket (const)
row4.appendChild(row4Cell4); // Hozzafuzom a most letrehozott td-t, a tablazatom negyedik sorahoz
