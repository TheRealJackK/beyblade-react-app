import cosmicPegasusTakara from "../images/beys/cosmicpegasus-takara.png";
import fangLeoneTakara from "../images/beys/fangleone-takara.png";
import ldragoDestructorTakara from "../images/beys/ldragodestructor-takara.png";
import flashSagittarioTakara from "../images/beys/flashsagittario-takara.png";
import diabloNemesisTakara from "../images/beys/diablonemesis-takara.png";

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

const cosmicPegasus = {
    image: cosmicPegasusTakara,
    name: "Cosmic Pegasus F:D ",
    type: "Attack",
    faceBolt: "Pegasus III",
    energyRing: "Pegasus III",
    fusionWheel: "Cosmic",
    spinTrack: "NA",
    performanceTip: "Final Drive"
}

const fangLeone = {
    image: fangLeoneTakara,
    name: "Fang Leone 130W2D ",
    type: "Defense",
    faceBolt: "Leone II",
    energyRing: "Leone II",
    fusionWheel: "Fang",
    spinTrack: "130",
    performanceTip: "Wave Wide Defense"
}

const ldragoDestructor = {
    image: ldragoDestructorTakara,
    name: "L-Drago Destructor F:S",
    type: "Attack",
    faceBolt: "L-Drago III",
    energyRing: "NA",
    fusionWheel: "L-Drago Destructor",
    spinTrack: "NA",
    performanceTip: "Final Survive"
}

const flashSagittario = {
    image: flashSagittarioTakara,
    name: "Flash Sagittario 230WD ",
    type: "Stamina",
    faceBolt: "Sagittario II",
    energyRing: "Sagittario II",
    fusionWheel: "Flash",
    spinTrack: "230",
    performanceTip: "Wide Defense"
}

const diabloNemesis = {
    image: diabloNemesisTakara,
    name: "Diablo Nemesis X:D ",
    type: "Balance",
    faceBolt: "Nemesis A",
    energyRing: "Nemesis A",
    fusionWheel: "Diablo",
    spinTrack: "NA",
    performanceTip: "X Drive"
}

const mfuryBeyblades = [
    cosmicPegasus,
    fangLeone,
    ldragoDestructor,
    flashSagittario,
    diabloNemesis
]

export default mfuryBeyblades;