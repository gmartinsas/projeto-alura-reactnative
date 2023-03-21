import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import Texto from "../../../components/Texto";

export default function Item({item: { nome, imagem}}) {
    return <>
    <View style={Estilos.item} key={ nome }>
    <Image style={Estilos.imagem} source={ imagem }/>
    <Texto style={Estilos.nome}>{ nome }</Texto>
    </View>
    </>
}

const Estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})