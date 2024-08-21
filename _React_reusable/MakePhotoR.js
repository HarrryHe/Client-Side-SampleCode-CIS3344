"use strict";
function MakePhotoR ({
    imgUrl = "pic/Unknown.jpg",
    imgObjList = [{ "display": "New York City", "val": "pic/NYC.png" },
        { "display": "Battlefield", "val": "pic/battlefield.png" },
        { "display": "Default", "val": "pic/Unknown.png" }],
    userEmail = "sample@sample.com",
    rating = null,
    captureDate = null,
    view = 0,
    description = "This is a sample description."}){

    //This is used for calculating average ratings
    const [ratingCount, setRatingCount] = React.useState(rating ? 1 : 0);

    //Declare new states
    const [PhotoUserEmail, SetUserEmail] = React.useState(userEmail);
    const [PhotoRating, SetRating] = React.useState(rating);
    const [PhotoCaptureDate, SetCaptureDate] = React.useState(captureDate);
    const [PhotoView, SetView] = React.useState(view);
    const [PhotoDescription, SetDescription] = React.useState(description);
    const [PhotoImgUrl, SetImgUrl] = React.useState(imgUrl);
    const [PhotoImgObjList, SetImgObjList] = React.useState(imgObjList);
    const [PhotoDescriptionInput, SetDescriptionInput] = React.useState("");
    const [PhotoRatingInput, SetRatingInput] = React.useState("");
    const [PhotoCaptureDateInput, SetCaptureDateInput] = React.useState("");

    const [hasIncreasedView, setHasIncreasedView] = React.useState(false);

    function changePhotoDescription () {
        SetDescription(PhotoDescriptionInput);
    }

    function averageRating () {
        if(!isNaN(Number(PhotoRatingInput)) && Number(PhotoRatingInput) >= 0 && Number(PhotoRatingInput) <= 5) {
            var newRating = ((Number(PhotoRating) * ratingCount) + Number(PhotoRatingInput)) / (ratingCount + 1);
            setRatingCount(ratingCount + 1);
            SetRating(newRating);
        }
        else {
            alert("Invalid Rating.");
            console.log("Invalid Rating.");
        }
    }

    function changePhotoCaptureDate () {
        SetCaptureDate(PhotoCaptureDateInput);
    }

    function increasePhotoView () {
        SetView(Number(PhotoView) + 1);
    }

    // Handle mouse enter and leave to increase view count
    function handleMouseEnter() {
        if (!hasIncreasedView) {
            increasePhotoView();
            setHasIncreasedView(true);
        }
    }

    function handleMouseLeave() {
        setHasIncreasedView(false);
    }

    return (
        <div className="photo">
            <div class='imageContainer'>
                <img src={PhotoImgUrl} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            </div>
            <select class="selectImage" onChange={e => SetImgUrl(e.target.value)}  value={PhotoImgUrl}>
                {
                    PhotoImgObjList.map(cond =>
                        <option key={cond.val} value={cond.val}>{cond.display}</option>
                    )
                }
            </select>
            <div class="photoInfo">
                <h3>User Email: {PhotoUserEmail}</h3>
                <p>Description: {PhotoDescription}</p>
                <p>Capture Date: {PhotoCaptureDate}</p>
                <p>Average Rate: {PhotoRating}</p>
                <p>Picture View: {PhotoView}</p>
            </div>
            <button class='DescriptionButton' onClick={changePhotoDescription}>Change Description to: </button>
            <input class='newDescriptionInput'onChange={e => SetDescriptionInput(e.target.value)}/> <br/>
            <button class='captureDateButton' onClick={changePhotoCaptureDate}>Change Capture Date to: </button>
            <input class='newCaptureDateInput' onChange={e => SetCaptureDateInput(e.target.value)}/> <br/>
            <button class='rateButton' onClick={averageRating}>Adding your Rate here (from 0 - 5): </button>
            <input class='rateInput' onChange={e => SetRatingInput(e.target.value)}/>
        </div>
    )

}