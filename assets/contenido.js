/* Datos del blog y de la investigación. Edita aquí y se actualizan las 3 opciones de diseño. */
const SITE = {
  alumno: "Quenallata Lopez Juan Manuel",
  instituto: "Instituto Técnico Comercial INCOS El Alto",
  carrera: "Sistemas Informáticos",
  materia: "Redes de Computadoras I",
  docente: "Ing. Carolina Mendoza",
  curso: "2do año · Paralelo B · Turno Mañana",
  gestion: "2026"
};
document.querySelectorAll("[data-f]").forEach(e => e.textContent = SITE[e.dataset.f]);

const WIMAX = `
<article class="contenido">
<h2 id="intro">1. ¿Qué es WiMAX?</h2>
<p><b>WiMAX</b> (<i>Worldwide Interoperability for Microwave Access</i>) es una tecnología de banda ancha inalámbrica basada en la familia de estándares <b>IEEE 802.16</b>. Fue diseñada para cubrir áreas metropolitanas (<b>WMAN</b>, Red de Área Metropolitana Inalámbrica) y llevar internet a zonas donde tender cable o fibra es caro o difícil, como zonas rurales o ciudades con poca infraestructura.</p>
<p>El nombre "WiMAX" lo promovió el <b>WiMAX Forum</b>, organización que certifica que los equipos de distintos fabricantes sean compatibles entre sí, igual que la Wi-Fi Alliance lo hace con Wi-Fi.</p>
<div class="grid">
<div class="card"><h4>Estándar</h4><p>IEEE 802.16</p></div>
<div class="card"><h4>Tipo de red</h4><p>WMAN (metropolitana)</p></div>
<div class="card"><h4>Velocidad teórica</h4><p>Hasta ~70 Mbps (802.16-2004/e); más en WiMAX 2</p></div>
<div class="card"><h4>Alcance teórico</h4><p>Hasta ~50 km en línea de vista; típico 3–10 km</p></div>
<div class="card"><h4>Bandas típicas</h4><p>2.3, 2.5, 3.5 y 5.8 GHz</p></div>
<div class="card"><h4>Capa física</h4><p>OFDM / OFDMA</p></div>
</div>

<h2 id="historia">2. Historia</h2>
<ol class="timeline">
<li><b>1998–1999</b><span>El IEEE crea el grupo de trabajo 802.16 para estudiar el acceso inalámbrico de banda ancha fija (llamado también <i>WirelessMAN</i>).</span></li>
<li><b>2001</b><span>Se funda el <b>WiMAX Forum</b>, impulsado por empresas como Intel, Nokia, Fujitsu y otras, para certificar interoperabilidad.</span></li>
<li><b>2001–2002</b><span>Se publica el estándar original <b>802.16</b> para enlaces fijos con línea de vista en frecuencias altas (10–66 GHz).</span></li>
<li><b>2003</b><span><b>802.16a</b> extiende el estándar a 2–11 GHz y permite operar sin línea de vista directa (NLOS).</span></li>
<li><b>2004</b><span><b>802.16-2004 (802.16d)</b>: WiMAX fijo, base de los primeros equipos certificados.</span></li>
<li><b>2005</b><span><b>802.16e</b>: WiMAX móvil, con traspaso entre celdas (<i>handover</i>) y uso en laptops y teléfonos.</span></li>
<li><b>2006–2010</b><span>Auge comercial: despliegues en Corea (variante WiBro), Estados Unidos, Japón, Rusia, Malasia, India, África y Latinoamérica. Muchas laptops incluyeron chip WiMAX.</span></li>
<li><b>2011</b><span><b>802.16m (WiMAX 2)</b>: velocidades superiores a 100 Mbps, reconocido como candidato IMT-Advanced (4G).</span></li>
<li><b>2010–2015</b><span>La industria elige mayoritariamente <b>LTE</b> como 4G; WiMAX pierde impulso y varias redes se apagan o migran.</span></li>
</ol>

<h2 id="tecnica">3. Cómo funciona</h2>
<p>Una red WiMAX se compone de una <b>estación base (BS)</b> instalada en una torre, conectada a internet por fibra o enlace de microondas, y de <b>estaciones suscriptoras (SS/CPE)</b>: antenas en casas, negocios o dispositivos móviles. La estación base reparte el ancho de banda con <b>OFDM/OFDMA</b> y mecanismos de calidad de servicio (QoS) para voz, video y datos.</p>
<table>
<thead><tr><th>Estándar</th><th>Año</th><th>Uso</th><th>Característica</th></tr></thead>
<tbody>
<tr><td>802.16</td><td>2001</td><td>Fijo</td><td>10–66 GHz, línea de vista</td></tr>
<tr><td>802.16a</td><td>2003</td><td>Fijo</td><td>2–11 GHz, sin línea de vista</td></tr>
<tr><td>802.16-2004 (d)</td><td>2004</td><td>Fijo / nómada</td><td>Primera certificación WiMAX Forum</td></tr>
<tr><td>802.16e</td><td>2005</td><td>Móvil</td><td>Handover, OFDMA escalable</td></tr>
<tr><td>802.16m</td><td>2011</td><td>Móvil (WiMAX 2)</td><td>Más de 100 Mbps, 4G</td></tr>
</tbody></table>
<div class="cols">
<div><h4>✅ Ventajas</h4><ul><li>Cobertura amplia con pocas antenas</li><li>Despliegue rápido y más barato que cableado en zonas alejadas</li><li>Funciona sin línea de vista (NLOS)</li><li>QoS para voz, video y datos</li></ul></div>
<div><h4>⚠️ Desventajas</h4><ul><li>El ancho de banda se comparte entre usuarios de una celda</li><li>La velocidad baja con la distancia y los obstáculos</li><li>Poco ecosistema de teléfonos frente a LTE</li><li>Requiere licencias de espectro en muchas bandas</li></ul></div>
</div>

<h2 id="personajes">4. Personajes y organizaciones clave</h2>
<div class="grid">
<div class="card"><h4>Roger B. Marks</h4><p>Ingeniero del NIST (EE. UU.); presidió el grupo de trabajo IEEE 802.16 en sus primeros años y fue clave para impulsar el estándar.</p></div>
<div class="card"><h4>Ron Resnick</h4><p>Ejecutivo asociado a Intel; presidió el WiMAX Forum en su etapa de expansión.</p></div>
<div class="card"><h4>IEEE 802.16 Working Group</h4><p>Comité técnico que redactó y actualizó todos los estándares WiMAX.</p></div>
<div class="card"><h4>WiMAX Forum</h4><p>Consorcio industrial (Intel, Nokia, Motorola, Samsung, Alvarion, Airspan, entre otros) que certificó equipos.</p></div>
<div class="card"><h4>Intel</h4><p>Principal promotor con chips y módulos WiMAX para laptops (línea Centrino).</p></div>
</div>
<p class="nota">📌 Nota académica: verifica cargos y fechas exactas de las personas en fuentes como el sitio del IEEE 802.16 o el WiMAX Forum antes de entregar, y cítalas en la bibliografía.</p>

<h2 id="cobertura">5. Cobertura: ¿dónde se usó WiMAX?</h2>
<table>
<thead><tr><th>País / región</th><th>Detalle</th></tr></thead>
<tbody>
<tr><td>🇰🇷 Corea del Sur</td><td>WiBro (variante compatible con 802.16e) en Seúl desde 2006 con operadores como KT.</td></tr>
<tr><td>🇺🇸 Estados Unidos</td><td>Clearwire / Sprint (marca Xohm) en ciudades como Portland, Chicago y Baltimore.</td></tr>
<tr><td>🇯🇵 Japón</td><td>UQ Communications (grupo KDDI) con "UQ WiMAX", cobertura nacional amplia.</td></tr>
<tr><td>🇲🇾 Malasia</td><td>Packet One (P1) y otros operadores en el valle de Klang y ciudades principales.</td></tr>
<tr><td>🇷🇺 Rusia</td><td>Yota, uno de los despliegues más grandes antes de migrar a LTE.</td></tr>
<tr><td>🇮🇳 India</td><td>Operadores como BSNL y Tata Communications para banda ancha fija.</td></tr>
<tr><td>🌍 África</td><td>Redes fijas en zonas urbanas y rurales de varios países como alternativa a la telefonía fija.</td></tr>
<tr><td>🌎 Latinoamérica</td><td>Despliegues en Chile, Colombia, Perú, Venezuela, Argentina, Brasil y otros para internet fijo inalámbrico.</td></tr>
</tbody></table>

<h2 id="bolivia">6. WiMAX en Bolivia</h2>
<p>En Bolivia, el regulador de telecomunicaciones es la <b>ATT</b> (Autoridad de Regulación y Fiscalización de Telecomunicaciones y Transportes). En los años 2000 y 2010, la tecnología inalámbrica de banda ancha fija (incluido WiMAX en bandas como 3.5 GHz) se usó en ciudades del eje troncal como una alternativa al cable y al ADSL para internet en hogares y empresas.</p>
<p>Con la llegada de <b>4G LTE</b> y hoy <b>5G</b>, esas mismas bandas (por ejemplo 3.300–3.600 MHz) se destinan a redes móviles modernas: la ATT ha impulsado la asignación de la banda de 3.5 GHz a Entel para 5G. Esto muestra el ciclo típico: WiMAX abrió el camino del acceso inalámbrico de banda ancha y luego LTE/5G lo reemplazó.</p>
<p class="nota">📌 Dato pendiente para completar: los nombres exactos de operadores que ofrecieron WiMAX en Bolivia y sus años de servicio no pudieron confirmarse aquí. Para tu informe, consulta a la ATT (att.gob.bo), el archivo de noticias de tecnología de Bolivia y pregunta a tu docente por fuentes locales.</p>

<h2 id="empresas">7. Empresas que aplicaron WiMAX en el mundo</h2>
<div class="grid">
<div class="card"><h4>Clearwire / Sprint</h4><p>EE. UU. Red "Xohm" y luego Clear, una de las mayores redes WiMAX móviles.</p></div>
<div class="card"><h4>UQ Communications (KDDI)</h4><p>Japón. UQ WiMAX, con gran número de suscriptores.</p></div>
<div class="card"><h4>Yota</h4><p>Rusia. Pionera en internet móvil WiMAX, luego migró a LTE.</p></div>
<div class="card"><h4>Korea Telecom (KT)</h4><p>Corea del Sur. WiBro, tecnología hermana de WiMAX móvil.</p></div>
<div class="card"><h4>Packet One (P1)</h4><p>Malasia. Servicio WiMAX comercial para hogares y móviles.</p></div>
<div class="card"><h4>BSNL / Tata</h4><p>India. Banda ancha inalámbrica fija y de empresa.</p></div>
</div>
<p><b>Fabricantes de equipos:</b> Intel, Nokia, Motorola, Samsung, Alvarion, Airspan, Huawei y ZTE, entre otros.</p>

<h2 id="conclusion">8. Conclusión</h2>
<p>WiMAX fue un paso importante en la evolución del acceso inalámbrico de banda ancha: demostró que una sola torre podía conectar a miles de usuarios y que internet podía llegar a lugares sin cable. Aunque LTE y 5G lo reemplazaron como estándar dominante, sus ideas (OFDMA, QoS, interoperabilidad certificada) siguen presentes en las redes actuales. Para un estudiante de Sistemas Informáticos, entender WiMAX ayuda a comprender cómo pasamos de las redes fijas a las móviles.</p>

<h2 id="biblio">9. Fuentes sugeridas</h2>
<ul>
<li>IEEE 802.16 Working Group (ieee802.org/16)</li>
<li>WiMAX Forum (documentos históricos y white papers)</li>
<li>ITU: informes sobre IMT-Advanced</li>
<li>ATT Bolivia: att.gob.bo</li>
<li>Libro: <i>Redes de Computadoras</i>, Andrew S. Tanenbaum</li>
</ul>
</article>`;
document.getElementById("investigacion").innerHTML = WIMAX;
