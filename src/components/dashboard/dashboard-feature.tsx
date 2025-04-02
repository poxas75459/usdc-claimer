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
    "2isH9wvKd1ozLfhPDhTePBXBL1wZk3iBcPX2smpof5zFUtEWRNunG2vUyc5pttcbNojqMvi3iM65z2aGBUUnrSe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cETzgjaLdBnQdM3Nbeks7rLzZ1h5oxGkmKEePXp8cLkyJ5Lq3MndeBBun9djh22QxuZrW1AHNfbtSbfxgWMAngu",
  "key1": "7DJ2RBhcBq64BW6HgFvYuCWM4kfPfNQdeRMEgYynG5s3Qcd9L8rLQ5DXWKb44Fqjkg68QJurUTbNytJhYDTgi2E",
  "key2": "2Nqqp7X5XsLJkVDtyRTSQDuC8sMnU1Z9gkEYWV7WFCvTWZeVWNVRK84c12be9M1DZ8otVQqNr2ueoSJLZzXdDBGE",
  "key3": "4Mn5LZj6YEW7hj7dk2NrpA9owHfEPS4yWNFYxBQMv7DikEaiE4eTto2NxhsiA4PPkKajJmLq37ZLcqhZfUwRCQsB",
  "key4": "3uMpKPywEd514mdPPkUk5x5c5cpbEdXMfgTVoEiZnKUCJHf6KCkhRAMqCxN5FsVjgpke921VavkfTg1ncakWb4xG",
  "key5": "GagzgzNUKN73NuGvUbZqFtPUeJPTWnUBz1Npw5tc9pDXgBbnYSDPDHyWJKhdPuDYNDka5my1S2jyyB7yMhHgy7Y",
  "key6": "29ev74crSvpVW5NhvELaj9miSLxYGBqvHv37d3bLKQxEr4aH3QVkVvtmqgNDTNoRFwqkA5QnUXMapQddohBcbJPT",
  "key7": "5uRCZMxYzY5G8xPSjPzTuWDgGdThiRPRkHMWQbVCujUaTksYhUGzerRt6MCTNy3JqUCMh64Sbe9aUq8q7skjQz4N",
  "key8": "8MdeUkARC2YuCYUCQvQVim5KzLJiWaTeYDiPJHiQmhbpPSSBgAf6Lh8pxFsnLkxaSMvJWBVzjnWFMTpTzphnotD",
  "key9": "4JxjaCeQCHasdbFnzrkWRGGz9wc8UokGQkmxBnBXU7G1oEgiJWJuCeen9Ah69VU1C7K4HnokVGne5YFD6L7kW3aB",
  "key10": "4ML4v9iWCZCPYjq5oMCYUyDyfvjsdeNXsVGmuhURqTDwzZFRq29fFvPaiZRjk7tzgf8aRWrh68aKQzwfDqqr1gpV",
  "key11": "4Q3o7eZuiyndFNgGdVnjwaKTugAGPvKyrAXUvU3wc39nrsWJQ4bKUhYvhDMGn78DNXrTEGUFd9YkpiR7nRC8vn8",
  "key12": "5yhQh1ZJHC9h9DMfwgct1WJML4RdpDAbnsEVtyhLahwwSqBE94SmSxf443EKfmb3u8Ck642vPQHH2Az3mkNEpJzZ",
  "key13": "62QTR5GSoLQepzKZPf1Kqx9AtQvexcLLS5zvxoYEM1krTAshEz7DFLyu4fcvSF6pZsaUbwtSR8riBRvvKuN6RaBG",
  "key14": "4NcjRtgF36Pz8mxZnaFuWUDVmGPJWZBHwSEugcnJWFxrfKhfDvpHJqqdzTJnwzSGStKyGs6A13UwpHdwrYktoGqH",
  "key15": "2L4KU2fgAN8NUh7oS5cccEh9J53NEohKa3Kpy7mLwkU9TtKEAxQENgZ9iwfRRjZf3Gkm6GYhAJo3nX94cua43JFj",
  "key16": "5Lmc5wFRebNFgbDVb1GrGp9wWiLJeHkJPi71jwoo64ZxA1De3y5Xfh8Kzkf4CZUoSdgvBGXYSM5MMNc3C5ZpgqxX",
  "key17": "2e5AEPb4Qb4RVNPW1CQm3tDqW3RW4z2p74kofzHYcdP3nE4uydsfREX3npVzJnJzDuNQjEZCrUEiF8kgSzHjU7s8",
  "key18": "31LheNVuTsMWP3Fh9ANWYrvbz5jS5Cqz5MeKQaAAbBEtBoxiadfyqyy3y371vcDoc1zNGkcStNxhjjpf73N3B7iq",
  "key19": "27aJWUf1jHCBU5AG84wCUAKSJWWJCnpotmaA7C8unCXdiaKYmqaPsWeggjG3urBYj8Zcq7abGZBLJKQgHZvEYE5q",
  "key20": "jCLwCefS1aKYSqFaspd3gXhVP7aVHvemNFAvuVYsMouB5wfCU2TLZ1HXA7XutnykkSKWG9jMHuNZCwsK2xnedj6",
  "key21": "3f4CeXuji9bYaYRhrpSuwzN7T2rg9NicKMYsAwT4bghXnfwmDnX64KbH5nMSZ9XBZgdnqoi5aAxrTvQUZUaUKfnR",
  "key22": "5bAmh4a9Fud1hCs95YFHoQZ7roHK6Q8DGJsXJW8UKg9YSv7iQwA5Q3QTCptEMDeb9SPQ9RHfPwtxsxwhYTNg2Tox",
  "key23": "HpQ1izJmvUCbWgn7RCkFEteJmRwXgjBgysam7qghYg4KkaJQGxjQPQo8rDaGuomsUi1Cm4rx2hK5RX4kBsZxRWj",
  "key24": "2L9fyBYQ8rmaghbwC5kSHjR8Vz9VV1TVY22NhnG41hFqks1Njvjpt184k8V5rVksRViwn396NatZZ9ZgahrRXHSu",
  "key25": "4q4jYUjqUgSpv9mdPuPMyubahWMNUnSbKRZkXaXEvmgVA3C3Mnc9KVMv1BJJRfr8b88CTxKZLaMnZPf6wvnM7Acf",
  "key26": "2VEhSSSA9wDmxUMJf94iUTcapBCGvYmrX67tJuYkoTP2x5Xby79GyWYGkXAJ9mZLFTMprTuxJ74dKojHrs9EukcP",
  "key27": "37rc6jdb5Revaxn3S369e26e1LrEE3vWrCWKh1AgNbcjktkxzDJGMBN4NzS8Dz5h8UT54DAZMo5jM3uhnmyRP1JK",
  "key28": "booMkPJtwL93DC4F7aNg1Qnp4YXLR8rwvZC5dEu2XAEYFFvhHZkVmHbYJ5gsjHY8jrUGTmD3L7WbUQuDQxit2jC",
  "key29": "26t887d2HkvKKmu6EswtSXcDH7MDMJ158eGQFAECtPBorCDZDQ2FNpLBKMQvnhVkmdjhiEZsjLSHprGQH4XnkLBz",
  "key30": "2WkQ4JxNdj6ae2v77XSEYbmEYuH53E6c1cBYSMmmVTAEaEj9AqjzrtEiGc8afMhP42PAejjeG7X1h5GK77jwJDNe",
  "key31": "KJ5TMqtzef8XuZoeaMwEe1zQcubmySkG3BC3zqotmxyLjZFsZs6wwJE26t3DUaRwE9BMSyUMozqnMrEkoSLpKzT",
  "key32": "2cA7M3eaRGeRipQ4qPm8q1r3QXFvq9rAyTRiBmP5EgZgsQpDFAhQi7XXucuTbzsvoPBqN1vUHHdQTXyGPwgNrXGY",
  "key33": "4qZFonYiCcTtxEA86jzXQCr4zGKxRznKXX6gy9rES1NuteaUSzKpiGmd6RR34bDkmYSVV5w3myLRMg2zU4xqyuc5"
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
