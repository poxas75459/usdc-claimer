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
    "2JNHpB1EiKHDL8JcYYnWxTyuEe9th4UccU6X7wpptPYbwksvF4Bm6rzSsCtvhxs1CXEEUd8tW8iFWXFFxjJLYV4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UFZiZ7yz2nv94SiDYCdzbcHL97jE99A3zeAHPRq6LomSeP6wY2rS6kJoQDdZh6ea2Txao6dxKHr9eKYUsen8vpC",
  "key1": "4gVptMiHTsuNXePnY2tBMUmFfe67ZXiAx9v7WxbVhpWhZ1Gca1RP5aQwwXnD4d5Gw2LyZPt6q78EpjMN7DfywALB",
  "key2": "25nCK25skYmQfUvoZuzVFyMz8NB9u33pqC8yE95GZbdKPJA6dRHAoNVDWb7x6xUHw9jKKQq9jLinaK2Xu6AJpfXS",
  "key3": "4CAN1R6whR3CK4E1NmDG3Zn1pGFYxmZYdxBP1QN3ZSXcNuZc5t8yYXNGDZBHsizGWpp77rY9jfsZ1kdMTVVC2mac",
  "key4": "FniPvBPE9QFRXXLrEVQEZxBDKRtjqP1EYG2sV4eevaey8kS5artjh7NMKmGCnuXaG1mMFvDENQCtFiB7HSriT7m",
  "key5": "22a3Smp36ZpPg7eSygiWpEjtksWookmbdANUuYNCMQc5sBNQVV6AD6vMM7UfQsrHULFuPofYB5xpKD55gnKWpGtY",
  "key6": "3ZwAL9rfq6f5wVtuVc4X9FkULBV1SaE7wiqHrpUvfQb1f6p7XTccY9RMEcRwJ7faidkC2ScYioCoCDzNDFN39gZd",
  "key7": "31uXLCQT3t5rUsTGyg7aLnvpDL5eNM8ev5akQ4ChnA1KLyjizsnN3TZYqnzQGVh7mmT99L9SZ3iEcsU5p42N58oz",
  "key8": "2WzkSbWk4tUNmGRawvNgwPuqLQ87cTTP1A4KkNHQije9Lf8obKwj4wc7UmEgKcPAxm8GU7h3n7KT31EG8bRPtbaN",
  "key9": "4qLmk15UbRFo6H8VfWzxbhXF6iGesyoXR89qzang9LBMzHLPBzXQQX9aJNxmsKCfMNU3JBWVx9Ax4GzHRznKdoiL",
  "key10": "3kPBZRNyqT5UsZDcRtkjWX1orda1jmi6BcFmYEYKPWTNtC9R3XQHSP2x74MsyjVhauCDBzF9675WLQrAUXPAtNYn",
  "key11": "3pRvW5Z2oCNsm3ujkdkquT9tb4UcYsRwGhe6WSwGZBDMCFVH8Z8rVcdDNjM3pWkNSdngFyq1BmoyKbRNqywTzKzt",
  "key12": "4h6LG6G9st2t924SdQVa5BskCaYyQN5G1U1Kyfpiy46WyXUN2o7dsveuXJoZ84hDstFWaVPFrFWZfVPWnjtMdcFx",
  "key13": "4h6db3vDtkSequNeACUXLyoWoCjLCnVTZmkfdWxaGjHc6wgRrxvJf6jef7YCfAFgUxchjLrMGiCybHG2sVtKZgMF",
  "key14": "47wekwLbjVTm1bJR5q9UL42SPpUeYfzzHmbh12YT7rhyujhLqukSVwMJGvjdoXqr4cY4AN5aMTQ9oo6nVouHz8q1",
  "key15": "d6y4xYoN7mWm6kZHXqL8ExSd8fp4cmVHVYShWHszKJAiyTomVC1rqdjeXCbXKXvdFTud5Um2eN2V6PKKF6yjcmP",
  "key16": "3hSYChSbxz13TU9YHmZuvYpGtVhugCq3qwC3p97JFQtFNRzF14mYD6bBVoPCgeCEZYQwdYU6aismFPGSy21Wrhb7",
  "key17": "3uEHpFfjKD5zCGDkwyZ6ihPvUt42FuQz1ZXcKBjizQhTrSUh79BcrUNxexiw3SKmfHm4V3AQth8RmtYiYbGsDdjR",
  "key18": "5WzWjpNw2pMimaC9zcABPRU8RZRjRDrUgL8p8NSfJUk4vtzcuG9EkP7BsxCiV9W1z4aJSpEfgi4ESCvc6Ankze3a",
  "key19": "5XgGp9ReVMn3asH87xu8ZBmed28ibWGe1ZFMhWkWSLFfLYLfgWMK9yj6vr9ZU6n5ik9Fp8TyqhiZ7JUtqLSEdwK7",
  "key20": "4RdS4H9ghGxgJFoX2Ls6izkViSQRVjtM8ZSAssC5f5RNjYkXLPc16UZWBuwvFBg5cQpSLK6v6kHWToMoFjZLrPFW",
  "key21": "cfNVczNH35B8bknBsJDsU7NuFGZNY3BWpRw4ham52eh6HFVrkMbcGCN3D79eG7Um8pWmcb8hncdUvhudswb7g4C",
  "key22": "cRcMZMzV2EwzavYDHD1emMFJCLu1xMTuBpkmTiMswdWeEB5ea9okPhwfhmmuSgcdWj5zeSAyrYuVtpPodQARfsD",
  "key23": "2VdLYvsUJw5gdRjjP1MLWA9Jvpmtb8iGD7HdYwatiRwwzHpppRMVxfSffLsL2h2tgwgtFDzypxZsMhKHHMgkAXX7",
  "key24": "5PiqjpeqEw7fkANGWinrLWbRNFaE8vvctskYNyCaQ2LkyQwF9daWtK2QAka32SinVaVo7YoCbL7KfHPTQVeNDsmL",
  "key25": "5qo91tjmrzF7f7MUQkGqUfgytZLipDYhqW7iE33NSF8eCc7haqtuFtYVr9tdsE3e6qUmpahsHNTTyMyVWCzqt4aj",
  "key26": "2mTci5xWLuXSP7LXQgNyxqNCZtfo2QnFwS11Bvor3LUJ2PEWeyFEnfRQHMH5PmqxoEnX2RSX6bABCW8bu7vPi6YX",
  "key27": "MByY3ivk4foEnLPUrqjze6t9mEBuqMqvSJzq2NMFBjvdFQQfiE2xQweyEReopcNZjH1Z2YmiF4QECYzQgshpgcA",
  "key28": "629ejFp1ZZAkCkkffZE3jYZgBXyFjovLXvLvMVPEJWg8ygwXvZq3EdTMEDdKtzRGNzQAch9AHTTUtWvBcGX5DMXG",
  "key29": "bavJ22JVWdEKz9JGRk8s3LoGnrWUuaLkmq2xJskwAwAp1jB927z9nkXRZyNLCHzFyKxNaB4P5eDZv4vXCFvao5Z",
  "key30": "HFDEdCaJFUcaZ9kHfLgwakifdaAntWXBtPRtQL9D9tVgN8quy9pqeBvSZ6gL3m8PG13PeF91jFcKHPLvr94T1G5"
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
