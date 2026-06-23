import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  primary?: boolean;
};

export default function Button({
  title,
  onPress,
  primary = true,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary && styles.primary,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          primary && styles.primaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    marginTop: 16,   
    paddingVertical: 14,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: 'green',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: 'white',
  },
});