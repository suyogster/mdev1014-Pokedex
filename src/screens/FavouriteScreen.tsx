import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import { favoriteData } from '../data/mockedPokemon';
import FavoriteCard from '../components/FavouriteCard';

export default function FavouriteScreen(props: any) {
    return (
        <SafeAreaView>
            <FlatList
                data={favoriteData}
                renderItem={(items) => (
                    <FavoriteCard
                        id={`#00${items.index}`}
                        data={items.item}
                        navigation={props.navigation}
                    />
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
});
