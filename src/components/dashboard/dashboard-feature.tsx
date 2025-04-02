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
    "4qiK6NurpSWVJYPAA3ZtjQHEDscVYdBUzR5tdPH2fL8xrrBvLEoVXhrY62jbtPsJqK9AAFSAp8gX2Ad2kPLyTDJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PoVJkzX5UszUhUMz2XNrt5hH1mPNwHpN9GEJrGQU8odngbCNRnnDuH4yFDBLTJYDp5euiEhM3Kb81Dhaxn3YQ8N",
  "key1": "WigfRg7Z2svChHKyLAp6AT98muitarXDdZPchXkVJFfCbkcbth4WdRKbJHMnHzGwagtFo1squbyvQn1S7bwyvnw",
  "key2": "H5JE4yY5VytCQF5FRdUECi83z1sizZHPV6sZ3gi5ocP1VCCojVAeQMNADdYLSB4a4mKyHxZjNeWWimhbweQw5aP",
  "key3": "4wHmWsLBoUpaoTrDbhszwofnJyyh1cNzw5JtqwzLvVLx6VkwHZe4wVnBvyGGHFhv3XzGF4mrRqU6uWqzMsYgthqD",
  "key4": "4w252wUdcHevh1KNEmsEG6hoN1WDEfcGQ2Xh8RSDbRzVrNwxE9Cqk6GQ4euauJtvKz9W9hPAumCbkcaPGL6BhLrr",
  "key5": "49BpZK4pdQQaKVK3TV91P9zfpFwWkTWiVPHnhsvktmxo3uUVPqT25hXxWxUEMNiSfbsAp98LdDpKsVgvb3upZqRv",
  "key6": "4uKhLiU3Dy8tnoRbZX9fMY1GyZUfPe6rKVrdMCvFLHYW4Br8jeBXs6mf8kneMnJGszxtSTYwDj5PnFWs8pPH9w93",
  "key7": "4qcwwYqWtnMQj4925qN4woJFfPsbgFQTqZy6a67zYX4cHL31riGunQXdbEVmC9EnbzM7iAF1gLponrQjjzAc5Lg2",
  "key8": "3FvVoKYACbiY38QFYMbHkh5FrGuXpe9FmmoiHNo4euFSq8zwntsRNydhijmN3pW83aDQeR4wMD9oKeB8axi3DLUJ",
  "key9": "3LBCAKJ2PwmX4LmXxoRNH4vtSSeYPwy2Z942oBrBoZw6XR6raGJCp38PC27bR1e3MTvcrVgYra9PJbQ83r3MakDw",
  "key10": "2h2gg6CbHVnot7DGmUcVEaWv1wj6W9FnYVwp1p1j2Gq7ChEiy6mhUyc1ugqFjG8ad6HN9EnUGhH4p5YpQL5EXyi9",
  "key11": "2DQYw1hnmMzjT2biwnBxCYCP9K9N2EEYK5BUkuq1Aga6TMRWbPU7anSYbAfPmarrWB1qBDpTeU9f6xqdGTBtrJRB",
  "key12": "5aWvCt4ivKzpaukN8rLjJtJfjDy1ZwcHPX2DPxQ7f4W5KfGDzXqBThmGV3ZnpWh3YodRiMMypH6cTLNQ6uUztf4b",
  "key13": "3wE6sLJtGKPiT6Qu2TdtbJfAnq3mwpixr31MXbSP5zjmoyMKuP2ag3gnMJvfuuzazywPi2TLPJimujSj6XV6CUXp",
  "key14": "fJeuGA4A62bi8mo9YcC683EG8hsPrJmKy57rUT5pCXU6zra2w3WNVT3TzK5Hvi3A8yE9gUhCrf1neF8wNPtRMMx",
  "key15": "3TkpgDxwTm3ekpU5AhJxeryLJrJh2m55DMUaifVK1XtJz1dPSLAJpxEE4oGiuH1k5thE7s4N1QpSuCc6VDZjE2Uz",
  "key16": "47GSX1TAAofpdFzEhv1n7evDspg3UcfyfPSoD8RqoziKq1aUKkjevbdECdNKWczxKG6rsoLGqdhY8RUJNqUFQHaq",
  "key17": "4JnaWUKDdSJCmVFyrXoDvVkFGkWcM4EsVBoK8bYugsjubt5rPrANQBCy6sZLSVwCN5eke5DFj419pLgQeuCDBzDj",
  "key18": "5YJodQUaYdN2o1rQfxrxG65F8mTMGYKoBDuKDN6dz3o4RLHQ6D1EWkHRnEVT7qiXKp9GG1ohxNA8Q6t7fh3y82pw",
  "key19": "2YmufGKCk7gGGA4vyUXL13K6QTQ86pNT2yP6CLepiKrkTbEbURXXTJk2yN9eyHeHXkEvwAAAhpQQ3EG2d5gpLPzW",
  "key20": "vFxXdcUkqSLyRJK8ZsN1FJXWF7P7tW7NdZgjvRBEMkQnVf32Gg13noyT5vp237soRMszpiE3Tf5N3JngvQZQtXo",
  "key21": "326ga86FUKbToRXc7npGthM6665yNiWn65W8NgEFC9rqJZL1qXc6wyzKFQckFq26CNEPcW6qpirrjguntR3xbV6x",
  "key22": "4xmLmnbnYQ4R495ELVZTxX3Lu9BV8d5vnyAXq8iCce5zoGyVLCTQ5mpDc4sLezxJyTeQRkiqzgfs4LzgpTzJNptB",
  "key23": "h9serQqNhecwYMmZvrXedmwbxQos5PkNCyLcGFxBcR4E5qaXSDcU1qcGVHp5pvLsbCeN4KxCZYbEhkKr1qdYs8y",
  "key24": "5pXkbcRUjqmPHK5tKHRfabN35hpHkHQezqgCg5jmB2eLFYfMynK2ECW7PZDmwuz9XTrsoJ2D5PoAYfGsRaStbNRr"
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
