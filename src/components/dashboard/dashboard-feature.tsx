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
    "yKjqefyHFQksHsUV4icoi96ZHxka6cqFyYcnwWiZs4mb56bESdvjWFCS6ADQixRbXNhYWLvDKofCZQd83X8wjZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vv5R4TMRLDxywnQ6UNLgeHtLusXrcwGoc378xjAr3xFD2DLrWXqAQo5gVpToXUEvHJiV8ckFXDsMVXKhoCoLnGt",
  "key1": "581WpL6j1ntdL3kKpEiEcrMdn48ewxinZprp7jYZq176pejECxHr8utcM7qtuPtazYebayuiLiiUE95WhQ3gCNsE",
  "key2": "2oXrYWGNARogRRnBgCY563fCLk8G5kt8enNJRsBfjTKuApzs2EV3zP5dHNVqYGenzn2ZaKyCaz9kGwrDB4JnGyam",
  "key3": "2bEFY5oQmYVNWZHTZzFrXYKtuQ8dmDxAKRHGrB5H3X15iZk1KMAwQSRryHKAsWi73WxUs4uYCmu1YmpRqfCiLpGe",
  "key4": "4KSpCib6rgEevRtuetPGBiXXCa27xdEczdmCWB7B5n1enoh6KXSJVGYy7dUktnhLSCaEzEyNpitd1q6NE56RNE5o",
  "key5": "FY5jUGzQZLjEZuu8UGz6yimomvv7xbzPQBw8CKChcg9WESGzggE27M1jXhXcUaPVK555EkqjEpfMf2ej81jcuCZ",
  "key6": "3tEeCw2Fc43g9CubRNaVLFsATgjpvYJPmuWt9gsf7e4JbDmPmPTJj5UcDDQ9FieZp2Z98mLY4D7HaxCHWNjZMF5U",
  "key7": "5n7ig4HXdyVgbJDihB9h4Gi7Wzkvu2KW3PU7iyWmyoNM7WkDLj2tg8mVHynd1r8Vv4X9jvzDvS5gxepVeWCAbrTD",
  "key8": "48mf7divsbBxipucnyz8Jduxdn2GeZXCybWqaW5oRYMzQXVWEAN1uVoq3ZwEdGS5kjB8j9zRV3K4HLCr4LgqXnmm",
  "key9": "2wwnHkCfDnjxEcyFfK9LDD2N99yVy4wz2CLRQhSopj28MKypv29WVwKPkMzHBEnxnvveSmBtbdW73ZG4atbQwCoH",
  "key10": "2WCQN3PoUBtiK3KMwrnuYd3hBUD71FEYnWWAAa1C7nDbpCxRH4SoXaJjZSR48n9mqRkJt2FgUUsikC4uSKzTLzXA",
  "key11": "FnvyJjm2vCLFdCw2sK5E6d5KWtAE258RyPuEv69vWN7UWJKdGaP5qD2PKSKjjaeL3psAYwRhs2ZghCYqkZXYV7k",
  "key12": "67QAnFVGWUKNWoe44qJBLUtJmMRY8AvbGchKEZH8wHPs38mxRz1UCt8ckWQLoz94bPGTTXewk85awCtkVGRLjP95",
  "key13": "3SxJ9Ua8ucnmB7iGVdSp2H5FQxdiTuAmVKYdBDZCa15QFTBDrjRqENtzhxDurs76tQyhHbqDoGAdN1y2Q8yowVK2",
  "key14": "4SE4cp5MAwrtKobCdGcR4s9LK2TeHJEtKpC1puHfmMDo5oiRx4oQ6WqCQDSVcky28NvVpToDTcqECELFQ1ZunKMU",
  "key15": "25LmxVqE6QwR6BUa33GZc2HHRbwoMLZMvWyRbJwvR8Yz61LHrw2ogjo54URYoiVvX8E6hMBaCWA9ggUzfdhfnJdD",
  "key16": "3Vf7opwYgzSK7rqXAooyuMvvK5CFbeovMgm3XYT5PzYQ7gXB3DTpJHrKc6ZzQUH2EH8fAsPiLDukjs7dCxw7XSiW",
  "key17": "5LnVYwSqZh6Mv8QTFTWaGJ2c3YweMaXYcX29p5c8t9g3Prpw14ZKgEGz2GwnbPcDGxKwGHM7Wqz2eZ4pW6iBybof",
  "key18": "4RFxhYPPs5uKiwRTQKnkVgo486gLX6pexrQhRLey1qnFXDmkxnEYrWDi49cr5N2orFaoZxU18gUCgBKeJhYsTjAx",
  "key19": "psAb9xPQ67oG4NLRB6Fwn6RC8BVHhKC65SaKccn44HvBnRPaSquPUiRYamxTd74eSmaMo52gGvE4wGzk4CQcuGs",
  "key20": "5kxFuT6i74hyqBT8fjQUszcYF4JA1mhncNrMYqUSkrwq52M4sfcqgjp3HQPcTASxffVdxRGqstHfBFH1k2k4rHWD",
  "key21": "5i13sSRgZ3sRyuB3YtYE3y6r4Qb48khsNqh2KfAr4YTj6AUwxxUzna893dccoTbHYWoLize8gfkFbFK66Arbuw9Z",
  "key22": "5k6BikgT5iqVZDhmGJ1sk2Xt3NCNjEcshfcVhh5XcnTiBToDBNN8DLdmef6XR9Z4JYADmuS55Hv11V3MphAy2Vzh",
  "key23": "5bNgpf9SYqVhut9gLdKCecGcuNRDbgVYpDkTfbpt8vu31DEKaYLQRe9ccVoz2hMEgZWoguNszFe3QsAoFGFrjd8P",
  "key24": "4GfF7a7LzmzQHSvtKahbQPN3uEMp6V7YRWPhbCz177Fn3j2WV3uC8msxxssceYRRZyfaQShFK5aEctNKmYG8CQiM",
  "key25": "3kzV2hLiPSnczYP3bxo7y3XiwyWvP1vtbNND6WoT1AFWz9Bf1BuGxtXAJ913677N7Gj6wdtmiWXHas7tTQBAoqyG",
  "key26": "2ybDp5fp7pjyUU67MVaHw4T2qgcH7uvvF565kh2BsvmeHUUYq3QdztpYAunYQhXwGaTYMzQqnJ7B55VUjQbo7SXQ",
  "key27": "2eZKE1EE3Kxo2Wn4XsdhzJpZg8pPQsAZUgYpoDWK7m357WVDuhwGpPHewjnERJ86fyUt5u9dvRRVw8pan28MhJH5",
  "key28": "wneoXpSReUJxUHGX1kQ4d3fT7HogGmZZc1EJqdxiWfQXtVhhV3daAjmP35xKvbCa5yzt66gnz1Lc63tjUJwdHuZ",
  "key29": "4tyM3WSfPqj9GBx3YG2TNv16Dk5qjzDB6wYCgNQYzqobQeaTdXBBKHLu1bbNtvNReGzk12TJEt4hGDyCdbXgeDVM",
  "key30": "2itVRuTHynHakJdgYYVv3kpsziNDTPLr9eMsjwCPoSzgfEzVkHiURaSCkVUmAAEZqENd9wMpVChPFDBcuTosgyaV",
  "key31": "4EvVhBWqxY4cQ4N5xdiLe9THfV445hvSuibJUVRozrrmSuQdDea595EdAAvwdUKNJp7CCPGJ3U9dKPr4DPfASfLb",
  "key32": "5LizMJNN7JVwLkTonMToDMesnt1WVgTUDgeVWBNU1b4cz73r3Zf9jmGYJsUXziHd6ZDUYsgaTypudXd7nwSFV58T",
  "key33": "3QzGRqVk27ZmjfbJ9s9ozqsKwSfeHKKCjWY1c7ZmZbAfvfpuhvAxnuizXu9mW3VYXaqq9QPosc9e3t9LEsjCCHYs",
  "key34": "2zYL9EGrRigXunCp5hZCXYBXJqWG5FWaibmnVxgJKke8Qn5tRHudi6qzo3svMtsdHykkgCCEg1BGfFXfbx44BhsP",
  "key35": "s4UkxCoR1RXH4Rd93AiW9HLGGKtDbMtWGi6wpDfVSZduZrx7DZEEiu9hAJf5qSpfXhVxwskHnntkJnAtfA1ceXX",
  "key36": "2rz5MtjT7T32pH8K2w9zz3rvdjrfwVApmHhEfV4mVnaKTSuCWVteRZMFNEtds1CV7hPHZcUxuANk5ya8XE9WTALd",
  "key37": "2UVJSTi9NUAuijtnyxxNFohQETNpmzvhdsRohwwberQBC8rddUhQ2kiKKW5k8jtKrr9jYc5uXrdHUU877xUTXesm",
  "key38": "4qQWv62meoLsspBwYcHYyC6wpmWU9UgEEhueysR6yjzfXx8gaNZddn4qVSTEvdKUKQCN4XDyRhDU4WbJqwC9xAcH",
  "key39": "2XZUyuJAYzkx3iToZDaR9VApvd92cHxprPZWH53DxWgQjxk6x8n5bWekw4wHPEbT5pXTsdtdjmbzbSthMsJCKCEn",
  "key40": "3acCzny5sQbe7kWtwkz7ezRg1niHDagG3zW3YZpS5ycWsda3XtwXXT96nnw7RsnE7vJL2pyJjgdBUCWm13kiPtyo",
  "key41": "378msTEjCGbYbYBNu3MsGCuDtQLTMDXS4pPzhDSQZ8yEdqBfLQwPFkGmb6RS5dSiJHLKjn7Aem11fAZJjmLpAR7k"
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
