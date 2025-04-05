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
    "2FYEn77wweEwj9wS65fnsEMSJX6A2RBA43p3F4HGNUS2ZcB2LtwiKuJiQnxe3Rqmx755G3cXm32bXU7WG9uTa2TR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psMZcDnFzdAJDa9aZ2J7XbWJHDxeWQpkLkRudw9TwnBGw2kcgi75ZTJXH6huf3U8TunVPncBBibwm62BKGKL5s6",
  "key1": "2Z3ZoNb9y28VJSgwwneBQVT7xyqpGVz38Tnw7ToZ2R1uhywBPFeogTSibNw9wSpyLghJ98qDRANThAsJgSPJsser",
  "key2": "2qDuw5Jj5A35eQ5xWHRgVyqVnhBjaFXcBC99NsNWzDejqEQHkqwH1WmjcW8q3vcNRJt3Jj5XZdwkrzSbdE6XrWK6",
  "key3": "4b18BsynZtJnUfqikLyowq7cTmxpHVCtqMSS4sHa4pB3qYzvnGZpoXuU55pSVZSfUBmgcMGT1JY5DpZWBn5mJEN1",
  "key4": "4YqTnmDzqYq5NXxPMRQQbMZzpvLXaoZ8mVny6Ueg4gusKfwG9HzgL8nWKXgbfee2rFw8w8PC6guwJJHqf2YVoXjF",
  "key5": "3BD2W8QGtnNDzThiUK3kPzM7GmET8STvFuK91X8S7FWDPXxANnF9tF27DBxwMXzHANk8uUhrpwJ5Po8EJPLENwYR",
  "key6": "5ifZhDkSvgDJwvv4taAXsSvoUvbRYHnX13Q5Z8tayyEKVF7j9jcw5vcusHFu1mDwXBZpnjNsEyoz9Hsi7Vzs9yj",
  "key7": "5f2PGLu12QX7VtgH4TpezRYYPCzB6qY6LusC3eJbN1iKL8yJhB42H57KerWoYe7mQU9n59G7A8KvY3AKUVWeAeS8",
  "key8": "5SScRbagQpFzdXgVSsGQaF1sAPRTNipLQKznx7sdsEGXyu7SPBpV6BYCA8zAYZgBx4vKTmHfNH7eZA3ujSRi6U6o",
  "key9": "QZgPm9EMM9SmTw2MGT5jDaJ4rYZ6jt18GXkSuF8oEHbhe6TJEaLZrA7TjqnVJ8JHGbsoCdiXJz2HH2fxRsfGdnp",
  "key10": "LnjM5efX743mELxhkVN5hXHjSwA3Qa6pbqaJByg7hm9eqSwrXP6NarEEVAUahMocwXpQgx8YEDuiqJu6fyXUVDM",
  "key11": "2CQmoUWDyo4PCVsK5AjYEC2R3qn6AbxxMPTKtAL6KkfVbWLG6HfM31JdbEnazdGzyCjCu8xu2h7xgzpr5XuDDhJz",
  "key12": "5uguWWJ2FvthrhzYzx48tvXZVvkCRRrCNT6WidxynfwQbp2g5fLsJiPRDfv57gr9vRVfvG89aVJssKQCZdvKXZBY",
  "key13": "2Csvk1TsUJbgxKD3LQEoLYRvamdjYBmFcGUuxSSyymCv6EJvehARqEbMKbsvphp6r1wzBFpNz2LonhdpPG33Fj1s",
  "key14": "a2SAcvmfRSaNpAsvqjpiNGfCCUh7wGgesDJZcuqNPAvwThamebGeAeyRuY52xAZCiQ4hdwXAUvmNGg2JqGAnV9h",
  "key15": "4nz8j6LGkVhXag5Cdy7pHdswhgkVY7xYHqkfZbzb32dMNiatM4CdxDLjrYAze3swFc8E7ySZ3siQaUviSfShkeb2",
  "key16": "3SR3NK58RicL2bLLcoKKQK3ToTATrX8G9P3K784VGh9bCLnRupgUtHDp8iNKxELkTwPeM5QbNsM4zE5soRDLUDUC",
  "key17": "Af9S2BxeTmVanPbXa7FhNT6Jx7U3mkUrFpR9vv88NwVNijf6AK4DGL3KdoH3zLNdpJ5d8KdX5t3g5do4rhZJ4Go",
  "key18": "5xbCY1DvSXyVtuHjgf9fAz4G4n5iqnnNhYyHYSjoivgKfARYGFSt9qRbeTmpN4EjEKZwztnfG4qNiTAJJhw3P6KS",
  "key19": "3A64T1D3qtZoc7xriXo5HyyDkj7N8gRXBCFzxDZBDj2pr8GvpyLFzwfUu1dHfKb83YtqBvKxMMGyRDC5DL65LQ3v",
  "key20": "4ViJJ2KZj8tjdio1i19GC9A9fuALHSHZL7Lx6hFUSpVXJqLE2ryVp2ZHCCfpR8ho5CVHs9JVKgjgDEEEXmD5J4NW",
  "key21": "YP9wUXHhfC2CuNJBZVGAN2ApQPazDcEtLxsYr3azqyzPtuDBy9nzRTSPMsdikddt3SjPZ7zY4GzJULqTBkwUVGK",
  "key22": "25boZ3UCe6Ry6TkP68dP9MRAL4kk4yk2VmWoibgtdU18xM9CYbAiEy29Cy3wNVC4VWiAJWaKratwXFuMRmHihLAm",
  "key23": "hU2fa61v8jKL4pQMzKn1GRUtcw8wZUY5XtRBgB9iR5aSHYNrxNda7A2MHDrczm7xkHmLccCQdJsk236hKWmUSzo",
  "key24": "4tSEGs8AdH3ACTSSVXWGqK6RT975UuBqJkZPnfSyuJRWkW9HpRk7wWmy2JaCLRAf9wJPjj2evFx3D4DBYoJbmHuv",
  "key25": "3rAFGwABCQSKc5ogXcbaLLa9A3Q3cERXroivoBfhrmXwQmx1XvYAqNjjXkJQTe5rNcK7wNVCPHFqKxBcEWjcBbzr",
  "key26": "53ymLpeU15E7u9n6Yw5XYMzk2xj6caGQAe4xkzQp2MYE5pQgyZk5zZCcdtUhu51RoyQy5KmZSKAApPftm4vMFTZZ",
  "key27": "5sAirtieKrkfNGchv5RNy47EiiBafUofq7hL26UbRcrpvA8PCoCaeaeVwTKTtQf2XC8A5wZJqwH9jbMZ7bfiwsr9",
  "key28": "56FKmvBoXXk3CDxK7fZsmS5wHfG7bjH2sUPhdEZjS7KDxbQnpYbc9VKrwqgp8ZE86w1Zy5FCpRxyYffoz2R7qLoi",
  "key29": "3QfxixoyM86JTTFAYVp63KRobpbASowSLFMGNDG3nCZXf3mPWq2TZZic5Gkm333vXNHJsRJ7TAQi6nzMTqE1qTTv",
  "key30": "4CEHPmLxhTLHmgzVnoyCmZMwiGwoRA2vL9DwWNYBKeWXT96GgvRXfdWHKH4g2GiyDPJS2egPxaM2ipHxaSB2xng1",
  "key31": "eVPQ8kNcyAvMsPbrkGebpFnZQvfQEp2LANewjHKaeEKa1785nJAXFy2sEtaDteQT1GQFHGpzru8tKCf1HfYr1eH",
  "key32": "3JbYBhq4iePFGqTGcpTzBy8NKmXXtbTB9ToxF1fYcc2baHdLZssnwJAwCinb3wQ224FTHRcgT6jEHGh6n7eKpqhG",
  "key33": "25uPTTzJwva3hCU44VrRHWuBs6LxyyCFWz3ePuNErQ3jN5avqakNzAsDiiXtMgxdHpf9uheJ8AwcLdtAUADkYbqs",
  "key34": "29K7bCUSTqo8VV6xxqhJEgfw4sYXDKx14AvMDk6sZAckNkQ5rjw7mtj1ejVxri1mDzMUddqS9EeNpmEtf9kLuQW1",
  "key35": "AtABQ3nfPpuZxxvEspmG795mozfXCPoMrmYDMLx5vvnywKWb9BY3xktntpp24AEi9JQWgFimfu466VdZ1Qkd4KW",
  "key36": "2fKZyXtNboErsH3rcxbH4AECT3VdWrboky1XNuNBvAYapCUmaMLCJEFRxPttzvA6EeiQS2bDt4sb17qV2JQtU25k",
  "key37": "58otGqdMLcfEYFpgiutj5B3vbsAaPwwKbV9KWiSmawzj5WjZvaTqN95dva9632svgackGoYiL88QxZab4AC7XLUL",
  "key38": "52rsn2dc1B7aX2rDj8SwWMvEh7DBPALUrghhT1rqWcjZnT3Lk4vyUhNbXz6zKUwr9zC1VT5RTSJwoQtCuxPmCTbW",
  "key39": "2LQJcXBwZrAQ1g9EM8578oWY38xCKYDBtVVTiZoodhtuCQqFNZM7jsQBot5H4FaBUo1TNf7MVkCv13qBJJiH6HGV"
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
