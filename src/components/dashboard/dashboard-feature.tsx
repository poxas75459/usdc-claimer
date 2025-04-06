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
    "GbEvW6uuSAwrQ28SuDouucC2J86Zqthvv3NcjAG2Z2QYtkwCGG7PGUWqvoz43GiQnH9PKuX7Cq43GFe4XCcaTvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3CEDcvuCrjPacvVCx447Gkpj7biGbq9SLMjwtk8vLzogkB8fzZCrj6c79UNq4VLu7ehbMoDLY71mRk2Ve7Cytu",
  "key1": "5fh7oKc5x8wG99Ebvm36exxjbyyuvCkZWv155yiyFFAiwoiHMeGmyYjxHC4YG5FrPC29GyiYe7rNV2oF9cRU8gNB",
  "key2": "3yGmFVUAD4jvaDnmvcHK4fg6PZquUhkYbUQCcdPF94jkRLHh7mkcXdbRzXG7P4E3gpSavvchvwF928xVA9f7tgin",
  "key3": "232DW33gAR19hyAGQHpot9VE8sA3UCHLrsejL5aHnJMDWwLVJdzjcN5WatAhonuRK4N29zvLdqusM4Dm3EqK2oJ1",
  "key4": "5XyvCpoYYG1SoRywDHREgVnCSHh15Quv8umTiKiwQxtkpvCNumQG1yLCMzfW3MWeA9qwfVwzqkYPcTi9fuWtyt6M",
  "key5": "X52PYjvyXVLZP1YMHnmPLnfrsvJHYZRcfRMc6DAfaeT5X46DE4mtkyXsg7wzVZanpUYPvbY8TYPr15APUYKnN6U",
  "key6": "4tiMAVT6oRbNJq8sA9srnLYArhYWCvWHdzFyuVCHfPpdTnDgPnGaKtaMiVd52W3RS2E3LMAktaggEYtDeMxCmLh9",
  "key7": "4sSvP9TF9c4TiSPT4oAWz97Z2Z2Lhx7Etc3d8vhKg9au3Aq2eH5yDNUtVjR4c9Ypv31qUDmNvqKb7hVEVn2nYJo9",
  "key8": "2vdvgkXRMfpNdeLWbfuQVxMvWASZMj9yVwod2ZPkqH6KCw3p7LJqUhPTkPqm8ZY57vtssaTk9d6K2CFBNpvydEgy",
  "key9": "2WgNxYL8UKBNy8ku9AQ3nWfKLHYp3cPGjsGqHaSNvx9mxf9oZEbM3Fs1JuZABxi2sywGfP8XDQvSqJajCuTiymEx",
  "key10": "3jyTSxGb1fUBrQ52HCaRT6LShMQ7pqitUMyrprqB3HupfAXkFLByxiDYzw9TMnRSKYELgZMgdMq6xNABmwKSEeRg",
  "key11": "64rTwmq8zWxMSb29Fdw8pgRXYoyHRrtXcZ3r95bMZryZpYzk9Cibcac4GhiDCV7trS2ewSN4ckUhLE8Sud1BgKac",
  "key12": "5kGxJwFW8WNna6GBNZjT4xZstcFR7KA6DNzEeuAEpqLafY1gWKBwfu6YhE6MNLx3EBuc6u5hKQZhD3N8zemtM1P2",
  "key13": "d6M5TB6yui1p4iAqkdeDTMRzsbFrC7mXEqCnT9fAeGcCaxYkXVdAE5Q4ojdV16HjqjZL8wKjtNQrFzwW7Zd5g4K",
  "key14": "5JbngfSXwPSTzDLpM9YuY3FTYpNAjYmbe99JFviFXzZ77r4Ezuo1ANYxVrye2wAcZgKv1Jz5LasvyJbRo9KDHxnK",
  "key15": "4zdpLB5kygbeXrhEFys5MWedeFD6MMHS9LoKgpLWXLZD7mSPSk8z8finbiHHyPfhj93iSA58iXraN4N1UUfYjc7e",
  "key16": "4ErDLtPwn9jFZiLThMhzPLwvRRUiZDFGxDmXMTGEDB4BqeWQJ92x2gjL1RcumeFguxXs8LuSJZvj2FtjPZozb3eC",
  "key17": "4UDYSviATWZVGUCjJ1vFTVkZB1Wrw1hQT967LEb8We5GxKvVhNPJSkZujXMNnwxtVQxzcVmkj7rDdQB2ZpuwknAF",
  "key18": "4ezpJsrCtQWVDR2N39xadVDfCKoZiMmnCoMnZGJEW9xdGfj2sDDiNmubq8HqR8JbZweZW2LkiPVuU9WMJ8vG9vQP",
  "key19": "3sfUs9FCLZVhkUxwPv45R5uEtAK4XUvoMvFYJLUZTTsn1iF1AvygWCvYuTLKfn8HqETW1Xk54cVPgAMyBWrJrzXv",
  "key20": "5w322GFEcP9vTEJBbUJTv198Ke7CA2itvpRQ7hqgExwkWRsYdkMnrjpUnhFtSAs2b4q53wVzRoyZ15M1DtaKbbBu",
  "key21": "4L7FWyk8Fu725UUaRmeSpce56pDHAEkHViW4DK1d7weVqjgpFBTVpkJ6GY1TpDB1h1qcZbXexYU8XbtRjqYU2uX8",
  "key22": "3wGRX2FWSi2kcvyJvErvArppkZrX9MzZUHi8gYCC88NAK8ukqWX19wFtcFkrZrw6YwMJkEbvapkUW1ApMEGGgvC6",
  "key23": "2RtjR5s3kPst9ZsM1pAKs8c9x8Vd1g7bRJcqDUQj4LbgYHcQPnvCT1nzgkU1bAagNmF9s7dUMeBmNboKfrjnGHdL",
  "key24": "3pzm233EkSbJ8CwPUjA7NMYcpwJjBf5mFupkY9XdaPgEsQmmuu1mhbxVwJ7rbuDwRHMZEzziNFSsk4kvq9VMhvKP",
  "key25": "5LYTMvoKdU1DPa6SWwS7YTXv5YkjKvBgVeii341LBCmPG1yzN6MdqFLF9W5Zh6EHz6vFfLqwaC2vhQNkxnb48Qz4",
  "key26": "4EvHc67Kh3uKHrV96z5GZNHmp4BLHv6Qzc844nAJm2RiuDxbbwDzGmyEGQjLoXCLGKvNGUbBwoAfdssdyydh2fXw",
  "key27": "63tG2FZYMGn2VMkM36DiFDhPRs4xn8DYZtG8jNvrt9wtguM1ArFJ92Seqk11Gw49vvhYBLovhsQPWdiRSeXfz8JK",
  "key28": "jcm2er8x5m7hZmQjMwwR6MvsAzHTKpsbHwkfHxXe5EYKBAanScu7UtVPoswQzHMkxc9v5x8odJoc4ks4tDfnjBV",
  "key29": "67d9qxGZdoJdSQMNgYy8CRgWiV39WqrLDx89pmB3XR6sxsdYwRsSWNfHU7AbezjgmMRmRLjaj1TyNuQeZCkC5euD",
  "key30": "Ho4cxqkYSEdrLHriXGCj9zoj2VGUfLgvmHHfrMDczccAqZ7W2yBGqpwjWxeuFYCoYLpSstRHw1D8ibzezxJ2gbD",
  "key31": "4udDhxoYgrkJDnsPv1CZ7umximfVfpmtLYAcGoe3VKYUaFDB3hairFw8PzddL7RZcr6A8ERrV4Pcn5KBmqLKRhn8",
  "key32": "2WaR2AuLQzzquVXPP6DHASSihLa8qiEovLsWr1ZvCcmfqeqa9d6YvHsvkjYsyofADhhxSHKohyMbtdXu4YmFih79",
  "key33": "4qn7L6KoThLs9UCWLdF4zkupfPKsGL28n8uLfs6L9iqak6JrgezphBEKqvSw5mYUWvKgXWSepZhK6kkeDJoy1akE",
  "key34": "3MbsafeLxYEM4y5jx84J1mrMsrNipwdtAhsbZw1vL1jE1sQBYLsDbtfYqjpy2d8bbrpSbNee5kpqLjyhBWzKyhrx",
  "key35": "4xRNEuMnBYNiZTVis6FoLM3kV1FdxYcucD3j3L6LRqHoDmypkSTMEvzJdiJ2YLBBszcAb6bq8dLbP6XjvEWDpAjR",
  "key36": "4ZnG1xzmAyWw6HLtfE7HNZDTDG8r6NzdCfp4WEbfYUb5R7q5eeRvRdBSP5SoGvhTPe3N4EqmQh8qp66pGQ9fZcm8",
  "key37": "38xRhJDc3AMctXnVgUCjzufJmtDVWEn28yZawndKD889xYPkU6RvGcFBwbAmegJXHaKBRogq8QS8CXpFP38ARnz8",
  "key38": "3hsstFQKK4jJEj2k3HNtHNX2KriDxNPZzw34fcrPzqWSWq2S6uc5cwv1wHQC1HD2232PmgxGSXVnFacVAu91LpmC",
  "key39": "4o2foXdgmNHDKj5NgxpZsve5scVVegt6Jn67osU5yjAjyK6dm5zDsQBiwSmA6rWUNuQSSnMvfEAeTqH8rKwDsiq1"
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
