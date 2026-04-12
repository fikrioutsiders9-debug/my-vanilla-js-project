     const btnToggle = document.querySelector('#darkToggle');
    const temaTersimpan = localStorage.getItem('theme');
 // Cek Tema
    if (temaTersimpan === 'dark') {
        document.body.classList.add('dark-mode');
        btnToggle.innerText = 'Switch to light';
    }

//Button dark mode
    btnToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode'); //toggle=tombol on off. contains=pengecek apakah darkmode nyala
        let statusTema = document.body.classList.contains('dark-mode') ? 'dark' : 'light'; //TERNARY OPERATOR/SINGKAT IF-ELSE
        this.innerText = statusTema === 'dark' ? 'Switch to light' : 'Switch to dark';
        localStorage.setItem('theme', statusTema);
    })
