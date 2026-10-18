import { useState } from 'react';
import './sparks-adventures.css';

const inbox = 'hello@sparkstack.international';

export default function SparksAdventures() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', people: '1', transport: 'Not sure yet', notes: '' });
  const [draftOpened, setDraftOpened] = useState(false);
  function change(e) { setForm(s => ({ ...s, [e.target.name]: e.target.value })); }
  function submit(e) {
    e.preventDefault();
    const body = [
      'SPARKS ADVENTURES — EXPRESSION OF INTEREST',
      'Proposed trip: Eliye Springs Escape',
      'Proposed date: 20 December 2026 (not confirmed)',
      '',
      'Name: ' + form.name, 'Email: ' + form.email, 'Phone: ' + (form.phone || 'Not provided'),
      'People interested: ' + form.people, 'Transport: ' + form.transport, 'Notes: ' + (form.notes || 'None'),
      '', 'I understand this is an expression of interest only, not a confirmed booking.'
    ].join('\n');
    setDraftOpened(true);
    window.location.href = 'mailto:' + inbox + '?subject=' + encodeURIComponent('Sparks Adventures — Eliye Springs interest') + '&body=' + encodeURIComponent(body);
  }
  return <div className="sparks-adventures">
    <section className="sa-hero"><div className="sa-shell sa-hero-grid">
      <div><span className="sa-eyebrow">✦ &nbsp; A NEW KIND OF GETAWAY</span>
        <h1>Find your people.<br/><em>Discover your world.</em></h1>
        <p>Small-group adventures, local discoveries, and stories worth telling. We’re starting in Turkana — and building this community one trip at a time.</p>
        <div className="sa-actions"><a className="sa-button sa-button-light" href="#sa-pilot">Explore the first trip ↘</a><a className="sa-text-link" href="#sa-interest">Join the interest list</a></div>
        <p className="sa-micro">Community-first · No payment required to register interest</p>
      </div>
      <div className="sa-landscape" role="img" aria-label="Illustrated sunset over a lake and hills"><div className="sa-sun"/><div className="sa-ridge"/><div className="sa-hill"/><div className="sa-water"/><span>NEXT STOP: ANYWHERE</span><b>01 / TURKANA</b></div>
    </div><div className="sa-shell sa-strip"><span>LOCAL PLACES</span> ✦ <span>GOOD PEOPLE</span> ✦ <span>REAL EXPERIENCES</span></div></section>

    <section className="sa-section" id="sa-pilot"><div className="sa-shell">
      <div className="sa-section-head"><div><span className="sa-eyebrow sa-dark">THE FIRST SPARKS ADVENTURE</span><h2>A little escape.<br/><em>A lot to remember.</em></h2></div><div className="sa-status"><i/> Planning stage <small>Not confirmed</small></div></div>
      <div className="sa-trip"><div className="sa-trip-art"><span className="sa-stamp">SPARKS<br/>ADVENTURES</span><b>ELIYE SPRINGS · LAKE TURKANA</b></div>
        <div className="sa-trip-info"><span className="sa-kicker">PILOT EDITION 001 · TURKANA, KENYA</span><h3>Eliye Springs Escape</h3>
          <p>A proposed day trip from Lodwar to the shores of Lake Turkana for scenery, photos, conversation, and exploring together.</p>
          <div className="sa-facts"><div><small>DATE</small><b>Sun, 20 Dec 2026</b></div><div><small>START</small><b>Lodwar</b></div><div><small>GROUP</small><b>4–6 target</b></div><div><small>PRICE</small><b>Not set yet</b></div></div>
          <a className="sa-button sa-button-dark" href="#sa-interest">Register interest ↗</a>
          <p className="sa-disclaimer">The date and itinerary are proposed only. This form does not reserve a seat or confirm that the trip will run.</p>
        </div></div>
    </div></section>

    <section className="sa-section sa-tint"><div className="sa-shell"><span className="sa-eyebrow sa-dark">A DAY, AT A GLANCE</span><h2>The plan is simple.<br/><em>The details come first.</em></h2>
      <div className="sa-itinerary">
        <article><span>01</span><small>EARLY MORNING · PROPOSED</small><h3>Meet in Lodwar</h3><p>Check attendance, transport, weather and road conditions before setting off.</p></article>
        <article><span>02</span><small>MORNING · ROUTE CHECK</small><h3>Head to Eliye Springs</h3><p>Travel only when the selected vehicle and route are suitable for current conditions.</p></article>
        <article><span>03</span><small>MIDDAY · ACCESS TO BE CONFIRMED</small><h3>Explore and unwind</h3><p>Lake views, group photos, a relaxed break and food arranged in advance.</p></article>
        <article><span>04</span><small>RETURN · DAYLIGHT PRIORITY</small><h3>Head back safely</h3><p>Return timing depends on confirmed transport and road conditions. No rushing to beat darkness.</p></article>
      </div>
      <div className="sa-warning"><strong>!</strong><p><b>Road and safety note</b><br/>The route is reported to include rough road and a sandy final section. Suitable transport, local conditions, access and a realistic return plan must be verified before confirmation. A passenger-carrying Honda CB125 is not the default group transport plan.</p></div>
    </div></section>

    <section className="sa-section" id="sa-interest"><div className="sa-shell sa-interest-grid">
      <div><span className="sa-eyebrow sa-dark">HELP SHAPE EDITION 001</span><h2>Interested?<br/><em>Let’s plan it properly.</em></h2>
        <p className="sa-muted">Tell us if you’d consider joining. This helps us understand demand before we confirm logistics, set a price, or collect any money.</p>
        <div className="sa-promise"><b>01</b><div><strong>No deposit now</strong><p>This is not a paid booking.</p></div></div>
        <div className="sa-promise"><b>02</b><div><strong>Clear costs later</strong><p>We’ll share inclusions and exclusions before any commitment.</p></div></div>
        <div className="sa-promise"><b>03</b><div><strong>Your choice stays yours</strong><p>You can express interest without committing to travel.</p></div></div>
      </div>
      <form className="sa-form" onSubmit={submit}><div className="sa-form-meta"><span>ELIYE SPRINGS ESCAPE</span><span>INTEREST FORM · 01</span></div><h3>Count me in — maybe!</h3><p className="sa-muted">No payment or booking confirmation is created.</p>
        <label htmlFor="sa-name">Your name *</label><input id="sa-name" name="name" value={form.name} onChange={change} placeholder="Your full name" autoComplete="name" required/>
        <label htmlFor="sa-email">Email address *</label><input id="sa-email" name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" autoComplete="email" required/>
        <label htmlFor="sa-phone">Phone number (optional)</label><input id="sa-phone" name="phone" type="tel" value={form.phone} onChange={change} placeholder="+254..." autoComplete="tel"/>
        <div className="sa-form-row"><div><label htmlFor="sa-people">People interested</label><select id="sa-people" name="people" value={form.people} onChange={change}><option value="1">1 person</option><option value="2">2 people</option><option value="3">3 people</option><option value="4">4 people</option><option value="5">5 people</option><option value="6">6 people</option></select></div>
        <div><label htmlFor="sa-transport">Transport</label><select id="sa-transport" name="transport" value={form.transport} onChange={change}><option>Not sure yet</option><option>Would need help arranging it</option><option>I may arrange my own</option></select></div></div>
        <label htmlFor="sa-notes">Questions or notes (optional)</label><textarea id="sa-notes" name="notes" rows="3" value={form.notes} onChange={change} placeholder="Questions, ideas, accessibility needs..."/>
        <button className="sa-button sa-button-dark sa-submit" type="submit">Send expression of interest ↗</button>
        <p className="sa-privacy">This opens your email app with a prepared message to Sparks Adventures. Nothing is sent until you choose to send it. Avoid sensitive personal information.</p>
        {draftOpened && <p className="sa-success" role="status">Your email app should open with a draft. Send it there if you want us to receive your interest.</p>}
      </form>
    </div></section>
    <section className="sa-final"><div className="sa-shell"><span className="sa-eyebrow">SPARKS ADVENTURES · COMMUNITY FIRST</span><h2>We’re not just planning trips.<br/><em>We’re building a community.</em></h2><a className="sa-button sa-button-light" href="#sa-interest">Be part of the first spark ↗</a></div></section>
  </div>;
}
