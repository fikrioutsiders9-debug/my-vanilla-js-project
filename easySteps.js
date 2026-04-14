const steps = [ 
    {
        nama: "Discovery & Briefing", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
        deskripsi: "Free consultation to define your website goals and identify your target audience."
    },
    {
        nama: "Design & Strategy", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
        deskripsi: "I’ll create a clean design concept and a strategy to ensure your site is high-performing."
    },
    {
        nama: "Development (Slicing)", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
        deskripsi: "Coding process begins! Building your site with the latest tech (Vanilla JS/Tailwind)."
    },
    {
        nama: "Testing & Launch", 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3m-3 9l3-3m2-6l7-7M9 15l7-7M15 9l-3-3m-6 6l-3-3m18 0l-3-3"></path></svg>`,
        deskripsi: "Final QC to ensure your site is responsive across all devices before going live."
    }
];

function renderSteps(data = steps) {
    const cardContainer = document.getElementById('easy-steps');
    if (!cardContainer) return;

    const htmlCards = data.map((item, index) => {
        return `
            <div class="cardSteps card-reveal">
                <div class="icon-steps">${item.icon}</div>
                <div class="step-number">0${index + 1}</div>
                <h3>${item.nama}</h3>
                <p>${item.deskripsi}</p>
            </div>`;
    }).join('');

    cardContainer.innerHTML = htmlCards;
}

renderSteps();