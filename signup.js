$('#dropdownId').click(()=> {
	$('.dropdown-menu').fadeToggle('slow');
});



const userArr = [];
// const lsUserArr = JSON.stringify(userArr);
localStorage.setItem('userArr', JSON.stringify(userArr));

// console.log(userArr);
// var signup = 0;


$('#submit').click(() => {
     let usn = $('#usn').val();
     let pw = $('#pw').val();

     const user = {
		Username: usn,
		Password: pw,
	}

     if(user.Username !== '' && user.Password !== ''){
		// if(){
			userArr.push(user);
			localStorage.setItem('userArr', JSON.stringify(userArr));
			// window.location='./login.html'
			// console.log(userArr);
			// let login = 1;
			// console.log(login);
			$('.form').css({'display': 'none '})
			//event.preventDefault($('.form2'))
			$('.form2').css({'display': 'block '})

			
		//}
		
		
	} else {
		alert("Please fulfill your information")
		window.location='./signup.html'
	}

});
console.log(userArr);

$('#submitLogin').click(() => {
	let usn = $('#usnL').val();
     let pw = $('#pwL').val();

	for (let a = 0; a < userArr.length; a++){
		if (userArr[a].Username == usn && userArr[a].Password == pw){
			// window.location='./INdex.html'
			alert('logged in')
		} else {
			alert("Username or password incorrect , please try again.")
		}
		
	}

});