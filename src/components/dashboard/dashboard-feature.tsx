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
    "26A5zspmrBVJSuAMZXwjrfSZQ5FUWAjT2x39QeoFZ7n9PKoH24sWvqBDb4XR7bFT8WKwMHoChkxuUxi7tEwQyG2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KAPcq4qf5VAbjpUz29cCb67xV5wzKvpVjH7v8LBDojAZPcTnjLAPeHNK94SAW6zFxccTXrN3nqWjSchw79qWZa4",
  "key1": "2b6mAp7hXMxe4nH9pFkaefzWccnWB5xpwbgtugxzv9c9aAK9y44k6XUhBc4UJmK6oiJLF5tBzykRD1xfvAhG1WbC",
  "key2": "4oxedrTTYdsQn4ALjQwgFQ7CZXQTM3Q2WrrJLf8MwzrBLpa1Xf5rE2vMVNy4aJXfchsBdDKXYUpzVSNxFbRsrW6h",
  "key3": "3XvpvxGyx3gZ2qHjrQjtWuENgUZJVzZT66Uv4mtXmaRB8u9VECDMVsdCRsyHLfCaQGuGzhZW1gbzJHks8Spr7Uz",
  "key4": "658dZzfWkX4UXH5X8UbEgRZUKjrfDWJW3sQU4QVpoEbe1423i9axJjYEkWnSVXpyQRiouoDjRM6ATTp8YPPaK7a9",
  "key5": "G31GBteb1pTDqApFvq59GKpYE27rWozebSCJfBBAixi4JSm5PdHqnUs5M2D6hpik74s3YGKBuTR9JCjBz9DGLur",
  "key6": "2cVcwpfhsYggutZDBgQS7sJAdMc3akfv7GqLHAX7kmkfnh3T18e4dxNPdQ92K15pDAEpbWfyyMG6hZgfiVSvkw7q",
  "key7": "3MQQqzJrtUrcRKYUuMFxiL5qqjXqWw7fSudMjHYPNUt85uZd9FuyXF3btEiGdeVJ6GunkN8zqbGCDHJdwNTrbSdf",
  "key8": "3JQ9tG5G8dAq4SoXbnSy3bRLBVTh4YuEKpqBSgHeYvbCBmoV5DwDEDHxcLL4mxWieFHPHzsmidPVmd7a3ookpjcg",
  "key9": "YrvtizryDfCXvnfBhyZH65yA5S4j74QiEMjE3vXrzrfuydKjkmB3PbtnwREVmezA9VPH2SeAQeT4JZvswgcTCyX",
  "key10": "nCbeMsTpyjm4jWQBLCh2Py863L1BnTNDcmDivypVYb3d8x5oY9koqWXwmL3Gt9VpMZH8vLkrRHAvCeqVQ5tUFPk",
  "key11": "vGC5JhNZwCJP5wBH7nS2NbEJun6oRAKnufSuudoQ1MzpUcCmgNDuqZ3qn6BrS7wDNAPUiJryz9TWWBj5CajG5oo",
  "key12": "52Dj2MKctX4UjBxB4F32E6c4pxWeyyQpm3Pa5SzimZiN6bfeQxcXrKofN54bJFFoQKdYFKUNvFScyu7yC1MHVcRQ",
  "key13": "2u8xsHWj1B3ATmZ6rrkMg4ewFAGCbSSRdn4hHZRFzbtAyH87Pjfhq6X3eCoUYznfrVL87qPNTuS1XMCu2xMPgq3t",
  "key14": "3ZJTSWjTmADGvL6fjZ7TxV1nw1SpwMkwduhTnh2DvnMbnPistKrEpNA9mNiY3UH9XkcjVfJZYbsjWYS4DhnHDsJc",
  "key15": "b49natVpCzrG6VuxBQYwfeXbycDbshUgBxSaxgjB8WMY3eMRm8xf6k63KfQCdTuvcJgToju5dpeoKNqtyLircHT",
  "key16": "3B9hbuvs2qjVpFBjnxDCydDVTVYD7A5udvScyLWMZAgrL7C8KoMxqhubdaa6zWaKgVHJxJ4HynBuqPwqKRVGpjTi",
  "key17": "5RXKpc1W2Er9eeAHsDkTLLYJrkT4t56LpvFVod9r8ArsxVLdkb26tjSRQ1dAKBTxzMDTbV6n1d9P6wjdWeBE6Xvn",
  "key18": "36CmdKSaGv39nt3mwiZawHh2vYUCmT3cVYG4D9A55RUawvfNwafm1oj86xVon4WiBv2hY35PvGd4KkUakQG95rKJ",
  "key19": "2h6uJ2uRKn6na79M7uk8pajDrGtKhQc3Bd9aWEQ2cJcSZ86BFXJStmVJqRWE6fMvJ1XMuacMEiHzQgENmJw7iyeK",
  "key20": "N2TzSLUehyqrzw3r1mzTJ26C43wc4MCgJURCDEw7bgd4bf8irkbk13w2qqCvP6zMUUutKaLhe2VQVaN1Y46YJ5x",
  "key21": "5uWXn8ALCVzgyt2MXeAzJFKmQw1RTstYzNusZ75uXyZw9Li2Pq5iWHMBF17SzS5hCtggMPeiaQcZfBrDf8CyRCQw",
  "key22": "CE7SqnFKdK2yKhDTQQRw7N8KPjmS2HAWJ9nhxzxA1HKPMsQYxSmUbKkKGqYY6YzSHc4SyUsLzfxkiDyvdA2XB6S",
  "key23": "27PfchzRkRa4ew6RmGnAoa53CYYMq6xeufm3E1iMMNnJZNZoG62wcPenV751DU5Znkfd2DLpxVHRQwGoyrHD21rq",
  "key24": "3SQFQkcSrxNKhJCLska2EK4juMNjvxVWB7Pe29zLquRckJPrbr3FuQTk7kvQCGDa7GtA6hgtJrhEb6CcXWDzDijF",
  "key25": "2v1inRxUHE21htg1ytHVZCmV2HhoAtezxbj14HZSr1qfTCuFyva7GtSFZAxHTpFX91YxFYoCA2oS9Y1GBUhmuQiK",
  "key26": "3B1Ro9A3zJ7yqk7h8cmhLVfiG9pi9M1cfhfKNJmtz2X6aikL8b4qpEwYfyaZFo8tBnL7ioSPVzLDLMK8A56ArUZw",
  "key27": "5KZw9wGU7EapPwZjTQZiNUrrxqTJN2tWwuoTsiw2gsWdsNu39pkHfNT8ZdUY351XNW7FsGcsWLHw7J2eAaZMxoii",
  "key28": "2vB3SxMDFt9gypUkCyZQ7WkQYkYwBxny3vuM2ZQUvZ1NZLrQjVD13fQmyemBDH6ET5BoVgUY9ifThF8uhTkxSBte",
  "key29": "3EmA1tNvfzUHwYC5dcq76TZSZ7MgP1mZ3oFeMG7R2B88uvgAQ3Z3fXEL4ymHe8FsREVLy1Gj4fWkwnqc59cYYEHk",
  "key30": "4yqGixk4Gf8grEYmodVRnt8ixGM1UHuN2Qhcgbhr84CF4MvSxw44mj27zAG1rhDPeND6UGVxZ7ezmNwMALAhxACh",
  "key31": "3yJhuSDEkv25oCSskn1AEh9GgfkmSKFedPPq4iCGzFN5j9T1E24aN5RWTSPJkUb2tX3BcUMJvEtJJajKtHaU2rqr",
  "key32": "5Tg4v1z3CitaCyc61v1chR1nJDR6HxWTeMUdouq5Hb42g4MXwZZdi9oJm3cn7hEK1R1kg9ycj5nPnMq4MrCYY3Sa",
  "key33": "U4fzuap3TFP9ugrXj7BDBghu49z82yF8PFoxqjFLSnKJXnhHysy6ZPj93koKhveGTLE9sVJaesGoY1JDsy2NM9x",
  "key34": "sAxYDUfDmzZN2nHYgxz2ej2HfDteqdqjZNaWJbGmuYKqKL5yVM3AUEwHbGd8JvdpUwLaGYc5wCSAzSvC8A9GMQK",
  "key35": "5Bjt7ozSEE9nDCae4FtxCKV9zkZwEVETZWkLJEjfoUnn8pTxWfbVWdHhkEEYCepXvz83rrTKENHspoLkkHAEWf2n",
  "key36": "43SYacvVSeoFdprY57Svoz5MXZhX3F4rwYTxUh316cicA1zjcq8utuqJBwJwA4QzHd5NrGwobiERrDhY6yd9uxsZ",
  "key37": "2VZwgy7TAtNbW2BV25656Hh78HbcKdVumeszLMsNJFLhb1or6fNHraDDZyzMjLxkjaGUbsgkDwB5gXdMbp2nmEF6",
  "key38": "2nHK1gH3bwmHi45AG2JB8uDwjosmsbPvi6dRxs6wmKVNR4awmV5t7SxN7kFpmNURFaJNxb3NxeSfx8uGE7pDYrDG",
  "key39": "3Zri7oV42WQA9ZqbG8Wzivjxx2WWxNmd9ju2WAZUbprQKCto6uwhRLu5wDdp9QYsoiqVLts6vCqgHL1EnqiTphKX",
  "key40": "eNGHjLxZbD21C9b1dacqg7UJ6qBoAH9sPU1sVGEsjAPnM9ittk8hhG55esduabU7sJEmiEDtszWSCkaGgsaWtiS",
  "key41": "3vtZbBfcG32uzHe8JfBbazTwMvTrJCeLwLnrQMyNf3jCR1QTcw1wG4y8XqCSTpsLycBqx64BMKQTk3C5Sz5MY4jP",
  "key42": "2rmFNLeMWszE569f8BfTNCUqwNGDsR4Z7xfwddU8Ptdu4qW9Fj6FLcfeaYGBDSG9eJsUqThT2JjNtKNpkrjErvu4",
  "key43": "3jBDmeGmh2fQdTt7fVdSYZymXYpn7jqYYzGp6WfYUuAcJSd5tDZwrNcK1ii3vE7j5UfeVofLwz4sRg1MdW3BvjWk",
  "key44": "5yxUrkJqk9ReyXJgNvjhS6aQw9mssyjoFCnEXN3JVQtUm5qcDYW3eokYF2yxNgnbMW4uLypLNjMxHaX25vX1o6CJ",
  "key45": "4mJjqWeLJX3vfNSbeKRdKfrFWFBvY65b4G2dqZobugUtWjS5FckfuCBgEP4fvVHi8CqJ8BFhTeBZ4F91zJKRdW78",
  "key46": "WKBim6AYkstCnwxU7juY6reS2QqqybXyWkCCfxLfZrXNLAAEZjv2nqgeoENfgHydBquNhgYQE6XAbCx8X4TFPyd",
  "key47": "4E86Es6rTJEWekWMvYumuSskStGpf7YRvnUUCeqbY2QGfDXhvqDNopoddqs3bLsBiD1CLK8trD8r5A7jVFhsqPq3",
  "key48": "5EvDu3PFUHRu3Kz4QJ9kGiJe8gpSa1Cv6Ni9yLVjnVGd24L8K5k9SviX77RX6GmFwDG1vjz6PDn44Y3H5KVWSFk2"
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
