document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        //console.log('cash out');
    const cashOutAmount = document.getElementById('cash-out-amount-money').value;
    const cashOutPin = document.getElementById('cash-out-pin-code-input').value;
    //console.log(cashOutPin );
    if(cashOutPin === '1234'){
        //console.log('cash out to your account.');
        const recentBalance = document.getElementById('account-balance').innerText
        //console.log(recentBalance)
        const cashOutNumber = parseFloat(cashOutAmount);
        const recentBalanceNumber = parseFloat(recentBalance);
        const balanceAfterCashOut = recentBalanceNumber-cashOutNumber;
        console.log(balanceAfterCashOut);

        document.getElementById('account-balance').innerText = balanceAfterCashOut
        //console.log('cash out')
    }
    else(
        alert('Failed to cash out!Please try again')
    )

})