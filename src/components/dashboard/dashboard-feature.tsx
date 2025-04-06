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
    "SL44o1dWRrDYJyBiKDc4ns24a7oGroTbfj6d82dMtRpZxgyQ5Mf8dr39d1t62RtEyh3TXfHQvV8PkiogkJgPWov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T5qQauBmhfGXHAoYAy13hFkkYdScBXoxpPauoinfpZUfQDkGQ3C7TC41WZqpuT22yYoCnaeXxvQpP2eDRoxju32",
  "key1": "3YiUaaCZP4uDoQUXkZxSaYwXRpGrtDtdndAfYYaHDiQ1GxwzcDR53JX7Ve96Rnuo2q8txdBevMvrUYqA5irM2NXU",
  "key2": "2CJ7Rhdzy7Jgd93ZQdY5eSWTFBPHHVTuHew73RJxZUtwsPwDnm44xFEXFd2SGZ7evcMgGhujUgPmq5qYCJxn1oAc",
  "key3": "5SUV4y3FDaZTbxUh7fdtZG6ZkWKJoJXgyXSHWx2QLDkhYZrcz6DSVB4Vy48GCCjFcatzXw1ieTUNSZqLz3iPWDNB",
  "key4": "62VsTDuJKXgP77EZdhvSuQ9TPwuAW9gs2GTcm9LwtjtyYTXjgafFVUfGqz2WL5nQZoNFWvGajSpjFKc8BJwLTcpD",
  "key5": "2ouDrDqpSoQtWr2VfmEqGM23WAizmwLFsaTg3uPwQijf7G61otz6UGsu5g3cuPzKPtqTq57AHr3ntyfgtMbgjL4A",
  "key6": "3gmRuxDrv5yugSpf2qq2gFjhu5bCGkh1TGUNpGGiuqxc1RCs9Z1YUrdWeiff1XxteasnWu1PNaWec84UuaeiBwuv",
  "key7": "46623qsQLo4wx9Gg8TuKDqH4gdvF5yYoUxgNZJMHKM3PJ37FssBfPhtDxf8TWgnJeG7Q3TmSMmdvp9dJG8NRYNVX",
  "key8": "zwXv5KJWAkQjx8bYw1oxjLRgKAT8yR4fm1ZFYTddAFG5gawCh3kPikTQZ4asCcvVh8ZuLXdKoXVbH6i4Ad45fT3",
  "key9": "62pxW34kjmRX5thR3FEV32DeRPSiC72HzGycwUpKAwqcK5amqDH8ThreH1uBvpzNWFEr8tkATUBCPSBB3pg7u1s",
  "key10": "3ub48TnMNdhnFNdMC8a57nmKG5DcKTdk3awCsW3Pyu7493MmgMVWVcQsrHNGevXgit6MLWcP8yT5FFWp77LMUnCc",
  "key11": "59uHbZNLtjjuXpGFHP8EjE641RHEcXPgHq7GdEaN3SPn2wpjr6vq4fFDcvqNkZ6HrHb7XA1FMYwux8FHpVVtntX7",
  "key12": "4hq9U35own1LZGtxKyRzq5Vj8LXG6Qco4WZLWryQs8FQMTJh34jDev6CTf77iANy1c4gkZQ6E7YqH69ydZg42ft9",
  "key13": "idJV9c7aGq5hoLujkXhX4CcyvgvPHHkWxauPm2mL8XhZDHmrVkEYHoxnPk1mToU5QPbvyszGy8Tq9sN12wu8ipo",
  "key14": "Cup6gddxVhwSPn8W8eiVpvs1h7d6AdptGYQDa4kGB4eJnZqv3KKyAep5BRYwAKFyDitUATeejGfW9e2T6XmzMyT",
  "key15": "5uU59GxhyWuTMk4e4zxzNuJ1pqcsCTzLxbRwjtPpUEMUUcV6KK7xwAUJMrhGrqcghBfzJ9erJJLH4tzCxwJmX1Kw",
  "key16": "5ScZw4WWqXcZNVUnL7sfivRYYfkB5nAeeJ7zasPzw5U3e6Q3jHRbf1n2ED8k9JL8NuMA8YrTgJ3eCsA1yy6F4pZz",
  "key17": "57rMEkrsobsuGKQG4ieRMjJN1n29muGoKfpGZwWYbKtrS568pXR7fcQkYLBFMRoG1PXYcRN34ofNJgwUNSR4tNeo",
  "key18": "3GkjmYUBAcaJ3oA9xgwz4scwoZU8ByC3PbbchCbsThm2bMaqqQLNU3cFnQvvdCBqDHFHYBVHB95u8uWQY5PJZZee",
  "key19": "qvo4quFnih9Pyb1mbsj4zK8WxqWab7xRCt51moDGrFgu5YBexi7Q7FzLyezrVH2Nzmt3GFoWmh9sGbea3nxuxC7",
  "key20": "3iaoaNxKKCGNZ657CUAoxATw4Y2SEwXYBng4465PutH22cRjRv6dreRmCDgGgGCDEFkpwTND8CwVxsFuufdBdVgF",
  "key21": "52XjJaJXRKBcKPdBJhYN4gezw56ijHaMKX78w5KH4xZkoU9hYvezQppRAcsZ3kgE1z9BCDFrzwyGuguPqKHALKhe",
  "key22": "3ZB7HVDxLrMAe7tDN26s5fZw1pR3yZ7Zv8USCkZkxWRdPamPYCBSXdPYn2ig6dYwDVqTRTvdnLinYP4WK27RPEGr",
  "key23": "4DvtED6LJVWayfuSkDhTFoXJq5zLQPfWiq2eqxGfM7gUvnevNUnrNS6891f6v48CF2U44SQbuzuxTyhqzNWYyeh8",
  "key24": "VrP48RNTzjueg2ZtM2hFbFc8p4FzP2dh99uAcjc64Vu4oixmnzgmorbnarDTCwVW3Aw6o4fpx9k9ZwGRJMUVFVF",
  "key25": "NsYmQPhPMYFKkA2VhmQhiKgNeScoFabuMAYTgFcqpAZzkj41NuZkmaqEmhsPKjuGrXMGdCKAZ3CDrWVWKzmp8pz",
  "key26": "2Rof4xs1EfAngVysnavvV2enGtahHjCdc8VZ7G9YpFuTuqgEXA38zQhgpxntwZcnDJSqZizoq5bGQoYAaMErP48A",
  "key27": "5TixbNLVnYcnXMT5jeYdN9vnEuoq3Nsy9ciRdoYSKPsHMLr1bLfnhRJ3kRC8bV4hASs98KjXgrZ1Yymk2k3bYbKz",
  "key28": "3EJABJfV3wdtCCVhJ4nudyZa3YLKHmsPpnzjU4d7q7LHPx61XgmVbRS3GiFdFva1XsKNAuZ76SViKUQQwR5EhS3f",
  "key29": "nFXe5fYnQqQewvxs8fK3bxxGtnkURiTNbKZ3GUGQP5Z2qMhEhrYrkE17xK19xu6swS6U5ekf4xm6EKoY5AkuL6Z",
  "key30": "5M1rr1DmXAh1dHKDuqDEoxZ4VVjHxLixycsjDUq9r8u6XU8YckkLK1TS72mETbfSWjdyKbuBqB9FfuKRxuJTXLik"
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
