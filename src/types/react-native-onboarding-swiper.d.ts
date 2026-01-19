declare module 'react-native-onboarding-swiper' {
  import { ComponentType } from 'react';
  
  export interface OnboardingProps {
    pages: Array<{
      backgroundColor: string;
      image: React.ReactElement;
      title: string;
      titleBig?: string;
      subtitle: string;
    }>;
    onSkip?: () => void;
    onDone?: () => void;
    pageIndexCallback?: (index: number) => void;
    SkipButtonComponent?: ComponentType<any>;
    NextButtonComponent?: ComponentType<any>;
    DoneButtonComponent?: ComponentType<any>;
    DotComponent?: ComponentType<{ selected: boolean }>;

    bottomBarColor?: string;
    bottomBarHighlight?: boolean;
    bottomBarHeight?: number;

    showPagination?: boolean;

    containerStyles?: any;
    titleStyles?: any;
    subTitleStyles?: any;
  }

  const Onboarding: ComponentType<OnboardingProps>;
  export default Onboarding;
}