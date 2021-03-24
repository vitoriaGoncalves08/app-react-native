import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Alert, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import css from './assets/css/style';
import { TextInput } from 'react-native-paper';

const App = ()=> {

  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [assunto, setAssunto] = useState(null);
  const [mensagem, setMensagem] = useState(null);

  const exibirDados = () => {
    if(nome == null || nome == "" || email == null || email == "" ||
    assunto == null || assunto == "" || mensagem == null || mensagem == "" ){

      Alert.alert("ATENÇÃO", "Todos os campos devem ser preenchidos!");

    }else{
      Alert.alert("DADOS" , "Nome: " + nome.toUpperCase() + 
      "\nEmail: " + email.toUpperCase() + 
      "\nAssunto: " + assunto.toUpperCase() +
      "\nMensagem: " + mensagem.toUpperCase());
    }
  }

  return (
    <View style={css.container}>
      <StatusBar style="auto" />

      <View style={css.icon}>
       <Image source={require('./assets/img/icon.png')}/>
      </View>

      <ScrollView>
      <View style={css.form}>
        <View style={css.textinput}>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={text => setNome(text)}
          />
        </View>

        <View style={css.textinput}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
           />
        </View>

        <View style={css.textinput}>
          <TextInput
            label="Assunto"
            value={assunto}
            onChangeText={text => setAssunto(text)}
          />
        </View>

        <View style={css.textinput}>
          <TextInput
            label="Mensagem"
            value={mensagem}
            onChangeText={text => setMensagem(text)}
          />
        </View>

          <TouchableOpacity onPress={()=>exibirDados()} style={css.button}>
            <Text style={css.txtbutton}>ENVIAR</Text>
          </TouchableOpacity>

        </View>
        </ScrollView>
    </View>
    
  );
};
export default App;


