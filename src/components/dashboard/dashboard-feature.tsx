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
    "3mAEFcHLDhjZkvk6CUqW14Bn6TU4z4aSsHja2sRn4hGd6ABAU24K8DDoLfrXtQTuF3D9dqeDNrfEZAxGGZfDeZ3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKmybntRNzVGvy42hwyuuRGqMAvWCnp2mnYCETFnTrPhW35kKFTihKqpjgZDVK6Ns9pS3F2Lskh2ufyZTf6owbJ",
  "key1": "tp4et4TZVWof8PDsPRvKrKcW7o4oveXC1bpdfQiMBxQU8dH5suHJC3XKszAXb5KpCTbuprJsuTxuUsrQeYgkpJw",
  "key2": "2y6mEUFGMfFZwiMPQER4aXcahvTpPsEw29iCuR4FrNqsf79KzwKGVbrDG6UFWnzdpHa6BwY6o1cQMxiz6WHthg6m",
  "key3": "tXye7SFrqdYM5VU8Jo171XuNRJLCQu3ZNFioxNiamTYf1zdqDwV6yV6DagZ1Hy54fwq6jjbQs9KmQR8PkEk2jhh",
  "key4": "3yFkgV59v8YuST1DTao1T2rQXp9Nceta1c518g2nnko2DCBpJcG43dYiReGKDFgcaYauXnXsrKT6UWrabwcQgJQ5",
  "key5": "PxCBSPx91Wnr1HEk7jfso57XLzAodfHQnW8YSt9BbAguByrdSnHZqxpr8izfQVqVreVXuPQaNTfRQR3BNNiViyF",
  "key6": "u3ShoBSyr3ws7T4j8GGnTjR6dG8Jzb8xe3NdupYpXbFziw8QSUGH3EADATayAxfWeijnKr1nnkKVAdaCUxLMMfM",
  "key7": "Sj6i8QwUVpNHzbNoZvYRbpjdbRDGAv9NB7oueWhLUDCX6zySparci7y4a6EmAy8pm1Zj6eJz3uDcLq2TXHTBPM8",
  "key8": "351WXwnjhiQ94zn78VsQADtHpmrFD57SW8e9iSjjpGjwBLws8yNnHSSEyvmNXhWH4ygKeVz35dPit2tmcGqYNhK2",
  "key9": "4YJD34D6U1ure2RscgCrP619q1rnbp5yvjXJffEsAaesTSNgUw8nP2qvtkfVB76q5vJJwiJ3uxUNZ2LyGqGFEmUS",
  "key10": "4fhFzBdo3rSBjw76qkDcRoC18kt3y3J8498CXstsY3ks6vWirZ4EPmcRkVeALJTJftF8BTpAtod6WqyFYx7DVZwk",
  "key11": "5odXLq6bPRr4YkPgTpcCkK6r3hpdF9hLmXNB5oMH8YFy3HyxYbaQmxVX1rUuk6KNnmLrYeJAzf5UjiT98o5AvCf6",
  "key12": "5QuYkRZxxDoGzF5iuSECXZJJhDE9q8agsJ7LzBx2vAuF6aN6QXWLKPMYLjXN7jhaAh9yR892eyG5K9YReUvCqvgx",
  "key13": "3FiH524XoQZpUjyvp4oDxSgeyUDqfhAqRhfJKFTowywDKfBnLhi5gxq8QbqErdFmHGPmNx9oucQCthYmdk3HiDec",
  "key14": "8BnuGuMoLgybAbPDDNVKKHxgPvLkaXsZfwGir1aWxAPxhk77zCUiYTE2Nt6TxnBs6AuJ8YjQmEhTjznYZXRodAV",
  "key15": "5vA4rU4Bf3hcS9n5rpj58H3e1AZs6vgdg68mpfgdDNTSx7qkDwT12Q1zsxhqd4UzgUxMnFFaUaaNg4LzeuQYGcyt",
  "key16": "5VMDDiBT8qG5JzNTV6ffM6X3QCEmyrPwwpvyepbwtwHBB6sbpWarFdbAdoxgxNNjHk4f64A15Y2WSLezCrarppGs",
  "key17": "3Svhi9WDKrT81gqezqGj53HSteZSC6RPa6d7tKX24dwa54pp62cmxVZk7yFWwxn5hU5jsB1CJNGowp3sgggPf9aD",
  "key18": "URAAK49XyhQ4hZ21hYXeE9ozc27DGfsNtcCwqryHj86FEnWaT86Njd458XPURLriJfzuAApShFojXxZmvDqQV64",
  "key19": "5ghZUsZta3wtGFgRWujEfof363FXoQBRU6zag9YBcgCrXCL2QTp1KWEvRcELQXCzfSzfHpCsRJYQTuQWATkzqxmv",
  "key20": "5SuxXP7KjfjoGP1Wb2oUE8UVXA43DQHFhXX6Y6jqctsDuKga7kF3NprHK1tYhJhnYc6wGHQRwDYvAN4TPWi1YPhr",
  "key21": "4JACcRQSCwZCBq5KscPQU8t3MYV8AwtYqLD2qrHu8AwtejPsN8AdLBdkpnUL7qB9hNhqbCS8rXkq8RGpwmyA87uP",
  "key22": "3ke6JP4B5dLzZ8xuETStDrn13FC2GtMgfrjeiautcK8y4qZXCJ3uPCwUYScNb57EdrnHd8shjLSmBBvSVu3J8s5T",
  "key23": "3ZPAFerWzYKfZVpzEfbe8gDs9TFMgDpxXvBYvdbjNWhdw91fdx9e7FZ4aXHsBFohNdZaU49GJrFcYr3tHPkFP8n6",
  "key24": "5xRdQQ32Z27QRHkjZ9VNPQp2kXxt2E52Tvi4t4fVPge67QaXymJi6vG5yrQXto73r4ACHt6vaJh1MRDQUWyzbzua",
  "key25": "UeMcEb9vfHi7bWA6TuHAXJbpJ3y6iXDPjQh4dijvpogqS5k7g1vWTbcMKDemxMtaLmmYc3sAwbAC4zYAooGXED6",
  "key26": "4yKcGaEptamweuTBgY3nSPhT9AeSPTe7wwMz1ppmy2JZjDM67yGxQdJmgEANxx2DLjvy64nnA5GGwzd2jSTUQuoG",
  "key27": "5mrQnQo5ctQc6LPieMm9B4FSNnmpzrzkF99pDDQ3HRzWFvriC7hKUWVxQefATjEcLJAx4MA36XNbTPF7vZj2xFZ",
  "key28": "VLDoc7sv9mFVJxWS62L5rc2mQMZE8uFG5ccxtdemchR6bJuzWD93MjRNbEZ5vV1JdPUVMqpLFuJCu1PRSnRGbDQ",
  "key29": "312eM87QHw2VqaWMHaFK57AHX7AVtZkkjmZWxN5D19tiReJCog6euUZZd2ftxREEJPLWrwWfAXGztx3L4Lv5BK6g",
  "key30": "2mJ3ihjQ6xuqGgWvw419kdkgom42PsPMmY3pbkzHqoPSuW9LKY3AwtWybgq2u3ZR1qiucdGiWgvgR1NmZsEZ8Cz3",
  "key31": "52zMp95duTRfEHiR5xRCmUi6QztojqG9uhcbyEDq3hscjv4jFK66Dndz7PnLxAhsH4zvjgy1TxBF61TmtG6ysXqE",
  "key32": "2ywYNk7k1qK53EmKg3UySfR6dEPcxqWNh9UXWBVGhY9C64HUsCnN1wR7EGmxRjTmQnobPtFeWX3jaKwgJAy9dKNd",
  "key33": "kvD8fCpwRbLGNX35JdXwp4f6HKc81tLNmanhHR3m7fEcjNYqALec8utHAVThCgkNPBbGfKtQ82Zr75xFrH7quG2",
  "key34": "3E2zMXsVLr3Vx9cNXj8SrsNfKARbuTJ9WZLQ7w5yF6PZsydLEzjg1EwwaXvVzjCsrSzbMEEPQcVpe1jeEW53CSKZ",
  "key35": "5RezmCufLtscLLrwuEXVAdXJhKw7t6tHCQhnnrSzXDrFRX1day3tAaGdQZFVZ4Fs4SoHZkQPfgjg6zqjyEvLuFk2",
  "key36": "28kfxoQ28WcavRGt4vPNWfdH5DdXykmy1PMPfVhBh3Vg6qe9KSjHSPqMR2H6okVqjRnHDz2eq7JsJAbDQUZTBDkZ",
  "key37": "4KnvQAqcvq8MyMiCCCzRCGZr5K3T9Yc3fE3k6vywWYuBmaYkrLp43Fj9fhugCmKaGogoimPoQh6G533Yfz3XnR7C",
  "key38": "4CzWVPH5PpGoiFUF16oR5s98jeeTrvQkbAxHSjfaJQMrURGrzoVzCjAi9kbWKPswWS9FfuEr6TyBJ3F4zDgaNXRM",
  "key39": "riWfyGN1bhmXtPfeyMBDQnYp2QeBJpMJEMa6RKFGunjAxxX9dfocdtXpWS66DxfmtHBK5ipi7bmFRRqxEthvd3B",
  "key40": "pjEbKuSjZJ9urxUCznNHwBGcshVcPA4ReeARkhNdDbCMxCS8FXdDvhEx3aqL8AnGJ9ViALsCuGLtTRXJPYa4km1",
  "key41": "2PW7wbHst5pP8PLLtz8X6KTVQBKKQAp3xpLQWmETs7rMAtznfKLwM2TqfUcYDWYp8kisGtaHQ3kiSa23LLa4b6en"
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
