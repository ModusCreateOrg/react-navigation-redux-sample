/**
 * Created by stan229 on 5/28/16.
 */
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import BaseList from "./BaseList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as carsActions from "../actions/cars";

class VehicleList extends BaseList {
    getListData() {
        return this.props.vehicles.Results;
    }

    renderRow = vehicle => {
        return (
            <TouchableOpacity onPress={() => this.onVehiclePress(vehicle)}>
                <View>
                    <Text>{vehicle.VehicleDescription}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    onVehiclePress = vehicle => {
        const navigate = this.props.navigation.navigate;
        this.props
            .fetchVehicleDetails(vehicle)
            .then(() =>
                navigate("VehicleDetails", {
                    title: vehicle.VehicleDescription
                }));
    };
}

export default connect(
    state => ({
        vehicles: state.cars.vehicles
    }),
    dispatch => bindActionCreators(carsActions, dispatch)
)(VehicleList);
