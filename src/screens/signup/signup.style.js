import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme.js";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.bgPage,
      flex: 1,
      justifyContent: "space-between",
      padding: 40
    },
    containerLogo: {
      alignItems: "center"
    },
    logo: {
      width: 100,
      height: 50,
      textAlign: "center",
      color: COLORS.quartenary
    },
    input: {
      padding: 14,
      marginBottom: 14,
      backgroundColor: "#D9D9D9",
      borderRadius: 8
    },
    footer: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center"
    },
    footerLink: {
      color: COLORS.quartenary
    }
});
