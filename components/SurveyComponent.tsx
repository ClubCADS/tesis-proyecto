'use client'
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../app/api/json/route";
import { createClient } from "../utils/supabase/client"; // Asegúrate de que la ruta sea correcta

function SurveyComponent() {
    const survey = new Model(json);
    const supabase = createClient(); // Crear instancia del cliente de Supabase

    survey.onComplete.add(async (sender, options) => {
        const surveyData = sender.data;

        // Insertar los datos en Supabase
        const { data, error } = await supabase
            .from('survey_responses') // Reemplaza 'encuestas' con el nombre de tu tabla
            .insert([surveyData]);

        if (error) {
            console.error("Error al guardar la encuesta en Supabase:", error);
        } else {
            console.log("Encuesta guardada en Supabase:", data);
        }
    });

    return (<Survey model={survey} />);
}

export default SurveyComponent;



// 'use client'
// import React from "react";
// import { Model } from "survey-core";
// import { Survey } from "survey-react-ui";
// import "survey-core/defaultV2.min.css";
// import { json } from "../app/api/json"

// function SurveyComponent() {
//     const survey = new Model(json);
//     survey.onComplete.add((sender, options) => {
//         console.log(JSON.stringify(sender.data, null, 3));
//     });
//     return (<Survey model={survey} />);
// }

// export default SurveyComponent;