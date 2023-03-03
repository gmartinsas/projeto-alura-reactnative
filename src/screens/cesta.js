import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get("screen").width;

export default function Cesta() {
    return <>
        <Text style={Estilos.titulo}>Detalhes da compra</Text>
        <Image source={topo} style={Estilos.topo} />
        <View style={Estilos.produtos}>
            <Text style={Estilos.nomeProduto}>Cesta de Verduras</Text>
            <View style={Estilos.fornecedor}>
                <Image source={logo} style={Estilos.logoFornecedor} />
                <Text style={Estilos.nomeFornecedor}>Jenny Jack Farm</Text>
            </View>
            <Text style={Estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente 
            da fazenda direto para sua cozinha.</Text>
            <Text style={Estilos.preco}>R$40,00</Text>
        </View >
    </>
}

const Estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        top: "10%",
        width: "100%",
        textAlign: "center",
        fontSize: 32,
        color: "white",
        zIndex: 1,
    },
    produtos: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    nomeProduto: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#232323",
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
});