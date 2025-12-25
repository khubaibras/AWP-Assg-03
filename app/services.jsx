import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const DATA = [
  { id: '1', name: 'Cafeteria ', desc: 'Food & Dining Services', full: 'Provides meals, snacks, and beverages for students, staff, and visitors on campus.', cat: 'Food & Dining Services', icon: '🍽️', status: 'Open' },
  { id: '2', name: 'Sports Complex ', desc: 'Recreation & Fitness', full: 'Offers indoor and outdoor sports facilities, fitness areas, and spaces for physical activities and events.', cat: 'Sports', icon: '⚽', status: 'Open' },
  { id: '3', name: 'Student Affairs ', desc: 'Student Support Services', full: 'Handles student welfare, counseling, extracurricular activities, and support programs.', cat: 'Student Support Services', icon: '🎓', status: 'Closed' },
  { id: '4', name: 'Transport Office ', desc: 'Transportation Services', full: 'Manages campus transportation, including buses, routes, schedules, and transport-related inquiries.', cat: 'Transportation', icon: '🚌', status: 'Open' },
  { id: '5', name: 'Hostel Management ', desc: 'Residential Services', full: 'Oversees student accommodation, room allocation, maintenance, and hostel rules and support.', cat: 'Hostel Services', icon: '🏨', status: 'Open' },
];

export default function ServicesScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <Pressable 
      style={styles.item} 
      onPress={() => router.push({ pathname: '/details', params: item })}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={DATA} 
        renderItem={renderItem} 
        keyExtractor={item => item.id} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#7e1bcf2a', padding: 10 },
  item: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
  icon: { fontSize: 30, marginRight: 15 },
  name: { fontSize: 18, fontWeight: 'bold' },
  desc: { color: '#fffdfdff' }
});