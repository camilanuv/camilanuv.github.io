document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los títulos del acordeón
    const titulos = document.querySelectorAll(".acordeon .titulo");
  
    titulos.forEach((titulo) => {
      titulo.addEventListener("click", () => {
        // Obtener el contenedor de contenido asociado al título
        const contenido = titulo.nextElementSibling;
  
        // Si el contenido ya está visible, colapsarlo
        if (contenido.style.maxHeight) {
          contenido.style.maxHeight = null; // Remueve el estilo inline
          contenido.style.padding = "0 1rem"; // Opcional: quita el padding al cerrar
        } else {
          // Primero cierra cualquier otro bloque abierto
          document.querySelectorAll(".acordeon .contenido").forEach((c) => {
            c.style.maxHeight = null;
            c.style.padding = "0 1rem";
          });
  
          // Abrir el bloque actual
          contenido.style.maxHeight = contenido.scrollHeight + "px";
          contenido.style.padding = "1rem"; // Añade padding al abrir
        }
      });
    });
  });
  