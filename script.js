firstName = prompt("Enter your first name:").trim();
secondName = prompt("Enter your second name:").trim();
email = prompt("Enter your email:").replaceAll(" " , "");
lowerEmailCase = email.toLowerCase().replaceAll(" " , "");
dateOfBirth = +prompt("Enter your date of birth:");
notExist = `not valid email ${lowerEmailCase} (symbol @ not exist)`;
firstPlace = `not valid email ${lowerEmailCase} (symbol @ find in first place)`;
lastPlace = `not valid email ${lowerEmailCase} (symbol @ find in last place)`;
today = new Date();
todayYear = today.getFullYear();
age = todayYear - dateOfBirth;
if(lowerEmailCase.indexOf(`@`) == -1){ 
	enteredEmail = notExist;
} else if(!lowerEmailCase.indexOf(`@`)){ 
	enteredEmail = firstPlace;
} else if(lowerEmailCase.indexOf(`@`) === lowerEmailCase.length-1){
	enteredEmail = lastPlace;
} else {
	enteredEmail = lowerEmailCase;
}
document.write(`
    <ul>
        <li>Full name: ${firstName + " " + secondName}</li>
        <li>Email: ${enteredEmail}</li>
        <li>Age: ${age}</li>
    </ul>
`)