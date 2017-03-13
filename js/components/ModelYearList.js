/**
 * Created by stan229 on 5/27/16.
 */

import React, { Component } from "react";

import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    StyleSheet
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as carsActions from "../actions/cars";

class ModelYearList extends Component {
    static navigationOptions = {
        title: "Model Years"
    };

    componentWillMount() {
        this.setState({
            loading: true
        });

        this.props.fetchModelYears().then(data => {
            this.initDataSource(data.modelYears.Results);
        });
    }

    initDataSource(rows) {
        var dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        }).cloneWithRows(rows);

        this.setState({
            dataSource: dataSource,
            loading: false
        });
    }

    renderRow = modelYear => {
        return (
            <TouchableOpacity
                onPress={this.onModelYearPress.bind(null, modelYear.ModelYear)}
            >
                <View>
                    <Text>{modelYear.ModelYear}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    onModelYearPress = modelYear => {
        const navigate = this.props.navigation.navigate;
        this.props
            .fetchMakes(modelYear)
            .then(() => navigate("Makes", { title: modelYear }));
    };

    render() {
        const state = this.state;

        if (state.loading) {
            return (
                <View style={styles.container}>
                    <Text>Loading</Text>
                </View>
            );
        }

        return (
            <ListView
                style={styles.container}
                dataSource={state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default connect(
    state => ({
        modelYears: state.cars.modelYears
    }),
    dispatch => bindActionCreators(carsActions, dispatch)
)(ModelYearList);
