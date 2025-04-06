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
    "2yHRYubPXHZcXfepa5MzpusfDJvpKcroSECUe7Q5X5HTunzrwoc9q8pr5BcQgsHy84Hq7hL8hs6Zzk2kXW6datGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pRjwvuoCeX7Vrtaf1XDLvz8kfbgqEs6yNJYGhDDoVdt4nJAhZPREKjorm7tTE4uUfTef8KAibxAr4iKFE3MKbAL",
  "key1": "2tr7JuqRiz341wa8DkdquMMim4RofAKd4KiaTj38NdXJ8HAEYpi4iiv9ChBFh7dDP3RdDwrSF5f7QrPy54jz9A9z",
  "key2": "3eXm7CYRST6kDqPoaqi2LWuntajEbZSM6V5kGmny6kTL5EaviK7GTnViQmJX1a5dU5GFeUGhbxz8WLyT2AFhU3ih",
  "key3": "4mZJ3S7sE76ZWTuji5Vp3oyQpsj4HwQTeFRZ7SDb5B1v6qmG8MCpqCBZmnsZVhxct2q5sbUKWH29tw74HYy5n8qr",
  "key4": "59hmZcV8DVTga9PuowvAqNgA7EUBUjpa4XsAJMc3V7PMAqH5Hmf8jKrNBinMtmUfZEjCSX2kLDXmDzTjU4ts7VKy",
  "key5": "2irCWwMs7QLizK3D4mghh2UGDYUV7YFMKF5t2AicFguuJj6m73ujQaFeiNTUwPbMGdYDUu1W5ToDaeAd8EyzZTt4",
  "key6": "4pvtjM9GHVPLVtLawSCgCodYdAnVVXJFni3KQJFcUgzUbSg96SMx1xaHSUygALS5PZBM1dfgXKhSm7rLzZdffJZk",
  "key7": "28taSnixambApq1HVXL7FqLCeXmCY5rVt6PJxjc7djNg2wTBpivNeX43DpaFEJ15yZ7nnuYXQkjjbbFBy22Wn5Ft",
  "key8": "Xjv6NvN48xwRWkL1F429SnuBWCu1XbKhfACK9hcB4bTnNKUBLwxwzq4jYPgCqSG41hAHcXEAxwTA2cnqcH6WpZk",
  "key9": "PJtgwqyNNYKa2g2K6cr5B87PFfk39m8Wz1Layct5TaWAt3kEh1oUPkAiSYfJWPAAQGoRxrByHb39MyVAv6yjaf1",
  "key10": "2QWWNq35r6FkaNG2ckNCEK2NwGMwuKmLJbjHuD8SorLNYUPaMEXUZVV9aA1gTgGygDDSeMqBpU41YqZnDVfqyuJN",
  "key11": "52oqZgq6Hik6MRGabufWGH2JYi4zHvgzsGrvFphdpiZfgVvx1FqJzCZPbRiMq6YPY24D8dSTRP4Uko9B8nhwGJ4T",
  "key12": "7kyFmWewqcqeV3Qt5vxJ8c18rGRCkqY7Nn621bjB97BZgBXtHQZNfPxrW7BGKpL6pnGUwiogqp9Voq2nE2qa9dH",
  "key13": "VxNaFVTrZXAwbkGozD1zuXzgNgVMMfbtkYP11iXbiJrM1n5X5LH4ckX1d7CNkT9QR8T9ZcsweAYRxfGFV5fTM6J",
  "key14": "uQZz9PcShzL6rj65bk6LqRrznBrcUbejpAaNkdqr8gegfwDuCh8rbb3XGfrkREkiexs9o3hMdnipMsPkCBWpuGH",
  "key15": "39HMnwTjiFK5N5kTDuwdjd1svqe7Yf6Pp4NqUUyvXKPP3AP34ZJ1DhxxWG2pZ9TXgkJpWQEvkUtdc4MacoJFveMn",
  "key16": "5sqUZFZe8i7trK7T98D4oPSdL6EwVxdWzM8qokLhL9R2F8wDByvFTCmUS71hBFjm4Pc3sQZXBPkc2sQDYFoGFZvS",
  "key17": "2BdD3ZrKvoZ8TXQsgjQpaGX92sF6S2dfMCoN6mjHfDTYTF5uoWSugHwRxJFo2QTywNKby47TE8tTKYDvLtDo6Vnj",
  "key18": "3Fmxo25WXKQXHCQxHHWpbwTA4CqZqfLjFpGvMw2JtgWmswjXRvacxrYCie94AhwkvQ3Kjxjqu7rdS4ND7GWEZwKf",
  "key19": "4yjCzK5NSQvUia7aKpFY6gH6c17xdArGXgvF1A26ZXkyhZr9Qyh9GCListjywfgbPXWFtzQfCdSYtVT981ofe8WW",
  "key20": "3A2GSgxsXBdvVV4hWWBqyDxf5qQbk3rBBbE8aKF8D8eWLCJS6scEhbtSx6uV4RHnqASjnuXSbSJ37dsy8ynVEJFW",
  "key21": "5cmFqdp9Y6RWDhe61uaiY4pvPCPT9HfQUc9PULTzSosTNK8iDMnW1eUooBhATi31PuH7vvsrjcX7yk3paBsAy9JL",
  "key22": "4Rn3hfTFFhUeM4tJs5Lt8XmdhJ99Ls18uasaJzTJRDUVwwGZkPf9rHpXX6GFajNxp6TkNmsFFBFi8paC5jrwCRtG",
  "key23": "DxJ152CngfXbRPDM3uG68eQLc1pZFDXLwF4sFU5VHZ8iNhB4BJ4hxa6BVuEqwcmqcMy4qAeLEHzs4vopDu2wU2U",
  "key24": "2wk1gmURM9bzbr9JiZ89FyhKLminv8a8fgwZcyYn2zWY1bKpTirZiQDs11GhDqgCaFRChHvdTQkTqoZMjsL8dKkM",
  "key25": "5eKnyUafkwj12MSbfhEjFLxHE333qy6oKiBmgcCgbRHomq5yVAPDjee5cTmaEWztQvCURSQnuL4THMSpTWfS39gP",
  "key26": "3CkVg8BF7a7NazcFERmABkSUyjbnPgWcHirVDhP8xpNC46cReYKu2WG8KTKdkhXSVpjqKL3DeuzFrXskuSBNzb37",
  "key27": "2uf94UEszrLSjrzpwCNmDEhroyph255qJcB39LwkCJUTzk235rRGQLXu46YwjCkGRrKGxUWSastqxgCu24vVFfZw",
  "key28": "2CqCsRyJLv1Dkp6r2d1BT8coK6zrSjkzAX4UgVni1g33S6breEDiKdeCE8881vbzHZoYZuTNRxTAR96YPcg74a7Z",
  "key29": "2XhYKh84hhZqC7Ew8qfAnKgbHV7BSYn4d61Wf2oZtcBnJ91jL22riA9aCPMoZPmqPmrBEpGu1PE6hvpj3vZDJv22",
  "key30": "5UmnTctFiWcRWcroBXiUNxFScvZK4pRtkeZdu8JcDC3cNgyEB2NC7wZ4cpFZaVD2PyvS4KmWruZ1sXbRRAAzDVUD",
  "key31": "3kppP9cS11SWWtqVUBTojzw7ydPhgB4GSkUHhTRz6hdFYaVcQqvTkAo9maNpzKM8xJTWCFa8nqKCi3dBMtt2CUEJ",
  "key32": "3cVRwHo47MD1TjcacwMrF1vaahY11JWPreRoBgH8nAe5Cdwr4ksPBQL2WJb3TF3U7R3Ak2vjPYMXtdLWYs5K6pVU",
  "key33": "2rryvnM7ThL1nTipXpud5Jc3edRxPFQCZR1iaySHzL2CA1zbAqLibkJ6KnzNEiBk1Vb76Evj9uLrpf1r69oZj3GH",
  "key34": "2RpnysF6EjXNr3WvsctiWVPqNRE1eCHcFy6nP6U7uVf3NwH61wg2bmGaJfnoS6efgLabUcNpC3BArntdcpcvh4ik",
  "key35": "2dFaK6jLins8knWYSQJJtyCVZUhDm8HsxbZnKt5FQQahsaDG3pwCZ549fbPMpNufgT2eYnZueNtqTaZSCzFWN2Ui",
  "key36": "4UXHbRr5BNjazE2vkjFENZndJ6tYjRxUPRfZf8bLhhTZg3wJ6BujP29w9B3V4ym8eGLpEh4bwthTihKNJSd2tTHF",
  "key37": "62qVEk8uieSPyqvvLchWUKokTRn8LvCdK2u8iLrPZmjATHJRtPVJVDq6pqh6sG6xTCG2JZLVYRMHCc1U7qHitWfZ",
  "key38": "4vCVqP8thp7QLufxAJVTtq6zHTzWCyc78y8Ly3CmHH8wbJjVVhiUVkmfTNmNh3SPCa4E6e6S4KJezzJKci4WZkmF",
  "key39": "5ATUnH15VKucCekuzgiaS6A8vjUt5oSqJ9bi2gaFN5LxxrxP4rMVE3GjpcaU7YdHrzdSY9o4FJSoqQrcUgnGLhv5",
  "key40": "WsSZNjDeLpLyD877TubEMLcV4BSSoT3HeLqYZ2NL8fHb3527btN6ZrFnRCj6bwtxFkHKJjM7vDsHsG3pK2saNmc",
  "key41": "3JzmegoQ5peXZcZzqWUFGbqr8GYCmwWcHdew6JR3yyvXhZjoCXZ8K6MPuT3AARbME4qseHZtE6Emmsmj8BzFNZY2",
  "key42": "8rMamV9pt7yDYT1QoMrcARYx7qABcfPMLUz4z5S9kgSSxNQDNXFByp2vneE7PzLncMKhCkcvaMfTqsMPNSZBu5W"
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
