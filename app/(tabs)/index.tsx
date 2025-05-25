import { useState } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const [showWebView, setShowWebView] = useState(false);

  // Replace this with your actual deployed Vercel URL
  const deployedUrl = 'https://necxis-assignment-phi.vercel.app/';

  if (showWebView) {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: deployedUrl }}
          style={{ flex: 1 }}
          startInLoadingState
          renderError={() => (
            <View style={styles.container}>
              <Text>Failed to load Web App.</Text>
              <Button title="Go Back" onPress={() => setShowWebView(false)} />
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to the Expo App!</Text>
      <Button title="Open Web App" onPress={() => setShowWebView(true)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  title: {
    fontSize: 22, fontWeight: '600', marginBottom: 20,
  },
});
