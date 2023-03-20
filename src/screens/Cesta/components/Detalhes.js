import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../components/Texto";
import Botao from "./Botao";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={Estilos.nomeProduto}>{ nome }</Texto>
            <View style={Estilos.fornecedor}>
                <Image source={logoFazenda} style={Estilos.logoFornecedor} />
                <Texto style={Estilos.nomeFornecedor}>{ nomeFazenda }</Texto>
            </View>
        <Texto style={Estilos.descricao}>{ descricao }</Texto>
        <Texto style={Estilos.preco}>{ preco }</Texto>
        <Botao texto={ botao }/>
    </>
}

const Estilos = StyleSheet.create({
    nomeProduto: {
        fontSize: 32,
        marginBottom: 12,
        color: "#232323",
        fontWeight: "bold"
    },
    fornecedor: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 8,
    },
    logoFornecedor: {
        height: 32,
        width: 32,
    },
    nomeFornecedor: {
        fontSize: 20,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
    },
    preco: {
        marginTop: 8,
        fontSize: 24,
        fontWeight: "bold",
        color: "#2A9F85",
    }
})