import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: '#fffffff6',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Welcome' }} />
      <Stack.Screen name="services" options={{ title: 'Campus Services' }} />
      <Stack.Screen name="details" options={{ title: 'Service Details' }} />
      <Stack.Screen name="profile" options={{ title: 'Student Profile' }} />
    </Stack>
  );
}