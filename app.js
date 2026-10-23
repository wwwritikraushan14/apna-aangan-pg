// Apna Aangan PG — shared frontend logic
const AAP = {
  settings: { brand_name: 'Apna Aangan PG', tagline: 'Your Space. Your Comfort. Your Delhi.', phone: '8292160777', whatsapp: '918292160777', email: '', hours: '', visit_slots: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'] },
  properties: []
};
const inr = (n) => '₹' + Number(n || 0).toLocaleString('en-IN');
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const LOGO_SVG = `<svg class="mark" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 4 5 20v3h4v17a2 2 0 0 0 2 2h10V29a3 3 0 0 1 6 0v13h10a2 2 0 0 0 2-2V23h4v-3L24 4Z" fill="#17452e"><path d="M24 10l11 9H13l11-9Z" fill="#d99a2b"><circle cx="24" cy="24" r="2.4" fill="#b4552d"></svg>`;
const WA_SVG = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .7-.2 1.2Z"></svg>`;

function waLink(prop) {
  let msg = 'Hello Apna Aangan PG, I am interested in PG accommodation in Dwarka, New Delhi. Please share the available rooms, monthly rent, security deposit, amenities, and visiting options.';
  if (prop) msg = `Hello Apna Aangan PG, I am interested in "${prop.name}" (${prop.sector}, Dwarka) — ${prop.occupancy}, rent ${inr(prop.rent)}/month. Please share availability, security deposit, amenities, and visiting options.`;
  return `https://wa.me/${AAP.settings.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function buildChrome(active) {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `<div class="container">
    <a class="brand" href="index.html">${LOGO_SVG}<span><span class="brand-name">${esc(AAP.settings.brand_name)}</span><br><span class="brand-tag">${esc(AAP.settings.tagline)}</span></span></a>
    <button class="nav-toggle" aria-label="Open menu" onclick="document.querySelector('.main-nav').classList.toggle('open')">☰</button>
    <nav class="main-nav" aria-label="Main">
      <a href="index.html" class="${active === 'home' ? 'active' : ''}">Home</a>
      <a href="rooms.html" class="${active === 'rooms' ? 'active' : ''}">Rooms in Dwarka</a>
      <a href="pricing.html" class="${active === 'pricing' ? 'active' : ''}">Pricing</a>
      <a href="gallery.html" class="${active === 'gallery' ? 'active' : ''}">Gallery</a>
      <a href="about.html" class="${active === 'about' ? 'active' : ''}">About Us</a>
      <a href="contact.html" class="${active === 'contact' ? 'active' : ''}">Contact</a>
      <a class="header-call" href="tel:+91${AAP.settings.phone}">📞 ${esc(AAP.settings.phone)}</a>
    </nav></div>`;
  document.body.prepend(header);
  const demoStrip = document.createElement('div');
  demoStrip.className = 'demo-strip';
  demoStrip.textContent = 'Demo version — explore the complete design and features. Enquiries open WhatsApp; no information is saved in this demo.';
  document.body.prepend(demoStrip);

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `<div class="container">
    <div><h4>${esc(AAP.settings.brand_name)}</h4>
      <p style="color:#cfc7ab">${esc(AAP.settings.tagline)} Premium PG accommodation and co-living in Dwarka, New Delhi.</p>
      <p>📞 <a href="tel:+91${AAP.settings.phone}">${esc(AAP.settings.phone)}</a><br>💬 <a target="_blank" rel="noopener" href="${waLink()}">Chat on WhatsApp</a>
      ${AAP.settings.email ? `<br>✉️ <a href="mailto:${esc(AAP.settings.email)}">${esc(AAP.settings.email)}</a>` : ''}
      ${AAP.settings.hours ? `<br>🕘 ${esc(AAP.settings.hours)}` : ''}</p></div>
    <div><h4>Explore</h4><ul>
      <li><a href="rooms.html">Rooms in Dwarka</a></li>
      <li><a href="pricing.html">Pricing & Calculator</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact Us</a></li></ul></div>
    <div><h4>Information</h4><ul>
      <li><a href="policies.html#privacy">Privacy Policy</a></li>
      <li><a href="policies.html#terms">Terms & Conditions</a></li>
      <li><a href="policies.html#cancellation">Cancellation Policy</a></li>
      <li><a href="policies.html#refund">Refund Policy</a></li></ul></div>
  </div><div class="footer-bottom"><div class="container" style="padding-top:0;padding-bottom:0">© ${new Date().getFullYear()} ${esc(AAP.settings.brand_name)} · Dwarka, New Delhi · Demonstration website — sample listings are labelled as demo data until verified property details are added.</div></div>`;
  document.body.appendChild(footer);

  const wa = document.createElement('a');
  wa.className = 'wa-float';
  if (!document.querySelector('.mobile-bar') && !document.getElementById('mobileBar')) {
    const bar = document.createElement('div');
    bar.className = 'mobile-bar';
    bar.innerHTML = `<a href="tel:+91${AAP.settings.phone}">📞 Call</a><a class="wa" href="${waLink()}" target="_blank" rel="noopener">💬 WhatsApp</a><a href="${''}rooms.html">🏠 View Rooms</a>`;
    document.body.appendChild(bar);
  } wa.href = waLink(); wa.target = '_blank'; wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'Chat on WhatsApp'); wa.innerHTML = WA_SVG;
  document.body.appendChild(wa);
}

function toast(msg) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 3600);
}

function availabilityBadge(p) {
  return p.available_rooms > 0
    ? `<span class="badge badge-avail">${p.available_rooms} room${p.available_rooms > 1 ? 's' : ''} available</span>`
    : `<span class="badge badge-avail full">Currently full</span>`;
}

function propertyCard(p, delay = 0) {
  const topAmen = p.amenities.slice(0, 4);
  return `<article class="prop-card" style="animation-delay:${delay}ms">
    <div class="ph">${p.photos && p.photos.length ? `<a href="property.html?id=${p.id}"><img loading="lazy" src="${esc(p.photos[0])}" alt="${esc(p.name)} — PG room in ${esc(p.sector)}, Dwarka"></a>` : `<div class="photo-ph">📷 Property photograph coming soon</div>`}
      ${p.is_demo ? '<span class="badge badge-demo">Demo Listing</span>' : ''}${availabilityBadge(p)}</div>
    <div class="body">
      <h3><a href="property.html?id=${p.id}" style="text-decoration:none;color:inherit">${esc(p.name.replace(/ \(Demo\)$/, ''))}</a></h3>
      <div class="loc">📍 ${esc(p.sector)} · ${esc(p.locality || 'Dwarka, New Delhi')}</div>
      <div class="rent-row"><span class="rent">${inr(p.rent)}<small> /month</small></span><span class="deposit">Deposit ${inr(p.deposit)}</span></div>
      <div class="chips"><span class="chip">${esc(p.occupancy)}</span><span class="chip">${esc(p.gender_policy)}</span><span class="chip">${esc(p.room_type)}</span>${topAmen.map(a => `<span class="chip">${esc(a)}</span>`).join('')}</div>
      <div class="card-actions">
        <a class="btn btn-primary" href="property.html?id=${p.id}">View Details</a>
        <button class="btn btn-outline" onclick="openEnquiry(${p.id})">Check Availability</button>
        <a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(p)}">WhatsApp</a>
      </div>
      <button class="btn btn-block" style="background:#072654;color:#fff;margin-top:8px" onclick="demoPay(${p.id})">💳 Pay Booking Token</button>
    </div></article>`;
}

/* ---------- enquiry & visit modals ---------- */
function modalShell(id, title, sub, inner) {
  let m = document.getElementById(id);
  if (m) m.remove();
  m = document.createElement('div');
  m.className = 'modal-wrap'; m.id = id;
  m.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><button class="x" aria-label="Close" onclick="closeModal('${id}')">×</button>
    <h3>${title}</h3><p class="muted small">${sub}</p><div class="modal-body">${inner}</div></div>`;
  m.addEventListener('click', (e) => { if (e.target === m) closeModal(id); });
  document.body.appendChild(m);
  return m;
}
function closeModal(id) { const m = document.getElementById(id); if (m) m.classList.remove('open'); }

function fieldErr(input, on) { const f = input.closest('.field'); if (f) f.classList.toggle('invalid', on); return !on; }

function propOptions(selectedId) {
  return `<option value="">General enquiry (any suitable room)</option>` + AAP.properties.map(p => `<option value="${p.id}" ${String(selectedId) === String(p.id) ? 'selected' : ''}>${esc(p.name.replace(/ \(Demo\)$/, ''))} — ${esc(p.sector)} (${inr(p.rent)}/mo)</option>`).join('');
}

function openEnquiry(propertyId, contactMethod) {
  const prop = AAP.properties.find(p => p.id === propertyId);
  const m = modalShell('enquiryModal', 'Send an Enquiry', 'In this demo, your enquiry is prepared in WhatsApp. It does not guarantee a reservation — availability is confirmed personally.',
    `<form id="enquiryForm" novalidate>
      <div class="form-grid">
        <div class="field"><label>Full name *</label><input name="name" autocomplete="name" placeholder="Your full name"><div class="err">Please enter your full name.</div></div>
        <div class="field"><label>Mobile number *</label><input name="mobile" inputmode="numeric" autocomplete="tel" placeholder="10-digit mobile number"><div class="err">Enter a valid 10-digit Indian mobile number.</div></div>
      </div>
      <div class="form-grid" style="margin-top:12px">
        <div class="field"><label>Email (optional)</label><input name="email" type="email" autocomplete="email" placeholder="you@example.com"><div class="err">That email does not look right.</div></div>
        <div class="field"><label>Preferred contact</label><select name="contact_method"><option ${contactMethod === 'WhatsApp' ? 'selected' : ''}>WhatsApp</option><option ${contactMethod === 'Phone call' ? 'selected' : ''}>Phone call</option><option>Email</option></select></div>
      </div>
      <div class="field" style="margin-top:12px"><label>Property</label><select name="property_id">${propOptions(propertyId)}</select></div>
      <div class="form-grid" style="margin-top:12px">
        <div class="field"><label>Room type</label><select name="room_type"><option>Single Occupancy</option><option>Double Sharing</option><option>Triple Sharing</option><option>Not sure yet</option></select></div>
        <div class="field"><label>Expected move-in date</label><input name="move_in" type="date"></div>
      </div>
      <div class="form-grid" style="margin-top:12px">
        <div class="field"><label>Duration of stay</label><select name="duration"><option>1–3 months</option><option>3–6 months</option><option>6–12 months</option><option>More than a year</option></select></div>
        <div class="field"><label>Monthly budget (₹)</label><input name="budget" type="number" min="0" placeholder="e.g. 9000"></div>
      </div>
      <div class="field" style="margin-top:12px"><label>Additional requirements</label><textarea name="requirements" rows="3" placeholder="Food preference, parking, study desk, anything else…"></textarea></div>
      <div class="form-note" style="margin:14px 0">Demo version: submitting prepares your enquiry in WhatsApp. Nothing is saved on a server in this demo.</div>
      <div class="form-msg"></div>
      <button class="btn btn-primary btn-block" type="submit">Continue on WhatsApp</button>
      ${prop ? `<a class="btn btn-wa btn-block" style="margin-top:10px" target="_blank" rel="noopener" href="${waLink(prop)}">Or enquire instantly on WhatsApp</a>` : ''}
    </form>`);
  m.classList.add('open');
  $('#enquiryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = e.target, fd = Object.fromEntries(new FormData(f).entries());
    let ok = true;
    ok = fieldErr(f.name, f.name.value.trim().length < 2) && ok;
    ok = fieldErr(f.mobile, !/^[6-9]\d{9}$/.test(f.mobile.value.replace(/\D/g, '').slice(-10))) && ok;
    ok = fieldErr(f.email, f.email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value)) && ok;
    if (!ok) return;
    const selected = AAP.properties.find(p => String(p.id) === String(fd.property_id));
    const lines = [
      'Hello Apna Aangan PG, I am sending an enquiry from the website demo.',
      `Name: ${fd.name}`,
      `Mobile: ${fd.mobile}`,
      fd.email ? `Email: ${fd.email}` : '',
      `Property: ${selected ? selected.name.replace(/ \(Demo\)$/, '') + ' — ' + selected.sector : 'General enquiry'}`,
      `Room type: ${fd.room_type || 'Not sure yet'}`,
      fd.move_in ? `Expected move-in: ${fd.move_in}` : '',
      fd.duration ? `Duration: ${fd.duration}` : '',
      fd.budget ? `Monthly budget: ₹${fd.budget}` : '',
      fd.requirements ? `Requirements: ${fd.requirements}` : '',
      `Preferred contact: ${fd.contact_method || 'WhatsApp'}`
    ].filter(Boolean);
    const url = `https://wa.me/${AAP.settings.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    $('.form-msg', f).innerHTML = `<div class="form-success">Demo only: WhatsApp is opening with your enquiry ready to send. <a href="${url}" target="_blank" rel="noopener">Tap here if it does not open.</a></div>`;
    window.open(url, '_blank', 'noopener');
    toast('Enquiry prepared in WhatsApp');
  });
}

function openVisit(propertyId) {
  const slots = AAP.settings.visit_slots || [];
  const m = modalShell('visitModal', 'Book a Property Visit', 'Pick a date and time slot. In this demo, your request is prepared in WhatsApp and the visit is confirmed personally.',
    `<form id="visitForm" novalidate>
      <div class="form-grid">
        <div class="field"><label>Your name *</label><input name="name" autocomplete="name" placeholder="Full name"><div class="err">Please enter your full name.</div></div>
        <div class="field"><label>Mobile number *</label><input name="mobile" inputmode="numeric" autocomplete="tel" placeholder="10-digit mobile number"><div class="err">Enter a valid 10-digit Indian mobile number.</div></div>
      </div>
      <div class="field" style="margin-top:12px"><label>Property *</label><select name="property_id">${propOptions(propertyId).replace('General enquiry (any suitable room)', 'Select a property')}</select><div class="err">Please select a property.</div></div>
      <div class="form-grid" style="margin-top:12px">
        <div class="field"><label>Visit date *</label><input name="visit_date" type="date" min="${new Date().toISOString().slice(0, 10)}"><div class="err">Please pick a date (today or later).</div></div>
        <div class="field"><label>Time slot *</label><select name="slot"><option value="">Select a slot</option>${slots.map(s => `<option>${esc(s)}</option>`).join('')}</select><div class="err">Please choose a time slot.</div></div>
      </div>
      <div class="form-grid" style="margin-top:12px">
        <div class="field"><label>Number of visitors</label><input name="visitors" type="number" min="1" max="10" value="1"></div>
        <div class="field"><label>Notes</label><input name="notes" placeholder="Anything we should know?"></div>
      </div>
      <div class="form-msg" style="margin-top:14px"></div>
      <button class="btn btn-accent btn-block" type="submit" style="margin-top:10px">Continue on WhatsApp</button>
    </form>`);
  m.classList.add('open');
  $('#visitForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = e.target, fd = Object.fromEntries(new FormData(f).entries());
    let ok = true;
    ok = fieldErr(f.name, f.name.value.trim().length < 2) && ok;
    ok = fieldErr(f.mobile, !/^[6-9]\d{9}$/.test(f.mobile.value.replace(/\D/g, '').slice(-10))) && ok;
    ok = fieldErr(f.property_id, !f.property_id.value) && ok;
    ok = fieldErr(f.visit_date, !f.visit_date.value) && ok;
    ok = fieldErr(f.slot, !f.slot.value) && ok;
    if (!ok) return;
    const selected = AAP.properties.find(p => String(p.id) === String(fd.property_id));
    const lines = [
      'Hello Apna Aangan PG, I would like to book a property visit from the website demo.',
      `Name: ${fd.name}`,
      `Mobile: ${fd.mobile}`,
      `Property: ${selected ? selected.name.replace(/ \(Demo\)$/, '') + ' — ' + selected.sector : ''}`,
      `Preferred date: ${fd.visit_date}`,
      `Preferred time: ${fd.slot}`,
      `Visitors: ${fd.visitors || 1}`,
      fd.notes ? `Notes: ${fd.notes}` : '',
      'Please confirm whether this visit time is available.'
    ].filter(Boolean);
    const url = `https://wa.me/${AAP.settings.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    $('.form-msg', f).innerHTML = `<div class="form-success">Demo only: WhatsApp is opening with your visit request ready to send. <a href="${url}" target="_blank" rel="noopener">Tap here if it does not open.</a></div>`;
    window.open(url, '_blank', 'noopener');
    toast('Visit request prepared in WhatsApp');
  });
}

/* ---------- gallery lightbox ---------- */
let LB = { imgs: [], i: 0 };
function openLightbox(imgs, i) {
  LB = { imgs, i };
  let lb = $('.lightbox');
  if (!lb) {
    lb = document.createElement('div'); lb.className = 'lightbox';
    lb.innerHTML = `<img alt="Property photograph"><button class="lb-btn lb-close" aria-label="Close">×</button><button class="lb-btn lb-prev" aria-label="Previous">‹</button><button class="lb-btn lb-next" aria-label="Next">›</button>`;
    document.body.appendChild(lb);
    $('.lb-close', lb).onclick = () => lb.classList.remove('open');
    $('.lb-prev', lb).onclick = () => showLb(-1);
    $('.lb-next', lb).onclick = () => showLb(1);
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('open'); });
  }
  $('img', lb).src = LB.imgs[LB.i];
  lb.classList.add('open');
}
function showLb(d) { const lb = $('.lightbox'); LB.i = (LB.i + d + LB.imgs.length) % LB.imgs.length; $('img', lb).src = LB.imgs[LB.i]; }

/* ---------- FAQ ---------- */
function wireFaq() { $$('.faq-q').forEach(q => q.addEventListener('click', () => q.closest('.faq-item').classList.toggle('open'))); }

/* ---------- init ---------- */
async function aapInit(active) {
  if (window.AAP_DEMO_DATA) {
    Object.assign(AAP.settings, window.AAP_DEMO_DATA.settings || {});
    AAP.properties = window.AAP_DEMO_DATA.properties || [];
  }
  buildChrome(active);
  document.title = document.title.replace('Apna Aangan PG', AAP.settings.brand_name);
}

/* ---------- booking token (demo) ---------- */
function demoPay(propertyId) {
  const p = (AAP.properties || []).find(x => x.id === propertyId) || {};
  const m = modalShell('payModal', 'Online payment — live site only', esc(p.name || 'Apna Aangan PG'),
    `<p>In this <b>demo</b>, no real payment is taken. On the live website, this button opens secure Razorpay checkout (UPI, cards, netbanking) for a booking token, and the booking is confirmed only after the payment is verified on the server.</p>
     <p>For now, you can reserve <b>free</b> on WhatsApp:</p>
     <a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="${waLink(p)}">Reserve on WhatsApp</a>`);
  m.classList.add('open');
}

/* ---------- premium motion system ---------- */
document.documentElement.classList.add('js');
(function initMotion() {
  const onScroll = () => { const h = document.querySelector('.site-header'); if (h) h.classList.toggle('scrolled', window.scrollY > 8); };
  addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('click', (e) => {
    if (e.target.closest('.main-nav a')) { const n = document.querySelector('.main-nav'); if (n) n.classList.remove('open'); }
  });
  const SEL = '.amen-card, .svc-card, .faq-item, .gal-grid figure, .calc';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let io = null;
  function reveal(el) { el.classList.add('revealed'); }
  function prep(el) {
    if (el.dataset.rv) return;
    el.dataset.rv = '1';
    el.classList.add('rv');
    const sibs = [...el.parentElement.children].filter(c => c.matches && c.matches(SEL));
    el.style.transitionDelay = Math.min(Math.max(sibs.indexOf(el), 0) * 70, 350) + 'ms';
    if (io) io.observe(el); else reveal(el);
  }
  function initReveals() { document.querySelectorAll(SEL).forEach(prep); }
  window.initReveals = initReveals;
  if ('IntersectionObserver' in window && !reduced) {
    io = new IntersectionObserver((es) => es.forEach(en => { if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); } }), { threshold: 0.1, rootMargin: '0px 0px -24px 0px' });
  }
  initReveals();
  if (document.body) new MutationObserver(() => initReveals()).observe(document.body, { childList: true, subtree: true });
  setTimeout(() => document.querySelectorAll('.rv:not(.revealed)').forEach(r => { if (r.getBoundingClientRect().top < innerHeight) reveal(r); }), 1600);
})();
