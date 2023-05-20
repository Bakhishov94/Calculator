let display = document.querySelector('.displayy');
let keys = document.querySelectorAll('.butt');
let calc = document.querySelector('.calc');
let point = document.querySelector('.point');
let button = document.querySelector('.button');
let h3 = document.querySelector('.h3');
let plus = document.querySelector('.plus');
let sound = document.querySelector('.sound');
let operators = document.querySelectorAll('.operator');
let image = document.querySelector('.image');

keys.forEach(item => {
  item.addEventListener('click', function (e) {
    let num = item.children[0].innerText;
    sound.play()
    if (!['+', '-', '*', '/'].includes(display.value.slice(-1)) && ['+', '-', '*', '/'].includes(num)) {
      display.value += num;
    }
    if (num !== '=' && !['+', '-', '*', '/'].includes(num)) {
      display.value += num;
    }
    if (num === 'C') {
      display.value = '';
    }
    if (num === '=') {
      display.value = eval(display.value);
    }

    item.style.animation = 'butt 0.7s'
    item.addEventListener('animationend', function (e) {
      item.style.animation = '';
    })

  })

})
point.addEventListener('click', function () {
  if (point.style.backgroundColor != 'white') {
    point.style.transform = 'translateX(38px)'
    button.style.backgroundColor = 'rgb(33, 148, 156)';
    point.style.backgroundColor = 'white';
    calc.style.backgroundColor = 'white';
    h3.style.color = 'white';
    h3.textContent = 'LiGHT'
    image.src="https://static.vecteezy.com/system/resources/previews/009/304/897/original/sun-icon-set-clipart-design-illustration-free-png.png"
    point.style.boxShadow = '0px 0px 10px orange'
  }
  else {
    point.style.transform = 'translateX(0px)'
    button.style.backgroundColor = 'black';
    point.style.backgroundColor = 'black';
    calc.style.backgroundColor = ' rgba(0, 0, 0, 0.301)';
    h3.style.color = 'black';
    h3.textContent = 'DARK'
    image.src="https://www.lifepng.com/wp-content/uploads/2020/12/Emoji-Moon-png-hd.png"
    point.style.boxShadow = '0px, 0px 3px yellow'
  }

  // point.addEventListener('click', function (e) {
  //   console.log("deyisdi");
  //   point.style.transform = 'translateX(0px)'
  //   button.style.backgroundColor = 'white';
  //   point.style.backgroundColor = 'black';
  //   calc.style.backgroundColor = ' rgba(0, 0, 0, 0.301)';
  // })
})
