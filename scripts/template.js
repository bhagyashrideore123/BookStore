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
                    <td>
                        <img onclick="openModal(${i})" class="bookImg" src=${books[i].path} alt=${books[i].name}>
                    </td>
                </tr>
                <tr class="priceLikesStyle">
                    <td>
                        <p class="boldFont">${books[i].price}</p>
                    </td>
                    <td class="priceStyle">
                        <span class="priceStyle">
                                <p class="boldFont">${books[i].likes}</p>
                                <button onclick="likeTheBook(${i})">
                                    <img id="likeImg" src=${likeImgPath} alt="status_of_book">
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
            <section class="overflowText">                            
                <table id="comments_table">
                <h3 class="commentHeadingStyle">Comments</h3>
                ${renderComments(i)}
                </table>
                <div class="flexDivRow">
                    <input id="inputComments-${i}"  class="inputStyle" type="text" placeholder="Write your comments here ...">
                    <button id="sentComments" onclick="sendComments(${i})"><img class="sentImg" src="./assets/img/sent_icon.svg" alt="sent_button_image"></button>
                </div>
            </section> 
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

function renderDialog(index) {
    return /*html*/ `
        <section class="dialogHeader">
            <p id="dialogTitle">${books[index].name}</p>
            <button tabindex="0" onkeyup="onKeyUpClose(event)"> 
                <img tabindex="0" class="imgDialog" src="./assets/img/close.svg" alt="close" onclick="closeModal()"/>
            </button>
        </section>
        <section class="flexstyle">
            <div tabindex=0 id="backwardDiv" class="direction_arrow">
                <button  id="backward"> <img class="imgDialog" src="./assets/img/Arrow-left.svg" onclick="gobackward(${index})" alt="previous_photo" /></button>
            </div>
            <img src=${books[index].path} alt=${books[index].name}/>
            <div tabindex=0 id="forwardDiv" class="direction_arrow">
                <button  id="forward" > <img class="imgDialog" src="./assets/img/Arrow-Right.svg" onclick="goForward(${index})"  alt="next_photo" /></button>
            </div>
        </section>
        <section class="dialogFooter">
            <p>${books[index].description}</p>
        </section>`;
}
