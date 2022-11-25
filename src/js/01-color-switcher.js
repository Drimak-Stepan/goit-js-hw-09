const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBackgroundColor = {
  id: null,
  start() {
    refs.start.setAttribute('disabled', '');
    this.id = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },

  stop() {
    clearInterval(this.id);
    refs.start.removeAttribute('disabled', '');
  },
};

refs.start.addEventListener(
  'click',
  bodyBackgroundColor.start.bind(bodyBackgroundColor)
);
refs.stop.addEventListener(
  'click',
  bodyBackgroundColor.stop.bind(bodyBackgroundColor)
);
