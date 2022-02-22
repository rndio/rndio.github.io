function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    const a = new Date();
    const b = new Date(Date.parse(atob("MDQvMDkvMjAwNA==")));
    let c = a.getFullYear() - b.getFullYear();
    const d = a.getMonth() - b.getMonth();
    if (d < 0 || (d === 0 && a.getDate() < b.getDate())) { c-- }
    document.getElementById(atob('YWdl')).innerHTML = c + " years old";
})

async function randomQuotes() {
    let response = await fetch("https://api.rndio.my.id/qod/"),
    data = await response.json();
    return data;
}

if (Cookies.get('quote') === undefined) {
    let jam6Pagi = new Date(); jam6Pagi.setDate(jam6Pagi.getDate() + 1),jam6Pagi.setHours(0),jam6Pagi.setMinutes(1),jam6Pagi.setSeconds(1);
    randomQuotes().then(data => {
        Cookies.set('quote', data[0]['q'], { expires: jam6Pagi, path: '' });
        Cookies.set('author', data[0]['a'], { expires: jam6Pagi, path: '' });
        document.getElementById('quote').innerHTML = Cookies.get('quote');
        document.getElementById('author').innerHTML = Cookies.get('author')
    });
} else {
    document.getElementById('quote').innerHTML = Cookies.get('quote');
    document.getElementById('author').innerHTML = Cookies.get('author')
}

