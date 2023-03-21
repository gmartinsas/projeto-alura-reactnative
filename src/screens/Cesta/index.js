import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import Texto from "../../components/Texto";

export default function Cesta({topo, detalhes, itens}) {
    return <>
        <FlatList
            data={ itens.lista }
            renderItem={Item}
            keyExtractor={({ nome }) => nome}

            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={Estilos.produtos}>
                        <Detalhes {...detalhes} />
                    </View>
                    <Texto style={Estilos.titulo}>{ itens.titulo }</Texto>
                </>
            }}
        />
    </>
}

const Estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 32,
        marginBottom: 8,
        lineHeight: 32,
        paddingHorizontal: 16
    },
    produtos: {
        paddingHorizontal: 16,
        paddingVertical: 12,    
    }
});