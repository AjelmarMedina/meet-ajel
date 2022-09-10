window.onload = () => {
    setTimeout(typeSubtitleEffect, 2000);
}

async function typeSubtitleEffect() {
    let pointer = document.querySelector("#subtitle-type_pointer-main");
    
    let subtitleMain = "Web Developer".split("");
    let  subtitleMainSpan = document.querySelector("#subtitle-main");
    
    let subtitleStats = `Age: 17, Height: 5'7" (170cm), Section: CP G 12 - Bethesda`.split("");
    let subtitleStatsSpan = document.querySelector("#subtitle-stats");
    
    subtitleMainSpan.innerHTML = ""
    await typeSubtitle(subtitleMain, subtitleMainSpan);
    await sleep(400)
    
    pointer.innerHTML = "";
    pointer = document.querySelector("#subtitle-type_pointer-stats");
    pointer.innerHTML = "_";
    
    await typeSubtitle(subtitleStats, subtitleStatsSpan);
}
async function typeSubtitle(text, textSpan) {
    for (let letter = 0; letter < text.length; letter++) {
        textSpan.innerHTML += text[letter];
        await sleep(60)
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}