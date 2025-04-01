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
    "2heYvaxwMEXTRLSXYra4ZQ3EXY9EUgYFP3Bh5U7xvnQd7A1gzVD9jPbAmJB3JQuAMTrA7cwpq1t41YH95ysVQ3Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEig8iCw7U51karwsuSFpfAGHGuvofEaEvViHPneeLYEZQNh91SzcdVFmgo79AbhkMeAF2d8dc8VZNGWsBSnRj5",
  "key1": "BFPc7DVAPtiLT5NS6g2FYQXzXumcNEYfZuAQXkTm5nySRgwpunUTSZCsuNXCxXuQ9bfwgYSimwJWzoKQSgJVoep",
  "key2": "5ue8ppZfRJbFhwVfpRGCFL5DCDPpNpjS5mCcUSXvYQMckrHa3UaL4JWW9x1PgGvPVHbSoQkeQKbwTbqVJb3hpwrp",
  "key3": "4uh4jnD6vRgWktPnkua2YDKcXDAwY7JJBXDS9qZ43oswvwsyPD7uSoo1gJ3AMWDmy4Fr1sGn4RCZxtTfL9vBPeVe",
  "key4": "2qKqoxuEUqm3HZHUMeB9oHujCmRqJ1XMUuD4nZfRT2p6XqDYEJguharX7mu3XcSv9Uti5MzjdFHU232WqXgoZq4R",
  "key5": "4HveZ4tNtJn9eGAuLmdk2zhXKcxmLupyUv7nZQtjgLqwk8uRqE9auKCohw8F7yJ9bcGNY6Zj4BZzczCmSefFiEqt",
  "key6": "3hL55e2a2EPkJaKLgRBsBkEwQqdTmKavR5v3nMqwbiH6YvJXomz2GPV3gZvo4nsNQcJCBFXuP7cR7ezM88e8h2ne",
  "key7": "2tw18MaDwPg8TGNbLAVx4DSZSyyvxpzoFQUHEy3jbwezc86uTW5Az32bpKEs5cYYsbnPp1XPN1LmpvEXhwnZMg6s",
  "key8": "45vp7PFYBtJcKN3f9gGPBPw1PqbyV1x9wjuH5hEpWNH8uaT6rtywjVotCQAKwMeVTqZJ8oH3enxn3PypdhVrKxJm",
  "key9": "5N6CjgpGi9REdpbt7doM3Dk31qtiuAXm2ygeWVd2QVQ3Rza9a3PrxqL1nVfs8bE6is8tEAEcNfS6AU13522iunqA",
  "key10": "4QgLUZuX73woVKUaa7dPXzpJraGoVna1t835EUajreiqGjoUX2C2UUeg4rRCb5mcAVN37mQwMKMJj7Cgp5awjjSB",
  "key11": "4G6VVXaaxjLXkhECH88ACqQKRJU7mByxoQP2oFedGnzWXuZ2kYDdaQRgLgc53iRNjJ9acmcgSWS8eeeoAAiV9ZDs",
  "key12": "27ujNQrNxuXaH3skJAvRWPM4BTMrK9uLutQHJ7Z3K2uD7kK3c5xfN9G4QginErEGb2tZWCSoSan1vFKHtuNW4L9Y",
  "key13": "3xheQ7QTqsN8Gmq4Z3kR48GFcmbY1zDBeC4WfdGtFc9rUB4dZhmuQNaDtxqHZc5YF3tBQEWfdHxGzT5AQcKRbDdC",
  "key14": "2sreCHDmdTc6i1vEwqcTZg4Eq5gSJYAUX6pLJ2we61Kw8Rj9ypu9im6ahDVAkWkEHpsncazEThjNa8rw7iAB9k4p",
  "key15": "4dzU7eiu9GZWoQNiFwUpEBeM3YyzugjWYvnYHA5LnTAu1Zh1n8qvYhApjMqoPQ7b5gHg9QNRgZmLMNRxNFeX9zTc",
  "key16": "a5CNCRUbMAwKvng9AX4yd1weNJAzDEdDUrN4GoiuMqiVocsm3YG2h4ovfCySD5f8UHt2wP133bVeoDC12iVed2R",
  "key17": "4jdSeWwQTRY28AGaoiJwvjpXS4uwBjMwxFUpAWtNb8HLkkC8nYirDKaACiFnhb9BzqBxuoeSaGM8YgwS2xw15oLE",
  "key18": "2Q9YiPir5u9TC5q8jb8wUsVV7fyCjuJPszE3vGDrZtAsZSeMebRGZ1cp3vnyHsBYcUGqBQWzEr28Picc86q2G6HT",
  "key19": "C3qXnWq1WBXqx9M55mJuwd27eiNMWEHFGKoXc5USTUDKpwfZcjWMLZtrzvpm1hUtpbS5urc4E1fymwqj7QJhdxM",
  "key20": "4eKcLYK7a7vhbteanSXjrZ49P7c5HD33qERdtdBwr9Bf3EMeva6p7DbjDafLdxJb4PdxfLPm88GBtFWaVJSeLQPe",
  "key21": "2sS6uhNZS2ZyGCLGsRQA991W3Z5Dx1fqM6YinN5Y3nphJW2bnZ2M3VP1UYEQfiLGVfuPpyT8q46rYjkLHGDskqL9",
  "key22": "5A2qamZwi41QaaTS9cvmwcr7FKZ8F5wzfaWFowx9rHWAehGxAQd2wkLMx7bLQrtCCszY4bVFgbtmxymD6t6avzSL",
  "key23": "4gDrPnfPfumjwngpRCKDqiKyshEdqVnzqH6jEzyFAFocxhsPmohPiCruuJYRvrWXmHZftHHsgLDQgE5TbL5CWfdJ",
  "key24": "2CEz8LXySizPBy2NYhB5hUG7nnHE6c2PTtQWpkwLBqU7djRro8jsNkT2N6f2c7Q4obhDekrbxXw2hrWtsiLB5qNm",
  "key25": "42vb84ZdYM9rhQ4916VgWB1L1izHgJPHcizx58CQhCdFkzfFrP6A3d1RyV2ckNFcEus5wC4jBBGaqMTJ3CFdtfRZ",
  "key26": "4Ks351L4f49E3qpXKzsg11UPhiEJdigNtK8bPhrLLGNnB9bVKYzMhht8sfgAXG1aakpvnZRN39RsMc4aBuPSsoka",
  "key27": "3KY4HaFZwaeDh4FBH2gNbsnwf9WK8bEXmxuXg4bPtK5g3dQBhYmMso1ZoHAUYEsZLEyLopU6rb9pwntMRgbj78ge",
  "key28": "5Etw1L9t1w7bosoCUfwReZDr3TBdGEqoVinHSTgxwCktAqzfqJmFvrb8ZFMJeDuJLkSsywhoZ1t7TdQmMWjUEbeT",
  "key29": "ZJMpiEAPBGPqDPm5pP3zknZcBykgPntxuHKwjviEe1rR7cfvgHGzEfikReGdh6wCJTf1oERs13LTwQJKUKBX3At",
  "key30": "4TqHJH3hHgsYcLFoTDiyx1p1oWF3NajPZZVUfKftvS3bZSDJGR6Uwn8qSuUwzEpeUwLZcsv19sP28MofKMuV5Fr9",
  "key31": "3bjqr3vJFfqe1pUgi8UCyhEVHJUCsQbCYeJNJL4geDvHBsNQ2X1Z1HuJ1dW5jMeJgnTrJMrf8w3eCVXuMZaW7wEX",
  "key32": "3Xd23ecaoQUA5RD8KUGesWW8UXYn5ed5UGU2vwF1tzxH4uw2KURXsQB64pRDCZro5zDkynJeumPVa36qtomKLpMr",
  "key33": "2qjRhMpDVHZPv4rAbfBSmWK66MYADhc4FaXYQeYcycae6qj8AjbMc9jdmUsJJm7EU5QHUXeZBZ7XNJsVfQfTrn5G",
  "key34": "3KNefnMSP1RFsvBT9fybkHeFrbJSAD2aV8d74bX1iPz1xb3ykDZFUTkCyxXQUV3mNEG9ZmJsjuwRgt5KpCVjmeyN",
  "key35": "3noxyCAxvu22a6pPKa1bcU7gzzi9No9ULnwVu1HvtDvYCVxosVDA6YUxdH6u9vHS7pn7BiGH1DSSYwdHtJqGYboZ",
  "key36": "4d2KnFW25aRDyUH4Z285J4ybi61pMzJY552QwLhJWQDQzBcc6RyBVcA72XaYaBvtWKcSx8oYap3BxdG6kQ1zUkmT",
  "key37": "2enLyPztQy5oPyDmFS3Wz6KbMrvdKGpRAvbt7ic1WadJXUYvNiFHpcncdawxr6ZERW29KgKJRrmFCbRyRBjbXW6F",
  "key38": "4UmZoPjRnCc1LYqwj4Ys3DhGcZxV8Jtr11dC5vMVb9KwLD932kCsWtWJJsDGHo56xQyVCYnVACnEed1MTkX8hLgT",
  "key39": "2Aow5HT2QsvMDeq5G3ThsizH5k2dnpaq2Y1Q1RXA5hjudLEjGhTfsbQbw2u1q4W7sS4vKFTNygejKZBCqh5DFF9z",
  "key40": "SPyrFc7XfRwN6RLDRSsjtgScdZ4743D9eDvw3mWbBTEa5Qxgi5FFeRd1wPSsZ7mYuhXJiwNHCaZBu7n93WnmqfV",
  "key41": "2W9KuvD5TFuDYs7PjV3zRHEVB3P7CL6DRyJN9A6ymZAXZGcb59LBHRRCLzFrZqaA5oE744VxEdirzH8PqkHYSdKv",
  "key42": "29pDENgpogiiHEEEWyV1yP6PHxgzYGL1htyTJ5YKBPTT97KyLHACsNGPqDbqJcGxftmmnggJgiQXVyAwQaNk6sqz",
  "key43": "55hYo7iyDcP49H3wVkv1VaRDw4FjyYYbXPTnSwqM5hSf8tJWCPDYcyPamj8YtTz653X1nsW9ktSiDTYA9vydZsQh",
  "key44": "2n7v7smHrWaQBe61QMVwTkrkfNwCiUjZQtBugdtu3HBPeZC1TwMzvf56UkKs99NJA481NgT8vRfEe9eiBrphUZCY",
  "key45": "5QL8LKdm8uHmorVpwTvMBNhNBnbdZGqxWLPbcvSVKFYoLVfanEvWGtrgkgVTpdUXfbJCNXgcwq3KrtZ2x6HBWx5E",
  "key46": "57W4Ja5xg4LiJVxXPUKixwTbTLygzJ2Q68VVweJYn2ArCMop4w4kuUYjsSfidu21o42iPvCFM8nnbU6ZP9GW7SjL",
  "key47": "4UWg8xJSn2xcsGiEjZEqwV3W8JQK7naJAMzkdyxe3WUP5HUfVPriMALUbp6kucDMysiK4asGCiDkpT6WSk4Wi8MU",
  "key48": "cEFaAjtb2A3BX6vXS7mqdwNSGdHobkZQY95LKK9zQvsmbZoiTGrK8iLwFVG9dmtvkNRnr1KovtgoUggEMGULeZT"
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
