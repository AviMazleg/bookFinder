function findBook(){
   var userSearch = document.getElementById('userInput').value;
   var bookResult = document.getElementById('result');


   bookResult.innerHTML = "";

   $.ajax({
      type: "GET",
      url:"https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
      dataType: "JSON",
      success: function(book){
         console.log(book);
         for(var i = 0 ; book.items.length; i++){
            var wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'media';
            // create img element
            var image = document.createElement('img');
            image.className = 'mr-3';
            image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
            // creating div element with class of media-body
            var div =document.createElement('div');
            div.className = 'media-body';
            // create header for boddy
            var header = document.createElement('h2')
            header.className = 'mt-0';
            header.innerHTML ='<b>' + book.items[i].volumeInfo.title + '</b>';
            //append header to the body
            div.appendChild(header);
            wrapperDiv.appendChild(image);
            wrapperDiv.appendChild(div);
            //this paragraph is for the author
            var authors = document.createElement('h6');
            authors.innerHTML = '<b>Author:</b> ' + book.items[i].volumeInfo.authors;
            div.appendChild(authors);            
            //create paragraph genres 
            var genres = document.createElement('p');
            genres.innerHTML ='<b>Gener:</b> ' + book.items[i].volumeInfo.categories;
            div.appendChild(genres);
            //create language paragraph
            var language = document.createElement('p');
            language.innerHTML ='<b>Language:</b> ' + book.items[i].volumeInfo.language;
            div.appendChild(language);
            //this paragraph is for the publish date
            var h6 = document.createElement('p');
            h6.innerHTML = '<b>Published:</b> ' + book.items[i].volumeInfo.publishedDate;
            div.appendChild(h6);
            //create element for description
            var desc = document.createElement('p');
            desc.innerHTML = book.items[i].volumeInfo.description;
            div.appendChild(desc);
            //create a tag to target book link
            var link = document.createElement('a');
            var btn = document.createElement('button');
            link.href = book.items[i].volumeInfo.previewLink;
            link.innerHTML = 'Purechase';
            btn.appendChild(link);
            div.appendChild(btn);
            //create hr to  separate every book 
            var line = document.createElement('hr');

            // make every element as children element of bookResult
            
            bookResult.appendChild(wrapperDiv);
            bookResult.appendChild(line);

         }
      }
   })
}
//back to top button
var mybutton = document.getElementById("btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     btn.style.display = "block";
   } else {
     btn.style.display = "none";
   }
 }
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }