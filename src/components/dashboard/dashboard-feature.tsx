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
    "56v4gtHWbmZ54fUpAiu5XbEFS8hqD1R72HGVZgEbt5CvxRLLLWjSe7vWm6JhGKLfeuZzaZENSz3B8Ery6jJp8xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTPNiHBu5nCeuHhLk9PyD3nfpC8nECJtsnUGbuLT7gPMr1Y3bLD3fXvzv3XXkgpLB46guqxuZDsGWwSHvbFZo3S",
  "key1": "UEXDuJuSbz4NBVDfKgAk9JZNEKZWfRvmAUYZbXF2SapiU8A1AwB8mXchz79Se3fS7S7UN81K5C9RbpNgbDAM8ok",
  "key2": "42bjCN29LV2qSSunKTHZ1JmuknxaahkXxordd8rm2dBDoMJBccxkR3j4F1yJhbyrRj1BfZvwc37g8HynnaxxTR53",
  "key3": "5Cj5iDZy5avUYqT11zWCr6eCLPCKWf61NNsmTdUxAiMCVCCXHnGDwepBbT2GwiHCcvRXRfNHzr32fnidJjVmXStL",
  "key4": "5d25F82DMZwbHRAuXzMGKyFSGUFzcB4Zp1hPx9yqnHaMpajGcqV3ZpUicUNfPK4nFJe75xiyREQuKFcFkqx6ZHzq",
  "key5": "yriNSR33qZ5SsEBMfsbYWa8e44RDWY1U1MVseNLZAHuYsfRayaLgetkMY9yWGR1YNHUQWYzMQLa1BF9fu7Jh8Xz",
  "key6": "37e5y85qbQLB42iNTQkf5d4xqYmy44N3pb4NWuSgNQHRuKLNDVoV4A7w65ZKSFNAXhswXmGx1eKK6rFLBsY9hUEA",
  "key7": "4ymHUXcoY2ax6iGud7ReYEcsCJyLXitm3hrAXXfg8B3epRSLi9u4KY4DQds4jtYjTcWgC9vk6Smkf5XgTQcQh1Gc",
  "key8": "2g8dQnu7XiJvWGWaLPLFUTkWCGHvuZstjSKkE1FNbtHAc3bURYzb7a3yxrTfNu2FvtFdyKhkUMVpbnj7J38ercPd",
  "key9": "3wPLRqyRbYr1BC9DamYpkCVGzZeAMX3UmqkMZofYx6TxgcF6C1fRgS7fLLA62w8iXcG9wYt1vsTaoURxwA5v5RUy",
  "key10": "56rKaw4UcKtnEwmfawPEkfBBMeVZXQ6LhwhUgoHKSQQN8NqV5A28Y9eXG7aiGMRAbJofCzEWtDmxEB48srQk4CvP",
  "key11": "49WKwK3XqZjQCPcWkydhTFmbo1JBhVZNn9C5MyYW6K5sDk6ueXy4TCZuLe5eCGPCxHNCJsQcbcrPqnHYJv9nLMwE",
  "key12": "3Wt1KC2A1jEpmRGEzrNF91FbEeopqKzKVY7pfphLf4c7xNmJHTMB4xiXuSBD1pXo1wepLXWV5AMK8KRABLr4hUyk",
  "key13": "2GffvSKTtju7nBY9fsRPzEYjDuvgG4D9jYJ4uxAbCK5hjXYskXEQqKX36LqtveLqeyvFzgxqhDyGX5su1xAzgbBf",
  "key14": "2BZFku118pXhRTSm4fdpuXaD1cL96j14hxAQTxNHiXZmSi8dhsU2zVM4xtbowMQzD7nnkuMpRXnJuMJbjK5T3FxW",
  "key15": "2KTsu57VxgqR9bfYy87QXnqnAyu3j7djxAZrrHvimeSgCQ66KiFD66MkKjvzcpSKdpU994hpaErtpZ8qRLg89YhH",
  "key16": "fU7tVZUZ1ZhqcPSmnsShWiqk3L8dJxHbSACrZ5Q2Z4SQRYJVVDA66vzTBWyAPNbS31NwGDTKXTPNuTF5NbY34Tn",
  "key17": "3WfZvHYU2i3JpmLtrKXeQnSe9qWfgspip9bguKDpb7DKD3VS1mN2rCGhq74ma69htXUHemGfgGVhb6xnBWJmNYn6",
  "key18": "5mLGMaooUerfqZoAqwwGgFD3hXG5vCh36Zj6BnCUZWTn73tgD3XQrX84fd35wFuv8g3AhhA5TUHLvFh9zX32C9vS",
  "key19": "3ijaLrB1PsGRWbAXNmjCyFQhWdCNmG35DdAF1DLmEkkLtL1HURgoPJ9nHp1MVFJ3huf4ZV1hzsf9RGWz2rNSZLmp",
  "key20": "2HtpVY94CDWLDmYTt1Je3cPyxn349syjGPyoDzZiPP2e9Garjx1M5eNN1eYDqQ1ruS6u7915foGsRHqad7WFercG",
  "key21": "XcA3UFueT4zJ6Z16Mduc7Swi8PutZjFpJ1Y4FqSd3zj7AHDc4D8TYQy1JWhBcDgaQH1AkLNYGQK7VuB3LCTomj8",
  "key22": "5m3hRKBxjyUUPisuHfSzxcTtp7aWgyhmHgJhQ2LbL3SYmGNn93fbhxNrekN3DzMP7YoJsaGh4y2DVzqXbbV4yYcb",
  "key23": "4Sw8zDDBGHPkE2jQKWJiLqtoVkKsD9P2kE72YevAckWsfViN829wZGQ8JhCT7z3G5DX6EDY62CmaPM2QCpenYTTt",
  "key24": "4h6et86PaNyVCng2hj9MLxkhG6U5cvJt3tTXDiACVrfavjjPTDHuRL3X8R2S4XwHcjE7zfbGuofuwjAByFLrHCBu",
  "key25": "53qvSH3nf2cwVm9XJ5PKBeHXqJo2EsSuK6Z2DoXPvN5n1CXArJJXeayCuUdZ8RDN6FJ1xF4dALdzWVX5q1L7apJy",
  "key26": "3vPSQmixMnTxY1hcfHKdqMo314qgARa7kFSjs86iH4m8T8c7fhuYT9hRNRYTzN3oCdLaBJDimzETbZb9D7WJoDHk",
  "key27": "23HvDv6Va1bJfjDhGr222PiJcLGU5ezY4zGqoTV2VfXWMXZg5SNKhAxkeKdWQuep3yY8ddtY1twHKLYNVGw8gHCq",
  "key28": "37sLzB6Xi3DkjM5v6z2qJd8WMBkNqfGyS3LD5z8R2uZZTv8BwDopCQRK99hU2Zyn2CL1Zn5HN5SXKjSze3wNDut1",
  "key29": "2K8NHnQKMuFSjgoWNsxrs9FYopuVGXSJxVpGwxZej9WWD7E9twgo5LyfrRo2CGoyTymZRHzLsbaw9MSmRGo8XiTL",
  "key30": "5KNAtYp9F7rBZzf4bbkKjSAnfvECgotfaFp7Wv2PrpzQY3Wur8ewn5UDAHDysPx9E6RSePtK1i6Qe9PmLBPRahhP",
  "key31": "3Ur1UBYKWmTLZtvGRokVF92JmFAwpg9fA2qMonWDMY4NjtFLoEkEgzUGCXfPktweQMbBhHfhSwDjnnLwetCrV3GB",
  "key32": "2JV9BNn6SKQrSvDcFGVVh1kj2ATgnMSkwwszzqM6jP9RJvFXMHYKDpzWNj8XHbRmGS9nUhfYaBzaAoARFakWtkbw",
  "key33": "51eA5UbRFZ61rxBfWpLQTX1pfE7xPKJVLkf2tWx4WaoNWZ6BcRQHW2RCtvxTJRzANmZ8AMFLtNKZE5M7y7qp237h",
  "key34": "5pkJRdnKDUUxwUkdw6XRwq9wktxYbAe5q29s55nnHJn7JaQxuitWd3TUv2hsJSP6hiwJ1m1cGxVzJ62fKdCVpmEm",
  "key35": "5zjxSPcmfoGdvqwQ97x7iwVUKtC42Zy3i31CKmi9ZRWjpSUBia7DhBaoarnzxFcvQ3VHxMLZ5K3PKHMPnGfXPumj",
  "key36": "WzotwEPUjH2cvoym9A5ZUv5YsNMtR9tDZgQXC1wQTTysK9H7BBTqWjziPX6M6hECLxNARbhhfF9752JRrmKGNGS",
  "key37": "2Vu7jnf1zyjgPxj7v8vLAE4JyG7Zs3CVLftXPoViuMTcH6v3VdrccgQTF2Ej3ZMYPbQqjFtnQZ28zLTkwu7cu778",
  "key38": "4iKmQ8uuH68CqGegC2ZaWN8CcmXPyrHJEEKQG4K9m6uFrshuj6WDxqN5nBXhUA5n9UYjfQxqBYUxs2pnGaygabq1"
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
