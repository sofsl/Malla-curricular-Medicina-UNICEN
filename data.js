const materias = [
  {
    "id": "med911",
    "nombre": "Anatomía Humana I",
    "semestre": 1,
    "creditos": 12
  },
  {
    "id": "med913",
    "nombre": "Histología I",
    "semestre": 1,
    "creditos": 4
  },
  {
    "id": "med912",
    "nombre": "Genética",
    "semestre": 1,
    "creditos": 4
  },
  {
    "id": "dac413",
    "nombre": "Inglés I",
    "semestre": 1,
    "creditos": 3
  },
  {
    "id": "tra714",
    "nombre": "Idioma Nativo I",
    "semestre": 1,
    "creditos": 4
  },
  {
    "id": "med914",
    "nombre": "Informática Médica",
    "semestre": 1,
    "creditos": 4
  },
  {
    "id": "dac422",
    "nombre": "Inglés II",
    "semestre": 2,
    "creditos": 3,
    "prereq": [
      "dac413"
    ]
  },
  {
    "id": "tra726",
    "nombre": "Idioma Nativo II",
    "semestre": 2,
    "creditos": 4,
    "prereq": [
      "tra714"
    ]
  },
  {
    "id": "med921",
    "nombre": "Anatomía Humana II",
    "semestre": 2,
    "creditos": 12,
    "prereq": [
      "med911"
    ]
  },
  {
    "id": "med922",
    "nombre": "Biofísica",
    "semestre": 2,
    "creditos": 4,
    "prereq": [
      "med911"
    ]
  },
  {
    "id": "med923",
    "nombre": "Embriología",
    "semestre": 2,
    "creditos": 4,
    "prereq": [
      "med912"
    ]
  },
  {
    "id": "med924",
    "nombre": "Histología II",
    "semestre": 2,
    "creditos": 5,
    "prereq": [
      "med913"
    ]
  },
  {
    "id": "dac432",
    "nombre": "Investigación Científica",
    "semestre": 2,
    "creditos": 3
  },
  {
    "id": "med933",
    "nombre": "Microbiología I",
    "semestre": 3,
    "creditos": 6,
    "prereq": [
      "med912"
    ]
  },
  {
    "id": "med931",
    "nombre": "Bioquímica I",
    "semestre": 3,
    "creditos": 6,
    "prereq": [
      "med922"
    ]
  },
  {
    "id": "med932",
    "nombre": "Fisiología I",
    "semestre": 3,
    "creditos": 8,
    "prereq": [
      "med921"
    ]
  },
  {
    "id": "med934",
    "nombre": "Patología I",
    "semestre": 3,
    "creditos": 6,
    "prereq": [
      "med924"
    ]
  },
  {
    "id": "med935",
    "nombre": "Psicología Médica",
    "semestre": 3,
    "creditos": 4
  },
  {
    "id": "med936",
    "nombre": "Salud Pública I",
    "semestre": 3,
    "creditos": 4
  },
  {
    "id": "dac431",
    "nombre": "Inglés III",
    "semestre": 3,
    "creditos": 3,
    "prereq": [
      "dac422"
    ]
  },
  {
    "id": "med944",
    "nombre": "Microbiología II",
    "semestre": 4,
    "creditos": 6,
    "prereq": [
      "med933"
    ]
  },
  {
    "id": "med942",
    "nombre": "Ética Médica",
    "semestre": 4,
    "creditos": 2
  },
  {
    "id": "med946",
    "nombre": "Patología II",
    "semestre": 4,
    "creditos": 6,
    "prereq": [
      "med934"
    ]
  },
  {
    "id": "med941",
    "nombre": "Bioquímica II",
    "semestre": 4,
    "creditos": 6,
    "prereq": [
      "med931"
    ]
  },
  {
    "id": "med945",
    "nombre": "Parasitología",
    "semestre": 4,
    "creditos": 6,
    "prereq": [
      "med933"
    ]
  },
  {
    "id": "med947",
    "nombre": "Salud Pública II",
    "semestre": 4,
    "creditos": 4,
    "prereq": [
      "med936"
    ]
  },
  {
    "id": "med943",
    "nombre": "Fisiología II",
    "semestre": 4,
    "creditos": 8,
    "prereq": [
      "med932"
    ]
  },
  {
    "id": "med951",
    "nombre": "Farmacología y Terapéutica I",
    "semestre": 5,
    "creditos": 3,
    "prereq": [
      "med941"
    ]
  },
  {
    "id": "med956",
    "nombre": "Salud Pública III",
    "semestre": 5,
    "creditos": 4,
    "prereq": [
      "med947"
    ]
  },
  {
    "id": "med955",
    "nombre": "Patología III",
    "semestre": 5,
    "creditos": 5,
    "prereq": [
      "med946"
    ]
  },
  {
    "id": "med954",
    "nombre": "Inmunología I",
    "semestre": 5,
    "creditos": 4,
    "prereq": [
      "med944",
      "med946"
    ]
  },
  {
    "id": "med953",
    "nombre": "Imagenología I",
    "semestre": 5,
    "creditos": 4,
    "prereq": [
      "med921"
    ]
  },
  {
    "id": "med952",
    "nombre": "Fisiopatología I",
    "semestre": 5,
    "creditos": 3,
    "prereq": [
      "med943"
    ]
  },
  {
    "id": "med957",
    "nombre": "Semiología General y Especial I",
    "semestre": 5,
    "creditos": 12,
    "prereq": [
      "med943"
    ]
  },
  {
    "id": "med966",
    "nombre": "Semiología General y Especial II",
    "semestre": 6,
    "creditos": 12,
    "prereq": [
      "med957"
    ]
  },
  {
    "id": "med962",
    "nombre": "Farmacología y Terapéutica II",
    "semestre": 6,
    "creditos": 3,
    "prereq": [
      "med951"
    ]
  },
  {
    "id": "med961",
    "nombre": "Anestesiología",
    "semestre": 6,
    "creditos": 4,
    "prereq": [
      "med952"
    ]
  },
  {
    "id": "med967",
    "nombre": "Técnica Quirúrgica",
    "semestre": 6,
    "creditos": 8,
    "prereq": [
      "med957"
    ]
  },
  {
    "id": "med965",
    "nombre": "Inmunología II",
    "semestre": 6,
    "creditos": 4,
    "prereq": [
      "med954"
    ]
  },
  {
    "id": "med964",
    "nombre": "Imagenología II",
    "semestre": 6,
    "creditos": 4,
    "prereq": [
      "med953"
    ]
  },
  {
    "id": "med963",
    "nombre": "Fisiopatología II",
    "semestre": 6,
    "creditos": 3,
    "prereq": [
      "med952"
    ]
  },
  {
    "id": "med971",
    "nombre": "Cirugía I",
    "semestre": 7,
    "creditos": 5,
    "prereq": [
      "med966",
      "med967"
    ]
  },
  {
    "id": "med972",
    "nombre": "Ginecología y Obstetricia I",
    "semestre": 7,
    "creditos": 5,
    "prereq": [
      "med966",
      "med967"
    ]
  },
  {
    "id": "med977",
    "nombre": "Traumatología y Ortopedia",
    "semestre": 7,
    "creditos": 4,
    "prereq": [
      "med967"
    ]
  },
  {
    "id": "med976",
    "nombre": "Pediatría I",
    "semestre": 7,
    "creditos": 5,
    "prereq": [
      "med962",
      "med966"
    ]
  },
  {
    "id": "med975",
    "nombre": "Oftalmología",
    "semestre": 7,
    "creditos": 4,
    "prereq": [
      "med966",
      "med967"
    ]
  },
  {
    "id": "med974",
    "nombre": "Medicina Interna I - Neumología",
    "semestre": 7,
    "creditos": 6,
    "prereq": [
      "med962",
      "med966"
    ]
  },
  {
    "id": "med973",
    "nombre": "Medicina Interna I - Cardiología",
    "semestre": 7,
    "creditos": 6,
    "prereq": [
      "med962",
      "med966"
    ]
  },
  {
    "id": "med986",
    "nombre": "Otorrinolaringología",
    "semestre": 8,
    "creditos": 4,
    "prereq": [
      "med966",
      "med967"
    ]
  },
  {
    "id": "med981",
    "nombre": "Cirugía II",
    "semestre": 8,
    "creditos": 5,
    "prereq": [
      "med971"
    ]
  },
  {
    "id": "med985",
    "nombre": "Medicina Interna I - Reumatología",
    "semestre": 8,
    "creditos": 6,
    "prereq": [
      "med974",
      "med973"
    ]
  },
  {
    "id": "med983",
    "nombre": "Ginecología y Obstetricia II",
    "semestre": 8,
    "creditos": 5,
    "prereq": [
      "med972"
    ]
  },
  {
    "id": "med984",
    "nombre": "Medicina Interna I - Nefrología",
    "semestre": 8,
    "creditos": 6,
    "prereq": [
      "med974",
      "med973"
    ]
  },
  {
    "id": "med982",
    "nombre": "Epidemiología",
    "semestre": 8,
    "creditos": 3,
    "prereq": [
      "med956"
    ]
  },
  {
    "id": "med987",
    "nombre": "Pediatría II",
    "semestre": 8,
    "creditos": 5,
    "prereq": [
      "med976"
    ]
  },
  {
    "id": "med997",
    "nombre": "Urología",
    "semestre": 9,
    "creditos": 4,
    "prereq": [
      "med981"
    ]
  },
  {
    "id": "med994",
    "nombre": "Medicina Interna II - Infectología",
    "semestre": 9,
    "creditos": 6,
    "prereq": [
      "med984",
      "med985"
    ]
  },
  {
    "id": "med991",
    "nombre": "Cirugía III",
    "semestre": 9,
    "creditos": 5,
    "prereq": [
      "med981"
    ]
  },
  {
    "id": "med992",
    "nombre": "Ginecología y Obstetricia III",
    "semestre": 9,
    "creditos": 5,
    "prereq": [
      "med983"
    ]
  },
  {
    "id": "med993",
    "nombre": "Medicina Interna II - Gastroenterología",
    "semestre": 9,
    "creditos": 6,
    "prereq": [
      "med984",
      "med985"
    ]
  },
  {
    "id": "med995",
    "nombre": "Neurología y Neurocirugía",
    "semestre": 9,
    "creditos": 4,
    "prereq": [
      "med981"
    ]
  },
  {
    "id": "med996",
    "nombre": "Pediatría III",
    "semestre": 9,
    "creditos": 5,
    "prereq": [
      "med987"
    ]
  },
  {
    "id": "med902",
    "nombre": "Dermatología",
    "semestre": 10,
    "creditos": 4,
    "prereq": [
      "med966"
    ]
  },
  {
    "id": "med904",
    "nombre": "Medicina Interna II - Endocrinología",
    "semestre": 10,
    "creditos": 6,
    "prereq": [
      "med994",
      "med993"
    ]
  },
  {
    "id": "med905",
    "nombre": "Medicina Interna II - Hematología",
    "semestre": 10,
    "creditos": 6,
    "prereq": [
      "med994",
      "med993"
    ]
  },
  {
    "id": "med906",
    "nombre": "Medicina Legal",
    "semestre": 10,
    "creditos": 2,
    "prereq": [
      "med956"
    ]
  },
  {
    "id": "med907",
    "nombre": "Psiquiatría",
    "semestre": 10,
    "creditos": 4,
    "prereq": [
      "med995"
    ]
  },
  {
    "id": "med901",
    "nombre": "Administración de Hospitales",
    "semestre": 10,
    "creditos": 4,
    "prereq": [
      "med982"
    ]
  },
  {
    "id": "med903",
    "nombre": "Ginecología y Obstetricia IV",
    "semestre": 10,
    "creditos": 5,
    "prereq": [
      "med992"
    ]
  },
  {
    "id": "med9111",
    "nombre": "Clínica Médica",
    "semestre": 11,
    "creditos": 1017,
    "prereq": [
      "med903",
      "med902",
      "med906",
      "med904",
      "med901",
      "med907",
      "med905"
    ]
  },
  {
    "id": "med9112",
    "nombre": "Clínica Quirúrgica",
    "semestre": 11,
    "creditos": 1017,
    "prereq": [
      "med903",
      "med902",
      "med906",
      "med904",
      "med901",
      "med907",
      "med905"
    ]
  },
  {
    "id": "med9122",
    "nombre": "Clínica Gineco-Obstetra",
    "semestre": 12,
    "creditos": 1525,
    "prereq": [
      "med903",
      "med902",
      "med906",
      "med904",
      "med901",
      "med907",
      "med905"
    ]
  },
  {
    "id": "med9121",
    "nombre": "Clínica Pediátrica",
    "semestre": 12,
    "creditos": 1017,
    "prereq": [
      "med903",
      "med902",
      "med906",
      "med904",
      "med901",
      "med907",
      "med905"
    ]
  }
];
