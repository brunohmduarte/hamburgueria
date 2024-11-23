import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme.js";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14
  },
  icons: {
    width: 36,
    height: 36
  },
  greetings: {
    width: "100%",
    marginBottom: 14
  },
  greetingsTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: COLORS.quartenary
  },
  search: {
    width: "100%",
    marginBottom: 14
  },
  searchTitle: {
    fontSize: 16,
    color: COLORS.darkGray,
    marginBottom: 14
  },
  searchInputBox: {
    width: "100%",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchInput: {
    width: "80%",
    height: 48,
    backgroundColor: COLORS.lightGray,
    fontSize: 16,
    paddingHorizontal: 14,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  searchBtn: {
    width: "20%",
    height: 48,
    backgroundColor: COLORS.lightGray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  categories: {},
  category: {},
  showcase: {}
});