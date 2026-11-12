import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

const styles = StyleSheet.create({
    parent: {
        width: '100%',
        marginBottom: 15,
    },
    title: {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    poster: {
        width: '100%',
        height: 200,
    },
    description: {
        flex: 1,
        fontSize: 15,
    }
});

const Boat = ({name, description, icon_name, icon_color, poster, originalcost, discountcost}) => {
    return (
        <View style={styles.parent}>
            <Text style={styles.title}>
                <FontAwesome6 name={icon_name} size={25} color={icon_color}/> {name}
            </Text>
            <Text style={{fontSize: 16}}>Original Cost: {originalcost} <FontAwesome6 name={"xmark"} size={20} color={"red"} ></FontAwesome6></Text>
            <Text style={{fontSize: 25, color: "red", fontWeight: "bold", textAlign: "center"}}>Discount: {discountcost}!</Text>
            <Text style={styles.description}>
                {description}
            </Text>
            <Image source={poster} style={styles.poster} />
            <Text></Text>
        </View>
    );
};

export default Boat;