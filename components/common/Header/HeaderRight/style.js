import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const getStyles = theme => {
  return StyleSheet.create({
    wrapper: {
      alignItems: 'center'
    },
    leaderBoardWrapper: { marginHorizontal: 15 },
    searchIcon: { height: 24, width: 24 },
    coinWrapper: {
      backgroundColor: Colors[theme].categoryBg,
      paddingHorizontal: 5,
      paddingVertical: 5,
      borderRadius: 100
    },
    xFanTVcoinWrapper: {
      backgroundColor: Colors[theme].categoryBg,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 100,
      marginRight: 10,
      padding: 0.5,
      borderColor: Colors[theme].categoryBg,
      borderWidth: 1
    },
    coinBtnWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    coinIcon: { height: 16, width: 16, marginRight: 3 },
    coinValue: {
      marginTop: 3,
      fontWeight: '400',
      fontSize: 12,
      paddingLeft: 2,
      lineHeight: 14.4,
      textAlign: 'center',
      letterSpacing: 0.24,
      textTransform: 'capitalize'
    },
    searchWrapper: {
      marginRight: 10
    }
  })
}

export default getStyles
