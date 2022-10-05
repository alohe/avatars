const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
link.crossOrigin = "anonymous";
document.head.appendChild(link);

function makerTag(info) {
  //  ${info.text.replace(/<[^>]*>?/gm, "")}
  //   remove html tags if they are not <u>, <i> or <b>
  const text = info.text.replace(/<[^uib>]*>?/gm, "");

  document.body.innerHTML += `
      <div class="maker__tag maker__tag__position--${
        info.pos
      } maker__tag__size--${info.size} maker__tag__theme--${info.theme}">
        <a href="${info.url}" class="made__by__link" target="_blank">
            <p class="made__by__text">
                 ${info.text.replace(/<[^>]*>?/gm, "")}
            </p>
        </a>
      </div>
  `;
}

makerTag({
  theme: "dark", // light or dark (default: dark)
  size: "md", // sm, md, lg
  text: "Made with ❤ by Alohe ",
  url: "https://twitter.com/alemalohe",
  pos: "bottom-center", // bottom-left, bottom-right, top-left, top-right, top-center, bottom-center
});
