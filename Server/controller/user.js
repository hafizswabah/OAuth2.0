import { OAuth2Client } from "google-auth-library"
import axios from "axios"


export async function auth(req, res) {

    const redirectUrl = "http://localhost:3000"

    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRETE,
        redirectUrl
    )

    const authorizedUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: "https://www.googleapis.com/auth/userinfo.profile openid",
        prompt: "consetnt"
    })
    res.json({ url: authorizedUrl })
}

async function getUserData(access_tocken) {
    let data = await axios.get(`https://www.googoleapi.com/oauth2/v3/userinfo?access_token${access_tocken}`)
    console.log('data', data);
}
export async function authentication(req, res) {
    let code = req.query.code;
    try {
        const redirectUrl = "http://localhost:3000"
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRETE,
            redirectUrl
        )
        const res = await oAuth2Client.getToken(code);
        await oAuth2Client.setCredentials(res.tokens);
        console.log('token acquired');
        const user = oAuth2Client.credentials;
        console.log('creditials', user);
        await getUserData(user.access_token)
    } catch (err) {
        console.log('login err', err);
    }
}