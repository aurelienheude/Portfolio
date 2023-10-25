document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".pContainer p");
  const textToWrite = "Aurelien heude";
  // Réinitialise le contenu de l'élément pour qu'il ne s'affiche pas lorsque l'on actualise
  textElement.innerHTML = "";

  function typeText(text) {
    let index = 0;
    const textLength = text.length;

    function animate() {
      if (index < textLength) {
        textElement.innerHTML += text[index];
        index++;
        
        setTimeout(animate, 100);
      }
    }

    setTimeout(animate, 2000);
  }

  typeText(textToWrite);

  setTimeout(animate, 2000);
});

  setTimeout(function() {
    document.querySelector(".loader").style.display = "none";
  }, 5000);

function setProgress(percentage) {
  document.getElementById("progression").style.width = percentage + "%";
  document.querySelector(".progressionTxT").textContent = percentage.toString() + "%";
}

setProgress(9);