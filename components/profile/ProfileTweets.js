import React from 'react'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
      displayName: 'Indu Chandana',
      userName: '0xa354nk35kj54tj4tnjtl4ot54jmik45tjmik543tpikk453t',
      avatar: 'https://avatars.githubusercontent.com/u/72302495?v=4',
      text: 'gm',
      isProfileImageNft: true,
      timestamp: '2020-06-01T12:00:00.000Z', // this is how Sanity strores timestamp
  },
  {
      displayName: 'Indu Chandana',
      userName: '0xa354nk35kj54tj4tnjtl4ot54jmik45tjmik543tpikk453t',
      avatar: 'https://avatars.githubusercontent.com/u/72302495?v=4',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z', // this is how Sanity strores timestamp
  },
  {
      displayName: 'Indu Chandana',
      userName: '0xa354nk35kj54tj4tnjtl4ot54jmik45tjmik543tpikk453t',
      avatar: 'https://avatars.githubusercontent.com/u/72302495?v=4',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z', // this is how Sanity strores timestamp
  },
  {
      displayName: 'Indu Chandana',
      userName: '0xa354nk35kj54tj4tnjtl4ot54jmik45tjmik543tpikk453t',
      avatar: 'https://avatars.githubusercontent.com/u/72302495?v=4',
      text: 'gm',
      isProfileImageNft: false,
      timestamp: '2020-06-01T12:00:00.000Z', // this is how Sanity strores timestamp
  },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
        key={index}
        displayName={tweet.displayName}
        userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
        avatar={tweet.avatar}
        text={tweet.text}
        isProfileImageNft={tweet.isProfileImageNft}
        timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets