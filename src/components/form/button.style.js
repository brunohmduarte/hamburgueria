import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = StyleSheet.create({
    btn: {
        display: "block",
        width: "100%",
        backgroundColor: COLORS.quartenary,
        borderRadius: 8,
        padding: 14
    },
    label: {
        color: "#FFF",
        fontSize: FONT_SIZE.md,
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center"
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.8,
      shadowRadius: 3,
    }
});