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
    "2enuUDTUCbWu7XwZTusK6XaQ7u5ZLzNhxpJY28KPgqMALk5cS4B5ZH7cMQ2T8yx8KFw9Y1FsL9Fmeyugvf6KAFuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2qk18gtmfVBYHFFpfZf5eWDTsNeAoDXKXiaC8USTjHgPEL4vXJUJF9XtonkRpTJvnJjpVQW6F2c5xDWCAtfJgh",
  "key1": "4Lioeteehw38aQZEbGrNi41HSh1dGnXaZTDLB96K7Nd78zkT7rPwZbXnQxLJkPQJW3szN3w6m1GHwxdYvAsJpmou",
  "key2": "QTfmUSoi1wFoa3vUC1yyqUq1auETJ4daWCup4bqHDJEhJE8crZhdgoqDcxTDBM24YHRZnLzren5TYyxcKyUAr1V",
  "key3": "2q5BuvxGdHp5CPG2rWxC91srDoxKpGPgtMzNsGmPjcFhx1cdnf8iAxofkneDxgCXJxN2B5RKT98o53bvCiq3f4vw",
  "key4": "HgiK8jMFEa9aQkEXn7AonVXQ3JY2vPbKpafNJSXhXF26rRovwfjpp2vXbii4ykMGz26vdTjHQ66imEXhH9DxoiB",
  "key5": "27NtNqqNf3hhW1qua8VfPsvq5PEzwrwwvi5eaphdy9AwRbiLcZjvhvqSqzPQdvE1HzNPErHjMjhwnBeGwobBkK9v",
  "key6": "2bbzjsH1oHaPD6QVakqV6pqPhosaXTEYGb1oiDSpobSQVodNZwr8DSeM2nTc5Bun77eZ2op1fANEsqh7Vveb29FU",
  "key7": "cMbgU64y8TuJjt5prZgS3528dRTC4bT8BL1xRqnfpNnMkMh72Jzu9KErWnptnW3ZoKfDD9MQep3jJrWwhJ56jvJ",
  "key8": "3H5zXePDwRHQNaoNYPRBQP4Xvx45JGCsJAJJctZNqN3N68WEM3vSUD48c9kh42LTNqwC5dkuQdU3n3up9TB5gq5R",
  "key9": "3FX3P82Nsc8k8VmjSmszzsnzYiTWHPbfvgafTdKK9Lcv9PxbPV9cDWaiYKL2BgqsjG7WQnUocqTSS2SaRDRBKPuz",
  "key10": "3cuZFL7si4o1JJc3UmSPWwb5283c1r23odGfTM52jgWGkSmg1rqErnusk5ixJB5aSbao7x13e6eLj2G7B4tL5qa9",
  "key11": "srdLdcLMNSdh6ZgE4qZNNfB3AjRpNEdHzGrfoBCvBsAYJhELJFXbXeaVF2LboqaRADTyT4BscMAVC7mMn6wUrT6",
  "key12": "48W1QtUkAmQTRaF8oyWngRc16tE3AeJ87CCw9t29Szc7nzGTmWqh67YtWuXHqu7NQuD4iQ7JQXZSFQJfJYB1AXA3",
  "key13": "49cTDFZnfA3EkVC6CUfqZdzUxCqeat2s7NYYCG1L83fwMwDnoi27YQ7S5agbxG7c315umUSkWYPwXd1NCKZerw8a",
  "key14": "4m4b38C43NuYB7raUy8v3gNctqBrPr9nbmwEbF5NKDQoqrJFXsuckELMQpEcMvQncajTd6WALmj7nvnqbxT1pZHJ",
  "key15": "2TmcwtkYNvLG91MSq5xciAG1Rc57CumJxfEa4PevWT4aFV8Jedu7aURpzTmfLyiLLCWXnrHcWHyFYed3BbrkkFyD",
  "key16": "4zafQ9hNG8T11jfdWTKnFx4fBUr6hByVF4xyNZ5v4Bro1DVVbL8JLxCmFozfMpmFzTA11X6Qbspv73j1XUkAcSg4",
  "key17": "61sjYaeR15GVxvSG5sdujYYjg2uopUHbsTkBeH81Fb6NBi6z4nYCi9Mz9VvdfA362FqUmsucgPhH2EhNf47tYrXW",
  "key18": "5s3n6qCX4ak5b9qCkW8yC5jCnPYsDaRsV51rL3WkLzNZ2mNK26cDnMUeuVNpLNxkrS4FMwWgHv9s1RUfQTfFvftM",
  "key19": "2ofWvTp1hQRHfTPvkn2L9gJLx1aWJVNH32FHmRmZaKJbd6bsZhubJFYnd4wjSHYjus7mcbT9cQxarY61B51QiSK3",
  "key20": "tfwUPPHKZT2Fm537NAVyQevT6FqWug3BW5iwYuyVp4k1wZj2MrJqWu8Ki7GuXj6zWGqC4zJrsKm1kq93WPSyGCn",
  "key21": "3MHWn2w9QHd71ADRFbUiyS8nBoCpQTZzp7wnUudq6DGEUcHLQW5T2dE9NvNmvTvpKHPG7F4niZkeW5wkbcXeVGme",
  "key22": "61BCmeKg7NLcEuTzsepKyqLtdLHZZocLrygcfnFaCkbS8MUBatZeHmf95C6RG3v9pwrwa5RDepf5CXqAjV2qUTfJ",
  "key23": "5Rm5bqp1vNFELgpkH5Q1hFQvHJ8Ke9WKnfHNHRo4m9JxoY5y3VRf2UYEGi9uwosHLxHfQu3ww4EPyFdJ2DP7oQQq",
  "key24": "5yGTpPYsAxh4ynbR8r6F9KE7pwMYPGxfG19mmKvTN6GfyM6pjLAQVsea2qcfx9HTkHvNsshSH8LbxBLbiKYUiKxu",
  "key25": "53du9got33oacYKcLnabCYQDCXb2VgeBFaRz3fG1fjnsQGeN8PYDQgiecpKxxsEk97RLYTpRFkctyYaJEBpwfYM7",
  "key26": "4gymYnBUsu7jDArS6E54X9LkFY8vVQ6ty2VCnKGRa9R7qgFdpYEKEK6i3BLrVk3ce2px8w8fyfX6EZRev6ctXvY5",
  "key27": "4auxJiz4s1EnwJb2o52UzJGfni9NWSv5mPWyKk78DeHc53wQfLh4K4wQXeRzba1Vhzw6BUaoXw6Ratvq5bctkyJE",
  "key28": "3ubkyHkRHL2b4k1ekb5cm74b6nx68Z2MMLWyHHj8PPPupQQDdUk9TS17w3uG4WACp4xZfyjFuwR8g2b8EWeXkD4r",
  "key29": "368tTzrAFSUZkrrQU9Nx64GSqFcUHjziD5iAeuRhCjdoMG4DeKmHbqf1rSdY3828gR5r2TdSwWnojJ9Y6ZtZGdxk",
  "key30": "3KY4oaYovMYW66DTVAaDQzydwFpUt1H64NW6HBto4e3w4n3TofCNDZk8hTmpcfZptRzH6aNBFatT2AqHG4kffzCi",
  "key31": "3UGAFwt4jZdeUPT3Z2sziCMdowHn5KNmeg9Qem4uYmZurP6CR3q7dNxfUAtrFJzRyHoH3LZx16VMBZi5sJPbGbGt"
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
