document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const  addMoneyInput = document.getElementById('amount-money').value;
        //console.log(addMoneyInput);
        const  pinCodeInput = document.getElementById('pin-code-input').value;
        //console.log(pinCodeInput);
        if(pinCodeInput === '1234'){
            console.log('Adding money to your account.');
            const balance = document.getElementById('account-balance').innerText
            console.log(balance)
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber+balanceNumber;
            console.log(newBalance);

            document.getElementById('account-balance').innerText = newBalance
        }

           
        else(
            alert('Failed to adding money!Please try again')
        )
})