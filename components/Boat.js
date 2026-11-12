import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

// Ex1: User-defined component Boat with properties
const Boat = ({name, description, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
                <FontAwesome6 name={icon_name} size={25} color={icon_color}/>
                {name}
            </Text>
            <Text style={{ fontSize: 15}}>
                {description}
            </Text>
            <Image source={poster} style={{width:400, height:400}} />
            <Text></Text>
        </View>
    );
};

export default Boat;