"use strict";

function MakePhoto_CGF() {
    var element = document.createElement("div");
    var firstPhoto = MakePhoto({imgUrl:"pic/cowboy.png",
        imgObjList:[{ "display": "Cowboy", "val": "pic/cowboy.png" },
            { "display": "Sunrise", "val": "pic/sunrise.png" }],
        userEmail:"harry.he@temple.edu",
        rating:3,
        captureDate:"02-03-2024",
        view:50,
        description:"This is a picture that showcase a cowboy in western land."});

    var secondPhoto = MakePhoto({imgUrl:"pic/battlefield.png",
        imgObjList:[{ "display": "New York City", "val": "pic/NYC.png" },
            { "display": "Battlefield", "val": "pic/battlefield.png" },
            { "display": "Mountain", "val": "pic/mountain.png" }],
        userEmail:"prof.sam@temple.edu",
        rating:4,
        captureDate:"01-01-2000",
        view:0,
        description:"This is good, you can choose your picture"});

    var thirdPhoto = MakePhoto({});

    element.appendChild(firstPhoto);
    element.appendChild(secondPhoto);
    element.appendChild(thirdPhoto);

    return element;
}