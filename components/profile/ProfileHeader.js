import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
}

const ProfileHeader = () => {
    const Router = useRouter();

    const isProfileImageNft = false
    const currentAccount = '0xa354nk35kj54tj4tnjtl4ot54jmik45tjmik543tpikk453t'

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div onClick={() => Router.push('/')} className={style.backButton}>
                    <BsArrowLeftShort/>
                </div>
                <div className={style.details}>
                    <div className={style.primary}>IChandana</div>
                    <div className={style.secondary}>4 Tweets</div>
                </div>
            </div>
            <div className={style.coverPhotoContainer}>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTSCGEMMVw2MLX3mM5KK8WXNBJJOBrN5SmBRIHkO1Fq0FhoJ7vPTLTaJmIY6suZyB1E4&usqp=CAU" 
                alt="cover"
                className={style.coverPhoto} 
                />
            </div>
            <div className={style.profileImageContainer}>
                <div className={isProfileImageNft ? 'hex' : style.profileImageContainer}>
                    <img 
                    src="https://avatars.githubusercontent.com/u/72302495?v=4" 
                    alt="IC"
                    className={
                        isProfileImageNft ? style.profileImageNft : style.profileImage
                    } 
                    />
                </div>
            </div>
            <div className={style.details}>
                <div>
                    <div className={style.primary}> Indu Chandana </div>
                </div>
                <div className={style.secondary}>
                    {
                        currentAccount && (
                            <>
                            @{currentAccount.slice(0,8)}...{currentAccount.slice(37)}
                            </>
                        )
                    }
                </div>
            </div>
            <div className={style.nav}>
                <div className={style.activeNav}>Tweets</div>
                <div>Tweets & Replies</div>
                <div>Media</div>
                <div>Likes</div>
            </div>
        </div>
    )
}

export default ProfileHeader