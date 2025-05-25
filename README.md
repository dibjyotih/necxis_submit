# Expogo 🚀

Expogo is an Expo-based Android & iOS application that wraps a **Next.js web app** inside a WebView. It delivers a native-like mobile experience for a web-based product and leverages **Firebase Authentication** and **Push Notifications** via **Firebase Cloud Messaging (FCM)**.

---

# 🔗 Related Links
🔗 Frontend (Next.js Web): [https://github.com/YOUR_USERNAME/nextjs-web](https://github.com/dibjyotih/necxis_assignment)

🚀 Live App (Vercel):  https://necxis-assignment-phi.vercel.app/
![image](https://github.com/user-attachments/assets/4a5cb1e3-2517-4005-928e-3340b1e56286)



## 📲 Features

- 🔒 Google Sign-In via Firebase
- 🌐 Loads website hosted on **Vercel** using WebView
- 🔔 Native push notifications with FCM
- 📱 Cross-platform: Android & iOS
- 🔄 Persistent login and smooth WebView transitions

---

## 🌐 Why Vercel?

The frontend is hosted on **Vercel** to ensure:
- Fast, global CDN delivery
- Stable HTTPS domain for FCM & OAuth callbacks
- Consistent WebView performance across devices

## File Structure
![image](https://github.com/user-attachments/assets/b3459da0-ede4-4500-a2be-1f51f1f5bc1d)

---

## 📂 Key Code: `index.js`

This is the entry point of the app. It:
- Renders a `WebView` pointing to the Vercel-hosted app
- Handles deep links, push notifications, and WebView navigation
- Integrates Firebase native modules for token handling

# 📦 How to Run
📱 Android
npx expo start --android
🍎 iOS (requires macOS)
npx expo start --ios

# ✅ Highlights
-  Google OAuth & Firebase Auth integration
-  Native FCM push notifications
-  Seamless WebView UX
-  Runs on both Android and iOS


```js
import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return <WebView source={{ uri: "https://necxis.vercel.app" }} />;
}
