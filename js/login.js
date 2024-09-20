//step - 1 set event handler
document.getElementById('login-btn')
     .addEventListener('click', function(event){
         // step-2: prevent default behavior (prevent reloading browser)
       event.preventDefault(); 
       console.log('login button clicked')
       // step - 3 get the phone number
       const phoneNumber = document.getElementById('phone-number').value;
       console.log(phoneNumber);
       // step - 4 get the pin
       const pinCode = document.getElementById('pin-code').value;
       console.log(pinCode);

        // step-5: validate phone and Pin
        // this is temporary. You should do like this.

         if(phoneNumber=== '5' && pinCode === '1234'){
             console.log('you are logged in');
             // step -6: allow user to use the website
         }
         else{
             alert('Wrong phone number or Pin');
         }
})