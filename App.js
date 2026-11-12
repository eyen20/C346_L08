import React, {useState} from 'react';
import {Text ,ScrollView, TextInput, View, Button, Alert, StyleSheet} from 'react-native';
import Boat from './components/Boat';
import {Picker} from "@react-native-picker/picker";

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style = {{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'whitesmoke',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 40,
        flex: 1,
        textAlign: 'center',
        borderWidth: 3,
        backgroundColor: 'yellow',
        borderRadius: 20,
    }
});

const AllBoats = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [selectedBoat, setSelectedBoat] = useState("");

    const handleSubmit = () => {
        let discountCost = "";

        if (selectedBoat === "Sea Ray 500 Sundancer") { discountCost = "$120,000"; }
        else if (selectedBoat === "Four Winns Horizon 180") { discountCost = "$39,000"; }
        else if (selectedBoat === "Flipper 640 ST") { discountCost = "$55,000"; }
        else if (selectedBoat === "Princess V48") { discountCost = "$270,000"; }
        else if (selectedBoat === "Bayliner 175 Bowrider") { discountCost = "$20,000"; }
        else if (selectedBoat === "Fairline Targa 47") { discountCost = "$180,000"; }

        let receiptMessage =
            "Name: " + userName + "\n" +
            "Email: " + userEmail + "\n" +
            "Boat: " + selectedBoat + "\n" +
            "Total Cost: " + discountCost;

        Alert.alert("Order Receipt: ", receiptMessage);
    };

    return (
        <ScrollView style={styles.page}>
            <Text></Text>
            <Text style={styles.title}>GetASale - For Sale!</Text>
            <Text></Text>
            <Boat
                name={'Sea Ray 500 Sundancer'}
                description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                icon_name={"sailboat"} icon_color={"grey"}
                poster={require('./img/sea_ray.jpg')}
                originalcost={"$150,000"}
                discountcost={"$120,000"}
            />
            <Boat
                name={'Four Winns Horizon 180'}
                description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                icon_name={"ship"} icon_color={"black"}
                poster={require('./img/four_winns.jpg')}
                originalcost={"$45,000"}
                discountcost={"$39,000"}
            />
            <Boat
                name={'Flipper 640 ST'}
                description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                icon_name={"water"} icon_color={"blue"}
                poster={require('./img/flipper.jpg')}
                originalcost={"$65,000"}
                discountcost={"$55,000"}
            />
            <Boat
                name={'Princess V48'}
                description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model."}
                icon_name={"sailboat"} icon_color={"pink"}
                poster={require('./img/princess.jpg')}
                originalcost={"$320,000"}
                discountcost={"$270,000"}
            />
            <Boat
                name={'Bayliner 175 Bowrider'}
                description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                icon_name={"ship"} icon_color={"brown"}
                poster={require('./img/bayliner.jpg')}
                originalcost={"$28,000"}
                discountcost={"$20,000"}
            />
            <Boat
                name={'Fairline Targa 47'}
                description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                icon_name={"water"} icon_color={"red"}
                poster={require('./img/fairline.jpg')}
                originalcost={"$210,000"}
                discountcost={"$180,000"}
            />
            <InputBox label={"Enter your name: "} onChangeText={(text) => setUserName(text)}></InputBox>
            <InputBox label={"Enter your email: "} onChangeText={(text) => setUserEmail(text)}></InputBox>

            <Text>Select Boat to Buy</Text>
            <Picker onValueChange={(value) => setSelectedBoat(value)}>
                <Picker.Item label="Select a boat..." value="" />
                <Picker.Item label="Sea Ray 500 Sundancer" value="Sea Ray 500 Sundancer" />
                <Picker.Item label="Four Winns Horizon 180" value="Four Winns Horizon 180" />
                <Picker.Item label="Flipper 640 ST" value="Flipper 640 ST" />
                <Picker.Item label="Princess V48" value="Princess V48" />
                <Picker.Item label="Bayliner 175 Bowrider" value="Bayliner 175 Bowrider" />
                <Picker.Item label="Fairline Targa 47" value="Fairline Targa 47" />
            </Picker>
            <Button onPress={handleSubmit} title="Buy!" style={{size: 20}} />
            <Text></Text>
        </ScrollView>
    );
};

export default AllBoats;

