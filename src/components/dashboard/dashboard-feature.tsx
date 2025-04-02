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
    "557bJrqTztW7coruwDxArKw2u6cuH5r6jhG1aRGCMPAyzWtJM539cNqmygHWSSepxn9oaBoJDrrSXWV64ZDv9Ecs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVsmgR9gwHKXNyysJdnjpGi2g2G3o88kxEd4TJzD9hrLDLaipHEcZoeeAcDjLcSR8UiLveAQtzYp5B7A6SmSS2p",
  "key1": "57MT6V7E9wAyns1BXvoxBorvd7YtSzD3aFCCp8roi3Jb2pR9sbxkipEpmXMUeJBgyMzoHhsLTL5UAoDqauZouW1y",
  "key2": "3uj1DpgWTXwUUF6CoQH8vjhvuVJXGhZor997fCJw84PARy9PrBK8soW8u3uawVPat8BKE7f3ZyyQWNcad9Ys9Wtk",
  "key3": "27X6S7DRpaPBAxkYUGBmwhBKtc9pLf9PujiEqfFiSGEAU5vCDrEb5nrPi9aKpoNxgeKo12zHSLmB3V4jQHHpA1qs",
  "key4": "PFd6qu8mHAXFEUaRBFSZVP16qr5kCQC66k2FN9U9T66fapuCadg6fNpJxjMFB6fJjLwwHGSYt7qXMMzUFhEJyCS",
  "key5": "4hE61zuA7UzYRXGKjtjfLWU1p4Xf5wxG7d5VQLJZwxid61NycMhv6deBU9PjX4TssPibRtFwbXNWCfpTdn3MZe9q",
  "key6": "2sSeWfxRCJspB6ysX2AiEVJroUyKt18kBK3jkVUACT1KfDEWGpTseXEBExSWCwsD6hQ43HrZavUVPQyP85xPnogB",
  "key7": "2rK7vQfME7wsf2Y4WBctvdAhFAWbJ9TbkQYoL6f2dPhDSuPWUQzPBn79h2jkVAvVxZ29PmA21h8Nj8tnJKNbC1VB",
  "key8": "5zwEKJqRJi8KZgXn9dud5EzjG7KSNdWtggJTDXU9YbXNSizZRCSFDa3qsHLQDEakitnmuwhi3aGc3QcwN6RjoPtg",
  "key9": "3gCJHruZhC4ZzdzHEqkSAg837TjSWUK2dv9A5wKZcHgRoCUj72ZBttB3M9m86qEm9LcfJuNJinFe1ikcuqYaYRjb",
  "key10": "wsFT191UYsGSnZMh2M7yxj8ePdFXfLjPZe89xk2KV8msmtS6UvsYNdHoKK6722traGtPnFPHTVW1K1XKtkqmnfp",
  "key11": "5vU7cwQgwyob2sxap7U17FYeEkwuXQGjDMUZPBkRpUc2jPS6Zbe5rCRwfT3q856zKLQAx5kkzigDWEPBoxiY98QG",
  "key12": "3WK3gY9SkEZiAyzbtWgukAd1L3H3x7Ac1T6DEaHsmUDkFMVwjrjBeioHCVkqYRrjNHnDX9xuNMPQzdo47sAzb6rA",
  "key13": "58x1DYatGYepERb1oVQnvuzj9utvUXxuQbmBwtMbZ9sutuGMqw4SNDyHAcR23LscRmCz2ZjLZUAp4tfbJBYXC7Zw",
  "key14": "KwR2ojgKP8qAQ7CRffDhWQeUQF4u1dEwSdD4F5S5xtiDJza41UU6fWxtNY6fSLMnHRuwAuXgWP17hoiDLaCWU6o",
  "key15": "2uM2j1wtVrWA6ovodroYYqGRYT3h6R16BRazCzSkHPL7Ea12U2S18jWBoYYVTjHojgbNcGvcvZNCDPGcHxUuMr6g",
  "key16": "yTucavYTQuKoPFe6W1hX4JkHQbFaCrGKbfGhXrFunSZS2t6bxEBbYm8Rev93DGkXU6r47DpjpGahDB8jTPmXHTu",
  "key17": "597ANGPT4gf6LU6CeetYRzNLJD6UQghvfvvphWJPZ4YUcujyjth1W9doxzzecGY2hZ4j6RF5BPb43Gz6NfMu9ny9",
  "key18": "GxddAtPRWHkrzYZzw4bd4fL6BwZubNtquvwj1XN7ZhPuAgyDC8gxYMkQa8Mjuoer8FTATEfcMD3GjhSmnZ8Z8R1",
  "key19": "5Zo9nasoHFVjzQXVeyahUtWyGUF9RnuscsQMJV4N69Cr4cZUF51YW7amxCx1pSdMJ9Ri9atvxySJRTkEe2C5LwCT",
  "key20": "4FRNsxgfCAxPPSQrmoLr3pzNbZedMbJcmdA2PaJoDWbTdpBBbFBg1ya5DPLmxxVDSGiDzufdXcMe8ScxQepi5YXZ",
  "key21": "4pbmtNRqXeWBnMVsrXV9oMGwkyqqYwG35FNPdrR9uZ3Qwb8GEuYdFzJVPSde7dupZVXTpdTu8VZmkgf8fn47vQbD",
  "key22": "hrskwNTd8kk7Qh5R5RHKe3VgJ1MoDyoDbPKWMmqbuVXAjkW8M5Y4GvCEy5zPYYtuakyUKVVEgEiCna7HqNGQuEK",
  "key23": "2Ee3bfduWifLmPaVtipgwj8SHvMGUb9VZhpvWscBn8SptBWXqZHL5oKsTuiFeWTw6swJJYx2BJ5BL4egUuFW8YSi",
  "key24": "5ErP1tvfKqPH3AvbqyKt6dR33f28SeFLBoq66BuYQfiapEDP4NoNi28d4QdUaganYjNhuNgXMHUbqenyXBrr2Eek",
  "key25": "37o9UqXKNvBduXFnPkZaY4hSoBkGe4RXa9nyikSWN9rHMnk8bcW6DFbx8PGM3VqvwXQ28pMLQ92KuUmE4PgGbfWi",
  "key26": "5nbpHqK8QVBMgAt3Rewr3g9MRgtuxCNPmow86QNfwafCWVaCAggmAvKo9XhtbKGuxUkhMEZ4V2MBXWg3tdD74dxn",
  "key27": "kVKGz4dUVFw8mg8oedL4dvqvRnyUCAbMcbcvGWwgnfyWx1s17WKvzeSXP7gLHkwyiXibURWgxG7mqtxUcUo1XxN",
  "key28": "Bhv4bEsCfL99XEmAiGw2kvWBhK1hh9FtmxwiDxczLpnhcFznKWf4BoneR95WZT8RKmjgTjEGXMUDZ934DjAM6WW",
  "key29": "7u1qqyWgA8GB6bLWtm7b3yQrFuxP6EAV4JLHyecAYzk2N6jSmkgFLp3UTxQbBg5B9gkPy99GY7JWVy5Sh7ib6mL",
  "key30": "VFmNDjFUFM2FRx686uGo6JMDJm4txhvahdft4TXytseqBn5KBTkmX64S894AaGs4ZUJYbmkfjZ5oSchpF7SLCgv",
  "key31": "2Uw4777EZJ4JgA4F38miGZw9jrGGZFQABofjykRaJXk2NzCuLSkEaN5DJDtamETJv3CQhdxZ72Jmsbj5pxdCX9Sh",
  "key32": "SDR4Va2KGVKNSAepdDm117i2NkQbWULnAjhnZxsZmZemRcYwhwA681D2LgeZ2mWLM7cBTaqomTVSntycWiyxj2x",
  "key33": "3WSDWHhjWgHooTmS3Tf1yTUoHhVnTa6mRPtY9zeCksHVG3mdfmGCBL2cjfu1xwEEuyKmY2vVNgBBXSzTmVno98nk",
  "key34": "3fsqLpvNocDkyuSy5rcDAGvE4ovPDbKZcv5peLnTNsAPKKxNaGm91YXmYFzzR7JWP62d5UsJVrheNKK8eY56WKtb",
  "key35": "4NTmP3EjjnK6xnBADQ7zp95EEW8UBjUCVSZ6qBaCx6Uv3QSwQJX8Z62mTP27KSv8rsUTUoeLQkZVryr6Rku8rhG1",
  "key36": "2s1exvbmiB6jjho5V41q8HTocwGMhqJigLuJ2niYSi3yG6qRKRAJ8ztJUjGbtaPQuKz1Xksuh76PgSApiSmyVbuA",
  "key37": "5acrHLAHPceHh2WiDJ4kMzvTzv14YNHmY4e3pR3nHzT7zthNVfnoFNWFuyJdxd7WbG8KfzDNuJP8sLsnLiYLQNyT",
  "key38": "2c3YvFDECjL51yX3hfKXYfKHhuL7L4egcBnZaHGrs8qnBXzj7K3JQqiTuUaqHS97xtg4SaNNJUWGTPK66yeXvEoR",
  "key39": "4YAb9CHuKo4CccES1wZZYVK7wp3sHtLLcHn188tz83vcBcsYH8GTsMDmiokiFPaxTVS6Ah6XL6gdi6mP3ehPfDTw",
  "key40": "5VVAaAe3FSJdaNH28UeWJJdjX2r3Rtot5rFGmYMj4VU6XPp7myGiWLRizTcNCKrnmUmNaCir1e42nDjmTSRfy3m2",
  "key41": "4FMhNnv63w6GABBedV1YvQaRDo43TVps8KYuzxMMAfGNqWxotbqHEmmj4cpfK3Wx6XZpzarT5WFVFG2kjGJKW7Jv",
  "key42": "3kmUzGVvKyStRxHQfHstHpervZ3TSn9nCQM3ML6hEpX2iW9Lx8YoL2afezN5YQS8C377oJeFMaCo7PAUKEv1HMYX"
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
