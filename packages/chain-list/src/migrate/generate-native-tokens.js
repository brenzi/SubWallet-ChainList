const chainMap = {
  "polkadot": {
    "slug": "polkadot",
    "name": "Polkadot",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Parity": "wss://rpc.polkadot.io",
      "OnFinality": "wss://polkadot.api.onfinality.io/public-ws",
      "Dwellir": "wss://polkadot-rpc.dwellir.com",
      "Light Client": "light://substrate-connect/polkadot",
      "RadiumBlock": "wss://polkadot.public.curie.radiumblock.io/ws",
      "1RPC": "wss://1rpc.io/dot",
      "PinkNode": "wss://public-rpc.pinknode.io/polkadot"
    },
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
      "addressPrefix": 0,
      "crowdloanUrl": null,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://polkadot.subscan.io/",
      "symbol": "DOT",
      "existentialDeposit": "10000000000",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "kusama": {
    "slug": "kusama",
    "name": "Kusama",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Parity": "wss://kusama-rpc.polkadot.io",
      "OnFinality": "wss://kusama.api.onfinality.io/public-ws",
      "Dwellir": "wss://kusama-rpc.dwellir.com",
      "Light Client": "light://substrate-connect/kusama",
      "PinkNode": "wss://public-rpc.pinknode.io/kusama",
      "RadiumBlock": "wss://kusama.public.curie.radiumblock.xyz/ws",
      "1RPC": "wss://1rpc.io/ksm"
    },
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
      "addressPrefix": 2,
      "crowdloanUrl": null,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://kusama.subscan.io/",
      "symbol": "KSM",
      "existentialDeposit": "333333333",
      "decimals": 12,
      "hasNativeNft": true,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "moonbeam": {
    "slug": "moonbeam",
    "name": "Moonbeam",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Moonbeam Foundation": "wss://wss.api.moonbeam.network",
      "OnFinality": "wss://moonbeam.api.onfinality.io/public-ws",
      "Dwellir": "wss://moonbeam-rpc.dwellir.com",
      "1rpc": "wss://1rpc.io/glmr",
      "PinkNode": "wss://public-rpc.pinknode.io/moonbeam",
      "Blast": "wss://moonbeam.public.blastapi.io"
    },
    "substrateInfo": {
      "paraId": 2004,
      "relaySlug": "polkadot",
      "genesisHash": "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
      "addressPrefix": 1284,
      "crowdloanUrl": "https://moonbeam.foundation/moonbeam-crowdloan/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://moonbeam.subscan.io/",
      "symbol": "GLMR",
      "existentialDeposit": "0",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": {
      "evmChainId": 1284,
      "blockExplorer": "https://moonscan.io/",
      "symbol": "GLMR",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC721",
        "ERC20"
      ],
      "abiExplorer": "https://api-moonbeam.moonscan.io/api?module=contract&action=getabi"
    }
  },
  "acala": {
    "slug": "acala",
    "name": "Acala",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Acala Foundation 0": "wss://acala-rpc-0.aca-api.network",
      "Acala Foundation 1": "wss://acala-rpc-1.aca-api.network",
      "Acala Foundation 2": "wss://acala-rpc-2.aca-api.network/ws",
      "Acala Foundation 3": "wss://acala-rpc-3.aca-api.network/ws",
      "Polkawallet 0": "wss://acala.polkawallet.io",
      "OnFinality": "wss://acala-polkadot.api.onfinality.io/public-ws",
      "Dwellir": "wss://acala-rpc.dwellir.com"
    },
    "substrateInfo": {
      "paraId": 2000,
      "relaySlug": "polkadot",
      "genesisHash": "0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c",
      "addressPrefix": 10,
      "crowdloanUrl": "https://distribution.acala.network/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://acala.subscan.io/",
      "symbol": "ACA",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": true,
      "supportStaking": false,
      "supportSmartContract": null
    }
  },
  "alephTest": {
    "slug": "alephTest",
    "name": "Aleph Zero Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Aleph Zero Foundation": "wss://ws.test.azero.dev"
    },
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x05d5279c52c484cc80396535a316add7d47b1c5b9e0398dd1f584149341460c5",
      "addressPrefix": 42,
      "crowdloanUrl": null,
      "chainType": "RELAYCHAIN",
      "blockExplorer": null,
      "symbol": "TZERO",
      "existentialDeposit": "500",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "supportStaking": true
    },
    "evmInfo": null
  },
  "ethereum": {
    "slug": "ethereum",
    "name": "Ethereum",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Cloudflare": "https://cloudflare-eth.com",
      "BlastApi": "https://eth-mainnet.public.blastapi.io",
      "Infura": "https://mainnet.infura.io/v3/b6bf7d3508c941499b10025c0776eaf8"
    },
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 1,
      "blockExplorer": "https://etherscan.io",
      "symbol": "ETH",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://etherscan.io"
    }
  },
  "astar": {
    "slug": "astar",
    "name": "Astar",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Astar": "wss://rpc.astar.network",
      "OnFinality": "wss://astar.api.onfinality.io/public-ws",
      "Dwellir": "wss://astar-rpc.dwellir.com",
      "PinkNode": "wss://public-rpc.pinknode.io/astar",
      "Blast": "wss://astar.public.blastapi.io",
      "1RPC": "wss://1rpc.io/astr",
      "Light Client": "light://substrate-connect/polkadot/astar"
    },
    "substrateInfo": {
      "paraId": 2006,
      "relaySlug": "polkadot",
      "genesisHash": "0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6",
      "addressPrefix": 5,
      "crowdloanUrl": "https://crowdloan.astar.network/#/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://astar.subscan.io/",
      "symbol": "ASTR",
      "existentialDeposit": "1000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "supportStaking": true
    },
    "evmInfo": null
  },
  "astarEvm": {
    "slug": "astarEvm",
    "name": "Astar - EVM",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Astar": "https://evm.astar.network",
      "OnFinality": "https://astar.api.onfinality.io/public",
      "Dwellir": "https://astar-rpc.dwellir.com",
      "Blast": "https://astar.public.blastapi.io",
      "1RPC": "https://1rpc.io/astr"
    },
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 592,
      "blockExplorer": "https://blockscout.com/astar/",
      "symbol": "ASTR",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    }
  },
  "shiden": {
    "slug": "shiden",
    "name": "Shiden",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Astar": "wss://rpc.shiden.astar.network",
      "OnFinality": "wss://shiden.api.onfinality.io/public-ws",
      "Dwellir": "wss://shiden-rpc.dwellir.com",
      "Blast": "wss://shiden.public.blastapi.io"
    },
    "substrateInfo": {
      "paraId": 2007,
      "relaySlug": "kusama",
      "genesisHash": "0xf1cf9022c7ebb34b162d5b5e34e705a5a740b2d0ecc1009fb89023e62a488108",
      "addressPrefix": 5,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://shiden.subscan.io/",
      "symbol": "SDN",
      "existentialDeposit": "1000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "supportStaking": true
    },
    "evmInfo": null
  },
  "shidenEvm": {
    "slug": "shidenEvm",
    "name": "Shiden - EVM",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Astar": "https://evm.shiden.astar.network",
      "OnFinality": "https://shiden.api.onfinality.io/public",
      "Dwellir": "https://shiden-rpc.dwellir.com",
      "Blast": "https://shiden.public.blastapi.io"
    },
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 336,
      "blockExplorer": "https://blockscout.com/shiden/",
      "symbol": "SDN",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    }
  },
  "shibuya": {
    "slug": "shibuya",
    "name": "Shibuya Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Shibuya": "wss://rpc.shibuya.astar.network",
      "Dwellir": "wss://shibuya-rpc.dwellir.com"
    },
    "substrateInfo": {
      "paraId": 1000,
      "relaySlug": null,
      "genesisHash": "0xddb89973361a170839f80f152d2e9e38a376a5a7eccefcade763f46a8e567019",
      "addressPrefix": 5,
      "crowdloanUrl": null,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://shibuya.subscan.io/",
      "symbol": "SBY",
      "existentialDeposit": "1000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "supportStaking": true
    },
    "evmInfo": null
  },
  "shibuyaEvm": {
    "slug": "shibuyaEvm",
    "name": "Shibuya Testnet - EVM",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Shibuya": "https://evm.shibuya.astar.network ",
      "Dwellir": "https://shibuya-rpc.dwellir.com",
      "BlastAPI": "https://shibuya.public.blastapi.io"
    },
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 81,
      "blockExplorer": null,
      "symbol": "SBY",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": null
    }
  },
  "westend": {
    "slug": "westend",
    "name": "Westend",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Parity": "wss://westend-rpc.polkadot.io",
      "Pinknode": "wss://rpc.pinknode.io/westend/explorer",
      "Dwellir": "wss://westend-rpc.dwellir.com",
      "Light Client": "light://substrate-connect/westend",
      "DottersNet": "wss://rpc.dotters.network/westend",
      "Dwellir Tunisia": "wss://westend-rpc-tn.dwellir.com"
    },
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",
      "addressPrefix": 42,
      "crowdloanUrl": null,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://westend.subscan.io/",
      "symbol": "WND",
      "existentialDeposit": "10000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": true
    },
    "evmInfo": null
  },
  "rococo": {
    "slug": "rococo",
    "name": "Rococo",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Parity": "wss://rococo-rpc.polkadot.io",
      "OnFinality": "wss://rococo.api.onfinality.io/public-ws",
      "Pinknode": "wss://rpc.pinknode.io/rococo/explorer",
      "Ares Protocol": "wss://rococo.aresprotocol.com",
      "Light Client": "light://substrate-connect/rococo"
    },
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e",
      "addressPrefix": 42,
      "crowdloanUrl": null,
      "chainType": "RELAYCHAIN",
      "blockExplorer": null,
      "symbol": "ROC",
      "existentialDeposit": "33333333",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": [
        "PSP34",
        "PSP22"
      ],
      "supportStaking": false
    },
    "evmInfo": null
  },
  "bitcountry": {
    "slug": "bitcountry",
    "name": "Bit.Country - Alpha Net",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Metaverse Foundation": "wss://alphanet-rpc.bit.country"
    },
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xfff6fd94251f570d4c9cdf25a0475da0d7ad35160290da19dad8f9caf8bf31b5",
      "addressPrefix": 42,
      "crowdloanUrl": null,
      "chainType": "RELAYCHAIN",
      "blockExplorer": null,
      "symbol": "NUUM",
      "existentialDeposit": "1",
      "decimals": 18,
      "hasNativeNft": true,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "equilibrium_parachain": {
    "slug": "equilibrium_parachain",
    "name": "Equilibrium",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Equilibrium": "wss://node.pol.equilibrium.io",
      "Dwellir": "wss://equilibrium-rpc.dwellir.com"
    },
    "substrateInfo": {
      "paraId": 2011,
      "relaySlug": "polkadot",
      "genesisHash": "0x89d3ec46d2fb43ef5a9713833373d5ea666b092fa8fd68fbc34596036571b907",
      "addressPrefix": 68,
      "crowdloanUrl": "https://equilibrium.io/en/crowdloan#bid",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://equilibrium.subscan.io",
      "symbol": "EQ",
      "decimals": 9,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "moonbase": {
    "slug": "moonbase",
    "name": "Moonbase Alpha",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Moonbeam Foundation": "wss://wss.api.moonbase.moonbeam.network",
      "OnFinality": "wss://moonbeam-alpha.api.onfinality.io/public-ws",
      "Blast": "wss://moonbase-alpha.public.blastapi.io"
    },
    "substrateInfo": {
      "paraId": 1000,
      "relaySlug": null,
      "genesisHash": "0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527",
      "addressPrefix": 1287,
      "crowdloanUrl": null,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://moonbase.subscan.io/",
      "symbol": "DEV",
      "existentialDeposit": "0",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": {
      "evmChainId": 1287,
      "blockExplorer": "https://moonbase.moonscan.io/",
      "symbol": "DEV",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC721",
        "ERC20"
      ],
      "abiExplorer": "https://api-moonbase.moonscan.io/api?module=contract&action=getabi"
    }
  },
  "moonriver": {
    "slug": "moonriver",
    "name": "Moonriver",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Moonbeam Foundation": "wss://wss.api.moonriver.moonbeam.network",
      "OnFinality": "wss://moonriver.api.onfinality.io/public-ws",
      "Blast": "wss://moonriver.public.blastapi.io",
      "Dwellir": "wss://moonriver-rpc.dwellir.com",
      "Pinknode": "wss://public-rpc.pinknode.io/moonriver",
      "UnitedBloc": "wss://moonriver.unitedbloc.com:2001"
    },
    "substrateInfo": {
      "paraId": 2023,
      "relaySlug": "kusama",
      "genesisHash": "0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b",
      "addressPrefix": 1285,
      "crowdloanUrl": null,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://moonriver.subscan.io/",
      "symbol": "MOVR",
      "existentialDeposit": "0",
      "decimals": 18,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": {
      "evmChainId": 1285,
      "blockExplorer": "https://moonriver.moonscan.io/",
      "symbol": "MOVR",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC721",
        "ERC20"
      ],
      "abiExplorer": "https://api-moonriver.moonscan.io/api?module=contract&action=getabi"
    }
  },
  "turingStaging": {
    "slug": "turingStaging",
    "name": "Turing Staging",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Turing": "wss://rpc.turing-staging.oak.tech"
    },
    "substrateInfo": {
      "paraId": 2114,
      "relaySlug": null,
      "genesisHash": "0xd54f0988402deb4548538626ce37e4a318441ea0529ca369400ebec4e04dfe4b",
      "addressPrefix": 51,
      "crowdloanUrl": null,
      "chainType": "PARACHAIN",
      "blockExplorer": null,
      "symbol": "TUR",
      "existentialDeposit": "100000000",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "turing": {
    "slug": "turing",
    "name": "Turing",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Turing": "wss://rpc.turing.oak.tech",
      "Dwellir": "wss://turing-rpc.dwellir.com"
    },
    "substrateInfo": {
      "paraId": 2114,
      "relaySlug": "kusama",
      "genesisHash": "0x0f62b701fb12d02237a33b84818c11f621653d2b1614c777973babf4652b535d",
      "addressPrefix": 51,
      "crowdloanUrl": null,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://turing.subscan.io/",
      "symbol": "TUR",
      "existentialDeposit": "100000000",
      "decimals": 10,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "bifrost": {
    "slug": "bifrost",
    "name": "Bifrost Kusama",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Liebi 0": "wss://bifrost-rpc.liebi.com/ws",
      "Dwellir": "wss://bifrost-rpc.dwellir.com",
      "OnFinality": "wss://bifrost-parachain.api.onfinality.io/public-ws"
    },
    "substrateInfo": {
      "paraId": 2001,
      "relaySlug": "kusama",
      "genesisHash": "0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed",
      "addressPrefix": 6,
      "crowdloanUrl": "https://bifrost.app/vcrowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://bifrost-kusama.subscan.io",
      "symbol": "BNC",
      "existentialDeposit": "10000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "bifrost_dot": {
    "slug": "bifrost_dot",
    "name": "Bifrost Polkadot",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Liebi": "wss://hk.p.bifrost-rpc.liebi.com/ws",
      "OnFinality": "wss://bifrost-polkadot.api.onfinality.io/public-ws"
    },
    "substrateInfo": {
      "paraId": 2030,
      "relaySlug": "polkadot",
      "genesisHash": "0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b",
      "addressPrefix": 6,
      "crowdloanUrl": "https://bifrost.app/vcrowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://bifrost.subscan.io",
      "symbol": "BNC",
      "existentialDeposit": "10000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "bifrost_testnet": {
    "slug": "bifrost_testnet",
    "name": "Bifrost Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Liebi": "wss://bifrost-rpc.rococo.liebi.com/ws"
    },
    "substrateInfo": {
      "paraId": 2030,
      "relaySlug": "rococo",
      "genesisHash": "0x8b290fa39a8808f29d7309ea99442c95bf964838aef14be5a6449ae48f8a5f1f",
      "addressPrefix": 6,
      "crowdloanUrl": null,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://bifrost-testnet.subscan.io/",
      "symbol": "BNC",
      "existentialDeposit": "10000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "calamari": {
    "slug": "calamari",
    "name": "Calamari Parachain",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Manta Network": "wss://ws.calamari.systems/",
      "OnFinality": "wss://calamari.api.onfinality.io/public-ws"
    },
    "substrateInfo": {
      "paraId": 2084,
      "relaySlug": "kusama",
      "genesisHash": "0x4ac80c99289841dd946ef92765bf659a307d39189b3ce374a92b5f0415ee17a1",
      "addressPrefix": 78,
      "crowdloanUrl": "https://calamari.network/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://calamari.subscan.io/",
      "symbol": "KMA",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "amplitude": {
    "slug": "amplitude",
    "name": "Amplitude",
    "isTestnet": false,
    "chainStatus": "ACTIVE",
    "providers": {
      "Amplitude": "wss://rpc-amplitude.pendulumchain.tech"
    },
    "substrateInfo": {
      "paraId": 2124,
      "relaySlug": "kusama",
      "genesisHash": "0xcceae7f3b9947cdb67369c026ef78efa5f34a08fe5808d373c04421ecf4f1aaf",
      "addressPrefix": 57,
      "crowdloanUrl": null,
      "chainType": "PARACHAIN",
      "blockExplorer": null,
      "symbol": "AMPE",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "amplitude_test": {
    "slug": "amplitude_test",
    "name": "Amplitude Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "Amplitude": "wss://rpc-foucoco.pendulumchain.tech"
    },
    "substrateInfo": {
      "paraId": 2124,
      "relaySlug": "rococo",
      "genesisHash": "0x67221cd96c1551b72d55f65164d6a39f31b570c77a05c90e31931b0e2f379e13",
      "addressPrefix": 57,
      "crowdloanUrl": null,
      "chainType": "PARACHAIN",
      "blockExplorer": null,
      "symbol": "AMPE",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportStaking": true,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "bobabase": {
    "slug": "bobabase",
    "name": "Bobabase Testnet",
    "isTestnet": true,
    "chainStatus": "ACTIVE",
    "providers": {
      "RPC": "https://bobabase.boba.network",
      "Replica RPC": "https://replica.bobabase.boba.network"
    },
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 1297,
      "blockExplorer": null,
      "symbol": "BOBA",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ],
      "abiExplorer": "https://blockexplorer.bobabase.boba.network"
    }
  },
  "statemint": {
    "slug": "statemint",
    "name": "Statemint",
    "chainStatus": "ACTIVE",
    "providers": {
      "Parity": "wss://statemint-rpc.polkadot.io",
      "OnFinality": "wss://statemint.api.onfinality.io/public-ws",
      "Dwellir": "wss://statemint-rpc.dwellir .com",
      "PinkNode": "wss://public-rpc.pinknode.io/statemint",
      "RadiumBlock": "wss://statemint.public.curie.radiumblock.xyz/ws",
      "Dwellir Tunisia": "wss://statemint-rpc-tn.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 1000,
      "relaySlug": "polkadot",
      "genesisHash": "0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f",
      "addressPrefix": 0,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://statemint.subscan.io/",
      "symbol": "DOT",
      "existentialDeposit": "1000000000",
      "decimals": 10,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "pioneer": {
    "slug": "pioneer",
    "name": "Pioneer Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "OnFinality": "wss://pioneer.api.onfinality.io/public-w s"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2096,
      "relaySlug": "kusama",
      "genesisHash": "0xf22b7850cdd5a7657bbfd90ac86441275bbc57ace3d2698a740c7b0ec4de5ec3",
      "addressPrefix": 268,
      "crowdloanUrl": "https://ksmcrowdloan.bit.country/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://pioneer.subscan.io/",
      "symbol": "NEER",
      "existentialDeposit": "100000000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "ethereum_goerli": {
    "slug": "ethereum_goerli",
    "name": "Ethereum Testnet (Goerli)",
    "chainStatus": "ACTIVE",
    "providers": {
      "Infura": "https://goerli.infura.io/v3/b6bf7d3508c941499b10025c0776eaf8",
      "Optimism": "https://goerli.optimism.io"
    },
    "isTestnet": true,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 1,
      "blockExplorer": "https://goerli.etherscan.io",
      "symbol": "GoerliETH",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "binance": {
    "slug": "binance",
    "name": "Binance Smart Chain",
    "chainStatus": "ACTIVE",
    "providers": {
      "Binance": "https://bsc-dataseed.binance.org/",
      "Defibit": "https://bsc-dataseed1.defibit.io/",
      "Ninicoin": "https://bsc-dataseed1.ninicoin.io/",
      "Nodereal": "https://bsc.nodereal.io/"
    },
    "isTestnet": false,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 56,
      "blockExplorer": "https://bscscan.com",
      "symbol": "BNB",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "binance_test": {
    "slug": "binance_test",
    "name": "Binance Smart Chain (Testnet)",
    "chainStatus": "ACTIVE",
    "providers": {
      "Binance": "https://data-seed-prebsc-1-s1.binance.org:8545/",
      "Binance2": "https://data-seed-prebsc-2-s1.binance.org:8545/"
    },
    "isTestnet": true,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 97,
      "blockExplorer": "https://testnet.bscscan.com",
      "symbol": "BNB",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "parallel": {
    "slug": "parallel",
    "name": "Parallel",
    "chainStatus": "ACTIVE",
    "providers": {
      "OnFinality": "wss://parallel.api.onfinality.io/public-ws",
      "Parallel": "wss://rpc.parallel.fi"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2012,
      "relaySlug": "polkadot",
      "genesisHash": "0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97",
      "addressPrefix": 172,
      "crowdloanUrl": "https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2012",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://parallel.subscan.io/",
      "symbol": "PARA",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "clover": {
    "slug": "clover",
    "name": "Clover",
    "chainStatus": "ACTIVE",
    "providers": {
      "Clover": "wss://rpc-para.clover.finance",
      "OnFinality": "wss://clover.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2002,
      "relaySlug": "polkadot",
      "genesisHash": "0x5c7bd13edf349b33eb175ffae85210299e324d852916336027391536e686f267",
      "addressPrefix": 128,
      "crowdloanUrl": "https://lucky.clover.finance/?type=support",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://clover.subscan.io/",
      "symbol": "CLV",
      "existentialDeposit": "0",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "cloverEvm": {
    "slug": "cloverEvm",
    "name": "Clover - EVM",
    "chainStatus": "ACTIVE",
    "providers": {
      "Clover": "wss://rpc-para.clover.finance",
      "OnFinality": "wss://clover.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 1024,
      "symbol": "CLV",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "hydradx_main": {
    "slug": "hydradx_main",
    "name": "HydraDX",
    "chainStatus": "ACTIVE",
    "providers": {
      "Galactic Council": "wss://rpc.hydradx.cloud",
      "Dwellir": "wss://hydradx-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2034,
      "relaySlug": "polkadot",
      "genesisHash": "0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d",
      "addressPrefix": 63,
      "crowdloanUrl": "https://loan.hydradx.io/",
      "chainType": "PARACHAIN",
      "symbol": "HDX",
      "existentialDeposit": "1000000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "edgeware": {
    "slug": "edgeware",
    "name": "Edgeware",
    "chainStatus": "ACTIVE",
    "providers": {
      "JelliedOwl": "wss://edgeware.jelliedowl.net",
      "Commonwealth Labs": "wss://mainnet2.edgewa.re",
      "Dwellir": "wss://edgeware-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b",
      "addressPrefix": 7,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://edgeware.subscan.io/",
      "symbol": "EDG",
      "existentialDeposit": "10000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "centrifuge": {
    "slug": "centrifuge",
    "name": "Centrifuge",
    "chainStatus": "ACTIVE",
    "providers": {
      "Centrifuge": "wss://fullnode.parachain.centrifuge.io",
      "OnFinality": "wss://centrifuge-parachain.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2031,
      "relaySlug": "polkadot",
      "genesisHash": "0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82",
      "addressPrefix": 36,
      "crowdloanUrl": "https://centrifuge.io/parachain/crowdloan/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://centrifuge.subscan.io/",
      "symbol": "CFG",
      "existentialDeposit": "1000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "interlay": {
    "slug": "interlay",
    "name": "Interlay",
    "chainStatus": "ACTIVE",
    "providers": {
      "Kintsugi Labs": "wss://api.interlay.io/parachain",
      "OnFinality": "wss://interlay.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2032,
      "relaySlug": "polkadot",
      "genesisHash": "0xed86d448b84db333cdbe07362ddc79530343b907bd88712557c024d7a94296bb",
      "addressPrefix": 42,
      "crowdloanUrl": "https://crowdloan.interlay.io/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://interlay.subscan.io/",
      "symbol": "INTR",
      "decimals": 10,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "nodle": {
    "slug": "nodle",
    "name": "Nodle",
    "chainStatus": "ACTIVE",
    "providers": {
      "OnFinality": "wss://nodle-parachain.api.onfinality.io/public-ws",
      "Dwellir": "wss://eden-rpc.dwellir.com",
      "PinkNode": "wss://public-rpc.pinknode.io/nodle"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2026,
      "relaySlug": "polkadot",
      "genesisHash": "0xa3d114c2b8d0627c1aa9b134eafcf7d05ca561fdc19fb388bb9457f81809fb23",
      "addressPrefix": 37,
      "crowdloanUrl": "https://parachain.nodle.com/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://nodle.subscan.io/",
      "symbol": "NODL",
      "existentialDeposit": "10000",
      "decimals": 11,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "darwinia": {
    "slug": "darwinia",
    "name": "Darwinia",
    "chainStatus": "ACTIVE",
    "providers": {
      "Darwinia Network": "wss://rpc.darwinia.network",
      "Darwinia": "wss://darwinia-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2003,
      "relaySlug": "polkadot",
      "genesisHash": "0x729cb8f2cf428adcf81fe69610edda32c5711b2ff17de747e8604a3587021db8",
      "addressPrefix": 18,
      "crowdloanUrl": "https://darwinia.network/plo_contribute",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://darwinia.subscan.io/",
      "symbol": "RING",
      "existentialDeposit": "0",
      "decimals": 9,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "sora_ksm": {
    "slug": "sora_ksm",
    "name": "SORA Kusama",
    "chainStatus": "ACTIVE",
    "providers": {
      "Soramitsu": "wss://ws.parachain-collator-1.c1.sora2.soramitsu.co.jp"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2011,
      "relaySlug": "kusama",
      "genesisHash": "0x6d8d9f145c2177fa83512492cdd80a71e29f22473f4a8943a6292149ac319fb9",
      "addressPrefix": 420,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "symbol": "XOR",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "odyssey": {
    "slug": "odyssey",
    "name": "Ares Odyssey",
    "chainStatus": "ACTIVE",
    "providers": {
      "AresProtocol": "wss://odyssey.aresprotocol.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x0f3665e2e57fb38fd638145b69e567fb05bbadfd457624f90f15e5dbb31320bb",
      "addressPrefix": 34,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "RELAYCHAIN",
      "symbol": "ARES",
      "existentialDeposit": "500",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "polkadex": {
    "slug": "polkadex",
    "name": "Polkadex",
    "chainStatus": "ACTIVE",
    "providers": {
      "Polkadex Team": "wss://mainnet.polkadex.trade/",
      "OnFinality": "wss:// polkadex.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x3920bcb4960a1eef5580cd5367ff3f430eef052774f78468852f7b9cb39f8a3c",
      "addressPrefix": 88,
      "crowdloanUrl": "https://www.polkadex.trade/crowdloans",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://polkadex.subscan.io/",
      "symbol": "PDEX",
      "existentialDeposit": "1000000000000",
      "decimals": 12,
      "supportStaking": true,
      "hasNativeNft": false,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "polkadexTest": {
    "slug": "polkadexTest",
    "name": "Polkadex - Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "Polkadex Team": "wss://blockchain.polkadex.trade"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xd0024e7110db2a8b35d6599e64e82d3eb30070200a423398319efb6b4d596427",
      "addressPrefix": 88,
      "crowdloanUrl": "https://www.polkadex.trade/crowdloans",
      "chainType": "RELAYCHAIN",
      "symbol": "Unit",
      "existentialDeposit": "1000000000000",
      "decimals": 12,
      "supportStaking": true,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "aleph": {
    "slug": "aleph",
    "name": "Aleph Zero",
    "chainStatus": "ACTIVE",
    "providers": {
      "Aleph Zero Foundation": "wss://ws.azero.dev"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e",
      "addressPrefix": 42,
      "crowdloanUrl": "https://contribute.alephzero.org/",
      "chainType": "RELAYCHAIN",
      "symbol": "AZERO",
      "existentialDeposit": "500",
      "decimals": 12,
      "supportStaking": true,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "rmrk": {
    "slug": "rmrk",
    "name": "RMRK Devnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "rmrk": "wss://staging.node.rmrk.app"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6c7ae90ef70a31fe9f0f2329007ff4b4c4fe62fe71cd2b753ee37c1aa1070fef",
      "addressPrefix": 0,
      "chainType": "RELAYCHAIN",
      "symbol": "UNIT",
      "existentialDeposit": "10000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "dolphin": {
    "slug": "dolphin",
    "name": "Dolphin Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "dolphin": "wss://ws.rococo.dolphin.engineering"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x79372c8ed25b51c0d3c1f085becb264c93f1ecbc71dcf387fdb5c294fd823a08",
      "addressPrefix": 78,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://dolphin.subscan.io/",
      "symbol": "DOL",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "opal": {
    "slug": "opal",
    "name": "Opal",
    "chainStatus": "ACTIVE",
    "providers": {
      "Unique": "wss://ws-opal.unique.network",
      "Europe": "wss://eu-ws-opal.unique.network",
      "NA": "wss://us-ws-opal.unique.network",
      "Asia": "wss://asia-ws-opal.unique.ne twork"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x3fa374fbc8d0a9077356aefe327c88f447ce7f1fda905b1d4b4a2680a7b5cefa",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "OPL",
      "existentialDeposit": "0",
      "decimals": 18,
      "hasNativeNft": true,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "efinity": {
    "slug": "efinity",
    "name": "Efinity",
    "chainStatus": "ACTIVE",
    "providers": {
      "Efinity": "wss://rpc.efinity.io",
      "Dwellir": "wss://efinity -rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2021,
      "relaySlug": "polkadot",
      "genesisHash": "0x335369975fced3fc22e23498da306a712f4fd964c957364d53c49cea9db8bc2f",
      "addressPrefix": 1110,
      "crowdloanUrl": "https://enjin.io/efinity-crowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://efinity.subscan.io/",
      "symbol": "EFI",
      "existentialDeposit": "1000000000000000000",
      "decimals": 10,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "composableFinance": {
    "slug": "composableFinance",
    "name": "Composable Finance",
    "chainStatus": "ACTIVE",
    "providers": {
      "Composable": "wss://rpc.composable.finance"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2019,
      "relaySlug": "polkadot",
      "genesisHash": "0xdaab8df776eb52ec604a5df5d388bb62a050a0aaec4556a64265b9d42755552d",
      "addressPrefix": 49,
      "crowdloanUrl": "https://crowdloan.composable.finance/",
      "chainType": "PARACHAIN",
      "symbol": "LAYR",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "phala": {
    "slug": "phala",
    "name": "Phala",
    "chainStatus": "ACTIVE",
    "providers": {
      "Phala": "wss://api.phala.network/ws",
      "OnFinality": "wss://phala.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2035,
      "relaySlug": "polkadot",
      "genesisHash": "0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736",
      "addressPrefix": 30,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://phala.subscan.io/",
      "symbol": "PHA",
      "existentialDeposit": "10000000000",
      "decimals": 10,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "crust": {
    "slug": "crust",
    "name": "Crust",
    "chainStatus": "ACTIVE",
    "providers": {
      "Crust Network": "wss://rpc.crust.network",
      "OnFinality": "wss://crust.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2008,
      "relaySlug": "polkadot",
      "genesisHash": "0x8b404e7ed8789d813982b9cb4c8b664c05b3fbf433309f603af014ec9ce56a8c",
      "addressPrefix": 66,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://crust.subscan.io/",
      "symbol": "CRU",
      "existentialDeposit": "100000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "statemine": {
    "slug": "statemine",
    "name": "Statemine",
    "chainStatus": "ACTIVE",
    "providers": {
      "Parity": "wss://statemine-rpc.polkadot.io",
      "OnFinality": "wss://statemine.api.onfinality.io/public-ws",
      "Dwellir": "wss://statemine-rpc.dwellir.com",
      "RadiumBlock": "wss://statemine.public.curie.radiumblock.xyz/ws",
      "PinkNode": "wss://public-rpc.pin knode.io/statemine",
      "Dwellir Tunisia": "wss://statemine-rpc-tn.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 1000,
      "relaySlug": "kusama",
      "genesisHash": "0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a",
      "addressPrefix": 2,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://statemine.subscan.io/",
      "symbol": "KSM",
      "existentialDeposit": "33333333",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "karura": {
    "slug": "karura",
    "name": "Karura",
    "chainStatus": "ACTIVE",
    "providers": {
      "Acala Foundation 0": "wss://karura-rpc-0.aca-api.network",
      "Acala Foundation 1": "wss://karura-rpc-1.aca-api.network",
      "Acala Foundation 2": "wss://karura-rpc-2.aca-api.network/ws",
      "Acala Foundation 3": "wss://karura-rpc-3.aca-api.network/ws",
      "Polkawallet 0": "wss://karura.polkawallet.io",
      "OnFinality": "wss://karura.api.onfinality.io/public-ws",
      "Dwellir": "wss://karura-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2000,
      "relaySlug": "kusama",
      "genesisHash": "0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b",
      "addressPrefix": 8,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://karura.subscan.io/",
      "symbol": "KAR",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "khala": {
    "slug": "khala",
    "name": "Khala",
    "chainStatus": "ACTIVE",
    "providers": {
      "Phala": "wss://khala-api.phala.network/ws",
      "OnFinality": "wss://khala.api.onfinality.io/public-ws",
      "Dwellir": "wss://khala-rpc.dwellir.com",
      "PinkNode": "wss://public-rpc.pinknode.io/khala"
    },
    "isTestnet ": false,
    "substrateInfo": {
      "paraId": 2004,
      "relaySlug": "kusama",
      "genesisHash": "0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d",
      "addressPrefix": 30,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://khala.subscan.io/",
      "symbol": "PHA",
      "existentialDeposit": "10000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "kilt": {
    "slug": "kilt",
    "name": "KILT Spiritnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "KILT Protocol": "wss://spiritnet.kilt.io/",
      "OnFinality": "wss://spiritnet.api.onfinality.io/public-ws",
      "Dwellir": "wss://kilt-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2086,
      "relaySlug": "kusama",
      "genesisHash": "0x411f057b9107718c9624d6aa4a3f23c1653898297f3d4d529d9bb6511a39dd21",
      "addressPrefix": 38,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "symbol": "KILT",
      "existentialDeposit": "10000000000000",
      "decimals": 12,
      "supportStaking": true,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "basilisk": {
    "slug": "basilisk",
    "name": "Basilisk",
    "chainStatus": "ACTIVE",
    "providers": {
      "Basilisk ": "wss://rpc.basilisk.cloud",
      "Dwellir": "wss://basilisk-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2090,
      "relaySlug": "kusama",
      "genesisHash": "0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755",
      "addressPrefix": 10041,
      "crowdloanUrl": "https://loan.bsx.fi/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://basilisk.subscan.io/",
      "symbol": "BSX",
      "existentialDeposit": "1000000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "altair": {
    "slug": "altair",
    "name": "Altair",
    "chainStatus": "ACTIVE",
    "providers": {
      "Centrifuge": "wss://fullnode.altair.centrifuge.io",
      "OnFinality": "wss://altair.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2088,
      "relaySlug": "kusama",
      "genesisHash": "0xaa3876c1dc8a1afcc2e9a685a49ff7704cfd36ad8c90bf2702b9d1b00cc40011",
      "addressPrefix": 136,
      "crowdloanUrl": "https://centrifuge.io/altair/crowdloan/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://altair.subscan.io/",
      "symbol": "AIR",
      "existentialDeposit": "1000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "heiko": {
    "slug": "heiko",
    "name": "Heiko",
    "chainStatus": "ACTIVE",
    "providers": {
      "OnFinality": "wss://parallel-heiko.api.onfinality.io/public-ws",
      "Parallel": "wss://heiko-rpc.parallel.fi"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2085,
      "relaySlug": "kusama",
      "genesisHash": "0x64a1c658a48b2e70a7fb1a d4c39eea35022568c20fc44a6e2e3d0a57aee6053b",
      "addressPrefix": 110,
      "crowdloanUrl": "https://crowdloan.parallel.fi/#/auction/contribute/kusama/2085",
      "chainType": "PARACHAIN",
      "symbol": "HKO",
      "existentialDeposit": "10000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "kintsugi": {
    "slug": "kintsugi",
    "name": "Kintsugi",
    "chainStatus": "ACTIVE",
    "providers": {
      "Kintsugi Labs": "wss://api-kusama.interlay.io/parachain",
      "OnFinality": "wss://kintsugi. api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2092,
      "relaySlug": "kusama",
      "genesisHash": "0x9af9a64e6e4da8e3073901c3ff0cc4c3aad9563786d89daf6ad820b6e14a0b8b",
      "addressPrefix": 2092,
      "crowdloanUrl": "https://kintsugi.interlay.io/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://kintsugi.subscan.io/",
      "symbol": "KINT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "kintsugi_test": {
    "slug": "kintsugi_test",
    "name": "Kintsugi Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "testnet": "wss://api-testnet.interlay.io:443/parachain"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x364dd762ee3fa02f63548f579f185e64932fc1a29052d7d9a588d2a57b191abf",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "KINT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "picasso": {
    "slug": "picasso",
    "name": "Picasso",
    "chainStatus": "ACTIVE",
    "providers": {
      "Composable": "wss://rpc.composablenodes.tech"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2087,
      "relaySlug": "kusama",
      "genesisHash": "0x6811a339673c9daa897944dcdac99c6e2939cc88245ed21951a0a3c9a2be75bc",
      "addressPrefix": 49,
      "crowdloanUrl": "https://crowdloan.composable.finance/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://picasso.subscan.io/",
      "symbol": "PICA",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "quartz": {
    "slug": "quartz",
    "name": "Quartz",
    "chainStatus": "ACTIVE",
    "providers": {
      "Unique Europe": "wss://eu-ws-quartz.unique.network",
      "Unique US": "wss://us-ws-quartz.unique.network",
      "Unique Asia": "wss://asia-ws-quartz.unique.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2095,
      "relaySlug": "kusama",
      "genesisHash": "0xcd4d732201ebe5d6b014edda071c4203e16867305332301dc8d092044b28e554",
      "addressPrefix": 255,
      "crowdloanUrl": "https://unique.network/quartz/crowdloan/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://quartz.subscan.io/",
      "symbol": "QTZ",
      "existentialDeposit": "0",
      "decimals": 18,
      "hasNativeNft": true,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "unique_network": {
    "slug": "unique_network",
    "name": "Unique",
    "chainStatus": "ACTIVE",
    "providers": {
      "unique": "wss://us-ws.unique.network/",
      "UniqueEu": "wss://eu-ws.unique.network/",
      "UniqueAsia": "wss://asia-ws.unique.network/"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2037,
      "relaySlug": "polkadot",
      "genesisHash": "0x84322d9cddbf35088f1e54e9a85c967a41a56a4f43445768125e61af166c7d31",
      "addressPrefix": 7391,
      "chainType": "PARACHAIN",
      "symbol": "UNQ",
      "existentialDeposit": "0",
      "hasNativeNft": true,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "genshiro": {
    "slug": "genshiro",
    "name": "Genshiro",
    "chainStatus": "ACTIVE",
    "providers": {
      "Equilibrium": "wss://node.genshiro.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2024,
      "relaySlug": "kusama",
      "genesisHash": "0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243",
      "addressPrefix": 68,
      "crowdloanUrl": "https://genshiro.equilibrium.io/en",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://genshiro.subscan.io/",
      "symbol": "GENS",
      "decimals": 10,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "genshiro_testnet": {
    "slug": "genshiro_testnet",
    "name": "Genshiro Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "testnet": "wss://testnet.genshiro.io"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xdec164ef73b27c5b7e404114305102018a2b5a4ddda665bb510ce896ad5ba78d",
      "addressPrefix": 68,
      "chainType": "RELAYCHAIN",
      "symbol": "TOKEN",
      "decimals": 9,
      "hasNativeNft": false,
      "supportSmartContract": [

      ],
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "subsocial_x": {
    "slug": "subsocial_x",
    "name": "SubsocialX",
    "chainStatus": "ACTIVE",
    "providers": {
      "subsocialx": "wss://para.f3joule.space"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2100,
      "relaySlug": "kusama",
      "genesisHash": "0x4a12be580bb959937a1c7a61d5cf24428ed67fa571974b4007645d1886e7c89f",
      "addressPrefix": 28,
      "crowdloanUrl": "https://app.subsocial.network/crowdloan",
      "chainType": "PARACHAIN",
      "symbol": "SUB",
      "existentialDeposit": "100000000",
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "zeitgeist": {
    "slug": "zeitgeist",
    "name": "Zeitgeist",
    "chainStatus": "ACTIVE",
    "providers": {
      "OnFinality": "wss://zeitgeist.api.onfinality.io/public-ws",
      "Dwellir": "wss://zeitgeist-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2101,
      "relaySlug": "kusama",
      "genesisHash": "0x1bf2a2ecb4a868de66ea8610f2ce7c8c43706561b6476031315f6640fe38e060",
      "addressPrefix": 73,
      "crowdloanUrl": "https://crowdloan.zeitgeist.pm/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://zeitgeist.subscan.io/",
      "symbol": "ZTG",
      "existentialDeposit": "50000000",
      "decimals": 10,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "sakura": {
    "slug": "sakura",
    "name": "Sakura",
    "chainStatus ": "ACTIVE",
    "providers": {
      "Clover": "wss://rpc.sakura.clover.finance"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2016,
      "relaySlug": "kusama",
      "genesisHash": "0x7b0f142a9299b0886595992f8cac58814c8956de6a31c77caca95db01370fc2c",
      "addressPrefix": 42,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://sakura.subscan.io/",
      "symbol": "SKU",
      "existentialDeposit": "500",
      "decimals": 10,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "shadow": {
    "slug": "shadow",
    "name": "Crust Shadow",
    "chainStatus": "ACTIVE",
    "providers": {
      "Crust": "wss://rpc-shadow.crust.network/"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2012,
      "relaySlug": "kusama",
      "genesisHash": "0xd4c0c08ca49dc7c680c3dac71a7c0703e5b222f4b6c03fe4c5219bb8f22c18dc",
      "addressPrefix": 66,
      "crowdloanUrl": "https://polkadot.js.org/apps/#/parachains/crowdloan",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://shadow.subscan.io/",
      "symbol": "CSM",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "uniqueNft": {
    "slug": "uniqueNft",
    "name": "Unique TestNet 2.0",
    "chainStatus": "ACTIVE",
    "providers": {
      "Unique": "wss://testnet2.unique.network"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x7cb0b5ec1431e348b7f531f02e5e6ba6d5983e26ba77b58335957f3d00585cbd",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "UNQ",
      "existentialDeposit": "0",
      "decimals": 15,
      "hasNativeNft": true,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "robonomics": {
    "slug": "robonomics",
    "name": "Robonomics",
    "chainStatus": "ACTIVE",
    "providers": {
      "Airalab": "wss://kusama.rpc.robonomics.network/",
      "Leemo": "wss://robonomics.leemo.me",
      "OnFinality": "wss://robonomics.api.onfinality.io/public-ws",
      "Samsara": "wss://robonomics.0xsamsara.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2048,
      "relaySlug": "kusama",
      "genesisHash": "0x631ccc82a078481584041656af292834e1ae6daab61d2875b4dd0c14bb9b17bc",
      "addressPrefix": 32,
      "crowdloanUrl": "https://robonomics.network/kusama-slot/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://robonomics.subscan.io/",
      "symbol": "XRT",
      "existentialDeposit": "1000",
      "decimals": 9,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "integritee": {
    "slug": "integritee",
    "name": "Integritee Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "Integritee": "wss://kusama.api.integritee.network",
      "OnFinality": "wss://integritee-kusama.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2015,
      "relaySlug": "kusama",
      "genesisHash": "0xf195ef30c646663a24a3164b307521174a86f437c586397a43183c736a8383c1",
      "addressPrefix": 13,
      "crowdloanUrl": "https://crowdloan.integritee.network/",
      "chainType": "PARACHAIN",
      "blockExplorer": "https://integritee.subscan.io/",
      "symbol": "TEER",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "integriteePolkadot": {
    "slug": "integriteePolkadot",
    "name": "Integritee Shell",
    "chainStatus": "ACTIVE",
    "providers": {
      "Integritee": "wss://polkadot.api.integritee.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2015,
      "relaySlug": "polkadot",
      "genesisHash": "0xe13e7af377c64e83f95e0d70d5e5c3c01d697a84538776c5b9bbe0e7d7b6034c",
      "addressPrefix": 13,
      "crowdloanUrl": "https://crowdloan.integritee.network/",
      "chainType": "PARACHAIN",
      "symbol": "TEER",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "crab": {
    "slug": "crab",
    "name": "Darwinia Crab",
    "chainStatus": "ACTIVE",
    "providers": {
      "OnFinality": "wss://darwinia-crab.api.onfinality.io/public-ws",
      "Darwinia_Network": "wss://crab-rpc.darwinia.network",
      "Dwellir": "wss://darwiniacrab-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x34f61bfda344b3fad3c3e38832a91448b3c613b199eb23e5110a635d71c13c65",
      "addressPrefix": 42,
      "crowdloanUrl": "https://crab.network/plo",
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://crab.subscan.io/",
      "symbol": "CRAB",
      "existentialDeposit": "0",
      "decimals": 9,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "crabParachain": {
    "slug": "crabParachain",
    "name": "Crab Parachain",
    "chainStatus": "ACTIVE",
    "providers": {
      "Crab": "wss://crab-parachain-rpc.darwinia.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2105,
      "relaySlug": "kusama",
      "genesisHash": "0xeac895d7768b17837a9c3a9f0280c01502c3ef40193df923490a0fa9c60ea076",
      "addressPrefix": 42,
      "crowdloanUrl": "https://crab.network/plo",
      "chainType": "PARACHAIN",
      "symbol": "CRAB",
      "existentialDeposit": "0",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "crabEvm": {
    "slug": "crabEvm",
    "name": "Darwinia Crab - EVM",
    "chainStatus": "ACTIVE",
    "providers": {
      "Darwinia_Network": "wss://crab-rpc.darwinia.network"
    },
    "isTestnet": false,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 44,
      "blockExplorer": "https://crab.subscan.io",
      "symbol": "CRAB",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "pangolin": {
    "slug": "pangolin",
    "name": "Pangolin",
    "chainStatus": "ACTIVE",
    "providers": {
      "Pangolin_Network": "wss://pangolin-rpc.darwinia.network"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xce44bd16fc276f9e457b452577b6c2678e57768260012af127479fed806da7e7",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://pangolin.subscan.io",
      "symbol": "PRING",
      "existentialDeposit": "0",
      "decimals": 9,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "pangolinEvm": {
    "slug": "pangolinEvm",
    "name": "Pangolin - EVM",
    "chainStatus": "ACTIVE",
    "providers": {
      "Pangolin_Network": "wss://pangolin-rpc.darwinia.network"
    },
    "isTestnet": true,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 43,
      "blockExplorer": "https://pangolin.subscan.io",
      "symbol": "PRING",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "chainx": {
    "slug": "chainx",
    "name": "Chain X",
    "chainStatus": "ACTIVE",
    "providers": {
      "chainx ": "wss://mainnet.chainx.org/ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6ac13efb5b368b97b4934cef6edfdd99c2af51ba5109bfb8dacc116f9c584c10",
      "addressPrefix": 44,
      "chainType": "RELAYCHAIN",
      "symbol": "PCX",
      "existentialDeposit": "0",
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "acala_testnet": {
    "slug": "acala_testnet",
    "name": "Acala Mandala TC7",
    "chainStatus": "ACTIVE",
    "providers": {
      "OnFinality": "wss://aca la-mandala.api.onfinality.io/public-ws",
      "Polkawallet": "wss://mandala.polkawallet.io"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x5c562e6300954998233c9a40b6b86f3028977e6d32d0da1af207738d19f98c1b",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "ACA",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "mangatax": {
    "slug": "mangatax",
    "name": "MangataX Public Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "mangatax": "wss://roccoco-testnet-collator-01.mangatafinance.cloud"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x797fe0d6ea6917b5a36707961d819dca1826628123510730425c3bafc65ccf59",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://mangatax.subscan.io/",
      "symbol": "MGAT",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "mangatax_para": {
    "slug": "mangatax_para",
    "name": "Mangata Kusama",
    "chainStatus": "ACTIVE",
    "providers": {
      "mangata": "wss://prod-kusama-collator-01.mangatafinance.cloud",
      "OnFinality": "wss://mangata-x.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2110,
      "relaySlug": "kusama",
      "genesisHash": "0xd611f22d291c5b7b69f1e105cca03352984c344c4421977efaa4cbdd1834e2aa",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "MGX",
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "encointer": {
    "slug": "encointer",
    "name": "Encointer",
    "chainStatus": "ACTIVE",
    "providers": {
      "Encointer Association": "wss://kusama.api.encointer.org"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 1001,
      "relaySlug": "kusama",
      "genesisHash": "0x7dd99936c1e9e6d1ce7d90eb6f33bea8393b4bf87677d675aa63c9cb3e8c5b5b",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://encointer.subscan.io/",
      "symbol": "KSM",
      "existentialDeposit": "3333333",
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "litmus": {
    "slug": "litmus",
    "name": "Litmus",
    "chainStatus": "ACTIVE",
    "providers": {
      "litmus": "wss://rpc.litmus-parachain.litentry.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2106,
      "relaySlug": "kusama",
      "genesisHash": "0xda5831fbc8570e3c6336d0d72b8c08f8738beefec812df21ef2afc2982ede09c",
      "addressPrefix": 131,
      "crowdloanUrl": "https://kusama-crowdloan.litentry.com/",
      "chainType": "PARACHAIN",
      "symbol": "LIT",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "litentry": {
    "slug": "litentry",
    "name": "Litentry",
    "chainStatus": "ACTIVE",
    "providers": {
      "Litentry": "wss://rpc.litentry-parachain.litentry.io",
      "Dwellir": "wss://litentry-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2013,
      "relaySlug": "polkadot",
      "genesisHash": "0x2fc8bb6ed7c0051bdcf4866c322ed32b6276572713607e3297ccf411b8f14aa9",
      "addressPrefix": 31,
      "crowdloanUrl": "https://crowdloan.litentry.com/",
      "chainType": "PARACHAIN",
      "symbol": "LIT",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "tinkernet": {
    "slug": "tinkernet",
    "name": "InvArch Tinker",
    "chainStatus": "ACTIVE",
    "providers": {
      "Invarch": "wss://tinker.invarch.network",
      "Light Client": "light://substrate-connect/kusama/tinkernet",
      "OnFinality": "wss://invarch-tinkernet.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2125,
      "relaySlug": "kusama",
      "genesisHash": "0xd42e9606a995dfe433dc7955dc2a70f495f350f373daa200098ae84437816ad2",
      "addressPrefix": 117,
      "crowdloanUrl": "https://invarch.network/tinkernet",
      "chainType": "PARACHAIN",
      "symbol": "TNKR",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "imbue_network": {
    "slug": "imbue_network",
    "name": "Imbue Kusama",
    "chainStatus": "ACTIVE",
    "providers": {
      "Imbue": "wss://imbue-kusama.imbue.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2121,
      "relaySlug": "kusama",
      "genesisHash": "0xca93a37c913a25fa8fdb33c7f738afc39379cb71d37874a16d4c091a5aef9f89",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "IMBU",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "subspace_test": {
    "slug": "subspace_test",
    "name": "Subspace Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "testnet": "wss://test-rpc.subspace.network/ws"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x332ef6e751e25426e38996c51299dfc53bcd56f40b53dce2b2fc8442ae9c4a74",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "symbol": "tSSC",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "subspace_gemini_2a": {
    "slug": "subspace_gemini_2a",
    "name": "Subspace Gemini 2a",
    "chainStatus": "ACTIVE",
    "providers": {
      "Europe 0": "wss://eu-0.gemini-2a.subspace.network/ws",
      "Europe 1": "wss://eu-1.gemini-2a.subspace.network/ws",
      "Europe  2": "wss://eu-2.gemini-2a.subspace.network/ws"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x43d10ffd50990380ffe6c9392145431d630ae67e89dbc9c014cac2a417759101",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://subspace.subscan.io",
      "symbol": "tSSC",
      "existentialDeposit": "500",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "subspace_gemini_3c": {
    "slug": "subspace_gemini_3c",
    "name": "Subspace Gemini 3c",
    "chainStatus": "ACTIVE",
    "providers": {
      "Europe 0": "wss://eu-0.gemini-3c.subspace.network/ws",
      "Europe 1": "wss://eu-1.gemini-3c.subspace.network/ws",
      "Europe 2": "wss://eu-2.gemini-3c.subspace.network/ws"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xab946a15b37f59c5f4f27c5de93acde9fe67a28e0b724a43a30e4fe0e87246b7",
      "addressPrefix": 2254,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://subspace.github.io/blockexplorer/#/gemini-3c",
      "symbol": "tSSC",
      "existentialDeposit": "500",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "origintrail": {
    "slug": "origintrail",
    "name": "OriginTrail",
    "chai nStatus": "ACTIVE",
    "providers": {
      "TraceLabs": "wss://parachain-rpc.origin-trail.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2043,
      "relaySlug": "polkadot",
      "genesisHash": "0xe7e0962324a3b86c83404dbea483f25fb5dab4c224791c81b756cfc948006174",
      "addressPrefix": 101,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://origintrail.subscan.io/",
      "symbol": "OTP",
      "existentialDeposit": "1000000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "dorafactory": {
    "slug": "dorafactory",
    "name": "Dorafactory",
    "chainStatus": "ACTIVE",
    "providers": {
      "DORA": "wss://kusama.dorafactory.org"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2115,
      "relaySlug": "kusama",
      "genesisHash": "0x577d331ca43646f547cdaa07ad0aa387a383a93416764480665103081f3eaf14",
      "addressPrefix": 128,
      "chainType": "PARACHAIN",
      "symbol": "DORA",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "bajun": {
    "slug": "bajun",
    "name": "Bajun Kusama",
    "chainStatus": "ACTIVE",
    "providers": {
      "AjunaNetwork": "wss://rpc-parachain.bajun.network",
      "OnFinality": "wss://bajun.api.onfinality.io/public-ws",
      "Dwellir": "wss://bajun-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2119,
      "relaySlug": "kusama",
      "genesisHash": "0x35a06bfec2edf0ff4be89a6428ccd9ff5bd0167d618c5a0d4341f9600a458d14",
      "addressPrefix": 1337,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://bajun.subscan.io/",
      "symbol": "BAJU",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "listen": {
    "slug": "listen",
    "name": "Listen Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "Listen Foundation 1": "wss://rpc.mainnet.listen.io",
      "Listen Foundation 2": "wss://wss.mainnet.listen.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2118,
      "relaySlug": "kusama",
      "genesisHash": "0x48eb7f3fff34e702aa2b504674df8f8afbf9889f804e3088c0cb662e433552a0",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "LT",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "kabocha": {
    "slug": "kabocha",
    "name": "Kabocha",
    "chainStatus": "ACTIVE",
    "providers": {
      "JelliedOwl": "wss://kabocha.jelliedowl.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2113,
      "relaySlug": "kusama",
      "genesisHash": "0xfeb426ca713f0f46c96465b8f039890370cf6bfd687c9076ea2843f58a6ae8a7",
      "addressPrefix": 27,
      "chainType": "PARACHAIN",
      "symbol": "KAB",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "gmdie": {
    "slug": "gmdie",
    "name": "GM Parachain",
    "chainStatus": "ACTIVE",
    "providers": {
      "gmDie": "wss://kusama.gmordie.com",
      "bLdNodes": "wss://ws.gm.bldnodes.org",
      "TerraBioDAO": "wss://ws-node-gm.terrabiodao.org"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2123,
      "relaySlug": "kusama",
      "genesisHash": "0x19a3733beb9cb8a970a308d835599e9005e02dc007a35440e461a451466776f8",
      "addressPrefix": 7013,
      "chainType": "PARACHAIN",
      "symbol": "FREN",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "ternoa": {
    "slug": "ternoa",
    "name": "Ternoa",
    "chainStatus": "ACTIVE",
    "providers": {
      "ternoa": "wss://mainnet.ternoa.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6859c81ca95ef624c9dfe4dc6e3381c33e5d6509e35e147092bfbc780f777c4e",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "CAPS",
      "existentialDeposit": "150000000000000000",
      "decimals": 18,
      "supportStaking": true,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "tanganika": {
    "slug": "tanganika",
    "name": "DataHighway Tanganika",
    "chainStatus": "ACTIVE",
    "providers": {
      "tanganika": "wss://tanganika.datahighway.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2116,
      "relaySlug": "kusama",
      "gene sisHash": "0xeacdd2d5b42de9769ccbb6e8d9013ab0d90ab105bf601d4aac53e874c145ec21",
      "addressPrefix": 33,
      "chainType": "PARACHAIN",
      "symbol": "DHX",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "pendulum": {
    "slug": "pendulum",
    "name": "Pendulum",
    "chainStatus": "ACTIVE",
    "providers": {
      "Pendulum": "wss://rpc-pendulum.prd.pendulumchain.tech"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2094,
      "relaySlug": "polkadot",
      "genesisHash": "0x5d3c298622d5634ed019bf61ea4b71655030015bde9beb0d6a24743714462c86",
      "addressPrefix": 56,
      "chainType": "PARACHAIN",
      "symbol": "PEN",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "gear_testnet": {
    "slug": "gear_testnet",
    "name": "Gear Staging Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "gear": "wss://rpc-node.gear-tech.io"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6f022bd353c56b3e441507e1173601fd9dc0fb7547e6a95bbaf9b21f311bcab6",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "Unit",
      "existentialDeposit": "500",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "snow": {
    "slug": "snow",
    "name": "Snow",
    "chainStatus": "ACTIVE",
    "providers": {
      "snow": "wss://snow-rpc.icenetwork.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2129,
      "relaySlug": "kusama",
      "genesisHash": "0xb34f6cd03a41f0fab38ba9fd5b11cce5f303633c46f39f0c6fdc7c3c602bafa9",
      "addressPrefix": 2207,
      "chainType": "PARACHAIN",
      "blockExplorer": "https://snow.subscan.io/",
      "symbol": "ICZ",
      "existentialDeposit": "10000000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "arctic_testnet": {
    "slug": "arctic_testnet",
    "name": "Arctic Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "arctic": "wss://arctic-rpc.icenetwork.io:9944"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x5c4207232d344710a176b1982471acf9b058f40b4a57470c25410b68b684c766",
      "addressPrefix": 2207,
      "chainType": "RELAYCHAIN",
      "symbol": "ICY",
      "existentialDeposit": "10000000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "ternoa_alphanet": {
    "slug": "ternoa_alphanet",
    "name": "Ternoa Alphanet",
    "chainStatus": "ACTIVE",
    "providers": {
      "ternoa": "wss://alphanet.ternoa.com"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x18bcdb75a0bba577b084878db2dc2546eb21504eaad4b564bb7d47f9d02b6ace",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "CAPS",
      "existentialDeposit": "150000000000000000",
      "decimals": 18,
      "supportStaking": true,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "calamari_test": {
    "slug": "calamari_test",
    "name": "Calamari Staging",
    "chainStatus": "ACTIVE",
    "providers": {
      "calamari_test": "wss://c1.calamari.seabird.systems"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x2ae061f08422b6503b8aa5f401242a209999669c3b8945f814dc096fb1a977bd",
      "addressPrefix": 78,
      "chainType": "RELAYCHAIN",
      "symbol": "KMA",
      "existentialDeposit": "100000000000",
      "decimals": 12,
      "supportStaking": true,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "boba": {
    "slug": "boba",
    "name": "Boba Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "Read RPC": "https://lightning-replica.boba.network",
      "Write RPC": "https://mainnet.boba.network"
    },
    "isTestnet": false,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 288,
      "blockExplorer": "https://blockexplorer.boba.network",
      "symbol": "ETH",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "boba_rinkeby": {
    "slug": "boba_rinkeby",
    "name": "Boba Rinkeby (Testnet)",
    "chainStatus": "ACTIVE",
    "providers": {
      "RPC": "https://rinkeby.boba.network"
    },
    "isTestnet": true,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 28,
      "blockExplorer": "https://blockexplorer.rinkeby.boba.network",
      "symbol": "ETH",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "bobabeam": {
    "slug": "bobabeam",
    "name": "Bobabeam",
    "chainStatus": "ACTIVE",
    "providers": {
      "RPC": "https://bobabeam.boba.network",
      "Replica RPC": "https://replica.bobabeam.boba.network"
    },
    "isTestnet": false,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 1294,
      "blockExplorer": "https://blockexplorer.bobabeam.boba.network",
      "symbol": "BOBA",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "kilt_peregrine": {
    "slug": "kilt_peregrine",
    "name": "KILT Peregrine",
    "chainStatus": "ACTIVE",
    "providers": {
      "kilt": "wss://peregrine.kilt.io/parachain-public-ws/"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xa0c6e3bac382b316a68bca7141af1fba507207594c761076847ce358aeedcc21",
      "addressPrefix": 38,
      "chainType": "RELAYCHAIN",
      "symbol": "PILT",
      "existentialDeposit": "10000000000000",
      "decimals": 15,
      "supportStaking": true,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "xx_network": {
    "slug": "xx_network",
    "name": "XX Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "XX Foundation": "wss://rpc.xx.network",
      "Dwellir": "wss://xxnetwork-rpc.dwellir.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x50dd5d206917bf10502c68fb4d18a59fc8aa31586f4e8856b493e43544aa82aa",
      "addressPrefix": 55,
      "chainType": "RELAYCHAIN",
      "symbol": "xx",
      "existentialDeposit": "1000000000",
      "decimals": 9,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "watr_network": {
    "slug": "watr_network",
    "name": "Watr Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "watr": "wss://rpc.dev.watr.org"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xb53c620c41860278fa3068a5367c8eedceefce8a7c29237d830bc09a71737b5d",
      "addressPrefix": 19,
      "chainType": "RELAYCHAIN",
      "symbol": "WATRD",
      "existentialDeposit": "10000000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "watr_network_evm": {
    "slug": "watr_network_evm",
    "name": "Watr Network - EVM",
    "chainStatus": "ACTIVE",
    "providers": {
      "watr": "https://rpc.dev.watr.org"
    },
    "isTestnet": true,
    "substrateInfo": null,
    "evmInfo": {
      "evmChainId": 688,
      "symbol": "WATRD",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "fusotao": {
    "slug": "fusotao",
    "name": "Fusotao",
    "chainStatus": "ACTIVE",
    "providers": {
      "fusotao": "wss://gateway.mainnet.octopus.network/fusotao/0efwa9v0crdx4dg3uj8jdmc5y7dj4ir2"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xa7113159e275582ee71ee499b24378a2416f34dc5aaf714443f0d11c6c3d99d3",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "TAO",
      "existentialDeposit": "1",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "discovol": {
    "slug": "discovol",
    "name": "Discovol",
    "chainStatus": "ACTIVE",
    "providers": {
      "discovol": "wss://gateway.mainnet.octopus.network/discovol/afpft46l1egfhrv8at5pfyrld03zseo1"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x2dfbcf7700297bd8ce07a4665ab39e2ed1a3790df783b936988c85eb87e38bee",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "DISC",
      "existentialDeposit": "1000000000000",
      "decimals": 14,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "discovol_testnet": {
    "slug": "discovol_testnet",
    "name": "Discovol Testnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "discovol_testnet": "wss://gateway.testnet.octopus.network/discovol/o4urcey87y4n1qimhfrad92gzs315z9h"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xdc1922b7f60b4925091bbfdd912684c449de7a7cdc5592e9eab11fee55fa53ec",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "DISC",
      "existentialDeposit": "1000000000000",
      "decimals": 14,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "atocha": {
    "slug": "atocha",
    "name": "Atocha",
    "chainStatus": "ACTIVE",
    "providers": {
      "atocha": "wss://gateway.mainnet.octopus.network/atocha/jungxomf4hdcfocwcalgoiz64g9avjim"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x1f11f745be512a17f39b571a9391b5ee6747b900c1db98176828e4a1346dbe9b",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "ATO",
      "existentialDeposit": "1000000000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "myriad": {
    "slug": "myriad",
    "name": "Myriad",
    "chainStatus": "ACTIVE",
    "providers": {
      "myriad": "wss://gateway.mainnet.octopus.network/myriad/a4cb0a6e30ff5233a3567eb4e8cb71e0"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x74ed91fbc18497f011290f9119a2217908649170337b6414a2d44923ade07063",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "MYRIA",
      "existentialDeposit": "1000000000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "deBio": {
    "slug": "deBio",
    "name": "DeBio",
    "chainStatus": "ACTIVE",
    "providers": {
      "deBio": "wss://gateway.mainnet.octopus.network/debionetwork/ae48005a0c7ecb4053394559a7f4069e"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x996800af345b3109acdada9913e36d1efa98b89e7dcd0b61b70fdbfc13b2fa50",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "DBIO",
      "existentialDeposit": "10000000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "barnacle": {
    "slug": "barnacle",
    "name": "Barnacle",
    "chainStatus": "ACTIVE",
    "providers": {
      "barnacle": "wss://gateway.testnet.octopus.network/barnacle0928/9mw012zuf27soh7nrrq3a4p0s2ti3cyn"
    },
    "isTestnet": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xb3d6017fd8f67d1d9970a010ee1bbf0bc12c5ff2d2c7b9c311a11332cb7b3a53",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "BAR",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "barnacle_evm": {
    "slug": "barnacle_evm",
    "name": "Barnacle EVM",
    "chainStatus": "ACTIVE",
    "providers": {
      "barnacle_evm": "wss://gateway.testnet.octopus.network/barnacle-evm/wj1hhcverunusc35jifki19otd4od1n5"
    },
    "isTestnet": true,
    "substrateInfo": null,
    "evmInfo": {
      "symbol": "EBAR",
      "decimals": 18,
      "existentialDeposit": "0",
      "supportSmartContract": [
        "ERC20",
        "ERC721"
      ]
    }
  },
  "collectives": {
    "slug": "collectives",
    "name": "Polkadot Collectives",
    "chainStatus": "ACTIVE",
    "providers": {
      "viaParity": "wss://polkadot-collectives-rpc.polkadot.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 1001,
      "relaySlug": "polkadot",
      "genesisHash": "0x46ee89aa2eedd13e988962630ec9fb7565964cf5023bb351f2b6b25c1b68b0b2",
      "addressPrefix": 0,
      "chainType": "PARACHAIN",
      "symbol": "DOT",
      "existentialDeposit": "1000000000",
      "decimals": 10,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "ajunaPolkadot": {
    "slug": "ajunaPolkadot",
    "name": "Ajuna Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "viaAjunaNetwork": "wss://rpc-parachain.ajuna.network",
      "OnFinality": "wss://ajuna.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2028,
      "relaySlug": "polkadot",
      "genesisHash": "0xe358eb1d11b31255a286c12e44fe6780b7edb171d657905a97e39f71d9c6c3ee",
      "addressPrefix": 1328,
      "chainType": "PARACHAIN",
      "symbol": "AJUN",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "bitgreen": {
    "slug": "bitgreen",
    "name": "Bitgreen",
    "chainStatus": "ACTIVE",
    "providers": {
      "viaBitgreen": "wss://mainnet.bitgreen.org"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2048,
      "relaySlug": "polkadot",
      "genesisHash": "0xc14597baeccb232d662770d2d50ae832ca8c3192693d2b0814e6433f2888ddd6",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "BBB",
      "existentialDeposit": "1000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "frequency": {
    "slug": "frequency",
    "name": "Frequency",
    "chainStatus": "ACTIVE",
    "providers": {
      "Frequency 0": "wss://0.rpc.frequency.xyz",
      "Frequency 1": "wss://1.rpc.frequency.xyz"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2091,
      "relaySlug": "polkadot",
      "genesisHash": "0x4a587bf17a404e3572747add7aab7bbe56e805a5479c6c436f07f36fcc8d3ae1",
      "addressPrefix": 90,
      "chainType": "PARACHAIN",
      "symbol": "FRQCY",
      "existentialDeposit": "1000000",
      "decimals": 8,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "hashedNetwork": {
    "slug": "hashedNetwork",
    "name": "Hashed Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "Hashed Systems": "wss://c1.hashed.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2093,
      "relaySlug": "polkadot",
      "genesisHash": "0x331645ae3db556c7754a82f79cece12cce3420975d5b0219d51b1cb4f6ddc21c",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "HASH",
      "existentialDeposit": "1000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "kapex": {
    "slug": "kapex",
    "name": "Kapex",
    "chainStatus": "ACTIVE",
    "providers": {
      "viaTotem": "wss://k-ui.kapex.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2007,
      "relaySlug": "polkadot",
      "genesisHash": "0x7838c3c774e887c0a53bcba9e64f702361a1a852d5550b86b58cd73827fa1e1e",
      "addressPrefix": 2007,
      "chainType": "PARACHAIN",
      "symbol": "KPX",
      "existentialDeposit": "1",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  " kylinNetwork": {
    "slug": " kylinNetwork",
    "name": "Kylin Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "Kylin Network": "wss://polkadot.kylin-node.co.uk"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2052,
      "relaySlug": "polkadot",
      "genesisHash": "0xf2584690455deda322214e97edfffaf4c1233b6e4625e39478496b3e2f5a44c5",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "KYL",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "ipci": {
    "slug": "ipci",
    "name": "DAO IPCI",
    "chainStatus": "ACTIVE",
    "providers": {
      "viaAiralab": "wss://kusama.rpc.ipci.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2222,
      "relaySlug": "kusama",
      "genesisHash": "0x6f0f071506de39058fe9a95bbca983ac0e9c5da3443909574e95d52eb078d348",
      "addressPrefix": 32,
      "chainType": "PARACHAIN",
      "symbol": "MITO",
      "existentialDeposit": "1000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "kico": {
    "slug": "kico",
    "name": "KICO",
    "chainStatus": "ACTIVE",
    "providers": {
      "DICO Foundation": "wss://rpc.kico.dico.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2107,
      "relaySlug": "kusama",
      "genesisHash": "0x52149c30c1eb11460dce6c08b73df8d53bb93b4a15d0a2e7fd5dafe86a73c0da",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "KICO",
      "existentialDeposit": "100000000000000",
      "decimals": 14,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "luhnNetwork": {
    "slug": "luhnNetwork",
    "name": "Luhn Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "Hashed Systems": "wss://c1.luhn.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2232,
      "relaySlug": "kusama",
      "genesisHash": "0xba713fdbf674083c5541c1439b83d8e593e1105f35f11954bcc50d0bf9607873",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "LUHN",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "pichiu": {
    "slug": "pichiu",
    "name": "Pichiu Network",
    "chainStatus": "ACTIVE",
    "providers": {
      "Kylin Network": "wss://kusama.kylin-node.co.uk",
      "OnFinality": "wss://pichiu.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2102,
      "relaySlug": "kusama",
      "genesisHash": "0x0e06260459b4f9034aba0a75108c08ed73ea51d2763562749b1d3600986c4ea5",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "PCHU",
      "existentialDeposit": "1000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "riodefi": {
    "slug": "riodefi",
    "name": "RioDeFi",
    "chainStatus": "ACTIVE",
    "providers": {
      "RioProtocol": "wss://rio-kusama.riocorenetwork.com"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": 2227,
      "relaySlug": "kusama",
      "genesisHash": "0x70310f31bdb878e9920121807ee46236bda2e00c10eb105a40b386bd7ad16906",
      "addressPrefix": 42,
      "chainType": "PARACHAIN",
      "symbol": "UNIT",
      "existentialDeposit": "1000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "automata": {
    "slug": "automata",
    "name": "Automata",
    "chainStatus": "ACTIVE",
    "providers": {
      "Automata Network": "wss://api.ata.network",
      "OnFinality": "wss://automata.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xc8eda34601b5a48c73f47ee39a3a86a858c34f044185b17dc7d5ad155813dc63",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "ATA",
      "existentialDeposit": "1000000000000000000",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "creditcoin": {
    "slug": "creditcoin",
    "name": "Creditcoin",
    "chainStatus": "ACTIVE",
    "providers": {
      "Creditcoin Foundation": "wss://rpc.mainnet.creditcoin.network/ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xdd954cbf4000542ef1a15bca509cd89684330bee5e23766c527cdb0d7275e9c2",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "CTC",
      "existentialDeposit": "500",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "crownSterling": {
    "slug": "crownSterling",
    "name": "Crown Sterling",
    "chainStatus": "ACTIVE",
    "providers": {
      "Crown Sterling": "wss://blockchain.crownsterling.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xce24ecf534daea9cd46e425659ef4950a57dd29d07272b423220129c323a64b7",
      "addressPrefix": 0,
      "chainType": "RELAYCHAIN",
      "symbol": "CSOV",
      "existentialDeposit": "1",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "dockPosMainnet": {
    "slug": "dockPosMainnet",
    "name": "Dock",
    "chainStatus": "ACTIVE",
    "providers": {
      "Dock Association": "wss://mainnet-node.dock.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae",
      "addressPrefix": 22,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://dock.subscan.io",
      "symbol": "DOCK",
      "existentialDeposit": "500",
      "decimals": 6,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "kusari": {
    "slug": "kusari",
    "name": "Kusari",
    "chainStatus": "ACTIVE",
    "providers": {
      "Swapdex": "wss://ws.kusari.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x4959f8d87d40d9ef516459ff177111bb03d875e5a7ed69282f6b689a707b69f5",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "KSI",
      "existentialDeposit": "0",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "logion": {
    "slug": "logion",
    "name": "logion Standalone",
    "chainStatus": "ACTIVE",
    "providers": {
      "Logion": "wss://rpc01.logion.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xe9d7420a5f73edef005ccb8e043500aa5b2458f173912184ea93c14dc035a203",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "LGNT",
      "existentialDeposit": "500",
      "decimals": 18,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "neatcoin": {
    "slug": "neatcoin",
    "name": "Neatcoin",
    "chainStatus": "ACTIVE",
    "providers": {
      "Neatcoin": "wss://rpc.neatcoin.org/ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xfbb541421d30423c9a753ffa844b64fd44d823f513bf49e3b73b3a656309a595",
      "addressPrefix": 48,
      "chainType": "RELAYCHAIN",
      "symbol": "NEAT",
      "existentialDeposit": "10000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "nftmart": {
    "slug": "nftmart",
    "name": "NFTMart",
    "chainStatus": "ACTIVE",
    "providers": {
      "NFTMart": "wss://mainnet.nftmart.io/rpc/ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xfcf9074303d8f319ad1bf0195b145871977e7c375883b834247cb01ff22f51f9",
      "addressPrefix": 12191,
      "chainType": "RELAYCHAIN",
      "symbol": "NMT",
      "existentialDeposit": "1000000000000",
      "decimals": 12,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "polymesh": {
    "slug": "polymesh",
    "name": "Polymesh Mainnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "Polymath": "wss://mainnet-rpc.polymesh.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6fbd74e5e1d0a 61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063",
      "addressPrefix": 12,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://polymesh.subscan.io/",
      "symbol": "POLYX",
      "existentialDeposit": "0",
      "decimals": 6,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "supportStaking": false
    },
    "evmInfo": null
  },
  "riochain": {
    "slug": "riochain",
    "name": "RioChain",
    "chainStatus": "ACTIVE",
    "providers": {
      "RioChain": "wss://node.v1.riochain.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xd8c6dc2e057b94d05c870a7b39bfb30ae10202ed9cf7731d28dafcfe9458e307",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "RFUEL",
      "existentialDeposit": "0",
      "decimals": 12,
      "supportStaking": false,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "sherpax": {
    "slug": "sherpax",
    "name": "SherpaX",
    "chainStatus": "ACTIVE",
    "providers": {
      "ChainX": "wss://mainnet.sherpax.io"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xe195ef16d0c628b5cab1486a233865def6e71f8b7814dd058a6b93a85118b796",
      "addressPrefix": 44,
      "chainType": "RELAYCHAIN",
      "symbol": "KSX",
      "existentialDeposit": "10000000000",
      "decimals": 18,
      "supportStaking": false,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "sora-substrate": {
    "slug": "sora-substrate",
    "name": "SORA",
    "chainStatus": "ACTIVE",
    "providers": {
      "SORA Parliament Ministry of Finance #2": "wss://mof2.sora.org",
      "SORA Parliament Ministry of Finance": "wss://ws.mof.sora.org",
      "SORA Parliament Ministry of Finance #3": "wss://mof3.sora.org",
      "OnFinality": "wss://sora.api.onfinality.io/public-ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5",
      "addressPrefix": 69,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://sora.subscan.io",
      "symbol": "XOR",
      "existentialDeposit": "0",
      "decimals": 18,
      "supportStaking": false,
      "hasNativeNft": false,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "swapdex": {
    "slug": "swapdex",
    "name": "Swapdex",
    "chainStatus": "ACTIVE",
    "providers": {
      "Swapdex": "wss://ws.swapdex.network"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x15bac4f0a9aad3f46c5fc067fdb59b3ff29738dcd491fe5e37b4b76121163471",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "SDX",
      "existentialDeposit": "0",
      "decimals": 18,
      "supportStaking": false,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "3dpass": {
    "slug": "3dpass",
    "name": "3DPass",
    "chainStatus": "ACTIVE",
    "providers": {
      "3dpass": "wss://rpc2.3dpass.org"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66",
      "addressPrefix": 71,
      "chainType": "RELAYCHAIN",
      "symbol": "P3D",
      "existentialDeposit": "1",
      "decimals": 12,
      "supportStaking": false,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "alephSmartNet": {
    "slug": "alephSmartNet",
    "name": "Aleph Zero Smartnet",
    "chainStatus": "ACTIVE",
    "providers": {
      "alephSmartNet": "wss://ws-smartnet.test.azero.dev"
    },
    "isTestnet ": true,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6153e2745a56d188365372b5cce283dfddbb96b17e9bb396cceb4630103ff92b",
      "addressPrefix": 42,
      "chainType": "RELAYCHAIN",
      "symbol": "SZERO",
      "existentialDeposit": "500",
      "decimals": 12,
      "supportStaking": false,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  },
  "kulupu": {
    "slug": "kulupu",
    "name": "Kulupu",
    "chainStatus": "ACTIVE",
    "providers": {
      "Kulupu": "wss://rpc.kulupu.corepaper.org/ws"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba",
      "addressPrefix": 16,
      "chainType": "RELAYCHAIN",
      "blockExplorer": "https://kulupu.subscan.io",
      "symbol": "KLP",
      "existentialDeposit": "100000",
      "decimals": 12,
      "supportStaking": false,
      "hasNativeNft": false,
      "supportSmartContract": null
    },
    "evmInfo": null
  },
  "joystream": {
    "slug": "joystream",
    "name": "Joystream",
    "chainStatus": "ACTIVE",
    "providers": {
      "Jsgenesis": "wss://rpc.joystream.org"
    },
    "isTestnet": false,
    "substrateInfo": {
      "paraId": null,
      "relaySlug": null,
      "genesisHash": "0x6b5e488e0fa8f9821110d5c13f4c468abcd43ce5e297e62b34c53c3346465956",
      "addressPrefix": 126,
      "chainType": "RELAYCHAIN",
      "symbol": "JOY",
      "existentialDeposit": "266666560",
      "decimals": 10,
      "supportStaking": false,
      "hasNativeNft": false,
      "supportSmartContract": null,
      "blockExplorer": null
    },
    "evmInfo": null
  }
}

const tokenMap = {}

const migrated = [
  'polkadot',
  'kusama',
  'moonbeam',
  'acala',
  'alephTest',
  'ethereum',
  'astar',
  'astarEvm',
  'shiden',
  'shidenEvm',
  'shibuya',
  'shibuyaEvm',
  'westend',
  'rococo',
  'bitcountry',
  'equilibrium_parachain',
  'moonbase',
  'moonriver',
  'turingStaging',
  'turing',
  'bifrost',
  'bifrost_dot',
  'bifrost_testnet',
  'calamari',
  'amplitude',
  'amplitude_test',
  'bobabase'
]
Object.values(chainMap).forEach((chain) => {
  if (!migrated.includes(chain.slug)) {
    if (chain.substrateInfo) {
      const slug =`${chain.slug}-NATIVE-${chain.substrateInfo.symbol}`
      tokenMap[slug] = {
        "originChain": chain.slug,
        "slug": slug,
        "name": chain.name,
        "symbol": chain.substrateInfo.symbol,
        "decimals": chain.substrateInfo.decimals,
        "priceId": null,
        "minAmount": chain.substrateInfo.existentialDeposit,
        "assetType": "NATIVE",
        "metadata": null,
        "multiChainAsset": null,
        "hasValue": !chain.isTestnet
      }
    } else {
      const slug =`${chain.slug}-NATIVE-${chain.evmInfo.symbol}`
      tokenMap[slug] = {
        "originChain": chain.slug,
        "slug": slug,
        "name": chain.name,
        "symbol": chain.evmInfo.symbol,
        "decimals": chain.evmInfo.decimals,
        "priceId": null,
        "minAmount": "0",
        "assetType": "NATIVE",
        "metadata": null,
        "multiChainAsset": null,
        "hasValue": !chain.isTestnet
      }
    }
  }
})

const json = JSON.stringify(tokenMap);

import * as fs from "fs";

fs.writeFile('native-tokens.json', json, 'utf8', () => {});