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
                "title": " Si alguno de los deportes que practicas está disponible en las clases de educación física, ¿lo elegís?\r\n",
                "isRequired": true
              },
              {
                "type": "text",
                "name": "motivo_elegis_deporte",
                "visibleIf": "{año} anyof ['4A', '4B', '4C', '6A', '6B', '6C'] and {frecuencia_deporte_semanal} anyof [1, '1-2', 3]",
                "title": "¿Por qué motivo haces esa elección?",
                "isRequired": true
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
                "title": "¿Qué aspectos te gustaría que mejoraran?"
              },
              {
                "type": "comment",
                "name": "aspectos_gustan",
                "visibleIf": "{satisfaccion_clases_ef} = 1 or {satisfaccion_clases_ef} = 2",
                "title": "¿Qué aspectos te gustan más de las actividades ofrecidas?"
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
                "type": "comment",
                "name": "motivos_positivos_interaccion",
                "visibleIf": "{importancia_interaccion_social} anyof ['Muy importante', 'Bastante importante', 'Importante']",
                "title": "¿Cómo crees que la interacción social beneficia tu experiencia en las clases de educación física?\n",
                "isRequired": true
              },
              {
                "type": "comment",
                "name": "motivos_negativos_interaccion",
                "visibleIf": "{importancia_interaccion_social} anyof ['Poco importante', 'Nada importante']",
                "title": "¿Por qué crees que la interacción social no es tan relevante?",
                "isRequired": true
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
