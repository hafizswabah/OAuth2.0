import { OAuth2Client } from "google-auth-library"
import axios from "axios"
import userModel from "../modal/userModal.js";

export async function auth(req, res) {
    console.log('auth route works');
    const redirectUrl = "http://localhost:8888/user/auth"

    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRETE,
        redirectUrl
    )

    const authorizedUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: "https://www.googleapis.com/auth/userinfo.profile openid email",
        prompt: "consent"
    })
    res.json({ url: authorizedUrl })
}

async function getUserData(access_tocken) {
    let data = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_tocken}`);
    return data
}
export async function authentication(req, res) {
    let code = req.query.code;
    try {
        const redirectUrl = "http://localhost:8888/user/auth"
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRETE,
            redirectUrl
        )
        const response = await oAuth2Client.getToken(code);
        await oAuth2Client.setCredentials(response.tokens);
        console.log('token acquired');
        const userDetails = oAuth2Client.credentials;
        let userData = await getUserData(userDetails.access_token)
        let check=await userModel.findOne({email:userData.data.email})
        if(!check){
            let user = new userModel({ name: userData.data.name, email: userData.data.email, profileImage: userData.data.picture })
            await user.save()
        }
    
        res.redirect("http://localhost:3000")

    } catch (err) {
        console.log('login err', err);
    }
}