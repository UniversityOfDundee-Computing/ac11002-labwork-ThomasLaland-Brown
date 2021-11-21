var x = "";

function myFunction() {
  let x = document.getElementById("myText").value;
  while (authors.firstChild) {
    authors.removeChild(authors.firstChild);
  }
  display(x);
}

function display(x) {
  let ul = document.getElementById('authors');
  let url = 'https://www.omdbapi.com/?s=' + x + '&apikey=f84c6679';
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data);
      let authors = data.Search;
      return authors.map(function(author) {

        let img = createNode('img'),
          title = createNode('h5'),
          year = createNode('p'),
          a = createNode('a'),


          card = createNode('div'),
          cardBody = createNode('div'),
          column = createNode('div');



        console.log(author.imdbID);
        var linkAPI = "https: //www.omdbapi.com/?&apikey=f84c6679&i=" + author.imdbID;
        console.log(linkAPI);
        var linkHTML = "singleMovie.html?" + author.imdbID;
        console.log(linkHTML);
        a.innerHTML = "Film details";
        a.setAttribute('href', linkHTML);
        a.setAttribute('class', 'btn btn-primary');
        a.classList.add('cardText');
        img.src = author.Poster;
        img.classList.add("card-img-top")
        title.innerHTML = author.Title;
        title.classList.add('card-title');
        year.innerHTML = author.Year;
        year.classList.add('cardText');
        cardBody.classList.add("card-body");
        card.classList.add("card");
        card.classList.add("mt-3");
        card.classList.add("border-dark");
        column.classList.add("col-4");



        append(card, img);
        append(cardBody, title);
        append(cardBody, year);
        append(cardBody, a);

        append(card, cardBody);
        append(column, card);
        append(ul, column);
      })
    })
    .catch(function(error) {
      console.log(error);
    });
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
