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
    "5EEsSPLzCdyziEcm91HS6RGkJKDkjpvX7s4ryJ7F9VeXp9iMdLRZdrzvZdpx3BHhxG95nvjAi9Rvc9bF258ahUgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qeq2ovAMThQ3fsJ9LnTfArrz4cNqfbUyZ5b8NhRAiEkHvXVckzK9Z8n29mHXeWZoJVywigywXzDJ16QRyvqgNmf",
  "key1": "3wMtRQRTMJA2Xq25TB3gD4LPmmmEHuBWSMRqjWka5DWbKRXi4b69BXn2VSuWHxzzfsxRW1SXiuQSU9FohL1nkNtv",
  "key2": "3xUEA5ijgthznpqVPf8L9DaxmVgznKBo1T6QbsodKYyF4VT1wqvjbNKzM46TNLRB3TnTXF6n46HWYQmNLLp8MMNT",
  "key3": "58iMXPscp2t9BYieetZKNMTg6f5VJ1GkwaTvDsmGHz1N1PsKc9hGcwRTZnAdZePh7AgmGyvBsxXZ9dbuAegxM4B4",
  "key4": "428FK3FL9ifLbw3rog8pvbWQwrPexkXMEA7YoAGyBT7a2o5yh4Bcv5v7Ui8Wgzzcvc7JMTaUCK4Nw7HCTcrpp48W",
  "key5": "3CwkgE7Y7S6KsJdk7jvPKpAbTN1wnUTkKGdsKU1TtwhExSB9beVf7pT6agieuRN5cPkFqS6R2NJHNkt9z1swwKMJ",
  "key6": "5g9RGtb3HLncoXpiMuVa2JR1WE3oLqyVthKDRnikdQWuEFfPVEY6NoaSs6eR7UC5gBFjn1SB2ZFe9XzPMRhTsJwa",
  "key7": "5z17xXxzfSazzuaZGMtPXwKgGHD7KxN1Vxgy55nutrUoK2Cjg2zCD4G69CjhEW5sfnjZadiGfwvHuWnYJMSisaYp",
  "key8": "5hW18DhppKk6ovqKi24UuhDpF1wxWKmWKi9DgcJzfNDojxmicQuj2t28qHLkL1MbJ2ppvGnVgnxJxANzhRx5uyM7",
  "key9": "4HY5q3a6NGubCo1Zm6nBwciE3zLVdHbJ7412xwXUwHnvw5vtYwWKQResNoCSKU99SmhcKUamdmZFS8UuqcYggPMC",
  "key10": "4hvKKyitcpU8MVJPSMtdvJvyPT6We44NZXTGfDTgLxoMAjwVF6QHmUxMKwdkD9pgStx3rGSrxDpfKuMwimKJGMVL",
  "key11": "5JZ6XemPoTcB5it8LrJH5DDgfq7ksriSEK8mUH8CKmBEhzhmwL5oD88HnaXdFKCqexMcCFGKZ5fBSh42h98TuCx9",
  "key12": "31JeTLUpP7RoVV2VpzhatrMsVZKyQjC8QWHKpQZLV9PdHiVxG8WzfpyyhW3S8Ljk3HAps2R5EMKLxbQ5F8WJUcnB",
  "key13": "3jJgeL9Yxzwu1Qart5vCB8RyAUyPbiSGHhmPRYxCzTKjoWmZ5jUtLcD6T1yScTTULB2cr633hSZvyijA5BWNqstF",
  "key14": "3wwitBS7KrdjHT6ejGaZeWby8rHn7g8P3QhHMiL6H6YateA7NVekbZbTncHWxhkRh4ips5y2Hdgg85c1sEVrXdeg",
  "key15": "FtmThUmSCaJP9ahYViGKgTcd1djzPQPzwA8ZKtDZZzm42H2SYTAg2Pc6UEG1X4KPkPvJqDQdSWdvaqZeL6mP91N",
  "key16": "4UoXwfByTqM5qRSPb3AU4HxX4aDbgqEMR2SpkzfrqFhbZnN7HgCijf4XcEJoYSNTTTHg2T8gypPnrZu3fjdjrJTa",
  "key17": "5rXbzCRdnujqh5BhZJJ2TLwKHeU5PerN9BHBRRDYyDYKMXPAkVfEnknwgdw2Z3kApEAUGrUJH7ixr8HWTign6BqD",
  "key18": "5AnoF2hBAoiJCURSLv6hn1qqD8fUJQUi15CuX9Dqdy8wQfKRmwmXpzMqKrm9U1PgJ99UR5CsxVWVi9VVAL58cDA5",
  "key19": "4xC1fzSXAxq5fxJsmwsJkBE3oXy4XHEc2rrb1HtUpq35W86kwvXyeqoPkV7vv8nuaVzkVJZ8LQsyDnDPe8Mnj8XK",
  "key20": "pHJmmesrnhCbySVPXAZfjBYj9Tbqa6ZWHuaqLm9MLQyJmrGg3mnNJDVqQwMqtE3mjh8Wx9EhZRb1VhXyCt7dbtT",
  "key21": "47Vg2djKc7RUJdMqnaNS4hePGaNYLzVRPF7b84EBC4DgSWxtNSpUizc4tEVhfrbSZbR1qBy7hFcm6FnWXXoTw72U",
  "key22": "5m2LNhmGKv3cmwWVHVkXG6GZriaD6dX7Rry7Rr4LGsE3q1zPxnti8rd4WSEva2dhFWDN6PWpuZrtpHFdtuRHxS1E",
  "key23": "5PtsqDa4oCe3A2CfU3wibe4N1PtBd8JwqfRAmR4EgfbkXaK4NNYaGbh9pX5WXyF5wpjDhVtnjVumiLanDifoJZF2",
  "key24": "2VTcTrLAScGYRwVc21pVae6Rt3FJkXULDAZYn4hX4pbLkmWGnvimQBv8RmtAb5VroNxpkR6Jg9rpHU7w67gVxRo5",
  "key25": "2UYbgfm8sAtn45eZqS2YSH4rfhoPrNWRYcJwHUVzeCDmLeZtxqWkYT8WdKs41eAXpCX16sm9zN1kgWmNK4U5EPTA",
  "key26": "2UAi6h4vU1aZZD16PrKeS8C4wpSYhJCwzXU3GNwyZiamAFmE8zTwo6gZxEz3Ro1xrR3WmDvC5EgZt4f5KTSY4CKd",
  "key27": "2zWr19swsEaGGVjL8yePgXkEANWS3hGzSZezyH4uwBnHy6wtisfk2BrgXuawtNyD1sGYzSBJwntiZobu27eBPZVv",
  "key28": "38LBgxSSBLRLLrDcUnXqLfuKqm1fjj2VT9D7RMZssQ4dRm9kRgacB39co6mJx8C3Mit41Y6SaUMGE1gRfWDpY3c6",
  "key29": "3SJK1ajpGcCUCUwQmxJCiySjNG5DtAjw5K8t5H83rig7bbweHuqD6jFnhpthRb7WDaWuJiAoFcApEXLrmZC7HEgk",
  "key30": "3Xxv74YccjJuughiUSUMvho2MHHCej8sjZ7momSx5cp9bn3oMHM98YCiy1p7AWvJVGrH9xeHFr8c6XppYCczKHyB",
  "key31": "66jQUk45fuDsQYYSUbUJumZs96ituHWVMy633QrptRMoWDeETdadRFmjrisc6QE6PnqAYd6zhiHBj9YpCNDD85PM",
  "key32": "4NPABjXN4WSdypmbFhB8EMp4JLDnYi3tXe535KfEMBXmGNbioPxeaUNzmuXyahcJRewb6U3bEvBHakgJdstQzHgd",
  "key33": "4fW8Z1pKBp4mzTuuk4wuMXJZT1eXHxAFewTA6hcngZj27wHcmQdUhuMey5ANfcL4vP9Sao2vfEMkuhdPiuEJXtMC",
  "key34": "2GKz24n42JybocrSVVjQauGGugLFvRoyHBc2GLxHiRukmqQuDThc2hfKGTAgkGxcVvLnN2kQ2R8vUpMJgpou5a8f",
  "key35": "53mTRzpRmaEoqxGQjD5yMFXp9Qrq8zNzV4D1swxoP7Fqao68oMgJGo5JsJNf1jRCbW6DUxoRe8JfpyfxPmjQhsTx",
  "key36": "YaV3zHBBfbBp8rjnB3bUSnfhgw9PoUWhbsgAhSmLpbj5k14x2ggctJYBEWP7qFgCJgD67xfpHCh91METmLCosUK",
  "key37": "5uW9bpMhzdn4Ne6k4ZRqFCPDoNmHQD1tGRHacVa5e8a9dva1bq4h12oaaZaB6r7Pk5psqWvm8QuQnimat52ZL21U",
  "key38": "3zWuJERPVsVry5y4bwbq8Ud81P4tWWbyaTHxJnZgQQbLVKRhBc3YxFiW5C8BFTxvAGYktwjjBUW9A2pCdxtZk7K8",
  "key39": "4gYWEbkYwM44rcGdDaHx1LvSDpyHgFb6niGxb1CbpVdwSyEZwxEM4SFAQYJnhxLsqifNTSw9w58SZXLkVTwqXdTt",
  "key40": "45vLGC8PPnbQYJx5LGh5rsWJhv2N5KsvAM6AU2e9cbzquSST3MjHZ6TXSd4uJJQGaRnbCNbiSmQ9pqCsg23U1dzx",
  "key41": "KUxVhgfbyauN6Nc5RVduK4ZGvuRy9G4e4U3m69ucKaCE8WuzPmgG8RDe9oyw4njopCkqWcv9TgNvyM9M7cQ8VDw",
  "key42": "2eHHggfF7ZHHFwZft7Vzz72KcKrPATyiK43ya34tsqMp9BNiV9ik18sfsjSMdBQjPaSJ5EGiVFCVH7XuH6bf1JSM",
  "key43": "28G2SCV4VMSSUhedgpDCdj3TeuL15B8ZMWjUpuQj4QoeoBKfiq32eBCjUw2FsAWUXxFkdNAiBr9QtAajRHJrkc4v",
  "key44": "4WrHxEHhBvchQmCG8dtGb57jdPNfxPCRY5TumpijQiW2Y946K4jETKEDo7z4M5H2hTNbAMZUZwB5TGGKkZTWqYvV",
  "key45": "2e5hopD55sEbmH5WBiRpnQGMyZ34xAUrV5YPaQAghY8yNeK7Voe55Ky4Siram6hQ1pqWBg8rWjDCvwZwromH5JnQ"
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
