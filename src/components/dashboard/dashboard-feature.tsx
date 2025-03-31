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
    "47ZAHVN9Gn64ifA7NWmt3m4QyeeaGHCsmpsqr1U9PXLFdC9ny5gkLsbo4CGWqBAw4vbrKPxrDbbqS1brEGPbcPEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCrDghzwognVgjdXd7Bx58wnYDxUZ7c2aibmjzhKkK3pFLSP7jzBqhwKLkZFok9tS2YbGCaqsSoWQwc3GmWBLDC",
  "key1": "yv8ignv3cBBEHyu2jrKVnsv9FyjBtbySn1iB7HzZ6YADfttqF2Twu9mARkfc4dKZpTtd4kbfBLKZoHDFfGyp7zw",
  "key2": "411qqobhGZsqHsRYU8ZQq59UKWQhYVG6kTnrSFPY1Hh8ah9CNQBcnVYooXzrTKqSsZEQXoxyVWQm4kYTwve7K4gZ",
  "key3": "3ovmkeSBLzmqAsZcgJBFzK2QYx7jQBgVwuTVHiDxLVdveyUMh7opzeNfReBfWGBydYFfADufnh1o1Nbib2hUzHXD",
  "key4": "3SPYar7CuGEZHkP9RwSGAQ769wdXovQZG5gg2gEVwpeXS1tKonkZ3YSdizwsYDjPknjiFqZNXXBGYiHkQg8JE53M",
  "key5": "2mnDanXMXs7RCryj5KJzmvSvoxewdbRz9RMTL8E7RuEwLAJN3d6SM3sL5b8PaSGx6igpUGnszn9hti1QBukuN3Zt",
  "key6": "3bBXGrXVA694GeBrwN1tfsTRRuzLXrSTyEBKwBJAh5DMWJfCVkmJxFruTKH848gHp3LFttFDfqRyLK8Z3y8GeQBZ",
  "key7": "3yefw4mKCfr4b299ovTAZsJF72NQyiYQGMWuM1g6g3Xi8Q31eQbtTEvo4V6jQ1xaz68edTox9fKiQKxVBqnYtHT7",
  "key8": "4SxxiHWu9PpYYuM8fu4HdA2Ti4MaE2iE1xzfw8xBT7eBCuyAgYB2WtvdgpZyCBp42wnLuK2ZFuKiUXy3PfhohS8L",
  "key9": "3rQH6NwfaBo9j4LWa74Z2XwN6St7cBrb9mm39FFxLJGNtnngQGYhfnHVCtp4vfau4hy79iMtRkx7P9MxUf8Emdmh",
  "key10": "61iFHGjM4BeLiHo1oLVpRwzvqvZ73acgMEDSYKQqRjKSJQyD7inpC4bAMn5GMuwXqqTvnugS6rmgs71NXifYkx4M",
  "key11": "48xdmbegyjUSy4XHV1DkSyvKFC4YnFNu5aavHWA43BXrSBHp6fBCmdXFdCxGbR3p46jX5tBS842gkVCqMNAtPeM1",
  "key12": "5aLHMrP6ihsZgF7Nd4Jvah2gBp3h2HjUnQ1iPtm2rWmk1BHP9LT8XMWeJNNP286gVVujouxTkRhVSkWSCLdxsiQc",
  "key13": "3X3rkopn4w6RhCoE9hmRod8ezTLYHWpkRPuXvZNE62xzKtn9LqQ5243STiw2omxBEXCyA3azaPRuV7HGsKGbuYxj",
  "key14": "3VDPci4MsRaappnh2vwwCqx3iiBDTyktFYe1cDZ3jX7hsC88pEiw3jRJXW8WL1HM17GtjzexFwbWD7Rb5FjY9gq5",
  "key15": "4deyNB3uLW1pXuuDaxcSjH1nfUiGEhTyh1xJHHsssEaJHJNYVfcUxMA7PvtTb33nNdE971vtKSmKzRC2hHp7PSX5",
  "key16": "3ByobYveBRzLSsJXCcN6DNzyPh9hJfBG2L5hwgRTUEYr5Ecwx4rTAJ4Bk3DPo4QFtcKR794uQtSejrhNEiWtqUqD",
  "key17": "XzMPYcqvP9kvbLM1QsnKy9ZvSnmZbj5PoHx2eLbzQXBn8VLBuVgvNhPQYyaW8AotRh8qzDdGTvA6QrQevZ9UxtQ",
  "key18": "3sjVyzwHETkLtAspeNGpNJQVgWeDLUZXnHMVrFicmaC1fkLHMgx3rWguzjxSTMBzqtj698geyZiKNeGFZC8rfT5U",
  "key19": "5UumAWF6rvdpHjBySW9TzpMjABoqHUSpGBnGuebxfU1TL46eSVe8s96xPuouB1AZH8XnoxACz9QH1p2omKQJMQFh",
  "key20": "Tf4FjKVLht3Km45RUyYFZGXAkJm27P5f3cd517uxxFhRo7zKBC5zDNj8WCxRr6UDKeya3QpgZ8TtLiqFXpKXa9H",
  "key21": "4zrw2uDBUEjjNJpzbwhkS6fyR2XWFKGDxZfBuJbnaEFeBzir22P39fpeufjCGf2tSoD7rrtgKTE9MdXvkY4thHi9",
  "key22": "3BVgtJtqHbDjXnRxv2T6orYr7HEVMYREPNjwuHZm5RgY5pk9fHsxGYWsY4qDs9RhrHmdB3PiPrG9EoRpUmnhundn",
  "key23": "53tf7Ru9LnsJrNrnBg3ewomhNhQR25RzYCmE34ZC9Wgt36j1Hyj78s8bd2J87FuFfv143ZFQNRfaQ1DmCEynrwYy",
  "key24": "e2x9zN3tWC6eAUjAhTrqDEVZwgLhymi3pzKWd1PmCRgufo9WkjeDaVQeEy9pZGmBAmwqmmP797tc9wQSDFrsPQW",
  "key25": "32MZP2U5gskeqS6B1NJjJotSTYxqRpgeC4HZsEZA5QVT14VrbM2ibb7puYpGRyP164WVKeruqUpD79FEvuB3sMCV",
  "key26": "2f4YUMw5xneqz7nRKPeKu2vJJeDasw9ZjGHMF6haURH9NwHWkxzacFoCu8ZvyAT5atexJzAMbcf3nKKJnZrbuj3z",
  "key27": "2em6GSTMByvsPrFDot5ck3ZtVenkHkj4jVAp1B1Krghv9q6xghKrKRGq9TeEprLgu6xhUSzSDzDdW1jTvwrGdACs",
  "key28": "3wQPo3g3JwXgmhPnjf2UcYfn1KCMgkEZx73eNwJHtJuGdYf1fQtQdwnkuSNAZoLwDWe6sAnBHcncM6UXRoZWEC71",
  "key29": "2pX99uKRZxzhjNYhiHsJwLgAvPFRfCGsNboRV5HLcHmUCrQegRBX9T3HuQpCYGVyJRBNnkNQJWqxSYQVuy4LuJ9E",
  "key30": "3QixsFmh3fi2ua6oPEgroWf8nQyxed4Y2Dww4pSFcRyGgsfM7FrUADZofdHK8YxtATVAgDeWG3NZ9CfkvhPD3V81",
  "key31": "4MLV8S5HZ1FWjLxcLxgm9whANTJHhtzZyLudm4M7eicGvXRSqFLhhD7wNdSn3JtdcScRwv6x1cJe6c7pGkvnAUzN",
  "key32": "5SQSHzF1RHL26U3yCQjDLRQW3KmYoT1Zmg3abj2aypMHg4vacbsp8764pebgHLYw1v2y2ZUnw3Bx5zsYhkzbXZf7",
  "key33": "24rW8vW6c7mUoBTgqowyAtEvyvMR83PM1bzRH1mfzS8k5nWNSsD8EKNANpbfavN8tPfjP14TFPdWwNgLZsoF1oAq",
  "key34": "2UwLD7415HYWW3ovNKbUeqjPWV7TF3pBjVu5U9dpc79Xnjh2StxTGjLy1aNunQChSxohrjFAtZKKuoe9ZBGp7yNJ",
  "key35": "TDDJ8RWTGAWt7U7jsCJtXwWvvhQtq5tqQGvdex4te4bcvYB2yVyP2jszjYKL9u8VGptaDARygXniE4BubFdPnDX",
  "key36": "4TV6JfcJLjouiFVgYaGJshyefeZhfCMLuryTwDFYFzo1ofrQAVEqGmdn1Mb3HkXRRFtKGAbuPp68KD7xJr5pJHFu",
  "key37": "4uXrPgAkPhcYdauXza3vzicG2kuiyLJJwf9hrkeRrr7uJ3a195zWDXTKDrFiEfHSR3qijqHWsFWWqpzmEAhaNiw6",
  "key38": "3AfFk1xybbqnz1AWhKWUusw3q7P6keBgpcSJMq3kGsuqozxDtjvY31Nxemsk6i1fQuSmcnmwqjSjc7dMGtbXUh9T",
  "key39": "5a46zVJhQh886WxUnekpkZr8wncKLJBdqPA81D2Z9Nijyk5pN8iKJoyAQTZrVFuTToDManiChZmctStw6zwoeGtC"
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
