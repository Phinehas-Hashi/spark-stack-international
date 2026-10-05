import { Link } from 'react-router-dom';

export const productData = {
  academy: { name:'Spark Stack Academy', tag:'LEARN', status:'Building', accent:'#ff6b2c', title:'Learn skills that turn into opportunity.', desc:'A modern learning platform for practical skills, projects and pathways.', features:['Practical learning','Project-based progress','Skills and career pathways'] },
  community: { name:'Spark Stack Community', tag:'CONNECT', status:'Planned', accent:'#7c5cfc', title:'A place for builders to connect.', desc:'A community layer for people learning, building, sharing knowledge and finding collaborators.', features:['Profiles and identity','Groups and conversations','Knowledge sharing'] },
  careers: { name:'Spark Stack Careers', tag:'WORK', status:'Planned', accent:'#31c48d', title:'Connect skills with real opportunities.', desc:'A career platform built around skills, portfolios, roles and professional connections.', features:['Skill-first profiles','Opportunity discovery','Professional identity'] },
  freelance: { name:'Spark Stack Freelance', tag:'BUILD', status:'Planned', accent:'#f59e0b', title:'Build, collaborate and get paid.', desc:'A focused marketplace for independent builders, clients and digital work.', features:['Builder profiles','Projects and contracts','Payments and delivery'] },
  ignitepay: { name:'Ignite Pay', tag:'PAY', status:'In development', accent:'#ff6b2c', title:'Payments infrastructure for the connected economy.', desc:'A provider-independent payment layer for collections, payouts, ledgers and future financial products.', features:['Payment orchestration','Ledger and reconciliation','Secure webhooks and controls'] },
  ignitebusiness: { name:'Ignite Business', tag:'GROW', status:'Planned', accent:'#38bdf8', title:'Tools to help businesses move forward.', desc:'A business operating layer connecting customers, payments, workflows and growth tools.', features:['Business identity','Operations tools','Growth infrastructure'] },
  ai: { name:'Spark Stack AI', tag:'AI', status:'Research / Building', accent:'#a78bfa', title:'Intelligence woven into the stack.', desc:'Applied AI systems that help people learn, create, work, operate and discover opportunity.', features:['AI assistants','Knowledge systems','Intelligent workflows'] },
  labs: { name:'Spark Stack Labs', tag:'EXPERIMENT', status:'Building', accent:'#fb7185', title:'Where ambitious ideas become products.', desc:'An experimental environment for testing ideas, prototypes and new ventures.', features:['Rapid prototypes','Product experiments','New ventures'] }
};

export function ProductRouter(){
  const slug = window.location.pathname.split('/').filter(Boolean).pop();
  const data = productData[slug] || productData.academy;
  return <div className="product-site" style={{'--product-accent':data.accent}}>
    <section className="product-hero"><div className="wrap product-grid"><div>
      <Link className="product-back" to="/ecosystem">← Spark Stack ecosystem</Link>
      <label>{data.tag} · {data.status}</label><h1>{data.title}</h1><p>{data.desc}</p>
      <div className="actions"><a className="pill product-primary" href="#product-preview">Explore the product</a><Link className="pill outline" to="/contact">Partner with us</Link></div>
    </div><div className="product-mark"><span>{data.tag}</span><strong>{data.name.split(' ').slice(-1)[0]}</strong><small>Independent product identity</small></div></div></section>
    <section className="section" id="product-preview"><div className="wrap"><label>PRODUCT DIRECTION</label><h2>Focused products. One connected ecosystem.</h2>
      <div className="product-features">{data.features.map((x,i)=><div key={x}><small>0{i+1}</small><h3>{x}</h3><p>Designed as a first-class experience with its own identity, while staying ready to connect to Spark Core.</p></div>)}</div>
    </div></section>
    <section className="section product-note"><div className="wrap split"><div><label>FRONTEND FIRST</label><h2>Experience before infrastructure.</h2></div><p className="large">We design the interfaces, flows and product identity first. Backend services, authentication, data and integrations come later as each product moves toward production.</p></div></section>
  </div>;
}