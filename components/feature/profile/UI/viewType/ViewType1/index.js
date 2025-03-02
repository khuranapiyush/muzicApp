import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { FlatList, Image, Pressable, TouchableOpacity } from 'react-native'
import ROUTE_MAPPING_BE from '../../../../../../navigator/config/routeMappingBE'
import appImages from '../../../../../../resource/images'
import { generateTransparentColor } from '../../../../../../utils/common'
import CText from '../../../../../common/core/Text'
import CView from '../../../../../common/core/View'
import getStyles from './styles'
import Colors from '../../../../../common/Colors'

const ViewType1 = ({ items, theme }) => {
  const navigation = useNavigation()

  const styles = getStyles(theme)

  const keyExtractor = useCallback((item, idx) => `list_${idx}`, [])

  const handleActionBtn = useCallback(
    action => {
      const routeConfig = ROUTE_MAPPING_BE[action]
      if (!routeConfig) {
        return
      }
      navigation.navigate(routeConfig.name, routeConfig.params)
    },
    [navigation]
  )

  const renderItem = useCallback(
    ({ item, index: idx }) => {
      return (
        <Pressable onPress={() => handleActionBtn(item.action)}>
          <CView row style={styles.wrapper}>
            <CView
              row
              style={{
                ...styles.leftWrapper,
                width:
                  !!item.action && !!ROUTE_MAPPING_BE[item.action]
                    ? '90%'
                    : '100%'
              }}>
              <CView
                row
                style={{
                  alignItems: 'center',
                  ...(!item.value && { width: '90%' })
                }}>
                <CView style={styles.leftIconWrapper}>
                  {!!item.icon && (
                    <Image
                      source={{ uri: item.icon }}
                      style={styles.leftIcon}
                    />
                  )}
                </CView>

                <CView>
                  {!!item?.text && (
                    <CText style={styles.labelText}>{item?.text}</CText>
                  )}

                  {!!item?.description && (
                    <CText
                      style={{
                        ...styles.descriptionText,
                        color: Colors[theme].textLightGray
                      }}>
                      {item?.description}
                    </CText>
                  )}
                </CView>
              </CView>

              {!!item.value && (
                <CView
                  style={{
                    ...styles.valueWrapper,
                    backgroundColor: item?.valueColor
                      ? generateTransparentColor(item?.valueColor, 0.4)
                      : Colors[theme].iconBg
                  }}>
                  <CText
                    style={{
                      ...styles.valueText,
                      color: Colors[theme].white
                    }}>
                    {item.value}
                  </CText>
                </CView>
              )}
            </CView>

            {item.action && ROUTE_MAPPING_BE[item.action] && (
              <CView row style={styles.actionBtnWrapper}>
                <TouchableOpacity onPress={() => handleActionBtn(item.action)}>
                  <Image
                    source={appImages.arrowRightAngle}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
              </CView>
            )}
          </CView>
        </Pressable>
      )
    },
    [handleActionBtn, theme]
  )

  return (
    <FlatList
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default ViewType1
