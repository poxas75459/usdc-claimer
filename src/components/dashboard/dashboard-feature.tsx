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
    "2riWkyVETY8zGhf78MRUQXusKRR8czLMMVLmUdPJMPdK1JuyVuuc7Fhaewvp7TW4irZN5EYnzYTLuFHnRGT1HKZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSCN962s57NYNdesuDEkMzdaPBvfjosctSEiVExZcvKwqqTyXpwPeGU9LRtPdYuZT16HoSfWi4KufaWfHa4o4yR",
  "key1": "3uGucALM6j8Ai7dmPcSpUGhejCCn5VUWMGVrYm6QpwLbhtfvMgs6VN8gB3Ngp8sUBjrihr7g18r4w7dEaKLef3oo",
  "key2": "SVms29RAMGBM4Zfmej4smsX24HyeARzQ7kFqm7R2cnutaBT9tj52seiDw7vQmBSn5XW73wBzgjM7Qtgr8pfbEku",
  "key3": "5TDTK2beApAYnCA3aqQKShX43kcg1544VYh8EJQZUWMdmMdyJcQSPCKgqB3sswTqEXWMdnVF52coVSrpvSAfTyVm",
  "key4": "4gb2XPBYkvqJpvQoN88QiYXTPQ8MWRL68q8GL3opFyvhbsv1574siAKaj94gQR7t2J1mSZEAincsEysgQCz9T5CW",
  "key5": "5b7nCL6CF39DnsNjzMfarAYxzuzvKfTqPNCLCHXQek6YY7fhHQ2xs4PM3kRZy6XcP4yfZ2eCcG8TafEDwdb9HRuH",
  "key6": "2uNv4Kapc2LPqJTMTxwCcWjrnEUGWrP74W19xyw7tToEnSXSqe5QAxtRCZg5ffELt3Z1UTcM8e6yHyVzHot8HCGf",
  "key7": "pB8fHXu4aPRWiD8akqc7L2ukCqe5QjjmUAxqhuctBx7DFbj1c6oFWK2emJ3BJRSuxGCiDuviWoYopuNArb1V3wv",
  "key8": "2pBYBm8tYAsFrJDr5SmFWeCkGbXStcBnyNcQXStMPwCiHGSuSpnNzhASvwx2GQNyHYCCbbis2gMhRKdaABJ3dny",
  "key9": "5fkD1oYERNpSr1zWxazUpfHa8RxueJxvaKegfNpXcYvSnc95h6yGJxjAVVUgC6SFEL2M9VtCeDS9eXymaE7WUwiN",
  "key10": "v69vPBeJmkFSLzSDoqFMLCa7B832eca8yfYTN6jB1A5eFEN1qArUWR356NsrJtqfhRLqTr97SKXtDEeBXfRJN9G",
  "key11": "5ytafYHfgSGMh7F6hLYUxUwog7XRECnpseyEKG6uo3vSwo1wTLSLWnUK4WgrA2knzsm49LMMNv6PikaWeUi3won6",
  "key12": "YYyhJtWvF7vQsVLQJkdeQzfVwxuR4aLPZkYwB3xLRYZvcy1zUWBKT9GdGEcSK7396qf2ycpT6C84qZtU8ucPSB3",
  "key13": "4EEb7NDXHs5EXJPkPvYdj42h7gydu5dTkaEoZhkkdZMsHcxr6u5DyhBYwPqznX4DtiQTXnogJwWvhpjWXACHripK",
  "key14": "2oCXiiMYMWKA6P94KnJJ8XU2Na574xKDQLaHBjmYUwNZaC6zyCkFJAjUBjFpUy7R5h8BHk7Nk1XBtTtfNgGTnVXP",
  "key15": "2hVT1XaJsyHqvDpp5qptnqWCtspywKde25atvEZKaiaCtGQjvG2yb1ik81WC3H49XT6355MKUsHNXAvDh2uUy8tE",
  "key16": "drcFV9oKnqG5WtHPYgPBmQtGvz5DqrQgtq9tM3ZDHgeUCGAyGQDEiAZfqy7633bxz8XLrGEFmb32up8AyAFpzmN",
  "key17": "3pSJKDhK1d2a6AhXLqkp14ysv7SnSm7kS1jvPu7aYSv4hrJ9BdXKCQYy7NRjQhN1SCih77o5rb6EACSfcc8gyMdA",
  "key18": "e9f1bqkJidrG2tUfiSM8hht6yVHhprF54gJfSQuEgchn4usRs72jec2nerEtDDcVhLATmRwqh3eXTFg1NRvtt2S",
  "key19": "3K94Y67Nh6spCEnfCc15xowD6H9bQksDxVPttEhgAgjYoAPf9x7uLc3oM2uMfYKUTSoSeTitubMA6Goxj9ApRhL2",
  "key20": "4MuzaSKzS1LGuLe7hRvfEGkZaQwFNs2bshBnizRv9juXJyH1NwLJyKkPhrAqfCgXk2MJh4zmbQf2wxnL4yBCj1i5",
  "key21": "2gmXQqz9dKEaCpiFrKqbWTH9tADSnhyCSJGFarCirhYZm7xQPmFhW3S76ZaapZ9V9c6uunKXREoEkcuqFDggETii",
  "key22": "2eZgD9JE6Mx16xGun2rarPhmKLC4RzinR614nf8JLiw1dCT7GKM4spbx2fSYA1UpLZa4eaew83gb4TraPaLuNdYU",
  "key23": "HJm3Jpt8kH15FKs7ZpGLRmmqm1KZWAXdCbGy6wFEJsSttPZxKsqwm9oHwPFdFhMVkHUivWTF32izNpKao6g4r4G",
  "key24": "3CBUdBBG8dz5Z5X9QYex5kCFvVJDRBiB8LaAd8Wwir5hhrwcWPxrKY34wVCcBCCrhgCFgDHJ39DXVfJtHyDJjxT1",
  "key25": "4bHEkxGKrCF6gES4vqU8Lw5qH2ZXnf5EeAD7huxwSVwPDumzNDgrFT1nZ3p51h57JDk7ZCyUJVHTP8hGBv2Xnyka",
  "key26": "3fXHH4MG5r38e4mDxXQPWpFLrQBTHkBTxQirZ4AqmmVJ1BRei311SBqpMcisEgk6jL536jacjj7XDihNeCbMZJ7N",
  "key27": "4Y3qJ8pUzns3u8CwwjFhVBcaPm5jy6yx3px8w1PqMXAcovCy4gqFrDRMNjSFY94hYZGnsmgL4Kt9sPbSN1zEWXB4",
  "key28": "3SKfvrc1QWmnThhF1LUErLUcbm9zbUfRPUSBss9oJFUogjiVZKVJw3hMM4ysk6KbWuq2kmtdGrdz8ewKyYDAnGSG",
  "key29": "2t6gEKTnZBf8G958jCwmXAn9rC5nX32Gyet3oGBX3saShk4V7q7uMG8no1dkBtTCn29wP4dWHVF7SoLPsu1URcjr",
  "key30": "67VtyAjtN8zVnrf1harTswx2U78ByA5re8vkmwVzviAGYTkDHhM2Ur8E4eFysyVSDKbVASdQdQxoy6Ech6cfgteb",
  "key31": "4u413oKEQqNvxCpT1w4WqBNwYy2csF59bxMLUCUkcisFgB1pfLAzrve857FPKSfgo65h2H1kfsPxiFz4AvyhNFEs",
  "key32": "3thcLzpCYHLABeCwqSy96e7Z9qvTTeWSkRnxicqSdU3CT7LX4BprLCFpi6tr12JjySS9K9n5WSaaXmwNBgVdVgL1",
  "key33": "AjdDq5UM9jSNYeVm7AcoKNJcnG8cqNDEJ5wLVCVBJavovy6CHXxEPdgjzqgrRbCSe3BobyPfVRYhgRAh65x7NmQ",
  "key34": "5kZeZ2zZ3dBLgREFbHDBJqK5DttyqbwJpwXQ9drs3GCDrUXmSWHCKU4yi9mJwTZkqZoY1C4TyWofquwCpLMYPctA",
  "key35": "Q1FGjucSQo2y6KypMvUWGHPnXazZCfQJLY3VvsZuMW5beGAAwazu28YpMrHx441AUJYFDrfY3VRGxFfeafCg6nd",
  "key36": "5EKgkiAjSxFCtN2HxQH7Szw8ub8gAzK8hCzeTS2d6VGeAxWp2QcA9uQsQxnNFN8mU1DfowiX5Q79X6mZwTnUJQHD",
  "key37": "3j6xfGfKqoKHfCtpwkKWSWmjEMBckv7L243HLcCiDY6gAfv3HfMsXLoUz6PX6rYADV8bVSCEDpCihuzFFFawmTDQ",
  "key38": "5L3b8cHjog7Ci9zTxMkRVRuoRXX5LPkALrC1UWiKPXKcdxKrVDTshFM11VJZfyMpF72GQMiDMwBjdG4YsrxXnpeB",
  "key39": "w59D7LJcCUGd8WGjvE7CSFvbUUzU1CMTNt8YyvCDo9HDH6p7Wn7mKGPpuX65JeSrHXCoc1mm7zAEb3kTQ7o3JSR",
  "key40": "3BKTyME1UHwZNLHBFYA4DMTQ3FJiwB6QL7efb8kw7K9Qas9P2fjhxnzrMguhtncrB7uqydxFtAxGz3BML6PDra5g",
  "key41": "3rhchFBAsTyjysAvDpeA8qRkb75c5LhPjFVcejc3M73aRTYpSqiowFSzBLEd3Pq5Kzo8fSQWShdY5yBW5SLa4fLW",
  "key42": "3kdNMFG9bRHCcRefrBcbg93kXqnKn8DsZ1u6Rxn92jG1UP4ovUAbEbnrbrebceW2roeAJedUgA5cyVyEJFddSq1U"
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
