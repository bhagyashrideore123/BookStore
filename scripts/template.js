function bookCardTemplate(i) {
    if (books[i].liked == false) {
        var likeImgPath = "./assets/img/likes_notFilled.svg";
    } else {
        likeImgPath = "./assets/img/likes.svg";
    }

    return /*html*/ `
        <div class="bookCard">
            <table>
                <thead>
                    <h2>${books[i].name}</h2>
                </thead>
                <tr>
                    <td class="txtAlign">
                        <img onclick="openModal(${i})" class="bookImg" src=${books[i].path} alt=${books[i].name}>
                    </td>
                </tr>
                <tr class="priceLikesStyle">
                    <td>
                        <p class="boldFont">${books[i].price}</p>
                    </td>
                    <td class="priceStyle">
                        <span class="priceStyle">
                                <p id="likesCount-${i}" class="boldFont">${books[i].likes}</p>
                                <button onclick="likeTheBook(${i})">
                                    <img id="likeImg-${i}" src=${likeImgPath} alt="status_of_book">
                                </button>
                        </span>
                    </td>
                </tr>
                <tr class="marginTop">
                    <td>
                        <p class="boldFont">Author : </p>
                    </td>
                    <td>
                        <p>${books[i].author}</p>
                    </td>
                </tr>
                <tr>
                    <td> 
                        <p class="boldFont">Year :</p>
                    </td>
                    <td>  
                        <p> ${books[i].publishedYear}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="boldFont">Genre : </p>
                    </td>
                    <td>
                        <p> ${books[i].genre}</p>
                    </td>
                </tr>
            </table>
            <h3 class="commentHeadingStyle">Comments</h3>
            <section class="overflowText">                            
                <table id="comments_table">                
                ${renderComments(i)}
                </table>               
            </section> 
            <div class="flexDivRow">
                <input id="inputComments-${i}"  class="inputStyle" type="text" placeholder="Write your comments here ...">
                <button id="sentComments" class="sendComment" onclick="sendComments(${i})"><img class="sentImg" src="./assets/img/sent_icon.svg" alt="sent_button_image"></button>
            </div>
    </div>`;
}

function getComments(index, y) {
    return /*html*/ `
        <div class="commentBox">
            <p class="boldFont">${books[index].comments[y].name}</p>
            <p>${books[index].comments[y].comment}</p>
        </div>
    `;
}

function showUsersComments(comment) {
    return /*html*/ `
        <div class="commentBox">
            <p class="boldFont">${user}</p>
            <p>${comment}</p>
        </div>
    `;
}
