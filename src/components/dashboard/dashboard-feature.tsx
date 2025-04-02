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
    "2mbXfakFoanMY8C9xUfY1RppW68QUzkQUu5QE2X7HVAvb8z5VmqWDVcqnAHGfbus5vJ3UovPvcbDWJKUCfzLgcwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t2N3STNko6A6z91BBMZ5nDHL31W2aVWrVpPLKkq6R3pVB1eWjJs7QTVYN9od9t9UedS5mRhZDHUWA5Kqo74Y9wE",
  "key1": "67T79iNiFKLZoaopG2A2h1yoBfQCMdHnyNmupCfDZ2QMvmewQhAEtRSmpV9xsoP3aTBbq6QPqx3BP8XGCAEf7nWb",
  "key2": "5RU4fJWnu1GHfzx3oVRzMUZifAYnUJ8z38xstABjFbzSpmoKCkLVowGwvGVTDJ2Xjj4FVin1FWdawhzupGxySLd3",
  "key3": "4yD9iXDXnUKNF1GsVHUh5CcZ2Jd8VW35h4pV48XodtmhxenZtWzyVnDiSfEDMLMkpQe2fo1sYMJbcThDfzCzYU3z",
  "key4": "2dSBZ3F9zxagHkx3UjdESU5MgGth2CeNZG74hh26n1aHyeUiLHiS8q3oEVfbsRpkpXYB3929XAzXhHh7LEedr1CT",
  "key5": "5BxmnX3k3bfLihYuCk8UWJLociNzMY5Tw2mcmNGi3o5HjiZtb8B9r5obASuk78sqTsZ7B2M1XEQmRkvcC7NGcRTj",
  "key6": "3yByNgpLi5yn8iVxojDdz8EnTg5vuWp5mQ6mumsrtP2StbpS9vxhb6vCVCmwryhjGXBMBK9hpubaQNj3spmbVWtP",
  "key7": "2bJPR53aoApZqvjqPJjMGuMK7JcuvjLHXLEGmJyTWWS2SbATYnkwUNm9zWDA9hW8Txibt5JBpLprXDjaBZgbKoVu",
  "key8": "23wReFmXiLC2VWycjLdqy9Hwu63wdf77h87Yb3oK8yBwVEUbvNVRDUeFLq1wyWseTMaXaXxupKXD8kQinrum9kEG",
  "key9": "4B4Mm1dv1tpu8yh41KTtTzmGBfG2n1c3EQtQM4aqZy4Ub27froHPCW3cEaef1pwodub4S73C6kiQ35rQ4wNEymPB",
  "key10": "2eJde5mwoD6yyTWQwip3FGQjusKiNeouQSUyYSMQ3GzSFXUeG4BvuG34GHT6az21i9C2nnmpDtRzCqPxr1MeRXRp",
  "key11": "2Q6eJqDhNDdwWd9jj5UiSXsrix4RJpnNQckXZUKTCVB8uazXqrcAX7T1BAPWbPjbj5TQitSfaA9jz5PJLuTEQpMx",
  "key12": "41uzpyGBKQyz3i757jVSNyVKhRHUAT9LNXnee9rw84UmPJV8PazvdrCxVLa8ngG91fSkPTavNgPBKQycibVuFBu3",
  "key13": "5kYQ2u8yjqf6JgbrcnWoyUJAe2ZejdiQvg1ypjDuyh5bKMyb6KG9kBrUpRqvqVvPGmC6hFUmSdZVa3vPJrCdBfNW",
  "key14": "5CyWL8TBM3y7FMhQXrB7Q7iMmAkAcc3HZV8DiRLFyhTXYmWypQg33pda7aAF3neJBPnuFqAfypH5FF4tXXcxiK7J",
  "key15": "4Ex43ys6XSNAhMB6kru6ia4UNEKuMCSTExagALGDE79ZQLRFJifLukaF5mASNhRohgBnVJAgdHwqmFR5G4BG7PDX",
  "key16": "2LVRLK6UWsAREjHizA3WZzL8tef9XjipAEWapaDkex4xrnMwiQTMJZhUx45aq13T3YKRZvWCU3kEeZMQC75oBsHr",
  "key17": "2hdwDWCdhvD7xS554jP9yyFFHLUecjN2e42ewqMtqkrdmzP5XtsXe8SuPqBk6NZLRrKSY1Pc5BTGSuAMDgVnroAq",
  "key18": "5e9ECyz3FrzUydUKaxtVYeKSshCirLiw97F3rGHeJieMnfx9JMTMomR9866yyMWXeJCfQqBnQmUQsf7KxYyNJgSd",
  "key19": "2Ggoh6Swf4UZM3YPv787uPSfBK87th3zdgZStJvtkTufMZoixD8k7uTLpJk5LjNgNyATdQzApCy6QtpCazaxauEK",
  "key20": "55H19EFZQqGjFxnZocqVtQug6okXJQvtdvWUUcv3pkF9srAQ7mQJkXMkimkNaWUckjNhgp5qB8MR7DiTPXD9Gkf6",
  "key21": "5wiRJmXyL9vr67C4QC4GHw3mTZskPSzAiNkQ9Qdjtzy3sS2cXHUoH4ZrosVFqPQoZzYCtkDxN5U6sbzssaUMKMgY",
  "key22": "GpPMbcp1L9PV7SZsEjRNMzex988Zt7j5gbYVceYUFGMD3bEHSbACpayzxv16Yjf7mPRNGkMPJAFk1ZUotyoZAPb",
  "key23": "ndTnYrqqk3cndRNygKuGPG5FYKEs4dgsR2sdxwncF8df3yi2K67niXsnqVHLvXPzqXgieroKrCq26WcVTDBnwXt",
  "key24": "3NfhxWQkbpP44NwhcUwHz1Z6rG6rNWVCxVxHqdY1jRiX1ppg6rZRS5RjwgTQ9AFvRmFjiemaHz7ocrXfnJccqTCC",
  "key25": "5rY5LaHYttpLB1BPUiuK8kiKo3qt65PHtHhWWUWaWqgfjkJNEgQk9ebUEbtymVnAW8CAPcWinSWNj5686iAbErK2",
  "key26": "27JAeeqvba8DYLdHxeSA8gNQnJkVk3uxQFYwEqcf3Rumd3YtELuJ8ULwFccTfTdt4pq1ckCWeBGG9MyEpz5qCvQ4",
  "key27": "42bA8rUHCshUnLbc2LoutbLzMmtYcK96AJG41cMjzegwm3KGSGRhPXcF54q4R8shKWCEdU76hcAvUb9muz4KBDNR",
  "key28": "38xgzwF7BvZmW9Y9KFmwQEcYQTtumkNVYXNHpaBhV54mUGjMBTDVQ54ntKNw5cJ3c3UnUPsiQzcnhva9SkRCD31j",
  "key29": "56hUWYW9AUmNLMLhbx8sNmbuyAcfiDfqHkAjqfVKrybakoadVM6YkUjV1eBEkUZ9Gi8htz8WzKqQT6rS9pVFPHCY",
  "key30": "5dkMwaW3qn6HjDxMTxLaf3gs4dWogDnqxWPbAJNuC1Eckwos8J6i3ruVGh7Gtoh6JYcxKEGGyeDepm8nETnpKHTz",
  "key31": "3e1ZVH26QeMXq3zq5Ev1UiVnEbzrRn1KztxBfJtcrPt6Ykk36cjxEZjoik3KV1SCNXMuLDmDGYfT6hfN8TzFLcHt",
  "key32": "nibjRKA26V7daKPerZjfCjQgosoCYR35P6QEMLjQcw9LGAWHGHQRXMJyadcUfnMwU71Nn2ojNjU6w99rbUhP5Fy"
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
