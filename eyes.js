var balls = document.getElementsByClassName("ball");
document.onmousemove = () => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
  }
};

function startGame(){
  document.getElementById('button').style.display = "none";
  makeEye()
  function makeEye() {
    let eyes = document.getElementById('eyes');
    let positionX = 0.7 * Math.random() * window.innerWidth - 240 + 0.15 * window.innerWidth;
    let positionY = 0.7 * Math.random() * window.innerHeight - window.innerHeight / 2 - 120+ 0.15 * window.innerHeight;
    for (let i = 0; i < 2; i++) {
      let neweye = document.createElement('div');
      let neweyeball = document.createElement('div');
      neweye.className = "eye"
      neweye.style.left = positionX + i * 150;
      neweye.style.top = positionY;
      neweyeball.className = "ball"
      eyes.appendChild(neweye).appendChild(neweyeball);
    }

    // remove eye when there are more than 6 eyes
    if (balls.length > 6) { 
      eyes.removeChild(eyes.firstElementChild);  
      eyes.removeChild(eyes.firstElementChild);  
    };

    setTimeout(makeEye, 2000);
  }
}