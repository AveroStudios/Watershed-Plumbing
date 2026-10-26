
import { useState, type FormEvent } from 'react'
import { NavLink, Route, Routes, Link } from 'react-router-dom'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3, Droplets, MapPin, Menu, Phone, ShieldCheck, Wrench, X, MessageCircle, Star, Send, MoveUpRight } from 'lucide-react'
import { BUSINESS, ENQUIRY_ENDPOINT, GOOGLE_REVIEW_URL, services } from './config'

const wa = BUSINESS.whatsappUrl

function Brand() {
  return <Link to="/" className="brand" aria-label="Watershed Plumbing home"><span className="brand-mark"><Droplets size={23} strokeWidth={1.8}/></span><span className="brand-copy"><strong>WATERSHED</strong><small>PLUMBING · CAPE TOWN</small></span></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return <header className="site-header"><div className="nav-wrap"><Brand/><button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation"><NavLink onClick={close} to="/" end>Home</NavLink><NavLink onClick={close} to="/services">Services</NavLink><NavLink onClick={close} to="/about-contact">About & Contact</NavLink><a className="nav-phone" href={`tel:${BUSINESS.phoneHref}`}><Phone size={15}/> {BUSINESS.phoneDisplay}</a><Link onClick={close} className="button button-small button-blue" to="/about-contact#enquiry">Request a quote <ArrowRight size={15}/></Link></nav></div></header>
}

function WhatsAppFloat() {
  return <a className="whatsapp-float" href={wa} target="_blank" rel="noreferrer" aria-label="Chat with Watershed Plumbing on WhatsApp"><MessageCircle size={22}/><span>WhatsApp us</span></a>
}

function Footer() {
  return <footer className="footer"><div className="container footer-main"><div><Brand/><p className="footer-note">Practical plumbing enquiries, clear communication, and a direct line when you need assistance.</p></div><div><p className="footer-label">EXPLORE</p><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/about-contact">About & Contact</Link></div><div><p className="footer-label">GET IN TOUCH</p><a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phoneDisplay}</a><a href={wa} target="_blank" rel="noreferrer">WhatsApp Watershed</a><a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">Maitland, Cape Town <MoveUpRight size={13}/></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Watershed Plumbing</span><span>Built for clarity. Made to get things moving.</span></div></footer>
}

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return <div className={`photo-placeholder ${className}`} role="img" aria-label={label}><div className="placeholder-lines"/><div className="placeholder-label"><span className="placeholder-dot"/>{label}</div><span className="placeholder-index">W / 01</span></div>
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-intro"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function CTABand() {
  return <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">LET'S GET IT SORTED</span><h2>Need a plumber?<br/><em>Start with a conversation.</em></h2><p>Tell us what is happening and we’ll help you take the next step.</p></div><div className="cta-actions"><Link className="button button-white" to="/about-contact#enquiry">Request a quote <ArrowRight size={17}/></Link><a className="button button-outline-light" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp Watershed</a></div><div className="cta-watermark"><Droplets size={180} strokeWidth={0.55}/></div></div></section>
}

function Home() {
  return <>
    <main>
      <section className="hero"><div className="hero-grid"/><div className="container hero-layout"><div className="hero-copy"><div className="eyebrow eyebrow-light"><span className="live-dot"/> MAITLAND · CAPE TOWN</div><h1>Cape Town<br/>Plumbing. <em>Done right.</em></h1><p className="hero-lead">Reliable plumbing solutions for your property. Get in touch for professional assistance, clear communication, and service when you need it.</p><div className="hero-actions"><Link className="button button-blue" to="/about-contact#enquiry">Request a quote <ArrowRight size={17}/></Link><a className="button button-outline-light" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp Watershed</a></div><div className="hero-meta"><div><Clock3 size={17}/><span><strong>Available 24/7*</strong><small>*As listed; confirm call-out availability</small></span></div><div><MapPin size={17}/><span><strong>Cape Town, South Africa</strong><small>Based in Maitland</small></span></div></div></div><div className="hero-visual"><Placeholder label="[PLACEHOLDER IMAGE — HERO PLUMBING OR WATERSHED PROJECT PHOTO]" className="hero-photo"/><div className="hero-side-note"><span>01 / SERVICE</span><span>Dependable by design.</span></div><div className="hero-corner"><Droplets size={30}/><span>W</span></div></div></div><a className="scroll-cue" href="#services"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17}/></a></section>
      <section className="trust-strip"><div className="container trust-inner"><div className="trust-intro"><span className="eyebrow">A DIRECT LINE TO HELP</span><strong>Good service starts<br/>with a clear conversation.</strong></div><div className="trust-item"><span className="trust-icon"><Phone size={18}/></span><div><strong>Call directly</strong><small>{BUSINESS.phoneDisplay}</small></div></div><div className="trust-item"><span className="trust-icon"><MapPin size={18}/></span><div><strong>Locally based</strong><small>Maitland, Cape Town</small></div></div><div className="trust-item"><span className="trust-icon"><Clock3 size={18}/></span><div><strong>24-hour listing*</strong><small>Confirm availability</small></div></div></div></section>
      <section id="services" className="section section-services"><div className="container"><div className="section-heading-row"><SectionIntro eyebrow="WHAT WE CAN HELP WITH" title="The right fix starts with the right question." text="Service details are being confirmed with the Watershed team. The categories below are editable placeholders, not a confirmed service list."/><Link className="text-link" to="/services">Explore services <ArrowRight size={16}/></Link></div><div className="services-grid">{services.map((service) => <article className="service-card" key={service.icon}><div className="service-top"><span className="service-number">{service.icon}</span><Wrench size={21} strokeWidth={1.4}/></div><h3>{service.title}</h3><p>{service.description}</p><span className="service-status">OWNER CONFIRMATION NEEDED</span><Link to="/services" className="card-arrow" aria-label={`Learn about ${service.title}`}><ArrowUpRightIcon/></Link></article>)}</div><p className="micro-note">Potential services such as leak repairs, blocked drains, pipe repairs, geysers, installations and maintenance should be added only after owner approval.</p></div></section>
      <section className="section section-approach"><div className="container approach-layout"><div className="approach-visual"><Placeholder label="[PLACEHOLDER IMAGE — REAL PLUMBING DETAIL OR WORK IN PROGRESS]" className="approach-photo"/><div className="vertical-note">WATERSHED PLUMBING · CAPE TOWN</div></div><div className="approach-copy"><span className="eyebrow">A BETTER CUSTOMER EXPERIENCE</span><h2>Practical solutions.<br/><em>No unnecessary noise.</em></h2><p>When something goes wrong at your property, the next step should be straightforward. Watershed Plumbing is here to make it easier to explain the issue, ask the right questions and arrange the next step.</p><div className="principles"><div><span>01</span><p><strong>Clear communication</strong><small>Start with the details that matter.</small></p></div><div><span>02</span><p><strong>Practical thinking</strong><small>Focus on the issue and the available options.</small></p></div><div><span>03</span><p><strong>Professional approach</strong><small>Respect for your property and your time.</small></p></div></div><Link to="/about-contact" className="text-link">Meet Watershed <ArrowRight size={16}/></Link></div></div></section>
      <section className="section review-section"><div className="container review-layout"><div><span className="eyebrow">CUSTOMER FEEDBACK</span><h2>Trust is earned<br/><em>one job at a time.</em></h2><p>We want this space to reflect real customer experiences. Verified Google reviews can be connected here once the profile and direct review link are confirmed.</p>{GOOGLE_REVIEW_URL ? <a className="button button-blue" href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">Leave us a Google review <ArrowRight size={16}/></a> : <span className="setup-pill"><span/> Google review link to be configured</span>}</div><div className="review-panel"><div className="review-panel-top"><span className="google-g">G</span><span>GOOGLE BUSINESS PROFILE</span></div><div className="review-rating"><strong>5.0</strong><span className="stars"><Star/><Star/><Star/><Star/><Star/></span></div><p>Supplied listing: 5.0 from 4 reviews</p><div className="review-rule"/><div className="review-verify"><ShieldCheck size={18}/><span>Rating and review count must be verified before launch.</span></div><div className="review-quote-placeholder">Genuine customer reviews will appear here once connected.</div></div></div></section>
      <CTABand/>
    </main>
  </>
}

function ArrowUpRightIcon() {
  return <ArrowDownRight size={18} className="arrow-diagonal"/>
}

function Services() {
  const faqs = [
    ['Which plumbing services do you offer?', 'The service list is being confirmed. Contact Watershed directly with a description of your issue so the team can advise whether they can help.'],
    ['How do I request a quote?', 'Call or WhatsApp Watershed, or use the enquiry form on the Contact page. Include your suburb and a short description of the issue.'],
    ['Are emergency call-outs available?', 'The supplied business listing states 24-hour operation. Please call to confirm emergency call-out availability before relying on it.'],
    ['How much will the work cost?', 'No pricing has been supplied for this website. Share the details of your job and ask Watershed for a quote.'],
  ]

  const [expanded, setExpanded] = useState<number | null>(0)

  return <main className="inner-page"><section className="page-hero"><div className="container page-hero-layout"><div><span className="eyebrow eyebrow-light">SERVICES / 02</span><h1>Plumbing help,<br/><em>without the runaround.</em></h1><p>Tell us what is happening at your property. We’ll start with the details and help establish the right next step.</p><div className="hero-actions"><Link className="button button-blue" to="/about-contact#enquiry">Request a quote <ArrowRight size={17}/></Link><a className="button button-outline-light" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us</a></div></div><Placeholder label="[PLACEHOLDER IMAGE — PLUMBING SERVICE PHOTO]" className="page-hero-photo"/></div></section>
    <section className="section"><div className="container"><SectionIntro eyebrow="SERVICE DIRECTORY" title="A clear place to start." text="These editable service entries are placeholders. Confirm each service with the owner before publishing, then replace the sample descriptions with accurate details."/><div className="service-list">{services.map((s) => <article className="service-row" key={s.icon}><span className="service-number">{s.icon}</span><div><h3>{s.title}</h3><p>{s.description}</p><span className="service-status">PENDING OWNER CONFIRMATION</span></div><Placeholder label="[PLACEHOLDER IMAGE — PLUMBING SERVICE PHOTO]" className="service-row-photo"/><Link className="text-link" to="/about-contact#enquiry">Ask about this <ArrowRight size={15}/></Link></article>)}</div><div className="service-note"><ShieldCheck size={20}/><p><strong>Service list in progress</strong><br/>Potential categories may include leak repairs, blocked drains, pipe repairs, geysers, installations and maintenance. They are not advertised as confirmed services until approved.</p></div></div></section>
    <section className="section faq-section"><div className="container faq-layout"><div><span className="eyebrow">GOOD TO KNOW</span><h2>Questions, answered<br/><em>as clearly as possible.</em></h2><p>Need a more specific answer? Contact the team directly.</p><a className="text-link" href={`tel:${BUSINESS.phoneHref}`}>Call {BUSINESS.phoneDisplay} <ArrowRight size={16}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${expanded===i?'expanded':''}`} key={q}><button aria-expanded={expanded===i} onClick={()=>setExpanded(expanded===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button>{expanded===i && <p>{a}</p>}</div>)}</div></div></section><CTABand/></main>
}

function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'|'pending'>('idle')
  const [message, setMessage] = useState('')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!ENQUIRY_ENDPOINT) {
      setStatus('pending')
      setMessage('The enquiry form is not connected yet. No enquiry has been sent. Please call or WhatsApp Watershed directly.')
      return
    }

    const form = e.currentTarget
    setStatus('sending')
    setMessage('')

    try {
      const data = Object.fromEntries(new FormData(form).entries())
      const response = await fetch(ENQUIRY_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')
      setMessage('Your enquiry has been submitted. Thank you — Watershed Plumbing will follow up using the contact details you provided.')
      form.reset()
    } catch {
      setStatus('error')
      setMessage('We could not submit your enquiry. Please call or WhatsApp Watershed directly instead.')
    }
  }

  return <form className="enquiry-form" onSubmit={submit} id="enquiry">
    <div className="form-heading"><span className="eyebrow">ENQUIRY FORM</span><h3>Tell us what you need.</h3><p>Share a few details so your enquiry can get off to a clear start.</p></div>
    <div className="form-grid"><label>Full name <input name="name" autoComplete="name" required placeholder="Your full name"/></label><label>Phone number <input name="phone" type="tel" autoComplete="tel" required placeholder="+27 ..."/></label><label>Email address <input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>Service required <select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>General plumbing enquiry</option><option>Leak or water issue</option><option>Drainage issue</option><option>Installation or maintenance</option><option>Other / not sure</option></select><small>Options are for routing your enquiry, not a guarantee that a service is offered.</small></label><label className="full-field">Property suburb or address <input name="location" autoComplete="street-address" required placeholder="Suburb or property address"/></label><label>Urgency or preferred date <select name="urgency" defaultValue="" required><option value="" disabled>Select one</option><option>Urgent — please call me</option><option>Within the next few days</option><option>Preferred date to be arranged</option><option>General enquiry</option></select></label><label>Best way to contact you <select name="contactPreference" defaultValue="Phone"><option>Phone</option><option>WhatsApp</option><option>Email</option></select></label><label className="full-field">Describe the plumbing issue <textarea name="description" required rows={4} placeholder="What is happening? Include any useful details."/></label></div>
    <label className="consent"><input type="checkbox" required/> <span>I agree that Watershed Plumbing may use these details to respond to my enquiry.</span></label>
    <button className="button button-blue form-submit" type="submit" disabled={status==='sending'}>{status==='sending'?'Sending…':'Send enquiry'} <Send size={16}/></button>
    {message && <div className={`form-message ${status}`} role="status" aria-live="polite">{status==='success'&&<Check size={18}/>}<span>{message}</span></div>}
    <p className="form-privacy">Please do not include payment details or other sensitive information. Enquiries are only delivered once the form endpoint is configured.</p>
  </form>
}

function AboutContact() {
  return <main className="inner-page"><section className="page-hero"><div className="container page-hero-layout"><div><span className="eyebrow eyebrow-light">ABOUT & CONTACT / 03</span><h1>Local roots.<br/><em>Direct contact.</em></h1><p>Watershed Plumbing is based in Maitland, Cape Town. Get in touch to discuss your plumbing enquiry or ask about the next step.</p><div className="hero-actions"><a className="button button-blue" href={`tel:${BUSINESS.phoneHref}`}><Phone size={17}/> Call Watershed</a><a className="button button-outline-light" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us</a></div></div><Placeholder label="[PLACEHOLDER IMAGE — WATERSHED TEAM OR COMPANY PHOTO]" className="page-hero-photo"/></div></section>
    <section className="section about-section"><div className="container about-layout"><div><span className="eyebrow">ABOUT WATERSHED</span><h2>A plumbing business<br/><em>based in Cape Town.</em></h2><p>Watershed Plumbing is located at 7 Lawrence Road, Maitland. This section is intentionally kept factual while the owner’s story, team details and service approach are confirmed.</p><div className="story-edit"><span className="story-edit-label">OWNER STORY — TO COMPLETE</span><p>Add a short introduction from the owner: what the business focuses on, the kinds of customers it serves, and what customers can expect when they get in touch.</p></div></div><div className="about-image-wrap"><Placeholder label="[PLACEHOLDER IMAGE — REAL TEAM OR COMPANY PHOTO]" className="about-photo"/><div className="about-image-caption">REAL PEOPLE. REAL WORK. REAL PHOTOGRAPHY.</div></div></div></section>
    <section className="section contact-section" id="contact"><div className="container contact-layout"><div className="contact-details"><span className="eyebrow">CONTACT DETAILS</span><h2>Let's talk<br/><em>through the problem.</em></h2><p>Choose whichever contact method is easiest. For urgent issues, calling is the most direct way to reach the business.</p><a className="contact-line" href={`tel:${BUSINESS.phoneHref}`}><span className="contact-line-icon"><Phone size={19}/></span><span><small>CALL WATERSHED</small><strong>{BUSINESS.phoneDisplay}</strong></span><ArrowRight size={18}/></a><a className="contact-line" href={wa} target="_blank" rel="noreferrer"><span className="contact-line-icon"><MessageCircle size={19}/></span><span><small>WHATSAPP</small><strong>Start a conversation</strong></span><ArrowRight size={18}/></a><a className="contact-line" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer"><span className="contact-line-icon"><MapPin size={19}/></span><span><small>BUSINESS ADDRESS</small><strong>{BUSINESS.address}</strong></span><MoveUpRight size={18}/></a><div className="hours-box"><Clock3 size={19}/><div><strong>Operating hours</strong><p>Listed as open 24 hours. Confirm emergency call-out availability directly before relying on it.</p></div></div></div><div className="form-column"><ContactForm/></div></div></section>
    <CTABand/></main>
}

function NotFound() {
  return <main className="not-found container"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Looks like this page<br/><em>has moved on.</em></h1><Link to="/" className="button button-blue">Back to home <ArrowRight size={16}/></Link></main>
}

export default function App() {
  return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/about-contact" element={<AboutContact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/><WhatsAppFloat/></>
}
