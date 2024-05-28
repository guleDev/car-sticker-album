const cards = [ 
    {cardID: 1, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 2, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 3, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 4, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 5, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 6, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 7, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 8, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 9, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } },
    {cardID: 10, carBrand: 'Honda', carName: 'Civic', owner: 'gule.pampu', carImg: '../img/gule.pampu_HondaCivic.jpg', carSpecs: { ano : 1999, motor : "vtec 1.6 16v", tração : "dianteira", potencia : "106 cv @ 6200 rpm", torque : "14.2 kgfm @ 4600 rpm", zeroCem : "13.9 seg.", topSpeed : "165 km/h" } } ];

function takeID(id){
    for (let i in cards){
        if (cards[i].cardID == id){
            return i;
        };
    };
};
// cria tabela das especificações
function createTable(card){
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    card = card.carSpecs;
    table.classList.add('specs');
    for ( let i in card ){
        const cell = document.createElement('tr');
        const index = document.createElement('td');
        const value = document.createElement('td');
        index.textContent = i;
        value.style = style="text-align: end;";
        value.textContent = card[i];
        cell.appendChild(index);
        cell.appendChild(value);
        tbody.appendChild(cell);
    };
    table.appendChild(tbody);
    return table;
};
// cria a section para as especificações e apresentação
function createSpecs(card, summary){
    const section = summary.parentElement;
    const cardSpecs = document.createElement('div');
    const div = document.createElement('div');
    const car = document.createElement('h3');
    const ownerName = document.createElement('h4');
    const table = createTable(card);
    car.textContent = `${card.carBrand} ${card.carName}`;
    ownerName.textContent = `${card.owner}`;
    div.classList.add('presentation');
    div.appendChild(car);
    div.appendChild(ownerName);
    cardSpecs.classList.add('cardSpecs');
    cardSpecs.appendChild(div);
    cardSpecs.appendChild(table);
    section.appendChild(cardSpecs);
};
// cria a apresentação da frente da carta
function createSummary(card){
    const summary = document.createElement('div');
    const carImg = document.createElement('img');
    const carName = document.createElement('p');
    const button = document.createElement('button');
    carName.classList.add('carName');
    summary.classList.add('summary');
    button.id = `${card.cardID}`;
    button.classList.add('statusButton');
    carImg.src = './assets/img/gule.pampu_HondaCivic.jpg';
    carImg.alt = `${card.carBrand} ${card.carName}, ${card.owner}`;
    carName.textContent = card.carName;
    button.textContent = 'Status';
    summary.appendChild(carImg);
    summary.appendChild(carName);
    summary.appendChild(button);
    return summary;
};
// cria a section onde fica a carta
function createSection(card){
    const cardSection = document.createElement('section');
    const summary = createSummary(card);
    cardSection.id = `card${card.cardID}`;
    cardSection.classList.add('card');
    cardSection.appendChild(summary);
    return cardSection;
};
// cria a carta
function createCard(card){
    const colection = document.querySelector('#colection');
    const cardSection = createSection(card);
    colection.appendChild(cardSection);
};
// apaga as especificações
function removeSpecs(summary){
    const section = summary.parentElement;
    const cardSpecs = section.querySelector('.cardSpecs');
    section.removeChild(cardSpecs);
}
// desativa os botões ativados
function activedButton(stsBtn){
    const button = document.querySelectorAll('.active');
    for (let i of button){
        if (!stsBtn.classList.contains('active')){
            removeSpecs(i.parentElement);
            stsBtn.classList.remove('active');
            stsBtn.textContent = 'Status';
        }
    }
};
// ativa e desativa o botão
function activeStatus (btnID){
    const stsBtn = document.getElementById(btnID);
    const id = takeID(btnID);
    activedButton(stsBtn)
    stsBtn.classList.toggle('active');
    if (stsBtn.classList.contains('active')){
        createSpecs(cards[id], stsBtn.parentElement);
    }
    if (!stsBtn.classList.contains('active')){
        removeSpecs(stsBtn.parentElement);
    }
    buttonWrite(btnID);
};
// escreve no botão
function buttonWrite(btnID){
    const stsBtn = document.getElementById(btnID);
    console.log(stsBtn.classList.contains('.active'))
}
// pega o id do botão que cria as especificações
document.addEventListener('click', function(eventClick){
    const btnID = eventClick.target.id;
    if (btnID !== 'colection' && btnID){
        activeStatus(btnID);
    };
});

for (let i in cards){
    createCard(cards[i]);
};
