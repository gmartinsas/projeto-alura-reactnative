import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Texto from "../../../components/Texto";

export default function Botao({ texto }) {
    return <>
        <TouchableOpacity style={Estilos.botao}>
            <Texto style={Estilos.textoBotao}>
                { texto }
            </Texto>
        </TouchableOpacity>
    </>
}

const Estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})
