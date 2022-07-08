import { FlatList, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import StudentCard from '../components/StudentCard'

import students from '../assets/data/Students'
const s = students[0]

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (

    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={students}
        renderItem={({item}) => <StudentCard student={item} /> }/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
