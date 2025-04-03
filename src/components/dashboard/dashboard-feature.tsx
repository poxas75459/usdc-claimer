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
    "2gFHBwovZ3rY4QyPgED7kfWgc9yWhMh1uQysUufYZdbdaF86EQDSyUNStswosMs3QHwx8MJQ4xyCanBbpvXB445U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XkHeahLmv678Cxu2qEcysi2cyQr2rgS4VE4ez4wqeQDuSwrxVdGBAZbQgE6xa1zquJ7e7G5Kf8K53BqNCjnc2oq",
  "key1": "4qds1ZDyS61XFpAfLWvaeh6Gr4wevLfhiGpE5N6JCnZAeryZt4uGySVXEbcKNV7VxTKw5eomqYMaSg9bMG3CWvfn",
  "key2": "5iXMkHdAGt9RzWJZWVZaaAvuDJRggi2oXaTReF76pAZEWnZPUGsNF4uigBfuHp4PZJzonWke2RNyeKKNqZP3thUx",
  "key3": "2RbaXMLTDyM3DuZnMA1TSbS3oFEF9quYAhCgvSKJtpi6ygByDbnt9znaWWWWAJWmBPfRSVByRGK6KC1NjQh4VCU7",
  "key4": "3qYXLHKmzyEk8tqZrKmcSHpThFZ6w98Cs6qptFv9DzsmMXWTsrR3YG7jWQviZcr653okYDy3MobCqj7UYjHa8Hzn",
  "key5": "i56pE8PtUFyapmk6jSUQZevJAtbon138YwJ8M6yYDhWeZ3oLk3FudCBBEvXuXiZ2Rr2ZBU3MHpZPtb2u8pk2H5t",
  "key6": "5wp6TEJ6D6EQbG8XgyTpG4KjvTBdufGrnzDbyK5BQgouATYGNX86ptqA2HyT83SofZrs35XjdH7HuxumoahAmY7s",
  "key7": "3M9i4hpf7hGeQXBfRSF7T8qXc6qz8jGz4ciECQdvafdXb8i8gBJiLudyensuFgvibn13s722MmNcrU5MDNFanKp2",
  "key8": "4nDgnupzBacARDXxcrwsbH3uXSVLrNSiXqh1peH5rKHuUsMLdeHHdSpa6SyVG9LJK6evgo3jJjcqcUbQeGB6SPpP",
  "key9": "2pTW3Fixw1XMPw7nxtjdLHqYyDnyYRXmszR9bq782wzaB72kye7FXW83woLvhCE96mu1pEoWH1FQCdzRezHgYFuj",
  "key10": "3k4dSaoQhLNGAAuQxCdYRDL3CcZWhEPYAwcA3G2vuU81xFrqFrSDeWbytP6zdaYwpEg5PuCfHVSD7hRA9Bw9HvhU",
  "key11": "fGrqYJqHR9wYM2c2iA94pYn54cGCARu3SCWz1yZpZgWMb3vK9S2jtPMCZ7iu4QDf3NJZ2UZtH2TDuj2A9fkMXwk",
  "key12": "65mM8zeZG7U8DiTPo9sc4pAJkuHyjiHhmuTR2yguDWCqGL5uVczaWpCD7RCfZDoRYDwtk4KWRyY3jCwTfXs7mb7q",
  "key13": "32RVeG71QnmTqJUar7dpn4FpgAwPBtF586jpfEvuA9Jks1JcVJ8SE3b2UiT1uXH9inWGs3HN7Uc2T2e1HAgZakrS",
  "key14": "2sSwzJcEwCBDg33yZ5yncKQFNQPwDVbdXLbSVesLW938rpcm5gFQLomAZCL3WgAsYrm4yAn3DyLYHbDdTZtiRC5Q",
  "key15": "5ZoTxXH5KnWQor5SneCNqgvT96gwYNgzmiaJEUYQWK4DpnjAhTCnthT7LgEvXgKj3fyEkDzU2qRyVbz8iZfsX71q",
  "key16": "5WBQFNN4kqAj7YuRSHP4kxK2yJDkJjkW6CudmfPw8m7A2FmfEhtLUjFnKcWXWKNHfzAXkAMUCEq3WPwLLpHzX3Lj",
  "key17": "SCCQGKFdUYZAcmk93Q8jgL3LjiUU6a3e1bHW5wy73PuqB6bkYMsBPGiLTotgdjKpSvdhvDuz2S5W9j2SJrua6fd",
  "key18": "3mqUX5aguEhZuTRRynH6cUzyp34RktEeVUDuEuFSVML4FA3kBhyUmVVxCj4sZqeGHb2vmSAvk8mNM1uB7EB9iQHt",
  "key19": "5kKs39JFwDW6QJrveTVjL6eZA8YHXMr9AMBx7vi7M89qGw1j3LMzmupVm8DP9D4dm5ExLRj7d7nCF9JJQMWZ3uJx",
  "key20": "tEimDdZgaWjDJgohzGsxJL9KH9FUEoKsMFbeueSZUQ7fLCZKaMGneJZ7GH42YwsCmc8hEd11PK22nD4DMBYhX6C",
  "key21": "FCJA4HxzmEFwwx2NZ4AwRhmmLQv6WxTwXU35JKzrCYSWPNDVqjU6SSjTFWgoSGWKtVt9vgkqA7jBCLvzCPUSgDT",
  "key22": "2JyNmHGaYEiKbZTifXtFrPkQPCg6kYiFi9CYjWE5P9Ay1sWKGvecb8HWhiW7sdEdZ33CdWRyQPmCRXH2fAowkY2B",
  "key23": "4wS6RFF5bqiytjuoZYBHHjdSqaunt37ix8wuq8SsmRPiYQryqrUimB3XeniQbrjijoY2PFAT5GWdYqQfPhDSji2b",
  "key24": "nWZxRVJBgL6nYzhSc9hXQYFuwxvAfcCSGmFsJC76DA5Wy6eeQDGFFapyNeTngLepaZFjoraNS8DiumVw2PrSVYF",
  "key25": "2JgUnzAm2pxK3QsML7wGKv4DNvrEDtDmzysbUnhUPwueGWuhfmf463UmCsqYWgWpaUPxFPid1h9vFGpGLNKzf1CX",
  "key26": "2sFpBGeJS8MLYg9STz2vn3NVvw4TFmW1irdnhFjWeaRgEiLcNQ9bArtVYNkLf65jMgxzwarNbUBjd4MTpEijhWDA",
  "key27": "dRC4DiFo7nRcNNGBzs6tc6BivJMy5Brd7APhy9MZjht7M1kRhVsmbNbpuQ5RmVLHWg7jrnTumRFmBJmEfhkQRoD",
  "key28": "4Aak672GWco1TbwWEbRzkTpkKGLbCMoXLiZRVqFDpP4cbTnweWc3P7pGe62gqb8Q2CtqEMKTdstWMppGRpDLpWdt",
  "key29": "yW8wgzCVZPxpX79QaFcPtmbV3LhLsK7S8KEdAZmZ5QiqoKGckiHR5cYiSz2tbf8uWoUreza2eJ7JA2xEW3AQpJv",
  "key30": "5EoJeoeMmDk4ans75xuPbm9qbNe3A2EPqMVQExMT5EnZpDvu2z2Dy1f3ki1zK18N31B4ft6B5zdKMeSgJYVtKEvP",
  "key31": "2tPq9cesj8m7mueQunXAaW19GnNuFn8NMTQpiA5pA6uvJgovMj3xJtNrKXZ6sDjAGXMn79nDq56PjU3wnjt1j1EH",
  "key32": "3HYsLcHUTw1MVV4GfFZSjjw7Rfven9jrpGm6KqMwTZ62oh1b3DVA6ew8NnDfwhhf3VRFRzVwxKjLb5oUECuGcXLJ",
  "key33": "5ufFvvzsHbuHy34JeFEwc77s3WHou7dXM5Wk5v3ewxGfx3zN1XMk77UXoXgYe6SiBFiJzJAgTDAgzRdw2KWRL8sY",
  "key34": "3tPRLtik6haGk2cZJvHUHvU4PCezEJnJFv7rsBcF6PFq15d3w1zAXAddLyjRdt2LCNUSZx5b67TJNzAWvNnmuE1r",
  "key35": "43fpTjBdeT7Y7eCKjHHzKGU4rSWdY5c6o1rXUjGyBMjd7qinkKxJb9qNv1BaX6jqbUbWc1fBz7Rtwq3yVMYiYVrz",
  "key36": "5hwVVCbRxgVy5craaSY9iJ97MB7JX4YUTxx6SJjGtUNiqCuPU5Tj6egx33kx84PiKMvqerpSYSwS9GStc1jH5row"
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
