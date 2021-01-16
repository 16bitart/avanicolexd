const panels = document.querySelectorAll('.panel');
const twitchPanel = document.querySelector('#twitch');

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  })
})

function removeActiveClass(){
  panels.forEach(panel =>{
    panel.classList.remove('active');
  });
}


function CreateTwitchPage(){
let twitchWidth = 1280;
let twitchHeight = 720;

let twitchChannel = new Twitch.Embed("twitch-embed", {
  width: twitchWidth,
  height: twitchHeight,
  autoplay: true,
  channel: "avanicolexd",
  // only needed if your site is also embedded on embed.example.com and othersite.example.com
  parent: ["embed.example.com", "othersite.example.com"],
});
}



