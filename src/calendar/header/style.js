import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.header';

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 6,
      alignItems: 'center'
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor,
      margin: 10
    },
    arrow: {
      padding: 10,
      ...appStyle.arrowStyle
    },
    arrowImage: {
      ...Platform.select({
        ios: {
          tintColor: appStyle.arrowColor
        },
        android: {
          tintColor: appStyle.arrowColor
        }
      })
    },
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontFamily: appStyle.textDayHeaderFontFamily,
      color: '#33789E',
      fontSize: 13,
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: 0.01
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
