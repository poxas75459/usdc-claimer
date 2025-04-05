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
    "4CTYqhjVCv5naTmsN4TzwewvATsEogxMi4KPxhaqbqfzKSD5CyscxBdgwgvpp9ceRztbXxgY7gMJfXvA2aqQttUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nG6dczHhjjg4N1Yg781KyrXPJfXcvFm2RgyBUUdWBE5cC5ik9GkNtY6Dw8vd6hf16kP25qFhwKq22azKfXd8euA",
  "key1": "dyJD9gKq5dcHe9P16V2VUb6pcoAVqAfJbWPcGKkMdkxuP4N8XN3aCgbAfGnxSCoKEvgMyig8tbdU5mz4vhbKAn2",
  "key2": "4X9cTf6kZBNb9jfNwtfZn7joBaeYd5fn5GA6FZbzH5cxQ1b9YeFi1QaZFZjRXsa8THg8VuF1RvDck2LmE9mSdFiv",
  "key3": "4MYhBHYm4tsWa5EGLqAEmVFXGXqiz9oW7C9ky94A9NB5tWTummERdNhug5wTebSApCna1zhwyYV8uXk5TsmK5Tn3",
  "key4": "4qu4s4UGgK8Cnqr5H593VhYUUYZgGTv9jgj44bjYe5iRpLGewYSNRonLd5qK2PF1hgBHPoChgx7K4nxtRTR56uhx",
  "key5": "3ojmMVSduc3uyC4MPcvhwMCq7Q3HEqoKhbFB9NxubTDKJSMoDjTMEBU9QRWf9u45DD9uZXZGvDGo1vr26uYTmrAN",
  "key6": "49KEui4zDgbpF3E46AbEgZMDj9cGx6DNeeSpdiG9tunMXzwne6Pg4wiAatCvpak7JnGUNK1uTLgVCQcLsKFCjamj",
  "key7": "4DrTdsKYtWaCoHXQ9opdBv2pQtmpxx6vp2kaVvLNYs3w1HPpzG7icyUmeGqPZ7v4JH7pppmg5uVXysZ3hxrvy6j4",
  "key8": "2SgLN5euZFqdpSyRQPFDstusrz9fiHkUcF3nbRs2bRgjxqyqrJZ3izKLNmo4waxdZYrPXKmvXrRqLKfZo172Ezza",
  "key9": "2VnEmRQepSurZUC2Jy59PMFNDNGM55xY2HsjdoCNXMpE4Xh2w7wFsQbwtLxkqHqtAroqjRjjLkhW2NGzWXzhnkTv",
  "key10": "4wXunRzeK8Mt3Yxdzmy5BCkG2rHnRhGp6xvGPCVVcmV5zZGQWw3SwtNnMV11AaubUNsLM7TB7unEhh78yPYE27MM",
  "key11": "KVkYbqcia8qnuHFnGGt3APyc1s7YhrvneCdwEoh1gV8y2nKopNSEb6o5MwgRNcP6ThvNrYRHpXU3aUDDKfV3hzZ",
  "key12": "4PGUH8jt9NyvaR5TftLVqY8Tf8dRnnCGAkzrNxpaN5jcmP5g1qVXcjvgXZ3GE8L9fBPxHhC7z52FpV34yGWEE3zz",
  "key13": "3QqCCEvZaunCSbyB43786q2n2SqfqAHkSLmHa5wKWpEAWg8YGurXL59ySF6YYuPYdsGVBvd72vtwDw8PHfSeaZXb",
  "key14": "5ioGM95qJe1snYhHDXd74JTsVnB6ESC9EQJxd2bJkLiyH2Lfv5KMU6LpxMUB5ehWn7yX8ynnbzJtjeSnwpXHoZaf",
  "key15": "5U7cY6tzvdfS94AwUcBuoZBYZ1XhnH7yL3yQ6mYYCwFYXUG7h2K3Fx6MTvVtAYVs66P4hhzX7pXZA5Gk8WrcguQk",
  "key16": "3LiSdZwELdEYJz3XWNWwABLZEe3htsnDUS58zSSj4zo82mtFqxZKPis7X2yaKsc3burQYqjpVKhmTsmyeSHvTEUo",
  "key17": "MY75yAe8GSwwrya5A6qxSEsmsqcF38HWPJXLxjdUhqd3LrCAWfErVxbUT6tuMDUFdjF2XkBeCoTsw6F14hbHyb5",
  "key18": "5G2CHqZudCod14yb5QdNwEnXXapSHDS1XWb27VWJC7qG2wc8S7xru3V6aTi63kitRRdKAb3r54NSYHkB6QGAgm1Z",
  "key19": "3WUrQgnV5rsH2MHNqKtwF52XiqooKcRA3xLM4cUpemr6Bb7yymsmfBLsUxVrdgrgatEsdmUiCHayWmELk3V4oFvv",
  "key20": "5Z9izrUrCDFrnuB2TqzP7oMEPGx7Ubig2UwFb9uKp1esR6nQMW2T8t2f88jMSyVtuWjXdAvocQoY7FWbBRNdbDsB",
  "key21": "5FHndfwrgFAdXDQkYsvuG9bYPBpQ6eNL3VCHB1DzhSvi5dBzekkCYw8HpRELTxmp6LRCto7kqVemVRCt4BMGFyr4",
  "key22": "5YLDKQDBj9YpbVX2VZwgNbP48sQyiuoAN25UUQnCh116MkV1WH7vdppg8zSxnLc2m2xH6b37KuPr3ckTsBzevjGG",
  "key23": "3guGZf3qvvRxGuNQS28E7AnCHTf6c74U9DgJdPE2Vpcek9SKNex5whASBYvMA58yo83uw6PWnKgHKF9WgwLh13TT",
  "key24": "2kNnhzPprVbYzQR2frWjifRguKuyy7B6u2RY3tKpkW285ouXChgHbJBetrmEkhcH8Z2Ku3a2wq3eyJRtfFpAzeiW",
  "key25": "5RDNvzJsB3odJsjJcJTipNCzWXVi4D2Uuc4cdNcnPH57ScW6dm2X7eTnpXAs6ZHSQnb8ZV7GqDFtP5LNufshGmN4",
  "key26": "4evGxQJPnCfqcBBN6tLpEVK5RbnBVfwezS8XV31ds59k2mfZ3w9P4LLmKr1QxnBSsBtDUVbAUJrJFqRUncDa58Eg",
  "key27": "4Mson9GrE2eDNFY8yXwrQDJUZKB3ZYs91JArhtmiJ7b46KK6aZ4BqyCQSLKFzEgbmtuB5fmxuoisEnHaFSWZza8p",
  "key28": "FucpiaCcYxHFjseobWWudMwDpMG5HMhEetaTGY5oGMwyVrqfXmnhSBMTrzD3d2Mbfqgpyb3Sq6ChcCMvE5MBVUu",
  "key29": "TtFSiQBqZ6TU1Z1DeHeSFAW91AfWTbtxy7wEpmuyq3SGtLWJbSxeGXqnWLYJWoV9u9yJ85FifjA8GbGoYgnHGvS",
  "key30": "5UPSsg2arBzCoVPwpdJF4YGTDnukKucvL8qYvkWnpvVzQ46AvPSdc8cYtb8hVcA5swRP2nnkhMbTgnbC7GSK5E6",
  "key31": "4RzMX6QGUgtpUBYGFY1rQsC3nS4NjjbJHPD8AQPGGd4BsG2aXTdWNkbjDjKX27Hz3WDvJ2boygTX3oqSRFBRwXL",
  "key32": "4ZBNdZLQjqYH1cbVpu4gBXoRQrzBVtG2xnuiA7dUmU1eveDVCYzoxG36JoffQW4iFRunj3jdtdhK8u5Bb16zK4H7",
  "key33": "BhzFKAcdAndBAnJYakdsTfHq97Tz1W3tKf8J2aZj6JP9GicnXkUZ4g1MYCDMeEXeQm2LfKYn57FU31fa5oXGTCf"
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
