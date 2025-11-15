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


//THIS IS A TEMPORARY FIX FOR ABILITIES BEFORE I RECORD AND ADD THEM
const abilities = {
  "Aatrox": ["Q", "W", "E", "R"],
  "Ahri": ["Q", "W", "E", "R"],
  "Akali": ["Q", "W", "E", "R"],
  "Akshan": ["Q", "W", "E", "R"],
  "Alistar": ["Q", "W", "E", "R"],
  "Amumu": ["Q", "W", "E", "R"],
  "Anivia": ["Q", "W", "E", "R"],
  "Annie": ["Q", "W", "E", "R"],
  "Aphelios": ["Q", "W", "E", "R"],
  "Ashe": ["Q", "W", "E", "R"],
  "Aurelion Sol": ["Q", "W", "E", "R"],
  "Azir": ["Q", "W", "E", "R"],
  "Ambessa": ["Q", "W", "E", "R"],
  "Aurora": ["Q", "W", "E", "R"],
  "Bard": ["Q", "W", "E", "R"],
  "Bel'Veth": ["Q", "W", "E", "R"],
  "Braum": ["Q", "W", "E", "R"],
  "Briar": ["Q", "W", "E", "R"],
  "Caitlyn": ["Q", "W", "E", "R"],
  "Camille": ["Q", "W", "E", "R"],
  "Cassiopeia": ["Q", "W", "E", "R"],
  "Cho'Gath": ["Q", "W", "E", "R"],
  "Corki": ["Q", "W", "E", "R"],
  "Darius": ["Q", "W", "E", "R"],
  "Diana": ["Q", "W", "E", "R"],
  "Dr. Mundo": ["Q", "W", "E", "R"],
  "Draven": ["Q", "W", "E", "R"],
  "Ekko": ["Q", "W", "E", "R"],
  "Elise": ["Q", "W", "E", "R"],
  "Evelynn": ["Q", "W", "E", "R"],
  "Ezreal": ["Q", "W", "E", "R"],
  "Fiddlesticks": ["Q", "W", "E", "R"],
  "Fiora": ["Q", "W", "E", "R"],
  "Fizz": ["Q", "W", "E", "R"],
  "Galio": ["Q", "W", "E", "R"],
  "Gangplank": ["Q", "W", "E", "R"],
  "Garen": ["Q", "W", "E", "R"],
  "Gnar": ["Q", "W", "E", "R"],
  "Gragas": ["Q", "W", "E", "R"],
  "Graves": ["Q", "W", "E", "R"],
  "Gwen": ["Q", "W", "E", "R"],
  "Hecarim": ["Q", "W", "E", "R"],
  "Heimerdinger": ["Q", "W", "E", "R"],
  "Hwei": ["Q", "W", "E", "R"],
  "Illaoi": ["Q", "W", "E", "R"],
  "Irelia": ["Q", "W", "E", "R"],
  "Ivern": ["Q", "W", "E", "R"],
  "Janna": ["Q", "W", "E", "R"],
  "Jarvan IV": ["Q", "W", "E", "R"],
  "Jax": ["Q", "W", "E", "R"],
  "Jayce": ["Q", "W", "E", "R"],
  "Jhin": ["Q", "W", "E", "R"],
  "Jinx": ["Q", "W", "E", "R"],
  "K'Sante": ["Q", "W", "E", "R"],
  "Kai'Sa": ["Q", "W", "E", "R"],
  "Kalista": ["Q", "W", "E", "R"],
  "Karma": ["Q", "W", "E", "R"],
  "Karthus": ["Q", "W", "E", "R"],
  "Kassadin": ["Q", "W", "E", "R"],
  "Katarina": ["Q", "W", "E", "R"],
  "Kayle": ["Q", "W", "E", "R"],
  "Kayn": ["Q", "W", "E", "R"],
  "Kennen": ["Q", "W", "E", "R"],
  "Kha'Zix": ["Q", "W", "E", "R"],
  "Kindred": ["Q", "W", "E", "R"],
  "Kled": ["Q", "W", "E", "R"],
  "Kog'Maw": ["Q", "W", "E", "R"],
  "LeBlanc": ["Q", "W", "E", "R"],
  "Lee Sin": ["Q", "W", "E", "R"],
  "Leona": ["Q", "W", "E", "R"],
  "Lillia": ["Q", "W", "E", "R"],
  "Lissandra": ["Q", "W", "E", "R"],
  "Lucian": ["Q", "W", "E", "R"],
  "Lulu": ["Q", "W", "E", "R"],
  "Lux": ["Q", "W", "E", "R"],
  "Malphite": ["Q", "W", "E", "R"],
  "Malzahar": ["Q", "W", "E", "R"],
  "Maokai": ["Q", "W", "E", "R"],
  "Master Yi": ["Q", "W", "E", "R"],
  "Mel": ["Q", "W", "E", "R"],
  "Milio": ["Q", "W", "E", "R"],
  "Miss Fortune": ["Q", "W", "E", "R"],
  "Mordekaiser": ["Q", "W", "E", "R"],
  "Morgana": ["Q", "W", "E", "R"],
  "Nami": ["Q", "W", "E", "R"],
  "Nasus": ["Q", "W", "E", "R"],
  "Naafiri": ["Q", "W", "E", "R"],
  "Nautilus": ["Q", "W", "E", "R"],
  "Neeko": ["Q", "W", "E", "R"],
  "Nilah": ["Q", "W", "E", "R"],
  "Nidalee": ["Q", "W", "E", "R"],
  "Nocturne": ["Q", "W", "E", "R"],
  "Nunu & Willump": ["Q", "W", "E", "R"],
  "Olaf": ["Q", "W", "E", "R"],
  "Orianna": ["Q", "W", "E", "R"],
  "Ornn": ["Q", "W", "E", "R"],
  "Pantheon": ["Q", "W", "E", "R"],
  "Poppy": ["Q", "W", "E", "R"],
  "Pyke": ["Q", "W", "E", "R"],
  "Qiyana": ["Q", "W", "E", "R"],
  "Quinn": ["Q", "W", "E", "R"],
  "Rakan": ["Q", "W", "E", "R"],
  "Rammus": ["Q", "W", "E", "R"],
  "Rek'Sai": ["Q", "W", "E", "R"],
  "Rell": ["Q", "W", "E", "R"],
  "Renata Glasc": ["Q", "W", "E", "R"],
  "Renekton": ["Q", "W", "E", "R"],
  "Rengar": ["Q", "W", "E", "R"],
  "Riven": ["Q", "W", "E", "R"],
  "Rumble": ["Q", "W", "E", "R"],
  "Ryze": ["Q", "W", "E", "R"],
  "Samira": ["Q", "W", "E", "R"],
  "Sejuani": ["Q", "W", "E", "R"],
  "Senna": ["Q", "W", "E", "R"],
  "Seraphine": ["Q", "W", "E", "R"],
  "Sett": ["Q", "W", "E", "R"],
  "Shaco": ["Q", "W", "E", "R"],
  "Shen": ["Q", "W", "E", "R"],
  "Shyvana": ["Q", "W", "E", "R"],
  "Singed": ["Q", "W", "E", "R"],
  "Sion": ["Q", "W", "E", "R"],
  "Sivir": ["Q", "W", "E", "R"],
  "Skarner": ["Q", "W", "E", "R"],
  "Sona": ["Q", "W", "E", "R"],
  "Soraka": ["Q", "W", "E", "R"],
  "Smolder": ["Q", "W", "E", "R"],
  "Swain": ["Q", "W", "E", "R"],
  "Sylas": ["Q", "W", "E", "R"],
  "Syndra": ["Q", "W", "E", "R"],
  "Tahm Kench": ["Q", "W", "E", "R"],
  "Taliyah": ["Q", "W", "E", "R"],
  "Talon": ["Q", "W", "E", "R"],
  "Taric": ["Q", "W", "E", "R"],
  "Teemo": ["Q", "W", "E", "R"],
  "Thresh": ["Q", "W", "E", "R"],
  "Tristana": ["Q", "W", "E", "R"],
  "Trundle": ["Q", "W", "E", "R"],
  "Tryndamere": ["Q", "W", "E", "R"],
  "Twisted Fate": ["Q", "W", "E", "R"],
  "Twitch": ["Q", "W", "E", "R"],
  "Udyr": ["Q", "W", "E", "R"],
  "Urgot": ["Q", "W", "E", "R"],
  "Varus": ["Q", "W", "E", "R"],
  "Vayne": ["Q", "W", "E", "R"],
  "Veigar": ["Q", "W", "E", "R"],
  "Vel'Koz": ["Q", "W", "E", "R"],
  "Vex": ["Q", "W", "E", "R"],
  "Vi": ["Q", "W", "E", "R"],
  "Viego": ["Q", "W", "E", "R"],
  "Viktor": ["Q", "W", "E", "R"],
  "Vladimir": ["Q", "W", "E", "R"],
  "Volibear": ["Q", "W", "E", "R"],
  "Warwick": ["Q", "W", "E", "R"],
  "Wukong": ["Q", "W", "E", "R"],
  "Xayah": ["Q", "W", "E", "R"],
  "Xerath": ["Q", "W", "E", "R"],
  "Xin Zhao": ["Q", "W", "E", "R"],
  "Yasuo": ["Q", "W", "E", "R"],
  "Yone": ["Q", "W", "E", "R"],
  "Yunara": ["Q", "W", "E", "R"],
  "Yorick": ["Q", "W", "E", "R"],
  "Yuumi": ["Q", "W", "E", "R"],
  "Zac": ["Q", "W", "E", "R"],
  "Zed": ["Q", "W", "E", "R"],
  "Zeri": ["Q", "W", "E", "R"],
  "Ziggs": ["Q", "W", "E", "R"],
  "Zilean": ["Q", "W", "E", "R"],
  "Zoe": ["Q", "W", "E", "R"],
  "Zyra": ["Q", "W", "E", "R"]
};








//Routing
app.get ("/", (req, res) => {
    res.json({ message: "Welcome to the League of Legends Sound API" });
});

//Serve files from the api
//GET /sounds/:champion/:ability 
app.get('/sounds/:champion/:ability', (req, res) => {
    const { champion, ability } = req.params;
    const soundPath = path.join(__dirname, 'assets', 'sounds', champion, `${ability}.ogg`);
    
    //Check if file is there
    if (!fs.existsSync(soundPath)) {
        console.error(`Sound not found: ${ability}`);
        return res.status(404).json({ error: "Sorry summoner, I couldn't find that sound. "})
    }

    res.sendFile(soundPath);
});

//GET /random/ability
app.get("/random/ability", (req, res) => {
    const championNames = Object.keys(abilities);

    //Pick a random champion
    const randomChampion = championNames[Math.floor(Math.random() * championNames.length)];

    //Pick a random ability from that champion
    const abilityList = abilities[randomChampion];
    const randomAbility = abilityList[Math.floor(Math.random() * abilityList.length)];

    res.json({ champion: randomChampion, ability: randomAbility });
});

//List all champions from the game
//GET /champions
import fs, { statSync } from 'fs';
app.get('/champions', (req, res) => {
    const dir = path.join(__dirname, "assets", "sounds");
    try {
        const champions = fs.readdirSync(dir).filter((f) => fs.statSync(path.join(dir, f)).isDirectory());
        res.json(champions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Could not retrieve champions' });
    }
});

//GET random champion
app.get("/random/champion", (req, res) => {
    const dir = path.join(__dirname, "assets", "sounds");
    const champions = fs.readdirSync(dir).filter((f) => fs.statSync(path.join(dir, f)).isDirectory());

    const random = champions[Math.floor(Math.random() * champions.length)];
    res.json({ champion: random });
});

//Start server
const PORT = 3000;
app.listen(PORT, () => console.log("API running on port " + PORT));