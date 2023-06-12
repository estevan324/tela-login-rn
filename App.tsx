import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './styles';

const App = () => {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const handleLoginButton = () => {
    alert(emailField)
    alert(passwordField)
  }

  const handleForgetButton = () => {

  }

  const handleSignUpButton = () => {

  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.h1}>Sistema de Login!</Text>
        <Text style={styles.h2}>Bem vinde! Digite seus dados abaixo:</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu e-mail"
            placeholderTextColor='#999'
            value={emailField}
            onChangeText={(text) => setEmailField(text)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.inputField}
            placeholder="******"
            secureTextEntry
            value={passwordField}
            onChangeText={(text) => setPasswordField(text)}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgetButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Estevan</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
