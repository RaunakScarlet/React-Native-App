const {
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    Button,
    Pressable,
    StatusBar
} = require("react-native");
const logo = require("./assets/adaptive-icon.png");
export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            <StatusBar  backgroundColor="lightgreen" barStyle="dark-content"/>
            <ScrollView>
                <Pressable onPress={()=>console.log("text is pressed")}>
                    <Text>
                        hello
                        <Text style={{ color: "yellow" }}>world!</Text> how r u
                        ?{" "}
                    </Text>
                </Pressable>
                <Button
                    title="im ok"
                    onPress={() => console.log("im fine")}
                    color="red"
                ></Button>
                <Image source={logo} style={{ width: 300, height: 300 }} />
                <ImageBackground
                    style={{ flex: 1, width: 300, height: 300 }}
                    source={{ uri: "https://picsum.photos/300" }}
                >
                    <Text>hello</Text>
                </ImageBackground>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    assumenda vel sint explicabo officia perferendis alias
                    voluptates blanditiis, ea rerum. Nihil dignissimos in
                    blanditiis quaerat alias illum assumenda beatae similique!
                    In, commodi ex totam numquam asperiores facere reiciendis at
                    fugiat sed consequuntur quisquam maxime dolor deleniti
                    dolorum nemo illo quia provident fugit doloremque. Eos aut
                    tempora facilis sed asperiores ab. Fugiat blanditiis aliquid
                    corporis voluptatem libero, dolores quibusdam deserunt sed
                    magnam nam eaque cum ex nostrum est facere perferendis
                    incidunt voluptates accusamus minus odio beatae dolorem
                    veritatis? Dolorum, ut amet. Impedit, fugit cum amet natus,
                    necessitatibus voluptas quae recusandae perspiciatis labore
                    exercitationem quod aliquam tempora sunt vel consequatur
                    magni enim itaque laboriosam est quibusdam. Suscipit
                    voluptas mollitia illum et consequatur. Laborum quae vero
                    dignissimos corrupti sint asperiores assumenda nulla
                    distinctio, magnam repudiandae molestiae voluptate rem
                    quibusdam quia consectetur necessitatibus a architecto
                    cupiditate reprehenderit mollitia. Ex nihil quibusdam ullam
                    aliquid repellendus! Tempore soluta sapiente error
                    asperiores optio facilis enim illum ut velit sunt, hic odio
                    cum, deleniti accusantium dolorum aliquam suscipit, eligendi
                    ab fugit consequuntur maxime. Itaque deserunt consequatur
                    nemo quasi.
                </Text>
            </ScrollView>
        </View>
    );
}
