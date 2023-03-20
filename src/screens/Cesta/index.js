import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Itens from "./components/Itens";

export default function Cesta({topo, detalhes, itens}) {
    return <>
        <Topo {...topo} />
        <View style={Estilos.produtos}>
            <Detalhes {...detalhes} />
            <Itens {...itens}/>
        </View>
    </>
}

const Estilos = StyleSheet.create({
    produtos: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    }
});