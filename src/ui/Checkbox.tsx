import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
};

export default function Checkbox({ checked, onPress }: CheckboxProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxRow}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkboxRow: {
    marginTop: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "green",
    borderColor: "green",
  },
  checkmark: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
});
