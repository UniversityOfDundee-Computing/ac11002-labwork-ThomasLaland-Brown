function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


var currentLocation = document.URL;
console.log(currentLocation);
const searchString = currentLocation.split('?');
var id = searchString[1];

var url = "https://www.omdbapi.com/?&apikey=f84c6679&i=" + id;
let ul = document.getElementById('contents');

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data);

      console.log(data);
      let card = createNode('div'),
        cardBody = createNode('div'),
        column = createNode('div'),
        img = createNode('img'),
        title = createNode('h1'),
        date = createNode('h2'),
        desc = createNode('p'),
        actors = createNode('p'),
        director = createNode('p'),
        rating = createNode('p'),
        a = createNode('a');

      img.src = data.Poster;
      img.classList.add("card-img-top");
      title.innerHTML = data.Title;
      title.classList.add('card-title');
      date.innerHTML = data.Released;
      date.classList.add('cardText');
      desc.innerHTML = data.Plot;
      desc.classList.add('cardText');
      actors.innerHTML = "starring " + data.Actors;
      actors.classList.add('cardText');
      director.innerHTML = "directed by " + data.Director;
      director.classList.add('cardText');
      rating.innerHTML = data.Metascore + "/100";
      rating.classList.add('cardText');
      a.setAttribute('href', 'Activity1.html');
      a.innerHTML = "Go back";
      a.classList.add('cardText');
      cardBody.classList.add("card-body");
      card.classList.add("card");
      card.classList.add("mt-3");
      card.classList.add("border-dark");
      column.classList.add("col-4");

      append(card, img);
      append(cardBody, title);
      append(cardBody, date);
      append(cardBody, desc);
      append(cardBody, actors);
      append(cardBody, director);
      append(cardBody, rating);
      append(cardBody, a);

      append(card, cardBody);
      append(column, card);
      append(ul, column);
    })

  .catch(function(error) {
    console.log(error);
  });
