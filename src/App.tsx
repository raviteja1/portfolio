import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  BrainCircuit,
  Braces,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Flame,
  GitBranch,
  Languages,
  Mail,
  Menu,
  Moon,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  Workflow,
  X,
} from 'lucide-react';

// Update personal URLs here. AI Demo and GitHub are already connected.
const PROFILE_LINKS = {
  aiDemo: 'https://aravi-ai.vercel.app/',
  github: 'https://github.com/raviteja1',
  linkedin: 'https://www.linkedin.com/in/raviteja-t-38167667', // Replace with your LinkedIn profile URL.
  email: 'mailto:raviteja.t111@gmail.com', // Replace with your email address.
};

const skillGroups = [
  {
    icon: Code2,
    title: 'Frontend engineering',
    description:
      'Enterprise UI architecture, reusable systems, high-performance data experiences, and validated workflows.',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Mantine UI',
      'Material UI',
      'Redux',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Generative AI',
    description:
      'Production AI systems that retrieve, reason, route, use tools, and verify their own answers.',
    skills: [
      'AI',
      'RAG',
      'Agentic RAG',
      'Multi-Agent Orchestration',
      'Prompt Engineering',
      'Semantic Routing',
      'Hybrid Routing',
      'Vector Embeddings',
      'pgvector',
      'Semantic Search',
      'Tool Calling',
      'AI Chatbots',
      'Resume Analyzer',
      'Document Q&A',
      'AI Workflow Automation',
      'Context Management',
      'Prompt Orchestration',
      'LLM Integration',
      'Qwen2.5',
      'QLoRA',
      'PEFT',
      'Transformers',
      'TRL',
      'BitsAndBytes',
      'PyTorch',
      'Gradio',
    ],
  },
  {
    icon: Server,
    title: 'Backend, data & delivery',
    description:
      'Reliable application services, relational data, containerized delivery, and modern engineering workflows.',
    skills: [
      'Node.js',
      'REST APIs',
      'PostgreSQL',
      'MariaDB',
      'Docker',
      'Git',
      'Azure DevOps',
      'Vercel',
    ],
  },
];

const aiProducts = [
  {
    number: '01',
    title: 'ChatGPT-style Assistant',
    copy: 'A contextual conversational workspace with tool calling, prompt orchestration, semantic caching, and multi-agent workflows.',
    icon: Bot,
  },
  {
    number: '02',
    title: 'Campaign Reservation Assistant',
    copy: 'An enterprise copilot combining deterministic business rules with LLM guidance to reduce manual work during campaign reservations.',
    icon: Workflow,
  },
  {
    number: '03',
    title: 'Resume Analyzer',
    copy: 'An AI workflow that evaluates résumé content, retrieves relevant context, and produces structured, evidence-aware recommendations.',
    icon: Braces,
  },
  {
    number: '04',
    title: 'Document Q&A + Agentic RAG',
    copy: 'A document intelligence platform using hybrid routing, vector search, embeddings, tool calling, and claim-level verification.',
    icon: Database,
  },
];

const experience = [
  {
    period: 'SEP 2024 — PRESENT',
    company: 'Inmar Intelligence',
    role: 'Senior Software Engineer',
    location: 'Retail Media Platforms',
    client: 'Leading U.S. retailers including ShopRite and Publix',
    project: 'Retail Cloud Platform',
    summary:
      'A large-scale B2B Retail Media platform for campaigns, incentives, coupons, events, packages, promotions, and Retail Corporate Programs.',
    responsibilities: [
      'Lead a team of 2 engineers and own end-to-end frontend delivery for Campaign Management and Retail Corporate Programs.',
      'Architect scalable frontend systems covering component hierarchy, state management, API orchestration, reusable modules, and metadata-driven architecture.',
      'Build configurable dynamic form engines supporting intake forms, validation, draft save, approvals, workflow automation, and RBAC.',
      'Deliver the complete campaign lifecycle: creation, targeting, creatives, billing, approvals, scheduling, activation, delivery, and reporting.',
      'Design a reusable metadata-driven UI framework that onboards new campaign types with minimal code changes.',
      'Integrate external advertising platform APIs and backend services for campaign execution and retail media workflows.',
      'Optimize React performance for large enterprise datasets with TanStack Query, caching, lazy loading, and efficient state management.',
      'Collaborate with Product Managers, Backend Engineers, QA, UX, and business stakeholders in Agile delivery.',
      'Design and develop an AI-powered Campaign Reservation Assistant combining deterministic business rules with LLM assistance.',
      'Develop production AI applications including a ChatGPT-style assistant, Resume Analyzer, Document Q&A, and Agentic RAG platform with semantic routing, vector search, embeddings, tool calling, prompt orchestration, multi-agent workflows, semantic caching, and claim-level verification.',
    ],
  },
  {
    period: 'JUN 2023 — SEP 2024',
    company: 'Larsen & Toubro Technology Services',
    role: 'Tech Lead',
    location: 'Hyderabad, Telangana',
    client: 'Hexagon',
    project: 'Nexus Materials Connect',
    summary:
      'A manufacturing platform that manages material data across parameters and properties so clients can identify the right material for their use case.',
    responsibilities: [
      'Worked as a React Developer in the manufacturing domain for Hexagon.',
      'Partnered with the business team to understand project scope, functional requirements, and technical details.',
      'Developed MOD, SOD, CAD, CAE, and Anisotropy modules.',
      'Participated actively in client meetings and provided product and engineering feedback.',
      'Co-edited stories during PBR sessions and joined Agile development meetings for planning and progress tracking.',
      'Used YARN, NPM, VS Code, Azure DevOps, and Git Bash for development, check-ins, and version control.',
    ],
  },
  {
    period: 'MAY 2021 — MAY 2023',
    company: 'Capgemini',
    role: 'Senior Consultant',
    location: 'Hyderabad, Telangana',
    client: 'DBS Bank — Development Bank of Singapore',
    project: 'FIXP',
    summary:
      'A digital bond-origination platform for fixed-income origination, sales, and syndicate users, simplifying deal execution from pipeline to approval.',
    responsibilities: [
      'Worked primarily as a React UI developer and contributed partly as a Spring Boot developer.',
      'Reduced repetitive data entry and manual paperwork through digital bond creation workflows.',
      'Built auto-generated forms and live tracking for workflow, project documentation, revenue, client engagement, pipeline, and admin access.',
      'Delivered a high-performance, reactive UI across the complete deal journey—from pipeline stage to approved project.',
    ],
  },
  {
    period: 'FEB 2016 — MAY 2021',
    company: 'Tata Consultancy Services',
    role: 'I.T. Analyst',
    location: 'Insurance domain',
    client: 'USAA',
    project: 'Financial Readiness & Service Modernization',
    summary:
      'React and RESTful service development across financial-readiness, retirement-planning, and Life Line-of-Business modernization initiatives.',
    projectDetails: [
      [
        'Financial Readiness Score',
        'A member questionnaire calculates financial stability and provides targeted action cards that help members move toward a stable readiness score.',
      ],
      [
        'Layer Service Modernization',
        'Modernized services across applications in the Life Line of Business using current technologies and service patterns.',
      ],
      [
        'Department of Labor',
        'Enhanced Retirement Accumulation and Retirement Distribution tools that recommend suitable investment funds.',
      ],
    ],
    responsibilities: [
      'Worked as a React and RESTful web services developer in the insurance domain.',
      'Held regular discussions with the business team to understand project scope, functional requirements, and technical needs.',
      'Contributed to FRS, DOL, Victory, and Schwab transition initiatives.',
      'Co-edited stories in PBR sessions and participated in Agile development meetings.',
      'Used YARN, NPM, VS Code, Eclipse, ARC, Jira, and Git Bash for development, core check-ins, and version control.',
    ],
  },
];

const education = [
  {
    year: '2012',
    qualification: 'B.Tech',
    institution: 'SR Autonomous University',
    score: '82.4%',
    location: 'Warangal',
  },
  {
    year: '2011',
    qualification: 'Intermediate',
    institution: 'SR Junior College',
    score: '93.1%',
    location: 'Warangal',
  },
  {
    year: '2009',
    qualification: 'High School',
    institution: 'Sai Public High School',
    score: '88%',
    location: 'Warangal',
  },
];

const awards = [
  'On the Spot Award',
  'Best Team Award — twice',
  'Learning Achievement Award',
  'Hackathon Award',
];

type GearProps = { size?: number; className?: string };

function Gear({ size = 180, className = '' }: GearProps) {
  return (
    <svg
      className={`gear ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <g className="gear__shape">
        {Array.from({ length: 12 }).map((_, index) => (
          <rect
            key={index}
            x="89"
            y="2"
            width="22"
            height="35"
            rx="3"
            transform={`rotate(${index * 30} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="68" />
        <circle className="gear__cutout" cx="100" cy="100" r="42" />
        <circle cx="100" cy="100" r="13" />
      </g>
    </svg>
  );
}

function OpeningSequence({ onDone }: { onDone: () => void }) {
  const [opening, setOpening] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone();
      return;
    }
    const openTimer = window.setTimeout(() => setOpening(true), 900);
    const doneTimer = window.setTimeout(onDone, 2200);
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <button
      className={`opening ${opening ? 'opening--active' : ''}`}
      type="button"
      onClick={onDone}
      aria-label="Skip opening animation"
    >
      <span className="opening__gate opening__gate--left" />
      <span className="opening__gate opening__gate--right" />
      <span className="opening__machine">
        <Gear size={180} className="opening__gear opening__gear--one" />
        <Gear size={108} className="opening__gear opening__gear--two" />
        <span className="opening__status">
          <i /> SYSTEMS ONLINE
        </span>
      </span>
      <span className="opening__wordmark">
        Raviteja<span>.</span>
      </span>
    </button>
  );
}

function ExperienceItem({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  return (
    <article className="experience-card" data-reveal>
      <div className="experience-card__index">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="experience-card__heading">
        <span>{item.period}</span>
        <h3>{item.company}</h3>
        <p>{item.role}</p>
        <small>{item.location}</small>
      </div>
      <div className="experience-card__body">
        <div className="experience-card__meta">
          <span>Client</span>
          <strong>{item.client}</strong>
          <span>Project</span>
          <strong>{item.project}</strong>
        </div>
        <p>{item.summary}</p>
        <details>
          <summary>
            View complete details <ChevronDown size={16} />
          </summary>
          <div className="experience-card__details">
            {'projectDetails' in item && item.projectDetails && (
              <div className="project-details">
                {item.projectDetails.map(([name, detail]) => (
                  <div key={name}>
                    <strong>{name}</strong>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            )}
            <ul>
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  <Check size={14} /> <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </article>
  );
}

function usePageEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const reveals = [
      ...document.querySelectorAll<HTMLElement>('[data-reveal]'),
    ];
    if (reduceMotion) {
      reveals.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    );
    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      document.documentElement.style.setProperty(
        '--scroll-progress',
        `${window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)}`,
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    let x = window.innerWidth * 0.75;
    let y = window.innerHeight * 0.4;
    const paint = () => {
      frame = 0;
      document.documentElement.style.setProperty('--pointer-x', `${x}px`);
      document.documentElement.style.setProperty('--pointer-y', `${y}px`);
    };
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(
    () => localStorage.getItem('portfolio-theme') === 'light',
  );
  const [introVisible, setIntroVisible] = useState(
    () => sessionStorage.getItem('portfolio-intro') !== 'seen',
  );
  const mainRef = useRef<HTMLElement>(null);
  usePageEffects();

  const hideIntro = useCallback(() => {
    sessionStorage.setItem('portfolio-intro', 'seen');
    setIntroVisible(false);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = lightTheme ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', lightTheme ? 'light' : 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', lightTheme ? '#f3f0ea' : '#08090a');
  }, [lightTheme]);

  useEffect(() => {
    document.body.style.overflow = introVisible || menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [introVisible, menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {introVisible && <OpeningSequence onDone={hideIntro} />}
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-aura" aria-hidden="true" />
      <header
        className={`site-header ${menuOpen ? 'site-header--menu-open' : ''}`}
      >
        <a className="brand" href="#top" aria-label="Your Name — home">
          Raviteja<span>.</span>
        </a>
        <nav
          className={`nav ${menuOpen ? 'nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setLightTheme((value) => !value)}
            aria-label={lightTheme ? 'Use dark theme' : 'Use light theme'}
          >
            {lightTheme ?
              <Moon />
            : <Sun />}
          </button>
          <a
            className="header-cta"
            href={PROFILE_LINKS.aiDemo}
            target="_blank"
            rel="noreferrer"
          >
            AI Demo <ArrowUpRight />
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ?
              <X />
            : <Menu />}
          </button>
        </div>
      </header>

      <main ref={mainRef}>
        <section className="hero" id="top">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__copy">
            <p className="hero__hello">
              Hi there <span>👋</span> I’m
            </p>
            <h1>
              <span>Ravi Teja</span>
              <strong>AI Engineer</strong>
            </h1>
            <p className="hero__role">
              Senior Software Engineer <i>/</i> AI Engineer <i>/</i> Module Lead
            </p>
            <p className="hero__summary">
              I build scalable enterprise web applications and production-ready
              AI systems using React, Next.js, Node.js, TypeScript, and modern
              agentic architecture.
            </p>
            <div className="hero__actions">
              <a
                className="primary-button"
                href={PROFILE_LINKS.aiDemo}
                target="_blank"
                rel="noreferrer"
              >
                Open AI demo <ArrowUpRight />
              </a>
              <a
                className="secondary-button"
                href={PROFILE_LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch /> GitHub <ExternalLink />
              </a>
              <a className="hero__work-link" href="#work">
                View work <ArrowDown />
              </a>
            </div>
          </div>

          <div
            className="system-visual"
            aria-label="Animated diagram of a production AI system"
          >
            <div className="system-visual__top">
              <span>
                <i /> LIVE ARCHITECTURE
              </span>
              <small>AGENTIC / 01</small>
            </div>
            <div className="system-core">
              <div className="system-core__rings">
                <i />
                <i />
                <i />
              </div>
              <BrainCircuit />
              <span>ORCHESTRATOR</span>
            </div>
            <div className="system-node system-node--react">
              <Code2 />
              <span>REACT UI</span>
            </div>
            <div className="system-node system-node--rag">
              <Database />
              <span>RAG + VECTOR</span>
            </div>
            <div className="system-node system-node--tools">
              <Workflow />
              <span>TOOLS</span>
            </div>
            <div className="system-node system-node--verify">
              <Check />
              <span>VERIFY</span>
            </div>
            <svg
              className="system-lines"
              viewBox="0 0 600 440"
              aria-hidden="true"
            >
              <path d="M160 100 C240 100 230 220 300 220" />
              <path d="M440 100 C360 100 370 220 300 220" />
              <path d="M160 350 C240 350 230 220 300 220" />
              <path d="M440 350 C360 350 370 220 300 220" />
            </svg>
            <Gear size={96} className="visual-gear visual-gear--one" />
            <Gear size={54} className="visual-gear visual-gear--two" />
          </div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL</span>
            <ArrowDown />
          </a>
        </section>

        <section className="metric-strip" aria-label="Career summary">
          <div>
            <strong>10+</strong>
            <span>
              Years building
              <br />
              production software
            </span>
          </div>
          <div>
            <strong>04</strong>
            <span>
              Enterprise
              <br />
              domains
            </span>
          </div>
          <div>
            <strong>02</strong>
            <span>
              Engineers
              <br />
              led directly
            </span>
          </div>
          <div>
            <strong>AI</strong>
            <span>
              From prototype
              <br />
              to production
            </span>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-kicker" data-reveal>
            <span>01</span> ABOUT
          </div>
          <div className="about__statement" data-reveal>
            <p>
              I turn complex workflows into <em>clear, scalable systems.</em>
            </p>
          </div>
          <div className="about__content" data-reveal>
            <p>
              Senior Software Engineer, AI Engineer, and Module Lead with 10+
              years of experience building scalable enterprise web applications
              and AI-powered products. My work spans metadata-driven UI
              platforms, dynamic form engines, workflow automation, and Campaign
              Management systems for large Retail Media platforms serving
              leading U.S. retailers.
            </p>
            <p>
              I design production-grade Agentic AI applications—including a
              ChatGPT-style assistant, AI-powered Campaign Reservation
              Assistant, Resume Analyzer, and Document Q&A platform—using
              Agentic RAG, multi-agent orchestration, hybrid routing, semantic
              search, vector embeddings, tool calling, and claim-level
              verification.
            </p>
            <p>
              I’m passionate about production-ready AI systems and
              enterprise-grade software: systems that are maintainable,
              observable, fast, and genuinely useful.
            </p>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-heading" data-reveal>
            <div>
              <div className="section-kicker">
                <span>02</span> SKILLS
              </div>
              <h2>
                My technology
                <br />
                <i>operating system.</i>
              </h2>
            </div>
            <p>
              A complete stack for building rich user experiences, dependable
              services, and intelligent products.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map(
              ({ icon: Icon, title, description, skills }, index) => (
                <article className="skill-card" key={title} data-reveal>
                  <div className="skill-card__top">
                    <span>0{index + 1}</span>
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="skill-cloud">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-heading" data-reveal>
            <div>
              <div className="section-kicker">
                <span>03</span> SELECTED AI WORK
              </div>
              <h2>
                Software that
                <br />
                <i>thinks with you.</i>
              </h2>
            </div>
            <div className="work__intro">
              <p>
                Applied AI systems built around reliability, useful context, and
                verifiable outputs.
              </p>
              <a href={PROFILE_LINKS.aiDemo} target="_blank" rel="noreferrer">
                Open live AI demo <ArrowUpRight />
              </a>
            </div>
          </div>
          <article className="roast-project" data-reveal>
            <div className="roast-project__heading">
              <div className="roast-project__icon">
                <Flame />
              </div>
              <div>
                <span>FINE-TUNING CASE STUDY / EDUCATIONAL PROTOTYPE</span>
                <h3>Roast Mode — Qwen2.5 QLoRA</h3>
                <p>
                  Fine-tuned Qwen2.5-0.5B-Instruct with 4-bit QLoRA on a custom
                  1,000-example dataset for controllable, safety-aware roast
                  generation.
                </p>
              </div>
            </div>
            <div className="roast-project__metrics">
              <div>
                <span>DATASET</span>
                <strong>1,000</strong>
                <small>800 train · 100 validation · 100 test</small>
              </div>
              <div>
                <span>TRAINING</span>
                <strong>200</strong>
                <small>optimizer steps · 1 epoch · 88,602 tokens</small>
              </div>
              <div>
                <span>RESULT</span>
                <strong>85.2%</strong>
                <small>mean token accuracy · best validation loss 1.068</small>
              </div>
            </div>
            <div className="roast-project__details">
              <div>
                <SlidersHorizontal />
                <p>
                  <strong>Controllable output</strong>
                  <span>
                    Playful, spicy, and savage intensity with witty, deadpan,
                    and dramatic delivery styles.
                  </span>
                </p>
              </div>
              <div>
                <BrainCircuit />
                <p>
                  <strong>Efficient adaptation</strong>
                  <span>
                    4-bit NF4 quantization with a PEFT LoRA adapter trained in
                    Google Colab; most base-model weights remained frozen.
                  </span>
                </p>
              </div>
              <div>
                <ShieldCheck />
                <p>
                  <strong>Safety by design</strong>
                  <span>
                    Adversarial tests exposed raw-model failures, so a
                    deterministic pre-generation check redirects protected-trait
                    and vulnerability targets.
                  </span>
                </p>
              </div>
            </div>
            <p className="roast-project__note">
              Training loss decreased from 1.021 to 0.249. Fine-tuning alone did
              not provide reliable safety, so this remains an educational
              prototype—not a production moderation system.
            </p>
          </article>
          <div className="ai-products">
            {aiProducts.map(({ number, title, copy, icon: Icon }) => (
              <article className="ai-product" key={title} data-reveal>
                <div className="ai-product__number">{number}</div>
                <div className="ai-product__icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="ai-product__status">
                  <i /> PRODUCTION-MINDED
                </span>
              </article>
            ))}
          </div>
          <div className="architecture" data-reveal>
            <div className="architecture__header">
              <span>AGENTIC SYSTEM / REFERENCE FLOW</span>
              <small>DESIGNED FOR RELIABILITY</small>
            </div>
            <div className="architecture__flow">
              {[
                'User Intent',
                'Semantic Router',
                'RAG + Tools',
                'Multi-Agent Flow',
                'Claim Verification',
              ].map((step, index) => (
                <div key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                  {index < 4 && <ArrowRight />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-heading" data-reveal>
            <div>
              <div className="section-kicker">
                <span>04</span> EXPERIENCE
              </div>
              <h2>
                A decade of
                <br />
                <i>shipping outcomes.</i>
              </h2>
            </div>
            <p>
              Every role, client, project, and responsibility from the supplied
              résumé—organized for clarity without losing the detail.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <ExperienceItem item={item} index={index} key={item.company} />
            ))}
          </div>
        </section>

        <section className="section credentials" id="education">
          <div className="education" data-reveal>
            <div className="section-kicker">
              <span>05</span> EDUCATION
            </div>
            <h2>
              Foundations that
              <br />
              <i>still compound.</i>
            </h2>
            <div className="education-list">
              {education.map((item) => (
                <article key={item.qualification}>
                  <span>{item.year}</span>
                  <div>
                    <h3>{item.qualification}</h3>
                    <p>
                      {item.institution} · {item.location}
                    </p>
                  </div>
                  <strong>{item.score}</strong>
                </article>
              ))}
            </div>
          </div>
          <div className="recognition" data-reveal>
            <div className="section-kicker">
              <span>06</span> RECOGNITION
            </div>
            <div className="recognition-list">
              {awards.map((award, index) => (
                <div key={award}>
                  <Award />
                  <span>{award}</span>
                  <small>0{index + 1}</small>
                </div>
              ))}
            </div>
            <div className="languages">
              <Languages />
              <div>
                <span>LANGUAGES</span>
                <strong>English · Telugu · Hindi</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact__orb" aria-hidden="true">
            <Gear size={250} />
            <Gear size={110} />
          </div>
          <div className="section-kicker" data-reveal>
            <span>07</span> CONTACT
          </div>
          <h2 data-reveal>
            Have a hard problem?
            <br />
            <i>Let’s build the answer.</i>
          </h2>
          <p data-reveal>
            Open to conversations about senior engineering, technical
            leadership, enterprise React platforms, and applied AI systems.
          </p>
          <div className="contact__actions" data-reveal>
            <a className="primary-button" href={PROFILE_LINKS.email}>
              <Mail /> raviteja.t111@gmail.com <ArrowUpRight />
            </a>
            <a
              className="secondary-button"
              href={PROFILE_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness /> LinkedIn <ExternalLink />
            </a>
            <a
              className="secondary-button"
              href={PROFILE_LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch /> GitHub
            </a>
          </div>
          <footer>
            <a className="brand" href="#top">
              raviteja<span>.</span>
            </a>
            <span>© 2026 Raviteja · Built with React + TypeScript</span>
            <a href="#top">
              BACK TO TOP <ArrowUpRight />
            </a>
          </footer>
        </section>
      </main>
    </>
  );
}
