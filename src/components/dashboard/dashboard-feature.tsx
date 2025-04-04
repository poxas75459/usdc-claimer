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
    "pECvhJErpibU2WjVMwhLM7z2QGQMxeuh8DbLzmnakzQRMS6K1o6jBrqj6ky5fsQp6TuqFbtnydSxqv2CzxFqWXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhHbDw8nPTQuJ28YCWAYYxGX7zW6KiTnJYu1NgEA9BDnWQ65s21imMpYjkEg2H77hQRxMR9UyJtB9dpdnPRu66m",
  "key1": "2pBnoHJHheygQKQTeM5D2bWDrDskeZLNmKAZtkPkEYxuzLwWPGV1d1j5N9BAN519owhS2harT98nPdFP59nEEVjN",
  "key2": "3fPerayEZurDR3WPifepxHhNoBbjjUiTaaCYbSmATACbUDXqQvnoysBd5z66F5T4PEwB2vYSzSJLhmBn8bTQSnjB",
  "key3": "3fE2qnC1fkNCSDX12gYYhS75oUJp1dXh8mruTjqR1dDx8h2rwdGyizTSr4oKotDkc5zrF8ej5gJnJTySg7E3Vj5P",
  "key4": "2ZGKZ273Lm5JKfcDWFHjj1PTTon8DWt6oHdK5pwxCsqFiM22k3ecqMPGbg3ZR2qLWHbiJt7jtSbhHRmKkmoVTQsF",
  "key5": "3QJ1HNJWVWTpcLzkYKz4rnxQhBa9FWQf3a6pTxrzDvf7PNux7CMp5Tpp3aBPVumdijPTQJhZjj8KFiEHN5zjdwjr",
  "key6": "5ChoxiCrxXjLWE1nAnZXoY3hqdAr2PfqXjedgoys3j22w9E1dw2e1dk3BR3RyZvZa28oiJZHkQEDAkWrCCN4ti7K",
  "key7": "Geg8ZYSYTJ7e27Um8v4bd2LXfPTSe8zauojRLvCa7qYXmvHE8PyTC95FTnzSkNmdZA5j4rBntmuVqo1bUVZuPmh",
  "key8": "4GQn4V8E4kQRWAHU872SHzN3Y7DBata126tzEx3QWuGp52GV4YvmJALEuNxBhr5M852DHQ8X21iZLmwtXRrHwUYK",
  "key9": "3LTo4n4zdTEmXzwiVbZjYpsc3qU9vzBa7pHRepFykVg1dLiqfG51g5V4Y6JgCw9P1yvqvDt1dUxzkV5tb94K3pVQ",
  "key10": "nwtGNnhUsxWMFuD78gzDtB9ThzRTb4M8uzTPTAqEwH6GLYmWheTRmbJchH25MPRhD7CSLF62EFp7DDBfWhcVDmt",
  "key11": "32aTzQKpRhmfs8ZgDU9EBCupMMXdRSrQNuoVu2WHmZhtnuvu4dMex4TPga1CK3CWHuvx3QMm2aW67RFi6mDVxgtk",
  "key12": "3shCWkXzkZ3WjikscR24vcNPWVBs4Egtg1F2n1xBiN1ZTpm27pGVcbRK8ps859ZbqrFiPr5F7PpqiCWtvR8VhWNF",
  "key13": "4fLqk6NTuCA6N1TXXGY3WyrrHAmBWBr72oJtHDLFuiPPFsxAw244xLokJU1PmqFVom7G3q7QTRZQ1e2S2oDnJ6iK",
  "key14": "MbDDddfopBvmXTNFcy9m4EmJGD6ZMi4upJj3n6oXyDkpHxK467Gph9CtoUnzY6UKtdgkfGNdmJpSjNAEtZELYmL",
  "key15": "4Ckj4Bg8Fpv1Xw9QQGhK2TKGgH15qBCzzxthi5k6XrEb58S2asUqEW6YK4w9gQ5A79RAneajhnHYyhZEvgHBsgY5",
  "key16": "GiYDhvZX1w1bUXZohAo7xqFnpwY3W6VCAgnR5Pnu51Y3cXaCnYF2aU7FL37bWv27KYQASbKf67cSnmy8oRvJnDp",
  "key17": "2SCaDoFKB6GsG6V4JaSeQEw6aGGpKNxiKogwxfqGFpk69Ec6yJmKpLDNZPcoQ2Qi9MscFeiVKmXBDhy7X5JvM3mC",
  "key18": "kdvNscBoHFT8TQ1PQXBdBLHeZ7gjhXu6Zbov3BHLRbQHGp6qCfU8zJBaVNMVkS4SChkdtUrxPhVeK6PWMvKrX8j",
  "key19": "2935NVyvMziWGBCzuR2ZPkrWH1inXCqYAyKxawos356NFxYV3FLamLgTsJ9iNeiWm1bnekrwyod1B4jshCJ9pEA5",
  "key20": "4F3E1vcCgSQ2gy3aGQkzyLmbpnwUSAZHirT6W9bciUdeJtdCHE9PLkBxim7rW9gsvWmbLuShjLkvpaxi32uRSYMk",
  "key21": "RZSS33Sg7cFpy1mHZ76sKdZj7xgEApTRLFLZoiNB18Xw2jfCF9VFSQD5m2B4HKfK9f5Bd1dh7XAtxoNsvw5T6ng",
  "key22": "4jQhXMNrunxmdba2njfJC4b9sTi5VcgF8qgPiNBGS2HZnNGgroSitcZCkos3heZCcwhFyaEji616rZ7vFp6Kqhh2",
  "key23": "4eeM6dLmupQ4w5VkNNWaq5cb1pDHf5ctveu35zgr4Q7EWhN3YNrwe3mWwUdsFDeDsuUkVkGYABzqP7ZSVed3Byy2",
  "key24": "4FZRiddDp6so4PHjpEVyYeHgVuUFT2xBj8nGkjF4YhhRPiBEzQc2eah2xBL3WYEPfjETrLVsgBQjtbekq7GAVEGw",
  "key25": "53z7sFAUL6tvbSkKLux6auB19TxJfbAGCczE1aj6kYLSfnC6kSLsuHQjvVey1QZgpSdh9JFZgfJHVqxfP6mXnwKB",
  "key26": "4rQsTs2D78SGDWg3J8msEuX8VYCBAGBSLaocWyWyViNSm6xAbfQb1ywaBzb42Sg2hZNVnUMeZjDztVGbi84vhTMc",
  "key27": "de7uixteWVMch3Q5dFHQS4Y1RNaHimt7P3Hc2c9T1rba9DSeWXSy7aJ3EsswCtzQh7ArLegn49S77ER2GYyarPk",
  "key28": "611BccT5xUZLd5oAs3VoGHCb9EEHSTt2WndjqsHfFZbdFNAE6GDYDnsWgtjZDxn2yj5LFsotH8sxjihiVP3CcEEU",
  "key29": "2iYJj88jWVKseixAs1p69o8wx4zgnsjHgV29Lq1wXyBCj2gsy3o57FHxK9q3HWrWUw9oSebnKyvE12CxqKbNCV4R",
  "key30": "jiBubUXZH9QVqeBHDYsgCthdVdtgbCiQpacqz93ZD6YkQoTzDsgwVooxHTAGqGQMXCYymXm8KiZKpsETA49vJ7Z",
  "key31": "3aqakMSfEnQPufHSyhJfkCBtujHat1BU3pMjc2giV8S852jd1AZXcvawzEdvwE7E6M7Nn5pTsFp6MDsa7giJsGpM",
  "key32": "2Cig696bxLHf43WJR5uHqk8CfG3HtaR7Luxv51RrfzaHAR7hYKkRA4h5nvLnLBKuye11NkxuPjKD5PHGzrDE4rJv",
  "key33": "2NNuyW4DvMF22jyn4B3TSd64wYtnyfSoEnePgcWVkEZvqMY8C3xeUukHTpCh7pytuPfggfVqhACPwnwBQUoAq5Bj",
  "key34": "ooWqdos9WsgC5WHY4VWLzuCQNHiMcgamYjeptMn2MSv8SJxnAMbwdxB9Yy7JEWCL4xtGoztsc7tgUaB6nEpZa3k",
  "key35": "2D8ner9Ro43UWhStCQk1eU2kPf3NSLh2NCTWRFCXcbn95KT6TtQDCWb5asxAmaf8zrBX3bnVavcguezZQPmMGmmG",
  "key36": "cb3SRgDCR28qgAQUa9A9npaGQtzGiYRW92XTNBCZoUXC8veMyuYWQQLf6YBW9bMrwG15uVQwDMsciNJnSr2bnjj",
  "key37": "2hfBQQGsYv7YKxZoGEU55TuYpQCJN7HwgPAvZPKcTFaaDu1tD8uvATtRobhfXxyZUmRLphT7UKxo6S9y89ScXs3U",
  "key38": "4upBqLhfFnndSnnbZsqn5nDC4GMofvLTYneTwEp5CN4h34J5dwMfJva88pDumpNi6Yejm9mKjdUbyLqVCKHzfnoT",
  "key39": "5djAbLUQve2Y5qrUzXDWrn8wsquoZDTkAo6LUmexwPBEdPHVzfAQyJpp19RG3tgK8EZCimebViMu519i9k8ERz8x"
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
