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

for(let i = 0; i < array.length; i++) { // vegigiteralok az arrayen egy novekmenyes ciklus segitsegevel
    const currentElement = array[i]; // block szinten definialok egy valtozot, amibe beleteszem az array aktualis ciklusvaltozo szamu elemet
    const row = document.createElement('tr'); // Letrehozok egy tr elemet
    
    if (i === 0) { // Ha az első elem (fejléc)
        table.appendChild(document.createElement('thead')).appendChild(row); // Létrehozom a thead-et és hozzáadom a sort
        
        const cell1 = document.createElement('th'); // Letrehozok egy th elemet
        cell1.innerHTML = currentElement.lastName; // A cella tartalma az aktualis elem lastname tulajdonsaga
        row.appendChild(cell1);
        
        const cell2 = document.createElement('th'); // Letrehozok egy th elemet
        cell2.innerHTML = currentElement.firstName; // A cella tartalma az aktualis elem firstName tulajdonsaga
        row.appendChild(cell2);
        
        const cell3 = document.createElement('th'); // Letrehozok egy th elemet
        cell3.innerHTML = currentElement.loves; // A cella tartalma az aktualis elem loves tulajdonsaga
        cell3.colSpan = '2'; // Beallitom hogy 2 oszlopot foglaljon el
        row.appendChild(cell3);
    } else {
        if (i === 1) { // Ha a második elem
            table.appendChild(document.createElement('tbody')).appendChild(row); // Létrehozom a tbody-t és hozzáadom a sort
        } else {
            table.getElementsByTagName('tbody')[0].appendChild(row); // Hozzáadom a sort a tbody-hoz
        }
        
        const cell1 = document.createElement('td'); // Letrehozok egy td elemet
        cell1.innerHTML = currentElement.lastName; // A cella tartalma az aktualis elem lastname tulajdonsaga
        row.appendChild(cell1);
        
        const cell2 = document.createElement('td'); // Letrehozok egy td elemet
        cell2.innerHTML = currentElement.period; // A cella tartalma az aktualis elem period tulajdonsaga
        row.appendChild(cell2);
        
        const cell3 = document.createElement('td'); // Letrehozok egy td elemet
        cell3.innerHTML = currentElement.love1 || currentElement.love; // A cella tartalma az aktualis elem love1 vagy love tulajdonsaga
        row.appendChild(cell3);
        
        if (currentElement.love2) { // Ha van második szerelem
            const cell4 = document.createElement('td'); // Letrehozok egy td elemet
            cell4.innerHTML = currentElement.love2; // A cella tartalma az aktualis elem love2 tulajdonsaga
            row.appendChild(cell4);
        } else {
            cell3.colSpan = '2'; // Ha nincs második szerelem, akkor az első szerelem cellája 2 oszlopot foglal el
        }
    }
}