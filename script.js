const user = "me";
const booksRef = document.getElementById("books");
const modalRef = document.getElementById("BookModalBox");
const sentComments = document.getElementById("sentComments");

function renderBooks() {
    booksRef.innerHTML = "";

    if (localStorage.getItem("books")) {
        books = JSON.parse(localStorage.getItem("books"));
        for (let i = 0; i < books.length; i++) {
            booksRef.innerHTML += bookCardTemplate(i);
        }
        localStorage.setItem("books", JSON.stringify(books));
    } else {
        for (let i = 0; i < books.length; i++) {
            booksRef.innerHTML += bookCardTemplate(i);
        }
        localStorage.setItem("books", JSON.stringify(books));
    }
}

function renderComments(index) {
    let allComments = "";

    for (let y = 0; y < books[index].comments.length; y++) {
        allComments += getComments(index, y);
    }
    return allComments;
}

function getComment(index) {
    let userComment = document.getElementById(`inputComments-${index}`);
    return userComment.value;
}

function sendComments(index) {
    if (getComment(index) == "") {
        document.getElementById(`inputComments-${index}`).style.border =
            "1px solid red";
        return;
    }
    books[index].comments.push({ name: user, comment: getComment(index) });
    localStorage.setItem("books", JSON.stringify(books));
    renderBooks();
}

function likeTheBook(index) {
    if (books[index].liked == false) {
        books[index].likes = books[index].likes + 1;
        books[index].liked = true;
        document.getElementById("likeImg").src = "./assets/img/likes.svg";
    } else {
        books[index].likes = books[index].likes - 1;
        books[index].liked = false;
        document.getElementById("likeImg").src =
            "./assets/img/likes_notFilled.svg";
    }
    localStorage.setItem("books", JSON.stringify(books));
    renderBooks();
}


