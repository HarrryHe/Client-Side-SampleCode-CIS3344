"use strict";
function MakePhotoR_CGF() {

    var ImgList1 = [
        {"display": "New York City", "val": "pic/NYC.png"},
        {"display": "Switzerland", "val": "pic/switzerland.png"}]

    var ImgList2 = [
        {"display": "New York City", "val": "pic/NYC.png"},
        {"display": "Switzerland", "val": "pic/switzerland.png"},
        {"display": "Cow Boy", "val": "pic/cowboy.png"},
        {"display": "Default", "val": "pic/default.png"}]

    return (
        <div>
            <MakePhotoR
                imgUrl = "pic/switzerland.png"
                imgObjList = {ImgList1}
                userEmail = "Harry.Jiacheng@gmail.com"
                rating = "3"
                captureDate = "2002-09-14"
                view = "5"
                description = "Switzerland looks good."/>
            <MakePhotoR />
            <MakePhotoR
                imgUrl = "pic/cowboy.png"
                imgObjList = {ImgList2}
                userEmail = "Lee.Jay@gmail.com"
                rating = ""
                captureDate = ""
                view = "20"
                description = "Cowboy looks cool."/>
        </div>
    )
}