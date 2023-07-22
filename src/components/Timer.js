import { View, Text, StyleSheet } from "react-native"

export const Timer = ({ time }) => {
    //Calculate time of minute and seconds
    const newTime = `${Math.floor(time / 60)
        .toString()
        .padStart(2, "0")}:${(time % 60)
            .toString()
            .padStart(2, "0")}`;

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{newTime}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    time: {
        fontSize: 80,
        fontWeight: "bold",
        textAlign: 'center',
        color: "#333333"
    }
})
