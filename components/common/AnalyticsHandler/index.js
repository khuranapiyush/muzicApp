import React, {useCallback, useEffect} from 'react';
import ReactMoE, {
  MoEAppStatus,
  MoEInitConfig,
  MoEPushConfig,
  MoEngageLogConfig,
  MoEngageLogLevel,
} from 'react-native-moengage';
import {useSelector} from 'react-redux';
import {useAuthUser} from '../../../stores/selector';
import {getData, storeData} from '../../../utils/asyncStorage';
import {setMoeUser} from '../../../utils/moe';

const AnalyticsHandler = ({children}) => {
  const {isGuest} = useSelector(useAuthUser);
  const user = useSelector(state => state.user);

  const isFreshInstall = async () => {
    const appInstalled = await getData('appInstalled');
    return !appInstalled;
  };

  const onAppLaunch = useCallback(async () => {
    const freshInstall = await isFreshInstall();

    if (freshInstall) {
      console.info('This is fresh install===>');
      ReactMoE.setAppStatus(MoEAppStatus.Install);
      await storeData('appInstalled', true);
    } else {
      ReactMoE.setAppStatus(MoEAppStatus.Update);
      // Perform actions for an update
    }
  }, []);

  useEffect(() => {
    ReactMoE.enableAdIdTracking();
    ReactMoE.registerForPush();

    console.log('moe is  getting initialized===>');

    ReactMoE.initialize(
      '02JXWUN437URUVK9E23G6SSD',
      new MoEInitConfig(
        new MoEPushConfig(true),
        new MoEngageLogConfig(MoEngageLogLevel.DEBUG, true),
      ),
    );

    ReactMoE.setEventListener('pushTokenGenerated', payload => {
      console.log('pushTokenGenerated======>', payload);
    });
  }, []);

  useEffect(() => {
    ReactMoE.setEventListener('pushClicked', notificationPayload => {
      console.log('pushClicked', notificationPayload);
    });
  }, []);

  useEffect(() => {
    onAppLaunch();
  }, [onAppLaunch]);

  useEffect(() => {
    if (isGuest && user?.userId) {
      console.log('setting moe user in analytcs===>', user?.userId);
      setMoeUser(user);
    }
  }, [isGuest, user]);

  return <>{children}</>;
};

export default AnalyticsHandler;
