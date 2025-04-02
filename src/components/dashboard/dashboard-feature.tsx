/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3X48P6bmUStNiEsKTXUnEZ1MZ3GD4h5YWRj8yPbS1EvtySCi2pB4QMyNsrgsmmLsymjqBfnRGfkbLLjvdX4XkriC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yUnFAFufNRPLGnmtJ8MefHzwWs4NKbZTioi9EtPanYgzGb4KjKYwztsWCWe3ZtQ75NPoP77vDQY6Gi84wKQho6P",
  "key1": "CXaXrNJbn1eqBD9dzWxh3NVNLdLqE76JKdVWidE6XAA8Mh8gBmdWd2QbdAQbik2QXBtKuavwnLsmYsfBjjbyaNf",
  "key2": "318JvMx3fvWNiBDVLSFeAAr9MY3hzGyUTuNNZGqKwxE64QcJbN32BGp8SWepeKv8dbWjvfXnTJPk1vPU3MXjRhXX",
  "key3": "H3a3eMaPgYeqwn12Hg1iWucXTdfEeJHriuNBPBHfq9Bj4ifeZeBSZwns1wmx8xiyTsrhkHG1e85FxioCdq3RMy9",
  "key4": "2NbtqxopV84g3yiGPoKKTZ2pWMwkFFHCwnSdbgzS8q6mq1fH6mxrFcEkqWSjRAPkHThvCYSAHUVRixQ1DGGp78uR",
  "key5": "4RvCGfdewkqL4yUcToN9A9CS5CcrMKbUegmcUzCsv68m7DHrRmf2se6PHxo6ULWtkiJAvZiYZ3fk15NdsCdZ7WMs",
  "key6": "41VQJmpmcvFagsE9ZATX8doaUXoZ2Dm6G8jA3cKoUK2St7f5ckbLnjGK2TwZxoKNWi2PkiP5fUTJPk8s6r8iLvRi",
  "key7": "8UWwe6p7UjdQKyGkL3WbnmVLMxSyQeZ8uSNRMuaRQD3bf5PU9xaycmCGFXffuYTTMVJdV63bwZdohhZWaM4vuzB",
  "key8": "4LYpqiBCEpNFg4aaEngZhEprtXGKoxTA7acZxsJkbNYzTYKnC5nzFtDbpSHu8dk1pWKW1EpA3mxtZeWCheFpbjXE",
  "key9": "53V2QQ1juGqqP22gc6TNvWph9E42wVcTUDD4aNTjw6a3WdS1wHV3NDq1LRcH3QTgYAU9VvEaETF19jtmCqZN6dCJ",
  "key10": "42VCoDQfwXKtGLwRNcZqUSq9bNGkVXYXJtGrcm9Xs8GQQY4xLHGUxQsji28vPQxjXEXjGPbgM83w5WvQpGa6tA5p",
  "key11": "3Q3pDxsk2xkwyb2ByUS4YdTF1uA74gaXcFYLy5hzm35rF48a3DWF6EMQ5aCKqKRyqHWaGuAD2ZR6q3j9yoq2dUBQ",
  "key12": "2eRjCmJN2gQ8XxVhZThMTzu5GcJtKPqD11WQDicknMxNS3NaPQzX2xKw6sUud5pvpTTzcMyFe5fa9m2v5HNYTVbG",
  "key13": "26zyKPGbF54RfB6WrZZLNKvrXER9KZypzcQfiWV7a92E1k7BR4sWodV64a66x32GuBP1cRzB1Rg4UQmeLugrN378",
  "key14": "2cG7NwEmHQfeGEVB2SzJxd5Zi2b3RyjC3Sh4qfeXA2jQoAnWKKr2B2vMHBPgEU2TS9kNKtyr9svZyGKXyq6RsuhN",
  "key15": "2tEhF5aVVqdMgbxccJKC7Uz9gzn8PrnJKM43Ja5SWjMgoQFuu8eiWZUvT1jTCSQ6A2drVx3p71F7C3C3P9512b9F",
  "key16": "3oYfszG2oGtnd5Xq5fYKb78F1FtSv1Udwqvj8Rr33MAvq3ybM3bjkcoqRnwhSZ3RfzFrGjHcDbiyw5gxLgNZSbtL",
  "key17": "2xBGn7De1yM942hVeaEdP4FF1ZLoos9ff35UWx5PAvyV7rHTz6gMMVoFepLDmE3MwAzA2WoBQ97pFHCEtsZo8FSQ",
  "key18": "2TmSprMyvrTqX112762Z6o1mVyj3mwFCMJzYN2eqNscZHBqjqYjUTXVaqTHY2ryNuDX7K8D6FxzB6Mpa6sQaebXt",
  "key19": "34P2UKBiAhJqaigb9KXXhArWJHmNUGfpyvunfMgaDhrohoWavqjbAds2TkWLrbddbR88z6hmyTnKSoKekbggR7yu",
  "key20": "3Lc3motD4uDwC2a5646K1BbDx2LfVFDPb6vDyNx3s7fkSc1Dd95rvKPqqWiPgqdZWAdzJqUuQBVWgVx9gnrZRmxM",
  "key21": "4hxUH5GS4Ckb9TmV5Snnyttn9EBD8N4DJ3iHzT9qwAejfSzsGYNgbVaUBBaVqq6sCiuARaqu8rHu6mKU3aGdkpPh",
  "key22": "2MVH821asySEXgEKmkdcRNNpzyahENxg17PY46Lgqss7AvbZExsDoG5Nime2UfnGeQMHnHwMxhoYobqxeoyE4FBh",
  "key23": "mCUzeWUpXUc2TvhxWK3CBmbsexMPhVH3Cw7rRc9byZwmKFKV4wKU5Kk76tDiX9uHVUfBmHt72fycArRkjo7Lxzp",
  "key24": "5eGeTAx2gQEjHPnCEcQP7kknZYmm6SLCa1G9Tg9ihXPC8DGuEw1ECiN5jW68ogMyMqtupdzhmKHsejuE26oA9QJT",
  "key25": "23eKJAHdCcaDAmnm9MhTPe9q4Bs7zZU5fUneVTmC4B1gzTUv2mnJurewT9MGyRT7NbBBaJSbwGFbB47j6o6ZocgZ",
  "key26": "46pUMsdyn7X2hzV446MDT2PFLz5Cr52mDViSWLkbAdgLUNvDSuqtz6rQV4rJU6qMZkkzjeodEGPh2hyPSaLsipuC",
  "key27": "2US6bdBMrq2CjtxEE7yvt3F6PWKMC9d82diBi93U29Rb7F7LeUdMxhnJjFoTbYk2hFppWsGyFikHiQF4Fuv7VwdF",
  "key28": "5GtYnmgNSWYn4LXLKkMkNRnZKGV3AJSFfo1U5cNhLCyrdfUTu2MVzKMb3TqhDyQrE4oxvMqXVqkcRoMXzruienop",
  "key29": "256bHVUXzDcNBSbr2wRsWcMavPtBcGFDcSSD5hYCFsw5YQzx3FQew8aRqRPDzNq7N5dU6a5YCW5ZHKy6Bci4Bcpf",
  "key30": "2zs9cpTvAjVCRVa7qbx6NscLymDiLCFvaqUVqQUNF9SdgbGFYb3nhpoBA5SyNzPcgWQ6oA7DCLGDPY6KUtwed3Xb",
  "key31": "5rGsBEgN2bDthD19XNwgAcsLyZBGvG1CVhCzzTD5FZ894UyZSmwU75FFRRHvTijQt5st47dECveqZoc1J7u1BySW",
  "key32": "tow6FWVkSBLJ2N8LyQYwMRrNezjwkqD5igdBVTDRXpymjUEySfW9a3r2hn1aTh1v1zyMo2J1tCXLFCSvF5W6NCy",
  "key33": "5unzniWKKmgUVkU8kkvfmfonYYpM2GhLjf2Mt3eefw39mh9sjNZN8vUFmpDV2QzCdWP29ceEuK8MPAeqWsp6EwPe",
  "key34": "4ewtTSCLsR2HFiSTwqsPqc6RH41WRQbqTosyyqtXP1TLnHTi7Xgvj1GcaSpjYQhnuCkv8ZqUX2oUcCAAgtirXdyn",
  "key35": "4xxLXgN9cAiY4GYnAPMHSjCLjWT52iqJYz6ZrtrZjpR66kt7XYzReyhsjmjw4Pnq4juiEpGvF47RMkxgZxYj5i5b",
  "key36": "3boyQ4vSvB9ZFxWL2QqBGuZNCTioaZTpxkjWHSZvnvoLQmYnkJkEB8hJG8Bhezu1QwXR6rtVbJpEhbXZTQpGUtnY"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
