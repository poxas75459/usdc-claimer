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
    "58QpVD6yYomi8RjKkwbUvni9tt8RCrqjtD3gXcc7DxzjbmtiB2Y5tBQ9NKh63bWYtThCUjmUGBpXm4857Pz9Dm8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDbjKLLzt8KnN7KyDk4DeMRp55n8RT8rnQeXrJvjYjC3teLrj7jAqr2H68xLVsxKpw7kyKXTP2qc1iDm118ikor",
  "key1": "fe9wA9H6PUqPCe55UxGAow8W2ksaQHwAhM3g7RtyCNkTDCeHEcu6ggFpVrewqNDQv3s2Ki6BY61yWqqXYmo7t8a",
  "key2": "5bhSphRWt1zdCgmHMfKa3oBvnGspWHbzgRZzqVd9618MSZ55BHnHXDatPbqpEc4r1CjiSQJNvMhzS1NerqdMkNQh",
  "key3": "4aKcGvzcCabxk9H6E5KhogGcsu1eZ8KJzRWrGqMsnxPoBqxdAmYEfSVTMoDyFRNcKEj4mPXGExitBE2BjEy62S6t",
  "key4": "RgvFnTyv423PwWQD6mLkS6pZUK1FBGwEmz28xkwY6XUGNKJbhyDtCuP31Au8o4MMs4V2fcnFSzAbYSJHBoh9JbV",
  "key5": "41cTT3ssoW2R1sGGNDbtpw5bBRNE87AJmzYkz8n4gzFsdCgKLqRwqKfKycfNa1RbpvL9HVUxDSg2UbtPagQGUdyo",
  "key6": "3UaWxqSUCaWVWEBRuyjjJoSKxW9yvEzo1XehWK9MW1L1GqTSQ2JyXTjmvoyA9dCNCjLLsy5nxxTDkAyhkLM7Wbg4",
  "key7": "5YLKC8awGmp3JK34s7mnMh4YmXDdqJhJRhRjqLkVLeMqQefZztNm2wgjH67Mv61xHKvhBKuxkvKAs1YZig8Gw8TS",
  "key8": "2BAbBNJYjUGenpw6LsqLCu6nNw1uw91QpAeJmNYpCST6QZJLQoMXWYdeyLT32iuFkokKC1N8cdKUksD1gUfbzNoN",
  "key9": "4mro76hrnyZaN5voufDdxppKqMQLvgXcs8rbudUEkcZn9k3SizWBaYe9H7iVpqhQZrmxQiUavMhcsiduoRaH9JPD",
  "key10": "4K3cTHpJtoQVtTiwTUfc4L2Mpv2pJjCNkWZNqTdrXGQ9t8urHVCCQYwqyATNZbkVg7AP3s2X4ZRXQgKcHSNNqk9L",
  "key11": "5qtQmRWqhsE7otZ5aSPZBXvzLTx6nnZobVDu6A13EEv66erB3fUEU3fWXXoxB7z3C4stB5S1DT8tY4n6fnFTgNqD",
  "key12": "KdLPZbbsQtuAWfeegALWsWms8K4NkwZKpvJG6Au6xa5doSt3nnnHN8wZov9Tj3HxosZiqjFp3pu2rTcEJKzpc1B",
  "key13": "3etTPSjYmZRkiRcgT5EM2Ci3Umee9zwLxiQcn5wMDtZXzSj54MMAiEoyQdX4qJbStHcb5jktXUb3d4YK4QLBfUwm",
  "key14": "4Wz2G4rdBHKdqxYzdA5J2BLz2dQ9g6nLQZXBG1E3QapU9gGmwwJ68NqgBL7acVkcuSJxtNBYukUpos1dAbkJbBso",
  "key15": "5zcei4EmUvnzUxk7SrpCFHS6yx3624iKbHDqJ3BDZNBJZENUZc3V9QGxgE9CyFm7DRmAdwK2GVMZwQdHmjA4GT68",
  "key16": "62mF8fjsgPEH69Ud8fCcAfE61aYsiBSevK9yEbnQbr9rJ82dm39tzZGPehkMqerMbTb6SPeo9gStNbUHZcTkdNHZ",
  "key17": "3t3kxhPQNqawdaHw6amq7NDwzRQzmoiS5Ss1p4iYu2QexU6AodKeKxLYSaifAsagxaEVrrdttyU2671VcGoFKSNp",
  "key18": "122hF8D53Dzh3o5xm9YbavpmXzNvKxx25yqojUKBmN6ksNKPHbokydB18BDuwXhLktTX8ckN4ymYY6kJH4MvYxzd",
  "key19": "54in4Xwvkm1zZBDDS5nmkbN4MUHdT7dtwU947dKZgYwKNzpT93jesFkMNrVFr1VdpL2cYpaNGWRkKDTRLuXwXLPg",
  "key20": "3JBkDrUnFHzdsoivk1aHUsZRMc92DAkxutRZvdiiwWQ1HRJtv3kUyxEFrhHXmSyhVCu4U6Et4rjFCpWuDw5jAc2r",
  "key21": "4p8zBz6KiawvymHkvG8QTy8o8MPjEXVU8ce3XhboFGjq57fNzfWAbzWeRPxmcvdV5bGdBA5JihBXjZFEY6J6gqqF",
  "key22": "5yC45XsxsVASCyJfJp9fGAxMH38BVTvk7gY9TGgezX7Cuv34viTsJkj2VDUgPTwYwrM8oZu3qYhr67tuQzeV64Tb",
  "key23": "3bbbtM9C7MesYroKQBhGuzwqwWm2zHss4qiBdfKg4JLi3Y3h5nDSYf8eYqFhEe5bVsnRauVBQa3Zs1ecUaS6uqd2",
  "key24": "38L5diFP9zvdJrcR6hdcBP7kpgA5rbQjq32VLFD4bZsuKXHrjXiFF5xJm7PGmBgVvSmRZ2upXEoPbEwiqLeHkRAh",
  "key25": "5KBb84VnPdP3xLZvX8UnADWQiwUepeRP4mARvmWGS8xPLMPj2hjNQ1mvkgBM6QosPoiwQnFicvb9DcmMG6mzLoGq",
  "key26": "3BZKfM5F8LvKGN9DTgaaxRW67eziizuUQ8metA7cyqCm7TkiDcs9HerxiE1Y3ccw6Ay7oiGUH63n4s5K6bJF5J5Q",
  "key27": "EyttTCAPdVSzSaqydxvF8HWE8VYZ7M1t5C9MK3TtotZHLhgXVcj9Mq34hwD21VJnBab89RsuwBhaUTsieqc9iFh",
  "key28": "41RXTw4AgcXvRyDAUQZQxMK2M5prCXVT6ACc3R5jenpd6t2sh7BEevdUx6rEDxQTLWRaDwmq8UUirkix33CkpGzD",
  "key29": "3RdTCCNMnWHtQu8PjtaBAnSiEjW6MhukGV6PMSG3wskREWpCsPFrsFiHEpPw2JJsP7iGg2L8MZy32UWNupz6mKjd",
  "key30": "4N7eEucEES3oSamzWShh8TMozenjf8yVEoZxJKYSe3uXm1ncXFDiKvWnKoYAAcGmV2G3LUsQ6Cr5BAxFXCGeHsgC",
  "key31": "47NmCK8LMVd6zREma9NiMrf6Md9dHrcnXrqd9vLYQdsbA44iJkLzyFH76ec9JwyoYK7yjrTxjroR6EtP4WAKy3S9",
  "key32": "5VnSfnMJUP5aGqU9jL1pq5WBgV7pWcXBHhEomJ1RfAmhKHUyETwY2bMAFD9rFWFQZtVpU1RC8vjYfyFNh5WPrArY",
  "key33": "5HVyrdK7nb22Aawjja3nUpjzSvz3rCcrVv4RTAh5LM2NHBfmB5EKxQwJ3zBuavgC3EZDxMxjaqqcmM4hNavib9xb",
  "key34": "3Aftb7McyyzgC5dKoMAJmH39Mn7aJooMigTTwTb9SsDBB6t5hDnpX9ZVFmrm5bP769DwuTChdH7K8PmHJCJpFVNW"
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
