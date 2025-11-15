//Import modules
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
//Front end connection
app.use(cors());

//Dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Routing
app.get ("/", (req, res) => {
    res.json({ message: "Welcome to the League of Legends Sound API" });
});

//Serve files from the api
app.get('/sounds/:champion/:ability', (req, res) => {
    const { champion, ability } = req.params;
    const soundPath = path.join(__dirname, 'assets', 'champions', champion, `${ability}.mp3`);
    
    //Check if file is there
    if (!fs.existsSync(soundPath)) {
        console.error(`Sound not found: ${champion} ${ability}`);
        return res.status(404).json({ error: "Sorry summoner, I couldn't find that sound. "})
    }

    res.sendFile(soundPath);
});

//List all champions from the game
import fs, { statSync } from 'fs';
app.get('/champions', (req, res) => {
    const dir = path.join(__dirname, "assets", "champions");
    try {
        const champions = fs.readdirSync(dir).filter((f) => fs.statSync(path.join(dir, f)).isDirectory());
        res.json(champions);
    } catch (err) {
        res.status(500).json({ error: 'Could not retrieve champions' });
    }
});

//Start server
const PORT = 3000;
app.listen(PORT, () => console.log("API running on port " + PORT));