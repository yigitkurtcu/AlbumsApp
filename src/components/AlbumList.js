import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail'
import axios from 'axios';

export default class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }))
        .catch(err => {
            alert(err)
        })
    }
    
    renderAlbums() {
        return this.state.albums.map(album =>  <AlbumDetail key = {album.title} album = {album}/>)
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}