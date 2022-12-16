$('#dropdownId').click(()=> {
	$('.dropdown-menu').fadeToggle('slow');
});



const userArr = JSON.parse(localStorage.getItem('userArr'));

// // const lsUserArr = JSON.stringify(userArr);
// localStorage.setItem('userArr', JSON.stringify(userArr));

// console.log(userArr);
// var signup = 0;


// $('#submit').click(() => {
//      let usn = $('#usn').val();
//      let pw = $('#pw').val();

//      const user = {
// 		Username: usn,
// 		Password: pw,
// 	}

//      if(user.Username !== '' && user.Password !== ''){
		
// 		userArr.push(user);
// 		localStorage.setItem('userArr', JSON.stringify(userArr));
// 		window.location='./login.html'
// 		// console.log(signup);
//           // let login = 1;
// 		// console.log(login);
		
// 	} else {
// 		alert("Please fulfill your information")
// 	}

// });

$('#submitLogin').click(() => {
	let usn = $('#usn').val();
     let pw = $('#pw').val();
     console.log(usn + pw);
	for (let a = 0; a <= userArr.length - 1; a++){
		if (userArr[a].Username == usn && userArr[a].Password == pw){
			// window.location='./INdex.html'
			alert('logged in')
		} else {
			alert("Username or password incorrecr, please try again.")
		}	
	}

});