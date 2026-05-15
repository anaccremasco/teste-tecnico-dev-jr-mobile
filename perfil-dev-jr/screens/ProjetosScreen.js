import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ProjetosScreen() {
  const [mensagem, setMensagem] = useState('');

  const projetos = [
    {
      id: 1,
      nome: 'App GoodVibes',
      descricao: 'Aplicativo que permite mandar frases motivacionais para compartilhar inspiração com amigos',
      tecnologias: 'HTML, CSS, JavaScript',
      status: 'Concluído'
    }
  ];

  const getStatusColor = (status) => {
    return status === 'Concluído' ? '#4CAF50' : '#FF9800';
  };

  const enviarContato = () => {
    if (mensagem.trim() === '') {
      Alert.alert('Aviso', 'Por favor, preencha a mensagem antes de enviar.');
      return;
    }
    Alert.alert('Sucesso', 'Sua mensagem foi enviada com sucesso!');
    setMensagem('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>MEUS PROJETOS</Text>
      </View>

      <View style={styles.conteudo}>
        {projetos.map((projeto) => (
          <TouchableOpacity 
            key={projeto.id}
            style={styles.cartaProjeto}
            activeOpacity={0.8}
          >
            <View style={styles.headerCarta}>
              <Text style={styles.nomeProjeto}>{projeto.nome}</Text>
              <View 
                style={[
                  styles.badge,
                  { backgroundColor: getStatusColor(projeto.status) }
                ]}
              >
                <Text style={styles.textoStatus}>{projeto.status}</Text>
              </View>
            </View>

            <Text style={styles.descricao}>{projeto.descricao}</Text>

            <View style={styles.tecnologiasContainer}>
              <Text style={styles.labelTecnologias}>Tecnologias:</Text>
              <Text style={styles.tecnologias}>{projeto.tecnologias}</Text>
            </View>

            <TouchableOpacity style={styles.botaoVer}>
              <Text style={styles.textoBotao}>Ver Detalhes</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* SEÇÃO DE CONTATO */}
      <View style={styles.secaoContato}>
        <Text style={styles.tituloContato}>ENTRE EM CONTATO</Text>
        
        <View style={styles.contatosContainer}>
          <TouchableOpacity style={styles.itemContato}>
            <Text style={styles.labelItem}>📧 E-mail</Text>
            <Text style={styles.valorItem}>anaclara.luizcremasco@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContato}>
            <Text style={styles.labelItem}>🐙 GitHub</Text>
            <Text style={styles.valorItem}>https://github.com/anaccremasco</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContato}>
            <Text style={styles.labelItem}>💼 LinkedIn</Text>
            <Text style={styles.valorItem}>https://www.linkedin.com/in/ana-clara-cremasco-425799349?utm_source=share_via&utm_content=profile&utm_medium=member_android</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContato}>
            <Text style={styles.labelItem}>🌐 Portfólio</Text>
            <Text style={styles.valorItem}>blablabla</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formularioContainer}>
          <Text style={styles.labelFormulario}>Envie uma mensagem:</Text>
          
          <TextInput
            style={styles.campoMensagem}
            placeholder="Digite sua mensagem aqui..."
            placeholderTextColor="#999"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            numberOfLines={5}
          />

          <TouchableOpacity 
            style={styles.botaoEnviar}
            onPress={enviarContato}
          >
            <Text style={styles.textoEnviar}>Enviar Contato</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7c4f0',
  },
  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#232a74',
    marginTop: 10,
  },
  conteudo: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  cartaProjeto: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerCarta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  nomeProjeto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#232a74',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  textoStatus: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  descricao: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 12,
    lineHeight: 20,
  },
  tecnologiasContainer: {
    marginBottom: 15,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  labelTecnologias: {
    fontSize: 12,
    fontWeight: '600',
    color: '#232a74',
    marginBottom: 5,
  },
  tecnologias: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  botaoVer: {
    backgroundColor: '#a7c4f0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#232a74',
    fontSize: 14,
    fontWeight: '600',
  },

  secaoContato: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 10,
  },
  tituloContato: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#232a74',
    marginBottom: 20,
    textAlign: 'center',
  },
  contatosContainer: {
    marginBottom: 25,
  },
  itemContato: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#a7c4f0',
  },
  labelItem: {
    fontSize: 13,
    fontWeight: '600',
    color: '#232a74',
    marginBottom: 4,
  },
  valorItem: {
    fontSize: 12,
    color: '#666666',
  },
  formularioContainer: {
    marginTop: 20,
  },
  labelFormulario: {
    fontSize: 14,
    fontWeight: '600',
    color: '#232a74',
    marginBottom: 12,
  },
  campoMensagem: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#a7c4f0',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333333',
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  botaoEnviar: {
    backgroundColor: '#232a74',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  textoEnviar: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
