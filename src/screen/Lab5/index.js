import { ImageBackground, StatusBar, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";


const Lab5 = () => {
    return(
        <View style = {styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
            source={require('../../assets/imges/travel.png')}
            style={styles.image}>
                <View style={styles.details}> 
                    <Text style={styles.test}>
                        <Text style={styles.firstLine}>Discover{'\n'}</Text>
                        <Text style={styles.secondLine}>sorld with us</Text>
                    </Text>
                    <Text style={styles.textStyle}> Discover world with us</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Get stated</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};
export default Lab5;