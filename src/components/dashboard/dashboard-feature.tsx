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
    "ZQongbgBAWhwUytHaivaGpFbXQK8i9yR6jthTQ2wxAnZrQjM5sWaoRhJ1QkVM6jHCkbbr2f8M7u5wz8TAJ46SDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zv7Dq4wNmAcmerXh64VkeSvC4yGwB53jbuT6i88C5QR19XfffAkQChQEUjAeAVTcfP2v2WwSWDwwC78KauNkoXa",
  "key1": "npdcxYGxcTmte2TfGvgNiXWGfoksCK8WgyKyxGbms9DKMTpGmcAzF2oFZjU8A3jEoz3AHGN1kgcak6nqRZXURWP",
  "key2": "2iLQFoUY9ZaNJL2Nc3FdNCPgvtMRfSNwvWSa3VWSpvqJWwyh2x2A5ofLmQcEs8uKFryGDHnJbJADJcPGauH1VPxW",
  "key3": "3e9LmQeTJCNNcAbxN27ZyHBsbsikTRYQT996tJkJ5t5KqDViByvWJSb98a2hAhWpEigeNVUMStv6HbeA9ogjjmai",
  "key4": "4TDbXuoF4j5BWzXTGWAMyVWM6NPrRiXenzx7RKYWuBbww8Lgyo5A9heeu72ttpeyJqQi9uHE4MCefuKHuqT6x8bz",
  "key5": "4sbwLBVt17xoUUmoEmctTccZUeuiv9LFmE1zwT9NV3jxoxyixPn7T8xwGnf3KDjbAagkXDa5HYaBxCHmLDk4ijCq",
  "key6": "h2uezwTS1efPF3cJc8Q2pnACvutVDizX8ae3BxN1YFAaBNb4Dhr1Mfyv6hSxvRTnCBLRPfRNokT2UBBGb5nfgJA",
  "key7": "44yXHT1uAPEZQkDUEqAdo4VdExYiQkbcbrUJa6mkxFW6GMCemJQth1F9MnDMQ6gH5HtmDj73nhX9XiVmkT6KWKeR",
  "key8": "4KzhD5XsXaME5y41ydbtxPPe4DwXNA1KYE7mHtdswMGkDMzjAFPKyrs7CNnvM92H1UuXiss7XJymTb9QMXqwPKZR",
  "key9": "3ye7HqMYs2LziJ7G9HKL3qKxrU9q1ENuBhL843hNj2STtVCquXX5GptkDS5Nm9vho5KazZbEhbrTQk8pgXsBoHUv",
  "key10": "R7rtmJ4i2tR6LwFTryPgkG9jnXFBh3GJeH8esp6AzAAJrY7GfsCUae5DRAcxkAcxv4oSjXksNjZA7vmgFXhUd5L",
  "key11": "3PypXm78bgrLi83xhHg6kVLoVTxSwesAYLRti13FR7sn7bmSezAkCwKLss5TFUfra9MauRq2M9w3tSZZw9PVF2uo",
  "key12": "2DXTZ6KMQFTdpAsTdG4JNugP3dcCa1c9ErMJxdPsSCV7TT8Q52LUSbD3KW2J4zSQKSRLjtkoMMHu48u86NFQFZVU",
  "key13": "2mbLC3C28cJaqkrQWFgcF6ojnf4AVVoR3FN1bCnRJEXAbDXmMwp1Zq7QoUMFZgnUeWWdnywRF11kPzunEkE1WiHF",
  "key14": "59CnA3GL3YVuXHSp5U7yNgPaPwHbDn2BcTpzYD1d2iNxrT5QkCmZ4zdqevSWwxp6Dfw3QxML5dPb6fCpdohxSaXi",
  "key15": "67EAf8sZcTT8ho9gdQcnnGL4aUXizbfwbsXAuukRi6ogRZzba6AmFArPHS2t9ZdEoYSp6LhWDP5wPCNn9qWjNg6R",
  "key16": "3nwX4c8wPxtR2GTtmcSNhYjvmyQNkjvhV7E1KTihfj1HShMjicDybcyzseVn2ThTKifstd6exVyTiocW8LZJEjPS",
  "key17": "LqHMj3hVQMUTjNNsuPoxzq3KHPi2tR98Rw4g6bTgnJ5jWdBt8XaxFBQ45FwHECZ4JDt13LB6UwuwP4QiYkDVoMU",
  "key18": "3A7ViQnUDBzEGanDZWdW4FdCcCKYhem1aJr4wKiu2jqRodZjjRg1gkNFYke5a5P19zShDWoCtgvYqq7oivwYNJ3y",
  "key19": "51ggFitzJfKVuHXFvhMTdNdSMCydnSkZoYeiCYHgf9SGn2vMpFCJkS69k9RQ4qox9VxY3pPnG3CaM6e6pbuNjmQC",
  "key20": "2ehQvtYhvdDpMuQgdrgJjXCBJkHx7UJULdZpyzhU2hJpRdMX6PZMAgyafY9gKbca13WdqPTntArjjC2eTq1hK9A4",
  "key21": "2mH813qgvTWG7v7fV4x9AAg6jsMSgtqSbuH2RuRm6dakXQTrfTv4HDrdYuWKRcMj3e62CYqdbXbY9mcJeFaba1f9",
  "key22": "X2SdyoK4Ls53tAfpAzdRnc7PSKt8FAvm8JTakCxVSHwao8wXb227AoPNzyyQhq84bWcBtJmD9NH3KRJguDeFx3d",
  "key23": "542K2Nbkvg8rxDhC7JpKPKXquiKJpr3cCKqSLadQQrefCNCVsmLhSEwevEcxrrssBm1T64mKuAo51XsK5isv7VpM",
  "key24": "2XwA78pnHzT26VQtVGhgYkrFz9rYWNbgQkKnBRe3i9pNk1AUTDrnnC4gKAAcLf2BF7PaxEXxSmFSoNJdm9huLJwY",
  "key25": "4kdEjRAv97p4eePBmH1RKiPSdp1qqSGuLStP2DUAA2wnXYD2ygp7dmnzTssono9Xct1MkBR9uZ44ZuYBtJtcXgnc",
  "key26": "2V9zXYY2tmkw5eH8ccsYJtq1WDY9vkVQUXp2WTyc5wA3Fi9RuxAiBq5jvaEQjA6mSAQZxHrRdEGFo6BEUR6Kweaq",
  "key27": "3ZrQzV52iXoBkBxPLk8Ck7pPH9sjno2Can4UWMoTBAKRqyo6cFhcCWqTKNz8nR3eaVub1xyi2BXLEKBc2feFjVdv",
  "key28": "oCBbuwP8ieGQ7jZs9x5ovQa32BCyrciDzvA45duvke3Z7GUZkH8Q6B5FfYtLvCbBHWmHG3U2KPp8m1k33uGxMf6",
  "key29": "K3224i5623G9dcS6KJ6XbNYiAddZ3VWi8Ct5HfENr8iARumhcksXWnyRwfBJKvEJV5UuqSq3YdQYvqC9p7W7RdL"
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
