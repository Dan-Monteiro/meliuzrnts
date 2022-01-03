import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useForm} from 'react-hook-form';

interface IForm {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const Contact: React.FC = () => {
  const {
    reset,
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
  } = useForm({
    defaultValues: {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    },
  });

  const [state, setState] = useState(false);

  const onSubmit = (data: IForm) => {
    update();
    console.log('Invocado');
    console.log('FORM', data);
    Alert.alert('Agradecemos o contato!');
  };

  const update = () => {
    setState(!state);
  };

  useEffect(() => {
    console.log('SUBMIT', isSubmitSuccessful);
    if (isSubmitSuccessful) {
      reset({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
      });
    }
  }, [isSubmitSuccessful, reset]);

  console.log(errors);

  return (
    <View style={styles.default}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Nome'}
          defaultValue={getValues('nome')}
          {...register('nome', {required: true})}
          onChangeText={value => setValue('nome', value)}
        />
      </View>
      {errors.nome && <Text style={styles.error}>Campo necessário</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Email'}
          defaultValue={getValues('email')}
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Formato de email inválido',
            },
          })}
          onChangeText={value => setValue('email', value)}
        />
      </View>
      {errors.email &&
        (errors.email?.message ? (
          <Text style={styles.error}>{errors.email?.message}</Text>
        ) : (
          <Text style={styles.error}>Campo necessário</Text>
        ))}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Assunto'}
          defaultValue={getValues('assunto')}
          {...register('assunto', {required: true})}
          onChangeText={value => setValue('assunto', value)}
          keyboardType="email-address"
        />
      </View>
      {errors.assunto && <Text style={styles.error}>Campo necessário</Text>}
      <View style={[styles.inputContainer, styles.messageInputContainer]}>
        <TextInput
          style={styles.messageInput}
          placeholder={'Mensagem'}
          defaultValue={getValues('mensagem')}
          multiline
          {...register('mensagem', {required: true})}
          onChangeText={value => setValue('mensagem', value)}
        />
      </View>
      {errors.mensagem && <Text style={styles.error}>Campo necessário</Text>}
      <View style={styles.buttonEnviar}>
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  inputContainer: {
    borderBottomWidth: 0.8,
    borderColor: '#9fa3ab',
    width: '80%',
    margin: 5,
    borderRadius: 10,
    padding: 15,
  },
  messageInputContainer: {
    height: '30%',
  },
  messageInput: {
    height: '100%',
  },
  buttonEnviar: {
    margin: 15,
  },
  error: {
    color: 'red',
  },
});

export default Contact;
