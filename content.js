// content.js
//alert("Hello from your Chrome extension!");


var pkmn_data = [
    //["Bulbasaur","Grass","Poison","Seed","Monster/Grass",5355,16],
    ["Bulbasaur", "Grass", "Poison", "Seed", "Monster/Grass", "5355", "16"],
    ["Ivysaur", "Grass", "Poison", "Seed", "Monster/Grass", null, "32"],
    ["Venusaur", "Grass", "Poison", "Seed", "Monster/Grass", null, null],
    ["Charmander", "Fire", null, "Lizard", "Monster/Dragon", "5355", "16"],
    ["Charmeleon", "Fire", null, "Flame", "Monster/Dragon", null, "36"],
    ["Charizard", "Fire", "Flying", "Flame", "Monster/Dragon", null, null],
    ["Squirtle", "Water", null, "Tiny Turtle", "Monster/Water 1", "5355", "16"],
    ["Wartortle", "Water", null, "Turtle", "Monster/Water 1", null, "36"],
    ["Blastoise", "Water", null, "Shellfish", "Monster/Water 1", null, null],
    ["Caterpie", "Bug", null, "Worm", "Bug", "2805", "7"],
    ["Metapod", "Bug", null, "Cocoon", "Bug", null, "10"],
    ["Butterfree", "Bug", "Flying", "Butterfly", "Bug", null, null],
    ["Weedle", "Bug", "Poison", "Hairy Bug", "Bug", "2805", "7"],
    ["Kakuna", "Bug", "Poison", "Cocoon", "Bug", null, "10"],
    ["Beedrill", "Bug", "Poison", "Poison Bee", "Bug", null, null],
    ["Pidgey", "Normal", "Flying", "Tiny Bird", "Flying", "4080", "18"],
    ["Pidgeotto", "Normal", "Flying", "Bird", "Flying", null, "36"],
    ["Pidgeot", "Normal", "Flying", "Bird", "Flying", null, null],
    ["Rattata", "Normal", null, "Mouse", "Field", "4080", "20"],
    ["Raticate", "Normal", null, "Mouse", "Field", null, null],
    ["Spearow", "Normal", "Flying", "Tiny Bird", "Flying", "4080", "20"],
    ["Fearow", "Normal", "Flying", "Beak", "Flying", null, null],
    ["Ekans", "Poison", null, "Snake", "Field/Dragon", "5355", "22"],
    ["Arbok", "Poison", null, "Cobra", "Field/Dragon", null, null],
    ["Pikachu", "Electric", null, "Mouse", "Field/Fairy", "2805", null],
    ["Raichu", "Electric", null, "Mouse", "Field/Fairy", null, null],
    ["Sandshrew", "Ground", null, "Mouse", "Field", "5355", "22"],
    ["Sandslash", "Ground", null, "Mouse", "Field", null, null],
    ["Nidoran (f)", "Poison", null, "Poison Pin", "Monster/Field", "5355", "16"],
    ["Nidorina", "Poison", null, "Poison Needle", "Undiscovered", null, null],
    ["Nidoqueen", "Poison", "Ground", "Drill", "Undiscovered", null, null],
    ["Nidoran (m)", "Poison", null, "Poison Pin", "Monster/Field", "5355", "16"],
    ["Nidorino", "Poison", null, "Poison Needle", "Monster/Field", null, null],
    ["Nidoking", "Poison", "Ground", "Drill", "Monster/Field", null, null],
    ["Clefairy", "Fairy", null, "Fairy", "Fairy", "2805", null],
    ["Clefable", "Fairy", null, "Fairy", "Fairy", null, null],
    ["Vulpix", "Fire", null, "Fox", "Field", "5355", null],
    ["Ninetales", "Fire", null, "Fox", "Field", null, null],
    ["Jigglypuff", "Normal", "Fairy", "Balloon", "Fairy", "5355", null],
    ["Wigglytuff", "Normal", "Fairy", "Balloon", "Fairy", null, null],
    ["Zubat", "Poison", "Flying", "Bat", "Flying", "4080", "22"],
    ["Golbat", "Poison", "Flying", "Bat", "Flying", null, null],
    ["Oddish", "Grass", "Poison", "Weed", "Grass", "5355", "21"],
    ["Gloom", "Grass", "Poison", "Weed", "Grass", null, null],
    ["Vileplume", "Grass", "Poison", "Flower", "Grass", null, null],
    ["Paras", "Bug", "Grass", "Mushroom", "Bug/Grass", "5355", "24"],
    ["Parasect", "Bug", "Grass", "Mushroom", "Bug/Grass", null, null],
    ["Venonat", "Bug", "Poison", "Insect", "Bug", "5355", "31"],
    ["Venomoth", "Bug", "Poison", "Poison Moth", "Bug", null, null],
    ["Diglett", "Ground", null, "Mole", "Field", "5355", "26"],
    ["Dugtrio", "Ground", null, "Mole", "Field", null, null],
    ["Meowth", "Normal", null, "Scratch Cat", "Field", "5355", "28"],
    ["Persian", "Normal", null, "Classy Cat", "Field", null, null],
    ["Psyduck", "Water", null, "Duck", "Water 1/Field", "5355", "33"],
    ["Golduck", "Water", null, "Duck", "Water 1/Field", null, null],
    ["Mankey", "Fighting", null, "Pig Monkey", "Field", "5355", "28"],
    ["Primeape", "Fighting", null, "Pig Monkey", "Field", null, null],
    ["Growlithe", "Fire", null, "Puppy", "Field", "5355", null],
    ["Arcanine", "Fire", null, "Legendary", "Field", null, null],
    ["Poliwag", "Water", null, "Tadpole", "Water 1", "5355", "25"],
    ["Poliwhirl", "Water", null, "Tadpole", "Water 1", null, null],
    ["Poliwrath", "Water", "Fighting", "Tadpole", "Water 1", null, null],
    ["Abra", "Psychic", null, "Psi", "Human-Like", "5355", "16"],
    ["Kadabra", "Psychic", null, "Psi", "Human-Like", null, null],
    ["Alakazam", "Psychic", null, "Psi", "Human-Like", null, null],
    ["Machop", "Fighting", null, "Superpower", "Human-Like", "5355", "28"],
    ["Machoke", "Fighting", null, "Superpower", "Human-Like", null, null],
    ["Machamp", "Fighting", null, "Superpower", "Human-Like", null, null],
    ["Bellsprout", "Grass", "Poison", "Flower", "Grass", "5355", "21"],
    ["Weepinbell", "Grass", "Poison", "Flycatcher", "Grass", null, null],
    ["Victreebel", "Grass", "Poison", "Flycatcher", "Grass", null, null],
    ["Tentacool", "Water", "Poison", "Jellyfish", "Water 3", "5355", "30"],
    ["Tentacruel", "Water", "Poison", "Jellyfish", "Water3", null, null],
    ["Geodude", "Rock", "Ground", "Rock", "Mineral", "4080", "25"],
    ["Graveler", "Rock", "Ground", "Rock", "Mineral", null, null],
    ["Golem", "Rock", "Ground", "Megaton", "Mineral", null, null],
    ["Ponyta", "Fire", null, "Fire Horse", "Field", "5355", "40"],
    ["Rapidash", "Fire", null, "Fire Horse", "Field", null, null],
    ["Slowpoke", "Water", "Psychic", "Dopey", "Monster/Water 1", "5355", null],
    ["Slowbro", "Water", "Psychic", "Hermit Crab", "Monster/Water 1", null, null],
    ["Magnemite", "Electric", "Steel", "Magnet", "Mineral", "5355", "30"],
    ["Magneton", "Electric", "Steel", "Magnet", "Mineral", null, null],
    ["Farfetch'd", "Normal", "Flying", "Wild Duck", "Flying/Field", "5355", null],
    ["Doduo", "Normal", "Flying", "Twin Bird", "Flying", "5355", "31"],
    ["Dodrio", "Normal", "Flying", "Triple Bird", "Flying", null, null],
    ["Seel", "Water", null, "Sea Lion", "Water 1/Field", "5355", "34"],
    ["Dewgong", "Water", "Ice", "Sea Lion", "Water 1/Field", null, null],
    ["Grimer", "Poison", null, "Sludge", "Amorphous", "5355", "38"],
    ["Muk", "Poison", null, "Sludge", "Amorphous", null, null],
    ["Shellder", "Water", null, "Bivalve", "Water 3", "5355", null],
    ["Cloyster", "Water", "Ice", "Bivalve", "Water 3", null, null],
    ["Gastly", "Ghost", "Poison", "Gas", "Amorphous", "5355", "25"],
    ["Haunter", "Ghost", "Poison", "Gas", "Amorphous", null, null],
    ["Gengar", "Ghost", "Poison", "Shadow", "Amorphous", null, null],
    ["Onix", "Rock", "Ground", "Rock Snake", "Mineral", "6630", null],
    ["Drowzee", "Psychic", null, "Hypnosis", "Human-Like", "5355", "26"],
    ["Hypno", "Psychic", null, "Hypnosis", "Human-Like", null, null],
    ["Krabby", "Water", null, "River Crab", "Water 3", "5355", "28"],
    ["Kingler", "Water", null, "Pincer", "Water 3", null, null],
    ["Voltorb", "Electric", null, "Ball", "Mineral", "5355", "30"],
    ["Electrode", "Electric", null, "Ball", "Mineral", null, null],
    ["Exeggcute", "Grass", "Psychic", "Egg", "Grass", "5355", null],
    ["Exeggutor", "Grass", "Psychic", "Coconut", "Grass", null, null],
    ["Cubone", "Ground", null, "Lonely", "Monster", "5355", "28"],
    ["Marowak", "Ground", null, "Bone Keeper", "Monster", null, null],
    ["Hitmonlee", "Fighting", null, "Kicking", "Human-Like", "6630", null],
    ["Hitmonchan", "Fighting", null, "Punching", "Human-Like", "6630", null],
    ["Lickitung", "Normal", null, "Licking", "Monster", "5355", "33"],
    ["Koffing", "Poison", null, "Poison Gas", "Amorphous", "5355", "35"],
    ["Weezing", "Poison", null, "Poison Gas", "Amorphous", null, null],
    ["Rhyhorn", "Ground", "Rock", "Spikes", "Monster/Field", "5355", "42"],
    ["Rhydon", "Ground", "Rock", "Drill", "Monster/Field", null, null],
    ["Chansey", "Normal", null, "Egg", "Fairy", "10455", null],
    ["Tangela", "Grass", null, "Vine", "Grass", "5355", "36"],
    ["Kangaskhan", "Normal", null, "Parent", "Monster", "5355", null],
    ["Horsea", "Water", null, "Dragon", "Water 1/Dragon", "5355", "32"],
    ["Seadra", "Water", null, "Dragon", "Water 1/Dragon", null, null],
    ["Goldeen", "Water", null, "Goldfish", "Water 2", "5355", "33"],
    ["Seaking", "Water", null, "Goldfish", "Water 2", null, null],
    ["Staryu", "Water", null, "Star Shape", "Water 3", "5355", null],
    ["Starmie", "Water", "Psychic", "Mysterious", "Water 3", null, null],
    ["Mr.Mime", "Psychic", "Fairy", "Barrier", "Human-Like", "6630", null],
    ["Scyther", "Bug", "Flying", "Mantis", "Bug", "6630", null],
    ["Jynx", "Ice", "Psychic", "Human Shape", "Human-Like", "6630", null],
    ["Electabuzz", "Electric", null, "Electric", "Human-Like", "6630", null],
    ["Magmar", "Fire", null, "Spitfire", "Human-Like", "6630", null],
    ["Pinsir", "Bug", null, "Stag Beetle", "Bug", "6630", null],
    ["Tauros", "Normal", null, "Wild Bull", "Field", "5355", null],
    ["Magikarp", "Water", null, "Fish", "Water 2/Dragon", "1530", "20"],
    ["Gyarados", "Water", "Flying", "Atrocious", "Water2/Dragon", null, null],
    ["Lapras", "Water", "Ice", "Transport", "Monster/Water 1", "10455", null],
    ["Ditto", "Normal", null, "Transform", "Ditto", "5355", null],
    ["Eevee", "Normal", null, "Evolution", "Field", "9180", null],
    ["Vaporeon", "Water", null, "Bubble Jet", "Field", null, null],
    ["Jolteon", "Electric", null, "Lightning", "Field", null, null],
    ["Flareon", "Fire", null, "Flame", "Field", null, null],
    ["Porygon", "Normal", null, "Virtual", "Mineral", "5355", null],
    ["Omanyte", "Rock", "Water", "Spiral", "Water 1/Water 3", "7905", "40"],
    ["Omastar", "Rock", "Water", "Spiral", "Water 1/Water 3", null, null],
    ["Kabuto", "Rock", "Water", "Shellfish", "Water 1/Water 3", "7905", "40"],
    ["Kabutops", "Rock", "Water", "Shellfish", "Water 1/Water 3", null, null],
    ["Aerodactyl", "Rock", "Flying", "Fossil", "Flying", "7905", null],
    ["Snorlax", "Normal", null, "Sleeping", "Monster", "10455", null],
    ["Articuno", "Ice", "Flying", "Freeze", "Undiscovered", "20655", null],
    ["Zapdos", "Electric", "Flying", "Electric", "Undiscovered", "20655", null],
    ["Moltres", "Fire", "Flying", "Flame", "Undiscovered", "20655", null],
    ["Dratini", "Dragon", null, "Dragon", "Water 1/Dragon", "10455", "30"],
    ["Dragonair", "Dragon", null, "Dragon", "Water1/Dragon", null, "55"],
    ["Dragonite", "Dragon", "Flying", "Dragon", "Water1/Dragon", null, null],
    ["Mewtwo", "Psychic", null, "Genetic", "Legendary", "30855", null],
    ["Mew", "Psychic", null, "New Species", "Undiscovered", "510", null],
    ["Chikorita", "Grass", null, "Leaf", "Monster/Grass", "5355", "16"],
    ["Bayleef", "Grass", null, "Leaf", "Monster/Grass", null, "32"],
    ["Meganium", "Grass", null, "Herb", "Monster/Grass", null, null],
    ["Cyndaquil", "Fire", null, "Fire Mouse", "Field", "5355", "14"],
    ["Quilava", "Fire", null, "Volcano", "Field", null, "36"],
    ["Typhlosion", "Fire", null, "Volcano", "Field", null, null],
    ["Totodile", "Water", null, "Big Jaw", "Monster/Water 1", "5355", "18"],
    ["Croconaw", "Water", null, "Big Jaw", "Monster/Water 1", null, "30"],
    ["Feraligatr", "Water", null, "Big Jaw", "Monster/Water 1", null, null],
    ["Sentret", "Normal", null, "Scout", "Field", "4080", "15"],
    ["Furret", "Normal", null, "Long body", "Field", null, null],
    ["Hoothoot", "Normal", "Flying", "Owl", "Flying", "4080", "20"],
    ["Noctowl", "Normal", "Flying", "Owl", "Flying", null, null],
    ["Ledyba", "Bug", "Flying", "Five Star", "Bug", "4080", "18"],
    ["Ledian", "Bug", "Flying", "Five Star", "Bug", null, null],
    ["Spinarak", "Bug", "Poison", "String spit", "Bug", "4080", "22"],
    ["Ariados", "Bug", "Poison", "Long Leg", "Bug", null, null],
    ["Crobat", "Poison", "Flying", "Bat", "Flying", "5355", null],
    ["Chinchou", "Water", "Electric", "Angler", "Water 2", "5355", "27"],
    ["Lanturn", "Water", "Electric", "Light", "Water 2", null, null],
    ["Pichu", "Electric", null, "Tiny Mouse", "Undiscovered", "2805", null],
    ["Cleffa", "Fairy", null, "Star Shape", "Undiscovered", "2805", null],
    ["Igglybuff", "Normal", "Fairy", "Balloon", "Undiscovered", "2805", null],
    ["Togepi", "Fairy", null, "Spike Ball", "Undiscovered", "2805", null],
    ["Togetic", "Flying", "Fairy", "Happiness", "Flying/Fairy", null, null],
    ["Natu", "Psychic", "Flying", "Tiny Bird", "Flying", "5355", "25"],
    ["Xatu", "Psychic", "Flying", "Mystic", "Flying", null, null],
    ["Mareep", "Electric", null, "Wool", "Monster/Field", "5355", "15"],
    ["Flaafy", "Electric", null, "Wool", "Monster/Field", null, "30"],
    ["Ampharos", "Electric", null, "Light", "Monster/Field", null, null],
    ["Bellossom", "Grass", null, "Flower", "Grass", "5355", null],
    ["Marill", "Water", "Fairy", "Aqua Mouse", "Water 1/Fairy", "2805", "18"],
    ["Azumarill", "Water", "Fairy", "Aqua Rabbit", "Water 1/Fairy", null, null],
    ["Sudowoodo", "Rock", null, "Imitation", "Mineral", "5355", null],
    ["Politoed", "Water", null, "Frog", "Water 1", "5355", null],
    ["Hoppip", "Grass", "Flying", "Cottonweed", "Fairy/Grass", "5355", "18"],
    ["Skiploom", "Grass", "Flying", "Cottonweed", "Field/Grass", null, "27"],
    ["Jumpluff", "Grass", "Flying", "Cottonweed", "Fairy/Grass", null, null],
    ["Aipom", "Normal", null, "Long Tail", "Field", "5355", "32"],
    ["Sunkern", "Grass", null, "Seed", "Grass", "5355", null],
    ["Sunflora", "Grass", null, "Sun", "Grass", null, null],
    ["Yanma", "Bug", "Flying", "Clear Wing", "Bug", "5355", "33"],
    ["Wooper", "Water", "Ground", "Water Fish", "Water 1/Field", "5355", "20"],
    ["Quagsire", "Water", "Ground", "Water Fish", "Water 1/Field", null, null],
    ["Espeon", "Psychic", null, "Sun", "Field", "9180", null],
    ["Umbreon", "Dark", null, "Moonlight", "Field", "9180", null],
    ["Murkrow", "Dark", "Flying", "Darkness", "Flying", "5355", null],
    ["Slowking", "Water", "Psychic", "Royal", "Monster/Water 1", "5355", null],
    ["Misdreavus", "Ghost", null, "Screech", "Amorphous", "6630", null],
    ["Unown", "Psychic", null, "Symbol", "Unown", "10455", null],
    ["Wobbuffet", "Psychic", null, "Patient", "Amorphous", "5355", null],
    ["Girafarig", "Normal", "Psychic", "Long Neck", "Field", "5355", null],
    ["Pineco", "Bug", null, "Bagworm", "Bug", "5355", "31"],
    ["Forretress", "Bug", "Steel", "Bagworm", "Bug", null, null],
    ["Dunsparce", "Normal", null, "Land Snake", "Field", "5355", null],
    ["Gligar", "Ground", "Flying", "Fly Scorpion", "Bug", "5355", null],
    ["Steelix", "Steel", "Ground", "Iron Snake", "Mineral", "6630", null],
    ["Snubbull", "Fairy", null, "Fairy", "Field/Fairy", "5355", "23"],
    ["Granbull", "Fairy", null, "Fairy", "Field/Fairy", null, null],
    ["Qwilfish", "Water", "Poison", "Balloon", "Water 2", "5355", null],
    ["Scizor", "Bug", "Steel", "Pincer", "Bug", "6630", null],
    ["Shuckle", "Bug", "Rock", "Mold", "Bug", "5355", null],
    ["Heracross", "Bug", "Fighting", "Single Horn", "Bug", "6630", null],
    ["Sneasel", "Dark", "Ice", "Sharp Claw", "Field", "5355", null],
    ["Teddirusa", "Normal", null, "Little Bear", "Field", "5355", "30"],
    ["Ursaring", "Normal", null, "Hibernator", "Field", null, null],
    ["Slugma", "Fire", null, "Lava", "Amorphous", "5355", "38"],
    ["Magcargo", "Fire", "Rock", "Lava", "Amorphous", null, null],
    ["Swinub", "Ice", "Ground", "Pig", "Field", "5355", "33"],
    ["Piloswine", "Ice", "Ground", "Swine", "Field", null, "50"],
    ["Corsola", "Water", "Rock", "Coral", "Water 1/Water 3", "5355", null],
    ["Remoraid", "Water", null, "Jet", "Water 1/Water 2", "5355", "25"],
    ["Octillery", "Water", null, "Jet", "Water 1/Water 2", null, null],
    ["Delibird", "Ice", "Flying", "Delivery", "Water 1/Field", "5355", null],
    ["Mantine", "Water", "Flying", "Kite", "Water 1", "6630", null],
    ["Skarmory", "Steel", "Flying", "Armor Bird", "Flying", "6630", null],
    ["Houndour", "Dark", "Fire", "Dark", "Field", "5355", "24"],
    ["Houndoom", "Dark", "Fire", "Dark", "Field", null, null],
    ["Kingdra", "Water", "Dragon", "Dragon", "Water 1/Dragon", "5355", null],
    ["Phanpy", "Ground", null, "Long Nose", "Field", "5355", "25"],
    ["Donphan", "Ground", null, "Armor", "Field", null, null],
    ["Porygon2", "Normal", null, "Virtual", "Mineral", "5355", null],
    ["Stantler", "Normal", null, "Big Horn", "Field", "5355", null],
    ["Smeargle", "Normal", null, "Painter", "Field", "5535", null],
    ["Tyrogue", "Fighting", null, "Scuffle", "Undiscovered", "6630", "20"],
    ["Hitmontop", "Fighting", null, "Handstand", "Human-Like", null, null],
    ["Smoochum", "Ice", "Psychic", "Kiss", "Undiscovered", "6630", "30"],
    ["Elekid", "Electric", null, "Electric", "Undiscovered", "6630", "30"],
    ["Magby", "Fire", null, "Live Coal", "Undiscovered", "6630", "30"],
    ["Miltank", "Normal", null, "Milk Cow", "Field", "5355", null],
    ["Blissey", "Normal", null, "Happiness", "Fairy", "10455", null],
    ["Raikou", "Electric", null, "Thunder", "Undiscovered", "20655", null],
    ["Entei", "Fire", null, "Volcano", "Undiscovered", "20655", null],
    ["Suicune", "Water", null, "Aurora", "Undiscovered", "20655", null],
    ["Larvitar", "Rock", "Ground", "Rock Skin", "Monster", "10455", "30"],
    ["Pupitar", "Rock", "Ground", "Hard Shell", "Monster", null, "55"],
    ["Tyranitar", "Rock", "Dark", "Armor", "Monster", null, null],
    ["Lugia", "Psychic", "Flying", "Diving", "Undiscovered", "30855", null],
    ["Ho-Oh", "Fire", "Flying", "Rainbow", "Undiscovered", "30855", null],
    ["Celebi", "Psychic", "Grass", "Time Travel", "Undiscovered", "30855", null],
    ["Treecko", "Grass", null, "Wood Gecko", "Monster/Dragon", "5355", "16"],
    ["Grovyle", "Grass", null, "Wood Gecko", "Monster/Dragon", null, "36"],
    ["Sceptile", "Grass", null, "Forest", "Monster/Dragon", null, null],
    ["Torchic", "Fire", null, "Chick", "Field", "5355", "16"],
    ["Combusken", "Fire", null, "Young Fowl", "Field", null, "36"],
    ["Blaziken", "Fire", "Fighting", "Blaze", "Field", null, null],
    ["Mudkip", "Water", null, "Mud Fish", "Monster/Water 1", "5355", "16"],
    ["Marshtomp", "Water", "Ground", "Mud Fish", "Monster/Water 1", null, "36"],
    ["Swampert", "Water", "Ground", "Mud Fish", "Monster/Water 1", null, null],
    ["Poochyena", "Dark", null, "Bite", "Field", "4080", "18"],
    ["Mightyena", "Dark", null, "Bite", "Field", null, null],
    ["Zigzagoon", "Normal", null, "Tiny Raccoon", "Field", "4080", "20"],
    ["Linoone", "Normal", null, "Rushing", "Field", null, null],
    ["Wurmple", "Bug", null, "Worm", "Bug", "4080", "7"],
    ["Silcoon", "Bug", null, "Coccoon", "Bug", null, "10"],
    ["Beautifly", "Bug", "Flying", "Butterfly", "Bug", null, null],
    ["Cascoon", "Bug", null, "Coccoon", "Bug", null, "10"],
    ["Dustox", "Bug", "Poison", "Poison Moth", "Bug", null, null],
    ["Lotad", "Water", "Grass", "Water Weed", "Water 1/Grass", "4080", "14"],
    ["Lombre", "Water", "Grass", "Jolly", "Water 1/Grass", null, null],
    ["Ludicolo", "Water", "Grass", "Carefree", "Water 1/Grass", null, null],
    ["Seedot", "Grass", null, "Acorn", "Field/Grass", "4080", "14"],
    ["Nuzleaf", "Grass", "Dark", "Wily", "Field/Grass", null, null],
    ["Shiftry", "Grass", "Dark", "Wicked", "Field/Grass", null, null],
    ["Taillow", "Normal", "Flying", "Tiny Swallow", "Flying", "4080", "22"],
    ["Swellow", "Normal", "Flying", "Swallow", "Flying", null, null],
    ["Wingull", "Water", "Flying", "Seagull", "Water 1/Flying", "5355", "25"],
    ["Pelipper", "Water", "Flying", "Water Bird", "Water 1/Flying", null, null],
    ["Ralts", "Psychic", "Fairy", "Feeling", "Amorphous", "5355", "20"],
    ["Kirlia", "Psychic", "Fairy", "Emotion", "Amorphous", null, "30"],
    ["Gardevoir", "Psychic", "Fairy", "Embrace", "Amorphous", null, null],
    ["Surskit", "Bug", "Water", "Pond Skater", "Water 1/Bug", "4080", "22"],
    ["Masquerain", "Bug", "Flying", "Eyeball", "Water 1/Bug", null, null],
    ["Shroomish", "Grass", null, "Mushroom", "Fairy/Grass", "4080", "23"],
    ["Breloom", "Grass", "Fighting", "Mushroom", "Fairy/Grass", null, null],
    ["Slakoth", "Normal", null, "Slacker", "Field", "4080", "18"],
    ["Vigoroth", "Normal", null, "Wild Monkey", "Field", null, "36"],
    ["Slaking", "Normal", null, "Lazy", "Field", null, null],
    ["Nincada", "Bug", "Ground", "Trainee", "Bug", "4080", "20"],
    ["Ninjask", "Bug", "Flying", "Ninja", "Bug", null, null],
    ["Shedinja", "Bug", "Ghost", "Shed", "Mineral", "10455", null],
    ["Whismur", "Normal", null, "Whisper", "Monster/Field", "5355", "20"],
    ["Loudred", "Normal", null, "Big Voice", "Monster/Field", null, "40"],
    ["Exploud", "Normal", null, "Loud Noise", "Monster/Field", null, null],
    ["Makuhita", "Fighting", null, "Guts", "Human-Like", "5355", "24"],
    ["Hariyama", "Fighting", null, "Arm Thrust", "Human-Like", null, null],
    ["Azurill", "Normal", "Fairy", "Polkadot", "Undiscovered", "2805", null],
    ["Nosepass", "Rock", null, "Compass", "Mineral", "5355", null],
    ["Skitty", "Normal", null, "Kitten", "Field/Fairy", "4080", null],
    ["Delcatty", "Normal", null, "Prim", "Field/Fairy", null, null],
    ["Sableye", "Dark", "Ghost", "Darkness", "Human-Like", "6630", null],
    ["Mawile", "Steel", "Fairy", "Deceiver", "Field/Fairy", "5355", null],
    ["Aron", "Steel", "Rock", "Iron Armor", "Monster", "9180", "32"],
    ["Lairon", "Steel", "Rock", "Iron Armor", "Monster", null, "42"],
    ["Aggron", "Steel", "Rock", "Iron Armor", "Monster", null, null],
    ["Meditite", "Fighting", "Psychic", "Meditate", "Human-Like", "5355", "37"],
    ["Medicham", "Fighting", "Psychic", "Meditate", "Human-Like", null, null],
    ["Electrike", "Electric", null, "Lightning", "Field", "5355", "26"],
    ["Manectric", "Electric", null, "Discharge", "Field", null, null],
    ["Plusle", "Electric", null, "Cheering", "Fairy", "5355", null],
    ["Minun", "Electric", null, "Cheering", "Fairy", "5355", null],
    ["Volbeat", "Bug", null, "Firefly", "Bug/Human-Like", "4080", null],
    ["Illumise", "Bug", null, "Firefly", "Bug/Human-Like", "4080", null],
    ["Roselia", "Grass", "Poison", "Thorn", "Fairy/Grass", "5355", null],
    ["Gulpin", "Poison", null, "Stomach", "Amorphous", "5355", "26"],
    ["Swalot", "Poison", null, "Poison Bag", "Amorphous", null, null],
    ["Carvanha", "Water", "Dark", "Savage", "Water 2", "5355", "30"],
    ["Sharpedo", "Water", "Dark", "Brutal", "Water 2", null, null],
    ["Wailmer", "Water", null, "Ball Whale", "Field/Water 2", "10455", "40"],
    ["Wailord", "Water", null, "Float Whale", "Field/Water 2", null, null],
    ["Numel", "Fire", "Ground", "Numb", "Field", "5355", "33"],
    ["Camerupt", "Fire", "Ground", "Eruption", "Field", null, null],
    ["Torkoal", "Fire", null, "Coal", "Field", "5355", null],
    ["Spoink", "Psychic", null, "Bounce", "Field", "5355", "32"],
    ["Grumpig", "Psychic", null, "Manipulate", "Field", null, null],
    ["Spinda", "Normal", null, "Spot Panda", "Field/Human-Like", "4080", null],
    ["Trapinch", "Ground", null, "Ant Pit", "Bug", "5355", "35"],
    ["Vibrava", "Ground", "Dragon", "Vibration", "Bug", null, "45"],
    ["Flygon", "Ground", "Dragon", "Mystic", "Bug", null, null],
    ["Cacnea", "Grass", null, "Cactus", "Grass/Human-Like", "5355", "32"],
    ["Cacturne", "Grass", "Dark", "Scarecrow", "Grass/Human-Like", null, null],
    ["Swablu", "Normal", "Flying", "Cotton Bird", "Flying/Dragon", "5355", "35"],
    ["Altaria", "Dragon", "Flying", "Humming", "Flying/Dragon", null, null],
    ["Zangoose", "Normal", null, "Cat Ferret", "Field", "5355", null],
    ["Seviper", "Poison", null, "Fang Snake", "Field/Dragon", "5355", null],
    ["Lunatone", "Rock", "Psychic", "Meteorite", "Mineral", "6630", null],
    ["Solrock", "Rock", "Psychic", "Meteorite", "Mineral", "6630", null],
    ["Barboach", "Water", "Ground", "Whiskers", "Water 2", "5355", "30"],
    ["Whiscash", "Water", "Ground", "Whiskers", "Water 2", null, null],
    ["Corphish", "Water", null, "Ruffian", "Water 1/Water 3", "4080", "30"],
    ["Crawdaunt", "Water", "Dark", "Rogue", "Water 1/Water 3", null, null],
    ["Baltoy", "Ground", "Psychic", "Clay Doll", "Mineral", "5355", "36"],
    ["Claydol", "Ground", "Psychic", "Clay Doll", "Mineral", null, null],
    ["Lileep", "Rock", "Grass", "Sea Lily", "Water 3", "7905", "40"],
    ["Cradily", "Rock", "Grass", "Barnacle", "Water 3", null, null],
    ["Anorith", "Rock", "Bug", "Old Shrimp", "Water 3", "7905", "40"],
    ["Armaldo", "Rock", "Bug", "Plate", "Water 3", null, null],
    ["Feebas", "Water", null, "Fish", "Water 1/Dragon", "5355", null],
    ["Milotic", "Water", null, "Tender", "Water 1/Dragon", null, null],
    ["Castform", "Normal", null, "Weather", "Fairy/Amorphous", "6630", null],
    ["Kecleon", "Normal", null, "Color Swap", "Field", "5355", null],
    ["Shuppet", "Ghost", null, "Puppet", "Amorphous", "6630", "37"],
    ["Banette", "Ghost", null, "Marionette", "Amorphous", null, null],
    ["Duskull", "Ghost", null, "Requiem", "Amorphous", "6630", "37"],
    ["Dusclops", "Ghost", null, "Beckon", "Amorphous", null, null],
    ["Tropius", "Grass", "Flying", "Fruit", "Monster/Grass", "6630", null],
    ["Chimecho", "Psychic", null, "Wind Chime", "Amorphous", "6630", null],
    ["Absol", "Dark", null, "Disaster", "Field", "6630", null],
    ["Wynaut", "Psychic", null, "Bright", "Undiscovered", "5355", "15"],
    ["Snorunt", "Ice", null, "Snow Hat", "Fairy/Mineral", "5355", "42"],
    ["Glalie", "Ice", null, "Face", "Fairy/Mineral", null, null],
    ["Spheal", "Ice", "Water", "Clap", "Water 1/Field", "5355", "32"],
    ["Sealeo", "Ice", "Water", "Ball Roll", "Water 1/Field", null, "44"],
    ["Walrein", "Ice", "Water", "Ice Break", "Water 1/Field", null, null],
    ["Clamperl", "Water", null, "Bivalve", "Water 1", "5355", null],
    ["Huntail", "Water", null, "Deep Sea", "Water 1", null, null],
    ["Gorebyss", "Water", null, "South Sea", "Water 1", null, null],
    ["Relicanth", "Water", "Rock", "Longevity", "Water 1/Water 2", "10455", null],
    ["Luvdisc", "Water", null, "Rendevouz", "Water 2", "5355", null],
    ["Bagon", "Dragon", null, "Rock Head", "Dragon", "10455", "30"],
    ["Shelgon", "Dragon", null, "Endurance", "Dragon", null, "50"],
    ["Salamence", "Dragon", "Flying", "Dragon", "Dragon", null, null],
    ["Beldum", "Steel", "Psychic", "Iron Ball", "Mineral", "10455", "20"],
    ["Metang", "Steel", "Psychic", "Iron Claw", "Mineral", null, "45"],
    ["Metagross", "Steel", "Psychic", "Iron Leg", "Mineral", null, null],
    ["Regirock", "Rock", null, "Rock Peak", "Undiscovered", "20655", null],
    ["Regice", "Ice", null, "Iceburg", "Undiscovered", "20655", null],
    ["Registeel", "Steel", null, "Iron", "Undiscovered", "20655", null],
    ["Latias", "Dragon", "Psychic", "Eon", "Undiscovered", "30855", null],
    ["Latios", "Dragon", "Psychic", "Eon", "Undiscovered", "30855", null],
    ["Kyogre", "Water", null, "Sea Basin", "Undiscovered", "30855", null],
    ["Groudon", "Ground", null, "Continent", "Undiscovered", "30855", null],
    ["Rayquaza", "Dragon", "Flying", "Sky High", "Undiscovered", "30855", null],
    ["Jirachi", "Steel", "Psychic", "Wish", "Undiscovered", "30855", null],
    ["Deoxys", "Psychic", null, "DNA", "Legendary", "30855", null],
    ["Turtwig", "Grass", null, "Tiny Leaf", "Monster/Grass", "5355", "18"],
    ["Grotle", "Grass", null, "Grove", "Monster/Grass", null, "32"],
    ["Torterra", "Grass", "Ground", "Continent", "Monster/Grass", null, null],
    ["Chimchar", "Fire", null, "Chimp", "Field/Human-Like", "5355", "14"],
    ["Monferno", "Fire", "Fighting", "Playful", "Field/Human-Like", null, "36"],
    ["Infernape", "Fire", "Fighting", "Flame", "Field/Human-Like", null, null],
    ["Piplup", "Water", null, "Penguin", "Water 1/Field", "5355", "16"],
    ["Prinplup", "Water", null, "Penguin", "Water 1/Field", null, "36"],
    ["Empoleon", "Water", "Steel", "Emperor", "Water 1/Field", null, null],
    ["Starly", "Normal", "Flying", "Starling", "Flying", "4080", "14"],
    ["Staravia", "Normal", "Flying", "Starling", "Flying", null, "34"],
    ["Staraptor", "Normal", "Flying", "Predator", "Flying", null, null],
    ["Bidoof", "Normal", null, "Plump Mouse", "Water 1/Field", "4080", "15"],
    ["Bibarel", "Normal", "Water", "Beaver", "Water 1/Field", null, null],
    ["Kricketot", "Bug", null, "Cricket", "Bug", "4080", "10"],
    ["Kricketune", "Bug", null, "Cricket", "Bug", null, null],
    ["Shinx", "Electric", null, "Flash", "Field", "5355", "15"],
    ["Luxio", "Electric", null, "Spark", "Field", null, "30"],
    ["Luxray", "Electric", null, "Gleam Eyes", "Field", null, null],
    ["Budew", "Grass", "Poison", "Bud", "Undiscovered", "5355", null],
    ["Roserade", "Grass", "Poison", "Bouquet", "Fairy/Grass", null, null],
    ["Cranidos", "Rock", null, "Headbutt", "Monster", "7905", "30"],
    ["Rampardos", "Rock", null, "Headbutt", "Monster", null, null],
    ["Shieldon", "Rock", "Steel", "Shield", "Monster", "7905", "30"],
    ["Bastiodon", "Rock", "Steel", "Shield", "Monster", null, null],
    ["Burmy", "Bug", null, "Bagworm", "Bug", "4080", "20"],
    ["Wormadam", "Bug", null, "Bagworm", "Bug", null, null],
    ["Mothim", "Bug", "Flying", "Moth", "Bug", null, null],
    ["Combee", "Bug", "Flying", "Tiny Hive", "Bug", "4590", "21"],
    ["Vespiquen", "Bug", "Flying", "Beehive", "Bug", null, null],
    ["Pachirisu", "Electric", null, "Elesquirrel", "Field/Fairy", "2805", null],
    ["Buizel", "Water", null, "Sea Weasel", "Water 1/Field", "5355", "26"],
    ["Floatzel", "Water", null, "Sea Weasel", "Water 1/Field", null, null],
    ["Cherubi", "Grass", null, "Cherry", "Fairy/Grass", "5355", "25"],
    ["Cherrim", "Grass", null, "Blossom", "Fairy/Grass", null, null],
    ["Shellos", "Water", null, "Sea Slug", "Water 1/Amorphous", "5355", "30"],
    ["Gastrodon", "Water", "Ground", "Sea Slug", "Water 1/Amorphous", null, null],
    ["Ambipom", "Normal", null, "Long Tail", "Field", "5355", null],
    ["Drifloon", "Ghost", "Flying", "Balloon", "Amorphous", "7905", "28"],
    ["Drifblim", "Ghost", "Flying", "Blimp", "Amorphous", null, null],
    ["Buneary", "Normal", null, "Rabbit", "Field/Human-Like", "5355", null],
    ["Lopunny", "Normal", null, "Rabbit", "Field/Human-Like", null, null],
    ["Mismagius", "Ghost", null, "Magical", "Amorphous", "6630", null],
    ["Honchkrow", "Dark", "Flying", "Big Boss", "Flying", "5355", null],
    ["Glameow", "Normal", null, "Catty", "Field", "5355", "38"],
    ["Purugly", "Normal", null, "Tiger Cat", "Field", null, null],
    ["Chingling", "Psychic", null, "Bell", "Undiscovered", "6630", null],
    ["Stunky", "Poison", "Dark", "Skunk", "Field", "5355", "34"],
    ["Skuntank", "Poison", "Dark", "Skunk", "Field", null, null],
    ["Bronzor", "Steel", "Psychic", "Bronze", "Mineral", "5355", "33"],
    ["Bronzong", "Steel", "Psychic", "Bronze Bell", "Mineral", null, null],
    ["Bonsly", "Rock", null, "Bonsai", "Undiscovered", "5355", "17"],
    ["Mime Jr.", "Psychic", "Fairy", "Mime", "Undiscovered", "6630", "18"],
    ["Happiny", "Normal", null, "Playhouse", "Undiscovered", "10455", null],
    ["Chatot", "Normal", "Flying", "Music Note", "Flying", "5355", null],
    ["Spiritomb", "Ghost", "Dark", "Forbidden", "Amorphous", "7905", null],
    ["Gible", "Dragon", "Ground", "Land Shark", "Monster/Dragon", "10455", "24"],
    ["Gabite", "Dragon", "Ground", "Cave", "Monster/Dragon", null, "48"],
    ["Garchomp", "Dragon", "Ground", "Mach", "Monster/Dragon", null, null],
    ["Munchlax", "Normal", null, "Big Eater", "Undiscovered", "10455", null],
    ["Riolu", "Fighting", null, "Emanation", "Undiscovered", "6630", null],
    ["Lucario", "Fighting", "Steel", "Aura", "Field/Human-Like", null, null],
    ["Hippopotas", "Ground", null, "Hippo", "Field", "7905", "34"],
    ["Hippowdon", "Ground", null, "Heavyweight", "Field", null, null],
    ["Skorupi", "Poison", "Bug", "Scorpion", "Bug/Water 3", "5355", "40"],
    ["Drapion", "Poison", "Dark", "Ogre Scorpion", "Bug/Water 3", null, null],
    ["Croagunk", "Poison", "Fighting", "Toxic Mouth", "Human-Like", "2805", "37"],
    ["Toxicroak", "Poison", "Fighting", "Toxic Mouth", "Human-Like", null, null],
    ["Carnivine", "Grass", null, "Bug Catcher", "Grass", "6630", null],
    ["Finneon", "Water", null, "Wing Fish", "Water 2", "5355", "31"],
    ["Lumineon", "Water", null, "Neon", "Water 2", null, null],
    ["Mantyke", "Water", "Flying", "Kite", "Undiscovered", "6630", null],
    ["Snover", "Grass", "Ice", "Frost Tree", "Monster/Grass", "5355", "40"],
    ["Abomasnow", "Grass", "Ice", "Frost Tree", "Monster/Grass", null, null],
    ["Weavile", "Dark", "Ice", "Sharp Claw", "Field", "5355", null],
    ["Magnezone", "Electric", "Steel", "Magnet Area", "Mineral", "5355", null],
    ["Lickilicky", "Normal", null, "Licking", "Monster", "5355", null],
    ["Rhyperior", "Ground", "Rock", "Drill", "Monster/Field", "5355", null],
    ["Tangrowth", "Grass", null, "Vine", "Grass", "5355", null],
    ["Electivire", "Electric", null, "Thunderbolt", "Human-Like", "6630", null],
    ["Magmortar", "Fire", null, "Blast", "Human-Like", "6630", null],
    ["Togekiss", "Fairy", "Flying", "Jubilee", "Flying/Fairy", "2805", null],
    ["Yanmega", "Bug", "Flying", "Ogre Darner", "Bug", "5355", null],
    ["Leafeon", "Grass", null, "Verdant", "Field", "9180", null],
    ["Glaceon", "Ice", null, "Fresh Snow", "Field", "9180", null],
    ["Gliscor", "Ground", "Flyng", "Fang Scorpion", "Bug", "5355", null],
    ["Mamoswine", "Ice", "Ground", "Twin Tusk", "Field", "5355", null],
    ["Porygon-Z", "Normal", null, "Virtual", "Mineral", "5355", null],
    ["Gallade", "Psychic", "Fighting", "Blade", "Amorphous", "5355", null],
    ["Probopass", "Rock", "Steel", "Compass", "Mineral", "5355", null],
    ["Dusknoir", "Ghost", null, "Gripper", "Amorphous", "6630", null],
    ["Froslass", "Ice", "Ghost", "Snow Land", "Fairy/Mineral", "5355", null],
    ["Rotom", "Electric", "Ghost", "Plasma", "Amorphous", "5355", null],
    ["Uxie", "Psychic", null, "Knowledge", "Undiscovered", "20655", null],
    ["Mespirit", "Psychic", null, "Emotion", "Undiscovered", "20655", null],
    ["Azelf", "Psychic", null, "Willpower", "Undiscovered", "20655", null],
    ["Dialga", "Steel", "Dragon", "Temporal", "Undiscovered", "30855", null],
    ["Palkia", "Water", "Dragon", "Spacial", "Undiscovered", "30855", null],
    ["Heatran", "Fire", "Steel", "Lava Dome", "Undiscovered", "2805", null],
    ["Regigigas", "Normal", null, "Colossal", "Undiscovered", "30855", null],
    ["Giratina", "Ghost", "Dragon", "Renegade", "Undiscovered", "30855", null],
    ["Cresselia", "Psychic", null, "Lunar", "Undiscovered", "30855", null],
    ["Phione", "Water", null, "Sea Drifter", "Water 1/Fairy", "10455", null],
    ["Manaphy", "Water", null, "Sea-Faring", "Water 1/Fairy", "2805", null],
    ["Darkrai", "Dark", null, "Pitch-Black", "Undiscovered", "30855", null],
    ["Shaymin", "Grass", null, "Gratitude", "Undiscovered", "30855", null],
    ["Arceus", "Normal", null, "Alpha", "Legendary", "30855", null],
    ["Victini", "Fire", "Psychic", "Victory", "Undiscovered", "30855", null],
    ["Snivy", "Grass", null, "Grass Snake", "Field/Grass", "5355", "17"],
    ["Servine", "Grass", null, "Grass Snake", "Field/Grass", null, "36"],
    ["Serperior", "Grass", null, "Regal", "Field/Grass", null, null],
    ["Tepig", "Fire", null, "Fire Pig", "Field", "5355", "17"],
    ["Pignite", "Fire", "Fighting", "Fire Pig", "Field", null, "36"],
    ["Emboar", "Fire", "Fighting", "Mega Fire Pig", "Field", null, null],
    ["Oshawott", "Water", null, "Sea Otter", "Field", "5355", "17"],
    ["Dewott", "Water", null, "Discipline", "Field", null, "36"],
    ["Samurott", "Water", null, "Formidable", "Field", null, null],
    ["Patrat", "Normal", null, "Scout", "Field", "4080", "20"],
    ["Watchog", "Normal", null, "Lookout", "Field", null, null],
    ["Lillipup", "Normal", null, "Puppy", "Field", "4080", "16"],
    ["Herdier", "Normal", null, "Loyal Dog", "Field", null, "32"],
    ["Stoutland", "Normal", null, "Big-Hearted", "Field", null, null],
    ["Purrloin", "Dark", null, "Devious", "Field", "5355", "20"],
    ["Liepard", "Dark", null, "Cruel", "Field", null, null],
    ["Pansage", "Grass", null, "Grass Monkey", "Field", "5355", null],
    ["Simisage", "Grass", null, "Thorn Monkey", "Field", null, null],
    ["Pansear", "Fire", null, "High Temp", "Field", "5355", null],
    ["Simisear", "Fire", null, "Ember", "Field", null, null],
    ["Panpour", "Water", null, "Sprey", "Field", "5355", null],
    ["Simipour", "Water", null, "Geyser", "Field", null, null],
    ["Munna", "Psychic", null, "Dream Eater", "Field", "2805", null],
    ["Musharna", "Psychic", null, "Drowsing", "Field", null, null],
    ["Pidove", "Normal", "Flying", "Tiny Pigeon", "Flying", "4080", "21"],
    ["Tranquill", "Normal", "Flying", "Wild Pigeon", "Flying", null, "32"],
    ["Unfezant", "Normal", "Flying", "Proud", "Flying", null, null],
    ["Blitzle", "Electric", null, "Electrified", "Field", "5355", "27"],
    ["Zebstrika", "Electric", null, "Thunderbolt", "Field", null, null],
    ["Roggenrola", "Rock", null, "Mantle", "Mineral", "4080", "25"],
    ["Boldore", "Rock", null, "Ore", "Mineral", null, null],
    ["Gigalith", "Rock", null, "Compressed", "Mineral", null, null],
    ["Woobat", "Psychic", "Flying", "Bat", "Field/Flying", "4080", null],
    ["Swoobat", "Psychic", "Flying", "Courting", "Field/Flying", null, null],
    ["Drilbur", "Ground", null, "Mole", "Field", "5355", "31"],
    ["Excadrill", "Ground", "Steel", "Subterrene", "Field", null, null],
    ["Audino", "Normal", null, "Hearing", "Fairy", "5355", null],
    ["Timburr", "Fighting", null, "Muscular", "Human-Like", "5355", "25"],
    ["Gurdurr", "Fighting", null, "Muscular", "Human-Like", null, null],
    ["Conkeldurr", "Fighting", null, "Muscular", "Human-Like", null, null],
    ["Tympole", "Water", null, "Tadpole", "Water 1", "5355", "25"],
    ["Palpitoad", "Water", "Ground", "Vibration", "Water 1", null, "36"],
    ["Seismitoad", "Water", "Ground", "Vibration", "Water 1", null, null],
    ["Throh", "Fighting", null, "Judo", "Human-Like", "5355", null],
    ["Sawk", "Fighting", null, "Karate", "Human-Like", "5355", null],
    ["Sewaddle", "Bug", "Grass", "Sewing", "Bug", "4080", "20"],
    ["Swadloon", "Bug", "Grass", "Leaf-Wrapped", "Bug", null, null],
    ["Leavanny", "Bug", "Grass", "Nurturing", "Bug", null, null],
    ["Venipede", "Bug", "Poison", "Centipede", "Bug", "4080", "22"],
    ["Whirlipede", "Bug", "Poison", "Curlipede", "Bug", null, "30"],
    ["Scolipede", "Bug", "Poison", "Megapede", "Bug", null, null],
    ["Cottonee", "Grass", "Fairy", "Cotton Puff", "Fairy/Grass", "5355", null],
    ["Whimsicott", "Grass", "Fairy", "Windveiled", "Fairy/Grass", null, null],
    ["Petilil", "Grass", null, "Bulb", "Grass", "5355", null],
    ["Lilligant", "Grass", null, "Flowering", "Grass", null, null],
    ["Basculin", "Water", null, "Hostile", "Water 2", "10455", null],
    ["Sandile", "Ground", "Dark", "Desert Croc", "Field", "5355", "29"],
    ["Krokorok", "Ground", "Dark", "Desert Croc", "Field", null, "40"],
    ["Krookodile", "Ground", "Dark", "Intimidation", "Field", null, null],
    ["Darumaka", "Fire", null, "Zen Charm", "Field", "5355", "35"],
    ["Darmanitan", "Fire", null, "Blazing", "Field", null, null],
    ["Maractus", "Grass", null, "Cactus", "Grass", "5355", null],
    ["Dwebble", "Bug", "Rock", "Rock Inn", "Bug/Mineral", "5355", "34"],
    ["Crustle", "Bug", "Rock", "Stone Home", "Bug/Mineral", null, null],
    ["Scraggy", "Dark", "Fighting", "Shedding", "Field/Dragon", "4080", "39"],
    ["Scrafty", "Dark", "Fighting", "Hoodlum", "Field/Dragon", null, null],
    ["Sigilyph", "Psychic", "Flying", "Avianoid", "Flying", "5355", null],
    ["Yamask", "Ghost", null, "Spirit", "Mineral/Amorphous", "6630", "34"],
    ["Cofagrigus", "Ghost", null, "Coffin", "Mineral/Amorphous", null, null],
    ["Tirtouga", "Water", "Rock", "Prototurtle", "Water 1/Water 3", "7905", "37"],
    ["Carracosta", "Water", "Rock", "Prototurtle", "Water 1/Water 3", null, null],
    ["Archen", "Rock", "Flying", "First Bird", "Flying/Water 3", "7905", "37"],
    ["Archeops", "Rock", "Flying", "First Bird", "Flying/Water 3", null, null],
    ["Trubbish", "Poison", null, "Trash Bag", "Mineral", "5355", "36"],
    ["Garbodor", "Poison", null, "Trash Heap", "Mineral", null, null],
    ["Zorua", "Dark", null, "Tricky Fox", "Field", "6630", "30"],
    ["Zoroark", "Dark", null, "Illusion Fox", "Field", null, null],
    ["Minccino", "Normal", null, "Chinchilla", "Field", "4080", null],
    ["Cinccino", "Normal", null, "Scarf", "Field", null, null],
    ["Gothita", "Psychic", null, "Fixation", "Human-Like", "5355", "32"],
    ["Gothorita", "Psychic", null, "Manipulate", "Human-Like", null, "41"],
    ["Gothitelle", "Psychic", null, "Astral Body", "Human-Like", null, null],
    ["Solosis", "Psychic", null, "Cell", "Amorphous", "5355", "32"],
    ["Duosion", "Psychic", null, "Mitosis", "Amorphous", null, "41"],
    ["Reuniclus", "Psychic", null, "Multiplying", "Amorphous", null, null],
    ["Ducklett", "Water", "Flying", "Water Bird", "Water 1/Flying", "5355", "35"],
    ["Swanna", "Water", "Flying", "White Bird", "-", null, null],
    ["Vanillite", "Ice", null, "Fresh Snow", "Mineral", "5355", "35"],
    ["Vanillish", "Ice", null, "Ice Snow", "Mineral", null, "47"],
    ["Vanilluxe", "Ice", null, "Snowstorm", "Mineral", null, null],
    ["Deerling", "Normal", "Grass", "Season", "Field", "5355", "34"],
    ["Sawsbuck", "Normal", "Grass", "Season", "Field", null, null],
    ["Emolga", "Electric", "Flying", "Sky Squirrel", "Field", "5355", null],
    ["Karrablast", "Bug", null, "Clamping", "Bug", "4080", null],
    ["Escavalier", "Bug", "Steel", "Cavalry", "Bug", null, null],
    ["Foongus", "Grass", "Poison", "Mushroom", "Grass", "5355", "39"],
    ["Amoonguss", "Grass", "Poison", "Mushroom", "Grass", null, null],
    ["Frillish", "Water", "Ghost", "Floating", "Amorphous", "5355", "40"],
    ["Jellicent", "Water", "Ghost", "Floating", "Amorphous", null, null],
    ["Alomomola", "Water", null, "Caring", "Water 1/Water 2", "10455", null],
    ["Joltik", "Bug", "Electric", "Attaching", "Bug", "5355", "36"],
    ["Galvantula", "Bug", "Electric", "Elespider", "Bug", null, null],
    ["Ferroseed", "Grass", "Steel", "Thorn Seed", "Grass/Mineral", "5355", "40"],
    ["Ferrothorn", "Grass", "Steel", "Thorn Pod", "Grass/Mineral", null, null],
    ["Klink", "Steel", null, "Gear", "Mineral", "5355", "38"],
    ["Klang", "Steel", null, "Gear", "Mineral", null, "49"],
    ["Klinklang", "Steel", null, "Gear", "Mineral", null, null],
    ["Tynamo", "Electric", null, "EleFish", "Amorphous", "5355", "39"],
    ["Eelectric", "Electric", null, "EleFish", "Amorphous", null, null],
    ["Eelektross", "Electric", null, "EleFish", "Amorphous", null, null],
    ["Elgyem", "Psychic", null, "Cerebral", "Human-Like", "5355", "42"],
    ["Beheeyem", "Psychic", null, "Cerebral", "Human-Like", null, null],
    ["Litwick", "Ghost", "Fire", "Candle", "Amorphous", "5355", "41"],
    ["Lampent", "Ghost", "Fire", "Lamp", "Amorphous", null, null],
    ["Chandelure", "Ghost", "Fire", "Luring", "Amorphous", null, null],
    ["Axew", "Dragon", null, "Tusk", "Monster/Dragon", "10455", "38"],
    ["Fraxure", "Dragon", null, "Axe Jaw", "Monster/Dragon", null, "48"],
    ["Haxorus", "Dragon", null, "Axe Jaw", "Monster/Dragon", null, null],
    ["Cubchoo", "Ice", null, "Chill", "Field", "5355", "37"],
    ["Beartic", "Ice", null, "Freezing", "Field", null, null],
    ["Cryogonal", "Ice", null, "Crystalizing", "Mineral", "6630", null],
    ["Shelmet", "Bug", null, "Snail", "Bug", "4080", null],
    ["Accelgor", "Bug", null, "Shell Out", "Bug", null, null],
    ["Stunfisk", "Ground", "Electric", "Trap", "Water 1/Amorphous", "5355", null],
    ["Mienfoo", "Fighting", null, "Martial Arts", "Field/Human-Like", "6630", "50"],
    ["Meinshao", "Fighting", null, "Martial Arts", "Field/Human-Like", null, null],
    ["Druddigon", "Dragon", null, "Cave", "Monster/Dragon", "7905", null],
    ["Golett", "Ground", "Ghost", "Automaton", "Mineral", "6630", "43"],
    ["Golurk", "Ground", "Ghost", "Automaton", "Mineral", null, null],
    ["Pawniard", "Dark", "Steel", "Sharp Blade", "Human-Like", "5355", "52"],
    ["Bisharp", "Dark", "Steel", "Sword Blade", "Human-Like", null, null],
    ["Bouffalant", "Normal", null, "Bash Buffalo", "Field", "5355", null],
    ["Rufflet", "Normal", "Flying", "Eaglet", "Flying", "5355", "54"],
    ["Braviary", "Normal", "Flying", "Valiant", "Flying", null, null],
    ["Vullaby", "Dark", "Flying", "Diapered", "Flying", "5355", "54"],
    ["Mandibuzz", "Dark", "Flying", "Bone Vulture", "Flying", null, null],
    ["Heatmor", "Fire", null, "Anteater", "Field", "5355", null],
    ["Durant", "Bug", "Steel", "Iron Ant", "Bug", "5355", null],
    ["Deino", "Dark", "Dragon", "Irate", "Dragon", "10455", "50"],
    ["Zweilous", "Dark", "Dragon", "Hostile", "Dragon", null, "64"],
    ["Hydreigon", "Dark", "Dragon", "Brutal", "Dragon", null, null],
    ["Larvesta", "Bug", "Fire", "Torch", "Bug", "10455", "59"],
    ["Volcarona", "Bug", "Fire", "Sun", "Bug", null, null],
    ["Cobalion", "Steel", "Fighting", "Iron Will", "Undiscovered", "20655", null],
    ["Terrakion", "Rock", "Fighting", "Cavern", "Undiscovered", "20655", null],
    ["Virizion", "Grass", "Fighting", "Grassland", "Undiscovered", "20655", null],
    ["Tornadus", "Flying", null, "Cyclone", "Undiscovered", "30855", null],
    ["Thundurus", "Electric", "Flying", "Bolt Strike", "Undiscovered", "30855", null],
    ["Reshiram", "Dragon", "Fire", "Vast White", "Undiscovered", "30855", null],
    ["Zekrom", "Dragon", "Electric", "Deep Black", "Undiscovered", "30855", null],
    ["Landorus", "Ground", "Flying", "Abundance", "Undiscovered", "30855", null],
    ["Kyurem", "Dragon", "Ice", "Boundary", "Undiscovered", "30855", null],
    ["Keldeo", "Water", "Fighting", "Colt", "Undiscovered", null, null],
    ["Meloetta", "Normal", "Psychic", "Melody", "Undiscovered", "5355", null],
    ["Genesect", "Bug", "Steel", "Paleozoic", "Legendary", "30855", null],
    ["Chespin", "Grass", null, "Spiny Nut", "Field", "5355", "16"],
    ["Quilladin", "Grass", null, "Spiny Armor", "36", null, null],
    ["Chesnaught", "Grass", "Fighting", "Spiny Armor", "-", null, null],
    ["Fennekin", "Fire", null, "Fox", "Field", "5355", "16"],
    ["Braixen", "Fire", null, "Fox", "Field", null, "36"],
    ["Delphox", "Fire", "Psychic", "Fox", "Field", null, null],
    ["Froakie", "Water", null, "Bubble Frog", "Water 1", "5355", "16"],
    ["Frogadier", "Water", null, "Bubble Frog", "Water 1", null, "36"],
    ["Greninja", "Water", "Dark", "Ninja", "Water 1", null, null],
    ["Bunnelby", "Normal", null, "Digging", "Field", "5355", "20"],
    ["Diggersby", "Normal", "Ground", "Digging", "Field", null, null],
    ["Fletchling", "Normal", "Flying", "Tiny Robin", "Flying", "5355", "17"],
    ["Fletchinder", "Fire", "Flying", "Ember", "Flying", null, "35"],
    ["Talonflame", "Fire", "Flying", "Scorching", "Flying", null, null],
    ["Scatterbug", "Bug", null, "Scatterdust", "Bug", "3840", "9"],
    ["Swewpa", "Bug", null, "Scatterdust", "Bug", null, "12"],
    ["Vivillon", "Bug", "Flying", "Scale", "Bug", null, null],
    ["Litleo", "Normal", "Fire", "Lion Cub", "Field", "5355", "35"],
    ["Pyroar", "Normal", "Fire", "Royal", "Field", null, null],
    ["Flabebe", "Fairy", null, "Single Bloom", "Fairy", "5355", "19"],
    ["Floette", "Fairy", null, "Single Bloom", "Fairy", null, null],
    ["Florges", "Fairy", null, "Garden", "Fairy", null, null],
    ["Skiddo", "Grass", null, "Mount", "Field", "5355", "32"],
    ["Gogoat", "Grass", null, "Mount", "Field", null, null],
    ["Pancham", "Fighting", null, "Playful", "Field/Human-Like", "5355", " 32 (+ Dark Type)"],
    ["Pangoro", "Fighting", "Dark", "Daunting", "Field/Human-Like", null, null],
    ["Furfrou", "Normal", null, "Poodle", "Field", "5355", null],
    ["Espurr", "Psychic", null, "Restraint", "Field", "5355", "25"],
    ["Meowstic", "Psychic", null, "Constraint", "Field", null, null],
    ["Honedge", "Steel", "Ghost", "Sword", "Mineral", "5355", "35"],
    ["Doublade", "Steel", "Ghost", "Sword", "Mineral", null, null],
    ["Aegislash", "Steel", "Ghost", "Royal Sword", "Mineral", null, null],
    ["Spritzee", "Fairy", null, "Perfume", "Fairy", "5355", null],
    ["Aromatisse", "Fairy", null, "Fragrance", "Fairy", null, null],
    ["Swirlix", "Fairy", null, "Cotton Candy", "Fairy", "5355", null],
    ["Slurpuff", "Fairy", null, "Meringue", "Fairy", null, null],
    ["Inkay", "Dark", "Psychic", "Revolving", "Water 1/Water 2", "5355", "30"],
    ["Malamar", "Dark", "Psychic", "Overturning", "Water 1/Water 2", null, null],
    ["Binacle", "Rock", "Water", "Two-Handed", "Water 3", "5355", "39"],
    ["Barbaracle", "Rock", "Water", "Collective", "Water 3", null, null],
    ["Skrelp", "Poison", "Water", "Mock Kelp", "Water 1/Dragon", "5355", "48"],
    ["Dragalge", "Poison", "Dragon", "Mock Kelp", "Water 1/Dragon", null, null],
    ["Clauncher", "Water", null, "Water Gun", "Water 1/Water 3", "5355", "37"],
    ["Clawitzer", "Water", null, "Howlitzer", "Water 1/Water 3", null, null],
    ["Helioptile", "Normal", "Electric", "Generator", "Monster/Dragon", "5355", null],
    ["Heliolisk", "Normal", "Electric", "Generator", "Monster/Dragon", null, null],
    ["Tyrunt", "Rock", "Dragon", "Royal Heir", "Monster/Dragon", "7680", "39 (+ Day)"],
    ["Tyrantrum", "Rock", "Dragon", "Despot", "MonsterDragon", null, null],
    ["Amaura", "Rock", "Ice", "Tundra", "Monster", "7680", " 39 (+ Night)"],
    ["Aurorus", "Rock", "Ice", "Tundra", "Monster", null, null],
    ["Sylveon", "Fairy", null, "Intertwining", "Field", "9180", null],
    ["Hawlucha", "Fighting", "Flying", "Wrestling", "Human-Like", "5355", null],
    ["Dedenne", "Electric", "Fairy", "Antenna", "Field/Fairy", "5355", null],
    ["Carbink", "Rock", "Fairy", "Jewel", "Fairy/Mineral", "6630", null],
    ["Goomy", "Dragon", null, "Soft Tissue", "Dragon", "10455", "40"],
    ["Sliggoo", "Dragon", null, "Soft Tissue", "Dragon", null, "50 (+ Rain)"],
    ["Goodra", "Dragon", null, "Dragon", "Dragon", null, null],
    ["Klefki", "Steel", "Fairy", "Key Ring", "Mineral", "5355", null],
    ["Phantump", "Ghost", "Grass", "Stump", "Grass/Amorphous", "5355", null],
    ["Trevenant", "Ghost", "Grass", "Elder Tree", "Grass/Amorphous", null, null],
    ["Pumpkaboo", "Ghost", "Grass", "Pumpkin", "Amorphous", "5355", null],
    ["Gourgeist", "Ghost", "Grass", "Pumpkin", "Amorphous", null, null],
    ["Bergmite", "Ice", null, "Ice Chunk", "Monster", "5355", "37"],
    ["Avalugg", "Ice", null, "Iceberg", "Monster", null, null],
    ["Noibat", "Flying", "Dragon", "Sound Wave", "Flying", "5355", "48"],
    ["Noivern", "Flying", "Dragon", "Sound Wave", "Flying", null, null],
    ["Xerneas", "Fairy", null, "Life", "Undiscovered", "30855", null],
    ["Yveltal", "Dark", "Flying", "Destruction", "Undiscovered", "30855", null],
    ["Zygarde", "Dragon", "Ground", "Order", "Undiscovered", "30855", null],
    ["Diancie", "Rock", "Fairy", "Jewel", "Legendary", "6630", null],
    ["Hoopa", "Psychic", "Ghost", "Mischief", "Undiscovered", "30855", null],
    ["Volcanion", "Fire", "Water", "Steam", "Undiscovered", "30855", null],
    ["Rowlet", "", null, "(null)", "(null)", null, null],
    ["Dartrix", "", null, "(null)", "(null)", null, null],
    ["Decidueye", "", null, "(null)", "(null)", null, null],
    ["Litten", "", null, "(null)", "(null)", null, null],
    ["Torracat", "", null, "(null)", "(null)", null, null],
    ["Incineroar", "", null, "(null)", "(null)", null, null],
    ["Popplio", "", null, "(null)", "(null)", null, null],
    ["Brionne", "", null, "(null)", "(null)", null, null],
    ["Primarina", "", null, "(null)", "(null)", null, null],
    ["Pikipek", "", null, "(null)", "(null)", null, null],
    ["Trumbeak", "", null, "(null)", "(null)", null, null],
    ["Toucannon", "", null, "(null)", "(null)", null, null],
    ["Yungoos", "", null, "(null)", "(null)", null, null],
    ["Gumshoes", "", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["", "(null)", null, "(null)", "(null)", null, null],
    ["(null)", "(null)", null, "(null)", "(null)", null, null]
];












function getRoyalData()
{
 
var pkmn1_base = document.getElementsByClassName("royal_pkmn1");
var pkmn1_link = pkmn1_base[0].currentSrc;
var pkmn1_arr1 = pkmn1_link.split('/');
var pkmn1_arr2 = pkmn1_arr1[6].split('.');
var pkmn1_numb = parseInt(pkmn1_arr2[0]);

var pkmn2_base = document.getElementsByClassName("royal_pkmn2");
var pkmn2_link = pkmn2_base[0].currentSrc;
var pkmn2_arr1 = pkmn2_link.split('/');
var pkmn2_arr2 = pkmn2_arr1[6].split('.');
var pkmn2_numb = parseInt(pkmn2_arr2[0]);

var pkmn3_base = document.getElementsByClassName("royal_pkmn3");
var pkmn3_link = pkmn3_base[0].currentSrc;
var pkmn3_arr1 = pkmn3_link.split('/');
var pkmn3_arr2 = pkmn3_arr1[6].split('.');
var pkmn3_numb = parseInt(pkmn3_arr2[0]);


if (pkmn1_numb > 726)
{
    console.log("Data not found");
}
else
{
    console.log("Pokemon 1: " + pkmn_data[pkmn1_numb - 1][0]);
    if (pkmn_data[pkmn1_numb - 1][2] != null)
    {
        console.log("    Types: " + pkmn_data[pkmn1_numb - 1][1] + " " + pkmn_data[pkmn1_numb - 1][2]);
    }
    else
    {
        console.log("    Types: " + pkmn_data[pkmn1_numb - 1][1]);    
    }
    console.log("    Classification: " + pkmn_data[pkmn1_numb - 1][3]);
    console.log("    Egg Group: " + pkmn_data[pkmn1_numb - 1][4]);
    if (pkmn_data[pkmn1_numb - 1][5] == null)
    {
        console.log("    EHP: N/A");
    }
    else
    {
        console.log("    EHP: " + pkmn_data[pkmn1_numb - 1][5]);
    }
    if (pkmn_data[pkmn1_numb - 1][6] == null)
    {
        console.log("    Evolution Level: N/A");
    }
    else
    {
        console.log("    Evolution Level: " + pkmn_data[pkmn1_numb - 1][6]);
    }
    console.log("");
}

if (pkmn2_numb > 726)
{
    console.log("Data not found");
}
else
{
    console.log("Pokemon 2: " + pkmn_data[pkmn2_numb - 1][0]);
    if (pkmn_data[pkmn2_numb - 1][2] != null)
    {
        console.log("    Types: " + pkmn_data[pkmn2_numb - 1][1] + " " + pkmn_data[pkmn2_numb - 1][2]);
    }
    else
    {
        console.log("    Types: " + pkmn_data[pkmn2_numb - 1][1]);    
    }
    console.log("    Classification: " + pkmn_data[pkmn2_numb - 1][3]);
    console.log("    Egg Group: " + pkmn_data[pkmn2_numb - 1][4]);
    if (pkmn_data[pkmn2_numb - 1][5] == null)
    {
        console.log("    EHP: N/A");
    }
    else
    {
        console.log("    EHP: " + pkmn_data[pkmn2_numb - 1][5]);
    }
    if (pkmn_data[pkmn2_numb - 1][6] == null)
    {
        console.log("    Evolution Level: N/A");
    }
    else
    {
        console.log("    Evolution Level: " + pkmn_data[pkmn2_numb - 1][6]);
    }
    console.log("");
}

if (pkmn3_numb > 726)
{
    console.log("Data not found");
}
else
{
    console.log("Pokemon 3: " + pkmn_data[pkmn3_numb - 1][0]);
    if (pkmn_data[pkmn3_numb - 1][2] != null)
    {
        console.log("    Types: " + pkmn_data[pkmn3_numb - 1][1] + " " + pkmn_data[pkmn3_numb - 1][2]);
    }
    else
    {
        console.log("    Types: " + pkmn_data[pkmn3_numb - 1][1]);    
    }
    console.log("    Classification: " + pkmn_data[pkmn3_numb - 1][3]);
    console.log("    Egg Group: " + pkmn_data[pkmn3_numb - 1][4]);
    if (pkmn_data[pkmn3_numb - 1][5] == null)
    {
        console.log("    EHP: N/A");
    }
    else
    {
        console.log("    EHP: " + pkmn_data[pkmn3_numb - 1][5]);
    }
    if (pkmn_data[pkmn3_numb - 1][6] == null)
    {
        console.log("    Evolution Level: N/A");
    }
    else
    {
        console.log("    Evolution Level: " + pkmn_data[pkmn3_numb - 1][6]);
    }
    console.log("");
}



}















getRoyalData();
























