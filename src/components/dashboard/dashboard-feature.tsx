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
    "4XUGtti7EXyqJBYC2CTwahmnoyQPB7sFouKUhYJkFtwVkrxsurZkTZJYWwagcDSh4XmtXTsrxTDJzwBnSBWjSGa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34gfWnMu3DPQ8cHbvJbXwAXQNFKpFwmZ2oGVTYMVMwLXeoTvudCbUAWpJfugVWvyuENBwoQxKcW1JGzPfqjBKn4j",
  "key1": "XDyGu8wRzxmMfF9stgbC9EtTU5iYPDwYbK7HxisUxq4bnuuUDKJuptGTskUQriSTg4rrqsEYM44pKfbG3uSkpGA",
  "key2": "3nB5LyLZ4AP3toe8xSjHCpNeM2hQmNnfGaqmVrkcSykcqDxup6449nreQ2yUwkAkw1tN9cBxNf2uopNWMPkEMVo7",
  "key3": "5XpbG3EkbgxFQ4WjU4EoJPWavWCne7xMa4WDJxJsJmJyrgdy9o5CFFEGXkPgZW8ZtZU45WE7qW4dCf4BznzBgPCc",
  "key4": "3f9SUvamThzacGDUEWQMAWM8JmuLpWtNyaL2j91mvxV97RwxBDtyxTsdyQPa7DbUi9UZHgE3RM6wBbkjTH7URQ29",
  "key5": "65Sz3KuG7KiYrtcen74YHYHiYZei9wzLbScWVPLUf3kzdHE9sAvP48z1sHkuw3ziYU9kycmZTKRoqubLQvY2EEpU",
  "key6": "TsuFh7X4h6grv65isimX9drvZjCj9HfE63juv7kr9oSSS2P1DNS2hZz7ZPVaiKMqJmJcNfBhuLdrtbuXXWt82mp",
  "key7": "26BgrxFStraNkwPjthBkXRoXKWThY3zmcb7KZaMNZ55vKCguJqGr48ogpacUfpseo1ZAV8UNvYkEwVhRqaA6Ny1o",
  "key8": "2sJvpaFafGFjqLFMYXNsZmSiy1E51ZnzciXaxz6t9JYSfHJAFaiqtUfFKgh5xmYMHjrcCPFbdKngiwy5h1Hvqj5N",
  "key9": "LsgRDzLQvTYaJ8CrmpBVXgE63ZwHzQXgLWVRiv3kCFmuMY9wJTjDng6R628fpvBabaevxqJFzKd9jtyWL5GuKve",
  "key10": "3aYEne2SiaEjcRp9CxoiX8cxMi7Cb3pXksqeY1VCinHMquPiQWKJWNjhjim5UwENwVhksvah3Pv87FNNfDTQh4EG",
  "key11": "64HhThybk1AR3a7uSgjHkvmMCxxrKLHXnktLY6o9yvMkW62HqMsZ6W7UMxMoZ8Sa64iJpBnjwMWnhmMDSZvw7So8",
  "key12": "523XAzGyxgBqitJjnyzUbtnoyPZUHJunmnGB39L2PBWu1wA8UQwT1asuM8GJ9GYi4a4b1jZVPwBB9LJYJ6cVmtZ2",
  "key13": "4PVfmi61drtMKQGm2k67zBGakxH9Rwx6zzSsFvNx6Sy95cFjdtiNiaJYbq3r69Z4H18bi9Kor5zW8PYFH5XecRvF",
  "key14": "2dMpa6Nd1iJkhN9z6Ei9Dw4L7gmT9MuFRnNSD6dZegrREqbfLD6vN354YM8eNJ6GHGtCsUonJwVyJRNNadU9LHAr",
  "key15": "2Zp92HMdbbFoPRRVT6D5Y9bcmuBDR1TfgVsZPc6DktFwLH652Zcsqz5nSoA4cMa7SwumA9DRgE75kSpZHXtZNvHQ",
  "key16": "5PANsAySdj6YGXiT15yUuwtWQb7VVsqB5d41fnVyHANgZ8Vko3GEQHCXNJ35fqew2J5MZqZURjvQLq6JdVrtnEkE",
  "key17": "5FxBwTKAx2TLDr2L57apD3CZmRMVa7x6niSMxbr1VKC6TKAUEjHPdLCwbMQ7y4oXPkFn29DN93vord2REa96x8bW",
  "key18": "5MPuqF3WTSNqrybXqZEFDUkyZHSQio7XS88XsxZauLyNZs93or4DyYf87r8kqW2rEdWCTkqt81nmcmo2e7YA4keb",
  "key19": "4Pn2z1vUgbKqvtnWLXPWBwzJHbf1dYPkp8vh6fQFewt9kaRLKNjKgNzxZSQuBnbhchFkMevhiCuMJNzNFDoEPZap",
  "key20": "sC4G1j6Ct6r5BU591sY7b2PZToURkEbfYXgaN3aSBSsLhuKCEbc482nQ9nNsJ2HHRMaE7erAmFyZxxNAj6wzaBq",
  "key21": "3N294sAChQQer9HtdDSMJoA3F8FahbHEx2X454LGC7AqCuLyWsq67dxa4QbaJz14NcmYhpR5nhn5pYf99yE5qL1i",
  "key22": "wDna9mestVXg5pcLcwKhtgJxDUcW6Cd6eddCn1PK8LqUFiRuW1iFed8Tn88W2hXcxkcNEqnUSFBg4NSV43ER9mv",
  "key23": "4GcwL1MajYtmdPkgeSoBX5r52QEjn5GpEuzGjKU5dx4wi2KQW9zi3q1rtm6cANPLAh4wBPjAntteHcLhPd2QZznz",
  "key24": "2VzYBdtj1M5AsoStg4c26DMbZ5HSEUrFvgjKzpNQdNL6hcd4dfAmLvZpbrTyM3iPjw394fQzQ2zHrGYJEJNJaAX7",
  "key25": "4uJQc4wkyYrop8vnJdJ8BUzxs6qfNhxLhXqRQpFrFD2nBUmhaDgL9SgekD5GgsiwjEALAipjrZw7vKkgMvZzG3ex",
  "key26": "3YpqWqC7BweRDsUFoyojaTSjqkXPYfWdY5bTvBVzofcCEyTjSc1ojEpZZ2cd7nS9S38SEgbyDTinKgsSPkFhRaPN",
  "key27": "QVeuzrxj8bd7DgHTLdwgKx3AKoN4tRQS2DJGd2VbNKHDNM919BxmjW6fZ6UsdF2MaCMxYR1m1Uj64qN42tQVxqN",
  "key28": "2i1raz6EEsj3FuZXEo9BPLg9NL3zVnVaDPgR8HojuWqdivj9eGa76ct2ujpQwvf3Vu84NUMRWPQDa95HuYpYrv7y",
  "key29": "4KUgh4jeJ7AXnxv2bDryZS3EXFoZCirpXw1GYYMY2Uk4myFJ5vLzTxXGjcJdmA8ZtBwTMMMY54o1MbD9s5G3hvDR",
  "key30": "4gpZZb2RhEapnLNuP1z9cy7q2VxrJYJeKa3nok6aji34dFwtKUwutcGJd8h3zVMFppN5ZZSb4Rcdo7ykCgLwyt12",
  "key31": "2GcqrKYwTk9Yxf4dAxcoMdAPnuddKjozaAY2Z2PJwCz6KmQwEMxxaCypHNJvP5371wJiykZ1UgugRX3B5gN6Pe9X",
  "key32": "2egHGrneh1sZMzJY3uJ4K5qz7A6uWATdZ43d8Ekyxrg6GWvr1FcHNnyPr9htFwbzJTqmxTgjFNVT38ziD2zvjvCt",
  "key33": "2ywsKMsEjwDkb3bJ3ep9FhKvchGgrZ4o9QhMaVXcN7DiFV5cVg53NQ8aYjngMRTwq4GvZoDaZMLzseiAPMv5nG1G",
  "key34": "4otdDxfc6Jd5aaEzQEHAVCNvLm88rizJ8pT4MwHrLGm45DaouHJZqGyMbWra4VncVUFzvjUEc38L7VXzkbA5Li5u",
  "key35": "3AWiEryKZVRDkxKaAP8RN33qkNAk8BSGkNny4KZke8xLEF2BP4SfcqAzkqY6mWRvNKVs5Fte74x6L8HjvfjS1B33",
  "key36": "2puR3icmm8nZViYzE8kmKAwBxZuCTRbDtBaQXgwe7n9A118qhTEHk7NrofdyrpBBZFi2ARZXzyidNZkJ9Ax5L9ke",
  "key37": "2NhoNvCmUJtJCuGocjXcYMYSJSW8vaLWXLCVLkQCXBXaLvwMipYsgnEyGqytKHBUzSzUhjzCfC7FmbqtFMp7HMHB",
  "key38": "5FpnedJjeW8a2yrA4YFQvpb8MWcdXJsk6h3FYjQKAtaf2W7EGrM8BfVRot8uKc9Hmq1hWsMYxM12ZJqwPxnxMAGL",
  "key39": "MMgu7B9FG2uZbEkY3Q6G6mGe7rAwzXTQgYA6ARWQy79UV9G16qd8AhYpXstKP6v9h826KTphf5UQ8tAgaz3PG3s",
  "key40": "2Fk5bR8t3Ggj42CRknp2bUJ1dcLf4T7itZjjhYiMf7FAGWZr4pjL21UiydXNcJGjdThhXpFsavgnVJsWCUopDExv",
  "key41": "5rVJcitUBsSoqT1khshSHHngTwpVvT975SrAafzwxVjaUqFTCYAx7oq99F6vT6P3qT2AwK964DbgGJotgRXH59og",
  "key42": "2XLGnWYgnCZZrE8tZY9psRNBJF6DtabfPEsLH4HaVViuEMLhoHPtAf9gaQi4r9vmf46KnY4HACe7ZgYE5KhihGs5",
  "key43": "43X6ezVj2AHH47R7amTBh8dPrfoshxq6obdqRxLuLd7r6Sptb4Xwe1g2UASyP2N9EF6CGnvgbNLhbuAuRxzGXM48",
  "key44": "pssEh67Bu62DYz1fa2zesTohaMUg19ZdaFsqpc69Dx1oUChWjSeiKSkZ62MTg3nBcoiQL8Qrrwm1uGJGdUwYafW",
  "key45": "S6fwxixJ1jJSQrWcnRfyfm891KEBjbB14U9QXDaiSr5ZSULuTEdDkFKvF2AcXtarjvF1ja9ZDqfBmYrhTcWdoqp"
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
