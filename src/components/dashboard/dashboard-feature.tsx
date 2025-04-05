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
    "3qPYFuvgBcFgTpRxSwjPtWFN6NK5ppZgsU91onYykxbirLyRmvWUPF8uzYPzNftzdfeS9FMEsgHvBQdxdir3QUZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLhSubEPjJWmwdbmLp9L7q6XukUerZsArZLGNJL3z1T9tyrQdhuem7zGybWx2FHnDfPdqjVbU3bVJqjvNmTWrxa",
  "key1": "BzKs2QJfLgaznMzJy62uNJjWA2kuZwYiKcXxidJ9Rbr7QJuqkHcU69qW6JyknSFP4dBNuge44pAs5QHTSjgPCcQ",
  "key2": "3JYy4jSHPkW8dPFW29RYH59QiQbncmFNSkHd1fWB9joHmyw6nXDs6fCeZtgDTKTMkQg61dxdamQcGqRYo1fQeckR",
  "key3": "252YBHq1tk4ogR9PX7LZSJNW2BERS8N12tmb4KsuvJxfMUUACPkm2wiFMZJsDTuNqkzcimJsrdgC8FWDMpp6MuG7",
  "key4": "3kMDNotYWRiUfksiLxgmXGhJr17rkFjfrMuwgjojgbM89P8d5e3jV4ei7GhMs8jkVhioPYV3j1igLnJ7fwHKv2Ej",
  "key5": "3qqWfNL97LRpLtWuaznznwLhtE6QVDahbNug4NEvaz6REce8h3RWQvS6m5mwqUkgvizztBgvQ36ZSi8UeErGURu8",
  "key6": "29BCrBuY3bkazrGdhY26zZ56CsPRViviNmyr49HigGZrXwVKogrBmor6FdG51YC7Ct7KGx9C7HjKLLyP2sJmor7w",
  "key7": "4Bua3qSEac5q77enEyMhE4zuc1KsmzjbFZtVtiLwWuRw8b1CkU9oCbgABpvfF2MHsauBP6kxPtP2dhCR9Z9Qnpmq",
  "key8": "556KPAZGwL74avAETj4RTcyxvqoGCuDdDSrpN12dPjPygLGDvTS8wfpDBw1BVzGnzwjxoSrAcYWE67fmxDQ2TgFE",
  "key9": "YRgsNB9VcUxxUnNFF6aHHtQWFLMNsRBwCCkt8pknnB8oPxkNZuGmkTF3gWtBerAhmRR7EPEbRWecmGPQGtvzWFh",
  "key10": "5uoEZczYmTxwMHNCYaNGpEGpQxuim7qzVB53RYMAxsHsAQfcaZjpF3ceoyhmNRLMq3stmkAsaRDD5sf2tYGnPFJU",
  "key11": "59zTkZFz1trWcmC5jqJX6Quhiza6BX5k8gjXm7C7B8DudozVkpKFdQpG67xYhueBQE6A669SgweyhmXFChyhA8DV",
  "key12": "46BT7iHRytxGngA1VBPANjqjSX2vLDHWQg83gX6cU5uXw7amDnrteeJbgHA4RahCn4kZPPP4zR2dU7oNDsoapY1",
  "key13": "2WFqTz3D8sF8mGiB2oMbyCGG6LuW78gtwMR2bQb5SVpQ3KnpUauu82ETMQS8cSkGy3kG8fHHcTLYGYX2WcxfT2oa",
  "key14": "59KFZQ7qVXjk9Xzbisez4EqnCzwberXUt1JzAui2r5MJNKbvJLUP1NqTuz89oADm2waoBgEZraCY37HQwo56FGFR",
  "key15": "3QWSDXyrVJsrwAXED2PfbpFntsq6XEfhu87VNDZnf2MrxPPngFNXHuYR4eqKNURPDQm3PLVmRUZe7tGrN4Mdz1w3",
  "key16": "2v4wJFGaZL2TpNiYoRHVaJpnwbvCa4bpBED9KX5m6oz695hiuJCAdrhzdDLvj7TXJKaWmEZtxMayVod5JHCKYpPS",
  "key17": "CGkgePvf1DQ372vssx6JTGsFF31jKca7CfNi8NDMSkPCfTTuGy51UWbVzdgdQKv66ry89AaGQqCWm4ciiFYXY64",
  "key18": "4xfkqZXay3SgQ9ShFfRKvCgLVhHfogs59h5bhzZgJQDVFygXvaiFJP699i8JkEQ7qngmu5STedBNc37LVBbdkNJU",
  "key19": "DgMhQLYMM1zSM33Vov8BTuXVyDawnYh8LdNMtAASCmQh4jGMMtZaAZshFt2todKMo6xtTv4DATcUsJycFDoFME5",
  "key20": "3juHpsN2RX5pe7TdiTWPbnjovxrSvuX9DhADyqth9EoaiagcbB2kyaJJmMEAdmkcyWhCBTZFRByDYBV75DrM5JJC",
  "key21": "3eeGTbwGfp3jcTb9iVLsXQHbzKX6BrDBtNRy4ezKpFGP9Q5zkSDJ1aob5Cpycvkw6j5MJZZDaHx4MMUsHcnsi8AE",
  "key22": "4vFa1MQmWpatxgHLdmSWy98cBFnT1m9Dd1XdzAiZNiRxac2Z7nF9KW2o4PMWrHLHo3iKqFHU6unFtChpqqZZXP21",
  "key23": "7u232ovFe4GUxYonXqtg53PmsW5W4Xh4q8Ncb6rY3BAU5nBKn4RvD7y1yCpYDNLbpbpwUhwgFA6JFdKihbDa4vp",
  "key24": "5ZjhB6JbW5ynRaPdyEM2VMmLPX6gsrYfnb3FJNMxwqW7E7MqD5RnRdxPWkqqcB3jNa39JTGeBhhB4tRxMdF41mum",
  "key25": "hkzmZpvJxEkC1V7FMRF4pKCCRHP7gpBnaL17aXKYof4JTruQqGKBaNs79ncD4fCJZQ1xmiLX9p8ECRGMhTxx385",
  "key26": "yraekqe5vvia48E6Q6mFeQBzT3nGiP7ZnAErTAGUFn7m5RCT3FfzFzJnNHfY7erRP87DMKVyUxgjYPxK1zD1n9Z",
  "key27": "2pPnJBHw2RSxSWGxwd24fYJYdvevG6iZVFEP9Vxy7tdCHbDfC9BFAGiVcK9f89GzwXgPq24HycesUMq7Cw5oQPVr",
  "key28": "4zJnfi4BYQGJU6JjHxHPqMSpfZcGXHJJNeMz22iJWhWPy6uBqXzSSe2aNLfWDHXSYPCawCRNUjowNuzHjKhnDSqX",
  "key29": "3hKTEeVoTnVTAcivet2NEzYX7u6GZgQKQWKsQJJZEpm5AWJkXVnu79rD9Qk3K143mLWJ1hKuC8WEZNdA7Jmmo2XD",
  "key30": "4KXfqXP9NxbWQHPBKLwHUHambJ8k6afRzLxHnGbktyBcgPdJzyFK25snCWKbp4EJYHMQ6xHWhNzVTESeUBBQseth",
  "key31": "2cjLsUA2naB3LKoZMVStZzEfRF4QZptr6Stv1Jyg82c7i5RWnjqN6KP1tc5Li5bSiUZhV8u7FMRNBaXuaPcxwF93",
  "key32": "3bSK6EdDV7TNDuBB8q1XGdpbjDgYKESH6j1DvreXkgyAJEASoUXdRUh52qMUM7EitUzYtFUvp7GA23QcDDabSigD",
  "key33": "5NexBDCsTQREQSar6AKieG2DB6h52XYKUrWXD3KBaBWMX9fe4musexukBkmVfuVY2TjR61zxrHSw2B8VWR7FnTeA",
  "key34": "2DG7bZSdPFdzavvK3tA1YQ1gc68EbFtwCjKgacE4Er44U82HQ3eyBTR2jXFxkTXPZ9JNTfXSWeokRiTB14UHxAnh",
  "key35": "tB4Jg9BPHy9oxmFeZdxnrYuhrcmV4V1c8U8n8i1qgFtVWCJpuGFGZk5LqJxmujvXzNmEVcUe696Qd6zLLeouZkv",
  "key36": "nWXeDgDAR9gaUrBs8ET9tpK7TrxDBB7kQUjjhErFJ96WRdZb3khkTp6Z9gt2Wnkrzbwwm9RhXEYVnk1rjeufpic",
  "key37": "4jz1CCnz4G72bACA3bb8UNnZgbGKACL2sSkqdDV7JfBw5n4op9wykYu7K6u63fgsZfncqSpxFdR9PGByis9ymXGL",
  "key38": "CCS3VNA7CRzqpFzNB9Si4Q1ATHokZAKEoj8GmKt4xsDndUe4wvEWRhMHA8JK7jqEoCWZjTjgxmmZjk76sQ1tC63",
  "key39": "2H5Msmu3DWiAoH9ZgDgnwoHUedqQPCoqoKpjURspvDePfbfkpfgv1XMmzJeafiwzzmfwL4e23oKaEb3tSFksQooP",
  "key40": "4h13u6tb7SseQ9oSa1Nn3LStLK7wfXQ3cDC5dBSHW2EJdhMk2x4EvNMCscqnZwxcz8AGB3yKYTu1VQnSSbmYbwN2",
  "key41": "28fCvaSp4uCnsffUju5L91D79z1nVqsYSXQ5jCeLiCDRSpdt4zcsvwkxBtqKYTQcw7GRBc3rK63LGEmw1n4jp6SM",
  "key42": "3t1ccXSwyh2kMFo1HkMfrQM83LQZsJDu19vbUHaVhURXY5gNa6L5uS9JNHZWmWVFufMfCJBSbrSLjKFPNfVy62mV",
  "key43": "3JSq9zC2GTw6wrL5ardWPKJztbQGdCCpWJBXcoCF3stwRFxp598FRahGJ35tY9a4HofbcajJA8GxPzbCb3LNMQsA",
  "key44": "49jcToUEN3eqnkGprJ2EKN1MpL2W7SkwtXahSZafHSJy6YJtJ7JPGqzVSXUhTAcjAUafqqPUayK3heRPXkXuRKXt"
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
