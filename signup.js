$('#dropdownId').click(()=> {
	$('.dropdown-menu').fadeToggle('slow');
});



const userArr = [];
// const lsUserArr = JSON.stringify(userArr);
localStorage.setItem('userArr', JSON.stringify(userArr));

// console.log(userArr);
var signup = 0;


$('#submit').click(() => {
     let usn = $('#usn').val();
     let pw = $('#pw').val();

     const user = {
		Username: usn,
		Password: pw,
	}

     if(user.Username !== '' && user.Password !== ''){
		
		userArr.push(user);
		localStorage.setItem('userArr', JSON.stringify(userArr));
		window.location='./login.html'
		// console.log(signup);
          // let login = 1;
		// console.log(login);
		
	} else if(user.Username == '' && user.Password == '') {
		alert("Please fulfill your information")
	} else {
		alert("!")}

});
