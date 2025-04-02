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
    "4xRQas8W2XhqBgm3XMEvVSZbJ9bgHW9oJqPWu7jDFYowGii6bjhF7tqRLjCtJhqfzN1fAdM2ASjxaAc2YBgtetaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bNctzA23Mk1K5J57GugnzfG8MeepPRH5WfAZUf6LJGR99ATJBwDQg9jHkzmNy4W8FYmM4qjN5yQisFb9NQ4QeX",
  "key1": "5f1dv4ddznZUuZ9t7t5xA8sJAFVDwFdywBvF8FxppkTeRBwCPnGJb7Cyqv3Cib7Ya4iHxMgSq2AHAr6J4vutVooq",
  "key2": "3kU2JQqh7aNinRhZhAfCX93JSztHWGHraE4sRSReQoYtd8JhC9AvA6QKTshByzjJLKvRBC6DtbvadDGULnYg5AoK",
  "key3": "QKmS1F3UEHwMX5nGScDGp2cTVsWFo26MBZBvfojT9DGn5zRZc6VTGzvAWceGq9qThFCGf6Rwywr8zYLm3muCH7u",
  "key4": "2bYh1AkpddbBGzcc5iyaVGGeh2GKTHu3AjA1JA6W3qnRBnHJRpUkntG58bZAoGn9UQzUXruktR44Mhfx635hTDyz",
  "key5": "4jM4PJGiKZnzHZprivgkX3sTYKD36yLMu9q76YhEJhBX7UKMFzr1tVRSKA9Dpuf7W21HsZDWunrRHiyqSVZq1PhN",
  "key6": "UaoYiu3wtx2vCNzfZan9QjcCPkxDmunEFZPN2ShGVp8jcX5QwDgfudTazpyd5dJstAPBTgD2x8hHEUZQuYaw1rR",
  "key7": "4FUjXRdKzN2o9P532PLitc5wGXMoApMGMp75AUx1xNgr174Egwqu5c6aSsq6PDhgZ76JzV5uts9wVggizhnd5jb1",
  "key8": "KxH5iCPZXkfmMswtEZD5a56qWguzkQoYn6gSssWtkSGosJ8vFG25xusnwPrnwzFJXLktkYi47cS9wf4YFW3XpB4",
  "key9": "4yrsXUEYdWgfUWZdrzsV33SEvLsKEAXUAcfUDq45bqCkkNRktjvvrHR6V4uxJdGjJsRB5zBcm7r9fSXSrcFM1fmX",
  "key10": "3GDRvXcfz9kRQAijbKYHHwW4ajrNFEgWKwXBVJNyo1yaMUpJCX4mViBMzrnNoCeY4ogs4VZPs9nEw4DJWsSwWED",
  "key11": "2nPo6gKRA6PZfA8vEuCAbfYSNVh4h6drXDcipqzjp5yk4wSytFAVrAHjB5Tf5Au1VfdnNc8LnrBszfS7Nt5Tc7dr",
  "key12": "57FMDFcy4c1xBTPD3X1FnHf7eA5LbGBwbNt15sPMEccSUP6t6rY56ZuCwKvxeEW9yHmvW5CKpcc3zkD1ShpFwb3x",
  "key13": "umxPD3LnM4aEqkpSPN64N2FJHJFz2h8YFypZanh7BQEdAQypxicTWAnsJA4vvNfEqih7Gv9P4GsdUEu7ENVSz31",
  "key14": "2UJVfeWHaNcA8ZyBhSiWuQ2ezxn9hdmikbrUY67ayh28NgLbZ8AHewq2vQEXWYFns6Ej8VLAWAu7mNQnp8m4vgaP",
  "key15": "5dKNCQ1U97qVp88HUJN2KTARssq8tzkpcmNogiPUKvsn5FNzMQtavPkmr7zZac1s9mrzEe5kh1QkJih8JM9R8xXj",
  "key16": "5jcdGwz25ZLQqXm6Ev6Dyo8nGKqbHNChBF1wFFp61MTt5UYLvKgoG7a89dsncD68ZeyEtcECeCiJcPMbwH4pcgNW",
  "key17": "21uKdT1NxfMhwqV4kooS59WgttunMYzHtYZHA8Sz2KUyFZHuQcubiHpsG5BPKFbCxUpwbgaMhiNAT7apwEKvVcZ5",
  "key18": "4U6fguQaoeRoCKGDbD7D7D2CVfaneaFkTUSrRmxUD3bWQkupGnxXLUSqHNLhXq8hA4MB1gGJCLT1oJKxj8KVkCSc",
  "key19": "5tVuvifrLFBEntvoGRpyVPjP31PpNrnHCWFjWQpqviqY6ssbfhUhMR7Dihw2Kj73URJv1xNQudSi34fKL4ngRQ5v",
  "key20": "36725nJnHjgHoD1xeiqjXHhfwSPxLJxSU3tpYodiDEBFgxx1HxZ1K4Bf4onJksJiJZ9Taa5vD112DyE9GNVAcN2h",
  "key21": "4nB3ZfYHYv4aha4ZRyEcarYASdPDxqzL6MkNqjFGF8K8eZBqdFUhk6MGi6TgF96HE1Cc8E1VvkY74qqKsHr4heL2",
  "key22": "4cnQ6DsTBEQuQwBvt4y8FJVNjDzsnnzWkGuqXu8gcc3nYs6MomAFRm6AkknbU9Nta1bqgorixEGWrf7WPiiiQaoX",
  "key23": "2w6mNi9vjh7yutGVNFCbjiLuiPM9XN7BRgUNqcnmdduheR2fDn4V9yuAytWZD38iTteH54mm8D4bcVUzP8kzHc9D",
  "key24": "5sAw7FH3CBJu2ssw2ibiqtjwY4GtdmxGSRP2Q2NjGexL5hkN8tnniaT8UrBFwFMDfV4559hiysoYWg9VxXYRMn3B",
  "key25": "59jPdcwjs4Y38BXMkqkJ15kkTtTXzWM3G5gdAQpeL1wxYFSsbZpEthUpPjyiBwttq5EG5ogQ49nsEd1XBC9KbVkH",
  "key26": "52VYw116YcBA7NmZmHkBWphWDYTKLuwbGWD4BuswghpgegdTYq99vL7YQ72EQiH4Yk5bv4qDbT636En7EdVq43Lr",
  "key27": "2NSQJEtZSfMEmXzwvvKkzV1gswTvkvBBjV7KkLRa7bUJPcNS3RScuzUEWg4m2JJzA82urzBcqrHy5M5VEm3hwVRo",
  "key28": "4GQeUerQv2yCasG1wcAp2dfEcs8VG4DdjXZdNLytus36dFUys4Qw1goTgahk1NrzhTdqr7CENEuZHq92ingDpb46",
  "key29": "5mfukrV3s99WyudyptzSn7NxTDAcX5JaeZzb9pnim75ZVnXGJqoix6kKqhAtAMQv1XBQX3yCtKC516Rx1GTwj6vR",
  "key30": "4fZQkRRB2CMCDxwrb1dBJL5N4PVEH8CBv79iGXUGCdRCaFysTozBe66vkXRncysWxvwtG1bCGahY8h9jiEk5WXj3",
  "key31": "5DSF2Abz8CAgQYYHNq8hKzAvHPY8GxedvWMwhCs9AoG5ise1P3JaFaM9uE4YuMAX7Th3KyGhvLWNsnW24aDCL7ad",
  "key32": "2ocPtZur8ssqtou5nU1F79NPzJ3hg1TtvDnnpLbrxyCtRpHEJgec59wXXjBZ9PvzcBDz9fgC8ShH9v6UUCHvexck",
  "key33": "4qVcKMG9QpTqoMxKKep6wPmXwaAi1rkS6NxpwrKT3XnDM6BJsv23MYLXmRN3Eao7HZvRmU87rfc6mvWKsXoi2BJb",
  "key34": "5GdQDWzALCrrcYqfTfJDhqh9n7EidLEK7TiPMWF7W5EGDn83ft2Fv6UaJmcnc9NpvUmtMhsCKazBDfLJKDfJKudx",
  "key35": "4KK6vgcHRBwDP3w239rNN9sFpWDHFF4j3DLK1ZbuR7QYkcQ5vHzxA9ZqdJ9SMfg3V6Kvjx9kUCKqL3SJyMKm6tCS",
  "key36": "LXSo5GuYbzPEhcybWNQkKPMCfnuYWvMsxZpy7CdQtsTKSaq1RtL7wsPGdVaNUMkqaMPhJzTavVMVMUvSNcdni1v",
  "key37": "2cMNE9L2PQjwM9ERarN21ECyzyM42AtD1j8yg2Wy2wiVUvSAZ6vviXKqou2ght2ztJNc56rC7BmhtMiL7KCSfCQJ",
  "key38": "2DrSWQQyoPSMhd8uK7TqGC6WLPRYgu8KnudiTz5anqUieVcQtWQUuAHVCKiFcnM6mQKkE7uaiEM4dN9J9GbHpFKD",
  "key39": "5LewSqifBQ4wraL5eWvbFY45AjiSE3r1svFiywjnraxfD3aNWw3mkhQLwm97x5QwuR5dhVbxcdfWs4mDi1g6AJnQ",
  "key40": "2w3eEjPN8W5ffbRtyn8P1Psem4LUiSMfLTfu9ziRHXBwMZMPcDpfVdP5fHudmGC7XVopvDVFfgjV4AWakYVCmTjj",
  "key41": "3A7QiE9Bs7hnz5K7FqcCiic2tTXDXNGKUK2UeLkjYmAGHrxCqoWbqfJ8Qa43To2Y4AUHXYgUVRTw6aCqD1aH6wow",
  "key42": "jdsbkZNXYvNq87b3E62eV1Hj4KMxVkxJf7Q1VfGmmLdYwU8iVPHttYdGefP2VsS1zS4hgo4wjbNCdorggRYbkE8",
  "key43": "5jvRWHckCnaEoExdoCjNZQcsxNqzBV2PjuykJBeeSPFGEDVq9HnwnKj8q4MnmA1rMeRQrF6fPDdmbbsAUAftvJre",
  "key44": "3MvyhBAfLJRQbcYVqwZk63u2LJXyfABmrVGUYSJfUjJttzLnXYiHH48g57LpZ27ES9ZZBmM3ANGSAjKZtBRyRJvG",
  "key45": "4GUftRdHtsCkVFBADAbirmjHmNNZdZTUgV7ptEnUhpoc6DMpvb9789MicTDqP2nDSVKQmE9SuJeTb2sjbRU4brXG",
  "key46": "4b1yQKbiV6VCqCdt7kAo9ktvpnQUVHFEY2WU2Xg83LtbyyYsrwfpVBS7UiyvdQZaEGjq4cY6j32y7JThanKJjQxY"
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
