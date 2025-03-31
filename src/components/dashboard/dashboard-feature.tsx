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
    "XwvToBt7nJ47D4GTLNke3YsghrnDoZjbDEE5X5EN1y7saCcUy1cG4RtXKE533WbPnpgjk8meg8maJBxpgohA8yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41SXzKbMaKfff6xGC6GVP9TC5ts1vGVZ4mkuvAnJg1SqDmaWQ7d7y247W81NZ3Mknng4TUhiskkCiLEd3L1pLLbA",
  "key1": "4ez9X5EevPo4eMdLQdGJ4Q8W8hKGrKV6QY6xHrFTitbQNQaamzmdnBLy2XojPXUNZuv3FckaZaq95E7zXnpJK1eB",
  "key2": "5nFusSJsXk5LquAUdXmKwaEH1z5hL75yf25VRd5oUGQyWtRjTAW5cVv3QwmvwW4nqCU3jdf9hxXMkPU7cHK3bpLh",
  "key3": "3eXAEBEBSndddxhQeS15ZemeMFgPcs2KDQiHGHZQjvuxmLFRz8PdvGFLQ2uDS6ozJgdFzEoPXFAF39o5FpWw4vLi",
  "key4": "oJNKHy8VqAMKAfnSb8wVDkYEusrYPXeF2CWG3MPQaHCSgV9UMxgvDnKibUM941Z5YorcqqJVo4dPVXeJ3cFHGR5",
  "key5": "4bWLR8aZBLsnJ34wa3kkSpr2tBsiN7dux2T6FW1nVX5bHX4QgyamLp4pcL6TZ7GkFMjjbM5SR1xP1rdxuR366Ext",
  "key6": "5TZ3bKiQDyEhssdSDKHaVrSwi9bgK98SnUX8DfLtivyDn2MpFgBecDevGHkJX9GsSQrYLfQKceMpcZaseZUB1bRm",
  "key7": "5EBHbGv7eG3PpDqguHUt7w8JgAogyiXohG19v8zKEaTG9YKAuor1QC8rBJAAH5qcHDYHGjN3dD69CBo8VJyzmsYG",
  "key8": "3YB6gMqwaiJxaWStepgZHvyQ1YoxpgQMnTT5i2bs5PfZD1f4czUZt1vyHz7YxowoYRng3jEgk3MTtX5Ymc3fV8Ts",
  "key9": "i5HYiH1FatRLWKEWD2xjTb1ZFKKpTYdNvZ6wHFxLNye1VtU5PW7if7t3vkjPmXYSgLWZ7aHyB76JNEn9H7gkYyu",
  "key10": "59sMGLQWwgpDVqhgCxDwExFoSXGbSZt6i6sG3c6153DnuQkAq7B8MFBCn6udbPPSZCV6PxuEDf32nA22ziUzza5Y",
  "key11": "2jPTe1zTt3QyiFXzfuW29hKW8De2grN3dEfCx49H1RKv3inm2uciJa46XUyBXzapuHLsVPPTWP2HTMbkfjyAeBHP",
  "key12": "5domxrJtjkkFSSGBRnFYFnJcQtyHPekhazy6BZfrGtEpjbcko7D7TeansbUi7d3vwzSqFYEp7kwCZUi5HFvGGEuL",
  "key13": "5mutaqVE4ssvoyn6u25WLKML9RRcYpkqCE4m7t3PPKob1VEh5PTwBcawgBqihvYTXihVfeyx2yGknAMDqCTSbx1D",
  "key14": "ricsmLumL6MJJzZkn6Ltdh3TKUm2sCtU8qQwnC9fDoS4TJmdfVtvfYv7bkCnUYu4DMX1TjB9TBgsrEri6LFbRZb",
  "key15": "4e3ieuxWA8MrxqoDqHwTT22nTrS3PedtxzcpDx4ArYWBJk5JhFmtq7GAbd9WeAB6dwCWCdtXuVfAsGB6XHbdbSi8",
  "key16": "2sUXbZPeC85mbxwFNyAgVBUoVoERBaQkUZ4ARQEZxFKuGcDVfjqZoXfjsph8c9ssyBGrnDamh1mYt5w3Aj2GJvSL",
  "key17": "3FU9CbYYtpUn99BtA4U1Y6QduhCrmg6LtmCW3E9GzWUNVYaQ1H8sDMvGJAbETw2M22ULC4sXxe7dTJ3SMtWkfvWL",
  "key18": "3cihgaR5EmXRCpUFNGfa73HjDhwh7ZbRPTERhC3rEHdjJufuzdQVeRYPYoy5yXdpxf2aRf1fFcfw7JQ6adfBBhaZ",
  "key19": "gtRJcviY3na7sjgmVguWX9sjYBa1MwNhE3hm6FRS2tGyPrVLpex5syCmCsuJFd4vLs5P7fytxDdjySGLNNKNL4w",
  "key20": "rf55Gexk3TKNCGiiXC5fuYGtgmp48WCrDPG7aCbXf9JrSkqLqmwRKDMNgV9VNUzBjuTiN3GXfs5F3FVCjWJvj3F",
  "key21": "5y9pxsFzzVGBCy76Z21dpAasYP1z4yeCht97rTKzhWnkuB3DScvyyXhSkeDPhycxdLFqbUnGwc6WAdK4wJtRcvbG",
  "key22": "4ak2ubVk6SzTy58mxvmoNwdfo572hpj19K4Wa59QGhtk9FT2V29KCcBfXJNzrhrYs3kkFCaHNfdbuAsmmsbDNwog",
  "key23": "rt3sLEUAxdmxJhyarq8hYZndfgqq1MKBZGrj3FkNJAwNwuoXiL9jPP38vw8k71jVzaMe4tmo7oPiN9Df1wMcnKg",
  "key24": "2uajD2khk4PnvbxWptsKbKihK4tTbiWasHa21Db1aXr7AFjF87zJsbcheEvyQuQySqnvg3YrTgJ26nsagXVRZvm8",
  "key25": "4h1UHjWmsKMDFSMGHBH2Q8SmxMPCfKxTypji5AeL1RFBRbLqqbryjhfTS7KHiLkZWR6uMG4UEFe4HueKdGQL4Ap5",
  "key26": "22u9qUkjzEUoBkfvVwswk1Zjava3FncTPA6XdKqBA6Do2JnWA2CBFBGS8CcJBBt9AtTDjkBuxppF31fgr14i5FCj",
  "key27": "3rUK4wkD8JqEU4vitSbRjCyCWqM4PKbiL5XEjaKivin96h5Fvy4AWs4eCNYdAK1eh7RHzhiouRCXMw5Ci7k6jm3m",
  "key28": "4NwFwnH8FcLZKFSKJxkkAYLX5vtXgapVTiNA43ZLuddLLh3LbmjpupTnH6YmiY73RNVxzgVV53hmHCeqAof17tjY",
  "key29": "55wZd7yed86oDiNBkYporuLaqWZnB98veV5C4SCpidwbfFc9cmz21a2PxLh9c3p8eRTG9SFLuJphHQ5GAz1aU8iQ",
  "key30": "3pFvyZGArVuiG1V5vsFjosqyF53qWqeDWMWsfMR1hzngPqfzk6aT2Eoiu1EaruwxbogcNtygwNN7bwNkomQGBKak",
  "key31": "5w3hD5Jng27o8Z88mq7AHNX5PWaxETppeiRLv6AiWmLEF4qfHTWx6kmjnY5jV1kFzJg2GcNPB4DM85ysQzjY3A2n",
  "key32": "5aMB16p55UkxGRXBqsR8oktoTmq2EHJSsAufGGaR46aqsqnUgRHRKDPDmQcrLjhj4xemiaWAioRfb1GQkBue43xb",
  "key33": "2S2WfzY1Tex32ADh7Ta9H2JkaCwubYaqUtYW41LqGGJHt65CjkzMeUPWsDsQEqFzGBssVoML86dBYHTXPggkpFfy",
  "key34": "54vvGWC37PiCPhZiTSXZZ442gib4jih73y3kk1kh7vzfLLN3QKPrxjSMQc9dw6d5pCG3dCDzmnVBK5c5UQfcNWt6",
  "key35": "65KuDpFJByb5i3kcWbbQktA51hKPjayyjckzDVZD7Weg1pHwwi9XrGDiugo5wyZBEmcu3puAMdz5nxZr4RjBEntQ",
  "key36": "4R9SGAxDy3H9bfuVSfFnWxBqKofYvMrDgRTkeZ9QJZwH8rm1WdsBKjoeccAB3ABC1EtkFEANrv7PDyNVLU1dNs96",
  "key37": "5EoKVw3GBpwWLDWBafaauRR6UdnMu6ZfiYJGHHuQeVmgmN7qQSEmfV9Fwi3hvNuSZnmkW23sEkj54W9RqGUFEGoR",
  "key38": "HwihkYcu5DNbZHRkTUNDXkP1Grx76JGdGk8VSV7orGtMDqYmYg8szwSKGSeaxt3JgLc8rKhdwmfR46KT3YY8EqR",
  "key39": "5ejhV9wg3jT8wqYf6JmY18X9wYx4pEXYtoNScuHu1xU2YEqTx4ub11WbyCR3Jr9xACduV59cCAtgTp9qEqyY5JPE"
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
