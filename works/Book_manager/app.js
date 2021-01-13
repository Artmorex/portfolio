const localhost = 'http://localhost:5500';

const root = document.getElementById('root');
let container = document.createElement('main');
container.classList.add('container');
let bookListSection = document.createElement('aside');
bookListSection.classList.add('book-list');
let bookPreviewSection = document.createElement('section');
bookPreviewSection.classList.add('book-preview');

container.appendChild(bookListSection);
container.appendChild(bookPreviewSection);
root.appendChild(container);

let bookListUl = document.createElement('ul');

function createImg(src, alt, title) {
    let img = document.createElement('img');
    src = src || 'https://i.ibb.co/hgtxmnH/no-image.png';
    img.src = src;
    if (alt !== null) {
        img.alt = alt; 
    }
    if (title !== null) {
        img.title = title; 
    }
    return img;
}

(function renderListOfBooks(){
    for (let i = 0; i < window.data.length; i++) {
        let bookListLi = document.createElement('li');
        let bookTitle = document.createElement('h2');
        bookTitle.innerText = window.data[i].title;

        let bookImg = createImg(window.data[i].thumbnailUrl, 'book thumbnail', window.data[i].title);
        let bookShortDesc = document.createElement('p');
        bookShortDesc.appendChild(bookImg);
        let text = document.createTextNode(window.data[i].shortDescription);
        if(text.textContent==='undefined'){
            text.textContent = '';
        }
        bookShortDesc.appendChild(text);

        let bookCategories = document.createElement('div');
        for (let j = 0; j < window.data[i].categories.length; j++) {
            let bookCategoriesName = document.createElement('div');
            bookCategoriesName.innerText = window.data[i].categories[j];
            bookCategoriesName.classList.add('book-categories');
            bookCategories.appendChild(bookCategoriesName);
        }

        let bookButton = document.createElement('button');
        bookButton.classList.add('edit-button');
        bookButton.innerText = 'edit';

        bookListLi.setAttribute('data-uid', window.data[i].isbn);
        bookListLi.appendChild(bookTitle);
        bookListLi.appendChild(bookShortDesc);
        bookListLi.appendChild(bookCategories);
        bookListLi.appendChild(bookButton);
        bookListUl.appendChild(bookListLi);
    }
})();

function renderView(bookObjectId) {

    let bookTitle = document.createElement('h2');
    bookTitle.innerText = bookObjectId.title;

    let bookImg = createImg(bookObjectId.thumbnailUrl, 'book thumbnail', bookObjectId.title);

    let bookFullDesc = document.createElement('p');
    let text = document.createTextNode(bookObjectId.longDescription);
    bookFullDesc.appendChild(bookImg);
    bookFullDesc.appendChild(text);

    let bookCategories = document.createElement('div');
    for (let j = 0; j < bookObjectId.categories.length; j++) {
        let bookCategoriesName = document.createElement('div');
        bookCategoriesName.innerText = bookObjectId.categories[j];
        bookCategoriesName.classList.add('book-categories');
        bookCategories.appendChild(bookCategoriesName);
    }

    let authors = document.createElement('div');
    for (let j = 0; j < bookObjectId.authors.length; j++) {
        let getAuthors = document.createElement('div');
        getAuthors.innerText = bookObjectId.authors[j];
        getAuthors.classList.add('authors');
        authors.appendChild(getAuthors);
    }

    let publishedDateDiv = document.createElement('div');
    let publishedDate = bookObjectId.publishedDate.$date.substr(0, 10);
    publishedDateDiv.innerText = `Publish date: ${publishedDate}`;

    let pageCountDiv = document.createElement('div');
    let pageCount = bookObjectId.pageCount;
    pageCountDiv.innerText = `Page count: ${pageCount}`;

    bookPreviewSection.appendChild(bookTitle);
    bookPreviewSection.appendChild(bookFullDesc);
    bookPreviewSection.appendChild(bookCategories);
    bookPreviewSection.appendChild(authors);
    bookPreviewSection.appendChild(publishedDateDiv);
    bookPreviewSection.appendChild(pageCountDiv);
}

function renderEditView(bookObjectId) {

    let updateValue = function (e, el) {
        el.innerText = e.value;
    }

    let addInputOnElement = function (el, type) {
        console.log(el);
        el.innerHTML = '';
        let input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('value', el.innerText);
        //input.style.width = el.clientWidth;
        input.addEventListener('input', updateValue(input, el));

        el.appendChild(input);
    }

    let bookTitle = document.createElement('h2');
    bookTitle.innerText = bookObjectId.title;
    bookTitle.classList.add('editable');
    bookTitle.addEventListener('click', function(){
        addInputOnElement(bookTitle, 'text');
    }); 

    let bookImg = createImg(bookObjectId.thumbnailUrl, 'book thumbnail', bookObjectId.title);

    let bookFullDesc = document.createElement('p');
    let text = document.createTextNode(bookObjectId.longDescription);
    bookFullDesc.appendChild(bookImg);
    bookFullDesc.appendChild(text);

    let bookCategories = document.createElement('div');
    for (let j = 0; j < bookObjectId.categories.length; j++) {
        let bookCategoriesName = document.createElement('div');
        bookCategoriesName.innerText = bookObjectId.categories[j];
        bookCategoriesName.classList.add('book-categories');
        bookCategories.appendChild(bookCategoriesName);
    }

    let authors = document.createElement('div');
    for (let j = 0; j < bookObjectId.authors.length; j++) {
        let getAuthors = document.createElement('div');
        getAuthors.innerText = bookObjectId.authors[j];
        getAuthors.classList.add('authors');
        authors.appendChild(getAuthors);
    }

    let publishedDateDiv = document.createElement('div');
    let publishedDate = bookObjectId.publishedDate.$date.substr(0, 10);
    publishedDateDiv.innerText = `Publish date: ${publishedDate}`;

    let pageCountDiv = document.createElement('div');
    let pageCount = bookObjectId.pageCount;
    pageCountDiv.innerText = `Page count: ${pageCount}`;

    bookPreviewSection.appendChild(bookTitle);
    bookPreviewSection.appendChild(bookFullDesc);
    bookPreviewSection.appendChild(bookCategories);
    bookPreviewSection.appendChild(authors);
    bookPreviewSection.appendChild(publishedDateDiv);
    bookPreviewSection.appendChild(pageCountDiv);

}

function setBookById(id, preview){
    bookPreviewSection.innerHTML = '';
    let bookObjectId = window.data.find(el => el.isbn === id);
    if (bookObjectId == null) {
        throw new Error('bookObjectId is null');
    }
    if (preview){
        renderView(bookObjectId);
        window.scrollTo(0, 0);
    } else {
        renderEditView(bookObjectId);
        window.scrollTo(0, 0);
    }
}

let bookButtonAdd = document.createElement('button');
bookButtonAdd.classList.add('add-button');
bookButtonAdd.innerText = 'Add';
bookListUl.appendChild(bookButtonAdd);
bookListUl.addEventListener('click', function (e) {
    if (e.target && e.target.matches('li')) {
        let bookPath = `/index.html?id=${e.target.getAttribute('data-uid')}`;
        let bookPrewiev = new URL(`${bookPath}#preview`, localhost);
        setBookById(e.target.getAttribute('data-uid'), true);
        //window.location.assign(bookPrewiev);
        //window.history.pushState({}, null, bookPrewiev);
    }
    if (e.target && e.target.matches('button.edit-button')) {
        let bookPath = `/index.html?id=${e.target.parentNode.getAttribute('data-uid')}`;
        let bookEdit = new URL(`${bookPath}#edit`, localhost);
        setBookById(e.target.parentNode.getAttribute('data-uid'), false);
        //window.location.assign(bookEdit);
        //window.history.pushState({}, null, bookEdit);
    }
    if (e.target && e.target.matches('button.add-button')) {
        let bookAdd = new URL('#add', localhost);
        //window.location.assign(bookAdd);
        //window.history.pushState({}, null, bookAdd);
    }
});

bookListSection.appendChild(bookListUl);