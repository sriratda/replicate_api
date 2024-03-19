import Replicate from "replicate";
import dotenv from 'dotenv';
dotenv.config({ path: '../backend/config/config.env' });

export const getImage = async (req, res) => {
    const imgPath = req.body.img
    console.log(process.env);
    console.log(imgPath)
    try {
        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
        });
        
        
        const input = {
            img: imgPath
        };
        
        const output = await replicate.run("tencentarc/gfpgan:0fbacf7afc6c144e5be9767cff80f25aff23e52b0708f17e20f9879b2f21516c", { input });
        res.send(output)
    } catch (error) {
        res.status(400).send(error.message);
    }
}
