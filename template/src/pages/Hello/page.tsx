import React, { FC, useContext } from 'react';
import { observer } from 'mobx-react';
import { HelloModule } from './index';
import { Box, Typography, Paper } from '@material-ui/core';

const Page: FC = () => {
  const { Store } = useContext(HelloModule);
  const { message, subMessage } = Store;

  return (
    <Box padding="24px" width="480px">
      <Paper square>
        <Box padding="24px">
          <Typography variant="h4">
            {message}
          </Typography>
          <Typography variant="h5">
            {subMessage}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default observer(Page);
