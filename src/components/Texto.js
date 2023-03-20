import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
    let estilo = Estilos.texto;

    if (style?.fontWeight === "bold") {
        estilo = Estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const Estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})