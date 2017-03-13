/**
 * Created by stan229 on 5/28/16.
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    StyleSheet
} from 'react-native';

class BaseList extends Component {
    componentWillMount() {
        this.initDataSource(this.getListData());
    }
    initDataSource(rows) {
        var dataSource = new ListView.DataSource({
            rowHasChanged : (row1, row2) => row1 !== row2,
        }).cloneWithRows(rows);

        this.setState({
            dataSource : dataSource,
            loading    : false
        });
    }

    render() {
        return (
            <ListView style={styles.container}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
            />
        );
    }
}


var styles = StyleSheet.create({
    container : {
        flex      : 1
    }
});

export default BaseList;
