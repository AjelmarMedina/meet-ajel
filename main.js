window.onload = () => {
  window.scrollTo(0, 0);
  
  if (window.matchMedia(`(prefers-reduced-motion: reduce)`)) {observeInterests()}

  setTimeout(typeSubtitleEffect, 2000);
  setTimeout(() => {
    document.querySelector("body").style.overflowY = "scroll";
  }, 12000);
};

async function typeSubtitleEffect() {
  let pointer = document.querySelector("#subtitle-type_pointer-main");

  let subtitleMain = "Web Developer".split("");
  let subtitleMainSpan = document.querySelector("#subtitle-main");

  let subtitleStats =
    `Age: 17, Height: 5'7", Section: CP G 12 - Bethesda`.split("");
  let subtitleStatsSpan = document.querySelector("#subtitle-stats");

  subtitleMainSpan.innerHTML = "";
  await typeSubtitle(subtitleMain, subtitleMainSpan);
  await sleep(400);

  pointer.innerHTML = "";
  pointer = document.querySelector("#subtitle-type_pointer-stats");
  pointer.innerHTML = "_";

  await typeSubtitle(subtitleStats, subtitleStatsSpan);
}
async function typeSubtitle(text, textSpan) {
  for (let letter = 0; letter < text.length; letter++) {
    textSpan.innerHTML += text[letter];
    await sleep(60);
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function observeInterests() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(async (entry) => {
      const square = entry.target.querySelector('.interests');
      
      if (entry.isIntersecting) {
        await sleep(1000);
        square.classList.add('interests_animation');
      return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('interests_animation');
    });
  });
  
  observer.observe(document.querySelector('.code-interest-wrapper'));
  observer.observe(document.querySelector('.music-interest-wrapper'));
  observer.observe(document.querySelector('.growth-interest-wrapper'));
  observer.observe(document.querySelector('.support-interest-wrapper'));
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
