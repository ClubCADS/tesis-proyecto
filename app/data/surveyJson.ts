export const surveyJson = {
  "title": "Encuesta",
  "logoPosition": "right",
  "completedHtml": "<h3>Gracias por participar de mi proyecto de investigación</h3>",
  "completedBeforeHtml": "<h3>Ya completaste la encuesta.</h3>",
  "completedHtmlOnCondition": [
    {}
  ],
  "loadingHtml": "<h3>Cargando encuesta...</h3>",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "genero",
          "title": "Género",
          "isRequired": true,
          "commentText": "Otro (describe)",
          "choices": [
            "Masculino",
            "Femenino",
            "Prefiero no decirlo"
          ],
          "showOtherItem": true,
          "otherText": "Otro (describe)",
          "placeholder": "Otro..."
        },
        {
          "type": "dropdown",
          "name": "año",
          "title": "Año",
          "isRequired": true,
          "choices": [
            {
              "value": "4A",
              "text": "4 A"
            },
            {
              "value": "4B",
              "text": "4 B"
            },
            {
              "value": "4C",
              "text": "4 C"
            },
            {
              "value": "5A",
              "text": "5 A"
            },
            {
              "value": "5B",
              "text": "5 B"
            },
            {
              "value": "5C",
              "text": "5 C"
            },
            {
              "value": "6A",
              "text": "6 A"
            },
            {
              "value": "6B",
              "text": "6 B"
            },
            {
              "value": "6C",
              "text": "6 C"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "dropdown",
          "name": "frecuencia_deporte_semanal",
          "title": "¿Con qué frecuencia participas en actividades deportivas fuera del horario escolar?",
          "isRequired": true,
          "choices": [
            {
              "value": "0",
              "text": "Nunca"
            },
            {
              "value": "1",
              "text": "Ocasionalmente (menos de una vez por semana)"
            },
            {
              "value": "1-2",
              "text": "Regularmente (1-2 veces por semana)"
            },
            {
              "value": "3",
              "text": "Frecuentemente (3 o más veces por semana)"
            }
          ]
        },
        {
          "type": "comment",
          "name": "motivo_no_deporte",
          "visibleIf": "{frecuencia_deporte_semanal} = 0",
          "title": "¿Por qué no participas en actividades deportivas fuera del horario escolar?",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "deporte_realizado",
          "visibleIf": "{frecuencia_deporte_semanal} anyof ['1', '1-2', '3']",
          "title": "¿Qué deportes practicas fuera del horario escolar?",
          "isRequired": true,
          "choices": [
            "Futbol",
            "Rugby",
            "Basquet",
            "Tenis",
            "Gimnasio",
            "Natación"
          ],
          "showOtherItem": true,
          "otherText": "Otro (escribelo)"
        },
        {
          "type": "boolean",
          "name": "elegis_tu_deporte",
          "visibleIf": "{año} anyof ['4A', '4B', '4C', '6A', '6B', '6C'] and {frecuencia_deporte_semanal} anyof [1, '1-2', 3]",
          "title": " Si alguno de los deportes que practicas está disponible en las clases de educación física, ¿lo elegís?\n",
          "isRequired": true
        },
        {
          "type": "tagbox",
          "name": "motivo_elegis_deporte",
          "visibleIf": "{año} anyof ['4A', '4B', '4C', '6A', '6B', '6C'] and {frecuencia_deporte_semanal} anyof [1, '1-2', 3]",
          "title": "¿Por qué motivo haces esa elección? Puede seleccionar varias",
          "isRequired": true,
          "choices": [
            "Porque es el deporte que más disfruto",
            "Porque es el deporte en el que me desempeño mejor",
            "Porque tengo mayor acceso a las instalaciones adecuadas",
            "Porque me resulta más conveniente practicarlo en este contexto",
            "Porque el profesor lo recomienda",
            "Porque es el único deporte disponible",
            "Porque mis compañeros también lo eligen",
            "Porque es el deporte más popular",
            "Porque me ayuda a mejorar mi salud o condición física",
            "Porque es parte del programa obligatorio"
          ],
          "showOtherItem": true,
          "otherText": "Otro motivo (desarrolla)"
        }
      ]
    },
    {
      "name": "page6",
      "elements": [
        {
          "type": "dropdown",
          "name": "clases_ef_importantes",
          "title": "¿Consideras que las clases de educación física son importantes para tu desarrollo físico y/o social?",
          "isRequired": true,
          "choices": [
            "Si",
            "No",
            "No estoy seguro"
          ]
        },
        {
          "type": "comment",
          "name": "clases_ef_son_importantes",
          "visibleIf": "{clases_ef_importantes} = 'Si'",
          "title": "¿Por qué consideras que son importantes?",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "clases_ef_no_son_importantes",
          "visibleIf": "{clases_ef_importantes} = 'No'",
          "title": "¿Por qué no las consideras importantes?",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page9",
      "elements": [
        {
          "type": "rating",
          "name": "satisfaccion_clases_ef",
          "title": "¿Qué tan satisfecho estás con las actividades deportivas ofrecidas durante las clases de educación física?",
          "isRequired": true,
          "autoGenerate": false,
          "rateValues": [
            {
              "value": 1,
              "text": "Muy satisfecho"
            },
            {
              "value": 2,
              "text": "Satisfecho"
            },
            {
              "value": 3,
              "text": "Neutral"
            },
            {
              "value": 4,
              "text": "Insatisfecho"
            },
            {
              "value": 5,
              "text": "Muy insatisfecho"
            }
          ],
          "displayMode": "buttons"
        },
        {
          "type": "comment",
          "name": "aspectos_mejorar",
          "visibleIf": "{satisfaccion_clases_ef} = 5 or {satisfaccion_clases_ef} = 4",
          "title": "¿Qué aspectos te gustaría que mejoraran?",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "aspectos_gustan",
          "visibleIf": "{satisfaccion_clases_ef} = 1 or {satisfaccion_clases_ef} = 2",
          "title": "¿Qué aspectos te gustan más de las actividades ofrecidas?",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page12",
      "elements": [
        {
          "type": "ranking",
          "name": "ranking_aspectos",
          "title": "¿Qué aspectos de las clases de educación física disfrutas más? Ordenalos de más a menos importantes.",
          "isRequired": true,
          "choices": [
            {
              "value": "competencia",
              "text": "La competencia"
            },
            {
              "value": "aprender",
              "text": "Aprender nuevas habilidades"
            },
            {
              "value": "equipo",
              "text": "El trabajo en equipo"
            },
            {
              "value": "actividad",
              "text": "La actividad física en sí"
            },
            {
              "value": "sociabilizar",
              "text": "La interacción social"
            }
          ]
        }
      ]
    },
    {
      "name": "page13",
      "elements": [
        {
          "type": "tagbox",
          "name": "factores_influencia",
          "visibleIf": "{año} anyof ['4A', '4B', '4C', '6A', '6B', '6C']",
          "title": "¿Qué factores influyen en tu elección de deporte durante las clases de educación física?",
          "isRequired": true,
          "choices": [
            "Preferencia personal",
            "Influencia de amigos",
            "Interés en el deporte",
            "Disponibilidad de instalaciones y equipos",
            "Apoyo y orientación del profesor"
          ]
        }
      ]
    },
    {
      "name": "page14",
      "elements": [
        {
          "type": "boolean",
          "name": "cambio_deporte",
          "visibleIf": "{año} anyof ['4A', '4B', '4C', '6A', '6B', '6C']",
          "title": "¿Has cambiado tu elección de deporte durante el año escolar?",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "motivo_cambio",
          "visibleIf": "{cambio_deporte} = true",
          "title": "¿Por qué decidiste cambiar? ¿Qué factores influyeron en tu cambio?",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page15",
      "elements": [
        {
          "type": "boolean",
          "name": "afecta_relaciones_sociales",
          "visibleIf": "{año} anyof ['4A', '4B', '4C', '6A', '6B', '6C']",
          "title": "¿Crees que la elección de deporte durante las clases de educación física afecta tus relaciones sociales con tus compañeros?",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "como_afecta_relaciones",
          "visibleIf": "{afecta_relaciones_sociales} = true",
          "title": "¿Cómo afecta la elección de deportes tus relaciones sociales?",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page7",
      "elements": [
        {
          "type": "dropdown",
          "name": "importancia_interaccion_social",
          "title": "¿Qué importancia le das a la interacción social durante las clases de educación física en comparación con la actividad física en sí misma?",
          "isRequired": true,
          "choices": [
            "Muy importante",
            "Bastante importante",
            "Importante",
            "Poco importante",
            "Nada importante"
          ]
        },
        {
          "type": "dropdown",
          "name": "motivos_positivos_interaccion",
          "title": "¿Considerás que las clases de Educación Física en el colegio CADS permiten que todos los estudiantes participen, sin importar su nivel de habilidad?",
          "isRequired": true,
          "choices": [
            "Totalmente de acuerdo",
            "De acuerdo",
            "En desacuerdo",
            "Totalmente en desacuerdo"
          ]
        },
        {
          "type": "boolean",
          "name": "motivos_negativos_interaccion_booleano",
          "title": "¿Hay algo que te dificulte participar activamente en algunos deportes durante las clases de Educación Física? ",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "cuales_factores_dificultan",
          "visibleIf": "{motivos_negativos_interaccion_booleano} = true",
          "title": "Marcar cuáles",
          "isRequired": true,
          "choices": [
            "Falta de interés",
            "Falta de habilidades",
            "Instalaciones inadecuadas",
            "Preferencia por otros deportes",
            "Lesiones o problemas de salud",
            "Miedo al fracaso o al ridículo",
            "Falta de apoyo o motivación de los compañeros",
            "Falta de confianza en uno mismo",
            "Discriminación o acoso por parte de otros estudiantes",
            "Conflictos con el profesor de Educación Física",
            "Falta de tiempo o dedicación a la práctica",
            "Cansancio o fatiga acumulada",
            "Presión académica o estrés por otras materias",
            "Problemas familiares o personales",
            "Restricciones culturales o religiosas",
            "Preferencia por actividades no deportivas (arte, música, etc.)",
            "Limitaciones físicas o discapacidades",
            "Falta de conocimiento sobre el deporte o las reglas del juego",
            "Temor a sufrir lesiones",
            "Sensación de que el deporte no es relevante para el futuro personal o profesional",
            "Falta de ejemplos o modelos a seguir en el deporte",
            "Ambiente competitivo excesivo que desmotiva",
            "Desinterés general hacia la actividad física",
            "Conflictos o tensiones con otros estudiantes en el equipo o grupo",
            "Preferencia por actividades individuales en lugar de deportes en equipo"
          ],
          "showOtherItem": true,
          "otherText": "Otro (describe)"
        }
      ]
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "dropdown",
          "name": "como_calificas_instalaciones",
          "title": "¿Cómo calificás las instalaciones deportivas que usa el colegio CADS para los deportes que se ofrecen en las clases de educación física?",
          "choices": [
            "Excelente",
            "Buena",
            "Adecuada",
            "Deficiente",
            "Muy deficiente"
          ]
        },
        {
          "type": "dropdown",
          "name": "question1",
          "title": "¿Considera que el estado y las condiciones de las instalaciones deportivas influyen en su decisión al elegir qué deporte practicar?",
          "choices": [
            "Totalmente de acuerdo",
            "De acuerdo",
            "Neutral",
            "En desacuerdo",
            "Totalmente en desacuerdo"
          ]
        }
      ]
    }
  ],
  "triggers": [
    {
      "type": "skip",
      "expression": "{motivo_no_deporte} notempty",
      "gotoName": "clases_ef_importantes"
    }
  ]
}