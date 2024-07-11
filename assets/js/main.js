let images = [
  "vibrent_1.png",
  "vibrent_2.png",
  "vibrent_3.png",
  "vibrent_4.png",
  "vibrent_5.png",
  "vibrent_6.png",
  "vibrent_7.png",
  "vibrent_8.png",
  "vibrent_9.png",
  "vibrent_10.png",
  "vibrent_11.png",
  "vibrent_12.png",
  "vibrent_13.png",
  "vibrent_14.png",
  "vibrent_15.png",
  "vibrent_16.png",
  "vibrent_17.png",
  "vibrent_18.png",
  "vibrent_19.png",
  "vibrent_20.png",
  "vibrent_21.png",
  "vibrent_22.png",
  "vibrent_23.png",
  "vibrent_24.png",
  "vibrent_25.png",
  "vibrent_26.png",
  "vibrent_27.png",
  "3d_1.png",
  "3d_2.png",
  "3d_3.png",
  "3d_4.png",
  "3d_5.png",
  "bluey_1.png",
  "bluey_2.png",
  "bluey_3.png",
  "bluey_4.png",
  "bluey_5.png",
  "bluey_6.png",
  "bluey_7.png",
  "bluey_8.png",
  "bluey_9.png",
  "bluey_10.png",
  "memo_1.png",
  "memo_2.png",
  "memo_3.png",
  "memo_4.png",
  "memo_5.png",
  "memo_6.png",
  "memo_7.png",
  "memo_8.png",
  "memo_9.png",
  "memo_10.png",
  "memo_11.png",
  "memo_12.png",
  "memo_13.png",
  "memo_14.png",
  "memo_15.png",
  "memo_16.png",
  "memo_17.png",
  "memo_18.png",
  "memo_19.png",
  "memo_20.png",
  "memo_21.png",
  "memo_22.png",
  "memo_23.png",
  "memo_24.png",
  "memo_25.png",
  "memo_26.png",
  "memo_27.png",
  "memo_28.png",
  "memo_29.png",
  "memo_30.png",
  "memo_31.png",
  "memo_32.png",
  "memo_33.png",
  "memo_34.png",
  "memo_35.png",
  "notion_1.png",
  "notion_2.png",
  "notion_3.png",
  "notion_4.png",
  "notion_5.png",
  "notion_6.png",
  "notion_7.png",
  "notion_8.png",
  "notion_9.png",
  "notion_10.png",
  "notion_11.png",
  "notion_12.png",
  "notion_13.png",
  "notion_14.png",
  "notion_15.png",
  "teams_1.png",
  "teams_2.png",
  "teams_3.png",
  "teams_4.png",
  "teams_5.png",
  "teams_6.png",
  "teams_7.png",
  "teams_8.png",
  "teams_9.png",
  "toon_1.png",
  "toon_2.png",
  "toon_3.png",
  "toon_4.png",
  "toon_5.png",
  "toon_6.png",
  "toon_7.png",
  "toon_8.png",
  "toon_9.png",
  "toon_10.png",
  "upstream_1.png",
  "upstream_2.png",
  "upstream_3.png",
  "upstream_4.png",
  "upstream_5.png",
  "upstream_6.png",
  "upstream_7.png",
  "upstream_8.png",
  "upstream_9.png",
  "upstream_10.png",
  "upstream_11.png",
  "upstream_12.png",
  "upstream_13.png",
  "upstream_14.png",
  "upstream_15.png",
  "upstream_16.png",
  "upstream_17.png",
  "upstream_18.png",
  "upstream_19.png",
  "upstream_20.png",
  "upstream_21.png",
  "upstream_22.png",
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
  imgsContainer.innerHTML = images
    .map((image, i) => {
      let color = Math.floor(Math.random() * colors.length);
      return `<div class='images__image' style="background-color: ${colors[color]}">
          <img src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/${image}"  class="images__image__img" style="background-color: ${colors[color]}; border-radius: 50%" alt='memojis' />
          <div class='image__control__buttons'>
            <div class="hor">
              <button class="image__control__button" onclick="copy('https://cdn.jsdelivr.net/gh/alohe/memojis/png/${image}', this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
              <a href="assets/imgs/${image}" download>
                <button class='image__control__button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download-cloud"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>
                </button>
              </a>
            </div>
            <input readonly onclick="copy('${colors[color]}', this); this.select()" type="text" class="image__control__input" value="${colors[color]}" />
          </div>
        </div>
      `;
    })
    .join("");
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

// flip though images list .flip-though which is an img tag
let flipThough = document.querySelector(".flip-though");

let i = 0;
let interval = setInterval(() => {
  flipThough.src = `https://cdn.jsdelivr.net/gh/alohe/memojis/png/${images[i]}`;
  i++;
  if (i === images.length) {
    i = 0;
  }
}, 100);

function randomize(arr) {
  let shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled;
}

async function fetchGithubStarCount() {
  await fetch("https://api.github.com/repos/alohe/avatars")
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll(".github-stars").forEach((el) => {
        el.innerHTML = data.stargazers_count || 39;
      });
    });
}

// get github star and push count to #github-stars tag
async function fetchGithubStars() {
  const baseUrl = "https://api.github.com/repos/alohe/avatars/stargazers";
  const perPage = 100;
  let page = 1;
  let stargazers = [];
  let hasMorePages = true;

  while (hasMorePages) {
    const response = await fetch(`${baseUrl}?per_page=${perPage}&page=${page}`);
    const data = await response.json();

    if (data.length > 0) {
      stargazers = stargazers.concat(data);
      page += 1;
    } else {
      hasMorePages = false;
    }
  }

  let gazersContainer = document.querySelector("#stargazers");
  stargazers = randomize(stargazers);

  stargazers.forEach((gazer) => {
    gazersContainer.innerHTML += `
      <a 
        href="${gazer.html_url}" 
        class="gazer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="${gazer.avatar_url}" alt="gazer"
          class="gazer__img"
         />
        <span class="gazer__name">${gazer.login}</span>
      </a>
    `;
  });
}

function randomize(array) {
  return array.sort(() => Math.random() - 0.5);
}

fetchGithubStars();

fetchGithubStarCount();
