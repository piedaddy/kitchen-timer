document.addEventListener('DOMContentLoaded', ()  => {

  const timer = document.querySelector('.timer'); 
  const button = document.querySelector('.button');
  const message = document.querySelector('.message');
  const stop = document.querySelector('.stop');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  let timeID;
  let newMinute; 
  let newSecond;
  let amount;

  button.addEventListener ('click', () => {

  
    amount = (Number(minutes.value) * 60) + (Number(seconds.value));
    newMinute = Math.floor(Number(amount) / 60); 
    newSecond = Number(amount) % 60; 

    timeID = setInterval(() => {

    if (amount >= 0 )  {
        newMinute = Math.floor(Number(amount) / 60); 
        newSecond = Number(amount) % 60; 
        amount -- ;
        timer.textContent = newMinute + ':' + newSecond;
      } else {
        clearInterval(timeID);        
        message.textContent = 'YO ITS DONE';
      }
    
    stop.addEventListener('click', () => 
    clearInterval(timeID));
    
    }, 1000);
  });

});













