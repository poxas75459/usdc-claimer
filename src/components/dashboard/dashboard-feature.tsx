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
    "38sLVaS4g3zUuvMQbWLqmsGfncPqMgQwkKXVc79xibiAwt7hAYRTFJY4XYZbDuijY3JGDp8Y9E3Ra4jQrpYcrRUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XXfMConmXEXdXR9FHjz6sAdwPgCyC6d4gX56xpuB4WJsUcwo9YmVkVB2MS6DixpDGgtkNsHGyyAnR1FpxinADcd",
  "key1": "21cGdhq3y1DKbFEBXmWsimegRjziK1NKgYPt9ZCizEXkFvXgBpVJxUzvF5vUuZysvCHGU4p6HEoTB7ySxi5N7yD3",
  "key2": "2jr6X3QCQVQRP2jqUW94g5LNQStVtXbkDaMc1UDFuVxu8xHk2PxYqmEW2TUBnb7oEtRikEVnBw5A3BgPtVBeKfGp",
  "key3": "3iXYQWuoTzqmRr2G7EAMJVpKBhrpduW6AToT8PwijBVymbVvpdf13fv8ANVu5J2QG3ULk1Vx7xLoMZ2srU5xesay",
  "key4": "2vEqHcG1pEjyn43vU1schjeeTnKEGNusvdqPoL37EwoLLbg99YjdmUyTDq896VqXWn5BALDgKcAz7zWQm75f2Nm9",
  "key5": "4ffC7A3RNpF4bQHqQJcBSeBrwaa5JsUc2pwVhUUW8wUYNDJfJbVwkGM12o3BcxnBqPRd5SqvSdVMaNG4HXtGjFFU",
  "key6": "3TustnqipyQo4rdUBDCzCgwYkrxpq5ZwbcMhmH327u7XRmTTjTQsr79bHA8aCHBNjxk2XGgBAHTAeM9ZKWpDR1wH",
  "key7": "4arjKApitcMZC5FGa9NdxYWYhPoyffP84VZnSP3mLN3n5vU8sL8nC7xXQfSDFkPevEJUfNUtqanCcmGPyKA9oerj",
  "key8": "3tRWcdhHEPBupg7SWPUVGZY5afgXma8DTBm1SAm1qqZr6SdZYE4m5m7fQKJdwRSmUdieHVpfQKvwhMTodu5RPfp7",
  "key9": "4RxfLDYqxggvwEjvrLuSBcF2ZYG7xPRqTCSJoeqtAfayPpLPsQ1dLj1a3GkFpuGuujZkkgbN7Pt11XNmMTyhPJ7m",
  "key10": "2jrfP5kJCEGceZYSw2XtnWb1EdAwdLq6an1mgBoxPfhuciQnEugxhLfJAon5ZwDvTbWKnsdNoogMY4QGZGkFfFGh",
  "key11": "23eervBybGJk5mrocVAkSQMohKYUMZzGoCE8cKjXCkUZ2ABQGgfDk3Npar1WyN632uQJtRiQdvq3sdwRmgc2jGRn",
  "key12": "51wRJaVtYFo9H6uxfzb6jsEJqNkcQqZs533TfHKYHY3iKNrYhzU5JjgQ2Y7Jm33uvJmvSZdzFJpp45ZAdoey6DbT",
  "key13": "3qTwR6znU2TkJHQPGfgnpUyz3kJSbgPzqe9ZZJF3eEnFMP8mFFSWbQUDk53ufgap9xF4kYibz8Ueyt32kf66Xhwx",
  "key14": "3rvjiwyR2JuFAynnLGaNDdXe3vm9XGFq3rw5dR38ngrNVLMuguH2x8gzF8TYoBGcHohUaF8kb1jAuv7N9bRpqqt5",
  "key15": "3o9kUFouesaH63ToGCKgPCjUD8EnETFbiu333StkFQfhcEDPyL3j47qn5NGbJUDLousMcme8h7ca77k9b5ZV5kaH",
  "key16": "PoXwsPqgkfkTM1Wqks5B7WBUEmsv3sPxe8Wmxbcn35yN9dsE7xnbsFZvjwV7f9oz77Ywhz7AUCv8jJmk8WkPNAP",
  "key17": "57yMneLBimkTL44iKyY4FsLNYa2ow9mPUy3tuD7q61CtZTaM9G1DNGCAd9NWHqsKdVK5YCMuKkQhVEaDAWwTKp2g",
  "key18": "5hwLyRJRwpX5X72G5XmCEZiLV97hhht3GKxGQds1YtEAKCsLg4rCprwVA4DzsmxcLd8BFf9Rft3YRXEcnWbCMJM3",
  "key19": "3bE29iNCr9GEvcq5gBcr7JpSgiab3PU82vgx7pGjpQh3joes74XBhrbNRJTFqVeAM9dV73EQFEv3caEbLwjhhj2m",
  "key20": "5AXnjA3wnHxsnrCwUJcQs82Dt288XFT8AoXPAxhKyYCDsGKiDmp4qW3Evr4tqXjUMzhjVbo3prK21dK3cMTkZt96",
  "key21": "423EaA1GxSQ9XzBakPLHi5o3taEu79HMLDtqwb2aBebgukvs6acJkysKdesuwSNMA3WJRnpqXyXCXa81pTWGTMkK",
  "key22": "5nMMqwc3o9wZcdvw8K5S8yK4pwiSYfcLjpZyTUX1XYY1LDXDtMgxW9vAFH6gUh52igbWnrxxYkGXghEopMu8rZ51",
  "key23": "2vM1sWz9oiUXktnSgh9kZo7zC92hsUUvTyifFonc4N1qDCjgPdXXhwaW55R7NDBRtqarKxdrwZYiXCD1cCw9SUN5",
  "key24": "5z3J5ErVrsViYXaEDxQMsMYNQQhPRPEUF41h7eZ6tKTu7mq8C6ucQ9WE2QSCuLn8KjoBA3KC89iBUpJoDj1Xu7Up"
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
