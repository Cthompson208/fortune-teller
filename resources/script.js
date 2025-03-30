//alert('Heyyyyy');


const getRandChildren = Math.floor(Math.random()*21);
const getRandHouses = Math.floor(Math.random()*6);

const fortunes = {
    careers: ['Doctor', 'Insurance Salesman', 'Professional Athlete', 'Dental Hygenist', 'Used Car Salesman', 'Actor/Actress', 'Teacher', 'Unemployed'],
    love: ['happily married', 'forever alone', "in a complicated situationship"],
    children: getRandChildren,
    state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana','Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'Washington D.C.', 'West Virginia', 'Wisconsin', 'Wyoming'],
    houses: getRandHouses

}

const unrefinedFortune = [];

for(let prop in fortunes){
    let objIndex = Math.floor(Math.random()*fortunes[prop].length);

    switch(prop){
        case 'careers':
            unrefinedFortune.push(`${fortunes[prop][objIndex]}`);
            break;
        case 'love':
            unrefinedFortune.push(`${fortunes[prop][objIndex]}`);
            break;
        case 'children':
            unrefinedFortune.push(`${fortunes[prop]}`);
            break;
        case 'state':
            unrefinedFortune.push(`${fortunes[prop][objIndex]}`);
            break;
        case 'houses':
            unrefinedFortune.push(`${fortunes[prop]}`);
            break;
        default:
            unrefinedFortune.push('There is not enough info');
            break;
    }
};


const tellMyFortune = wisdom => {
    let string = `You will be a ${wisdom[0]}, and as far as relationships go you will be ${wisdom[1]} with ${wisdom[2]} children. You will live in ${wisdom[3]} and you will have ${wisdom[4]} houses.`;
    return string;
}

//const realFortune = tellMyFortune(unrefinedFortune);

function replace(){
    document.getElementById('output').innerHTML = tellMyFortune(unrefinedFortune) + '<br>';
}

const button = document.getElementById('button');
button.addEventListener('click', replace)
