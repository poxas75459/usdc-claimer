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
    "4cMatpmpYgUoMieG4ofYACPAK7LNmuYJoJc5mLBywEkTF51KrmsyGECEX9evs7DBHcJB462Dp4X1mv5UhTo2k826"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXQ7Dx6ewRWPVxCmx2ei9XZmwKirwk9EnC7o3GyJqYqSY6ZYdkpTsp1WvM3CANaPFQ1WaCQ9ocVthxTTS21nYiv",
  "key1": "5BZfPcsPV2cdJvBE2XTQfxXW86RBkXkaVkMxUnCreH1d19Vxcxr1sY2hPjybDAbDpA7odrUanC7DcqyYzb8Tf75A",
  "key2": "5ntYXoEH6dUCMHXXJUcYUEqrCtUfzoRKQeSSpSaU7qSAHFygSUJ1AhKNkzW6N9s1rgjYub89DoXLja3TZAcTNcmD",
  "key3": "5QJSJdnrJMrNCZfEnZDcuiAk4qC5rjJ8Ngp8DZFDGLSYnNV7XmGAH5fpYKwyto8S1U8QDTgFbKAg9BuB4yDhtgCN",
  "key4": "4LngNcZpubtXmTJUaVcx9xSwCRVpurQnQD6hD7gj6Vr1Bf3QM28WSgv9fUzV4dcLfDe9p4mmvRJB26w2urw2gGHV",
  "key5": "347JRZ9vDJrqxFhEQyQjwdSQAdhHansX5GoMikLpSuzvAtuj5nqLYZN6hSSF28bjrxZZaJQ5RtJKY8cfS2yQVq3h",
  "key6": "3nLLW4HgxSijsPAxfMWvaNKRzrAVdWZzT8hBnBnV1zu8tC89wfRyFHx5d3YFhW8tWGeuZVt1K3jDGbRxt4GiJoBd",
  "key7": "2ViSM3yY4HZ3zEvsWNj6jo366hbPeNKWmDRHMnkLZ4BzipnNGPYB3eV1sCBkKWJdVXo1AgYEXp9k88Ht2h42nz2v",
  "key8": "562smX5AnuQ7vwhLgjwdsMLmE3NFi7NQjjeaGB9eW3fguwsQciqXFe8S2nBtt3HpqKp5CksrUyRNijT6KQRvFGY3",
  "key9": "5Q52LG2tZAnyBQk3FB3LQfVedDgE9b1YDPxt3xkZuCJLAQBozGFrUtAJZzK5uK6GkYd3zZBoggncwUMuJDCdfecp",
  "key10": "4epR8g4FBuE6cQDVKoEX6Gp9fxwcTwq3rTxdApeqpyMib2S3B8omEpKSMNVdvo9qs9NgFYs11SsaVt87i1YpfPDh",
  "key11": "5w7psYtK7hZQRfbG5aZi5HEqhEdsiGvyGi9zyk4JG3qbAapDirV9vhdXTw42Fzwe9xCad3psfnjw34P6TehXNAJX",
  "key12": "26WCqNWTwD9MfZCmUpPn6aCHdTwHMevm8zL7eUkND2GG9a5BT9LPmNMvr2yc4f6f1u1TFuqWnwnBrtcknaDrpUaR",
  "key13": "5zukyRo1pmwPT3t6dufUmU9uiGkT5tig8XxpEcWnLN7q9gSDTUVBvTSeDZYFHPVqNqzDYnd6JYHuZjCBQrqj6MA2",
  "key14": "2PoKiVVBQwWxJApm54vm8GrwoUoCCC51kURW34ULZvXp75boLQ4YLXk6w6nSVmpArg3fnEug3pz9YWGiXrA1mRw9",
  "key15": "3amjeZcssmeYLmpYbKwrSQpAQ7U2LE1iE8Lp5nEsMFMSPXqAfMbMDe7ZjCTPivRNJbU3byg3hLd6NFR1SUWvDCHf",
  "key16": "2gWNFd4EbLtBBDtpnH7PE2Mn1gCHM3sp9istidHSEJQoSAXfqfJWgLtodrSQELSuqat3QLwooLMbSBGZQP3WVPxL",
  "key17": "4qpY7AS7HvAEv6h9EHpvpy5F2wrPv2kDKRTgCLPWQne7vg8TPrymE6EH6D6e129YXV5RzALq5WAGjkNFSVtLMraj",
  "key18": "4sA98CKGjKM13zt2M2CwLrB1zXnzV2qhovR15Md6cDJAyqg3ZS3o6tTfaZkrAfk98VxPZmMHuUCz9GmpSNku47kt",
  "key19": "5qi5hfLGZaqiPm3h18afsRyiHxdJo1vmejwxVPjMtY94UVi95oBAHgMrjkXLP7aTzBv1s2VmdeNvhbV7NnUsJz5d",
  "key20": "2EeJjUb4bLAQNwcy6aDbM7D9PatReZK5ABJkMiYCmpGz4fz1Ncpn8647KJfEoET73T3edzPSHvPTSi8iCu5sDinT",
  "key21": "41VQamhLARQC9F3QRVsVqGUyZvBsiNRYLU9PVdhjFrqK12BEzXwaZrRbXP6g47m5cXJaXdFL6hq5qJaqoBDFcNjt",
  "key22": "2GaS3L6dXis5Rn7RPGJyfUJY2718PQdFwARc4vtZ7NC3fgKVKKJyqJUW3wMQBFkVNUVwD7TAUNZF5fUQBadofafK",
  "key23": "9DLsKCRYsSYun4wo8Ybwok79q6MWJmbrCrhFaKVNzpUkcpM53KoUiwu5mjqJzHcbXD8AWrjidyb1Zq46bcLdfyF",
  "key24": "3RuDazi1fzuKEU9fE6LTb8FqSAaHfRWpHncPMzSeXaDpMSgGTPBoF7ke2AxoUGzhgTSTHzg3r9CyicNM38EupMzY",
  "key25": "2gUeCxcobUwdCR5K8okzpacrdHnmX9S894GWRVxHGAC5Qx7vG72fdZvQ88cdboCJ5L33U8xgNhNXMb8gpuz7wuDi",
  "key26": "3bcdJNhRCaEi7uZ8RT5KxJcXo4wmnQi9CjDNxmBui8BSyXueusiMgoDZDbUA8XommasLF3pAKCMaUmsfahW6r7f7",
  "key27": "61XcsqjYfh7WeZXyjJsNdLuAbE92BRBB7z2dDNoDwf7WErYs6dZpAwevfH1gwrd3W9XsopUiVQzGTCAc5RLoq7km",
  "key28": "2oZSavzWtasZUE72VZAxwfs5fcvrrWJQEufpKWSo4BGSQif5rBVwAUo64BZt1gyWsCjyQ3dwZEFf53SxwDin8gck",
  "key29": "2wJh7QfBozUcpyDLpvVdi5Pvmzn2p85CPwpwd4JwMgiL5ZXnAwnYBHJFAgWMVV722ycSKiTYsWmqsK3VuSHRgqsr",
  "key30": "3uExqTvfjUGFto4FWCZMFwT6oqjT5HyNa9KCPkAzxEtKdwDKVXyKBnCjPRuWc589ejSfqKzPvkNLcbuMLi2NwS4q",
  "key31": "2ztdXfJkFZnSWf1UDVEL2ed3j1RZsRTLCFC3QxwEU4k6HKQsTsHmdepassMkc9thpg86dysdsfnCrAVfVoLcyZHz",
  "key32": "2c6YTWnZD6rGyfm4vWN4KQzHMVPe2gqDSPTZWQkj14MmjhvVs9aMvf8kLBhfh7MwJhP1b4xhp8hSLD66Unv61WQ1",
  "key33": "3wh99nR1MpxZd1FHMRPyG9oALKKgrhhnDut242VqnXV3xe9XbqE1xSXzsapoADPX5eipSbP9WfXjWXAjCWwLUaur",
  "key34": "2gjBtbvcC4bxMYFreBMfmUipAVJAeUkesYVMW36aa32tEifqib5NSduMK5Jaup6xUwYrbaziBPJ3JRZnC8bGmVYs",
  "key35": "286XkQUMBPVZC6iFd77m8UvHjTeF3KjZjChcf3RkAHUaYfwbdca7J8q4ps7AvH5eUYBeKTqGwaZySxqeaYB862Uj",
  "key36": "hPYwXd9ZgWZNqxkvCSp67daC3Z2vxMnZJnhx21QNvEubyNVyEtXorQJHkN4j21tnRWVz2fW9v4jXxTuvsRZkfxK"
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
