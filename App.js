import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

// components
import ParallaxProfile from './ParallaxProfile'

const PARALLAX_DATA = [
    {
        comment: '1) this was a great day like a day from heaven. this was a great day like a day from heaven.',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'
    },
    {
        comment: '2) this was a great day like a day from heaven.',
        uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'
    },
    {
        comment: '3) this was a great day like a day from heaven.',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'
    },
    {
        comment: '4) this was a great day like a day from heaven.',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'
    },
    {
        comment: '5) this was a great day like a day from heaven.',
        uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'
    }
];

const DETAILS = [
    {
        title: 'Name',
        text: 'Hüseyin Ozan Honamlıoğlu'
    },
    {
        title: 'Biography',
        text: 'Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu'
    }
];

export default class App extends React.Component {

    componentDidMount() {
        console.log("\n\n\n***** Profile Page Development *****\n\n\n");
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <ParallaxProfile
                    image_data={PARALLAX_DATA}
                    content_data={DETAILS}
                    full_size={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});