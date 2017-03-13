/**
 * Created by stan229 on 5/28/16.
 */
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import BaseList from "./BaseList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as carsActions from "../actions/cars";

class MakeList extends BaseList {
    getListData() {
        return this.props.makes.Results;
    }

    renderRow = make => {
        return (
            <TouchableOpacity onPress={this.onMakePress.bind(null, make)}>
                <View>
                    <Text>{make.Make}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    onMakePress = make => {
        const navigate = this.props.navigation.navigate;
        this.props
            .fetchModels(make)
            .then(() => navigate('Models', {title : make.Make}));
    };
}

export default connect(
    state => ({
        makes: state.cars.makes
    }),
    dispatch => bindActionCreators(carsActions, dispatch)
)(MakeList);
