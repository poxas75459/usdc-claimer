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
    "2PKKtFoVX9qbGw4arfBUUF7JzMFa6AZq4o6KfKkD55nmhismVzpXVKiwnrmhzRMc7oDxbPDBuEFkMBR8m8NK1ff4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcWY9fQYPskFAfAqn49BuwetZq5QHp8UutryqMXsypTrNV6mhuFFSoRFDmaCTnGxy4wHDncPJ4hZVEQ73KMize5",
  "key1": "5jyX5yxwamkV8qcYcPu9QHjbQfHuEC16X8L6MEy4MyMHYmHvk966t6r5T8RuYC3VTAASSSSgjP4TQ47TuLx5yaUT",
  "key2": "28kidpiHEC8Acrj5hw6ubUbkAQ1K8mY8qm1PgRLRYGi4ncH6JuKdx5aAoYEaEd5iDNpVEUwkdQefk1m9qYe3bn1E",
  "key3": "3yARrmpZwG3FRz9hn8c5cma5UADDVke4ewXg5MvDjhPfWA9tb5a2fjvebtMueTXgEphRAnaU9mZwbbEqc35vapsC",
  "key4": "4TjY863EgCzAGtuWPsMc5t5At3kwGXGLtgRAX4C3kh9m9QzBCuchHLV2A5MEDZrGfVJuHBM4ENzTqgPFttWamX4e",
  "key5": "3ivmFT3cno16RxPLjMmQjMT7UnSymydC8DKz2BAZ5z9aFdHjc6h8gvJ8hvXy5iKi4J3BoPRo5FXgh9qxuEbmQ1Fb",
  "key6": "66dz4G9nnvgKqnGUwViiUFzBP1qQne8cT4r7LL2RuFHB3cVayjibJ8iQcRJJXetSS9carrbETWNbNhjZBNXo95ZN",
  "key7": "2zAxKiEmZxCnDE2DvbRhWgjQsZajpYwVSAVprGqvJpRJsVG5jb9opyub4hq2crYhEmx7RrtJ5iNCCioSefN6nyhK",
  "key8": "iq61uBddASDEeJwMSEtErG9JTyhFT2rCoHFyDBq23b5gA4dwGjhryJjLZMXPfEZSVqKCxQWmkmGd1fuQznNTAHM",
  "key9": "3UtU548YP4TZbR32rRzmxfeXEwMd8WAP7a5M1Wbz8VvtViMxMYpydWN4CQKmpd3eXcSYrNQ5ZCZS7aTWkMmBzD3p",
  "key10": "4sde4Eo7UJAWGcGBHTKeiWPHNvHqNAmzXE594eb4BmuJdGLWKtFQoLvfsYuwuZKPT4tjfREPCxkjy92jgaCWT7rT",
  "key11": "5insHgT34BAMkVE6tcR1oWwEdTxRqXnm7TJh6K998bAjsKs6bgNsvjf9EJ1WpVuY6rartzkjQJJPZienbBCRHiDF",
  "key12": "4WLtmWrkDvzk3Nif2y7eVb2k3XtVz6iSeeZgP18AHpkATbdXAG8Z844wYcXXZsGhuHWnCeZpjPVsZv5WEE3uTuda",
  "key13": "5rwRESK5V8g8gPUqNwkWK5zaiWRk8rQ5CTo1EhAUbWaqdHkV68KmUAySFNw6S1x5sSaxiLtFH3DdDqq3G4gnULzH",
  "key14": "mcc9PNnD1MA1hsVh2eumMZ18okZa2WMbWeQnaWk7afgMVJ9GmarpSBXKCFZaPPa9nAmmGJaHT4aRbLy6PDVQ7ag",
  "key15": "2uqfadAiuDAPyf3oC8VbVnn9nwR1rAA8CGYS75fWVTHXHcqAAmVi8JRotiSjwc23Xrt6NTEyS9ua5bUMeXVr85M4",
  "key16": "4gjuGUbgi3bYTzAFxsUGQo9WLht7srTCkVUgKxkKuSY8BAVVQYQi4k2hrBZJsKqBgXEK1wAQekE9TaQghtnNrF7e",
  "key17": "xgPQ4G2cPU3LzV8vziP8WvULJzaihbcMJxJcmJi7GLDW7PjCZu2MwkMfsGTW5fSb5Pt9sztRpxBiDN3ucbYvHeW",
  "key18": "3mK5KiBESqQZdpRrRhEsHPuTtEXg6BLVn62abxv5GztwW6uLuE5hyfonV3JXpg9iZQMe886qVRNx631smoBQw9Pf",
  "key19": "2rPybhBCshUdWrCE1cQgEDzbX2tppXjTG7rAdhp1nXxkw55FVoxnYJvTLbtdFiHzHnQeA3C5jGpiQKZjzuU3DZmy",
  "key20": "2jJLuZwuFZpZzxJn8DC3sTkNMtrGwc1B2z7QcZrPuaD2zyJY3em9LCgevoDg89mkTYeujS8Qu8QGdCSgNcj11YPk",
  "key21": "3PPEGZGZf3PTAxrfuDFBqi72Cm9ijg4KoZKhZ6b6ywmqVjgziHgLxw33QD8eeNAVbxB4sbqB29Lix93ZuLcKPFTA",
  "key22": "2qJbFpuRw1ZbdX6pYyr2ZB41oUi9E8iavtMnXs5JvHZrTbFU1zpQLVbbG8EqQGbaAuhozx6nipyZXKZWjtbx2spR",
  "key23": "2YU8DRW3WhcJqVHeA1gQb2YwyspwSPeuULH3YGcEhhH3PyLtsqJBpTaYbZeD2zx4HS6jGa2f9VwFR6ZpJRs56Yet",
  "key24": "24WRAhjRsq5rQhwexzFCUZ9Exsk84iXhmrnZHmfXUmH21SAR3TijpBdiK4Xetm3GqDeyvKmHdG7TL6G3hUWeS9ED",
  "key25": "dvFsWpL31h6x9rLn1LPxLKQSRr44ZYiTL5Njhj4SiUQN56hWqo8PSKZvvsyBUUHd3cEHdmNWdVKNs3uTs5bYdwh",
  "key26": "3yc1trkrx5NG9SHirm4DCTxjM64FHgQ7hKNPvihrYpJ4WatHmtPT4SN8qSdjPgMRrQQzVDZEvq8dz45VVijjo1Bt",
  "key27": "5gNN6GJYWrWW7NePqzoW8rhdnqRNATQxTXdaSY4vZa7LzUVscopaz5KFr5HnFnY56GEPn8zq7nZzDACLU9rpQMvQ",
  "key28": "3sd8nSkPqnYETMZ8gevF2dKnv7hibhHr8suimtGeWixtvLVYmtAa478nP8udrAvkWNoQinsRMqQ1Rx5LyQ9N6Swb",
  "key29": "4FRAGpsr5gZ7PMQ6TpzkzrJNm5W2KDpsGJG27AktHa6aq7a85BMHEfpVYTjgdvH3wmHPSzQZPZjiWs6QGT4oSABF",
  "key30": "48JNXCteGNcBd7TpTyf6SybuNSRGo84V3v8wWhMraxYbM7eFbVQfP2WMerMdeY4cCk5Exnj8Fx6rRvsGu4fQ1zHW",
  "key31": "5WR2xhZZbym6nCrKc3d2YRBtZbiom3GjrBwHJBGwxRvxFQpwGjP2uGukQqRdo4Dn7iVy5wfKSQKTVar7VCZPajmr",
  "key32": "4LHbE3zac7sEUuvVqqQ65KgtAzEWYXDwBkLmwbkyVwXyiYyVZb6F14DaagpqdrzfXLbyxvhYSvG7qTMHj4ovuaaZ",
  "key33": "3WANs457gu93GhpKGNjzw3Z1YJqg5RtJ77HRjLXU6D72f31wFTKQ6a3D46KgYAw83sbHHo7hSWWV6WwYp7ephthT",
  "key34": "5dyv6jKEejEN3r5YLLjdDnjVJqcc7SGoVpcEmZJAvvbSoDA4CXe48QSLGjLSyYKWPhXs37zXB4iT8LTUxFFBgfPw",
  "key35": "ffrL6t4t5Aib36JaZPLLTKLNNGqRiNmk5viWyxoWp1j4cX7A35Ja5sWPyYcHUuXBAyX3s5zowmeFN26iZARh3gB",
  "key36": "3kmRe3GHKK5u7oqL1p5qCec7rCAiswJhPjZf6Dcuy54idnjKr8xAd5BuwW1a5XusCerPpXP4mAr4DDoRZ91qH3cA",
  "key37": "3tPXTsyqVJMxmagwoj7cGguegzLNxxP5Vr7c4vkCkqUiFzHFfsLMpCDMMKy2Ad6Kv8hbgJT2EFjTVJ3C9gs5anpo",
  "key38": "2wQcURTiBFvTnXMjPAzDeni6fuGwbKbLNmmqaFEhrSacEkopojdEtqvAuncP7uCkmHwjwdKnE2RtUVo9kF99cdGH",
  "key39": "4pst5ZMnb8r3iy6VJkHSoGPK9fLeBUYLxfQ2QRVSHQpwqDPVRdHXgYahtzLx6HrGKrZAZ7VgfjCSdY5s6HS7umox",
  "key40": "KxptbWmq2satqAAj3YFbZ5EBm9NFkxG7UYWDpQMw57f2NBcYhUMFi1kKnRb9TJRR26qd1bcc5nYrgd6YXvKfdPR",
  "key41": "2x7Ks8UphYvtEVdgb3rBFuCeG3PPv32gGK1DsmBftoe2CLBHp3TZaXHKyunQsS1VuH6Yaz5HB53doDg9FKnwKMCM",
  "key42": "4upbpt39AjoTYyJSKRkErzpcrq79Px1Jj7QTyhFPzLFVTZadBnoMncLNQaNpnSageKqhmFoUTS5R6pz4CYGBEhv",
  "key43": "2qmJJTPp85FtajREZvawbi6noyseJeqvi1RuPGihKSLN7qR1D21UqWWqo3Jitu9X7zo2YH8LTrQDyLSvJPj4KpDh",
  "key44": "3JD4CFDnRUZR9u7E99u9uk8Li9NphCKmw4nAZuE6iVEthb8xDe9d251Y27tt589Jf9Sf4nHYkXkTarsxrHoitB68",
  "key45": "54x6tmRuVFpzVrWvxSCA9iCbCA6LoR8szJzDhFpnkaWafpBxjHpgunCjp3hZMNB1zdRLGG49VwmTZtwmBs4uyTwQ",
  "key46": "3VCm4FTNPKxzuY3mzUrNLZKgLq8Y9DUsPe6s5NeFQHLcqDUbYHuMhxfs8mqjvsmmF8xeZU64Jn827p816u74Pq4y",
  "key47": "t9ELJ6vmeTRL5ungCjiasqDjcN1kupotuB7YwioYrKmhQiUdn2JwiCfN5whU39PUyFRoEEzgRBn6boEzE5gip3V"
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
