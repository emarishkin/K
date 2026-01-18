import Onboarding from "react-native-onboarding-swiper"
import { colors } from "../styles/colors"
import { Text, TouchableOpacity, View } from "react-native"

export const OnboardingScreen = ({navigation}:any) => {

    const SkipButton = ({...props}) => (
        <TouchableOpacity style={{paddingLeft:20}} {...props}>
            <Text style={{ color: '#6B7280', fontSize: 16 }}>
                Пропустить    
            </Text>       
        </TouchableOpacity>
    )

    const NextButton = ({ ...props }) => (
        <TouchableOpacity style={{paddingRight: 20,paddingVertical: 10,}} {...props} >
          <Text style={{ color: '#7C3AED', fontSize: 16, fontWeight: '600' }}>
            Далее
          </Text>
        </TouchableOpacity>
    );

    const DoneButton = ({ ...props}) => (
        <TouchableOpacity style={{paddingRight: 20,paddingVertical: 10,}} {...props}>
            <Text style={{ color: '#7C3AED', fontSize: 16, fontWeight: '600' }}>
                Начать
            </Text>
        </TouchableOpacity>
    )
    
    return (
       <Onboarding
            onSkip={()=>navigation.replace('Home')}
            onDone={()=>navigation.replace('Home')}
            SkipButtonComponent={SkipButton}
            NextButtonComponent={NextButton}
            DoneButtonComponent={DoneButton}
            bottomBarColor={colors.backgroundLight}
            pages={[
                {
                  backgroundColor: '#F8FAFC',
                  image: <View style={{ height: 250 }} />, 
                  title: 'Отслеживай привычки',
                  subtitle: 'Добавляй ежедневные привычки и следи за своим прогрессом',
                },
                {
                  backgroundColor: '#F8FAFC',
                  image: <View style={{ height: 250 }} />,
                  title: 'Смотри статистику',
                  subtitle: 'Наглядные графики покажут твои успехи',
                },
                {
                  backgroundColor: '#F8FAFC',
                  image: <View style={{ height: 250 }} />,
                  title: 'Получай награды',
                  subtitle: 'Зарабатывай достижения за регулярность',
                },
            ]}
       />
    )
}