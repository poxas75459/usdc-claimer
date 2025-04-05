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
    "49kN9NWpLraApTYHHr1H7idZdeeRp89n6TNSRWGwmyxiQE3n5rzXQr1kkgGvwmKrYdrWZ9YHD4ihf1bYGtGSqoeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yukCtmWXhNfZhjnH2b3FjiHtW4KF3dF2gRxDSyjVjbmEJeYQfjtGvyWNngaVid6WqixDSedSU5U9cDnY6eGvrqq",
  "key1": "hHshMmZK8f9RjoAXBSoGz2HJfBxBHqnDKUs1fmWCsv2JFR2hXhL71XxKY5GFDEHMiKux95dy4JpuGjZUonWgsZn",
  "key2": "2Er6apXfQEEgmbmW27Fr9ac9LkX8YZpESMBk3No9MpKVcYGhiN3ZZviRVHdM36CjhzEtSSYEbwtxErTCyLUxAHCQ",
  "key3": "2sSSgW4H7GCUoStEsSj2uVJXRx6Z9RikBHMpVAhqZTgwsrVNLPpewLZiQXKAqcv3mPqhqeUCjmbQoxV1r6eRegDG",
  "key4": "2xP2afaZWQe61ZVYsK9PKkDBBZdmsaAf1KzG7PKM2oi6HHHywzsEG7VwNqFTSpWBQdxVgHMa2CHQsZyU3xNA9X4Q",
  "key5": "22ncQSy8ibqb3hdpg7HGTVFTV4KDgTKeqGLDzhMfCGgdpH9TYuigBucTpcCBzngJwERCxxDVVpKXsuqSTEnXsUjh",
  "key6": "523V4qVN3xpdyCGvCHJbtU13UMKP9ezzgDEKkLWzXn669ZtQn2t6atEtdc9HDdmvwqzALQhMJAMeVYkLmCon4zBf",
  "key7": "3ZvkYKvoRuC54b8t7JPBM1sNgVjx6qasE3ahtPNCwLviixTAUJ87r32sdM2WNFnKTLa1E7eko7qpvAQxgBYvzwuY",
  "key8": "5F8xMp18HVB7Pm64LDUzpv1fMU9iM5isHmGvV5HiBS3AJeYtgLtXpFZhTDC3Qt3knDeBxFYJmCXM3d5Z5F1W6KJx",
  "key9": "23iHLDZJZU7GyxrzEnDVzkoPf8CmEj1FjKmSizoM9TA2eDUUDvBfGeSoKztcAt7DasNpZ1QptYkfYjXhszJSvGeh",
  "key10": "2pz5dMeNa9dTquZoH4dgNJBUztPvyABGvL26sBKfkEi2Kj3GoFXapzm1b2w73zHg2rTP3izsFKX6h1dLZYgQdyNZ",
  "key11": "66nH1byL66i3pcMcuQrWqLvvg23R5Qn7PP57UFzqGRNn8r6s7Z1QaxfQY8XWA2tMFMBXNFAWbzahttE7PmCadkEv",
  "key12": "5L3GTacBKN9E6u7mBHRDhw8fP1eQSdpYL3XCSMm5yqukaa97DjenZN6nTrSDsHwFF6sMez8v5S5qG7wuiZ2QuNd5",
  "key13": "2fFHnzbGbDwGEiseVHfaqi3tu4SKJXy1zFup38b9TR4eZM5hTa7nS6M1TBoCm5TpAn4KBfWTdEyoRKyqLvAKKHVP",
  "key14": "2hktjwDRcHD55G8yceEE5bYVGNPYPnv28pS23Af31zWfLPxjzkAckgCEx6tzF8m3jCLKzFjhDN264QMUuFFtUjx7",
  "key15": "5RvNppYFo7pxG8tsKFbFmSASD5PnwrM7NHxmGiRWDYNNXg7BPADRykz7GkLvpxkAwT5tGXP3pTY8SGP4Y52xEJGQ",
  "key16": "4JGfdg1CgvaKZACn1ySPue2YZ9X6SxmZLyzKGpsDzPqs9fbj91DYVVBxarABQuSXpdmhB4SZP7YiNP9wzi9vrZqF",
  "key17": "nLtU5soxb2bBr4aRZfScJff8x9iiFgzAceXfqdVTmDhr2Bqs4AMpgiPZymtHJaZ6P9m2F8FuzSTHQgp95BAxRWQ",
  "key18": "4zSuEqVvcVLDVzPJMnuAiaAb5zWTuE9Xotm9iCwkLL2ZvTr8PrdmE8BTcvt3T9tuM1K5xoYfRowVLb7EHrXuwJkP",
  "key19": "2SuuCNQ3f4ZqkQ4LNvxa99S3rwBQFNQVjK5d81NvEanxztsHu1k2AcymQhXjGNWPUxyzYdwxJmJn8zP92aHkVdK3",
  "key20": "2YHbpi1C9XYiRCw19RwU58NnD8T6p4LQjFz8oyzDj53a7JjEzuuxuDYJpCseWeMtqjd8iV8HaQ5U1cytYCpA1hHi",
  "key21": "4LDLGDCGi8m8YAjf3j1E9mBMD7ZFCJSz98zTqFRGj17AnaYznU6hx9isUHpKrHbw9nseXgEGjcjgFeCyB2X3zfGp",
  "key22": "3WU1osFkCYGZ77w6V3hse1zw49UEr1NChMoS96oZ2msR7krrrVfzgRSpb4BRxUbsi4kQfraML6zr4hPoFCSA8NQU",
  "key23": "3Z2rx1BWNeQyw5gxUfLFxFsvjnqoUP7qbxyVaZKSKv9GHAKSyLAarwoXHZVp6gmmjWxcWwbTL3Wc9wDkBoJ7QhmU",
  "key24": "CZCC6EtCKUroEpcEE3TiWiKyrM93bmgnZP7kRcTG8gDShwqFudmcax6fzjkYSDw24iSwQGKa99SYP6nxaN6BqC6",
  "key25": "FZrN75tb3WqNAcQQi7akitG8piRf33EUPRDDGD5VoYeJ2a7mGdFC1794djf8yVz4vfcfZ1kiVAgGT5qLGUFSvcn",
  "key26": "vP7N49hD8yjXF5RRRCxk4MgQPD2aE9GqWGvSSyZuEwSwm1TiTp8C11tS1m69HsxtGfDAJKwenwjGiwpK19xixsU",
  "key27": "52JKSvYSpt6SbHnjKSQqyqzuTTSyYRsxnniVicGj9LzchczKMUoN2EY5MX9vu94iUeaVDkCJUttF7qiUyegqTZNc",
  "key28": "UfcQBQPGZKLxebUr9RNSDqPff4iFttGLASsBpy3dU6agHXBUuo2UZDneLyRMxFJfUub3fE2odwDEzv3kfJsESqe",
  "key29": "3weDy2zP6xyJ9CqZAAXGuX1YSQ95aCYvSeDW2C53nVKxcGjGiQywB7aHPgJGYQCAZcZ6yAVRMugPjXhf9vhNaeA",
  "key30": "YozgVij8s4Ax8pVJ3xvjAkY5wrrytCrazzwVynh9Ws81A4yA2bwHqKkAW1sQ6Y86GRMJqgvErUXWozw9zRi2147",
  "key31": "2vvL4dmc258cTHaGZP2LSw3aQALezJjfzWGu7yRXj7FUyvi768YMJQqeV6ro6WFAUTqG7dH43Cd8pUXimajNdYWt",
  "key32": "2xVRBnrMfze72CW2BrdRkVqf7o3foWznkYrDXGpBY4dp32yVrUtLdNNz9Xog2WBmGmyXwAUB8DbbrynnttGyA9Lm",
  "key33": "bjGispywhznUt2PyTVP7z81VwMZ2Zf3q6NStH4bq1GHe4vpfAVbPApeYmgeYobcLEvmaEa5xxDBCsFyr8cXCqoB",
  "key34": "3xnD6bPMWvSF5ppHDF4CvTqJCBfS5Y3SARpTXSdjjBv12obUo7n96LoRrotSoivFwfYfBT3M1bmMcKbmXMr3vbe9",
  "key35": "92KMwoRuUGY18QHameiXAp9MR8DkhMBngfCN25mepUUgpYzVaifacb6Lr9PGr42iTxHGrF6v2iuCxvjp7b2FmDb",
  "key36": "CQSzQfHNL7ZieHuw9U4QHhrKFLQD8cNjKf6DmPFBA6CbjZSFzU7JUtLoeQQ78A9jtdC3ExqvEJCyCBMoHvaHwof",
  "key37": "5FHnCdTtHR6CwMfk5PxTAE1Sx788PQMdXYw5uqNCRNf86XPv3cVgH7Q5yTH1iJRJLBrc8XMjQ6XiqkcZ8wWK5qk8",
  "key38": "3uWtRSGVmgv3UhSKRECJfNRfQSPXUyDKkbK7y4y8LG2UENhynoRQWSLYHv2buCEGepBku9pzT1fQdq5RGukZJLoo",
  "key39": "GmTSQNUungGrJABkcrDjHunRWPKpC2AQdzgaf3ZWXGkaG6tA74H2qisVMtEFJj7FTmnxP9wtqZ46Yz7yLojzfxD",
  "key40": "423NEFAzw65QkPDUf7d8nModVYHbkK2ACjYAyMs7ygKf3hYKcQibtcTzDhWe9HWHKtCMmtEdoc8nN79xTsdpTBb1",
  "key41": "rw7zcBH1y84DhiyqcJRXkvkX2spRVHP9RJr8DhbSs35pkEfBVc4c2jowaacQXZTC8b6EZJeRqr8JHgieyfEojyU",
  "key42": "2tzjd28HEdzeDAmiZtrG9pDJSRJdBLT2bun7je5LAbz3q2fHDSBQUhDYPuccqbM9jkdG6EZUbPzXxXk33fLwHmiE",
  "key43": "su1YhNDhJA8yMELgq6nGtS6uiz6niSUhwdL3vQKSNuFzK6a4rQzzGJpQ9hidGT4rLP3Yo3LNyXAXyBmCnXpw83w",
  "key44": "5BGptKdjpfHavMCMWkhfpaGDGSBDPLcxvKGtMTSNkUXvFd4YGKpDAYA6Fi93vxxYE2nDQRR1raWyRE66CrYtKo2N",
  "key45": "5un6cFJjbMMHSdHaPz3rH4FrmW7W3GaddNWHmEBLeHnokuK5KeizDZAYuXmFtrv1hBkTtQjkxEEHLATfMuWvkTYE",
  "key46": "z2T5Q1eyndLMcFSsoW32t8bK6x19fwhi2KbrMFN2yhJHyP1F94CQNpHrGZK6xgcDcxqN9fmVZwic12znVUZNkw6",
  "key47": "45fMjv3WbPE7BhRm7G6oUea2jfdbPYrupqapx7zYdenjmPMTDfxUwydTszMjJdpsJQGKKS8ypr2TH2uoaLP7g7po"
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
