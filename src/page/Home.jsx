import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home() {

  function handleParticipantAdd() {
    console.log("Nossa Função esta funcionando!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleEvent}>Nome do Evento</Text>
      <Text style={styles.dateEvent}>Sexta, 2 de junho de 2023</Text>

      <View style={styles.form} >
        <TextInput
          style={styles.input}
          placeholder="Nome do participante..."
          placeholderTextColor={"#6b6b6b"}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText} >
            +
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  titleEvent: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  dateEvent: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
    gap: 7,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  }
});
