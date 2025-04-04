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
    "iVCcrxNEptamuL1e1EmSwmtCsQ2nvFRie2hZgQHYtNXMAmhK8Zw5gk7u4zEtrHU6ijPpYGz3p28Lh2N5rQWBWuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GH2XbXZGXHo2WbGKifxUZucAMH4GWsUv2KoFRmZbyYFSLd9SPFGCKLVP4ueEepjjT9qimTaVDdFG7VNag26fV4b",
  "key1": "WYmGyNyKuuy1N6caMfywWePz9BjzbwRTjJJc7btubDJQ3Gw2bNGp63wNa8Yzior3nGaJJtdbRpvFzjMDVjbLc8E",
  "key2": "5DRSRHPF8RVCQqjfgzR7xqBWtrQe9hTv36M6dxWN4g6aiVwkuEkuKg5xxfZmVRvhxAtB2ELucJHsEjRxeahd2CrL",
  "key3": "5J6yUY5xRcDMx388zZzNAfYmBqz46f4KRcuyuTuCZArTEnMUszC6fyHrjbKjq48HXco2Aj3gmbAQHAecTuHxPqTm",
  "key4": "5K8YMvjD8bXs9bj1CgcENrXRmGZjjupHFDASRiMLkemaKmsAPpWaM5goNf2Qd6vYwqkPvcT31NEmgCYopEDD4RuY",
  "key5": "2uXPztR2Gut2a7UX7nyYzgjyc5D3cs4gNLxHs12SH7Rw45pW6PmTSrJHRJqvrnRZT9N4AwEW2qg1Rt2DcSog8Hbm",
  "key6": "rKHwNaLZTF4zimdeS8uwGXa5ZzecVF87hTNs1s85VYe1yVPHFFsH8fiVJXGv3QLfwoyedfCCs9kixD1MXre6Htc",
  "key7": "hCQGz76YEkecHkzAvf8CErEsbp5jPH1DwbToimH2JbyNVeceTYL6aYqDhb1ypp6oJgwLeUY3aoF3NWxKm8TB8yG",
  "key8": "L6mYvaW7s62Gu3MPH1xB6Dac3ocipGHnb1DQY8E4T2MSUvYaoFY21scn543gSRbjiab7q535Bo42tN6ioU7FejE",
  "key9": "64oU2ZAGwARwzLJeeFenTig45amyx618vxoKTorewU8VFPjzdCSPU8jDxr4KeSuDsowV5hD55xqJJ6XZBQzBqCxQ",
  "key10": "36gAgD9n6SQkuAEZm8gPWryiwMt2YbKJbi5NwNVBuQ59jVnycVdMCmupH8KFijPqoP8DH7MdN3u3f5P6hXD4tCVF",
  "key11": "35oWDLeFDgVXXKJKydE5mMBnVPSnfFsFjKCc36YBeuSQbgE8EFtxqj3S1SKSDvDsFu1nHeEY2Jx96jC5T2AgBtAy",
  "key12": "5BDuvGT13AhNzZtKdzUZ59JAgmatHo3RbodUhQ2SMBLD8kMSqeXEvxhSAR6tMdgc2hPTGd3UQtEheVmzQzMqohLV",
  "key13": "5a2VcBbdxUZ2KekxwAdHBV3CWdB6njnHJadTibbf3ssyyquC8gPf8CcrtPuujcEFvBp196tjF7bNERTYXVtSyZRV",
  "key14": "51PSeufRBgyUqF91pNPLqU8ozxTSwVJ8f3TYCB1SB2NTEmtTEDUFaUtqXoFN9akxiLdzA8vo5Lsvz8JQvkZdjmbQ",
  "key15": "qrdsExMqLCxRKVA4VoW7FUsMHsn8LKmNXq9Yk7Lty4itg6mg49eqWfbAJ9YYAmmjkkSYRo3npbS8V3nGcboFXgm",
  "key16": "2BBVrqzELW9UshbttdAVjWDetYSBz2XvyXTB5BaFD7YbYtynLWy2Jcag2NF3FPUdHEXjyzbY4WzLq6QwN6MP87KN",
  "key17": "52iPDF29E9ygUouX8jijKw3JZXc2KSPoDGyUbgwFX6iesPNR2f5Y3UdBu4nBTvWeeUvkUcijs46T3psyvAofd2ww",
  "key18": "5eVrHe1TPJdp6MKcL4ans7vsW38ugQ7GSgZ2L7nopEz6GthfkvmyRCU2K8rqgsf1v5PM4TLaJGYnSZFJ4GWKcor2",
  "key19": "GSXBXQyRoyXcE4A52RVHffcwp654wJ489Y7dFSpJJE6ftUMjgqk9ZnoFMmwaKwUmYnEYM8nRZg8T3QhfzFRACUv",
  "key20": "2f37awmewvdFmkQ4RgpVf4SnEN3MRQKzetxyfLGpJsvSypFL13jJJUpSW59ZTjeEJVhRBst1SAiGWVyFQQXu5onM",
  "key21": "7AgubKhbdj7yLdUSX5D21B4GuPpJRU3JMZzsm9uqtq79oPeW6xdKHNaRmeBAzM4Ziq6vSHMQtHfNixbCaztVwrW",
  "key22": "5RMg64PVVYKTCdtbsaC46KpzTwLegT3XpRtpUGc8VhjePUK6E2gx81pc3tq47ZdXKNB2A1L2zYPVhe7N9sdV4LDh",
  "key23": "55Ytg6hkEj9rwD72GtHaVmwrLeYwnAMoAewKgWn6b3LMtRrYBzMt5zPApZQqra4ETVL9gjGBbu1B93XmWKxPQ95o",
  "key24": "2LFWzH3gwUxVWg2J9wCcQo1o7TgZGxQNR2Wi1gLvAHyaupWnKeU6NJUzcma6dTEqigv4GPhyoyt4fFhEM8ZTTmBX",
  "key25": "58J1BVU6T9JehgVKZcpBdzi8Z8xnbrFxy27WPxoZHe62gypxZJTfeTjorFZZX7Weec3Sskt3797MhuHPmvdzJD8d",
  "key26": "2bDedbcHHygYdQSGa4scQaRiAQ6QXGnT2RqCYeA3ckZTGGphEwYs43sPmTukAFRAaRvBcFtncuRBCZghG8tgcBJY",
  "key27": "2wZqqiFTrQbSA12DncSF7G9Gy9kx1zdDT8HbF5HatpNUsbtNNWGgaAVSDnvhwHahX6DfWUQU7fAWWXLSwPSLCCi5",
  "key28": "554NyCRB3Z69Y7S6xQfVx79VYU3XgRokJw8f1WVBpsMqQWXsZaCb1uEfCPFp2seNF9Kyo3JAcRr6hQBUcDLdmg2T",
  "key29": "NgnVmjMWbqSqAWy6GqJ4DQS2kkT6qZTeiWR9RdciiybgzDKQv8ffQqPkGf8kfEmRwMcUAmjxpxkdyT2CXLwiaDV",
  "key30": "gbHpGBf6mzLbUAUdUBFbJDkkGkBRb7RAx3bgfzoF2rmVuEHivQuPBq4H4F8G9R7vYJEk31B6L7HZRHoBjSzFNvt",
  "key31": "37MaE1GjdxxEXZimX7MSEFiDxSz4NbX45hVV2NEZ3uMfqyhJdXeKBqg8e279coiTM4D7cXvQriXxZJkY7NobL6xF",
  "key32": "5XS5gx64aBdqVXVD4YuHy5kxAEXqZB3pvqU1FUVDeDLxeD4GK2VFdVZJPuPeVc1ExrBmQonvLyoa2fafe63XJV5E",
  "key33": "ikd761vs6A3Eu2f9Lf1X68b72awmmh6dbfh4aHtzMkLofSCbVF5gTpkBpLHS7HpwJbPe7iXEx8fe2nkREwtoKMq",
  "key34": "2WLHfqwLmVe1cHS6P7Kpi3G7roFDDYYhJhcsxZAj8bfasCa5wv3mkoTBdwYfYmsB2tK5KKgrAdcdCP5cs4chBjzg",
  "key35": "qNo21kj3qNWsTgJSQmc4bcfDxTGuExP27QLDFCpucuzphGbti9tJTizqrzhTQbKRrXitujYveihJ6UVNXMAou21",
  "key36": "2ur2XbCZufbXwPXrVkUAx1ADio4dHtc7gi8DdEmfEMee2vQiTHPiYB765cAwhKXdoMkbyAssRgx1kQQcEuPbphF1",
  "key37": "2tTTu1u6j4etWXpP7VQz1VqUP6D2pCiTg6TaM5W13syT3172bT8zFgvicQFbdJYYWBCUT8DEbKCVkL6iYZ6c2CFY",
  "key38": "4vS2hZoZbHqRwrmsmm9jEAiBuz8YBskMWE17Kk8RFLZQEVd6xxzNsz42PGys3zifMnLz6ZF7Ard23raWy7hxtXXc",
  "key39": "2VeCWAA9d33vqKf8ETCAG6WMqx41dy64UQcyEtsTYNPNBLMsDTCDwpFWqfLAnoYemUPyDQGsdGgk57EHobxA5A4w",
  "key40": "2Q1pXi5FHAwsySdgKcMvvv1gexejoiomGiZMtPvepqAuKRNetEw6KTwi8JdPu8RbZ9UKZV3LcBqWeqpVevdyAqrR"
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
