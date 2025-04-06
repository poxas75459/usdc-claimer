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
    "46c8H6b5c9hEi5ppuJXjjg5AMqQTFkeV8UvAShXmM8VZgzD8RT525EW78ZQsaUPyMnmRUJLhjDbyuUwzbg3n2hjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zNLyBREEdmBWopPZLPuN6jXgQprzF4wRyWKkr2Q1QoRjXMqY6WKAAVwNKriiKk76vp4twuNCgC45MgKL2d3DM",
  "key1": "3J4UUf1eTJfxoQkg9GmkYnA3AjxHdiqptbVxt9x3f4E9RQ4oaePhBkBUuih8GDYMYqCCPQRRWaRTr7Pycfbnz6As",
  "key2": "5VZi3ciBLUph3tXzcffJWGgd1EYubuSF7TxBvDmXw2RVGWErEKzupgRRJybGpZ1d5EEDAHdHeCF3GhEWk4d7XBJ5",
  "key3": "47Kjt5GG9E1Y21q3kamhfhH4svMwwEVpEL4NNhehfVFNAJqECsN6bENpEVQfzBd2vedu8TmMjtdUsyVYtWkjhT2y",
  "key4": "5T9ZD5F8epKRnVF31rNfcKMfkQm3SRvXrqzpecoUZois2D8DkhRKhqDgvnqkCmsiRqyjA5KAt5osDQptkCYi96iB",
  "key5": "2TPtZqfqsANyL76TpgUDSWg57ugpQ8dNyzGXQRTtY8dRkn9evi56WWTf2ZM3gMgFxgDP599177KLqSCHedYxZPZW",
  "key6": "4AaGuTScxpebSMqmge7MWmmMNuWwFJA3YowYYL7pKa2bEK4YURTrAHnuFunCVptBuTcWBYVHYBKJwvJBiCK8BCT5",
  "key7": "4f63MwvQYoT6VPZ8m6BE3zf4qY9SvNn5n3bRgBiiVxEELKwmpDT5mKShtuEsbaFQMGvTzj7r7oARxySWr19ZiQCE",
  "key8": "3w5E3VE6CEVd1KMbYkgPE1VZn3v59sQWz3d1xhaonCMqKcwAVzMBmsd2JbjABnhTebWBJav1op4hig6S1U5BFMxs",
  "key9": "3JeCG63vyByUzucJ8Xfro7QXg1CwDYmWwKdBjLugpusNXDNZGVab6aCqycLQC2QWRwiWbVA6Dhp62Q3snsmEcnBi",
  "key10": "5Ai8UQTsRX2ivBqvC4M1RbNjmgQNKR9SeEdmpiDHfqK2qhRk4g68PkW5UhL5vMFd7waeUxzV4AQUSMYU4QH44Q4c",
  "key11": "4WJMNRv1gFkESVdUU7Dvg3snVMveoJ8josEwVyAKpJT3X1XXbopWvh4DnRDWP4iXgxLRXC5GKi9aMsAFDsVtxJbL",
  "key12": "5Z3z7rguLD2Dd3WmF2CjdwP4ipN5bg7RjtWWtwqXKaquaD6vdaykeDeQat4UpXnojMBAAF4ymrKSB2opZiDhonup",
  "key13": "4gX9zpP7cq1RR7qchJTByZD6thGPQB2jNHnABiFZ3xaTs3iNJso7TVN5c3tBgp3hduFHa7vFp6L44QHuKduGTfz4",
  "key14": "4qyPd6XovpkEfLUZEKYDm1AHJyBmDnG6iKnU2it1zBZeR8AezXE8XbBnRjwgCiGSfnXx7FqcJCBjHXLVfDVrx25j",
  "key15": "5nHnftmdy5nT8V9V7gAAk6VBcrWiaKyawtBTTf9D9VjMNSMQq8aJMYWBFFBpyLejkrK1x3aWsmKj5RZTtD63a5LY",
  "key16": "5w1D9v9SdTUc1EgMPx9vTsvun2StZD6q7pAxDSyhRguMsnQvhR8P3dTpdcxCHvXY2P4ZuSN9WLdpXYS92MfWv2JS",
  "key17": "3ASrtTsCG9bDmY19eM9h9qK7o8UqGhBqzsyNr8hYE9hazru7z93doG6jsvhiUc9ADT5BLNiXwbntD2Dr3T3BwCBY",
  "key18": "5XYa5aEQMLa4tmHWbJ1wDfNqTRDJFg8REJ2tRxKZL6TSvgoC3vP8iauYAgfNjFZWu7d96Rz2BYXA7wvPwYfd5pZ9",
  "key19": "5bv3JScgVscM8jdaBCh43pnvT83kxKEppvgYPwKREpDafZQn28XEYF22ArzuRmtpyU6ZYxVuLxpcFoivkiP7iV3g",
  "key20": "5f1CzueXAPv7RKBK1FSoEdcbGg48Q6AQHuQ1S527uzGEXy2hKX64F6enBGchnm3pKUJA4JvtSoui4SWwfhULHXds",
  "key21": "48V5cgV8R3j7E5m8oiSPHdAsnn85wcdi3YJFcKSrbgRYVggRddiC2MoYUv9E5ANpmu7Sw3FtWNhtnqPtSFDWT16D",
  "key22": "eLBmH5fpBWtTWcB81ZKotd9Ti3REprY28MWgE2RNPP7zYgSSXHzxodxbXJYUaKSUtx7o6HUh7q3J7ZnajSe31bp",
  "key23": "2EmaW39Rm2mpLrGzQK8KWjZfLeiSXqiTFccpZPTwiGiwMtqsidqdE3PFj3QHtmQnUeXDFPXGTJ9rsprCqLfTq5wD",
  "key24": "3jnfe7y8HTV3hjrJGvCMNhhtze7kNiR5hkQqguJDMrsKG2DAtNK6BZSJJ5ocqrCsbw8xBkL1sdmRwmtab4ZZpqvB",
  "key25": "3JqT9GcQTiSs4UoYEAZ6AEWDvFVX76XDGBQSg9Rk61zYfeGBkNYagTMd3TD6BXPfBRqbMZCm24ySSG6yM4Mzfo7S",
  "key26": "66pyqWrkFUMPQbqqucEDgbiJth2GSGv7pnhg4XAs7w7eULBMF2yBKtNeDdZy62tBJTrn2y9qgz1teGYkqQWdKVGT",
  "key27": "5BcwKXFbo3UdsAM6ZY1anV8s5EHgPk6whpRNGAh7RZyFNwJNbKQwwZHvvQkHG1GdcvyWqk71U7hmNM4DX3eX1jB7",
  "key28": "2YrFAkM6XK6k1rx1xFUjhQA7FY5ifa2SqxTrTTzasomf2Ly4wZpg6byDr5JjjdSapc5uotGVrjjvbGd5aWSEf9kB",
  "key29": "3PVYSA9izAec2qfgZRLaQMMv3Mi4qaCyyzV2YA4BCyNELu6V8hcWND5YiY38Z7LbJ76c61ihqoEQ2M6kfTqMB89x",
  "key30": "2vG5HvZhTDyVpQforbUAPG7YVGjsmkJBSh3U3nsNx2kawpm5Z5UeyUbPeyAEMCRHmRWN1h1zQjpzGAaoXMxJUZnW",
  "key31": "3RsWNySy6eAJy1QcVDb6AEtViAQ23Y2z3torSsatVL8vWtwUcDLuusrLGJUptHSA2EZiWxFMK42vZjmW1GYzr1q6",
  "key32": "2b5fwtcqWAh82fZcZo5F4VbZyjV7jk6xN7VqsdUbGcCziztbA2vEcxZcCF76fuxESYGeE6MfjWSFU86qMbDqexZN",
  "key33": "qbcjYc5m7HqrZrVtBJEfAGNhRYCCp3ko3YWMGyMvpHPkKBJ8Tegwqeg66JvHh2yKU2F4csWeU9N562PUv8ksUh9",
  "key34": "VJ5GsrbKAvq3L4FmgJUteTzHNJD7Fe2zmz5EfgqNd89cBapBBnoCdxauSHucBtRSNtW9EKjuJ2qm8eczUBKYhvE",
  "key35": "VghhBg6hVEgGTXJKbeprs3vZpUaf3R4YPbxR7LbM6EhHDEbvLaLcwVo4hwDUhmYsNVyQYB2TEX9RQRztWFZUd64",
  "key36": "2Che5z49Hu5GGdn3HtcJTQ34xwCpSbcYMiiDAsm7Y2atcdD1i1MP4VTnPM68aAxeSM8dvJ9QVsJDZCtnhxAF7N54",
  "key37": "5TiVPqtpn83v9i4dEG4qUKt8MeaSpgFzzQZw4zqPvC4nBAc2MRbiPYxC79csnQbXNZ5bH5xBzRE4sefacCEhXTiw",
  "key38": "5Egqt6C7Fz7YbKxncd9kiZGCg4FvL7hg3kAiBSF9vmQLaWXsmKQYZnFkJ7gaHDVcHhjywMmj3KFbtcrzRBFGLMUY",
  "key39": "4E8anKGefE782dT8odvyHeZmccudqbJivY2bcBhcrPcg6CBwoHFtaFney7LYFWppXm8LmYJYpTq3SQuM4NMHJbeP",
  "key40": "4LymiCkeNETfefemBqux9DFmdUSAVP1qkgicJE8XXxu5Bkwi5t5WG3XXviFUnwU6KTpvWpjZ7KT5w3oZMx4gKJP8",
  "key41": "31sUCQyewn5yTS3xLGqbdYUkUSgGyBoCydyph8HEY2Q5bVJAGws8EnJZ2WSRp1ZwV1aZ4rGHoRcFtx2UkLhuBuhB",
  "key42": "3qd5AJn4GjCnamqSxBvzDG3uUcAqR5y21WE5HCTZNXFk3cPJnEPmPYNa6yubE88ewqNKsGSrDzAqfrrvBV42ktST",
  "key43": "5omeMVEfyoYStY6uuHnSsehp7GJRRA7MZJBKtWXjWkAtko4Q69E6wfKanQZaf6KLWR3cjWoQsGjfmuHtd42t33MA"
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
