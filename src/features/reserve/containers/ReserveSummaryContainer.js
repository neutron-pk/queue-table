import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {get, groupBy} from 'lodash';

import {ReserveSummaryList as SummaryList} from '../components';

ReserveSummaryContainer.propTypes = {
  list: PropTypes.array,
};

ReserveSummaryContainer.defaultProps = {
  list: [],
};

function ReserveSummaryContainer({list}) {
  return <SummaryList data={list} />;
}

const mapStateToProps = state => {
  const list = get(state, 'reserve.data', []);
  const groupList = groupBy(list, 'date');
  const summaryList = Object.keys(groupList).map(key => {
    const totalTables = groupList[key].reduce(
      (sum, reserve) => (sum += reserve.numberOfTable),
      0,
    );
    return {date: key, totalTables};
  });
  return {list: summaryList};
};

export default connect(mapStateToProps)(ReserveSummaryContainer);
