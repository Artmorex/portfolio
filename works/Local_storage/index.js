let noMagic70 = 70;
let noMagic4 = 4;
let noMagic100 = 100;
let noMagic400 = 400;
let noMagic12 = 12;
let noMagic13 = 13;
let noMagic2 = 2;
let noMagic3 = 3;
let noMagic5 = 5;
let noMagic6 = 6;
let noMagic7 = 7;

function getAge(bitrhday){
	let today = new Date();
	let diff = new Date(today-bitrhday);
	return diff.getYear()-noMagic70; //70 because of diff in timestamp values
}
// const birthday22 = new Date(2000, 9, 22);
// const birthday29 = new Date(2000, 9, 30);
// console.log(getAge(birthday22)); // 20 (assuming today is the 22nd October) 
// console.log(getAge(birthday29)); // 19 (assuming today is the 22nd October) 

function getWeekDay(dateIn){
	dateIn = new Date(dateIn);
	return dateIn.toLocaleString('en', { weekday: 'long'});
}
// console.log(getWeekDay(Date.now())); // "Thursday" (if today is the 22nd October) 
// console.log(getWeekDay(new Date(2020, 9, 22))); // "Thursday" 

function getProgrammersDay(dateIn){
	let ye = dateIn % noMagic4 === 0 && dateIn % noMagic100 !== 0 || dateIn % noMagic400 === 0 ? noMagic12 : noMagic13;
	let dateOut = new Date(`${dateIn}, 9, ${ye}`);
	return `${ye} Sep, ${dateIn} (${getWeekDay(dateOut)})`;
}
// console.log(getProgrammersDay(2020)); // "12 Sep, 2020 (Saturday)" 
// console.log(getProgrammersDay(2019)); // "13 Sep, 2019 (Friday)"

function howFarIs(strWeekDay){
	let specifiedWeekday = strWeekDay.toLowerCase();
	specifiedWeekday = strWeekDay.charAt(0).toUpperCase() + strWeekDay.slice(1);
	let today = new Date();
	let number;
	switch (specifiedWeekday) {
		case 'Monday':
			number=1;
			break;
		case 'Tuesday':
			number=noMagic2;
			break;
		case 'Wednesday':
			number=noMagic3;
			break;
		case 'Thursday':
			number=noMagic4;
			break;
		case 'Friday':
			number=noMagic5;
			break;
		case 'Saturday':
			number=noMagic6;
			break;
		case 'Sunday':
			number=noMagic7;
			break;
		default:
			break;
	}
	let todayDayNumber = today.getDay()===0 ? noMagic7 : today.getDay(); // Sunday - Saturday : 0 - 6
	if(number>todayDayNumber){
		number = number-todayDayNumber;
	} else {
		number = number-todayDayNumber+noMagic7;
	}
	if(getWeekDay(today)!==specifiedWeekday){
		return `It's ${ number } day(s) left till ${ specifiedWeekday }`;
	} else{
		return `Hey, today is ${ specifiedWeekday } =)`;
	}
}
// console.log(howFarIs('friday')); // "It's 1 day(s) left till Friday." (on October 22nd) 
// console.log(howFarIs('Thursday')); // "Hey, today is Thursday =)" (on October 22nd)

function isValidIdentifier(str){
	//let srtRegExp = new RegExp("[\d]", "g");
	let result = /[^\d]/.test(str.charAt(0));
	if(result){
		result = !/[^A-Za-z0-9_$]/g.test(str);
	}
	return result;
}
// console.log(isValidIdentifier('myVar!')); // false 
// console.log(isValidIdentifier('myVar$')); // true 
// console.log(isValidIdentifier('myVar_1')); // true 
// console.log(isValidIdentifier('1_myVar')); // false

function capitalize(str){
	return str.split(/ /g).map(word => `${word.substring(0,1).toUpperCase()}${word.substring(1)}`).join(' ');
}
// const testStr = "My name is John Smith. I am 27."; 
// console.log(capitalize(testStr)); // "My Name Is John Smith. I Am 27."

function isValidAudioFile(str){
	let result = /^([A-Za-z]{1,})+(.mp3|.flac|.alac|.aac)$/gim.test(str);
	return result;
}
// console.log(isValidAudioFile('file.mp4')); // false 
// console.log(isValidAudioFile('my_file.mp3')); // false 
// console.log(isValidAudioFile('file.aac')); // true 

function getHexadecimalColors(str){
	let result = str.match(/#([0-9a-f]{3}|[0-9a-f]{6})+(?=[;\s])/gi)||[];
	return result;
}
// const testString = "color: #3f3; background-color: #AA00ef; and: #abcd"; 
// console.log(getHexadecimalColors(testString)); // ["#3f3", "#AA00ef"] 
// console.log(getHexadecimalColors('red and #0000')); // [];

function isValidPassword(str){
	let result = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/g.test(str);
	return result;
}
// console.log(isValidPassword('agent007')); // false (no uppercase letter) 
// console.log(isValidPassword('AGENT007')); // false (no lowercase letter) 
// console.log(isValidPassword('AgentOOO')); // false (no numbers) 
// console.log(isValidPassword('Age_007')); // false (too short) 
// console.log(isValidPassword('Agent007')); // true

function addThousandsSeparators(str){
	let number = Number(str);
	number = number.toLocaleString('en');
	return number;
}
// console.log(addThousandsSeparators("1234567890")); // "1,234,567,890" 
// console.log(addThousandsSeparators(1234567890)); // "1,234,567,890" 