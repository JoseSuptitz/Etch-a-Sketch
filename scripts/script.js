style_bright = 1

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    this.style.background = 'rgb(' + color.join(', ') + ')';
  } 

function squareAmount() {
   let amount = prompt("Enter the amount of squares (100 maximum):")

   if (isNaN(amount) || amount < 0 || amount > 100) {
    alert("Insert a valid number");
    amount = 0
   }

   container = document.getElementById("container")
   container.innerHTML = '';    

   for(let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.className = "bigger_div"
    container.appendChild(div);
    for(let i = 0; i < amount; i++) {
        let child_div = document.createElement('div');
        child_div.className = "smaller_div"
        child_div.onmouseover = randomColor
        div.appendChild(child_div)
    }
   }
}

  
