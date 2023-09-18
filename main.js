async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.innerText = ""
    
    while (true) {
      await node.type('Pauline_Hannah')
      await sleep(2000)
      await node.delete('Pauline Hannah')
      await node.type('A_Web_Designer')
      await sleep(2000)
      await node.delete('A_Web_Designer')
      await node.type('A_programmer')
      await sleep(2000)
      await node.delete('A_programmer')  
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })

  
  init()


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 40;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2 , false);
  ctx.fillStyle = "#6681e3";
  ctx.fill();
  ctx.strokeStyle = "rgba(19, 19, 20)";
  ctx.stroke();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
setInterval(draw, 10);

