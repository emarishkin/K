import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from './screens/OnboardingScreen';

const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
                 <Stack.Screen name='Onboarding' component={OnboardingScreen} />
                 <Stack.Screen name='Welcome' component={OnboardingScreen} />
                 <Stack.Screen name='Login' component={OnboardingScreen} />
                 <Stack.Screen name='Register' component={OnboardingScreen} />
                 <Stack.Screen name="Home" component={OnboardingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}