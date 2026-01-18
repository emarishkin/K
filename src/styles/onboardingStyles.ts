import { Dimensions, StyleSheet } from "react-native";
import { colors } from "./colors";

const {width, height} = Dimensions.get('window')

export const onboardingStyles = StyleSheet.create({
  
    slideContainer:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: height * 0.1
    },

    imageContainer: {
        width: width * 0.7,
        height: width * 0.7,
        backgroundColor: colors.primary + '20', 
        borderRadius: width * 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 40,
    },

    iconLarge: {
        fontSize: 100,
        color: colors.primary,
    },
  
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.textPrimary,
        textAlign: 'center',
        marginBottom: 16,
    },
  
    description: {
        fontSize: 16,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20,
    },

    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
  
    skipButton: {
        paddingLeft: 20,
    },
  
    skipButtonText: {
        color: colors.textSecondary,
        fontSize: 16,
    },
  
    actionButton: {
        paddingRight: 20,
        paddingVertical: 10,
    },
  
    actionButtonText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: '600',
    },
  
})