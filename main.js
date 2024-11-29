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

const menuContainer = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatomat fogja tartalmazni
document.body.appendChild(menuContainer); // Hozzateszem bodyhoz

function renderMenu() {
    const table = document.createElement('table'); // Letrehozok egy table elemet, ami a tablazatomat fogja tartalmazni
    menuContainer.appendChild(table); // Hozzateszem bodyhoz

    for(const currentElement of array) { // vegigiteralok az arrayen egy novekmenyes ciklus segitsegevel
        const row = document.createElement('tr'); // Letrehozok egy tr elemet
        
        if (currentElement === array[0]) { // Ha az első elem (fejléc)
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
        } 
        else {
            if (currentElement === array[1]) { // Ha a második elem
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
}

renderMenu(); // meghivom a renderMenu fuggvenyt

form.addEventListener('submit', function(e) { 
    e.preventDefault(); // megakadalyozom, hogy a bongeszo alapertelmezett mukodese lefusson submit eseten
    
    const thisForm = e.currentTarget; // Az event currentTarget tulajdonsaga a formunkat tartalmazza, ezt eltaroljuk egy lokalis valtozoba
    const errorHtmlElements = thisForm.querySelectorAll('.error'); // A formon beluli osszes error classal rendelkezo html elementet elkerem
    
    for(const errorElement of errorHtmlElements) { // vegigiteralunk a visszakapott errorHtmlElementeken
        errorElement.innerHTML = ''; // toroljuk az aktualis elem tartalmat
        errorElement.classList.remove('active'); // eltavolitjuk az active classt
    }
    
    let valid = true; // a valid valtozo erteke igaz

    const koltoNevElement = document.getElementById('kolto_nev'); // elkerem a htmleleementet, amely a kolto_nev id-val van definialva
    const korszakElement = document.getElementById('korszak'); // elkerem a htmleleementet, amely a korszak id-val van definialva
    const szerelem1Element = document.getElementById('szerelem1'); // elkerem a htmleleementet, amely a szerelem1 id-val van definialva
    const szerelem2Element = document.getElementById('szerelem2'); // elkerem a htmleleementet, amely a szerelem2 id-val van definialva
    const masodikElement = document.getElementById('masodik'); // elkerem a htmleleementet, amely a masodik id-val van definialva

    // Validaljuk a kolto nev mezot
    if(!validateFormHtmlField(koltoNevElement, "A költő nevének megadása kötelező!", 'kolto_nev-error')) {
        valid = false; // ha a validacio nem sikerult, a valid valtozo erteket hamisra allitjuk
    }

    // Validaljuk a korszak mezot
    if(!validateFormHtmlField(korszakElement, "A korszak megadása kötelező!", 'korszak-error')) {
        valid = false; // ha a validacio nem sikerult, a valid valtozo erteket hamisra allitjuk
    }

    if(masodikElement.checked) { // ha be van pipalva a masodik szerelem checkbox
        // Validaljuk mindket szerelem mezot
        if(!validateFormHtmlField(szerelem1Element, "A költőnek kötelező megadni a szerelemeit", 'szerelem1-error') ||
           !validateFormHtmlField(szerelem2Element, "A költőnek kötelező megadni a szerelemeit", 'szerelem1-error')) {
            valid = false; // ha barmelyik validacio nem sikerult, a valid valtozo erteket hamisra allitjuk
        }
    }
    
    if(valid) { // ha a valid valtozo erteke igaz (minden validacio sikeres)
        const koltoNevValue = koltoNevElement.value; // a koltoNevElement value erteket beleteszem egy lokalis valtozoba
        const korszakValue = korszakElement.value; // a korszakElement value erteket beleteszem egy lokalis valtozoba
        const szerelem1Value = szerelem1Element.value; // a szerelem1Element value erteket beleteszem egy lokalis valtozoba
        const szerelem2Value = masodikElement.checked ? szerelem2Element.value : undefined; // a szerelem2Element value erteket beleteszem egy lokalis valtozoba, ha be van pipalva, egyebkent undefined

        const newElement = { // letrehozok egy uj objektumot
            lastName: koltoNevValue, // az uj objektum lastName tulajdonsaga a koltoNevValue erteket kapja
            period: korszakValue, // az uj objektum period tulajdonsaga a korszakValue erteket kapja
            love1: szerelem1Value || '-', // az uj objektum love1 tulajdonsaga a szerelem1Value erteket kapja, ha ures akkor '-' jelet
            love2: szerelem2Value // az uj objektum love2 tulajdonsaga a szerelem2Value erteket kapja
        }
        
        array.push(newElement); // az uj objektumot hozzaadom az array tombhoz
        menuContainer.innerHTML = ""; // a menuContainer tartalmat torlom
        renderMenu(); // ujrarenderelem a tablazatot
        thisForm.reset(); // visszaallitom az urlap alapertelmezett ertekeire
    }
});

function validateFormHtmlField(inputHtmlElement, errorMessage, errorElementId) {
    let valid = true; // definialjuk a valid lokalis valtozot true ertekkel
    if(inputHtmlElement.value === '') { // ha a parameterben kapott beviteli mezo ures
        const errorplace = document.getElementById(errorElementId); // elkerem az adott id-val rendelkezo error elemet
        if(errorplace) { // ha letezik az error elem
            errorplace.innerHTML = errorMessage; // belehelyezem a hibauzenet szoveget
            errorplace.classList.add('active'); // hozzaadom az active classt a megjeleniteshez
        }
        valid = false; // a valid valtozo erteket hamisra allitom
    }
    return valid; // visszaterek a valid valtozoval
}