import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ProfileScreen() {
    const { favoriteService } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <Text style={styles.name}>KHUBAIB RASHID</Text>
                <Text style={styles.reg}>L1S22BSSE0053</Text>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Degree Program</Text>
                    <Text style={styles.value}>Bachelors in Software Engineering</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Current Semester</Text>
                    <Text style={styles.value}>7th Semester</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Favorite Service</Text>
                    <Text style={styles.favValue}>{favoriteService || 'Not Selected'}</Text>
                </View>

                <View style={styles.buttonGroup}>

                    <Pressable
                        style={styles.welcomeBtn}
                        onPress={() => router.replace('/')}
                    >
                        <Text style={styles.welcomeBtnText}>Back to Welcome</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f5ff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatarText: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    reg: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 20,
    },
    infoRow: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },
    label: {
        fontSize: 12,
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    value: {
        fontSize: 17,
        color: '#333',
        fontWeight: '500',
        marginTop: 2,
    },
    favValue: {
        fontSize: 18,
        color: '#03dac6',
        fontWeight: 'bold',
        marginTop: 2,
    },
    buttonGroup: {
        width: '100%',
        marginTop: 20,
    },
    backBtn: {
        width: '100%',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    backBtnText: {
        color: '#495057',
        fontWeight: '600',
    },
    welcomeBtn: {
        width: '100%',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: '#6200ee',
    },
    welcomeBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});