const panels = document.querySelectorAll(".panel");
const twitchPanel = document.querySelector("#twitchPanel");
const followPanel = document.querySelector("#followPanel");
const twitchPanelItem = document.querySelector("#twitchPanelContentItem");

const twitchPlayer = document.querySelector("#twitchPlayer");
const youTubeDiv = document.querySelector("#youtubeContent");
const instagramDiv = document.querySelector("#instagramContent");
const twitterDiv = document.querySelector("#twitterContent");
// const discordEmbed = document.querySelector("#discordEmbed");
const followContent = document.querySelector("#followContent");
const twitchHeader = document.querySelector("#twitchHeader");
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

  twitchHeader.innerHTML = `
              <h3 id="online-status" class="panel-content-item status-text">Offline</h3>
            <h4 class="panel-content-item"><a class="support-link" href="https://streamlabs.com/avanicolexd/tip">Want to support me?</a></h4>
  `;
  twitchPlayer.classList.remove("inactive");
  twitchPlayer.innerHTML = `<div id="twitch-embed"></div>`;
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
  twitchHeader.innerHTML = "";
  twitchPlayer.innerHTML = "Player loading...";
  twitchPlayer.classList.add("inactive");
}

function ShowFollowContent() {
  followContent.classList.remove("inactive");
  youTubeDiv.classList.remove("inactive");
  youTubeDiv.innerHTML = `<iframe 
            width="480" 
            height="270" 
            src="https://www.youtube.com/embed/VO-MMoRKuzQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
              </iframe>`;
  instagramDiv.classList.remove("inactive");

}

function HideFollowContent() {
  followContent.classList.add("inactive");
  youTubeDiv.classList.add("inactive");
  youTubeDiv.innerHTML = "";
  instagramDiv.classList.add("inactive");
}

function ShowDiscordContent() {

}

function HideDiscordContent() {

}