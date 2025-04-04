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
    "3gp9mji6XmNoas3f5JYnNK8vZGabXyHfSiv6sn52XUHDHda7GzP4ssWCBD36NUpBtR5Xm7dDgToHZjheSgcv87fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f9ebA6k2fG6R9XDGvBG6UWvd6SQDWnbtbQgvrmgYp4A2vq1AwnpEvTcuR5PuxzwpQZBtAuazbGWJH1JxhBNF2LT",
  "key1": "52CyaCk5c1eaGnrWmZVqCHNJNFSxdvdbd3KkZamUM9iPE4UTcA41f9B32WV5stMBfnpJJ2nZkZc3DBogr4fYEa2b",
  "key2": "3wP3ftj28dsJEJhr1chGy8ys7oT173maWzX3ziwmizaD7BusFrGgniKA6JA6zUeZSf26LwzEBuZQabJDCEpDRKQ4",
  "key3": "3rerrENU3NMWKqGbNL4MJb3ZrcjiLGCnHgDQSHahzLkAQ8TcQhVVmn5XUYQ6X6vCkAxeGUGuKtBkUfZkCcYn9nae",
  "key4": "DxLgusborCJ8xeoaXjTKXsbYyuQT7ghviUQ2ATLBpCQtGYcCLzxrjtGwYsZHFNtsPVd9SoyLKYXzWvePLdArom9",
  "key5": "2UNrW3EPfF8YzXP44Wof6v8pQh7pVHV1Fy7ym7i2aRr5kkgKbx8ngP9TK6wQ2oUsdzBzQqf31oTfTbCWKzFRqoAj",
  "key6": "3r2opoS7JwpS4vKMt2jHinLfyCf5jUs2XxDhC2D3Sp8AHH15fVcGsyhmzGhMf5vnLp5rZcrCmGq3BSBckQRuKgmt",
  "key7": "5W7wQ31JtHQupaPM1grHDgha3X6Q3vLm4CjSnh5Ns7YTDCGdvRVGPAuNH1yxbNpYtj7UWGGBZ46gjSCSLmmBcze3",
  "key8": "5aeuUNUQwBECuqdwj2ScyJwn7NSLx8CEt3kiBMqnzVGM8qzh7DrZjunXVrAHzGdLKyzPVP5UWLJFCMsZPv8eggVL",
  "key9": "mFAw8XVEZadDqZyaYUy3Ksnrtd4KMdukWnmrt2JPaExfw8iYQHUPDLZXKSMu5RBZKKs5AigzLpvCGrGKYzUiZkX",
  "key10": "3uCkZ1MGKmwzFCHUbUsZd4FiPPAQj16DwETPnkw8Lazs79e146UX5Jz1S2AkyUzHkF7RTdtXMgrD9xToG1rvqybg",
  "key11": "3VzLv7eKxBvyeVm54jzcdAAiLzv4ajqAhn9mYuDyQg4peyoU9HEE6WnRMCCyujCEBa94YkrLravTEakwYr5BoC7u",
  "key12": "4nrGhMkF3aryph169Tr9c6jA3kjz55h1aGMdXQdeN5S4kjeEDd2CZ8Nj3xYK5oUF4JQVmW2eh2PnSDhtuingdM9g",
  "key13": "wX4DZadGf3LK5h92bdEYQyF61dbN6DJx7wKGwfrnEcYfTrXzivVcUnBp9RHL2RQdcvALrUp87MRyP6CrzwxVnnr",
  "key14": "27k4JWs7WS8ckwmCsDCjf1SmLELoLsu1mkspUacMrCa43HHu3nvzdsE4o6f8swWT6wvcGc8iLQ4A3WfXMHEwY1jX",
  "key15": "xhaHurQ6Ksw8sBGBD6iFbVQHTsqQGDdAc7orwoMNAE5qxtFrMjpyTkDBhtkEGECnxthKTYQNCU5C75wPzAzr6iF",
  "key16": "U7ufeRUvjLkW8nJFifErVMq6JGu5cyWp77zgj6uKZpLs475C2SpDTtv8FwCg2is6Kx9xiWYz3XELFAjQvc2wL8S",
  "key17": "2noUfXW51jdABvMMkYauWRmHFf86h3VMzRrq38nfkSGKqYJWmp45JbMBA7DDrgo1EhYaJVLatcmamhUvTC768uCQ",
  "key18": "x1dNoQrVM9oBDfCxJLC9naHDi82MerTggoJ24ikgWT5zUrvCEVzsS5etoJXhycNs1cKv1dybfRztXRaWUVF1UUU",
  "key19": "2NiMMP9wSoxQ4yjQfWTtErBsBvhoATmXgX5urbXFNRtjbjmctuk4Q6WaQM2HyRR1kkBSJAEwWw1v96xXHUxsc2TW",
  "key20": "64WcXaFXbPoCAGNyUcet7EJrgEK66ZUpsJWbXtdztMLfKkHJBH8nRoYh3B7MmvssDoAdU4EmuV64BAG4jWqY3zAb",
  "key21": "4FEgxRy8FV5NsUVWTuQfLs7oezRQs4ejDUzuEKqpVKXhuQdYnqqeMxZ4DKnZu1aviHSNEuBRukZx2ndsxD8Bd4n6",
  "key22": "2RwQjwMJdcbCM9nm2kktNw6CYVpXxkcReMbf5pNQ4ngty3bAZKnDdRFRphS8jc7Q2kRiGqVo8mpmu2tE8CyFqRqS",
  "key23": "5sjErPk2THyu3Es7XqC3Y6sHhSwU1aeuF1kNCeied3JaAioTC9xvp1sFFCdvL4CP1ST96MVA5C9FRtGY1b88Tai",
  "key24": "QMGBdMtyvMXnwze88y8TZDPo5UQMCpaDUmAN9LvgCvZQtXQtu9LyKN4C7GC2zXcAiKe1HRFAkCwQrMEQP9cd3fb",
  "key25": "2vrHZB1TKSv63zmHnoNuywdJAMmYc4AfKtcUcXkHFYiCHcpt5GToUWaEJxXLz88xUncN9w2ePbVLQLcDE2fVkfAs",
  "key26": "3UeqChKe4Ab7AtfCdsd9nv6RxsyFAb9QH4MUC4QdVXSejvxRVAseTTLNGbcRz2hQDaWUF1jggxmPmd5dSEGcuXZV",
  "key27": "2xT8nBvv7trf6tpks7BjNAGbMriRf7DHUDqdHJxu4Gqs7P8tS8V6wsuBFTdveEyhqGk6SSrEMnTYXCdTqhmw8Ke6"
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
