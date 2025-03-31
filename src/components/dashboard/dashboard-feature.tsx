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
    "4HY9tZQHnZtZrV6cKs2C35Q3V1c24kTsTQ7U2g3NoQz4xSWA9ceoP5BovKgyDnCemyAhbF5FPoaB5Ho5EHRVbwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PdAawRyXq4zAeyRi9Y2z5qk5zHHDk9w5pECjJCgqPHcZmpKYivGU6Mfs3Nux8qWb5PzxdJX6MrxYq5sskZGh8sT",
  "key1": "2UYoYtHLHt5hCTPGWAj7hJZ7dG1kt3NW9wxizG67FZFV5zvuuGYCg3jd1wwT3iSe6QFRnbaFvSqgTbCWM73BMxCX",
  "key2": "3cqNfmJDvtqmY8mMzPFdiqcC1TFhuggae858bgHukGHE11TdK54SwJVPUa7amAe3vGTG7BFYReJAjNQvENkDcvWA",
  "key3": "4M1aHYy3JDwL7oA4qV8FWtxYMH1hnQXK1MtyQ7simPWH77v9RCDPg2qGGjHwxQ4DbcrtoabGhzPJBDdyZXUSAqt9",
  "key4": "4A4LG2hRrKmx6ztQwamd8wZWguk2EJtKSJpJN5Dh8fAXzrUogFbygB3Cc98q12Su8BdJzPZUTCE5FZTcXHhPRUgG",
  "key5": "5mQfprdbwQSH5cJksLjTMjwRXA8UN2Gvh1AjFHTwpBNm7Gieh76VSYQ3MSmNgAv5HsHCg338mku9imuosR5uHAeB",
  "key6": "3axL3coFkytDaLaCZmBYs9rimBiiwFmTNmAAPo6XNxp1aQi1YaZgGndX5QikrFtaTV8Ma7HXQMG1okrpvApZJZ3s",
  "key7": "5cNuhoFco2b9pp251xRreqQvjiLT23dgKCesd31gBU77EVsVJNC3puMYG3MSeFqJHQdikTXj3MKtjhnLv4oxGrzp",
  "key8": "2aKBg8h1Wzi5P9tCwrJc1QNpxFiTcazxhMtMhAvAJk2xy8WFEe7ZQGs9gt9ZeQuM5sp4289oUXWZXXQYinQrZ9BB",
  "key9": "4LNzSuB9oaLiKp3TLCz3qMRDQQUB1nqTekRTqFBm5num6hzPHzkKbWbgNkFKC8WW3QkSaVCwQEHMhcqjiEW86jMk",
  "key10": "2UuMU4vVnghxBdkGkidVhftsupSwZJkzE9Thm5Vsnbjr7B4hXXurZikuKREuKjyXugaCYP3VKoyXvqDLLxETpQ95",
  "key11": "Bqyr5ENHk2ocHuweVsaRD5Hmmuj7PygCuerxyynf6twpZeDrTvLAqNz8meWWDz5uwAi7JFQ9Yw3S8hGPxsd94EG",
  "key12": "5dpJAkrLJFFZrd4NNFmP5kkww5Yi3v2m5yrP5WzT3PpeZL2YyZ9LwnRHxhVs2uDWtKb8NB2j17R1NwPrJMbkWWnV",
  "key13": "2sNxbctz99AExPS3JKK9JiDZsH8WjUnEsUBZbzEDeLGGDptVmJPY7DdQD7ScoW8KYGh4Qod2jUfELpQcBcHBLVso",
  "key14": "Q18vnhKwEadfsY5fG2911tvR649s2Bj6VW5gA8nv2DxUxPLw36T6TEDenZJ1JdwPsRdhSVZivpAiXSQMh6EQ8Ef",
  "key15": "2LrY6obJabw9c8r8ExUbynguFQxrSyMTUnZKYDTo6ajheJc5WhgaFNuPFByNY7nYeSZiW8Xwrxb9ECdiAdpEM8PT",
  "key16": "3cA7VwFKsBgDeZFeV6rBjd4bWE5YNTGZQEvmJnnkNTfgdenc118orao9y1BFi2a1hA9J63pkSxAn2BAq3WWYUA1K",
  "key17": "JyyaCAFN6RrrMUvnNGVFNfKcB8YujDygJ2iSwEhc84BLA6wt8RJsxtGR3P2XVze3otV825CbyS2H3KAsjBkxWSG",
  "key18": "4Synbga67xWLCM6wSzqdG5yqFxRUU5BTJcw55q1u3rh6vW8NJ3B9CrZh36vAxvB1zk7GHJgyMDgfCZ7qhmaFuyah",
  "key19": "3Vxi7GdzXbFsWnzDRZgHKf7ahCNeGMxLaR6r5S4hikvevEWj4L4Vz7JC9RFM3w78XdTrKTAzjrA68e1cWYP1bBeP",
  "key20": "3zvGHD1x612nnDcQscofBLecUhqZNLTbwiJbCDW9e4gqGAusmKH3jKax7YjAiiW4KSBonW6j6Ge9C2YFDT7qqJJ3",
  "key21": "5kBzkuk6xtVYdg8cDchEpcEffmT6xBhe7anydVPCAmWcxvfPSw29jQCxPjqu32ZCTWCjwyTobE8p5Y7639Bn4KAS",
  "key22": "292eYV17HquCpDjzmFABKyJtgKWNnhydMnKHB2gHTUQJBG38kA9fpg33Z5mYFyH8GpKUFYQxcRFeNEKxKHFU11SD",
  "key23": "LQn5ZFWBUWz4yy3YnSSpSPksm1MFPeCV1BmTdzdJiSF3N949uYp95vqQ9hYtU5Yr5XtvbLtx9jFfZQ7DqkdbgfP",
  "key24": "4QAP9iq1jgs35VhUoHW254ZkADFVEcFfzrpGRzn1Dt9BHY6SemL7KXwzbxL3wrMNivZfgG6ECiwKZ6c7BMtbbV3U",
  "key25": "5JcZLxs5wU6Mb87WuArd7u9MaNMUaWs9QeKvpaW8KMzyMV41jzFwArQLTy3vNk9ZwBMVg2EAyannarJMGiFuRwm",
  "key26": "5UYhzWJU4YZTzjLzYhovaUegyo9ZfNBBZPbGXPPZnbnTEWUPbZA2n3SrUeqp9TXbFANgfJ2r6RY7EWMdWCmyYA2b",
  "key27": "uHDhLZVV7JFn41KwrmnU9YF5td2D6gTL4ZHJ2eGzA8QxwDGyArqTxtBcu4UtvSWBqDUzDju3tHPTJeKZGwu8m9w",
  "key28": "4aT7HXvNq1jQZ9DKGVtKQ1RFFk2corffE2xxsyknPrFpXk8tRW9AhUQapm7a9Z877KQD4VCpd3ndNnnkLiUJCTNw",
  "key29": "4zYDiyo3g2QZrhXxPtGxaixWwAx7DevktMpufVja5dZjPmBX48wL1uAzVDbGdEtEFQXcs2NmrnovbDdoMwypRmEv",
  "key30": "44JbD7ybAo7r8AvNuk8jU2WUZHtXw1geJTWYhk4JuiE7VFGNTCsSwQzGB5VDPqK5GhJECKpzmoCpQmtoavsGdU72",
  "key31": "5BRkM8JTM3wUUCDqQs9ztQ9urj3ckEe489LSVQV8zcDwZsRgKUpw6Cueb3MFLjMYuR3QouKhW9GZbnZBBpNNWxXp"
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
