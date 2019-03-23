import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PlaceList from '../../components/PlaceList/PlaceList'
import {connect} from 'react-redux';
import {addPlace} from '../../../store/actions/index'

class FindPlaceScreen extends Component{
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = event =>{
        if(event.type ==="NavBarButtonPress"){
            if(event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }
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
