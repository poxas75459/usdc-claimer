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
    "41oxMzw6fT2cjTMaFEqWKPKzTTmYkoSUrX6akr1qX56R51isf6WAumURYrkgEvk1txBSgsEgR5petoWHLcqBnkfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ejKEEEU66htfGvRY1KCziJumPpN5oyfCGwoBCN4KqtYiRX1mUqancaJVJfJY4nWF35Wj6UmxtLWjDHDHNhffYwj",
  "key1": "2GM9SUnDVZ5aWFjMwAVxTGQAT1WComAT3EScFSsCnYgd8kE3W7e8UnMRRCQf28GHpUfFW53pbpiszexHBW4SNLVM",
  "key2": "TEkdwdNAmipdeAt98nft5Cg5CoSoauJtrKTw93ZBoSR4noM6Vv81q3hH7XD43NaFs7MmAnfey6vcpE7zib6VEYj",
  "key3": "5N5HYyyikpUe6tr2kMU72KjEWKRAz6r6vF9RQtpX39aqmVxVCWQ9NdgDQYkGxKYvptfZqM9LK4RRMhC8hDNYnEMT",
  "key4": "5ijTuzXxQsEwBzyfQ5hB5gadCMtP8FRZESnQdEciMRYDp3HoRqEeynQy8NWXwRVQw5edXR7aB85pu5y6fvk2B3Hn",
  "key5": "28DkrRaAzqxF9GzSUiSNo2pxUpEti6tsYLZGqKya5zK6z22eFrrrXjuGRpv69T2b1uQmWTFDXzKMY32oTRXYfWqa",
  "key6": "2dDx9f9VwnZpUqspZcnSErVdv734PUMUJRgrRvCkyQXWuxtVwDgBqEUG88Dnu2s7qiQqezCZkRZLumyPVrV43TbE",
  "key7": "4bFuLTLKxdbsC6qyVost4FYn8C5CfRkF7H4LejeAXmLSDiXP6QPRqiYHENAwzXv1mRpwU7MpQg9SEjQsoTxE315A",
  "key8": "W58Z3wQ5zjx6mYC5Z3SUZvVYR1aP2aB9dqd9ovffCAXjx6vq1PCfyn6gRUscStx6TCTRX8ndUqWZWXPRo6s4dSH",
  "key9": "uDGmbsQFbptWp8kFveQvhLjWqAK4UhJix8W24Xn9wt1kab3ZAjCs1pJM6x5Hy5Mr94dhj6eNtTkLFLUj7unE33z",
  "key10": "4asXbJypNPGCYk9ttP5DWwXBZHme1AyRdfCf9JYrE2MmPF41YzqvGVWrGAQWDXiYyWDywPA2Any33v5PP1FAkJU1",
  "key11": "4ACgJX3oYz7wYxQo9hpzofBEehhZktm24BDrP3hjKHyfYvHkhjPm6f9Z9occVNLBkyWN2ySiW3iWigZf3LvmBgDC",
  "key12": "HFoCR6v5o27ps5RyMTjk9wSa4AfadjHcm4MTPDf9ikH5nFpgs6tF34EEkoD4G6nvifBLCvPLdzZqwfYu95dPh5G",
  "key13": "4L83s2kWsuW84z2RubcjW7Ss445qWKpMVXRfsTAjm7C4CMHm3ZqijvxvTSbztP12X7Nn4ee5NELLX378LX1GDbcU",
  "key14": "FQNk5dnjzBWnw3YiXDDkBg1PjCSb2XLp8cGVyoPP62odmD7FLcYrhc5R2TSNKiWwC8oTJZ4pV4QhiEwjbtfULW6",
  "key15": "3MRKAQJP6ENsY8qqKKnoVNAAJRqkk63Ko8qoVEBuMrsp1226VwM17AV9SfYQkr7rgSupXqwUZhn47J1Fr9oP41hg",
  "key16": "2BrQH7MhzKVwg3HpVzxfCwwAK8Js2B8TdMbnHqAzJYEYBKoc19XQEx95ce8DYchuFw2EtCjSUD7uqBdQemPEKRmH",
  "key17": "5d16kcUQ3mBUyoQRBGmh95Z5m8bEnCH1SPnYwXAUcTpeYeUw7nXZirJoPRA1pHMeU5krDvFDkEyV5KCP3tZskVXJ",
  "key18": "5swuWohUvAzrjv3Wwq2WtPPM649yed3rwm4TBajrceX1hqi55ZMLjfaDB4v6WM5byVvFL1tinv8uyfiymS8nxrhQ",
  "key19": "3JkRWesW6sXx2ZTkNnTUSZDBdLbthGkXQkg7h9mCSZ1pH7UArgdbAPPvDgcDjZs5vBpAWAxq15BwUyRh1N6mQFNn",
  "key20": "4B3sAo3Wsw5FzSnN17bUtG8DvxKRUVz3xU1MgkdW6iZjze8C1fHJCL1X68WG4B7ZXeLyvmyb1xL9BWaNs9wmmePn",
  "key21": "5A9xFxZ83N6TZq2PebSZSTRPMToi7riZ5WXEWKWt5gN1KfmBjPGi1FgSaeD86iAPcBrrZZAKBe8H4L7dfXCpqYz6",
  "key22": "2LKuHUgi613huXYtmtjBgqhKQbGKxy5HUx7AteGhGCNJreUFj97wPNZMgSEEZhkZKKDkA98x8WgjGUZ5A977N3R4",
  "key23": "2vA4inNumG6A7ePqr61ssGfWfdierzgHcY6iEbhL7Nm94cHCMwZ9nbBvizYVKYz8ixjv3HR8uQzVKqfpNxy7zDxt",
  "key24": "3eUZBH9kqyJcSJUnbLYgkzetk13NDPCQN2DrgX9Z27LUdc6F2BWbsh3MTsbRP54Nx2mA9YZCMB9dQVovX9HX2Dkv",
  "key25": "5BUcswseFefTPFmSJr5csLKoRU9Z79fg9ydRhFGrumdefQQ1EDvKtVoFCDe7G52KGuqRB3k4WJZNq3ipffxGtP1X",
  "key26": "5kf3a2muRSABXTtYnfnW4xsr8f5wtwftnq1gMKgryekDUFFx3T8NjTn4xmrPGL8UoBbWMxemAGrf3AJn7qYx1raJ",
  "key27": "2PzwtPS5YdkWVJaXhhH58fzRwQnpKS4vF3ctZb6VfAyhp2ujZYzFJWMBza3Z1dP3P85T9SboiG9peyQ9N2ygsx3Q",
  "key28": "3BXfzG9Q7yLHZnYXFrQXSchZtBXE8NJZKcRn6bhesaMzwBN2LcYEFhRRLNuEEwmYaBx3qPsAVyajWiS3VubFhf6M",
  "key29": "4ghPtMj8ZtXSz88Gto4bMpyEfHNm4HvhvqA4PAtpMNCgF6PCzy8vhpkbkXjtAVaZSLffhVaP51xeXLSqupUDqR4C",
  "key30": "51PQQ3LXfo1HZGEeggzfxkKm6dovEGiaAQnMGFg6L3gU3WqFC2LJVRS9eg79DgbTzgAaZrw36HbBywQxGfLCV31W",
  "key31": "2iqF5WwyUt35EwrEFKP8kmdpRzvj148bc6BftXYQAoSUd8JNvAijBRSMu88gpkC81G4YscLiryGLweg4K3Ja8Eaz",
  "key32": "42TGys6GaHGF9ikom4Wt9tUXpbeWnmtFKPsixPSs95uPmubwCrL1KvbvGXhbPn9NJVpLa2fT5UaZd2WyQPnmkgYr",
  "key33": "63UjqaRHFtt6wk2ocevF4heLtbuCiVB5j9Z6DfqyA9ApVdb7yrR1zhuzdq9978exWoCgnBM7AeUvm1gu1gfwFTCE",
  "key34": "2vTWpZiheqfowy185bzMwCEJtutvQwBj5DMPe5ZeYds7okBoWegzasor2CTWsfTXRKZqHqmBTsRxfyuoNMiRtETd",
  "key35": "4uVxHcr5UqWc7MhzdrnomewfDZbw6vuf3qxkz9W8t2ACBmtFW1ogSscHDELkqwPjCLtgzHjqnatFnqVoyrE6S5hf",
  "key36": "2N3ZhjoqXxdV5Ls4gJojrKhjXJDE9MgJ79VsvXAbLsdoapmggyY6i9r2kmsr4RqZb2kSBmfAZrLRBTDrHnxD6a2u",
  "key37": "3kv2J4jCyZMfEHLU9ZWyZHDxJN1tHq2MsLTGMcpnzENb4T69ELhqhnAcAaQDPGL42TbaGifqvWjRJrzAtyv3K5gQ",
  "key38": "4rfTgJMavJWHkupc68XFdSbVF9kA46J35fcN6x9dhs3fSAN8SRahVmjdtwJST8EKdsLVRXFWEDBmRt7AhVL3bMuM",
  "key39": "26EAC1hnEcFCYQczeiL7pVezEnRYc2GzmXJavN4pUCqUaLVDafPjhCYQTtqJQaPXwUcx6q7HZ81WTR3dNkhXrWBy",
  "key40": "484Gn9VjGNkdTiEbbygrqMfpdv9A2drpbdJ3vdnnGxoTriDvhbvyUUCV7mjxGR2mCYTmGJmL3NZntAmF7P5exgc3",
  "key41": "49uxk41gk1LAL23UMV5cD8BRQFmkwPooFXgQ3GsPs7A9EGxW2wfvbRWCYPoPwSbktR4jjT9VrsbdkUFoC3zBGjiZ",
  "key42": "36tLguooGrE6bZZQriktNXa3vb52x7rZtudgtnSM91ZP6cLQovLVTrHW8uZ9YjXnRvUBqaPn7eXtEeDAgwjNd6pp",
  "key43": "4S5r5rEPCdEAMZz3SYSLzj6o455R8sjfEAEdsZAhHfvYtfaCbTsbG2Mm1gY1stsvySGYUZwx9oA3R9p6LtNVPnu9",
  "key44": "5ZCShqbb6uRvZq3TUEqr9EWd4f5uWqnZJBtWSBbSocAMEc45L1sGESKjfL7x8Z2ghVEJhsUpxN1hfx95TfT8xN51",
  "key45": "3x2j1iPkEeJHTuYNMUBQpz38415SV4xurRJRjWXptQ5iPtJxQ7tzxa8CEnhBYixqQxiBcy75Zv6PJ9755C7hJbcQ",
  "key46": "zZKpYPEZtQPvVxo4C72vFrKcjvZLEcXh32PJGU8WkaGzZpuxfUDsmovXo5NMHVWEqyneNPvwWSxmACXQpqm6qBt",
  "key47": "4oaGLBfDsEWXWk9YDBrX8fir4uTCshLNNjHiKKBw4hXsUfXaM8gS1aretYFsHjEPrttUkLZ2VQi9Nfd4jVYLcZuV",
  "key48": "3zwuTLbyuLsrwApH64zP2ugT1cQTcRb6EeXAW7p8ewARWzuxjGNW3BDeMbDNa9xRWRqvr1U34DJTxR7u8dHhN1XL",
  "key49": "4wmyxvseZVwBgf8Hw42EAMwHuPyGsH9ZVh2VKHWMKvyMDJpJX18RZ9nRFtits7QKCkGB9N8hM6tKrw37qJJsKGzk"
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
