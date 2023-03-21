import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import Texto from "../../../components/Texto";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
    return <>
        <Texto style={Estilos.titulo}>{titulo}</Texto>
        <Image source={topo} style={Estilos.topo} />
    </>
}

const Estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        top: "2%",
        width: "100%",
        textAlign: "center",
        fontSize: 24,
        color: "white",
        zIndex: 1,
    },
})