
import { useRef, React } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import {WebView} from 'react-native-webview';




export default function App() {


  const webviewRef = useRef(null);


  return (
  <>
<SafeAreaView style={{flex: 1}}>

  <WebView 
    startInLoadingState={true}
    ref={webviewRef}
    source={{uri: 'https://exposnooker.herokuapp.com/'}} />

</SafeAreaView>

  </>
  );
}
