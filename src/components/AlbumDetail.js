import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
    const { title, artist, url} = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View  style={thumbnailContainerStyle}>
                   <Image 
                        style={thumbnailStyle} 
                        source={{ uri: "https://farm2.staticflickr.com/1297/4689632869_7d65e65fc1_b.jpg" }} 
                />
                </View>
                <View style={headerContentStyle}>
                    <Text  style={ headerTextStyle }> { title } </Text>   
                    <Text> { artist } </Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image 
                    style={imageStyle} 
                    source={{ uri: "https://farm6.staticflickr.com/5024/5599054541_e6d88413cb_z.jpg" }} 
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button> 
            </CardSection>
        </Card>
    );
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        width: '100%'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
}

export default AlbumDetail;