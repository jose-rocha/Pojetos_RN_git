import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import firebase from  './src/firebaseConnection';

console.disableYellowBox =true

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
      
    };

    this.logar = this.logar.bind(this);

    this.sair = this.sair.bind(this);

    //olheiro do firebase, onAuthStateChanged server para ficar olhando se o usuário logou, deslogou se mudar a senha ele vai ser executado
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        alert('Usuário logado com sucesso!');
      } 
    })

     
  }

  sair(){
    firebase.auth().signOut();
    alert('Deslogado com sucesso!');
  }

  logar(){
   
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
        if(error.code == 'auth/wrong-password'){
          alert('Senha incorreta!');
        }else{
          alert('Tente novamente mais tarde!');
        }
    });

   

    
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Fazer Login</Text>
       <TextInput  style={styles.input} placeholder="Email"
        underlineColorAndroid="transparent" onChangeText={(email)=>{this.setState({email})}} />

       <TextInput  style={styles.input} placeholder="Senha" 
        underlineColorAndroid="transparent" onChangeText={(senha)=>{this.setState({senha})}} />

       <Button title="Entrar" onPress={this.logar} />

       <Button title="Logout" onPress={this.sair} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
  },
  input:{
    width: 300,
    height:50,
    backgroundColor: '#ccc',
    fontSize: 22,
    padding: 5,
    margin: 5,
    borderRadius: 5
   
  }
})


//secureTextEntry={true}