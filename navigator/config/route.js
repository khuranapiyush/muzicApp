import ROUTE_NAME from './routeName';

import React from 'react';
import HeaderLink from '../../components/common/Header/HeaderLink/Index';
import CText from '../../components/common/core/Text';
import CView from '../../components/common/core/View';
// import CreatorDashboard from '../../components/feature/creatorDashboard';
// import CreatorInsights from '../../components/feature/creatorDashboard/creatorInsights';
// import CreatorEarnings from '../../components/feature/creatorDashboard/creatorInsights/CreatorEarnings';
// import CreatorEngagement from '../../components/feature/creatorDashboard/creatorInsights/CreatorEngagement';
// import CreatorView from '../../components/feature/creatorDashboard/creatorInsights/CreatorViews';
// import ReferAndEarn from '../../components/feature/referAndEarn';
// import RewardHeaderRight from '../../components/feature/rewards/UI/RewardHeaderRight';
// import Settings from '../../components/feature/settings';
// import SongDetail from '../../components/feature/songDetail';
// import MarketPlaceBuy from '../../components/feature/trading/MarketPlaceBuy';
// import MarketPlaceSell from '../../components/feature/trading/MarketPlaceSell';
// import PreSale from '../../components/feature/trading/PreSale';
// import PreSaleBuy from '../../components/feature/trading/PreSaleBuy';
// import AddAccount from '../../components/feature/wallet/AddAccount';
// import AddFund from '../../components/feature/wallet/AddFund';
// import CreatorProfile from '../../components/feature/watch/CreatorProfile';
import appImages from '../../resource/images';
// import CWebViewScreen from '../../screens/CWebView/CWebView';
// import EarnCoin from '../../screens/EarnCoin/Earncoin.screen';
// import Language from '../../screens/Language/Language.screen';
// import LeaderBoard from '../../screens/LeaderBoard/Leaderboard.screen';
// import MyContentScreen from '../../screens/MyContent/Mycontent.screen';
// import Reward from '../../screens/Reward/Reward.screen';
// import RewardHistory from '../../screens/RewardHistory/RewardHistory.screen';
// import UploadContent from '../../screens/UploadContent/Uploadcontent.screen';
// import Wallet from '../../screens/Wallet/Wallet.screen';
import HomeStackNavigator from '../HomeStackNavigator';
import RootStackNavigator from '../RootStackNavigator';
// import WithdrawMoney from '../../components/feature/wallet/WithdrawMoney';
// import EditProfile from '../../screens/EditProfile/EditProfile.screen';
// import CommunityGroup from '../../screens/CommunityGroup/CommunityGroup.screen';
// import Shorties from '../../screens/Shorties/Shorties.screen';
// import UploadContentSelect from '../../components/feature/uploadContent/UploadContentSelect';
// import StoryPost from '../../components/feature/uploadContent/StoryPost';
// import GoInstaLiveScreen from '../../screens/GoInstaLive';
// import ConsumerInstaLiveScreen from '../../screens/ConsumerInstaLive';
// import CommunityChat from '../../screens/CommunityChat';
// import AIAgentScreen from '../../screens/AIAgent/AIAgent.screen';
// import AIVideoPlayerScreen from '../../screens/AIVideoPlayer/AIVideoPlayer.screen';
import GenerateAIScreen from '../../screens/AIGenerator/AIGenerator.screen';
// import AIHistoryScreen from '../../screens/AIHistoryScreen/AIHistoryScreen.screen';
import VoiceRecordScreen from '../../screens/VoiceRecordScreen';
import SubscriptionScreen from '../../screens/subscriptionScreen/subscription.screen';

export const mainAppRoutes = [
  {name: ROUTE_NAME.HomeStack, component: HomeStackNavigator},

  // {
  //   key: ROUTE_NAME.LeaderBoard,
  //   name: ROUTE_NAME.LeaderBoard,
  //   component: LeaderBoard,
  //   options: {
  //     headerShown: true,
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Leaderboard " />
  //     ),
  //   },
  // },
  // {
  //   name: ROUTE_NAME.Shorties,
  //   component: Shorties,
  //   options: {headerShown: false},
  //   key: ROUTE_NAME.Shorties,
  // },
];

export const appStackRoutes = [
  {
    name: ROUTE_NAME.RootStack,
    component: RootStackNavigator,
    options: {
      headerShown: false,
    },
    key: ROUTE_NAME.RootStack,
  },
  // {
  //   name: ROUTE_NAME.Rewards,
  //   component: Reward,
  //   key: ROUTE_NAME.Rewards,
  //   options: {
  //     headerShown: true,
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Rewards " />
  //     ),
  //     headerRight: props => <RewardHeaderRight />,
  //   },
  // },
  // {
  //   name: ROUTE_NAME.RewardHistory,
  //   component: RewardHistory,
  //   key: ROUTE_NAME.RewardHistory,
  //   options: {
  //     headerShown: true,
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="History" />
  //     ),
  //     headerTitleStyle: {
  //       fontFamily: 'Bricolage Grotesque',
  //       fontSize: 20,
  //       fontWeight: '700',
  //     },
  //     headerRight: props => <RewardHeaderRight showHistory={false} />,
  //   },
  // },
  // {
  //   name: ROUTE_NAME.EarnCoin,
  //   component: EarnCoin,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Earn Coin" />
  //     ),
  //   },
  //   key: ROUTE_NAME.EarnCoin,
  // },
  // {
  //   name: ROUTE_NAME.Language,
  //   component: Language,
  //   options: {headerShown: false},
  //   key: ROUTE_NAME.Language,
  // },
  // {
  //   name: ROUTE_NAME.Wallet,
  //   component: Wallet,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Wallet" />
  //     ),
  //     headerRight: () => (
  //       <HeaderLink icon={appImages.settingIcon} link={ROUTE_NAME.Settings} />
  //     ),
  //   },
  //   key: ROUTE_NAME.Wallet,
  // },
  // {
  //   name: ROUTE_NAME.CreatorProfile,
  //   component: CreatorProfile,
  //   options: {
  //     headerShown: false,
  //   },
  //   key: ROUTE_NAME.CreatorProfile,
  // },
  // {
  //   name: ROUTE_NAME.UploadContentSelect,
  //   component: UploadContentSelect,
  //   options: {
  //     headerShown: false,
  //     headerTitle: props => (
  //       <CText
  //         size="bricolageHeading"
  //         style={{flex: 1}}
  //         text="Upload Content"
  //       />
  //     ),
  //   },
  //   key: ROUTE_NAME.UploadContentSelect,
  // },

  // {
  //   name: ROUTE_NAME.StoryPost,
  //   component: StoryPost,
  //   options: {
  //     headerShown: false,
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Story Post" />
  //     ),
  //   },
  //   key: ROUTE_NAME.StoryPost,
  // },

  // {
  //   name: ROUTE_NAME.UploadContent,
  //   component: UploadContent,
  //   options: {
  //     headerTitle: props => (
  //       <CText
  //         size="bricolageHeading"
  //         style={{flex: 1}}
  //         text="Upload Content"
  //       />
  //     ),
  //   },
  //   key: ROUTE_NAME.UploadContent,
  // },
  // {
  //   name: ROUTE_NAME.CreatorDashboard,
  //   component: CreatorDashboard,
  //   options: {
  //     headerTitle: props => (
  //       <CText
  //         size="bricolageHeading"
  //         style={{flex: 1}}
  //         text="Creator Dashboard"
  //       />
  //     ),
  //   },
  //   key: ROUTE_NAME.CreatorDashboard,
  // },
  // {
  //   name: ROUTE_NAME.CreatorInsights,
  //   component: CreatorInsights,
  //   options: {
  //     headerTitle: props => (
  //       <CText
  //         size="bricolageHeading"
  //         style={{flex: 1}}
  //         text="Creator Insights"
  //       />
  //     ),
  //   },
  //   key: ROUTE_NAME.CreatorInsights,
  // },
  // {
  //   name: ROUTE_NAME.CreatorEarnings,
  //   component: CreatorEarnings,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Earnings" />
  //     ),
  //   },
  //   key: ROUTE_NAME.CreatorEarnings,
  // },
  // {
  //   name: ROUTE_NAME.CreatorViews,
  //   component: CreatorView,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Views" />
  //     ),
  //   },
  //   key: ROUTE_NAME.CreatorViews,
  // },
  // {
  //   name: ROUTE_NAME.CreatorEngagement,
  //   component: CreatorEngagement,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Engagement" />
  //     ),
  //   },
  //   key: ROUTE_NAME.CreatorEngagement,
  // },
  // {
  //   name: ROUTE_NAME.ReferAndEarn,
  //   component: ReferAndEarn,
  //   options: {
  //     headerTitle: props => (
  //       <CText
  //         size="bricolageHeading"
  //         style={{flex: 1}}
  //         text="Refer and Earn"
  //       />
  //     ),
  //   },
  //   key: ROUTE_NAME.ReferAndEarn,
  // },
  // {
  //   name: ROUTE_NAME.Settings,
  //   component: Settings,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Settings" />
  //     ),
  //   },
  //   key: ROUTE_NAME.Settings,
  // },
  // {
  //   name: ROUTE_NAME.AddAccount,
  //   component: AddAccount,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Add Account" />
  //     ),
  //   },
  //   key: ROUTE_NAME.AddAccount,
  // },
  // {
  //   name: ROUTE_NAME.MyContent,
  //   component: MyContentScreen,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="My Content" />
  //     ),
  //   },
  //   key: ROUTE_NAME.MyContent,
  // },
  // {
  //   name: ROUTE_NAME.SongDetail,
  //   component: SongDetail,
  //   options: {
  //     headerTitle: props => {
  //       const title = props?.route?.params?.title || 'Music'; // Default title if title is not available
  //       return (
  //         <CView>
  //           <CText
  //             size="bricolageHeading"
  //             style={{flex: 1}}
  //             text={`Invest in ${title}`}
  //           />
  //         </CView>
  //       );
  //     },
  //   },
  //   key: ROUTE_NAME.SongDetail,
  // },
  // {
  //   name: ROUTE_NAME.MarketPlaceBuy,
  //   component: MarketPlaceBuy,
  //   options: {
  //     headerTitle: props => {
  //       const title = props?.route?.params?.title || 'Music'; // Default title if title is not available
  //       return (
  //         <CView>
  //           <CText
  //             size="bricolageHeading"
  //             style={{flex: 1}}
  //             text={`Buy ${title}`}
  //           />
  //         </CView>
  //       );
  //     },
  //   },
  //   key: ROUTE_NAME.MarketPlaceBuy,
  // },
  // {
  //   name: ROUTE_NAME.MarketPlaceSell,
  //   component: MarketPlaceSell,
  //   options: {
  //     headerTitle: props => {
  //       const title = props?.route?.params?.title || 'Music'; // Default title if title is not available
  //       return (
  //         <CView>
  //           <CText
  //             size="bricolageHeading"
  //             style={{flex: 1}}
  //             text={`Sell ${title}`}
  //           />
  //         </CView>
  //       );
  //     },
  //   },
  //   key: ROUTE_NAME.MarketPlaceSell,
  // },
  // {
  //   name: ROUTE_NAME.PreSaleBuy,
  //   component: PreSaleBuy,
  //   options: {
  //     headerTitle: props => {
  //       const title = props?.route?.params?.title || 'Music'; // Default title if title is not available
  //       return (
  //         <CView>
  //           <CText
  //             size="bricolageHeading"
  //             style={{flex: 1}}
  //             text={`Buy ${title}`}
  //           />
  //         </CView>
  //       );
  //     },
  //   },
  //   key: ROUTE_NAME.PreSaleBuy,
  // },
  // {
  //   name: ROUTE_NAME.PreSale,
  //   component: PreSale,
  //   options: {
  //     headerTitle: props => {
  //       const title = props?.route?.params?.title || 'Music'; // Default title if title is not available
  //       return (
  //         <CView>
  //           <CText
  //             size="bricolageHeading"
  //             style={{flex: 1}}
  //             text={`Sell ${title}`}
  //           />
  //         </CView>
  //       );
  //     },
  //   },
  //   key: ROUTE_NAME.PreSale,
  // },
  // {
  //   name: ROUTE_NAME.AddFund,
  //   component: AddFund,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Add Fund" />
  //     ),
  //   },
  //   key: ROUTE_NAME.AddFund,
  // },
  // {
  //   name: ROUTE_NAME.CWebView,
  //   component: CWebViewScreen,
  //   key: ROUTE_NAME.CWebView,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="" />
  //     ),
  //   },
  // },
  // {
  //   name: ROUTE_NAME.WithdrawMoney,
  //   component: WithdrawMoney,
  //   options: {
  //     headerTitle: props => (
  //       <CText
  //         size="bricolageHeading"
  //         style={{flex: 1}}
  //         text="Withdraw Money"
  //       />
  //     ),
  //   },
  //   key: ROUTE_NAME.WithdrawMoney,
  // },
  // {
  //   name: ROUTE_NAME.EditProfile,
  //   component: EditProfile,
  //   options: {
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Edit Profile" />
  //     ),
  //   },
  //   key: ROUTE_NAME.EditProfile,
  // },
  // {
  //   name: ROUTE_NAME.CommunityGroup,
  //   component: CommunityGroup,
  //   options: {
  //     headerShown: false,
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Community" />
  //     ),
  //   },
  //   key: ROUTE_NAME.CommunityGroup,
  // },

  // {
  //   name: ROUTE_NAME.GoInstaLive,
  //   component: GoInstaLiveScreen,
  //   options: {
  //     headerShown: false,
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Live" />
  //     ),
  //   },
  //   key: ROUTE_NAME.GoInstaLive,
  // },
  // {
  //   name: ROUTE_NAME.ConsumerInstaLive,
  //   component: ConsumerInstaLiveScreen,
  //   options: {
  //     headerShown: false,
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Live" />
  //     ),
  //   },
  //   key: ROUTE_NAME.ConsumerInstaLive,
  // },
  // {
  //   name: ROUTE_NAME.CommunityChat,
  //   component: CommunityChat,
  //   options: {
  //     headerShown: false,
  //     headerTitle: props => (
  //       <CText size="bricolageHeading" style={{flex: 1}} text="Live" />
  //     ),
  //   },
  //   key: ROUTE_NAME.CommunityChat,
  // },
  // {
  //   name: ROUTE_NAME.AIAgent,
  //   component: AIAgentScreen,
  //   key: ROUTE_NAME.AIAgent,
  //   options: {
  //     headerShown: true,
  //   },
  // },
  {
    name: ROUTE_NAME.AIGenerator,
    component: GenerateAIScreen,
    key: ROUTE_NAME.AIGenerator,
    options: {
      headerShown: false,
      headerTitle: props => {
        const title = props?.route?.params?.title || 'ComposerAI';
        return <CText size="bricolageHeading" style={{flex: 1}} text={title} />;
      },
    },
  },
  // {
  //   name: ROUTE_NAME.AIVideoPlayer,
  //   component: AIVideoPlayerScreen,
  //   key: ROUTE_NAME.AIVideoPlayer,
  //   options: {
  //     headerShown: false,
  //   },
  // },
  // {
  //   name: ROUTE_NAME.AIHistory,
  //   component: AIHistoryScreen,
  //   key: ROUTE_NAME.AIHistory,
  //   options: {
  //     headerShown: true,
  //     headerTitle: props => (
  //       <CText
  //         size="bricolageHeading"
  //         style={{flex: 1}}
  //         text={'Previous results'}
  //       />
  //     ),
  //   },
  // },
  {
    name: ROUTE_NAME.VoiceRecord,
    component: VoiceRecordScreen,
    key: ROUTE_NAME.AIHistory,
    options: {
      headerShown: false,
    },
  },
  {
    name: ROUTE_NAME.SubscriptionScreen,
    component: SubscriptionScreen,
    key: ROUTE_NAME.SubscriptionScreen,
    options: {
      headerShown: false,
    },
  },
];
