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
    "5P4pUJF7phk7hoE3BsNztGWyq4AoBLDoRUd3BrqGnYCBBRpyJ6THXRnugLt3xNnkupsBgGo8Aa9XjdvUiqLAiCpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AcfpYNVYVLxeuwKzoFCQfyM1S9TzFktWyd9zPEqFxowmNNan1nYmxGvP9BPv3atVfgqvNeM93osSS61rW77UrQG",
  "key1": "54GjLzcRxRhTTEKUNHNbLtFdx1aCByhBD5fp1VTf45U1XskY8KRyc2zbtGHo8GV2UEML22UNDxUZ7Gf25g2ZGMNL",
  "key2": "3Z3Wfjzvo2i6KnGTxbhu6mVN7waMmDbmYNQEJGXMZZ5qLzDN25DMZqw9EXhmoFFg1RTVbQtaNVogUCfnUB8MKTig",
  "key3": "4j5U4qhnSCdA24c6fBGWxfDxmxihw9T3FZfYtQ6dsNrRGjeMJ2WrNdbxScm1mo1dr1pV8jzd11Mdn6iD16rLD89r",
  "key4": "5esM4sKJPXrakNFZQN6CAGJKyRBpb1Ntf8HRDdYEVp67BpS7is5tDm1BS6yZtTV1qjc6JP8UdDw9TsueXX1jQeeP",
  "key5": "3aHwX3SbUDEdh9NnX4QbJAixjNZkX8fFLqGig3W4YpMSftt8DS32Y2tiHtze3B4CUrA6ZAFBe4jtBvdeeJQ6k6uY",
  "key6": "3JqHPKhWMTQkomG7FmFnfANh76CbcJoJTvFTMEFNN4J6H4anhiE91LDpqeJShAfLPGtrWtwaq1XZjMLCXXXhM92a",
  "key7": "2xaHJPbN3d78kWVvdSPMBn8z1V5woC9r9K6uwGHNJn2aHr9ZMXdGjYFLhBWk6RrQ5oXv6v3CsnMTpnyepdNcdfYw",
  "key8": "5y2NET8mtP7rz4LThDvxp2ZeYTrf7ujjZGDXSCt74Vs96iH9A9jMvgkJowNq8Sf3R1HxMMCacG5wQVwDnkivGHxJ",
  "key9": "37yDm6cPcSPLjTd4VthfxiRSNWbRDtopGXDRtkFgFTL7rRW2uVBDikb5xEUmb3H7yWoA2WpyXE6H9LoQDBkmdzfB",
  "key10": "5wzwW7qqhL1cLJ2SUPBwoSrYwnYsWm9fcACakdBCarmEGnz9Q14KJ3gM1r3SU38ikTsQwebyC79kcgyP9y34E4ca",
  "key11": "P8Cf69u72DWQxGFDGXcUvWxyxNdqtgmnksG4ZkwKCFc4eFauKVpKkHr26QykVg5EYqdE3Uj1GYA9QptH1se9UnS",
  "key12": "2KtTuuR6D1vkfm9jCDoUt4wuECixX55JH5SYYXKZCSvV7gfafpu4wszCKNxujwiowUzu3fKhXfyb7HMZoDTNzDNn",
  "key13": "TYuFezo5zKCGn8HEbHWvnwV3TtzP8Yg4noqs5T11QSJ89s3Ui5prYzvfhGNaLPXaMXo6xNwQPa3bkusGnt7r8xX",
  "key14": "ZkZd73wBKtaGY3RxE88zxYAnBZdTdhZrihdiUmtmmCcTWqD9qfWq6ih6i7VLjMcpoKX6Dr4JgDpJB8W2D5q6P5v",
  "key15": "5M4Lk5sxvM2CDkMgC5EY7HcRfwnKMXwdukvQgYJr2wcJfCmNmFkKMbV3tXTJyDF2RWjbDUkRjozUrqjwi892zyDE",
  "key16": "54ZajGk2R1Svu6M3GaFqCAS5q9srFNJwsDNc14JVwPuvCyk6NLPZ2wtFi5Wo7RZB3AdT55ZFX1N71r3MfkTzMx5y",
  "key17": "3Ge1gNBsPvXCc191htjVq5cnynejTwtvFBDdPpfwbw6yrCmfPdcSSKMqPRo7se3wW6zdmmDj9Vbgfsc69zRqXZFT",
  "key18": "624ytyaLnHRbPtR23spfH9CwtVe1nyZUkst9iMvm4F24JzRgWpZWK4atkagPJzzn9DGqemXCe4r5SznvxbYmwrDN",
  "key19": "234NVzZ5wahF7jecxvWWGbWNy5sDCrv9KXH8KWM44JguDDMQVhzX8srVTHhYoq6k1GETvEs8XWjLMSNAdx9BAx8E",
  "key20": "jcCg9R2NdLttmXkvkp6oiPpPFEgomoQATXZUeoVhEhPuVZcGdoZ2aCBnxwRWJX4ugF9hoe5DeAJrA2s7k4D2G9D",
  "key21": "5wzFFxiy3gn6q3yXznuKYAoGJnDAQHQGBzWuG6kMrSnRr9cTEmDDVis3jdPQRNnqqo7yv68e62sYzpLo7vij7kYm",
  "key22": "5ppzjJ43UNLKcaHD7fpfsNZBdzWUg7c7NLHQepAxW4cAtYJB3Acsede9uYLSRXMXjAmBmYz2ZuQwNkGC5r5c4Czi",
  "key23": "575CkRXbcEPhyqhGoFWi8APEUMrBPMcNf46L79Y2jBFByLcKfnJcn6hzv6xhwsXYkxnRCEFkYynzhv4Jb1JTsJZu",
  "key24": "2hj6SHsdz4yEvvg7LMFxuH9VNwJa7gyQPwFkUvXM7RATYaW779MbedJyFwJdYQVF1vjr699BR8UjpMbh5LhStBrc",
  "key25": "3y7zoGy6ttdq4mK1eEoUKoV5ZSH6qKyPsCL1CmgLXrY9tZdPtWoWfhhGnfD4pczdrztkfVdHGtPgYq7oBJZSsuYk",
  "key26": "2BjLA3CBDqJhPccBcZegr4kyK4LM4VjBxMuaRAqWHvjbT9eDQA3BW45SQipnxcA4XQpX2rkRt9s1stqpK9oWV8KW",
  "key27": "4Mw18g6QULuvpVJcDrZcSPX6vT9nvXQi7fEPfeyyRWdVdSLd6XCd7qrmz3NK7efTSFGNQn3Ao4DaDrgDY4D3uTus",
  "key28": "2tV7KPysbzEpg3seK6F7zm2AjRN6w8D5279nZhQ8sXmZMLdxXK5PALJWg9VA4K2tKDsPAQjj3GQT9ienKgKaLKwB",
  "key29": "QiUvLKzTYRr3rdNmbFDz6tbSzZXLV146XWWh6UbVmY9FpTDUWsVW1cVWW9K216ggvo46T29Ga2mXC76b4x7b9pZ",
  "key30": "fWNA8eytgmH7yzqZQQZKHn7S3mR2cnshH25myhipmtsto8L1oAvD5FRH6FA8Nsz3wphSSVCJiYm7AY5PHRx5zny",
  "key31": "3CELbFTjSV2vsNi35anUhCFmJS55jhPcHRngo9csh6wXkehiJUpANfxf4EbzFVqENRNDVEewF4aggTtF8SGottYV",
  "key32": "2j32V5SPD9orV7Ai7uLyGhg4qbp5jyHkBVYsbTrDbncrpsjzrKL4ckRjeX13yXbuSQbAsCGzK34ShcYa4xCG9xLA",
  "key33": "2xihVNGXJMEXyTHaFreqYKtFbvXb3Zop4ACZDsVfp7MsUaG2hiuQAUVKCXS5SYB2FTu6bKwyXq7pRywZL7mgm9rU",
  "key34": "XkLSy5W7g6T3sRV7uqnXK8ptjitesGPyB5ZKK4KmRirdxLb9AuSHYVxVcpwxg5W2TxREsuE1uJ6wUBp4bGG6grN",
  "key35": "HWWp7dbz9FQKMoydPyYkk8ByqLgJ8GGyXujT3DqWrnwEUH6iccEhb16u1YJu4TJmuYsJKzf9FCDKTnBht93sgv5",
  "key36": "4kyC6atmkDh81kekvNQYnh5g7tcyXCAbZtj9uYdZyt5j7TKkAAzgEs7kRxJBrdN5S8NmLNoA9X843Rrwj467nzqZ",
  "key37": "4sjt6xetpvEEM8cZrAo55exvW9ZhXisaH9FfKEki9uhMFiP9QD48zevJ1jk2m1piH65QsLtne2FpW4uJNZFp7inD",
  "key38": "3gEzhxiPaBEKpVWVqhpbwRcSAtSRmhTAkWa8fNsYymPvmVxN1ohhEuvCe1eTDCD5o3uZZymUQU62XBw3D6kUmXa",
  "key39": "MsLPSNxRpSAyVFxjboYEaWUDa4oCZKVpjrFFfeDW6AFvgWqpWQ9euCDhUN1Exd9iW2adjBcJm6jnW2ppXyJEQUM",
  "key40": "1wGX8EakRX8pBqK4BzoScUVgJ4H34WfEJGwrNbKJX9Z7rfGjBoc114rMgPLp6WtZFwhFG2kAnjCUeDQa295YBQa",
  "key41": "NutCq7yQ9SQ8yqXAW81SfT5VKic9ydEApoEGPP6PHy7AofvozocPfVDGwR5iPmyQUXtMd4Zs84zA6odZVhyHKUG",
  "key42": "xXstYN4LgVWykePJQw65nZgNFm9JTBhjeZRNujRstdWepgsfbHfcpr1p69VDc5bi9n25afP638aPjMeVnv97z5L",
  "key43": "4Y7p1y7wZz3f1XFQHUSrreEXsip3343AYoWjJqERcS92drTdn4MD4RyypC2VBEEizfAHjs3WhH9WCwK4xYFvVKXg",
  "key44": "4mCBPheTwQGUnhLvhipZgmuGWA6LN4rMcaLAF2A6yBt1iKdVQdEPWmYJ8eHjYkxoJ6YPBsTTszuWyUgSzZT1RsQ5",
  "key45": "RL1qG5YnVcPwtjW2Y4MYRxTv742Qqd9yP36Gi3W4jrSbgihkmYy8i6HUnHAYZFC97EnrZrjLj2zncbauMvq1fd7",
  "key46": "3GkCB5BxNG66Hdi7vHseM8NM85UudEr8VuJ8YMVMKgQ2pvxSyUFYMEHTKDTKf1p58qYqoRdqfTT82qVsELSapWYy",
  "key47": "h1QHQqZXoHRzjaCe9GNzQHa5UuR4FjvKLYWYwXLauJKh84bN6YTdzDWNzEbYgngFqSUb95ihbb9dTmA4jesjprH"
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
