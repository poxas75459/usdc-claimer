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
    "zRMoq476rsQ43ueYEoHJvievkz3VvxAyToU4uMfgNegPjPeUCFqsdMFuz2jmX2pm18C6rEXUebFoZ2uzReqmiWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khizCwkYspkQKGVvdUmvvnqs3Br13mefJgC4t78Zm7B4tjeFD6ozfuwvyTi6oMTyRnuaVeeBWXmc9vqw2LKxWJT",
  "key1": "4Chk6agGTpQAi3HVsVYsMnpVUyJiDGV6iz1xPTidq5AkGPpJENiXpPQpRuZL7tHQVNANUUGAUskpDWffGwyfM8jg",
  "key2": "48ak7ZSbE3WkC5b6dXtJDug5DLRVGJaDZs2vPM1Te7WwNAG6XBJjr8Pq3nFMv42cAgRPHcXbKFemCT11Ttgj4jzC",
  "key3": "4cf3HfoVRxXxRqT7A4S7H3GfhhRY89iiLWtDDPnAYeRCZb3NEgiHVyQE6XQJLTxYe8h1xD9buvMUCifpgT3zk9GG",
  "key4": "3Z2VbiXKSUqTx6BJgn8wMR4L5DCzNnBPWjrsRsr24QGjPuQkPeR8JVLKR4G6ry6DfaW7okQpSYcj9LVS4kZTE14j",
  "key5": "4LFTv6jr67U5cjggQ1UgzSuFVyzhQaz3oaChzAyxNGPc8HJ19Gsh6oEfdW5h1yBd1kp3aF2mY8qjKpvadH9vo7nD",
  "key6": "yfcTFqjAgPFQ4W9DwxQ8bE57UUa8uqA3snM9tTkL3YmLaJk9qTA4AL3nhPoZtvsgWj61TF3BRMMPGzhGQUH4cuv",
  "key7": "2MHiu4jMTaWNYWW6Pp2oJPTX114SVDDxzBxWoccYApT2sVyZXCb9phz5kv1EBfy5jCidErcRU1xYnKVtWJsbJu7m",
  "key8": "64fdHUAEvYoMwcoPJ68jLg3s5Th1AWm3aobqVP1o9ZcFgWpB54TczEnvJQD6JFDRHMcgwVK1VvKLsK51q3yNqCvM",
  "key9": "5uu7MFyaLQ3ACZcUTsadhcYsKv43RZCFU7wMgKFNfBJdS7qwc1LyMmMvxA7qQLEonQWZZjit2JUWmuBJNMzERAk2",
  "key10": "4ECC1eRmW6LzJMPjEpffevLUFNuHpPmUPDxNMDriUdSDomyJgzunm5Add454Bx8mG8rR24dEXGQK8GM32Woy5Dfq",
  "key11": "44ebh7Q8Pcg7guR3DKvvJwMdazNrjFoda4hDJvkfCAoD6aNNGii5GmR5LDBxNi3CvL6EaabQDcgJA6sDCuRiBtgq",
  "key12": "4yWD8ZH1e9X5bJ5V5GfMR7q11mQhGas5FtuHRTdyadSbCbGTD6x5fZKSM7PMzEEv5haRr3UcJBpFWApSfpTpbCKv",
  "key13": "2AYTW629SphcCw1WpmFCBcQKuPjZtduNJCK8fRoFMVTxtZadEZD7REbEpdZ7wf3bqy1HGVu7WxtykYMX66LX4DR3",
  "key14": "58jHPabDMptPrSGsRPRCchrubaZgBfBGYgtH77nUMf9TakV7MKGHUKQV8CeU9d8FF5nCAjjEGQAH6aT7iZixzfbj",
  "key15": "tNvYkL7CdMQCVyacZ1Rv4vFjs3NQMzxSjW7ERaHB9YU1FRiFyk4sApzh2E5kQuVnMxzAyfcGBozrzbs8XDCVyUC",
  "key16": "4VDU5DaSKgvX6aDWzQWeixZAQdAdCH7fEMaBx7QmTjAozEYanc8kDvSCDAKGDnrVgkAReHzf6ckJhtVDJKBd4KJM",
  "key17": "5445Yn4uJnHtS2uSggCdwBKLQxpAheBdb1BNL5rzeddwu8ySET6Pj2C9oX92nZYdSBAoE36mYXcGCBNr1kfCFSTN",
  "key18": "czHuVMg6a9yn7pdUxXWi4fNS6BXmobxNivx28XLBFha271rvc9qcGSDYE7eEL2NosMfpuP2G5T8ugHjXQw2oQ7z",
  "key19": "xHfSufSgk9ouxiduNwc69gHA1WxixFtXXwsMZ88B544RkwoSg5q9K3gbP7QnktGbDFSEeGJAfJzn19qzojLK3oN",
  "key20": "BNLx5ZGAuXWW9S9gZUe7QYtxhxZbuqi2HBECBFPnBj4VH3yjCmxU9Y9bF2UGu3K99uiTZF5p7qnSxcgF4U9Mc5m",
  "key21": "4cvzorjSwLu98hR3U4ZMbBtdP9oKk3Jj746wdSPVkFahnvXSkW8YHdRJz9pTYNcD4BtqfLLMNaGf4hkULqciGPza",
  "key22": "4Aqw3fcBJfSaZcE9Xw3wEiG2vPr3pA9Ryq7FKV4yqTdba8Jr8z3Dbc6Y4QyTAGndXgCRxALTPq8ajU6gNK8MMed6",
  "key23": "xPYgMoSCENWUsWmwPFJTuA6f3MnLQ8DVyeiCVUXc4vMUvjndNajnKDuDHR85qidP8cBVE6oRkuaQ9N8ZFoUSpUg",
  "key24": "5RqRF1MUBcTrzodnXFU24CbaiCY8VKvJ52dft4S6J6V3FLbh4JEzG68uGEBdusVksn19grzRz5d4zSNpJ6vNqNsF",
  "key25": "57vBKYsJKozYEn7QQt99Vi5AgBQh2X8w93ZVemNEikxmdShUbSyzBh2urBwo8oLVduerEREVML4ioHT2PRS43UFo",
  "key26": "5WudazWun5EB25682t4wZr8pdANuRYV61S3W8HirPT12rrs7v1SttmecWZgYti1ZGLRQiCetvVuGYatRdMiNLSLc",
  "key27": "5ezCtRzK5u2vZj8Two7cdapRSRwJiuEY3fcKPQroE84khzyBhB1Ez62JMtzhiYhFygkdUntgKSCuAErUwsmUCSkV",
  "key28": "4xJpJigBswirAgCAjcmrJNSKTxM3Z7dRMoBTw9imBavrkfgUgcxrKre2ZmbJMaGF5SM2QjaKg58jaWMfHRgubYyN",
  "key29": "fLq1aAkbiDXXNLLwAUvxdxzJJsSow1MSSQ3Fdg9X7jU2GB6LVVgf8d4rs3dFL6gWwAAMAqgLpmBCjBDAhiBdcNy",
  "key30": "31t1UuZJewXJnkWJaRa4UPzsqbjzDRQWKBeVnHr4oPpnNWchGzz3aCsiZJ6BRoY3yr7ZdhKUUz4HcwmW7yhYdF99",
  "key31": "QZVw4K3o5T9vDccaAiSbazvHxHGBAgTWvdFiU9iwHa5K9A9gKPLbdwAfnauEtJyA6rxcammqrWjof7jM3c6uaby",
  "key32": "bLs8MrfrJPfgMH5v7xHh327VYmudHnRkjZeCopNKvGCQFSMie24zFsPW1mm2CGE9y22FbH9LyrVbF9i9isT15QV",
  "key33": "3SW2DgakXB2vHd1JUKaS2921dh3YzVggSzisU7Sa664FMNGe2qigdHKPoGQd2YmF5GDnZLPiA9FVv8rQtkhqreBY",
  "key34": "2QPxyJ39HVzaaGNbmSiGiEtvuoG6XhRcXCVTGxrybzyXxpmDasK1qVZGY4uNBpM4VaKDcF1QttT6JdDXyo2ruTwL",
  "key35": "5hGSbjyUUaKx3uuLwWM8vSpMBpzfCbL5qgvHxiWyghHbk2gmHbU7kPdCPfzgQMYiYSTBhSw6z6Qg6QyiSL1SSkVa",
  "key36": "4WMZyKAryeGfKXiaYJHvZXNJQBu1NiCfSVBgzSronVqT2qqSBtaW6HXFXGtqYna3PKowLYzeGvgmQmyfu2H6VMYH",
  "key37": "5EKAwwZXNaVxUkcg285nrmkGSKPbaipKbputs4u5uu5MBaodme4zkzuyjCxHjuRwRBbFA6ZNC3Mg6M4MHxoZF6bK",
  "key38": "2dacQ9dAEsxxmr1t57RJdz5onJt4ZiR6ESr6Q3juzTMhBnebsm5DdjRVjvPPp3n9ZoHtzhibgx1cenxayLdJY2sL",
  "key39": "21JoMfGbLaumFyGjDkjpccrs9bErQ3P2MRUTkQkjaKcEJ7S9s11jE748Km7pe5UDCguENENPNtewpf9nXy9TmaNk",
  "key40": "49AKZuRb3RVMjfkLSoHjqAdLWuKGbiX6VxyEL31EbUqCZjRrs8J9C4qcmvoiQBneihVVkHYjrvFvjG1QuEmgeLXA",
  "key41": "5jjEJZFyPp1Rv5NjoH7Uda2N78tsj5ztxcFdYnnTogS3oPagmA1ynAKQAYLtrjoJ5UoWhhVujp99D5gEUDSFS5gt",
  "key42": "3yEQSXQrZ5TERyaAT4rsxWfss5YrggKDL3A8L2tLphnhozHJbBnUpe1a49xWxhgpWjSA42NwBjhXYoq2oJ8rkqWz",
  "key43": "36sAePWynzTwdqC5VJv4t24iLPNGF4h9JLLG5ZJzSJDopwBnSpWb1MFtd8nyGVAJQ2qY1MTyKPWhqKfuTd3RKVw5",
  "key44": "5U21phok2E3yJuTnwKrowKDnt9s51cSvGg4MetpytA7b5f7okrbSwGGBNMLR39z15fDxS53VacEQckAkwpnYTEDD",
  "key45": "odCdzntYGoRxXKNpSWxXogvMMZi3x7cRVTJHo4FGRGQRFW5tQaDsvKdnGSAvtVUCVFgFTu9fMgLDuahjZsCEWjU"
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
