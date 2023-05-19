# 🥷 IYKYK 🎭

KYC without doxxing yourself. Prove your identity to a third party without disclosing it.

Powered by [Sismo](https://www.sismo.io/) and [SumSub](https://sumsub.com/)

## Architecture

Diagram: TBC

Flow:

1. Do the KYC with a private wallet A to a reliable KYC provider like [SumSub](https://sumsub.com/). If valid, the wallet will be added to the Sismo Data Group dedicated to KYC Users.
1. With your [Sismo Vault](https://vault-beta.sismo.io/), prove you own the wallet A
1. Login to the third party (e.g. a DEX) with a different wallet and demonstrate your KYC proving with [Sismo Connect](https://docs.sismo.io/sismo-docs/what-is-sismo/sismo-a-communication-protocol) that you belong to the Sismo Data Group of KYC Users.

Properties:

1. The third party knows only you did a KYC but cannot access to your identity.
1. The KYC provider cannot access to your transaction history on the third parties.
1. Only you can disclose the link.