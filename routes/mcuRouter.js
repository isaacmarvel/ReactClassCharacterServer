const express = require('express');
const router = express.Router();

// ...
const {
    getAllCharacters,
    createCharacter,
    getCharacterByName,
    updateCharacter,
    deleteCharacter
} = require("../controllers/mcuController");

router.get("/allCharacters", getAllCharacters);
router.post("/createCharacter", createCharacter);
router.get("/getCharacterByName/:name", getCharacterByName);
router.put('/updateCharacter/:id', updateCharacter);
router.delete('/deleteCharacter/:id', deleteCharacter);
module.exports = router;