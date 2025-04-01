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
    "2BaifRkQFAtMjVCJLBhYUoMMKKzkURDzARa67iPDmqNKox5fsF9vXGCNpGgrgxfe5ggHqibDeFZhEcd2V6tpgejn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xspDtn1UHjV68GSPtCEnvUYdfxwjG3kb9rjajFnEw8TdtbmTWfjmmYDmKXygtnJtvvaXrUuBs6ZtDemQyLAWVD4",
  "key1": "5kn3qhPrFmd7VEvpVPQYezedpqqB3yxFbzk3ipuk3xs4S5hbYHMsirkQnMKyZoCvkTFuQMEtak325aHBFyfMF8P9",
  "key2": "6bybeQuwBfRXLW1Y8dtdwfuyRS6YfkdQp9dtXsHwH45WGwNWb5KhpVQpxFvgPURQQTHRdJFeY24wS8Th4ehhQiN",
  "key3": "4KKGStEeLEap5oATwZ4uDgbyynovmreft38nyCUXLwWMVhWLHnqU27om9utdhxXm7aQf9d9RJnnRj3S1AmJNhGvM",
  "key4": "3TSaTYGyjywuQgmPBtfAHuAwLxz9ehqmbr61c2LKChv3HC6fDP4Pk4zYyY6GwoJ9ELFoNTJkUQoTkwgbqvLsfUdN",
  "key5": "2a9FFPQs3h9FuMuyqL9By1gxCuj2DnpTniNde5iaBNgruJvR41JSSGnqapuDSR2PF4DJLbS3AF2PkhzWxquJSjPJ",
  "key6": "2yCDfoo3xkGyDycBY9NySfJifJh2H73Pp9JSptWgRQ6iKuGYxGZSkpvWGCCBuwrXDh5xL2y4u17zh545t62BiH7M",
  "key7": "34N76zwcbJ3Hmk1rWvT8iJx5BWgNbYu47pcEvdVnGxLcCnwnwXbfuGVBwB6GkPtLSbqGGkBcDXvdEgDsJsdq3QNY",
  "key8": "paixkXofMZp5CmsdRSJp98AyUyij7P6uab4DwnSGzv9n8s9qAL3nTz9az9iapu1RKH836Uaxy485JqruCrPAhaA",
  "key9": "22CMtECHb9UbqEiiM1WEN8pWaQgcuR784oKXyPFXUixgmMPzr4VwHQu47WPB3xcbG9HBWi6Znn3WsMLakUh7dncz",
  "key10": "2BMYXC3YDrf8PkP3NUxawhf4g56nrBW7pJMxsHZX1mm6uLvWxmmQJARPNJA1Uh8WuejdAzGgBvQy3p7J32XRxXJi",
  "key11": "4xwmVD5eSEVBxh7QD4jTmE4Z99SQWMqhHBf4mgK4WMV6isGw6N4VwEZA2ZRdKqpx5KATwFuztxhmpgtHaMUvL8Y3",
  "key12": "61eA1ozomP2LgQSk982sZVuQzMnQ1cJmGNc4eBKThfg3WMm3ckziJRtEwhCs3xcsGjBxebxaddcqSNC7uUwNvo5c",
  "key13": "4Tk2wHVddVvpQV7pyoX4L71yK7LvfybiZoGm2kS8G8YKcyx7CFivMRuzjNAwp9hbG8F86u6GNwcquwQvZXe3Vqsd",
  "key14": "24S84tJ41BTspkchC2ZzTq8pcRXyiXU6tTGsCyH3144chNGxbZ2dDh5UJaUu1MftH16v2oEmiGeDqQ1frWh3zLRC",
  "key15": "45hAd4UVNNBw9yyxWaGV1mDJKJCwNFfBqQrtuCZdgFzxyxZca4Lpvcc9HZ3ABxZBZ9E6FWFFx5xuLugkQqVesq3o",
  "key16": "3YbiuQFVMHVXsWrkv9Z3pNrZM5zGL18oxNHAq2MkNXcwTgc8soFVWpriTbDf8CNAaV3gspSmLZumgiLQhmH11FuD",
  "key17": "67rZwLRnKFgx8Jm4p7651wnXK9hTMZZioUYe5wkqNEY3smwguPt26KEcWy98hMw7BboLCFE4nbWCxQMH2oiwa2g3",
  "key18": "4zpeM5wSUkiryEEsRBk1M9fpYmhEhfZ4qAeudKLQmkg2thgRCv5PS62YwjzyKVp3CCND6oN7QeMFpdgjvQDXrx3g",
  "key19": "2QPsXrBmpDM4YTwS8N6fHnpRr1JGSRhDRQMHgyMKvL9FB5aLTzWDquipwvmzMxKbzuVsTzWrR7GvNz6TnbLDEjEC",
  "key20": "5GNXAUJpc6jtC7NbyvgKueysUoubDm4uKtxCXJZGuREugHdWer66eSk3es8S5XiGGtxowcePkZEehoqrbMgRdPB9",
  "key21": "MRbeJ3gtNhbikYH4hkju1EvuWvssE6xFLPEJ9ntDXa9rqEZHqirbEZW6BC6FtcsMHrCSX7i5bVn5EmoaLhQdp3U",
  "key22": "57pLKaMatZc8cRBZzdP8aQXfVdaPoYs1GoJuhGVPnWwNSgpc6KAatMVSYeWw4MDwUbk6ykc61wm6aWkKg5hnnHbV",
  "key23": "52F3rRz4mcfcTDcjKEC3MKhfVh8tG13B61Dr4ePYik3cnNGRohRnwX4vtgjNkT8rgHqr18yoxrn5ukxiecfisat",
  "key24": "3mg8WXF7EYRu8vtmWpq6CQfdwQNi79HfL9wPV5Yg9dFKxnXCgxNrrPh9xS2datRUwE6k4cofFaLqNCJH8sgdPn7f",
  "key25": "AwKZ2kqN8WBzMi824hqH5B1GMMFqkywfAr668RsoviNfLKq3k962KgmLbq7dbVK5RnaMyrE7FixemK9jTC4R5XK",
  "key26": "2FsAFZY6hQiSHwz6hSs71BykkZcdoY3x2rpTBhJa5BLBHgypCjjHsRyMvsj3kc14w3KY7sStA9zhT4FnUjcfi4hJ",
  "key27": "4QanQyyUeoSyKS3537rqH7q3F7LTPzit4sjrWcLnAeJ6itHrz6RrgyC2BQQA83nzVBEAxKBV7caaMjVki6hqsQx",
  "key28": "4H7XXT2PdSuabAcP8FDXKrFntnXbngjYSK9RgLkqBM74bfSZYaHH6ii4s7pQtzLMZTDq21w8qs2iprf4GFXxrd1g",
  "key29": "29s92ZJUPLxKe6HCETouWv4WVXQMxT6LSXWfoAExVib6ef4MFU553qkbqzD5f3mvS6L9HQZiXX9KSDYVPUJMJJxP",
  "key30": "5Cr69zSZHd3iNVxikpkPCUFS82HuvnEM4hFPsE1VRXEb3i3QZTZdA5jKkUayBBuNtQtNCWCjotzwrS3L41WKkcyC",
  "key31": "2GKFFijvuE6ztqTsQ3pHbosKPfqi3EhU1zpx7DR84NN3TsWgGVm8b6SZ9wnAhsx9qbXu8DeAVCs8Er68zFJtAm6t",
  "key32": "2LfN6tbP7JkoZM9PpEEruRqzYV3qdCJruAn3avpxyMrRNQu6KdZ8sACDKnq8TVQ1Tc1ELE1duc6BetaKPJR8jYqg",
  "key33": "2xVQt2qDCkfaim3hB8THDsSNKsADmgNc7XHcARXFvrcdxjmQ9sPNHScH3FpP4AQuWjXGyiBfNQPrGEednfsBq12S",
  "key34": "42QL1wrX8K7aaVyNAxZ4Lz73y7pye47ha5ohwyjnb1PiAtB4byRawVwWS9E9T9CncByexC2k49z4dCw7f75UjaXs",
  "key35": "2B6t2YJFUdyP6Lux4UNqCGLBYMCYw5TP8RwiUthwBYVLfCPAQ5mnNYEKQryd73F59SR73gTGoo4MxpdCG2NgdJTP"
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
