import * as neonCore from "@cityofzion/neon-core";
export declare const api: typeof import("../../neon-api/lib/plugin"), nep5: typeof import("../../neon-nep5/lib/plugin"), settings: typeof neonCore.settings, sc: typeof neonCore.sc, rpc: typeof neonCore.rpc, wallet: typeof neonCore.wallet, CONST: typeof neonCore.CONST, u: typeof neonCore.u, tx: typeof neonCore.tx, logging: typeof neonCore.logging;
declare const _default: {
    sendAsset: typeof import("../../neon-api/lib").sendAsset;
    claimGas: typeof import("../../neon-api/lib").claimGas;
    doInvoke: typeof import("../../neon-api/lib").doInvoke;
    setupVote: typeof import("../../neon-api/lib").setupVote;
    create: {
        account: (k: string) => neonCore.wallet.Account;
        privateKey: () => string;
        signature: (tx: string, privateKey: string) => string;
        wallet: (k: neonCore.wallet.WalletJSON) => neonCore.wallet.Wallet;
        claimTx: () => neonCore.tx.ClaimTransaction;
        contractTx: () => neonCore.tx.ContractTransaction;
        invocationTx: () => neonCore.tx.InvocationTransaction;
        stateTx: () => neonCore.tx.StateTransaction;
        contractParam: (type: "Signature" | "Boolean" | "Integer" | "Hash160" | "Hash256" | "ByteArray" | "PublicKey" | "String" | "Array" | "InteropInterface" | "Void", value: any) => neonCore.sc.ContractParam;
        script: typeof neonCore.sc.createScript;
        scriptBuilder: () => neonCore.sc.ScriptBuilder;
        deployScript: (args: any) => neonCore.sc.ScriptBuilder;
        rpcClient: (net: string, version: string) => neonCore.rpc.RPCClient;
        query: (req: neonCore.rpc.RPCRequest) => neonCore.rpc.Query;
        network: (net: Partial<neonCore.rpc.NetworkJSON>) => neonCore.rpc.Network;
        stringStream: (str?: string | undefined) => neonCore.u.StringStream;
        fixed8: (i?: string | number | undefined) => neonCore.u.Fixed8;
    };
    deserialize: {
        attribute: typeof neonCore.tx.TransactionAttribute.deserialize;
        input: typeof neonCore.tx.TransactionInput.deserialize;
        output: typeof neonCore.tx.TransactionOutput.deserialize;
        script: typeof neonCore.tx.Witness.deserialize;
        tx: typeof neonCore.tx.Transaction.deserialize;
    };
    is: {
        address: typeof neonCore.wallet.isAddress;
        publicKey: typeof neonCore.wallet.isPublicKey;
        encryptedKey: typeof neonCore.wallet.isNEP2;
        privateKey: typeof neonCore.wallet.isPrivateKey;
        wif: typeof neonCore.wallet.isWIF;
        scriptHash: typeof neonCore.wallet.isScriptHash;
    };
    sign: {
        hex: typeof neonCore.wallet.sign;
        message: (msg: string, privateKey: string) => string;
    };
    verify: {
        hex: typeof neonCore.wallet.verify;
        message: (msg: string, sig: string, publicKey: string) => boolean;
    };
    encrypt: {
        privateKey: typeof neonCore.wallet.encrypt;
    };
    decrypt: {
        privateKey: typeof neonCore.wallet.decrypt;
    };
    add: {
        network: (network: neonCore.rpc.Network, override?: boolean) => boolean;
    };
    remove: {
        network: (name: string) => boolean;
    };
    u: typeof neonCore.u;
    CONST: typeof neonCore.CONST;
};
export default _default;
//# sourceMappingURL=index.d.ts.map