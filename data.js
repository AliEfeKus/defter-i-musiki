const eserler = [
    {
        "id": 1,
        "eser": "Sözlü Eser Gülşen-i Ezhar Açtı Her Yana - Basmacı Abdi Efendi - Mahur",
        "makam": "Mahur",
        "bestekâr": "Basmacı Abdi Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/gulsen-i-ezhar-acti-her-yana-basmaci-abdi-efendi-mahur.18885/"
    },
    {
        "id": 2,
        "eser": "Sözlü Eser Yollarda Kalan Gözlerimin Nurunu Yordum - Cavide Hayre Hanım - Karaosmanzade - Hüseyni Aşiran",
        "makam": "Hüseyni Aşiran",
        "bestekâr": "Karaosmanzade",
        "resim": "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width='1062' height='2127' viewBox%3D'0 0 1062 2127'%2F%3E",
        "kaynak": "https://divanmakam.com/forum/yollarda-kalan-gozlerimin-nurunu-yordum-cavide-hayre-hanim-karaosmanzade-huseyni-asiran.38958/"
    },
    {
        "id": 3,
        "eser": "Sözlü Eser Ateş Gibi Bir Nehr Akıyordu ( Parilti) - Cavide Hayre Hanım - Karaosmanzade - Şehnaz Buselik",
        "makam": "Şehnaz Buselik",
        "bestekâr": "Karaosmanzade",
        "resim": "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width='1031' height='2048' viewBox%3D'0 0 1031 2048'%2F%3E",
        "kaynak": "https://divanmakam.com/forum/ates-gibi-bir-nehr-akiyordu-parilti-cavide-hayre-hanim-karaosmanzade-sehnaz-buselik.2876/"
    },
    {
        "id": 4,
        "eser": "Sözlü Eser Ağır Ağır Çıkacaksın Bu Merdivenlerden - Cavide Hayri Hanım (Karaosmanzade) - Şedaraban",
        "makam": "Şedaraban",
        "bestekâr": "Cavide Hayri Hanım (Karaosmanzade)",
        "resim": "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width='1080' height='2154' viewBox%3D'0 0 1080 2154'%2F%3E",
        "kaynak": "https://divanmakam.com/forum/agir-agir-cikacaksin-bu-merdivenlerden-cavide-hayri-hanim-karaosmanzade-sedaraban.399/"
    },
    {
        "id": 5,
        "eser": "Sözlü Eser Abdülkadir ya Kadir ya Geylani - Belirsiz - Hicaz-ı Acem, Hicaz-ı Türki, Hicaz-ı Uşşak",
        "makam": "ı Uşşak",
        "bestekâr": "ı Türki, Hicaz",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/abdulkadir-ya-kadir-ya-geylani-belirsiz-hicaz-i-acem-hicaz-i-turki-hicaz-i-ussak.50/"
    },
    {
        "id": 6,
        "eser": "Sözlü Eser Ben Aşık-ı Mahzun u Perişanı Unutma - Kadri Efendi (Ama) - Nikriz",
        "makam": "Nikriz",
        "bestekâr": "Kadri Efendi (Ama)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ben-asik-i-mahzun-u-perisani-unutma-kadri-efendi-ama-nikriz.4560/"
    },
    {
        "id": 7,
        "eser": "Sözlü Eser Düştüm Aşkın Seline Vardım Bağdat İline - Muzaffer Ozak (Aşki) - Karcığar",
        "makam": "Karcığar",
        "bestekâr": "Muzaffer Ozak (Aşki)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/dustum-askin-seline-vardim-bagdat-iline-muzaffer-ozak-aski-karcigar.12847/"
    },
    {
        "id": 8,
        "eser": "Sözlü Eser Zikrimiz Esrar-ı Hakdır Canımız Hayran-ı Hu - Belirsiz - Hisar",
        "makam": "Hisar",
        "bestekâr": "Belirsiz",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/zikrimiz-esrar-i-hakdir-canimiz-hayran-i-hu-belirsiz-hisar.39548/"
    },
    {
        "id": 9,
        "eser": "Sözlü Eser Mehtap Dalgın Bakıyor - Belirsiz - Hüseyni",
        "makam": "Hüseyni",
        "bestekâr": "Belirsiz",
        "resim": "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width='1959' height='2048' viewBox%3D'0 0 1959 2048'%2F%3E",
        "kaynak": "https://divanmakam.com/forum/mehtap-dalgin-bakiyor-belirsiz-huseyni.67724/"
    },
    {
        "id": 10,
        "eser": "Sözlü Eser Mah Yüzüne Aşıkanım - Dede Efendi - Hicaz",
        "makam": "Hicaz",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/mah-yuzune-asikanim-dede-efendi-hicaz.24959/"
    },
    {
        "id": 11,
        "eser": "Sözlü Eser Merhamet Kıl İftirakın İşledi Ta Canıma - İsak Varon - Hüzzam",
        "makam": "Hüzzam",
        "bestekâr": "İsak Varon",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/merhamet-kil-iftirakin-isledi-ta-canima-isak-varon-huzzam.67731/"
    },
    {
        "id": 12,
        "eser": "Sözlü Eser Meyl Eder Bu Hüsn ile Kim Görse Ey Gül-Fem Seni - Şakir Ağa - Tanburi, Kemani, Hacı İzzet - Ferahnak",
        "makam": "Ferahnak",
        "bestekâr": "Tanburi, Kemani, Hacı İzzet",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/meyl-eder-bu-husn-ile-kim-gorse-ey-gul-fem-seni-sakir-aga-tanburi-kemani-haci-izzet-ferahnak.25828/"
    },
    {
        "id": 13,
        "eser": "Sözlü Eser Bezm-i Alemde Meserret Bana Canan iledir - Sultan III.Selim (İlhami) - Zavil",
        "makam": "Zavil",
        "bestekâr": "Sultan III.Selim (İlhami)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/bezm-i-alemde-meserret-bana-canan-iledir-sultan-iii-selim-ilhami-zavil.5554/"
    },
    {
        "id": 14,
        "eser": "Saz Eseri Peşrev - Belirsiz - Irak",
        "makam": "Irak",
        "bestekâr": "Belirsiz",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/pesrev-belirsiz-irak.40716/"
    },
    {
        "id": 15,
        "eser": "Sözlü Eser Kamet-i Yare Nazar Kıl Nahl-i Mevzun Böyledir - Dellalzade - Muhayyer Buselik",
        "makam": "Muhayyer Buselik",
        "bestekâr": "Dellalzade",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/kamet-i-yare-nazar-kil-nahl-i-mevzun-boyledir-dellalzade-muhayyer-buselik.23284/"
    },
    {
        "id": 16,
        "eser": "Sözlü Eser Batan Gün Kana Benziyor - Sadettin Kaynak - Muhayyer",
        "makam": "Muhayyer",
        "bestekâr": "Sadettin Kaynak",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/batan-gun-kana-benziyor-sadettin-kaynak-muhayyer.4327/"
    },
    {
        "id": 17,
        "eser": "Sözlü Eser Ruhumda Ah Bir Yetim Gülüşü Var - Belirsiz - Segah",
        "makam": "Segah",
        "bestekâr": "Belirsiz",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ruhumda-ah-bir-yetim-gulusu-var-belirsiz-segah.29419/"
    },
    {
        "id": 18,
        "eser": "Sözlü Eser Ne Devlettir Ki Dildarım Sen Oldun - Neşet Ersoy - Bestenigar",
        "makam": "Bestenigar",
        "bestekâr": "Neşet Ersoy",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ne-devlettir-ki-dildarim-sen-oldun-neset-ersoy-bestenigar.26616/"
    },
    {
        "id": 19,
        "eser": "Sözlü Eser Reh-i Aşkında Edip Kaddimi Kütah Gönül - Dede Efendi - Hüzzam",
        "makam": "Hüzzam",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/reh-i-askinda-edip-kaddimi-kutah-gonul-dede-efendi-huzzam.29278/"
    },
    {
        "id": 20,
        "eser": "Sözlü Eser Nice Bir Eşk-i Firakınla Pür Olsun Gözümüz - Ebu-bekir Ağa - Şehnaz",
        "makam": "Şehnaz",
        "bestekâr": "bekir Ağa",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/nice-bir-esk-i-firakinla-pur-olsun-gozumuz-ebu-bekir-aga-sehnaz.27604/"
    },
    {
        "id": 21,
        "eser": "Sözlü Eser Firakınla Ederken Ah ü Nale - İsmail Hakkı Bey (Muallim) - Rekib",
        "makam": "Rekib",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/firakinla-ederken-ah-u-nale-ismail-hakki-bey-muallim-rekib.15039/"
    },
    {
        "id": 22,
        "eser": "Sözlü Eser O Şuha Arz-ı Niyaz Etmeye Şitab Ettim - Ebu-Bekir Ağa - Eviç",
        "makam": "Eviç",
        "bestekâr": "Bekir Ağa",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/o-suha-arz-i-niyaz-etmeye-sitab-ettim-ebu-bekir-aga-evic.28117/"
    },
    {
        "id": 23,
        "eser": "Sözlü Eser Ey Şehinşah-ı Risalet Vey Habib-i Kibriya - İsmail Hakkı Bey (Muallim) - Acem Aşiran",
        "makam": "Acem Aşiran",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ey-sehinsah-i-risalet-vey-habib-i-kibriya-ismail-hakki-bey-muallim-acem-asiran.14582/"
    },
    {
        "id": 24,
        "eser": "Sözlü Eser Ey Resul-i Kibriya Ser-Tac-ı Alem Şah-ı Din - İsmail Hakkı Bey (Muallim) - Hüseyni",
        "makam": "Hüseyni",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ey-resul-i-kibriya-ser-tac-i-alem-sah-i-din-ismail-hakki-bey-muallim-huseyni.14449/"
    },
    {
        "id": 25,
        "eser": "Sözlü Eser Ey Vekil-i Fahr-i Alem Padişah-ı Kam-ran - İsmail Hakkı Bey (Muallim) - Ferahfeza",
        "makam": "Ferahfeza",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ey-vekil-i-fahr-i-alem-padisah-i-kam-ran-ismail-hakki-bey-muallim-ferahfeza.14659/"
    },
    {
        "id": 26,
        "eser": "Sözlü Eser Daim Etsin Hazret-i Sultan Hamid Hanı Hüda - İsmail Hakkı Bey (Muallim) - Hicaz",
        "makam": "Hicaz",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/daim-etsin-hazret-i-sultan-hamid-hani-huda-ismail-hakki-bey-muallim-hicaz.10925/"
    },
    {
        "id": 27,
        "eser": "Sözlü Eser Ey Nebiler Serveri Ahir-Zaman Peygamberi - İsmail Hakkı Bey (Muallim) - Hicaz",
        "makam": "Hicaz",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ey-nebiler-serveri-ahir-zaman-peygamberi-ismail-hakki-bey-muallim-hicaz.14383/"
    },
    {
        "id": 28,
        "eser": "Sözlü Eser Evlerinin Önü Yoldur Yolaktır - İsmail Hakkı Bey (Muallim) - Zavil",
        "makam": "Zavil",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/evlerinin-onu-yoldur-yolaktir-ismail-hakki-bey-muallim-zavil.13749/"
    },
    {
        "id": 29,
        "eser": "Sözlü Eser Bahar Erse Yine Sahra Serapa Lalezar Olsa - Ebu-Bekir Ağa - Muhayyer",
        "makam": "Muhayyer",
        "bestekâr": "Bekir Ağa",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/bahar-erse-yine-sahra-serapa-lalezar-olsa-ebu-bekir-aga-muhayyer.3481/"
    },
    {
        "id": 30,
        "eser": "Sözlü Eser Kavli De Kaddi Gibi Rast Olsa Ol Mehveşin - Ahmet Avni Konuk - Rast",
        "makam": "Rast",
        "bestekâr": "Ahmet Avni Konuk",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/kavli-de-kaddi-gibi-rast-olsa-ol-mehvesin-ahmet-avni-konuk-rast.23684/"
    },
    {
        "id": 31,
        "eser": "Sözlü Eser Çün Doğup Tutdu Cihan Yüzünü Hüsnün Güneşi (III) - İsmail Hakkı Bey (Muallim) - Çargah",
        "makam": "Çargah",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/cun-dogup-tutdu-cihan-yuzunu-husnun-gunesi-iii-ismail-hakki-bey-muallim-cargah.10764/"
    },
    {
        "id": 32,
        "eser": "Sözlü Eser Tehi Sanman Siz Beni Dost Yüzün Görüp Geldim - Ali Şirügani Dede - Eviç",
        "makam": "Eviç",
        "bestekâr": "Ali Şirügani Dede",
        "resim": "https://storage.divanmakam.com/dms3/data/attachments/77/77783-9284f9da7dd5537f3dd48500af75bd4f.jpg",
        "kaynak": "https://divanmakam.com/forum/tehi-sanman-siz-beni-dost-yuzun-gorup-geldim-ali-sirugani-dede-evic.35470/"
    },
    {
        "id": 33,
        "eser": "Sözlü Eser Cepheden Toplar Ejder Gibi Bar-Efgen - İsmail Hakkı Bey (Muallim) - Mahur",
        "makam": "Mahur",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/cepheden-toplar-ejder-gibi-bar-efgen-ismail-hakki-bey-muallim-mahur.9871/"
    },
    {
        "id": 34,
        "eser": "Sözlü Eser Bu Hüsn ile Sen Dilbera Bir Bi-vefa Cananesin - Dede Efendi - Rast",
        "makam": "Rast",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/bu-husn-ile-sen-dilbera-bir-bi-vefa-cananesin-dede-efendi-rast.8860/"
    },
    {
        "id": 35,
        "eser": "Sözlü Eser Bişnev Ez Ney Çün Hikayet Miküned (Ferahfeza Âyîn-i Şerîfi) - Dede Efendi - Ferahfeza",
        "makam": "Ferahfeza",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/bisnev-ez-ney-cun-hikayet-mikuned-ferahfeza-ayin-i-serifi-dede-efendi-ferahfeza.8239/"
    },
    {
        "id": 36,
        "eser": "Sözlü Eser O Gözler Bana Hala Eskisinden Yabancı - Şefik - Hüseyni",
        "makam": "Hüseyni",
        "bestekâr": "Şefik",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/o-gozler-bana-hala-eskisinden-yabanci-sefik-huseyni.27947/"
    },
    {
        "id": 37,
        "eser": "Sözlü Eser Bir Bi-Bedel Şuh-i Cihan - Dede Efendi - Bayati",
        "makam": "Bayati",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/bir-bi-bedel-suh-i-cihan-dede-efendi-bayati.6339/"
    },
    {
        "id": 38,
        "eser": "Sözlü Eser Alem Ağlarken Bütün Benim Dil-i Na-Şadıma - İsmail Hakkı Bey (Muallim) - Suzinak",
        "makam": "Suzinak",
        "bestekâr": "İsmail Hakkı Bey (Muallim)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/alem-aglarken-butun-benim-dil-i-na-sadima-ismail-hakki-bey-muallim-suzinak.1106/"
    },
    {
        "id": 39,
        "eser": "Sözlü Eser Bülaceb Derya-Dil ü (Suzinak Âyîn-i Şerîfi) - Haşim Bey - Müezzinbaşı, Hacı - Suzinak",
        "makam": "Suzinak",
        "bestekâr": "Müezzinbaşı, Hacı",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/bulaceb-derya-dil-u-suzinak-ayin-i-serifi-hasim-bey-muezzinbasi-haci-suzinak.9319/"
    },
    {
        "id": 40,
        "eser": "Sözlü Eser Dil Verip Oldum Mübtela - Ali Rıza Şengel (Eyyubi) - Arazbar",
        "makam": "Arazbar",
        "bestekâr": "Ali Rıza Şengel (Eyyubi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/dil-verip-oldum-mubtela-ali-riza-sengel-eyyubi-arazbar.11758/"
    },
    {
        "id": 41,
        "eser": "Sözlü Eser Bend Oldu Dil Bir Şuh-i Cihane - Dede Efendi - Nühüft",
        "makam": "Nühüft",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/bend-oldu-dil-bir-suh-i-cihane-dede-efendi-nuhuft.5017/"
    },
    {
        "id": 42,
        "eser": "Sözlü Eser Neyleyeyim Dünyayı Bana Allahım Gerek - Belirsiz - Kürdi",
        "makam": "Kürdi",
        "bestekâr": "Belirsiz",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/neyleyeyim-dunyayi-bana-allahim-gerek-belirsiz-kurdi.27567/"
    },
    {
        "id": 43,
        "eser": "Sözlü Eser Cana Seni Ben Mihr-i Vefa Sahibi Sandım - Sinan Mikail - Bayati",
        "makam": "Bayati",
        "bestekâr": "Sinan Mikail",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/cana-seni-ben-mihr-i-vefa-sahibi-sandim-sinan-mikail-bayati.9616/"
    },
    {
        "id": 44,
        "eser": "Saz Eseri Saz Semaisi - Osman Efendi (Neyzen) - Neveser",
        "makam": "Neveser",
        "bestekâr": "Osman Efendi (Neyzen)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/saz-semaisi-osman-efendi-neyzen-neveser.42370/"
    },
    {
        "id": 45,
        "eser": "Sözlü Eser Kurretül Ayn-i Habib-i Kibriyasın Ya Hüseyn - Nuri Bey (Bolahenk) - Hüseyni",
        "makam": "Hüseyni",
        "bestekâr": "Nuri Bey (Bolahenk)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/kurretul-ayn-i-habib-i-kibriyasin-ya-huseyn-nuri-bey-bolahenk-huseyni.24545/"
    },
    {
        "id": 46,
        "eser": "Sözlü Eser Ey Şehr-i Nüzul-i Sure Bais Oldun Çok Sürure - Nuri Bey (Bolahenk) - Acem Aşiran",
        "makam": "Acem Aşiran",
        "bestekâr": "Nuri Bey (Bolahenk)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ey-sehr-i-nuzul-i-sure-bais-oldun-cok-surure-nuri-bey-bolahenk-acem-asiran.14587/"
    },
    {
        "id": 47,
        "eser": "Sözlü Eser Cemalin Aleme Mihr-i Münevver ya Resulallah - Nuri Bey (Bolahenk) - Eviç",
        "makam": "Eviç",
        "bestekâr": "Nuri Bey (Bolahenk)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/cemalin-aleme-mihr-i-munevver-ya-resulallah-nuri-bey-bolahenk-evic.9814/"
    },
    {
        "id": 48,
        "eser": "Saz Eseri Saz Semaisi - Muhittin Erev - Bayati",
        "makam": "Bayati",
        "bestekâr": "Muhittin Erev",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/saz-semaisi-muhittin-erev-bayati.43054/"
    },
    {
        "id": 49,
        "eser": "Sözlü Eser Kâkülünü Çözersin (Beyoğlunda Gezersin) Gözlerini Süzersin - Rıza Bey - Giriftzen - Mahur",
        "makam": "Mahur",
        "bestekâr": "Giriftzen",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/kakulunu-cozersin-beyoglunda-gezersin-gozlerini-suzersin-riza-bey-giriftzen-mahur.5549/"
    },
    {
        "id": 50,
        "eser": "Sözlü Eser Tuti-i Mucize-Guyem Ne Desem Laf Değil - Koca Osman Efendi - Segah",
        "makam": "Segah",
        "bestekâr": "Koca Osman Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/tuti-i-mucize-guyem-ne-desem-laf-degil-koca-osman-efendi-segah.35771/"
    },
    {
        "id": 51,
        "eser": "Sözlü Eser Gözümde Özleyiş Gönlümde Acı - Selahattin İnal - Buselik",
        "makam": "Buselik",
        "bestekâr": "Selahattin İnal",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/gozumde-ozleyis-gonlumde-aci-selahattin-inal-buselik.18249/"
    },
    {
        "id": 52,
        "eser": "Sözlü Eser Hamd Ane ki Kıldı Halka Rahmet (Bestenigar Âyîn-i Şerîfi) - Hüseyin Sadettin Arel - Bestenigar",
        "makam": "Bestenigar",
        "bestekâr": "Hüseyin Sadettin Arel",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/hamd-ane-ki-kildi-halka-rahmet-bestenigar-ayin-i-serifi-huseyin-sadettin-arel-bestenigar.19813/"
    },
    {
        "id": 53,
        "eser": "Sözlü Eser Yine Ahlar Etti Peyda - Dede Efendi - Rast",
        "makam": "Rast",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/yine-ahlar-etti-peyda-dede-efendi-rast.38580/"
    },
    {
        "id": 54,
        "eser": "Sözlü Eser Bir Gören Yok Bilmiyorlar Nerdesin - Mesud Cemil - Sultani Yegah",
        "makam": "Sultani Yegah",
        "bestekâr": "Mesud Cemil",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/bir-goren-yok-bilmiyorlar-nerdesin-mesud-cemil-sultani-yegah.6779/"
    },
    {
        "id": 55,
        "eser": "Sözlü Eser Aşıkların Eğlencesi İsm-i Zatın ya Rabbena - Belirsiz - Gerdaniye",
        "makam": "Gerdaniye",
        "bestekâr": "Belirsiz",
        "resim": "https://storage.divanmakam.com/dms3/data/attachments/79/79207-22cc4b8e74fedd308fb65671cb4d532d.jpg",
        "kaynak": "https://divanmakam.com/forum/asiklarin-eglencesi-ism-i-zatin-ya-rabbena-belirsiz-gerdaniye.2092/"
    },
    {
        "id": 56,
        "eser": "Sözlü Eser Solgun Durma İsteklen - Münir Nurettin Selçuk - Hüzzam",
        "makam": "Hüzzam",
        "bestekâr": "Münir Nurettin Selçuk",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/solgun-durma-isteklen-munir-nurettin-selcuk-huzzam.33694/"
    },
    {
        "id": 57,
        "eser": "Sözlü Eser Gel Azmedelim Bu Gece Göksuya Beraber - Sultan III.Selim (İlhami) - Nihavend",
        "makam": "Nihavend",
        "bestekâr": "Sultan III.Selim (İlhami)",
        "resim": "https://storage.divanmakam.com/dms3/data/attachments/78/78348-a6d5d2fbeba7536750ecefc7a7bd6cb7.jpg",
        "kaynak": "https://divanmakam.com/forum/gel-azmedelim-bu-gece-goksuya-beraber-sultan-iii-selim-ilhami-nihavend.15544/"
    },
    {
        "id": 58,
        "eser": "Sözlü Eser Senden Bilirim Yok Bana Bir Faide Ey Gül - Ali Efendi (Tanburi) - Hüseyni",
        "makam": "Hüseyni",
        "bestekâr": "Ali Efendi (Tanburi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/senden-bilirim-yok-bana-bir-faide-ey-gul-ali-efendi-tanburi-huseyni.31401/"
    },
    {
        "id": 59,
        "eser": "Sözlü Eser Seyr-i Mehtab Edelim Gel Bu Şeb Ey Mehlika - Mehmet Yürü (Nasibin) - Acem Kürdi",
        "makam": "Acem Kürdi",
        "bestekâr": "Mehmet Yürü (Nasibin)",
        "resim": "https://storage.divanmakam.com/dms3/data/attachments/79/79203-34768484e5d71d06d87aa5c916a97c29.jpg",
        "kaynak": "https://divanmakam.com/forum/seyr-i-mehtab-edelim-gel-bu-seb-ey-mehlika-mehmet-yuru-nasibin-acem-kurdi.33407/"
    },
    {
        "id": 60,
        "eser": "Sözlü Eser Allah Allah Hu İleyke Netevve Hu - Ali Ufki - Hüseyni",
        "makam": "Hüseyni",
        "bestekâr": "Ali Ufki",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/allah-allah-hu-ileyke-netevve-hu-ali-ufki-huseyni.1223/"
    },
    {
        "id": 61,
        "eser": "Sözlü Eser Zat-ı Pak-i Mustafa'ya Aşıkım - Mustafa Hakan Alvan - Hicaz",
        "makam": "Hicaz",
        "bestekâr": "Mustafa Hakan Alvan",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/zat-i-pak-i-mustafaya-asikim-mustafa-hakan-alvan-hicaz.71725/"
    },
    {
        "id": 62,
        "eser": "Sözlü Eser Lal Olursun Söylesem Bir Fıkra Tab-ı Sineden - Münir Nurettin Selçuk - Nihavend",
        "makam": "Nihavend",
        "bestekâr": "Münir Nurettin Selçuk",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/lal-olursun-soylesem-bir-fikra-tab-i-sineden-munir-nurettin-selcuk-nihavend.24745/"
    },
    {
        "id": 63,
        "eser": "Sözlü Eser Yandı Canım Hicrile Vasl-ı Ruy-i Yar İsterem - Refik Fersan - Tanburi - Selmek",
        "makam": "Selmek",
        "bestekâr": "Tanburi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/yandi-canim-hicrile-vasl-i-ruy-i-yar-isterem-refik-fersan-tanburi-selmek.37406/"
    },
    {
        "id": 64,
        "eser": "Sözlü Eser Ey Hüdadan Lutf u İhsan İsteyen - Kani Karaca - Hafız - Rast",
        "makam": "Rast",
        "bestekâr": "Hafız",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ey-hudadan-lutf-u-ihsan-isteyen-kani-karaca-hafiz-rast.14237/"
    },
    {
        "id": 65,
        "eser": "Saz Eseri Saz Semaisi - Belirsiz - Irak",
        "makam": "Irak",
        "bestekâr": "Belirsiz",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/saz-semaisi-belirsiz-irak.42865/"
    },
    {
        "id": 66,
        "eser": "Sözlü Eser Gönül Avare Kaldı Yar Elinden - Zeki Arif Ataergin - Sipihr",
        "makam": "Sipihr",
        "bestekâr": "Zeki Arif Ataergin",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/gonul-avare-kaldi-yar-elinden-zeki-arif-ataergin-sipihr.17173/"
    },
    {
        "id": 67,
        "eser": "Sözlü Eser Çün Sana Gönlüm Müptela Düştü - Hafız Post (Mehmed Çelebi, İmamzade) - Hüseyni",
        "makam": "Hüseyni",
        "bestekâr": "Hafız Post (Mehmed Çelebi, İmamzade)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/cun-sana-gonlum-muptela-dustu-hafiz-post-mehmed-celebi-imamzade-huseyni.10792/"
    },
    {
        "id": 68,
        "eser": "Sözlü Eser Ben Bilmez İdim Gizli Ayan Hep Sen İmişsin - Dede Efendi - Suzinak",
        "makam": "Suzinak",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ben-bilmez-idim-gizli-ayan-hep-sen-imissin-dede-efendi-suzinak.4602/"
    },
    {
        "id": 69,
        "eser": "Sözlü Eser Sen Ey Serv-i Revan Ruhsarı Gülgun - Ali Bey (Enderuni-hanende) - Uşşak",
        "makam": "Uşşak",
        "bestekâr": "hanende)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/sen-ey-serv-i-revan-ruhsari-gulgun-ali-bey-enderuni-hanende-ussak.30966/"
    },
    {
        "id": 70,
        "eser": "Sözlü Eser Aram Edemem Yare Nigah Eylemedikçe - Abdülaziz Efendi (Hekimbaşı) - Bayati",
        "makam": "Bayati",
        "bestekâr": "Abdülaziz Efendi (Hekimbaşı)",
        "resim": "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width='793' height='764' viewBox%3D'0 0 793 764'%2F%3E",
        "kaynak": "https://divanmakam.com/forum/aram-edemem-yare-nigah-eylemedikce-abdulaziz-efendi-hekimbasi-bayati.1659/"
    },
    {
        "id": 71,
        "eser": "Sözlü Eser Ya Men Yuhibbu Eninul Abdi Finnedemi - Ali Efendi (Tanburi) - Rast",
        "makam": "Rast",
        "bestekâr": "Ali Efendi (Tanburi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ya-men-yuhibbu-eninul-abdi-finnedemi-ali-efendi-tanburi-rast.36943/"
    },
    {
        "id": 72,
        "eser": "Sözlü Eser On Kere Demedim Mi Sana Sevme Dokuz Yar - Belirsiz - Eviç",
        "makam": "Eviç",
        "bestekâr": "Belirsiz",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/on-kere-demedim-mi-sana-sevme-dokuz-yar-belirsiz-evic.28351/"
    },
    {
        "id": 73,
        "eser": "Sözlü Eser Her Telden (Dilden) Ol Meh Çalmıyor - Arif Bey (Hacı) - Rast",
        "makam": "Rast",
        "bestekâr": "Arif Bey (Hacı)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/her-telden-dilden-ol-meh-calmiyor-arif-bey-haci-rast.21146/"
    },
    {
        "id": 74,
        "eser": "Sözlü Eser Renc-i Hatır Vermesin Feryad Ü Efganlar Sana - Ali Efendi (Tanburi) - Nişabur",
        "makam": "Nişabur",
        "bestekâr": "Ali Efendi (Tanburi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/renc-i-hatir-vermesin-feryad-u-efganlar-sana-ali-efendi-tanburi-nisabur.29292/"
    },
    {
        "id": 75,
        "eser": "Sözlü Eser Menendin Yok Beyim Bir Meh-likasın - Ali Efendi (Tanburi) - Hicazkar",
        "makam": "Hicazkar",
        "bestekâr": "Ali Efendi (Tanburi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/menendin-yok-beyim-bir-meh-likasin-ali-efendi-tanburi-hicazkar.25525/"
    },
    {
        "id": 76,
        "eser": "Sözlü Eser İzhar Edemem Elbette Sana Aşkımı Halim - Ali Efendi (Tanburi) - Yegah",
        "makam": "Yegah",
        "bestekâr": "Ali Efendi (Tanburi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/izhar-edemem-elbette-sana-askimi-halim-ali-efendi-tanburi-yegah.22641/"
    },
    {
        "id": 77,
        "eser": "Saz Eseri Peşrev - Mehmet Reşat Aysu - Muhayyer Kürdi",
        "makam": "Muhayyer Kürdi",
        "bestekâr": "Mehmet Reşat Aysu",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/pesrev-mehmet-resat-aysu-muhayyer-kurdi.40558/"
    },
    {
        "id": 78,
        "eser": "Sözlü Eser Ben Esir-i Derd-i Hicranım Vefasız Yare Ne - Suphi Ziya Özbekkan - Isfahan",
        "makam": "Isfahan",
        "bestekâr": "Suphi Ziya Özbekkan",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ben-esir-i-derd-i-hicranim-vefasiz-yare-ne-suphi-ziya-ozbekkan-isfahan.4727/"
    },
    {
        "id": 79,
        "eser": "Sözlü Eser Gördüm Bugün O Güzeli - Kemani Agop Efendi - Hicazkar",
        "makam": "Hicazkar",
        "bestekâr": "Kemani Agop Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/gordum-bugun-o-guzeli-kemani-agop-efendi-hicazkar.17574/"
    },
    {
        "id": 80,
        "eser": "Saz Eseri Peşrev - Rüştü Eriç - Udi - Yegah",
        "makam": "Yegah",
        "bestekâr": "Udi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/pesrev-rustu-eric-udi-yegah.41687/"
    },
    {
        "id": 81,
        "eser": "Sözlü Eser Derd-i Gamla Geçti Ömrüm Daima Bi-neşeyim - Agopos Alyanak (Kemani) - Şedaraban",
        "makam": "Şedaraban",
        "bestekâr": "Agopos Alyanak (Kemani)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/derd-i-gamla-gecti-omrum-daima-bi-neseyim-agopos-alyanak-kemani-sedaraban.11300/"
    },
    {
        "id": 82,
        "eser": "Sözlü Eser Ya İlahi Senden Uddet - Ali Ufki - Acem",
        "makam": "Acem",
        "bestekâr": "Ali Ufki",
        "resim": "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width='2481' height='3509' viewBox%3D'0 0 2481 3509'%2F%3E",
        "kaynak": "https://divanmakam.com/forum/ya-ilahi-senden-uddet-ali-ufki-acem.36917/"
    },
    {
        "id": 83,
        "eser": "Sözlü Eser Hemişe Dilde Sühan Elde Saz Karımdır - Mustafa Efendi (Tabi) - Sazkar",
        "makam": "Sazkar",
        "bestekâr": "Mustafa Efendi (Tabi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/hemise-dilde-suhan-elde-saz-karimdir-mustafa-efendi-tabi-sazkar.20682/"
    },
    {
        "id": 84,
        "eser": "Sözlü Eser Ah Eylediğim Serv-i Hıramanın İçindir - Bekir Sıdkı Sezgin - Hisar Buselik",
        "makam": "Hisar Buselik",
        "bestekâr": "Bekir Sıdkı Sezgin",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ah-eyledigim-serv-i-hiramanin-icindir-bekir-sidki-sezgin-hisar-buselik.634/"
    },
    {
        "id": 85,
        "eser": "Sözlü Eser Ya Hazret-i Mevlana ya Habiballah Resul-i Halık-i Yekta Tüyi - Belirsiz (Atfen Itrî) - Rast",
        "makam": "Rast",
        "bestekâr": "Belirsiz (Atfen Itrî)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ya-hazret-i-mevlana-ya-habiballah-resul-i-halik-i-yekta-tuyi-belirsiz-atfen-itri-rast.36886/"
    },
    {
        "id": 86,
        "eser": "Saz Eseri Saz Semaisi - Hüseyin Erbay - Nihavend",
        "makam": "Nihavend",
        "bestekâr": "Hüseyin Erbay",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/saz-semaisi-huseyin-erbay-nihavend.44582/"
    },
    {
        "id": 87,
        "eser": "Sözlü Eser Çün Doğup Tuttu Cihan Yüzünü Hüsnün Güneşi(*A) - Itri (Buhurizade Mustafa Efendi) - Rast",
        "makam": "Rast",
        "bestekâr": "Itri (Buhurizade Mustafa Efendi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/cun-dogup-tuttu-cihan-yuzunu-husnun-gunesi-a-itri-buhurizade-mustafa-efendi-rast.10786/"
    },
    {
        "id": 88,
        "eser": "Saz Eseri Saz Semaisi - Şevki Dede (Kudümzenbaşı) - Rast",
        "makam": "Rast",
        "bestekâr": "Şevki Dede (Kudümzenbaşı)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/saz-semaisi-sevki-dede-kudumzenbasi-rast.43188/"
    },
    {
        "id": 89,
        "eser": "Sözlü Eser Can-ı Kullab-ı Ser-i Zülfün Çeker Senden Yana - Itri (Buhurizade Mustafa Efendi) - Nikriz",
        "makam": "Nikriz",
        "bestekâr": "Itri (Buhurizade Mustafa Efendi)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/can-i-kullab-i-ser-i-zulfun-ceker-senden-yana-itri-buhurizade-mustafa-efendi-nikriz.9687/"
    },
    {
        "id": 90,
        "eser": "Sözlü Eser Yandım Yakıldım Ben Nar-ı Aşka - Dede Efendi - Isfahan",
        "makam": "Isfahan",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/yandim-yakildim-ben-nar-i-aska-dede-efendi-isfahan.37442/"
    },
    {
        "id": 91,
        "eser": "Sözlü Eser Menba-ı İlm-i Hüdasın ya Muhammed Mustafa - Rifat - Acem Kürdi",
        "makam": "Acem Kürdi",
        "bestekâr": "Rifat",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/menba-i-ilm-i-hudasin-ya-muhammed-mustafa-rifat-acem-kurdi.25494/"
    },
    {
        "id": 92,
        "eser": "Sözlü Eser Sinemde Bir Tutuşmuş Yanmış Ocağ Olaydı - Belirsiz - Hüseyni",
        "makam": "Hüseyni",
        "bestekâr": "Belirsiz",
        "resim": "https://storage.divanmakam.com/dms3/data/attachments/71/71138-cd6568f4351b4b3c113c718bad77989e.jpg",
        "kaynak": "https://divanmakam.com/forum/sinemde-bir-tutusmus-yanmis-ocag-olaydi-belirsiz-huseyni.33565/"
    },
    {
        "id": 93,
        "eser": "Sözlü Eser Seni Gördükçe Titriyor Yüreğim - Salih Efendi (Kemani-bülbüli) - Hicaz",
        "makam": "Hicaz",
        "bestekâr": "bülbüli)",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/seni-gordukce-titriyor-yuregim-salih-efendi-kemani-bulbuli-hicaz.31647/"
    },
    {
        "id": 94,
        "eser": "Sözlü Eser Söyletme Beni Derdim Büyüktür - Belirsiz - Uşşak",
        "makam": "Uşşak",
        "bestekâr": "Belirsiz",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/soyletme-beni-derdim-buyuktur-belirsiz-ussak.34081/"
    },
    {
        "id": 95,
        "eser": "Sözlü Eser Neş'edir Bâğ-ı Hayâtı Hep Kemâle Erdiren - Bimen Şen (?) - Vech-i Arazbar",
        "makam": "i Arazbar",
        "bestekâr": "Vech",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/nesedir-bag-i-hayati-hep-kemale-erdiren-bimen-sen-vech-i-arazbar.71712/"
    },
    {
        "id": 96,
        "eser": "Sözlü Eser Sular Gibi Çağlarım Ben - Dede Efendi - Gülizar",
        "makam": "Gülizar",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/sular-gibi-caglarim-ben-dede-efendi-gulizar.34188/"
    },
    {
        "id": 97,
        "eser": "Sözlü Eser Su Gibi Çağladığım Derunum Dağladığım (Ciğerim Bağladığım) - Dede Efendi - Hüseyni Aşiran",
        "makam": "Hüseyni Aşiran",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/su-gibi-cagladigim-derunum-dagladigim-cigerim-bagladigim-dede-efendi-huseyni-asiran.34154/"
    },
    {
        "id": 98,
        "eser": "Sözlü Eser Ey Hasret-i Huban-ı Cihan Ruy-i Hôşest (Şevkutarab Âyîn-i Şerîfi) - Dede Efendi - Şevkutarab",
        "makam": "Şevkutarab",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/ey-hasret-i-huban-i-cihan-ruy-i-hosest-sevkutarab-ayin-i-serifi-dede-efendi-sevkutarab.14219/"
    },
    {
        "id": 99,
        "eser": "Sözlü Eser O Mahitabı Acep Gösterir mi Bana Felek - Dede Efendi - Hicaz",
        "makam": "Hicaz",
        "bestekâr": "Dede Efendi",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/o-mahitabi-acep-gosterir-mi-bana-felek-dede-efendi-hicaz.28054/"
    },
    {
        "id": 100,
        "eser": "Sözlü Eser Amade Olur Zevk-i Ceme Zümre-i Rindan - Zekai Dede - Karcığar",
        "makam": "Karcığar",
        "bestekâr": "Zekai Dede",
        "resim": "",
        "kaynak": "https://divanmakam.com/forum/amade-olur-zevk-i-ceme-zumre-i-rindan-zekai-dede-karcigar.1367/"
    }
];
