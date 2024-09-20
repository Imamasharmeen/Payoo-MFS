document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const  addMoneyInput = document.getElementById('amount-money').value;
        console.log(addMoneyInput);
        const  pinCodeInput = document.getElementById('pin-code-input').value;
        console.log(pinCodeInput);
})