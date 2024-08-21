"use strict";
function MakePhoto ({
    imgUrl = "pic/Unknown.jpg",
    imgObjList = [{ "display": "New York City", "val": "pic/NYC.png" },
        { "display": "Battlefield", "val": "pic/battlefield.png" },
        { "display": "Default", "val": "pic/Unknown.png" }],
    userEmail = "sample@sample.com",
    rating = null,
    captureDate = null,
    view = 0,
    description = "This is a sample description."}){
    
    //initialization
    var photoObj = document.createElement("div");
    photoObj.classList.add("photo");

    //private property
    var currentRating = rating;
    var currentCaptureDate = captureDate;
    var RatingCount = rating ? 1:0;
    var view = view;
    var imgUrl = imgUrl;

    //public property
    photoObj.description = description;
    photoObj.userEmail = userEmail;

    photoObj.setDescription = function (newDescription) {
        photoObj.description = newDescription;
        //update UI
        display();
    }

    /*photoObj.setImageURL = function (newImgUrl) {
        imgUrl = newImgUrl;
        //update UI
        display();
    }*/

    photoObj.setCaptureDate = function (newCaptureDate) {
        currentCaptureDate = newCaptureDate;
        //update UI
        display();
    }

    photoObj.setRating = function (newRating) {
        var newRating = strToNum(newRating);
        if(!isNaN(newRating) && newRating >= 0 && newRating <= 5) {
            currentRating = ((currentRating * RatingCount) + newRating) / (RatingCount + 1);
            RatingCount++;
        }
        else {
            alert("Invalid Rating.");
            console.log("Invalid Rating.");
        }
        //update UI
        display();
    }

    photoObj.increaseView = function () {
        view = view + 1;
        //update UI
        display();
    }

    photoObj.innerHTML = `
    <div class='imageContainer'></div>
    <select class="selectImage">Select Your Image</select>
    <div class='photoInfo'></div> <br/>
    <button class='DescriptionButton'>Change Description to: </button>
    <input class='newDescriptionInput'/> <br/>
    <button class='captureDateButton'>Change Capture Date to: </button>
    <input class='newCaptureDateInput'/> <br/>
    <button class='rateButton'>Adding your Rate here (from 0 - 5): </button>
    <input class='rateInput'/>
    `;

    // Create variable references for all DOM elements
    var imageContainer = photoObj.getElementsByClassName("imageContainer")[0];
    var imageSelector = photoObj.getElementsByClassName("selectImage")[0];
    var photoInfo = photoObj.getElementsByClassName("photoInfo")[0];
    var DescriptionButton = photoObj.getElementsByClassName("DescriptionButton")[0];
    var newDescriptionInput = photoObj.getElementsByClassName("newDescriptionInput")[0];
    var captureDateButton = photoObj.getElementsByClassName("captureDateButton")[0];
    var newCaptureDateInput = photoObj.getElementsByClassName("newCaptureDateInput")[0];
    var rateButton = photoObj.getElementsByClassName("rateButton")[0];
    var rateInput = photoObj.getElementsByClassName("rateInput")[0];

    //add image list to the html select element
    for (var listEle of imgObjList) {
        var opt = document.createElement("option");
        opt.innerHTML = listEle.display;
        opt.value=listEle.val;
        imageSelector.appendChild(opt);
    }
    imageSelector.value = imgUrl;

    imageSelector.onchange = function() {
        display();
    };

    //private display method, but just leave it for now
    var display = function () {
        imageContainer.innerHTML = `<img src='${imageSelector.value}'/>`
        photoInfo.innerHTML = `
        <h3>User Email: ${photoObj.userEmail}</h3>
        <p>Description: ${photoObj.description}</p>
        <p>Capture Date: ${currentCaptureDate}</p>
        <p>Average Rate: ${currentRating}</p>
        <p>Picture View: ${view}</p>`
    }
    display();

    //Description onclick listener
    DescriptionButton.onclick = function () {
        photoObj.setDescription(newDescriptionInput.value);
    }

    //Capture Date onclick listener
    captureDateButton.onclick = function () {
        photoObj.setCaptureDate(newCaptureDateInput.value);
    }

    //Rate onclick listener
    rateButton.onclick = function () {
        photoObj.setRating(rateInput.value)
    }

    //Article view listener
    var hasIncreasedView = false;

    imageContainer.onmouseenter = function () {
        if (!hasIncreasedView) {
            photoObj.increaseView();
            hasIncreasedView = true;
        }
    };

    imageContainer.onmouseleave = function () {
        hasIncreasedView = false;
    };

    //helper function from Professor Sally
    function strToNum(str) {
        str += ""; // convert to string, if it's not a string.

        // remove formatting characters, if there are any
        str = str.replace("$", "");
        str = str.replace(",", "");

        var num = Number(str); // convert to number again.
        return num;
    }

    return photoObj;
}