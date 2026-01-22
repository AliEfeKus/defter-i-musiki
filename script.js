// En garanti ve basit haliyle listeleme fonksiyonu
function eserleriGoster(filtre = '') {
    const liste = document.getElementById('eser-listesi');
    const sayac = document.getElementById('stats');
    
    if (!liste) return;
    liste.innerHTML = '';

    // data.js'den gelen 'eserler' değişkenini kontrol et
    if (typeof eserler === 'undefined') {
        liste.innerHTML = "<h3>Veri yüklenemedi! data.js dosyasını kontrol edin.</h3>";
        return;
    }

    const filtrelenmiş = eserler.filter(item => 
        item.eser.toLowerCase().includes(filtre.toLowerCase()) ||
        item.makam.toLowerCase().includes(filtre.toLowerCase()) ||
        item.bestekâr.toLowerCase().includes(filtre.toLowerCase())
    );

    if (sayac) sayac.innerText = `Arşivde ${filtrelenmiş.length} eser listeleniyor`;

    filtrelenmiş.forEach(item => {
        const kart = document.createElement('div');
        kart.className = 'eser-kartı';
        kart.innerHTML = `
            <h3>${item.eser}</h3>
            <p><strong>Makam:</strong> ${item.makam}</p>
            <p><strong>Bestekâr:</strong> ${item.bestekâr}</p>
            <a href="${item.resim || item.kaynak}" target="_blank" class="nota-link">Notayı Görüntüle →</a>
        `;
        liste.appendChild(kart);
    });
}

// Arama kutusu için dinleyici
document.getElementById('arama')?.addEventListener('input', (e) => {
    eserleriGoster(e.target.value);
});

// Sayfa açılır açılmaz çalıştır
setTimeout(eserleriGoster, 500);
