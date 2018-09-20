const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table1_width: {
    width: '40%',
    float: 'right',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    minHeight: '300px'
  },
  select_width: {
    width: '60%',
    float: 'left',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    minHeight: '300px'

  },
  table1: {
    maxWidth: 200,
  },
  table2: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});
export default styles;
