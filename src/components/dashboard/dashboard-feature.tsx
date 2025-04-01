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
    "2CvArRjna5HbXRCLXBSgx9rnc6bq6ZF8SCEjCq2fwXRvgzPwu5hWfb3mk11e53cbsnyfjExmih4yHRJ6VuEoFvnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35XJRrjihiQ3Q9jL6BYq5cTyXiTrceJ5xoVK1i6pkC1oi9vyiHt5N7Vo2bkYBLHZoDJpRcYk7xu9gfRrtAbk1KrX",
  "key1": "4bpB4yJXA1NhpaARYnbTanu3cwcta5joB5fjukWPPubyNq8UtEQRh2a6dLYFLSuTAtApoduR1CzeS7gupBaPtt8z",
  "key2": "bdeUXz4bexqckasWzbdAcmLu4XiEyk7ASsSdhGSJMsp8fxZqLHQsuTniMdHzz3wzn3bda722cWrPWoCgmhFahS9",
  "key3": "5cFv83ecX8f2L4jMEiFoCKxkq3S6jTFpaRA7RaTYGh7LKob6BN4wfbi9trtoMSf6j8ymZ7hSEnPZMEAzB6NwJH9v",
  "key4": "2BLDramiggtWCbcxuXqx7mBEdMXhe91xjmmg6DUkN9E7AeDRc9PYsydhp76uunVaCkxAyFVDVkDrUz1ogu31LQqq",
  "key5": "gA6hub2F84tmskop7yciDWhpLQzJyyixLtsFgzTQwSZ2J56yTVyjicK14hfxgppfcEtuB89tajtUopTcBqVYJNm",
  "key6": "57fWfithzhXEPH9mysZpMMX362fRqRu8mG1jLzy1REfATLq74HHVKtuxHpkm9dq6efoTEF3wReTWr3pC8Pqc1KGH",
  "key7": "5gecf8nKgpGoRXcVvhEfPteSq5Y1tb6inLu3LY1DTHKjDFrRf4SQhwWGF2PDaXUXpd3ddmva7rDnp6AyMQGMJogK",
  "key8": "3rDAfJcSvXeB1AfnoD6kiPqgyGr9yyr7aSZADm72LLWNVq93Fki9VhxXct4xm9nNgq97mrCi24THXPWR4P9CmDvW",
  "key9": "4MJVDjMgvuFnM2T98tPcmRjntAKUToGxJUgTtsNqZbdHizUCwnFpsHcYGLZZcYQ95KxmnkiYeAn4RBZmQ7HmbsRc",
  "key10": "X7fxPjY74orLz8eWsWMpsVCg1z6viH4pkdr7w5GPm6QW4cBjhRSSPRoiapCeRjbe5KSMY82A9yQYaA6Z7WvwJqy",
  "key11": "3NT69xxZufH8xquz7CybojwGSXZfmJqB829z6b5YAQDZrDG5PgGNeGm7mU2sBy19hfFBN9WcWjyK5uVUXcVj1NkY",
  "key12": "2pqhjZuFM8evvC2bd2dEHRXNY1bFcbBkSoiwBtMdXbzmWtV4TDpoKrFWVivN7qQcFEJ4gHf5BzhAbf81nYmRD5Zd",
  "key13": "4xsgj8T53MomaJd6m5Cn5rJFCQWRiuApRcW9hPWddFd4TEJ1bkCFN2D15wRBN9FWNRDqUaM8nJ3BiRBseaDY5y72",
  "key14": "21cqkjekaHkQ3zqnRVd1pYvT59C9Z4XSPs72E9DoVWKpyhcNneyLNBz6WN2MDW4aZMxTXJEjX4fCrGBeREYFWMws",
  "key15": "4b8HQ6nfWuKbthPUgVjKcDh7WPMn4nUTqLEtYkHwQzh3GMPrGpVNJHuX6VvMcjVMCnHK4je8RFjeF7AyZVWpLeE2",
  "key16": "2W1s6RWfwHHHfRARYUcHqiDsKBK9kTabDQE36X767AU3qCBpJ1VfDEPGo84r74ZEJMvbF6YNSkQg5sQ7UzaMDetA",
  "key17": "5VHnRpGA7oqjzYRwEvDsbhPxnYU1szGNCVeHGMEGVwv23rqeX9NV6mDMgiWDFmWsLbAT8WLSj1e57cS1BfsTPvZa",
  "key18": "59rNbdMFKMvYpnxqQxy1bzsSQ7DQ7ZagPUgguRkbENPzVn9rWFLPx1Uz3KrNxbcm213r29YNaC13F93LU61un8g8",
  "key19": "3Lp4844CyHS95eHF2RvmkYXfXyfyzzNcJh2wiVpQ7j2K3CsvibPX5yLipCPgv4HRyJwE9qj1DcWHTpeurjzkZ2ca",
  "key20": "3Kdrz1hZz4o23smtN1hZ4YQDv2LHSuujAdBaLB4S18bBQAJZ6cRY6WPt33w19Hdb75z6X2fsPFnVGPD1Xzo22Vg",
  "key21": "2aZmxankhoJ5eTSQBu17RbnayHc7c6AkcDmcLWopECjQic2JECWbUEfMzxcMf5kvb7XnR8QfY88bwwcafLWa1Gvr",
  "key22": "2prM2MkSntSsFZaqPmLrMM437mZFHYNKpWAQyoTbBKyNFLCrjhvmWFiWZwvm4XNFADizSyJ2tw9kLD2RpgrqPGYk",
  "key23": "5iAwGbeKdDBBmtfTzKRewhq8sz2ZUjunLhPvXUUXjFkWKBb1wcFz3RwLK2yrWdn2E7XZXYwPsTDzP66f2UnjSt2m",
  "key24": "4asC48Tcduw1jmd976ZKusKHk7UWKgg9dQVSJ4JzN1yfUVYTyUEah7AaSiSm59NpKGwhPucDU7tBuJgV99r7Jn2p",
  "key25": "5Q7gRBtRMXeptkVgsjDqxcRXZLUn2rNZ7C5dUHCUeLwJQWBiePxUy3j4BKQGuL5Z4N5dNtEwUCqH3WWaArfE9oQt",
  "key26": "2acb5SqzyptvfadcqZTsqhjoF72oMQp8zre7QhS2ixjtTzJFAzJsXKE33VQFh5AzLxESbyR3Xy2HSNYT3U1mjXtT",
  "key27": "4Q2XF2eQBU5U9zJGMm1NkSkKCR629WZ7AXFd8S738yosAqsg5aQmj9YAQDQPFmcjgRnr4C5LQTbozk1K6Ua4weom",
  "key28": "3HoMFGUUExmk8GNZjsrvGTF4MYfri7QtnDgGDLo2UDNU8avje4oDBLZMicxoBA4cN25fjH5xmaet4BYeEsyY4RDq",
  "key29": "5SDyDCNHw3UENc9vVbQz7qxQ89kJC9o3fsPB8oWUX4XPkkagCDWGYyGhrFTtAuqgfK9rsJcw2neUTqMsbLUr7upB",
  "key30": "2hoWJyEseSWNQYsN8x1pxGXRVg5rNLUbGyVqv9h2qG7p3BbMuyrg8GKLL9q1ttTcCkTL1fvhWY5Whr5bcb6qUCSq",
  "key31": "4nW3NXGQRuALCZTymgxCHDpn6RXfMRTHLviiemk7qEvEjfDm5ACr3i4jXzH72dTKSUCZGhVZhEQEhekTzmSihMr4",
  "key32": "6dqD4qzXd2pxTBAQw7DEhdwvkaE8rV9eZVhLJTGSiWPZB5X7YN5Woez92tqcYAfnZ52UV9RKXrz4B4caeXQm9Sv",
  "key33": "4RLsN5nRThQ4N8XcsBX9EHrMDCJfUZt4DpN7vBaoAwfGCxzNBdNYJ5CwkQB8eoSELP6udvykcQ3D3NhNp4xEVqqn"
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
