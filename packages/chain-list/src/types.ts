// Copyright 2019-2022 @subwallet/chain-list authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum _ChainStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  STOPPED = 'STOPPED'
}

export enum _ChainProviderStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  UNSTABLE = 'UNSTABLE'
}

export interface _ChainProvider {
  id_: number,
  chainId_: number,
  providerName: string,
  endpoint: string,
  providerMode: string,
  status: _ChainProviderStatus
}

export enum _AssetType {
  NATIVE = 'NATIVE',
  LOCAL = 'LOCAL',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  PSP22 = 'PSP22',
  PSP34 = 'PSP34',
  UNKNOWN = 'UNKNOWN'
}

export enum SubstrateChainCategory {
  RELAYCHAIN = 'RELAYCHAIN',
  PARACHAIN = 'PARACHAIN',
  TEST_NET = 'TEST_NET'
}

export interface _ChainInfo {
  slug: string,
  name: string,
  logo: string,
  providers: Record<string, string>,
  substrateInfo: _SubstrateInfo | null,
  evmInfo: _EvmInfo | null
}

export interface _ChainAsset {
  originChain: string,
  slug: string,
  name: string,
  symbol: string,
  decimals: number | null,
  priceId: string | null,
  minAmount: string | null,
  assetType: _AssetType,
  metadata: Record<any, any> | null,
  multiChainAsset: string | null
}

export interface _EvmInfo {
  evmChainId: number,
  blockExplorer: string | null,

  // some info about native tokens (for convenience)
  existentialDeposit: string,
  decimals: number,
  symbol: string,

  supportSmartContract: _AssetType[] | null
}

export interface _SubstrateInfo {
  relaySlug: string | null,
  paraId: number | null,
  genesisHash: string,
  addressPrefix: number,
  crowdloanUrl: string | null,
  category: SubstrateChainCategory[],
  blockExplorer: string | null,

  // some info about native tokens (for convenience)
  existentialDeposit: string,
  decimals: number,
  symbol: string,

  supportStaking: boolean,
  supportSmartContract: _AssetType[] | null
}

export interface _MultiChainAsset {
  slug: string,
  originChainAsset: string,
  name: string,
  symbol: string,
  priceId: string
}

export enum _AssetRefPath {
  XCM = 'XCM'
}

export interface _AssetRef {
  srcAsset: string,
  destAsset: string,
  path: _AssetRefPath
}