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
    "28kYW9sibEDGoxyndJyoWwizcPasdUGi8qSFpzJZMmJ8zj6wwV92B7Tazit5oJZMgk2KjxHuwjE5G4qWLVRjBrdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iFYohWzqSgV6Jg5G71pCQDzaKBMfThkFsRnShYGRmDGLY2dWWaYx8x2LdKvjSeH3G6a1LWZoK55wp74NCCJt5VZ",
  "key1": "5aZRDzFWnuMazvjAUgfUaourJQENHk2Au3QAyAb8uUEtaekiraJ54LFwkrGvPj5n3yzfneUyQiXe4ynzkkNhr2yX",
  "key2": "2a8au9rxTq9LC72Fww51evn4fjvHFED4VZhPHbASzo727DzUENTsMEhEgMNdAX7A7fXVeM2SXunUcCpeVVVgQbmu",
  "key3": "aHzV4HUzma66k9NhJwVvjZPCNNBSHffffJQnRZaoH8PPptiELq99SEcNnPpjRXc11DMtfPfXtjkg2jsMiVjW1Vq",
  "key4": "499DHWuGAjAi31Jy1Smna4bo7QwAHeySeWQguaYXvej1EPNeqKUCNJpN9Lqz2N567zBib4w5huzVyPuPhwTSm1vJ",
  "key5": "3R6YVYFnx5HeAYp6cLGqeo69XXDXqe3ZyokpAJ7wvwx1wFjnXPtN5Eyj1bpzWm9Ybnnhztw8nQPvQhT6EeN3eBWZ",
  "key6": "hedC2AW7kjTkk3o5woVBUYEFXn5CxpKTvpnejqQXFhPk9h5WQzbc3C4DQAHxttXnTJJusmzMHuog62vJN24Dc2j",
  "key7": "2PmJ1rEDYVDL8KKoC4wvu7Ub8gC8Xrd5A9X11FFtnkiGnrDhhtxC4p7hvwtJv5CqaTpxzrsWzNpVn21szkssgUVC",
  "key8": "5qm1Bjvb6gEu7mkrs2QnwViGLtq1gV3jzrcBYDgiKM92QrwMz3NPjhWbA4JLDvUDK78kUBUQoW9esvDpYXYLzkPj",
  "key9": "4Hnupe6psVhTBnSxrkqmU7WJ3WLFpskAq9gsvA35fRNActC5LRSuP4PqLq5dYamqcHVm9Vz96erbuqiQgPQTzAkY",
  "key10": "5SuTqRTGYvc7q8KbBw8QEshAtYs4JpSdYnxUUgE8caB48BokmETFk7urM9w57dm4CnpnZuKmFpLo5Kv4J75JfbZ6",
  "key11": "4AQZRWH3ZjNwhd3KwKqHTn7uEYG3fFeQE6QTfzq11E8CAawr4v9he6n1txqRiLB4iaZJcTLLeqfodMCTcCPAbJ1z",
  "key12": "5GQPkGtRA1JfzCJ6WjVfn7dsNyAoNWFf5aRoMaQ4zcjtkZwLGsJez8V6S2JsdAsM834rpLsArEy7vRUvJjfv7mDt",
  "key13": "2V3ZZEZPvrVE56HjJtJbfoCJdQYhv3AavMsZaZ7D77tLk4eW3Pyyj4k5e3ucd192F9qM29Hx4KS2SuFZajJiz8nW",
  "key14": "53kJkMy1vrrdmefmDuFRD5HGzCUft8oU8x38y1GDtz4o8zsgEJgirqQv3fR6s2vXBacXASyGztSqLTbnoNVbsB5h",
  "key15": "4wmVBsMDXirsFmpbwX26VT9heLwVLBpHYMtfbcLHGg4uH4WfJpTXpEiuJ8uqb4YSrZ2UAuXgTTLGtwHf3AVgD7om",
  "key16": "wGcM7HkN7DuKh1ui5HesTc9fvwQSR3Zzt8gdRKkWJUL2Ry8hVtzAD2YA6FoJcN8PtCJNUsEo1vHVQVy1kPbmMEf",
  "key17": "2fjy8i6sDAhSQgxzcjRxxsuzb5aAcEJq3uaA17cg8kp89w5uKrjqTvFY6VJMKypnenmbwGykjRJqPQgn4WTsoibC",
  "key18": "52D5UAgwCSxuqjPDN7gZXbfBHanHhnv2hZR4bNdGWU16WY7wbvrTKE8hVX7vfK8pSu5uPuCPoFymwVmpdufoDBo6",
  "key19": "47TNBQ9F8p4A7w6tZd5BYPw62upTR4TNKcfmFNTpsbwEq9pnhNg6qV36ojkKeJM44E4hDeiPHAnC9Sea9Nq84Xmz",
  "key20": "4hvx6NVvN3Y2N49ghJJ2xbpezq9cxAnFNVd3hrWza2QQLH8oupK7nsKtqX51KfZ338GUgzbZr53nWu9kSGGG5h7L",
  "key21": "2uNN176sbVhB7CXrd8ndLSMGgU85PfxxHoM861AUTiDSiYHZS85Nn5RkkqKDWxsHxdoPooW3T2RoY4aZmxiy9kd2",
  "key22": "2Ud3qLy2AYyJLEW1MSWhLqLM8bfGWLnSKgoiRxSySfCZryTohzgXjLb1U5NbSrZQ5MKBEZnA67RRm99yCMUWi89",
  "key23": "2hoFGspgut9qVZSJo3WjoinV8cRV6mkbqW4Xydi5NnjdsnBV2djWpkRDGDtsxmLirMANQE9SY4DqrJCiqQELEUzi",
  "key24": "2d9DTZScq1RNsDCpng4DzzaAxQwYP9tojdv3rRzA2QtgdjvqczRQo8RnyxYu1o2iEjzJuYxb5jpnNktp8oLfSJHD",
  "key25": "3HKsizp7vmi9UFJLK2ipUkApqDYmAifwRkCT5ANFcjuSo4Z1FfhPnpqe5j2wJcAZ1NKLqP4KZNzP43MF5VUTPtZv",
  "key26": "4xNmJhrBtJ6pi5Epf9eiCmRCcudVMrJkZo9B2U1onxkYNrbNPp9btY6kKvjDrtJxpW1W1dThuGt15265EN9ZZ62L",
  "key27": "3Ff9DQtd6n8aAD19ngmJWXYobZfQv5n2ysa7RMEbn9Qt3zn6WJ7Um4FFnG4KxZ79chkckdeimZYnMnA3u4rri5yf",
  "key28": "3cEHQRA8Y7wXWk4MBxA2329t2TGBg5iNaCyrg327ctWN4s3r91n8kYnSgs5SzQvUfw3SDTE4jA9zFTaKNUVorB5g",
  "key29": "uK2Q1YjwU6A9vbKs28t6tVDPWJndNHdcpKzfHwNkuRrS8fKUWJNVEk3tSZuwHzwBoxpFwUh2xRatCFbv1ghefJs",
  "key30": "V5wY8dDYdAKbtbV8gRhEEtBvDUkyNvG9jSu78EgEwKT9ixQcGrkiw1Pc9FkMsx5EbGdmRpJxDBisbEfJiinCZJa",
  "key31": "4icR2ZFFL2H9JVu8WcdcR8We2k8eeygutJzHd31THPSiDTgJYux44V9oeGUMk4ZLHJHm36efWk3M8c3MpCSyojU",
  "key32": "7KDsp7uRxynjS5ZdKfZTsZB7D4dUpir7BUtNQjdyWsfgzbjPCobsiwoy1Zph4JKopfnMk7ZKj9yFNE4FpTeKinn",
  "key33": "2kc3fWVxtcK5mmMVBEDWCwCA4e7WcgcLV7bsvFJrzf4b8SkQAaoXHa2BXhzaA9TAvig5nc3TLn5n3UF33VSnCm7F",
  "key34": "4KipzoFvB3YbUPHPExpuk84U7qzdMg9UkYziVzzUYMLeJcro8K8TytJHzwwfzo3hbAv3pweTccyej5RpGcq5ac5R",
  "key35": "2AQdDunavHGGca9QbrnqwEi79DyFMwmZ2Ks35zF8PBNaY4CER3TXHtQHxNt6tKZ9e1CQrtxocnKFUnajqtkxnP7R",
  "key36": "2RmmCEuK4KtvBxcgHjwzxrTPi6E8zhtbk8kJC2qS1qoGrzh7F4noBrmE9mWCGrdsf75Xk8u16fHjywQBEvkqeVFY",
  "key37": "v1zGCVRYfn7w928muZNQkJucTuEAJAcC3Z2bwj1H3GynuVNVWf7bzoq4zamUGCijAbm5rbUb3sTgUnUKJyV98bg",
  "key38": "4HQnW7W5GGnMFMR68WxKSHswvjUsH7B4SL1c4VwKizFKcMKkh9wucmzTFBFArEDyuLjDcJRFbTV4mi52cPgjSYEJ",
  "key39": "3bYS4L6NmfHUeDniTgi9vtYRReWghHs87xwAMfnHou4swiYcKAJz3RaP5BduWKKRzx2ymsqJ5EiUL7jgMnZ2KMoz"
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
