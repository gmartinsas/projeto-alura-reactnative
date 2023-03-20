import React from "react";
import { StyleSheet } from "react-native";

import Texto from "../../../components/Texto";

export default function Itens({titulo}) {
    return <>
        <Texto style={Estilos.titulo}>{ titulo }</Texto>
    </>
}

const Estilos = StyleSheet.create({
    titulo: {
        fontWeight: "bold"
    }
})