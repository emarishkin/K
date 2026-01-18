import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({

    ScreenContainer:{
        flex:1,
        backgroundColor:colors.backgroundLight
    },

    centerContent: {
        alignItems:'center',
        justifyContent:'center'
    },

    titleLarge: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.textPrimary,
        textAlign: 'center',
    },

    titleSmall: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.textPrimary,
    },
  
    bodyText: {
        fontSize: 16,
        color: colors.textSecondary,
        lineHeight: 24,
    },
  
    buttonPrimary: {
        backgroundColor: colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        alignItems: 'center',
    },
  
        buttonText: {
        color: colors.textWhite,
        fontSize: 18,
        fontWeight: '600',
    },
})