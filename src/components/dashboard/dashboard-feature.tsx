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
    "67chFTQoeKDVCrJrWwZPdudbMgqzkBAfbA9bFAWd4v1Eqw8X6UvyF6cSjTUzWv72FpnGyn62kdR4yJmhb6SgjtPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHrZpEuMWtxvfb4T2V76AbsZLvAVBTJ724ecDuysJjSDPD61mVRmGNWY35u4DLgewpqq24aHarRzNx3frEVfGBt",
  "key1": "5QSoMXWXd8VLvxLFtZ821a33L88H5sn5iUd9cTWUmnb7acZm5cD293XfdY7wDDhnQwVEKS2GLabQaibzYtqLBxJX",
  "key2": "3QNqLpn2vnQqAfTVjyy7VQk1koaHHQYetKtAXfFYGJgzCGMFnq9GkiHsBM3PUR46N9N1u7RiTAtpxToAYfScmpzN",
  "key3": "3HAmUabqvkNJPvXq6pujWkBYydusNgYKHJMhdUDFS2AgNu5t2UPLxmVEuP7evLPSC9HqNJ6vpdfHYBPjNVTgFffJ",
  "key4": "5dk88cNRKKMzY4FaPJaPVVhTCrfqrUFrJLuzGJ5UEFMhSwRYjZQmHP7qwqmpfxwNpatFq1i6XhQzxfC8ihyY2R6v",
  "key5": "4FiXWw6eZTo6CxjoU3oouqToR6hZuEuD9AdeWQ2iZonFE6F5YUweFxKL9o8cFFNd2cCXiZWKBDUrAoyhwzeKDvmt",
  "key6": "oaWdCMbnFeoeCfbZez58sHwihUK3AJ8ktpTq6vpiH81Q34nEunSwHJdNhPSzTJYv978i3zg4faZGcQsRKrz7Ez9",
  "key7": "2Ey1wHWtuZyb8TyQHsGhM2TvJPgWF1fQksTJZjLS7eWUu5mixdMMHD9vGuPzpiPvBtK8Eb7aDxx4NPKFsARpxkx3",
  "key8": "4KnGZrZg1vPEmfBUte6simDrGb7V11xGwLtHSwvBY7vNMYMVF7oRgiMFxQXhGforNEqAFHgv4fZ1L4KjEjWvRYLP",
  "key9": "2uKHAp9ecycisKW1TqhdiAH4Hr9HLDU8QSYWHbstwhrF9rwiNBgcZkUNhFPCfuCU62U1AqHNptw4oWAvUt2nVWns",
  "key10": "ivG8ntQMC6N3BeVP17ghxSTm8YfFdBqSrte1TNmjuuXncUyMzoZgBwdjzhuf1yULFuMbsaKwrGRqk9auR5TmzcJ",
  "key11": "5p4MbStXv1TDAMqCwU6wPqHXGkDUt9Mb7Vyp7WVe3vSq8d1BZ3nnruZqPmhaaamdkA8227S6TvB1otPzi1TxNpcm",
  "key12": "zQ7csdWiu7bQ1Q8fFEGrwz28BqjHYvsnDcgW8QcoKeG3hh2gt6ohC6HpcRaWrjsvVxfwqga5ZerxPExGZTMqhtZ",
  "key13": "oX1myniFQjrZyj6GgJE1hrnQLfcdq6Fiom9ojpJNx6sLnxC7cjXK3USYoRLwjpPWfPDJcP4a5thSbFQrwsU69Kw",
  "key14": "3sTBQ7YsVzGNjo8jZfyUY8vGDRvYsTvnUtkcQ3a7R9J6GSbG1UoksEzCLgBMqP8PyzXvVDqAg1ANaejtQrDX7HY3",
  "key15": "4ytr4Vmh7G5EA1TQPvvaGSwWB7tptT9p1BzSvcQCRjd2Ayw48S4B13wuRvjMb1uabqH1xprxcBDNW3hx4AF4WVbR",
  "key16": "5LVHAGDmUw6XesomnnFbtKgffModJYtStQtErtXBbaas9GT7NnJPteGiJQt5UCVj9LEdXkbM4jfgp4NUzir8t7V5",
  "key17": "2nw7cL4hCi9wv5keiVY75WsLGfu2XsM3GF6fHRJt2Bdknf1zcRMCVMKtRMdmpbEbUZQFq89tqjpaqea1uvfr5RYD",
  "key18": "3JWgQGUmu1mw9HpHUxjEuzgYzSfbEsqqnLb1u96dSiYtkffizuk6nj36jn6ofeSzpgc8SkRfbLbdyC6qsz8y2ewy",
  "key19": "T6VNgRhekfAJKYWzDMA77XJRK5PPP6nUbrX5SNnG4PCzrE9ie8KHvnzqpbiXhyq1Jimp8QJSzXBPtSjn69fGagb",
  "key20": "5N8XjABxnBsY11NdDsuiG11mq4wQhAx1AXjGgHnbAVGVKYK96BLqL8HT2pQ9zyA4wNpAAqbAdKr9U7Z1GTmdBKQq",
  "key21": "36V1tfmjnoyHsbQWypX9BGa3gNLAJF59LhnrYgpq63s2sQB6TiDjJvwvh4zBpCEJ25jZbgEWCdQjWAAssjKeTm6u",
  "key22": "3Ka3FnjYsX4sAeJbqVv9ADX4HT6TcqNiL1rCrZUDko4Lp7dxdPmq5tcVVWGRWacRKzNr7pEz2WQyi2utBqapnky6",
  "key23": "2avaZcJamdwyYSLiM46yXueajTTb6Qkypg7KYRqa5k3faMBaD7Z6Vu9MhdK4vAuxYs7fXF7ZCWBDpPHMhUCTx6jt",
  "key24": "5f46AymC2BRyreTbYPouF32CSH67zwVFexbNCMGKaRVNPpn3KV5GYoTWjkbPmQiWKVaHdZcRTgTNG4Te8jXB8mUt",
  "key25": "3spPJ9g3tmWhQ7HtZqTvpJ6d4kgs35RViCAVSx3ifhgoqG8S4y4JJ9ADwgGxSqY8mUQMogzmt9UK7b9yYJvsAdCj",
  "key26": "4o6DX8qYsG6fKvYkHUxhEHXKdLec7K4yWai224HPwP9J3FYTz3NsRPBtKujzWhwuezyvKQP341B9ND2ymNiGxPhW",
  "key27": "2Au6swdcRfPJwUDtkVF5PrEYxbSXg5cZvf7ECgasHHbib5fnUxGCEzyQ3jVGLDKBWdKUbSzvaTjGYxHtP8yL485S",
  "key28": "2yJLTESuzLSKRwQ7PD8hhRRSyELbz1q7dok4sc8HG9wDtThg5ut86QiTqQLoAQMmza1RAaXsyTf7H941MwHuJwNf",
  "key29": "3pFqo3CkXnYKUjQYEpTdP7KEb9M9FDLXnsExcaTbnhE9NFtz7gUpahnNibkh6frPd5CDUKMJ3JE1zZxcE6ti9ok9",
  "key30": "2cT2FdYzAozghWDXbHG4r4u2tvcwPJFTFtxeiFTj7G2UYRTJKFhDQEYv9bWteXkViEz7D4QCBPKxDYRs42ZEZ7tm",
  "key31": "4Zch2aXnAsSSqHcmJ23Se1R4mkqgdHUKxEbKSTBdmjidYhbV1c9ZKdgC6xFXJhpWNmixX5AQB2TwKvyZsLxpNfEs",
  "key32": "2rDcRwYnnzEynJuGC4Ubmwak5EA4HiFws5Cq4gV5Ye1uj5nxSko1d9nw8BAHnPjrHE2qAhzj1vrAvHiVepna2kxJ"
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
