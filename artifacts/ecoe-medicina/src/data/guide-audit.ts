export interface GuideAuditRecord {
  id: string;
  moduleName: "Endocrinología" | "Neurología";
  title: string;
  pages: [number, number];
  sections: string[];
  counts: {
    sectionCount: number;
    tableCount: number;
    algorithmCount: number;
    caseCount: number;
    questionCount: number;
    answerCount: number;
    flashcardCount: number;
    stationCount: number;
  };
  referencesMentioned: string;
}

export const guideAudit: GuideAuditRecord[] = [
  {
    "id": "M1-T01",
    "moduleName": "Endocrinología",
    "title": "Hipotiroidismo",
    "pages": [
      1,
      5
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 4,
      "answerCount": 4,
      "flashcardCount": 6,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Williams Textbook of Endocrinology, guías ATA de hipotiroidismo (verificar edición vigente)"
  },
  {
    "id": "M1-T02",
    "moduleName": "Endocrinología",
    "title": "Hipertiroidismo",
    "pages": [
      6,
      9
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 4,
      "answerCount": 4,
      "flashcardCount": 6,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Williams, guías ATA de hipertiroidismo (verificar edición vigente)"
  },
  {
    "id": "M1-T03",
    "moduleName": "Endocrinología",
    "title": "Enfermedad de Addison",
    "pages": [
      10,
      13
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Williams, guías de la Endocrine Society (verificar edición vigente)"
  },
  {
    "id": "M1-T04",
    "moduleName": "Endocrinología",
    "title": "Síndrome de Cushing",
    "pages": [
      14,
      16
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Williams, guías de la Endocrine Society (verificar edición vigente)"
  },
  {
    "id": "M1-T05",
    "moduleName": "Endocrinología",
    "title": "Hiperaldosteronismo primario",
    "pages": [
      17,
      19
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Williams, guías de la Endocrine Society sobre aldosteronismo primario (verificar edición vigente)"
  },
  {
    "id": "M1-T06",
    "moduleName": "Endocrinología",
    "title": "Panhipopituitarismo",
    "pages": [
      20,
      22
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Williams, Greenspan (verificar edición vigente)"
  },
  {
    "id": "M1-T07",
    "moduleName": "Endocrinología",
    "title": "Páncreas endocrino",
    "pages": [
      23,
      25
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Williams, Greenspan (verificar edición vigente)"
  },
  {
    "id": "M1-T08",
    "moduleName": "Endocrinología",
    "title": "Semiología endocrinológica",
    "pages": [
      26,
      28
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas por eje",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Bates (guía de exploración física, verificar edición)"
  },
  {
    "id": "M1-T09",
    "moduleName": "Endocrinología",
    "title": "Diabetes mellitus",
    "pages": [
      29,
      32
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 4,
      "answerCount": 4,
      "flashcardCount": 6,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Standards of Care de la ADA (verificar edición vigente), guías colombianas"
  },
  {
    "id": "M1-T10",
    "moduleName": "Endocrinología",
    "title": "Obesidad",
    "pages": [
      33,
      35
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, guías de obesidad (verificar edición vigente), OMS"
  },
  {
    "id": "M1-T11",
    "moduleName": "Endocrinología",
    "title": "Alteraciones del calcio y fosfato",
    "pages": [
      36,
      39
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Williams, guías de la Endocrine Society y KDIGO (verificar edición vigente)"
  },
  {
    "id": "M1-T12",
    "moduleName": "Endocrinología",
    "title": "Farmacología endocrina",
    "pages": [
      40,
      43
    ],
    "sections": [
      "A. Fundamentos",
      "B. Fármacos tiroideos",
      "C. Anticonceptivos hormonales",
      "D. Hipoglucemiantes",
      "E. Hiperglucemiantes (fármacos que elevan la glucosa)",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 4,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Goodman y Gilman, Katzung, Rang y Dale (verificar edición vigente)"
  },
  {
    "id": "M2-T01",
    "moduleName": "Neurología",
    "title": "Neuroimagen",
    "pages": [
      1,
      4
    ],
    "sections": [
      "A. Fundamentos",
      "B. Hallazgos clínicos relevantes",
      "C. Semiología y evaluación",
      "D. Diagnóstico (lectura sistemática)",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley (verificar edición vigente)"
  },
  {
    "id": "M2-T02",
    "moduleName": "Neurología",
    "title": "Epilepsia",
    "pages": [
      5,
      7
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley, clasificación ILAE (verificar edición vigente)"
  },
  {
    "id": "M2-T03",
    "moduleName": "Neurología",
    "title": "Accidente cerebrovascular (ACV)",
    "pages": [
      8,
      10
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas por territorio",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, guías AHA/ASA vigentes (verificar edición)"
  },
  {
    "id": "M2-T04",
    "moduleName": "Neurología",
    "title": "Vértigo",
    "pages": [
      11,
      13
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley (verificar edición vigente)"
  },
  {
    "id": "M2-T05",
    "moduleName": "Neurología",
    "title": "Banderas rojas en cefalea",
    "pages": [
      14,
      16
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas (banderas rojas)",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, clasificación ICHD-3 (verificar edición vigente)"
  },
  {
    "id": "M2-T06",
    "moduleName": "Neurología",
    "title": "Migraña",
    "pages": [
      17,
      19
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Adams y Victor, ICHD-3, guías vigentes (verificar edición)"
  },
  {
    "id": "M2-T07",
    "moduleName": "Neurología",
    "title": "Aura migrañosa",
    "pages": [
      20,
      22
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, ICHD-3 (verificar edición vigente)"
  },
  {
    "id": "M2-T08",
    "moduleName": "Neurología",
    "title": "Cefalea tipo tensión",
    "pages": [
      23,
      25
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 3,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, ICHD-3 (verificar edición vigente)"
  },
  {
    "id": "M2-T09",
    "moduleName": "Neurología",
    "title": "Cefaleas trigémino-autonómicas",
    "pages": [
      26,
      28
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, ICHD-3 (verificar edición vigente)"
  },
  {
    "id": "M2-T10",
    "moduleName": "Neurología",
    "title": "Enfermedad de Parkinson",
    "pages": [
      29,
      31
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley, criterios MDS (verificar edición vigente)"
  },
  {
    "id": "M2-T11",
    "moduleName": "Neurología",
    "title": "Neurona motora superior e inferior",
    "pages": [
      32,
      34
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "DeJong, Adams y Victor (verificar edición vigente)"
  },
  {
    "id": "M2-T12",
    "moduleName": "Neurología",
    "title": "Síndrome de hipertensión endocraneana",
    "pages": [
      35,
      37
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley (verificar edición vigente)"
  },
  {
    "id": "M2-T13",
    "moduleName": "Neurología",
    "title": "Síndrome meníngeo",
    "pages": [
      38,
      40
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Harrison, Adams y Victor, guías IDSA (verificar edición vigente)"
  },
  {
    "id": "M2-T14",
    "moduleName": "Neurología",
    "title": "Síndromes sensitivos",
    "pages": [
      41,
      43
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas por síndrome",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "DeJong, Adams y Victor (verificar edición vigente)"
  },
  {
    "id": "M2-T15",
    "moduleName": "Neurología",
    "title": "Síndrome de unión neuromuscular y síndrome miopático",
    "pages": [
      44,
      46
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley (verificar edición vigente)"
  },
  {
    "id": "M2-T16",
    "moduleName": "Neurología",
    "title": "Síndromes extrapiramidales hipocinéticos e hipercinéticos",
    "pages": [
      47,
      49
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley (verificar edición vigente)"
  },
  {
    "id": "M2-T17",
    "moduleName": "Neurología",
    "title": "Síndrome de Guillain-Barré",
    "pages": [
      50,
      52
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Harrison (verificar edición vigente)"
  },
  {
    "id": "M2-T18",
    "moduleName": "Neurología",
    "title": "Enfermedad de Alzheimer",
    "pages": [
      53,
      55
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley, criterios NIA-AA (verificar edición vigente)"
  },
  {
    "id": "M2-T19",
    "moduleName": "Neurología",
    "title": "Demencia",
    "pages": [
      56,
      63
    ],
    "sections": [
      "A. Generalidades de las demencias",
      "B. Evaluación general del paciente con sospecha de demencia",
      "C. Deterioro cognitivo leve (DCL)",
      "D. Enfermedad de Alzheimer",
      "E. Demencia frontotemporal (DFT)",
      "F. Demencia vascular",
      "G. Demencia por cuerpos de Lewy (DCL-Lewy)",
      "H. Otras causas relevantes",
      "I. Razonamiento clínico",
      "J. Aplicación al ECOE",
      "K. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 11,
      "tableCount": 4,
      "algorithmCount": 1,
      "caseCount": 4,
      "questionCount": 10,
      "answerCount": 10,
      "flashcardCount": 10,
      "stationCount": 1
    },
    "referencesMentioned": "Adams y Victor, Bradley, criterios DSM-5, NIA-AA, McKeith 2017, Rascovsky 2011 (verificar edición vigente)"
  },
  {
    "id": "M2-T20",
    "moduleName": "Neurología",
    "title": "Evaluación mental",
    "pages": [
      64,
      66
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas (alteraciones)",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "DeJong, Adams y Victor (verificar edición vigente)"
  },
  {
    "id": "M2-T21",
    "moduleName": "Neurología",
    "title": "Evaluación de pares craneales, sensibilidad y motricidad",
    "pages": [
      67,
      69
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas por par craneal",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 2,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "DeJong, Bates (verificar edición vigente)"
  },
  {
    "id": "M2-T22",
    "moduleName": "Neurología",
    "title": "Evaluación cerebelosa",
    "pages": [
      70,
      72
    ],
    "sections": [
      "A. Fundamentos",
      "B. Manifestaciones clínicas",
      "C. Semiología y evaluación",
      "D. Diagnóstico",
      "E. Tratamiento",
      "F. Razonamiento clínico",
      "G. Aplicación al ECOE",
      "H. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 8,
      "tableCount": 1,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 4,
      "stationCount": 1
    },
    "referencesMentioned": "DeJong, Adams y Victor (verificar edición vigente)"
  },
  {
    "id": "M2-T23",
    "moduleName": "Neurología",
    "title": "Farmacología neurológica",
    "pages": [
      73,
      77
    ],
    "sections": [
      "A. Fundamentos",
      "B. Farmacología del dolor",
      "C. Antiparkinsonianos",
      "D. Anticonvulsivantes",
      "E. Sedantes e hipnóticos y ansiolíticos",
      "F. Antidepresivos",
      "G. Antipsicóticos",
      "H. Antidemenciales",
      "I. Razonamiento clínico",
      "J. Aplicación al ECOE",
      "K. Repaso de alto rendimiento"
    ],
    "counts": {
      "sectionCount": 11,
      "tableCount": 5,
      "algorithmCount": 1,
      "caseCount": 1,
      "questionCount": 3,
      "answerCount": 3,
      "flashcardCount": 5,
      "stationCount": 1
    },
    "referencesMentioned": "Goodman y Gilman, Katzung, Rang y Dale (verificar edición vigente)"
  }
];
