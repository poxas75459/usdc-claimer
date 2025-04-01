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
    "5aMhHc8aQtQ6GzYHKAAx2QQ4cEh5M9wCoAYBBD8XPshyD1N79iwgXBowKM6rfQ9EweSG8mNseJTik9gMBaxAvVNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hb5553aTJJBRx1igmKzeeqRTcM2hSHStKybCk2doUKmDFBHf94Z1wASzVZEveQAnPDFMqDRatY9wsxHNwmsKwoj",
  "key1": "PM3e5gcT6wza987L9TWfdD4tfeqCpFKBAH33MFZXBkGWgm3SpApGapPF477g98yXy7p4ovf48hu1Uyaahn9cZj8",
  "key2": "459kGjjrvgivCLw5emYaYbRX1jm5UEG976SyjHdJ2LzBen2AeURRb3SFr6ZNGPGe7epYe8JaqTFwNSSxLmCkz3QB",
  "key3": "44JY8j4wj8ExhqvhC2honGqifJCw21bHDULT1s6CChQjPPCkcsPA22EQzHwLtSyL96jzSvVyUCsVx6GHfZYonCsg",
  "key4": "2VVhnLa646q7qA85XQFpWA5xeyCa9dqz2pKrGNQLz3HuqaEBGxvoiUY44HKN6TfTD9cscpzqcqMnTZirnFq5gfCW",
  "key5": "2Kw1TkZhTACr9LTLZSE4NsHM3SWpNS4PGT8ZPRLhhEFQzVatCe4K5QeeXjRVn3HY3g9CDsCPzCmoeMDT1Y5XJRL6",
  "key6": "4Vm8HFYQ46pB4m31YggU9UngQejwUBy3D2z2juy8D7SC9C9v9SAJwWRbzhcrz37oZpX3k11V51mEKonrLp8dT5ot",
  "key7": "2VjvFNbTVdBNcDApFarb5tqnERQkiXWEBr8ruDRRvUSWY9dnwaFUZR4dFQDHj32xfkS7Tv66rLZBBKSb2kc9aRsa",
  "key8": "2yB87yxTWP6q6s68fyN1AekgDRNxXYiMs6wGAtTcUEUtktDV96fCSbYob9nxSusJVVbg8M4MHKb1iksPx6GbmYTk",
  "key9": "56ZsnMshz7Q78mcAsb5rmNqwrM2VGSqNFJ84i79QWBmKXJrMvces6QQyWYYEY9szE5Zw685vbLJC55TH9G5DeWpp",
  "key10": "5Y7KG8Uwf6EqzRdybSBycnquQf8MRNRvcsf1vbWY68stWfqPHzbABZ7eSDmwqJFPsBSJkHrdJj9NFjT1eqeeL4b8",
  "key11": "2r88wcVug2msaNKQFzU3Uz6jEn8v1h2QpvzDUg2yL5oPLxDtoLzJHx9yxh1DvHGnUA71K9RFhdBkuBqDw3tU4jyh",
  "key12": "3pbawhUbyyP6Kk2mfgNpKKXp6Z8cDEm9PKkLesmu9HpGQ9rz9LbPMpx8DTMXj8k8FCMyqJWDqJb2Lf38SZeNJs8g",
  "key13": "4Xrw5W54ZZxxynx3F97SEMmFBfW6F9WZQtFo4gyAtwRaDiMU1d1DLSj2FpKW7EwxL114W545dUj78F8vGczgFBNx",
  "key14": "2Y79gUcFo5Ytqqx5RJaHtTzsEavTMA3HqAiBo7zGMXpryXoAoNDXwbp6Kaqo45QTAJckXXpTwnQiGmxfD4TDcWQd",
  "key15": "3rY12GvRhmjx7XCGTJ1mDBbXk4xeEkQD498KNUrxxe3H84h6CMTYuCo8YZVcSvjp5PggbGawF4pEPnGoNn9nrLoa",
  "key16": "4euQE5hctyZQT8qX4RKoEGGbSAgisf8uaTGZn7h1nP7fvjhD64ymKjkYcijmUDyJ7orQBwtErqWeSxxpS1cXj2qt",
  "key17": "5JWnWSYdoW1TYW2fvssBScZ459GwhBXEn2vHeRs45AWwWSVxSxj1bZc99GzJPV5DsoCQrupvGgXWBZaAehGY5HTD",
  "key18": "3NV4S2FFNbC5Ve4ysJU56KSEVFKejZUed9BCqTXtubvtBiFrw9A9yu98Rb3V773YoSsxnhf2ZxkubTZVXQQS39vS",
  "key19": "4qYCiJtqpUG9SvciyVbrvXRNewcF6QZdqvDDMifH9UDn3dvxBAsLuRLuswsEJrSJwjBhFkr58De6wk6n46CaeD5E",
  "key20": "3G3A8HTaqVYXkPaCzdswGs8JJcqixi2YKkX2kLKcewPC9KdkXDU2d3S43C6SoBZMxPptS88RqafWtY5dqX9131uL",
  "key21": "rE5tNz171bLnAuFN4gaUMs2nAh5PubqYEWpvbFgMP8cq49MGgt1r3pharyU1UhwrES2pPePMS1aQWewDtvrRUTq",
  "key22": "44BvodoX5oUwkvVq6rQyPf7ZFtPH5WVZqZ5wDosRyyLSuXfWbNdiheGeAasV2d3DHcNz3phxxRhYpVVfZDLBkkLU",
  "key23": "4crpYPaPYzHedN7ehs83ZpfxhZCWnD4RKJXG3BkoRA1Z2PostURRTf9xgnJdVzgrZeEUXJaMXBRRjJCUtLMnqpAF",
  "key24": "4gRuuFvUXS3buNLgG17LiewbLMxERZjn4VpcdKNEuNz6fShiAmWqZkFSyuaMQd3gZDXjNE7Z48iHqdx9fFHEhDuD",
  "key25": "3F7wkBSAfpPHHiq8E42YpQWdRp9kKEnFGpdXGJr5UsQDaP9FzUR81JSgxJnU6L42L8Rm5GVCZbcqJfHgiiYGGa7h",
  "key26": "3cLijGwmhP3soym96JzC5aH8YT1x7GzpcD8QbihJXW78FK5Rr3go5YHMT11y7HUHCGPuY1qkAKzXoTyPNshmRqjR",
  "key27": "2e77ADmdWzhFNbYa4jxMqXcpSmyM5VM39GiCSNuYK1cKfwWPmLVWwBAQQq5rMTDR1DTngzJoPZcotLaac2NBJwRr",
  "key28": "DRt5YWh5QM1FLtUcE9ewCDmVy2A8c6bL8XGSh8bh5RF12vvDiRunzUj7e8Ht5YEpHZ2AtbEZoSKGSiedfvq5A8u",
  "key29": "2xxvWufVkoaYvzPiUXaZaihcHf3H6dDmTYrDVe3cAACAkJdJr5HP2hVhVRw8hakG8znCKdjQSGE5eAJMMmXeiqZR",
  "key30": "4bdnuwJF3SxCYwMd9a7um6KcsELFW62WDRcFkNJBvWDoWTUz6HyQ14X5J6NhPjMdZwTCxyTQj2C6MjLAgdHCAhZq",
  "key31": "YSGDkt6f5ZMD1CLAgQXF7uuDzN9qvTkCJm4qKiFFx8ggSJkeKXBHeLey6RkojZW9rrNXUK4KbnhTFFQ93An19wL",
  "key32": "4KoGQgfFdYCattqK1osevzsfAMyGczTy8K9SrF3FMzhazAj5Jx8eQh8ypjYkY7LsmutRhqfmD9Ns8Ksj8gKJQ4Cd",
  "key33": "42kCXK9Liq2iX5rKfWuUai3s2kpfttGkDzvzuQi5P1TymeUD5kkiFYS7aU5v6gTT8tShxXi5amgYC9d2T9MzmoZJ",
  "key34": "2p3JpVxHLVSc51XwWy2ZoeYsFHndMbCkVg84xekuVwugJ3v7zf61jWaas7BETdREiuE2JMSBy38JAMXYoZXaXcV8",
  "key35": "jYtMckrHWRkuSkawD5CxdZ5faXkGKpYoNQtnSUhQnyLKo2csYeiDLXpSMrKGaRshcE5cpgcEx9cVLJiCwudvG5y",
  "key36": "4RcUfsTnZYR74sCFBk8HXzfx6k7aoecPj2gf32RcuPBGqnMmiJV7fo1DDeQ16GVczjEGv1BECtTEwCP4mp4MUCFx",
  "key37": "4TBCkLH6t2umq1GKtMaHqBDa5M5JrAps3aC9SpctenMBy9SjsttzuFbCnPeEbhj1FsKF211ycDb6oAsmpib6pxRy",
  "key38": "4M4cbRQ5GcrYpKZXM5nnV28rB7FYnzat7Pq8bAPdWyGp8WJakDDvhhYKwZ5i2rv2DNGwHWVfpYNVt5v2aYJDW3as",
  "key39": "343MwwRQTPDzshRntZ2YfKdCdJSQKevHg6fUipZ61Z5xkgHfJ45bCNES4apVdvGUCP4gaYfAipMxa1QChyjasRT9",
  "key40": "2mkgW5YKobuAY5KXav5gP5WDQ8hgasJmMTgnm98eNMkJLRhivv35hEExvow6YdvqaTEni4ouoPDJHB9iKB5wvNXL",
  "key41": "3dRiNgdsYwYhP7RCD11WZEBJBd1RK1ZFY6YdKj1u6SziJzDetqWkrtMZJjaesbtRfKKwcgNXKnfK7Scd2oAtGvMk",
  "key42": "5252fwfyAdidXZcQAtAdHk3SrwpSxTTcFag1aSdPyo1WUZMMG2y73umRtVfn1Nef8K4UxyrKnRoT74hTW4PbkiNb",
  "key43": "4fhvaXKUnjPhwKrAMxjRKgzeiujsHCUYN65B2ydMgGHaYe58KnQhUrhhwkR1na6bNKpTTApreSe84TB8tmDrTZpg",
  "key44": "ZjBopWBfpLJhQMXYhSRvtTL8CFJMHrJ7aCGxKdEmGrffotBT14e91JnapRA8wqabE4bdwJWr6shHiDDHyEhXYVa"
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
