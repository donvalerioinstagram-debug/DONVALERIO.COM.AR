// ========= Data - Don Valerio Equipamientos — Junio 2026 =========

const fmt = (n) => n.toLocaleString('es-AR', { maximumFractionDigits: 0 });

const CATEGORIES = [
  { id: 'batidoras', slug: 'batidoras-planetarias',    n: '01', label: 'Batidoras Planetarias',   desc: 'Desde 7 hasta 60 litros' },
  { id: 'amasadoras', slug: 'amasadoras-espiral',   n: '02', label: 'Amasadoras a Espiral',    desc: 'De 4 a 100 kg de harina' },
  { id: 'hornos', slug: 'hornos',       n: '03', label: 'Hornos',                  desc: 'Convectores, piso y rotativos' },
  { id: 'camaras', slug: 'camaras-de-fermentacion',      n: '04', label: 'Cámaras de Fermentación', desc: 'De 6, 16 y 32 bandejas' },
  { id: 'sobadoras', slug: 'sobadoras',    n: '05', label: 'Sobadoras',               desc: 'De mesa y profesionales' },
  { id: 'trinchadoras', slug: 'trinchadoras', n: '06', label: 'Trinchadoras',            desc: 'Compacta y JR' },
  { id: 'rebanadoras', slug: 'rebanadoras',  n: '07', label: 'Rebanadoras',             desc: 'De mesa' },
  { id: 'laminadoras', slug: 'laminadoras',  n: '08', label: 'Laminadoras',             desc: 'De mesa y de pie' },
  { id: 'divisoras', slug: 'divisoras',    n: '09', label: 'Divisoras',               desc: 'Boleadoras semi-automáticas' },
];

const PRODUCTS = [

  // ── BATIDORAS ──────────────────────────────────────────────────────────────
  {
    sku: 'B7-A', slug: 'batidora-planetaria-7-lt-b7-a', category: 'batidoras', img: 'B7-A',
    name: 'Batidora Planetaria 7 Lt', cap: '7 lt · 700 g',
    desc: 'Batidora planetaria de mesa con variador de velocidad continuo. Ideal para pastelería de pequeño porte, panaderías artesanales y uso semiprofesional.',
    specs: [['Capacidad tacho','7 litros'],['Cap. amasado','700 gr'],['Velocidad','Variador 80–680 RPM'],['Potencia','0,5 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','39 × 24 × 43 cm'],['Peso','20 kg']],
    stock: 6,
  },
  {
    sku: 'B15-V', slug: 'batidora-planetaria-15-lt-b15-v', category: 'batidoras', img: 'B15-V',
    name: 'Batidora Planetaria 15 Lt', cap: '15 lt · 1,5 kg',
    desc: 'Batidora planetaria de 15 litros con 3 velocidades fijas. Eje robusto y recipiente de acero inoxidable. La más elegida para pastelerías y cafeterías en crecimiento.',
    specs: [['Capacidad tacho','15 litros'],['Cap. amasado','1,5 kg'],['Velocidades','3: 65 / 102 / 296 RPM'],['Potencia','1 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','52 × 63 × 58 cm'],['Peso','50 kg']],
    stock: 4,
  },
  {
    sku: 'B20-V', slug: 'batidora-planetaria-20-lt-b20-v', category: 'batidoras', img: 'B20-V',
    name: 'Batidora Planetaria 20 Lt', cap: '20 lt · 3 kg',
    desc: 'Batidora planetaria robusta de 20 litros y 3 velocidades. La opción más vendida para pastelerías medianas con producción diaria sostenida.',
    specs: [['Capacidad tacho','20 litros'],['Cap. amasado','3 kg'],['Velocidades','3: 90 / 160 / 300 RPM'],['Potencia','1,5 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','55 × 68 × 65 cm'],['Peso','60 kg']],
    stock: 7,
  },
  {
    sku: 'B30-V', slug: 'batidora-planetaria-30-lt-b30-v', category: 'batidoras', img: 'B20-V',
    name: 'Batidora Planetaria 30 Lt', cap: '30 lt · 4 kg',
    desc: 'Batidora planetaria de 30 litros con 3 velocidades. Motor de 2 HP disponible en versión monofásica o trifásica. Para panaderías y pastelerías de mayor producción.',
    specs: [['Capacidad tacho','30 litros'],['Cap. amasado','4 kg'],['Velocidades','3: 110 / 200 / 420 RPM'],['Potencia','2 HP'],['Alimentación','380V trifásica o 220V monofásica'],['Dimensiones','60 × 70 × 68 cm'],['Peso','68 kg']],
    stock: 3,
  },
  {
    sku: 'B40-V', slug: 'batidora-planetaria-40-lt-b40-v', category: 'batidoras', img: 'B20-V',
    name: 'Batidora Planetaria 40 Lt', cap: '40 lt · 6 kg',
    desc: 'Batidora planetaria profesional de alta producción. 40 litros y motor de 3 HP trifásico para masas pesadas y trabajo continuo en panaderías industriales.',
    specs: [['Capacidad tacho','40 litros'],['Cap. amasado','6 kg'],['Velocidades','3 velocidades'],['Potencia','3 HP'],['Alimentación','380V trifásica'],['Dimensiones','65 × 73 × 106 cm'],['Peso','180 kg']],
    stock: 2,
  },
  {
    sku: 'B60-V', slug: 'batidora-planetaria-60-lt-b60-v', category: 'batidoras', img: 'B60-V',
    name: 'Batidora Planetaria 60 Lt', cap: '60 lt · 8 kg',
    desc: 'Batidora planetaria industrial con carro extractor de tacho. Motor de 4 HP trifásico para producciones intensivas. La solución definitiva para fábricas de pastelería.',
    specs: [['Capacidad tacho','60 litros'],['Cap. amasado','8 kg'],['Velocidades','3 velocidades'],['Potencia','4 HP'],['Alimentación','380V trifásica'],['Elevación','Manual del bowl'],['Extractor','Carro para tacho'],['Dimensiones','740 × 570 × 2100 mm'],['Peso','220 kg']],
    stock: 1,
  },

  // ── AMASADORAS ─────────────────────────────────────────────────────────────
  {
    sku: 'BHS-10-A', slug: 'amasadora-espiral-variador-4-kg-bhs-10-a', category: 'amasadoras', img: 'BHS-10-A',
    name: 'Amasadora Espiral Variador 4 kg', cap: '4 kg harina',
    desc: 'Amasadora a espiral con variador de velocidad continuo. Ideal para panaderías pequeñas, café con productos artesanales y emprendimientos gastronómicos.',
    specs: [['Harina máx.','4 kg'],['Velocidad','Variador continuo'],['Potencia','0,75 KW'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','33 × 40 × 56 cm'],['Peso','30 kg']],
    stock: 8,
  },
  {
    sku: 'BHS-10-D', slug: 'amasadora-espiral-variador-digital-4-kg-bhs-10-d', category: 'amasadoras', img: 'BHS-10-D',
    name: 'Amasadora Espiral Variador + Digital 4 kg', cap: '4 kg harina',
    desc: 'Amasadora a espiral con variador de velocidad y tablero digital programable. Mayor precisión en cada ciclo de amasado.',
    specs: [['Harina máx.','4 kg'],['Control','Variador + panel digital'],['Potencia','0,75 KW'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','33 × 40 × 56 cm'],['Peso','30 kg']],
    stock: 5,
  },
  {
    sku: 'BHS-20-A', slug: 'amasadora-rapida-8-kg-bhs-20-a', category: 'amasadoras', img: 'BHS-20-A',
    name: 'Amasadora Rápida 8 kg', cap: '8 kg harina',
    desc: 'Amasadora rápida a espiral de 8 kg. 2 velocidades con timer. Panel electromecánico robusto para producción diaria en panaderías medianas.',
    specs: [['Harina máx.','8 kg'],['Velocidades','2 velocidades, reversa y 2 temporizadores'],['Potencia','1,5 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','53 × 55 × 90 cm'],['Peso','42 kg']],
    stock: 9,
  },
  {
    sku: 'BHS-20-B', slug: 'amasadora-rapida-8-kg-digital-bhs-20-b', category: 'amasadoras', img: 'BHS-20-B',
    name: 'Amasadora Rápida 8 kg Digital', cap: '8 kg harina',
    desc: 'Amasadora rápida a espiral con 2 velocidades, timer y tablero digital. Ideal para panaderías que buscan mayor control sobre tiempos de amasado.',
    specs: [['Harina máx.','8 kg'],['Velocidades','2 velocidades, reversa y temporizador digital'],['Control','Tablero digital'],['Potencia','1,5 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','53 × 55 × 90 cm'],['Peso','42 kg']],
    stock: 6,
  },
  {
    sku: 'BHS-30-A', slug: 'amasadora-rapida-12-kg-bhs-30-a', category: 'amasadoras', img: 'BHS-20-A',
    name: 'Amasadora Rápida 12 kg', cap: '12 kg harina',
    desc: 'Amasadora rápida a espiral de 12 kg. Panel electromecánico con 2 velocidades y 2 timers. El caballo de batalla de las panaderías en crecimiento.',
    specs: [['Harina máx.','12 kg'],['Velocidades','2 velocidades, reversa y 2 temporizadores'],['Potencia','2 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','56 × 58 × 93 cm'],['Peso','50 kg']],
    stock: 4,
  },
  {
    sku: 'BHS-30-B', slug: 'amasadora-rapida-12-kg-digital-bhs-30-b', category: 'amasadoras', img: 'BHS-20-B',
    name: 'Amasadora Rápida 12 kg Digital', cap: '12 kg harina',
    desc: 'Amasadora rápida a espiral de 12 kg con tablero digital. 2 velocidades y timer programable para masas de alta hidratación. La más solicitada de la línea.',
    specs: [['Harina máx.','12 kg'],['Velocidades','2 velocidades, reversa y temporizador digital'],['Control','Tablero digital'],['Potencia','2 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','56 × 58 × 93 cm'],['Peso','50 kg']],
    stock: 3,
  },
  {
    sku: 'BHS-40-A', slug: 'amasadora-rapida-16-kg-bhs-40-a', category: 'amasadoras', img: 'BHS-20-A',
    name: 'Amasadora Rápida 16 kg', cap: '16 kg harina',
    desc: 'Amasadora rápida a espiral de 16 kg. 2 velocidades y 2 timers. Panel electromecánico robusto para producción intensiva diaria.',
    specs: [['Harina máx.','16 kg'],['Velocidades','2 velocidades, reversa y 2 temporizadores'],['Potencia','2 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','62 × 68 × 98 cm'],['Peso','52 kg']],
    stock: 5,
  },
  {
    sku: 'BHS-40-B', slug: 'amasadora-rapida-16-kg-digital-bhs-40-b', category: 'amasadoras', img: 'BHS-20-B',
    name: 'Amasadora Rápida 16 kg Digital', cap: '16 kg harina',
    desc: 'Amasadora rápida a espiral de 16 kg con tablero digital. La opción preferida por panaderías modernas que buscan automatizar su proceso.',
    specs: [['Harina máx.','16 kg'],['Velocidades','2 velocidades, reversa y temporizador digital'],['Control','Tablero digital'],['Potencia','2 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','62 × 68 × 98 cm'],['Peso','52 kg']],
    stock: 4,
  },
  {
    sku: 'BHS-60-A', slug: 'amasadora-rapida-25-kg-trifasica-bhs-60-a', category: 'amasadoras', img: 'BHS-60-A',
    name: 'Amasadora Rápida 25 kg Trifásica', cap: '25 kg harina',
    desc: 'Amasadora rápida a espiral de 25 kg, trifásica. 2 velocidades con reversa y 2 temporizadores. Para panaderías industriales de alta producción.',
    specs: [['Harina máx.','25 kg'],['Velocidades','2 velocidades con reversa'],['Temporizadores','2 programables'],['Potencia','2,0/3,4 HP'],['Alimentación','380V trifásica'],['Dimensiones','88 × 55 × 95 cm'],['Peso','200 kg']],
    stock: 2,
  },
  {
    sku: 'BHS-60-B', slug: 'amasadora-rapida-25-kg-digital-trifasica-bhs-60-b', category: 'amasadoras', img: 'BHS-60-B',
    name: 'Amasadora Rápida 25 kg Digital Trifásica', cap: '25 kg harina',
    desc: 'Amasadora rápida a espiral de 25 kg con panel digital, trifásica. Mayor control y automatización para producción intensiva.',
    specs: [['Harina máx.','25 kg'],['Velocidades','2 velocidades con reversa'],['Control','Panel digital'],['Potencia','2,0/3,4 HP'],['Alimentación','380V trifásica'],['Dimensiones','88 × 55 × 95 cm'],['Peso','200 kg']],
    stock: 2,
  },
  {
    sku: 'BHS-60-C', slug: 'amasadora-rapida-25-kg-monofasica-bhs-60-c', category: 'amasadoras', img: 'BHS-60-A',
    name: 'Amasadora Rápida 25 kg Monofásica', cap: '25 kg harina',
    desc: 'Amasadora rápida a espiral de 25 kg en versión monofásica 220V. Para instalaciones que no cuentan con corriente trifásica.',
    specs: [['Harina máx.','25 kg'],['Velocidades','2 velocidades con reversa'],['Temporizadores','2 programables'],['Potencia','2,0/3,4 HP'],['Alimentación','220V monofásica'],['Dimensiones','90 × 58 × 98 cm'],['Peso','210 kg']],
    stock: 1,
  },
  {
    sku: 'BH-130', slug: 'amasadora-rapida-50-kg-bh-130', category: 'amasadoras', img: 'BH-130',
    name: 'Amasadora Rápida 50 kg', cap: '50 kg harina',
    desc: 'Amasadora rápida industrial para 50 kg de harina. Doble motor con retroceso, 2 timers, 9 HP trifásicos. Para fábricas de pan y grandes panaderías.',
    specs: [['Harina máx.','50 kg'],['Velocidades','2 velocidades'],['Motores','2 con retroceso'],['Temporizadores','2 programables'],['Potencia','9 HP'],['Alimentación','380V trifásica'],['Dimensiones','76 × 160 × 126 cm'],['Peso','500 kg']],
    stock: 1,
  },
  {
    sku: 'VSD-260D', slug: 'amasadora-rapida-100-kg-vsd-260d', category: 'amasadoras', img: 'BH-130',
    name: 'Amasadora Rápida 100 kg', cap: '100 kg harina',
    desc: 'Amasadora rápida para 100 kg de harina. La solución industrial de máxima capacidad. Doble motor con retroceso, 380V trifásica. Bajo pedido.',
    specs: [['Harina máx.','100 kg'],['Velocidades','2 velocidades con retroceso'],['Motores','2 con retroceso'],['Alimentación','380V / 50Hz trifásica'],['Potencia','12 HP'],['Dimensiones','850 × 1330 × 1530 mm'],['Peso','740 kg']],
    stock: 0, order: true,
  },

  // ── HORNOS ─────────────────────────────────────────────────────────────────
  {
    sku: 'EB-4A', slug: 'horno-convector-eb-4a', category: 'hornos', img: 'EB-4A',
    name: 'Horno Convector EB-4A', cap: '4 band. 440 × 320 mm',
    desc: 'Horno Convector EB-4A: combina potencia, precisión y practicidad en un formato compacto, ideal para producciones pequeñas y medianas. Su sistema de convección garantiza una cocción uniforme, mientras que la inyección de vapor y el control independiente del calentamiento superior permiten obtener excelentes resultados en todo tipo de preparaciones. Solución confiable y versátil para panaderías, confiterías, gastronomía y emprendimientos.',
    specs: [['Capacidad / Bandejas','4 de 440 × 320 mm (incluidas)'],['Tipo de horno','Convector (circulación de aire caliente)'],['Función spray','Sí, inyección de vapor'],['Potencia','2,6 KW'],['Alimentación','220V / 50Hz monofásico'],['Medidas exteriores','595 × 530 × 570 mm'],['Medidas interiores','440 × 320 × 350 mm'],['Peso','25 kg'],['Temperatura','50 a 300 °C'],['Temporizador','0 a 120 minutos']],
    stock: 6,
  },
  {
    sku: 'EB-8A', slug: 'horno-convector-eb-8a', category: 'hornos', img: 'EB-8A',
    name: 'Horno Convector EB-8A', cap: '5 band. 600 × 400 mm',
    desc: 'Horno convector EB-8A: solución práctica, versátil y eficiente para panaderías, pastelerías, gastronomía y emprendimientos. Su sistema de convección con circulación de aire caliente brinda una cocción uniforme, mientras que la función spray y el calentamiento superior independiente aportan mayor control en cada preparación. Su capacidad para 5 bandejas de 600 × 400 mm, junto con su rango de 50 a 300 °C y temporizador de hasta 120 minutos, lo convierten en una excelente opción para producciones diarias.',
    specs: [['Capacidad / Bandejas','5 de 600 × 400 mm'],['Tipo de horno','Convector (circulación de aire caliente)'],['Función spray','Sí, inyección de vapor'],['Potencia','3 + 5 kW'],['Alimentación','220V / 50Hz monofásico'],['Medidas exteriores','835 × 775 × 575 mm'],['Medidas interiores','680 × 540 × 482 mm'],['Peso','40 kg'],['Temperatura','50 a 300 °C'],['Temporizador','0 a 120 minutos']],
    stock: 4,
  },
  {
    sku: 'DSL-2B', slug: 'horno-de-piso-refractario-1-piso-dsl-2b', category: 'hornos', img: 'DSL-2B',
    name: 'Horno de Piso Refractario 1 Piso', cap: '1 piso · 2 bandejas',
    desc: 'Horno de piso refractario eléctrico de 1 cámara con 2 bandejas de 60 × 40 cm. Temperatura regulable de 50 a 400°C. Ideal para pizzería y panadería artesanal.',
    specs: [['Pisos / bandejas','1 piso · 2 bandejas 60×40 cm'],['Temperatura','50–400°C'],['Potencia','6 KW'],['Alimentación','380V trifásica'],['Dimensiones exteriores','1220 × 795 × 540 mm'],['Cámara','860 × 650 × 220 mm'],['Peso','70 kg']],
    stock: 4,
  },
  {
    sku: 'DSL-4B', slug: 'horno-de-piso-refractario-2-pisos-dsl-4b', category: 'hornos', img: 'DSL-4B',
    name: 'Horno de Piso Refractario 2 Pisos', cap: '2 pisos · 4 bandejas',
    desc: 'Horno de piso refractario de 2 cámaras independientes con 4 bandejas. Cada piso se controla por separado. 13 KW de potencia para producción continua.',
    specs: [['Pisos / bandejas','2 pisos · 4 bandejas 60×40 cm'],['Temperatura','50–400°C'],['Potencia','13 KW'],['Alimentación','380V trifásica'],['Dimensiones exteriores','1220 × 795 × 1280 mm'],['Cámara','860 × 650 × 220 mm por piso'],['Peso','109 kg']],
    stock: 2,
  },
  {
    sku: 'DSL-6B', slug: 'horno-de-piso-refractario-3-pisos-dsl-6b', category: 'hornos', img: 'DSL-6B',
    name: 'Horno de Piso Refractario 3 Pisos', cap: '3 pisos · 6 bandejas',
    desc: 'Horno de piso refractario de 3 cámaras independientes. Máxima producción en mínima superficie. Cada cámara con control independiente de temperatura.',
    specs: [['Pisos / bandejas','3 pisos · 6 bandejas 60×40 cm'],['Temperatura','50–400°C'],['Potencia','19,8 KW'],['Alimentación','380V trifásica'],['Dimensiones exteriores','1220 × 795 × 1460 mm'],['Cámara','860 × 650 × 220 mm por piso'],['Peso','226 kg']],
    stock: 0, order: true,
  },
  {
    sku: 'HL-R5D', slug: 'horno-rotativo-electrico-5-bandejas-hl-r5d', category: 'hornos', img: 'HL-R5D',
    name: 'Horno Rotativo Eléctrico 5 Bandejas', cap: '5 band. rotativo',
    desc: 'Horno rotativo eléctrico con carro giratorio. Cocción 100% uniforme para facturas, pan francés y pastelería. Bajo pedido, plazo de entrega 30 días.',
    specs: [['Capacidad','5 bandejas 40×60 cm'],['Potencia','9 KW'],['Alimentación','380V trifásica'],['Dimensiones','880 × 1270 × 1850 mm'],['Peso','330 kg']],
    stock: 0, order: true,
  },
  {
    sku: 'HL-R10D', slug: 'horno-rotativo-electrico-10-bandejas-hl-r10d', category: 'hornos', img: 'HL-R10D',
    name: 'Horno Rotativo Eléctrico 10 Bandejas', cap: '10 band. rotativo',
    desc: 'Horno rotativo industrial de 10 bandejas. Doble capacidad para panaderías y fábricas que necesitan máxima producción horaria. Bajo pedido.',
    specs: [['Capacidad','10 bandejas 40×60 cm'],['Potencia','19 KW'],['Alimentación','380V trifásica'],['Dimensiones','880 × 1270 × 1950 mm'],['Peso','330 kg']],
    stock: 0, order: true,
  },

  // ── CÁMARAS DE FERMENTACIÓN ────────────────────────────────────────────────
  {
    sku: 'YH-6', slug: 'camara-de-fermentacion-6-bandejas-yh-6', category: 'camaras', img: 'YH-6',
    name: 'Cámara de Fermentación 6 Bandejas', cap: '6 bandejas',
    desc: 'Cámara de fermentación controlada con humedad automática. Formato compacto para 6 bandejas de 60 × 40 cm. Ideal para panaderías pequeñas.',
    specs: [['Bandejas','6 de 60 × 40 cm'],['Potencia','2,0 KW'],['Alimentación','220V monofásica'],['Humedad','Carga de agua automática'],['Control','Electromecánico'],['Dimensiones','485 × 695 × 1030 mm']],
    stock: 7,
  },
  {
    sku: 'YH-16', slug: 'camara-de-fermentacion-16-bandejas-yh-16', category: 'camaras', img: 'YH-16',
    name: 'Cámara de Fermentación 16 Bandejas', cap: '16 bandejas',
    desc: 'Cámara de fermentación para 16 bandejas. Control automático de temperatura y humedad para resultados consistentes en producción diaria.',
    specs: [['Bandejas','16 de 60 × 40 cm'],['Potencia','2,0 KW'],['Alimentación','220V monofásica'],['Humedad','Carga de agua automática'],['Control','Electromecánico'],['Dimensiones','485 × 695 × 1900 mm']],
    stock: 5,
  },
  {
    sku: 'YH-32', slug: 'camara-de-fermentacion-32-bandejas-yh-32', category: 'camaras', img: 'YH-32',
    name: 'Cámara de Fermentación 32 Bandejas', cap: '32 bandejas',
    desc: 'Cámara de fermentación de alta capacidad con 32 bandejas y humidificación automática. Para panaderías con producción intensiva.',
    specs: [['Bandejas','32 de 60 × 40 cm'],['Potencia','2,0 KW'],['Alimentación','220V monofásica'],['Humedad','Carga de agua automática'],['Control','Electromecánico'],['Dimensiones','485 × 980 × 1900 mm']],
    stock: 3,
  },

  // ── SOBADORAS ──────────────────────────────────────────────────────────────
  {
    sku: 'DV-MB', slug: 'sobadora-de-mesa-dv-mb', category: 'sobadoras', img: 'DV-MB',
    name: 'Sobadora de Mesa DV-MB', cap: 'Rolo 35 cm · 3/4 HP',
    desc: 'Sobadora de mesa en acero inoxidable, compacta y robusta para panaderías, pastelerías, fábricas de pastas, gastronomía y emprendimientos que requieren laminado uniforme y constante. Funcionamiento silencioso con transmisión a engranajes, práctica y fácil de usar para el trabajo diario.',
    specs: [['Ancho de rolo','35 cm'],['Apertura de rolo','0 a 1,4 cm'],['Potencia','3/4 HP'],['Alimentación','220V / 50Hz'],['Transmisión','A engranajes'],['Peso','30 kg'],['Dimensiones','50 × 67 × 78 cm']],
    stock: 5,
  },
  {
    sku: 'DV-R', slug: 'sobadora-de-mesa-dv-r', category: 'sobadoras', img: 'DV-R',
    name: 'Sobadora de Mesa DV-R', cap: 'Rodillos 400 mm · 1/3 HP',
    desc: 'Sobadora de mesa construida íntegramente en acero inoxidable brillante, ideal para producciones artesanales y profesionales. Trabaja con 15 espesores diferentes; sus rodillos lisos de 400 mm con revestimiento antiadherente ABS y terminación rectificada garantizan un estirado uniforme y excelente deslizamiento. Calibración por leva excéntrica, transmisión por engranajes y correas.',
    specs: [['Ancho de rodillos','400 mm'],['Apertura de rodillos','1 a 8 mm'],['Potencia','1/3 HP'],['Alimentación','220V / 50Hz'],['Transmisión','Engranajes y correas'],['Peso','21 kg aprox.'],['Dimensiones','52 × 37 × 35 cm']],
    stock: 4,
  },
  {
    sku: 'SB-3HP', slug: 'sobadora-pesada-3-hp', category: 'sobadoras', img: 'SB-3HP',
    name: 'Sobadora Pesada 3 HP', cap: 'Cilindros 600 × 140 mm · 3 HP',
    desc: 'Sobadora pesada en acero inoxidable para panaderías, pastelerías y fábricas de pastas con trabajo continuo y estirado uniforme de masa. Cilindros de 600 mm de ancho y 140 mm de diámetro, tablas revestidas en acero inoxidable. Incorpora triple sistema de seguridad: parada de emergencia de cintura o rodilla, pulsador tipo golpe de puño y tercer rolo de seguridad.',
    specs: [['Cilindros','600 × 140 mm'],['Potencia','3 HP'],['Alimentación','380V / 50Hz'],['Motor opcional','220V / 50Hz'],['Tablas','Revestidas en acero inoxidable'],['Seguridad','Parada de emergencia y tercer rolo'],['Peso','275 kg'],['Dimensiones','1100 × 1140 × 1440 mm']],
    stock: 3,
  },
  {
    sku: 'SB-5.5HP', slug: 'sobadora-pesada-5-5-hp', category: 'sobadoras', img: 'SB-5.5HP',
    name: 'Sobadora Pesada 5,5 HP', cap: 'Cilindros 600 × 170 mm · 5,5 HP',
    desc: 'Sobadora pesada reforzada en acero inoxidable, diseñada para trabajos intensivos de sobado y laminado. Cilindros de gran porte de 600 mm de ancho y 170 mm de diámetro, transmisión mediante cadenas y piñones de 5/8" vinculados a eje con chaveta de 10 mm. Doble parada de emergencia y tercer rolo de protección de serie.',
    specs: [['Ancho de cilindros','600 mm'],['Diámetro de cilindros','170 mm'],['Potencia','5,5 HP'],['Alimentación','380V / 50Hz'],['Transmisión','Cadenas y piñones 5/8"'],['Tablas','Revestidas en acero inoxidable'],['Seguridad','Doble parada de emergencia y tercer rolo'],['Peso','450 kg'],['Dimensiones','1100 × 1145 × 1450 mm']],
    stock: 2,
  },
  {
    sku: 'SB-5.5HP-DT', slug: 'sobadora-pesada-doble-transmision-5-5-hp', category: 'sobadoras', img: 'SB-5.5HP-DT',
    name: 'Sobadora Pesada Doble Transmisión 5,5 HP', cap: 'Cilindros 600 × 170 mm · doble transmisión',
    desc: 'Sobadora pesada reforzada con doble transmisión, en acero inoxidable, para el trabajo más intensivo de sobado y laminado. Cilindros de 600 mm de ancho y 170 mm de diámetro, con transmisión mediante cadenas y piñones dobles de 5/8" vinculados a eje con chaveta de 10 mm para mayor durabilidad. Doble parada de emergencia y tercer rolo de protección de serie.',
    specs: [['Ancho de cilindros','600 mm'],['Diámetro de cilindros','170 mm'],['Potencia','5,5 HP'],['Alimentación','380V / 50Hz'],['Transmisión','Cadenas y piñones dobles 5/8"'],['Tablas','Revestidas en acero inoxidable'],['Seguridad','Doble parada de emergencia y tercer rolo'],['Peso','450 kg'],['Dimensiones','1100 × 1145 × 1450 mm']],
    stock: 1,
  },

  // ── TRINCHADORAS ───────────────────────────────────────────────────────────
  {
    sku: 'TRINCH-CE', slug: 'trinchadora-compacta-con-embrague-trinch-ce', category: 'trinchadoras', img: 'TRINCH-CE',
    name: 'Trinchadora Compacta con Embrague', cap: '30–350 g por pieza',
    desc: 'Trinchadora compacta con sistema de embrague exclusivo. Regulación de 3 a 7 vueltas. Corta, arma y trincha panes de 30 a 350 g. Diseño argentino de alta precisión.',
    specs: [['Producción harina','9 bolsas/hora'],['Producción pan','650 kg/hora'],['Regulación','3 a 7 vueltas'],['Rango de piezas','30 – 350 g'],['Conformadores','3 intercambiables de aluminio fundido'],['Sistema','Embrague exclusivo'],['Motor','2 HP'],['Tensión','220V (TCDM) o 380V (TCDT)'],['Dimensiones','1400 × 670 × 1950 mm'],['Peso','290 kg']],
    stock: 2,
  },
  {
    sku: 'TRINCH-JR', slug: 'trinchadora-jr-trinch-jr', category: 'trinchadoras', img: 'TRINCH-JR',
    name: 'Trinchadora JR', cap: 'Moldes 3-6-8 · 1 HP',
    desc: 'Trinchadora armadora TJRM / TJRT, solución versátil para líneas de panificación que requieren armado continuo y formatos variados. Permite trabajar piezas desde 100 g hasta 650 g, adaptándose a diferentes producciones con moldes intercambiables 3-6-8. Equipada con motor de 1 HP trifásico, ofrece una capacidad de producción de hasta 7 bolsas por hora.',
    specs: [['Producción de harina','7 bolsas/hora'],['Rango de armado','100 a 650 g'],['Moldes intercambiables','3 – 6 – 8'],['Motor','1 HP'],['Alimentación','Trifásico']],
    stock: 2,
  },

  // ── REBANADORAS ─────────────────────────────────────────────────────────
  {
    sku: 'BSA-31', slug: 'rebanadora-de-mesa-bsa-31', category: 'rebanadoras', img: 'BSA-31',
    name: 'Rebanadora de Mesa', cap: '30 rebanadas/corte',
    desc: 'Rebanadora de pan de mesa con cuchillas inoxidables. Hasta 30 rebanadas por corte, espesor de 12 mm, ancho máximo 360 mm. Fabricación robusta para producción diaria.',
    specs: [['Carga','Superior'],['Rebanadas','30 por corte'],['Espesor','12 mm'],['Ancho máx.','360 mm'],['Cuchillas','Acero inoxidable'],['Potencia','0,5 HP'],['Alimentación','220V / 50Hz'],['Dimensiones','680 × 780 × 780 mm'],['Peso','52 – 55 kg']],
    stock: 6,
  },
  // ── LAMINADORAS ─────────────────────────────────────────────────────────
  {
    sku: 'BDQ-520E', slug: 'laminadora-vaiven-de-mesa-520-mm-bdq-520e', category: 'laminadoras', img: 'BDQ-520E',
    name: 'Laminadora Vaivén de Mesa 520 mm', cap: '520 mm · 5 kg',
    desc: 'Laminadora de vaivén para masa, versión de mesa. Rolo de 520 mm, apertura regulable de 0,5 a 38 mm y micro de seguridad. Para medialunas, facturas y masas laminadas.',
    specs: [['Rolo','520 mm'],['Capacidad','5 kg de masa'],['Apertura','0,5 – 38 mm'],['Seguridad','Micro de seguridad'],['Potencia','0,75 HP'],['Alimentación','220V'],['Dimensiones en uso','940 × 2160 mm'],['Peso','159 kg']],
    stock: 2,
  },
  {
    sku: 'BDQ-650E', slug: 'laminadora-vaiven-de-pie-650-mm-bdq-650e', category: 'laminadoras', img: 'BDQ-650E',
    name: 'Laminadora Vaivén de Pie 650 mm', cap: '650 mm · 6,5 kg',
    desc: 'Laminadora de pie de mayor porte para producción continua. Rolo de 650 mm, 1 HP. Para panaderías y pastelerías de alto volumen.',
    specs: [['Rolo','650 mm'],['Capacidad','6,5 kg de masa'],['Apertura','0,2 – 50 mm'],['Seguridad','Botón de parada de emergencia'],['Protección','Rejilla con micro de seguridad'],['Potencia','1 HP'],['Alimentación','220V / 50Hz'],['Dimensiones en uso','1050 × 2900 mm'],['Peso','235 kg']],
    stock: 1,
  },
  // ── DIVISORAS ───────────────────────────────────────────────────────────
  {
    sku: 'BDK-30S', slug: 'divisora-boleadora-semi-automatica-bdk-30s', category: 'divisoras', img: 'BDK-30S',
    name: 'Divisora Boleadora Semi-Automática', cap: '30 piezas/ciclo',
    desc: 'Divisora boleadora semiautomática modelo BDK-30S. Divide y bolea 30 piezas por ciclo, en un rango de 30 a 100 g. Cuchillas de acero inoxidable, plataforma oscilante con boleado motorizado y control por tablero electromecánico.',
    specs: [['Piezas por ciclo','30'],['Peso por pieza','30 – 100 g'],['Cuchillas','Acero inoxidable'],['Sistema','Plataforma oscilante con boleado motorizado'],['Control','Tablero electromecánico'],['Potencia','1 HP'],['Alimentación','220V / 50Hz monofásica'],['Dimensiones','740 × 570 × 2100 mm'],['Peso','330 kg']],
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

const FICHAS = ['DV-MB','DV-R','SB-3HP','SB-5.5HP','SB-5.5HP-DT','B7-A','B15-V','B20-V','B30-V','B40-V','B60-V','BH-130','BHS-10-A','BHS-10-D','BHS-20-A','BHS-20-B','BHS-30-A','BHS-30-B','BHS-40-A','BHS-40-B','BHS-60-A','BHS-60-B','BHS-60-C','BSA-31','BDK-30S','DSL-2B','DSL-4B','DSL-6B','EB-4A','EB-8A','HL-R5D','HL-R10D','BDQ-520E','BDQ-650E','TRINCH-JR','TRINCH-CE','VSD-260D','YH-6','YH-16','YH-32'];


export { CATEGORIES, PRODUCTS, BRAND, FICHAS };
