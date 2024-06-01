var data = location.search
var userName = data.split('?')[1].split('&')[0].split('=')[1].replaceAll("+", " ")


var hedearMsg = document.getElementById('Msg');
hedearMsg.style.fontWeight = "bold"
hedearMsg.style.fontSize = "28px"
hedearMsg.innerHTML = `Welcome ${userName}`
