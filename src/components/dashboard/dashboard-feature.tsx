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
    "3DxbP4RF6uy8wNscrVWEgzfKBDxhxVCT5SQPgF9c6DmBNGEecPHkECPare4ctrBUj6o58UNLwmcyg7WFpYP9cXSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LEufy9fYpBTm3AEFXseqkNA168r3CmkqgRqdygM4jk2c1eLiU7ErXwZjuTrVGJK9WBJjbN1db8Dne5R4Dy4dSfF",
  "key1": "5GgHbfcnNC2ju5dAeC5Pc1w2d2QtjdkrBVjJdR3c5qwjqEfi2CBwoCGzCiqiu9K4u3ru44AxD3xWQSMNm4E6sftg",
  "key2": "5v7bRtMYA5GtbcZ4KseyGwa8tMSFRHrmFAyhGsNhoYfWExwvwPfauAfSZ9RbzT3vPVuD4pdbxuVYjFd6dnQ8vabL",
  "key3": "3U4ctnVXLdCFMVHvskoXNi9dYKAW4iJcNfKKFqvKD4STLEZqa17C64Umy2BbfqgP9T7XHborYWUWjTttTn3LVvBH",
  "key4": "5141ofUEi8LL682TxtndBv1DWYDksAK6qx6568EceS8tqttU7V8Zndhwfeti5UV8vd2ULVL75nz8DMsch3z9UefF",
  "key5": "qYyKPo9HeVzDEL4HGFySVP9ZQEYUXTUxthRj9sXsu8HwqgDduiKyXgMDfskkZNDUj478bhRFB6SoKNJMkUHriXh",
  "key6": "23g6yDn86NngPdodW8QV1rVpiLSUMHuxs9R9WiKnt15NHZY4uQG7jGTSMBZSKsmZi5r1ogwJeHYPX6CgSe3dggzk",
  "key7": "39s6krR6HDm5DmNeSCnutQAUGkurx7MFP34ohQSxciyBfF95o3a4fKWUspsEvNWmMf2NYvCKqRSmYA3eEjDnsk2z",
  "key8": "5Cz5U4R1uU1XEzocnkCvmaMvxG3whCDdrrphWd89jGyqBidKM7TUv1HFik6oiGvDGRpFzLLwLcqx5VTL4egAfmw4",
  "key9": "4i6Yq9pTcwbZsHPTaH5X1F8WMwtDfBNPgaHFqgCVyUJDyJnYou6A4H5xPsx2o2Xas61JXx1b92tUqry13SizayQY",
  "key10": "357A9MSPgziVFPwEmAqVe7Jb5hwwYnpVNrp8WDtwkRSdvNSLu2gZbSqRYL2tcLmmZz6Yay1BB3FupMUPPEYLwZT9",
  "key11": "2Waw3MqC113NNn1REXdqChudzSU6fRRd5E8m4FwfPsz1Q6hhiJRXxbkeVipL3cpLwrevSA1CXHM3YfDycjvbKEzM",
  "key12": "25r1eVz8aMGsCV2LAZyi4ExRXx34RFsHQcFgUWxe4txApMoAGGokPN27XdUzqu3kYFyk8gBqD6sHEaKLXySiqCAy",
  "key13": "3ZkzkEBv5NUWLjGeuveFLAhzVL7LDgDKLuybkirqY3WXViN911V89U8kghVQyDpCQ48zDoX168cFmWQxXeiMLuEW",
  "key14": "2jVpcofbhRCug1zbhYoQohaz52694XKdPkwt72C3HDYWs9B4uoP6CwLGaXoaLd1bjNX7kdNhaPGpRyMZLChjM9rs",
  "key15": "2RNgoZfNSPeqyD62y62wTD6M9Vt1K8mf4uEZEkgaPTtzpfzKrR4RLQkyE59DitoEoBMfExvKpZ5ja91ULrgPZUCN",
  "key16": "4oTAJx7CRMuhRacsbKgPUJj7zxEn3Vy87RJD5rJ6AoBHa1qykffU65tN9PgKAxpEyvht7iMaoQ3rcV3NLPDEjDnw",
  "key17": "2v2UxfqKA88GDsyWfmm6Tu8G5rna1CJFEptUf6Xybh5cCvrZiYXghwHAiGBaodHV6jWSDJvxmUSZj8pMwTLpbfVk",
  "key18": "3S1H8cSporF3baxrqiMMfJzBu2mnqxGcW2mJZayxczUGVDJNaQKFSLTdqwoRS6YVvQ9iq4U4zDdJNw3syUCg1Q2M",
  "key19": "5SxB7VsH4ptsYwpodYRZtYBz2qfpv1prSJhF8cyhi6gs3YPN64ZYaizrEnkqhogiPhH5tu2XmeoGCWefNEpyWsFH",
  "key20": "6evYXEwHZsFcmWRDbXbbJzFzy3SBaZed73mXBPMuypHRYtMYTRnwDNEUqyoadaoWJKv2iPjFzUPVjoxJUicfM6L",
  "key21": "24dLxtuADTscqs8YPhhAWb3efyDHPcYejMiDgQNUh2iHBNLg378vWWarFRwci14beJuSHpaFDD72aA3J6JgF51fH",
  "key22": "5dFcNiyUVXGxstFXaA4s4euV18nEGfeTAC2DugQNEGXMDTzybgD8cUsLALnRGPy8PRSp7vcEvpFVYQVbLnoVVkqC",
  "key23": "rNZVzzQ5jB4mku2MeCERRrznfp4WRQyAGCKnq2nMVkWyfhpt8bcKwWThMZJ8c8thRX1rsf9SQZFsMRs8vxjyAZx",
  "key24": "58fzNqhLXnBz2JDN2cmWrK86hwcH27YCzbLUCWdkx68EmW2Nz8TgDbSsKyD5Tm6dYqEjTHsXYQqrE62ViEkoHYcD",
  "key25": "ur6sw58D6uvd5BdYoE9dr1CE9ZDFuDwCinzH3SLdd8bepc3YjgJWx7cG92ABMEYT4MNQ3K6ZYjoEEWWLQWfydrs",
  "key26": "384WMqvqxZRfqQy3MQhXb6UphaLr7oERpZDkouMgsbXxW4gii7982dv4DjXDCo8fBPhs2GVmmMKwqAqkAP4vBneW",
  "key27": "35Pa7jNbWex8xEV3z7xJuRZRfujiKCD2gipb9L9PPvspAqX9iXoPJSMozntcHBRpcj7ymAtx7BXXoJCS1oPXMUHm",
  "key28": "5GzvBZN9VuT9LXSndjmi9xqddB71zerWyUkpkmZQ1V5vLVPSnDTo7cgPGtL3nuseK2rtTsSD6uVdjtD742TLGhdR",
  "key29": "4Xzfjpmr6LtPkba3tz4t7hfvrvDwkebfnX3ASUgB4rmq8eR3vaR6sBBGjjr3pTdSBMJuXz4qA7DAAFhFWoZENLf3",
  "key30": "3yjtm6fxdHgk4pMHnDnWBMsUGM1YZgkDtx8iXLnUow4oWyLEcbYpSvXhw7N69XNTEr2RfKjZZCmxw4qy7Va579LG",
  "key31": "4ECzqZFqtkAicj8oNKLVpxDcV5U1DCePeNntWevJi8kcJ7vQHjPxMgh3XVSRph1T424HfqMJ4RZx1zkVw2gmG9f9",
  "key32": "fPGrprj8DtA8VXH6Y4CXPQV3ya4dK8XWToYZ2Y5kXxFnYNH11pvSdvpDHoJ5F5NQ4STPR5y4YmwUxdxVGHcCVf2",
  "key33": "5ArPt7GzoFyS6A54je1xzY2Z1npvguAYgezNxZVB9PYSjNXdobBoSMYYogJrhRnN9Xw2GJLgLExLKskmuohLRucZ",
  "key34": "3fy49tSWdX1vgY2Xm3x6ZoUxfaMT82NmcSAHMcm9ka182t5DZhR9ar4jKk9XR5zYYukgi6EnV24M3wnfHHjVrq9N",
  "key35": "KqwszcYXvhjGu4MHsBkNSrJ32RubBk1fzgrCALpqe3eRZHRH2a3cMk6XvovWa7T4UqutSYRoTVfRZhUTeuw1c7N",
  "key36": "ME9oVUYDhYJhbRxeEqFTvFkMvCmnqUNVqX3sGUFSi6pnS5v6fwGkdRhZzAY3qeknqP68d8MHESPHmHTCBoYkMZb",
  "key37": "3KiMcwTWhkjFLdiWHwdb5z7uwSDitqU38fpMyyVKqFfVk3hsexPUyWQrdBwswAgaUwRfhLkZi5HNDTwYu82daZk4",
  "key38": "hzhT787KqPz5JFDPWYSq3q9G51WN3N8UYecGihBMx6YavUryAopuvPM83sXXom39B8okKJkCrHisPGSMqY1ufif",
  "key39": "4JCVynwLokE3w3qVpjESdgZPRbHxCJL4fTrhiwa2d3GvQL7M75ApWKoUw768o7hm2haM1FFXXVEa1rfAffVCQUtH",
  "key40": "4HyFM4Wzw1uavoZDtVreLneBMDeRzzUQEJm9aBR4s9QGPzQVPDcu7YtHsd146GtA8ch2k1cRTZyVw11iCzHGYWwL",
  "key41": "nZbDYKAtyZfjrMcjptPQ42RYkGAjwex8We7zJbPUC3vSNcbEarAvFhkCCgtJczxvUNu14ppiFnvT99suy82EzFb",
  "key42": "5jFju6fGWWVacKTnThTSro6NWA8BuEqZ7NgMurLhBFyvgRG87bGvzUWw8RcSHyZSLvvrVPckbaM4LuRr1fqsfuEC",
  "key43": "5eqgooMSNWBMzjhT7G7EukJs17TRCMZFFYisyUchMA7xFTb7FxL3LoBh6pPpaFA7864qFd67HNGnUKGtvvmRFL7d",
  "key44": "2kvwmNp5AyXrJHZ1eFVuZv3WhC6a6STzEAJJQDf752zcQvCcQbDoXgj7dRTXwwBiqsouzr9brm9ohSDw7J2D3Pt7"
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
