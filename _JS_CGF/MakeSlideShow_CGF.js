"use strict";
function MakeSlideShow_CGF () {

    var element = document.createElement("div");

    element.innerHTML = `
        <div class="firstShow"></div>
        <div class="secondShow"></div>
        <div class="thirdShow"></div>
    `

    var firstDiv = element.getElementsByClassName("firstShow")[0];
    var secondDiv = element.getElementsByClassName("secondShow")[0];
    var thirdDiv = element.getElementsByClassName("thirdShow")[0];

    ajax("gallary1.json", processGallary1, firstDiv);
    function processGallary1 (gallary1List) {
        var photo1List = gallary1List.map(photo => ({ 
            pic: photo.pic,
            caption: photo.caption,
            hiddenInfo: photo.hiddenInfo
        }));

        var slideShow1 = MakeSlideShow({title: "Photo Gallery 1", imgList: photo1List, backgroundColor: "blue" });
        firstDiv.appendChild(slideShow1);
    }

    ajax("gallary2.json", processGallary2, secondDiv);
    function processGallary2 (gallary2List) {
        var photo2List = gallary2List.map(photo => ({ 
            pic: photo.pic,
            caption: photo.caption,
            hiddenInfo: photo.hiddenInfo
        }));

        var slideShow2 = MakeSlideShow({title: "Photo Gallery 2", imgList: photo2List, backgroundColor: "#fff" });
        secondDiv.appendChild(slideShow2);
    }

    var slideShow3 = MakeSlideShow({});
    thirdDiv.appendChild(slideShow3);

    return element;
}