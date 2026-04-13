    //HAMBURGER dan SIDEBAR
    const menuNav=document.getElementById('menuNav');
    const sidebar=document.getElementById('mySidebar');
    const overlaySidebar=document.getElementById('overlaySidebar');
    const menuItems=document.querySelectorAll('.menu-item');

    function closeSidebar(){
        // Jika lebar layar lebih dari 450px (Desktop/pad), jangan jalankan fungsi ini
        if (window.innerWidth > 450) return;
            menuNav.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlaySidebar.classList.toggle('active'); 
    }
    menuNav.addEventListener('click',closeSidebar);
    overlaySidebar.addEventListener('click',closeSidebar);
    menuItems.forEach(item=>{
    // Cek: Jika ID yang diklik BUKAN darkToggle, baru jalankan closeSidebar
        item.addEventListener('click',()=>{      
            if(item.id !='darkToggle') {
                closeSidebar();
            }
        });
    });


