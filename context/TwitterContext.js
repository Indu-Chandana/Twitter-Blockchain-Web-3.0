import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
    const [appStatus, setAppStatus] = useState('loading')
    const [currentAccount, setCurrentAccount] = useState('')

    const router = useRouter();

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    // Check if there is an active wallet connection
    const checkIfWalletIsConnected = async () => {
        if(!window.ethereum) return setAppStatus('noMetaMask')
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })
            if (addressArray.length > 0){
                //connected
                setAppStatus('connected')
                setCurrentAccount(addressArray[0])
            } else {
                //not connected
                router.push('/')
                setAppStatus('notConnected')
            }
        } catch (error) {
            router.push('/')
            setAppStatus('Error')
        }
    }

    // Initiates MetaMask wallet connection
    const connectToWallet = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
            setAppStatus('loading')
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts',
            })

            if (addressArray.length > 0) {
                setAppStatus('connected')
                setCurrentAccount(addressArray[0])
            } else {
                router.push('/')
                setAppStatus('notConnected')
            }
        } catch (error) {
            setAppStatus('Error')
        }
    }

    return (
        <TwitterContext.Provider value={{ appStatus, currentAccount, connectToWallet }}>
            {children}
        </TwitterContext.Provider>
    )
}