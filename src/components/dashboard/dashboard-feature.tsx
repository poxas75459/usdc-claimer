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
    "4ek5XtRTXt9BTtfqsK48HUVrGocyFgWtu2Bw5JEHFniDLEiDrdYyZAQpDkVQKAxUTVhGRrS3Mdoosn333dejSokh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ouDMVsJJfTDDRxbML1SaL44K4t5JDaU4xrKgWtdn8oGEokyvsKJHdFd7cNRnpkUMWP27kW1h5AjHcfS8kUvBi3h",
  "key1": "54d6GGyoeXv2RBjyX6TmALfPyKpZSRTxq7KGydx43SqGeCp3UfVZuWXba518PU2arspWt5XdmPTVChP5bVP96hUF",
  "key2": "5YDy5veYXD2exkweVbh7UmJJqiHuYj3qK8hwpH9tRdgTychq3RuZfwucS3j66wrs5xSw2b6aXLEwvADw9RKVGtNX",
  "key3": "2DTMq3RmpksTzA8z3Awqiv2Ybx6FSsVBDs6cdGL7br9CFCFwSsJMs2VV5K6kAYBMtxRECECMtGHB1oAVHHxXFtxj",
  "key4": "4aXFuM9TTMHCr1KpwbfWbbvVo9miiRcBA3TDrroJ8zCGhnfbsytrEsumEXkcHXThgwLa8qq3Z38WbPoBaLtCjqti",
  "key5": "3aZobPrbwwNVF6SEThnKKtLjmoRGiUGSvYMZXhEHVvXVntgsFj4LTHBDgWqbhRhoqstDQMCmfmVXy9yXR881Venx",
  "key6": "5GBJZekBkywEqjry54BQYFsxSMS9qjLjLJq9cxW4CEVG3sJQwNopEfTVQwK4CHbehT8rbSTRACKg6ebHVzc5H5bt",
  "key7": "2aCLDUa19Cv5StKi8Lt7CA8ZA397gyiwrgziGUwG8okw4ZRAQ2DqBkMtEendAp8hyHQSpbmw1htB3hER1GtvoDz1",
  "key8": "2GczkB5Ya2CJ6FtHSJeyJHkF2QwYRCX4caaZTtVMVsGCro4XP2UwgPECdz8JAjWeXvaTj4qWZi7MHLELUf2wHCi6",
  "key9": "5up8apuxu6X4CwhqFyZzXLxCXQ8WNxV2obPUwkv5LET24wj1s8TX1NvifutK6DjRTQs956KKRjv3Fv26wsaN4V1d",
  "key10": "SSYK2Zxz1BQpfgDhjhCjxmdAoNSqh3AsLfLE3aq77VVbiU3tfrLHLDMjkbRr54ie1bbhALYiREYKmGrbPE6QkUJ",
  "key11": "23mM2bN8dSG8qxCJWrN5LLaZwwVunpeooe7GgDPint5bP25J1c5Zhxij7e19swF2t5XUkmurMBJ9duGdZrCaVngv",
  "key12": "5PBUJTx1Qs1CpP9ranTQSmwbATN27UDAWQjFfYLnwhEsLpaEbPdM1Zp7jbguSpq5PtqQbUc96Ks6rP389m8DeBmB",
  "key13": "4JbW8cc71qB5jSVEJnfHpWy4Ae2SJfbJyZ6wTdARea4b2ofoHkUKQwDk9PzGafExZmx47TpdXFkCAYUT51g86FTG",
  "key14": "5axJTvawUdr4FnGbfa3bdE5njhJmzMgVgkN1EwhLkgtWcoAeLCeicLZXnLWZiFNwsqQc4uRUgzthS779DvD5iceE",
  "key15": "2cHeZnsAZRbaFqkNJhMKVeGCA245qEV3W9RiSpUT7ZPBznjdA7st7aNwj75QdxomeX81N3tZmwdmMT1v9YpZyLGD",
  "key16": "5o9Uitq6XPtMqXbPkbdDkVpoxKvDhbnvQBwN48f8orcJWRieiqbe3AdEVaa47DHdJbiu5DMsBeLea3i6XeP719zh",
  "key17": "54HT3pkqRfSfXLYwc9zR1mahKkGiLAUFmPoX5Nm9KSxXVq1BiLXs3gziiWawrdbNH1npUh4ZDnUq9WYsZsq1vFT9",
  "key18": "5AX3S2DSCsi4LvVU2YXccVY3htb8EJxFRKvSko2FrvrBLFVxN9VHHS5Df7u3kosENyN5YV1rcrLLrPXJcoQG7C7A",
  "key19": "5Zh8JyKNGcJZTM4vyZVoxgr75aQv48ceXe59DWcw9me9NRWYzrczcZnwz8PkNqmvZ26WgdVCVVVjSKJYhkRRmrfy",
  "key20": "HrFUqqubbk2mn94ogJpUw9NdhuzQV5EWWy9iS4wdCa5FwfH71RZHqtZxiNZRgjyZNx3PTedb35gRSEV5eC4emKf",
  "key21": "3xgPfGkXhDwsqf1jLBESmbspXk9ei2P5h4C5EGGs64sP8QzgFBrz3wiDJ9jWZhxF1Mtbc3sSdKnXmHv4EKNman7b",
  "key22": "3a6MD5URKa36Qz9Bazwzptc1iK5iBkgMiuVQpL5EBLhyUF5vehskmBZ852JufqKSBpPq1zDBo886pyMhEbRar1xi",
  "key23": "5pVR58d2TXjDGAc9b6d3YyBtAwZdeSMt5x9vxT8DhWn2D7s9dfbjXWgXN6xvNCf6ydFX3DboS1fmYBrupeef1huH",
  "key24": "NgKN5xfaFwLjwNtebsbYvZzRaVg5S75tEzJg3gd2dnEJRTzM3dNYhgt5ruXUUvLnfhi5XEDqSHxmmkiJfh8WGbV",
  "key25": "ULTwAxNYaGfPQdZdB71EtNNGPm6kbDY5ytLVjQnyTdTnjnyfnNpSMzbmk3672urXAdLfMY6A9Xuj5LDrV9GLEq4",
  "key26": "2pZLr9D4L9VG2dDKR2X2RWGB944yFBeBLYSiEmPFHp6EyVhzevYt94MqRzHjxKGjycnCNdum7CsL36uChEmGj8su",
  "key27": "5E1TS2By2pXo5d84QLLW6LDJqwP7dbC1amNKwDV2hPzifcydtfj3Pxzbr3dk3W54oMcnnCr7RFwH5inxYheaYsMz",
  "key28": "27DsZpqQDwpNJVYupn7pCt3kRnJb8tG4zHpmBF4PcrgKoef78THrrL92SohK5RAUVDUMEMCTfPBA3jx5mXLbuuvi",
  "key29": "5QvJZ3MCHWHf7Xevh4Md4YtLyXQTbZnoxtyLtxrTcr27qpEBteoT2LD6Zy1cVuPVsVkJPLzTsA8X4XbNGmHtQxWK",
  "key30": "M3PCsNihQCCykugSMmGFji7UHxvGZpY6XVssHTds4vD7RJfpK92RLpvuKKmszBtT4JDEkzqqeM3u16UaGCbyUo7",
  "key31": "365AdbpqkxgzZ38Tf38epNAWqUAy4VCjTJjfCXt3gtBBJNuCd2DZZe8NzvQ5yihS8ShrdtNHhWufsFJa8HeQY93q",
  "key32": "4UFNCgDMy7imJpsn9aiHYFgKxp8Qm2s1wF78bW8CwjjZ8L418GD2mRS6imQshMyHsh1fvnkss8c6WkwKktaQk9Ep",
  "key33": "2M4Lym7N5g8WCdUKG3KdGFQkkjUZZVnJsHs2R5ZaXFreroCh6xDefVSmG8Jar7E3jpfraCKFpM4n5gRHt22RBJFJ",
  "key34": "3qRtqTckrN4MRiL19c2bcAyWSquCKcyQzjSmcSSrGvEtqots3nSbzjzeJPjniUaMJWorYTiPM5xieniAyeWwYsyD",
  "key35": "5cfUEkw9jo1BDo2Lg7PsZJ2f6um5nXzunCwwy67jpjRR8purmqhrbcPRwasaGZwtSTURHTJVbyWqFGgAiG5WSP4u",
  "key36": "3fLnCLyuEGmDq4zkbPCuVHrQbTiRnz1jq2cWJX6zWG3YPkmnHz15GhjxG1yHfxKubHwiQBt3HeLgTTjrgby4Wkvj",
  "key37": "63AMg3xCnfAvBQNgRZUREFV9rz7SxQbNtTQC4Bh7HC8qWtkAzjyuZxUXDbvVHMcGN9y866LE6Rfw8EMP9Be3tUBP",
  "key38": "2zidnwbnFicLCsXmD746VGyANoZP8ZF6fTRKK4uxu7VwCcvSGfuegEYcgo7Sg1DDkepsBjWuBW3vBoppMGRdzKZQ",
  "key39": "4rwuUvs3SJt7igZNyBY1ZxhTT8PxqABAzHjeUuDUoytCTNqMnd26WwBe2NpEGwoqFSxDmRDLPh6qPei53BG6aBsK",
  "key40": "2NC3WktPyuCLAup5gZmv5rf1zyCyHn3hADewDKUWVwm1H1f3uLtGMY6ctBqq8eQeQS9kUvJhiz2cuEBwA4yoBgKm",
  "key41": "4JGvyUS2HoMyBx9sGscuKq2NZRwHrvHdJARMQsoQx3sMgzsCEEUTRJpxsRQYqzfnecAR4gbLqs12TtYvHNqwbRdG",
  "key42": "3stX8FYu8E3pRGRKpiTi6BWBncHYACYPo6qSd9faQeRhM8GSLarx9t8zXCCjvBumsrdAnbEwJ4TpEQvYgUGPHSSh",
  "key43": "63wos19nPTagYsUE1NedRQa7xssmQxnuWLo5gG8PVmZDhCUiRjVJKdiprdsukfhqeyp51uJ2WsBMGRBSygARjsM4"
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
