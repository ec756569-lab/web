const info = {
    galan: "Luis Carlos Galán fue un político colombiano, líder del Nuevo Liberalismo y férreo opositor del narcotráfico. Sus propuestas se centraban en la transparencia y el fortalecimiento institucional.",
    pizarro: "Carlos Pizarro Leongómez fue comandante del M-19. Tras la desmovilización, buscó la paz y la reconciliación en Colombia como candidato presidencial.",
    lara: "Rodrigo Lara Bonilla, Ministro de Justicia, denunció y enfrentó con valentía a los carteles de droga, impulsando reformas judiciales, por lo cual fue vilmente asesinado.",
    garzon: "Jaime Garzón fue un humorista, periodista y mediador que usó la sátira para criticar la corrupción y promover la paz.",
    uribe: "Miguel Uribe Turbay fue un político que trabajó por la transparencia y la seguridad, buscando fortalecer las instituciones.",
    gaitan: "Jorge Eliécer Gaitán fue un abogado y líder liberal, símbolo de la lucha contra la corrupción y la desigualdad social en Colombia.",
    diana: "Diana Turbay fue una periodista y dirigente política colombiana, recordada por su labor en defensa de la libertad de prensa y su papel en la búsqueda de la paz durante los años de violencia en el país.",
    cano: "Guillermo Cano fue un periodista colombiano, director del diario El Espectador, reconocido por su firme posición contra el narcotráfico y la corrupción. Su compromiso con la verdad lo convirtió en una de las voces más influyentes del periodismo nacional, hasta su asesinato en 1986 como represalia por sus denuncias.",
    hurtado: "Álvaro Gómez Hurtado fue un abogado, periodista y político colombiano, líder del Partido Conservador y tres veces candidato presidencial. Reconocido por su defensa de la democracia y su propuesta de un gran acuerdo nacional, tuvo una amplia trayectoria en el periodismo y la diplomacia. Fue asesinado en 1995, en un caso que aún genera debate en la historia política del país."
};

function mostrarInfo(personaje) {
    document.getElementById("modal-titulo").innerText = personaje.charAt(0).toUpperCase() + personaje.slice(1);
    document.getElementById("modal-texto").innerText = info[personaje];
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Cerrar modal con clic fuera del contenido
window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
        cerrarModal();
    }
}
