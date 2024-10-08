import {arbitrum, base, fantom, mainnet, optimism, polygon} from 'viem/chains';
import {toAddress} from '@builtbymom/web3/utils';

import type {TAddress, TNDict} from '@builtbymom/web3/types';

export const DEFAULT_SLIPPAGE = 0.5;
export const DEFAULT_MAX_LOSS = 1n;
export const YGAUGES_ZAP_ADDRESS = toAddress('0x1104215963474A0FA0Ac09f4E212EF7282F2A0bC'); //Address of the zap to deposit & stake in the veYFI gauge
export const V3_STAKING_ZAP_ADDRESS: TNDict<TAddress> = {
	[mainnet.id]: toAddress('0x5435cA9b6D9468A6e0404a4819D39ebbF036DB1E'),
	[arbitrum.id]: toAddress('0x1E789A49902370E5858Fae67518aF49d8deA299c')
}; //Address of the zap to deposit & stake for the v3 staking
export const SUPPORTED_NETWORKS = [mainnet, optimism, polygon, fantom, base, arbitrum];
