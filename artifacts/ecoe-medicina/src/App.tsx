import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Activity, ArrowLeft, ArrowRight, BookOpen,
  ChevronRight, CircleHelp, FileText, GraduationCap,
  LayoutDashboard, Library, Printer, RotateCcw, Search, ShieldCheck,
} from 'lucide-react';
import {
  Route, Switch, Link, useLocation, useParams, Router as WouterRouter,
} from 'wouter';
import {
  curriculumModules, curriculumTopics, initialStudyStatus, libraryItems,
  studyStatuses, type CurriculumModule, type CurriculumTopic,
  type StudyStatus,
} from '@/data/curriculum';

const queryClient = new QueryClient();
const STORAGE_KEY = 'biblioteca-ecoe-progreso-v1';
type ProgressMap = Record<string, StudyStatus>;

function readProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as ProgressMap : {};
  } catch {
    return {};
  }
}

function useStudyProgress() {
  const [progress, setProgress] = useState<ProgressMap>(readProgress);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* storage may be unavailable */ }
  }, [progress]);
  const getStatus = (id: string) => progress[id] ?? initialStudyStatus;
  const setStatus = (id: string, status: StudyStatus) => setProgress((old) => ({ ...old, [id]: status }));
  const reset = () => setProgress({});
  return { progress, getStatus, setStatus, reset };
}

function NavLinks({ current }: { current: string }) {
  const links = [
    { href: '/', label: 'Panel general', icon: LayoutDashboard },
    { href: '/modulo/endocrinologia', label: 'Endocrinología', icon: Activity },
    { href: '/modulo/neurologia', label: 'Neurología', icon: Activity },
    { href: '/modulo/farmacologia', label: 'Farmacología', icon: CircleHelp },
    { href: '/modulo/agentes-infecciosos', label: 'Agentes infecciosos', icon: CircleHelp },
    { href: '/biblioteca', label: 'Biblioteca', icon: Library },
  ];
  return <>{links.map(({ href, label, icon: Icon }) => {
    const active = href === '/' ? current === '/' : current === href || (href.startsWith('/modulo/') && current === href);
    return <Link key={href} href={href} className={`nav-link${active ? ' active' : ''}`} data-testid={`link-nav-${href === '/' ? 'inicio' : href.split('/').pop()}`} aria-current={active ? 'page' : undefined}>
      <Icon className="nav-icon" aria-hidden="true" /><span>{label}</span>
    </Link>;
  })}</>;
}

function Shell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const pageName = location === '/' ? 'Panel general' : location === '/biblioteca' ? 'Biblioteca' : location.startsWith('/tema/') ? 'Registro de tema' : curriculumModules.find((m) => location === `/modulo/${m.id}`)?.name ?? 'Biblioteca ECOE';
  return <div className="app-shell">
    <aside className="sidebar">
      <Link href="/" className="brand" data-testid="link-brand-home">
        <span className="brand-mark"><GraduationCap size={19} /></span>
        <span><span className="brand-name">Biblioteca ECOE</span><span className="brand-caption">Medicina · Universidad EIA</span></span>
      </Link>
      <div className="nav-label">Espacio de estudio</div>
      <nav aria-label="Navegación principal"><NavLinks current={location} /></nav>
      <div className="sidebar-bottom">
        <p className="browser-note">Tu progreso se guarda únicamente en este navegador.</p>
      </div>
    </aside>
    <main className="main-area">
      <header className="topbar">
        <div className="crumb">ECOE Medicina <ChevronRight size={12} style={{ verticalAlign: 'middle', margin: '0 4px' }} /> {pageName}</div>
        <div className="topbar-right"><span className="sync-dot" /><span>Guardado en este navegador</span></div>
      </header>
      <nav className="mobile-nav" aria-label="Navegación móvil"><NavLinks current={location} /></nav>
      {children}
    </main>
  </div>;
}

function PageHeading({ eyebrow, title, subtitle, action }: { eyebrow: string; title: string; subtitle: string; action?: ReactNode }) {
  return <div className="header-row"><div><div className="eyebrow">{eyebrow}</div><h1 className="page-title">{title}</h1><p className="page-subtitle">{subtitle}</p></div>{action}</div>;
}

function moduleProgress(module: CurriculumModule, getStatus: (id: string) => StudyStatus) {
  if (!module.topicIds.length) return 0;
  return Math.round(module.topicIds.filter((id) => getStatus(id) !== 'Pendiente').length / module.topicIds.length * 100);
}

function Dashboard({ getStatus }: { getStatus: (id: string) => StudyStatus }) {
  const totalTopics = curriculumTopics.length;
  const touched = curriculumTopics.filter((topic) => getStatus(topic.id) !== 'Pendiente').length;
  const done = curriculumTopics.filter((topic) => ['Estudiado', 'Dominado'].includes(getStatus(topic.id))).length;
  const allPendingTopics = curriculumTopics.filter((topic) => getStatus(topic.id) === 'Pendiente');
  const pendingTopics = allPendingTopics.slice(0, 6);
  return <section className="page">
    <PageHeading eyebrow="Tu espacio de preparación" title="Una biblioteca en construcción." subtitle="Organiza el temario, registra tu avance y prepara materiales de estudio verificables. La cobertura curricular no significa que el contenido haya sido auditado." />
    <div className="hero-panel" data-testid="panel-overall-progress">
      <div className="hero-top"><div><div className="hero-kicker">Progreso de estudio · {totalTopics} temas listados</div><h2 className="hero-title">Avanza con claridad, tema por tema.</h2><p className="hero-copy">El progreso refleja tu estado personal de estudio. El contenido de clase sigue pendiente de incorporación y auditoría.</p></div><div className="hero-percent" data-testid="text-overall-progress">{Math.round(touched / totalTopics * 100)}%</div></div>
      <div className="progress-track"><div className="progress-fill" style={{ width: `${Math.round(touched / totalTopics * 100)}%` }} /></div>
    </div>
    <div className="stats-row">
      <div className="stat"><span className="stat-value" data-testid="value-topics-listed">{totalTopics}</span><span className="stat-label">temas identificados</span></div>
      <div className="stat"><span className="stat-value" data-testid="value-topics-started">{touched}</span><span className="stat-label">con estudio iniciado</span></div>
      <div className="stat"><span className="stat-value" data-testid="value-topics-studied">{done}</span><span className="stat-label">estudiados o dominados</span></div>
    </div>
    <div className="section-heading"><div><h2>Módulos del currículo</h2><p>Accede a la matriz de cobertura de cada módulo.</p></div><Link href="/biblioteca" className="btn btn-quiet no-print" data-testid="link-library-shortcut"><Library size={15} /> Ver biblioteca</Link></div>
    <div className="module-grid">{curriculumModules.map((module) => {
      const progress = moduleProgress(module, getStatus);
      const pending = module.status === 'pending-material';
      return <Link href={`/modulo/${module.id}`} key={module.id} className="module-card" data-testid={`card-module-${module.id}`}>
        <div className="module-card-top"><h3>{module.name}</h3><span className={`pill ${pending ? 'pill-pending' : 'pill-active'}`}>{pending ? 'Material pendiente' : 'Temario identificado'}</span></div>
        <p className="module-desc">{module.description}</p>
        <div className="module-meta"><span>{pending ? 'Sin temas listados' : `${module.topicIds.length} temas en matriz`}</span><span>{pending ? '—' : `${progress}% iniciado`}</span></div>
        {!pending && <div className="module-progress"><span style={{ width: `${progress}%` }} /></div>}
      </Link>;
    })}</div>
    <div className="dashboard-lower">
      <div><div className="section-heading"><div><h2>Por comenzar</h2><p>Temas con estado Pendiente en tu registro.</p></div></div>
        <div className="list-panel" data-testid="list-pending-topics">
          {pendingTopics.length ? pendingTopics.map((topic) => <PendingTopicRow key={topic.id} topic={topic} />) : <div className="empty-state">No tienes temas pendientes en los módulos con temario identificado.</div>}
          {allPendingTopics.length > pendingTopics.length && <div className="pending-row"><span className="mini-label">{allPendingTopics.length - pendingTopics.length} temas pendientes más</span><Link href="/modulo/endocrinologia" className="mini-label" data-testid="link-view-matrix">Ver matrices <ArrowRight size={12} /></Link></div>}
        </div>
      </div>
      <div><div className="section-heading"><div><h2>Un registro confiable</h2><p>Qué está disponible en esta primera fase.</p></div></div>
        <div className="list-panel">
          <div className="pending-row"><span><ShieldCheck size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Temarios identificados</span><span className="pill pill-active">45 temas</span></div>
          <div className="pending-row"><span><FileText size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Material docente incorporado</span><span className="pill pill-pending">Pendiente</span></div>
          <div className="pending-row"><span><BookOpen size={15} style={{ verticalAlign: 'middle', marginRight: 8 }} />Matriz imprimible</span><Link href="/biblioteca" className="mini-label" data-testid="link-printable-library">Disponible <ArrowRight size={12} /></Link></div>
        </div>
         <div className="notice">Las guías de clase y los materiales médicos aún no están incorporados a la plataforma ni auditados. La bibliografía indicada es una referencia de proyecto, no una fuente auditada.</div>
      </div>
    </div>
    <p className="footer-note">El progreso se almacena localmente en este navegador y no se sincroniza con otros dispositivos.</p>
  </section>;
}

function PendingTopicRow({ topic }: { topic: CurriculumTopic }) {
  const module = curriculumModules.find((m) => m.id === topic.moduleId);
  return <div className="pending-row"><Link href={`/tema/${topic.id}`} data-testid={`link-topic-${topic.id}`}>{topic.title}</Link><span className="mini-label">{module?.shortName}</span></div>;
}

function StudySelect({ topic, status, onChange }: { topic: CurriculumTopic; status: StudyStatus; onChange: (status: StudyStatus) => void }) {
  return <select className="field status-select" value={status} onChange={(event) => onChange(event.target.value as StudyStatus)} aria-label={`Estado de estudio: ${topic.title}`} data-testid={`select-study-status-${topic.id}`}>
    {studyStatuses.map((studyStatus) => <option key={studyStatus} value={studyStatus}>{studyStatus}</option>)}
  </select>;
}

function CoverageTable({ topics, getStatus, setStatus, module }: { topics: CurriculumTopic[]; getStatus: (id: string) => StudyStatus; setStatus: (id: string, status: StudyStatus) => void; module?: CurriculumModule }) {
  return <div className="matrix-card" data-testid="matrix-coverage">
    <div className="matrix-head"><div><strong>{module ? `Matriz · ${module.name}` : 'Matriz de cobertura curricular'}</strong><small>{topics.length} temas · listado curricular, no representa contenido auditado</small></div><span className="pill pill-pending">Material de clase pendiente</span></div>
    {topics.length ? <div className="table-scroll"><table className="matrix-table">
      <thead><tr><th>Tema del currículo</th><th>Tipo</th><th>Estudio personal</th><th>Material de clase</th><th>Desarrollo</th></tr></thead>
      <tbody>{topics.map((topic) => <tr key={topic.id} data-testid={`row-topic-${topic.id}`}>
        <td><Link className="topic-title" href={`/tema/${topic.id}`} data-testid={`link-topic-record-${topic.id}`}>{topic.title}</Link></td>
        <td><span className="topic-type">{topic.kind === 'clinical' ? 'Clínico' : 'Farmacología'}</span></td>
        <td><StudySelect topic={topic} status={getStatus(topic.id)} onChange={(status) => setStatus(topic.id, status)} /></td>
        <td className="audit-cell">{topic.classMaterialStatus}</td><td className="audit-cell">{topic.developmentStatus}</td>
      </tr>)}</tbody>
    </table></div> : <div className="empty-state">No hay temas para mostrar con estos filtros.</div>}
  </div>;
}

function ModulePage({ getStatus, setStatus }: { getStatus: (id: string) => StudyStatus; setStatus: (id: string, status: StudyStatus) => void }) {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const module = curriculumModules.find((item) => item.id === params.id);
  const [query, setQuery] = useState('');
  const [kindFilter, setKindFilter] = useState('todos');
  const [statusFilter, setStatusFilter] = useState('todos');
  if (!module) return <NotFound />;
  const pendingMaterial = module.status === 'pending-material';
  const topics = curriculumTopics.filter((topic) => topic.moduleId === module.id);
  const filtered = topics.filter((topic) => topic.title.toLocaleLowerCase('es').includes(query.trim().toLocaleLowerCase('es'))
    && (kindFilter === 'todos' || topic.kind === kindFilter)
    && (statusFilter === 'todos' || getStatus(topic.id) === statusFilter));
  return <section className="page">
    <PageHeading eyebrow={`Módulo · ${pendingMaterial ? 'En espera de material oficial' : 'Temario identificado'}`} title={module.name} subtitle={module.description} action={!pendingMaterial ? <button className="btn btn-primary no-print" onClick={() => window.print()} data-testid="button-print-matrix"><Printer size={15} /> Imprimir matriz</button> : undefined} />
    {pendingMaterial ? <div className="topic-record" data-testid={`panel-pending-module-${module.id}`}>
      <span className="pill pill-pending">Pendiente de material oficial</span>
      <h2>Este módulo aún no tiene temas listados.</h2>
      <p className="page-subtitle">No se han recibido ni consultado materiales docentes para este módulo. No se crean temas ni contenido hasta incorporar la fuente oficial.</p>
      <div className="notice">La matriz permanecerá pendiente hasta contar con material oficial verificable.</div>
    </div> : <>
      <div className="toolbar no-print">
        <select className="field" value={module.id} onChange={(event) => navigate(`/modulo/${event.target.value}`)} aria-label="Filtrar por módulo" data-testid="select-filter-module">{curriculumModules.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
        <label className="search-field" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Search size={15} color="currentColor" /><input className="field" style={{ flex: 1, minWidth: 0 }} type="search" placeholder="Buscar un tema..." value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Buscar tema" data-testid="input-search-topics" /></label>
        <select className="field" value={kindFilter} onChange={(event) => setKindFilter(event.target.value)} aria-label="Filtrar por tipo" data-testid="select-filter-kind"><option value="todos">Todos los tipos</option><option value="clinical">Clínico</option><option value="pharmacology">Farmacología</option></select>
        <select className="field" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filtrar por estado de estudio" data-testid="select-filter-status"><option value="todos">Todos los estados</option>{studyStatuses.map((status) => <option key={status} value={status}>{status}</option>)}</select>
        <span className="mini-label" data-testid="text-filter-count">{filtered.length} de {topics.length}</span>
      </div>
      <CoverageTable topics={filtered} getStatus={getStatus} setStatus={setStatus} module={module} />
      <div className="audit-box"><h3>Estado de verificación</h3><div className="audit-lines">
        <div className="audit-line"><span>Material de clase</span><strong>Pendiente de incorporar</strong></div>
        <div className="audit-line"><span>Desarrollo de temas</span><strong>Pendiente de auditoría</strong></div>
        <div className="audit-line"><span>Bibliografía indicada</span><strong>Referencias de proyecto; no auditadas</strong></div>
        <div className="audit-line"><span>Fuentes listadas</span><strong>{module.sources.length} referencias indicadas</strong></div>
      </div></div>
      <div className="audit-box"><h3>Bibliografía indicada por el proyecto</h3><p className="mini-label" style={{ lineHeight: 1.6 }}>Referencias señaladas para orientar el proyecto; no se han consultado ni auditado como fuentes de contenido.</p><ul className="future-list">{module.sources.map((source) => <li key={source}><span>{source}</span><em>Pendiente de revisión</em></li>)}</ul></div>
      <div className="notice">La matriz representa cobertura del currículo, no una guía de estudio validada. Las guías de clase aún no están incorporadas aquí ni auditadas.</div>
      <div className="print-sheet-heading"><div className="eyebrow">Biblioteca ECOE Medicina · Universidad EIA</div><h1 className="page-title">Matriz de cobertura · {module.name}</h1><p className="page-subtitle">Temas identificados en el currículo y estado personal de estudio. La lista no acredita que el material de clase esté incorporado a la plataforma ni auditado.</p></div>
      <div className="print-only-matrix"><CoverageTable topics={topics} getStatus={getStatus} setStatus={setStatus} module={module} /></div>
    </>}
  </section>;
}

function TopicPage({ getStatus, setStatus }: { getStatus: (id: string) => StudyStatus; setStatus: (id: string, status: StudyStatus) => void }) {
  const params = useParams<{ slug: string }>();
  const topic = curriculumTopics.find((item) => item.id === params.slug);
  if (!topic) return <NotFound />;
  const module = curriculumModules.find((item) => item.id === topic.moduleId)!;
  return <section className="page">
    <div className="eyebrow"><Link href={`/modulo/${module.id}`} data-testid="link-back-module">{module.name}</Link> / Registro de tema</div>
    <h1 className="page-title">{topic.title}</h1>
    <p className="page-subtitle">Registro de cobertura curricular y avance personal. No contiene desarrollo médico ni material docente auditado.</p>
    <div style={{ margin: '20px 0' }}><Link href={`/modulo/${module.id}`} className="btn btn-quiet" data-testid="link-return-matrix"><ArrowLeft size={14} /> Volver a la matriz</Link></div>
    <div className="topic-layout">
      <div className="topic-record" data-testid={`record-topic-${topic.id}`}>
        <span className="pill pill-status">{topic.kind === 'clinical' ? 'Tema clínico' : 'Tema de farmacología'}</span>
        <h2>Estado de estudio</h2>
        <p className="page-subtitle">Este estado describe únicamente tu progreso personal y se guarda en este navegador.</p>
        <div style={{ marginTop: 14, maxWidth: 260 }}><StudySelect topic={topic} status={getStatus(topic.id)} onChange={(status) => setStatus(topic.id, status)} /></div>
        <div className="audit-box"><h3>Auditoría del tema</h3><div className="audit-lines">
          <div className="audit-line"><span>Material de clase</span><strong>{topic.classMaterialStatus}</strong></div>
          <div className="audit-line"><span>Desarrollo de contenido</span><strong>{topic.developmentStatus}</strong></div>
          <div className="audit-line"><span>Fuentes</span><strong>Pendientes de revisión</strong></div>
          <div className="audit-line"><span>Estado del registro</span><strong>Nombre tomado del currículo provisto</strong></div>
        </div></div>
      </div>
      <aside className="topic-side"><h3>Áreas de estudio</h3><p className="mini-label" style={{ lineHeight: 1.55, margin: '0 0 12px' }}>Se habilitarán tras recibir y auditar los materiales oficiales.</p>
        <ul className="future-list">
          {['Material oficial de clase', 'Desarrollo del tema', 'Revisión de bibliografía', 'Síntesis para impresión'].map((label) => <li key={label}><span>{label}</span><em>Pendiente</em></li>)}
        </ul>
      </aside>
    </div>
  </section>;
}

function LibraryPage({ getStatus, setStatus }: { getStatus: (id: string) => StudyStatus; setStatus: (id: string, status: StudyStatus) => void }) {
  return <section className="page">
    <PageHeading eyebrow="Biblioteca personal" title="Materiales para tu mesa de estudio." subtitle="Una colección preparada para crecer a partir de material validado. Por ahora, solo la matriz de cobertura está disponible para impresión." action={<button className="btn btn-primary no-print" onClick={() => window.print()} data-testid="button-print-full-matrix"><Printer size={15} /> Imprimir matriz completa</button>} />
    <div className="library-intro"><div><strong>Imprimible hoy: matriz de cobertura</strong><p>Listado de currículo, estado personal y auditoría pendiente. Diseñada para impresión en papel A4 desde el navegador.</p></div><button className="btn no-print" onClick={() => window.print()} data-testid="button-print-library"><Printer size={14} /> Imprimir <FileText size={15} /></button></div>
    <div className="library-grid">{libraryItems.map((item) => <article key={item.id} className={`library-item${item.printable ? ' available' : ''}`} data-testid={`card-library-${item.id}`}>
      <span className={`pill ${item.printable ? 'pill-active' : 'pill-pending'}`}>{item.status}</span>
      <h3>{item.title}</h3><p>{item.description}</p>
      {item.printable ? <button className="btn btn-primary" onClick={() => window.print()} data-testid="button-open-printable-matrix"><Printer size={14} /> Abrir para imprimir</button> : <span className="mini-label">No hay archivo descargable disponible</span>}
    </article>)}</div>
    <div className="notice">Los manuales, flashcards, preguntas, casos y estaciones ECOE se mantienen pendientes. No hay contenido vacío ni material de muestra disponible para descarga.</div>
     <p className="footer-note">Los archivos incorporados en esta fase describen el alcance del proyecto y las reglas bibliográficas; no incluyen guías de clase.</p>
     <div className="print-sheet-heading"><div className="eyebrow">Biblioteca ECOE Medicina · Universidad EIA</div><h1 className="page-title">Matriz de cobertura curricular</h1><p className="page-subtitle">Temas identificados en el currículo y estado personal de estudio. La lista no acredita que el material de clase esté incorporado a la plataforma ni auditado.</p></div>
    <div className="print-only-matrix"><CoverageTable topics={curriculumTopics} getStatus={getStatus} setStatus={setStatus} /></div>
  </section>;
}

function Router({ getStatus, setStatus, reset }: { getStatus: (id: string) => StudyStatus; setStatus: (id: string, status: StudyStatus) => void; reset: () => void }) {
  return <RoutedErrorBoundary><Shell><Switch>
    <Route path="/" component={() => <Dashboard getStatus={getStatus} />} />
    <Route path="/biblioteca" component={() => <LibraryPage getStatus={getStatus} setStatus={setStatus} />} />
    <Route path="/modulo/:id" component={() => <ModulePage getStatus={getStatus} setStatus={setStatus} />} />
    <Route path="/tema/:slug" component={() => <TopicPage getStatus={getStatus} setStatus={setStatus} />} />
    <Route component={NotFound} />
  </Switch>
  <button className="reset-progress no-print" onClick={() => { if (window.confirm('¿Restablecer todo el progreso guardado en este navegador?')) reset(); }} data-testid="button-reset-progress"><RotateCcw size={13} /> Restablecer progreso</button>
  </Shell></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  const { getStatus, setStatus, reset } = useStudyProgress();
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
    <Router getStatus={getStatus} setStatus={setStatus} reset={reset} />
  </WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;
