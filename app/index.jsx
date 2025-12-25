import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/e/eb/University_of_Central_Punjab_%28logo%29.jpg' }}
        style={styles.logo}
      />
      <Text style={styles.title}>MyCampus Guide</Text>
      <View style={styles.card}>
        <Text style={styles.info}>Name: KHUBAIB RASHID</Text>
        <Text style={styles.info}>Reg: L1S22BSSE0053</Text>
        <Text style={styles.info}>Degree: Bachelors in Software Engineering</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => router.push('/services')}
      >
        <Text style={styles.buttonText}>View Campus Services</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f58a' },
  logo: { width: 200, height: 200, marginBottom: 20, borderRadius: 60 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 20, backgroundColor: '#ffffff71', borderRadius: 10, elevation: 3, marginBottom: 30 },
  info: { fontSize: 16, marginBottom: 5 },
  button: { backgroundColor: '#4b553aff', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});