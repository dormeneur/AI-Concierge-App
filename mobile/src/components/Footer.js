import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text>&copy; 2023 Concierge App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        alignItems: 'center'
    }
});

export default Footer;