import { FormEvent, useState } from "react";

const steps = [
  ["01", "Drop in", "Send a bill of lading, CMR, invoice, or any document your operation handles every day."],
  ["02", "Understand", "OCRgenius reads the document in context and scores every extracted value."],
  ["03", "Deliver", "Validated data arrives in your schema, ready for the ERP, TMS, WMS, or review queue."],
];
const benefits = [
  ["Field confidence", "Know what needs a second look.", "Low-confidence values are routed to review instead of quietly becoming someone else's problem."],
  ["Real documents", "Built for the messy middle.", "Handwriting, stamps, signatures, skewed photos, poor scans, and layouts that refuse to stay still."],
  ["Your workflow", "Fits the systems moving freight.", "Use REST, webhooks, SFTP, or mapped JSON, CSV, and Excel exports."],
];
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function App() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (email.trim()) setSent(true); }
  return <main className="site-shell">
    <nav className="nav wrap"><a className="brand" href="#top"><span className="brand-mark">◎</span><span>OCR<span className="brand-accent">genius</span></span></a><div className="nav-links"><a href="#product">Product</a><a href="#process">How it works</a><a href="#trust">Trust</a><a className="nav-cta" href="#pilot">Start a pilot <Arrow /></a></div><a className="mobile-cta" href="#pilot">↗</a></nav>
    <section className="hero wrap" id="top"><div className="hero-copy"><p className="eyebrow"><i /> DOCUMENT INTELLIGENCE FOR FREIGHT</p><h1>Paperwork in.<br /><em>Clarity out.</em></h1><p className="hero-lede">OCRgenius reads the freight documents that slow your team down, validates what matters, and sends clean data where the work already happens.</p><div className="hero-actions"><a className="button button-primary" href="#pilot">See it on your documents <Arrow /></a><a className="text-link" href="#process">How it works ↓</a></div><p className="hero-note">A free pilot is available for qualifying teams.</p></div><div className="document-stage" aria-label="Illustration of a processed freight document"><div className="stage-glow" /><div className="document-card"><div className="doc-meta"><span>CMR / 08—2471</span><span className="green">● processed</span></div><hr /><h3>CONSIGNMENT NOTE</h3><div className="doc-lines"><b /><b className="short" /><b className="medium" /><b /><b className="short" /></div><div className="doc-grid"><span>SHIPPER</span><strong>North Sea Foods BV</strong><span>WEIGHT</span><strong>14,820 kg</strong></div><div className="stamp">VALIDATED<br /><b>98.4%</b></div><div className="doc-footer">ROTTERDAM → HAMBURG <span>OCRGENIUS / 001</span></div></div><div className="confidence"><strong>98</strong><span>Confidence<small>all required fields</small></span></div><div className="scan"><i /> reading context</div></div></section>
    <div className="signal-strip wrap"><span>Made for the documents between a shipment and a system</span><div><b>BILLS OF LADING</b><b>CMR</b><b>INVOICES</b><b>PACKING LISTS</b><b>CUSTOMS FORMS</b></div></div>
    <section className="intro wrap" id="product"><p className="kicker">01 / THE PROBLEM</p><div><h2>Most documents<br /><em>are not templates.</em></h2><p>A classic OCR engine memorises where a field sits on a page. A real operation sees the same field move, disappear, get stamped over, or arrive as a photo from a phone. OCRgenius reads the document instead of guessing at its layout.</p></div></section>
    <section className="process" id="process"><div className="wrap"><div className="section-head"><div><p className="kicker">02 / THE FLOW</p><h2>From page to<br /><em>proof.</em></h2></div><p>One clear path from a document on someone's desk to data the operation can trust.</p></div><div className="steps">{steps.map(([num, title, copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}</div></div></section>
    <section className="benefits wrap" id="trust"><p className="kicker">03 / WHY IT HOLDS UP</p><div className="benefit-grid">{benefits.map(([label, title, copy]) => <article key={label}><strong>✳</strong><p className="gold">{label}</p><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="quote wrap"><span>“</span><blockquote>The goal is not to automate a checkbox. It is to give the person moving the shipment one less thing to doubt.</blockquote><hr /><p>OCRgenius / document intelligence for logistics</p></section>
    <section className="pilot wrap" id="pilot"><div><p className="eyebrow"><i /> READY WHEN YOU ARE</p><h2>Bring the document<br /><em>that keeps coming back.</em></h2><p>Tell us where your paperwork gets stuck. We'll show you what clearer could look like.</p></div><div className="pilot-card"><p className="kicker">REQUEST A PILOT</p>{sent ? <div className="success"><b>✓</b><h3>We have your note.</h3><p>We'll be in touch about a document pilot.</p></div> : <form onSubmit={submit}><label htmlFor="pilot-email">Work email</label><div><input id="pilot-email" type="email" required placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} /><button aria-label="Request a pilot"><Arrow /></button></div><p>Free pilot availability depends on document volume and workflow fit.</p></form>}</div></section>
    <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark">◎</span><span>OCR<span className="brand-accent">genius</span></span></a><p>Document intelligence for freight.</p><div><a href="https://ocrgenius.web.id/" target="_blank" rel="noreferrer">Website <Arrow /></a><a href="mailto:hello@ocr-genius.com">hello@ocr-genius.com</a></div><small>© 2026 OCRgenius</small></footer>
  </main>;
}
