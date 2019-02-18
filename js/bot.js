const TOKEN = "789587579:AAGzhq163NY7dvgPwH4QfP74VPIc-6zidOw"; // токен от BotFather
const CHAT_ID = -301396001; // chat_id для телеграм

var form = document.querySelector('.form'); // находим в DOM нашу лид-форму
form.addEventListener("submit", function (e) { // прослушиваем форму
    e.preventDefault(); // перехватываем стандартный ответ
    data = new FormData(this); // вместо serialize на jQuery
    sendMsg(data); // передаём данные из формы на отправку
    form.reset();
    UIkit.notification({
        message: '<span uk-icon=\'icon: check\'></span> Murojatingiz yuborildi',
        status: 'success',
        pos: 'top-center',
        timeout: 5000
    });
})

function sendMsg(data) {
    var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'; // токен бота
    var body = JSON.stringify({ // склеиваем объект в JSON строку
        chat_id: CHAT_ID,
        parse_mode: 'Markdown', // разметка сообщений вкл (чтобы использовать *жирный текст*)
        text: '*Saytdan yangi murojat*\n' + '\n\n*Ism va familiya:* ' + data.get("ismFamiliya") + '\n*Telefon:* ' + data.get("telNomer") + '\n*Murojat matni:* ' + data.get("messageText")
    });
    var xhr = new XMLHttpRequest(); // инициализируем AJAX запрос
    xhr.open('POST', url, true); // отправляем наше сообщение методом POST на сервак телеги
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // на всякий случай, оповестим телеграм, что отправили JSON
    xhr.send(body);
}