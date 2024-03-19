import sharp from "sharp";

const inputImagePath = "../img/women.png";

const outputImagePath = "../img/cropImg.png";

const cropOptions = {
    left: 100,
    top: 50,
    width: 200,
    height: 150
};

sharp(inputImagePath)
    .extract(cropOptions)
    .toFile(outputImagePath, (err, info) => {
        if (err) {
            console.error("Error cropping the image: ", err);
        } else {
            console.log("Image cropped successfully: ", info);
        }
    });