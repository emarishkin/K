import Onboarding from "react-native-onboarding-swiper"
import { useState, useEffect } from "react"
import { Image, Platform, Text, TouchableOpacity, View } from "react-native"

export const OnboardingScreen = ({navigation}:any) => {
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        console.log('Текущая страница:', currentPage)
    }, [currentPage])

    const HiddenButton = () => null

    return (
    <View style={{ flex: 1 }}>
       <Onboarding
            onSkip={()=>navigation.replace('Welcome')}
            onDone={()=>navigation.replace('Welcome')}
            SkipButtonComponent={HiddenButton}
            NextButtonComponent={HiddenButton}
            DoneButtonComponent={HiddenButton}
            bottomBarHighlight={false}
            bottomBarHeight={0}
            bottomBarColor='transparent'
            showPagination={true}
            pageIndexCallback={(index: number) => setCurrentPage(index)}

            DotComponent={({ selected }) => (
            <View
                style={{
                    width: selected ? 25 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: selected ? 'white' : 'rgba(255,255,255,0.5)',
                    marginHorizontal: 3,
                }}
            />
            )}

            containerStyles={{
                paddingTop: Platform.OS === 'web' ? 100 : 50
            }}
            titleStyles={{ height: 0 }}
            subTitleStyles={{ height: 0 }}
            pages={[
                {
                  backgroundColor: '#425AC2',
                  image: (
                    <View style={{alignItems:'center'}}>
                        <Text style={{ fontSize:22,fontWeight:'bold',color:'white',textAlign:'center',marginBottom: 40,marginTop: 0,lineHeight: 88, }}>
                            Добро пожаловать в{'\n'}
                            <Text style={{fontFamily: 'Avenir Next', fontSize: 60 }}>Korsis</Text> 
                        </Text>
                        <View style={{marginBottom:40}}>
                            <Image source={require('../assets/images/KorsisLogo.png')} style={{width: 250, height:250}} />
                        </View>
                        <Text style={{fontSize: 22,color: 'white',textAlign: 'center',lineHeight: 28,paddingHorizontal: 30}}>
                            Korsis – твой личный помощник в формировании полезных привычек!
                        </Text>
                    </View>
                  ), 
                  title: '',
                  subtitle: '',
                },
                {
                  backgroundColor: '#10B981',
                  image: (
                    <View style={{alignItems:'center'}}>
                        <Text style={{ fontSize:22,fontWeight:'bold',color:'white',textAlign:'center',marginBottom: 40,marginTop: 0,lineHeight: 88, }}>
                            Меняй привычки,{'\n'}
                            <Text style={{ fontSize: 60 }}>меняй жизнь!</Text> 
                        </Text>
                        <View style={{marginBottom:40}}>
                            <Image source={require('../assets/images/MyLifeMyrools.png')} style={{width: 250, height:250}} />
                        </View>
                        <Text style={{fontSize: 22,color: 'white',textAlign: 'center',lineHeight: 28,paddingHorizontal: 30}}>
                            Легко формируй полезные привычки, отслеживай прогресс и становись лучше каждый день! 🚀
                        </Text>
                    </View>
                  ), 
                  title: '',
                  subtitle: '',
                },
                {
                  backgroundColor: '#F59E0B', 
                  image: (
                    <View style={{alignItems:'center'}}>
                        <Text style={{ fontSize:22,fontWeight:'bold',color:'white',textAlign:'center',marginBottom: 40,marginTop: 0,lineHeight: 88, }}>
                            Отслеживай{'\n'}
                            <Text style={{ fontSize: 60 }}>прогресс</Text> 
                        </Text>
                        <View style={{marginBottom:40}}>
                            <Image source={require('../assets/images/stats.png')} style={{width: 250, height:250}} />
                        </View>
                        <Text style={{fontSize: 22,color: 'white',textAlign: 'center',lineHeight: 28,paddingHorizontal: 30}}>
                            Приложение превращает рутину в увлекательный процесс. Наглядные графики покажут твои успехи!
                        </Text>
                    </View>
                  ),
                  title: '',
                  subtitle: '',
                },
                {
                  backgroundColor: '#EF4444', 
                  image: (
                    <View style={{alignItems:'center'}}>
                        <Text style={{ fontSize:22,fontWeight:'bold',color:'white',textAlign:'center',marginBottom: 40,marginTop: 0,lineHeight: 88, }}>
                            Получай{'\n'}
                            <Text style={{ fontSize: 60 }}>награды</Text> 
                        </Text>
                        <View style={{marginBottom:40}}>
                            <Image source={require('../assets/images/trophy.png')} style={{width: 250, height:250}} />
                        </View>
                        <Text style={{fontSize: 22,color: 'white',textAlign: 'center',lineHeight: 28,paddingHorizontal: 30}}>
                            Зарабатывай достижения за регулярность и достигай новых высот!
                        </Text>
                    </View>
                  ),
                  title: '',
                  subtitle: '',
                },
            ]}
       />
        <TouchableOpacity 
            style={{
                position: 'absolute',
                top: Platform.OS === 'ios' ? 50 : 40,
                right: 20,
                backgroundColor: 'rgba(255,255,255,0.2)',
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 20,
                zIndex: 100,
            }}
            onPress={() => navigation.replace('Welcome')}
        >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                Пропустить
            </Text>
        </TouchableOpacity>

        {currentPage === 3 && (
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 30,
                    right: 30,
                    backgroundColor: 'white',
                    paddingVertical: 18,
                    borderRadius: 25,
                    alignItems: 'center',
                    zIndex: 100,
                }}
                onPress={() => navigation.replace('Welcome')}
            >
                <Text style={{ 
                    color: '#EF4444',
                    fontSize: 20, 
                    fontWeight: 'bold' 
                }}>
                    Начнем
                </Text>
            </TouchableOpacity>
        )}
    </View>
    )
}