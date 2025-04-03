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
    "2viEeiFJaiH5adWviCNBdtQkfnWXhW8jXyF5rveaYDitnN7tkxstSjD4PDCUMxg7K4bdXkfvRLoCJKLiPuZFt3Y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ca41q74jrUptxkENHwQNYyYsJm1UxvHtahmDrmhCp7k2nF1npCLK3R924oSk3y8e1m69fkEAGxSTuQp1MZLktru",
  "key1": "4X2nNUrgpDE2a4DDAMBF9ZJscgDMGZbxmQUNJS7kdmEZynNvryWbFVcn7Go74awkKfY95prRnWTiEu1gpFGxw2tk",
  "key2": "5ve8FWFjVsNRoPXnrdDpuMKoRDpyoPu4r5ogR6W4K1ZcCWVzi24pDLpKNQ4ywDXb6nKt29KdXoVk1skS3owpiH8A",
  "key3": "3e3FQ2HWr32mun3cevUbM2au1tq6xUtVxTYHoLXSmjvGym2qmwPB5Mdg2XeXi5wsZeKD8izR6XXbCyeYqnABUeSq",
  "key4": "oTYPeUheaUgMxyCoBe1xXF7o2VPpYRs1RjEWh9LYyzfeas1DqeTukuv31eU9mAiAiFgBGeTmAZNyE2KmRmZLXDi",
  "key5": "3Q2oVGGmsE93xG6kEzzZqcsogNvcv4BoDg6c3orNmCFELmTyydrTCEjn4QtZkGtfj2TshPJEwBGcYDJKPi77HiV",
  "key6": "2Zm9yfoZqGb3oqpaJbqRcMKdW9o6S9GwWZikS6LJUDtCUtbQJdFBmvYn486CHG1Fe3dHitYwLGc1wxL7wx69xerM",
  "key7": "2PB3tJ4znP88SMeXEakXricGYLuW6tcKRPRVFgujLXBScg3zFZ45uPFXaa6ryK5MKJ2Zq6SB16nCZJQBLEatzoT",
  "key8": "5BxJxkZS3MRTMjqtrRTBMytv4zdGdSFVTDFZ8LPZrNwsVD5Z4ZTibL9FYNcUnjorDMK7Fch3c1v43G8PoFMXB7pd",
  "key9": "485u6wuq8PTKSXki4YTNABzpeQigjsxSE7GSivTUqogVMazeQgmxaaTfjoiJw6ww5E6vuhUdhu7CxEzCHfvmNkJw",
  "key10": "4LNbJprCknyRsHCUPnAFaEw1yRHiKca2zQ6keb1c5mzz5bmVv3NVoPKdenBKcPvPHUQyQg8LHNM5jjJDjE5pVaK6",
  "key11": "2SV33GoWdhYuA3z8rrgjtNUFH6LSeoPYC5NKK4dx6JDqAQaMwTkY2yjaTkX2C5ubUoGP6u65Sv4n2cT76Qq7Puo",
  "key12": "5JdiogPfVVRX2z3QrJUtGXCP4DD8SBMrEqSKBzYJB7SggJQgZ785WhqE8XXdqCecpMgjToyVh7fsAAGA71UrhF4Z",
  "key13": "BJesAYjHX1ddpHNtWSLfoRRDNJrXDvpwwMH2x7tbben7Hnu6qPEuQBoGZeQuqCfiqfP8aQ2JQqDVT34uq3pMziL",
  "key14": "61cDjvbJAVEPzgkLLxNrJ12z6cHjofucdbUvkv2RzZLqG8oHagsk5KqSaNkV1vUxBUPdnFLtqTxM3oV2pjHqGKJC",
  "key15": "3WKRvbwDeXQhAySnZYRLVygYoahZxzap7KEAUrehkQA61VCAxdAJF7U8dHH12TWnnBa1AQBeBT3SwKVYv9z9jJu2",
  "key16": "4Lgp26HWu1G2J9ooWM4DvrWatYR3tbrqmd3h3LD9NQ9f7xMhVqThVmaQc5AQQZsLk5HKVsmKVZFKc6n3oe8BunT4",
  "key17": "5PQnep4ZQaion4trN9tcRvFuBsz7AfktmewTHuNrqoGEpW1wSMJnxFq9PfBnTP3mrW7KqgWZrWF29uJkBcEvC7NA",
  "key18": "27x1fbt7QgLxKAYYv9eg8GUKhYq2hjtZAv7PB52X5egtMHpdh2gg8XmmuKYmGPKEoHiFrKC4kYV5b6KNQ7vjkZh1",
  "key19": "3ff4eSsgFGh2J4f5FrF6TaYMickAtcXsP2B2ZgK2CL1FhAXUSFyJZQiLN4vqYFYNYTsgk2qxdu3oZnLALyCzVBFf",
  "key20": "3jWNpnKA49P1vJUD26uj2xEAsKAJ2rNJSbU75Ng579SFURQq771cK5kDxPUvSt48vvbcF3aysJNWWfqJWvoWEKR2",
  "key21": "3UsttiMrMvRsY27LrMw4JX1rzUhgqHyruYdnAJppdGXj7UBdz4bvbV64GzAKDatJXmnuBXo2oTcvTwYa13ZUazoB",
  "key22": "5hpJJNzYunZD7dSbxdph458ErU5GndwJV947tjBwoLxTTaioWZ8rSbA7e5gfeoV2SScahMK7VCtcP9YWA5xyMgSv",
  "key23": "5NUPn5g2EP5URLLr5QSoYMwxQ2erqLneShxjoyg8JiYUtwKUXq9uJ8EeBVERuqJcZKsUjaoNC7byiFQJFYEkwb5S",
  "key24": "4tzpFQ3buG5mAQVqSwZCxaChbucSQVCeaoNT3rXbuVWNK4Vz92vHWokY8hss5D6xofog1uX9194N4DfVyeGUFby9"
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
