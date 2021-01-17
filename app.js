const panels = document.querySelectorAll(".panel");
const twitchPanel = document.querySelector("#twitchPanel");
const followPanel = document.querySelector("#followPanel");
const twitchPanelItem = document.querySelector("#twitchPanelContentItem");

const twitchPlayer = document.querySelector("#twitchPlayer");
const youTubeDiv = document.querySelector("#youtubeContent");
const instagramDiv = document.querySelector("#instagramContent");
const twitterDiv = document.querySelector("#twitterContent");

const twitchWidth = 640;
const twitchHeight = 480;

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");

    if (twitchPanel.classList.contains("active")) {
      console.log("Twitch activate!");
      setTimeout(ShowTwitchEmbed, 1500);
    } else {
      console.log("Twitch deactivate!");
      HideTwitchEmbed();
    }

    if(followPanel.classList.contains("active")){
      setTimeout(ShowFollowContent, 1500);
    }else{
      HideFollowContent();
    }
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    }
  });
}

function ShowTwitchEmbed() {
  let twitchSmallVideo = `
  <iframe
    src="https://player.twitch.tv/?avanicolexd&parent=avanicolexd.com"
    height="<height>"
    width="<width>"
    allowfullscreen="<allowfullscreen>">
</iframe>
  `;


  twitchPlayer.innerHTML = `<div id="twitch-embed"></div><h3><a class="support-link" href="https://streamlabs.com/avanicolexd/tip">Want to support me?</a></h3>`;
  //twitchPlayer.innerHTML = twitchSmallVideo;
  let embed = new Twitch.Embed("twitch-embed", {
    width: twitchWidth,
    height: twitchHeight,
    autoplay: true,
    channel: "avanicolexd",
  });

  let player = embed.player;
}

function HideTwitchEmbed() {
  twitchPlayer.innerHTML = "Player loading...";
}

function ShowFollowContent() {
  youTubeDiv.classList.remove("inactive");
  instagramDiv.classList.remove("inactive");
}

function HideFollowContent() {
  youTubeDiv.classList.add("inactive");
  instagramDiv.classList.add("inactive");
}