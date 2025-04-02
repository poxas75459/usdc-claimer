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
    "5oP7HvX2kkii1dGN6q1xxYzTY6V54Wg4uyU6yo5vDgD3EwScQ5TsB8s7LxRnDR5K4tY1tV4iaT7DpaRtmSU3sbdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vdm4SKK2dHmpcoybszSLmxe2sbsFjP7gJTDk9QDXHootcxqcMhtrZCbrNPvWKxLBJFX6yyNLNUUPYQNRYReyRmE",
  "key1": "5fTk67HWDSAgddT5cpLuaqFcTn7x3fdzXiQotHYmBH8EGcaLCtAo5U8HoLSQh9qr5JwtpjhPpvYQVuFoQLRB6ww5",
  "key2": "8vd5WRhKSPogqhepnCeKJsmLtSU76LSxUajGCpM4LoeiV3dByhXS4MPmanFKnLzQCq4m3ruA9VcRQUUyDKmDpjW",
  "key3": "hnAUeoAh8eiyXpxRR2vKfQEyiN5fJcSknWAoq2uCUQW3AGtyiDsor7bz2UTkGnWyWg219saLUrPMPZuYN9PBpCs",
  "key4": "39wE3NopsSWmPbrcH1ktwKC3kHnu3H22cncTa88xsii6rEEEsyLxbJHXMWytDGB5aAv82Tb9B6o96qXv4MaKRijf",
  "key5": "5j3fWx5qC2oUZ5Fb3Uv6hvzP4CSYyvZSishkxTLD9kDcUFsFVtA8s8a3hKVFPca6H2G3HdajsE3dvWjXHpFabnu6",
  "key6": "4hpjtUBGiAHoJWBEgJqy9bwVxAJND6VbZSfMLkERqa4Ps9sUzbx1321tsv4KgUo9wN97w1yMHdVgjb9WejDtNFWs",
  "key7": "5R7vCWMzt6tZBdEzexx4JgqLwkFJWgcvc6bPbuoBKb7P4GQr4xMnocvbBjz6kFaySDBs7EP7wQf58uMXqiZ2tYzK",
  "key8": "3Qz4CZtJX12Q2jhYpTEEdqTMW1iSNV79U4gas94772ee7fbpUB6G53xvbJiKhFBnpuNKJ2vGFf4zQAAsx7pKa7Lf",
  "key9": "2PjsnR5ZpzFN6SvJmHkFEeVnaeTyv37zSmbJA2TpnRD2JJVhctVsfSYPte5dHsMfJCSSh6k2CLaA8zEKTeMFT17W",
  "key10": "3yRDrJKRN7MACmyxU5FaNZ4sNRtkuzhuSxZ8CQjLbq3XxSLHBs6NgpnVwuZbLqR6YR6frkJDi5YCJiJmBx9VTXxH",
  "key11": "2uV1B2FJqja7CWGUmBMZzAQpUb79obzgR536ipTuSTLSYRdZEht5q9We29GWAWjEE9zWsR2Nk9zbLM2XKPvFqZqC",
  "key12": "rXWU8VkJy3kcMYgMULsDaVxdeLokm4zoXfWHLTtfAsFPe2ThpXspB9ttW58iYfYCy6pxCArsQQxV9crioAzd6CM",
  "key13": "xqWqJHu2KAb1kVBcpmAWQ3Xab72Shc75x3iv4hz1aWSi9Yt1RJtzxxagQCpoGTxGqM2t2HW1xDxQp7Q5AdXSn93",
  "key14": "3xhLSvQRv7FRCNrFNBmnpHE1wzbQzVU6x3j1JqqLkSyaEQaF7pfh4kTFSMfMQpHcioxK2xzmPCpxbWrQyqL1R5rA",
  "key15": "28SBqHDNKbty35eAvQxkygVP5EtUyJeQwP8xzCTxYHF5hhGrmBbrxtRG8W9LHh5mB9d4Fjxrtf8TBgVfWjgUXWey",
  "key16": "5MAh733pAtHZPLN9xv2k9DqkiGsg8GfHmFLPg1fg8x8eC4Ybxz7YEALPBHcr3uTQN7KCTZ18mEG1MZYSQXRPcXH1",
  "key17": "DHvhCNm4zQxN32cuGHxTps2RibAEDiFc4ukuuTx9ewBSfu1nDQD752PpqAhNbFa52xSWkh9DJQ9zAgGaA5Trcqw",
  "key18": "3PS2BmCwQwSqw5Vuo3jBvRqqx4ZXoyVrQrBJ4qGc5PU3A5K34buGr9pN5x3fxgyWR3FUHzGvGxxyCPo8E1cDUv27",
  "key19": "6uZGFeTncVHypRZoF6uSxEDsGnjJ1ZbDuupLhzcEgoXc8Dqb5DhkFVy1bzbVUzT9TRYqSqFGSqhgUxSuWEufiXb",
  "key20": "63UUHD76f2sECtw67pfVmUyrLia9dzQx7Cy9GgLkk8kWHfuxMz5TWnkFbb8onFKUqNSPPqLvMiqqfyTPec81eRbX",
  "key21": "tJfmwccTBXRMm14EMi9yqaAya65TGSspAT9wrrh8JgLawTvaTAax4DVA3GiaAYn5QQPRVjmZUaWL4Znh6CKNXtX",
  "key22": "3uG3BMBZ3ZacMEybiXCxhqoQvyRC42qrM1toHVR3pkbYztLXrGhNQSU8tstujhb4bckY4V8Rv3NUFRyRtHzp6dtG",
  "key23": "4HRC5tZNMDFuPpRcXhG4KtKtzWUT4Jyemy85mJ2X1gkKXwk6rhd5nRMKpGMxbgVQ6b8yt3a8jU6eXXVLioWovXfd",
  "key24": "5hgp5Z7iSmKaxP1mRYpBz5tvRdJ3ZuPZc6rfPgUNm96wnPwbNgTUgDb6UHVz1VuQ5qKFT1wGjFX1kNHfJrdDzkcL",
  "key25": "2rE466v1LsYUpC3ga2pZrmwaXZLPZAsHMvuLwncD33dRQiMCEiiWkcbtnvXLej9ukeVN3NSnga1YrcfNLrtnpt2s",
  "key26": "3nTQMdyrDfsRxdZpYK22mCp5w32xQFUoDti6Q1Xz5XRjZBQ5v5dyuxR9FdUDUt4TgCaoRb6NLpJMevPwypGQuWgv",
  "key27": "cbogYUdKJYvrsrzGUwJmfi2qJxgE97xc96pitzgsgk5VK83QFcJ1kMF1Z2jyCMq6JKVSks4zRqVDQrF3TGDkR9i",
  "key28": "35gL9smeQVKL2dcQik4v8roYXsnucwUkqCsKxXBhQmYhTACaamzQgVmEB4Z6DZK3jzbQh2ywwYq1PjDqibWtBcD4"
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
