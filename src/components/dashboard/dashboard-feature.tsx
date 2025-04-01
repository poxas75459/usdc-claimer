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
    "3rnJvPBDLn2PtBm5wwmrsKKZciGXXyw8j7rUMeEn8gEcZpAME9aXgZUUcmLavvMt2kpLXUsiJt7vRN4QY94bNUyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQf2JRkc3woUBZNgRzk9JXfkXMMm5KwH83JKquTtANndUNxUAutu92zDUA9es2waP1WErCbzNvmmW4V9uy4ZYUj",
  "key1": "5JKtdJDkbMoYJWKjcMvEitsQRGq6b7ZQD6QUerhYXpqGLHeL8H8wuL6sy3FxcoPiRrG3E2HkvCQsNEXHrwq1MyFk",
  "key2": "5Jr2d3jGUT1ygBto2uqNFyKt81omuYktNxcasbAMAkoMg1TnfaT5GUempLbM5oSZZYcuJ6aKxLatkWYpg9URX7Cr",
  "key3": "n2cTWf7C2fRZeSfSqpQTZEdBBMwwYW3M2Mkh5VePC6qsozj8jbnxTmojrEtCtcET2k9JSWgaLT2tjz5JBEuF1i2",
  "key4": "2JMboqsaZaU94FEBsWLhAkurrYAmV9BBUhfy6L1QZFYwtxpm4CkBwnUxcHVy5dV2v3amBxKtcdyuagVeUupaCvku",
  "key5": "4BJNJdAvstRp8BJ7sUmzq7MRQY75YCZJ5CGkmi5DkPmmcQHMwJ3xoZ2FsS2GZwfs9bPZNpuc8PTKid5nbGq3T2xw",
  "key6": "56go8tvQs1NiotfdFx4ooN8iHJaZdwzdmfKN3yYFgdvECwBY1B8LHuT91GtaTgTDK6DtcDWsU93CzsBMczsXMgaq",
  "key7": "5zyuo7PCThGPikA6DbFPR5zK91tC7FQvnMx2KzaNbnHepKK6WzrwvjwMw69RdBcjWKcZrvqfNcFF2peZk8NUJjfb",
  "key8": "2budTk4k1EHhGHufaeqW5fRE2ZiUCUSaZnHkrjE2TqkeyUtWFY5K7gA8yBG7KzKVWAmtGz911NEMDzXrquyfD68e",
  "key9": "4KzMo71v62xtcUoi5NLFLhPMEPDZykDPSB9qVbhRAgScXUj73gAXzeZrbeU4DrjKGFCyR5bDLSv4MPHMFh4jnhAM",
  "key10": "RBooiACTLaaG5VXqhL4tKCnVXLSgG2U35ZgakNp3v3TGUarvCST8bmeRRKj9tCd7gq3fEZzUuHwQPVJCwec5XP8",
  "key11": "1Hbc4jv8xMmWv1oK9rAYhmRn9FRAifodn6LhrhtBuVCJgArnG3oXMs2bzivxTZinzp8PkCx4MqwfVAiasJAKjYp",
  "key12": "4HCT9CmLU3FEyDuNiVFpYizCoXgVySFj45tvhhpxN1Yc8p66KfqXotqmH3uSXSQccntoHyHwp4MrQqAK18zuMAPw",
  "key13": "paPDS2wHrrL4Xcid5WC31a5WTh6jPd2JTC2UAsYHm5gWbXzWMahK76NMm3fAqDJ2tzwNapuYeXQ5Y7fGkvDiVUH",
  "key14": "4UU7bfdQu8YLPtxFCDWuPhHjkZqjr3PJnfRFYBBrDW9X38VBiA7iGPwtKu7GvxhgUAxY3KeXHH1dYs4c52WoU5iE",
  "key15": "2oV1VAYjzwBhmEhsjoCA36W5k1vB1xw6tEGCPLc8hpYhNu7SqV8aZeT6nqKuQJR8FczcnbdTC2gRD97D9wSjmsLJ",
  "key16": "UsaQs9gJbWFo2E74YJrcXwcabRZjwjMSv6WwUE1hbgfMzGNs91WzpNgkH8mzX86FqNNuWNEWfJTootbH7HbKYmC",
  "key17": "3PxEhVvXc8TG9EkVJVDfiRgkDDQhNDDERhDxZQTwocTrwD5Xb2J9QtfABkNEwvsRVFQJ1j3LG2emAb1SiMGb26FP",
  "key18": "4DyzKue8TPKuxnH8EtJbEgEt3afXxJAd7kaaaaBcfBJyfDH4ptvhnpq8EtuuKcxdJv35pMss6gAQ1pfdDV3DNQYK",
  "key19": "34oYb8Mm24F5AtdftUU9JhrLwz4VLAuc1ET6DNHS5S4Ys7MszPMa8y5XUyeL4nSibCnbfcHqeHgCGQQDeo976vR1",
  "key20": "3NMTYJQsMmUXNsH6mXNkbZh9G8gmEhbtJXssFXmXiMqWtfKHKqNGhL6jJ2KfgkcgaxioABCiBXTTWrwuUWDWqkqX",
  "key21": "4u8tiq1iwm9gJcJnRYjZC2Q8XWUhVNgyrhP4G9Vfzon3CcuSdTAJYKLGpo1RvdmJ7wRkFQxVoWWatndcQGCxtCdX",
  "key22": "4Lwa43Y3aeuncerBiest9BAW4TNoJZsxHHUr4DoQFA6MaR2ebPQPuZes3vEEWMNatJzAGrGb6LP174tgnzmsXhqj",
  "key23": "35f2Ey6sXVMDviAQZJ5amFrFFzg76WWKxJffzpG7QerJiwnCh5VKt63HA4yD7LGAjCANDCvicgnrNKh3k45S93nM",
  "key24": "2hXoVdzZuJndTsoDoUwxC4n55iw4m9duhdnZyib8XQZbQbPMnYmFG16fwhinU8rX6sgj3dS77bWyn4y5q5FioRTT",
  "key25": "wpPKn21bBARMwms24jZ8LjpDs623gm1tPpThsXxsiZ6TycGEdcEiCodokS78k1AT7ZCdEzQDCiGtFkU5LBg4nX2",
  "key26": "3mZeJye9Bhb5qkd9Tv1d6A4TtHEdq4atD67boqMnP4c8o777AF18gfLoCAYXceWMVrYeSZkjh5T5XxqfHcuP8AaL",
  "key27": "J8DHN47kPCikm3TnSnuGsvkozxFFdQUBMdXSH1LVi3tGgMabEF7DC3fZexLbVtxp5JBX6dVKp8RaVxzQXeeXShu",
  "key28": "4axsdZg9HdEGHY3tMv45vpm6m6sCysVjC7Wwn9yE7evRJKAXDmtRuSwvavjfwtptvi6EkkcXHyLu1pcPBn8X3Koi",
  "key29": "2ETpjMahrcX3xWu9FPcB7kHXn7beF66naXUTypxizeU7xghxt1LFUJiaeWfrCkHFLA3USqs4vJCd1zynvbvyHuw3",
  "key30": "5dFAi6yJSwnXYzTswRimKVZLVRGzmAfdWLJ7nK6Fy3D2hmv2nBqAwg5VDbDrSycxxkK5nxRZ48G8m6uM5yZGL6W8",
  "key31": "3g25wZtD6c4Nu4jm3bE7fcRhrbmtJxcZdWstghSLANBAPQ1wmg1rRvvSwaqqxZzgMUoHy8jaa55Jz3BKhpKp4FNn",
  "key32": "3F8NZt8JDWEFVAjdKKiZ11UkU4sYVyCWN95t14H9E6WDW6cYmKnFn1idjVWqs2a6Zk9ZoxHb21dra2sx4o6JCTAE",
  "key33": "5pPSFAqcyv7eZLWzsjrgfSNWFjPSv4p3TpLXAUQQ4UPs9XMGokQiHrRsiMoWTFrDYRw2pgKfcN44fFiC2GA8rb68",
  "key34": "2XYAoogd5aUbRgz5LUYbaRmWtJf6UJacVyt1ctsnwF5wHJB3ushGoLUQPGwxbW9YNM1p1q7Y4zEx4XQ62HYWK86x",
  "key35": "3h8epNUP2PXDHhh5sRMBquTYzhFfckW2kQbokWFdV5pt5inksACNMo5B5Zh4dwwJEusiRApdqkXd8U8XvqMUeaPY",
  "key36": "3DbXgFa29VJJWCtnjGVn4BJSkuycfn3EGawpa9j11Fn9kwi8yMHix4MmcRdm7Tx3MP5r5wRSABm7WxQe293q7Pid",
  "key37": "2Sh3LK7h1owZmszuuh2QZAcQW1F6bJSY1Tf1MPjbzXNCgf8MvBduRbesgYYWCdUeaC2Myu9rPJU7ZHak5a99VjKL",
  "key38": "2Ro39J1Ag1F64iZpCd7SkqnrnWkWTHoTqbm6H2BgxiZ688Xa2VzjqKTFnVVPJDWUFoLW9x97RtT7h7BhZTVWRTNh",
  "key39": "5GGNbTaLveE7BgGNMCUvTCxB1eBXoQuvrFXjonBnyEdZ4S677hCcaqYg3QNsMRerf5asBJRszPb1Nc8uos1Hiwn1",
  "key40": "K17mSANA1pQnWHfAUdadXvjyQuxTFwBzXWFTQ4q7a5u28XfzWVu8CP8rZJNUK3Y8HS9jVgMBVkBuwQSVmbkzj3y",
  "key41": "jqdPWLxSnwxH5hwqEVddLRFwm1TSUeE78QDvzSPQ3ZMhjycEjzcbg5fK5ABeFGY62gGTVJN4y2rmTiAHydpSEZk",
  "key42": "34t2FUXTrmZtxzmBY6eEaKk8p8EK6bW1RRLQvEtUjTo7GXsyB7DEwMkCbkF9pvAf89fFNRUKdCe3Tz3Uyj1HKXVa",
  "key43": "3xsQorV77VrCwF7mdDBreEF1DPMNiVH1asRgGN1yQLdYoL1TQFZwi2GT8Vmzxeu55yjRiAhQ77qcEqZy5qwzpsWi",
  "key44": "3j3vg1KYJYJAjFHdty6WdLSMrvmPagdwPTMSJa21uedWaLhhZZDqKgfT6DcnakJcejm7JFXUN1zVghmZe4UJwGZc",
  "key45": "3HGxhfkPR5hEyZfjAd4LQMeaCy6YYkmKzexZUHVfs1Bf2AWM3Gi3Mam6x2TMqvvjJJXbYXaBFCy8XfzbxpDmvXMt",
  "key46": "3NdJqNQi86NDYCmuCYNeFGceXP9DAd1Fz1nYShBeL1Ke9c4JPvphXMbMJyxEj3h7bn37nfjMGdWoN9Cf6B4LHEKg",
  "key47": "5BcBrzBh9ohtv6FLcyscyp37NZTj1YRQZZUqh3wZqhkCoMzjQrYxBg5Ey6a53k7RzdgsJCoLCQJ2QtPmAg7YuoC6"
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
