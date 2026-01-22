import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native"
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

            <View style={{width:'100%',gap:16}}>
                <TouchableOpacity style={[globalStyles.buttonPrimary,{width:'100%'}]} onPress={()=>navigation.navigate('Register')}>
                    <Text style={globalStyles.buttonText}>
                        Регистрация
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:'100%',paddingVertical: 16,borderWidth: 2,borderColor: colors.primary,borderRadius: 12,alignItems: 'center'}} onPress={()=>navigation.navigate('Login')}>
                    <Text style={globalStyles.buttonText}>
                        Войти
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:'100%',paddingVertical: 16,backgroundColor: '#F8FAFC',borderColor: colors.textSecondary + '20',borderWidth: 1,alignItems: 'center'}} onPress={()=>navigation.navigate('Home')}>
                    <Text style={{color: colors.textPrimary,fontSize: 16,fontWeight: '500'}}>
                        Продолжить как гость
                    </Text>
                </TouchableOpacity>
            </View>

            
        </SafeAreaView>
    )
}