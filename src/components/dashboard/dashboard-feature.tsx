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
    "Ca1NHHyPcNkTsdZrteXtTZs76WA8nWZfTJAH54WPFK3QrNV8A5Kod7XLr4Vpn4jdCKiffxvW4DPBkBiQd2pJStW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Drb82QogJfHjxopxDZVygkXYZdDNqPWPFgs3JRsk96yudAbmJaMA2pi413AsTSFiU8X6pvaJRPoFs4Kw8ay8UQp",
  "key1": "39Pp1kXnaNpc23fcSgMPi1dHXkJosdQ4VmZbkCCsg6o5ZmEQ3aKfJY5U7DChMEXvPFnQiqyaxbqAPjJUMdu5J6hw",
  "key2": "42jAwVKrefqURsGWZ91ScnjuhJDWcydZLpyVU2zWRpn6urTMBzeauEtLwPKJyRwSrUAt3xRTuSPGfXCecv7aV7T6",
  "key3": "3Tw5ze6jS3fdqfWWtZm2hGd9EQoM2qB1wnMtgUD9eHrKmrWFT67TdZ35nwqnfxErdF84LXq6jT35Va8ESLAirYDa",
  "key4": "2sJMRPVu8gSzXgSpNAWRtEfQh63cw98bZcRfGVqC3aPSZMrrQqryyCLqx2GRoRtTGwiCatQqm3V7XuSYKTcYzMLL",
  "key5": "kG5dPkncv6NxfzjJF23HBSHVwgznwKw8rm8o7nkwjw5oRjcuYgxZVSvdS4iykdfZvbdz9h8g6SFE59xwYta6BRZ",
  "key6": "5p3Zpi887ZT791dYgBwYvrWmuGSJcbG3X3ZnLxK1iuSkEqAwthQdd4v7y5q1251JkEQJf2nMxY8R1ZAwq3RKFXdT",
  "key7": "5wAppzpbjCi9g9NSCEp6Bmof95c54nxVgV6qfULgNecAbyaHNLCsRVAbvz2LXhAJFiKLo9FMttqdTuuxGW4nkKv8",
  "key8": "5Vk3yM84pTwfq8mYPvnQXfwM8D6XDMKz6iArxNXdRrEH26X8236DPgCieeVCRSMVNVrb2YaHgVdgkjUaArrGTsM4",
  "key9": "4ztkHZ1rFTDm58zXcnh6b2ERWwrQ8tFdCiE8TWeydAdaZm9YH81hEyJvGUZAPTKdxJVpJE4FraxQ9hE73Hpnx2UL",
  "key10": "2w2soVGgaLvwPPPy6Z5CYPkFA5HbuPpZSQEjkyTwRy2Zpy95ypgnCbVTEdbPGfHYM2ivfyHAAuFcz7nYqVYGXs4A",
  "key11": "5RBGD3nycgCKhLRhWY8s5SvkT9wyxNnqx1xernhRGhLnuB4bsaTJjVuq4X6HJBWQzB9r2LDzvxWkiF5SYBLdPQWa",
  "key12": "4PPA4ASjc8S4gyehtbdbdqG2nk8hw5iPot8saEYVaMNfSc8VukeqmeqKDKZgjs77haCki6aKCgbJwYohrXj9AC5z",
  "key13": "3V4TRYEG7Phu7bCXrHUoY6XZ8G7pe3Q7c4mUwe2H3yfAeK2Wdig4VHVUPamqYRV5fhhA72injdE4yPcDMhBDicyJ",
  "key14": "Le52ugJF7DWg4vNMfJuRFJd1HBHUWnyJLtKGt26wcCWtLiJ5cRh38JyiPE4bDnsKzNwLk8HgNpeXU7JzhW8wtfk",
  "key15": "2tRFBE6it6XX1u5tvd4BLsrYnKPDRPJbupRiws16V5jartr3EWNCNGtkpzPHME42di7MwwWuVPfU2aLpAAu5Emoa",
  "key16": "4CPm2h8e7wrC4SNFGi8ZBC5PcQnEcBQZTQa7BP4GNfJnptw3wQYNRmmSErrxSxRXX9sygzSAt1sjBGpUVBtStWDb",
  "key17": "63EpiebS69eczJqLeAVuRowyaZExEbs4BJ66ySLhhMWdNHoU4dHSD7tanLSjAsbWufYHarjRyDPz4X7ecFmDniB3",
  "key18": "4mZnvnXsgKnwyCxJCFiDm3SNoKYwQD7woTXeNtGWXDV8teyGsWuTqo82zqZF1NjKA2iL9rsprZvhQ6ad3HKwMsUE",
  "key19": "fjT4mEF9dkcLgNckGXMhfYbxCTLEnwAZu3LQRbmz5Tn8ara6jiQpxNmF5G3bYep2VJRKfHsbRVSxqLkQjPeYXBj",
  "key20": "218AZJ8X7QWmzi8SWakYr8butm2C3Dw1JCYbC8vdH9XmzPepSuwFKVf2uwPMyk1stQaPWtyTYShW2C83pQbFjsTb",
  "key21": "4rwBArRjWwpLaeitAQtHW4ez6f6TfZYEJGGiNN1ik2dkog5cW1u54HRWAbwZq2vaiaGgPvuyXwsNMyU4Xat3qG2E",
  "key22": "5ik47RmqQew6UCfTf5CpC8eDn3nuXHS2YaRnUZTwbxzPzWf9BHUwmM3Yr7PDnntYVHZwFa8S4MWK5Tx5XUZzdHvZ",
  "key23": "4R37dYunmBithpT2UxQTRv41y29UzGdJVeJoC7a9TW48X3cFbb8bvvEocAbjMK9wEU6JvJtAA8FLiYHBteKtinma",
  "key24": "5RgN6N2tM69x3qPtAafEpUtu6h74KyzEY1KhESwVXHoTZVztou1FotBHgTbCcKCXKVgMkrkm7MpwXNtUW2j22A9D",
  "key25": "5WEVvNzD3MYrHr6gyB6QgGaEyLSBivkq9ttybdJpCKYao2PodcxpqFpteXycpNpCUVBi8U33fPxtM22SLbcDmB4U",
  "key26": "4XbwgYcED4NMFPNtivpJgw8u3ziC3TK6g4ZJffroKXKDqSnBk66vryaC11ayNMTRsiUzzpzo1rxv9Q3To3xQx5hG",
  "key27": "2bvqKWpKn5bfQrif8gwPc7t5KacxyWkJucHH2zFkhgNz61ZCjw2vWdJchQKrbiPtAZ1FYgCXgzhkpPw1pFWxZppr",
  "key28": "65Kp7efZpZK9GLi7322MrZq7PqP6RcwcsJ457gR594fLF6RLCaLLgsiAZ8kPpSnwZpFtnp2TruD6ZXpueR8XWyJq",
  "key29": "5BZj9yXSUXC3Mfcy7xNX2UZCDdHxERTroWjgZ8TKzWwr1CzcQfsTo6PzDH43DdCHNNLWasS34J9bWjnRJ3AtzYAj",
  "key30": "3RBwSba487Ln2QQMJGtQUCxjebCXzVSv87MWBRvsHWzNEKdEwQHCTvJU4YbJNmsLHeWJB18RfKWUJXn9tAf8YkFb"
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
