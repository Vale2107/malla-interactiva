const ramos = [
  { nombre: "Nivelación Matemática", prerrequisitos: [] },
  { nombre: "Habilidades de Comunicación", prerrequisitos: [] },
  { nombre: "Fundamentos de Edafología", prerrequisitos: [] },
  { nombre: "Morfología General", prerrequisitos: [] },
  { nombre: "Maquinaria Agrícola", prerrequisitos: [] },
  { nombre: "Riego y Drenaje", prerrequisitos: ["Fundamentos de Edafología"] },
  { nombre: "Fisiología Vegetal", prerrequisitos: ["Morfología General"] }
  // Puedes seguir agregando ramos aquí
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
