const switchButton = document.querySelector('.switchButton');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'ON');
    } else {
        localStorage.setItem('darkMode', 'OFF');
    }
});

if (localStorage.getItem('darkMode') == 'ON') {
    document.body.classList.toggle('dark');
}




/*******************GEAR MENU***********************/
const btn = document.querySelector('.btn')

if (btn) btn.addEventListener('click', e)
const side = document.querySelector('.side')

function e() {
    if (side.classList.contains('active')) {
        side.classList.remove('active')
        btn.classList.remove('active')
    } else {
        side.classList.add('active')
        btn.classList.add('active')
    }
}
















