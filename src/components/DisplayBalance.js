import React from 'react';
import { Statistic } from 'semantic-ui-react';

function DisplayBalance({ title, value, color = 'black', size = 'tiny' }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ texAlign: 'left' }}>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
