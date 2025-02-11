import { StyleSheet } from "react-native";

export {styles}
const styles = StyleSheet.create({
    headerContainer: { marginTop: 10 },
    headerText: { fontSize: 30, textAlign: "center", marginTop: 30, color: "#ffffff" },
    container: {
      flex: 1,
      backgroundColor: "#999999",
    },
    buttonRow: {
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    buttonContainer: {
      marginTop: 10,
      padding: 20,
      width: 100,
    },
    button: {
      margin: 100,
    },
    responseWindowContainer: {
      marginTop: 10,
      padding: 100,
    },
  });
  