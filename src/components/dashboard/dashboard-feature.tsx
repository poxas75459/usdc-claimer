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
    "3GKbXc57KYnYiPGdbRWzSGvrnVvp7YfuDtJEzzD7rFcgJd8n7duivbjZdqihHGvS3LkRaLfGd7n7xYpViqTeh4kE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iEzKuZYcLmmzTCxjvHUhNTzJ1Ti5LmsKdjffVi3LFsPFyGMQzsG1kQ538krtxbCTZEqattH6pzGnyrAZSv2mVki",
  "key1": "2s24Cj8skwUFUW1UC7vzuPR9bBCcfYcwddhM6QLP7a8bjJjHMLC7uQxYdM4mCP22oC6ejunLHrVjDAViQXgKHJv6",
  "key2": "5p3V24sjJyzbAt4Qi12aLdx4H2EPHyZWMQhfbR9TfmXCEWU8cG5TzyzFqLJ5jNsqLdxSvVxPLgSCVnME75KnVYmG",
  "key3": "3PUJDwwCqndcJ4ggDWm5ywrUWumacTXPvTRYsH1VzNyjUQ6VEPCoEE5EavQkhxWciMRgWqmsorPoxZRmG4s49vL2",
  "key4": "56uHmwTwLKN6k9LGzMBBsxjdn6qudoHvRmyL1CinrGWhpod5njwnv1WQDMU6tnMwg1396HZCFzNzEKPF6Ygzs4rq",
  "key5": "2GdtfozR9pFDanrpg5pkUsJJgAZNYfnKGdCuVtjaQSnV9QrSZCEdAPsojnMcNfsUBYpwR7g7kDybZhoD81c12cT7",
  "key6": "39YSzwBj8EDMmgZHBicqfm7Fbg8C4sp6crUgJqAqyYgHHKgmqfLTGE1NWbH4Pi1oKQpG7yBBC98xnRjLK8fucY8C",
  "key7": "DkEKeap2MVgSSNyfsKryy7ksGs9RBeDKsNpU99YTijL9XYj8eUcZQco46NxkvWi5Nw24GMTu2S3ZqNt18hPfEBz",
  "key8": "3aaVW1dUemv117pu7x58nMqqhaPTK9Nk5TWYLPgpqSaF55VM3EmJMoximHvipvh9myfyAd6roYhgFon5YTKJ3vjX",
  "key9": "kTMRNJY34cWJjYgFNVxTnA9CvmX5qfTWDm3wJyVFnM16R9QzvT3tnYjyDRYz5RB9ETQTD9Zzy9Tnqc2Kb5TRyCd",
  "key10": "3ZKpQgpSQWQvHBxbbUnDTHv58tWV1xZgraYTsFu8e1Jay137rdZyVqWLfca4etGnCh31PMrCFinqKQxhcV51T7T3",
  "key11": "5Cxz8WcFqvyiMWsqyq7XqjwaUKyxydZwCh7cq9TNvWw7F5YC7XmKkCReJD4d2oBCGb3B6qBvq1jV8a7GfyH4w3iB",
  "key12": "4Cgbz1E44VQuh9piv18WrpDUZhVs9WPA7DyzVqsGZWGtUj1QtrzzYJ313AUfcFp8RaNFDALd6gUyVD7YcQi16qCE",
  "key13": "5myMcpfHPFgr73CMTEjr8YRwPJSzp8TwzbBFSdCoaWSW45MoQdud4mFwNhnZYpLR1B1x7wjQuqqs4cjad11hyZS3",
  "key14": "4pC3ZUoEmMvgW2b8sT1JNdzE9HpZRXkMUxKntiaeoV235jqqpJkmDzqFwrBGx1U7uqHLt8VJZrzz9KJFxkJsQwbX",
  "key15": "4RQXnN2ZXA85pCuHQ5xSAfCcfnyKQb6myxCSdkriAhk3wMwXMF1KDirZW36s3CNQ7Xe2uPAircXXJUkx45ccn2zv",
  "key16": "3JaEBRXNee7hkCJsnwPFWUXn9EQ7ubV7wypJNFfzZPD3gmAFNXY6bRQM6eyDiuuku3XqEnSrSjL79z2yv6Fqo7yk",
  "key17": "2HXaJS2KpM6TSs9DZ5rutFNjfkiWKSS35tkQU9PbGtz7hyxtbx9VFqGgYu2d8cgcXAp7ty2YZAzdpKiPDJiaV9ue",
  "key18": "22SqUtVucQHMSXhP9E7tNKofqfPZP3EbeZ1f63uZkeHXZqAwRhTsaqBUTX7hPug8pnqUvB2pfm5gZ7Jw5ehF6kfd",
  "key19": "4oFbeJYQsdwjNMGBtp9PY9g9h691QA93R6BEnGd5khbivte6RvJ2syQ5E9T526s8NdBJRsCuYQfFfVoSWZpnmFo4",
  "key20": "5khzbAbf2NByxDnk4USdVA4GewTDTjBFqCABNcM1VVPH16g2PuMVD94bWaCLDvxfS9XSVca9yhnhpQ4fuyaMsQb1",
  "key21": "3sRgTB46bHMxHWyH1kykCyHmAatp1QSqJuPabetsBdn7wgJU9GZfURf5jKu6rM4bJE9djYf9RUa8n1yYXNxdvzGy",
  "key22": "4XLiGCpMR5VejnWTw2MHk7JcsaqHMD3mRa7Pm82Svi1GCjpn8ZtA11MzUUbzp64v6Un6yp7YsvdriBvKRzNwQhYe",
  "key23": "5xEHq4dosLfB1F6UbJ2PqpohUtoGzkQcPcAigwesobHcp12NktyQeqEcnNm3QbAwRSBfAv5Cq38Qcc6BJfiXB7am",
  "key24": "4ZDWUAeVLmVEWf44vmUFZxUCF2dSGsKB4TQowo5GAhQ6Bien1P88GpiNnZL96oCRTaSPuR4SdSmNCRgtEUpJDocB",
  "key25": "4MmMxiE3QYepgBXVHSFUThdch2wGsTuPWvKxbm2NwjUyJ8QFhYvurKsz3GNMQdA8MjY9dWBLHNPPC7SKHfmRq8KS",
  "key26": "4kkXqPam1q9S62awBNjYFCJhUgs9Q727214YtzF53vvpTH5iknYzr2H5izmAePXAPXFmXtTRfQbmzBWL2Cybz6ZG",
  "key27": "3k7WTbrFGJgwCFE7mP6z3PVWoGoGvpX8pWPUCuzK7q4oWjMB9HB4o9F9Norhp983XooYvt13jby1BjBvM1CerFia",
  "key28": "5VpKxAuevVHCPJCMqeVswU65ZgQeHkfKApQwg1zJDktgGBE9UEUghDXmUANq5EVx4P823KWAtL2KdNhUPTDug2Uw",
  "key29": "2yfDv22ZjZUpAuZ2wKZ6jjLvefhMuYrJb1SHMA5KwByo5CNxYXdgc3ZDMQh3mKbsNfR52cQ1ETMZ6yqYENgAA1N7",
  "key30": "4KnZDRRFbakHPj2SyvJVByrYyMP11Ue2qQwVyn1rsSh2ZNRFFso68y5E55BDuQpK6V7wQKLvXSa4gj41bdTJvtz",
  "key31": "p4sXhGbpByWLjWMjFVhxd3oLosQLiV8mAXj639RiehpAk1tm8evyH99L3L38Y2hAgq49eRmyGjFykV2yKxTAEyH",
  "key32": "58DkB4fC4XcGSGfrmbcuYdp9DiJUmXjREfLBRAM78VdwNMEq8VxsLUSS6GyQRcgJjWifth3JMLrk8m7PxhQsvcwA",
  "key33": "5J8wGZkbnq9UHvXPztmJGZW2AHigbrhxuc5qHvi6HgRC9aAgJCdtuxMggDircBbG6rxR6iHS5gE53B3aYGeuYMEv",
  "key34": "cNpdSzhVeRWLFBJG2SAjqP6vPwgRG2fuqD7tCqFRRiEy7dKAnxMmKxmhXPmjxiDYEaEnR2RP24gPYonyNATdd8t",
  "key35": "2SjkH2Uogajn93CVjAbk6iumCm48ygzxZACa6JY5ofVkUQWgmi2h3QcZdK2Cr9p8vNh42EmmU9or6oraxU7318nc",
  "key36": "2nzhMxwV162etqaDCZvAfACD6kCFyUJiQNdKh7vD8b7cJY1VKt6XpfgNihnaNdiQ8ucNX3Px27rzrUYDQ1df79Cf",
  "key37": "3FHCK2eFgrhwtjZ5QkbE93BVzYHZnjUBSM7WJwdtc1BWxmiddDyHvLC85N7KusdaMNmEstAXhJkHgYmjx54X6osr",
  "key38": "5y98GSEsi9V8NkniC6wLcUgfTaUjKj2JcmUEbWdfwfLX1VZBa71qzpoiqpZmxAmADHx24okQn2fwNnBFhRe9L7q2",
  "key39": "4QNPb2rsMxdqNx8nq7gpwmCckoMhLZnKKtNzccqmKPUGKzfS7zRk7QUfGUWTZ2jqQqQVHW692WH4Koaat1zaVoUv",
  "key40": "znnGZiZfwZn6PJGH5q4GFS21dQVTFyxga5HMBj2YKahsDAqZAyReZhdPGGxaEW9PkPwS5K6fC18auYGUUgSHguv",
  "key41": "5TEMFL8a6spVn8kUu5YWKXkg4WoBa911JJxLWgBEZs4HRQYYB7omtt3Qtt1wMyrZWFfAYeQhtzNhov3B1vqEn7mT",
  "key42": "47YgZ54g1drJbQTjetdZG82gwbwneLdKZ1PVUBRmDXt2wPYT2D656xy8BncCyATLHmUSzhCat2jPJ1Ea94acTxhi",
  "key43": "VKyuwGUcZ7XGKHBxPZtAYw5u7cRVuS87SqsWVocmm4K2hdLsBVzb4KgVmZ2oLWyvBjFgVbC53HcX8ic5eCaweGd",
  "key44": "3pdQwHcLpEJQ4fJ2M8vd6zgz1oFnRQ11KE9dBCMTR4ttvs1K3NQjmCXmmzvFUiCjW6zqz1rpGFo1eZNbdKVLCjqJ",
  "key45": "5X34oEHqSWMJchz4U4H1bNiijTDgWiVWeekfgjgxJM5WCvoCHAWuR5obQAPie1C2S9kpo7gPcgTrEAWmMpbKrusr"
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
