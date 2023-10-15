import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({
  title,
  titleRhs = "",
  subTitle,
  subTitleRhs = "",
  subTitle2,
  subTitle2Rhs = "",
  image,
}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <View style={styles.horizontalView}>
          <AppText style={styles.title}>{title}</AppText>
          {titleRhs && <AppText style={styles.titleRhs}>{titleRhs}</AppText>}
        </View>
        <View style={styles.horizontalView}>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          {subTitleRhs && (
            <AppText style={styles.subTitleRhs}>{subTitleRhs}</AppText>
          )}
        </View>
        <View style={styles.horizontalView}>
          {subTitle2 && <AppText style={styles.subTitle2}>{subTitle2}</AppText>}
          {subTitle2Rhs && (
            <AppText style={styles.subTitle2Rhs}>{subTitle2Rhs}</AppText>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "95%",
    height: 300,
    alignSelf: "center",
    borderRadius: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
  },
  titleRhs: { marginLeft: 10, fontStyle: "italic" },
  subTitle: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  subTitleRhs: { marginLeft: 10 },
  subTitle2: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  subTitle2Rhs: { marginLeft: 10 },
  horizontalView: {
    flexDirection: "row",
  },
});

export default Card;
