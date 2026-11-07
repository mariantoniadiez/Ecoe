export type ModuleId =
  | "endocrinologia"
  | "neurologia"
  | "farmacologia"
  | "agentes-infecciosos";

export type StudyStatus =
  | "Pendiente"
  | "En estudio"
  | "Estudiado"
  | "En repaso"
  | "Dominado";

export type ModuleStatus = "active" | "pending-material";

export interface CurriculumModule {
  id: ModuleId;
  name: string;
  shortName: string;
  status: ModuleStatus;
  description: string;
  sources: string[];
  topicIds: string[];
}

export interface CurriculumTopic {
  id: string;
  moduleId: ModuleId;
  title: string;
  kind: "clinical" | "pharmacology";
  classMaterialStatus: "Pendiente de incorporar";
  developmentStatus: "Pendiente de auditoría";
}

const endocrineTopics = [
  ["hipotiroidismo", "Hipotiroidismo", "clinical"],
  ["hipertiroidismo", "Hipertiroidismo", "clinical"],
  ["enfermedad-de-addison", "Enfermedad de Addison", "clinical"],
  ["sindrome-de-cushing", "Síndrome de Cushing", "clinical"],
  [
    "hiperaldosteronismo-primario",
    "Hiperaldosteronismo primario",
    "clinical",
  ],
  ["panhipopituitarismo", "Panhipopituitarismo", "clinical"],
  ["pancreas-endocrino", "Páncreas endocrino", "clinical"],
  ["semiologia-endocrinologica", "Semiología endocrinológica", "clinical"],
  ["diabetes-mellitus", "Diabetes mellitus", "clinical"],
  ["obesidad", "Obesidad", "clinical"],
  ["metabolismo-calcio-fosfato", "Metabolismo del calcio y fosfato", "clinical"],
  ["farmacos-tiroideos", "Fármacos tiroideos", "pharmacology"],
  ["anticonceptivos", "Anticonceptivos", "pharmacology"],
  ["hiperglucemiantes", "Hiperglucemiantes", "pharmacology"],
  ["hipoglucemiantes", "Hipoglucemiantes", "pharmacology"],
] as const;

const neurologyTopics = [
  ["neuroimagen", "Neuroimagen", "clinical"],
  ["epilepsia", "Epilepsia", "clinical"],
  ["accidente-cerebrovascular", "Accidente cerebrovascular", "clinical"],
  ["vertigo", "Vértigo", "clinical"],
  ["banderas-rojas-cefalea", "Banderas rojas en cefalea", "clinical"],
  ["migrana", "Migraña", "clinical"],
  ["aura-migranosa", "Aura migrañosa", "clinical"],
  ["cefalea-tipo-tension", "Cefalea tipo tensión", "clinical"],
  [
    "cefaleas-trigemino-autonomicas",
    "Cefaleas trigémino-autonómicas",
    "clinical",
  ],
  ["enfermedad-de-parkinson", "Enfermedad de Parkinson", "clinical"],
  [
    "neurona-motora-superior-e-inferior",
    "Neurona motora superior e inferior",
    "clinical",
  ],
  [
    "hipertension-endocraneana",
    "Síndrome de hipertensión endocraneana",
    "clinical",
  ],
  ["sindrome-meningeo", "Síndrome meníngeo", "clinical"],
  ["sindromes-sensitivos", "Síndromes sensitivos", "clinical"],
  [
    "union-neuromuscular-y-miopatico",
    "Síndrome de unión neuromuscular y miopático",
    "clinical",
  ],
  [
    "sindromes-extrapiramidales",
    "Síndromes extrapiramidales hipocinéticos e hipercinéticos",
    "clinical",
  ],
  ["guillain-barre", "Síndrome de Guillain-Barré", "clinical"],
  ["enfermedad-de-alzheimer", "Enfermedad de Alzheimer", "clinical"],
  ["demencia", "Demencia", "clinical"],
  ["evaluacion-mental", "Evaluación mental", "clinical"],
  [
    "evaluacion-neurologica",
    "Evaluación de pares craneales, sensibilidad y motricidad",
    "clinical",
  ],
  ["evaluacion-del-cerebelo", "Evaluación del cerebelo", "clinical"],
  ["farmacologia-del-dolor", "Farmacología del dolor", "pharmacology"],
  ["antiparkinsonianos", "Antiparkinsonianos", "pharmacology"],
  ["anticonvulsivantes", "Anticonvulsivantes", "pharmacology"],
  ["sedantes-e-hipnoticos", "Sedantes e hipnóticos", "pharmacology"],
  ["antidepresivos", "Antidepresivos", "pharmacology"],
  ["ansioliticos", "Ansiolíticos", "pharmacology"],
  ["antipsicoticos", "Antipsicóticos", "pharmacology"],
  ["antidemenciales", "Antidemenciales", "pharmacology"],
] as const;

function makeTopics(
  moduleId: ModuleId,
  topics: readonly (readonly [string, string, "clinical" | "pharmacology"])[],
): CurriculumTopic[] {
  return topics.map(([id, title, kind]) => ({
    id,
    moduleId,
    title,
    kind,
    classMaterialStatus: "Pendiente de incorporar",
    developmentStatus: "Pendiente de auditoría",
  }));
}

export const curriculumTopics: CurriculumTopic[] = [
  ...makeTopics("endocrinologia", endocrineTopics),
  ...makeTopics("neurologia", neurologyTopics),
];

export const curriculumModules: CurriculumModule[] = [
  {
    id: "endocrinologia",
    name: "Endocrinología",
    shortName: "Endocrino",
    status: "active",
    description:
      "Temario identificado. La matriz está lista para auditar las guías y materiales de clase cuando se incorporen.",
    sources: [
      "Harrison. Principios de Medicina Interna.",
      "Williams Textbook of Endocrinology.",
      "Williams Manual of Endocrinology.",
      "Greenspan’s Basic & Clinical Endocrinology.",
    ],
    topicIds: curriculumTopics
      .filter((topic) => topic.moduleId === "endocrinologia")
      .map((topic) => topic.id),
  },
  {
    id: "neurologia",
    name: "Neurología",
    shortName: "Neuro",
    status: "active",
    description:
      "Temario identificado. La matriz está lista para auditar las guías y materiales de clase cuando se incorporen.",
    sources: [
      "Adams and Victor’s Principles of Neurology.",
      "Bradley’s Neurology in Clinical Practice.",
      "Merritt’s Neurology.",
      "DeJong’s The Neurologic Examination.",
    ],
    topicIds: curriculumTopics
      .filter((topic) => topic.moduleId === "neurologia")
      .map((topic) => topic.id),
  },
  {
    id: "farmacologia",
    name: "Farmacología",
    shortName: "Farmacología",
    status: "pending-material",
    description:
      "Pendiente de material oficial. No se han creado temas ni contenido para evitar asumir el enfoque docente.",
    sources: [],
    topicIds: [],
  },
  {
    id: "agentes-infecciosos",
    name: "Agentes infecciosos",
    shortName: "Infecciosos",
    status: "pending-material",
    description:
      "Pendiente de material oficial. No se han creado temas ni contenido para evitar asumir el enfoque docente.",
    sources: [],
    topicIds: [],
  },
];

export const studyStatuses: StudyStatus[] = [
  "Pendiente",
  "En estudio",
  "Estudiado",
  "En repaso",
  "Dominado",
];

export const libraryItems = [
  {
    id: "coverage-matrix",
    title: "Matriz de cobertura académica",
    description:
      "Temario completo identificado, estado de auditoría y material docente pendiente.",
    status: "Disponible para imprimir",
    printable: true,
  },
  {
    id: "endocrine-manual",
    title: "Manual maestro de Endocrinología",
    description: "Se generará después de auditar el material de clase.",
    status: "Pendiente de contenido validado",
    printable: false,
  },
  {
    id: "neurology-manual",
    title: "Manual maestro de Neurología",
    description: "Se generará después de auditar el material de clase.",
    status: "Pendiente de contenido validado",
    printable: false,
  },
  {
    id: "flashcards",
    title: "Cuaderno de flashcards",
    description: "Tarjetas digitales e imprimibles por tema.",
    status: "Pendiente de contenido validado",
    printable: false,
  },
  {
    id: "question-bank",
    title: "Banco de preguntas ECOE",
    description: "Preguntas y solucionarios independientes.",
    status: "Pendiente de contenido validado",
    printable: false,
  },
  {
    id: "clinical-cases",
    title: "Cuaderno de casos clínicos",
    description: "Casos progresivos con información y respuestas separadas.",
    status: "Pendiente de contenido validado",
    printable: false,
  },
  {
    id: "stations",
    title: "Manual de estaciones ECOE",
    description: "Estaciones, checklists y rúbricas de evaluación.",
    status: "Pendiente de contenido validado",
    printable: false,
  },
];

export const initialStudyStatus: StudyStatus = "Pendiente";
