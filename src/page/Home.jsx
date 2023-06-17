import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { useState } from "react";

import { Participant } from "../components/Participant";

export function Home() {
  /**
   * Estrutura básica do useSate
   * const [1param, 2param] = useState()
   */

  const [input, setinput] = useState('bruno')
  const [listParticipant, setListParticipant] = useState(["Fulane"])


  function handleParticipantAdd(participant) {
    if (listParticipant.includes(participant)) {
      Alert.alert('Ohhhh.... Mané esse nené, já está na lista!!!')
    } else {
      setListParticipant((prevState) => [...prevState, participant]);
    }
  }

  function handleParticipantRemove(participant) {
    Alert.alert("Remover", `Remover o participante ${participant}`, [
      {
        text: 'sim',
        onPress: () => Alert.alert('Eliminado!!')
      }, {
        text: 'não',
        onPress: () => Alert.alert('Mudei de Ideia')
      }])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleEvent}>Nome do Evento</Text>
      <Text style={styles.dateEvent}>Sexta, 2 de junho de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante..."
          placeholderTextColor={"#6b6b6b"}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => handleParticipantAdd(input)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listParticipant}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            participantRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participante a sua lista de presença.
          </Text>
        }}
      />
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
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
    gap: 7,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
});
