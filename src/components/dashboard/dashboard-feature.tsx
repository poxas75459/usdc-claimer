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
    "2WesCo2oz12eKx3Z3dwokpJiAiAmKYD5ccZR79Gayb4z34qXQn11iFQKy5TZy4y4rtqpREeTJ1YJcTuEPdigAvpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PE5NfoAy1vAfPMzzfjSi4Q3Ju11giRyQotRCi8kUY7Cq4BhYPR3xJqiUVifCh69T3qWWzFziL78qTgYMWuGQPVh",
  "key1": "gz4pT7JGRABqvFWKMy53ajYuGyMtKhxiC89foJJhkTpQQnA8FQ4sMGr2gCTGLdsENW65DPjFsaEQmgpd7ypFz5u",
  "key2": "5NbcPyxtLoUG5wN5CoszGX4XnpsTEzsQta7md2kupd4nWXELBj6T2LvnYaTNLoN5N9kYVu2xvEQFAPzKasDty3Jd",
  "key3": "3iP8xgDewQe5Dyhvsh7XDMWxeqRT6nqRTJJJSod5bmxSfNB6WPFMHNe6Lv7AafHjUhqad2b4qfd2chGxqr9EP1q",
  "key4": "2jvHLuyyFzBDc7pLYwwpaji3DrudjFDPCChjSWCAaXgLhDQcL5vNVv1spFi5MvTAPbWbMtutmvhEdmNY3FVwdrCm",
  "key5": "Ek4ovnkpK1unvWHfKfzqL4h67QAReV9efnps4QAvr31G9cvZs15yarrmSdoEA1XyfwQ4rbQTbADihtjkC2LduaD",
  "key6": "49cRie4gkA8rTJbPeeJR7LJHT7c7ik3wKfEUmQAgoQSgYNvB4s13cynj5zi9h9oeLZELtaSmTQ9X1H62ukE5GXwE",
  "key7": "61UGhymjG6dQGRAvMz5S5ucmRvuzeMqBAQrxsqHFMAR3G8iGCAu3t46mLMEkpwTqxA7Gen6MLTE4oWMzTPCryBUP",
  "key8": "EN3n7uY8whDx5xKzZVY5R8nVwm6NP7KdRMzMBsqpGzxfZKzk5YU8afFeC4cVCFb6rVbL96r7P9svUebM53DZhKC",
  "key9": "4xVUZphe5gHAtc2EDnFN4ZtMY8he5tFvsVWzF31GcKC7hYiPgu8WSbpdesf9awMBrYt4eXK1X5V9YKQjEgetKMzv",
  "key10": "49atWFDNkUrwhuAVwrdaFEcwuHgi5iutcJhjPfa8pJCeJSv6k2Dx7PkEw6zssgZSkQVWgyJjn2nt5Q4vHNpvALsb",
  "key11": "3DUHVakQk5RgjvgmGhNfM4TPwP5qRHxg4apfJRjaSRWy4fTwGZic6xw1WY1DDE3LjWpuUpCDe3eJx5aW7u5kJF14",
  "key12": "N3emXRv7jN1p2ouEEkAh832UF4ti38YQHfKkXnRmWRWSbSih5WDGUmwYMNiXoo3RQJcUCqJUHx7oRSEwqgWoAdD",
  "key13": "Xstjy8QpKwQvctu2KLa7tCn55kaJx3xxYPSWecRSzRswoHwSzoTDYPA3odrf4KUQirhpP2iQNhHjvTSPJWPbk8Y",
  "key14": "27RfsPyKRJWF2Yb1NtaNUc6nhLszayBACRhB57aLQMfJHn1GWyuKz5WsKTuXdHWNqcuiJPkjmBA5djGBXa2gU1XC",
  "key15": "4NT1qRL7Re2DyXcRoUSdTwuy2KwkbHUsRz5A9X5Gk4efD6ad6mciX7PgcJVPxFi4XGXpmuWFEZVvTmXD33DM4TvQ",
  "key16": "5tXvZhVaGvK4EhfNSpPB6wCqbnbyWLXDrMDWdVasQ6ghqVwtz8ZGv46fo4hF5UPEhFAHmbccJcrxVnwnwqdLpU5i",
  "key17": "3VYDSLp9uKYRvCqD2ugeuEAam6TDpyf2DGER7JYjJ6SuyjkLKFk7h5QHrBuZFRZ3ud2G3P4h2zjXUEiFFQNBfBSR",
  "key18": "2SXhELRVKtfGpYhwNmuK67MjTjh1nX3jCKqAE6Kudypm5VqtQirKsZFfEthqgpd9FbQ31Q381hiCvB1wbJpPCAzf",
  "key19": "5koFRrePM3LcYTpzGK14qnP5R2vKcwcejtgc8svCp1LMXFB1X69fsy6Mskid4qjuzuC9EFRLAwXMuvzG442WFLrT",
  "key20": "4CeBFpNgid3tqy4mkTwjqjwHrcErs3BUoAX7cVbYC8M4ZUGmyVxGAKScGvRayA8967ssFn2vp9HTDGS57sREK4Zo",
  "key21": "413b8yJJUtXw1LM72izYjR4f9NrzsiwBReV5JnZNGdf4YB9to8pnkvr8Fkdt7V1dK1zikxvr3r54XZAizXDFQMUo",
  "key22": "63m4UUMSh4ckzMzQazJgHVhcmezxos341PRJdBJYPiXpjFX7FL58G2XstLH5Fve2PFMMtYDHUSympkyrgWp2dAX7",
  "key23": "AZUhcw92NFxn6WzbgcKdWnqaEbRHZgKhrddiYq6Z4P9nQV2ncp2mD5j6aYwbrf5digHNSge6bwTybKjrjXKLXUC",
  "key24": "3j9cJFYVJZ7BkWAKCA8acbxQmfe2Kvg4WfADfm2csCrR5xsS47fw5GRTpAPL6Vfikm4GAnTqMCfDVMYiQWcfE2Vq",
  "key25": "29jmcG8bMvRhBnQDW1KE8qV8ncmdKsLXwy6aNWTsD9ap6m76iMKgyYaKkh3GRGJiA6cxkmqocXXDTJ7rGAKb9t23",
  "key26": "2mNZoZdZmpBvQqGpzcEzu4W1zykeagZonWkLtwd5ASNcS32ZGbv6Qs1rYGYYmsPgvguk58aDRyY1pPkW6LPXqiA4",
  "key27": "5gZZGe98SjznKE3TD7hCrpPnuRBPngKZ5Xj1vFcEmb78Xrqe9vtqfp1TXNFE2KfqhKutKU4oF2zmD8oAvdCCuz3C",
  "key28": "54CxgQepAfyRmXF4KgBp2TBtKZ5cwFMs4LfaB7d7fYWJUPG4wYuDpUon1iF2ju6tTdCJzUkDqdmL6H5LYd1fprcs",
  "key29": "2rBkcbsqVodjS6WQi3JsX1wkH3qfcaMMAr57tNwoYa7DjYwnghkb5jYgPTWZuYxuKXPcQAdmUHpp4ZNJuVbkzCTV",
  "key30": "tVV2rBRi2Jv4MYtuAavnUzAGANUwAKHtN3SgrXo8YCh7YtvXddVaMsjUs7DCB4q9NfAfvaeCZmovZw9nQ2tv7ip",
  "key31": "389NHu2aXvvxRsGJ7j7LqTzLvwsCFWNKLbG2txV6gYFtKYZexdH7KURVc5iYcByssWcuwHoXmJUmCLfLHeYNfcv3",
  "key32": "35aytEyKwpzfikDSLCEyrM2qou9muE2ymM6aYXMf55TudjMkQ5oVfG4o5AsHEaACBk17mMVVzxsx3mzZsqwexKLu",
  "key33": "5qkYtGQBQNEq2NeH6kGT82JZ3x3tKW8XbStLoaZQYK2KDz8YCFQkrz8Dtm7KLY9qJJbjd4kGkpPoBncA5eWakjX5",
  "key34": "5vCP1PbRMAt2ffSCxDsFvN8K9mik6zsaJbsX9uF71u5AzpNi8V9FXdNdVmHM4zzqsZH1Z4p6U5RxGkkvsbapBMdW",
  "key35": "c8xn2FsKj5AsAqarjBB5puyDmAHk47jq38mGMYWWX65PsdgXEijAdKkasL2efQLgKBE1GBbfRTGN4JsWc8wgKvh",
  "key36": "57K3vTQbUPKSXiNbSHbGufy5Pwj2uvLetbGQn4QG2JTz4nVNSwHDNzmStpbCAqUho6NTnoCkm3EdBUfyCSNn6Y7",
  "key37": "VZCG6bGvCScchWvK2aFx8G6dW8AgkiaWqLCZHVW9zKY7XxjqpVoUF3XvDf7aYUt4riKLiFP95xaQxwrZfnKhkSP",
  "key38": "5BRRF5JPGTxkxwN7y373yBbRnQVGNghZe95KnXHhUVx269DmjVoaYeNBGMcSnQE4c4rgb3pUKipRSZgo6RpqEiq8",
  "key39": "4uecrfwZv9CbqmvB45HKsJSFTkcTPCeKoqxB1353TFfX55Yt6XTMQ5pXagfJrn9hSQ9s95BdM1N42EkjKKgvYRg6",
  "key40": "4sDbpjDFgywu995kCFhs6xKWibPU81fpPbvyri4e51sCa2rNj1vovvrHvQv94BQnkKfMMfK5WFNazaCREpRvV57J",
  "key41": "v8Nsz1kwqc6TPdtHbr2kPshcrLjHs2i7kKXSiQYpNMWYSzGRvVhhCJcW1e9bDn1S1dHTkvsQ6dpAG3Y1j8hQNjW",
  "key42": "2Yz6FnBQge3D1xMLDruTFabBUbwTFMRAvtWWbGJi5aPWw5y153f4JKE81wzjULY8g3K6eQevpb8D8ST39YBZatxD",
  "key43": "5p3maC39azNchHZ4d9vz9bvZuXMxRf41jbK3whkZF2XyrnkzjX88g1vFbTKWUcS4eLRNvkxihzwDDxzWDPdqm2Hf",
  "key44": "2zt31njQk5Et7svFKpu4eakjeySNAduRTLuzTpyu2B7ERaDKCYsQpQkcCGJzWHhwrg49szUL8dwekQTgK71XsiJN",
  "key45": "2d2G8daioJ8guZKGKE69CQLs5nKtQmQc2VBBeCDoYsgr1CWE6GdMCu8k66fdq43NUckNhmyaK38J7uTwirzCGBwv",
  "key46": "2cP8VgW4hXh459ew7XjFbifvE4Gn3H9CZL9JeQthbsT3J6rGau1QHVFUoy71xjj5pr2rtLCbaWmoR8DifyJWkQz8",
  "key47": "41Kxmb21HxTpimH14uSbqpUAWbWU8gchh5LMig8vwfCua18cuWbqe7WEYXSArmH2p69FeeCd8fmKymyHpvmBeWzu"
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
