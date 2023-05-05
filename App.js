import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Provider as PaperProvider } from 'react-native-paper';



export default function App() {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [chUserName, setChUserName] = useState(true);
  const [chEmail, setChEmail] = useState(true);
  const [chPassword, setChPassword] = useState(true);
  const [chConPassword, setChConPassword] = useState(true);
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [conPwdError, setConPwdError] = useState(false);
  const [secureTextPwEntry, setSecurePwTextEntry] = useState(true);
  const [secureTextConPwEntry, setSecureConPwTextEntry] = useState(true);
  const [chResult, setChResult] = useState(false);


  const validateEmail = () => {
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

    Email = email.trim();

    if (Email == "" || Email == null) {
      setEmailErr("Please enter the email.");
      setChEmail(false);
      return false;
    } else if (!strongRegex.test(Email)) {
      setEmailErr("Please enter valid the email.");
      setChEmail(false);
      return false;
    } else {
      setEmailErr("");
      setChEmail(true);
      return true;
    }

  };


  const validatePassword = () => {

    Pw = password.trim();
    if (Pw == "" || Pw == null) {
      setPwdError("Please enter the password.");
      setChPassword(false);
      return false;
    } else {
      if (Pw.length < 6) {
        setPwdError("Please add at least 6 charachter.");
        setChPassword(false);
        return false;
      } else {
        setPwdError("");
        setChPassword(true);
        return true;
      }
    }

  };

  const validateConfirmPassword = () => {

    conPw = conPassword.trim();
    if (conPw == "" || conPw == null) {
      setConPwdError("Please enter the confirm password.");
      setChConPassword(false);
      return false;
    } else {
      if (Pw.length < 6) {
        setConPwdError("Please add at least 6 charachter.");
        setChConPassword(false);
        return false;
      } else {
        setConPwdError("");
        setChConPassword(true);
        return true;
      }
    }

  };

  const matchPassowrds = () => {

    pw = password.trim();
    conPw = conPassword.trim();

    if (pw != conPw) {
      setConPwdError("Password and confirm password is mis match");
      setChConPassword(false);
      return false;
    } else {
      setConPwdError("");
      setChConPassword(true);
      return true;
    }

  };

  const checkUserName = () => {

    uname = username.trim();
   
    if (uname == "") {
      setUserNameErr("Please enter the your user name");
      setChUserName(false);
      return false;
    } else {
      setUserNameErr("");
      setChUserName(true);
      return true;
    }

  };

  const save = () => {
    checkUserName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (!username == "" && !email == "" && !password == "" && !conPassword == "") {
      matchPassowrds();
    }

    if(checkUserName && validateEmail && validatePassword && validateConfirmPassword && matchPassowrds){
      setEmail("");
      setUserName("");
      setPassword("");
      setConPassword("");
    }
  };

  return (

    <PaperProvider>
      <View>
        <Text style={styles.title} variant="displaySmall">Form Validation</Text>


        <View>
          <TextInput style={styles.text}
            mode="outlined"
            label="User Name"
            value={username}
            onChangeText={setUserName}

          />
        </View>

        <View style={styles.text}>
          {
            chUserName == true ? null : <Text style={{ color: "red" }}>{userNameErr}</Text>
          }
        </View>


        <View>
          <TextInput style={styles.text}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.text}>
          {
            chEmail == true ? null : <Text style={{ color: "red" }}>{emailErr}</Text>
          }
        </View>

        <View>

          <TextInput style={styles.text}
            mode="outlined"
            label="Password"
            secureTextEntry={secureTextPwEntry}
            right={
              <TextInput.Icon
                icon="eye"
                name="eye"
                onPress={() => {
                  setSecurePwTextEntry(!secureTextPwEntry);
                  return false;
                }} />
            }
            value={password}
            onChangeText={setPassword} />
        </View>

        <View style={styles.text}>
          {
            chPassword == true ? null : <Text style={{ color: "red" }}>{pwdError}</Text>
          }
        </View>

        <View>
          <TextInput style={styles.text}
            mode="outlined"
            label="Confirm Password"
            secureTextEntry={secureTextConPwEntry}
            right={
              <TextInput.Icon
                icon="eye"
                name="eye"
                onPress={() => {
                  setSecureConPwTextEntry(!secureTextConPwEntry);
                  return false;
                }} />
            }
            value={conPassword}
            onChangeText={setConPassword}
          />
        </View>


        <View style={styles.text}>
          {
            chConPassword == true ? null : <Text style={{ color: "red" }}>{conPwdError}</Text>
          }
        </View>


        <Button style={styles.save_btn} mode="contained" onPress={save}>
          Save
        </Button>

        <View style={styles.output}>
          {
            chResult == true ? null : <Text style={{ color: "red" }}>Save Successfully</Text>
          }
        </View>

      </View>
    </PaperProvider>

  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
  },
  title: {
    color: "purple",
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  save_btn: {
    backgroundColor: 'darkblue',
    textAlign: 'center',
    margin: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  output: {
    color:"green",
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  },
})
