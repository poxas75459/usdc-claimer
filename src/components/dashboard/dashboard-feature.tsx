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
    "2hLoAyeGDx5hx2QkcDu1P9tSNCVCwj8FBxoSnnCkC5nXrvmgcWLJ7o1ZCwJfC35ZNDTSw9MBbc3M6mrV24fqAq5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eso2Kan2novo9pwsvoWhMPQsT4nEzps3dmshsPkHFuhXt929UVH5r9AjbRJTtwLRUQwvQnKdjmTjfg4YpyZF4iH",
  "key1": "4wio5ByWdGP7pduGFJRpNfJfPjFK1hy7p1XjFfL57Dv4YueU4a9cxYwZoGHBunEuC4fV1UK3s8jkYANSCpcBMji9",
  "key2": "5jKJCBnhDmikXJGf6WoDpkPxuGcXDH1tEMy1Suj11xw2guADSV5pVWTW8QjCo24wC3hFHGchjxYrAhTdMqQ9HrUM",
  "key3": "sp5tRUQNVjtgDtksK1mejXDfp28YqmjWPexeNPdHRJHqG5Euu54fmV4yKtSn4gmAmkdnm6WepUmsFRnXr8FQot2",
  "key4": "5gD8ntHLxe9Fwnmuz257uhnLLBDn6CMNrM9ah4mgSVAgFSNxYG9t1AUummhZbsQd373Xy9BvAaAPEXBz1cnpcUYZ",
  "key5": "2vSM5KbZ3aDu56HWnE6pAWVYFx5Sb1TmgC2GEfB8RwkXDkX4TYNU4aQAbSo3KGqqiFC4txzUCPZgGaq1NRSRstsw",
  "key6": "jeiXZamRnF28wS8xaVB2gsQLtV7EEH477Y9KPuwNbJ3j2vXUfcdbfxnoP6U9v9AELVQ6Yy1rFZwhKQzPucUdL85",
  "key7": "2rs9S1HHyeghya7phpXvR8WoQcLkQn1B3442hTc4KFAN6WXfyMrWJhkApgy5oSzBZdTMcggUVF6d2VGYMnSbqU7R",
  "key8": "4jDS4Lt4oC9SRTxPvm2zFpAy6ZDvvMRtGFnag4txs551hTykSWpErVjX5fnhzeYG55rpnFvzawX9WhU49TB9XRS1",
  "key9": "3FfXqFrji47KmKLdZj6eBD4Z6K2xnxy2f9fME6SHzjBHv5zarH9KhfqwwPNdtm29ECk17mVi9vdvErSoX4j6veQD",
  "key10": "FrbmYYEgW7DPsggtTmPb36nptkSz4Gmx971AdGBvyyAmyFg4uFR6oNHmLqQDJ9rMjN9ynBCsJnb6dRnJXtCr16c",
  "key11": "5Sb1xf8hqUg3qBTgPgaRXFxKnEQZLWKaEdf1hSG34BKhRipJ2GwZ4KMEhoDsysEpRxSTnJgp1Yyq2QvTJqJYRQMw",
  "key12": "498dbm9Lf8mBsBB3p7CGJFDZ6UV3jMm1yZwGEhg3w7RadSk1dwcck7wTUL8owante2H1wV6ppfVsfhZcXwhATrRD",
  "key13": "2p7uUaiMGtjq6BDPCeXknHfhWWnkRUEb7NyoXzD8B831CCfj5eVHrfZ2dpLSr3rp2Dq4AUJHbhtybBokwU8mtKd9",
  "key14": "2bFFFQhekzamd2sb7gYTqd2rWCfVdN6c3UQdSxyuQFgA9JwsxebFXPYZCeiDTswC4kvDj9RZW1xkFiwa1gXJB1ix",
  "key15": "5dJmhW74htbPFTW34kpk8htMSpxnoE5Jxz7CaArWNZpfg1UcBvYUnHAZwG7nv2AdAsrBNpmAgTuiDVNps4FL35m8",
  "key16": "2RorjgE6Vc3ZsKj1udYzgAPErS3wePUD5rqhTGpDQ9pqU6VVRKctEeZSVyKwE7efKLxbLqxJ7Jxz2gYUGwcvdzSr",
  "key17": "56MBopXXKtMYZkmzzKk8nScwt33zBKVWipBXYvwNNfFrxnZV12AuFbpBWuaH3Fqyycs2G8sTWgFQmBuVaQ7h4N9q",
  "key18": "5cQKPm1i9jfizmCmdQGPhTLAfMrSkMSCFyf77dA2hqUzvMbRXGgjsczfRHuia8bxjb69wPvpwaxLkFLSFzVkPkk1",
  "key19": "4P7Fn6YdKXoxGoZmzWDXAHXmhpkSjqSbxxTWKF5PR8CbeC4Vvbm8Ar8JWpTfMPeUaUGrhftpqMWoKh1KkPyF49ef",
  "key20": "4eZEPi7MCDbKu2RMwEZyN3w1zbNjGwr5V4KefVhxdWr3x1Be4r4Z8HMSiUiB4rCjgEFghsVSH3ua6rSiaJGjtuYb",
  "key21": "4ysAcS5c7GeL8payG4TUtBoVpbytajZpUveoRLTBUU9Xn888qak9vnV74qMznbhwjGZtGsHpiMXvpGXrrc34SKoB",
  "key22": "3ifErgANfN4t2hVN93LNoYPqkJZiGhGVoFAzDrL1VUvdRATDVixyJNJVowWJBqYpf3LW7d8MPVnimoBgeayJFmQB",
  "key23": "3CBS98f8La266Ne2tG4EarUmRpm4xkFyP8GteHDfivircp723fEmCJGg5aTrSumbFUyVV9rwP3btxHsuh9S5tSts",
  "key24": "5kBEyuQ467CAccfxAYwj1Uo1wsxNhPXhVXyXWG7AFAvWZAXXPHQ2zji9UncyDWHyCwY7aFBe8i6He1b7XoSSj39X",
  "key25": "2QpN7ZNpzBKUrLu6HuxKNVYr65CWbRHz9LHFYGrzUib4JJujSrB9k4K54NWBsXdyeVmFXNZCxFAPjJtwZCpHEPrt",
  "key26": "4qQiptfPMGpEQ52knHuj3hrzrm8dx44Wnv4qBjA5QsgKVcE8oZhdmhP3L35bTqWYokoy3TFViZADYbLggNkoug32",
  "key27": "2ykbAbc44brFz7byEWdKGjWM54CDEWNB14yudZV1NKZSNFptv859NFTSG9RN2CyDfJWz4KvxEjnyNTZBbGo9idCP",
  "key28": "4NwX8BQqddjLhGjYQyBL98uLEnAnP6aDnrAbzJfpPfNJp5dka8JxYzTCgFtWfYYKjYVr1cRzZBiDiL5hzJv6HHjh",
  "key29": "3JoVJGSvMyrjcfJ4YwnT3guAbdZH7H5pcL8wNcXxkwgqRxWvLw6ZsAZWapSdDwrcWU76DzbsySDUP4qFuQ5VTgtw",
  "key30": "38j78GgJCKS5CrqFeApLmhEEA5V9snTz8LksFSW45WVJrcTzo33C3owNTGuXRHMCtLCKssHLaMGvmUrE4Xkbyg5",
  "key31": "2jMJurzQjGULHcreL29EsHUg4US8Gnuchtww2Qsdqe6KnnD9p7wsJ2DxaTF5UUzd2HYj1ExgBbrprBUHAx8LfKcv",
  "key32": "27gC6HE4ckjRQ4TkGLmopSjeR5uE3QqM8opftEjVLt2GEZyCb8pcavhGjT34w2785eqC6va1TFusxPUjuY3XNjjj",
  "key33": "uVnw57bG94TGWP45RL6SuV1YVgEFtGnmk7ES2nQQUiuaFfY4aVtA2SwT6hpnzPVX98URQH2NSsQ22XJkWFgc699",
  "key34": "weZTADUoLDq2RPKEsVeHtA5QfiXnjWbbQTguVCbBHiFMz67ujgHmAjkENDLttpHrFUNj7LGr8XwKv4syZqPMTD3",
  "key35": "5qRDpaWWpB7pVa9fFFFmMnBBAiLv7qvULgeJeEG8T4iYDz3x3gtEdapbvYsfbM2jfaoBxBXum5bh1v9TP9dgZRKc",
  "key36": "XXHJKTsL8doSdj6QQmoppL9b3qmGKF77Bcc6YqeNGgXohSZVPub4BsCFVBPHbSB7uSEk3xq9MhbZAaTuGEQNE9v",
  "key37": "2KWJgDfRM1RPpJgjNi27jqngtek9Unu6MTQwsaeJPVa9kL7FoWjMRcbT7rTwEPtAgZZApWqdKSTr986V9VcQnT5Z",
  "key38": "4HAb9T5Sp7SLJNqZUFgQxUkdeRX3KjZVHDxjDgvxi9QqNsxDrDdbHwdUj5tYosSPsiWxXfHuYVJbirdtwqGdS7ar"
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
