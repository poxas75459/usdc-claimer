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
    "3Udf22BS8LrXreDLX56UyJgQgNP5KvH4PEpMxYthmpaaTDXNz5xWK3Mfxaa44mRK25qtx9iLhpeHxrDFBD6M8PkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5AcTzaKFNBqwjbM9ens2i22YnGzGUqtZf8TeBMP6JXdEd49C29FoYVwDhN8vr5EGU3n9ok2GNbZ64Ev8k3gtGJ",
  "key1": "57e1xsTG3cnzqU1SZoNqXm9MPhQ2yvUZVkAjvrNazgFQv8G8WPrG5364ShCSqfkpCzd3AtgwmQw3j1FiXNvFsyUA",
  "key2": "4azykd5Y3EVy1gW5CVXYkYwD3d1yUKo2ARMfusfuvATVEE2Az64LreFU8QMCimJMcDLWemfsvRQTvqvhQGBjnR7g",
  "key3": "5Rvof54EReaX68sdGehA61uzSjuzTzUUCjxARFaVSLWW45n85bi4TXuX21J3UNKYA7YDortSD47WTrJdmUWRwh1J",
  "key4": "5YQ8sVtLe2Z5f756wcWTHMVzToFsmMx5i64J331Lb8x7YLMr8E2KQTVM5yuhBYioMMdHVxZp5QaZLaVMMPqyzGr1",
  "key5": "55zxu8ANJfRqekKs2rdtSXzXyKFoytvQEBCjWQPimjV9f9k9mpVWUsaHFLv1NrM1qhtDYR71fNGcu2VmRdqTim7S",
  "key6": "4o3afEJm5H8vbDR84ywfCkArQxcp4fQWo9D2nqLzME9Lbvr6W8KuQzfFVJXTwYFU7Mj8PRDubk6QvuXXJjPFY1x6",
  "key7": "2oHisGj4k5XcaisUfy1aoNbpSa8QYCbUo5d4NcHpVMAr7zjMdKriCtrZdsJvuzPJW95ub1WiVvNDqBn9yr34Zt7t",
  "key8": "5NS4zLqGQgB5j1b8hoP84vdrefpniQjK4jLb6jHYWtBKzhdkxCQb9EGsENYodbKgaB8TvReyBZfyYLPztXRnWPNM",
  "key9": "3gV1TFhcEuXgacmajPrDRwKwwgJjtY3Kd7WET5q6LypsDdZr58RuckJmw4mWr2MidptyBgv1X6pNnt36roQ36FDN",
  "key10": "3JztzPYdaudrkeLuvmwrNmy31uJbmSDhbDYb6e382QM249ohHfRvWBJPW9AbmmnUzALv6NcFbGpNuvFwxA733ZzX",
  "key11": "5aWXU6c5VPXtifWaXDsfAQhi1PZUFYFvpTFedB6TP7tmBYLnvkak17ePVSxwCrkkSCeW6JGEmHXoyd2He1pa5atB",
  "key12": "3bcondnshR4Xqq31RwgaZWe4R8DYX6wAz55TyMcgWBN4q5Rcx5qt1BrRwkJcTCyyL7sKzUgGrjwiNkEKsYKSBs2P",
  "key13": "3u6efwghqiQ1W6CT6e6oVi1UaHqDwan2Mr31KkHWgPkVdvahh56Xh9ikHeoPPu6utoKiT1hjJ9Cww8pGanE3EhbY",
  "key14": "gtWZoozGAKGeitg1zoAeBYsTqPGWct1z6HPZ8jkwhzwD5BJEWf66UuiHTQkbY5jSQTuKNjj8QsvRE4vGRoPTM1N",
  "key15": "4uGTF5jQQCbdfyZijcHiZbHgzNVZhTifLXW4zs2hSgnyoYpzLXvkCkbciKCqJ34kdH7oGi1yaEe4jJUVd59uzaCb",
  "key16": "2xXFyf6FQM6MFLH1Z9iRESN3eAKLLRu1epnQBfLmUAAWrfiVNLtc6dh1u8b87GGnVeqr1D1upCbsmYpBpJeAweJo",
  "key17": "4evEt6TSwjVrH1khakdFgABdBLKmT5HgWUZ2BwuuPrBkx8rVozPmMinnYyzMSXiWbs5Lp8gS5b3EqvNCwsUMxmoG",
  "key18": "3KJppUqywAsWqp1fPmKimBpUvac3oZhwttFm47FSjzRXs6tTJiRUyAuWcK5MX4hUQg18okZu3ZfZVs4Ak25xpRpw",
  "key19": "q3wSZ4DpXDcfdJePpBQZUUc96kRVW7BVajrWZk8RzbQur3GMNHBzXsWhY1c1Tt5hPy82tgLWcc6tCHthXH4zKgu",
  "key20": "2AjHT55eVkAxd1PR8WguNKKQSwAcsbtooU1ubPxcBRTWh9B21hgVpNeVsdM5anrh6XkEh93BHx83Evspfom3k3cF",
  "key21": "2tLCzPT4PSn7KKV1CCy1pENcdgF2bkkfHe7gVTM3RY22e3Tyhr3Aqr9yj8iMWKnK7iFtVeBYYaGQecHABmzhkeFo",
  "key22": "5W9GQ9h45DSXYf3rbV5rPSyyh12mhPd1Jp1gboazZQ2HuBgWp2RJZXcJewwSCuf8noWoBqwpK6PpZVz9zDSr34xi",
  "key23": "55A9jZPVLWLNnq75u5ycZB5didrc3p1y7BdxsWd9xsTe9sMU5LAdCb8tEXxWsceM2T76RadC7Vi2PB4E7oA1zWkr",
  "key24": "62cmgcrZ7EgtLs6h2X4zQe32EaoUrPyUDU9kmrtksdBRU8YHXLz9xVnD6oG24ZusN4skkkWmDggaMhA6cE1bqFgS",
  "key25": "2oV9khrsX82NX2hEhHkTJULCy8cgc6M79ZTJNVagN6TSfCrY4EvbJbKroadSj59KFKz99DRQzw4WjbPchw3iRHUR",
  "key26": "5DPo1PJR363LEazxdATngKkZAH46EVQ7PsEQHiEtE5mFW3qpPqC45sXiWk2BDFQB1tC5YijpssUo9FNLTKSMzeEZ",
  "key27": "5x5xJ7sYcxqAiqWeXXw7XtUnknmYoEN7whbXUkUtnx557q2bgKsXiX69UzdjPnQZC7p3EAMSFGRFCzbq245gF1sp",
  "key28": "Az3R8UEDCZXYAQh5kgKP2NGvxvp4d6FCYk365ArtnvZyNfpwZWUKSvbhYsKzXSrHx3CZawcG1uSg4m319dpjyqU",
  "key29": "2qLBefZ4Ei2XMUt3QW5Qfzhemzy8WZX5st8HwdkZnN8ccrqEcq7fuguxrFRW88ceYDCEquUxi1PgJNJ6UdAfTqwf",
  "key30": "NLAVVm7Ejfahid1Xm8zaqi6fBTZThj2YmfNaeLvk2tqrDaq8TAYNDAX7iYf534s6Mh2WtCA4ofbB8bp5fNhwqyE",
  "key31": "5uTSAbkRUazimbxypTfwqNwPVqtmRSfsa4Pu5C3EXVgLzc8tT1bSDRgpKa7CfEaKncsiQLJFgMNHrnme4En1ikos",
  "key32": "87j6CGvvybeXb6CaBHt6FXXAjLWAmpLYCpCexGK4KDPz7PTpdbabHaCMJLfHBG3K3WP7uVkEH7AKFn8vTye6ryc",
  "key33": "4c6oR6REa9JuofnkRUzPtyK6rLCxgfx5AGecbXNY7z1krzGgDwNWipajbKXoT43fciPaCD6VxtC8xLXTwKyPEUX6",
  "key34": "3h29BZQTpeGGrxB14E8xhLxtVpsR3PnkYDefi81yXgoXNPWLKAG5vWBvcgRTHrPZdC5KA15kgwq98MFxcQQfJStk",
  "key35": "5Qww5MVGs4d181a8WoFek4VhqwjeWLedoxjhu8Qr8pYSTm32krHiNLXVWZwn9bHXod5CATkzuBAjrkpzQMRUdRF3",
  "key36": "2oToRXLf7ZXoqttSpSDqVgs3vYr5ZkiJNb13ZjpfBSDMUBD66qkRHshV3YjsTtTWvWADXw5JdFRLJPym5uY9zVEb",
  "key37": "3Lhwi1sAJPVf92kZSwjNsB3rEmpbHbogof5uySUHCWSA5MLkShG3RMNuudppsHHxXMbg3wWr1FWXzfKuYQvugd2d",
  "key38": "3B86rzhj8VZvYRZVpaU9wuCduY7XwGpaBExvs3hHb2dSPopNQe7i5fFXE7QrDPxnP1BUJ1L9JoyL6uvqGFDMTYT3",
  "key39": "2s5hpnzB82MbKzT3gV93YhNmAWvz3J41j284xtUeePicP3FmSxGaaU3iheGqTVW968m1pz12hqSdZQUgiCYFAnqF",
  "key40": "524uGhFmk8KdKeC9pMhnWukPvTTvjvBA6AYruPz7Se66SvCsBpjb7q1cpnH1q5ETg7AXpkWtCeGPNR55XEgK5UMZ",
  "key41": "F7in3JVCVpM76ThjBo9DiTPtMv7xk1tBPXZKWNt1Nf6hYtj4p4BxCBKH2AiEP1DYHKwzzb6tEv8NVoeRNe45HRs",
  "key42": "k1594Jm9ipgq1eXyuh3xGX66jUmV842MHw2f7HgkTsmXCfoaQHViEs1i7oW796gSxtg5mKJxFxPgiPc92keo7J9",
  "key43": "3i5m9pHbvrq9vaJgg6Ums5qsEVBM5sro7cbj8UbhfUwPSapNLAHXL2CugNJiwmywJo2r7ZxaQSiqXfFFuXMRoYPP",
  "key44": "msxFyVH76sNyc3oa3kA98T6mseNkXZBgwz7XN1wYt48YhAT2Hj295EwxDq8ovXqLgzYKJQ5JJMMEe7UJnYKswDQ",
  "key45": "4sgtWcEfF2bDeDacTVZHnXNMi4En74dQ8sVWJ1RSrhffGdwhxvHiq57KmdWMDu5qhrG8wR4z51AaSet8nDeW7LmY",
  "key46": "3a3GyjMHCmeZ8wopXKdp1Vg7A1JQpba1JVh2pwENWyug9f8ARFGrgcNe46k5iGXUgUCQGFZUTUprXa3b6gkbeSse",
  "key47": "3bWGSwagcRAzCXa9Jgzy9tpqrjnXZrSESBduDsboQGtuDhQphtwRe3jKGN9ow4mtYQhcU18aqPVLPY9YvxJW9S29",
  "key48": "5F14wwuuwp91oGKmMXs24tsdf7kSkhmVWhd7Y7yU16ZvbeXqFvTa6HL55macPXaZ7e49gnQU82HWcYCV4gdn2QDa"
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
