const bot = new Bot("5100445974:AAEm5LXuKGP0A7ZYhhYHnUgbMpEWwUVaDfs", "-1001710448831");
 
// bot.getUpdates()
//   .then(res => {
//     console.log(res.result);
//   })
document.getElementById("form")
.addEventListener("submit", e => {
  e.preventDefault();
 
  const text = document.getElementById("textInput").value;
  const name = document.getElementById("name").value;

  bot.sendFile("#fileInput", `🙋 Yuboruvchi ismi: ${name} %0A🗂 Fayl nomi: ${text}`)
  .then(res => {
    console.log(res); alert('Fayl yuborildi!');
  }) 
})