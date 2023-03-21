import { SafeAreaView, StatusBar, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import Cesta from './src/screens/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [FonteCarregada] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if (!FonteCarregada) {
      return <View />
  } else {
      return (
        <SafeAreaView style={{flex: 1}}>
          <StatusBar />
          <Cesta {...mock} />
        </SafeAreaView>
      );
  }  
}