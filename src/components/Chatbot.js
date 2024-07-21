import React, { useState } from "react";

const keywords = {
    'calendario academico': 'calendario',
    'horario de clases': 'horario',
    'inscripción para cursos': 'inscripción',
    'biblioteca': 'biblioteca',
    'servicios estudiantiles': 'servicios',
    'evento importante': 'evento',
    'estrés o problemas emocionales': 'estrés',
    'discapacidades': 'discapacidades',
    'asesoramiento o tutoría': 'asesoramiento',
    'pasantías o prácticas profesionales': 'pasantías',
    'currículum vitae': 'currículum',
    'entrevistas de trabajo': 'entrevistas',
    'actividades extracurriculares': 'actividades',
    'actividad interesante': 'actividad',
    'opciones de alimentación': 'alimentación',
  };
  
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
 
  const detectResponse = (input) => {

    const normalizedInput = removeAccents(input.toLowerCase()); 
    const matchedKeywords = Object.keys(keywords).filter(key => normalizedInput.includes(removeAccents(keywords[key])));
    
    if (matchedKeywords.length > 0) {
      return keywords[matchedKeywords[0]];
    }  

    return null;
  };

  const responses = {
    'calendario': 'El calendario académico para este semestre está disponible en el sitio web de la universidad.',
    'horario': 'Puedes encontrar tu horario de clases en el portal.',
    'inscripción': 'Los períodos de inscripción para cursos son en junio.',
    'biblioteca': 'La biblioteca está en la zona este de la universidad y abierta de lunes a viernes de 8 AM a 8 PM.',
    'servicios': 'Puedes contactar al departamento de servicios estudiantiles a través de su correo electrónico prueba@serviciossociales.com .',
    'evento': 'Hay una feria de empleo en el campus este viernes.',
    'estrés': 'Puedes obtener ayuda en el centro de bienestar estudiantil.',
    'discapacidades': 'Los recursos para estudiantes con discapacidades están disponibles en el centro de recursos.',
    'asesoramiento': 'Clases extra curriculares y tutores.',
    'pasantías': 'Puedes encontrar pasantías y prácticas profesionales en el portal de empleo de la universidad.',
    'currículum': 'La universidad ofrece recursos para ayudarte a escribir tu currículum vitae.',
    'entrevistas': 'Hay talleres disponibles para prepararte para entrevistas de trabajo.',
    'actividades': 'Hay varios clubes y actividades extracurriculares disponibles en el campus.',
    'actividad': 'Este fin de semana hay una proyección de películas en el campus.',
    'alimentación': 'Las opciones de alimentación en el campus incluyen varios comedores.',
  };