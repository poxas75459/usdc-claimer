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
    "12639pR24SAAf9Mc3SvPPbFropVkd5CBNeC2hX62aUdNC9tQpQrRJz6vYGS5TLQikH4cZ3PxGgTRcpwUHW8xk652"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DhVj67La9oppjmDA6aSqzGwrkmVL6i7bv4nPqH6PB2TqfCaGy8ChJ8dbNatLYk4255RuhKoyvLV3GPEBnKnBc8K",
  "key1": "4pyUE51HVX6DREuocU1SBivPULWj3EyAN58qTCHWx93Kc3erH3JHT4J6BoJxhHchbTdmoLvNZrYWARJWCN5mU1JX",
  "key2": "5hUQEBLfbC4fi4Xta7dRvWYf6NFcZqp5JGBCJfS5WrbvxA6uRwTZts9fa8QGw2aCLUtCPt5JaPzMyH3BMmCRrn4y",
  "key3": "3PU4Bb3zFTrXHHtZwwsQPXy5braK6J671dtAfmYZuN3nm39WM8SqqVE8Fi13kiEDpJUXAB9gJ8zZgfXA7cGXAnet",
  "key4": "15gfsQkbbjVTYzeKSaLs1RgdtWDX6v25sqdPq6PjxuciZ5Twbc75TJjx4C9mG5hiUvbSrH4K5q4d1h8p9p1mecL",
  "key5": "2trExmVWvPx19yHYZpRdnN3rTf5KybzMTEKjB991gg7rPYLYzKNRJDVQz2CNf8uBVnZQyudtDhjew15NTw8kSeXQ",
  "key6": "2e8qWTrv9hSgZHPvjkbMFr9q3Uqk8CkYLxzBS15aFcRg6XU8z7Uim6hgj6ccC2wq3jPCcynXr1biv4QumtJB4eeX",
  "key7": "4jNDbCFy6ZM7cJ52EVAUhBJyMxUxUdLAqjW4T2mDxdAum8o9fxUyAXKBNm12pgz4mas1JPNxH25wufxk8Z1KZ5o2",
  "key8": "jL4vPwmcKaG6qDQad41ahyw8j5jSHcXGmSVYZcULFeRdYvuwAWkHFxLBxL2HNcPLzgyLZTH5oqexuh3UkdCKvVD",
  "key9": "4ARU26kPYPyfFqR7t95yCd52vzUNszF8bxudHMkzaxGqno6JonenZxAzvPiEaSPK93nhfMrtyoJhhXXJwNXr9fg6",
  "key10": "4Gm94qMkq6sxs4ozhTDGozX32t5UqxmBbRpNN3kuMeTsyGV9QH7idRBn6v1WuWMY4APhhXkVV6kvMJ7XQ6BsV2i4",
  "key11": "2sztYKr7pDw7tJ6n6MhwMutQsDhpnk1ScfUqPWcEW3Ywe5ZiEXCoT7XsfaPrGTZ3a87f6oqWa1V1A8kNHanea14z",
  "key12": "2QCd6eLoeDopT5kgBXGSQnzVTpAbEUj4pUtpdiBK37RtHne7eaWAGrxLFHuv2W8Ex28BA4Fgk1o32twJYxoGgj4M",
  "key13": "3u7K9Sd2DFv3FwJHjg5MFj61HRsibVWRBDgAZoM6h9gNzXd1ZD2YAvs7fSoLS5iR7B4DtMJni14WzXaxbT9VTna9",
  "key14": "snZ3Wz9r5eVhZrwJ7qNm4HwMGmpW9zeW2tkZUKML77p28dpDPa2GRqqW7GzoPDFxxP1WDAFuBSXFEEQA6uSL7Zz",
  "key15": "65Pd6i3u7FYRpaQnHwAUiuo5BU3h8n8ivLfzKiREKJmPdRxo34UtjAaNt12eiPdhmrLYBQ5v4Lo8hB71XeYWVNFy",
  "key16": "PH1D5ynwKaLRtwKkwQEa9VGbvQxxKRqxJf8pRWEn8eQ3JYr817BNt9US84j16h8FWiGq2Xp8xK7zV83SWAQwEFN",
  "key17": "2jGkQJnmzCjpkkKmVXJW6a1d4NhZU4s3v1oKcnsKBZr7bAYG3tD2e5ViBJHxkaCyr9XfZy3H3f8WqgGfKiPJwNdY",
  "key18": "4z72Z2yNSLwzJFkZuu1WsoPYZFKz4nnZ42cokSkreteGZ5UA1Bhri1DK9hGczvgPrJSFfv8fvt5FGXfxEoweFfRN",
  "key19": "4ennnf16sbvWBjxiGbSGwZ4SKfBQ4TjXXCzQGcBaFpCJRdsTFQRgTqdTNK7qKbp6abpBTBCJMLyCmhx1Fb3516NR",
  "key20": "tjHiMY51yQDAPCbTEFHhZ9LKZfSqMZEMvAQG2cJtGTsJaShr1kyP52UANribv62nWo6BMznrtVh1NfMXE3uCbeW",
  "key21": "5pe3LehtTnxD22quc2zPynyUowvZdVQyHuFhfLuWvYYNiNvzDyfYAxTjCRtT21yZBwcmeEYwVTdMpjtDjtagXVWG",
  "key22": "653vMREdzdsPcGs7wae5j9X7ozPF2y3kLcp95wAkhQu27fkEYBQibF2K4zH42cnbF1iK7UoQ9vZLQtG2oXnDCTKL",
  "key23": "3Ubr4jiUQMJQFf2eLF5zVmsNgEKTtTF61hS7MBdTKLot5be1L2zhGNLdPDZqsE188y5r428px8i4LxrP52MS6Vdh",
  "key24": "4GMLtEZY6PUvAdcVq64jsdNX6c1p4KsxLVRPMRbE51NNDj7hgZraFDCNZoH9xtAWaYXwXneAdy8BQQpq9sgT7wNu",
  "key25": "nbwB6ADgVD6HUMHbFkp6wQWTxcG1o91NJcg4ZqUEdsGyQrtsVZDAtUM1eW8z9pR63b6BVhkovtpgPUPTkfKSR26",
  "key26": "5SoY4saXQ2mptHhGFus8kxgZb4o97eBEpb3q3L8ypFmu98DhMqWDA6WxdedgZ5249QJeKDSPkQRjqXvZPW8JfuS1",
  "key27": "2by23VbNFEckToSpWL6kLEkSHXpojBr1wpCEuKVFWVe5Q76TZnp2NU8Ybhjs9R2N1xdxsEjjHtnrzD9xVGArHGrG",
  "key28": "qc4QQMZ777wC3m4699wmCRtaR4JaSdFqgfgGfDwtjD8cCAGPEr1df9rewjHbmTZcxLT9k5KtnnhsAURC4nxBR2U"
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
