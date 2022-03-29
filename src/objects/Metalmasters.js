import galaxyPegasusTakara from "../images/beys/galaxypegasus-takara.png"
import rayUnicornoTakara from "../images/beys/raystriker-takara.png"
import meteoLdragoTakara from "../images/beys/meteoldrago-takara.png"
import twistedTempoTakara from "../images/beys/twistedtempo-takara.png"
import gravityDestroyerTakara from "../images/beys/gravitydestroyer-takara.png"

// const template = {
//     image: "",
//     name: "",
//     type: "",
//     faceBolt: "",
//     energyRing: "",
//     fusionWheel: "",
//     spinTrack: "",
//     performanceTip: ""
// };

const galaxyPegasus = {
    image: galaxyPegasusTakara,
    name: "Galaxy Pegasus W105R2F",
    type: "Attack",
    faceBolt: "Pegasus II",
    energyRing: "Pegasus II",
    fusionWheel: "Galaxy",
    spinTrack: "Wing 105",
    performanceTip: "R2F"
}

const rayUnicorno = {
    image: rayUnicornoTakara,
    name: "Ray Striker D125CS ",
    type: "Attack",
    faceBolt: "Striker I",
    energyRing: "Striker I",
    fusionWheel: "Ray",
    spinTrack: "Defense 125",
    performanceTip: "Coating Spike"
}

const meteoLdrago = {
    image: meteoLdragoTakara,
    name: "Meteo L-Drago LW105LF ",
    type: "Attack",
    faceBolt: "L-Drago II",
    energyRing: "L-Drago II",
    fusionWheel: "Meteo",
    spinTrack: "Left Wing 105",
    performanceTip: "Left Flat"
}

const basaltHorogium = {
    image: twistedTempoTakara,
    name: "Twisted Tempo 145WD ",
    type: "Defense",
    faceBolt: "Tempo",
    energyRing: "Tempo",
    fusionWheel: "Twisted",
    spinTrack: "145",
    performanceTip: "Wide Defense"
}

const gravityPerseus = {
    image: gravityDestroyerTakara,
    name: "Gravity Destroyer AD145WD ",
    type: "Defense",
    faceBolt: "Destroyer",
    energyRing: "Destroyer",
    fusionWheel: "Gravity",
    spinTrack: "Armor Defense 145",
    performanceTip: "Wide Defense"
}

const mmBeyblades = [
    galaxyPegasus,
    rayUnicorno,
    meteoLdrago,
    basaltHorogium,
    gravityPerseus
]

export default mmBeyblades;