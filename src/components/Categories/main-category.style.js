import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const styles = StyleSheet.create({
  categories: {
    marginBottom: 14
  },
  category: {
    maxWidth: "250",
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: COLORS.quartenary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 4
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 4
  },
  label: {
    color: "white",
    fontWeight: 500
  }
});