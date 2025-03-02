import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect, useMemo, useState} from 'react';
import {Appearance, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeContext} from './context/ThemeContext';
import AppNavigator from './navigator/AppNavigator';
import {persistor, store} from './stores';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {refetchOnWindowFocus: false, refetchOnMount: false},
  },
});

if (!store || !persistor) {
  console.error('Redux store or persistor is not properly initialized');
}

const App = () => {
  const [theme, setTheme] = useState({
    mode: Appearance.getColorScheme(),
  });

  const updateTheme = newTheme => {
    let theme;
    if (!newTheme) {
      theme = Appearance.getColorScheme();
      newTheme = {mode: 'dark'};
    }
    setTheme(newTheme);
  };

  const fetchStoredTheme = async () => {
    await setTimeout(() => {
      SplashScreen.hide();
      StatusBar.setBarStyle('dark-content');
    }, 500);
  };

  const appThemeProviderValue = useMemo(() => ({theme, updateTheme}), [theme]);

  useEffect(() => {
    const appearanceListener = ({colorScheme}) => {
      let obj = {mode: colorScheme};
      updateTheme(obj);
    };
    Appearance.addChangeListener(appearanceListener);
  }, []);

  useEffect(() => {
    fetchStoredTheme();
  }, [theme?.mode]);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={appThemeProviderValue}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <GestureHandlerRootView style={{flex: 1}}>
              <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <BottomSheetModalProvider>
                  <AppNavigator />
                </BottomSheetModalProvider>
              </SafeAreaProvider>
            </GestureHandlerRootView>
          </PersistGate>
        </QueryClientProvider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
