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
    "5k4RYYviMg91TbbR7AePUJX6JpeWomQFJW7xhbFEk4RUShzKVt4m4ExcQnDXbuhDCoaMoMYwRPaaK2qC8FCUPKf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZSG9jrLSonMcBf2nGH9qfAviwoBa3hWFXVkyEt1J4TAKazU5ETbc1Mn2i9hWnFoqM6ABGyi4Vh6kk7YQaffohL",
  "key1": "5jxF5rYaeMJwDhFqEneoxuWGcJduGU6TheKntvHyL9S1MRkjRqMZrk3yGGeS2W563qeJchuWRQsYuKwbZVJK7aBh",
  "key2": "35xAkLg9EvkuuiBQddz37E65JpqckkWmiLnLDEgC8ZJHfKbDzDQX3tp6VtX7se11ugk7d5wVuyCZWsaX8E7FzCee",
  "key3": "3ecRdnCm6MvUspW2R3eY3raHSrDeaAin7QbccVguNzA9kWTbvVEiGnVaunnwAppaPauH4tx61N12BexyDDb1hZKF",
  "key4": "2gXdMQVSjXFQ7auf9WL6swsHsHLrzWWtTscMSNpB1iM36ZVHenC8FByGBsQ5Y3Zuu29GH778SqwxjbauJy5mxMoF",
  "key5": "3gTWkL5AMGKENtD7jrELQZdfiAESYGcAZX8jt4hGZi2zLKzmKMwJxe4NmvdnmzeGbHqjBFFZWAT1PmrXoCEQrZaq",
  "key6": "2AsPDNUERijYp3QVuw1N92THas9EiC6du7UvPpmFbRwPgsSNu7UmGcZrYyCTRhQq5RuSJiHu85nG1dah1gYt5MpR",
  "key7": "32Y7p4iEdtACUxKLDEiJpXnZL2iMxQWxrAZg81nixYuFfSDBwJHy6cMXz9maozhHpcrPwPPG2YViX2r1vPVjPqr2",
  "key8": "3DFhjB9jM8WCWbGpa7uSSJJDSJQN7K9eCbTReDKEogwPCTdVN21nvn9jKQtQZaybFeSo8TEzHf5PPnHaFXiptun8",
  "key9": "TqcQYvRkanWn2uRMQmpvM65HPp63anbkhz6pUYGeJg1WzNYuQBNKJUoAjNrkGrCW2GzKLuWrLLw2DB7AxXLCCfD",
  "key10": "4BhBXKwcXpbKixNn6jTdksvbuzqCAUXtJ7gmmhjm3zGXUPBTkNLKzRdigoPskDHevnoYGxvBKp9SeGw5f7TzQ8CD",
  "key11": "3p7RSuZfbRGQkpD4JSnUaQ3VPgW2BJCHxSB9XnRXtMCp4RosfmejXjfJR8N9FEcbiwKhH4ttfZ3TgB14mcScWbUK",
  "key12": "4uwK9DSvS9LoPSQDewqohd5TgYQBK7LKVptoGiGpoxBRHTPeK2AgXtcnzvWRThT7Dxhdp6sjuQ2HuKEXUVTKn31U",
  "key13": "tf21bGw3fJRQqAKeBPNRpmz4YxXECy8v6DrrnmR9z8ArB2U9Xt2bAxwsjbsBNFsse6wZ1KgL4B1PByEq8EWzwhd",
  "key14": "r87s247SspadgNEiwHMhwYQXF4cMuA39VveVHqzT3jPDzjVa6MiHTVgFRZyaYjJU1vdiSFAVwA919mJahJtCBUE",
  "key15": "3GU3kwcSAe6TRER62FXUHmiQaofCYqQcK5dGXur8JyBYvpeErRtqVLHH6rjbDvqZJdasKpwcLGJdJosy9VwWaMMD",
  "key16": "B8FpeqENrHkR2sqTTDSfXSpFCrxAJT8T9PfqDy9Erx2FKSjuNWgSFUYDdFAV9qxW11x44b5pm6uBvBLzYvzejEL",
  "key17": "4cNkwdURm4YWUiMbqCzSTMf6uJHCfxkwBg4KrEpaagmjYxKTTw9bdmvKkquGFmvmeUd9FiGZFLHwEZJ8MHvfPhEn",
  "key18": "42fMhzzybgaeT5VPbPahCScp5DaV1yp1yXSmRLMpMHrs2EdVXdi26Yp1mSAmFtM5S8bUpP4978SCxych3u2gRaE6",
  "key19": "4TT3yrh5vGyfygciaxq9kBmpH9QmkoEfbDyLmQ82mDrRGfsGcDHVepDgkoXxbhUCXBD76q3phNd1GTyD5khzPSwW",
  "key20": "27MsxGCpTrEUSqsjsFDRZ5TTgFPkQZvd1WiA6DxjmaA9Aai9dPKrVKppnYZyem1hzf8YhncvZEjQbioUHKfMK8MK",
  "key21": "28haSH6Z4WS9XiqFoGuNCJSACApPn4Veq6DSgxwrdmdfbaMzmz2UYRELFweNLyTjWn3JBpYhsJLbEeRmR1XuBR4H",
  "key22": "XdoeeQ4Cpk7mjgbgnjffJpG5jCtBfvveZnJjpgFFHCUESWyvRfymPvsUVgNgGJt4i7an418MPQWzyVy4Pb8LY3q",
  "key23": "2NJEArfvkvGKsFkvfhyu7S9m5UGQ4vHG8KDELUro2YgBW1W4mtAjuQrZDGoL1hASi6gEiPGoab93nrJ7ovXYEZFg",
  "key24": "bveZX8vrQQWjM5NpyStDBmsoVyTV39rWxrDMjnUeXJx5iWfBtmYSpKNiKujDs4bPgnyUiUWcz7StsgQjhc3xoWD",
  "key25": "4pc1uGne8WBLNuiCAzg5tsQsh1J5B3NAKzUQvgoa79K4M7wtNjuUhR8Q9aKNpH4QGRn9USxhrvGg4qkXeb9DW1vo",
  "key26": "3fYhmgazqy4W44DWYUhbWQ4PJDJRyiY9LCZjGh3z9gLrLoWo6KkonzUD4thjqdYBWV34zfEpxitptzCJGhfC63XX",
  "key27": "3mBV2SVM2JL9wpxJEqGgmRTFDSgfdPgpHUcrbDhNsRNtsKxcu6Wy4XAtDAQMR1joVHfbPyMxwc9p8XDoB38kqQLP",
  "key28": "4qAuXqjeyAjHgWaSnVQ9z1axSHpKKf9bYvwXeMdoxBS9rDyU3JJYD9XJh2QHWktUA2mJwRuwfLyR9XimMCM7t699",
  "key29": "2VKLK6LA9CXapg1UGNnGQ2bLrd3636RJSUBY6o2HkECmtTBX4AM3HZEyBpSHZYbxzwRLsUMqyHhbnahicqDgkRoz",
  "key30": "2uWcKNDcynLozPZEK147hUdec4oN6CGdg2z9MostN71Yv5wx5ro7zJjQdY9gesZeXHMB1U9NjkvoyMQ9rTctpV5o",
  "key31": "33gZqwV81eM2MGPDRjpxJULK3jYPtzaWJUUqPsyaeAydSw7yaYRHnrzSfBzTo66mvYbUyunA7Qu6SFDWr6y6Cd2s",
  "key32": "3xGvDpis35jUakmDgK3xvwpbY49XhnrKn2XcwvYSfe9BaQhojhEVC212GfgSskuRw7PcsZAicu4dF21QETsavhD4",
  "key33": "2r4cc8XJNkASqh8P8Vf8EP5uXPbQfv5J4zuwhpL7kyRNDUjT64KoXwP61CnkG83ZALATcyUAtXfdvFLBT4LepATk",
  "key34": "5doZYidHvDief4cuKgMpwAkDRALeaatmEaMbmMV3q94UvaA2gJGzKVQURasDFkKiKpgAxz9tqQCoEiaD6c9Bs2gX",
  "key35": "AWH1pxTFtGA2hQ9q6mAEcmvsHEHUNTNiQKRfS6tdz4MokMcCiLCeppxFjBQwnJ9B8nkF9wJZRAHmsDGGzvfhATZ",
  "key36": "3rcFh79tciKkGj5UeQL7Z5rQXiMqfZt3TqUT9VdJ8zyg5eh3qHAiNvAkrp4ugJf2CT5HWBDP91PvYg3ASJu6QRA7",
  "key37": "4msWRGounC3aU4cQr3ANQnTCv22e7EfSNtbqVzH4SB1nqh4kyZAWQhHwYMvtxjXug9fG8Zk7VuMkcZ97tkoE1c2K",
  "key38": "4v3S44aTm7jpUaxQeLZq1mCuAkNkTJkRJ1ATwsZXmzG8Q1czx6UTCamhGLXxTERnCwYsQRLZWuCXe2s4exq4vkoo",
  "key39": "3AixseS8ZMJhBo8JKj3CwpJoovUqmH2bBA7N4KTgrFvab4Ft41FVjD3zgPvQUthsVHDk9bTMoUkNNh9C7fuVbXPu",
  "key40": "4oNb1xwWV966R65bEZNcf4Zd32Sq4xUvKtDkr8giazTtYxgXc7wyHm2eq8Qv6JCu5RT39cxTrAyXuvQVhK433c7a",
  "key41": "5KSrC4vZQb9qvibhHiC5hiboZq9bs4BrYkzrEnpBvah7aCB5UH75swf7z8JEvTnAVBevyu7Z6BJ3Qn5JLya8yuom",
  "key42": "245Sh3WnC6uLBdrFQswxZneampeQVMJZ1UGNFkoqUiUBiouLXoqQGzZWXEwwDzqwyz3hmDQULpSb6hrA8Ltw9iTf",
  "key43": "4QepSZDLMXchUXHLQk6idKUAGPYrZdaH8zqfMPqJhg9oF9jNKF41Md4BRZwzrAk383LYW21hqa3AMe6r33CdndEN"
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
