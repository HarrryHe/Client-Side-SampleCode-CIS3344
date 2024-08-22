"use strict";
function MakePhotoListR_CGF(){
    var ImgList1 = [
        {"display": "New York City", "val": "pic/NYC.png"},
        {"display": "Switzerland", "val": "pic/switzerland.png"}];

    var ImgList2 = [
        {"display": "New York City", "val": "pic/NYC.png"},
        {"display": "Switzerland", "val": "pic/switzerland.png"},
        {"display": "Cow Boy", "val": "pic/cowboy.png"},
        {"display": "Default", "val": "pic/default.png"}];

    var PhotoList1 = [
        {imgUrl:"pic/battlefield.png",
        imgObjList: ImgList1,
        userEmail:"prof.sam@temple.edu",
        rating:4,
        captureDate:"01-01-2000",
        view:0,
        description:"This is good, you can choose your picture"},

        {imgUrl:"pic/battlefield.png",
            imgObjList: ImgList2,
            userEmail:"prof.sam@temple.edu",
            rating:4,
            captureDate:"01-01-2000",
            view:0,
            description:"This is good, you can choose your picture"},
        
        {}
    ];

    var PhotoList2 = [
        {imgUrl:"pic/battlefield.png",
            imgObjList: ImgList1,
            userEmail:"prof.sam@temple.edu",
            rating:4,
            captureDate:"01-01-2000",
            view:0,
            description:"This is good, you can choose your picture"},
    
            {imgUrl:"pic/battlefield.png",
                imgObjList: ImgList2,
                userEmail:"prof.sam@temple.edu",
                rating:4,
                captureDate:"01-01-2000",
                view:0,
                description:"This is good, you can choose your picture"}
    ];

    return (
        <div>
            <MakePhotoListR photoList={PhotoList1} title="Full" />
            <MakePhotoListR photoList={PhotoList2} />
            <MakePhotoListR />
        </div>
    )
}