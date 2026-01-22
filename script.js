// Sayfa yüklendiğinde çalışacak ana fonksiyon
window.onload = function() {
    const listeElemani = document.getElementById('eser-listesi');
    const aramaInput = document.getElementById('arama');
    const sayac = document.getElementById('stats');

    function eserleriGoster(filtre = '') {
        if (!listeElemani) return;
        
        listeElemani.innerHTML = ''; // Önce temizle

        // data.js içindeki 'eserler' listesini filtrele
        const suzulmusEserler = eserler.filter(item => 
            item.eser.toLowerCase().includes(filtre.toLowerCase()) ||
            item.makam.toLowerCase().includes(filtre.toLowerCase()) ||
            item.bestekâr.toLowerCase().includes(filtre.toLowerCase())
        );

        // Sayacı güncelle (Eğer HTML'de id="stats" varsa)
        if (sayac) {
            sayac.innerText = `Arşivde ${suzulmusEserler.length} eser listeleniyor`;
        }

        // Kartları oluştur
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

    // Arama yapıldıkça listeyi güncelle
    if (aramaInput) {
        aramaInput.addEventListener('input', (e) => {
            eserleriGoster(e.target.value);
        });
    }

    // İlk açılışta hepsini göster
    eserleriGoster();
};
