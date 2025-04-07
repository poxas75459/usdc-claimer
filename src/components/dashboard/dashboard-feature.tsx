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
    "3oxfb37qaNn5cjoXCULamtX44tZHQ3RF2zxMxyWvrTrbH7wZvK9EhJAyXHGdY8G5555joZqnmMka8Vh55VcH6Uaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vzkHk2ksRYbzjNxAYqFPGNm8gGMVyCwN6rNBNwUMYSWJbsxNLrU7EhCLuhYeGcbRH8Uhv8vhWWk8bA86Y57ete",
  "key1": "PLgjq2ziKC8JxrrMMJMo4ec2g2Jd2ouxas54unYTjSqqd3uxauE5sJ8WVZwSdo6GGjEaNfKVfhcLux8xHjn7gzz",
  "key2": "2Pm9XVPwBAo4VHRwoqqZAHKSRqWzrdeEBxivb77prPfMuU5bSt7L2kMPB4qkBW3WaMd1hS3D3eB2zYAsLNaa24UY",
  "key3": "2sgqscdHCvuEU3p3spEZUZo3Yax6UvwYkkgDsnW9VkNiV3nBntf6aH6x9KFAtrqEcuHMnmGfMivJc6VAVC8pwwP3",
  "key4": "4tP1tdFU4hFJG6bpJpvRFzaxa3cXVfjSkQrqJThtG9zVSZG7yeFQMJuCCqX2CKXQPYSKBG2TDxnXh6msd8gvz2Vh",
  "key5": "2AB9wRtmwx6ywMZKoXZatV6713C4uV9gxyRygeUyaxrnnJeYnHWwT8hY8fd9KqnGp1uVYSQW8BKRFTtHD17ZV4Hz",
  "key6": "4otWcVKNY73Y2zZm7Ez6ZTRxh4fX2Dabj215UMDFC4Hq6zvheu1pFPj7cNhofTp7w1ikgKkVKtYirQYUno6fqPPc",
  "key7": "2nTdz8b6cbySSaLdNNbw1ciy2ZsHFGgHd1jw7T216ziAyUmB7hoNBsWEGQ3SjdBNjzmSLtp49V2b7ooLHJCu7ods",
  "key8": "5PH8CjWMQRbHPLf23w55ZpxRgDSskV5mi5dAV8ujvPTWxVEf5dLBnJFULTVjxU2BDorUPG3nJLJJjLQVH4MDuScR",
  "key9": "395HJho9UoyDEd8kBfQQctE6j2v6UfS6w3DEcWGvGocA76TSHhQ63jSCfQ1LUKFJX4cGu2p76a3UmTjiEoL6J4HL",
  "key10": "4ovLEggzQba8LQva8mY5gBPN9miDhvQ1uttp3VTeWVD7BXd2erGxdbP4YqwmHouS6yZVfJqt3NG379E35GFEWn7d",
  "key11": "3AkdvgUzKWwnp937gxr4GzmGUMZG7hS5rhTEM3kqf2xJmwvDoFaBJmKnvhbbLxwYzYmmEZ7HdMXpBeoz7F61ty7D",
  "key12": "5YippjMzMTVCwvJvi5Ak4tThDuNg1K2erYgGDE85KphEwFAjG5a2NPKNL4e4XwACVrng9N3VhaczkmLPk7jZL8iY",
  "key13": "2Rht81cb5NjYEbkraYzREnXQsTrDkeE4t5w5YV8Qctopz423Z1jrYoEX8yynx3daZmRFZAqcAQL3bQGWbLWj1GLy",
  "key14": "4mJVNbexaZ6mgphW1zhyqfTG5nHQt3oYABh4dZ3fMvvqrBkHLY3bAWSoEh3QAKqMLaELDJ8Yr71rukA1VkKKagNp",
  "key15": "27N9BSBwkQQmhjEx9exRzqmV7TcfA2CffrVpKSqi3sx2CfsxwFtUrG75K3de5GwMq2PKnshhPbDL9ZUFnUJZVPRz",
  "key16": "T6myXwyD2qBiyoiE5S3n5jkpQpQMt6pt3Y7pf5eK4os5mzqzRSLhn4r6YJKQ98aVeSaoW2aqaSfQmFgMkfPivMn",
  "key17": "3sZhpuiq9mzNKv9LD9ke6mmj4XC2XpTkgXx8gAKwNWxX3RS4Lx6JzasGSgka1rjoBifXYVx95A7jx4YsXTSMXSEV",
  "key18": "5bB1qq5UEckrw77GZSJcQihWYWfdqhYN8TBsGMLSAvLrxnefAPmWjtQvzoMTyuMNRkA1Zb27ZQf4NRfXPCopUvdv",
  "key19": "2FF1yp3ibjsTXLEYHahEJK3GCF9Sq7YzscLjyMFv7bLeFf2nPG2fu3u3BBYZdPmxCTeBDPiFaMHf3szFmMXCGTMN",
  "key20": "3XAR1Tg5VdVnSeGfp3owwUjk3iYSXmr6zZVnRvgZEVWUbaTjafqqkm9Qn8L3w9bUu7BK6AP71TSf9U7QHFTtCF1n",
  "key21": "tBvNojcUQ79dgw75gDeuWi7TMqmYQLV6Dpjtyx9oDPziFYcuBhDFRq13WDRAiPxJfSAgpkD4WMZxwbmJNndGDaf",
  "key22": "3ES3QnSP633XoZi12RNyc2uENzdJD5KDj6z7tPogcPTdFJwAu6JAnnT2BKsmzBE61Cut3XAyy8YtPY7cgQRk8pH2",
  "key23": "3V9a6Vdsn4FN9aXs5g8M79mmLT7LdykDmKtP6CxR5ABnSbH6R83BFRZdgP7toVCBdVovYaSGvUQYbsHpjcZgZoq3",
  "key24": "66QJPSphj8KLoXQbsSw7ikNQvm6CB2LRPnzUz7ciD3R2k7YoURTDJYCbMsVWpHdGKThgb8oR5GPUZ282eTQXBNhx",
  "key25": "vHpEh1SY6aiWaDYfTXGqV2SseydH5m6hGDUkEQvdVgsH52F1CTpBvqqxp7mx4FVDtcWsHL38jQ3tSosbSZ2jvZ4",
  "key26": "raZmotWCZXyqBkVxHVTrtSXh8fWMhyrrKAnNnTgHbM8Sx93tmSvShg6F695VsDo6V6k9Ym1vH8v8B1ziaFYoi5w",
  "key27": "5cuWv5vRsn1PSicYYsqZA8Lw4ZbZYpQAiPBrnYHfqFDcTWyrf8jCVjZqKMf1yBRcxvT89SDP1nr6AhmNGK1FLivi",
  "key28": "5ckuC8qZ4NNpheLc18myXXRzB9VLqW5zUEt4LPTxsnw1DW7HBGoNbdZm1s6tKU18gYZo9n1tEe4YxrPFxDsdfUAd",
  "key29": "57QBMUg1uQJoJqyQUM1XnUz3qtjtADLJJhavqG2S43LLnGsL2gUV5tomAzobxXzF5nnGiHhw8vfiNh8YnzRpTXMJ",
  "key30": "2RAaZG5rz1goFQ3M36TTqvEC8H6Hb5yWK6ujou2bQncaTcrh35JUWdeVSSANFEr68i7cesMCf5wcxt3tSWQcPWbt",
  "key31": "2BYr6CEyjvfbUqH4WtJbN5sLiMrx8rYNjxj7pW4FicR1y38r4Vpm98TQoBpcxECwTFb5VU1Edn93fF3rwAGQ6anB",
  "key32": "oTswBC24eoQpkcouTVvHQZsJLhR14qBXvaP1YwWb183nbeZJH8sm5D4A8j78M7rtE3xnYtqBPmwbsvPC8TyyQke",
  "key33": "5sLvkR9Tvx9oZkjTBkBFsK5fdPtQReVaGdNB4hpS8jWTVTyZio3AETvchtBjUY9B7UJMHDGiQpx1gw4kA6BYbKyK",
  "key34": "bxUnd7cCQ4JwBJ49mFpJMnuosasa46KdGh1UkPxLWi6Fewi8njLJmYi7uKMG2YuScoR2i7iaQA7GUQK4dTTZWd3",
  "key35": "34PqCiFRJfFzHEZYVb4CHmRBWKeTDRRg5S2jBjvoBbFDDaU4YrfLnChCVDKAtvHXDxCqdVrUs5TmnrmfBAvn12zd",
  "key36": "5sVEsZoBLsqSdPjyo74Hp8a3EZkytgvQnneWwHLzhwAipDwQJ47GBhieQxfPuafCkrWeHr957Ydxau3WwozcrpUJ",
  "key37": "9eNpLtPZiDrdnmoQsE9M3qpMxnJNusauYksb3xz6CLt12zYDkC5obA4oqWXvB1J13LV8EidMApvxNcTJQd8LDAW",
  "key38": "XkajLktW8iP3dLgRbuFbx9kSesWiXSvv8JTcfDnoiysCL2EKfhGPTwdX8ovoqjUq1GC6GZJNpkVMt4iQoiJhH1F",
  "key39": "5qRTf5Dg3D5vmrCnV1hMKqQ5z5DCPzSCNsePjHce3vGGQdkP4KhfPDyyAa5gPSQ2CyDhBiJ2ZeBZ5MmYj4i8JLpu",
  "key40": "5uPf376Hy1QjHc8nbSpRmtdFqhxCZBcmBdcCjvNMqYY5cykGrZRwXXWYgG95BRyRZNsttf8VzFHMuQsiudkdUjXo",
  "key41": "37Dj3pNL9SN4W2mNFK6SsBKMoMAkfKoUQvuRFVPycT1a2gGdQfEPxQ5ViD5vtMtD6pzPfsyDJxfA3Gfheis2YjmE",
  "key42": "2gepmMN9o8zS1EemSpaw43HNW1M3exodufTJW1qta1pzLi8NRnhy7YVQ6Wba6Xdi7uF5hx6LeK5idVZ9xn3L676z"
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
