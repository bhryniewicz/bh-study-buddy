import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ userData: { average, name, attendace = '0%' } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendace}</p>
    </div>
    <button>X</button>
  </li>
);

UserItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendace: PropTypes.string,
  }),
};

export default UserItem;
