import { StyleSheet } from 'react-native'
import Colors from '../../../common/Colors'
import { screenHeight, screenWidth } from '../../../../utils/common'

const getStyles = theme => {
  return StyleSheet.create({
    header: { flexDirection: 'row', width: '100%', height: 40, zIndex: 1 },
    tabBarWrapper: {
      paddingTop: 10,
      flex: 1
    },
    loaderWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: screenWidth,
      height: screenHeight,
      zIndex: 999999
    },
    container: {
      marginTop: 20,
      width: '100%'
    },
    wrapper: {
      flexDirection: 'column',
      marginVertical: 20,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 15,
      height: 200,
      borderRadius: 12,
      backgroundColor: '#1E1E1E;'
    },
    titleIcon: {
      tintColor: Colors[theme]?.white,
      width: 28,
      height: 28,
      marginRight: 14
    },
    titleText: {
      flex: 1,
      color: Colors[theme].textBlack,
      fontFamily: 'Bricolage Grotesque',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 30,
      letterSpacing: -0.8,
      textTransform: 'uppercase'
    },
    headingText: {
      color: Colors[theme].textBlack,
      fontSize: 24,
      fontFamily: 'Bricolage Grotesque',
      fontWeight: '700',
      lineHeight: 30,
      letterSpacing: -2,
      textTransform: 'uppercase'
    },
    inputContainerStyles: {
      flex: 1,
      width: '100%',
      marginVertical: 10,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Nohemi',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 21,
      backgroundColor: Colors[theme].cardBg
    },
    subHeadingText: {
      color: Colors[theme].textBlack,
      paddingHorizontal: 20
    },
    cardListContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      width: '100%'
    },
    cardWrapper: {
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 12,
      backgroundColor: Colors[theme].cardBg,
      paddingHorizontal: 16,
      paddingVertical: 20,
      width: '93%'
    },
    leftWrapper: {
      alignItems: 'center',
      width: '88%'
    },
    leftIconWrapper: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start'
    },
    leftIcon: {
      width: 80,
      height: 80,
      marginRight: 15
    },
    descriptionText: {
      fontSize: 12,
      fontWeight: '400',
      marginTop: 8,
      color: Colors[theme].textLightGray
    },
    labelText: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors[theme].textBlack
    },
    formFieldWrapper: { marginBottom: 24 },
    submitButton: {
      color: Colors[theme].commonWhite,
      textAlign: 'center',
      fontFamily: 'Nohemi',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 16.8,
      letterSpacing: 0.28,
      textTransform: 'none'
    },
    buttonContainer: { marginHorizontal: 15 },
    createButton: {
      position: 'absolute',
      bottom: 10,
      left: 16,
      right: 16,
      height: 56,
      borderRadius: 28,
      overflow: 'hidden',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#C87D48'
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      borderWidth: 4,
      borderStyle: 'solid',
      borderColor: '#C87D48'
    },
    createButtonText: {
      color: '#000',
      fontSize: 18,
      fontWeight: '600'
    },
    resultTitle: {
      width: '95%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    checkHistoryContainer: {
      borderWidth: 1,
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 70,
      borderColor: Colors[theme].textLightGray
    },
    iconContainer: {
      height: '100%',
      width: '12%',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    },
    shareIcon: {
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
      tintColor: Colors[theme].textBlack
    },
    dotIcon: {
      width: 10,
      height: 18,
      tintColor: Colors[theme].textBlack
    },
    playerContainer: {
      marginHorizontal: 20,
      width: '90%',
      height: 65,
      borderRadius: 5,
      backgroundColor: Colors[theme].textBlack,
      position: 'static',
      bottom: 0
    },
    playerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    playerDetailContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 4.5
    },
    playerHeadingContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginVertical: 5,
      marginHorizontal: 10
    },
    subHeadingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    playerIcon: {
      width: 50,
      height: 50,
      marginTop: 2,
      marginLeft: 14
    },
    currentSongHeading: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 15,
      color: Colors[theme].activeFilterText
    },
    currentSongSubHeading: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 15,
      color: Colors[theme].lightGrayText,
      marginLeft: 5
    },
    playPauseButton: {
      tintColor: Colors[theme].activeFilterText
    },
    sliderContainer: {
      //   flex: 1,
      height: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '95%',
      marginHorizontal: 10
    },
    trackStyle: {
      backgroundColor: Colors[theme].buttonBackground
    },
    maxTrackStyle: { backgroundColor: Colors[theme].trackColor },
    minTrackStyle: { backgroundColor: Colors[theme].buttonBackground },
    lyricsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      paddingHorizontal: 10,
      width: '100%'
    },
    lyricsHeader: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors[theme].textBlack
    },
    lyricsContent: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 15,
      color: Colors[theme].textLightGray
    },
    lyricsText: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 15,
      color: Colors[theme].textLightGray
    },
    flatList: {
      flex: 1
    },
    filterWrapper: { marginHorizontal: 10, marginVertical: 10 },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      backgroundColor: Colors[theme].appBg,
      height: 32,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
      borderRadius: 92,
      gap: 4
    },
    filterIconContainer: {
      marginRight: 5
    },
    filterIcon: { width: 13, height: 13, tintColor: Colors[theme].textBlack },
    dropDownIcon: {
      width: 16,
      height: 16,
      tintColor: Colors[theme].textBlack,
      transform: [{ rotate: '180deg' }],
      marginTop: 3
    },
    modal: {
      margin: 0,
      width: '100%',
      justifyContent: 'flex-end'
    },
    modalContainer: {
      width: '100%',
      backgroundColor: Colors[theme].cardBg,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    modalContent: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    radioIcon: {
      marginTop: 5,
      height: 30,
      width: 30,
      tintColor: Colors[theme].textBlack
    },
    filterScrollContainer: {
      width: screenWidth,
      marginHorizontal: 15
    },
    filterTextContainer: {
      flexDirection: 'row',
      width: '90%',
      marginBottom: 10,
      justifyContent: 'space-between'
    },
    headingContainer: {
      marginVertical: 16,
      color: Colors[theme].textBlack,
      textTransform: 'uppercase'
    },
    filterButtonContainer: { width: '95%' },
    tabBarContainer: {
      height: 40,
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: Colors[theme].cardBg
    },
    activeTabLabel: {
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      color: Colors[theme].textBlack,
      margin: 'auto',
      fontFamily: 'Nohemi',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 17.8,
      letterSpacing: 0.28
    },
    inactiveTabLabel: {
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      color: Colors[theme].textLightGray,
      margin: 'auto',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 18,
      letterSpacing: 0.28,
      opacity: 0.8
    },
    activeIndicatorStyle: {
      height: '100%',
      backgroundColor: 'transparent',
      borderBottomWidth: 2,
      borderBottomColor: Colors[theme].commonWhite
    },
    loaderContainer: {
      position: 'absolute',
      top: 50
    }
  })
}

export default getStyles
