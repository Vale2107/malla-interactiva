const ramos = [
  { nombre: "Nivelación Matemática", prerrequisitos: [] },
  { nombre: "Habilidades de Comunicación", prerrequisitos: [] },
  { nombre: "Fundamentos de Edafología", prerrequisitos: [] },
  { nombre: "Morfología General", prerrequisitos: [] },
  { nombre: "Maquinaria Agrícola", prerrequisitos: [] },
  { nombre: "Seguridad Ocupacional", prerrequisitos: [] },
  { nombre: "Fundamentos de Antropología", prerrequisitos: [] },
  { nombre: "Fundamentos de Fertilización Agrícola", prerrequisitos: ['Fundamentos de Edafología'] },
  { nombre: "Fundamentos de Riego", prerrequisitos: ['Nivelación Matemática'] },
  { nombre: "Agrometeorología", prerrequisitos: [] },
  { nombre: "Técnicas Agroecológicas", prerrequisitos: [] },
  { nombre: "Educación Financiera", prerrequisitos: [] },
  { nombre: "Electivo 1", prerrequisitos: [] },
  { nombre: "Técnicas de Riego", prerrequisitos: ['Fundamentos de Riego'] },
  { nombre: "Enfermedades y Malezas en Cultivos Agrícolas", prerrequisitos: [] },
  { nombre: "Manejo de Frutales Caducos y Persistentes", prerrequisitos: ['Fundamentos de Fertilización Agrícola'] },
  { nombre: "Cultivos de hortalizas en sistema forzado", prerrequisitos: [] },
  { nombre: "Desarrollo Sostenible", prerrequisitos: [] },
  { nombre: "Manejo y administración Agrícola", prerrequisitos: [] },
  { nombre: "Electivo 2", prerrequisitos: [] },
  { nombre: "Ética para el Trabajo", prerrequisitos: ['Fundamentos de Antropología'] },
  { nombre: "Cultivo de Hortalizas al Aire Libre", prerrequisitos: [] },
  { nombre: "Manejo Productivo y Económico de Huertos Frutícolas", prerrequisitos: ['Fundamentos de Fertilización Agrícola'] },
  { nombre: "Producción de Vides", prerrequisitos: [] },
  { nombre: "Manejo Integrado de Plagas", prerrequisitos: [] },
  { nombre: "Implementación de Protocolos de Certificación y BPA", prerrequisitos: [] },
  { nombre: "Electivo 3", prerrequisitos: [] },
  { nombre: "Sistema de Fertirrigación", prerrequisitos: ['Técnicas de Riego'] },
  { nombre: "Gestión Predial", prerrequisitos: [] },
  { nombre: "Producción Vitivinífera", prerrequisitos: [] },
  { nombre: "Manejo de Tecnologías Agrícolas", prerrequisitos: ['Técnicas Agroecológicas'] },
  { nombre: "Herramientas de analisis para la gestion", prerrequisitos: [] },
  { nombre: "Proyectos de Innovación", prerrequisitos: [] },
  { nombre: "Electivo 4", prerrequisitos: [] },
  { nombre: "Inglés Elemental I", prerrequisitos: [] },
  { nombre: "Producción de Semillas", prerrequisitos: [] },
  { nombre: "Flores en la Agricultura", prerrequisitos: [] },
  { nombre: "Gestión integral de cultivos", prerrequisitos: [] },
  { nombre: "Gestión de la Producción Agrícola", prerrequisitos: ['Enfermedades y Malezas en Cultivos Agrícolas'] },
  { nombre: "Agricultura Sostenible", prerrequisitos: [] },
  { nombre: "Desarrollo Sostenible en la Agricultura", prerrequisitos: [] },
  { nombre: "Electivo 5", prerrequisitos: [] },
  { nombre: "Ética Profesional", prerrequisitos: ['Ética para el Trabajo'] },
  { nombre: "Inglés Elemental II", prerrequisitos: ['Inglés Elemental I'] },
  { nombre: "Poscosecha de productos hortofrutícolas ", prerrequisitos: [] },
  { nombre: "Manejo de Agroindustria", prerrequisitos: [] },
  { nombre: "Comercialización", prerrequisitos: [] },
  { nombre: "Agricultura de Precisión", prerrequisitos: ['Manejo de Tecnologías Agrícolas', 'Gestión Predial'] },
  { nombre: "Electivo 6", prerrequisitos: [] },
  { nombre: "Taller de Título", prerrequisitos: ['TODOS'] },
  { nombre: "Práctica Profesional", prerrequisitos: ['TODOS'] },
];

const malla = document.getElementById("malla");

function createCard(ramo) {
  const card = document.createElement("div");
  card.className = "card";
  card.id = ramo.nombre;

  const title = document.createElement("h3");
  title.textContent = ramo.nombre;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.disabled = true;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      card.classList.add("approved");
    } else {
      card.classList.remove("approved");
    }
    actualizarDesbloqueos();
  });

  card.appendChild(title);
  card.appendChild(checkbox);
  malla.appendChild(card);
}

function actualizarDesbloqueos() {
  ramos.forEach(ramo => {
    const card = document.getElementById(ramo.nombre);
    const checkbox = card.querySelector("input");

    const cumplido = ramo.prerrequisitos.every(pr => {
      const prereqCard = document.getElementById(pr);
      return prereqCard && prereqCard.querySelector("input").checked;
    });

    if (!checkbox.checked) {
      checkbox.disabled = !cumplido;
    }

    if (cumplido) {
      card.classList.add("enabled");
    } else {
      card.classList.remove("enabled");
    }
  });
}

ramos.forEach(createCard);
actualizarDesbloqueos();
