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
    "nqjTNb8VQD7TR7Hs2DsXM4wfiJVwqKwxTRSjqhbJZdTzUGCZJNs7K5zd65DNeR5YKFAF2NfpXFMtPrfbMN57upY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mPJWa2Zj6drD9TXjYtv8gH2d2hGjgQXmQ4ASGJVhsvgiEX9X692GiCRcHUyqoZj418V34cd5eVQXT9uk2oX5MNR",
  "key1": "2cRSEqnPFLLJB54a4sKuF2Zt6he1qMP9anjroNaYhEwrJutWBLY1oZa2QqQ4nkok9pkfMabo8ic8VQaTBuaJMykN",
  "key2": "53E7kfFV9VsG4Bp5DSZTfVa4vDCZbTKafn1RA4vx4abqLoymP4XgjNeo9cFyBjoq99zgLg5STTJiQywN5BEBR7di",
  "key3": "5i5jZmACKnWRf95ssW4Lf3k2ps7uApHn79htPf1q91jhFPjuefRGZKSyAcnKCU2xMvj8qboEVJWvYou6PL7sEMaN",
  "key4": "2GVftnmj6jYrrMUPSJFsWC1F8Lgt34sxiFe7L554Xz7UomRdkwTA2YkLZvZn9TVYjhg3oy2XfJKQoi7ARbWERc4t",
  "key5": "5Zw3UvjJRPGfmqi6BMB5QpJqiVo9QjGMtdzAw6NjSpEHERaLzVJb4rvtUnu894a46UapGgNfBciiD8S3w158nUrr",
  "key6": "44iw795WZ8oCuF9bs4xWt1zz2JnVK2wGmTYihacjYtkZWutxcpp4qmteGr6eQ4Tg4HeiR2iQaexkzGKwVHkfUSt1",
  "key7": "4ykf8QEA8W9XfsHBkc9zEaQ37oUXgka4Uwtq9ALanuSbQav5FkXcEnBegXZSauos27JKGs3EqDpWawSo4AJRjRCM",
  "key8": "zAuSt4Fq8cLDW9fe5CKAwjvQBWPsJdwQJdb9j7xoHErPBd3cGJUAk2uhmNpsBqU8YGRakVgcg9jAhyX6nQoroKQ",
  "key9": "riZgjub71EkMa8UtkJsmL7L63hs7X98RyASsb8XAuuomz5uHcBg7mEzm2SzJ5ybhVjwxAwmSEtgbvqcNF277Qty",
  "key10": "5o8DCUuWLeRP1jdmqv6RaL9ginj3X8WERMA5FLds9h7jhjhXbvVL7izMh49HWaa1anFeFjrJBLyyRp4nDwh8v6Gu",
  "key11": "yfzNSeD62WchssGQpG82WY6Ym85PYSkZWvkVYw4MyoAsJLdXWhKQYV8mLEieznpppzmv5GoN7LRpYMxbyF8uYU5",
  "key12": "5p8RYE1anHkArFTW2ovdKj7fiDLsSTnNRpMhZa1xvmGPPxqZUZskSj7wprcVFXaNn3GE52dkbC19W8chQ7hnYZmU",
  "key13": "2BCAQ67aoBQbEYqe7pVcgts19P1GeBRCpXax6Uc3sZ38Q5vzLk1mnLJxaW1Ms2k1rWwixbhvyZCqcVauGFS8qtwa",
  "key14": "58AwshyGH8Sizn9bSRpeLXuK57xZ4J8pQriGxwu38zJHXUYtXZqC2ooKCoo7vfvtKY5xnVyKrDskQTUUGkgTREVY",
  "key15": "4UsdkTSvANuD7BKo5JgkB4fWQbMEzv8mvezf389rkTRj3fLkvN8MBSLTGDEgRih2NCfv9Q7BSaRdZHR7ss3tEqr6",
  "key16": "4rczz76XLkDUEvSREkYSz5yS6LbSZj9YMqDSrAc8jJCtPw5bUrUBGXkP377MjNeSKNqQ97KVopjhAyYqirfs3Up6",
  "key17": "oBLrfHmKhh7LH28kWkwyQTRRTUKwDGaaCStm8YikvnYDigx8GzcWjFxff7WiqsAQE2Zffvn4x1wha5cJkD1hbcr",
  "key18": "567Hb6zNJLYstF7a5mfbZqHVwG8GPD68yvcLEQXYs3eSrjB1PMFsY4TeYygzLbDqmvHGUSLmF85io7Fmu8AAtdkK",
  "key19": "2NjAAyhXjwXT67pWax7GSen6z2acWnVfC1p8UR1EehzX8wZHeYtDvr3PqPYQLh23rf8s9jQ8kGzdB6ZRRz9zrzgE",
  "key20": "3ooMb5ZCBGvdFjo7cRretuMkCcKt3Yvp2DdBCx9pH27jpnkHagjujNbKzUdcLhrXBvBJRhznU5XxHB77WaC1QH7N",
  "key21": "39tmMb1hdafkVtiD8w9iH8ejmHukWApRKetnsirhXT7UyfSbDEiw1XZ4Tsk8B7UngtmxJDGKPZXjm3k2aEGLNrjQ",
  "key22": "7jLyiXeV3uG78A8DwCNNxEos9qyEPVodnJ8ixF5Fj3D8hZ9pu7656eorudj59AF85YD8XBupqMBX4HmKj99huMa",
  "key23": "sggQFXva5FaPLMfMn7JTDA7eP9gJG97cA7KQWCNZmYrBZS6A4jiC85sWoKb2nJFGJcTtbeKPZue2UePNHmHu52a",
  "key24": "3M35p7Q29MCU4rLjHP8b8MtMNzRoheuBqvojaJnw9gR3B3ke85hRrVZvCxFE8XNtDU4EuPZHhHxuEmaoUuFq8deo",
  "key25": "45jYAUfxXW9wxncM2Rh387Lf5TZnsE78fmrRGRVGWkumhci5TtxtZCp6RG9gicGCRhU64ou8vjpFGHvJQyvcku4w",
  "key26": "26JQFUJtMRt1qK9z6sKKca1duaEjYMK4PbVMWLKsauCh1Ses26RcQe2XQPmMDjyorz2N3xVC5n4a78qp166mak9n",
  "key27": "25VL4iHFjRon1bdAZTHMXNQG9u5rrjhfWFrEDCtVsiZy2jBYmvjUzxjqGSN967d6qixg4VHmgVSJgTKJZH419KPU",
  "key28": "2n3wkoYBV4NrkprphgjgZuxZZCChxssY5t1cmayziidkmQdpgrTMwEz8MuWLk27prU8ESxuHT2oTnJ2Rq1pgt1LE",
  "key29": "ue6gfUajZF9kM5YC6o5E18gDWxQpZsNBV7Pp4eY9YwPbxDj4DTfFsgbPupS4KR3EDur7QifYTcrxpEYmxQJ3eok",
  "key30": "4tR7Hx9hzf4S8GcDV9UTgTxnFbseUPBvev8X8ZbrVCeGxv32B3cDRbTgLQR1CxbaazqEmnxkQoG4UwD5ePTG24a4",
  "key31": "23c6ikmAz3tesMr4TWQBGjbcRhRZHAmF5ngkYXw25xP8ZJX81zupncnV8s4nCPwqoZ6Q1dedtAMGs2JxpNkwBH53",
  "key32": "4RM9CceRrohe9BpQLZGUg3mRgG9ZKBGXas6H2pFSUqFAF4CFoT48tXexu65U292pb7TvKkehWg4mDB6BPBVcvmpc",
  "key33": "48MXfUSSM4KVbW3RMaZNCPoPtcXg3CBUBpXQ9H8CZUiNXgusYqr2nUUEsSSfEsRnAfSxz8mejphA14pPpeyUXEbr",
  "key34": "3mVrHPPLXq74HxZ7ywcnwgY31xvZrdAAMiw5CsZrXikxRAPR5i9YX7GqE9quM8amKEyRZnZR6mHPCT1CJPNwfBnw",
  "key35": "2s6yYadn8r2zcASfQjAfXoFLZ37vPhW9B8Ei5MQNd6U7aKfPyb2XRKFn6t4skiu1b2mUcLd4EgR5JX8am5zDN1GJ",
  "key36": "uCJg4vgxkfVaPzR1NEN1wwCfJYnqvcHrnF7a1upXKbgs6ZYDioZw3t1C4ukR2HXbejz1mKVJ9bbHtzhhu5AhGu6",
  "key37": "2p1FxWft1RqF4koRcrbRw2vumfBHWT7FCXUW38NdumfJWMAPMmmBwzaPirNSL2jC2kd2d5gPQYEDPuVD32m1Mcnq",
  "key38": "7nfvUWgnHN3C2nkQFV7vsiqUSH5wbHEz4izkiuRjMiSfrBEnGxvGzYVYjm6FyyGEUKUoRezWCLwv764cexx2efQ",
  "key39": "QdrVq6pNZmHgAy2zndvsM3vkCSRgB8Vm46vcBvCNUZSgu9fzMjrV7iu9Vup2gnAcwy11TNhc3uree3kJJjrqZrn",
  "key40": "4LcZzVUYxiSyVoT1qgUXCVG5Eypq6a7YSV7mF93UCMmey5NB2TWhGDVDxRLosxhoRZtqnEAXBVaAVUTVKtciGKkE",
  "key41": "641cdzDqP1yumcT5JvNk6vZ7qCinhxzLDCiDQ76KW4GprARaHccmkbuYXiRzD6gT46JjStEHXyzNkAU9NpDS4xMG",
  "key42": "2pt1WT6b7MvjNB2k69ga2JF572a7nDN7ym3NkBcgx2ts8i9gcQKmaYeK5UvcSZueeDieHPiohMHBQ1QokARNmx2V",
  "key43": "ngtgmnsxZMW6nAn5S3r4W8YVZA1eMTGcobmDHysydTwWQKgmhBiPnv54iuUomooqvQXbFcitbt625JnHRtC8MMG"
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
