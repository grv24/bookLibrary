console.log('es6 version for project')


class Book{
    constructor(name, author, type){
        this.name = name
        this.author = author
        this.type = type
    }
}


class Display{
    //add
     add(book) {
        console.log('add')
        TableBody = document.getElementById('tablebody')
        let uiString = `
        <tr>
            <th scope="row">-</th>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
        `
        TableBody.innerHTML += uiString;
    }

   //clear


    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset()
        
    }

  //validate

  validate(book) {
    if(book.name.length<3||book.author.length<3){
         return false
    }
    else{
     return true
    } 
 }

 //show

 show(type,displayMessage) {
    let message = document.getElementById('msg')
    message.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
                              <strong id="update">${type}</strong>${displayMessage}
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>
    ` 
  
         setTimeout(() => {
             message.innerHTML =" "
         }, 2000);
  
   }

}

//Add submit event listener
let LibraryForm = document.getElementById('libraryForm')
LibraryForm.addEventListener('submit', libraryFormSubmit)


function libraryFormSubmit(e) {
    //after call the prevent default from stop reload
    e.preventDefault()
    let name = document.getElementById('bookName').value
    let author = document.getElementById('Author').value
    let type;
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('Cooking')
    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }


    let book = new Book(name, author, type)
    console.log(book)
     
    let display = new Display()
    if(display.validate(book)){
        display.add(book)
        display.clear();
        display.show('Success ',' Wow you are successfully added this book')
    }else{
        display.show('Danger ',' Sorry you can not added this book')
    }
}