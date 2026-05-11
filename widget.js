/* ===========================================       

  ACCESSIBILITY WIDGET

  github.com/sinanisler/accessibility-widgets

  github.com/sponsors/sinanisler

=========================================== */

// ===========================================
// TRANSLATIONS
// ===========================================

const TRANSLATIONS = {
  en: {
    accessibilityMenu: 'Accessibility Menu',
    closeAccessibilityMenu: 'Close Accessibility Menu',
    accessibilityTools: 'Accessibility Tools',
    resetAllSettings: 'Reset All Settings',
    screenReader: 'Screen Reader',
    voiceCommand: 'Voice Command',
    textSpacing: 'Text Spacing',
    pauseAnimations: 'Pause Animations',
    hideImages: 'Hide Images',
    dyslexiaFriendly: 'Dyslexia Friendly',
    biggerCursor: 'Bigger Cursor',
    lineHeight: 'Line Height',
    fontSelection: 'Font Selection',
    colorFilter: 'Color Filter',
    textAlign: 'Text Align',
    textSize: 'Text Size',
    highContrast: 'High Contrast',
    defaultFont: 'Default Font',
    noFilter: 'No Filter',
    default: 'Default',
    screenReaderOn: 'Screen reader on',
    screenReaderOff: 'Screen reader off',
    voiceControlActivated: 'Voice control activated',
    notSupportedBrowser: 'is not supported in this browser',
    close: 'Close',
    reset: 'Reset',
    saturation: 'Saturation',
    selectLanguage: 'Select Language'
  },
  de: {
    accessibilityMenu: 'Barrierefreiheitsmenü',
    closeAccessibilityMenu: 'Barrierefreiheitsmenü schließen',
    accessibilityTools: 'Barrierefreiheitswerkzeuge',
    resetAllSettings: 'Alle Einstellungen zurücksetzen',
    screenReader: 'Screenreader',
    voiceCommand: 'Sprachbefehl',
    textSpacing: 'Textabstand',
    pauseAnimations: 'Animationen pausieren',
    hideImages: 'Bilder ausblenden',
    dyslexiaFriendly: 'Legasthenie-freundlich',
    biggerCursor: 'Größerer Cursor',
    lineHeight: 'Zeilenhöhe',
    fontSelection: 'Schriftauswahl',
    colorFilter: 'Farbfilter',
    textAlign: 'Textausrichtung',
    textSize: 'Textgröße',
    highContrast: 'Hoher Kontrast',
    defaultFont: 'Standardschrift',
    noFilter: 'Kein Filter',
    default: 'Standard',
    screenReaderOn: 'Screenreader ein',
    screenReaderOff: 'Screenreader aus',
    voiceControlActivated: 'Sprachsteuerung aktiviert',
    notSupportedBrowser: 'wird in diesem Browser nicht unterstützt',
    close: 'Schließen',
    reset: 'Zurücksetzen',
    saturation: 'Sättigung',
    selectLanguage: 'Sprache wählen'
  },
  es: {
    accessibilityMenu: 'Menú de Accesibilidad',
    closeAccessibilityMenu: 'Cerrar Menú de Accesibilidad',
    accessibilityTools: 'Herramientas de Accesibilidad',
    resetAllSettings: 'Restablecer Todas las Configuraciones',
    screenReader: 'Lector de Pantalla',
    voiceCommand: 'Comando de Voz',
    textSpacing: 'Espaciado de Texto',
    pauseAnimations: 'Pausar Animaciones',
    hideImages: 'Ocultar Imágenes',
    dyslexiaFriendly: 'Amigable para Dislexia',
    biggerCursor: 'Cursor Más Grande',
    lineHeight: 'Altura de Línea',
    fontSelection: 'Selección de Fuente',
    colorFilter: 'Filtro de Color',
    textAlign: 'Alineación de Texto',
    textSize: 'Tamaño de Texto',
    highContrast: 'Alto Contraste',
    defaultFont: 'Fuente Predeterminada',
    noFilter: 'Sin Filtro',
    default: 'Predeterminado',
    screenReaderOn: 'Lector de pantalla activado',
    screenReaderOff: 'Lector de pantalla desactivado',
    voiceControlActivated: 'Control de voz activado',
    notSupportedBrowser: 'no es compatible con este navegador',
    close: 'Cerrar',
    reset: 'Restablecer',
    saturation: 'Saturación',
    selectLanguage: 'Seleccionar Idioma'
  },
  it: {
    accessibilityMenu: 'Menu Accessibilità',
    closeAccessibilityMenu: 'Chiudi Menu Accessibilità',
    accessibilityTools: 'Strumenti di Accessibilità',
    resetAllSettings: 'Ripristina Tutte le Impostazioni',
    screenReader: 'Lettore Schermo',
    voiceCommand: 'Comando Vocale',
    textSpacing: 'Spaziatura Testo',
    pauseAnimations: 'Pausa Animazioni',
    hideImages: 'Nascondi Immagini',
    dyslexiaFriendly: 'Adatto alla Dislessia',
    biggerCursor: 'Cursore Più Grande',
    lineHeight: 'Altezza Linea',
    fontSelection: 'Selezione Font',
    colorFilter: 'Filtro Colore',
    textAlign: 'Allineamento Testo',
    textSize: 'Dimensione Testo',
    highContrast: 'Alto Contrasto',
    defaultFont: 'Font Predefinito',
    noFilter: 'Nessun Filtro',
    default: 'Predefinito',
    screenReaderOn: 'Lettore schermo attivo',
    screenReaderOff: 'Lettore schermo disattivo',
    voiceControlActivated: 'Controllo vocale attivato',
    notSupportedBrowser: 'non è supportato in questo browser',
    close: 'Chiudi',
    reset: 'Ripristina',
    saturation: 'Saturazione',
    selectLanguage: 'Seleziona Lingua'
  },
  fr: {
    accessibilityMenu: 'Menu Accessibilité',
    closeAccessibilityMenu: 'Fermer le Menu Accessibilité',
    accessibilityTools: 'Outils d\'Accessibilité',
    resetAllSettings: 'Réinitialiser Tous les Paramètres',
    screenReader: 'Lecteur d\'Écran',
    voiceCommand: 'Commande Vocale',
    textSpacing: 'Espacement du Texte',
    pauseAnimations: 'Mettre en Pause les Animations',
    hideImages: 'Masquer les Images',
    dyslexiaFriendly: 'Convivial pour la Dyslexie',
    biggerCursor: 'Curseur Plus Grand',
    lineHeight: 'Hauteur de Ligne',
    fontSelection: 'Sélection de Police',
    colorFilter: 'Filtre de Couleur',
    textAlign: 'Alignement du Texte',
    textSize: 'Taille du Texte',
    highContrast: 'Contraste Élevé',
    defaultFont: 'Police par Défaut',
    noFilter: 'Aucun Filtre',
    default: 'Par Défaut',
    screenReaderOn: 'Lecteur d\'écran activé',
    screenReaderOff: 'Lecteur d\'écran désactivé',
    voiceControlActivated: 'Contrôle vocal activé',
    notSupportedBrowser: 'n\'est pas pris en charge dans ce navigateur',
    close: 'Fermer',
    reset: 'Réinitialiser',
    saturation: 'Saturation',
    selectLanguage: 'Sélectionner la Langue'
  },
  ru: {
    accessibilityMenu: 'Меню Доступности',
    closeAccessibilityMenu: 'Закрыть Меню Доступности',
    accessibilityTools: 'Инструменты Доступности',
    resetAllSettings: 'Сбросить Все Настройки',
    screenReader: 'Программа Чтения с Экрана',
    voiceCommand: 'Голосовая Команда',
    textSpacing: 'Межбуквенный Интервал',
    pauseAnimations: 'Приостановить Анимацию',
    hideImages: 'Скрыть Изображения',
    dyslexiaFriendly: 'Для Дислексии',
    biggerCursor: 'Увеличенный Курсор',
    lineHeight: 'Высота Строки',
    fontSelection: 'Выбор Шрифта',
    colorFilter: 'Цветовой Фильтр',
    textAlign: 'Выравнивание Текста',
    textSize: 'Размер Текста',
    highContrast: 'Высокая Контрастность',
    defaultFont: 'Шрифт по Умолчанию',
    noFilter: 'Без Фильтра',
    default: 'По Умолчанию',
    screenReaderOn: 'Программа чтения включена',
    screenReaderOff: 'Программа чтения выключена',
    voiceControlActivated: 'Голосовое управление активировано',
    notSupportedBrowser: 'не поддерживается в этом браузере',
    close: 'Закрыть',
    reset: 'Сбросить',
    saturation: 'Насыщенность',
    selectLanguage: 'Выберите Язык'
  },
  tr: {
    accessibilityMenu: 'Erişilebilirlik Menüsü',
    closeAccessibilityMenu: 'Erişilebilirlik Menüsünü Kapat',
    accessibilityTools: 'Erişilebilirlik Araçları',
    resetAllSettings: 'Tüm Ayarları Sıfırla',
    screenReader: 'Ekran Okuyucu',
    voiceCommand: 'Sesli Komut',
    textSpacing: 'Metin Aralığı',
    pauseAnimations: 'Animasyonları Duraklat',
    hideImages: 'Resimleri Gizle',
    dyslexiaFriendly: 'Disleksi Dostu',
    biggerCursor: 'Daha Büyük İmleç',
    lineHeight: 'Satır Yüksekliği',
    fontSelection: 'Yazı Tipi Seçimi',
    colorFilter: 'Renk Filtresi',
    textAlign: 'Metin Hizalama',
    textSize: 'Metin Boyutu',
    highContrast: 'Yüksek Kontrast',
    defaultFont: 'Varsayılan Yazı Tipi',
    noFilter: 'Filtre Yok',
    default: 'Varsayılan',
    screenReaderOn: 'Ekran okuyucu açık',
    screenReaderOff: 'Ekran okuyucu kapalı',
    voiceControlActivated: 'Sesli kontrol etkinleştirildi',
    notSupportedBrowser: 'bu tarayıcıda desteklenmiyor',
    close: 'Kapat',
    reset: 'Sıfırla',
    saturation: 'Doygunluk',
    selectLanguage: 'Dil Seçin'
  },
  ar: {
    accessibilityMenu: 'قائمة إمكانية الوصول',
    closeAccessibilityMenu: 'إغلاق قائمة إمكانية الوصول',
    accessibilityTools: 'أدوات إمكانية الوصول',
    resetAllSettings: 'إعادة تعيين جميع الإعدادات',
    screenReader: 'قارئ الشاشة',
    voiceCommand: 'الأمر الصوتي',
    textSpacing: 'تباعد النص',
    pauseAnimations: 'إيقاف الرسوم المتحركة مؤقتًا',
    hideImages: 'إخفاء الصور',
    dyslexiaFriendly: 'صديق لعسر القراءة',
    biggerCursor: 'مؤشر أكبر',
    lineHeight: 'ارتفاع الخط',
    fontSelection: 'اختيار الخط',
    colorFilter: 'مرشح الألوان',
    textAlign: 'محاذاة النص',
    textSize: 'حجم النص',
    highContrast: 'تباين عالي',
    defaultFont: 'الخط الافتراضي',
    noFilter: 'بدون مرشح',
    default: 'افتراضي',
    screenReaderOn: 'قارئ الشاشة مفعّل',
    screenReaderOff: 'قارئ الشاشة معطل',
    voiceControlActivated: 'تم تفعيل التحكم الصوتي',
    notSupportedBrowser: 'غير مدعوم في هذا المتصفح',
    close: 'إغلاق',
    reset: 'إعادة تعيين',
    saturation: 'التشبع',
    selectLanguage: 'اختر اللغة'
  },
  hi: {
    accessibilityMenu: 'पहुँच मेनू',
    closeAccessibilityMenu: 'पहुँच मेनू बंद करें',
    accessibilityTools: 'पहुँच उपकरण',
    resetAllSettings: 'सभी सेटिंग्स रीसेट करें',
    screenReader: 'स्क्रीन रीडर',
    voiceCommand: 'वॉयस कमांड',
    textSpacing: 'टेक्स्ट स्पेसिंग',
    pauseAnimations: 'एनिमेशन रोकें',
    hideImages: 'चित्र छिपाएँ',
    dyslexiaFriendly: 'डिस्लेक्सिया के अनुकूल',
    biggerCursor: 'बड़ा कर्सर',
    lineHeight: 'लाइन की ऊँचाई',
    fontSelection: 'फ़ॉन्ट चयन',
    colorFilter: 'रंग फ़िल्टर',
    textAlign: 'टेक्स्ट संरेखण',
    textSize: 'टेक्स्ट का आकार',
    highContrast: 'उच्च कंट्रास्ट',
    defaultFont: 'डिफ़ॉल्ट फ़ॉन्ट',
    noFilter: 'कोई फ़िल्टर नहीं',
    default: 'डिफ़ॉल्ट',
    screenReaderOn: 'स्क्रीन रीडर चालू',
    screenReaderOff: 'स्क्रीन रीडर बंद',
    voiceControlActivated: 'वॉयस नियंत्रण सक्रिय',
    notSupportedBrowser: 'इस ब्राउज़र में समर्थित नहीं है',
    close: 'बंद करें',
    reset: 'रीसेट करें',
    saturation: 'संतृप्ति',
    selectLanguage: 'भाषा चुनें'
  },
  'zh-cn': {
    accessibilityMenu: '辅助功能菜单',
    closeAccessibilityMenu: '关闭辅助功能菜单',
    accessibilityTools: '辅助功能工具',
    resetAllSettings: '重置所有设置',
    screenReader: '屏幕阅读器',
    voiceCommand: '语音命令',
    textSpacing: '文本间距',
    pauseAnimations: '暂停动画',
    hideImages: '隐藏图片',
    dyslexiaFriendly: '阅读障碍友好',
    biggerCursor: '更大的光标',
    lineHeight: '行高',
    fontSelection: '字体选择',
    colorFilter: '颜色滤镜',
    textAlign: '文本对齐',
    textSize: '文本大小',
    highContrast: '高对比度',
    defaultFont: '默认字体',
    noFilter: '无滤镜',
    default: '默认',
    screenReaderOn: '屏幕阅读器已开启',
    screenReaderOff: '屏幕阅读器已关闭',
    voiceControlActivated: '语音控制已激活',
    notSupportedBrowser: '此浏览器不支持',
    close: '关闭',
    reset: '重置',
    saturation: '饱和度',
    selectLanguage: '选择语言'
  },
  jp: {
    accessibilityMenu: 'アクセシビリティメニュー',
    closeAccessibilityMenu: 'アクセシビリティメニューを閉じる',
    accessibilityTools: 'アクセシビリティツール',
    resetAllSettings: 'すべての設定をリセット',
    screenReader: 'スクリーンリーダー',
    voiceCommand: '音声コマンド',
    textSpacing: 'テキスト間隔',
    pauseAnimations: 'アニメーション一時停止',
    hideImages: '画像を非表示',
    dyslexiaFriendly: 'ディスレクシア対応',
    biggerCursor: '大きいカーソル',
    lineHeight: '行の高さ',
    fontSelection: 'フォント選択',
    colorFilter: 'カラーフィルター',
    textAlign: 'テキスト配置',
    textSize: 'テキストサイズ',
    highContrast: 'ハイコントラスト',
    defaultFont: 'デフォルトフォント',
    noFilter: 'フィルターなし',
    default: 'デフォルト',
    screenReaderOn: 'スクリーンリーダーがオン',
    screenReaderOff: 'スクリーンリーダーがオフ',
    voiceControlActivated: '音声制御が有効',
    notSupportedBrowser: 'このブラウザではサポートされていません',
    close: '閉じる',
    reset: 'リセット',
    saturation: '彩度',
    selectLanguage: '言語を選択'
  },
  pt: {
    accessibilityMenu: 'Menu de Acessibilidade',
    closeAccessibilityMenu: 'Fechar Menu de Acessibilidade',
    accessibilityTools: 'Ferramentas de Acessibilidade',
    resetAllSettings: 'Redefinir Configurações',
    screenReader: 'Leitor de Tela',
    voiceCommand: 'Comando de Voz',
    textSpacing: 'Espaçamento de Texto',
    pauseAnimations: 'Pausar Animações',
    hideImages: 'Ocultar Imagens',
    dyslexiaFriendly: 'Fonte para Dislexia',
    biggerCursor: 'Cursor Maior',
    lineHeight: 'Altura da Linha',
    fontSelection: 'Seleção de Fonte',
    colorFilter: 'Filtro de Cor',
    textAlign: 'Alinhamento do Texto',
    textSize: 'Tamanho do Texto',
    highContrast: 'Alto Contraste',
    defaultFont: 'Fonte Padrão',
    noFilter: 'Sem Filtro',
    default: 'Padrão',
    screenReaderOn: 'Leitor de tela ativado',
    screenReaderOff: 'Leitor de tela desativado',
    voiceControlActivated: 'Controle de voz ativado',
    notSupportedBrowser: 'não é suportado neste navegador',
    close: 'Fechar',
    reset: 'Redefinir',
    saturation: 'Saturação',
    selectLanguage: 'Selecionar Idioma'
  },
  bn: {
    accessibilityMenu: 'অ্যাক্সেসিবিলিটি মেনু',
    closeAccessibilityMenu: 'মেনু বন্ধ করুন',
    accessibilityTools: 'অ্যাক্সেসিবিলিটি টুলস',
    resetAllSettings: 'সব সেটিংস রিসেট করুন',
    screenReader: 'স্ক্রিন রিডার',
    voiceCommand: 'ভয়েস কমান্ড',
    textSpacing: 'টেক্সট স্পেসিং',
    pauseAnimations: 'অ্যানিমেশন থামান',
    hideImages: 'ছবি লুকান',
    dyslexiaFriendly: 'ডিসলেক্সিয়া ফ্রেন্ডলি',
    biggerCursor: 'বড় কার্সার',
    lineHeight: 'লাইনের উচ্চতা',
    fontSelection: 'ফন্ট নির্বাচন',
    colorFilter: 'কালার ফিল্টার',
    textAlign: 'লেখা বিন্যাস',
    textSize: 'লেখার আকার',
    highContrast: 'হাই কন্ট্রাস্ট',
    defaultFont: 'ডিফল্ট ফন্ট',
    noFilter: 'কোন ফিল্টার নেই',
    default: 'ডিফল্ট',
    screenReaderOn: 'স্ক্রিন রিডার চালু',
    screenReaderOff: 'স্ক্রিন রিডার বন্ধ',
    voiceControlActivated: 'ভয়েস কন্ট্রোল সক্রিয়',
    notSupportedBrowser: 'এই ব্রাউজারে সমর্থিত নয়',
    close: 'বন্ধ',
    reset: 'রিসেট',
    saturation: 'স্যাচুরেশন',
    selectLanguage: 'ভাষা নির্বাচন করুন'
  },
  ko: {
    accessibilityMenu: '접근성 메뉴',
    closeAccessibilityMenu: '접근성 메뉴 닫기',
    accessibilityTools: '접근성 도구',
    resetAllSettings: '모든 설정 초기화',
    screenReader: '스크린 리더',
    voiceCommand: '음성 명령',
    textSpacing: '텍스트 간격',
    pauseAnimations: '애니메이션 일시 중지',
    hideImages: '이미지 숨기기',
    dyslexiaFriendly: '난독증 배려',
    biggerCursor: '큰 커서',
    lineHeight: '줄 높이',
    fontSelection: '글꼴 선택',
    colorFilter: '색상 필터',
    textAlign: '텍스트 정렬',
    textSize: '텍스트 크기',
    highContrast: '고대비',
    defaultFont: '기본 글꼴',
    noFilter: '필터 없음',
    default: '기본',
    screenReaderOn: '스크린 리더 켜짐',
    screenReaderOff: '스크린 리더 꺼짐',
    voiceControlActivated: '음성 제어 활성화',
    notSupportedBrowser: '이 브라우저에서 지원되지 않습니다',
    close: '닫기',
    reset: '초기화',
    saturation: '채도',
    selectLanguage: '언어 선택'
  },
  vi: {
    accessibilityMenu: 'Menu Trợ năng',
    closeAccessibilityMenu: 'Đóng Menu',
    accessibilityTools: 'Công cụ Trợ năng',
    resetAllSettings: 'Đặt lại Tất cả',
    screenReader: 'Trình đọc màn hình',
    voiceCommand: 'Lệnh giọng nói',
    textSpacing: 'Khoảng cách chữ',
    pauseAnimations: 'Dừng Hoạt ảnh',
    hideImages: 'Ẩn Hình ảnh',
    dyslexiaFriendly: 'Phông chữ dễ đọc',
    biggerCursor: 'Con trỏ lớn',
    lineHeight: 'Chiều cao dòng',
    fontSelection: 'Chọn phông chữ',
    colorFilter: 'Bộ lọc màu',
    textAlign: 'Căn chỉnh văn bản',
    textSize: 'Cỡ chữ',
    highContrast: 'Độ tương phản cao',
    defaultFont: 'Phông chữ mặc định',
    noFilter: 'Không bộ lọc',
    default: 'Mặc định',
    screenReaderOn: 'Bật trình đọc màn hình',
    screenReaderOff: 'Tắt trình đọc màn hình',
    voiceControlActivated: 'Đã kích hoạt điều khiển giọng nói',
    notSupportedBrowser: 'không được hỗ trợ trên trình duyệt này',
    close: 'Đóng',
    reset: 'Đặt lại',
    saturation: 'Độ bão hòa',
    selectLanguage: 'Chọn Ngôn ngữ'
  },
  id: {
    accessibilityMenu: 'Menu Aksesibilitas',
    closeAccessibilityMenu: 'Tutup Menu',
    accessibilityTools: 'Alat Aksesibilitas',
    resetAllSettings: 'Atur Ulang Semua',
    screenReader: 'Pembaca Layar',
    voiceCommand: 'Perintah Suara',
    textSpacing: 'Jarak Teks',
    pauseAnimations: 'Hentikan Animasi',
    hideImages: 'Sembunyikan Gambar',
    dyslexiaFriendly: 'Ramah Disleksia',
    biggerCursor: 'Kursor Besar',
    lineHeight: 'Tinggi Baris',
    fontSelection: 'Pilihan Font',
    colorFilter: 'Filter Warna',
    textAlign: 'Perataan Teks',
    textSize: 'Ukuran Teks',
    highContrast: 'Kontras Tinggi',
    defaultFont: 'Font Default',
    noFilter: 'Tanpa Filter',
    default: 'Default',
    screenReaderOn: 'Pembaca layar aktif',
    screenReaderOff: 'Pembaca layar mati',
    voiceControlActivated: 'Kontrol suara diaktifkan',
    notSupportedBrowser: 'tidak didukung di browser ini',
    close: 'Tutup',
    reset: 'Atur Ulang',
    saturation: 'Saturasi',
    selectLanguage: 'Pilih Bahasa'
  },
  th: {
    accessibilityMenu: 'เมนูการเข้าถึง',
    closeAccessibilityMenu: 'ปิดเมนู',
    accessibilityTools: 'เครื่องมือการเข้าถึง',
    resetAllSettings: 'รีเซ็ตการตั้งค่าทั้งหมด',
    screenReader: 'โปรแกรมอ่านหน้าจอ',
    voiceCommand: 'คำสั่งเสียง',
    textSpacing: 'ระยะห่างข้อความ',
    pauseAnimations: 'หยุดภาพเคลื่อนไหว',
    hideImages: 'ซ่อนรูปภาพ',
    dyslexiaFriendly: 'ฟอนต์สำหรับผู้ที่มีปัญหาการอ่าน',
    biggerCursor: 'เคอร์เซอร์ขนาดใหญ่',
    lineHeight: 'ความสูงบรรทัด',
    fontSelection: 'เลือกฟอนต์',
    colorFilter: 'ตัวกรองสี',
    textAlign: 'การจัดตำแหน่งข้อความ',
    textSize: 'ขนาดข้อความ',
    highContrast: 'ความคมชัดสูง',
    defaultFont: 'ฟอนต์เริ่มต้น',
    noFilter: 'ไม่มีตัวกรอง',
    default: 'ค่าเริ่มต้น',
    screenReaderOn: 'เปิดโปรแกรมอ่านหน้าจอ',
    screenReaderOff: 'ปิดโปรแกรมอ่านหน้าจอ',
    voiceControlActivated: 'เปิดใช้งานการควบคุมด้วยเสียง',
    notSupportedBrowser: 'ไม่รองรับในเบราว์เซอร์นี้',
    close: 'ปิด',
    reset: 'รีเซ็ต',
    saturation: 'ความอิ่มตัวของสี',
    selectLanguage: 'เลือกภาษา'
  },
  pl: {
    accessibilityMenu: 'Menu Dostępności',
    closeAccessibilityMenu: 'Zamknij Menu',
    accessibilityTools: 'Narzędzia Dostępności',
    resetAllSettings: 'Resetuj Ustawienia',
    screenReader: 'Czytnik Ekranu',
    voiceCommand: 'Komendy Głosowe',
    textSpacing: 'Odstępy w Tekście',
    pauseAnimations: 'Zatrzymaj Animacje',
    hideImages: 'Ukryj Obrazki',
    dyslexiaFriendly: 'Dla Dyslektyków',
    biggerCursor: 'Większy Kursor',
    lineHeight: 'Wysokość Linii',
    fontSelection: 'Wybór Czcionki',
    colorFilter: 'Filtr Kolorów',
    textAlign: 'Wyrównanie Tekstu',
    textSize: 'Rozmiar Tekstu',
    highContrast: 'Wysoki Kontrast',
    defaultFont: 'Domyślna Czcionka',
    noFilter: 'Bez Filtra',
    default: 'Domyślne',
    screenReaderOn: 'Czytnik ekranu włączony',
    screenReaderOff: 'Czytnik ekranu wyłączony',
    voiceControlActivated: 'Sterowanie głosem aktywne',
    notSupportedBrowser: 'nie jest obsługiwane w tej przeglądarce',
    close: 'Zamknij',
    reset: 'Resetuj',
    saturation: 'Nasycenie',
    selectLanguage: 'Wybierz Język'
  },
  nl: {
    accessibilityMenu: 'Toegankelijkheidsmenu',
    closeAccessibilityMenu: 'Menu Sluiten',
    accessibilityTools: 'Hulpmiddelen',
    resetAllSettings: 'Minstellingen Resetten',
    screenReader: 'Schermlezer',
    voiceCommand: 'Spraakcommando',
    textSpacing: 'Tekstafstand',
    pauseAnimations: 'Animaties Pauzeren',
    hideImages: 'Afbeeldingen Verbergen',
    dyslexiaFriendly: 'Dyslexie Vriendelijk',
    biggerCursor: 'Grotere Cursor',
    lineHeight: 'Regelhoogte',
    fontSelection: 'Lettertype Selectie',
    colorFilter: 'Kleurfilter',
    textAlign: 'Tekst Uitlijning',
    textSize: 'Tekstgrootte',
    highContrast: 'Hoog Contrast',
    defaultFont: 'Standaard Lettertype',
    noFilter: 'Geen Filter',
    default: 'Standaard',
    screenReaderOn: 'Schermlezer aan',
    screenReaderOff: 'Schermlezer uit',
    voiceControlActivated: 'Spraakbesturing geactiveerd',
    notSupportedBrowser: 'wordt niet ondersteund in deze browser',
    close: 'Sluiten',
    reset: 'Resetten',
    saturation: 'Verzadiging',
    selectLanguage: 'Selecteer Taal'
  },
  el: {
    accessibilityMenu: 'Μενού Προσβασιμότητας',
    closeAccessibilityMenu: 'Κλείσιμο Μενού',
    accessibilityTools: 'Εργαλεία Προσβασιμότητας',
    resetAllSettings: 'Επαναφορά Ρυθμίσεων',
    screenReader: 'Αναγνώστης Οθόνης',
    voiceCommand: 'Φωνητική Εντολή',
    textSpacing: 'Απόσταση Κειμένου',
    pauseAnimations: 'Παύση Κινήσεων',
    hideImages: 'Απόκρυψη Εικόνων',
    dyslexiaFriendly: 'Φιλικό για Δυσλεξία',
    biggerCursor: 'Μεγαλύτερος Δρομέας',
    lineHeight: 'Ύψος Γραμμής',
    fontSelection: 'Επιλογή Γραμματοσειράς',
    colorFilter: 'Φίλτρο Χρώματος',
    textAlign: 'Στοίχιση Κειμένου',
    textSize: 'Μέγεθος Κειμένου',
    highContrast: 'Υψηλή Αντίθεση',
    defaultFont: 'Προεπιλεγμένη Γραμματοσειρά',
    noFilter: 'Χωρίς Φίλτρο',
    default: 'Προεπιλογή',
    screenReaderOn: 'Αναγνώστης οθόνης ενεργός',
    screenReaderOff: 'Αναγνώστης οθόνης ανενεργός',
    voiceControlActivated: 'Φωνητικός έλεγχος ενεργοποιήθηκε',
    notSupportedBrowser: 'δεν υποστηρίζεται σε αυτόν τον περιηγητή',
    close: 'Κλείσιμο',
    reset: 'Επαναφορά',
    saturation: 'Κορεσμός',
    selectLanguage: 'Επιλογή Γλώσσας'
  },
  sv: {
    accessibilityMenu: 'Tillgänglighetsmeny',
    closeAccessibilityMenu: 'Stäng Meny',
    accessibilityTools: 'Verktyg',
    resetAllSettings: 'Återställ Inställningar',
    screenReader: 'Skärmläsare',
    voiceCommand: 'Röstkommando',
    textSpacing: 'Textavstånd',
    pauseAnimations: 'Pausa Animationer',
    hideImages: 'Dölj Bilder',
    dyslexiaFriendly: 'Dyslexi Vänlig',
    biggerCursor: 'Större Markör',
    lineHeight: 'Radhöjd',
    fontSelection: 'Teckensnittsval',
    colorFilter: 'Färgfilter',
    textAlign: 'Textjustering',
    textSize: 'Textstorlek',
    highContrast: 'Hög Kontrast',
    defaultFont: 'Standardteckensnitt',
    noFilter: 'Inget Filter',
    default: 'Standard',
    screenReaderOn: 'Skärmläsare på',
    screenReaderOff: 'Skärmläsare av',
    voiceControlActivated: 'Röststyrning aktiverad',
    notSupportedBrowser: 'stöds inte i denna webbläsare',
    close: 'Stäng',
    reset: 'Återställ',
    saturation: 'Mättnad',
    selectLanguage: 'Välj Språk'
  },
  no: {
    accessibilityMenu: 'Tilgjengelighetsmeny',
    closeAccessibilityMenu: 'Lukk Meny',
    accessibilityTools: 'Verktøy',
    resetAllSettings: 'Nullstill Innstillinger',
    screenReader: 'Skjermleser',
    voiceCommand: 'Talekommando',
    textSpacing: 'Tekstavstand',
    pauseAnimations: 'Pause Animasjoner',
    hideImages: 'Skjul Bilder',
    dyslexiaFriendly: 'Dysleksivennlig',
    biggerCursor: 'Større Markør',
    lineHeight: 'Linjehøyde',
    fontSelection: 'Skrifttype',
    colorFilter: 'Fargefilter',
    textAlign: 'Tekstjustering',
    textSize: 'Tekststørrelse',
    highContrast: 'Høy Kontrast',
    defaultFont: 'Standard Skrifttype',
    noFilter: 'Ingen Filter',
    default: 'Standard',
    screenReaderOn: 'Skjermleser på',
    screenReaderOff: 'Skjermleser av',
    voiceControlActivated: 'Talestyring aktivert',
    notSupportedBrowser: 'støttes ikke i denne nettleseren',
    close: 'Lukk',
    reset: 'Nullstill',
    saturation: 'Metning',
    selectLanguage: 'Velg Språk'
  },
  da: {
    accessibilityMenu: 'Tilgængelighedsmenu',
    closeAccessibilityMenu: 'Luk Menu',
    accessibilityTools: 'Værktøjer',
    resetAllSettings: 'Nulstil Indstillinger',
    screenReader: 'Skærmlæser',
    voiceCommand: 'Stemmekommando',
    textSpacing: 'Tekstafstand',
    pauseAnimations: 'Pause Animationer',
    hideImages: 'Skjul Billeder',
    dyslexiaFriendly: 'Ordblindevenlig',
    biggerCursor: 'Større Markør',
    lineHeight: 'Linjehøjde',
    fontSelection: 'Skrifttype',
    colorFilter: 'Farvefilter',
    textAlign: 'Tekstjustering',
    textSize: 'Tekststørrelse',
    highContrast: 'Høj Kontrast',
    defaultFont: 'Standard Skrifttype',
    noFilter: 'Intet Filter',
    default: 'Standard',
    screenReaderOn: 'Skærmlæser til',
    screenReaderOff: 'Skærmlæser fra',
    voiceControlActivated: 'Stemmestyring aktiveret',
    notSupportedBrowser: 'understøttes ikke i denne browser',
    close: 'Luk',
    reset: 'Nulstil',
    saturation: 'Mætning',
    selectLanguage: 'Vælg Sprog'
  },
  fi: {
    accessibilityMenu: 'Saavutettavuusvalikko',
    closeAccessibilityMenu: 'Sulje Valikko',
    accessibilityTools: 'Työkalut',
    resetAllSettings: 'Nollaa Asetukset',
    screenReader: 'Ruudunluku',
    voiceCommand: 'Äänikomento',
    textSpacing: 'Tekstiväli',
    pauseAnimations: 'Pysäytä Animaatiot',
    hideImages: 'Piilota Kuvat',
    dyslexiaFriendly: 'Lukihäiriöystävällinen',
    biggerCursor: 'Suurempi Kohdistin',
    lineHeight: 'Rivikorkeus',
    fontSelection: 'Fonttivalinta',
    colorFilter: 'Värisuodatin',
    textAlign: 'Tekstin Tasaus',
    textSize: 'Tekstin Koko',
    highContrast: 'Suuri Kontrasti',
    defaultFont: 'Oletusfontti',
    noFilter: 'Ei Suodatinta',
    default: 'Oletus',
    screenReaderOn: 'Ruudunluku päällä',
    screenReaderOff: 'Ruudunluku pois',
    voiceControlActivated: 'Ääniohjaus aktivoitu',
    notSupportedBrowser: 'ei tueta tässä selaimessa',
    close: 'Sulje',
    reset: 'Nollaa',
    saturation: 'Kylläisyys',
    selectLanguage: 'Valitse Kieli'
  },
  cs: {
    accessibilityMenu: 'Menu Usnadnění',
    closeAccessibilityMenu: 'Zavřít Menu',
    accessibilityTools: 'Nástroje',
    resetAllSettings: 'Resetovat Nastavení',
    screenReader: 'Čtečka Obrazovky',
    voiceCommand: 'Hlasový Příkaz',
    textSpacing: 'Rozestupy Textu',
    pauseAnimations: 'Pozastavit Animace',
    hideImages: 'Skrýt Obrázky',
    dyslexiaFriendly: 'Pro Dyslektiky',
    biggerCursor: 'Větší Kurzor',
    lineHeight: 'Výška Řádku',
    fontSelection: 'Výběr Písma',
    colorFilter: 'Barevný Filtr',
    textAlign: 'Zarovnání Textu',
    textSize: 'Velikost Textu',
    highContrast: 'Vysoký Kontrast',
    defaultFont: 'Výchozí Písmo',
    noFilter: 'Bez Filtru',
    default: 'Výchozí',
    screenReaderOn: 'Čtečka obrazovky zapnuta',
    screenReaderOff: 'Čtečka obrazovky vypnuta',
    voiceControlActivated: 'Hlasové ovládání aktivováno',
    notSupportedBrowser: 'není v tomto prohlížeči podporováno',
    close: 'Zavřít',
    reset: 'Resetovat',
    saturation: 'Sytost',
    selectLanguage: 'Vybrat Jazyk'
  },
  hu: {
    accessibilityMenu: 'Akadálymentesítési Menü',
    closeAccessibilityMenu: 'Menü Bezárása',
    accessibilityTools: 'Eszközök',
    resetAllSettings: 'Beállítások Alaphelyzetbe',
    screenReader: 'Képernyőolvasó',
    voiceCommand: 'Hangparancs',
    textSpacing: 'Szöveg Térköz',
    pauseAnimations: 'Animációk Szüneteltetése',
    hideImages: 'Képek Elrejtése',
    dyslexiaFriendly: 'Diszlexia Barát',
    biggerCursor: 'Nagyobb Kurzor',
    lineHeight: 'Sormagasság',
    fontSelection: 'Betűtípus Választás',
    colorFilter: 'Színszűrő',
    textAlign: 'Szöveg Igazítás',
    textSize: 'Szövegméret',
    highContrast: 'Nagy Kontraszt',
    defaultFont: 'Alapértelmezett Betű',
    noFilter: 'Nincs Szűrő',
    default: 'Alapértelmezett',
    screenReaderOn: 'Képernyőolvasó be',
    screenReaderOff: 'Képernyőolvasó ki',
    voiceControlActivated: 'Hangvezérlés aktiválva',
    notSupportedBrowser: 'nem támogatott ebben a böngészőben',
    close: 'Bezárás',
    reset: 'Visszaállítás',
    saturation: 'Telítettség',
    selectLanguage: 'Nyelv Választása'
  },
  ro: {
    accessibilityMenu: 'Meniu Accesibilitate',
    closeAccessibilityMenu: 'Închide Meniul',
    accessibilityTools: 'Instrumente',
    resetAllSettings: 'Resetează Setările',
    screenReader: 'Cititor de Ecran',
    voiceCommand: 'Comandă Vocală',
    textSpacing: 'Spațiere Text',
    pauseAnimations: 'Pauză Animații',
    hideImages: 'Ascunde Imaginile',
    dyslexiaFriendly: 'Pentru Dislexie',
    biggerCursor: 'Cursor Mai Mare',
    lineHeight: 'Înălțime Linie',
    fontSelection: 'Selecție Font',
    colorFilter: 'Filtru de Culoare',
    textAlign: 'Aliniere Text',
    textSize: 'Mărime Text',
    highContrast: 'Contrast Înalt',
    defaultFont: 'Font Implicit',
    noFilter: 'Fără Filtru',
    default: 'Implicit',
    screenReaderOn: 'Cititor ecran pornit',
    screenReaderOff: 'Cititor ecran oprit',
    voiceControlActivated: 'Control vocal activat',
    notSupportedBrowser: 'nu este suportat în acest browser',
    close: 'Închide',
    reset: 'Resetează',
    saturation: 'Saturație',
    selectLanguage: 'Selectează Limba'
  },
  he: {
    accessibilityMenu: 'תפריט נגישות',
    closeAccessibilityMenu: 'סגור תפריט',
    accessibilityTools: 'כלי נגישות',
    resetAllSettings: 'אפס הגדרות',
    screenReader: 'קורא מסך',
    voiceCommand: 'פקודה קולית',
    textSpacing: 'ריווח טקסט',
    pauseAnimations: 'השהה אנימציות',
    hideImages: 'הסתר תמונות',
    dyslexiaFriendly: 'ידידותי לדיסלקציה',
    biggerCursor: 'סמן גדול',
    lineHeight: 'גובה שורה',
    fontSelection: 'בחירת גופן',
    colorFilter: 'מסנן צבעים',
    textAlign: 'יישור טקסט',
    textSize: 'גודל טקסט',
    highContrast: 'ניגודיות גבוהה',
    defaultFont: 'גופן ברירת מחדל',
    noFilter: 'ללא מסנן',
    default: 'ברירת מחדל',
    screenReaderOn: 'קורא מסך פועל',
    screenReaderOff: 'קורא מסך כבוי',
    voiceControlActivated: 'שליטה קולית הופעלה',
    notSupportedBrowser: 'אינו נתמך בדפדפן זה',
    close: 'סגור',
    reset: 'אפס',
    saturation: 'רוויה',
    selectLanguage: 'בחר שפה'
  },
  fa: {
    accessibilityMenu: 'منوی دسترسی',
    closeAccessibilityMenu: 'بستن منو',
    accessibilityTools: 'ابزارهای دسترسی',
    resetAllSettings: 'بازنشانی تنظیمات',
    screenReader: 'صفحه‌خوان',
    voiceCommand: 'دستور صوتی',
    textSpacing: 'فاصله متن',
    pauseAnimations: 'توقف انیمیشن',
    hideImages: 'مخفی کردن تصاویر',
    dyslexiaFriendly: 'دوستدار و نارساخوانی',
    biggerCursor: 'نشانگر بزرگتر',
    lineHeight: 'ارتفاع خط',
    fontSelection: 'انتخاب قلم',
    colorFilter: 'فیلتر رنگ',
    textAlign: 'تراز متن',
    textSize: 'اندازه متن',
    highContrast: 'کنتراست بالا',
    defaultFont: 'قلم پیش‌فرض',
    noFilter: 'بدون فیلتر',
    default: 'پیش‌فرض',
    screenReaderOn: 'صفحه‌خوان روشن',
    screenReaderOff: 'صفحه‌خوان خاموش',
    voiceControlActivated: 'کنترل صوتی فعال شد',
    notSupportedBrowser: 'در این مرورگر پشتیبانی نمی‌شود',
    close: 'بستن',
    reset: 'بازنشانی',
    saturation: 'اشباع',
    selectLanguage: 'انتخاب زبان'
  },
  ur: {
    accessibilityMenu: 'رسائی کا مینو',
    closeAccessibilityMenu: 'مینو بند کریں',
    accessibilityTools: 'رسائی کے اوزار',
    resetAllSettings: 'تمام ترتیبات کو دوبارہ ترتیب دیں',
    screenReader: 'اسکرین ریڈر',
    voiceCommand: 'صوتی کمانڈ',
    textSpacing: 'ٹیکسٹ اسپیسنگ',
    pauseAnimations: 'اینیمیشن روکیں',
    hideImages: 'تصاویر چھپائیں',
    dyslexiaFriendly: 'ڈسلیکسیا فرینڈلی',
    biggerCursor: 'بڑا کرسر',
    lineHeight: 'لائن کی اونچائی',
    fontSelection: 'فونٹ کا انتخاب',
    colorFilter: 'کلر فلٹر',
    textAlign: 'ٹیکسٹ الائنمنٹ',
    textSize: 'ٹیکسٹ کا سائز',
    highContrast: 'ہائی کنٹراسٹ',
    defaultFont: 'ڈیفالٹ فونٹ',
    noFilter: 'کوئی فلٹر نہیں',
    default: 'ڈیفالٹ',
    screenReaderOn: 'اسکرین ریڈر آن',
    screenReaderOff: 'اسکرین ریڈر آف',
    voiceControlActivated: 'وائس کنٹرول فعال',
    notSupportedBrowser: 'اس براؤزر میں سپورٹ نہیں ہے',
    close: 'بند کریں',
    reset: 'ری سیٹ',
    saturation: 'دیگر',
    selectLanguage: 'زبان منتخب کریں'
  },
  pa: {
    accessibilityMenu: 'ਪਹੁੰਚਯੋਗਤਾ ਮੀਨੂ',
    closeAccessibilityMenu: 'ਮੀਨੂ ਬੰਦ ਕਰੋ',
    accessibilityTools: 'ਪਹੁੰਚਯੋਗਤਾ ਟੂਲ',
    resetAllSettings: 'ਸਾਰੀਆਂ ਸੈਟਿੰਗਾਂ ਰੀਸੈਟ ਕਰੋ',
    screenReader: 'ਸਕ੍ਰੀਨ ਰੀਡਰ',
    voiceCommand: 'ਵਾਇਸ ਕਮਾਂਡ',
    textSpacing: 'ਟੈਕਸਟ ਸਪੇਸਿੰਗ',
    pauseAnimations: 'ਐਨੀਮੇਸ਼ਨ ਰੋਕੋ',
    hideImages: 'ਚਿੱਤਰ ਲੁਕਾਓ',
    dyslexiaFriendly: 'ਡਿਸਲੈਕਸੀਆ ਫਰੈਂਡਲੀ',
    biggerCursor: 'ਵੱਡਾ ਕਰਸਰ',
    lineHeight: 'ਲਾਈਨ ਦੀ ਉਚਾਈ',
    fontSelection: 'ਫੌਂਟ ਚੋਣ',
    colorFilter: 'ਰੰਗ ਫਿਲਟਰ',
    textAlign: 'ਟੈਕਸਟ ਅਲਾਈਨਮੈਂਟ',
    textSize: 'ਟੈਕਸਟ ਦਾ ਆਕਾਰ',
    highContrast: 'ਹਾਈ ਕੰਟਰਾਸਟ',
    defaultFont: 'ਡਿਫੌਲਟ ਫੌਂਟ',
    noFilter: 'ਕੋਈ ਫਿਲਟਰ ਨਹੀਂ',
    default: 'ਡਿਫੌਲਟ',
    screenReaderOn: 'ਸਕ੍ਰੀਨ ਰੀਡਰ ਚਾਲੂ',
    screenReaderOff: 'ਸਕ੍ਰੀਨ ਰੀਡਰ ਬੰਦ',
    voiceControlActivated: 'ਵਾਇਸ ਕੰਟਰੋਲ ਐਕਟੀਵੇਟਿਡ',
    notSupportedBrowser: 'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਤੇ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ',
    close: 'ਬੰਦ ਕਰੋ',
    reset: 'ਰੀਸੈਟ',
    saturation: 'ਸੰਤ੍ਰਿਪਤੀ',
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ'
  },
  mr: {
    accessibilityMenu: 'प्रवेशयोग्यता मेनू',
    closeAccessibilityMenu: 'मेनू बंद करा',
    accessibilityTools: 'साधने',
    resetAllSettings: 'सर्व सेटिंग्ज रीसेट करा',
    screenReader: 'स्क्रीन रीडर',
    voiceCommand: 'व्हॉइस कमांड',
    textSpacing: 'मजकूर अंतर',
    pauseAnimations: 'अॅनिमेशन थांबवा',
    hideImages: 'प्रतिमा लपवा',
    dyslexiaFriendly: 'डिस्लेक्सिया फ्रेंडली',
    biggerCursor: 'मोठा कर्सर',
    lineHeight: 'ओळीची उंची',
    fontSelection: 'फॉन्ट निवड',
    colorFilter: 'रंग फिल्टर',
    textAlign: 'मजकूर संरेखन',
    textSize: 'मजकूर आकार',
    highContrast: 'उच्च कॉन्ट्रास्ट',
    defaultFont: 'डीफॉल्ट फॉन्ट',
    noFilter: 'फिल्टर नाही',
    default: 'डीफॉल्ट',
    screenReaderOn: 'स्क्रीन रीडर चालू',
    screenReaderOff: 'स्क्रीन रीडर बंद',
    voiceControlActivated: 'आवाज नियंत्रण सक्रिय',
    notSupportedBrowser: 'या ब्राउझरमध्ये समर्थित नाही',
    close: 'बंद',
    reset: 'रीसेट',
    saturation: 'संपृक्तता',
    selectLanguage: 'भाषा निवडा'
  },
  te: {
    accessibilityMenu: 'యాక్సెసిబిలిటీ మెనూ',
    closeAccessibilityMenu: 'మెనూ మూసివేయి',
    accessibilityTools: 'సాధనాలు',
    resetAllSettings: 'అన్ని సెట్టింగ్‌లను రీసెట్ చేయండి',
    screenReader: 'స్క్రీన్ రీడర్',
    voiceCommand: 'వాయిస్ కమాండ్',
    textSpacing: 'టెక్స్ట్ స్పేసింగ్',
    pauseAnimations: 'యానిమేషన్లను ఆపివేయండి',
    hideImages: 'చిత్రాలను దాచండి',
    dyslexiaFriendly: 'డిస్లెక్సియా ఫ్రెండ్లీ',
    biggerCursor: 'పెద్ద కర్సర్',
    lineHeight: 'లైన్ ఎత్తు',
    fontSelection: 'ఫాంట్ ఎంపిక',
    colorFilter: 'కలర్ ఫిల్టర్',
    textAlign: 'టెక్స్ట్ అలైన్‌మెంట్',
    textSize: 'టెక్స్ట్ సైజు',
    highContrast: 'హై కాంట్రాస్ట్',
    defaultFont: 'డిఫాల్ట్ ఫాంట్',
    noFilter: 'ఫిల్టర్ లేదు',
    default: 'డిఫాల్ట్',
    screenReaderOn: 'స్క్రీన్ రీడర్ ఆన్',
    screenReaderOff: 'స్క్రీన్ రీడర్ ఆఫ్',
    voiceControlActivated: 'వాయిస్ కంట్రోల్ యాక్టివేట్ చేయబడింది',
    notSupportedBrowser: 'ఈ బ్రౌజర్‌లో మద్దతు లేదు',
    close: 'మూసివేయి',
    reset: 'రీసెట్',
    saturation: 'సంతృప్తత',
    selectLanguage: 'భాషను ఎంచుకోండి'
  },
  ta: {
    accessibilityMenu: 'அணுகல் பட்டி',
    closeAccessibilityMenu: 'பட்டியை மூடு',
    accessibilityTools: 'கருவிகள்',
    resetAllSettings: 'அமைப்புகளை மீட்டமை',
    screenReader: 'திரை படிப்பான்',
    voiceCommand: 'குரல் கட்டளை',
    textSpacing: 'உரை இடைவெளி',
    pauseAnimations: 'அனிமேஷன்களை இடைநிறுத்து',
    hideImages: 'படங்களை மறை',
    dyslexiaFriendly: 'டிஸ்லெக்ஸியா நட்பு',
    biggerCursor: 'பெரிய கர்சர்',
    lineHeight: 'வரி உயரம்',
    fontSelection: 'எழுத்துரு தேர்வு',
    colorFilter: 'வண்ண வடிகட்டி',
    textAlign: 'உரை சீரமைப்பு',
    textSize: 'உரை அளவு',
    highContrast: 'உயர் மாறுபாடு',
    defaultFont: 'இயல்புநிலை எழுத்துரு',
    noFilter: 'வடிகட்டி இல்லை',
    default: 'இயல்புநிலை',
    screenReaderOn: 'திரை படிப்பான் ஆன்',
    screenReaderOff: 'திரை படிப்பான் ஆஃப்',
    voiceControlActivated: 'குரல் கட்டுப்பாடு செயல்படுத்தப்பட்டது',
    notSupportedBrowser: 'இந்த உலாவியில் ஆதரிக்கப்படவில்லை',
    close: 'மூடு',
    reset: 'மீட்டமை',
    saturation: 'செறிவு',
    selectLanguage: 'மொழியைத் தேர்ந்தெடு'
  },
  ms: {
    accessibilityMenu: 'Menu Kebolehcapaian',
    closeAccessibilityMenu: 'Tutup Menu',
    accessibilityTools: 'Alat',
    resetAllSettings: 'Tetapkan Semula Semua',
    screenReader: 'Pembaca Skrin',
    voiceCommand: 'Arahan Suara',
    textSpacing: 'Jarak Teks',
    pauseAnimations: 'Jeda Animasi',
    hideImages: 'Sembunyikan Imej',
    dyslexiaFriendly: 'Mesra Disleksia',
    biggerCursor: 'Kursor Besar',
    lineHeight: 'Ketinggian Baris',
    fontSelection: 'Pilihan Fon',
    colorFilter: 'Penapis Warna',
    textAlign: 'Jajaran Teks',
    textSize: 'Saiz Teks',
    highContrast: 'Kontras Tinggi',
    defaultFont: 'Fon Lalai',
    noFilter: 'Tiada Penapis',
    default: 'Lalai',
    screenReaderOn: 'Pembaca skrin dihidupkan',
    screenReaderOff: 'Pembaca skrin dimatikan',
    voiceControlActivated: 'Kawalan suara diaktifkan',
    notSupportedBrowser: 'tidak disokong dalam pelayar ini',
    close: 'Tutup',
    reset: 'Tetapkan Semula',
    saturation: 'Ketepuan',
    selectLanguage: 'Pilih Bahasa'
  },
  tl: {
    accessibilityMenu: 'Menu ng Accessibility',
    closeAccessibilityMenu: 'Isara ang Menu',
    accessibilityTools: 'Mga Tool',
    resetAllSettings: 'I-reset Lahat',
    screenReader: 'Screen Reader',
    voiceCommand: 'Voice Command',
    textSpacing: 'Puwang sa Teksto',
    pauseAnimations: 'Ihinto ang Animasyon',
    hideImages: 'Itago ang mga Larawan',
    dyslexiaFriendly: 'Dyslexia Friendly',
    biggerCursor: 'Mas Malaking Cursor',
    lineHeight: 'Taas ng Linya',
    fontSelection: 'Pagpili ng Font',
    colorFilter: 'Filter ng Kulay',
    textAlign: 'Pagkakahanay ng Teksto',
    textSize: 'Laki ng Teksto',
    highContrast: 'Mataas na Contrast',
    defaultFont: 'Default na Font',
    noFilter: 'Walang Filter',
    default: 'Default',
    screenReaderOn: 'Naka-on ang screen reader',
    screenReaderOff: 'Naka-off ang screen reader',
    voiceControlActivated: 'Aktibo ang voice control',
    notSupportedBrowser: 'ay hindi suportado sa browser na ito',
    close: 'Isara',
    reset: 'I-reset',
    saturation: 'Saturation',
    selectLanguage: 'Piliin ang Wika'
  }
};

// Language detection and management
let currentLanguage = 'en';

function detectBrowserLanguage() {
  const browserLang = (navigator.language || navigator.userLanguage).toLowerCase();

  // Direct match
  if (TRANSLATIONS[browserLang]) {
    return browserLang;
  }

  // Try language code only (e.g., 'en' from 'en-US')
  const langCode = browserLang.split('-')[0];
  if (TRANSLATIONS[langCode]) {
    return langCode;
  }

  // Special case for Chinese
  if (browserLang.includes('zh')) {
    if (browserLang.includes('cn') || browserLang.includes('hans')) {
      return 'zh-cn';
    }
  }

  // Default to English
  return 'en';
}

function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLanguage = lang;
    localStorage.setItem('accessibilityWidgetLanguage', lang);
    return true;
  }
  return false;
}

function getTranslation(key) {
  return TRANSLATIONS[currentLanguage][key] || TRANSLATIONS['en'][key] || key;
}

// Initialize language from localStorage or detect from browser
const savedLanguage = localStorage.getItem('accessibilityWidgetLanguage');
if (savedLanguage && TRANSLATIONS[savedLanguage]) {
  currentLanguage = savedLanguage;
} else {
  currentLanguage = detectBrowserLanguage();
  localStorage.setItem('accessibilityWidgetLanguage', currentLanguage);
}

// ===========================================
// CONFIGURATION VARIABLES
// ===========================================

// Default configuration - can be overridden by user
const DEFAULT_WIDGET_CONFIG = {
  // Core Features
  enableHighContrast: true,
  enableBiggerText: true,
  enableTextSpacing: true, // Now has 3 levels
  enablePauseAnimations: true, // Enhanced to include reduced motion features
  enableHideImages: true,
  enableDyslexiaFont: true,
  enableBiggerCursor: true,
  enableLineHeight: true, // Now has 3 levels (2em, 3em, 4em)
  enableTextAlign: true,

  // Advanced Features
  enableScreenReader: true,
  enableVoiceControl: true,
  enableFontSelection: true,
  enableColorFilter: true,

  // Widget Styling
  widgetWidth: '440px',
  widgetPosition: {
    side: 'right', // 'left' or 'right'
    right: '20px',
    left: '20px',
    bottom: '20px'
  },

  // Colors
  colors: {
    primary: '#1663d7',            // Header bg, main button bg, active border, close hover bg
    secondary: '#ffffff',         // Main button icon color
    optionBg: '#ffffff',         // Option button background
    optionText: '#333333',       // Option button text color
    optionIcon: '#000000'         // Option button icon color
  },

  // Button styling
  button: {
    size: '55px',
    borderRadius: '100px',
    iconSize: '40px',
    shadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  },

  // Menu styling
  menu: {
    headerHeight: '70px',
    padding: '0 10px 10px 10px',
    optionPadding: '20px 10px',
    optionMargin: '10px',
    borderRadius: '8px',
    fontSize: '16px',
    titleFontSize: '16px',
    closeButtonSize: '44px'
  },

  // Typography
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '17px',
    titleFontSize: '22px',
    titleFontWeight: '700',
    lineHeight: '1'
  },

  // Animation
  animation: {
    transition: '0.2s',
    hoverScale: '1.05'
  },

  // Language/Text Configuration
  lang: {
    accessibilityMenu: 'Accessibility Menu',
    closeAccessibilityMenu: 'Close Accessibility Menu',
    accessibilityTools: 'Accessibility Tools',
    resetAllSettings: 'Reset All Settings',
    screenReader: 'Screen Reader',
    voiceCommand: 'Voice Command',
    textSpacing: 'Text Spacing',
    pauseAnimations: 'Pause Animations',
    hideImages: 'Hide Images',
    dyslexiaFriendly: 'Dyslexia Friendly',
    biggerCursor: 'Bigger Cursor',
    lineHeight: 'Line Height',
    fontSelection: 'Font Selection',
    colorFilter: 'Color Filter',
    textAlign: 'Text Align',
    textSize: 'Text Size',
    highContrast: 'High Contrast',
    defaultFont: 'Default Font',
    noFilter: 'No Filter',
    default: 'Default',
    screenReaderOn: 'Screen reader on',
    screenReaderOff: 'Screen reader off',
    voiceControlActivated: 'Voice control activated',
    notSupportedBrowser: 'is not supported in this browser',
    close: 'Close',
    reset: 'Reset'
  },

  // Voice Command Configuration - Developers can customize commands for different languages
  voiceCommands: {
    en: {
      showMenu: ['show menu', 'open menu', 'accessibility menu', 'access menu'],
      highContrast: ['high contrast', 'contrast', 'dark mode', 'increase contrast'],
      biggerText: ['bigger text', 'large text', 'text size', 'increase text', 'bigger', 'larger text', 'text bigger', 'make text bigger', 'enlarge text'],
      textSpacing: ['text spacing', 'spacing', 'letter spacing', 'text space'],
      pauseAnimations: ['pause animations', 'stop animations', 'disable animations', 'no animations'],
      hideImages: ['hide images', 'remove images', 'no images'],
      dyslexiaFont: ['dyslexia friendly', 'dyslexia font', 'readable font', 'easy font'],
      biggerCursor: ['bigger cursor', 'large cursor', 'cursor size', 'big cursor'],
      lineHeight: ['line height', 'line spacing', 'space between lines', 'line space'],
      textAlign: ['align text', 'text align', 'center text', 'alignment'],
      saturation: ['saturation', 'color saturation', 'saturate', 'desaturate', 'grayscale'],
      fontSelection: ['font selection', 'change font', 'select font', 'font'],
      colorFilter: ['color filter', 'color blind', 'colorblind', 'filter'],
      screenReader: ['screen reader', 'read aloud', 'voice reader'],
      voiceControl: ['voice command', 'voice control', 'voice commands'],
      resetAll: ['reset all', 'reset everything', 'clear all', 'reset settings', 'reset']
    },
    de: {
      showMenu: ['menü anzeigen', 'menü öffnen', 'barrierefreiheitsmenü', 'zugangsmenü'],
      highContrast: ['hoher kontrast', 'kontrast', 'dunkler modus', 'kontrast erhöhen'],
      biggerText: ['größerer text', 'großer text', 'textgröße', 'text vergrößern', 'größer', 'text größer'],
      textSpacing: ['textabstand', 'abstand', 'buchstabenabstand', 'text abstand'],
      pauseAnimations: ['animationen pausieren', 'animationen stoppen', 'animationen deaktivieren'],
      hideImages: ['bilder ausblenden', 'bilder entfernen', 'keine bilder'],
      dyslexiaFont: ['legasthenie freundlich', 'legasthenie schrift', 'lesbare schrift'],
      biggerCursor: ['größerer cursor', 'großer cursor', 'cursor größe'],
      lineHeight: ['zeilenhöhe', 'zeilenabstand', 'abstand zwischen zeilen'],
      textAlign: ['text ausrichten', 'textausrichtung', 'text zentrieren'],
      saturation: ['sättigung', 'farbsättigung', 'sättigen', 'entsättigen', 'graustufen'],
      fontSelection: ['schriftauswahl', 'schrift ändern', 'schrift wählen', 'schrift'],
      colorFilter: ['farbfilter', 'farbenblind', 'filter'],
      screenReader: ['screenreader', 'vorlesen', 'sprach reader'],
      voiceControl: ['sprachbefehl', 'sprachsteuerung', 'sprachbefehle'],
      resetAll: ['alles zurücksetzen', 'alle zurücksetzen', 'alle löschen', 'einstellungen zurücksetzen']
    },
    es: {
      showMenu: ['mostrar menú', 'abrir menú', 'menú de accesibilidad', 'menú de acceso'],
      highContrast: ['alto contraste', 'contraste', 'modo oscuro', 'aumentar contraste'],
      biggerText: ['texto más grande', 'texto grande', 'tamaño de texto', 'aumentar texto', 'más grande'],
      textSpacing: ['espaciado de texto', 'espaciado', 'espaciado de letras', 'espacio de texto'],
      pauseAnimations: ['pausar animaciones', 'detener animaciones', 'desactivar animaciones'],
      hideImages: ['ocultar imágenes', 'quitar imágenes', 'sin imágenes'],
      dyslexiaFont: ['amigable para dislexia', 'fuente de dislexia', 'fuente legible'],
      biggerCursor: ['cursor más grande', 'cursor grande', 'tamaño de cursor'],
      lineHeight: ['altura de línea', 'espaciado de líneas', 'espacio entre líneas'],
      textAlign: ['alinear texto', 'alineación de texto', 'centrar texto'],
      saturation: ['saturación', 'saturación de color', 'saturar', 'desaturar', 'escala de grises'],
      fontSelection: ['selección de fuente', 'cambiar fuente', 'seleccionar fuente', 'fuente'],
      colorFilter: ['filtro de color', 'daltónico', 'filtro'],
      screenReader: ['lector de pantalla', 'leer en voz alta', 'lector de voz'],
      voiceControl: ['comando de voz', 'control de voz', 'comandos de voz'],
      resetAll: ['restablecer todo', 'restablecer todo', 'borrar todo', 'restablecer configuración']
    },
    it: {
      showMenu: ['mostra menu', 'apri menu', 'menu accessibilità', 'menu accesso'],
      highContrast: ['alto contrasto', 'contrasto', 'modalità scura', 'aumenta contrasto'],
      biggerText: ['testo più grande', 'testo grande', 'dimensione testo', 'aumenta testo', 'più grande'],
      textSpacing: ['spaziatura testo', 'spaziatura', 'spaziatura lettere', 'spazio testo'],
      pauseAnimations: ['pausa animazioni', 'ferma animazioni', 'disabilita animazioni'],
      hideImages: ['nascondi immagini', 'rimuovi immagini', 'nessuna immagine'],
      dyslexiaFont: ['adatto alla dislessia', 'font dislessia', 'font leggibile'],
      biggerCursor: ['cursore più grande', 'cursore grande', 'dimensione cursore'],
      lineHeight: ['altezza linea', 'spaziatura linee', 'spazio tra linee'],
      textAlign: ['allinea testo', 'allineamento testo', 'centra testo'],
      saturation: ['saturazione', 'saturazione colore', 'saturare', 'desaturare', 'scala di grigi'],
      fontSelection: ['selezione font', 'cambia font', 'seleziona font', 'font'],
      colorFilter: ['filtro colore', 'daltonico', 'filtro'],
      screenReader: ['lettore schermo', 'leggi ad alta voce', 'lettore vocale'],
      voiceControl: ['comando vocale', 'controllo vocale', 'comandi vocali'],
      resetAll: ['ripristina tutto', 'ripristina tutto', 'cancella tutto', 'ripristina impostazioni']
    },
    fr: {
      showMenu: ['afficher menu', 'ouvrir menu', 'menu accessibilité', 'menu accès'],
      highContrast: ['contraste élevé', 'contraste', 'mode sombre', 'augmenter contraste'],
      biggerText: ['texte plus grand', 'grand texte', 'taille texte', 'augmenter texte', 'plus grand'],
      textSpacing: ['espacement texte', 'espacement', 'espacement lettres', 'espace texte'],
      pauseAnimations: ['mettre en pause animations', 'arrêter animations', 'désactiver animations'],
      hideImages: ['masquer images', 'supprimer images', 'aucune image'],
      dyslexiaFont: ['convivial dyslexie', 'police dyslexie', 'police lisible'],
      biggerCursor: ['curseur plus grand', 'grand curseur', 'taille curseur'],
      lineHeight: ['hauteur ligne', 'espacement lignes', 'espace entre lignes'],
      textAlign: ['aligner texte', 'alignement texte', 'centrer texte'],
      saturation: ['saturation', 'saturation couleur', 'saturer', 'désaturer', 'niveaux de gris'],
      fontSelection: ['sélection police', 'changer police', 'sélectionner police', 'police'],
      colorFilter: ['filtre couleur', 'daltonien', 'filtre'],
      screenReader: ['lecteur écran', 'lire à haute voix', 'lecteur vocal'],
      voiceControl: ['commande vocale', 'contrôle vocal', 'commandes vocales'],
      resetAll: ['réinitialiser tout', 'réinitialiser tout', 'effacer tout', 'réinitialiser paramètres']
    },
    ru: {
      showMenu: ['показать меню', 'открыть меню', 'меню доступности', 'меню доступа'],
      highContrast: ['высокая контрастность', 'контрастность', 'темный режим', 'увеличить контрастность'],
      biggerText: ['больший текст', 'большой текст', 'размер текста', 'увеличить текст', 'больше'],
      textSpacing: ['межбуквенный интервал', 'интервал', 'интервал букв', 'пространство текста'],
      pauseAnimations: ['приостановить анимацию', 'остановить анимацию', 'отключить анимацию'],
      hideImages: ['скрыть изображения', 'убрать изображения', 'без изображений'],
      dyslexiaFont: ['для дислексии', 'шрифт дислексии', 'читаемый шрифт'],
      biggerCursor: ['увеличенный курсор', 'большой курсор', 'размер курсора'],
      lineHeight: ['высота строки', 'интервал строк', 'пространство между строками'],
      textAlign: ['выровнять текст', 'выравнивание текста', 'центрировать текст'],
      saturation: ['насыщенность', 'насыщенность цвета', 'насытить', 'обесцветить', 'оттенки серого'],
      fontSelection: ['выбор шрифта', 'изменить шрифт', 'выбрать шрифт', 'шрифт'],
      colorFilter: ['цветовой фильтр', 'дальтонизм', 'фильтр'],
      screenReader: ['программа чтения', 'читать вслух', 'голосовой ридер'],
      voiceControl: ['голосовая команда', 'голосовое управление', 'голосовые команды'],
      resetAll: ['сбросить все', 'сбросить всё', 'очистить все', 'сбросить настройки']
    },
    tr: {
      showMenu: ['menüyü göster', 'menü aç', 'erişilebilirlik menüsü', 'erişim menüsü'],
      highContrast: ['yüksek kontrast', 'kontrast', 'karanlık mod', 'kontrastı artır'],
      biggerText: ['daha büyük metin', 'büyük metin', 'metin boyutu', 'metni büyüt', 'daha büyük'],
      textSpacing: ['metin aralığı', 'aralık', 'harf aralığı', 'metin boşluğu'],
      pauseAnimations: ['animasyonları duraklat', 'animasyonları durdur', 'animasyonları kapat'],
      hideImages: ['resimleri gizle', 'resimleri kaldır', 'resim yok'],
      dyslexiaFont: ['disleksi dostu', 'disleksi yazı tipi', 'okunabilir yazı tipi'],
      biggerCursor: ['daha büyük imleç', 'büyük imleç', 'imleç boyutu'],
      lineHeight: ['satır yüksekliği', 'satır aralığı', 'satırlar arası boşluk'],
      textAlign: ['metni hizala', 'metin hizalama', 'metni ortala'],
      saturation: ['doygunluk', 'renk doygunluğu', 'doygunlaştır', 'solgunlaştır', 'gri tonlama'],
      fontSelection: ['yazı tipi seçimi', 'yazı tipini değiştir', 'yazı tipi seç', 'yazı tipi'],
      colorFilter: ['renk filtresi', 'renk körü', 'filtre'],
      screenReader: ['ekran okuyucu', 'sesli oku', 'ses okuyucu'],
      voiceControl: ['sesli komut', 'sesli kontrol', 'sesli komutlar'],
      resetAll: ['hepsini sıfırla', 'tümünü sıfırla', 'hepsini temizle', 'ayarları sıfırla','sıfırla']
    },
    ar: {
      showMenu: ['إظهار القائمة', 'فتح القائمة', 'قائمة إمكانية الوصول', 'قائمة الوصول'],
      highContrast: ['تباين عالي', 'تباين', 'الوضع المظلم', 'زيادة التباين'],
      biggerText: ['نص أكبر', 'نص كبير', 'حجم النص', 'تكبير النص', 'أكبر'],
      textSpacing: ['تباعد النص', 'تباعد', 'تباعد الحروف', 'مساحة النص'],
      pauseAnimations: ['إيقاف الرسوم المتحركة مؤقتا', 'إيقاف الرسوم المتحركة', 'تعطيل الرسوم المتحركة'],
      hideImages: ['إخفاء الصور', 'إزالة الصور', 'بدون صور'],
      dyslexiaFont: ['صديق لعسر القراءة', 'خط عسر القراءة', 'خط قابل للقراءة'],
      biggerCursor: ['مؤشر أكبر', 'مؤشر كبير', 'حجم المؤشر'],
      lineHeight: ['ارتفاع الخط', 'تباعد الأسطر', 'مساحة بين الأسطر'],
      textAlign: ['محاذاة النص', 'محاذاة النص', 'توسيط النص'],
      saturation: ['التشبع', 'تشبع اللون', 'تشبيع', 'إزالة التشبع', 'تدرج رمادي'],
      fontSelection: ['اختيار الخط', 'تغيير الخط', 'اختر الخط', 'خط'],
      colorFilter: ['مرشح الألوان', 'عمى الألوان', 'مرشح'],
      screenReader: ['قارئ الشاشة', 'اقرأ بصوت عالٍ', 'قارئ صوتي'],
      voiceControl: ['الأمر الصوتي', 'التحكم الصوتي', 'الأوامر الصوتية'],
      resetAll: ['إعادة تعيين الكل', 'إعادة تعيين جميع', 'مسح الكل', 'إعادة تعيين الإعدادات']
    },
    hi: {
      showMenu: ['मेनू दिखाएं', 'मेनू खोलें', 'पहुंच मेनू', 'एक्सेस मेनू'],
      highContrast: ['उच्च कंट्रास्ट', 'कंट्रास्ट', 'डार्क मोड', 'कंट्रास्ट बढ़ाएं'],
      biggerText: ['बड़ा टेक्स्ट', 'बड़ा टेक्स्ट', 'टेक्स्ट का आकार', 'टेक्स्ट बढ़ाएं', 'बड़ा'],
      textSpacing: ['टेक्स्ट स्पेसिंग', 'स्पेसिंग', 'अक्षर स्पेसिंग', 'टेक्स्ट स्पेस'],
      pauseAnimations: ['एनिमेशन रोकें', 'एनिमेशन बंद करें', 'एनिमेशन अक्षम करें'],
      hideImages: ['चित्र छिपाएं', 'चित्र हटाएं', 'कोई चित्र नहीं'],
      dyslexiaFont: ['डिस्लेक्सिया के अनुकूल', 'डिस्लेक्सिया फ़ॉन्ट', 'पढ़ने योग्य फ़ॉन्ट'],
      biggerCursor: ['बड़ा कर्सर', 'बड़ा कर्सर', 'कर्सर का आकार'],
      lineHeight: ['लाइन की ऊंचाई', 'लाइन स्पेसिंग', 'लाइनों के बीच स्पेस'],
      textAlign: ['टेक्स्ट अलाइन करें', 'टेक्स्ट संरेखण', 'टेक्स्ट केंद्र में करें'],
      saturation: ['संतृप्ति', 'रंग संतृप्ति', 'संतृप्त करें', 'असंतृप्त करें', 'ग्रेस्केल'],
      fontSelection: ['फ़ॉन्ट चयन', 'फ़ॉन्ट बदलें', 'फ़ॉन्ट चुनें', 'फ़ॉन्ट'],
      colorFilter: ['रंग फ़िल्टर', 'वर्णान्धता', 'फ़िल्टर'],
      screenReader: ['स्क्रीन रीडर', 'जोर से पढ़ें', 'वॉयस रीडर'],
      voiceControl: ['वॉयस कमांड', 'वॉयस नियंत्रण', 'वॉयस कमांड्स'],
      resetAll: ['सभी रीसेट करें', 'सब कुछ रीसेट करें', 'सब साफ़ करें', 'सेटिंग्स रीसेट करें']
    },
    'zh-cn': {
      showMenu: ['显示菜单', '打开菜单', '辅助功能菜单', '访问菜单'],
      highContrast: ['高对比度', '对比度', '暗模式', '增加对比度'],
      biggerText: ['更大的文本', '大文本', '文本大小', '增大文本', '更大'],
      textSpacing: ['文本间距', '间距', '字母间距', '文本空间'],
      pauseAnimations: ['暂停动画', '停止动画', '禁用动画'],
      hideImages: ['隐藏图片', '删除图片', '无图片'],
      dyslexiaFont: ['阅读障碍友好', '阅读障碍字体', '可读字体'],
      biggerCursor: ['更大的光标', '大光标', '光标大小'],
      lineHeight: ['行高', '行间距', '行之间的空间'],
      textAlign: ['对齐文本', '文本对齐', '居中文本'],
      saturation: ['饱和度', '颜色饱和度', '饱和', '去饱和', '灰度'],
      fontSelection: ['字体选择', '更改字体', '选择字体', '字体'],
      colorFilter: ['颜色滤镜', '色盲', '滤镜'],
      screenReader: ['屏幕阅读器', '大声朗读', '语音阅读器'],
      voiceControl: ['语音命令', '语音控制', '语音命令'],
      resetAll: ['重置全部', '重置所有', '清除全部', '重置设置']
    },
    jp: {
      showMenu: ['メニューを表示', 'メニューを開く', 'アクセシビリティメニュー', 'アクセスメニュー'],
      highContrast: ['ハイコントラスト', 'コントラスト', 'ダークモード', 'コントラストを上げる'],
      biggerText: ['大きいテキスト', '大きなテキスト', 'テキストサイズ', 'テキストを大きく', 'より大きい'],
      textSpacing: ['テキスト間隔', '間隔', '文字間隔', 'テキストスペース'],
      pauseAnimations: ['アニメーション一時停止', 'アニメーション停止', 'アニメーション無効'],
      hideImages: ['画像を非表示', '画像を削除', '画像なし'],
      dyslexiaFont: ['ディスレクシア対応', 'ディスレクシアフォント', '読みやすいフォント'],
      biggerCursor: ['大きいカーソル', '大きなカーソル', 'カーソルサイズ'],
      lineHeight: ['行の高さ', '行間隔', '行間のスペース'],
      textAlign: ['テキスト配置', 'テキスト配置', 'テキストを中央'],
      saturation: ['彩度', '色彩度', '彩度を上げる', '彩度を下げる', 'グレースケール'],
      fontSelection: ['フォント選択', 'フォント変更', 'フォント選択', 'フォント'],
      colorFilter: ['カラーフィルター', '色覚異常', 'フィルター'],
      screenReader: ['スクリーンリーダー', '音声で読む', '音声リーダー'],
      voiceControl: ['音声コマンド', '音声制御', '音声コマンド'],
      resetAll: ['すべてリセット', 'すべてリセット', 'すべてクリア', '設定をリセット']
    },
    pt: {
      showMenu: ['mostrar menu', 'abrir menu', 'menu de acessibilidade'],
      highContrast: ['alto contraste', 'aumentar contraste', 'modo escuro'],
      biggerText: ['texto maior', 'aumentar texto', 'tamanho do texto'],
      textSpacing: ['espaçamento de texto', 'espaçamento'],
      pauseAnimations: ['pausar animações', 'parar animações'],
      hideImages: ['ocultar imagens', 'esconder imagens'],
      dyslexiaFriendly: ['fonte para dislexia', 'amigável para dislexia'],
      biggerCursor: ['cursor maior', 'aumentar cursor'],
      lineHeight: ['altura da linha', 'espaçamento entre linhas'],
      textAlign: ['alinhamento do texto', 'alinhar texto'],
      saturation: ['saturação', 'saturar'],
      fontSelection: ['seleção de fonte', 'escolher fonte'],
      colorFilter: ['filtro de cor', 'daltonismo'],
      screenReader: ['leitor de tela', 'ler tela'],
      voiceControl: ['comando de voz', 'controle por voz'],
      resetAll: ['redefinir tudo', 'limpar tudo']
    },
    bn: {
      showMenu: ['মেনু দেখান', 'মেনু খুলুন'],
      highContrast: ['হাই কন্ট্রাস্ট', 'কন্ট্রাস্ট বাড়ান'],
      biggerText: ['বড় টেক্সট', 'লেখা বড় করুন'],
      textSpacing: ['টেক্সট স্পেসিং'],
      pauseAnimations: ['অ্যানিমেশন থামান'],
      hideImages: ['ছবি লুকান'],
      dyslexiaFriendly: ['ডিসলেক্সিয়া'],
      biggerCursor: ['বড় কার্সার'],
      lineHeight: ['লাইনের উচ্চতা'],
      textAlign: ['টেক্সট বিন্যাস'],
      saturation: ['স্যাচুরেশন'],
      fontSelection: ['ফন্ট নির্বাচন'],
      colorFilter: ['কালার ফিল্টার'],
      screenReader: ['স্ক্রিন রিডার'],
      voiceControl: ['ভয়েস কমান্ড'],
      resetAll: ['রিসেট করুন']
    },
    ko: {
      showMenu: ['메뉴 보기', '메뉴 열기', '접근성 메뉴'],
      highContrast: ['고대비', '대비 증가'],
      biggerText: ['텍스트 크게', '글자 크게', '텍스트 확대'],
      textSpacing: ['텍스트 간격', '자간'],
      pauseAnimations: ['애니메이션 중지', '애니메이션 일시정지'],
      hideImages: ['이미지 숨기기', '사진 숨기기'],
      dyslexiaFriendly: ['난독증', '읽기 쉬운 글꼴'],
      biggerCursor: ['큰 커서', '커서 확대'],
      lineHeight: ['줄 높이', '행간'],
      textAlign: ['텍스트 정렬', '정렬'],
      saturation: ['채도', '색상 채도'],
      fontSelection: ['글꼴 선택', '폰트 변경'],
      colorFilter: ['색상 필터', '색맹'],
      screenReader: ['스크린 리더', '화면 읽기'],
      voiceControl: ['음성 명령', '음성 제어'],
      resetAll: ['초기화', '모두 초기화']
    },
    vi: {
      showMenu: ['hiện menu', 'mở menu', 'menu trợ năng'],
      highContrast: ['tương phản cao', 'tăng tương phản'],
      biggerText: ['cỡ chữ lớn', 'tăng cỡ chữ', 'chữ to'],
      textSpacing: ['khoảng cách chữ'],
      pauseAnimations: ['dừng hoạt ảnh', 'tắt hoạt ảnh'],
      hideImages: ['ẩn hình ảnh', 'tắt hình ảnh'],
      dyslexiaFriendly: ['phông chữ dễ đọc'],
      biggerCursor: ['con trỏ lớn'],
      lineHeight: ['chiều cao dòng'],
      textAlign: ['căn chỉnh văn bản'],
      saturation: ['độ bão hòa'],
      fontSelection: ['chọn phông chữ'],
      colorFilter: ['bộ lọc màu'],
      screenReader: ['trình đọc màn hình'],
      voiceControl: ['điều khiển giọng nói'],
      resetAll: ['đặt lại tất cả', 'khôi phục']
    },
    id: {
      showMenu: ['tampilkan menu', 'buka menu'],
      highContrast: ['kontras tinggi'],
      biggerText: ['teks besar', 'perbesar teks'],
      textSpacing: ['jarak teks'],
      pauseAnimations: ['hentikan animasi'],
      hideImages: ['sembunyikan gambar'],
      dyslexiaFriendly: ['ramah disleksia'],
      biggerCursor: ['kursor besar'],
      lineHeight: ['tinggi baris'],
      textAlign: ['perataan teks'],
      saturation: ['saturasi'],
      fontSelection: ['pilihan font'],
      colorFilter: ['filter warna'],
      screenReader: ['pembaca layar'],
      voiceControl: ['perintah suara'],
      resetAll: ['atur ulang semua']
    },
    th: {
      showMenu: ['แสดงเมนู', 'เปิดเมนู'],
      highContrast: ['ความคมชัดสูง'],
      biggerText: ['ข้อความใหญ่', 'ขยายข้อความ'],
      textSpacing: ['ระยะห่างข้อความ'],
      pauseAnimations: ['หยุดภาพเคลื่อนไหว'],
      hideImages: ['ซ่อนรูปภาพ'],
      dyslexiaFriendly: ['ฟอนต์อ่านง่าย'],
      biggerCursor: ['เคอร์เซอร์ใหญ่'],
      lineHeight: ['ความสูงบรรทัด'],
      textAlign: ['จัดตำแหน่งข้อความ'],
      saturation: ['ความอิ่มตัว'],
      fontSelection: ['เลือกฟอนต์'],
      colorFilter: ['ตัวกรองสี'],
      screenReader: ['โปรแกรมอ่านหน้าจอ'],
      voiceControl: ['คำสั่งเสียง'],
      resetAll: ['รีเซ็ตทั้งหมด']
    },
    pl: {
      showMenu: ['pokaż menu', 'otwórz menu'],
      highContrast: ['wysoki kontrast'],
      biggerText: ['większy tekst', 'powiększ tekst'],
      textSpacing: ['odstępy tekstu'],
      pauseAnimations: ['zatrzymaj animacje'],
      hideImages: ['ukryj obrazki'],
      dyslexiaFriendly: ['dla dyslektyków'],
      biggerCursor: ['większy kursor'],
      lineHeight: ['wysokość linii'],
      textAlign: ['wyrównanie tekstu'],
      saturation: ['nasycenie'],
      fontSelection: ['wybór czcionki'],
      colorFilter: ['filtr kolorów'],
      screenReader: ['czytnik ekranu'],
      voiceControl: ['sterowanie głosem'],
      resetAll: ['resetuj wszystko']
    },
    nl: {
      showMenu: ['tooon menu', 'open menu'],
      highContrast: ['hoog contrast'],
      biggerText: ['grotere tekst', 'tekst vergroten'],
      textSpacing: ['tekstafstand'],
      pauseAnimations: ['animaties pauzeren'],
      hideImages: ['afbeeldingen verbergen'],
      dyslexiaFriendly: ['dyslexie vriendelijk'],
      biggerCursor: ['grotere cursor'],
      lineHeight: ['regelhoogte'],
      textAlign: ['tekst uitlijning'],
      saturation: ['verzadiging'],
      fontSelection: ['lettertype selectie'],
      colorFilter: ['kleurfilter'],
      screenReader: ['schermlezer'],
      voiceControl: ['spraakbesturing'],
      resetAll: ['alles resetten']
    },
    el: {
      showMenu: ['εμφάνιση μενού', 'άνοιγμα μενού'],
      highContrast: ['υψηλή αντίθεση'],
      biggerText: ['μεγαλύτερο κείμενο'],
      textSpacing: ['απόσταση κειμένου'],
      pauseAnimations: ['παύση κινήσεων'],
      hideImages: ['απόκρυψη εικόνων'],
      dyslexiaFriendly: ['δυσλεξία'],
      biggerCursor: ['μεγαλύτερος δρομέας'],
      lineHeight: ['ύψος γραμμής'],
      textAlign: ['στοίχιση κειμένου'],
      saturation: ['κορεσμός'],
      fontSelection: ['επιλογή γραμματοσειράς'],
      colorFilter: ['φίλτρο χρώματος'],
      screenReader: ['αναγνώστης οθόνης'],
      voiceControl: ['φωνητική εντολή'],
      resetAll: ['επαναφορά όλων']
    },
    sv: {
      showMenu: ['visa meny', 'öppna meny'],
      highContrast: ['hög kontrast'],
      biggerText: ['större text'],
      textSpacing: ['textavstånd'],
      pauseAnimations: ['pausa animationer'],
      hideImages: ['dölj bilder'],
      dyslexiaFriendly: ['dyslexivänlig'],
      biggerCursor: ['större markör'],
      lineHeight: ['radhöjd'],
      textAlign: ['textjustering'],
      saturation: ['mättnad'],
      fontSelection: ['teckensnittsval'],
      colorFilter: ['färgfilter'],
      screenReader: ['skärmläsare'],
      voiceControl: ['röststyrning'],
      resetAll: ['återställ allt']
    },
    no: {
      showMenu: ['vis meny', 'åpne meny'],
      highContrast: ['høy kontrast'],
      biggerText: ['større tekst'],
      textSpacing: ['tekstavstand'],
      pauseAnimations: ['pause animasjoner'],
      hideImages: ['skjul bilder'],
      dyslexiaFriendly: ['dysleksivennlig'],
      biggerCursor: ['større markør'],
      lineHeight: ['linjehøyde'],
      textAlign: ['tekstjustering'],
      saturation: ['metning'],
      fontSelection: ['skrifttype'],
      colorFilter: ['fargefilter'],
      screenReader: ['skjermleser'],
      voiceControl: ['talestyring'],
      resetAll: ['nullstill alt']
    },
    da: {
      showMenu: ['vis menu', 'åbn menu'],
      highContrast: ['høj kontrast'],
      biggerText: ['større tekst'],
      textSpacing: ['tekstafstand'],
      pauseAnimations: ['pause animationer'],
      hideImages: ['skjul billeder'],
      dyslexiaFriendly: ['ordblindevenlig'],
      biggerCursor: ['større markør'],
      lineHeight: ['linjehøjde'],
      textAlign: ['tekstjustering'],
      saturation: ['mætning'],
      fontSelection: ['skrifttype'],
      colorFilter: ['farvefilter'],
      screenReader: ['skærmlæser'],
      voiceControl: ['stemmestyring'],
      resetAll: ['nulstil alt']
    },
    fi: {
      showMenu: ['näytä valikko', 'avaa valikko'],
      highContrast: ['suuri kontrasti'],
      biggerText: ['suurempi teksti'],
      textSpacing: ['tekstiväli'],
      pauseAnimations: ['pysäytä animaatiot'],
      hideImages: ['piilota kuvat'],
      dyslexiaFriendly: ['lukihäiriö'],
      biggerCursor: ['suurempi kohdistin'],
      lineHeight: ['rivikorkeus'],
      textAlign: ['tekstin tasaus'],
      saturation: ['kylläisyys'],
      fontSelection: ['fonttivalinta'],
      colorFilter: ['värisuodatin'],
      screenReader: ['ruudunluku'],
      voiceControl: ['ääniohjaus'],
      resetAll: ['nollaa kaikki']
    },
    cs: {
      showMenu: ['zobrazit menu', 'otevřít menu'],
      highContrast: ['vysoký kontrast'],
      biggerText: ['větší text'],
      textSpacing: ['rozestupy textu'],
      pauseAnimations: ['pozastavit animace'],
      hideImages: ['skrýt obrázky'],
      dyslexiaFriendly: ['pro dyslektiky'],
      biggerCursor: ['větší kurzor'],
      lineHeight: ['výška řádku'],
      textAlign: ['zarovnání textu'],
      saturation: ['sytost'],
      fontSelection: ['výběr písma'],
      colorFilter: ['barevný filtr'],
      screenReader: ['čtečka obrazovky'],
      voiceControl: ['hlasové ovládání'],
      resetAll: ['resetovat vše']
    },
    hu: {
      showMenu: ['menü megjelenítése', 'menü megnyitása'],
      highContrast: ['nagy kontraszt'],
      biggerText: ['nagyobb szöveg'],
      textSpacing: ['szöveg térköz'],
      pauseAnimations: ['animációk szüneteltetése'],
      hideImages: ['képek elrejtése'],
      dyslexiaFriendly: ['diszlexia'],
      biggerCursor: ['nagyobb kurzor'],
      lineHeight: ['sormagasság'],
      textAlign: ['szöveg igazítás'],
      saturation: ['telítettség'],
      fontSelection: ['betűtípus'],
      colorFilter: ['színszűrő'],
      screenReader: ['képernyőolvasó'],
      voiceControl: ['hangvezérlés'],
      resetAll: ['mindent alaphelyzetbe']
    },
    ro: {
      showMenu: ['arată meniul', 'deschide meniul'],
      highContrast: ['contrast înalt'],
      biggerText: ['text mai mare'],
      textSpacing: ['spațiere text'],
      pauseAnimations: ['pauză animații'],
      hideImages: ['ascunde imaginile'],
      dyslexiaFriendly: ['dislexie'],
      biggerCursor: ['cursor mai mare'],
      lineHeight: ['înălțime linie'],
      textAlign: ['aliniere text'],
      saturation: ['saturație'],
      fontSelection: ['selecție font'],
      colorFilter: ['filtru culoare'],
      screenReader: ['cititor ecran'],
      voiceControl: ['control vocal'],
      resetAll: ['resetează tot']
    },
    he: {
      showMenu: ['הצג תפריט', 'פתח תפריט'],
      highContrast: ['ניגודיות גבוהה'],
      biggerText: ['טקסט גדול'],
      textSpacing: ['ריווח טקסט'],
      pauseAnimations: ['עצור אנימציות'],
      hideImages: ['הסתר תמונות'],
      dyslexiaFriendly: ['דיסלקציה'],
      biggerCursor: ['סמן גדול'],
      lineHeight: ['גובה שורה'],
      textAlign: ['יישור טקסט'],
      saturation: ['רוויה'],
      fontSelection: ['גופן'],
      colorFilter: ['מסנן צבע'],
      screenReader: ['קורא מסך'],
      voiceControl: ['שליטה קולית'],
      resetAll: ['אפס הכל']
    },
    fa: {
      showMenu: ['نمایش منو', 'باز کردن منو'],
      highContrast: ['کنتراست بالا'],
      biggerText: ['متن بزرگتر'],
      textSpacing: ['فاصله متن'],
      pauseAnimations: ['توقف انیمیشن'],
      hideImages: ['مخفی کردن تصاویر'],
      dyslexiaFriendly: ['نارساخوانی'],
      biggerCursor: ['نشانگر بزرگتر'],
      lineHeight: ['ارتفاع خط'],
      textAlign: ['تراز متن'],
      saturation: ['اشباع'],
      fontSelection: ['انتخاب قلم'],
      colorFilter: ['فیلتر رنگ'],
      screenReader: ['صفحه‌خوان'],
      voiceControl: ['کنترل صوتی'],
      resetAll: ['بازنشانی همه']
    },
    ur: {
      showMenu: ['مینو دکھائیں', 'مینو کھولیں'],
      highContrast: ['ہائی کنٹراسٹ'],
      biggerText: ['بڑا متن'],
      textSpacing: ['ٹیکسٹ اسپیسنگ'],
      pauseAnimations: ['اینیمیشن روکیں'],
      hideImages: ['تصاویر چھپائیں'],
      dyslexiaFriendly: ['ڈسلیکسیا'],
      biggerCursor: ['بڑا کرسر'],
      lineHeight: ['لائن کی اونچائی'],
      textAlign: ['ٹیکسٹ الائنمنٹ'],
      saturation: ['دیگر'],
      fontSelection: ['فونٹ'],
      colorFilter: ['کلر فلٹر'],
      screenReader: ['اسکرین ریڈر'],
      voiceControl: ['وائس کنٹرول'],
      resetAll: ['سب دوبارہ ترتیب دیں']
    },
    pa: {
      showMenu: ['ਮੀਨੂ ਦਿਖਾਓ'],
      highContrast: ['ਹਾਈ ਕੰਟਰਾਸਟ'],
      biggerText: ['ਵੱਡਾ ਟੈਕਸਟ'],
      textSpacing: ['ਟੈਕਸਟ ਸਪੇਸਿੰਗ'],
      pauseAnimations: ['ਐਨੀਮੇਸ਼ਨ ਰੋਕੋ'],
      hideImages: ['ਚਿੱਤਰ ਲੁਕਾਓ'],
      dyslexiaFriendly: ['ਡਿਸਲੈਕਸੀਆ'],
      biggerCursor: ['ਵੱਡਾ ਕਰਸਰ'],
      lineHeight: ['ਲਾਈਨ ਦੀ ਉਚਾਈ'],
      textAlign: ['ਟੈਕਸਟ ਅਲਾਈਨਮੈਂਟ'],
      saturation: ['ਸੰਤ੍ਰਿਪਤੀ'],
      fontSelection: ['ਫੌਂਟ'],
      colorFilter: ['ਰੰਗ ਫਿਲਟਰ'],
      screenReader: ['ਸਕ੍ਰੀਨ ਰੀਡਰ'],
      voiceControl: ['ਵਾਇਸ ਕੰਟਰੋਲ'],
      resetAll: ['ਰੀਸੈਟ']
    },
    mr: {
      showMenu: ['मेनू दाखवा'],
      highContrast: ['उच्च कॉन्ट्रास्ट'],
      biggerText: ['मोठा मजकूर'],
      textSpacing: ['मजकूर अंतर'],
      pauseAnimations: ['अॅनिमेशन थांबवा'],
      hideImages: ['प्रतिमा लपवा'],
      dyslexiaFriendly: ['डिस्लेक्सिया'],
      biggerCursor: ['मोठा कर्सर'],
      lineHeight: ['ओळीची उंची'],
      textAlign: ['मजकूर संरेखन'],
      saturation: ['संपृक्तता'],
      fontSelection: ['फॉन्ट'],
      colorFilter: ['रंग फिल्टर'],
      screenReader: ['स्क्रीन रीडर'],
      voiceControl: ['आवाज नियंत्रण'],
      resetAll: ['रीसेट करा']
    },
    te: {
      showMenu: ['మెనూ చూపించు'],
      highContrast: ['హై కాంట్రాస్ట్'],
      biggerText: ['పెద్ద టెక్స్ట్'],
      textSpacing: ['టెక్స్ట్ స్పేసింగ్'],
      pauseAnimations: ['యానిమేషన్లు ఆపండి'],
      hideImages: ['చిత్రాలను దాచండి'],
      dyslexiaFriendly: ['డిస్లెక్సియా'],
      biggerCursor: ['పెద్ద కర్సర్'],
      lineHeight: ['లైన్ ఎత్తు'],
      textAlign: ['టెక్స్ట్ అలైన్‌మెంట్'],
      saturation: ['సంతృప్తత'],
      fontSelection: ['ఫాంట్'],
      colorFilter: ['కలర్ ఫిల్టర్'],
      screenReader: ['స్క్రీన్ రీడర్'],
      voiceControl: ['వాయిస్ కంట్రోల్'],
      resetAll: ['రీసెట్']
    },
    ta: {
      showMenu: ['மெனுவைக் காட்டு'],
      highContrast: ['உயர் மாறுபாடு'],
      biggerText: ['பெரிய உரை'],
      textSpacing: ['உரை இடைவெளி'],
      pauseAnimations: ['அனிமேஷன் நிறுத்து'],
      hideImages: ['படங்களை மறை'],
      dyslexiaFriendly: ['டிஸ்லெக்ஸியா'],
      biggerCursor: ['பெரிய கர்சர்'],
      lineHeight: ['வரி உயரம்'],
      textAlign: ['உரை சீரமைப்பு'],
      saturation: ['செறிவு'],
      fontSelection: ['எழுத்துரு'],
      colorFilter: ['வண்ண வடிகட்டி'],
      screenReader: ['திரை படிப்பான்'],
      voiceControl: ['குரல் கட்டுப்பாடு'],
      resetAll: ['மீட்டமை']
    },
    ms: {
      showMenu: ['tunjukkan menu'],
      highContrast: ['kontras tinggi'],
      biggerText: ['teks besar'],
      textSpacing: ['jarak teks'],
      pauseAnimations: ['jeda animasi'],
      hideImages: ['sembunyikan imej'],
      dyslexiaFriendly: ['disleksia'],
      biggerCursor: ['kursor besar'],
      lineHeight: ['ketinggian baris'],
      textAlign: ['jajaran teks'],
      saturation: ['ketepuan'],
      fontSelection: ['pilihan fon'],
      colorFilter: ['penapis warna'],
      screenReader: ['pembaca skrin'],
      voiceControl: ['kawalan suara'],
      resetAll: ['tetapkan semula']
    },
    tl: {
      showMenu: ['ipakita ang menu'],
      highContrast: ['mataas na contrast'],
      biggerText: ['mas malaking teksto'],
      textSpacing: ['puwang sa teksto'],
      pauseAnimations: ['ihinto ang animasyon'],
      hideImages: ['itago ang mga larawan'],
      dyslexiaFriendly: ['dyslexia'],
      biggerCursor: ['mas malaking cursor'],
      lineHeight: ['taas ng linya'],
      textAlign: ['pagkakahanay ng teksto'],
      saturation: ['saturation'],
      fontSelection: ['font'],
      colorFilter: ['filter ng kulay'],
      screenReader: ['screen reader'],
      voiceControl: ['voice control'],
      resetAll: ['i-reset lahat']
    }
  },

  // Grid Layout Configuration
  gridLayout: {
    columns: '1fr 1fr', // Default 2-column layout
    gap: '10px' // Gap between grid items
  }
};

// Function to deep merge user configuration with defaults
function mergeConfigs(defaultConfig, userConfig) {
  const result = { ...defaultConfig };

  if (!userConfig) return result;

  for (const key in userConfig) {
    if (userConfig.hasOwnProperty(key)) {
      if (typeof userConfig[key] === 'object' && userConfig[key] !== null && !Array.isArray(userConfig[key])) {
        result[key] = mergeConfigs(defaultConfig[key] || {}, userConfig[key]);
      } else {
        result[key] = userConfig[key];
      }
    }
  }

  return result;
}

// Merge user configuration with defaults
const WIDGET_CONFIG = mergeConfigs(DEFAULT_WIDGET_CONFIG, window.ACCESSIBILITY_WIDGET_CONFIG || {});

// ===========================================
// STYLES & VISUAL ASSETS
// ===========================================

// Widget styles (will go inside Shadow DOM - NOT affected by page styles or accessibility features)
const widgetStyles = `
  :host {
    all: initial;
    font-family: ${WIDGET_CONFIG.typography.fontFamily};

    /* Design tokens — overridden by prefers-color-scheme below */
    --snn-color-primary: ${WIDGET_CONFIG.colors.primary};
    --snn-color-on-primary: ${WIDGET_CONFIG.colors.secondary};
    --snn-color-menu-bg: #f4f4f6;
    --snn-color-menu-border: rgba(0, 0, 0, 0.08);
    --snn-color-option-bg: ${WIDGET_CONFIG.colors.optionBg};
    --snn-color-option-text: ${WIDGET_CONFIG.colors.optionText};
    --snn-color-option-icon: ${WIDGET_CONFIG.colors.optionIcon};
    --snn-color-step-inactive: #d0d3d8;
    --snn-color-focus-ring: ${WIDGET_CONFIG.colors.primary};
    --snn-color-tooltip-bg: rgba(20, 22, 28, 0.92);
    --snn-color-tooltip-text: #fff;
    --snn-shadow-fab: 0 6px 16px rgba(0, 0, 0, 0.18), 0 2px 4px rgba(0, 0, 0, 0.12);
    --snn-shadow-menu: 0 12px 32px rgba(0, 0, 0, 0.18);
    --snn-radius-card: 12px;
    --snn-radius-control: 10px;
    --snn-anim-duration: 200ms;
    --snn-anim-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
    --snn-fab-offset-bottom: max(${WIDGET_CONFIG.widgetPosition.bottom}, env(safe-area-inset-bottom, 0px));
    --snn-fab-offset-side: max(${WIDGET_CONFIG.widgetPosition[WIDGET_CONFIG.widgetPosition.side]}, env(safe-area-inset-${WIDGET_CONFIG.widgetPosition.side}, 0px));
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --snn-color-menu-bg: #15171c;
      --snn-color-menu-border: rgba(255, 255, 255, 0.08);
      --snn-color-option-bg: #1f232b;
      --snn-color-option-text: #e7e9ee;
      --snn-color-option-icon: #e7e9ee;
      --snn-color-step-inactive: #3a3f47;
      --snn-shadow-fab: 0 6px 16px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.4);
      --snn-shadow-menu: 0 12px 32px rgba(0, 0, 0, 0.5);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --snn-anim-duration: 0.01ms;
    }
  }

  * {
    box-sizing: border-box;
  }

  #snn-accessibility-fixed-button {
    position: fixed !important;
    ${WIDGET_CONFIG.widgetPosition.side}: var(--snn-fab-offset-side) !important;
    bottom: var(--snn-fab-offset-bottom) !important;
    z-index: 9999;
    background: var(--snn-color-primary);
    padding: 5px;
    border-radius: 100%;
  }
  
  #snn-accessibility-button {
    background: var(--snn-color-primary);
    border: solid 2px var(--snn-color-on-primary);
    border-radius: ${WIDGET_CONFIG.button.borderRadius};
    cursor: pointer;
    width: ${WIDGET_CONFIG.button.size};
    height: ${WIDGET_CONFIG.button.size};
    box-shadow: var(--snn-shadow-fab);
    transition: transform var(--snn-anim-duration) var(--snn-anim-ease), box-shadow var(--snn-anim-duration) var(--snn-anim-ease);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #snn-accessibility-button:hover {
    transform: scale(${WIDGET_CONFIG.animation.hoverScale});
  }

  #snn-accessibility-button:focus {
    outline: none;
  }

  #snn-accessibility-button:focus-visible {
    outline: 3px solid var(--snn-color-focus-ring);
    outline-offset: 3px;
    box-shadow: var(--snn-shadow-fab), 0 0 0 4px var(--snn-color-on-primary);
  }

  #snn-accessibility-button svg {
    width: ${WIDGET_CONFIG.button.iconSize};
    height: ${WIDGET_CONFIG.button.iconSize};
    color: var(--snn-color-on-primary);
    pointer-events: none;
  }
  
  #snn-accessibility-menu {
    position: fixed;
    top: 0;
    ${WIDGET_CONFIG.widgetPosition.side}: 0;
    max-width: ${WIDGET_CONFIG.widgetWidth};
    width: 100%;
    height: 100vh;
    height: 100dvh;
    overflow-y: auto;
    background-color: var(--snn-color-menu-bg);
    color: var(--snn-color-option-text);
    padding: 0;
    display: none;
    font-family: ${WIDGET_CONFIG.typography.fontFamily};
    z-index: 999999;
    scrollbar-width: thin;
    line-height: 1 !important;
    box-shadow: var(--snn-shadow-menu);
    transform: translateX(${WIDGET_CONFIG.widgetPosition.side === 'left' ? '-100%' : '100%'});
    transition: transform var(--snn-anim-duration) var(--snn-anim-ease);
    padding-bottom: env(safe-area-inset-bottom, 0);
  }

  #snn-accessibility-menu.snn-open {
    transform: translateX(0);
  }

  .snn-accessibility-option {
    font-size: ${WIDGET_CONFIG.menu.fontSize};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px 5px;
    width: 100%;
    background-color: var(--snn-color-option-bg);
    color: var(--snn-color-option-text);
    border: 2px solid transparent;
    cursor: pointer;
    border-radius: var(--snn-radius-card);
    transition: background-color var(--snn-anim-duration) var(--snn-anim-ease),
                border-color var(--snn-anim-duration) var(--snn-anim-ease),
                transform var(--snn-anim-duration) var(--snn-anim-ease);
    line-height: ${WIDGET_CONFIG.typography.lineHeight} !important;
    gap: 6px;
    min-height: 110px;
    font-family: inherit;
  }

  .snn-accessibility-option:hover {
    border-color: var(--snn-color-primary);
  }

  .snn-accessibility-option.active {
    border-color: var(--snn-color-primary);
    background-color: color-mix(in srgb, var(--snn-color-primary) 8%, var(--snn-color-option-bg));
  }

  .snn-accessibility-option:focus {
    outline: none;
  }

  .snn-accessibility-option:focus-visible {
    outline: 3px solid var(--snn-color-focus-ring);
    outline-offset: 2px;
    border-color: var(--snn-color-primary);
  }

  .snn-accessibility-option:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .snn-icon {
    width: ${WIDGET_CONFIG.button.iconSize};
    height: ${WIDGET_CONFIG.button.iconSize};
    color: ${WIDGET_CONFIG.colors.optionIcon};
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .snn-icon svg {
    width: 100%;
    height: 100%;
  }
  
  .snn-button-text {
    text-align: center;
    line-height: 1.2;
    font-size: 15px;
    font-weight: 600;
  }

  .snn-option-steps {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
  }

  .snn-option-step {
    width: 28px;
    height: 5px;
    border-radius: 3px;
    background-color: var(--snn-color-step-inactive);
    transition: background-color var(--snn-anim-duration) var(--snn-anim-ease);
  }

  .snn-option-step.active {
    background-color: var(--snn-color-primary);
  }
  
  .snn-close, .snn-reset-button {
    background: none;
    border: none;
    color: ${WIDGET_CONFIG.colors.secondary};
    cursor: pointer;
    line-height: 1;
    border-radius: ${WIDGET_CONFIG.button.borderRadius};
    width: ${WIDGET_CONFIG.menu.closeButtonSize};
    height: ${WIDGET_CONFIG.menu.closeButtonSize};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    flex-shrink: 0;
  }

  .snn-close svg, .snn-reset-button svg {
    width: 22px;
    height: 22px;
    pointer-events: none;
  }
  
  .snn-close:focus, .snn-reset-button:focus {
    outline: none;
  }

  .snn-close:focus-visible, .snn-reset-button:focus-visible {
    outline: 2px solid var(--snn-color-on-primary);
    outline-offset: 2px;
  }

  .snn-close:hover, .snn-reset-button:hover {
    color: var(--snn-color-on-primary);
    background: rgba(255, 255, 255, 0.18);
  }

  /* Tooltip styles */
  .snn-tooltip {
    position: absolute;
    bottom: -36px;
    left: 50%;
    transform: translateX(-50%) translateY(-4px);
    background-color: var(--snn-color-tooltip-bg);
    color: var(--snn-color-tooltip-text);
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--snn-anim-duration) var(--snn-anim-ease),
                transform var(--snn-anim-duration) var(--snn-anim-ease);
    z-index: 1000;
  }

  .snn-tooltip::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--snn-color-tooltip-bg);
  }

  .snn-close:hover .snn-tooltip,
  .snn-close:focus-visible .snn-tooltip,
  .snn-reset-button:hover .snn-tooltip,
  .snn-reset-button:focus-visible .snn-tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .snn-header {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    background: var(--snn-color-primary);
    height: ${WIDGET_CONFIG.menu.headerHeight};
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    gap: 8px;
    padding-top: max(10px, env(safe-area-inset-top, 0px));
  }

  .snn-content {
    padding: 20px 20px 20px 20px;
  }

  .snn-language-selector {
    width: 100%;
    background: var(--snn-color-option-bg);
    color: var(--snn-color-option-text);
    border: 1px solid var(--snn-color-menu-border);
    padding: 12px 14px;
    font-size: 16px;
    font-family: ${WIDGET_CONFIG.typography.fontFamily};
    border-radius: var(--snn-radius-control);
    margin-bottom: 20px;
    cursor: pointer;
    outline: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 20px;
    padding-right: 40px;
  }

  .snn-language-selector:focus-visible {
    outline: 2px solid var(--snn-color-focus-ring);
    outline-offset: 2px;
  }

  .snn-options-grid {
    display: grid;
    grid-template-columns: ${WIDGET_CONFIG.gridLayout.columns};
    gap: ${WIDGET_CONFIG.gridLayout.gap};
    margin-bottom: 20px;
  }

  .snn-title {
    margin: 0;
    font-size: ${WIDGET_CONFIG.menu.titleFontSize};
    color: var(--snn-color-on-primary);
    line-height: ${WIDGET_CONFIG.typography.lineHeight} !important;
    margin-left: 5px;
    font-weight: ${WIDGET_CONFIG.typography.titleFontWeight};
    flex: 1;
    letter-spacing: 0.5px !important;
    text-align: left;
  }

  /* Screen-reader-only utility (for aria-live announcements) */
  .snn-sr-only {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Mobile: < 480px — single column, full-width, larger header buttons */
  @media (max-width: 480px) {
    #snn-accessibility-menu {
      max-width: 100%;
    }
    .snn-options-grid {
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .snn-content {
      padding: 16px;
    }
    .snn-accessibility-option {
      min-height: 100px;
      padding: 8px 4px;
    }
  }

  /* Very narrow phones: < 360px — single column */
  @media (max-width: 360px) {
    .snn-options-grid {
      grid-template-columns: 1fr;
    }
    .snn-accessibility-option {
      flex-direction: row;
      justify-content: flex-start;
      min-height: 60px;
      padding: 10px 12px;
      gap: 12px;
    }
    .snn-button-text {
      text-align: left;
    }
  }
`;

// Page accessibility styles (will go in main document - these affect the page, NOT the widget)
const pageStyles = `
  /* High Contrast Modes */
  .snn-high-contrast-medium {
    filter: none !important;
  }
  .snn-high-contrast-medium *:not(#snn-accessibility-widget-container):not(#snn-accessibility-widget-container *) {
    filter: contrast(1.3) !important;
  }
  
  .snn-high-contrast-high {
    background-color: #000 !important;
    color: #fff !important;
    filter: none !important;
  }
  .snn-high-contrast-high *:not(#snn-accessibility-widget-container):not(#snn-accessibility-widget-container *) {
    background-color: #000 !important;
    color: #fff !important;
    filter: contrast(1.5) !important;
  }
  
  .snn-high-contrast-ultra {
    background-color: #000 !important;
    color: #ffff00 !important;
    filter: none !important;
  }
  .snn-high-contrast-ultra *:not(#snn-accessibility-widget-container):not(#snn-accessibility-widget-container *) {
    background-color: #000 !important;
    color: #ffff00 !important;
    filter: contrast(2.0) !important;
  }
  
  /* Text Size */
  .snn-bigger-text-medium * {
    font-size: 20px !important;
  }
  .snn-bigger-text-large * {
    font-size: 24px !important;
  }
  .snn-bigger-text-xlarge * {
    font-size: 28px !important;
  }
  
  /* Text Spacing - 3 Options */
  .snn-text-spacing-light * {
    letter-spacing: 0.1em !important;
    word-spacing: 0.5em !important;
  }
  .snn-text-spacing-medium * {
    letter-spacing: 0.15em !important;
    word-spacing: 1em !important;
  }
  .snn-text-spacing-heavy * {
    letter-spacing: 0.25em !important;
    word-spacing: 2em !important;
  }
  
  /* Pause Animations (Enhanced to include Reduced Motion features) */
  .snn-pause-animations * {
    animation: none !important;
    transition: none !important;
  }
  .snn-pause-animations *::before {
    animation: none !important;
    transition: none !important;
  }
  .snn-pause-animations *::after {
    animation: none !important;
    transition: none !important;
  }
  
  /* Dyslexia Font */
  .snn-dyslexia-font {
    font-family: 'Comic Sans MS', 'Chalkboard SE', 'Bradley Hand', 'Brush Script MT', fantasy !important;
  }
  .snn-dyslexia-font * {
    font-family: 'Comic Sans MS', 'Chalkboard SE', 'Bradley Hand', 'Brush Script MT', fantasy !important;
  }
  
  /* Line Height - 3 Options */
  .snn-line-height-2em * {
    line-height: 2 !important;
  }
  .snn-line-height-3em * {
    line-height: 3 !important;
  }
  .snn-line-height-4em * {
    line-height: 4 !important;
  }
  
  /* Text Alignment */
  .snn-text-align-left * {
    text-align: left !important;
  }
  .snn-text-align-center * {
    text-align: center !important;
  }
  .snn-text-align-right * {
    text-align: right !important;
  }
  
  /* Bigger Cursor */
  .snn-bigger-cursor {
    cursor: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyOS4xODhweCIgaGVpZ2h0PSI0My42MjVweCIgdmlld0JveD0iMCAwIDI5LjE4OCA0My42MjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5LjE4OCA0My42MjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0Q5REFEOSIgc3Ryb2tlLXdpZHRoPSIxLjE0MDYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIyLjgsNC41NDkgMjYuODQ3LDE5LjkwMiAxNi45NjQsMjIuNzAxIDI0LjIzOSwzNy43NDkgMTguMjc4LDQyLjAxNyA5Ljc0MSwzMC43MjQgMS4xMzgsMzUuODA5ICIvPjxnPjxnPjxnPjxwYXRoIGZpbGw9IiMyMTI2MjciIGQ9Ik0yOS4xNzUsMjEuMTU1YzAuMDcxLTAuNjEzLTAuMTY1LTEuMjUzLTAuNjM1LTEuNTczTDIuMTY1LDAuMjU4Yy0wLjQyNC0wLjMyLTAuOTg4LTAuMzQ2LTEuNDM1LTAuMDUzQzAuMjgyLDAuNDk3LDAsMS4wMywwLDEuNjE3djM0LjE3MWMwLDAuNjEzLDAuMzA2LDEuMTQ2LDAuNzc2LDEuNDM5YzAuNDcxLDAuMjY3LDEuMDU5LDAuMjEzLDEuNDgyLTAuMTZsNy40ODItNi4zNDRsNi44NDcsMTIuMTU1YzAuMjU5LDAuNDgsMC43MjksMC43NDYsMS4yLDAuNzQ2YzAuMjM1LDAsMC40OTQtMC4wOCwwLjcwNi0wLjIxM2w2Ljk4OC00LjU4NWMwLjMyOS0wLjIxMywwLjU2NS0wLjU4NiwwLjY1OS0xLjAxM2MwLjA5NC0wLjQyNiwwLjAyNC0wLjg4LTAuMTg4LTEuMjI2bC02LjM3Ni0xMS4zODJsOC42MTEtMi43NDVDMjguNzA1LDIyLjI3NCwyOS4xMDUsMjEuNzY4LDI5LjE3NSwyMS4xNTV6IE0xNi45NjQsMjIuNzAxYy0wLjQyNCwwLjEzMy0wLjc3NiwwLjUwNi0wLjk0MSwwLjk2Yy0wLjE2NSwwLjQ4LTAuMTE4LDEuMDEzLDAuMTE4LDEuNDM5bDYuNTg4LDExLjc4MWwtNC41NDEsMi45ODVsLTYuODk0LTEyLjMxNWMtMC4yMTItMC4zNzMtMC41NDEtMC42NC0wLjk0MS0wLjcyYy0wLjA5NC0wLjAyNy0wLjE2NS0wLjAyNy0wLjI1OS0wLjAyN2MtMC4zMDYsMC0wLjU4OCwwLjEwNy0wLjg0NywwLjMyTDIuOCwzMi41OVY0LjU0OWwyMS41OTksMTUuODA2TDE2Ljk2NCwyMi43MDF6Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=='), auto !important;
  }
  .snn-bigger-cursor * {
    cursor: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyOS4xODhweCIgaGVpZ2h0PSI0My42MjVweCIgdmlld0JveD0iMCAwIDI5LjE4OCA0My42MjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5LjE4OCA0My42MjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0Q5REFEOSIgc3Ryb2tlLXdpZHRoPSIxLjE0MDYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIyLjgsNC41NDkgMjYuODQ3LDE5LjkwMiAxNi45NjQsMjIuNzAxIDI0LjIzOSwzNy43NDkgMTguMjc4LDQyLjAxNyA5Ljc0MSwzMC43MjQgMS4xMzgsMzUuODA5ICIvPjxnPjxnPjxnPjxwYXRoIGZpbGw9IiMyMTI2MjciIGQ9Ik0yOS4xNzUsMjEuMTU1YzAuMDcxLTAuNjEzLTAuMTY1LTEuMjUzLTAuNjM1LTEuNTczTDIuMTY1LDAuMjU4Yy0wLjQyNC0wLjMyLTAuOTg4LTAuMzQ2LTEuNDM1LTAuMDUzQzAuMjgyLDAuNDk3LDAsMS4wMywwLDEuNjE3djM0LjE3MWMwLDAuNjEzLDAuMzA2LDEuMTQ2LDAuNzc2LDEuNDM5YzAuNDcxLDAuMjY3LDEuMDU5LDAuMjEzLDEuNDgyLTAuMTZsNy40ODItNi4zNDRsNi44NDcsMTIuMTU1YzAuMjU5LDAuNDgsMC43MjksMC43NDYsMS4yLDAuNzQ2YzAuMjM1LDAsMC40OTQtMC4wOCwwLjcwNi0wLjIxM2w2Ljk4OC00LjU4NWMwLjMyOS0wLjIxMywwLjU2NS0wLjU4NiwwLjY1OS0xLjAxM2MwLjA5NC0wLjQyNiwwLjAyNC0wLjg4LTAuMTg4LTEuMjI2bC02LjM3Ni0xMS4zODJsOC42MTEtMi43NDVDMjguNzA1LDIyLjI3NCwyOS4xMDUsMjEuNzY4LDI5LjE3NSwyMS4xNTV6IE0xNi45NjQsMjIuNzAxYy0wLjQyNCwwLjEzMy0wLjc3NiwwLjUwNi0wLjk0MSwwLjk2Yy0wLjE2NSwwLjQ4LTAuMTE4LDEuMDEzLDAuMTE4LDEuNDM5bDYuNTg4LDExLjc4MWwtNC41NDEsMi45ODVsLTYuODk0LTEyLjMxNWMtMC4yMTItMC4zNzMtMC41NDEtMC42NC0wLjk0MS0wLjcyYy0wLjA5NC0wLjAyNy0wLjE2NS0wLjAyNy0wLjI1OS0wLjAyN2MtMC4zMDYsMC0wLjU4OCwwLjEwNy0wLjg0NywwLjMyTDIuOCwzMi41OVY0LjU0OWwyMS41OTksMTUuODA2TDE2Ljk2NCwyMi43MDF6Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=='), auto !important;
  }
  
  /* Font Selection */
  .snn-font-arial {
    font-family: Arial, sans-serif !important;
  }
  .snn-font-arial * {
    font-family: Arial, sans-serif !important;
  }
  .snn-font-times {
    font-family: 'Times New Roman', serif !important;
  }
  .snn-font-times * {
    font-family: 'Times New Roman', serif !important;
  }
  .snn-font-verdana {
    font-family: Verdana, sans-serif !important;
  }
  .snn-font-verdana * {
    font-family: Verdana, sans-serif !important;
  }
  
  /* Color Filters */
  .snn-filter-protanopia {
    filter: none !important;
  }
  .snn-filter-protanopia body > *:not(#snn-accessibility-widget-container) {
    filter: url('#protanopia-filter') !important;
  }
  .snn-filter-deuteranopia {
    filter: none !important;
  }
  .snn-filter-deuteranopia body > *:not(#snn-accessibility-widget-container) {
    filter: url('#deuteranopia-filter') !important;
  }
  .snn-filter-tritanopia {
    filter: none !important;
  }
  .snn-filter-tritanopia body > *:not(#snn-accessibility-widget-container) {
    filter: url('#tritanopia-filter') !important;
  }
  .snn-filter-grayscale {
    filter: none !important;
  }
  .snn-filter-grayscale body > *:not(#snn-accessibility-widget-container) {
    filter: grayscale(100%) !important;
  }
  
  /* Saturation Filters */
  .snn-saturation-low {
    filter: none !important;
  }
  .snn-saturation-low body > *:not(#snn-accessibility-widget-container) {
    filter: saturate(0.5) !important;
  }
  .snn-saturation-high {
    filter: none !important;
  }
  .snn-saturation-high body > *:not(#snn-accessibility-widget-container) {
    filter: saturate(10) !important;
  }
  .snn-saturation-none {
    filter: none !important;
  }
  .snn-saturation-none body > *:not(#snn-accessibility-widget-container) {
    filter: grayscale(100%) saturate(0) !important;
  }
  
  /* Protect widget container from page styles */
  #snn-accessibility-widget-container,
  #snn-accessibility-widget-container * {
    filter: none !important;
    background-color: initial !important;
    color: initial !important;
  }
`;

// ===========================================
// SVG ICONS
// ===========================================

// Consistent outlined icon set — 24x24 viewBox, 1.5 stroke, currentColor
// Inspired by Lucide. All icons render via the cascaded `color` property.
const ICON_ATTRS = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

const icons = {
  // Main FAB — Universal Access symbol (accessibility person)
  buttonsvg: `<svg ${ICON_ATTRS}><circle cx="12" cy="4" r="1.5"/><path d="M6 8a13 13 0 0 0 12 0"/><path d="M12 6.5v6"/><path d="m9 21 3-8.5 3 8.5"/></svg>`,
  // Half-filled circle
  highContrast: `<svg ${ICON_ATTRS}><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/></svg>`,
  // Two A's of different sizes
  biggerText: `<svg ${ICON_ATTRS}><path d="m3 18 3-9 3 9"/><path d="M4 15h4"/><path d="m13 18 4-12 4 12"/><path d="M14.5 13.5h5"/></svg>`,
  // Letter with horizontal expansion arrows
  textSpacing: `<svg ${ICON_ATTRS}><path d="m3 18 3-9 3 9"/><path d="M4 15h4"/><path d="m15 18 3-9 3 9"/><path d="M16 15h4"/><path d="M10.5 12h3"/><path d="m9 10.5-1.5 1.5L9 13.5"/><path d="m15 10.5 1.5 1.5L15 13.5"/></svg>`,
  // Pause icon
  pauseAnimations: `<svg ${ICON_ATTRS}><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,
  // Image with diagonal slash
  hideImages: `<svg ${ICON_ATTRS}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.5"/><path d="m21 15-3.5-3.5L9.5 19.5"/><path d="M3 3l18 18"/></svg>`,
  // Stylized D (OpenDyslexic-inspired)
  dyslexiaFont: `<svg ${ICON_ATTRS}><path d="M7 4h4a8 8 0 0 1 0 16H7z"/><path d="M11 8v8"/></svg>`,
  // Mouse pointer
  biggerCursor: `<svg ${ICON_ATTRS}><path d="m4 4 7 17 2.5-7.5L21 11z"/></svg>`,
  // Lines stacked with vertical arrows
  lineHeight: `<svg ${ICON_ATTRS}><path d="M3 4v16"/><path d="m1 6 2-2 2 2"/><path d="m1 18 2 2 2-2"/><path d="M9 6h12"/><path d="M9 12h12"/><path d="M9 18h12"/></svg>`,
  // Three justify lines
  textAlign: `<svg ${ICON_ATTRS}><path d="M3 6h18"/><path d="M3 12h12"/><path d="M3 18h18"/></svg>`,
  // Speaker with sound waves
  screenReader: `<svg ${ICON_ATTRS}><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  // Rotate counter-clockwise
  resetAll: `<svg ${ICON_ATTRS}><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>`,
  // Microphone
  voiceControl: `<svg ${ICON_ATTRS}><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/><path d="M8 22h8"/></svg>`,
  // Aa (case sensitive) — large A and lowercase a
  fontSelection: `<svg ${ICON_ATTRS}><path d="m3 18 3-9 3 9"/><path d="M4 15h4"/><circle cx="16.5" cy="15.5" r="3.5"/><path d="M20 12v7"/></svg>`,
  // Droplet
  colorFilter: `<svg ${ICON_ATTRS}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 6 12 3.5C11.5 6 9 8 7 9.5S5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
  // Three overlapping circles (color mixing)
  saturation: `<svg ${ICON_ATTRS}><circle cx="9" cy="10" r="5"/><circle cx="15" cy="10" r="5"/><circle cx="12" cy="15" r="5"/></svg>`,
  // Wave with slash (reduced motion)
  reducedMotion: `<svg ${ICON_ATTRS}><path d="M3 12c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 4.5 0 3 3 4.5 0"/><path d="M4 20 20 4"/></svg>`,
  // Close X
  close: `<svg ${ICON_ATTRS}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
};

// ===========================================
// SHADOW DOM SETUP
// ===========================================

let shadowRoot = null;

// Inject styles into the page (NOT the widget)
function injectPageStyles() {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = pageStyles;
  styleSheet.id = 'snn-accessibility-page-styles';
  document.head.appendChild(styleSheet);

  // Add SVG color blindness filters to main document
  const svgFilters = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgFilters.style.position = 'absolute';
  svgFilters.style.width = '0';
  svgFilters.setAttribute('class', 'snn-accessibility-filters');
  svgFilters.style.height = '0';
  svgFilters.innerHTML = `
    <defs>
      <filter id="protanopia-filter">
        <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
      </filter>
      <filter id="deuteranopia-filter">
        <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
      </filter>
      <filter id="tritanopia-filter">
        <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
      </filter>
    </defs>
  `;
  document.body.appendChild(svgFilters);
}

// Create shadow DOM container
function createShadowContainer() {
  const container = document.createElement('div');
  container.id = 'snn-accessibility-widget-container';
  document.body.appendChild(container);

  // Create shadow root
  shadowRoot = container.attachShadow({ mode: 'open' });

  // Add widget styles to shadow DOM
  const styleElement = document.createElement('style');
  styleElement.textContent = widgetStyles;
  shadowRoot.appendChild(styleElement);

  return shadowRoot;
}

// ===========================================
// CORE UTILITY FUNCTIONS
// ===========================================

// Cache for DOM elements to improve performance
const domCache = {
  get body() {
    return document.body;
  },
  get documentElement() {
    return document.documentElement;
  },
  images: null,
  lastImageUpdate: 0,
  getImages: function () {
    const now = Date.now();
    if (!this.images || now - this.lastImageUpdate > 5000) {
      this.images = document.querySelectorAll('img');
      this.lastImageUpdate = now;
    }
    return this.images;
  }
};

// Apply saved settings from localStorage (optimized)
function applySettings() {
  // Check if body element exists
  if (!domCache.body || !domCache.documentElement) {
    console.warn('Body or document element not ready yet');
    return;
  }

  const settings = [
    { key: 'biggerCursor', className: 'snn-bigger-cursor' },
    { key: 'biggerText', className: 'snn-bigger-text' },
    { key: 'highContrast', className: 'snn-high-contrast' },
    { key: 'dyslexiaFont', className: 'snn-dyslexia-font' },
    { key: 'textAlign', className: 'snn-text-align' },
    { key: 'pauseAnimations', className: 'snn-pause-animations' },
  ];

  // Batch DOM operations for better performance
  const bodyClassesToAdd = [];
  const bodyClassesToRemove = [];
  const docClassesToAdd = [];
  const docClassesToRemove = [];

  settings.forEach(({ key, className, target = domCache.body }) => {
    const isActive = localStorage.getItem(key) === 'true';
    if (className) {
      if (target === domCache.documentElement) {
        if (isActive) {
          docClassesToAdd.push(className);
        } else {
          docClassesToRemove.push(className);
        }
      } else {
        if (isActive) {
          bodyClassesToAdd.push(className);
        } else {
          bodyClassesToRemove.push(className);
        }
      }
    }
  });

  // Apply all class changes at once - ONLY remove classes that start with 'snn-'
  if (bodyClassesToAdd.length > 0) {
    domCache.body.classList.add(...bodyClassesToAdd);
  }
  if (bodyClassesToRemove.length > 0) {
    // Only remove our own classes, never remove classes that don't start with 'snn-'
    bodyClassesToRemove.forEach(className => {
      if (className.startsWith('snn-')) {
        domCache.body.classList.remove(className);
      }
    });
  }
  if (docClassesToAdd.length > 0) {
    domCache.documentElement.classList.add(...docClassesToAdd);
  }
  if (docClassesToRemove.length > 0) {
    // Only remove our own classes, never remove classes that don't start with 'snn-'
    docClassesToRemove.forEach(className => {
      if (className.startsWith('snn-')) {
        domCache.documentElement.classList.remove(className);
      }
    });
  }

  // Handle font selection - only remove widget's own font classes
  const fontClasses = ['snn-font-arial', 'snn-font-times', 'snn-font-verdana'];
  fontClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedFont = localStorage.getItem('fontSelection');
  if (selectedFont) {
    domCache.body.classList.add(`snn-font-${selectedFont}`);
  }

  // Handle color filters - only remove widget's own filter classes
  const filterClasses = ['snn-filter-protanopia', 'snn-filter-deuteranopia', 'snn-filter-tritanopia', 'snn-filter-grayscale'];
  filterClasses.forEach(className => {
    if (domCache.documentElement.classList.contains(className)) {
      domCache.documentElement.classList.remove(className);
    }
  });
  const selectedFilter = localStorage.getItem('colorFilter');
  if (selectedFilter) {
    domCache.documentElement.classList.add(`snn-filter-${selectedFilter}`);
  }

  // Handle saturation filters - only remove widget's own saturation classes
  const saturationClasses = ['snn-saturation-low', 'snn-saturation-high', 'snn-saturation-none'];
  saturationClasses.forEach(className => {
    if (domCache.documentElement.classList.contains(className)) {
      domCache.documentElement.classList.remove(className);
    }
  });
  const selectedSaturation = localStorage.getItem('saturation');
  if (selectedSaturation) {
    domCache.documentElement.classList.add(`snn-saturation-${selectedSaturation}`);
  }

  // Handle text alignment - only remove widget's own alignment classes
  const alignClasses = ['snn-text-align-left', 'snn-text-align-center', 'snn-text-align-right'];
  alignClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedAlign = localStorage.getItem('textAlign');
  if (selectedAlign) {
    domCache.body.classList.add(`snn-text-align-${selectedAlign}`);
  }

  // Handle bigger text - only remove widget's own text size classes
  const textClasses = ['snn-bigger-text-medium', 'snn-bigger-text-large', 'snn-bigger-text-xlarge'];
  textClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedTextSize = localStorage.getItem('biggerText');
  if (selectedTextSize) {
    domCache.body.classList.add(`snn-bigger-text-${selectedTextSize}`);
  }

  // Handle high contrast - only remove widget's own contrast classes
  const contrastClasses = ['snn-high-contrast-medium', 'snn-high-contrast-high', 'snn-high-contrast-ultra'];
  contrastClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedContrast = localStorage.getItem('highContrast');
  if (selectedContrast) {
    domCache.body.classList.add(`snn-high-contrast-${selectedContrast}`);
  }

  // Handle Text Spacing (3 Levels) - only remove widget's own spacing classes
  const spacingClasses = ['snn-text-spacing-light', 'snn-text-spacing-medium', 'snn-text-spacing-heavy'];
  spacingClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedSpacing = localStorage.getItem('textSpacing');
  if (selectedSpacing) {
    domCache.body.classList.add(`snn-text-spacing-${selectedSpacing}`);
  }

  // Handle Line Height (3 Levels) - only remove widget's own line height classes
  const lineHeightClasses = ['snn-line-height-2em', 'snn-line-height-3em', 'snn-line-height-4em'];
  lineHeightClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });
  const selectedLineHeight = localStorage.getItem('lineHeight');
  if (selectedLineHeight) {
    domCache.body.classList.add(`snn-line-height-${selectedLineHeight}`);
  }

  // Handle images with cached query
  const hideImages = localStorage.getItem('hideImages') === 'true';
  const displayStyle = hideImages ? 'none' : '';
  domCache.getImages().forEach((img) => {
    img.style.display = displayStyle;
  });

  if (screenReader.active && screenReader.isSupported) {
    document.addEventListener('focusin', screenReader.handleFocus);
  }

  if (voiceControl.isActive && voiceControl.isSupported) {
    voiceControl.startListening();
  }
}

// ===========================================
// UI COMPONENTS
// ===========================================

// Create the accessibility button
function createAccessibilityButton() {
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'snn-accessibility-fixed-button';

  const button = document.createElement('button');
  button.id = 'snn-accessibility-button';
  button.innerHTML = icons.buttonsvg;
  button.setAttribute('aria-label', getTranslation('accessibilityMenu'));

  button.addEventListener('click', function () {
    toggleMenu();
  });

  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  buttonContainer.appendChild(button);
  shadowRoot.appendChild(buttonContainer);
}

// Reset all accessibility settings
function resetAccessibilitySettings() {
  const keys = [
    'biggerCursor',
    'biggerText',
    'dyslexiaFont',
    'hideImages',
    'lineHeight',
    'pauseAnimations',
    'screenReader',
    'textAlign',
    'textSpacing',
    'highContrast',
    'voiceControl',
    'fontSelection',
    'colorFilter',
    'saturation',
  ];
  keys.forEach((key) => localStorage.removeItem(key));

  // Remove only widget's own CSS classes - never touch existing body/document classes
  // Check if body and documentElement exist first
  if (!document.body || !document.documentElement) {
    console.warn('Body or document element not ready during reset');
    return;
  }

  // Remove body classes only if they exist and start with 'snn-'
  const cssClasses = [
    'snn-bigger-cursor',
    'snn-bigger-text',
    'snn-dyslexia-font',
    'snn-pause-animations',
    'snn-text-align',
    'snn-font-arial',
    'snn-font-times',
    'snn-font-verdana',
    'snn-high-contrast-medium',
    'snn-high-contrast-high',
    'snn-high-contrast-ultra',
    'snn-bigger-text-medium',
    'snn-bigger-text-large',
    'snn-bigger-text-xlarge',
    'snn-text-spacing-light',
    'snn-text-spacing-medium',
    'snn-text-spacing-heavy',
    'snn-line-height-2em',
    'snn-line-height-3em',
    'snn-line-height-4em',
    'snn-text-align-left',
    'snn-text-align-center',
    'snn-text-align-right'
  ];
  cssClasses.forEach(cls => {
    if (document.body.classList.contains(cls)) {
      document.body.classList.remove(cls);
    }
  });

  // Remove document element classes only if they exist and start with 'snn-'
  const documentClasses = [
    'snn-filter-protanopia',
    'snn-filter-deuteranopia',
    'snn-filter-tritanopia',
    'snn-filter-grayscale',
    'snn-saturation-low',
    'snn-saturation-high',
    'snn-saturation-none'
  ];
  documentClasses.forEach(cls => {
    if (document.documentElement.classList.contains(cls)) {
      document.documentElement.classList.remove(cls);
    }
  });

  domCache.getImages().forEach((img) => (img.style.display = ''));

  if (screenReader.active) {
    screenReader.toggle(false);
  }

  if (voiceControl.isActive) {
    voiceControl.toggle(false);
  }

  applySettings();

  const buttons = shadowRoot.querySelectorAll('#snn-accessibility-menu .snn-accessibility-option');
  buttons.forEach((button) => {
    button.classList.remove('active');
    button.setAttribute('aria-pressed', 'false');

    // Reset step indicators
    const steps = button.querySelectorAll('.snn-option-step');
    steps.forEach(step => step.classList.remove('active'));
  });

  announce(getTranslation('resetAllSettings'));
}

// Create toggle buttons for accessibility options
function createToggleButton(
  buttonText,
  localStorageKey,
  className,
  targetElement = document.body,
  customToggleFunction = null,
  iconSVG = '',
  requiresFeature = null,
  optionId = null
) {
  const button = document.createElement('button');
  button.innerHTML = `
    <span class="snn-icon">${iconSVG}</span>
    <span class="snn-button-text">${buttonText}</span>
  `;
  button.setAttribute('data-key', localStorageKey);
  button.setAttribute('aria-label', buttonText);
  button.classList.add('snn-accessibility-option');
  if (optionId) {
    button.setAttribute('data-accessibility-option-id', optionId);
  }

  // Check if feature is supported
  if (requiresFeature && !requiresFeature.isSupported) {
    button.disabled = true;
    button.setAttribute('title', `${buttonText} ${getTranslation('notSupportedBrowser')}`);
    button.style.opacity = '0.5';
    return button;
  }

  const isActive = localStorage.getItem(localStorageKey) === 'true';
  button.setAttribute('aria-pressed', isActive);
  button.setAttribute('role', 'switch');
  if (isActive) {
    button.classList.add('active');
  }

  button.addEventListener('click', function () {
    handleToggle();
  });

  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  });

  function handleToggle() {
    const newIsActive = localStorage.getItem(localStorageKey) !== 'true';

    // If there's a custom toggle function, call it and check if it succeeded
    if (customToggleFunction) {
      const success = customToggleFunction(newIsActive);
      if (success === false) {
        // Feature not supported or failed
        return;
      }
    }

    localStorage.setItem(localStorageKey, newIsActive);
    button.setAttribute('aria-pressed', newIsActive);

    if (newIsActive) {
      button.classList.add('active');
      if (className) {
        targetElement.classList.add(className);
      }
    } else {
      button.classList.remove('active');
      if (className) {
        targetElement.classList.remove(className);
      }
    }

    announce(`${buttonText}: ${newIsActive ? 'on' : 'off'}`);
  }

  return button;
}

// Create special action buttons (for cycling through options)
function createActionButton(buttonText, actionFunction, iconSVG, optionsConfig = null, optionId = null) {
  const button = document.createElement('button');

  let buttonHTML = `
    <span class="snn-icon">${iconSVG}</span>
    <span class="snn-button-text">${buttonText}</span>
  `;

  // Add option steps if configured
  if (optionsConfig) {
    buttonHTML += '<div class="snn-option-steps">';
    for (let i = 0; i < optionsConfig.count; i++) {
      buttonHTML += '<div class="snn-option-step"></div>';
    }
    buttonHTML += '</div>';
  }

  button.innerHTML = buttonHTML;
  button.setAttribute('aria-label', buttonText);
  button.classList.add('snn-accessibility-option');
  button.setAttribute('data-options-config', optionsConfig ? JSON.stringify(optionsConfig) : '');
  if (optionId) {
    button.setAttribute('data-accessibility-option-id', optionId);
    button.setAttribute('data-key', optionId); // Add data-key for voice commands
  }

  // Update initial status
  updateActionButtonStatus(button, optionId, optionsConfig);

  button.addEventListener('click', function () {
    const result = actionFunction();
    if (result) {
      updateActionButtonStatus(button, optionId, optionsConfig);
      announce(`${buttonText}: ${result}`);
    }
  });

  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const result = actionFunction();
      if (result) {
        updateActionButtonStatus(button, optionId, optionsConfig);
        announce(`${buttonText}: ${result}`);
      }
    }
  });

  return button;
}

// Update action button status on page load
function updateActionButtonStatus(button, optionId, optionsConfig) {
  if (!optionsConfig) return;

  const steps = button.querySelectorAll('.snn-option-step');
  let currentIndex = -1;

  if (optionId === 'fontSelection') {
    const currentFont = localStorage.getItem('fontSelection');
    const fonts = ['arial', 'times', 'verdana'];
    currentIndex = currentFont ? fonts.indexOf(currentFont) : -1;
  } else if (optionId === 'colorFilter') {
    const currentFilter = localStorage.getItem('colorFilter');
    const filters = ['protanopia', 'deuteranopia', 'tritanopia', 'grayscale'];
    currentIndex = currentFilter ? filters.indexOf(currentFilter) : -1;
  } else if (optionId === 'textAlign') {
    const currentAlign = localStorage.getItem('textAlign');
    const alignments = ['left', 'center', 'right'];
    currentIndex = currentAlign ? alignments.indexOf(currentAlign) : -1;
  } else if (optionId === 'biggerText') {
    const currentSize = localStorage.getItem('biggerText');
    const sizes = ['medium', 'large', 'xlarge'];
    currentIndex = currentSize ? sizes.indexOf(currentSize) : -1;
  } else if (optionId === 'highContrast') {
    const currentContrast = localStorage.getItem('highContrast');
    const contrasts = ['medium', 'high', 'ultra'];
    currentIndex = currentContrast ? contrasts.indexOf(currentContrast) : -1;
  } else if (optionId === 'textSpacing') {
    const currentSpacing = localStorage.getItem('textSpacing');
    const spacings = ['light', 'medium', 'heavy'];
    currentIndex = currentSpacing ? spacings.indexOf(currentSpacing) : -1;
  } else if (optionId === 'lineHeight') {
    const currentLineHeight = localStorage.getItem('lineHeight');
    const heights = ['2em', '3em', '4em'];
    currentIndex = currentLineHeight ? heights.indexOf(currentLineHeight) : -1;
  } else if (optionId === 'saturation') {
    const currentSaturation = localStorage.getItem('saturation');
    const saturations = ['low', 'high', 'none'];
    currentIndex = currentSaturation ? saturations.indexOf(currentSaturation) : -1;
  }

  // Update step indicators - show all previous steps as active
  steps.forEach((step, index) => {
    if (index <= currentIndex) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  // Toggle active class on button itself if any option is selected
  if (currentIndex !== -1) {
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
  } else {
    button.classList.remove('active');
    button.setAttribute('aria-pressed', 'false');
  }
}

// ===========================================
// FEATURE TOGGLE FUNCTIONS
// ===========================================

// Function to hide or show images (optimized)
function toggleHideImages(isActive) {
  const displayStyle = isActive ? 'none' : '';
  domCache.getImages().forEach((img) => {
    img.style.display = displayStyle;
  });
}

// Font selection handler (optimized)
function handleFontSelection() {
  const fonts = ['arial', 'times', 'verdana'];
  const currentFont = localStorage.getItem('fontSelection') || 'default';
  const currentIndex = fonts.indexOf(currentFont);
  const nextIndex = (currentIndex + 1) % (fonts.length + 1); // +1 for default

  // Remove only widget's own font classes
  const fontClasses = ['snn-font-arial', 'snn-font-times', 'snn-font-verdana'];
  fontClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === fonts.length) {
    // Default font
    localStorage.removeItem('fontSelection');
    return getTranslation('defaultFont');
  } else {
    const selectedFont = fonts[nextIndex];
    localStorage.setItem('fontSelection', selectedFont);
    domCache.body.classList.add(`snn-font-${selectedFont}`);
    return selectedFont.charAt(0).toUpperCase() + selectedFont.slice(1);
  }
}

// Saturation handler with 3 states (low, high, none/grayscale)
function handleSaturation() {
  const saturations = ['low', 'high', 'none'];
  const currentSaturation = localStorage.getItem('saturation') || 'default';
  const currentIndex = saturations.indexOf(currentSaturation);
  const nextIndex = (currentIndex + 1) % (saturations.length + 1); // +1 for default

  // Remove only widget's own saturation classes
  const saturationClasses = ['snn-saturation-low', 'snn-saturation-high', 'snn-saturation-none'];
  saturationClasses.forEach(className => {
    if (domCache.documentElement.classList.contains(className)) {
      domCache.documentElement.classList.remove(className);
    }
  });

  if (nextIndex === saturations.length) {
    // Default saturation
    localStorage.removeItem('saturation');
    return 'Default';
  } else {
    const selectedSaturation = saturations[nextIndex];
    localStorage.setItem('saturation', selectedSaturation);
    domCache.documentElement.classList.add(`snn-saturation-${selectedSaturation}`);
    if (selectedSaturation === 'none') {
      return 'No Saturation';
    }
    return selectedSaturation.charAt(0).toUpperCase() + selectedSaturation.slice(1) + ' Saturation';
  }
}

// Color filter handler (optimized)
function handleColorFilter() {
  const filters = ['protanopia', 'deuteranopia', 'tritanopia', 'grayscale'];
  const currentFilter = localStorage.getItem('colorFilter') || 'none';
  const currentIndex = filters.indexOf(currentFilter);
  const nextIndex = (currentIndex + 1) % (filters.length + 1); // +1 for none

  // Remove only widget's own filter classes
  const filterClasses = ['snn-filter-protanopia', 'snn-filter-deuteranopia', 'snn-filter-tritanopia', 'snn-filter-grayscale'];
  filterClasses.forEach(className => {
    if (domCache.documentElement.classList.contains(className)) {
      domCache.documentElement.classList.remove(className);
    }
  });

  if (nextIndex === filters.length) {
    // No filter
    localStorage.removeItem('colorFilter');
    return getTranslation('noFilter');
  } else {
    const selectedFilter = filters[nextIndex];
    localStorage.setItem('colorFilter', selectedFilter);
    domCache.documentElement.classList.add(`snn-filter-${selectedFilter}`);
    return selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1);
  }
}

// Text align handler with 3 states
function handleTextAlign() {
  const alignments = ['left', 'center', 'right'];
  const currentAlign = localStorage.getItem('textAlign') || 'none';
  const currentIndex = alignments.indexOf(currentAlign);
  const nextIndex = (currentIndex + 1) % (alignments.length + 1); // +1 for none

  // Remove only widget's own alignment classes
  const alignClasses = ['snn-text-align-left', 'snn-text-align-center', 'snn-text-align-right'];
  alignClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === alignments.length) {
    // Default alignment
    localStorage.removeItem('textAlign');
    return getTranslation('default');
  } else {
    const selectedAlign = alignments[nextIndex];
    localStorage.setItem('textAlign', selectedAlign);
    domCache.body.classList.add(`snn-text-align-${selectedAlign}`);
    return selectedAlign.charAt(0).toUpperCase() + selectedAlign.slice(1);
  }
}

// Bigger text handler with 3 states
function handleBiggerText() {
  const textSizes = ['medium', 'large', 'xlarge'];
  const currentSize = localStorage.getItem('biggerText') || 'none';
  const currentIndex = textSizes.indexOf(currentSize);
  const nextIndex = (currentIndex + 1) % (textSizes.length + 1); // +1 for none

  // Remove only widget's own text size classes
  const textClasses = ['snn-bigger-text-medium', 'snn-bigger-text-large', 'snn-bigger-text-xlarge'];
  textClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === textSizes.length) {
    // Default text size
    localStorage.removeItem('biggerText');
    return getTranslation('default');
  } else {
    const selectedSize = textSizes[nextIndex];
    localStorage.setItem('biggerText', selectedSize);
    domCache.body.classList.add(`snn-bigger-text-${selectedSize}`);
    return selectedSize === 'xlarge' ? 'X-Large' : selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1);
  }
}

// High contrast handler with 3 states
function handleHighContrast() {
  const contrastLevels = ['medium', 'high', 'ultra'];
  const currentContrast = localStorage.getItem('highContrast') || 'none';
  const currentIndex = contrastLevels.indexOf(currentContrast);
  const nextIndex = (currentIndex + 1) % (contrastLevels.length + 1); // +1 for none

  // Remove only widget's own contrast classes
  const contrastClasses = ['snn-high-contrast-medium', 'snn-high-contrast-high', 'snn-high-contrast-ultra'];
  contrastClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === contrastLevels.length) {
    // Default contrast
    localStorage.removeItem('highContrast');
    return getTranslation('default');
  } else {
    const selectedContrast = contrastLevels[nextIndex];
    localStorage.setItem('highContrast', selectedContrast);
    domCache.body.classList.add(`snn-high-contrast-${selectedContrast}`);
    return selectedContrast.charAt(0).toUpperCase() + selectedContrast.slice(1);
  }
}

// Text Spacing Handler with 3 states (1em, 2em, 4em equivalents)
function handleTextSpacing() {
  const spacings = ['light', 'medium', 'heavy']; // Maps to 1, 2, 4 approx
  const currentSpacing = localStorage.getItem('textSpacing') || 'none';
  const currentIndex = spacings.indexOf(currentSpacing);
  const nextIndex = (currentIndex + 1) % (spacings.length + 1); // +1 for none

  // Remove only widget's own spacing classes
  const spacingClasses = ['snn-text-spacing-light', 'snn-text-spacing-medium', 'snn-text-spacing-heavy'];
  spacingClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === spacings.length) {
    // Default
    localStorage.removeItem('textSpacing');
    return getTranslation('default');
  } else {
    const selectedSpacing = spacings[nextIndex];
    localStorage.setItem('textSpacing', selectedSpacing);
    domCache.body.classList.add(`snn-text-spacing-${selectedSpacing}`);
    return selectedSpacing.charAt(0).toUpperCase() + selectedSpacing.slice(1);
  }
}

// Line Height Handler with 3 states (2em, 3em, 4em)
function handleLineHeight() {
  const heights = ['2em', '3em', '4em'];
  const currentHeight = localStorage.getItem('lineHeight') || 'none';
  const currentIndex = heights.indexOf(currentHeight);
  const nextIndex = (currentIndex + 1) % (heights.length + 1); // +1 for none

  // Remove only widget's own line height classes
  const heightClasses = ['snn-line-height-2em', 'snn-line-height-3em', 'snn-line-height-4em'];
  heightClasses.forEach(className => {
    if (domCache.body.classList.contains(className)) {
      domCache.body.classList.remove(className);
    }
  });

  if (nextIndex === heights.length) {
    // Default
    localStorage.removeItem('lineHeight');
    return getTranslation('default');
  } else {
    const selectedHeight = heights[nextIndex];
    localStorage.setItem('lineHeight', selectedHeight);
    domCache.body.classList.add(`snn-line-height-${selectedHeight}`);
    return selectedHeight;
  }
}

// ===========================================
// ACCESSIBILITY FEATURES
// ===========================================

// Screen reader functionality
const screenReader = {
  active: localStorage.getItem('screenReader') === 'true',
  isSupported: 'speechSynthesis' in window,
  handleFocus: function (event) {
    if (screenReader.active && screenReader.isSupported) {
      try {
        const content = event.target.innerText || event.target.alt || event.target.title || '';
        if (content.trim() !== '') {
          window.speechSynthesis.cancel();
          const speech = new SpeechSynthesisUtterance(content);

          // Set language based on current interface language
          let speechLang = 'en-US'; // default
          switch (currentLanguage) {
            case 'de': speechLang = 'de-DE'; break;
            case 'es': speechLang = 'es-ES'; break;
            case 'it': speechLang = 'it-IT'; break;
            case 'fr': speechLang = 'fr-FR'; break;
            case 'ru': speechLang = 'ru-RU'; break;
            case 'tr': speechLang = 'tr-TR'; break;
            case 'ar': speechLang = 'ar-SA'; break;
            case 'hi': speechLang = 'hi-IN'; break;
            case 'zh-cn': speechLang = 'zh-CN'; break;
            case 'jp': speechLang = 'ja-JP'; break;
            case 'pt': speechLang = 'pt-PT'; break;
            case 'bn': speechLang = 'bn-IN'; break;
            case 'ko': speechLang = 'ko-KR'; break;
            case 'vi': speechLang = 'vi-VN'; break;
            case 'id': speechLang = 'id-ID'; break;
            case 'th': speechLang = 'th-TH'; break;
            case 'pl': speechLang = 'pl-PL'; break;
            case 'nl': speechLang = 'nl-NL'; break;
            case 'el': speechLang = 'el-GR'; break;
            case 'sv': speechLang = 'sv-SE'; break;
            case 'no': speechLang = 'no-NO'; break;
            case 'da': speechLang = 'da-DK'; break;
            case 'fi': speechLang = 'fi-FI'; break;
            case 'cs': speechLang = 'cs-CZ'; break;
            case 'hu': speechLang = 'hu-HU'; break;
            case 'ro': speechLang = 'ro-RO'; break;
            case 'he': speechLang = 'he-IL'; break;
            case 'fa': speechLang = 'fa-IR'; break;
            case 'ur': speechLang = 'ur-PK'; break;
            case 'pa': speechLang = 'pa-IN'; break;
            case 'mr': speechLang = 'mr-IN'; break;
            case 'te': speechLang = 'te-IN'; break;
            case 'ta': speechLang = 'ta-IN'; break;
            case 'ms': speechLang = 'ms-MY'; break;
            case 'tl': speechLang = 'fil-PH'; break;
            default: speechLang = 'en-US';
          }
          speech.lang = speechLang;

          speech.onerror = function (event) {
            console.warn('Speech synthesis error:', event.error);
          };
          window.speechSynthesis.speak(speech);
        }
      } catch (error) {
        console.warn('Screen reader error:', error);
      }
    }
  },
  toggle: function (isActive) {
    if (!screenReader.isSupported) {
      console.warn(`Speech synthesis ${getTranslation('notSupportedBrowser')}`);
      return false;
    }

    screenReader.active = isActive;
    localStorage.setItem('screenReader', isActive);

    try {
      // Set language based on current interface language
      let speechLang = 'en-US'; // default
      switch (currentLanguage) {
        case 'de': speechLang = 'de-DE'; break;
        case 'es': speechLang = 'es-ES'; break;
        case 'it': speechLang = 'it-IT'; break;
        case 'fr': speechLang = 'fr-FR'; break;
        case 'ru': speechLang = 'ru-RU'; break;
        case 'tr': speechLang = 'tr-TR'; break;
        case 'ar': speechLang = 'ar-SA'; break;
        case 'hi': speechLang = 'hi-IN'; break;
        case 'zh-cn': speechLang = 'zh-CN'; break;
        case 'jp': speechLang = 'ja-JP'; break;
        default: speechLang = 'en-US';
      }

      if (isActive) {
        document.addEventListener('focusin', screenReader.handleFocus);
        const feedbackSpeech = new SpeechSynthesisUtterance(getTranslation('screenReaderOn'));
        feedbackSpeech.lang = speechLang;
        feedbackSpeech.onerror = function (event) {
          console.warn('Speech synthesis feedback error:', event.error);
        };
        window.speechSynthesis.speak(feedbackSpeech);
      } else {
        document.removeEventListener('focusin', screenReader.handleFocus);
        window.speechSynthesis.cancel();
        const feedbackSpeech = new SpeechSynthesisUtterance(getTranslation('screenReaderOff'));
        feedbackSpeech.lang = speechLang;
        feedbackSpeech.onerror = function (event) {
          console.warn('Speech synthesis feedback error:', event.error);
        };
        window.speechSynthesis.speak(feedbackSpeech);
      }
    } catch (error) {
      console.warn('Screen reader toggle error:', error);
      return false;
    }

    return true;
  },
};

// Voice control functionality
const voiceControl = {
  isActive: localStorage.getItem('voiceControl') === 'true',
  recognition: null,
  isSupported: 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window,
  retryCount: 0,
  maxRetries: 3,
  toggle: function (isActive) {
    if (!voiceControl.isSupported) {
      console.warn(`Speech Recognition API ${getTranslation('notSupportedBrowser')}`);
      return false;
    }

    voiceControl.isActive = isActive;
    localStorage.setItem('voiceControl', isActive);

    try {
      if (isActive) {
        voiceControl.startListening();
      } else {
        if (voiceControl.recognition) {
          voiceControl.recognition.stop();
          voiceControl.recognition = null;
        }
        voiceControl.retryCount = 0;
      }
    } catch (error) {
      console.warn('Voice control toggle error:', error);
      return false;
    }

    return true;
  },
  startListening: function () {
    if (!voiceControl.isSupported) {
      return;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      voiceControl.recognition = new SpeechRecognition();
      voiceControl.recognition.interimResults = false;

      // Set language based on current interface language
      let recognitionLang = 'en-US'; // default
      switch (currentLanguage) {
        case 'de': recognitionLang = 'de-DE'; break;
        case 'es': recognitionLang = 'es-ES'; break;
        case 'it': recognitionLang = 'it-IT'; break;
        case 'fr': recognitionLang = 'fr-FR'; break;
        case 'ru': recognitionLang = 'ru-RU'; break;
        case 'tr': recognitionLang = 'tr-TR'; break;
        case 'ar': recognitionLang = 'ar-SA'; break;
        case 'hi': recognitionLang = 'hi-IN'; break;
        case 'zh-cn': recognitionLang = 'zh-CN'; break;
        case 'jp': recognitionLang = 'ja-JP'; break;
        case 'pt': recognitionLang = 'pt-PT'; break;
        case 'bn': recognitionLang = 'bn-IN'; break;
        case 'ko': recognitionLang = 'ko-KR'; break;
        case 'vi': recognitionLang = 'vi-VN'; break;
        case 'id': recognitionLang = 'id-ID'; break;
        case 'th': recognitionLang = 'th-TH'; break;
        case 'pl': recognitionLang = 'pl-PL'; break;
        case 'nl': recognitionLang = 'nl-NL'; break;
        case 'el': recognitionLang = 'el-GR'; break;
        case 'sv': recognitionLang = 'sv-SE'; break;
        case 'no': recognitionLang = 'no-NO'; break;
        case 'da': recognitionLang = 'da-DK'; break;
        case 'fi': recognitionLang = 'fi-FI'; break;
        case 'cs': recognitionLang = 'cs-CZ'; break;
        case 'hu': recognitionLang = 'hu-HU'; break;
        case 'ro': recognitionLang = 'ro-RO'; break;
        case 'he': recognitionLang = 'he-IL'; break;
        case 'fa': recognitionLang = 'fa-IR'; break;
        case 'ur': recognitionLang = 'ur-PK'; break;
        case 'pa': recognitionLang = 'pa-IN'; break;
        case 'mr': recognitionLang = 'mr-IN'; break;
        case 'te': recognitionLang = 'te-IN'; break;
        case 'ta': recognitionLang = 'ta-IN'; break;
        case 'ms': recognitionLang = 'ms-MY'; break;
        case 'tl': recognitionLang = 'fil-PH'; break;
        default: recognitionLang = 'en-US';
      }
      voiceControl.recognition.lang = recognitionLang;
      voiceControl.recognition.continuous = false;

      voiceControl.recognition.onstart = function () {
        console.log(getTranslation('voiceControlActivated'));
        voiceControl.retryCount = 0;
      };

      voiceControl.recognition.onresult = function (event) {
        try {
          const command = event.results[0][0].transcript.toLowerCase();
          voiceControl.handleVoiceCommand(command);
        } catch (error) {
          console.warn('Voice command processing error:', error);
        }
      };

      voiceControl.recognition.onerror = function (event) {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'no-speech' && voiceControl.retryCount < voiceControl.maxRetries) {
          voiceControl.retryCount++;
          setTimeout(() => {
            if (voiceControl.isActive) {
              voiceControl.startListening();
            }
          }, 1000);
        }
      };

      voiceControl.recognition.onend = function () {
        if (voiceControl.isActive && voiceControl.retryCount < voiceControl.maxRetries) {
          setTimeout(() => {
            if (voiceControl.isActive) {
              voiceControl.startListening();
            }
          }, 100);
        }
      };

      voiceControl.recognition.start();
    } catch (error) {
      console.warn('Voice control initialization error:', error);
    }
  },
  handleVoiceCommand: function (command) {
    console.log(`Received command: ${command}`);

    try {
      // Normalize the command by removing extra spaces and making it lowercase
      const normalizedCommand = command.toLowerCase().trim().replace(/\s+/g, ' ');

      // Get voice commands for current language, fallback to English
      const languageCommands = WIDGET_CONFIG.voiceCommands[currentLanguage] || WIDGET_CONFIG.voiceCommands['en'];

      // Check for show menu commands
      if (languageCommands.showMenu.some(cmd => normalizedCommand.includes(cmd))) {
        if (!menuCache.button) menuCache.init();
        if (menuCache.button) {
          menuCache.button.click();
          console.log('Successfully opened menu');
        }
        return;
      }

      // Check for reset all commands
      if (languageCommands.resetAll.some(cmd => normalizedCommand.includes(cmd))) {
        resetAccessibilitySettings();
        console.log('Successfully reset all settings');
        return;
      }

      // Build dynamic command map based on configuration
      let localStorageKey = null;
      let matchedCommand = null;

      // Check each command group with better matching
      for (const [key, commands] of Object.entries(languageCommands)) {
        if (key === 'showMenu' || key === 'resetAll') continue; // Already handled above

        const isMatch = commands.some(cmd => {
          // Check for exact matches first
          if (normalizedCommand.includes(cmd.toLowerCase())) {
            matchedCommand = cmd;
            return true;
          }
          // Check for partial word matches (at least 3 characters)
          const cmdWords = cmd.toLowerCase().split(' ');
          const inputWords = normalizedCommand.split(' ');
          return cmdWords.some(cmdWord =>
            cmdWord.length >= 3 && inputWords.some(inputWord =>
              inputWord.includes(cmdWord) || cmdWord.includes(inputWord)
            )
          );
        });

        if (isMatch) {
          localStorageKey = key;
          break;
        }
      }

      if (localStorageKey) {
        // Use cached menu reference if available
        if (!menuCache.menu) menuCache.init();

        // Try to find button by data-key first (toggle buttons)
        let button = menuCache.menu?.querySelector(
          `.snn-accessibility-option[data-key='${localStorageKey}']`
        );

        // If not found, try to find by data-accessibility-option-id (action buttons)
        if (!button) {
          button = menuCache.menu?.querySelector(
            `.snn-accessibility-option[data-accessibility-option-id='${localStorageKey}']`
          );
        }

        if (button) {
          button.click();
          console.log(`Successfully executed command: ${command} (matched: ${matchedCommand || localStorageKey})`);
        } else {
          console.log('Button not found for command:', command, '(key:', localStorageKey, ')');
        }
      } else {
        console.log('Command not recognized:', command);
        // Provide helpful suggestions
        const availableCommands = Object.values(languageCommands).flat();
        const suggestions = availableCommands.filter(cmd =>
          cmd.toLowerCase().includes(normalizedCommand.split(' ')[0]) ||
          normalizedCommand.split(' ')[0].includes(cmd.toLowerCase().split(' ')[0])
        );
        if (suggestions.length > 0) {
          console.log('Did you mean one of these?', suggestions.slice(0, 3));
        }
      }
    } catch (error) {
      console.warn('Voice command handling error:', error);
    }
  },
};

// Create the accessibility menu
function createAccessibilityMenu() {
  const menu = document.createElement('div');
  menu.id = 'snn-accessibility-menu';
  menu.style.display = 'none';
  menu.setAttribute('role', 'dialog');
  menu.setAttribute('aria-labelledby', 'snn-accessibility-title');
  menu.setAttribute('aria-hidden', 'true');

  const header = document.createElement('div');
  header.classList.add('snn-header');

  const title = document.createElement('div');
  title.classList.add('snn-title');
  title.id = 'snn-accessibility-title';
  title.textContent = getTranslation('accessibilityTools');

  // Create reset button
  const resetButton = document.createElement('button');
  resetButton.classList.add('snn-reset-button');
  resetButton.innerHTML = `${icons.resetAll}<span class="snn-tooltip" role="tooltip">${getTranslation('reset')}</span>`;
  resetButton.setAttribute('aria-label', getTranslation('resetAllSettings'));
  resetButton.addEventListener('click', resetAccessibilitySettings);

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className = 'snn-close';
  closeButton.innerHTML = `${icons.close}<span class="snn-tooltip" role="tooltip">${getTranslation('close')}</span>`;
  closeButton.setAttribute('aria-label', getTranslation('closeAccessibilityMenu'));

  closeButton.addEventListener('click', function () {
    closeMenu();
  });

  closeButton.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeMenu();
    }
  });

  header.appendChild(title);
  header.appendChild(resetButton);
  header.appendChild(closeButton);
  menu.appendChild(header);

  // Create content wrapper
  const content = document.createElement('div');
  content.classList.add('snn-content');

  // Create language selector dropdown
  const languageSelector = document.createElement('select');
  languageSelector.classList.add('snn-language-selector');
  languageSelector.setAttribute('aria-label', getTranslation('selectLanguage'));

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' },
    { code: 'fr', name: 'Français' },
    { code: 'ru', name: 'Русский' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'ar', name: 'العربية' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'zh-cn', name: '简体中文' },
    { code: 'jp', name: '日本語' },
    { code: 'pt', name: 'Português' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'ko', name: '한국어' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'th', name: 'ไทย' },
    { code: 'pl', name: 'Polski' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'el', name: 'Ελληνικά' },
    { code: 'sv', name: 'Svenska' },
    { code: 'no', name: 'Norsk' },
    { code: 'da', name: 'Dansk' },
    { code: 'fi', name: 'Suomi' },
    { code: 'cs', name: 'Čeština' },
    { code: 'hu', name: 'Magyar' },
    { code: 'ro', name: 'Română' },
    { code: 'he', name: 'עברית' },
    { code: 'fa', name: 'فارسی' },
    { code: 'ur', name: 'اردو' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
    { code: 'mr', name: 'मराठी' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'ms', name: 'Bahasa Melayu' },
    { code: 'tl', name: 'Filipino' }
  ];

  languages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.code;
    option.textContent = lang.name;
    if (lang.code === currentLanguage) {
      option.selected = true;
    }
    languageSelector.appendChild(option);
  });

  languageSelector.addEventListener('change', function (e) {
    const newLang = e.target.value;
    if (setLanguage(newLang)) {
      // Recreate the menu with new language
      updateMenuLanguage();
    }
  });

  content.appendChild(languageSelector);

  // Create grid wrapper for accessibility options
  const optionsGrid = document.createElement('div');
  optionsGrid.classList.add('snn-options-grid');

  // ===================================================================
  // UNIFIED BUTTON CONFIGURATION WITH EXPLICIT ORDERING
  // Add/remove/reorder buttons by changing the 'order' property
  // Lower order numbers appear first, higher numbers appear last
  // ===================================================================
  const allButtonConfigs = [
    // Order 1-4: Primary accessibility features
    {
      order: 1,
      type: 'action',
      text: getTranslation('textSize'),
      actionFunction: handleBiggerText,
      icon: icons.biggerText,
      enabled: WIDGET_CONFIG.enableBiggerText,
      optionsConfig: { count: 3 },
      optionId: 'biggerText'
    },
    {
      order: 2,
      type: 'action',
      text: getTranslation('highContrast'),
      actionFunction: handleHighContrast,
      icon: icons.highContrast,
      enabled: WIDGET_CONFIG.enableHighContrast,
      optionsConfig: { count: 3 },
      optionId: 'highContrast'
    },
    {
      order: 3,
      type: 'action',
      text: getTranslation('textAlign'),
      actionFunction: handleTextAlign,
      icon: icons.textAlign,
      enabled: WIDGET_CONFIG.enableTextAlign,
      optionsConfig: { count: 3 },
      optionId: 'textAlign'
    },
    {
      order: 4,
      type: 'action',
      text: getTranslation('colorFilter'),
      actionFunction: handleColorFilter,
      icon: icons.colorFilter,
      enabled: WIDGET_CONFIG.enableColorFilter,
      optionsConfig: { count: 4 },
      optionId: 'colorFilter'
    },

    // Order 5-11: Other visual/text features
    {
      order: 5,
      type: 'action', // Changed from toggle to action
      text: getTranslation('textSpacing'),
      actionFunction: handleTextSpacing,
      icon: icons.textSpacing,
      enabled: WIDGET_CONFIG.enableTextSpacing,
      optionsConfig: { count: 3 },
      optionId: 'textSpacing'
    },
    {
      order: 6,
      type: 'action', // Changed from toggle to action
      text: getTranslation('lineHeight'),
      actionFunction: handleLineHeight,
      icon: icons.lineHeight,
      enabled: WIDGET_CONFIG.enableLineHeight,
      optionsConfig: { count: 3 },
      optionId: 'lineHeight'
    },
    {
      order: 7,
      type: 'action',
      text: getTranslation('fontSelection'),
      actionFunction: handleFontSelection,
      icon: icons.fontSelection,
      enabled: WIDGET_CONFIG.enableFontSelection,
      optionsConfig: { count: 3 },
      optionId: 'fontSelection'
    },
    {
      order: 7.5,
      type: 'action',
      text: getTranslation('saturation'),
      actionFunction: handleSaturation,
      icon: icons.saturation,
      enabled: true,
      optionsConfig: { count: 3 },
      optionId: 'saturation'
    },
    {
      order: 8,
      type: 'toggle',
      text: getTranslation('dyslexiaFriendly'),
      key: 'dyslexiaFont',
      className: 'snn-dyslexia-font',
      icon: icons.dyslexiaFont,
      enabled: WIDGET_CONFIG.enableDyslexiaFont,
      optionId: 'dyslexiaFont'
    },
    {
      order: 9,
      type: 'toggle',
      text: getTranslation('biggerCursor'),
      key: 'biggerCursor',
      className: 'snn-bigger-cursor',
      icon: icons.biggerCursor,
      enabled: WIDGET_CONFIG.enableBiggerCursor,
      optionId: 'biggerCursor'
    },
    {
      order: 10,
      type: 'toggle',
      text: getTranslation('hideImages'),
      key: 'hideImages',
      icon: icons.hideImages,
      customToggleFunction: toggleHideImages,
      enabled: WIDGET_CONFIG.enableHideImages,
      optionId: 'hideImages'
    },

    // Order 11: Animation controls (Reduced Motion merged here)
    {
      order: 11,
      type: 'toggle',
      text: getTranslation('pauseAnimations'),
      key: 'pauseAnimations',
      className: 'snn-pause-animations',
      icon: icons.pauseAnimations,
      enabled: WIDGET_CONFIG.enablePauseAnimations,
      optionId: 'pauseAnimations'
    },

    // Order 98-99: Screen Reader and Voice Control (always last)
    {
      order: 98,
      type: 'toggle',
      text: getTranslation('screenReader'),
      key: 'screenReader',
      customToggleFunction: screenReader.toggle,
      icon: icons.screenReader,
      requiresFeature: screenReader,
      enabled: WIDGET_CONFIG.enableScreenReader,
      optionId: 'screenReader'
    },
    {
      order: 99,
      type: 'toggle',
      text: getTranslation('voiceCommand'),
      key: 'voiceControl',
      customToggleFunction: voiceControl.toggle,
      icon: icons.voiceControl,
      requiresFeature: voiceControl,
      enabled: WIDGET_CONFIG.enableVoiceControl,
      optionId: 'voiceControl'
    },
  ];

  // Sort buttons by order and add only enabled ones to the grid
  allButtonConfigs
    .filter(config => config.enabled)
    .sort((a, b) => a.order - b.order)
    .forEach((config) => {
      let button;

      if (config.type === 'action') {
        button = createActionButton(config.text, config.actionFunction, config.icon, config.optionsConfig, config.optionId);
      } else if (config.type === 'toggle') {
        button = createToggleButton(
          config.text,
          config.key,
          config.className,
          config.target || document.body,
          config.customToggleFunction,
          config.icon,
          config.requiresFeature,
          config.optionId
        );
      }

      if (button) {
        optionsGrid.appendChild(button);
      }
    });

  // Add grid to content
  content.appendChild(optionsGrid);

  // Add content to menu
  menu.appendChild(content);

  shadowRoot.appendChild(menu);
}

// Update menu language without recreating everything
function updateMenuLanguage() {
  const menu = shadowRoot.getElementById('snn-accessibility-menu');
  if (!menu) return;

  const wasOpen = menu.classList.contains('snn-open');

  // Remove old menu
  menu.remove();

  // Clear cache
  menuCache.menu = null;
  menuCache.closeButton = null;
  keyboardCache.focusableElements = null;

  // Recreate menu
  createAccessibilityMenu();

  // Update button aria-label
  const mainButton = shadowRoot.getElementById('snn-accessibility-button');
  if (mainButton) {
    mainButton.setAttribute('aria-label', getTranslation('accessibilityMenu'));
  }

  // Reopen if it was open
  if (wasOpen) {
    menuCache.init();
    openMenu();
  }
}

// ===========================================
// MENU MANAGEMENT
// ===========================================

// Cache for menu elements
const menuCache = {
  menu: null,
  button: null,
  closeButton: null,
  init: function () {
    this.menu = shadowRoot.getElementById('snn-accessibility-menu');
    this.button = shadowRoot.getElementById('snn-accessibility-button');
    this.closeButton = this.menu?.querySelector('.snn-close');
  }
};

// Apply `inert` to every body child except the widget container, trapping focus.
const inertState = { applied: [] };

function setBackgroundInert(enabled) {
  if (enabled) {
    inertState.applied = [];
    Array.from(document.body.children).forEach((el) => {
      if (el.id === 'snn-accessibility-widget-container') return;
      if (!el.hasAttribute('inert')) {
        el.setAttribute('inert', '');
        el.setAttribute('aria-hidden', 'true');
        inertState.applied.push(el);
      }
    });
  } else {
    inertState.applied.forEach((el) => {
      el.removeAttribute('inert');
      el.removeAttribute('aria-hidden');
    });
    inertState.applied = [];
  }
}

// Live region for state announcements (created lazily in main document).
let announcerEl = null;
function announce(message) {
  if (!message) return;
  if (!announcerEl) {
    announcerEl = document.createElement('div');
    announcerEl.setAttribute('role', 'status');
    announcerEl.setAttribute('aria-live', 'polite');
    announcerEl.setAttribute('aria-atomic', 'true');
    announcerEl.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
    document.body.appendChild(announcerEl);
  }
  announcerEl.textContent = '';
  // Force re-announcement by toggling text after a frame.
  requestAnimationFrame(() => {
    announcerEl.textContent = message;
  });
}

// Menu control functions (optimized)
function toggleMenu() {
  if (!menuCache.menu) menuCache.init();
  if (!menuCache.menu) return;
  const isOpen = menuCache.menu.classList.contains('snn-open');

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  if (!menuCache.menu) menuCache.init();
  if (!menuCache.menu) return;

  menuCache.menu.style.display = 'block';
  menuCache.menu.setAttribute('aria-hidden', 'false');

  // Lock background scroll on mobile while menu is open
  document.documentElement.style.overflow = 'hidden';

  // Trap focus in widget by marking background as inert
  setBackgroundInert(true);

  // Trigger slide-in animation on next frame so display:block has applied
  requestAnimationFrame(() => {
    menuCache.menu.classList.add('snn-open');
  });

  // Focus first option
  const firstOption = menuCache.menu.querySelector('.snn-accessibility-option');
  if (firstOption) {
    firstOption.focus();
  } else if (menuCache.closeButton) {
    menuCache.closeButton.focus();
  }

  // Add keyboard navigation (guard against double-binding)
  document.removeEventListener('keydown', handleMenuKeyboard);
  document.addEventListener('keydown', handleMenuKeyboard);
}

function closeMenu() {
  if (!menuCache.menu) menuCache.init();
  if (!menuCache.menu) return;

  menuCache.menu.classList.remove('snn-open');
  menuCache.menu.setAttribute('aria-hidden', 'true');

  document.documentElement.style.overflow = '';
  setBackgroundInert(false);

  // After the slide-out transition, hide the menu so it leaves the a11y tree
  const onTransitionEnd = (e) => {
    if (e.propertyName !== 'transform') return;
    menuCache.menu.style.display = 'none';
    menuCache.menu.removeEventListener('transitionend', onTransitionEnd);
  };
  menuCache.menu.addEventListener('transitionend', onTransitionEnd);
  // Fallback for users with prefers-reduced-motion (transition is ~0ms)
  setTimeout(() => {
    if (!menuCache.menu.classList.contains('snn-open')) {
      menuCache.menu.style.display = 'none';
    }
  }, 320);

  if (menuCache.button) {
    menuCache.button.focus();
  }

  document.removeEventListener('keydown', handleMenuKeyboard);
}

// Cache for keyboard navigation elements
let keyboardCache = {
  focusableElements: null,
  lastUpdate: 0,
  getFocusableElements: function () {
    const now = Date.now();
    if (!this.focusableElements || now - this.lastUpdate > 1000) {
      if (menuCache.menu) {
        this.focusableElements = {
          all: menuCache.menu.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
          options: Array.from(menuCache.menu.querySelectorAll('.snn-accessibility-option, .snn-close, .snn-reset-button'))
        };
        this.lastUpdate = now;
      }
    }
    return this.focusableElements;
  }
};

function handleMenuKeyboard(e) {
  if (!menuCache.menu || !menuCache.menu.classList.contains('snn-open')) return;

  if (e.key === 'Escape') {
    e.preventDefault();
    closeMenu();
    return;
  }

  const elements = keyboardCache.getFocusableElements();
  if (!elements || !elements.all.length) return;

  // Inside a Shadow DOM, document.activeElement returns the shadow HOST,
  // not the focused element. shadowRoot.activeElement gives the real one.
  const active = shadowRoot.activeElement || document.activeElement;

  if (e.key === 'Tab') {
    const firstElement = elements.all[0];
    const lastElement = elements.all[elements.all.length - 1];

    if (e.shiftKey) {
      if (active === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (active === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const currentIndex = elements.options.indexOf(active);
    let nextIndex;

    if (e.key === 'ArrowDown') {
      nextIndex = currentIndex >= elements.options.length - 1 ? 0 : currentIndex + 1;
    } else {
      nextIndex = currentIndex <= 0 ? elements.options.length - 1 : currentIndex - 1;
    }

    elements.options[nextIndex].focus();
  }
}

// ===========================================
// INITIALIZATION
// ===========================================

// Initialize the widget
function initAccessibilityWidget() {
  // Create shadow DOM first
  createShadowContainer();

  // Inject page styles (for accessibility features)
  injectPageStyles();

  // Apply saved settings
  applySettings();

  // Create widget UI inside shadow DOM
  createAccessibilityButton();
  createAccessibilityMenu();
}

// ===========================================
// WIDGET BOOTSTRAP
// ===========================================

// Load the widget when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccessibilityWidget);
} else {
  initAccessibilityWidget();
}