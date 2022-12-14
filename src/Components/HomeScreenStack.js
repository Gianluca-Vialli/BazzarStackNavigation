import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconCredit from 'react-native-vector-icons/FontAwesome';

const imageTop = require('../images/mainImage.png')
const imageFemale = require('../images/Carousel.png')
const imageMale = require('../images/wellcomeBazzar.png')
const imageWellcome = require('../images/marketing-mkt.png')
const imageAdress = require('../images/Market.png')

function Home({ navigation }) {
    return (

        <ScrollView>

            <View style={style.mainView}>

                <Text style={style.mainTitle}>BAZZAR</Text>

                <View style={style.line}></View>

                <View>
                    <ImageBackground style={style.imageTop} source={imageTop}><Text style={style.textImageTop}>Descontos Imperdíveis de até 50% .</Text></ImageBackground>
                </View>

                <View style={style.viewButtonBuy}>

                    <TouchableOpacity style={style.buttonBuy}>

                        <Text style={style.buttonBuyText}>Veja mais</Text>

                    </TouchableOpacity>

                </View>

                <View style={style.line}></View>

                <View style={style.products}>

                    <View style={style.productsTouchableView}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Moda Feminina')}
                        >

                            <ImageBackground source={imageFemale} style={style.productsTouchableBackground}><Text style={style.productsTitle1}>Moda Feminina</Text></ImageBackground>

                        </TouchableOpacity>

                    </View>

                    <View style={style.productsTouchableView}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Moda Masculina')}
                        >

                            <ImageBackground source={imageMale} style={style.productsTouchableBackground}><Text style={style.productsTitle2}>Moda Masculina</Text></ImageBackground>

                        </TouchableOpacity>

                    </View>

                </View>

                <View style={style.line}></View>

                <View style={style.wellcomeView}>

                    <Text style={style.wellcomeViewTitle}>Bem vindos ao BAZZAR</Text>

                    <Text style={style.wellcomeViewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                    <View style={{ marginTop: 20 }}>
                        <ImageBackground source={imageWellcome} style={{ width: '100%', height: 146 }}></ImageBackground>
                    </View>

                </View>

                <View style={style.line}></View>

                <View style={style.adress}>

                    <View style={style.adressView}>

                        <Text style={{ fontSize: 18, color: '#000' }}>Rua Caleidoscópio nº286</Text>

                        <Text style={{ fontSize: 15, color: '#000' }}>Centro, Rio de Janeiro - RJ</Text>

                        <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}> Aberta de Segunda à Sexta das 09:30 às 20:30</Text>

                    </View>

                    <View>
                        <ImageBackground source={imageAdress} style={{ width: '100%', height: 160 }}></ImageBackground>
                    </View>

                </View>

                <View style={style.line}></View>

                <View style={style.footer}>

                    <View style={style.follow}>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Siga nos: </Text>

                        <View style={style.followIcons}>

                            <Icon name='logo-facebook' size={25} color='#000'></Icon>
                            <Icon name='logo-instagram' size={25} color='#000'></Icon>
                            <Icon name='logo-twitter' size={25} color='#000'></Icon>
                            <Icon name='logo-snapchat' size={25} color='#000'></Icon>

                        </View>

                    </View>

                    <View style={style.cards}>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Aceitamos Cartões: </Text>

                        <View style={style.cardsIcons}>

                            <IconCredit name='cc-mastercard' size={25} color='#000'></IconCredit>
                            <IconCredit name='cc-visa' size={25} color='#000'></IconCredit>
                            <IconCredit name='paypal' size={25} color='#000'></IconCredit>

                        </View>

                    </View>

                </View>

            </View>

        </ScrollView>

    );

}

const style = StyleSheet.create({

    mainView: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F1BF3E'

    },

    line: {

        width: '97%',
        height: 2,
        backgroundColor: '#808080',
        marginBottom: 10

    },

    mainTitle: {

        marginLeft: -250,
        marginTop: 10,
        marginBottom: 6,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'fantasy'

    },

    imageTop: {

        alignItems: 'center',
        width: 380,
        height: 200,
        marginTop: 30,
        borderRadius: 10

    },

    textImageTop: {

        marginTop: 10,
        marginLeft: 180,
        width: 140,
        textAlign: 'center',
        color: '#fff',
        fontSize: 18

    },

    viewButtonBuy: {

        width: 100,
        backgroundColor: '#151C45',
        marginTop: 20,
        marginBottom: 10,

    },

    buttonBuy: {

        alignItems: 'center',
        justifyContent: 'center',
        height: 36

    },

    buttonBuyText: {

        color: '#fff',
        fontSize: 'fantasy',
        fontWeight: 'bold',
        fontSize: 14

    },

    products: {

        width: '100%',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },

    productsTitle1: {

        marginLeft: 15,
        marginTop: 8,
        textDecorationLine: 'underline',
        fontFamily: 'fantasy',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'

    },

    productsTitle2: {

        marginLeft: 210,
        marginTop: 8,
        textDecorationLine: 'underline',
        fontFamily: 'fantasy',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'

    },

    productsTouchableView: {

        width: '100%',
        borderWidth: 2,
        borderColor: '#fff',

    },

    productsTouchableBackground: {

        width: '100%',
        height: 140,
        borderRadius: 10

    },

    wellcomeView: {

        width: '95%',
        marginBottom: 10,
        padding: 10

    },

    wellcomeViewTitle: {

        width: 180,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'fantasy',
        textAlign: 'left'
    },

    wellcomeViewText: {
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 15,
        color: '#fff'
    },

    adress: {
        width: '90%',
        marginTop: 30,
        marginBottom: 30
    },

    adressView: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 160,
        backgroundColor: '#D2CFC1'
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '97%',
        flexDirection: 'row',
        marginTop: 15,

    },

    follow: {
        alignItems: 'center',
        width: '50%',
        height: 100,

    },

    followIcons: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15

    },

    cards: {
        alignItems: 'center',
        width: '50%',
        height: 100,

    },

    cardsIcons: {

        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15

    }

});

export default Home