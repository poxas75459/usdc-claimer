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
    "2KXKyPpjMLhQSTAJziKHcug7HLLoTnZxT69EJ6QzTcLVCeV4raypLGnMQDcRHCL2WjEXpaYFA1UiHz2FYWWYcQDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjUTfZyUcjXJ4T9An3G9NTLbHmTLbu6giNouzwLVTSADwVqWhCQfg234hSsB1QG2RsLACmZGnRArZ9BcvFFgQgi",
  "key1": "4TDeWkWAFDroAnobNPhUdA2ZEUEpeBFLXkzTcfjBG5TNfMbWFFDpQvhgbYngQRp5PszK3agZpCo3TcA7ErFxTVLk",
  "key2": "5cXXBHM3HVvtysXJACNkLQ8Y7zPZdLUcgfvsaLHKchVi3sPRjxoymesjEe3f4bw5WCvrxGnzYZdErYsMbxAssECB",
  "key3": "4d2mqAHWZ24CrF8VcBiWiBfs5wYLxH9NEEZFBF4UZqjm97sh4EexQ4jrFMC9J7VdouxbQe8HuzMDVrRJYqCWF5vg",
  "key4": "ZYuPdAEwJm7TWf1BFVYr8X8aHNAXjuWg8PVTAyRDdrN1M89xL6rGuwzCgSVCFJdMsfXsua1qCqWawiWBxeiDKSk",
  "key5": "5H5z6fPzGxcXZ1YrXAu5h834MAer4sCcisS29C3q13wFHyKk2Ua8jDVbRs6S7So7RcbaSG1aftjGQ43JwR4eL3XM",
  "key6": "5SFeRWitHTrfGNMWdqY378NXsw6LQvT7zjQsHSZXP3QCKXJSJ5Pz5hPfmZHN9TnJK4uW9UGcvxc5LDKWpr1PypUA",
  "key7": "626VMevJsoZCtYe6nCSWpRsMV73kbgMDYGXwjK2YADpHjLsmp1wvHMnZLz8TaaSZWusiUGvDbUkqXBEiayfGd1Zq",
  "key8": "3o6zdesZcxE7JUTdvJHhEW2dfAVk1a6mkgr7wr15Mwnomfx4Za6NtWkYBjMXp7JDRdQ17N4dH3cNZGjM1kmBJ3mS",
  "key9": "2JeWvufpzs8GkFzxgJH6geHiUJNtfAeigKzGLn2fhUz9BczpavAhxAAGo4Nv7dMUWGhQDv3xxHZA5DFgAv5Pm1b5",
  "key10": "3ACRZVdJLLuJbjVPqL7iirLzkdjoBkFdem1pMC5oRoFUz4VsJ7TvUua8AuDoCDnzPbB7T7hzrf1gMYyom6GzZbTm",
  "key11": "4T8RwFFk8wJ97Pb2wK6axce6mV71htuozdTXdvhkVj5xm4YrH5JRcaEySk6e3nNxXLmQSuVUvzQ2P62gdMNso5eR",
  "key12": "4ESHGedbzopmrCRPYLCfpm3omMdqairKLomBd4z1k1ePD7iChAnvMpj5rojYtB3j75WmUphY3V5yszQy6p1i9g4b",
  "key13": "pFJ3FTcuAhCNRhzo7qua4YkqfUCpm4GGeAPobT5VNaH8wmAsQqpQAXauj29fAA9ieT9FidNN8F8dkCZ6MHCxNeV",
  "key14": "3jTnzFZEiyqmA81UNJ28PRnAkEbEY8TS7JRA5LEAdGikXRVvtMwRcRNbeihYSKhEqFp9z6i7pFKCTZg5ui5Fvxd",
  "key15": "2BFkwj2JWoH95VwEtwe5qxLTsStStCobUw9bfmg71qcGTombvEwfdfZc1htTshpYcNU685Mc5Ax9JSV1BusRHTYN",
  "key16": "3vHg5p8gFbwoqHX3yaM5nUBDvbJmPehV6bTe8DwiZjzejjFCFx5kgo6VheFb4Em2mjsGgsv2Pk6Cxb1nYrEmVUQB",
  "key17": "34Ctfnr3LJo1BdaKptE7iJMx7rQvi9C827AZxsyFyBKEG6nEoVgxk3TZRnAWELJWun1xGvJSLF1WYumCY4o5pQPr",
  "key18": "2Knnik3NjGs5MnYDrG2NEcz3LX1w4AtRKB2q7L7ELDjMybvy7jdbceWNAaj6hh5mib6AdaL6pTuH7JsD8a2Vhhv6",
  "key19": "3AEHUEaRmTfTb1411VxdUrEcCzG9GVktwvx543fy2P3UiWSEGn9VySG5G14y7vhTUiKweH6FuA6eSP6sLrKSZe5h",
  "key20": "4sztBuLMVSjmV5PrsXL6BHiBb77uHfuDsvMbFMtjXMwJCvwHwaDoQGPTQu5upvjXoXe9NF1MUDRWV4DTRTCzkpEf",
  "key21": "22pWg36JmSZzuDR8UKGfkWR4f7ZmByFmMQcJRkDH8iMvbmbB8Ut7rtbDx5cKQjGwhk7PTDwye4wHaEjCKKnntEws",
  "key22": "vYZ7dQGasxDLL9F1cT3VLh9QdooAmsNM2VFh8gFjQwRBJWXyKgFso4aMbAErLesEFg654H4s9SHyogkaGAbV6Xd",
  "key23": "xMjAd42nEJE9RDJykQ7Ht5ozsdr4LXLfmvr3P7t2jng4EY8p4bnMKdghrov7UW5yfWP7m22TiCp6cMbFg9yhWTs",
  "key24": "4TeqntHi4SFpJV9eTQSGgGnWkLioXVgEYqo89xpNB49c4ooAJ66UWe6Bqro7hoFZDPSbnGdCBUo5LmcUz54prdSG",
  "key25": "2CxD218eRFnnjdaiQVKej2vbQ3bPLaQhztjXt1cAJESejzTo2gejTBnxFSXzMc3QDzWnWjsGvgE6zj6YT6y7npYm",
  "key26": "3XH9QPPn8Q1PopYWBSugc155ozw4XKpo3BXBtZN3dYeeVMAwyS5RFfHVQ6cjuGAB8x2ywt1kVzyFSYr2RFixkvyT",
  "key27": "2G42xbEypUb4pAPgvpDX1ghvEvrDiCpx4DN5X6A9U8FfPtJ7gEYyApPSNeuC2bAh1WNsE3YnkQkFnAHLpwbFsk5h",
  "key28": "2WZkw8nhZLB2yXzPg9dhCV1dWaukuqUTPN4qUEVSh2JeBeqvdz4aL79Lf5huUgpPNJShJtPcJQhRChcQNSVGLfnm",
  "key29": "3d6nrE9bKsRZ5grSFEHNPyaZJUYQePbEJuFxSQzhdVCVCWXcQwvyS4qNHQsA4sRcZ7Dg8AArDLb1T53yGkFA5zhX",
  "key30": "26Xg1xayPZy88Ta3weSADKSkiw6ArHBFX2ZaiQRk9xzKT7G5ckCcmqXExngXCaStm9uyki3vP8FuA2sip2omheeL",
  "key31": "3Y8da5qbJirkTyhPe4X1qyN5HJyWJbnUfVvKy2miVdNJcMqKoMJLmanH52ufAAZvgwFV1RXTVPFF2RPq1M12yDaB",
  "key32": "3kKxyY4nxoLagX3Nk2VLtVg4PJLuNqYXjQPCFDHKgFhm24PpuiTnYYAUFmxSaFexTRZhfNmiZqmpxAXiNSqBJeCP",
  "key33": "uJypyea9YuDxnMRmuikEvxi39kpPqTbT5CWBeHaMLJT2PuTcdVZjwWrjzyzdhRm1huEKZ5hc1oEvwTyMUhyVr3B",
  "key34": "5SCGXBouEV5F69M5GbnJyKF9AahPu4DpZDq9ahxJVnoPm6RMMwaDsN2JRjaGdaDX1nM3MFKTLhuh2CGr4czSDuGR",
  "key35": "5Fb7DZE6i5NTNvX8Df27s6WJsfE8rDBGyioGge5Q4wtJHx4pN7c4VJNyV8YRnZr9FKKjtbjMB4CcFWmfBzBjsSaW",
  "key36": "2LFwvZroz95MgDzt7NFWEeuH42aPHMgcTf8pjJjNCjkjcr7d4NwGhTCgHdE24zjMCKiJ6bZW8S9zob2rknFxW5Py",
  "key37": "D5LLucSVHv44bwpg3dLwvC4FanSy5Tpz9yjDVZLYW7XRseKfLcfMFy5BZz9i2CUJbtEk7MyWrQg3fdKcVWnTxR6",
  "key38": "dq5pAZCHf2fQQsf6wxAvdHMefavH1RYwXvgmS1ecCdVcTv154g6JhbKHB1cAdc1upEhgQJSpiee6MENvGcDhiFP",
  "key39": "332zPye8mZKV5gsyV6aW4p5hEjUY59SuMKGACbJvirFo5Qq6LyaEoXV7zQ7zMgcMZ6oisW2v6gbTwtqwtNPQYtxK",
  "key40": "2Rm3Fqo11bSr9wzWwsdhzXXtZoirjvyv6VP6Sx96B2Z3ZBSCchoSfc2UiQHzNb77HFSy6rCpx8dmaWbVQc98u1sq",
  "key41": "29HAegW66yDGLRP72b1SbiL3ULe8KnZvmjaWbYM4Q6n68BRckLM1oDHEShK8TqG6kA1JUJnWVWpwHV8wLMGMPvQB",
  "key42": "5QrrJH7hrSL1w8m1Za9zj6VjdDdRDAu6KYrHPaPTSEVQxswRNZkqVg3sNz9qpHPZ7daJWDcRWhEv5aiZYxFfu6UE",
  "key43": "ZB6hCcyNthp8yqHMMF6mxLfNcmnRYisUFxY7kohsmhEPKpDJkDRBxtTz8JDHx4w5kxF9z3igxFuGJDdbgZTEzwr",
  "key44": "24jvsKShQq7LHsd8E4pU8XBmihxYZfP42yRuxzsU39DaCcKxwodFHFTPx38Sc72ac2bZEDYrT34naUdKsmezkDYn",
  "key45": "4mGi9tCdTD4gsrKcgVWpuPqVn8vLFAjXepPtAhbpBTtCmMqqK4Lhp4PFU2jRZZVAgH4QYUqXA1PRoQojAu3GXTmr",
  "key46": "4bGRAhMf6nFoZ3n43MYqzG9rJSvhNUPUhjcF28ZSCKcoSbF4ksMeHhKeZbMXhS9idPhuZHqhjCC5Ct9vkvfiUrE5",
  "key47": "5j7cQ32x5qQLb19cCfzHMh519gTaUN2Br5fDyfB8STbcHqJu22N6tg3eJe23C5sRLAUubDPVneNXp2itMECmDzka",
  "key48": "VQqGhWx54KuhkBuNjTdV6xWjmTixHipsdzKFugCCyNwGGvDws51pcUsWroWpCK3WVN18cBnrvC8HsTDVHRof8WR",
  "key49": "39Hb1GnmZrS5qF5DiEALcwGocRCcEhu2pL1T8gMS4WpAbxGYHtSaptZrj47GjuD3TazkZM8bMq4QkpRooFhG2Nhg"
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
