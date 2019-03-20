import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PlaceList from '../../components/PlaceList/PlaceList'
import {connect} from 'react-redux';
import {addPlace} from '../../../store/actions/index'

class FindPlaceScreen extends Component{
    itemSelectedHandler = key =>{
        const selPlace = this.props.places.find(place =>{
            return place.key === key;
        });
        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }
        });
    }
    render(){
        return(
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}></PlaceList>
            </View>
        );
    }
}

const mapStateToProps = state =>{
    return {
        places: state.places.places
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);
