import stormPegasusTakara from "../images/beys/stormpegasus-takara.png";
import rockLeoneTakara from "../images/beys/rockleone-takara.png";
import lightningLdragoTakara from "../images/beys/lightningldrago-takara.png";
import flameSagittarioTakara from "../images/beys/flamesagittario-takara.png";
import earthEagleTakara from "../images/beys/eartheagle-takara.png";

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

const rockLeone = {
    image: rockLeoneTakara,
    name: "Rock Leone 145WB",
    type: "Defense ",
    faceBolt: "Leone I",
    energyRing: "Leone I",
    fusionWheel: "Rock ",
    spinTrack: "145",
    performanceTip: "Wide Ball"
};

const stormPegasus = {
    image: stormPegasusTakara,
    name: "Storm Pegasus 105RF",
    type: "Attack",
    faceBolt: "Pegasus I",
    energyRing: "Pegasus I",
    fusionWheel: "Storm",
    spinTrack: "105",
    performanceTip: "Rubber Flat"
};

const lightningLdrago = {
    image: lightningLdragoTakara,
    name: "Lightning L-Drago 100HF",
    type: "Attack",
    faceBolt: "L-Dragon I",
    energyRing: "L-Dragon I",
    fusionWheel: "Lightning",
    spinTrack: "100",
    performanceTip: "Hollow Flat"
};

const flameSagittario = {
    image: flameSagittarioTakara,
    name: "Flame Sagittario C145S",
    type: "Stamina",
    faceBolt: "Sagittario I",
    energyRing: "Sagittario",
    fusionWheel: "Flame",
    spinTrack: "Claw 145",
    performanceTip: "Spike"
};

const earthEagle = {
    image: earthEagleTakara,
    name: "Earth Eagle 145WD",
    type: "Defense",
    faceBolt: "Eagle",
    energyRing: "Eagle",
    fusionWheel: "Earth",
    spinTrack: "145",
    performanceTip: "Wide Defense"
}

const mfBeyblades = [
    stormPegasus,
    rockLeone,
    lightningLdrago,
    flameSagittario,
    earthEagle
]


export default mfBeyblades;