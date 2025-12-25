import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ServiceDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.name} {params.icon}</Text>

      <View style={styles.detailCard}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{params.cat}</Text>

        <Text style={styles.label}>Full Description:</Text>
        <Text style={styles.value}>{params.full}</Text>

        <Text style={styles.label}>Availability Status:</Text>
        <Text style={[styles.value, { color: params.status === 'Open' ? 'green' : 'red' }]}>
          {params.status}
        </Text>
      </View>

      <Pressable
        style={styles.profileBtn}
        onPress={() => router.push({
          pathname: '/profile',
          params: { favoriteService: params.name }
        })}
      >
        <Text style={styles.profileBtnText}>View My Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#6200ee', textAlign: 'center' },
  detailCard: { backgroundColor: '#fff', padding: 20, borderRadius: 12, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  label: { fontWeight: 'bold', marginTop: 15, color: '#555', fontSize: 14 },
  value: { fontSize: 17, marginTop: 4, color: '#333' },
  profileBtn: { marginTop: 30, backgroundColor: '#03dac6', padding: 18, borderRadius: 10, alignItems: 'center' },
  profileBtnText: { color: '#000', fontWeight: 'bold', fontSize: 16 }
});