import { Image, SafeAreaView, StatusBar, Text, View } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { colors } from "../styles/colors"

export const WelcomeScreen = ({navigation}:any) => {
    return (
        <SafeAreaView style={globalStyles.ScreenContainer}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.backgroundLight} />

            <View style={{flex:1,paddingHorizontal:24,justifyContent:'center',alignItems:'center'}}>
                <View style={{alignItems:'center',marginBottom:60}}>
                    <Image source={require('../assets/images/KorsisLogo.png')} style={{ width: 120, height: 120, marginBottom: 20 }} /> 
                    <Text style={[globalStyles.titleLarge,{marginBottom:8}]}>
                        Korsis
                    </Text>
                    <Text style={[globalStyles.bodyText,{textAlign:'center'}]}>
                        Твой личный помощник в формировании полезных привычек
                    </Text>
                </View>
            </View>
            
        </SafeAreaView>
    )
}