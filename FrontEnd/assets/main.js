const myImage = document.querySelector('img');
const gallery = document.querySelector(".gallery");

fetch('http://localhost:5678/api/works')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
    myJson.forEach(element => {
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        image.src = element.imageUrl;
        image.alt = element.title;

        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = element.title;
        figure.append(image);
        figure.append(figcaption);

        gallery.append(figure);
    });
});

/*
<figure>
	<img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
	<figcaption>Abajour Tahina</figcaption>
</figure>
*/
