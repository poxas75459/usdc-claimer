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
    "4E3BBFn2qpKB7Mxr2WY7LfnWEyqJDqqcHGTeMMiNSYa7bmQ7GW3REeGVEttgz7fbNGQDdAujdnYgnwbgJA9RZbuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJV8yJetCSmRVK8xQiZ8qwsJ6Yvcy6oXnnPeL1cMqvzDZTRVMcGgEr4qeEpMgSmdTW3seu7nqr8dbpGw83tBzpe",
  "key1": "eHNyx7XDVdmRqR1qS9yzgvsZniwDnqS4Sax9VgTpMS2mKxRUV5cKWi3qVJGM4i6PLGg1a3YiXuzS9y7oSfF2GyP",
  "key2": "4yg4LfyJmKuTrnFePuqTghf1tmPHD4uH9kdXpbQ1Fn26aowWwhZs4mpUz3JeXZ7JtjG8WLc4PMwqQMeYPBg7YTfB",
  "key3": "5b2cvJRKxf9vtKBkrFAWZ6inWVs2pevvLTQwshjgC3pdt992k9ULNUohia2m7hR2LBTMiuGeh81rdptKANjBobVo",
  "key4": "2TFGoxqHp61a9QYshNWDftmbD4WyPmURUoJ2iQJDYh7xBnv7St7ybABo2bwnVu3q6iStrB8cDCymAWMChbaZ9tpY",
  "key5": "KLLZ9T7c1E1cGtE5c2hu2uwAzHJnaWRYb8WaoSaupZPsMpiU2c7ySXyKKBu8NRAhayrDjqKFYKZe4JTF7ySTAkB",
  "key6": "2AnNscpU4su5Lrn7foBEbxZhVMQvug27WqLijkf6XZgQEs8tXtZBwFSWHgDtGKdMwYpraJzpTJK3iHqtr9YqYQjC",
  "key7": "2uaTNR8h5vFmSEY3DY9LwfY1QXRRMVKPWRJMpib2F5aaMCawrVEijU8n2R4JSdU1A63zRsCFp2MpPS77rH6KpdMy",
  "key8": "3afLWWdTxyLbLyywpJRbY9Td2JYRfoQuw3nrd5oTHVKX7m4fjw2ASRTA59v2j4YdSNwKYFHKsoQgvYAdxDX9dixr",
  "key9": "3EpZ9njxXfguPhb5Y1S5iEyqDipMH8dR9u82X5knkHRorX6CVKFxAbxBaph5PvW3jBV9XSNQ5vGcM74CM3achFsb",
  "key10": "2sNp3fDFGuMpDVR2mBppLRZ8NMQZyYETpBmooVoPYAsfLKSU3TiWHhDtoBDL75p9KdBkvA3g9PYLr4zPukDZfi3q",
  "key11": "4R2SzbgLMH7Ea4iy5q4GhYNuNLPVHVwQBMCd2FUFko2Azpefk6bBP1W9GzfXi3dojzk8kbfLJ1Wz9Sra4HgfETxa",
  "key12": "5EYH8L9AR5wVY13iQbWeHscVe4wuyq8hTsr2LMjE53BCcAV3B46DCmTABzxL5dTqv8cZw9QFHZJ1oWaPMPpN3vKb",
  "key13": "RCwzVAEUHzEjRGkeaUfXP7oxRUZNkL1pCQHJhptnP3MKvgyXbaWQVaYD6trPGvvRA3vCWauLo69Agkv1KXaEfQ8",
  "key14": "FJXMyUm7tnvzZw5qApnJ4vNFACu5UmQwaPVdexHL1MdFCkcGsMJ2GG97QCYVM4JaPv63tVrjKintuBasdH4KvYY",
  "key15": "33ygJYdCCSGLwuYx74fCjUWhFkwXC7AdkrUPh6QM1sVPADjTiLTvu7sZaHYkLctdQsugXfhZuynL4rjdCq1izm8M",
  "key16": "3R9U1UL9tXNVPVfBX3tF7ANTisBeQuerLWc84FAYyAq8EEbcUY4iz7EPSuWh9XqeSQsQ9D2VS4sLXC2YQwww8c8a",
  "key17": "d9ufsp8WVdhxPiai86JAxnLgk5aWCBH81K5Mm8s3wsvMZhAoxYtB8d8ZBGHqvQLz7gLjZQ4pCaZ4QnnoAi9nBnB",
  "key18": "57WhHwwQ3qxAnn5psnqxgh4yqAkDUSm7BtFoj2ZchoVLoVHV3XSdMB2UNsP5UZ6TDnctZDfe3cBLMAthx77JDmqg",
  "key19": "2qzrMP4QzXssHME924n7wvmpkASC7z8ofEFrxcNbzeYgSgceTXw3HPeVGoViJ1HXgeGjhZCS5F5k85CT6RdS4ABd",
  "key20": "4e5qvzhDP177yM6qvDmZnynwgPwtRy4K1hGtvBJekLJabGv98Fggb6WrR8qVsS5A3DiSEag59c31CdSKjnoYExK7",
  "key21": "4DK7agWcB4yCwy2n55uvfEnyQ9uUWsZB8sfnDrm1HsF3G1RmjETB7ekLrotHB1rrEWP1RvN7qQLGSZ3euZJ1otsy",
  "key22": "5vry4xcvqhUNW3AsV8VHh1WjNCAc79YRwYaxtdmnuKUdj95iHuGQ1jEe9BkVbFaALpEzN7y3cMQ4KQy1b6H5nt2d",
  "key23": "huwJFBEwXpCr4SqQnK1T2ETG4T5Jt2k23tbFAZye7vjr8Zji57jnBNSzTEsWmdDqajvmcs1JeDnHx1HBD6QT5Vh",
  "key24": "3WyQpL6zExQHme7Dr4BdFmdGMQbZE6cWDUUxjPzDMgos1UkV7U1yrG62CfpnJ72FKMb4XYrHpNs1m33h17ptX8wS",
  "key25": "gDCVyiH4aedAVaerWy7M94pcJJcGKExUrk4z1pqPChnaEjLCaz9RwhX75B62vpzuko5w4iPMwyb5LECCr6eQAzu",
  "key26": "NKtKYjS9S4BnNEcMYm6CAVf8mC4SYCCdFniZDEQABy9SYoELaNz8JJQiyHYm8hJ1YW282tBYPTFE3q2KJBBow2v",
  "key27": "42fsXcx8rw4geacGGLEe7bfiLpXVbMN8Ewndr1TwaKNNhXmUUHCZBxjuysKtg9jFZ5xA7JAG4NrGYStLeas38bRz",
  "key28": "TCNAXJNvNzPZd4fbu7zPVRFSNbrt4xcHRqmNXr2gzDsUJ43MngKqs3gu6WV8NuoeEAnLKrURAEAwsnZmxBNZgzH",
  "key29": "2ZWJBJdc53CusxrufPB11R18JpNwrDgstZHPbCvqpwPKXw1keHetPTtPVdrX3CmBh6ztjafmaXDmppHTr77wwtuR",
  "key30": "3g6gGtxrra4ggyYi5EGxjCSqs85DWqxyW4fzH1LNjynX1qKAnXFgkYyTu8Pp9Ns1wa6V6j48hiXSAtzGyTm6RtdV",
  "key31": "ykQj2vxcT2Eq7upW8r6Ayh4VpQ6kddVDGKqaonxMJ6eWvefu7vajbv7csZaAyvaxQarEWXmGmqnBeQmCekATf5P",
  "key32": "3nDMTrqo19mgXm25qEfYA2xpsqukrNWvb7xHAY65HJQp7JqWbVEjWVfMKpCj6eeuJaSKTaacBh9u2uJ2AjENpKqh",
  "key33": "uAQ2X2my7WP35FSBMF1Qc4KyckyVxB2aGASnP1duogXHFgEyZRW5nQ27RrbR1iKsc2PSHEU31NC48fBpFi5qEZN",
  "key34": "4pUoH6MPgx3T2SARuAj6zMDH9N1royGHm4Uf4WtfK8qypjopYbHXC6FaBm2Qy8giVk2dbok3GM8YA8wgtt8RDaq6"
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
