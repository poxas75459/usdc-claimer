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
    "kXXwMSNp97T2xaTLujt9Rdd5P8ggaC1PGn2NSoP4NHuHME5Y7J56gaipVTWfNGPsPi5RDD6GPtRt9NbJTVWE7Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWLCuMFaP2nRWaYbu2HSPqw5rVhSGnhNTXRkpVSP9yppw3DMgJaTQqPt1Ay1fUMYBVxAXVjB2RfoRAncDcLNPc6",
  "key1": "p4d4Z2tEpoNHgPQWUqSqbditCSP7vdE1sontpuB7mDbwc5d8euzqDD3wRGT2QrU7heu8aZtfgp3DT9aDMHK9wTr",
  "key2": "4Quv54S6TzzGFjFsjoLsD2F4aM1k8eD6XNFBo9q7jdNtJcnmKscT6WCfEG3mWbBtAoCnVMdM7w9S9yUeKMtmZ29w",
  "key3": "4HyADrP3shpChRArLBUvQnbXyuwUM5okSX5jro7awyQXxosPHD6ZLyeoHSNmYgDS9dF2wxCBP1Rj79SkwFYpPuQP",
  "key4": "3Au2JLrAQBh3iTzAN2cxHQgTGb8Ba3zvfdbga8kpeRgupUuEhKLZQSZmBXofXuAjPUgib8hp4CBG8JYEZJpifFgV",
  "key5": "37n6JnGYRgNBQxmvbdnzRr2siyxgemDfVkqp4B96RyFGSwBLwHVz5hcqunWzE2MKcYLPqpAALBCVPF5b57K6G3p3",
  "key6": "4VUPAm4ZEJnXxcuGseaBWGriNDQ18QayZ2Eqp1f824PJ4E334wZJcZ9dRnKccJ8B6R2ZepPZJmtvtdT13uakSHTV",
  "key7": "utenrKD523HXBksWsbUkJQ9KMmGZXZHD57rGghwxDeXxo4LDXQp5HPqQfRfFuSF9n6h5qw5cxni9bFmZyrbEADW",
  "key8": "3QBUmx6rLmN6zqXNgYBhTEaPouaYV2ZfYFNZFuDMPEhZiGtzeECDWCcXVnKVhujT2bRN8kkf8F4pKPsCU59wYGb6",
  "key9": "2cADgGRfJm1hFenqD5tRQX4gyZ52PyPP8SwgpfDaSH8LJ2ovywc47FtoZU6HaEQeDDt5t6EQxab1Lf9TwkmQRqgu",
  "key10": "LRejJoETfQH1yXDv2vEppV1Q1DpnAKNBqVNtgv3NtmbTgeASC3i4pEW15w8MoCafhfg2Vu1erJGFXid7vSxfvA9",
  "key11": "2BCcHJdpe4ii9XauLv1f5akg4fs5cGUby5TAoieQyTjij16YqzHc6EYXw5jUnxXJXqd1SafLGPKuiH2YwrVdLBdo",
  "key12": "46ZRKaPzzuHxX7EWXL94X3f5sr9792GZGaZtTSpCNRkZsquLyEapFpqZ6cRLHyUiE3C8ndZsXhRBBNreub4qAsNk",
  "key13": "4f9atAYf8V8LHe6JgeUjkfoHu3fT7Y9evq2K6spkkMx6ULSqV1dfH3DCCzhisSsP95AwoKryKh83SeccPUGa4XbG",
  "key14": "5QyFYG5mjewZBBaeJ88DCcG25wgkAwos8c6tKLsfro9ZKAihWT7Pp1MtEBFNyjPPEhWqTqwD2CJnKwPVGWTSXEL3",
  "key15": "3hyDbNtgUojgGnfeSgcDuj2xwFamqJugRwF9oH8C3krkzk7d8B2VneZTuP1Aubtjqxw1bkcDex1rYEkkwNvE2Xrv",
  "key16": "4Vqgk3MTdDKjawGDYytjAJsJ2AqkHnrE3VnbMQPMzjTDZYF7BXEdDBYf4yvv9mjKf8FfojmVhRf9N431GfK73tYm",
  "key17": "jh1pHPLE2zAbyBkMvsHUrb3yj76mJcBTu2PsoVwMhizSE9gRNUq5Lz49NckL9puW4o5ewZbdH3MfakxgffrV2pJ",
  "key18": "58LSPtkufsPxrv2ubYjjEParEboUZDuCWSUz7uZzCzb5qYgj5GNM6aACkDxigrLQ4xC2acpw5L71PRxd6krznihY",
  "key19": "4A8vptrGbmhZwuUmLTNKe2oVHLMowCTJfXB5VykM7kWxGeuzMtPUiDWa31TsaFgC7ELxrZk4yhAzPPYqCj6WjNsL",
  "key20": "3FPgHjRRv7hCukrwKDAk5SGE15z7wi1NwBgAeeeeKUZGZsUUgoe6uvaUWiD7UQvjFR19sjPGj7wkA4Va6WmdZ2YT",
  "key21": "3S8YXYLXzSmH6pYcZjyGwUcBNjKqXKbvB2UQ5aXGrd6RMpfTCADFjGAK7Ck5VH7DU1Zn4LE1po2NdM2yxp8HRMoE",
  "key22": "3f86ZPdE2SpJuRhaHVTWuc7MVKsN78XAv3Zaz8qq3oXDF5FfU9UQEevzu4Hz1ofDm6CQC7WU6LPsdHXYhCpCxWz5",
  "key23": "3gJKpCzx4AEaaV2an6r9tgtK8ajwork5wnvJRxQHR7aNiquDY8RJiP2U4U8tJkKVp9QjEYcjSYYdNBiU1XKwWvY1",
  "key24": "6xZCTmLachp9J7yy9kjRz3LGFUDXJbP1VGwQCmB59YVHBcA6LHyDFW6rUyGZyn3V3ZpcF7nii6dfKaxGPY5TvY4",
  "key25": "4u86xkyzvhRPS37Z5duJiRpUiJafnvLVQKaLuTSoU5LzA6PDJhmULj8fKEvUYa2VTTzgYaXkEew4E3RPcyvj1XtX",
  "key26": "4myMzUEkhXbEakE2XnxpHPKyUS7NC7VYQjf3SedsFPeLFFscgvqC8pf689ND4jjkb8Tm8xX87SKyXhz9di9aDiKT",
  "key27": "2fJGaZq3PhsLw2UyfdXAkpGuRirqcH3KiF3dLkFsr5obTb21pQkMTVeBfs9sSjCdPBN7VPnMmz5HbbiMuucefJq9",
  "key28": "5SR5jswowPPBYF8GrXFD9wNLprAFkEa6bJArUvGkamHupN6x842By2Hn9QUdejBECCUn9otQmProuQd4CYps7ic1",
  "key29": "5MwwPFfPBvgnXzSZAhee6WZJ5drF11g3JN1w5VqDrBXXYAsMeh67WQwt6mAvXFauUmSsSibV3XsubH7HSTmcaET3",
  "key30": "2SorhrDnUzCFkd2mDHAq5LwhvkW4a7cL6p9JXEkqn3Bg7Pkn5aEq5N1CQLkoBEy6A59TScgjN9iU4sR14ir4poqN",
  "key31": "NQkgQohvXU5WY5en3z88k7yaLTUmxCoNUzY21Qr15WKxzwtvKNyec8zMUP4pZBTqwcmUh3jJjPgTg2FyQHxrQiP",
  "key32": "zj3D1zB8H1P5ooeUkd38Jvdsshyn8KZyJkciReg99WwHtVZqHtENrxGpxqJigZ5WkAiYXYEHcg98RzwQL6WYZmH",
  "key33": "3bdGC2p3DcvyCtsfQHUCLtJWZB6Ki6m5B4jwv5nvZSyf6UiocCfbX15fkcyKgGC34myk3LAyUGmkboR91H9b2MJs",
  "key34": "3bvVPcNsKBWVFVwbQ4VGfUSUL7YTkJnVHztp9dgZoEkGXMKVbosKuYhkokqGsoBkF7qx2MfuvVqj7vEWoRk4XrBt",
  "key35": "36PypmL7BZFnaFmT9LEhoMZbR5naMceNzggFqX8Jnw8mhZsRYV5niH9C7kDBiNDSvS7CxqmtSHvyRKV2grMZjRG9",
  "key36": "2crPQRT2D5qZ5Yrww9wEn1XApcd1BMsF5LGA3bhvdqrn9uwJCXgZqM5kAXdL2T5xhtQP5QkpuSVfU4D6PUoK1LX7",
  "key37": "47rQfbNYLBoXswzpHVrfzFRjUEL5pnh7mfZFrZo6QRBzfPUGTwBthFwp8mMM3sXcxGWYSQdvn7x4X66EFzRMv6Z6",
  "key38": "5fuNtbsrxDtFnkuvyJZv5QQxypwVU5kwFnDcYmbLQYoL9f1WiSnwagoZtCLotHcyzHhqpPDPhDpbJ7SsaGZWDq6S",
  "key39": "3WLa3AS8hhPiwDHnfLvy4feUi68vGyAJy87NJXob6CogJnPTkLAcMdFwkKtJWn7NQeiAutUMnyof23BDuNTtz5iJ",
  "key40": "3ezyDBmS1aWPsTh2dRd31XPmDzX1jWy4xPxG6EGwhFigp1m4j7RiqchbFqq2qVpvtoF4xRqAbSBDk6hJLsERE7W4",
  "key41": "LDWfZLXHSbYECtKXRCBmQqGiyaVinBeSnfGzFUvFBM4xh3ZD1iuuCaJFEpdYoz499uVzP1ZtZhDC9kfscSe2J76",
  "key42": "4Y8ojHAHzPCFbu9RibFyQiPKh8RtKiTA9z5ycmTcSApMzVUpYm4CkgAGcuL4rRHheGyNSd9c27xv6VgDCLWEAAdN",
  "key43": "4nm7BPhR9Kvk3c6PQnTetqWkj7pUgK5UhXM2yeTQAtEfbuXAdDNStL6aXmVC34uR8Md6Jao6GhHEvScRowp2UQM3"
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
