import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { grey } from '@material-ui/core/colors';

export const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.unit,
      backgroundColor: palette.background.default,
      color: grey[800]
    },
    details: {
      maxWidth: '900px',
      display: 'flex',
      flexDirection: 'row'
    },
    contentLeft: {
      width: '300px',
      flex: '1 0 auto',
      background: palette.primary.main,
      padding: spacing.unit * 2,
      textAlign: 'center',
      color: palette.background.paper,
      justifyContent: 'center'
    },
    contentRight: {
      width: '400px',
      flex: '1 0 auto',
      padding: spacing.unit * 2
    },
    textField: {
      marginLeft: spacing.unit,
      marginRight: spacing.unit
    },
    button: {
      marginLeft: spacing.unit,
      marginRight: spacing.unit * 3,
      color: palette.background.paper
    }
  });
