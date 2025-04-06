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
    "2m5FGkQtGWpMSp5KWX2iFDkNiv2a67wbYoDUXCzYyiX5bNwFEi9gqyLv9NsAy4EeQTWfEp3FUYvvyoiDJKKgqEDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NkB9CHAaVk8e84dsCcgZCySbmRW3sp7zG5sUnpqdPqsuQgiLBWfMFe6urHq5X4PcwSsgLa2fciWWv8maLLswXBF",
  "key1": "Hp4YaBcRGS6knE1PaFn9N71u2rBhRFW8WbTjwDK1qC5Agap5Pip58HhcCTgb5ksNxhyHtTv3wbT7ikEtZKwxLo3",
  "key2": "2z7GCdw5e5MX4HD5C7qpqZwWFEVn9imG1cbak6oZP3uxTnQtTobuij8j1zomLkmfffrhaRChaRLkauwp3GX517HD",
  "key3": "254GUim2CUUByLiCR6uoHSKMNFNFt3ARmm4749MqfBHGAFePFVNnxuANp5VmJFTom7B5fqrPt4h2BpHzHysGwLZo",
  "key4": "4kZzTbANM6arknYdUe3W9Xrw7tG3t6LKJPzGa7WG9VC4Gdbdk7hhffVKVGPhqYuk182QqnXLiALkVwKiWGX1p847",
  "key5": "4g5zUQgXHo2wsWHSawF6C9BnwBWvdrJtkhSYsxWuHfxDbTcRNQF1EJUUc4smRbu9mekynQcotyTuqc2wUz4DsNNw",
  "key6": "4CwwBUZkeZekqT4XhrhVKtnwNuucrYv1CkWfqrhWCFzid61d6Ltoh3kS2qr1bAgVTG2pWnP6i1Uh3AoA7ip4WAr3",
  "key7": "427geSGRorhdhaA9gsWYQCERNeDfERmu7ecogxZsCaw5Jhj42KNu5f85r6aE5RPBbrWHXheta5uE8bcvPhCieeQp",
  "key8": "5EJp9h236RqEv1t7thddxgxhvhtYxB1mCz2tMhGAZZegmoRdPGgHVj671HuQA1EAAr2w2eZMcgU2kWcRtYgXAkeh",
  "key9": "54bDsaeuGF5LMv9BRrjG82dPBHU1YS6uZK6m9Aqrhr2MVWzENu8jUVYhkWZZ9th8RagexL3qcjKHxKGRFwpi59VZ",
  "key10": "5JAa9XczjWfBhz1njTGhNMW8N7egqbvELq8R16Nxi2yoT4faD3EYPzk7hFBmMRAEvrdntospGP2St3vJKmhnzte4",
  "key11": "4GiaknuNNXkGN1Uyx9Y8616HeAb5kmJxnRJpTfG7sbJF8sLYqWP8PaCAYjAtForoyk82SxmA7XR1QGvWcAz676jm",
  "key12": "4u7zXG8eVstE3LZZBZyi5VzPH3pXpsTG3sbsiuKc2zkYV3WEN67KthmALoVCNWaxDvSGY6TaUvBKwuY2dHkobM4P",
  "key13": "fA9YEuDBWEJ7mWNXN1SQnWPYjLQzKu91j9eLNphKnR3Hneb5aPa1y4JJ7DUAzF1MZHpanWz9FJEFyKpH26sz4Vq",
  "key14": "s3ZPTjTSxtVCS34MnhGDYoguVSV7vEhPdkU9CpbsZqMFid8Gue19e9QN5RmuZCN8FDM2CDAJwkqFZZ4E74vy6aD",
  "key15": "2x3PPagyfKh6V3H4XzXGGT33RwVbbzZh9P4XcXrU9VH4PeJo8YeHf76L18xK93wo8WagD2cXQm3oidf3XHoNkGit",
  "key16": "4FDx9pX14vyDoavSFqBDG2wuH19WmPEnHwxsNpQCcnTp1oKfkeH4P2Q1kU9sWekmGbHSDgwc6vrMZFMHZNtTuoSw",
  "key17": "3fHRJ2QEsQwvXbpxRJZSpdHki9CtaHPZ7gJrCYUmgNndF5yMD4j6MRb8SEWRHtJtRN8DQPebSRLUHuYP3kXHqUXH",
  "key18": "5wJSX3GASPfSTqKV9g8biB28gs4ztq7PKFMYtqXGugVeJFEVHJsbDxxDSy1Yn5Z82vpV1U7QwiJwHWodqrZ5SGCK",
  "key19": "2qvkUSFPKJQQnWPNby76rvcTyhgSMzr5H3ah6TE3HCaZ4BcRTdFnGkc56Ap7FT3XA1mbkbqwEBFMmkMicEN8TtNR",
  "key20": "2uHYpEA2akF4Q4Tbcv1WZbnq6bAVUpT8opq4mTz58phd6bPExGgZRRpTw1MBCXav2qwjgs8VNqu8stvfKeeACaZa",
  "key21": "3tRS3YFLujpBnzB6Ae3itufcRF3gGzEJtjsQAiJZoUQcN5bosRpbpWtyjdhvBS9fbDnmscSRE7Tt5kbyydvvWvAR",
  "key22": "5bb4YKpkrRP2AP2g1WcuYVKe67n9VrcJKrzR7atf1EgN5Gw8uDVNPPV2PYHQrtUkyrwDsEkkLAYMXz8pa2KdEFGR",
  "key23": "4K3dAf3TYN8iCUyvsRAD5byFY3cahYc9UumdBHmjF7z9Tm2s8Ayq8TjSf4PzQA9d5p6g9zAB5ffoq9kwoKYBu6J7",
  "key24": "21Xi6ABnFi6WQWeRJiAn1zEhTeqjXK94uDceG6zggErSH7xe6WQ5SzYfu4SLzuJjFbtKd7nbYP2E3bZybXAigMQd",
  "key25": "23tTTX1ig4GAcV2489EHyXPEGDy67rsF928SLss3XWrvdHoN5caSz42pLbrdgG9bfSyfEinuRFgaFuUUmSnD5nQn",
  "key26": "4t9Cj16gX9qRcQqpCH45qxQb5yA2q3ao3EeSJYY8rLeXkwzSZRHnHc36UP1sgiHBVA99v5SyAGTZRoTMVRh5mfKo",
  "key27": "53G7FhZV5fgnw7FYMXPiCZSRMaswtQfAgnBd7buaaexG8QqDzWu8tEurt3WkWqkPjHTyTmYLa5nEtQtJHS8Gdo4c",
  "key28": "t4DDMkx4ZMnYx1fjEFm4BT6PhopXRKaRztQ1uFxLUgWoHjjLac7VPMsMMYBvHshhtuNuorW8myngfhx599ceRfm",
  "key29": "3yE5eETvBAiMXism9hAEftCma2U7fyYNp3UbTaz11HKhcLsYCi5FQVaktsRX5CmvrxpGN9M45iq6rgdeLkjHHM6z",
  "key30": "2N5zqrGmJYHz3WGeCcYPAmYR4P5qtqiTxQrNCCdjjNMro42GA7NANkJ4kiPLDE4jwTKNHDbg9EEkCQSvCRMronQQ"
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
