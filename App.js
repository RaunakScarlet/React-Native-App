const { View,Text } = require("react-native");

export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: "green", padding: 60 }}>
            <Text>
                hello
                <Text style={{color:"yellow"}}>world!</Text> how r u ?{" "}
            </Text>
        </View>
    );
}
