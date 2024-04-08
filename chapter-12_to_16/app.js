

// //////////////////////////// Chapter 12 to 13 ////////////////////////////////


//Question   #  1

// var input = prompt('Enter a number or uppercase or lowercase letter')
// var upperCase = input.toUpperCase;
// var lowerCase = input.toLowerCase;
// var numInput = Number(input);
// var charCode = input.charCodeAt(0)
// if (Number.isInteger(numInput) == true) { document.write(`<h1>${input} is a number </h1>`) }
// // 65 to 90 for uppercase
// // 97 to 122 for lowercase
// else if (charCode >= 65 && charCode <= 90) { document.write(`<h1>${input} is an Upercase </h1>`) }
// else if (charCode >= 97 && charCode <= 122) { document.write(`<h1>${input} is an lowerCase </h1>`) }
// else { document.write(`<h1>${input} is a special character </h1>`) }


//Question   #  2

// var num1 = +prompt("Enter A First Number")
// var num2 = +prompt("Enter A Second Number")
// if (num1 === num2) { document.write(`<h1>${num1} are egual to ${num2}</h1>`); }
// else if (num1 > num2) { document.write(`<h1>${num1} The Greater than number ${num2} </h1>`); }
// else if (num1 < num2)
//     document.write(`<h1>${num1} The Less than number ${num2} </h1>`);
// else
//     document.write(`<h1>Please add an integer!</h1>`);

//Question   #  3

// // check if number is greater than 0
// var input = prompt('Enter a number')
// if (input > 0) { document.write(`<h1>The number is positive</h1>`); }
// // check if number is 0
// else if (input == 0) { document.write(`<h1>The number is zero</h1>`); }
// // if number is less than 0
// else { document.write(`<h1>The number is negative</h1>`); }


//Question   #  4

// var char = prompt('Enter a alphabet...')
// if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
// { document.write(`<h1> "${char}" The character is a Vowel</h1>`) }
// else 
// { document.write(`<h1>"${char}" The character is a Consonant</h1>`) }

//Question   #  5 (Username and password validation)

// var user = prompt("Please Enter a user")
// var password = prompt("Please Enter a password")

// if (user == "admin" && password == "admin")
// {document.write(`<h1> Login Sucess fully</h1>`)}
// else if (user != "admin" && password == "admin")
// {document.write(`<h1> Please Valid User Name</h1>`)}
// else if (user == "admin" && password != "admin")
// {document.write(`<h1> Please Valid Password</h1>`)}
// else{document.write(`<h1> Please Input User name and Password`)}

//Question   #  7 (24 clock)

// var user = +prompt("Please Enter A Time in 24 Hour")

// if (user >= 0 && user < 12)
// {document.write(`<h1> Good Morning</h1>`)}
// else if (user >= 12 && user < 17)
// {document.write(`<h1> Good Afternoon</h1>`)}
// else if (user >= 17 && user < 21)
// {document.write(`<h1> Good Evening</h1>`)}
// else if (user >= 21 && user < 23.9)
// {document.write(`<h1> Good Night</h1>`)}
// else {document.write(`<h1> Please valid time beteween 24 hour</h1>`)}


// ///////////////////////////// Chapter 14 to 16 ////////////////////////////////////////////

//  Question # 7

// var degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M .Phil", "PhD"];

// document.write(`<div> <h1>QUALIFICATIONS </h1>
// <ol >
// <li>${degrees[0]}</li>
// <li>${degrees[1]}</li>
// <li>${degrees[2]}</li>
// <li>${degrees[3]}</li>
// <li>${degrees[4]}</li>
// <li>${degrees[5]}</li>
// <li>${degrees[6]}</li>
// <li>${degrees[7]}</li>

// </ol></div>`);

//  Question # 8 (Percentage%)

// var student_Name =["Ammar","Bilal","Usman"];
// var score =[320,230,480];


// document.write(`<h1> Score of  ${student_Name[0]} is equal to ${score[0]} . Percntage : ${score[0]/500*100} % </h1>`)
// document.write(`<h1> Score of  ${student_Name[1]} is equal to ${score[1]} . Percntage : ${score[1]/500*100} % </h1>`)
// document.write(`<h1> Score of  ${student_Name[2]} is equal to ${score[2]} . Percntage : ${score[2]/500*100} % </h1>`)
 
//  Question # 9

//(A) Array unshift method (Add start of array)

// var studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// var returnvalue = studesnts.unshift("Hammad");
// console.log(studesnts);
// console.log(returnvalue);

//(B) Array push method (Add end of array)


// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale = studesnts.push("Umer","Hammad") 
// console.log(studesnts)
// console.log(returnvale)

//(C) Array unshift method (Add two more start of array)
// var studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// var returnvalue = studesnts.unshift("Hammad","Aslam");
// console.log(studesnts);
// console.log(returnvalue);

//(D) Array shift method (Delete start of array)

// var studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// var returnvalue = studesnts.shift();
// console.log(studesnts);
// console.log(returnvalue);

// (E)Array pop method (Delete Last of array)

// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale = studesnts.pop();
// console.log(studesnts);
// console.log(returnvale);


//(F)Array spice method (Add new mid  of array)

// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale = studesnts.splice(1,0,"irshad" );
// console.log(studesnts);
// console.log(returnvale);


//  Question # 11


// var cities =["karachi","Lahore","Islamabad" , "Quetta" , "Pashawar"]
// var returnValue = cities.slice(2,4)
// document.write(`<h2> ${cities}</h2>`)
// document.write(`<h2> ${returnValue}</h2>`)


//  Question # 12

// var arr = ['This' , 'is' ,  'my', 'cat'];
// document.write(`<h2> ${arr}</h2>`)
// document.write(`<h2> ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}</h2>`)

//  Question # 13(First come First out)

// var device =["Keyboard","Mouse","Printer","Monitor"]
// document.write(`<h2> ${device}</h2>`)
// device.shift()
// document.write(`<h2> ${device}</h2>`)
// device.shift()
// document.write(`<h2> ${device}</h2>`)
// device.shift()
// document.write(`<h2> ${device}</h2>`)


//  Question # 14(Last come Last out)

// var device =["Keyboard","Mouse","Printer","Monitor"]
// document.write(`<h2> ${device}</h2>`)
// device.pop()
// document.write(`<h2> ${device}</h2>`)
// device.pop()
// document.write(`<h2> ${device}</h2>`)
// device.pop()
// document.write(`<h2> ${device}</h2>`)


// var brand=["Samsung","Nokia","LG","Motorola"]

// document.write(`<div class="dropdown">
// <button class="dropbtn">Dropdown</button>
// <div class="dropdown-content">
//   <a href="#">${brand[0]}</a>
//   <a href="#">${brand[1]}</a>
//   <a href="#">${brand[2]}</a>
//   <a href="#">${brand[3]}</a>
// </div>
// </div>`)

