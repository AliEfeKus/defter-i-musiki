const listeElemani = document.getElementById('eser-listesi');
const aramaInput = document.getElementById('arama');

// Eserleri ekrana basan ana fonksiyon
function eserleriGoster(filtre = '') {
    if (!listeElemani) return;
    listeElemani.innerHTML = ''; 

    const suzulmusEserler = eserler.filter(item => 
        item.eser.toLowerCase().includes(filtre.toLowerCase()) ||
        item.makam.toLowerCase().includes(filtre.toLowerCase()) ||
        item.bestekâr.toLowerCase().includes(filtre.toLowerCase())
    );

    suzulmusEserler.forEach(item => {
        const kart = document.createElement('div');
        kart.className = 'eser-kartı';
        
        kart.innerHTML = `
            <h3>${item.eser}</h3>
            <p><strong>Makam:</strong> ${item.makam}</p>
            <p><strong>Bestekâr:</strong> ${item.bestekâr}</p>
            <a href="${item.resim || item.kaynak}" target="_blank" class="nota-link">Notayı Görüntüle →</a>
        `;
        
        listeElemani.appendChild(kart);
    });
}

// Arama kutusuna her yazıldığında çalışır
if (aramaInput) {
    aramaInput.addEventListener('input', (e) => {
        eserleriGoster(e.target.value);
    });
}

// Sayfa ilk açıldığında verileri çekip göster
eserleriGoster();
