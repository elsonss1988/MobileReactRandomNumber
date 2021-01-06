import React,{useState} from 'react';
import {Text,
        SafeAreaView,
        TouchableOpacity,
        StyleSheet
} from 'react-native';

const App=()=>{
    const [numero,setNumero]=useState(0)
    function handleNumero(){
        const new_number=Math.floor(Math.random()*100)
        setNumero(new_number)
    }
    
    return (
        <> 
        <SafeAreaView style={style.container}>
            <Text style={style.numero}> {numero} </Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text>Generation Number</Text>
            </TouchableOpacity>        
        </SafeAreaView>
        </>
    );
}
const style = StyleSheet.create({
    container:{
        backgroundColor:'#ff0000',
        fontSize:38,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    numero:{
        fontSize:24,
        color:'#ffffff',
        fontWeight:'bold',
    },
    botao:{
        backgroundColor:'#ffffff',
        width:'80%',
        paddingHorizontal:5,
        paddingVertical:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
})
export default App;