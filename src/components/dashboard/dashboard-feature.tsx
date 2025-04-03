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
    "496CLVZknVu2qPSLAuHErk6jcm2ek2J6ULGZUdgTtSKsxUPonVNqwgnhJYzSuFek6Cbdpbwg32pMebDvhRdDSb2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mg81VTns55WGCrA1kcQm139UYSPuYuh88wf3dFD6fihhzZCesAxQK9GbrJmma8nomqwY2TXp2ScuVmsiW8a55x4",
  "key1": "213FLvgKBcErQi9jSpKtTtMu1ns68ArVRVMw9adusdg358C9kLwNpgxWtEYpZnCfuMr7wQ4piMdprS5Hmu4GtNt9",
  "key2": "5Z8YFyPpWye6DVjBD9XHJPYDuuTnASgGAdrzHh6y5wNxAhkbNgBY9buLAVkcFVvbzRxoV2sqBwTrepJWz5LRz4zn",
  "key3": "31HA7iJEgewq1riXSYd71mzCbrivKq1Yc4ZCKGFneiAw1pcQcmLmTmbRu2nk9HZrTrnFcsTSGYkoVbxp5fK2qRPZ",
  "key4": "5mPhvkqZ13XQ4L8g6ob9bWap5Np35oaRkHqWNQ39fgGGU7uAKzqJkc5fooXrXNeyJvNUcFt2crJqyaWZQKnWzSwC",
  "key5": "44TeiUt3Wz2n1go5v1soshsW8qVEGUaaL2p6Z4rmJCmr2PPGihFykpeLunjR28vhaFqfuYkvMmou8Ev5U4LuVtn7",
  "key6": "3wFBh2Y7Ek9wsUoQJMWfZkiJXbz9bZFVZUC6xEXHbFR2qXuWf9PyaRP3Z45tk9htsghXRAmd9uBzqfkNMGsYh4YT",
  "key7": "5Q4CqTgzeBSxcwAMHpePNc1sjfSNriz3hF65fL8t4f6jVVN1byP3Hgc5bSGLEWxgNkKvqdsVHMwV6438TkjVfzcR",
  "key8": "2qeSibwQ6M7D6GUsZy4gAZoJBuW4kcNwcNPjxTdUGop7e1vQDp7mADtn5zPwEd4kQQWc5YUky6v73e7rYGavRY52",
  "key9": "584EVcHmZ1Fja8BPeMjAaMsE5FpLNZv4wGf8CdEx5zc22CFfT2E8mVLQMsks1FURhuv42kDYeS5ADcR8Yn7LxjzD",
  "key10": "2jSC2RiMxcNmJ4F2iE1AgSmRyE4M5kvA8wHYFprsazVZqeKUVs5tMgKChHnd5g5EASEZFiBgJgvUqPAcRtxdimyb",
  "key11": "27M1Vekr9fV8ykezPmpA6twRK6ys71qT9rzdfsDQgarVD3jbDbZS2wmt3S4UgUVA5LG2kqgYy1Yy4WuvZeWCnw9h",
  "key12": "67RtnAd5kgBKa7ZMQQosUh9xXBB4FnKJHxoQur3Japq9QY8vC2LkNHadB6LGK6NFoPQPQBpnv3J2pYN8DHDFMm86",
  "key13": "65Yb31HqfN4sGRZZLVJf7i8TDJSSEYSCapNKeGZKMxVJZXv7ypfymFc3JZ1r11HQv7pHayJQdd5svffthTYqWKQS",
  "key14": "2ez46MqNCXgcoWvxMsZKhSdFt23KiHoMTAPoEA9VRjn2aKERwS9b4SUdRbp4gKvt8iDCAU9B1kh5rzpZPjKwD6qg",
  "key15": "44nnAkRdBA61UyiaNBLfD9kYrjz32p8hChH4icmUicuXkRPbPhQTLGedeTZjTP9B9jPC3mFTGr8R8s7nyGWqZnop",
  "key16": "2wAQVuD1TSYdGz4YaXXXnGrQ7qPt7ZvfCr1xGQisjSjQVDxxtLxhvmhv5PKDNPSwcUqKkJPCudmnX8iRDdkAiP51",
  "key17": "5wrT6vTzg9rEA5RPBxwJwzqqNNrnKNskUebPayKrUfu9HREUoyVAvuGG14ZoyndRLczq3JyrkFMTZBWqeVLNHU3e",
  "key18": "54JUNwq5sFYH9nFeU7nGjcsSwWPjZmuk2kGrbHZg4HPUHyd8CSFZD4i3C5utL2F3Sc1jgQzfmKZd7L1Bm3RgzmHK",
  "key19": "2bdm39JDuVnyrujYZRJWUZwfx5bQugeEozhRmSpSJcDjSMxBDWZAUGe9WHgbXfkeyFJWJDhtptf6cCYKb94oZPS6",
  "key20": "52einfpSXaYvv5pXinNGd1L61LUyvgQrkTJTVQAGYnPC86qHcHNXDGwzNeypMpQfB9m2Xt24FDyfE8mnzJHdUD6",
  "key21": "4rYhW8wsLMtnFbU3VMkAomYn7iZz5wxx5Wb6sy2Kjk6bZuQV6Gv1HZ4bSYmDYdogjXEngz1G1rxmvGbYsnqyQKaR",
  "key22": "3UsZ3XE3b74BBtg9k4XiFUj8q2sqgJqzT3Nxcu2jVWTp2zdYQWBxGxxSEd2sJ6jsCrE44ZwhHFJBy4mnRe8d9FWS",
  "key23": "5cKde2nNUwdtjxCouWnapEWNKsZVTANq3qMYeG4kud9m7oghCBtE7WKcxPrCy1LHXRTqPySsLdaCYNeK9Kk6KZ6g",
  "key24": "SV9QJxFHA6tmnDGfbEbTFTPzFdEi81bBLB8Gy7shqdfmssgw21MhoWEhSX9EUHeV3WJazQ5TTmJBYtbqnXksRCo",
  "key25": "NoTo6qyZxBmNuKPKbMcPo3eLk9bL5eC1nnrkx63NUBCofm2G4iS4wud2uH7MTYtdgEytiva6MzeEshvE6nkD7n5",
  "key26": "4Z1J1A55uRUgdBT5e6frfjQjjVH2UwV1BsCmoApp8sif1dEUZ1Eg1TM33RVKDqn9ayWng3qvPdn2CK1Kjho1PnLx",
  "key27": "5m24x6nMP8Ma7xssS2muuA6gLUueZEnMJYssjKMmUv8hz889pb4riCvVjvPV1QhP5wzGxHTfGfS3wjVvocmyZAWc",
  "key28": "25aFtz1c2QoGMkygKn6kMKtgN4NGkZw8H65ED6muLBr79QV3U3psYkHzhiBhQBRTrJfUJRPNE99sbkFWSKyFuuEw",
  "key29": "3pwTY1P9XFJ3YwKfGZXMAoBMn26rgviu9SVExuV1TWBDd8aFS6h5Vb4yiTX1M1SwaJGWV3SPDFusxNTGQu3Lprdv",
  "key30": "9WYAsAgS6fepS9nurRDQWyquNsMNfJoHtrS9ZfSNBbx3ehZzpmkFvERgTrhx5tXmPSxsuaazjEMBQ2d5ajECu6h"
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
