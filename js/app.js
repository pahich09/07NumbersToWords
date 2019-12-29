const cl = arg=>console.log(arg);
const hundreds = {0: 0, 1: 'сто', 2: 'двести', 3: 'триста', 4: 'четыреста', 5: 'пятьсот', 6: 'шестьсот', 7: 'семьсот', 8: 'восемьсот', 9: 'девятьсот'};
const dozens = {0: 0, 2: 'двадцать', 3: 'тридцать', 4: 'сорок', 5: 'пятьдесят', 6: 'шестьдесят', 7: 'семьдесят', 8: 'восемьдесят', 9: 'девяносто'};
const teens = {0: 'десять', 1: 'одинадцать', 2: 'двенадцать', 3: 'тринадцать', 4: 'четырнадцать', 5: 'пятнадцать', 6: 'шестнадцать', 7: 'семнадцать', 8: 'восемнадцать', 9: 'девятнадцать'};
const units = {0: 0, 1: 'одна', 2: 'две', 3: 'три', 4: 'четыре', 5: 'пять', 6: 'шесть', 7: 'семь', 8: 'восемь', 9: 'девять',};
const currency = {0: 'гривен', 1: 'гривна', 2: 'гривны', 3: 'гривны', 4: 'гривны', 5: 'гривен', 6: 'гривен', 7: 'гривен', 8: 'гривен', 9: 'гривен',};

let userValue = prompt('введите число');
const getString = () => userValue.padStart(3, '0');
const getArrayOfString = () => getString().split('');

let createArray = getArrayOfString().map((item, index) => {
	switch(index){
		case 0:
		item = hundreds[item];
		break;
		case 1:
		if(item == 1){
			item = 0;
		} else{
			item = dozens[item];
		}
		break;
		case 2:
		if(getArrayOfString()[1] == 1){
			item = teens[item];
		} else{
			item = units[item];
		}
		break;
	}
	return item;
})

const addCurrency = () => {
	if(getArrayOfString()[1] == 1){
		createArray.push(currency[0]);	
	} else {
		createArray.push(currency[getArrayOfString()[2]]);
	}
	return createArray;
} 	
let filterRes = addCurrency().filter(el => el != 0);
let result = filterRes.join(' ');
cl(result);