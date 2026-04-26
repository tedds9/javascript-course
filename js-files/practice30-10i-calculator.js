
    let calculation = JSON.parse(localStorage.getItem('last')) || 0;

      

  let textDisplay = 
    document.querySelector('.textdisplay');

    function updateCalculation(o) {

    console.log(typeof textDisplay.innerHTML);
        calculation += o;  

        textDisplay.innerHTML = calculation;
      localStorage.setItem('last', 
    JSON.stringify(calculation));
    }
  
  