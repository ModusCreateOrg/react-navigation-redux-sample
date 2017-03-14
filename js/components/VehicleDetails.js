/**
 * Created by stan229 on 5/29/16.
 */
import React, {Component} from 'react';

import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as carsActions from '../actions/cars';

const StarRating = (props) => {
    let starRating = props.starRating,
        baseKey = props.baseKey,
        key,
        stars,
        starRatingInt,
        i;

    if(starRating !== 'Not Rated') {
        stars = [];
        starRatingInt = parseInt(starRating, 10);

        for(i = 0; i < starRatingInt; i++) {
            key = baseKey+i;
            stars.push((<Icon key={key} name="star" />));
        }
    }

    if(stars) {
        return (
            <View style={styles.stars}>
                {stars}
            </View>
        );
    } else {
        return (
            <Text>N/A</Text>
        );
    }

};

class VehicleDetails extends Component {
    render() {
        return this.renderVehicleDetails(this.props.vehicleDetails.Results[0]);
    }

    renderVehicleDetails (vehicleDetails) {
        return (
            <ScrollView style={styles.rootContainer}>
                <Image style={styles.vehicleImage} source={{uri:vehicleDetails.VehiclePicture}}/>
                {this.renderStarRatings(vehicleDetails)}
                {this.renderCrashPictures(vehicleDetails)}
                {this.renderRecalls(vehicleDetails)}
            </ScrollView>
        );
    }

    renderStarRatings (vehicleDetails) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Star Ratings</Text>
                <View style={styles.row}>
                    <View style={styles.container}>
                        <Text style={styles.rowHeader}>Overall</Text>
                    </View>
                    <View style={styles.container}>
                        <StarRating baseKey={"overall"} starRating={vehicleDetails.OverallRating}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.container}>
                        <Text style={styles.rowHeader}>Front Crash</Text>
                    </View>
                    <View style={styles.container}>
                        <StarRating baseKey={"front"} starRating={vehicleDetails.OverallFrontCrashRating}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.container}>
                        <Text style={styles.rowHeader}>Side Crash</Text>
                    </View>
                    <View style={styles.container}>
                        <StarRating baseKey={"side"} starRating={vehicleDetails.OverallSideCrashRating}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.container}>
                        <Text style={styles.rowHeader}>Side Pole Crash</Text>
                    </View>
                    <View style={styles.container}>
                        <StarRating baseKey={"sidepole"} starRating={vehicleDetails.SidePoleCrashRating}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.container}>
                        <Text style={styles.rowHeader}>Rollover</Text>
                    </View>
                    <View style={styles.container}>
                        <StarRating baseKey={"rollover"} starRating={vehicleDetails.RolloverRating}/>
                    </View>
                </View>
            </View>
        );
    }

    renderCrashPictures (vehicleDetails) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Ouchies</Text>
                <Image key="FrontCrashPicture" style={styles.crashImage} source={{uri:vehicleDetails.FrontCrashPicture}}/>
                <Image key="SideCrashPicture" style={styles.crashImage} source={{uri:vehicleDetails.SideCrashPicture}}/>
                <Image key="SidePolePicture" style={styles.crashImage} source={{uri:vehicleDetails.SidePolePicture}}/>
            </View>
        )
    }

    renderRecalls (vehicleDetails) {
        let recallCount = vehicleDetails.RecallsCount,
            recallText = 'There are no known recalls affecting this vehicle.';

        if(recallCount === 1) {
            recallText = 'This vehicle is subject to 1 recall.'
        } else if(recallCount > 1) {
            recallText = `This vehicle is subject to ${recallCount} recalls.`
        }


        return (
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Recalls</Text>
                <Text>{recallText}</Text>
            </View>
        )
    }
};

var styles = StyleSheet.create({
    rootContainer : {
        flex      : 1
    },
    container : {
        flex : 1
    },
    vehicleImage : {
        height : 125,
        margin : 10
    },
    crashImage : {
        height : 200,
        margin : 10
    },
    row : {
        flexDirection : 'row',
    },
    rowHeader : {
        fontWeight : 'bold',
    },
    rowText : {

    },
    section : {
        padding : 10
    },
    sectionHeader : {
        fontWeight : 'bold',
        fontSize : 16
    },
    stars : {
        flexDirection : 'row'
    }
});

export default connect(
    (state) => (
        {
            vehicleDetails : state.cars.vehicleDetails
        }
    ),
    (dispatch) => (
        bindActionCreators(carsActions, dispatch)
    )
)(VehicleDetails);