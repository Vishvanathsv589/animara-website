import React, { useMemo, useState } from 'react';
import { Routes, Route, NavLink, Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Menu, X, PawPrint, Heart, MapPin, ShieldCheck, HandHeart, Search, Filter, Plus, CheckCircle2, AlertCircle, Instagram, Facebook, Mail, Phone, ChevronDown, Activity, Users, Stethoscope, Package, Send, Sparkles } from 'lucide-react';
import { needs, ngos, stories } from './data';

const img = (url, alt='', cls='') => <img className={cls} src={url} alt={alt} loading="lazy" />;
function Header(){
 const [open,setOpen]=useState(false); const loc=useLocation();
 React.useEffect(()=>setOpen(false),[loc.pathname]);
 const links=[['What we do','/about'],['Current needs','/needs'],['Find an NGO','/ngos'],['Rescue report','/report']];
 return <header className="site-header"><div className="nav-wrap">
  <Link to="/" className="brand"><span className="brand-mark"><PawPrint size={21}/></span><span>animara<span className="brand-dot">.</span></span></Link>
  <nav className={open?'nav-links open':'nav-links'}>{links.map(([t,p])=><NavLink key={p} to={p}>{t}</NavLink>)}</nav>
  <div className="nav-actions"><Link className="nav-donate" to="/donate">Make a difference <ArrowUpRight size={15}/></Link><button className="menu-toggle" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
 </div></header>
}
function Footer(){return <footer className="footer"><div className="footer-top"><div><Link to="/" className="brand footer-brand"><span className="brand-mark"><PawPrint size={21}/></span><span>animara<span className="brand-dot">.</span></span></Link><p className="footer-note">A little care goes a long way.<br/>Let’s make sure it gets there.</p></div><div className="footer-col"><span className="eyebrow">EXPLORE</span><Link to="/needs">Current needs</Link><Link to="/ngos">NGO directory</Link><Link to="/report">Report an animal</Link><Link to="/about">Our story</Link></div><div className="footer-col"><span className="eyebrow">GET INVOLVED</span><Link to="/donate">Donate to a need</Link><Link to="/ngos">Partner with us</Link><Link to="/contact?type=volunteer">Volunteer</Link><Link to="/contact?type=contact">Contact</Link></div><div className="footer-col footer-contact"><span className="eyebrow">SAY HELLO</span><a href="mailto:hello@animara.org"><Mail size={15}/> hello@animara.org</a><span><MapPin size={15}/> Building a kinder India</span><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Facebook/></a></div></div></div><div className="footer-bottom"><span>© 2026 Animara. Made with care.</span><span>For every paw, a helping hand. <Heart size={13} fill="currentColor"/></span></div></footer>}
function ScrollToTop(){
 const {pathname,search}=useLocation();
 React.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'auto'});},[pathname,search]);
 return null;
}
function Shell({children}){return <><Header/><main>{children}</main><Footer/></>}
function SectionHead({kicker,title,copy,link,to}){return <div className="section-head"><div><span className="eyebrow">{kicker}</span><h2>{title}</h2>{copy&&<p className="section-copy">{copy}</p>}</div>{link&&<Link className="text-link" to={to}>{link}<ArrowUpRight size={16}/></Link>}</div>}
function NeedCard({item}){return <article className="need-card"><div className="need-card-image">{img(item.image,item.title,'need-image')}<span className={'need-image-tag '+(item.urgency==='Urgent'?'is-urgent':'')}>{item.urgency}</span></div><div className="need-content"><div className="card-meta"><span className="pill">{item.category}</span><span className="small-muted">{item.location}</span></div><span className="small-muted need-ngo">{item.ngo}</span><h3>{item.title}</h3><p>{item.description}</p><div className="need-progress"><div className="progress-label"><span>Raised so far</span><strong>{item.raised}%</strong></div><div className="progress-track" role="progressbar" aria-label={'Fundraising progress for '+item.title} aria-valuemin="0" aria-valuemax="100" aria-valuenow={item.raised}><span style={{width:item.raised+'%'}}/></div><div className="need-bottom"><strong>{item.amount} <small>needed</small></strong><Link to={`/donate?need=${item.id}`} className="round-arrow" aria-label={'Contribute to '+item.title}><ArrowUpRight size={18}/></Link></div></div></div></article>}
function Home() {
  return (
    <Shell>
      <section className="hero hero-refined">
        <div className="hero-copy">
          <span className="eyebrow"><span className="live-dot" /> A BETTER WAY TO SHOW UP</span>
          <h1>Good things<br />happen when<br /><em>we show up.</em></h1>
          <p className="hero-lede">A bridge between kind people and the animal rescuers who need them. Find a need, report a rescue, or help care reach the right place.</p>
          <div className="hero-actions">
            <Link to="/needs" className="button button-dark">See what's needed <ArrowUpRight size={17} /></Link>
            <Link to="/report" className="button button-outline">Report an animal <ArrowUpRight size={17} /></Link>
          </div>
          <div className="hero-footnote">
            <div className="avatar-stack"><span>🐾</span><span>💚</span><span>🤝</span></div>
            <span>For the ones who can't ask.<br /><b>And the people who answer.</b></span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><img src="https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1500&q=90" alt="Two rescued dogs looking towards the camera" /></div>
          <div className="hero-sticker"><span>CARE</span><Heart size={22} fill="currentColor" /><span>CONNECT</span></div>
          <div className="hero-note"><span className="note-icon"><PawPrint size={17} /></span><span><b>Every report matters.</b><small>Every helping hand counts.</small></span></div>
          <span className="vertical-note">PEOPLE + PURPOSE + PAWS</span>
        </div>
      </section>

      <section className="ticker"><div className="ticker-track">
        {Array.from({ length: 4 }, (_, i) => <span key={i}>CARE IS A VERB <b>✳</b> SMALL ACTS. REAL IMPACT. <b>✳</b> EVERY PAW MATTERS. <b>✳</b></span>)}
      </div></section>

      <section className="intro-section section-pad">
        <div className="intro-number">01 / THE WHY</div>
        <div className="intro-main">
          <h2>There are people<br />who want to help.<br /><em>Let's connect them.</em></h2>
          <div className="intro-aside">
            <p>Across our streets, animals need food, medical attention and safe rescue. At the same time, people are ready to help—but don't always know where to begin.</p>
            <p>Animara makes that first step clearer. We bring verified needs, local NGOs and willing communities into one place.</p>
            <Link className="text-link" to="/about">Get to know Animara <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1500&q=85" alt="Two dogs spending time together" loading="lazy" />
          <span className="image-caption">A kinder world is a team effort.</span>
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-top"><span className="eyebrow">02 / HOW WE HELP</span><span className="feature-index">ONE PLATFORM. MANY WAYS TO CARE.</span></div>
        <div className="feature-grid">
          <Link to="/needs" className="feature-item"><span className="feature-icon"><Package /></span><span className="feature-num">01</span><h3>See what's<br />needed.</h3><p>Find specific requirements shared by animal welfare teams.</p><span className="feature-arrow"><ArrowUpRight /></span></Link>
          <Link to="/ngos" className="feature-item"><span className="feature-icon"><Users /></span><span className="feature-num">02</span><h3>Meet the<br />people helping.</h3><p>Discover animal welfare organisations and their work.</p><span className="feature-arrow"><ArrowUpRight /></span></Link>
          <Link to="/donate" className="feature-item"><span className="feature-icon"><HandHeart /></span><span className="feature-num">03</span><h3>Give with<br />purpose.</h3><p>Contribute towards specific requirements, not vague requests.</p><span className="feature-arrow"><ArrowUpRight /></span></Link>
          <Link to="/report" className="feature-item"><span className="feature-icon"><Activity /></span><span className="feature-num">04</span><h3>Be the first<br />to notice.</h3><p>Report an animal in need so the right team can follow up.</p><span className="feature-arrow"><ArrowUpRight /></span></Link>
        </div>
      </section>

      <section className="impact-section section-pad">
        <div className="impact-heading">
          <span className="eyebrow">03 / WHY ANIMARA MATTERS</span>
          <h2>Good intentions.<br /><em>Connected action.</em></h2>
          <p>Four gaps in animal welfare coordination. One platform designed to bring people, information and support together.</p>
        </div>
        <div className="impact-grid">
          <div className="impact-card"><span className="impact-number">01</span><span className="impact-icon"><Package /></span><h3>Visible needs</h3><p>Help NGOs communicate what they need, when they need it.</p></div>
          <div className="impact-card"><span className="impact-number">02</span><span className="impact-icon"><HandHeart /></span><h3>Purposeful giving</h3><p>Help people understand exactly what their contributions support.</p></div>
          <div className="impact-card"><span className="impact-number">03</span><span className="impact-icon"><MapPin /></span><h3>Organised reports</h3><p>Make animal sightings easier to document and follow up.</p></div>
          <div className="impact-card"><span className="impact-number">04</span><span className="impact-icon"><Users /></span><h3>Connected response</h3><p>Improve coordination between NGOs, volunteers and communities.</p></div>
        </div>
      </section>

      <section className="needs-section section-pad">
        <SectionHead kicker="04 / RIGHT NOW" title={<>A little help goes<br /><em>a long way.</em></>} copy="Explore example requirements and see how Animara will connect people with specific needs. These entries are demonstration content, not live verified requests." link="Explore all needs" to="/needs" />
        <div className="needs-grid">{needs.map(n => <NeedCard key={n.id} item={n} />)}</div>
      </section>

      <section className="rescue-banner">
        <div className="rescue-image"><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1400&q=85" alt="Dog receiving care" loading="lazy" /></div>
        <div className="rescue-copy">
          <span className="eyebrow">05 / SEE SOMETHING? SAY SOMETHING.</span>
          <h2>One report can<br />start a <em>rescue.</em></h2>
          <p>Spotted an animal who needs help? Share what you saw. A structured report helps a nearby NGO understand the situation and follow up.</p>
          <Link to="/report" className="button button-light">Make a rescue report <ArrowUpRight size={17} /></Link>
          <span className="rescue-small">If an animal is in immediate danger, contact local emergency or animal-rescue services directly.</span>
        </div>
      </section>

      <section className="ngo-section section-pad">
        <div className="ngo-photo"><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1300&q=85" alt="Dog outdoors" loading="lazy" /><span className="photo-tag">LOCAL KNOWLEDGE. REAL CARE.</span></div>
        <div className="ngo-copy">
          <span className="eyebrow">06 / THE PEOPLE BEHIND THE PAWS</span>
          <h2>Good work is<br />already happening.<br /><em>Let's make it visible.</em></h2>
          <p>NGOs and rescue groups are doing the hard work every day. Animara helps people find them, understand their active cases and support what they actually need.</p>
          <Link className="button button-dark" to="/ngos">Find an organisation <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="stories-section section-pad">
        <SectionHead kicker="07 / NOTES FROM THE FIELD" title={<>Care has a story.<br /><em>Be part of it.</em></>} link="More about us" to="/about" />
        <div className="stories-grid">{stories.map(s => (
          <article className="story-card" key={s.title}>
            <img src={s.image} alt={s.title} loading="lazy" />
            <div className="story-body"><span className="eyebrow">{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p><Link className="text-link" to="/about">Read our approach <ArrowUpRight size={15} /></Link></div>
          </article>
        ))}</div>
      </section>

      <section className="final-cta">
        <span className="eyebrow">THE NEXT GOOD THING STARTS HERE</span>
        <h2>There's room for<br /><em>everyone who cares.</em></h2>
        <div className="cta-actions">
          <Link to="/needs" className="button button-dark">Find a way to help <ArrowUpRight size={17} /></Link>
          <Link to="/report" className="button button-outline">Report an animal <ArrowUpRight size={17} /></Link>
        </div>
        <PawPrint className="cta-paw" size={110} />
      </section>
    </Shell>
  );
}
function PageHero({label,title,desc,action,to,photo}){return <section className="page-hero"><div className="page-hero-copy"><span className="eyebrow">{label}</span><h1>{title}</h1><p>{desc}</p>{action&&<Link className="button button-dark" to={to}>{action}<ArrowUpRight size={17}/></Link>}</div>{photo&&<div className="page-hero-photo">{img(photo,'Animal welfare')}</div>}</section>}
function NeedsPage(){
 const [filter,setFilter]=useState('All');
 const [query,setQuery]=useState('');
 const categories=['All','Food','Medicine','Rescue'];
 const filtered=needs.filter(n=>(filter==='All'||n.category===filter)&&(n.title+' '+n.ngo+' '+n.location+' '+n.description).toLowerCase().includes(query.trim().toLowerCase()));
 const resetFilters=()=>{setFilter('All');setQuery('');};
 return <Shell>
  <div className="needs-page">
   <PageHero
    label="THE CURRENT NEEDS BOARD"
    title={<>Help with what’s<br/><em>needed right now.</em></>}
    desc="Explore requests shared by animal-welfare teams. Find a practical way to help and see what each contribution is intended to support."
    photo="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85"
   />
   <section className="listing-section section-pad">
    <div className="needs-toolbar">
     <div className="needs-toolbar-top">
      <div className="filter-heading"><span className="eyebrow">BROWSE REQUESTS</span><span className="results-count">{filtered.length} {filtered.length===1?'request':'requests'}</span></div>
      <label className="search-box needs-search">
       <Search size={17}/>
       <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by need, NGO or location" aria-label="Search needs, NGOs or locations"/>
       {query&&<button type="button" className="clear-search" onClick={()=>setQuery('')} aria-label="Clear search"><X size={15}/></button>}
      </label>
     </div>
     <div className="needs-filter-row">
      <div className="filter-tabs" role="group" aria-label="Filter requests by category">
       {categories.map(x=><button type="button" key={x} onClick={()=>setFilter(x)} className={filter===x?'active':''} aria-pressed={filter===x}>{x}</button>)}
      </div>
      {(filter!=='All'||query)&&<button type="button" className="reset-filters" onClick={resetFilters}>Clear filters <X size={13}/></button>}
     </div>
    </div>
    <p className="demo-notice"><AlertCircle size={16}/> Demonstration content — these are sample requests, not live or independently verified NGO listings.</p>
    {filtered.length>0
      ? <div className="needs-grid">{filtered.map(n=><NeedCard key={n.id} item={n}/>)}</div>
      : <div className="needs-empty"><span className="empty-icon"><Search size={22}/></span><h3>No matching requests</h3><p>Try a different keyword or browse all categories.</p><button type="button" className="button button-dark" onClick={resetFilters}>Show all requests <ArrowUpRight size={16}/></button></div>
    }
   </section>
   <section className="inline-cta needs-inline-cta">
    <span className="eyebrow">FOR ANIMAL-WELFARE ORGANISATIONS</span>
    <h2>Are you an NGO with a need to share?</h2>
    <p>We’re building a network of animal-welfare organisations. Tell us about your work and the support you need.</p>
    <Link to="/contact" className="text-link">Connect with Animara <ArrowUpRight size={16}/></Link>
   </section>
  </div>
 </Shell>
}
function NGOsPage(){
 const [q,setQ]=useState('');
 const [city,setCity]=useState('All locations');
 const [service,setService]=useState('All services');
 const cityOptions=useMemo(()=>[...new Set(ngos.map(n=>n.city))].sort(),[]);
 const serviceOptions=useMemo(()=>[...new Set(ngos.flatMap(n=>n.focus.split('·').map(item=>item.trim())))].sort(),[]);
 const filtered=useMemo(()=>ngos.filter(n=>{
  const searchText=[n.name,n.city,n.state,n.focus,n.description].join(' ').toLowerCase();
  const matchesSearch=searchText.includes(q.trim().toLowerCase());
  const matchesCity=city==='All locations'||n.city===city;
  const matchesService=service==='All services'||n.focus.toLowerCase().includes(service.toLowerCase());
  return matchesSearch&&matchesCity&&matchesService;
 }),[q,city,service]);
 const hasFilters=Boolean(q.trim())||city!=='All locations'||service!=='All services';
 const clearFilters=()=>{setQ('');setCity('All locations');setService('All services');};
 return <Shell>
  <PageHero label="THE NGO DIRECTORY" title={<>Meet the people<br/>making <em>care happen.</em></>} desc="Find animal welfare organisations, understand their focus and discover the work happening in your community." photo="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85"/>
  <section className="listing-section section-pad ngo-directory-section">
   <div className="ngo-directory-intro">
    <div><span className="eyebrow">BROWSE THE NETWORK</span><p>Find a team by name, location or the kind of work they do.</p></div>
    <span className="ngo-result-count"><strong>{filtered.length}</strong> {filtered.length===1?'organisation':'organisations'} shown</span>
   </div>
   <div className="ngo-directory-toolbar">
    <label className="search-box ngo-search"><Search size={17}/><input aria-label="Search organisations" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by organisation, location or service"/>{q&&<button type="button" className="search-clear" onClick={()=>setQ('')} aria-label="Clear search"><X size={15}/></button>}</label>
    <div className="ngo-filter-group">
     <label className="ngo-filter"><span>LOCATION</span><select className="select-box" aria-label="Filter by location" value={city} onChange={e=>setCity(e.target.value)}><option>All locations</option>{cityOptions.map(c=><option key={c}>{c}</option>)}</select></label>
     <label className="ngo-filter"><span>AREA OF WORK</span><select className="select-box" aria-label="Filter by service" value={service} onChange={e=>setService(e.target.value)}><option>All services</option>{serviceOptions.map(item=><option key={item}>{item}</option>)}</select></label>
    </div>
   </div>
   <div className="ngo-active-filters">
    <span className="eyebrow">DIRECTORY RESULTS</span>
    {hasFilters&&<button type="button" onClick={clearFilters}>Clear all filters <X size={13}/></button>}
   </div>
   <p className="demo-notice"><ShieldCheck size={16}/> Sample directory entries for layout demonstration. Verification status must be confirmed before launch.</p>
   {filtered.length>0?<div className="ngo-grid ngo-grid-refined">{filtered.map((n,index)=><article className="ngo-card ngo-card-refined" key={n.id}>
    <div className="ngo-card-image">{img(n.image,n.name)}<span className="ngo-image-index">0{index+1}</span></div>
    <div className="ngo-card-body">
     <div className="ngo-card-title"><h3>{n.name}</h3><span className="verified"><ShieldCheck size={14}/> Listed</span></div>
     <span className="ngo-location"><MapPin size={14}/>{n.city}, {n.state}</span>
     <p>{n.description}</p>
     <div className="ngo-service-tags">{n.focus.split('·').map(tag=><span key={tag}>{tag.trim()}</span>)}</div>
     <div className="ngo-card-foot"><span>Illustrative activity</span><b>{n.cases} active cases*</b></div>
     <Link to={`/ngos/${n.id}`} className="text-link">View organisation <ArrowUpRight size={15}/></Link>
    </div>
   </article>)}</div>:<div className="ngo-empty-state"><span className="ngo-empty-icon"><Search size={22}/></span><h3>No organisations found.</h3><p>Try another name, location or area of work, or clear your filters to see the full sample directory.</p><button className="button button-dark" type="button" onClick={clearFilters}>Clear filters <ArrowUpRight size={15}/></button></div>}
   <p className="fine-print">*Illustrative case counts. Confirmed live case information will be supplied by participating organisations.</p>
  </section>
  <section className="inline-cta ngo-directory-cta"><span className="eyebrow">ARE YOU PART OF AN ANIMAL-WELFARE TEAM?</span><h2>Good work deserves<br/><em>to be found.</em></h2><p>Tell us about your organisation and the work happening in your community.</p><Link to="/contact" className="button button-dark">Connect with Animara <ArrowUpRight size={16}/></Link></section>
 </Shell>
}
function NGOProfilePage(){
 const {id}=useParams();
 const organisation=ngos.find(item=>String(item.id)===String(id));
 if(!organisation)return <Shell><div className="not-found"><span className="eyebrow">DIRECTORY / NOT FOUND</span><h1>This organisation<br/><em>isn’t listed.</em></h1><Link className="button button-dark" to="/ngos">Back to directory <ArrowUpRight size={16}/></Link></div></Shell>;
 const relatedNeeds=needs.filter(item=>item.ngo.toLowerCase().startsWith(organisation.name.toLowerCase()));
 return <Shell>
  <PageHero label="NGO DIRECTORY / ORGANISATION PROFILE" title={<>{organisation.name}<br/><em>doing the work.</em></>} desc={`${organisation.city}, ${organisation.state} · ${organisation.focus}`} photo={organisation.image}/>
  <section className="ngo-profile-layout section-pad">
   <div className="ngo-profile-main">
    <span className="eyebrow">ABOUT THE ORGANISATION</span>
    <h2>Care, close<br/><em>to the community.</em></h2>
    <p>{organisation.description}</p>
    <div className="ngo-profile-facts"><div><span>LOCATION</span><strong>{organisation.city}, {organisation.state}</strong></div><div><span>FOCUS AREAS</span><strong>{organisation.focus}</strong></div><div><span>ILLUSTRATIVE ACTIVITY</span><strong>{organisation.cases} active cases*</strong></div></div>
    <p className="fine-print">This is a sample organisation profile. Listing and verification details must be confirmed directly before launch.</p>
   </div>
   <aside className="ngo-profile-aside">
    <span className="eyebrow">CONNECT WITH THE TEAM</span>
    <h3>Want to help<br/>their work?</h3>
    <p>Contact Animara to express interest in connecting with this organisation. We’ll need a verified contact process before live introductions can be made.</p>
    <Link className="button button-dark button-wide" to={`/contact?ngo=${organisation.id}`}>Enquire about this organisation <ArrowUpRight size={16}/></Link>
    <Link className="text-link" to="/ngos">Back to all organisations <ArrowRight size={15}/></Link>
   </aside>
  </section>
  <section className="ngo-profile-needs section-pad">
   <div className="section-head"><div><span className="eyebrow">CURRENT NEEDS</span><h2>Support connected<br/><em>to real requirements.</em></h2></div><Link className="text-link" to="/needs">Browse all needs <ArrowUpRight size={15}/></Link></div>
   {relatedNeeds.length?<div className="needs-grid">{relatedNeeds.map(item=><NeedCard key={item.id} item={item}/>)}</div>:<div className="ngo-profile-no-needs"><p>No sample requests are currently associated with this organisation.</p><Link className="text-link" to="/needs">Explore current needs <ArrowUpRight size={15}/></Link></div>}
  </section>
 </Shell>
}

function ReportPage(){
 const [stage,setStage]=useState('edit');
 const [reference,setReference]=useState('');
 const [locationStatus,setLocationStatus]=useState('');
 const [photoStatus,setPhotoStatus]=useState('');
 const [photos,setPhotos]=useState([]);
 const [form,setForm]=useState({animal:'Dog',condition:'Injured',location:'',landmark:'',details:'',name:'',phone:'',consent:false});
 const update=e=>setForm(current=>({...current,[e.target.name]:e.target.type==='checkbox'?e.target.checked:e.target.value}));
 const addPhotos=e=>{
  const selected=Array.from(e.target.files||[]);
  const allowedTypes=['image/jpeg','image/png','image/webp'];
  const maxBytes=5*1024*1024;
  const remaining=Math.max(0,3-photos.length);
  const accepted=[];
  const issues=[];
  selected.forEach(file=>{
   if(!allowedTypes.includes(file.type)){issues.push(`${file.name}: use JPG, PNG or WEBP.`);return;}
   if(file.size>maxBytes){issues.push(`${file.name}: file must be 5 MB or smaller.`);return;}
   if(accepted.length>=remaining){issues.push('You can attach up to 3 photos.');return;}
   accepted.push(file);
  });
  if(accepted.length){
   setPhotos(current=>[...current,...accepted.map(file=>({file,url:URL.createObjectURL(file),id:`${file.name}-${file.lastModified}-${Math.random()}`}))]);
  }
  setPhotoStatus(issues.length?issues.join(' '):(accepted.length?`${accepted.length} photo${accepted.length===1?'':'s'} added.`:''));
  e.target.value='';
 };
 const removePhoto=id=>setPhotos(current=>{const item=current.find(photo=>photo.id===id);if(item)URL.revokeObjectURL(item.url);return current.filter(photo=>photo.id!==id)});
 const useCurrentLocation=()=>{
  if(!navigator.geolocation){setLocationStatus('Location is not available in this browser. Enter the area manually.');return;}
  setLocationStatus('Requesting your location…');
  navigator.geolocation.getCurrentPosition(position=>{
   const {latitude,longitude}=position.coords;
   setForm(current=>({...current,location:`GPS coordinates: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`}));
   setLocationStatus('GPS coordinates added. Please add or confirm a recognisable area or address in the field before submitting.');
  },()=>setLocationStatus('We could not access your location. Please enter the area manually.'),{enableHighAccuracy:true,timeout:10000});
 };
 const review=e=>{e.preventDefault();setStage('review');window.scrollTo({top:0,behavior:'smooth'});};
 const confirmReport=()=>{const id=`ANI-${new Date().getFullYear()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;setReference(id);setStage('success');window.scrollTo({top:0,behavior:'smooth'});};
 const reset=()=>{photos.forEach(photo=>URL.revokeObjectURL(photo.url));setPhotos([]);setPhotoStatus('');setForm({animal:'Dog',condition:'Injured',location:'',landmark:'',details:'',name:'',phone:'',consent:false});setReference('');setLocationStatus('');setStage('edit');};
 return <Shell>
  <PageHero label="RESCUE REPORT" title={<>You noticed.<br/><em>That matters.</em></>} desc="Share a clear sighting so an animal welfare team can understand what’s happening and decide how to respond." photo="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85"/>
  <section className="form-layout section-pad rescue-form-layout">
   <div className="form-aside">
    <span className="eyebrow">HELP US UNDERSTAND</span>
    <h2>Every detail<br/>helps the right<br/><em>people respond.</em></h2>
    <p>Share what you know. Please don’t put yourself or the animal at risk to collect information.</p>
    <div className="safety-note"><ShieldCheck/><div><b>Your safety comes first.</b><span>If there is immediate danger, contact local emergency or animal-rescue services directly. Animara is not an emergency dispatch service.</span></div></div>
    <div className="steps-mini"><span>01 — Tell us what you saw</span><span>02 — Add the location</span><span>03 — Review your report</span></div>
   </div>
   <div className="form-card rescue-form-card">
    {stage==='success'?<div className="success-state rescue-success">
      <CheckCircle2 size={48}/><span className="eyebrow">DEMO REPORT CREATED</span>
      <h2>Thank you for<br/><em>looking out.</em></h2>
      <p>Your report has been recorded in this demo session. It has <strong>not</strong> been sent to an NGO or emergency service.</p>
      <div className="report-reference"><span>DEMO REFERENCE</span><strong>{reference}</strong></div>
      <p className="form-disclaimer">Keep this reference for the current demonstration. A live platform would need a secure backend and NGO routing before reports could be delivered.</p>
      <button className="button button-dark" type="button" onClick={reset}>Submit another report <ArrowUpRight size={16}/></button>
     </div>:stage==='review'?<div className="report-review">
      <div className="form-heading"><span className="eyebrow">03 / REVIEW YOUR REPORT</span><span className="required-note">Check before confirming</span></div>
      <h2>Does everything<br/>look <em>right?</em></h2>
      <p className="review-intro">Review the details below. You can go back and make changes before creating this demo report.</p>
      <div className="review-group"><span>ANIMAL & SITUATION</span><strong>{form.animal} · {form.condition}</strong><p>{form.details}</p></div>
      <div className="review-group"><span>LOCATION</span><strong>{form.location}</strong>{form.location.startsWith('GPS coordinates:')&&<a className="text-link" href={`https://www.google.com/maps?q=${encodeURIComponent(form.location.replace('GPS coordinates: ',''))}`} target="_blank" rel="noreferrer">Check selected map pin <ArrowUpRight size={14}/></a>}{form.landmark&&<p>Nearby landmark: {form.landmark}</p>}</div>
      <div className="review-group"><span>CONTACT</span><strong>{form.name}</strong><p>{form.phone}</p></div>
      {photos.length>0&&<div className="review-group"><span>ATTACHED PHOTOS</span><div className="review-photo-row">{photos.map(photo=><img key={photo.id} src={photo.url} alt="Uploaded animal report"/>)}</div></div>}
      <div className="review-actions"><button className="button button-outline" type="button" onClick={()=>setStage('edit')}>Back to edit</button><button className="button button-dark" type="button" onClick={confirmReport}>Confirm demo report <Send size={16}/></button></div>
      <p className="form-disclaimer">Demo only. Nothing is transmitted to an organisation.</p>
     </div>:<form onSubmit={review}>
      <div className="form-heading"><span className="eyebrow">01 / SIGHTING DETAILS</span><span className="required-note">* Required fields</span></div>
      <div className="form-row"><label>Animal type *<select name="animal" value={form.animal} onChange={update}><option>Dog</option><option>Cat</option><option>Bird</option><option>Other / Not sure</option></select></label><label>What’s happening? *<select name="condition" value={form.condition} onChange={update}><option>Injured</option><option>Sick / weak</option><option>Abandoned</option><option>Trapped</option><option>Needs food or water</option><option>Other concern</option></select></label></div>
      <label>Location / area *<input name="location" required value={form.location} onChange={update} placeholder="Area, city or pin code"/><button className="location-button" type="button" onClick={useCurrentLocation}><MapPin size={14}/> Use my current location</button>{locationStatus&&<span className="location-status" role="status">{locationStatus}</span>}</label>
      <label>Nearby landmark<input name="landmark" value={form.landmark} onChange={update} placeholder="Street, shop, building or landmark"/></label>
      <label>What did you notice? *<textarea name="details" required minLength={15} rows="4" value={form.details} onChange={update} placeholder="Describe the animal, its condition and anything that may help responders…"/><span className="field-hint">Please include useful details such as the animal’s appearance and whether it can move safely.</span></label>
      <div className="upload-area"><div><b>Add photos (optional)</b><span>Upload up to 3 images · JPG, PNG or WEBP · 5 MB max each</span></div><label className="upload-button"><Plus size={15}/> Add photos<input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={addPhotos} disabled={photos.length>=3}/></label></div>{photoStatus&&<span className="location-status" role="status">{photoStatus}</span>}
      {photos.length>0&&<div className="upload-preview">{photos.map(photo=><div className="upload-preview-item" key={photo.id}><img src={photo.url} alt={photo.file.name}/><button type="button" onClick={()=>removePhoto(photo.id)} aria-label={`Remove ${photo.file.name}`}><X size={14}/></button><span>{photo.file.name}</span></div>)}</div>}
      <div className="form-heading form-heading-spaced"><span className="eyebrow">02 / YOUR CONTACT</span></div>
      <div className="form-row"><label>Your name *<input name="name" required value={form.name} onChange={update} placeholder="Name" autoComplete="name"/></label><label>Phone number *<input name="phone" type="tel" required minLength="7" maxLength="18" pattern="[+0-9 ()-]{7,18}" value={form.phone} onChange={update} placeholder="Contact number" autoComplete="tel"/></label></div>
      <label className="check-label"><input type="checkbox" name="consent" checked={form.consent} onChange={update} required/> I agree that this information may be shared with a relevant animal welfare organisation to help assess the report.</label>
      <button className="button button-dark button-wide" type="submit">Review rescue report <ArrowUpRight size={16}/></button>
      <p className="form-disclaimer">Demo form only. Photos and details stay in this browser session and are not sent to an NGO or emergency service.</p>
     </form>}
   </div>
  </section>
 </Shell>
}
function AboutPage(){return <Shell><PageHero label="WHY ANIMARA EXISTS" title={<>A bridge between<br/>those who <em>care</em><br/>and those who <em>can.</em></>} desc="We believe the distance between wanting to help and making a difference should be shorter." photo="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85"/><section className="about-story section-pad"><div><span className="eyebrow">THE GAP WE SEE</span><h2>Good intentions<br/>need a <em>way forward.</em></h2></div><div><p>Animal welfare organisations respond to urgent needs every day. But those needs can be hard for the public to find. Donors may not know what is useful. Rescue sightings can get lost in social feeds. And different people may unknowingly respond to the same case.</p><p>Animara is being built to bring these pieces together: current needs, a directory of organisations, direct contributions and structured rescue reports.</p><p>Trust is central to the idea. Information should be collected from NGO partners and checked before it is published.</p></div></section><section className="about-pillars"><span className="eyebrow">WHAT WE’RE BUILDING TOWARDS</span><div className="pillar-grid"><div><span>01</span><ShieldCheck/><h3>Trust first.</h3><p>Verified NGO details and reviewed needs create a more reliable place to start.</p></div><div><span>02</span><MapPin/><h3>Closer care.</h3><p>Location-aware reports can help connect sightings with nearby response teams.</p></div><div><span>03</span><HandHeart/><h3>Useful giving.</h3><p>Contributions are linked to specific requirements, making the purpose clearer.</p></div><div><span>04</span><Users/><h3>Better together.</h3><p>Shared visibility helps communities and organisations coordinate their effort.</p></div></div></section><section className="final-cta"><span className="eyebrow">BE PART OF THE CONNECTION</span><h2>Let’s make helping<br/><em>easier to do.</em></h2><div className="cta-actions"><Link to="/needs" className="button button-dark">See current needs <ArrowUpRight size={17}/></Link><Link to="/contact" className="button button-outline">Partner with us <ArrowUpRight size={17}/></Link></div></section></Shell>}
function ContactPage(){
 const [searchParams]=useSearchParams();
 const requestedNgo=ngos.find(item=>String(item.id)===String(searchParams.get('ngo')));
 const contactType=searchParams.get('type');
 const isVolunteer=contactType==='volunteer';
 const [sent,setSent]=useState(false);
 const [message,setMessage]=useState(requestedNgo?`I’d like to learn more about connecting with ${requestedNgo.name}.`:isVolunteer?'I’d like to learn more about volunteering with Animara.':contactType==='contact'?'I’d like to get in touch with Animara.':'');
 const [role,setRole]=useState(requestedNgo?'Potential partner':isVolunteer?'Volunteer':'NGO / animal welfare organisation');
 return <Shell><PageHero label="LET’S CONNECT" title={<>Good work starts<br/>with a <em>conversation.</em></>} desc="Are you part of an animal welfare organisation, a volunteer group or a community that wants to help? We’d love to hear from you." photo="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85"/><section className="contact-layout section-pad"><div><span className="eyebrow">BUILD THE NETWORK WITH US</span><h2>For the people<br/>who show up.</h2><p>Animara’s next step is to work with NGO teams and volunteers to understand real needs, verify information and shape a useful platform.</p><a className="contact-method" href="mailto:hello@animara.org"><Mail/> hello@animara.org</a><div className="demo-notice"><AlertCircle size={16}/> This is a concept website. Contact details are placeholders.</div></div><div className="form-card">{sent?<div className="success-state"><CheckCircle2 size={42}/><h2>Thanks for reaching out.</h2><p>Your message has been captured in this demo. No email has been sent.</p><button className="button button-dark" type="button" onClick={()=>setSent(false)}>Send another message</button></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><span className="eyebrow">SEND A NOTE</span><label>Your name *<input required placeholder="Name" autoComplete="name"/></label><label>Email address *<input required type="email" placeholder="you@example.com" autoComplete="email"/></label><label>I’m reaching out as<select value={role} onChange={e=>setRole(e.target.value)}><option>NGO / animal welfare organisation</option><option>Volunteer</option><option>Community member</option><option>Potential partner</option><option>Other</option></select></label><label>Your message *<textarea required rows="5" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us a little about how you'd like to connect..."/></label><button className="button button-dark button-wide">Send message <Send size={16}/></button><p className="form-disclaimer">Demo form only. No message is transmitted.</p></form>}</div></section></Shell>
}

function DonatePage(){
 const [searchParams]=useSearchParams();
 const requestedNeedId=searchParams.get('need');
 const validRequestedNeed=needs.some(item=>String(item.id)===String(requestedNeedId));
 const [selectedNeedId,setSelectedNeedId]=useState(validRequestedNeed?String(requestedNeedId):String(needs[0]?.id??''));
 const [amount,setAmount]=useState('500');
 const [customAmount,setCustomAmount]=useState('');
 const [stage,setStage]=useState('edit');
 const [reference,setReference]=useState('');
 const selectedNeed=needs.find(item=>String(item.id)===String(selectedNeedId))||needs[0];
 const presets=[250,500,1000,2000];
 const contribution=customAmount.trim()===''?Number(amount):Number(customAmount);
 const validContribution=Number.isFinite(contribution)&&contribution>=1&&Number.isInteger(contribution);
 const formatMoney=value=>`₹${Number(value||0).toLocaleString('en-IN')}`;
 const continueToReview=e=>{
  e.preventDefault();
  if(!selectedNeed||!validContribution)return;
  setStage('review');
  window.scrollTo({top:0,behavior:'smooth'});
 };
 const confirmContribution=()=>{
  const id=`ANI-GIFT-${new Date().getFullYear()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
  setReference(id);
  setStage('success');
  window.scrollTo({top:0,behavior:'smooth'});
 };
 const resetDonation=()=>{
  setAmount('500');
  setCustomAmount('');
  setReference('');
  setStage('edit');
 };
 return <Shell>
  <PageHero
   label="DONATE WITH PURPOSE"
   title={<>Let your kindness<br/>meet a <em>real need.</em></>}
   desc="Choose a specific request and contribute towards something an animal care team has asked for."
   photo="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85"
  />
  <section className="form-layout section-pad donation-layout">
   <div className="form-aside">
    <span className="eyebrow">A MORE DIRECT WAY TO GIVE</span>
    <h2>Not just a donation.<br/><em>A difference you can see.</em></h2>
    <p>Animara is designed to connect contributions to specific, itemised needs. The examples below are sample requests to demonstrate the experience.</p>
    <blockquote className="donation-quote">“When people know what’s needed, helping becomes easier.”<span>— The idea behind Animara</span></blockquote>
   </div>
   <div className="form-card donation-card">
    {stage==='success'?<div className="success-state">
      <CheckCircle2 size={48}/>
      <span className="eyebrow">DEMO CONTRIBUTION CREATED</span>
      <h2>Thank you for<br/><em>showing up.</em></h2>
      <p>Your contribution has been recorded in this demo session. <strong>No payment was collected</strong> and no NGO has received funds.</p>
      <div className="report-reference"><span>DEMO REFERENCE</span><strong>{reference}</strong></div>
      <p className="form-disclaimer">A live donation experience requires a secure payment gateway, verified NGO accounts and a confirmed process for tracking contributions.</p>
      <button className="button button-dark" type="button" onClick={resetDonation}>Make another contribution <ArrowUpRight size={16}/></button>
     </div>:stage==='review'?<div className="donation-review">
      <div className="form-heading"><span className="eyebrow">03 / REVIEW CONTRIBUTION</span><span className="required-note">Demo checkout</span></div>
      <h2>A little help,<br/><em>with purpose.</em></h2>
      <div className="review-group"><span>YOU’RE SUPPORTING</span><strong>{selectedNeed?.title}</strong><p>{selectedNeed?.ngo} · {selectedNeed?.location}</p></div>
      <div className="review-group donation-review-amount"><span>CONTRIBUTION AMOUNT</span><strong>{formatMoney(contribution)}</strong></div>
      <p className="form-disclaimer">This is a demonstration only. No payment details are requested and no money will be transferred.</p>
      <div className="review-actions">
       <button className="button button-outline" type="button" onClick={()=>setStage('edit')}>Back to edit</button>
       <button className="button button-dark" type="button" onClick={confirmContribution}>Confirm demo contribution <ArrowUpRight size={16}/></button>
      </div>
     </div>:<form onSubmit={continueToReview}>
      <div className="form-heading"><span className="eyebrow">01 / PICK A NEED</span></div>
      {needs.length>0?<>
       <label>I’d like to support
        <select value={selectedNeedId} onChange={e=>setSelectedNeedId(e.target.value)}>
         {needs.map(item=><option key={item.id} value={String(item.id)}>{item.title}</option>)}
        </select>
       </label>
       {selectedNeed&&<div className="selected-need-summary">
        <span className="pill">{selectedNeed.category}</span>
        <strong>{selectedNeed.ngo}</strong>
        <span>{selectedNeed.location}</span>
        <small>{selectedNeed.amount} target</small>
       </div>}
      </>:<div className="needs-empty"><h3>No sample needs are available.</h3><p>Please check the Current Needs page again later.</p></div>}
      <div className="form-heading form-heading-spaced"><span className="eyebrow">02 / CHOOSE AN AMOUNT</span></div>
      <div className="donation-presets" role="group" aria-label="Choose a contribution amount">
       {presets.map(value=><button key={value} type="button" className={!customAmount&&Number(amount)===value?'active':''} aria-pressed={!customAmount&&Number(amount)===value} onClick={()=>{setAmount(String(value));setCustomAmount('');}}>{formatMoney(value)}</button>)}
      </div>
      <label>Or enter an amount (₹)
       <input type="number" min="1" step="1" inputMode="numeric" value={customAmount} onChange={e=>setCustomAmount(e.target.value)} placeholder="Enter an amount"/>
      </label>
      {customAmount!==''&&(!validContribution)&&<span className="location-status" role="alert">Enter a whole amount of at least ₹1.</span>}
      <button className="button button-dark button-wide" type="submit" disabled={!selectedNeed||!validContribution}>Continue with contribution <ArrowUpRight size={16}/></button>
      <p className="form-disclaimer">No payment gateway is connected. This is an interaction prototype only.</p>
     </form>}
   </div>
  </section>
  <section className="donation-trust-band">
   <div><ShieldCheck/><span><strong>Verified needs</strong><small>Requests reviewed before they go live.</small></span></div>
   <div><Activity/><span><strong>Clear progress</strong><small>See what each contribution supports.</small></span></div>
   <div><Heart/><span><strong>People-powered</strong><small>Every helping hand moves care forward.</small></span></div>
  </section>
 </Shell>
}

export default function App(){return <><ScrollToTop/><Routes><Route path="/" element={<Home/>}/><Route path="/needs" element={<NeedsPage/>}/><Route path="/ngos" element={<NGOsPage/>}/><Route path="/ngos/:id" element={<NGOProfilePage/>}/><Route path="/report" element={<ReportPage/>}/><Route path="/donate" element={<DonatePage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="*" element={<Shell><div className="not-found"><span className="eyebrow">404 / NOT FOUND</span><h1>Looks like this<br/><em>path wandered off.</em></h1><Link className="button button-dark" to="/">Back to home <ArrowUpRight size={17}/></Link></div></Shell>}/></Routes></>}
