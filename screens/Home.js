import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import NewText from '../components/NewText';
import SearchBar from '../components/SearchBar';
import Stories from '../components/Stories';
import UserImage from '../components/UserImage';
import Posts from '../components/Posts';

function Home({ navigation, onLayout }) {
    return (
        <View onLayout={onLayout}>
            <UserInfo navigation={navigation} />
            <SearchBar />
            <Stories navigation={navigation} />
            <Posts />
        </View>
    )
}



const UserInfo = ({ navigation }) => (
    <View style={styles.userInfoContainer}>
        <View>
            <NewText content="Hello," h3 light />
            <NewText content="Alvarado!" bold h2 dark />
        </View>
        <UserImage navigation={navigation} />
    </View>
);

export default Home;

const styles = StyleSheet.create({
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
});