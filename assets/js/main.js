let images = [
  {
    img: "1627.png",
  },
  {
    img: "1949.png",
  },
  {
    img: "2529.png",
  },
  {
    img: "2738.png",
  },
  {
    img: "2821.png",
  },
  {
    img: "3201.png",
  },
  {
    img: "3359.png",
  },
  {
    img: "3379.png",
  },
  {
    img: "3552.png",
  },
  {
    img: "4122.png",
  },
  {
    img: "4314.png",
  },
  {
    img: "4937.png",
  },
  {
    img: "5186.png",
  },
  {
    img: "5228.png",
  },
  {
    img: "5372.png",
  },
  {
    img: "5506.png",
  },
  {
    img: "5696.png",
  },
  {
    img: "6287.png",
  },
  {
    img: "6367.png",
  },
  {
    img: "6474.png",
  },
  {
    img: "6643.png",
  },
  {
    img: "6775.png",
  },
  {
    img: "6437.png",
  },
  {
    img: "7016.png",
  },
  {
    img: "7263.png",
  },
  {
    img: "7474.png",
  },
  {
    img: "7644.png",
  },
  {
    img: "7684.png",
  },
  {
    img: "7924.png",
  },
  {
    img: "8145.png",
  },
  {
    img: "8603.png",
  },
  {
    img: "9519.png",
  },
  {
    img: "9575.png",
  },
  {
    img: "9811.png",
  },
  {
    img: "9933.png",
  },
];

let colors = [
  "#CEC3FF",
  "#C8F1FF",
  "#FFD4B8",
  "#E3B8FF",
  "#FFE5B8",
  "#FFDBDE",
  "#FFC7E0",
  "#FFA576",
  "#FFBEB8",
  "#FFF7B8",
  "#FFC2B8",
  "#D1FFF4",
  "#FFD4B8",
  "#FF8A8A",
  "#FFCC8A",
  "#FFCC8A",
  "#FFDBB8",
  "#E0B8FF",
  "#C0D9BF",
  "#EDBBD6",
  "#F6D3BD",
  "#FFF2B9",
  "#FFBEB8",
  "#FFDCB9",
  "#FFC0B8",
  "#FFBFB8",
  "#BFD5CD",
  "#B2AD96",
  "#EDD6A1",
  "#FFDBB8",
  "#FBC2DA",
  "#F7C5BF",
  "#F7C5BF",
  "#DAD0FC",
  "#B8D7FF",
];

function init() {
  let imgsContainer = document.querySelector(".images");
  imgsContainer.innerHTML = images.map((image, i) => {
    return `<div class='images__image' style="background-color: ${colors[i]}">
          <img src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/${image.img}"  class="images__image__img" style="background-color: ${image.color}; border-radius: 50%" alt='memojis' />
          <div class='image__control__buttons'>
            <div class='hor'>
              <button class='image__control__button' onclick="copy('https://cdn.jsdelivr.net/gh/alohe/memojis/png/${image.img}', this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
              <a href='assets/imgs/${image.img}' download>
                <button class='image__control__button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>
                </button>
              </a>
            </div>
            <input readonly onclick="copy('${colors[i]}', this); this.select()" type="text" class="image__control__input" value="${colors[i]}" />
          </div>
        </div>
      `;
  }).join("");
}

init();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const randColors = () => {
  shuffleArray(colors);
  init();
};

const copy = (text, e) => {
  navigator.clipboard.writeText(text);
  if (e) {
    e.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
    `;

    setTimeout(() => {
      e.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    `;
    }, 2000);
  }
};

``;
