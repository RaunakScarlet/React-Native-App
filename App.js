const { View,Text,Image,ImageBackground } = require("react-native");
const logo = require("./assets/adaptive-icon.png");
export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            <Text>
                hello
                <Text style={{ color: "yellow" }}>world!</Text> how r u ?{" "}
            </Text>
            <Image source={logo} style={{ width: 300, height: 300 }} />
            <ImageBackground style={{flex:1, width: 300, height: 300 }}
                source={{uri:"https://picsum.photos/300"}}>
                <Text>hello</Text>
            </ImageBackground>
        </View>
    );
}
