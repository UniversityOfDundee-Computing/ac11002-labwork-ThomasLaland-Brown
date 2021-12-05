var x = ""

function myFunction() {
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  new Vue({
    el: '#app',
    data: {
      movies: []
    },
    created() {
      var vm = this
      axios.get('https://www.omdbapi.com/?s=' + document.getElementById("myText").value + '&apikey=dabdeeef')
        .then(function(response) {
          vm.movies = response.data.Search
          console.log(vm.movies)
          let ul = document.getElementById('app');
          let authors = vm.movies;
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
    })
  }


  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }
