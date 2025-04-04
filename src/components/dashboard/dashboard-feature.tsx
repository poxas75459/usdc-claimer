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
    "58ui8P813ccjhhrkkfhoinaVfFpadzgLbp7HfA4qMLrXwrVEjFvNjATEHySBPYQCTG933U8jfjeDdodNRqrSqZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmiWsS4XR89sWxLxHPjrvzWz39uGgSYgoqEfNLRo4cDSsUXabS1kvNsgYL2RmFyn8rC1x26z9GKEXbsjPViRWLj",
  "key1": "4rr6AWp48rucDbzYsmogMkwuU8MhKL7WoLN12gU9RkLGzS7UX8Yrj3k374fSy2mxiwsMRBFocz81DMzoK4P7D5wR",
  "key2": "2zTFq3oww3ujLPA3QkmkQcBu9z764VUV66gWxTAGHVtLBezEMcMLUfuydmu18AQ3JwHQunnj2ishUEM9XgzQ5r1f",
  "key3": "4DtTFBqVfNy8Sk7qxGCwtXbn59k9mirMNZXWe6BjXt2UaMJTnnYNdLMJthhXfga4mpCxwDHjQuiH6CvtgFUDWsFf",
  "key4": "39fGwCweZoDBdu7gy9vDpndYr4CwtDuN49T74pk3rbgA1jC34Nmi5d6Qtb6gHzu6brWsEcDUNqfVUmnbHDdZ2kPC",
  "key5": "br8DMHXmZCnSNrPiUxcybRNKTjspx7TPUKFqA976kzGWX27APa35EehMATvYKHPQdFRiwavwTQE4jsvn1usJqXt",
  "key6": "3y6s1PhwQqi1i26zxHRuSZPWfhAkdE67xWzQaxaENwo9pEMR4RS6Mt9BaiPYG4wrS1Kzw4ktC3QX87wRYSnJKvY3",
  "key7": "2nBEjNYEyhutqC5jWQLo22FitKLgtE2m8JKhrdWJde33556vChogbpCwnswwiagxRyBEZsb9f4voTbgpCutpmCmS",
  "key8": "43gG8yVPZ7WdVq7GhwMjbJqqFtSiJPQXy4azurvPuqmMHqdcPTiKaz1gB5D3Wc5KmnP46xAg7zdyKDkHLHf1bNv4",
  "key9": "3hks7isd52pDMjRSMpgBQXAS9VoJrA57nXABWmCV6u2VaMtqQMsEkEamut4bDnUZ42GjAdEfMhz3DPwJsMuoXg6Q",
  "key10": "4vDRjm6RQSfGkp8FX8fEnTF1yxRexUvQk9hnXBLztUBLXsTevEXrastyoScTnwnUotwf7eVs3MHBEzdifo1hYPs5",
  "key11": "4R2CCUbUiF6GnsyV29p8o2TE5pxRvBmepAeALjLK4KeKsxwUYSuG2fz7qpTJQ4XYfcpLCzE4K3ZK7A3ag4gZbDSa",
  "key12": "3hPzDDqzwB1Ft25rLaeYHEhpYtax4L22WVQn2TwCaNGU8umTNMkaGkUXTL4e83sCWwN5LmeddrQ4Qx3BkgZ5Vmh1",
  "key13": "24Uh9nR1jowXnghKp7nKnNuSWQ3EoKVKtBxy4Ew2mshPYmFwgZ6wXX1NjV4heYiVNt9kSzZLBZhcDNLurCxQSrF2",
  "key14": "5vnig6jBr2Eaxc5xu5LnDfSrhKDRtSXobDKBmth4JHrnXbMFKjTXbJaDsV8fjHcKGV4DduUoRmvuGX17fLHmMRqh",
  "key15": "UkxATGjU9MGLzG5AFgPZe1d42wJLcLLEpb6gub7XpEApXpGNbUCAF9bTnYrLX81XHSw7oCYoSC97REL4At6Cx9Q",
  "key16": "3xWw8y1rw3vKdVXbx2wBQUyaEREsT2X5br9ccgDGAYT8xvFKqhJqjwsrdXAX1oxNx44pQyeVBgsWWX9TjW3Vz56d",
  "key17": "5UDwmwcoNFbKT9rpeAzXFwTKvUVY8wo21JmftjXMarw34HNpf2f1ib6TepCBdVJA1k1tB4GiwZZn1M6DGYXQWjZS",
  "key18": "4AwS7zh4rXCvgXUnfuSHifUHbazkBQdse4ftWbvR8oUQ9h7JQRxCR3Rg733RRzNxHkvcB4n7PvDDj6emdV7Wsj4j",
  "key19": "241yBR12hoTnHvHF6ZVJrMzSgD7T1YG6qgX9d3NthK3HuaYN74ygxA9NYVqrs4AY37d1pSHGjNxEe3Ex5HzVwsJR",
  "key20": "Fhe1r5dgr7TDX1fShrQp9nh1JoGpzqigkQ4ondhow7qK92ifh8WV81rPL8KjqKhik37XTvUYEfhx1qaT8Whj1Fi",
  "key21": "5im9PJrwzLp5bmZbXRDQ4bWmpngKFfybGQcHkBSRMR926pn9QDaLUxZWSQQqjypi1ErUeWrxbT4mS2KHXc8tg9gH",
  "key22": "5tPNg6Q2QofGTNfNfMhV3SNohFBFpR7FspLYRaKwU99joqLfEVFWRMk2PH8zRgFDtJPf6G4y8DZWFwpMga8qQtCa",
  "key23": "1cjZi7JckYMYF2dT5d7GgQ4k95qc8ANEpppjxRTMQizmtxLyrSjN7LQ7KKGkYRhPmqEJ8JKZXM5TDMGKmeuPAEr",
  "key24": "3ZZQfjE3g9CQMLh19z2yaqpFzSjbZcBzYCz74BxbNgbTbSEtoEmDXBYW2uKS3eCAPwrR9JjjqzPQiM9psJh8TLVE",
  "key25": "2XyjUpQRBvHJsxcTBKwZjaMQmAjM8Gb71Mdsd8qnsBCYaRH8u64WadFNgDjUEniDWwNVgJ3uCdrLJtHy8UY5QfMG",
  "key26": "3u4UbCZJzBpPS74wLQQWcraAfoczaiow7SzwdxoVYVLt5oWmvoRnDV8AJWBwZW7yrJEKiB5mH7Dys1sQzmeaLwzp",
  "key27": "2RpwVHfPiWo9MCqhD4R1dnf3i88p5AEQKkcRqM3EcJu6yXUpUBCWXPUVg3Fdgw7TNHduyAz5mVzJK9FstAW1UhEo",
  "key28": "5VXkSmUhDq28S5QJzogX7GxkVtuNpa3H5KgN1uAc3WBhUXomX5XGUF3i6a6vydCPKxXYjMJ9zuxUdHUR35VECa28",
  "key29": "E285R9io4bhKNYArpznUKHDdraD74D7CwZEYjaykVuXhW7s3bvtfAGcz4vz9w2dpKEn5ZKms8wbgQ2aNDwFUkTy",
  "key30": "5pYLdZdnwSgJQTE814PcqeAV8yUD21oJSN1NACdEw3PYygZZvpaeVd6vUQN1Z34ua1BC95ZuipXNCLvu5eHqXgBP",
  "key31": "5dZEqyRG9GGqMhgJVGFKz2ubkkuJpx3begvDy5Xpn3B4jjBFWY6qqHDbYjeadWmEAm5fhfCog82r6J5J6mh2XfJi",
  "key32": "e22JiPXDxQgqYiEZuzoYX2W6ugutiSYvfdB793EjTNYWbPmF5xsp1bGJ1EhKyAFvJenjMnFitzHq4JYSXuoR3XX",
  "key33": "6zryk27ezpEe6Hc5b8f7uyCfA2Jz8m5rFh1RXeRJqBMKBJmn3Ekjw6ga2nDrUcvHeWiFWztyvbKbwEbJTEa8qEv",
  "key34": "2hJGqaYsxTKELy7zsDyamxfeCBvDyKUqQubm4Vuc4FmaqxddW5paPqES8SuaZf1TCTK13LxucNYzqHrAkwNvhiGr",
  "key35": "2Mj54Rw4iEqzw2ECHJFHy89czbj1zSEVjhgXM2JuMUaXYveaBpvCsqnK94NWt3XGajVb18KWYe56ydkcsGdXQE1m",
  "key36": "3k1XK26bDrSREK6kqsLnrApLzasB7XTrRLrdVnd2ZYiLFQ1BAB7MECUB965R7tcb7ndCvrG4NV6rvWZHgJUCHVgD",
  "key37": "5LG5oLmYiqzFpP6phP9jt5DJVaUvTQVwMQBpbZ5ZCdxkwrTWz2JAzKiXSJRhkrZvSw4pUAh98t7fhetMUUstXhHa",
  "key38": "AmeHSwJXedmGq2WaWRhkGfZ9rv1aPgKCvmrfCAhw2o99gshAxwUYAQJQCQAkXbdz3SFoTbSY1j1qWYoFU7DEa24",
  "key39": "4wDLToMu3avSwwDSC1mQ2DpLBtLGLoERcCnKzQiDBMeYDTJ8qAL8TEQMETq2cZVDpfRfjuysiTBY8x8MXMbMtJLN",
  "key40": "2JwSqnV4HkqNiVE5iFzAhTZJjdWq5sCghzL2Cxekt5cFoMCANx7UU1yf9bhSD8qLyt8oPZK8A8pXaSYiMc3ptnmU",
  "key41": "2grT84siRxoms23zMnKTUDwwNHyGaVtFTw36xMAinxRJuWrvv7oTyugvoH4VkwYN3Uo6oALnsWPZyBSsLmawWgjJ",
  "key42": "4vLrxhm6Mbqw3Guz1eJn73kffB57SSJKK9WxJffhRCGcE7UD6HNuxyMRCKdsbsqdVCFv4UrseYwYaBhR3p5bTy11",
  "key43": "4gjaTSEAAowbG82WKMFzBsSvjjctFT3tuJzL6CQyCkLry6bpEEp16QU7zVQtijVwxKpNvfxFtM6dUkjFwkJMJYb7",
  "key44": "32JgXHB9EqnWwvTnqTcV1TembAYJ2s4Nb1d6JVfYLtZS1vqWDXbvTKVuiunMnXTWwzQHoMJpcygjwVUYa21usjML",
  "key45": "2kaLSNoPvug9XjkBubEVqdsFiFCKdacHhSsDjpYwnHdQwGc7GHwJ5hKVzZSvQSRYNstc7gFKBmNdNSpCecwy4GNk",
  "key46": "5wyY9HvzKfcPnvuFZD9zZadHjQ7V3RqEMTtCqNFTHStKePSRXvYxMAjjrm49qdKkAQcLozT7Qz4tREo8PgS6hXUU",
  "key47": "3gfhSWoDNfs76R8fdTaKM2EJc5QXnX17uQMbTsfXJUp3k6JBfECnwEB4kgHB5A4aJxByYy21TUfS3Q7qRfAtFeBy",
  "key48": "3vVRAqpibgWec645zP1571BzTRLLUKtssCPWPvTNwi13NfkTzDRoUSyqo52XT3b6ZNvbZrehwNcc23QVGQDmZk19"
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
