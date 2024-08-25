"use strict";
function MakeSlideShow({title = "Default Title", imgList = [{"caption": "Default", "pic": "pic/unknown.png", "hiddenInfo": "This is a description."}], backgroundColor = "#fff"}){

    var slideShowEle = document.createElement("div");
    slideShowEle.classList.add("slideShow");

    slideShowEle.innerHTML = `<div class="slideShowHeading"></div>
        <div class="imgContainer">
            <img src="" class="imgElement"/>
        </div>
        <div class="infoContainer"></div>
        <div class="hiddenInfo"></div>
        <div>
            <button class="backButton">Previous Photo</button>
            <button class="forwardButton">Next Photo</button>
            <button class="infoButton">Show Hidden Info</button>
        </div>
        `;

    var heading = slideShowEle.getElementsByClassName("slideShowHeading")[0];
    var imageElement = slideShowEle.getElementsByClassName("imgElement")[0];
    var infoContainer = slideShowEle.getElementsByClassName("infoContainer")[0];
    var backButton = slideShowEle.getElementsByClassName("backButton")[0];
    var forwardButton = slideShowEle.getElementsByClassName("forwardButton")[0];
    var infoButton = slideShowEle.getElementsByClassName("infoButton")[0];
    var hiddenInfo = slideShowEle.getElementsByClassName("hiddenInfo")[0];
    var currentImage = 0;

    slideShowEle.style.backgroundColor = backgroundColor;

    function display() {
        heading.innerHTML = `<h2>${title}</h2>`;
        console.log('Image Source:', imgList[currentImage].pic);
        imageElement.src = imgList[currentImage].pic;
        infoContainer.innerHTML = `<p>Caption: ${imgList[currentImage].caption}</p>`;
        hiddenInfo.innerHTML = "";
        infoButton.textContent = "Show Hidden Info";
    }

    function showHidden() {
        if (hiddenInfo.innerHTML === "") {
            hiddenInfo.innerHTML = `<p>${imgList[currentImage].hiddenInfo}</p>`;
            infoButton.textContent = "Hide Hidden Info";
        } else {
            hiddenInfo.innerHTML = "";
            infoButton.textContent = "Show Hidden Info";
        }
    }

    backButton.onclick = function () {
        if (currentImage > 0) {
            currentImage --;
        }
        else {
            //Loop Back
            currentImage = imgList.length - 1;
        }
        display();
    }

    forwardButton.onclick = function () {
        if(currentImage < imgList.length - 1) {
            currentImage++;
        }
        else {
            //Loop Back
            currentImage = 0;
        }
        display();
    }

    display();

    infoButton.onclick = showHidden;

    return slideShowEle;
}