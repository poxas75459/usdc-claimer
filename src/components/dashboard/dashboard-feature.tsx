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
    "2PyDfF2GL5vhJ2uXeQxQksnfZdPdS7yCd1PePEA88qGrQeXcLZdh4xpKuGh4C4si7xAr51wENqTtt3SdWE15jPFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512dvBExYyufTG5QmkULVtPVZikePPpXTdS9ioDJX1pcvJUvR7uALzTvDZL6Rh1ThSroXzQNwVoL8Qr1d7CLJvuZ",
  "key1": "5NHkNarZu18XYLfTttYsdNsNAym6cj1HwDhbdN7pTRypVyXJdbxXKRzpUKRmVZvGrm7w9bM9QHvMJ142LFWju53P",
  "key2": "4gBD6nz9DGUzYM7bKq9aBZ5FiAmrK3TThGhcm9C1Ai2YAyFAzJJb9m3J8GgRUc321EUxygkx3yQUg2apisyWwdAY",
  "key3": "2P54m5bk6ze5PnfDgo5aTvWCDw7hU8iv126iV4dX2SqDoeMbcno4oDTWLY55QfHXkkXgnZWP6AMcS1wt7K1xbudK",
  "key4": "jEBs9d9xH7pXB9sf5ngcvdAteD7A9QfjDKsu8zUGjBqZ6iwnmR9BbLWVuqwHbSTYvhtdTm8Cik9aMck7JuWhRqT",
  "key5": "4r6s4SNCiTpy4YetiSL59fzPpL8aASAVens3WWXUxD4YLXGb7RwNiXGfdPvKcx5Y6rFa1oSBLPAGBdJYy374LDuH",
  "key6": "b7aXDpxDbkg2py1JJiACieLzBFn6qpk6u2diLJvP4QLhGYnuGu6nLyxiKd9N1SEBx5FN6fjwWpRyewMRcKaJy8f",
  "key7": "3skMYfDDyLRzqrU3LkNQodNb6MuQmwpiEZBduNH3cqbotRErFugrHuV6MpE3Yqg1WLzjKbmB9WpxnAXHVwLsgHzD",
  "key8": "4W28Xa1YxRKutf4qNJx6i9xDpkpC4sUTKvAkT34hCXZwWZCx4utuYHhiVmdYkGmD49tgykL6kFmR7gWR2kXczCnV",
  "key9": "S4c3DLQUDgxUU4CufkGHrfnC91EWyzdDFJqa3TN8Xv2ZiSUFLPqw7Wy5kDghraxce7YRLg4DwXrs5y9uEGPaLzP",
  "key10": "3TWbf45P7Vq4NkPvUgZufRM1k7Up7s7bci48kkPrPqM4sbc4jZno2YwSznqbJuQ3qzuN7a8zCa3oyudVv4aP4nEN",
  "key11": "4K8K3GcSiRHc1QpB6fXFNbtCgWcUDibWJL9erfkiuLmvBEguH48YWLREYrwiwyDqb2RHJPWpdknwEgyLbFe3gqGr",
  "key12": "5eaire4haXiYiG7EgjHA34NWAxZ29ZXeWXg7D3jmZXk6RePkvC91ZMDi37bSzTjyFzDvQ7o84N5FNViqnqguXCu3",
  "key13": "2a13s3nxhMmdjVJc7NmmFoGUYGBWmpYh2SSTyxCXNirvuEt3Uc9fucMhhvGjG7jKZZ2w8D3JGD2NVyhDnbf7oP5p",
  "key14": "5zKGUdAx1p4k3ur4YuD9UaD7ZA9QyxScXskek11R8iqm9Q5bL9z7B6Ryn8EE6UbRznfn2xNkdJqA2wX3Zeuf4Ct3",
  "key15": "2x6b3cxSPxJuxaEsnMx61huFkdh7CxAc5AxScppxYbHeKCHB4AxKGkfbKYsDYyDo5sL7rMpBHKwaErNyBrVd6FVG",
  "key16": "iBy17QC4gv6A5BMXseXhupk63eVt5fRFihM9RsoznUU9d2UWMs9T9cj5QanvFmu9NjPfUPFtx1RbY33imtVBr4e",
  "key17": "641LgzMGmEwsZEzCug3RQQAqHFcKmtEJG7cganuMKngmdGGcHDgXFGtQqu31KNEnMLx27mPFvBgXKms2dbVfB3aF",
  "key18": "65F34arhGvJ8ShD6nZMj6G12ZrzpfDAECTNBbDcHqme8tJ5rFPhAf7cR6U3jWV1kQGZwVSKTQQ7de457Pn1aLagG",
  "key19": "227kvLzrUQpUL2RCoDtsRcfSYyvQ8budgNGeWepLGUpf64TkJCrd9hAqmz9MA4LjaDugiUQ9p99rKAPKGhMssCSX",
  "key20": "2EqDdnqR4vX8Hv3yw7xLip45K7YrCzFiHGLiiSJM6yiXyZ4b4pfHxcGTDVoz51U6rDgVKvEEkreVm9vJauYRrfiv",
  "key21": "d4f75Ns5786wFVEzK9USAMitouUiLHsZyS6JgAiFNSMoFgitCY6KTwtpg5wtGYdJMTvGDPvs2qPZyhBKfYhxFLp",
  "key22": "57biNFpydGvYHwtE8TtzQhiocHxFR4mk6dy5dFzaYJj4kNviEmxjduSWTJgVJuivVDNWoegoC7RG7QgbpjYysy7V",
  "key23": "4AkaVmCWkkGXEtNZt3S7qTgNMQznNroCJ7MnmJMTHif9ps7v6LvZZkmgCZ7oc9EuY1hAntmtN3ca8BHDPWrPo3h5",
  "key24": "34wURRu7pDSQoywx6NnaDE5DxgsCiaxYEBiCA87GQUR8Gc4RCQYLGF4zCydaWSZGBsgTWktvoqPn3KPGDmWhVQbg",
  "key25": "5TbhSULV4ZzD5PFnUmPkukPKYbtnyESsN7mmSycspaUn3WtHXVtLzuHRjfcatkfPskKwoUHxwgHHm6YDwKMYbML9",
  "key26": "5sR1U2hqcwjoGk9zWFP4iJd4psFRpW72ysJfWMjwxiWm43DPh1DvyJ9vRadkKovHd9Gz9cCDzMm8jiZfybRfpHeT",
  "key27": "4ifusNHy4Asv9Ezj1XHWhCxQa4XgWT1avGcJk9SVmxwc8q3cH9j3H3TgyhmkTGRuWc5SCZEVB1JX2nMLF3ys1WxS",
  "key28": "4JPhG1jiNZmySoVpgZoKNuPtDLdHTCz7jBAaYyQ3A3dfwYCuoahPYMiDUVEceWTTf8fyha3UEuwE2U9AV6HDdV6Z",
  "key29": "3xv2VBi1xzWtWHT2CPJ6o9JYSR8rHw6qqUYptxKJPQeALfEvdnmqTjpaH8v4mrmU82wXJA65grx11mpiNQiVc2Sh",
  "key30": "25FuMw1QAp6ssiBGnMStuGjC2QH91jvcbxwKgbTnoBS4YtNVBnGBVekYtn7E1TC73mXmkGTLpb82tW4MUHJ12VmJ",
  "key31": "8dLGR6FjHN8KNMfnix6bRtSQTTShHJwNtDCsaW6jQy3bTmq8Qm2ZAcm6spJsPaLRj2B7g4GKcz5kkNMo51gVecP",
  "key32": "2gXEhZUzCHAQmyUg8ir64yZVsYDuRXzHFtkoTborbHXdY6YQyWz6e6m7Gwm39qbihT98McK6XfbzS4uXg7f2aJ2b",
  "key33": "54Cx6M9MrZfEbcEHh4b81Fm23JYqBMfsqwbcGLTuccpZB3joJDc3eedkxukYXxUYM1YraDF4RqVQ9KczYgWeWwwD",
  "key34": "2KjHj2rsHkpSJZzpHxwkJMGDikh47YzCMaHGUqxVN9JBJEgUMQxeqdmDqLqWfk88Fv6VkQVpgyhbumSsYkQiLseS",
  "key35": "3rxMmUo614UJRKceC8QhPmog5zvH8w58gnBXuF1Nprwomf5x3vqXC21wBUaHzAG6m5CeX3nvq9p7kbVoYZjy1gN1",
  "key36": "5nVtggtEV5Rk1Aro4ZuUdBfvCBjmGi8NyyTTdSj6hG7hvxLha7trbwEQsWpeZkLX6PebFKopgVkx2UFtYJHkwS9F",
  "key37": "2geDrHugDjXr541aPDiSGZmJtKxqkwafXTZd9cJ27jUvobW9XykA8AJC9fMTtjizd4Mx558M7SFZD2qXfiEzgXpm",
  "key38": "3nDrkdqX9rR2R3xbAJfvZyLUrh13XGdidYzstjFeW4CWe147iTJEErpWegoD6wY1BVFWka3gHzf6VD1VxCjkvodU",
  "key39": "2PeD6gYGxLgrZAWuuXavQHe5C3qgNVzq3GPujgLCpTSaeZaJg6NR1uojMWaMMAKmA79AjXce3EyZmDMQMjjTzaUP",
  "key40": "35CL3JPK8BgMeQkmYmEgEgjje3ZVJpbMUU5YuKuiLqe5XLbFwExX4bVvAo6Kny7LVBTmQ9vXcGybdW4nowaCkL1L",
  "key41": "3izAp786S26W9Q3BWTEV5D7FhRxiDEpk6p99eWZJ4e6fN7AsdyWDksw58BhSw56RwiUDhBDSSqPhLseNLfnUysRh",
  "key42": "2mk3o8NzQpghNe2gYA2T8MphGKsFwdFtk254wiQfCkyonac484cymBcHEhP3R6BJwx5Pjw4eEiX2rd1VZMX2GzUR",
  "key43": "3fd4Z4LnWpuEAGQRWBWsWFST7rkW5sfW9n2QLP1PbvPuUWyicdaVkhWfQC4xdUbPG7WUPUmiUMhLTyTzXQNg9cay"
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
