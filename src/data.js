// ========= Data - Don Valerio Equipamientos — Junio 2026 =========

const fmt = (n) => n.toLocaleString('es-AR', { maximumFractionDigits: 0 });

const CATEGORIES = [
  { id: 'batidoras',    n: '01', label: 'Batidoras Planetarias',   desc: 'Desde 7 hasta 60 litros' },
  { id: 'amasadoras',   n: '02', label: 'Amasadoras a Espiral',    desc: 'De 4 a 100 kg de harina' },
  { id: 'hornos',       n: '03', label: 'Hornos',                  desc: 'Convectores, piso y rotativos' },
  { id: 'camaras',      n: '04', label: 'Cámaras de Fermentación', desc: 'De 6, 16 y 32 bandejas' },
  { id: 'sobadoras',    n: '05', label: 'Sobadoras',               desc: 'De mesa y profesionales' },
  { id: 'trinchadoras', n: '06', label: 'Trinchadoras',            desc: 'Compacta y JR' },
  { id: 'rebanadoras',  n: '07', label: 'Rebanadoras',             desc: 'De mesa' },
  { id: 'laminadoras',  n: '08', label: 'Laminadoras',             desc: 'De mesa y de pie' },
  { id: 'divisoras',    n: '09', label: 'Divisoras',               desc: 'Boleadoras semi-automáticas' },
];

const PRODUCTS = [

  // ── BATIDORAS ──────────────────────────────────────────────────────────────
  {
    sku: 'B7-A', category: 'batidoras', img: 'B7-A',
    name: 'Batidora Planetaria 7 Lt', cap: '7 lt · 700 g',
    desc: 'Batidora planetaria de mesa con variador de velocidad continuo. Ideal para pastelería de pequeño porte, panaderías artesanales y uso semiprofesional.',
    specs: [['Capacidad tacho','7 litros'],['Cap. amasado','700 gr'],['Velocidad','Variador 80–680 RPM'],['Potencia','0,5 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','39 × 24 × 43 cm'],['Peso','20 kg']],
    stock: 6,
  },
  {
    sku: 'B15-V', category: 'batidoras', img: 'B15-V',
    name: 'Batidora Planetaria 15 Lt', cap: '15 lt · 1,5 kg',
    desc: 'Batidora planetaria de 15 litros con 3 velocidades fijas. Eje robusto y recipiente de acero inoxidable. La más elegida para pastelerías y cafeterías en crecimiento.',
    specs: [['Capacidad tacho','15 litros'],['Cap. amasado','1,5 kg'],['Velocidades','3 velocidades'],['Potencia','1 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','52 × 63 × 58 cm'],['Peso','50 kg']],
    stock: 4,
  },
  {
    sku: 'B20-V', category: 'batidoras', img: 'B20-V',
    name: 'Batidora Planetaria 20 Lt', cap: '20 lt · 3 kg',
    desc: 'Batidora planetaria robusta de 20 litros y 3 velocidades. La opción más vendida para pastelerías medianas con producción diaria sostenida.',
    specs: [['Capacidad tacho','20 litros'],['Cap. amasado','3 kg'],['Velocidades','3 velocidades'],['Potencia','1,5 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','55 × 68 × 65 cm'],['Peso','60 kg']],
    stock: 7,
  },
  {
    sku: 'B30-V', category: 'batidoras', img: 'B20-V',
    name: 'Batidora Planetaria 30 Lt', cap: '30 lt · 4 kg',
    desc: 'Batidora planetaria de 30 litros con 3 velocidades. Motor de 2 HP disponible en versión monofásica o trifásica. Para panaderías y pastelerías de mayor producción.',
    specs: [['Capacidad tacho','30 litros'],['Cap. amasado','4 kg'],['Velocidades','3 velocidades'],['Potencia','2 HP'],['Alimentación','380V trifásica o 220V monofásica'],['Dimensiones','60 × 70 × 68 cm'],['Peso','68 kg']],
    stock: 3,
  },
  {
    sku: 'B40-V', category: 'batidoras', img: 'B20-V',
    name: 'Batidora Planetaria 40 Lt', cap: '40 lt · 4 kg',
    desc: 'Batidora planetaria profesional de alta producción. 40 litros y motor de 2 HP trifásico para masas pesadas y trabajo continuo en panaderías industriales.',
    specs: [['Capacidad tacho','40 litros'],['Cap. amasado','4 kg'],['Velocidades','3 velocidades'],['Potencia','2 HP'],['Alimentación','380V trifásica'],['Dimensiones','68 × 66 × 120 cm'],['Peso','110 kg']],
    stock: 2,
  },
  {
    sku: 'B60-V', category: 'batidoras', img: 'B60-V',
    name: 'Batidora Planetaria 60 Lt', cap: '60 lt · 8 kg',
    desc: 'Batidora planetaria industrial con carro extractor de tacho. Motor de 4 HP trifásico para producciones intensivas. La solución definitiva para fábricas de pastelería.',
    specs: [['Capacidad tacho','60 litros'],['Cap. amasado','8 kg'],['Velocidades','3 velocidades'],['Potencia','4 HP'],['Alimentación','380V trifásica'],['Extractor','Carro para tacho'],['Dimensiones','740 × 570 × 2100 mm'],['Peso','220 kg']],
    stock: 1,
  },

  // ── AMASADORAS ─────────────────────────────────────────────────────────────
  {
    sku: 'BHS-10-A', category: 'amasadoras', img: 'BHS-10-A',
    name: 'Amasadora Espiral Variador 4 kg', cap: '4 kg harina',
    desc: 'Amasadora a espiral con variador de velocidad continuo. Ideal para panaderías pequeñas, café con productos artesanales y emprendimientos gastronómicos.',
    specs: [['Harina máx.','4 kg'],['Velocidad','Variador continuo'],['Potencia','0,75 KW'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','33 × 40 × 56 cm'],['Peso','30 kg']],
    stock: 8,
  },
  {
    sku: 'BHS-10-D', category: 'amasadoras', img: 'BHS-10-D',
    name: 'Amasadora Espiral Variador + Digital 4 kg', cap: '4 kg harina',
    desc: 'Amasadora a espiral con variador de velocidad y tablero digital programable. Mayor precisión en cada ciclo de amasado.',
    specs: [['Harina máx.','4 kg'],['Control','Variador + panel digital'],['Potencia','0,75 KW'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','33 × 40 × 56 cm'],['Peso','30 kg']],
    stock: 5,
  },
  {
    sku: 'BHS-20-A', category: 'amasadoras', img: 'BHS-20-A',
    name: 'Amasadora Rápida 8 kg', cap: '8 kg harina',
    desc: 'Amasadora rápida a espiral de 8 kg. 2 velocidades con timer. Panel electromecánico robusto para producción diaria en panaderías medianas.',
    specs: [['Harina máx.','8 kg'],['Velocidades','2 velocidades con timer'],['Potencia','1,5 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','53 × 55 × 90 cm'],['Peso','42 kg']],
    stock: 9,
  },
  {
    sku: 'BHS-20-B', category: 'amasadoras', img: 'BHS-20-B',
    name: 'Amasadora Rápida 8 kg Digital', cap: '8 kg harina',
    desc: 'Amasadora rápida a espiral con 2 velocidades, timer y tablero digital. Ideal para panaderías que buscan mayor control sobre tiempos de amasado.',
    specs: [['Harina máx.','8 kg'],['Velocidades','2 velocidades con timer'],['Control','Tablero digital'],['Potencia','1,5 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','53 × 55 × 90 cm'],['Peso','42 kg']],
    stock: 6,
  },
  {
    sku: 'BHS-30-A', category: 'amasadoras', img: 'BHS-20-A',
    name: 'Amasadora Rápida 12 kg', cap: '12 kg harina',
    desc: 'Amasadora rápida a espiral de 12 kg. Panel electromecánico con 2 velocidades y 2 timers. El caballo de batalla de las panaderías en crecimiento.',
    specs: [['Harina máx.','12 kg'],['Velocidades','2 velocidades con timer'],['Potencia','2 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','56 × 58 × 93 cm'],['Peso','50 kg']],
    stock: 4,
  },
  {
    sku: 'BHS-30-B', category: 'amasadoras', img: 'BHS-20-B',
    name: 'Amasadora Rápida 12 kg Digital', cap: '12 kg harina',
    desc: 'Amasadora rápida a espiral de 12 kg con tablero digital. 2 velocidades y timer programable para masas de alta hidratación. La más solicitada de la línea.',
    specs: [['Harina máx.','12 kg'],['Velocidades','2 velocidades con timer'],['Control','Tablero digital'],['Potencia','2 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','56 × 58 × 93 cm'],['Peso','50 kg']],
    stock: 3,
  },
  {
    sku: 'BHS-40-A', category: 'amasadoras', img: 'BHS-20-A',
    name: 'Amasadora Rápida 16 kg', cap: '16 kg harina',
    desc: 'Amasadora rápida a espiral de 16 kg. 2 velocidades y 2 timers. Panel electromecánico robusto para producción intensiva diaria.',
    specs: [['Harina máx.','16 kg'],['Velocidades','2 velocidades con timer'],['Potencia','3 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','62 × 68 × 98 cm'],['Peso','115 kg']],
    stock: 5,
  },
  {
    sku: 'BHS-40-B', category: 'amasadoras', img: 'BHS-20-B',
    name: 'Amasadora Rápida 16 kg Digital', cap: '16 kg harina',
    desc: 'Amasadora rápida a espiral de 16 kg con tablero digital. La opción preferida por panaderías modernas que buscan automatizar su proceso.',
    specs: [['Harina máx.','16 kg'],['Velocidades','2 velocidades con timer'],['Control','Tablero digital'],['Potencia','3 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','62 × 68 × 98 cm'],['Peso','115 kg']],
    stock: 4,
  },
  {
    sku: 'BHS-60-A', category: 'amasadoras', img: 'BHS-60-A',
    name: 'Amasadora Rápida 25 kg Trifásica', cap: '25 kg harina',
    desc: 'Amasadora rápida a espiral de 25 kg, trifásica. 2 velocidades con reversa y 2 temporizadores. Para panaderías industriales de alta producción.',
    specs: [['Harina máx.','25 kg'],['Velocidades','2 velocidades con reversa'],['Temporizadores','2 programables'],['Potencia','2,0/3,4 HP'],['Alimentación','380V trifásica'],['Dimensiones','88 × 55 × 95 cm'],['Peso','200 kg']],
    stock: 2,
  },
  {
    sku: 'BHS-60-B', category: 'amasadoras', img: 'BHS-60-B',
    name: 'Amasadora Rápida 25 kg Digital Trifásica', cap: '25 kg harina',
    desc: 'Amasadora rápida a espiral de 25 kg con panel digital, trifásica. Mayor control y automatización para producción intensiva.',
    specs: [['Harina máx.','25 kg'],['Velocidades','2 velocidades con reversa'],['Control','Panel digital'],['Potencia','2,0/3,4 HP'],['Alimentación','380V trifásica'],['Dimensiones','88 × 55 × 95 cm'],['Peso','200 kg']],
    stock: 2,
  },
  {
    sku: 'BHS-60-C', category: 'amasadoras', img: 'BHS-60-A',
    name: 'Amasadora Rápida 25 kg Monofásica', cap: '25 kg harina',
    desc: 'Amasadora rápida a espiral de 25 kg en versión monofásica 220V. Para instalaciones que no cuentan con corriente trifásica.',
    specs: [['Harina máx.','25 kg'],['Velocidades','2 velocidades con reversa'],['Temporizadores','2 programables'],['Potencia','2,0/3,4 HP'],['Alimentación','220V monofásica'],['Dimensiones','88 × 55 × 95 cm'],['Peso','205 kg']],
    stock: 1,
  },
  {
    sku: 'BH-130', category: 'amasadoras', img: 'BH-130',
    name: 'Amasadora Rápida 50 kg', cap: '50 kg harina',
    desc: 'Amasadora rápida industrial para 50 kg de harina. Doble motor con retroceso, 2 timers, 9 HP trifásicos. Para fábricas de pan y grandes panaderías.',
    specs: [['Harina máx.','50 kg'],['Velocidades','2 velocidades'],['Motores','2 con retroceso'],['Temporizadores','2 programables'],['Potencia','9 HP'],['Alimentación','380V trifásica'],['Dimensiones','76 × 160 × 126 cm'],['Peso','500 kg']],
    stock: 1,
  },
  {
    sku: 'VSD-260D', category: 'amasadoras', img: 'BH-130',
    name: 'Amasadora Rápida 100 kg', cap: '100 kg harina',
    desc: 'Amasadora rápida para 100 kg de harina. La solución industrial de máxima capacidad. Doble motor con retroceso, 380V trifásica. Bajo pedido.',
    specs: [['Harina máx.','100 kg'],['Velocidades','2 velocidades con retroceso'],['Motores','2 con retroceso'],['Alimentación','380V / 50Hz trifásica'],['Potencia','12 HP'],['Dimensiones','850 × 1330 × 1530 mm'],['Peso','740 kg']],
    stock: 0, order: true,
  },

  // ── HORNOS ─────────────────────────────────────────────────────────────────
  {
    sku: 'EB-4A', category: 'hornos', img: 'EB-4A',
    name: 'Horno Convector Eléctrico 4 Bandejas', cap: '4 band. 440 × 320 mm',
    desc: 'Horno convector eléctrico de 4 bandejas de gastronomía. Circulación de aire forzada para cocción pareja. Ideal para panaderías, rotiserías y cafeterías.',
    specs: [['Bandejas','4 de 440 × 320 mm'],['Tipo','Convector'],['Potencia','2,6 KW'],['Alimentación','220V / 50Hz monofásico'],['Dimensiones','595 × 530 × 570 mm'],['Peso','25 kg']],
    stock: 6,
  },
  {
    sku: 'EB-8A', category: 'hornos', img: 'EB-8A',
    name: 'Horno Convector Eléctrico 8 Bandejas', cap: '8 band. 60 × 40 cm',
    desc: 'Horno convector eléctrico de 8 bandejas. Mayor capacidad para producción continua. Circulación de aire uniforme y control de temperatura preciso.',
    specs: [['Bandejas','8 de 60 × 40 cm'],['Potencia','6,4 KW'],['Alimentación','220V monofásico'],['Dimensiones','830 × 770 × 570 mm'],['Peso','40 kg']],
    stock: 4,
  },
  {
    sku: 'DSL-2B', category: 'hornos', img: 'DSL-2B',
    name: 'Horno de Piso Refractario 1 Piso', cap: '1 piso · 2 bandejas',
    desc: 'Horno de piso refractario eléctrico de 1 cámara con 2 bandejas de 60 × 40 cm. Temperatura regulable de 50 a 400°C. Ideal para pizzería y panadería artesanal.',
    specs: [['Pisos / bandejas','1 piso · 2 bandejas 60×40 cm'],['Temperatura','50–400°C'],['Potencia','6 KW'],['Alimentación','380V trifásica'],['Dimensiones','1220 × 795 × 540 mm'],['Peso','70 kg']],
    stock: 4,
  },
  {
    sku: 'DSL-4B', category: 'hornos', img: 'DSL-4B',
    name: 'Horno de Piso Refractario 2 Pisos', cap: '2 pisos · 4 bandejas',
    desc: 'Horno de piso refractario de 2 cámaras independientes con 4 bandejas. Cada piso se controla por separado. 13 KW de potencia para producción continua.',
    specs: [['Pisos / bandejas','2 pisos · 4 bandejas 60×40 cm'],['Temperatura','50–400°C'],['Potencia','13 KW'],['Alimentación','380V trifásica'],['Dimensiones','1220 × 795 × 1280 mm'],['Peso','109 kg']],
    stock: 2,
  },
  {
    sku: 'DSL-6B', category: 'hornos', img: 'DSL-6B',
    name: 'Horno de Piso Refractario 3 Pisos', cap: '3 pisos · 6 bandejas',
    desc: 'Horno de piso refractario de 3 cámaras independientes. Máxima producción en mínima superficie. Cada cámara con control independiente de temperatura.',
    specs: [['Pisos / bandejas','3 pisos · 6 bandejas 60×40 cm'],['Temperatura','50–400°C'],['Potencia','19,8 KW'],['Alimentación','380V trifásica'],['Dimensiones','1220 × 795 × 1460 mm'],['Peso','226 kg']],
    stock: 0, order: true,
  },
  {
    sku: 'HL-R5D', category: 'hornos', img: 'HL-R5D',
    name: 'Horno Rotativo Eléctrico 5 Bandejas', cap: '5 band. rotativo',
    desc: 'Horno rotativo eléctrico con carro giratorio. Cocción 100% uniforme para facturas, pan francés y pastelería. Bajo pedido, plazo de entrega 30 días.',
    specs: [['Capacidad','5 bandejas 40×60 cm'],['Potencia','9 KW'],['Alimentación','380V trifásica'],['Dimensiones','880 × 1270 × 1850 mm'],['Peso','330 kg']],
    stock: 0, order: true,
  },
  {
    sku: 'HL-R10D', category: 'hornos', img: 'HL-R10D',
    name: 'Horno Rotativo Eléctrico 10 Bandejas', cap: '10 band. rotativo',
    desc: 'Horno rotativo industrial de 10 bandejas. Doble capacidad para panaderías y fábricas que necesitan máxima producción horaria. Bajo pedido.',
    specs: [['Capacidad','10 bandejas 40×60 cm'],['Potencia','19 KW'],['Alimentación','380V trifásica'],['Dimensiones','880 × 1270 × 1850 mm'],['Peso','330 kg']],
    stock: 0, order: true,
  },

  // ── CÁMARAS DE FERMENTACIÓN ────────────────────────────────────────────────
  {
    sku: 'YH-6', category: 'camaras', img: 'YH-6',
    name: 'Cámara de Fermentación 6 Bandejas', cap: '6 bandejas',
    desc: 'Cámara de fermentación controlada con humedad automática. Formato compacto para 6 bandejas de 60 × 40 cm. Ideal para panaderías pequeñas.',
    specs: [['Bandejas','6 de 60 × 40 cm'],['Potencia','2,0 KW'],['Alimentación','220V monofásica'],['Humedad','Carga de agua manual'],['Control','Electromecánico'],['Dimensiones','485 × 695 × 1030 mm']],
    stock: 7,
  },
  {
    sku: 'YH-16', category: 'camaras', img: 'YH-16',
    name: 'Cámara de Fermentación 16 Bandejas', cap: '16 bandejas',
    desc: 'Cámara de fermentación para 16 bandejas. Control automático de temperatura y humedad para resultados consistentes en producción diaria.',
    specs: [['Bandejas','16 de 60 × 40 cm'],['Potencia','2,0 KW'],['Alimentación','220V monofásica'],['Humedad','Automática'],['Control','Electromecánico'],['Dimensiones','485 × 695 × 1900 mm']],
    stock: 5,
  },
  {
    sku: 'YH-32', category: 'camaras', img: 'YH-32',
    name: 'Cámara de Fermentación 32 Bandejas', cap: '32 bandejas',
    desc: 'Cámara de fermentación de alta capacidad con 32 bandejas y humidificación automática. Para panaderías con producción intensiva.',
    specs: [['Bandejas','32 de 60 × 40 cm'],['Potencia','2,0 KW'],['Alimentación','220V monofásica'],['Humedad','Automática'],['Control','Electromecánico'],['Dimensiones','485 × 980 × 1900 mm']],
    stock: 3,
  },

  // ── SOBADORAS ──────────────────────────────────────────────────────────────
  {
    sku: 'DV-MB', category: 'sobadoras',
    name: 'Sobadora de Mesa', cap: 'Motor 3/4 o 1 HP',
    desc: 'Sobadora de mesa con motor de 3/4 o 1 HP. Compacta para talleres y panaderías artesanales. Fácil de instalar y operar.',
    specs: [['Motor','3/4 HP o 1 HP'],['Dimensiones','50 × 67 × 78 cm']],
    stock: 5,
  },
  {
    sku: 'DV-R', category: 'sobadoras',
    name: 'Sobadora de Mesa 400 mm', cap: '400 mm · 0,9 HP',
    desc: 'Sobadora de mesa con cilindros de 400 mm y motor de 0,9 HP monofásico. Diseño robusto para panaderías de mediana escala.',
    specs: [['Cilindros','400 mm'],['Potencia','0,9 HP'],['Alimentación','220V monofásica']],
    stock: 4,
  },
  {
    sku: 'SB-3HP', category: 'sobadoras',
    name: 'Sobadora Pastelera 3 HP', cap: '3 HP · 600 mm',
    desc: 'Sobadora pastelera con cilindros de 600 mm y motor de 3 HP trifásico. Para pastelerías y panaderías con producción sostenida de masas laminadas.',
    specs: [['Cilindros','600 mm'],['Potencia','3 HP'],['Alimentación','380V trifásica']],
    stock: 3,
  },
  {
    sku: 'SB-4HP', category: 'sobadoras',
    name: 'Sobadora Pesada 4 HP', cap: '4 HP · 600 mm',
    desc: 'Sobadora pesada con cilindros de 600 mm y motor de 4 HP trifásico. Estructura reforzada para trabajo intensivo con masas duras.',
    specs: [['Cilindros','600 mm'],['Potencia','4 HP'],['Alimentación','380V trifásica']],
    stock: 2,
  },
  {
    sku: 'SB-5.5HP', category: 'sobadoras',
    name: 'Sobadora Pesada Reforzada 5,5 HP', cap: '5,5 HP · 600 mm',
    desc: 'Sobadora pesada reforzada con motor de 5,5 HP trifásico. Cilindros de 600 mm para el trabajo más exigente en panaderías industriales.',
    specs: [['Cilindros','600 mm'],['Potencia','5,5 HP'],['Alimentación','380V trifásica']],
    stock: 2,
  },
  {
    sku: 'SB-5.5HP-DT', category: 'sobadoras',
    name: 'Sobadora Pesada Doble Transmisión', cap: '5,5 HP · doble transmisión',
    desc: 'Sobadora pesada reforzada con doble transmisión y cilindros de acero inoxidable. 5,5 HP trifásico. Máxima durabilidad y rendimiento.',
    specs: [['Cilindros','600 mm · acero inox'],['Transmisión','Doble'],['Potencia','5,5 HP'],['Alimentación','380V trifásica']],
    stock: 1,
  },
  {
    sku: 'SB-5.5HP-IX', category: 'sobadoras',
    name: 'Sobadora Pesada Acero Inox', cap: '5,5 HP · inox',
    desc: 'Sobadora pesada reforzada con cilindros de acero inoxidable de 600 mm. Ideal para elaboración de productos para celíacos y panificados especiales.',
    specs: [['Cilindros','600 mm · acero inox'],['Potencia','5,5 HP'],['Alimentación','380V trifásica']],
    stock: 1,
  },

  // ── TRINCHADORAS ───────────────────────────────────────────────────────────
  {
    sku: 'TRINCH-CE', category: 'trinchadoras', img: 'TRINCH-CE',
    name: 'Trinchadora Compacta con Embrague', cap: '30–350 g por pieza',
    desc: 'Trinchadora compacta con sistema de embrague exclusivo. Regulación de 3 a 7 vueltas. Corta, arma y trincha panes de 30 a 350 g. Diseño argentino de alta precisión.',
    specs: [['Producción harina','9 bolsas/hora'],['Producción pan','650 kg/hora'],['Regulación','3 a 7 vueltas'],['Rango de piezas','30 – 350 g'],['Conformadores','3 intercambiables de aluminio fundido'],['Sistema','Embrague exclusivo'],['Motor','2 HP'],['Tensión','220V (TCDM) o 380V (TCDT)'],['Dimensiones','1400 × 670 × 1950 mm'],['Peso','290 kg']],
    stock: 2,
  },
  {
    sku: 'TRINCH-JR', category: 'trinchadoras', img: 'TRINCH-JR',
    name: 'Trinchadora JR', cap: '3 conformadores',
    desc: 'Trinchadora JR con 3 conformadores de aluminio fundido intercambiables. Sistema de armado por filtros giratorios, 3 a 4 vueltas y rodamientos blindados para larga vida útil.',
    specs: [['Producción harina','5 bolsas/hora'],['Producción pan','350 kg/hora'],['Rango de piezas','30 – 350 g'],['Conformadores','3 de aluminio fundido intercambiables'],['Sistema','Filtros giratorios'],['Vueltas','3 a 4'],['Rodamientos','Blindados'],['Motor','1 HP'],['Tensión','220V (TJRM) o 380V (TJRT)'],['Dimensiones','570 × 1330 × 1140 mm'],['Peso','115 kg']],
    stock: 2,
  },

  // ── REBANADORAS ─────────────────────────────────────────────────────────
  {
    sku: 'BSA-31', category: 'rebanadoras', img: 'BSA-31',
    name: 'Rebanadora de Mesa', cap: '30 rebanadas/corte',
    desc: 'Rebanadora de pan de mesa con cuchillas inoxidables. Hasta 30 rebanadas por corte, espesor de 12 mm, ancho máximo 360 mm. Fabricación robusta para producción diaria.',
    specs: [['Rebanadas','30 por corte'],['Espesor','12 mm'],['Ancho máx.','360 mm'],['Cuchillas','Acero inoxidable'],['Potencia','0,5 HP'],['Alimentación','220V / 50Hz'],['Dimensiones','680 × 750 × 750 mm'],['Peso','55 kg']],
    stock: 6,
  },
  // ── LAMINADORAS ─────────────────────────────────────────────────────────
  {
    sku: 'DBQ-520B', category: 'laminadoras', img: 'DBQ-520B',
    name: 'Laminadora Vaivén de Mesa 520 mm', cap: '520 mm · 5 kg',
    desc: 'Laminadora de vaivén para masa, versión de mesa. Rolo de 520 mm, apertura regulable de 0,5 a 38 mm y micro de seguridad. Para medialunas, facturas y masas laminadas.',
    specs: [['Rolo','520 mm'],['Capacidad','5 kg de masa'],['Apertura','0,5 – 38 mm'],['Seguridad','Micro de seguridad'],['Potencia','0,75 HP'],['Alimentación','220V'],['Dimensiones en uso','940 × 2160 mm'],['Peso','159 kg']],
    stock: 2,
  },
  {
    sku: 'BDQ-650E', category: 'laminadoras', img: 'BDQ-650E',
    name: 'Laminadora Vaivén de Pie 650 mm', cap: '650 mm · 6,5 kg',
    desc: 'Laminadora de pie de mayor porte para producción continua. Rolo de 650 mm, 1 HP. Para panaderías y pastelerías de alto volumen.',
    specs: [['Rolo','650 mm'],['Capacidad','6,5 kg de masa'],['Apertura','0,5 – 38 mm'],['Seguridad','Micro de seguridad'],['Potencia','1 HP'],['Alimentación','220V / 50Hz'],['Dimensiones en uso','1050 × 2900 mm'],['Peso','235 kg']],
    stock: 1,
  },
  // ── DIVISORAS ───────────────────────────────────────────────────────────
  {
    sku: 'BDK-30S', category: 'divisoras', img: 'BDK-30S',
    name: 'Divisora Boleadora Semi-Automática', cap: '30 piezas/ciclo',
    desc: 'Divisora boleadora semiautomática. Divide y bolea 30 piezas por ciclo de 40 a 120 g. Cuchillas inoxidables y boleado motorizado.',
    specs: [['Piezas por ciclo','30'],['Peso por pieza','40 – 120 g'],['Cuchillas','Acero inoxidable'],['Boleado','Motorizado'],['Potencia','1 HP'],['Alimentación','380V trifásica o 220V monofásica'],['Dimensiones','600 × 770 × 2100 mm'],['Peso','330 kg']],
    stock: 2,
  },
];

const BRAND = {
  name: 'Don Valerio',
  full: 'Don Valerio Equipamientos',
  tagline: 'Equipamiento profesional para panadería y gastronomía',
  address: 'Venezuela 1215 bis, Rosario — Santa Fe',
  phone: '+54 9 341 665-0190',
};

const FICHAS = ['B7-A','B15-V','B20-V','B30-V','B40-V','B60-V','BH-130','BHS-10-A','BHS-10-D','BHS-20-A','BHS-20-B','BHS-30-A','BHS-30-B','BHS-40-A','BHS-40-B','BHS-60-A','BHS-60-B','BHS-60-C','BSA-31','BDK-30S','DSL-2B','DSL-4B','DSL-6B','EB-4A','EB-8A','HL-R5D','HL-R10D','DBQ-520B','BDQ-650E','TRINCH-JR','TRINCH-CE','VSD-260D','YH-6','YH-16','YH-32'];


export { CATEGORIES, PRODUCTS, BRAND, FICHAS };
