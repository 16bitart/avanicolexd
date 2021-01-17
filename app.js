const panels = document.querySelectorAll(".panel");
const twitchPanel = document.querySelector("#twitchPanel");
const twitchPanelItem = document.querySelector("#twitchPanelContentItem");

const twitchWidth = 1280;
const twitchHeight = 720;

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");

    if (twitchPanel.classList.contains("active")) {
      console.log("Twitch activate!");
      ShowTwitchEmbed();
    } else {
      console.log("Twitch deactivate!");
      HideTwitchEmbed();
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

  let twitchEmbedding = `<h3 class="panel-header">Twitch</h3>
          <div class="panel-content">
                      <h3 id="online-status" class="status-text">Offline</h3>

            <div class="panel-content-item-twitch">
              <div id="twitch-embed"></div>
          </div>
                    <div class="panel-content-item">
                        <p><a href="https://streamlabs.com/avanicolexd/tip">Want to support me?</a></p>
          </div>`;

  twitchPanel.innerHTML = twitchEmbedding;
  let embed = new Twitch.Embed("twitch-embed", {
    width: twitchWidth,
    height: twitchHeight,
    autoplay: true,
    channel: "avanicolexd",
  });

  let player = embed.player;
  player.HideTwitchEmbed();

}

function HideTwitchEmbed() {
  twitchPanel.innerHTML = `<h3 class="panel-header">Twitch</h3>`;
}
