declare module 'react-native-onboarding-swiper' {
  import { ComponentType } from 'react';
  
  export interface OnboardingProps {
    pages: Array<{
      backgroundColor: string;
      image: React.ReactElement;
      title: string;
      subtitle: string;
    }>;
    onSkip?: () => void;
    onDone?: () => void;
    SkipButtonComponent?: ComponentType<any>;
    NextButtonComponent?: ComponentType<any>;
    DoneButtonComponent?: ComponentType<any>;
    bottomBarColor?: string;
  }

  const Onboarding: ComponentType<OnboardingProps>;
  export default Onboarding;
}