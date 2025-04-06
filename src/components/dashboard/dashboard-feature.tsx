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
    "63uEgfHjhvMmJtdEs9qSZJxCbYBUvbCZpMcK8DLjB6673vtQ1G9Zyr5zVTRDcdFiBd6PQDps4DVijdkDgugLCcKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2td4V2dH9XkuHKJT4kR4ujRoe4NQT8EnNMqdLo1GjnSnmrtMyaC5nioYwqwnSVQPLPzJtiCDUcbictukEmnJmc6Q",
  "key1": "KNHcYNv7sHcbsh6hHZgJGGjktmHhoAJxEvqFLCjnNPjTyMKDBf7TTwqiYLY2Kc9Uy6Y4pdWXuQo9CogfzqKKPfB",
  "key2": "4sBUR3f19WfhmdkjiNBHhgCnZrrdSHo4x4Ej3oex7vH5dSDAq8VzsV17H96KZFwWDk4W8UNFGv1Njzczgy2sx3bk",
  "key3": "cQ11T1Cva6qrgD7R2UVDtuSLA79RtB6W2cmMVoJvsmr2iXdxRoN3gJYrmpWGDCZtCmb4V4mTScCHWxf2rbXPb6M",
  "key4": "5xy3kofWvVWPb6pU2NZft56y1o2wxjqx6MnTyEsD1VVToGmjpx4o59RjWQdqyGAsTyd8jNuFGWUirYSkhQPESKWm",
  "key5": "33fvK1TsW8VvWCBeaTetfWb7JwAjJgprv93j7hjagN8ooRGAQbqieHYqvRejghnvy5Q5Bvc9jBSTThBWKx3uiPpN",
  "key6": "2eKwUkyM4DXuggXzzCbnKBRgTtwm1nkQA5M2DEskMtne6GWdozV7ACNjbMRR8zX1h7ncH8jex6BjkhJfEuzaBRaU",
  "key7": "2Z32CBdwg4cpmTbhdz62o26bkbBNgC8JEvvSQGnSEcaqEefBsqRPfpReUXLewekqmGH6dFPQo2z55FyREF7CynBe",
  "key8": "3tyuDTvsqdFLJztQBoK1E9XkTMDiSb3nbWuHMJcbh5e4UvX4UFZsCyGD3mbYHtEcW25kDsWjnhBomE4Winfkf9A7",
  "key9": "3wUcVwE8mwbg8sYimjG5x7abNdpet1dgKYia5P4fhSSNpAvWuCJiAH69wkvZrHfgVv3i1vi4BWQowPubDPmDbeT8",
  "key10": "5PHeUvFdd6ensj39YQgdxXSQoqqq4ESxS6msk6K4PPG7hbreTDwaccqKgKe2ZwGQucPzLmZb2bY9texrNM1DcWbD",
  "key11": "5F741az6CDiVJiYENNKZSEMPVcX1xdZeoTWgtBPtLan6rRFDjrfbX4WugEBKJh7NaUNQJqfnEyuedGdRgLQqbM8z",
  "key12": "2nvm4rgdHhawpeYTDDUePeinoFfH8xrv2xVM5HgyBSj4K16ge3E6UHKvPtKRBVcoZxtujHigcBCm4tvPDL8tinJ1",
  "key13": "2ZcH3coPY4YzzeyCgLFupWsFwpe8PSXrRQkBiRkS7SFP1ThMto1tsSEuiGZWgK42vQXrzTKtZ5URsyvW2zAJHeZF",
  "key14": "5GqsDXit8KH2wS8UF1QzV1Hz1q3MuTvP1Q9ZCpcP1tSSLasrEdUSa4QskKEJEjue7T5d5oD6EeLbBUCfMbw32yjV",
  "key15": "4MF9PAyzGp9XjSnV5oYpcUeRXHk9VpKpB39P1TTaXSV9h8nU64uQ3zftkSjFbU9eWaZTnXEHRx8EUUWWRzuTau7q",
  "key16": "Zp3bC6GE7iZLpD87cYHia6PDQpLmACpoE5RmHatsYvncVQ8iJcQqncmamRHmFjheNPbuifL5KSvE2nQZP31j3TD",
  "key17": "4iAj9K8yf4R8zwXnPJG2EqfebhJt1xXiDXkxGJ8ZC4TwxK3T5vxiBq7aQJpYY2SLeoFDMtJM8JcND1qfXXiGsD63",
  "key18": "2hDZjgrWaZkMUTFPEfGtSn37fRsxNobkTFED8HfxT5CwoJkHwypfpRXxA9bJsVqagCNXri79msPyAMjfiFeXmGu5",
  "key19": "5Cs7mvFTUcg6Kyqi9NBz9XhsguVJ3YfvAQucdvMcZ4EHfsGwoByix2WyFbZbF5B7zqQ1p7JKEhkYm86VQpEwWn9s",
  "key20": "VsMFNQhqSk4WrDPmeHAvkdZQ4qx8YBHZHaaWCdQxypaEkJb8VUDfxPfnKHkFHJ4GwuEsMC35ZKYRJzwu2VGQv49",
  "key21": "3cL3k5NAkLrK8rP86RBMoXhzNrRRTcPwzfwucsU3MiDddQcQ6uMopaJqtyVQWSNJVqcF1gSg9x5XWdtew4DJs4Vu",
  "key22": "2mgyercjuXWSikhscqvkJk5yxGpHDevDbQgM5d4VCzpmn3fW6zvNv2yjR5U4FyCadahmX3uupARzuYKmQa5aniN5",
  "key23": "2Dq2YKCQPwZtSNCtmPow7CiyTHtBHswQE5teKFRgMyBaD7BHgGTb8KbhxgVxwjz3oDK1Wwjbw4PuEvwuMEz83wDW",
  "key24": "32j5haG7jfmkmDW9HQ8CafwCZfVayzc4MezUGoxkLkvhidSRoomvyUybopPqpaJVWD5dmaVu35NSmVa2Tnt4LMTv",
  "key25": "3cXz73EHcDDdG3zjxGq6HvcTC3qJqLwuXrQmBzZe3uartiNRTWDsN4C38NWzvQP4W3xioYnith1jVhNHeFkB5Ssd",
  "key26": "2HJBUFarYkF2Wfo56eXfjhAGa7HCwumyoqR4hALwhLPbmisB5Hwo4J16XGubf4QvWjRLuPio2FoE5EwhpFvosLX7",
  "key27": "SRsHFV6H5ohokGiMBYomhy2GnWcv5d2uFmZdmjv58Lkbr8yNFAY4PxMTKic5jSofTxPAK7iafFUhjT9a5PBLujX",
  "key28": "3r6CdueNqUdMV8vDw3gSsYLhdPixfbgA2eX96cXruK5DQp1cHeoYPvefizR8LqSuuofa3s6YLz7kFjLm4XbWLWv8",
  "key29": "3WD38yfXC3FHPKrKQjHb95LWQkzHDsJGrH4AzxiyM3QA5gV9d7UyamBKqNfxk1hij5fUhxD6xKzsee12wCtBFZB9"
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
