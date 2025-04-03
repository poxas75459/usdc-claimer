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
    "5eawkje1emmUJjP6hTssxtZQPSn9xQ3uf5K7mTuviR1uK15mDVh7J6Yzu2aFBHyTcvBrhqh4GnAUcsx95jUd2Ndf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s9fBoKZguSqkgTNQVXU2PU8iMoSTB63K3JzsQhiaJa7vr9UGVWK53KoNSFWKcd21QZgoaekLEWYLRXFBq3mF2VV",
  "key1": "5CsDBTXs5PefKyoZ6cSZMT1hWAUUjALuUTfrwMrfpFTCbAQm4EVUnb9YbVbAKmxHvkbqHxjNx4vXYZWu22m3yXm7",
  "key2": "5626x6FeW2QAFTHygMmHheAvT41qCMKWngFveqfLKCH81bh2ibZAs7TiwwcWV2LSJkUvssJkUyfK86JQRg2PZvke",
  "key3": "GCQEWGKTA47jCH29RDnU9b3G2mTrYB4WnzN9hpMq3mss93civbYnkQjAfwoK33u8wUPxkMSgfFnPW5N3ZcGzn9E",
  "key4": "5xSQ6UMCE5UFwJCfByGNhz6bvq4pvTxqixjqC74ZFz4negHsLciNLXooxuHeA3cvwSKDUB6C9ybsrhRsvUjrkDtd",
  "key5": "3gt7vRtH4gDFBKb6JtjZa8mcqmdAGsondVeNm1iaZjwqGhmpRu5YLb6GANdxsEzQJp3392VpTo8Y1WihVNKPbtfp",
  "key6": "eSyqvdgXd6NxZHKY7N2XfaCaxQdnWEyjoUC1wTTS1AZvaAFhtLd3vR2mrnt4tYZNZ38GCaJxLCZcFD4S3sAjL8G",
  "key7": "u3XWvwZ9aTq7dfhvLwxXARRRjXMU1ueaMkwn2ufJThxF8NhjA4sd9ou2zQiVodF8y7aNuBT7QNETHwqdabHcxeo",
  "key8": "5zRfNv6gssrVscMHjxZxbtk4UsN4nH83zezam9Sj47XvsP7dUoFWyJ6LXAJYk5kv5CLc3v7EwnuVMjDB2KshC646",
  "key9": "5vvEiCmUymq5tqWhAhfz8frAk9Z2CCh2tEcpMK5itf7S1cJ6yDBLoFFYR6BVQCmxEFTXieP5kuHgB2jauZZru7iP",
  "key10": "EGQGaaoF6Mc83J7XJkS1VwNXQ1ZMjBELKdAaVbPFjHT9bMoVjqPJbyLjc6fYzHC7JqxyKtrP6UyXgiVwYkM2cgw",
  "key11": "52i7LEWi9qyYNUF5soAfoQYFkj8qLrU7MfGcwvqQYUsPNNXRS8WHxT37vvSgvozE5qYd9s9qGmKYMELQAYPRBNXU",
  "key12": "35eWJmeF1Mb2H4Fif93F4d8KgHSBfZqq2hFuf31xyHVC7FbMyzGy7f5G3a2jFzvjmHY2Lug2trXhJcx5eW1QiTwz",
  "key13": "RasCZv9CerakqYesdXGFG3abiqFddqbyd5MiNAFMde7TcZkgtKyjuAeHDV6csCeMW7xo2J8NP8dto6BwVta8d5Z",
  "key14": "GuBBNrz1u8JrzKutheHPVXKfbzfpsHqNVjjuV923HSSTHc9cyAxe6avd21qoybRQ4aJRGnTKsPU5JsKiS5Sq3pT",
  "key15": "2ybHjVnH6nUqovm4C7T8zbS7Z7uhWmGChiXAb3E96KBaY8xBDUs5JXgdH7Ezmzenzq4fVYKMTtDJqRpjoVKGzZHx",
  "key16": "4pK3hxwjzaN8fXirmRMm4fFs4Hpyi6DCMkyxZBAY115ZdxUi1A6yw79XgVZx99ZDzr6aNjiUtgNJbY2YFeHgGgwR",
  "key17": "39jrXxR7AqPcJi8cz6PgJosh1zq9AkoPbhi4uwaAgaX9uHTBmYF7ZFzdZpDPThQqMSEw2oQv274MxFET3HX5nfeR",
  "key18": "2QvUt2CaufosaMGMJVRhQR1UnxQMzhqTsqYWsgHZwgc5NNcizZUeQ6739UhDYdVWqBUeJK7ffw4DbWa4YMvBmBkg",
  "key19": "4sxvydneDau6uWi6bR1Teojv4hg9oHiQSqsw1EYWPDZ2zbs5sFrKZncHqg6RBc2MvagGMN1cKmNd5ext5ZSwHMcM",
  "key20": "Y2P2ZpbWP4ND5G9tVAhFRp5snqgmjj9nxtWXeLtVD7tEDPt66mGxzv4MacnMaL7DFbNkX5yayx8waoyG7rXsyiM",
  "key21": "2Zikhs2KARoqCh1AvAyUVqyGY4h1zFUJnLry712hYdiYLw6ENHeYkEUeHcf2PBR87hyihgySXowDNw6CwY1CMC1J",
  "key22": "2fjNKiPjhqzphhdLFbYMRpcUdVAeL8EFhoJozJWiovWauWtLQAaJq1bkAXKBvkYcLy5tsW2Y7wZvsA26ms15B7to",
  "key23": "2EARLasHQpyaFjaeBds35Ld4osMXLAtifqri9S1xM9a8jowAQNheePsu7RCp74khvVB9xMsmRusmJGur5uY6vuyt",
  "key24": "7nzYDLzSEeZkF155PcvzabTTCBcSyBZxCKNyekd6rs9ksvMZbCzzB3C9SB75nxaPfjkWoHaaZA4746WMTmh2NsQ",
  "key25": "34neMKDeidMLDDs7uzLrPTn35TrhsgQwXxuzHrYQJDBUQyUqTHmXTqBgrv6H6nFEEHtUASs7u9AwP5DiQEsMEdnT",
  "key26": "4ny8LE84EbQZLGaAE32rXxPpF5m43HBtWY4Kq1KpYRGZQj6WL9mGFwA3ZJXYjjSSRezPHvJyJmdFbgLWj6FEv2rr",
  "key27": "2DHjEeJpGQxXq9Kmk6wWjkAejaXov1KL17eP7tMVeg4T9Xqqjs2kaCEAjLxiQVCqbLXdaGHTfQTMv3Ev9jFtxoAb",
  "key28": "2S8Fbj2u4SNdv9Tq9kA3vY6cjn6dRDEFaFCRWC8C9KAaKP5grR6ubGFNMe797GmZf5cErQ83yvxofM31xJ1GooYa",
  "key29": "2KDhRotkYUSSDn8N7kbQsBHWLuqXuZxfYLQgEPUDyjczex4mJwVYWnYs3bhtak9gUtr2t9Pd8YdaTuizF5Loaezd",
  "key30": "3yXCx3tUsYT2k34Kr1CKSk6RF8ZUeTCT83gE4LSNC82TTNH338CVxaDpEhUhQbrxCGjcw8AW5oD1bnyn7xopNk5k",
  "key31": "2NZFwWYuayTXYsh4db1w59AfsR4CFTg93ZmdXxN3obgsR7tFxqcY3PHLaUhGK7nSdz8G8qmcsqp2W9UXpeexQtkQ",
  "key32": "2karmY4ZtBhPX8bHvKBcD8amo56wvGDpbvFP1pc1LgnsjSjhLN3mW42LXvghdv1bZqTWB6n9fuSeq1xjNrowkxcy",
  "key33": "3f7Xt5JB8RgyxtCvHJuRFMJ38Jt217YMFyuJjQ3G2BQGH5KYMVfx2TTRmecdWHJoY7qEarGSu39FyNEavy5ogPLx",
  "key34": "vTKMpfAustJ9B71xQrQUxded9aAzv51Ei75qtf1na5AWdDLbCLFjTkyL43WSPqV2tVxwomi1tdaTQ5B86tYYURm",
  "key35": "FBw9EB1iaw5uhKAXYUbUms1MVABFeF87BoW4fCHJ3UYKCJTP7nqafcfCLUiBPEch3AddaLZQfMphKeHUUWhWkQC",
  "key36": "W8fVo5S6aBeHCsBjzzzP9Qs1sYRfXj4xq3nr3UL4XupSnastjFf919uBivri6aEg37RSHAsfujwUzU855Cyem7N",
  "key37": "4jiag2QD88brnQRrrULMbT8TQs9MHG5eQ7mq53ciRJtxs2UqcqQYntJ5w38QRbo2VqzsiGizFqW15HuQxj3QyW6R",
  "key38": "4CuCgoNa2e1CmasufyCPwqYyuDStMPDWshv4qxw1PhtVudMFFt3kMQWomW8reQ2eczfh8FCTKht7Xst1fvVe8xgY",
  "key39": "4cKuhGVrdSyeNLWMHmdbWoXY1RibMLm1vyoG129RjBVMXCGCjfy9VpgvRUH9wgb3hr1mSFzog6KRJWowjK5bujoA",
  "key40": "2rnSWKBQ1yyroLCsZohvp94UqdeU1Wxqg3wohbNVDAdotkAzHCFXUzJ46oeLcraGZENVgVD29c5ESFUSfNF7nXAx",
  "key41": "2tk1TC13ed297jQhApGcAkNWMRbx4FFZkKbRz77GRayhC7uVJsbKYsA5bZFjdqingMirkGbJfZviTJA4Kt61nQMf",
  "key42": "5vMiW44f4wAKzHGFxRgjANesF64vpV4TpZ7RL22GYQ2tRQZUqAHXNfhQyv2ZZvA3W4HZ6Jt6s5AsvyCggWWjBXhL"
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
