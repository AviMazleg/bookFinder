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
            var header = document.createElement('h4')
            header.className = 'mt-0';
            header.innerHTML = book.items[i].volumeInfo.title;
            //append header to the body
            div.appendChild(header);
            wrapperDiv.appendChild(image);
            wrapperDiv.appendChild(div);
            //this paragraph is for the author
            var authors = document.createElement('p');
            authors.innerHTML = 'Author: ' + book.items[i].volumeInfo.authors;
            div.appendChild(authors);
            //this paragraph is for the publish date
            var h6 = document.createElement('p');
            h6.innerHTML = 'Published: ' + book.items[i].volumeInfo.publishedDate;
            div.appendChild(h6);
            //create element for description
            var desc = document.createElement('p');
            desc.innerHTML = book.items[i].volumeInfo.description;
            div.appendChild(desc);
            //create hr to  separate every book 
            var line = document.createElement('hr');
            // make evert element as children element of bookResult
            bookResult.appendChild(wrapperDiv);
            bookResult.appendChild(line);

         }
      }
   })
}