let letGoBtn = document.querySelector('.buy-btn');



letGoBtn.addEventListener('click', () => {
    if(letGoBtn.click){
        window.location.href = 'access.html';
    }else{
        window.location.href = 'index.html';
    }
})