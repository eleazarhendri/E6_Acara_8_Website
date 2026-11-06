/**
 * Language Switcher - PT Indocement Tunggal Prakarsa Tbk.
 * Shared across all pages for consistent ID/EN toggle
 * Uses data-lang-key for shared elements + text-node walker for page content
 */
var intpLang = {
  // Navigation
  'nav-perusahaan':    {id:'Perusahaan',         en:'Company'},
  'nav-tentang':       {id:'Tentang Kami',        en:'About Us'},
  'nav-manajemen':     {id:'Manajemen',           en:'Management'},
  'nav-struktur':      {id:'Struktur Perusahaan', en:'Company Structure'},
  'nav-bisnis':        {id:'Bisnis Kami',         en:'Our Business'},
  'nav-semen':         {id:'Semen',               en:'Cement'},
  'nav-beton':         {id:'Beton Siap Pakai',    en:'Ready-Mix Concrete'},
  'nav-agregat':       {id:'Agregat',             en:'Aggregate'},
  'nav-investor':      {id:'Investor',            en:'Investor'},
  'nav-rups':          {id:'Rapat Umum Pemegang Saham', en:'General Meeting of Shareholders'},
  'nav-saham':         {id:'Informasi Saham',     en:'Stock Information'},
  'nav-laporan':       {id:'Laporan &amp; Presentasi', en:'Reports &amp; Presentations'},
  'nav-keberlanjutan': {id:'Keberlanjutan',       en:'Sustainability'},
  'nav-csr':           {id:'CSR Program',         en:'CSR Program'},
  'nav-kebijakan':     {id:'Kebijakan &amp; Program', en:'Policy &amp; Program'},
  'nav-media':         {id:'Media',               en:'Media'},
  'nav-berita':        {id:'Berita &amp; Acara',  en:'News &amp; Events'},
  'nav-siaran':        {id:'Siaran Pers',         en:'Press Release'},
  'nav-galeri':        {id:'Galeri Media',        en:'Media Gallery'},
  // Common page elements
  'crumb-beranda':     {id:'Beranda',             en:'Home'},
  'footer-quick':      {id:'Tautan Cepat',        en:'Quick Links'},
  'footer-beranda':    {id:'Beranda',             en:'Home'},
  'footer-tentang':    {id:'Tentang Kami',        en:'About Us'},
  'footer-produk':     {id:'Produk',              en:'Products'},
  'footer-privasi':    {id:'Kebijakan Privasi',   en:'Privacy Policy'},
  'footer-produk-title':{id:'Produk Kami',        en:'Our Products'},
  'footer-sosmed':     {id:'Ikuti Kami',          en:'Follow Us'},
  'footer-sosmed-p':   {id:'Temukan informasi terbaru Indocement di media sosial kami', en:'Find the latest Indocement news on our social media channels.'},
  'footer-copy':       {id:'Hak Cipta Dilindungi', en:'All Rights Reserved'},
  'credits-text':      {id:'Dibuat oleh', en:'Created by'},
  'ft-phone-label':    {id:'Telepon:', en:'Phone:'},
  'ft-email-label':    {id:'Email:', en:'Email:'},
  'footer-produk-link':{id:'Produk', en:'Products'},
  'footer-semen-link': {id:'Semen Tiga Roda', en:'Tiga Roda Cement'},
  'footer-beton-link': {id:'Beton Siap Pakai', en:'Ready-Mix Concrete'},
  'footer-agregat-link':{id:'Agregat', en:'Aggregate'},
  'footer-berita-link':{id:'Berita', en:'News'},
  'search-ph':         {id:'Cari produk, berita, informasi...', en:'Search products, news, info...'},
  // Page titles (hero h1)
  'page-tentang':       {id:'Tentang Kami',        en:'About Us'},
  'page-manajemen':     {id:'Manajemen',           en:'Management'},
  'page-struktur':      {id:'Struktur Perusahaan', en:'Company Structure'},
  'page-semen':         {id:'Semen',               en:'Cement'},
  'page-beton':         {id:'Beton Siap Pakai',    en:'Ready-Mix Concrete'},
  'page-agregat':       {id:'Agregat',             en:'Aggregate'},
  'page-rups':          {id:'Rapat Umum Pemegang Saham', en:'General Meeting of Shareholders'},
  'page-saham':         {id:'Informasi Saham',     en:'Stock Information'},
  'page-laporan':       {id:'Laporan &amp; Presentasi', en:'Reports &amp; Presentations'},
  'page-csr':           {id:'CSR Program',         en:'CSR Program'},
  'page-kebijakan':     {id:'Kebijakan &amp; Program Keberlanjutan', en:'Sustainability Policy &amp; Program'},
  'page-berita':        {id:'Berita &amp; Acara',  en:'News &amp; Events'},
  'page-siaran':        {id:'Siaran Pers',         en:'Press Release'},
  'page-galeri':        {id:'Galeri Media',        en:'Media Gallery'},
  // Breadcrumb path texts
  'crumb-beranda':      {id:'Beranda',             en:'Home'},
  'crumb-tentang':      {id:'Tentang Kami',        en:'About Us'},
  'crumb-manajemen':    {id:'Manajemen',           en:'Management'},
  'crumb-struktur':     {id:'Struktur Perusahaan', en:'Company Structure'},
  'crumb-semen':        {id:'Bisnis Kami — Semen', en:'Our Business — Cement'},
  'crumb-beton':        {id:'Bisnis Kami — Beton Siap Pakai', en:'Our Business — Ready-Mix Concrete'},
  'crumb-agregat':      {id:'Bisnis Kami — Agregat', en:'Our Business — Aggregate'},
  'crumb-rups':         {id:'Investor — RUPS',     en:'Investor — GMS'},
  'crumb-saham':        {id:'Investor — Informasi Saham', en:'Investor — Stock Information'},
  'crumb-laporan':      {id:'Investor — Laporan &amp; Presentasi', en:'Investor — Reports &amp; Presentations'},
  'crumb-csr':          {id:'Keberlanjutan — CSR Program', en:'Sustainability — CSR Program'},
  'crumb-kebijakan':    {id:'Keberlanjutan — Kebijakan &amp; Program', en:'Sustainability — Policy &amp; Program'},
  'crumb-perusahaan-link': {id:'Perusahaan',       en:'Company'},
};

/* ---- Text-node translation map for page content ---- */
var intpTextMap = {
  // ===== Shared/breadcrumb section names =====
  'Perusahaan':'Company','Bisnis Kami — Semen':'Our Business — Cement','Bisnis Kami — Beton Siap Pakai':'Our Business — Ready-Mix Concrete',
  'Bisnis Kami — Agregat':'Our Business — Aggregate','Investor — RUPS':'Investor — GMS','Investor — Informasi Saham':'Investor — Stock Information',
  'Investor — Laporan & Presentasi':'Investor — Reports & Presentations','Keberlanjutan — CSR Program':'Sustainability — CSR Program',
  'Keberlanjutan — Kebijakan & Program':'Sustainability — Policy & Program','Media':'Media',
  'Berita & Acara':'News & Events','Siaran Pers':'Press Release','Galeri Media':'Media Gallery',
  'Tentang Kami':'About Us','Manajemen':'Management','Struktur Perusahaan':'Company Structure',
  'Semen':'Cement','Beton Siap Pakai':'Ready-Mix Concrete','Agregat':'Aggregate',
  'Rapat Umum Pemegang Saham':'General Meeting of Shareholders','Informasi Saham':'Stock Information',
  'Laporan & Presentasi':'Reports & Presentations','Kebijakan & Program':'Policy & Program',
  'Kebijakan & Program Keberlanjutan':'Sustainability Policy & Program',
  'Hubungi Kami':'Contact Us','Kirim Pesan':'Send Message','Baca Selengkapnya':'Read More',
  // ===== perusahaan-tentang.html =====
  'Kapasitas Produksi per Tahun':'Annual Production Capacity','Fasilitas Produksi Aktif':'Active Production Facilities',
  'Pengalaman di Industri Semen':'Experience in Cement Industry','Karyawan Tetap':'Permanent Employees',
  ' juta ton':' million tons',' pabrik':' plants',' tahun':' years',' orang':' people',
  'juta ton':'million tons','pabrik':'plants','tahun':'years','orang':'people',
  'Sejarah Perusahaan':'Company History','Visi & Misi':'Vision & Mission','Visi':'Vision','Misi':'Mission','Nilai Perusahaan':'Company Values',
  'Lokasi Pabrik & Fasilitas':'Plant Locations & Facilities',
  'Menjadi produsen semen dan bahan bangunan terkemuka di Indonesia yang berkomitmen pada kualitas, keberlanjutan, dan pertumbuhan jangka panjang bagi seluruh pemangku kepentingan.':
    'To become the leading cement and building materials producer in Indonesia, committed to quality, sustainability, and long-term growth for all stakeholders.',
  'Menghasilkan produk semen dan bahan bangunan berkualitas tinggi, mengembangkan sumber daya manusia yang kompeten, menerapkan praktik bisnis berkelanjutan, dan memberikan nilai tambah bagi pemegang saham dan masyarakat.':
    'To produce high-quality cement and building materials, develop competent human resources, implement sustainable business practices, and deliver added value to shareholders and society.',
  'Integritas, Inovasi, Kolaborasi, dan Keberlanjutan — menjadi landasan setiap keputusan dan tindakan seluruh insan Indocement dalam memberikan kontribusi terbaik bagi bangsa.':
    'Integrity, Innovation, Collaboration, and Sustainability — the foundation of every decision and action of all Indocement employees in making the best contribution to the nation.',
  'Citeureup, Jawa Barat':'Citeureup, West Java','Cirebon, Jawa Barat':'Cirebon, West Java','Tarjun, Kalimantan Selatan':'Tarjun, South Kalimantan',
  'Grobogan, Jawa Tengah':'Grobogan, Central Java','Maros, Sulawesi Selatan':'Maros, South Sulawesi','Banyuwangi, Jawa Timur':'Banyuwangi, East Java',
  'Kompleks pabrik terbesar dengan kapasitas produksi terbesar. Lokasi pertama dan pusat operasi utama Indocement sejak 1975.':
    'The largest plant complex with the biggest production capacity. The first location and main operations center of Indocement since 1975.',
  'Pabrik berteknologi modern yang melayani kebutuhan semen di wilayah Jawa Barat bagian timur dan Jawa Tengah.':
    'A modern technology plant serving cement needs in eastern West Java and Central Java.',
  'Pabrik strategis untuk melayani kebutuhan konstruksi di Kalimantan dan Indonesia Timur.':
    'A strategic plant serving construction needs in Kalimantan and Eastern Indonesia.',
  'Fasilitas penggilingan semen yang mendukung distribusi di Jawa Tengah dengan merek Semen Grobogan.':
    'Cement grinding facility supporting distribution in Central Java under the Semen Grobogan brand.',
  'Pabrik yang melayani kebutuhan semen di Sulawesi dan Indonesia bagian timur dengan kapasitas produksi kompetitif.':
    'A plant serving cement needs in Sulawesi and eastern Indonesia with competitive production capacity.',
  'Pabrik terbaru Indocement yang memperkuat jaringan distribusi di Jawa Timur dan Bali.':
    'Indocement\'s newest plant, strengthening the distribution network in East Java and Bali.',
  // Sejarah paragraphs
  'Indocement beroperasi sebagai anak perusahaan dari ':'Indocement operates as a subsidiary of ',
  '(sebelumnya HeidelbergCement), salah satu produsen bahan bangunan terbesar di dunia yang berbasis di Jerman. Kemitraan ini memperkuat kapasitas teknologi dan standar internasional Indocement.':
    '(formerly HeidelbergCement), one of the world\'s largest building materials producers based in Germany. This partnership strengthens Indocement\'s technological capabilities and international standards.',
  'Saat ini Indocement memiliki empat belas pabrik yang tersebar di enam lokasi: ':'Indocement currently has fourteen plants spread across six locations: ',
  // ===== bisnis-semen.html =====
  'Tentang Produk Semen Indocement':'About Indocement Cement Products','Proses Pembuatan Semen':'Cement Production Process','Produk Semen Kami':'Our Cement Products',
  'Indocement menghasilkan semen berkualitas tinggi di bawah merek utama ':'Indocement produces high-quality cement under the flagship brands ',
  ', serta merek regional Semen Grobogan. Dengan kapasitas produksi mencapai 33,5 juta ton per tahun, Indocement menjadi salah satu produsen semen terbesar di Indonesia dan Asia Tenggara.':
    ', as well as the regional brand Semen Grobogan. With a production capacity of 33.5 million tons per year, Indocement is one of the largest cement producers in Indonesia and Southeast Asia.',
  'Seluruh produk semen Indocement telah memenuhi ':'All Indocement cement products comply with ',
  ' dan tersertifikasi internasional, didukung oleh teknologi produksi terkini dari Heidelberg Materials AG serta tenaga ahli berpengalaman lebih dari empat dekade.':
    ' and are internationally certified, supported by the latest production technology from Heidelberg Materials AG and experienced professionals with over four decades of expertise.',
  'Semen serbaguna untuk berbagai konstruksi — dari perumahan hingga gedung bertingkat. Produk andalan merek Tiga Roda yang memenuhi SNI 7064:2014.':
    'Versatile cement for various construction — from housing to high-rise buildings. The flagship product of the Tiga Roda brand, meeting SNI 7064:2014.',
  'Semen putih premium untuk finishing eksterior dan interior. Kecerahan tinggi (>85%), dapat diberi pigmen warna. Memenuhi SNI 15-0129:2004.':
    'Premium white cement for exterior and interior finishing. High brightness (>85%), can be pigmented. Meets SNI 15-0129:2004.',
  'Mortar siap pakai untuk plester, acian, thinbed, dan screed lantai. Praktis, konsisten kualitasnya, dan memenuhi SNI 6882:2014.':
    'Ready-mix mortar for plastering, skim coating, thinbed, and floor screed. Practical, consistent quality, meeting SNI 6882:2014.',
  'Semen Portland Komposit':'Portland Composite Cement','Semen Putih Tiga Roda':'Tiga Roda White Cement','Mortar Tiga Roda':'Tiga Roda Mortar',
  // ===== bisnis-beton.html =====
  'Tentang Beton Siap Pakai':'About Ready-Mix Concrete','Proses Pembuatan Beton Siap Pakai':'Ready-Mix Concrete Production Process',
  'Unit bisnis beton siap pakai Indocement dioperasikan melalui anak perusahaan ':'Indocement\'s ready-mix concrete business unit is operated through subsidiaries ',
  ' dan ':' and ',
  ', dengan lebih dari 100 batching plant yang tersebar strategis di Pulau Jawa.':
    ', with over 100 batching plants strategically located across Java.',
  'Kami menyediakan berbagai mutu beton mulai dari ':'We provide various concrete grades ranging from ',
  ', dengan layanan 24/7 dan tim teknis yang siap membantu proyek konstruksi skala kecil hingga mega proyek infrastruktur nasional.':
    ', with 24/7 service and a technical team ready to assist construction projects from small-scale to national mega infrastructure projects.',
  // ===== bisnis-agregat.html =====
  'Tentang Bisnis Agregat':'About Aggregate Business',
  // ===== perusahaan-manajemen.html =====
  'Dewan Komisaris':'Board of Commissioners','Direksi':'Board of Directors',
  'Komisaris Utama':'President Commissioner','Wakil Komisaris Utama/Komisaris Independen':'Vice President Commissioner/Independent Commissioner',
  'Komisaris Independen':'Independent Commissioner','Komisaris':'Commissioner',
  'Direktur Utama':'President Director','Wakil Direktur Utama':'Vice President Director','Direktur':'Director',
  // ===== perusahaan-struktur.html =====
  'Struktur Grup Perseroan':'Group Structure','Komposisi Pemegang Saham':'Shareholder Composition',
  'Entitas Anak Perusahaan':'Subsidiary Entities','Pemegang Saham':'Shareholder','Jumlah Saham':'Number of Shares','Persentase (%)':'Percentage (%)',
  'Keterangan':'Description','Nama Entitas':'Entity Name','Kepemilikan':'Ownership','Bidang Usaha':'Business Field','Lokasi':'Location',
  'Heidelberg Materials AG':'Heidelberg Materials AG','Birchwood Omnia Ltd & Afiliasi':'Birchwood Omnia Ltd & Affiliates',
  'Perusahaan Induk — Jerman':'Parent Company — Germany','Pemegang Saham Pengendali':'Controlling Shareholder',
  'Kode Saham: INTP | Bursa Efek Indonesia (BEI)':'Stock Code: INTP | Indonesia Stock Exchange (IDX)',
  'Ready-Mix Concrete':'Ready-Mix Concrete','Agregat & Tambang':'Aggregate & Mining','Properti & Aset':'Property & Assets',
  // ===== investor-rups.html =====
  'Informasi Rapat Umum Pemegang Saham':'General Meeting of Shareholders Information',
  'PT Indocement Tunggal Prakarsa Tbk. menyelenggarakan Rapat Umum Pemegang Saham (RUPS) sesuai ketentuan Undang-Undang Perseroan Terbatas dan peraturan Otoritas Jasa Keuangan (OJK). RUPS merupakan forum tertinggi dalam struktur tata kelola perusahaan yang memberikan kesempatan bagi seluruh pemegang saham untuk berpartisipasi aktif dalam pengambilan keputusan penting perusahaan.':
    'PT Indocement Tunggal Prakarsa Tbk. conducts the General Meeting of Shareholders (GMS) in accordance with the Limited Liability Company Law and regulations of the Financial Services Authority (OJK). The GMS is the highest forum in the corporate governance structure, providing all shareholders the opportunity to actively participate in important corporate decision-making.',
  'Mata Acara Rapat:':'Meeting Agenda:','Rapat telah dilaksanakan':'Meeting has been held',
  'RUPS Luar Biasa — 2026':'Extraordinary GMS — 2026','RUPS Tahunan — 2026':'Annual GMS — 2026','RUPS Tahunan — 2025':'Annual GMS — 2025','RUPS Tahunan — 2024':'Annual GMS — 2024',
  'RUPSLB':'EGMS','RUPST':'AGMS',
  'Wisma Indocement, Jakarta':'Wisma Indocement, Jakarta',
  // ===== investor-saham.html =====
  'Data Saham':'Stock Data','Informasi Umum':'General Information','Harga Saham (Okt 2026)':'Stock Price (Oct 2026)',
  'Nama Emiten':'Issuer Name','Kode Saham':'Stock Code','Bursa Efek':'Stock Exchange','Tanggal IPO':'IPO Date','Nilai Nominal':'Nominal Value','Jumlah Saham':'Number of Shares',
  'Harga Terakhir':'Last Price','Harga Tertinggi (52 minggu)':'Highest Price (52 weeks)','Harga Terendah (52 minggu)':'Lowest Price (52 weeks)',
  'Volume Perdagangan':'Trading Volume','Market Cap':'Market Cap','P/E Ratio':'P/E Ratio',
  'Riwayat Dividen':'Dividend History','Tahun Buku':'Fiscal Year','Jenis':'Type','Dividen per Saham':'Dividend per Share','Total Dividen':'Total Dividend','Tanggal Pembayaran':'Payment Date',
  'Dividen Interim':'Interim Dividend','Dividen Final':'Final Dividend',
  'Komposisi Pemegang Saham':'Shareholder Composition','Persentase':'Percentage','Publik — Institusi Domestik':'Public — Domestic Institution',
  'Publik — Institusi Asing':'Public — Foreign Institution','Publik — Individu Domestik':'Public — Domestic Individual','Publik — Individu Asing':'Public — Foreign Individual',
  'Kronologi Pencatatan Saham':'Stock Listing Chronology','Tahun':'Year','Total Saham':'Total Shares','Nilai Nominal':'Nominal Value',
  'Penawaran Umum Saham Perdana (IPO)':'Initial Public Offering (IPO)','Penawaran Umum Terbatas I (Rights Issue)':'Limited Public Offering I (Rights Issue)',
  'Pemecahan Nilai Nominal Saham (Stock Split) 1:2':'Stock Split (Nominal Value) 1:2','Penawaran Umum Terbatas II (Rights Issue)':'Limited Public Offering II (Rights Issue)',
  'Penambahan Modal Tanpa Hak Memesan Efek Terlebih Dahulu':'Capital Increase Without Pre-emptive Rights',
  'Total Saham Beredar':'Total Shares Outstanding','Saat Ini':'Current',
  'Informasi Obligasi / Sukuk':'Bond / Sukuk Information','Status Obligasi':'Bond Status',
  'Tidak terdapat obligasi atau sukuk yang diterbitkan dan beredar. Perseroan berstatus net cash per September 2026.':
    'There are no bonds or sukuk issued and outstanding. The company has a net cash position as of September 2026.',
  'Untuk informasi lebih lengkap, kunjungi ':'For more complete information, visit ',
  'halaman obligasi website resmi Indocement':'the official Indocement bond page',
  // ===== investor-laporan.html =====
  'Laporan Keuangan':'Financial Statements','Laporan Tahunan':'Annual Report','Laporan Keberlanjutan':'Sustainability Report',
  'Presentasi Hubungan Investor':'Investor Relations Presentation',
  'Lihat Laporan Keuangan':'View Financial Statements','Lihat Laporan Tahunan':'View Annual Report','Lihat Laporan Keberlanjutan':'View Sustainability Report','Lihat Presentasi Investor':'View Investor Presentation',
  'Laporan keuangan konsolidasian PT Indocement Tunggal Prakarsa Tbk. yang telah diaudit, tersedia untuk diunduh di website resmi perusahaan. Laporan mencakup laporan posisi keuangan, laporan laba rugi, laporan arus kas, dan catatan atas laporan keuangan.':
    'The audited consolidated financial statements of PT Indocement Tunggal Prakarsa Tbk. are available for download on the official company website. The reports include statements of financial position, income statements, cash flow statements, and notes to the financial statements.',
  'Laporan tahunan (Annual Report) PT Indocement Tunggal Prakarsa Tbk. menyajikan gambaran menyeluruh tentang kinerja operasional, keuangan, tata kelola perusahaan, dan keberlanjutan selama satu tahun penuh. Laporan tersedia dalam format digital di website resmi perusahaan.':
    'The Annual Report of PT Indocement Tunggal Prakarsa Tbk. provides a comprehensive overview of operational, financial, corporate governance, and sustainability performance over a full year. Reports are available in digital format on the official company website.',
  'Laporan keberlanjutan (Sustainability Report) PT Indocement Tunggal Prakarsa Tbk. disusun sesuai standar GRI dan memaparkan komitmen serta kinerja perusahaan di bidang lingkungan, sosial, dan tata kelola (ESG). Laporan tersedia dalam dua bahasa (Indonesia dan Inggris).':
    'The Sustainability Report of PT Indocement Tunggal Prakarsa Tbk. is prepared in accordance with GRI standards and outlines the company\'s commitments and performance in environmental, social, and governance (ESG) areas. Reports are available in both Indonesian and English.',
  'Presentasi hubungan investor (Investor Relations Presentation) mencakup materi Investor Day, paparan hasil kinerja kuartalan, dan update strategi bisnis perusahaan. Presentasi dirancang untuk memberikan informasi terkini kepada investor dan analis pasar modal.':
    'The Investor Relations Presentation includes Investor Day materials, quarterly performance results presentations, and business strategy updates. Presentations are designed to provide current information to investors and capital market analysts.',
  // ===== keberlanjutan-csr.html =====
  'Program Harmoni Tiga Roda':'Harmoni Tiga Roda Program','Empat Pilar Program CSR':'Four Pillars of CSR Program',
  'Pendidikan':'Education','Kesehatan':'Health','Pemberdayaan Ekonomi':'Economic Empowerment','Lingkungan Hidup':'Environment',
  'Beasiswa Harmoni Tiga Roda 2026':'Harmoni Tiga Roda Scholarship 2026','Wilayah Program CSR Aktif':'Active CSR Program Areas',
  'Dana CSR Tahun 2025':'CSR Fund 2025','Penerima Manfaat per Tahun':'Beneficiaries per Year',' penerima':' recipients',' lokasi':' locations',' miliar':' billion',
  'Mendukung akses pendidikan berkualitas melalui beasiswa, pembangunan fasilitas sekolah, dan program pelatihan guru.':
    'Supporting access to quality education through scholarships, school facility construction, and teacher training programs.',
  'Meningkatkan akses layanan kesehatan masyarakat melalui klinik, posyandu, dan program kesehatan preventif.':
    'Improving public health access through clinics, community health posts, and preventive health programs.',
  'Membangun kemandirian ekonomi masyarakat lokal melalui pelatihan keterampilan, pendampingan UMKM, dan akses modal.':
    'Building economic independence of local communities through skills training, MSME mentoring, and access to capital.',
  'Menjaga kelestarian lingkungan melalui penghijauan, pengelolaan limbah, dan edukasi lingkungan hidup.':
    'Preserving the environment through reforestation, waste management, and environmental education.',
  'Beasiswa S1 untuk 500+ mahasiswa per tahun':'Undergraduate scholarships for 500+ students per year',
  'Renovasi 50+ ruang kelas di sekitar pabrik':'Renovation of 50+ classrooms near plants',
  'Program pelatihan 200+ guru sekolah dasar':'Training program for 200+ elementary school teachers',
  'Perpustakaan keliling di 30 desa':'Mobile library in 30 villages',
  '12 klinik kesehatan gratis di kawasan pabrik':'12 free health clinics in plant areas',
  '200+ posyandu aktif yang difasilitasi':'200+ active community health posts facilitated',
  'Program stunting untuk 5.000+ balita':'Stunting program for 5,000+ toddlers',
  'Vaksinasi dan pemeriksaan kesehatan gratis':'Vaccination and free health check-ups',
  'Pendampingan 1.500+ UMKM lokal aktif':'Mentoring 1,500+ active local MSMEs',
  'Program pertanian terpadu di 15 desa':'Integrated farming program in 15 villages',
  'Pelatihan vokasi 3.000+ warga per tahun':'Vocational training for 3,000+ residents per year',
  'Bantuan renovasi rumah 2.000+ keluarga':'Home renovation assistance for 2,000+ families',
  'Penanaman 500.000+ pohon per tahun':'Planting 500,000+ trees per year',
  'Rehabilitasi 200 ha lahan bekas tambang':'Rehabilitation of 200 ha of former mining land',
  'Program bank sampah di 50 desa':'Waste bank program in 50 villages',
  'Edukasi lingkungan 10.000+ pelajar':'Environmental education for 10,000+ students',
  // ===== keberlanjutan-kebijakan.html =====
  'Komitmen Keberlanjutan':'Sustainability Commitment','Progres Target Keberlanjutan 2026':'2026 Sustainability Target Progress',
  'Target Emisi Karbon Indocement':'Indocement Carbon Emission Target','Pengurangan Emisi vs 2022':'Emission Reduction vs 2022',
  'Standar Pelaporan Keberlanjutan':'Sustainability Reporting Standard','Sertifikasi Manajemen Lingkungan':'Environmental Management Certification',
  'Pengurangan Emisi CO₂':'CO₂ Emission Reduction','Efisiensi Energi':'Energy Efficiency','Pengelolaan Air':'Water Management',
  'Ekonomi Sirkular':'Circular Economy','Biodiversitas':'Biodiversity','Keselamatan Kerja':'Workplace Safety',
  'Program Green Kiln dan substitusi bahan bakar alternatif (AFR) untuk mengurangi emisi CO₂ per ton semen yang diproduksi.':
    'Green Kiln program and alternative fuel (AFR) substitution to reduce CO₂ emissions per ton of cement produced.',
  'Optimalisasi konsumsi energi melalui teknologi kiln terbaru, waste heat recovery, dan penggunaan energi terbarukan.':
    'Optimizing energy consumption through latest kiln technology, waste heat recovery, and renewable energy use.',
  'Program daur ulang air, pengelolaan air limbah, dan pengurangan konsumsi air bersih di seluruh fasilitas produksi.':
    'Water recycling program, wastewater management, and reducing fresh water consumption across all production facilities.',
  'Penggunaan limbah industri (fly ash, slag) sebagai bahan substitusi klinker untuk mengurangi limbah dan emisi.':
    'Using industrial waste (fly ash, slag) as clinker substitute materials to reduce waste and emissions.',
  'Program reklamasi lahan bekas tambang, penanaman pohon, dan pemantauan keanekaragaman hayati di sekitar pabrik.':
    'Former mining land reclamation program, tree planting, and biodiversity monitoring around plants.',
  'Zero accident target melalui program K3 terpadu, pelatihan keselamatan rutin, dan audit keselamatan kerja berkala.':
    'Zero accident target through integrated occupational health and safety programs, regular safety training, and periodic safety audits.',
  // ===== media-berita.html =====
  'Semua':'All','Berita Perusahaan':'Company News','Acara & Event':'Events','Penghargaan':'Awards',
  'Siaran Pers Terbaru':'Latest Press Releases','Lihat di Website Resmi':'View on Official Website',
  'Penghargaan':'Award','Berita':'News','Acara':'Event','Inovasi':'Innovation','Infrastruktur':'Infrastructure',
  'Keberlanjutan':'Sustainability','Korporat':'Corporate','Baca Selengkapnya':'Read More','Baca ':'Read ',
  // ===== media-siaran-pers.html =====
  'Laporan Keuangan':'Financial Report','Kerja Sama':'Partnership',
  // ===== media-galeri.html =====
  'Galeri Foto':'Photo Gallery','Galeri Video':'Video Gallery','Foto':'Photo','Video':'Video',
  // RUPS agenda text
  'Persetujuan pembagian dividen interim tahun buku 2026 sebesar Rp 250 per lembar saham kepada seluruh pemegang saham yang namanya tercatat dalam Daftar Pemegang Saham Perseroan.':
    'Approval of interim dividend distribution for fiscal year 2026 of Rp 250 per share to all shareholders registered in the Company Shareholder Register.',
  '1. Persetujuan Laporan Tahunan 2025 termasuk Laporan Tugas Pengawasan Dewan Komisaris':'1. Approval of the 2025 Annual Report including the Board of Commissioners Supervisory Report',
  '2. Pengesahan Laporan Keuangan Konsolidasian Perseroan untuk tahun buku 2025':'2. Ratification of the Consolidated Financial Statements for fiscal year 2025',
  '3. Penetapan penggunaan laba bersih tahun buku 2025':'3. Determination of the use of net profit for fiscal year 2025',
  '4. Perubahan susunan anggota Direksi dan/atau Dewan Komisaris Perseroan':'4. Changes in the composition of the Board of Directors and/or Board of Commissioners',
  '5. Penetapan remunerasi anggota Direksi dan Dewan Komisaris':'5. Determination of remuneration for Board members',
  '1. Persetujuan Laporan Tahunan 2024 termasuk Laporan Tugas Pengawasan Dewan Komisaris':'1. Approval of the 2024 Annual Report including the Board of Commissioners Supervisory Report',
  '2. Pengesahan Laporan Keuangan Konsolidasian Perseroan untuk tahun buku 2024':'2. Ratification of the Consolidated Financial Statements for fiscal year 2024',
  '3. Penetapan penggunaan laba bersih tahun buku 2024':'3. Determination of the use of net profit for fiscal year 2024',
  '4. Penunjukan Kantor Akuntan Publik untuk tahun buku 2025':'4. Appointment of the Public Accounting Firm for fiscal year 2025',
  '1. Persetujuan Laporan Tahunan 2023 termasuk Laporan Tugas Pengawasan Dewan Komisaris':'1. Approval of the 2023 Annual Report including the Board of Commissioners Supervisory Report',
  '2. Pengesahan Laporan Keuangan Konsolidasian Perseroan untuk tahun buku 2023':'2. Ratification of the Consolidated Financial Statements for fiscal year 2023',
  '3. Penetapan penggunaan laba bersih tahun buku 2023':'3. Determination of the use of net profit for fiscal year 2023',
  // Progress bar labels
  'Pengurangan Emisi CO₂ (target -15% vs 2020)':'CO₂ Emission Reduction (target -15% vs 2020)',
  'Efisiensi Energi (target -12% vs 2020)':'Energy Efficiency (target -12% vs 2020)',
  'Pengurangan Konsumsi Air (target -10% vs 2020)':'Water Consumption Reduction (target -10% vs 2020)',
  'Penggunaan AFR/Biomass (target 20% substitusi)':'AFR/Biomass Usage (target 20% substitution)',
  '8% tercapai':'8% achieved','9% tercapai':'9% achieved','7% tercapai':'7% achieved','14% tercapai':'14% achieved',
  // Other common text
  'PT Indocement Tunggal Prakarsa Tbk.':'PT Indocement Tunggal Prakarsa Tbk.',
  'Lihat di Website Resmi':'View on Official Website',
  'Unduh':'Download','Unduh PDF':'Download PDF',
  // News article titles
  'Indocement Raih Penghargaan Sustainability Award 2026 dari Kementerian LHK':'Indocement Wins Sustainability Award 2026 from Ministry of Environment and Forestry',
  'Tim Media':'Media Team','20 Oktober 2026':'October 20, 2026','1 Okt 2026':'Oct 1, 2026','14 Okt 2026':'Oct 14, 2026','8 Okt 2026':'Oct 8, 2026','25 Sep 2026':'Sep 25, 2026',
  '18 Sep 2026':'Sep 18, 2026','10 Sep 2026':'Sep 10, 2026','3 Sep 2026':'Sep 3, 2026','28 Agu 2026':'Aug 28, 2026','20 Agu 2026':'Aug 20, 2026',
  'Pabrik Banyuwangi Capai Kapasitas Produksi Penuh':'Banyuwangi Plant Reaches Full Production Capacity',
  'Program Beasiswa Harmoni Tiga Roda Bantu 500 Mahasiswa':'Harmoni Tiga Roda Scholarship Program Helps 500 University Students',
  'Indocement Gelar Forum Inovasi Industri Semen 2026':'Indocement Holds Cement Industry Innovation Forum 2026',
  'Semen Indocement Dukung Pembangunan 10.000 Rumah Subsidi':'Indocement Cement Supports Construction of 10,000 Subsidized Homes',
  'Semen Rendah Karbon Tiga Roda Resmi Diluncurkan ke Pasar':'Low-Carbon Tiga Roda Cement Officially Launched to Market',
  'Semen Indocement Digunakan pada Tol Trans-Jawa Segmen Terbaru':'Indocement Cement Used on Latest Trans-Jawa Toll Road Segment',
  'Indocement Kurangi Emisi CO₂ 8% Lewat Program Green Kiln':'Indocement Reduces CO₂ Emissions 8% Through Green Kiln Program',
  'Direksi Baru Indocement Resmi Dilantik dalam RUPS Tahunan':'New Indocement Board of Directors Officially Inaugurated at Annual GMS',
  'Ribuan Rumah di Sekitar Pabrik Citeureup Terima Bantuan Renovasi':'Thousands of Homes Near Citeureup Plant Receive Renovation Assistance',
  'Indocement Ikuti Pameran Konstruksi Indonesia 2026 di JIExpo':'Indocement Participates in Indonesia Construction Exhibition 2026 at JIExpo',
  // Siaran Pers titles
  'Laporan Keuangan Konsolidasian Indocement 30 September 2026':'Consolidated Financial Statements of Indocement 30 September 2026',
  'Indocement Tandatangani MoU Pengembangan Semen Ramah Lingkungan dengan ITB':'Indocement Signs MoU for Eco-Friendly Cement Development with ITB',
  'RUPS Luar Biasa Indocement Setujui Pembagian Dividen Interim 2026':'Indocement Extraordinary GMS Approves Interim Dividend Distribution 2026',
  'Laporan Keuangan Konsolidasian Indocement 30 Juni 2026':'Consolidated Financial Statements of Indocement 30 June 2026',
  'Laporan Keuangan Konsolidasian Indocement 31 Maret 2026':'Consolidated Financial Statements of Indocement 31 March 2026',
  'RUPS Tahunan 2026 Indocement: Persetujuan Laporan Tahunan dan Penetapan Direksi':'Indocement Annual GMS 2026: Approval of Annual Report and Appointment of Directors',
  'Laporan Keuangan Konsolidasian Indocement 31 Desember 2025':'Consolidated Financial Statements of Indocement 31 December 2025',
  // Siaran Pers descriptions
  'PT Indocement Tunggal Prakarsa Tbk. merilis laporan keuangan konsolidasian untuk periode yang berakhir 30 September 2026.':
    'PT Indocement Tunggal Prakarsa Tbk. releases consolidated financial statements for the period ending 30 September 2026.',
  'Kerja sama riset dan pengembangan untuk menghasilkan produk semen dengan jejak karbon lebih rendah.':
    'Research and development collaboration to produce cement products with a lower carbon footprint.',
  'Rapat Umum Pemegang Saham menyetujui dividen interim sebesar Rp 250 per lembar saham.':
    'The General Meeting of Shareholders approved an interim dividend of Rp 250 per share.',
  'PT Indocement Tunggal Prakarsa Tbk. merilis laporan keuangan konsolidasian untuk periode yang berakhir 30 Juni 2026.':
    'PT Indocement Tunggal Prakarsa Tbk. releases consolidated financial statements for the period ending 30 June 2026.',
  'PT Indocement Tunggal Prakarsa Tbk. merilis laporan keuangan konsolidasian untuk kuartal pertama tahun 2026.':
    'PT Indocement Tunggal Prakarsa Tbk. releases consolidated financial statements for the first quarter of 2026.',
  'Rapat Umum Pemegang Saham Tahunan menyetujui laporan tahunan 2025 dan menetapkan susunan Direksi dan Dewan Komisaris baru.':
    'The Annual General Meeting of Shareholders approved the 2025 annual report and appointed the new Board of Directors and Board of Commissioners.',
  'PT Indocement Tunggal Prakarsa Tbk. merilis laporan keuangan konsolidasian untuk tahun yang berakhir 31 Desember 2025.':
    'PT Indocement Tunggal Prakarsa Tbk. releases consolidated financial statements for the year ending 31 December 2025.',
  // Gallery captions
  'Pabrik Citeureup — Jawa Barat':'Citeureup Plant — West Java','Semen Tiga Roda — Produk Unggulan':'Tiga Roda Cement — Flagship Product',
  'Proyek Infrastruktur — Tol Trans-Jawa':'Infrastructure Project — Trans-Jawa Toll Road','Pabrik Cirebon — Fasilitas Modern':'Cirebon Plant — Modern Facility',
  'Pabrik Tarjun — Kalimantan Selatan':'Tarjun Plant — South Kalimantan','Mortar Tiga Roda — Siap Pakai':'Tiga Roda Mortar — Ready to Use',
  'Semen Putih TR30 — Finishing Premium':'TR30 White Cement — Premium Finishing','Pembangunan Jembatan — Kontribusi Nyata':'Bridge Construction — Real Contribution',
  'Program CSR — Memberdayakan Komunitas':'CSR Program — Empowering Communities',
  'Company Profile PT Indocement Tunggal Prakarsa Tbk. 2026':'Company Profile PT Indocement Tunggal Prakarsa Tbk. 2026',
  'Proses Produksi Semen Tiga Roda dari Bahan Baku hingga Pengemasan':'Tiga Roda Cement Production Process from Raw Materials to Packaging',
  'Program Keberlanjutan Indocement: Green Kiln & Pengurangan Emisi CO₂':'Indocement Sustainability Program: Green Kiln & CO₂ Emission Reduction',
  'Harmoni Tiga Roda: Program CSR Indocement untuk Masyarakat Sekitar Pabrik':'Harmoni Tiga Roda: Indocement CSR Program for Communities Around Plants',
  'Peresmian Pabrik Banyuwangi: Ekspansi Indocement ke Jawa Timur':'Banyuwangi Plant Inauguration: Indocement Expansion to East Java',
  'Laporan Keberlanjutan 2025: Komitmen Indocement untuk Masa Depan':'2025 Sustainability Report: Indocement\'s Commitment to the Future',
  'Jan 2026':'Jan 2026','Mar 2026':'Mar 2026','Jun 2026':'Jun 2026','Agu 2026':'Aug 2026','Sep 2026':'Sep 2026','Okt 2026':'Oct 2026',
  ' rb tayangan':'K views',
  // ===== Sejarah paragraphs (full textContent) =====
  'PT Indocement Tunggal Prakarsa Tbk. (Indocement) didirikan pada tahun 1975 dengan nama PT Distinct Indonesia Cement Enterprise (DICE) yang memiliki pabrik pertama di Citeureup, Kabupaten Bogor, Jawa Barat. Seiring waktu, perusahaan terus berkembang melalui serangkaian akuisisi dan pembangunan pabrik baru.':
    'PT Indocement Tunggal Prakarsa Tbk. (Indocement) was founded in 1975 as PT Distinct Indonesia Cement Enterprise (DICE) with its first plant in Citeureup, Bogor Regency, West Java. Over time, the company continued to grow through a series of acquisitions and new plant construction.',
  'Pada tahun 1985, beberapa perusahaan semen bergabung membentuk Indocement. Pada tahun 1989, Indocement resmi tercatat di Bursa Efek Indonesia (BEI) dengan kode saham INTP, menjadi salah satu emiten tertua di bursa Indonesia.':
    'In 1985, several cement companies merged to form Indocement. In 1989, Indocement was officially listed on the Indonesia Stock Exchange (IDX) with stock code INTP, becoming one of the oldest listed companies on the Indonesian stock exchange.',
  'Sejak tahun 2016, Indocement beroperasi sebagai anak perusahaan dari Heidelberg Materials AG (sebelumnya HeidelbergCement), salah satu produsen bahan bangunan terbesar di dunia yang berbasis di Jerman. Kemitraan ini memperkuat kapasitas teknologi dan standar internasional Indocement.':
    'Since 2016, Indocement has operated as a subsidiary of Heidelberg Materials AG (formerly HeidelbergCement), one of the world\'s largest building materials producers based in Germany. This partnership strengthens Indocement\'s technological capabilities and international standards.',
  'Saat ini Indocement memiliki empat belas pabrik yang tersebar di enam lokasi: Citeureup (Jawa Barat), Cirebon (Jawa Barat), Tarjun (Kalimantan Selatan), Grobogan (Jawa Tengah), Maros (Sulawesi Selatan), dan Banyuwangi (Jawa Timur).':
    'Indocement currently has fourteen plants spread across six locations: Citeureup (West Java), Cirebon (West Java), Tarjun (South Kalimantan), Grobogan (Central Java), Maros (South Sulawesi), and Banyuwangi (East Java).',
  // ===== Visi/Misi/Nilai paragraphs =====
  'Menjadi produsen semen dan bahan bangunan terkemuka di Indonesia yang berkomitmen pada kualitas, keberlanjutan, dan pertumbuhan jangka panjang bagi seluruh pemangku kepentingan.':
    'To become the leading cement and building materials producer in Indonesia, committed to quality, sustainability, and long-term growth for all stakeholders.',
  'Menghasilkan produk semen dan bahan bangunan berkualitas tinggi, mengembangkan sumber daya manusia yang kompeten, menerapkan praktik bisnis berkelanjutan, dan memberikan nilai tambah bagi pemegang saham dan masyarakat.':
    'To produce high-quality cement and building materials, develop competent human resources, implement sustainable business practices, and deliver added value to shareholders and society.',
  'Integritas, Inovasi, Kolaborasi, dan Keberlanjutan — menjadi landasan setiap keputusan dan tindakan seluruh insan Indocement dalam memberikan kontribusi terbaik bagi bangsa.':
    'Integrity, Innovation, Collaboration, and Sustainability — the foundation of every decision and action of all Indocement employees in making the best contribution to the nation.',
  // ===== Lokasi descriptions =====
  'Kompleks pabrik terbesar dengan kapasitas produksi terbesar. Lokasi pertama dan pusat operasi utama Indocement sejak 1975.':
    'The largest plant complex with the biggest production capacity. The first location and main operations center of Indocement since 1975.',
  'Pabrik berteknologi modern yang melayani kebutuhan semen di wilayah Jawa Barat bagian timur dan Jawa Tengah.':
    'A modern technology plant serving cement needs in eastern West Java and Central Java.',
  'Pabrik strategis untuk melayani kebutuhan konstruksi di Kalimantan dan Indonesia Timur.':
    'A strategic plant serving construction needs in Kalimantan and Eastern Indonesia.',
  'Fasilitas penggilingan semen yang mendukung distribusi di Jawa Tengah dengan merek Semen Grobogan.':
    'Cement grinding facility supporting distribution in Central Java under the Semen Grobogan brand.',
  'Pabrik yang melayani kebutuhan semen di Sulawesi dan Indonesia bagian timur dengan kapasitas produksi kompetitif.':
    'A plant serving cement needs in Sulawesi and eastern Indonesia with competitive production capacity.',
  'Pabrik terbaru Indocement yang memperkuat jaringan distribusi di Jawa Timur dan Bali.':
    'Indocement\'s newest plant, strengthening the distribution network in East Java and Bali.',
  // ===== Direksi bios =====
  'Warga negara Indonesia, usia 58 tahun. Beliau menjabat sebagai Direktur Utama Perseroan sejak 1 Mei 2014. Meraih gelar Sarjana Teknik Sipil dari Universitas Trisakti, Magister Administrasi Bisnis dari San Diego University, dan Master of Arts in Christian Education (M.A.C.E) dari Fort Worth, Texas.':
    'Indonesian citizen, aged 58. He has served as President Director of the Company since 1 May 2014. He holds a Bachelor of Civil Engineering from Trisakti University, a Master of Business Administration from San Diego University, and a Master of Arts in Christian Education (M.A.C.E) from Fort Worth, Texas.',
  'Jose Maria Magrina Vadillo berkewarganegaraan Spanyol. Beliau meraih gelar Insinyur Organisasi Industri dari Universitat Politècnica de Catalunya serta gelar International Master of Business Administration (IMBA) dengan konsentrasi Pemasaran dan Keuangan dari Instituto de Empresa.':
    'Jose Maria Magrina Vadillo is a Spanish citizen. He holds an Industrial Organization Engineering degree from Universitat Politècnica de Catalunya and an International Master of Business Administration (IMBA) with a concentration in Marketing and Finance from Instituto de Empresa.',
  'Warga negara Indonesia, usia 61 tahun. Beliau menjabat sebagai Direktur Perseroan sejak 4 Desember 2015. Meraih gelar Sarjana Teknik Sipil dari Universitas Atma Jaya Yogyakarta, Magister Administrasi Bisnis dari University of Portland.':
    'Indonesian citizen, aged 61. He has served as Director of the Company since 4 December 2015. He holds a Bachelor of Civil Engineering from Atma Jaya University Yogyakarta and a Master of Business Administration from University of Portland.',
  'Warga negara Indonesia, usia 53 tahun. Beliau menjabat sebagai Direktur Perseroan sejak 4 Juni 2018. Meraih gelar Sarjana Ekonomi jurusan Akuntasi dari Universitas Trisakti, Magister Manajemen di Bidang Bisnis Strategis dari Institute Business and Management Prasetia Mulya.':
    'Indonesian citizen, aged 53. He has served as Director of the Company since 4 June 2018. He holds a Bachelor of Economics in Accounting from Trisakti University and a Master of Management in Strategic Business from Prasetia Mulya Business Institute.',
  'Warga negara Denmark, usia 56. Beliau menjabat sebagai Direktur Perseroan sejak 17 Mei 2023. Beliau meraih gelar Sarjana Sains dari Technology Management and Marine Engineering Svendborg Mariene Engineer Academy, gelar Diploma Ekonomi Bisnis dari University of Southern Denmark dan gelar Magister Administrasi Bisnis dari University of Bradford.':
    'Danish citizen, aged 56. He has served as Director of the Company since 17 May 2023. He holds a Bachelor of Science from Technology Management and Marine Engineering Svendborg Marine Engineer Academy, a Business Economics Diploma from University of Southern Denmark, and a Master of Business Administration from University of Bradford.',
  'Warga negara Perancis, usia 51 tahun. Beliau menjabat sebagai Direktur Perseroan sejak 4 Desember 2024. Meraih gelar master di bidang manajemen industri dari ESC Lille, sebelumnya menjabat sebagai Wakil Direktur Utama bidang Keuangan di Heidelberg Materials Kanada.':
    'French citizen, aged 51. He has served as Director of the Company since 4 December 2024. He holds a Master\'s degree in Industrial Management from ESC Lille, previously serving as Vice President Director of Finance at Heidelberg Materials Canada.',
  'Warga negara Indonesia, usia 67 tahun. Beliau menjabat sebagai Wakil Direktur Utama Perseroan sejak 8 Juli 2021. Meraih gelar Diploma Bisnis dari Ngee Ann Collage. Sebelumnya, beliau pernah menjabat sebagai Direktur Indofood Agri Resources Ltd. dan Komisaris Utama PT Indoritel Makmur Internasional Tbk.':
    'Indonesian citizen, aged 67. He has served as Vice President Director of the Company since 8 July 2021. He holds a Business Diploma from Ngee Ann College. Previously, he served as Director of Indofood Agri Resources Ltd. and President Commissioner of PT Indoritel Makmur Internasional Tbk.',
  // ===== Komisaris roles =====
  'Wakil Komisaris Utama/Komisaris Independen':'Vice President Commissioner/Independent Commissioner',
  // ===== Struktur note =====
  '* Data kepemilikan saham berdasarkan laporan terbaru per September 2026. Publik memegang 49% saham INTP yang diperdagangkan di BEI.':
    '* Shareholding data based on the latest report as of September 2026. Public holds 49% of INTP shares traded on IDX.',
  // ===== Table cells =====
  'Jakarta & Jabodetabek':'Jakarta & Greater Jakarta','Jawa Barat & Jawa Timur':'West Java & East Java','Sumatera Utara':'North Sumatra',
  'Afiliasi Heidelberg Materials AG':'Affiliate of Heidelberg Materials AG','Diperdagangkan di BEI':'Traded on IDX',
  'Ready-Mix Concrete (Beton Siap Pakai)':'Ready-Mix Concrete','Pertambangan Agregat & Quarry':'Aggregate Mining & Quarry',
  'Properti & Pengelolaan Aset':'Property & Asset Management','Per 30 September 2026':'As of 30 September 2026',
  // ===== Semen product descriptions =====
  'Indocement menghasilkan semen berkualitas tinggi di bawah merek utama Tiga Roda dan Rajawali, serta merek regional Semen Grobogan. Dengan kapasitas produksi mencapai 33,5 juta ton per tahun, Indocement menjadi salah satu produsen semen terbesar di Indonesia dan Asia Tenggara.':
    'Indocement produces high-quality cement under the flagship brands Tiga Roda and Rajawali, as well as the regional brand Semen Grobogan. With a production capacity of 33.5 million tons per year, Indocement is one of the largest cement producers in Indonesia and Southeast Asia.',
  'Seluruh produk semen Indocement telah memenuhi Standar Nasional Indonesia (SNI) dan tersertifikasi internasional, didukung oleh teknologi produksi terkini dari Heidelberg Materials AG serta tenaga ahli berpengalaman lebih dari empat dekade.':
    'All Indocement cement products comply with Indonesian National Standards (SNI) and are internationally certified, supported by the latest production technology from Heidelberg Materials AG and experienced professionals with over four decades of expertise.',
  'Semen serbaguna untuk berbagai konstruksi — dari perumahan hingga gedung bertingkat. Produk andalan merek Tiga Roda yang memenuhi SNI 7064:2014.':
    'Versatile cement for various construction — from housing to high-rise buildings. The flagship product of the Tiga Roda brand, meeting SNI 7064:2014.',
  'Semen putih premium untuk finishing eksterior dan interior. Kecerahan tinggi (>85%), dapat diberi pigmen warna. Memenuhi SNI 15-0129:2004.':
    'Premium white cement for exterior and interior finishing. High brightness (>85%), can be pigmented. Meets SNI 15-0129:2004.',
  'Mortar siap pakai untuk plester, acian, thinbed, dan screed lantai. Praktis, konsisten kualitasnya, dan memenuhi SNI 6882:2014.':
    'Ready-mix mortar for plastering, skim coating, thinbed, and floor screed. Practical, consistent quality, meeting SNI 6882:2014.',
  // ===== Beton descriptions =====
  'Unit bisnis beton siap pakai Indocement dioperasikan melalui anak perusahaan PT Pionirbeton Industri dan PT Dea Beton Industri, dengan lebih dari 100 batching plant yang tersebar strategis di Pulau Jawa.':
    'Indocement\'s ready-mix concrete business unit is operated through subsidiaries PT Pionirbeton Industri and PT Dea Beton Industri, with over 100 batching plants strategically located across Java.',
  'Kami menyediakan berbagai mutu beton mulai dari K100 hingga K600, dengan layanan 24/7 dan tim teknis yang siap membantu proyek konstruksi skala kecil hingga mega proyek infrastruktur nasional.':
    'We provide various concrete grades ranging from K100 to K600, with 24/7 service and a technical team ready to assist construction projects from small-scale to national mega infrastructure projects.',
  // ===== Stock info labels =====
  'Kode Saham di BEI':'Stock Code on IDX','Jumlah Saham Beredar':'Total Shares Outstanding','Harga Terakhir (per Okt 2026)':'Last Price (as of Oct 2026)','Dividen Interim 2026':'Interim Dividend 2026',
  'PT Indocement Tunggal Prakarsa Tbk.':'PT Indocement Tunggal Prakarsa Tbk.','IDX (Bursa Efek Indonesia)':'IDX (Indonesia Stock Exchange)',
  '5 Desember 1989':'5 December 1989','Rp 500 per saham':'Rp 500 per share','3.699.429.816 lembar':'3,699,429,816 shares',
  '~1,2 juta lot/hari':'~1.2 million lots/day','~Rp 36,3 triliun':'~Rp 36.3 trillion',
  // ===== Kronologi & Obligasi =====
  'Berikut adalah kronologi pencatatan saham PT Indocement Tunggal Prakarsa Tbk. di Bursa Efek Indonesia sejak IPO hingga saat ini.':
    'The following is the chronology of PT Indocement Tunggal Prakarsa Tbk. stock listing on the Indonesia Stock Exchange from IPO to present.',
  'PT Indocement Tunggal Prakarsa Tbk. tidak memiliki obligasi atau sukuk yang sedang beredar di pasar modal Indonesia. Perseroan memiliki posisi keuangan yang kuat dengan kas bersih (net cash) dan tidak memiliki utang bank jangka panjang, sehingga tidak memerlukan penerbitan instrumen utang melalui pasar modal.':
    'PT Indocement Tunggal Prakarsa Tbk. has no bonds or sukuk currently outstanding in the Indonesian capital market. The Company has a strong financial position with net cash and no long-term bank debt, and therefore does not need to issue debt instruments through the capital market.',
  // ===== CSR descriptions =====
  'Program CSR Indocement dikenal dengan merek Harmoni Tiga Roda, yang mencerminkan tiga pilar utama: Manusia, Komunitas, dan Lingkungan. Program ini berfokus pada komunitas di sekitar wilayah operasional pabrik Indocement yang tersebar di enam lokasi di Indonesia.':
    'Indocement\'s CSR program is known under the brand Harmoni Tiga Roda, reflecting three main pillars: People, Community, and Environment. The program focuses on communities around Indocement\'s plant operational areas spread across six locations in Indonesia.',
  'Sejak diluncurkan, program Harmoni Tiga Roda telah memberikan dampak positif bagi ratusan ribu masyarakat melalui berbagai inisiatif di bidang pendidikan, kesehatan, pemberdayaan ekonomi, dan pelestarian lingkungan.':
    'Since its launch, the Harmoni Tiga Roda program has created positive impact for hundreds of thousands of people through various initiatives in education, health, economic empowerment, and environmental preservation.',
  // ===== Sustainability commitment =====
  'Indocement berkomitmen untuk menjalankan bisnis yang bertanggung jawab secara lingkungan dan sosial, selaras dengan tujuan pembangunan berkelanjutan (SDGs) PBB dan visi Net Zero 2050 Heidelberg Materials.':
    'Indocement is committed to conducting environmentally and socially responsible business, aligned with the UN Sustainable Development Goals (SDGs) and Heidelberg Materials\' Net Zero 2050 vision.',
  'Sebagai bagian dari Heidelberg Materials, Indocement mengadopsi standar keberlanjutan global tertinggi, termasuk pelaporan GRI Standards, target pengurangan emisi Science Based Targets initiative (SBTi), dan komitmen terhadap ekonomi sirkular.':
    'As part of Heidelberg Materials, Indocement adopts the highest global sustainability standards, including GRI Standards reporting, Science Based Targets initiative (SBTi) emission reduction targets, and commitment to circular economy.',
  // ===== RUPS intro =====
  'PT Indocement Tunggal Prakarsa Tbk. menyelenggarakan Rapat Umum Pemegang Saham (RUPS) sesuai ketentuan Undang-Undang Perseroan Terbatas dan peraturan Otoritas Jasa Keuangan (OJK). RUPS merupakan forum tertinggi dalam struktur tata kelola perusahaan yang memberikan kesempatan bagi seluruh pemegang saham untuk berpartisipasi aktif dalam pengambilan keputusan penting perusahaan.':
    'PT Indocement Tunggal Prakarsa Tbk. conducts the General Meeting of Shareholders (GMS) in accordance with the Limited Liability Company Law and regulations of the Financial Services Authority (OJK). The GMS is the highest forum in the corporate governance structure, providing all shareholders the opportunity to actively participate in important corporate decision-making.',
  // ===== Achievement items (full text) =====
  'Beasiswa S1 untuk 500+ mahasiswa per tahun':'Undergraduate scholarships for 500+ students per year',
  'Renovasi 50+ ruang kelas di sekitar pabrik':'Renovation of 50+ classrooms near plants',
  'Program pelatihan 200+ guru sekolah dasar':'Training program for 200+ elementary school teachers',
  'Perpustakaan keliling di 30 desa':'Mobile library in 30 villages',
  '12 klinik kesehatan gratis di kawasan pabrik':'12 free health clinics in plant areas',
  '200+ posyandu aktif yang difasilitasi':'200+ active community health posts facilitated',
  'Program stunting untuk 5.000+ balita':'Stunting program for 5,000+ toddlers',
  'Vaksinasi dan pemeriksaan kesehatan gratis':'Vaccination and free health check-ups',
  'Pendampingan 1.500+ UMKM lokal aktif':'Mentoring 1,500+ active local MSMEs',
  'Program pertanian terpadu di 15 desa':'Integrated farming program in 15 villages',
  'Pelatihan vokasi 3.000+ warga per tahun':'Vocational training for 3,000+ residents per year',
  'Bantuan renovasi rumah 2.000+ keluarga':'Home renovation assistance for 2,000+ families',
  'Penanaman 500.000+ pohon per tahun':'Planting 500,000+ trees per year',
  'Rehabilitasi 200 ha lahan bekas tambang':'Rehabilitation of 200 ha of former mining land',
  'Program bank sampah di 50 desa':'Waste bank program in 50 villages',
  'Edukasi lingkungan 10.000+ pelajar':'Environmental education for 10,000+ students',
  // ===== Laporan descriptions =====
  'Laporan keuangan konsolidasian PT Indocement Tunggal Prakarsa Tbk. yang telah diaudit, tersedia untuk diunduh di website resmi perusahaan. Laporan mencakup laporan posisi keuangan, laporan laba rugi, laporan arus kas, dan catatan atas laporan keuangan.':
    'The audited consolidated financial statements of PT Indocement Tunggal Prakarsa Tbk. are available for download on the official company website. The reports include statements of financial position, income statements, cash flow statements, and notes to the financial statements.',
  'Laporan tahunan (Annual Report) PT Indocement Tunggal Prakarsa Tbk. menyajikan gambaran menyeluruh tentang kinerja operasional, keuangan, tata kelola perusahaan, dan keberlanjutan selama satu tahun penuh. Laporan tersedia dalam format digital di website resmi perusahaan.':
    'The Annual Report of PT Indocement Tunggal Prakarsa Tbk. provides a comprehensive overview of operational, financial, corporate governance, and sustainability performance over a full year. Reports are available in digital format on the official company website.',
  'Laporan keberlanjutan (Sustainability Report) PT Indocement Tunggal Prakarsa Tbk. disusun sesuai standar GRI dan memaparkan komitmen serta kinerja perusahaan di bidang lingkungan, sosial, dan tata kelola (ESG). Laporan tersedia dalam dua bahasa (Indonesia dan Inggris).':
    'The Sustainability Report of PT Indocement Tunggal Prakarsa Tbk. is prepared in accordance with GRI standards and outlines the company\'s commitments and performance in environmental, social, and governance (ESG) areas. Reports are available in both Indonesian and English.',
  'Presentasi hubungan investor (Investor Relations Presentation) mencakup materi Investor Day, paparan hasil kinerja kuartalan, dan update strategi bisnis perusahaan. Presentasi dirancang untuk memberikan informasi terkini kepada investor dan analis pasar modal.':
    'The Investor Relations Presentation includes Investor Day materials, quarterly performance results presentations, and business strategy updates. Presentations are designed to provide current information to investors and capital market analysts.',
  // ===== Sustainability programs =====
  'Program Green Kiln dan substitusi bahan bakar alternatif (AFR) untuk mengurangi emisi CO₂ per ton semen yang diproduksi.':
    'Green Kiln program and alternative fuel (AFR) substitution to reduce CO₂ emissions per ton of cement produced.',
  'Optimalisasi konsumsi energi melalui teknologi kiln terbaru, waste heat recovery, dan penggunaan energi terbarukan.':
    'Optimizing energy consumption through latest kiln technology, waste heat recovery, and renewable energy use.',
  'Program daur ulang air, pengelolaan air limbah, dan pengurangan konsumsi air bersih di seluruh fasilitas produksi.':
    'Water recycling program, wastewater management, and reducing fresh water consumption across all production facilities.',
  'Penggunaan limbah industri (fly ash, slag) sebagai bahan substitusi klinker untuk mengurangi limbah dan emisi.':
    'Using industrial waste (fly ash, slag) as clinker substitute materials to reduce waste and emissions.',
  'Program reklamasi lahan bekas tambang, penanaman pohon, dan pemantauan keanekaragaman hayati di sekitar pabrik.':
    'Former mining land reclamation program, tree planting, and biodiversity monitoring around plants.',
  'Zero accident target melalui program K3 terpadu, pelatihan keselamatan rutin, dan audit keselamatan kerja berkala.':
    'Zero accident target through integrated occupational health and safety programs, regular safety training, and periodic safety audits.',
  // ===== Misc =====
  'Unduh':'Download','Unduh PDF':'Download PDF','Lihat di Website Resmi':'View on Official Website',
  'Mata Acara Rapat:':'Meeting Agenda:','Rapat telah dilaksanakan':'Meeting has been held',
  ' untuk informasi dan dokumen RUPS selengkapnya, kunjungi ':'For complete RUPS information and documents, visit ',
  'website resmi Indocement':'the official Indocement website',
  'halaman obligasi website resmi Indocement':'the official Indocement bond page',
};

function intpSetLang(lang) {
  try { localStorage.setItem('intp_lang', lang); } catch(e) {}
  var btnID = document.getElementById('langBtnID');
  var btnEN = document.getElementById('langBtnEN');
  if (btnID) btnID.classList.toggle('active', lang === 'id');
  if (btnEN) btnEN.classList.toggle('active', lang === 'en');

  // 1. Handle data-lang-key elements
  document.querySelectorAll('[data-lang-key]').forEach(function(el) {
    var key = el.getAttribute('data-lang-key');
    if (intpLang[key] && intpLang[key][lang]) {
      el.innerHTML = intpLang[key][lang];
    }
  });

  // 2. Handle search placeholder
  var searchInputs = document.querySelectorAll('#headerSearchBar input');
  searchInputs.forEach(function(input) {
    input.placeholder = (lang === 'en') ? 'Search...' : 'Cari...';
  });

  // 3. Swap credits group name: "Kelompok E6" ↔ "E6 Group"
  document.querySelectorAll('.credits strong').forEach(function(el) {
    if (!el._intpCredOrig) el._intpCredOrig = el.textContent;
    el.textContent = (lang === 'en') ? 'E6 Group' : el._intpCredOrig;
  });

  // 3. Element-level matching: translate content elements by matching textContent
  var mainEl = document.querySelector('.main') || document.body;
  if (!mainEl || !window.intpTextMap) return;

  // Select common text-bearing elements in main content (exclude nav/footer/header)
  var selectors = 'p, h2, h3, h4, li, td, th, .sl, .su, .achiev-item, .rups-agenda, .info-row .label, .info-row .val, .target-label strong, .target-label span, .pi-cat, .pi-title, .pi-desc, .feat-body h2, .feat-body p, .news-body h3, .side-body h3, .side-cat, .video-body h3, .pdate .d, .pdate .m, .pi-file, .csr-pillar-body p, .csr-achiev .achiev-item, .prog-card h3, .prog-card p, .person-body h3, .person-body span, .dir-body h3, .dir-body .role, .dir-body p, .stl, .cb h2, .card-box h2, .stat-c .sl, .stat-c .su, .stat-c .sv, .oc-node small, .rups-head h3, .rups-badge, .rups-meta span, .dl-info h4, .dl-info span, .section-lbl, .info-block h3';
  var elements = mainEl.querySelectorAll(selectors);

  elements.forEach(function(el) {
    // Skip elements with data-lang-key (already handled)
    if (el.hasAttribute && el.hasAttribute('data-lang-key')) return;
    // Skip if inside header/footer/nav/clients
    if (el.closest && el.closest('header, footer, nav, .cq-wrap, script, style, .header-search-bar')) return;
    // Skip child elements that are inside an element we'll also process (avoid double-processing)
    
    var text = el.textContent.trim();
    if (!text || text.length < 2) return;

    // Store original on first run
    if (!el._intpOrig) {
      el._intpOrig = el.innerHTML;
      el._intpOrigText = text;
    }

    var origText = el._intpOrigText;
    if (!origText) return;

    if (lang === 'en') {
      if (intpTextMap[origText]) {
        el.innerHTML = intpTextMap[origText];
      }
    } else {
      // Restore original Indonesian
      if (intpTextMap[origText]) {
        el.innerHTML = el._intpOrig;
      }
    }
  });

  // 4. Also handle text nodes that are direct children of elements (for fragments in <p> with <strong>)
  var walker = document.createTreeWalker(mainEl, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      var t = node.textContent.trim();
      if (t.length < 3) return NodeFilter.FILTER_REJECT;
      var p = node.parentNode;
      if (!p) return NodeFilter.FILTER_REJECT;
      if (p.tagName === 'SCRIPT' || p.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
      if (p.hasAttribute && p.hasAttribute('data-lang-key')) return NodeFilter.FILTER_REJECT;
      if (p.closest && p.closest('header, footer, nav, .cq-wrap, script, style, .header-search-bar')) return NodeFilter.FILTER_REJECT;
      // Only process text nodes that are NOT the sole content of their parent
      // (those are handled by element-level matching above)
      if (p.childNodes.length === 1) return NodeFilter.FILTER_REJECT;
      // Only process if parent is p, h2, h3, h4, li, td, th, div, span
      var tag = p.tagName;
      if (['P','H2','H3','H4','LI','TD','TH','DIV','SPAN','SMALL','STRONG'].indexOf(tag) < 0) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  }, false);

  var nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(function(node) {
    var text = node.textContent;
    var trimmed = text.trim();
    if (!trimmed) return;

    if (!node._intpOrig) {
      node._intpOrig = text;
    }
    var orig = node._intpOrig;
    var origTrimmed = orig.trim();

    if (lang === 'en') {
      if (intpTextMap[origTrimmed]) {
        var leadWS = orig.match(/^\s*/)[0];
        var trailWS = orig.match(/\s*$/)[0];
        node.textContent = leadWS + intpTextMap[origTrimmed] + trailWS;
      }
    } else {
      if (intpTextMap[origTrimmed]) {
        node.textContent = orig;
      }
    }
  });
}

(function() {
  var saved = 'id';
  try { saved = localStorage.getItem('intp_lang') || 'id'; } catch(e) {}
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { intpSetLang(saved); });
  } else {
    intpSetLang(saved);
  }
})();
