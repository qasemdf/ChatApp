const express = require("express"); //runs our http server
const cors = require("cors"); //call this server from any other origin
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body; //taking this username
    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/", //then looking if the user exists, if not then it will be created
            {username: username, secret: username, first_name: username}, //required data that the endpoint needs
            {headers: {"private-key": "1f39267d-d68d-4e64-8a1e-c59bdfd482ac"}} //private key from chatEngine project API, allows us to create/ destroy users
        );
        return res.status(r.status).json(r.data);
    }catch(e) {
        return res.status(e.response.status).json(e.response.data);
    }       
});

app.listen(3001);