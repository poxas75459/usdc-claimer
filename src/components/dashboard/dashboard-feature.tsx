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
    "2aDRtcPgZ5fXkrjKSZ8aEZRFaRUo134sJtEUAMsQN8VzSaqUGM2NN9PaNKny8iDMYzVypfMMTsdGaVageJPREfnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfEJNKCsrwdfXFjBphWm9BWFeBqeTNRUJuroJcvJNUFqbC9rxbn11iaNcN2etzRibZtgPRgd2C689EA7ZkBt5cB",
  "key1": "9HErDhYGynvqGofWqypz58pHreUYu2Yh4Xu3njjvvdrfSLsoPT5UKnNCASvqz3tXJTVoRVnCYHGdXV2y3Yqmfvt",
  "key2": "3Fcj8xBPU4nRUdarFS8i9FQTHDYu7q3gBzeMYmPgK39ZmybAhQLD6sSzxs8m8YpFr5LuwbchHYTGGsVttyNZEnfs",
  "key3": "4cTpjNHeu2M1WhYsqahX8Ybzuepuno6yKcKVSHn32xu8xXjzVMVqZyrqP38ThpAxNgeScxMYftrFkSQzS7rAZmrp",
  "key4": "VDrom9bS2AQvaxx7dhSP4jFeKH676u3VT1hTzzt6JBmPC9oV5XtSHNXKH7XJbeKC9B1EiWZHupByJzK4brTgXtw",
  "key5": "4zdNgXGjqTSUD3AgDFwRodPNpp14BzpQgcnxkMM5YnrT7upMZ8XSEkpVdRYCsHEKrokq5gTZoBfXKQgcdeKf24RH",
  "key6": "VkrSrQuC9Td7cDb2DqVSLdBTx9teLY4RWhNVP5TtbUocLALcxy1ecV2P6dmnb7YeAuPRLbdu9SMWQYzf8vz2LWL",
  "key7": "2AcPkFrm4DP4o2uAjE8wg8uEX2t3UW621fv68XGVQ66VBuRHgffzPZewzN4f5nReTGJ6Q3wQTto7LQD1UktGxH8S",
  "key8": "3CRPt5H5tEM7LwejHBTfiCMcdtcG2x4zb91C8YCG6we8GUZHNsQfNWGDSWf2p7TpxG6JK4vttwxey2wYQNTxDPJ",
  "key9": "4zFCYej91mTKd2oyKFrudP6gZc9QjEyKbSE7nYrNZDSD9PVCtZ7zhvfmQ3pakuVfQrGGVXMs7Pi99NEgkYTE5hao",
  "key10": "U4UzmFNJHmYKNy5tfXoJgYE8ZWMsd3WMFVQJbrXMAaJbkT5giNcE8VfAjnaiSfTFvJ4kUVkeJn5iWjCtAtyxCes",
  "key11": "3Hs7Hcgqansr47kh4bmX2C6HsptiUzrvD9UEPnAAVrpCSFQrhEFY8Fz6QpCvFL1x4hPU4khHUuY8cCGkH9FxWL9V",
  "key12": "4mtzowrB4mKr5nsmTYs3i36bR6gTpTptwX7UZ5WPPG5nK8nuvEn7XWMKx5VWWrTcr1mbA2vCT2sa3XTZKiPAJVfw",
  "key13": "4z3XY7uvUeRt9pSYM2eEurbEqu7iBdt2Wt7YVFG9HqRs7brYcr4aH8DgoE7Wj9B95tfsiCEZmnoRauTtwntvm5Km",
  "key14": "3bNA3Fw3Mejhvhp7NcWCKLZVKuRMHfRFP3VtC9Ykg7gikyrm55ij5egoDajy6iHhwoB3GUocEtzK4RHVcmg9C2HD",
  "key15": "3qt8xTWyDFSDoRqw313g9VnrecPSusnAPYLqMKw7Utcyb6kRTc4ZokUQ5pB3jM48Sprb33fLcDTY7zcqkUbpHVCy",
  "key16": "2aNMYuqUXpD1RncPxZhqbu8Qx69Rwwo8zFoXqUHQuZSnze9ymJcSKs8Zgi2sj8doWz1Konke27guwp1u4kGogQsp",
  "key17": "3xqZP1MpoT2neF5PPQ4RcXTNs6DiVU3CvrZ1bwLyWqUdt4YkWLZuUvzYgw6mf5dDk6E5xxuHCGG7v6A3hPe9G7T7",
  "key18": "4fVxRLyNgBgVtSkzDArUg2wf6mqAP3WsKvXuVNKDTRiwAGPqroEkWRTeuFtYngiPqEu16Lko3E2fza7yg4XBcvTv",
  "key19": "4GnhoXEyFFQKA9mhxucxKDVB9HS5DKfRBeuRXEUkexLWa9K6KFoW7kCSDRxeRGiHGNfcun157ZhaRWoQcg7bkbBq",
  "key20": "2XNuB7dsKxnj5YshRUnGpMJU5JbRnEhTLq6w4oKcYMe2KzVS936kwnqYq1bpPo98oT2Z8ja9mPD8y2dEsEeMtVvw",
  "key21": "2yywms9zQhV33nHtFo14ZMMq1Rx6yJj416qG5Y7iAAT5aqcbWyscjnTU2e1MLEZk7JXEAWbdpYJgbU73BEXYdhnn",
  "key22": "2MeoBfEb7ZzvrwTMKfvS8Tv7fjRUFe9hQjVHS1b7UQt6MLLCnHrddJcC45io11NZBb32gL4vQHkA4eds3SyYDQDs",
  "key23": "2KKKhBuMrTVw19hMtEv3jfVjiZGKU8xd6pddu1Dw76uX9NZJfrnXdEgeCZeYS66bawP7PXRektcTXgUXYs39eZx3",
  "key24": "2k6tjCMW13LGNiswGTrPSxoTYu7N8EbEDPj8yvgugfgEDS2dkJ2xjJC4PfYYqwLfCQ1xVtZFk33Ur25LNfBuzDfL",
  "key25": "2UVEQpKxvuYAeKtPAw5qEbVEwXh8SssDz6Y6wMSS7Xdq3JpuzwHtvMXkavmcbd71uRavyHNZZF6QDfdjuCGhfze5",
  "key26": "4QNp4unTE3o9XNfWMYUBgj3LBWEAtHy5jVu1pv86nzDTbFo7m43WvGoW6fHmFRidMKV7wNXfevmErcD6rJhzWzAA",
  "key27": "4etX4btkqeuGty3tLx4Cjpv9ShVBVWfvSDixYMHG3mKbnHeCgW5mSQ2FzRkKTe9kDPPhoZzyJRggn9oNT1vFu6j1",
  "key28": "sfAhQbDa9y1eAFa4TaHmFQTELT83W6Uii95MYFsLEtX4Uow55x9nnEzTkUMFc3Y65qWQ6FpkqJdNpddMTChrFGw",
  "key29": "4xn8tYFSvdPpHMcQQtY6NJxv8doPscS5wKqy976um2ZayAxsToSpDikqgniEfPUVu42aRFdrbKaPUdufbs4t4fMY",
  "key30": "5erLDqJHTvJq9ddsky3VkyL2Uo5NhfqAi9d8aWGjCwTc1eJcMSxfS8ZeLqj5pGq95794y5AUwF9FhJCtYMZbJtSH",
  "key31": "5UqELEjRupHy9ebCEn4PsPBmhV2XFhqW9xXrrvZUNuFtS7NuM7dj8btzSNrJwNWwAGHtmfVCQ7oZ9GcCpkMytknC"
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
