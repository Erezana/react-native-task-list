import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type FilterButtonProps = {
  title: string;
  active: boolean;
  onPress: () => void;
};

export default function FilterButton({
  title,
  active,
  onPress,
}: FilterButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        active && styles.activeButton,
      ]}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  activeButton: {
    backgroundColor: 'green',
  },
  text: {
    color: '#555',
    fontWeight: '500',
  },
  activeText: {
    color: 'white',
  },
});