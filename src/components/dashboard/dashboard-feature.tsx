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
    "5keqciSDdQwvAFWpeEAS6x4CieH31tdMARFW9L1SSCTL5XcahauYtviEPamQZiZZqjgV9tJhxzA2m6JEc1sebdHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GbLFP8xgJZwoghBNnmq9cRoNka6YHM1ZHit9cZLW7YDVDYaqJWkUoBVECyTyKgvpk7hyTQ3FYDdYt1RnqnaejYJ",
  "key1": "BBCEyJDwZ5gK4gvn5unS44Zo9TAsEHERCi2HYDJsPE81DK63ZozSX9iaV3g7AsSkz1CXGXFjkeQPbGmfUYEGEZo",
  "key2": "5w7rSWavDdDDzBufJMrm7WCVRwa4o3YhU4ruGxN33FRYyncA8ULT8ySeL54RkzsNkjG21QeKh8q5wXbnUVD6beyQ",
  "key3": "5eWgJ7SG1qJhmbTX4evvPA85LHfBTSSgpWgVsqqXgsdrb98Zm645mQTxpxSBZMkLCrHQhQqJ2sh8xy25ULUUsFAW",
  "key4": "2RLm3c8TEnyBkcV3rPW56p3xNtFjfi2EQbvE2GSSVp1SXAiqAZRwYKb9vBbgkxBNjQdSb3v66penxNfkFoQorUiJ",
  "key5": "4EASBiHUQUicqrq12YSHPYV7h8EXidexymxrQV5JS9RdY6VkqSnVVK7iusbWAzD5zL1zoRLKrAivsSYGWSYC6HJT",
  "key6": "2fXS9tCsoUrRhHqLdjsm8RE9spa5ttVMQbr8eVyxHsHLHW3nuX3ct9DB3fwWbEYBu3ZVWaxRMQ6SrUAMPUszjdYT",
  "key7": "3MR1bgcwEQfZM2TFoPYEMdQ8Ymh6fuC622S7TTcjUH63FA2gNSRbhbxrkywiFJHx87RgwwPYuhjFNaJtBV9A77XB",
  "key8": "5NAhLWQvqF3w49ef5CZEeVNRtqHNW3mYXnGt21MhLohNaRrV1QETt1YbewdcejLbqKaXY3p7garQQyLxgxMsKRiU",
  "key9": "MHuMDkiGmqPD7yPfw32rhqXfTLcpJi7VaVbaGNzv6BzZznKFw1Puzuz7Tp3aH8LAZHiv2GGvHiNFipp58FngkHG",
  "key10": "Km3QZhVFDVtu6piYnnUiocNBZNMdhug5KsJBHyXiEEfnWwBYRcPWDSzpceTim6grRunfRZgkzdEANVK5ao9F2h1",
  "key11": "38Bgkc7BhbRrBreYkVZ21HphHB4ddiGAFqShTuVwPqg8CZGqGm3YrRBpJ6keKaxzRSVQveFfYsB59Ho9JytjEqc4",
  "key12": "8y8g43Q8FgrbUBozd9A2qeH4dsQuBBY7qeszsNyNey9kRN57DccEGPNeagLptq6LWSgdp7tA78rGM6SdBSJBZNm",
  "key13": "2RjSNQWP3wA91ZuQyhiMxfbaUwZC9pD62V5C4yWkw5QgCXNt9p5Zeib1EMCrkb19rhvVw338KjfujSmVNdi6Lpcq",
  "key14": "2us2Njxvngft1zfXZeoQ5ZW6Fus3T3dbL8PuR5QmERzeR2PDePLvQqxqnDqTcaWBj79PzMjtu3KZJNnD6J2iHrWK",
  "key15": "p4D6uXpdzFiVKLwQvmx5mgrsm8MjgDXsXVR57ZkNMXZqdvh7TdcE6qr13JNDDGnpX6ZAMEtq7ziWSEE8SjNqcqU",
  "key16": "3V5gdMm9ak1oPkWaUYAapHjbkFJLL4GaJW67i2Z653Bs35HPeox7zzhPbE49xTyq4PqY38CJy29EDjG4W7mdVerh",
  "key17": "WrbnFsu7bMh5pYH9YYNRsqSJMLiUCykobCqvUr5NdqrwYGmSUuAqTdYwUkMGPDEU54kceEMbXNGGPNQKu5BznV6",
  "key18": "3v5cgNBjXokeyWDunxcGwNtWJiFKWCnLR7bz7aZy2tfPtXHQW7PMy4ytwH6EZxbXNmx9y3Tba9VNKUGUPa3tyufi",
  "key19": "2TQULgvNF8Wz2w3cbtaQaTVjtGgWNwfYMNdvbjgdze54U8FtwFpWi8AyFFtGyzPLYafTibPsinNZKPEK97pF4ftk",
  "key20": "2i6V5FW5QhAeAzT7Q5d1Lf7QqwYXdghrf3ewZv6LCK4igoLkVuxL9SiFB25L7Auxmx3kpQVU4PbF93kk8TJqqrWf",
  "key21": "5vGZZ2uWLqR5rnzc4jDCse5aPfjpDE4fdMqLN99KAsrWPqactUXjMwJHVgQLvbFGA1wmS6ora4TnS2eVqtTYpmhF",
  "key22": "2YxhF5qFnoZBLWv2CHuV8qKp13rGcrkb3zfBryhXSUDCGzy3LLLxbnWHe97SUqbvbwGbS2vHMa6hsnm1RbhpijfH",
  "key23": "4cG6fLrfUoFYFHkdFdck2aW9tfeDCYgbyiLLwHkEc9iXSZ1H5j3BQbgnmsNR9Kg9wp3AYuDo4HVmCXD98hAfyiWo",
  "key24": "4y6Q4gmHi81zohiHdoypyaorQ7FMzuw8aMG8NnNsJRfTRoDq7DKHYAWGh9T734HERAd2vvBgYP9FprjJPhqccgP4",
  "key25": "4WJtdghyVrusynJa1P3gNHoPCXKoCvkFvndEfZbwmvQgFR3QPSXsD1e4XbRaJghoqsjAGgmzi9MDYWrKxL8sTUdL",
  "key26": "4vJpBpsnYE11gT8APayLvtw2eyFPhyt8jfPzwXw7v9zoUM6HRS6GXjg7UbyZWnRkmPUNVFJrqU5ukLx69W4g8onX",
  "key27": "2nxKHv8MM8kEyJnb4DKC9Z1tsN6VszjjVKGw2C7VCSR4E5baaY4JsBmxfyzgjvUeqzXsLC9wxvoaiup8bVhQYpUX",
  "key28": "3obwk5NC3suA3ueAp4Q4ErVVgVnyYW9KRkCgAXCiLs8NmuprfDgL6qdnF1h9AM4Rfrir1DihnbB4YcPpcSwyjfs4",
  "key29": "xBiPKU4LeHrkKMJ4uLkcjLL1Rep8iD4oCHUMUCZsxBmXWuLgNuDV5MpbBm4n47h9NoPAnK5YgF1YCEofb6nrReE",
  "key30": "Q4PmzRrkAQqmAdAXRMUDfrAcBMbjMSCoD9PRKG8MkiqWAm1m7VziDHm5kjAsT7zr7Seg1Fm2WdKHaCrCTNua7Qw",
  "key31": "5hx7pqkG2zJ6ABUAS6Bc88MQbpsbARb9yQTS5LarJTuCsYLU9i72jpHX9CFprwybhsDYAKv7hnm9FZVowabeihAC",
  "key32": "4XqxDz5iJgxCeYgCZRcYbN1QfQCL3KpSFpQ5xRUCkkAsRiXkHGutAVXNEj1wc6QNU6gFhVdXzKJHNhXUXqVbCHBH",
  "key33": "2F2yrBLM3z5DSr6ZX5myJN7s726af9R1WuSthux4GZeS55y9xL7wBYkLPbcsrKTmEuBXkd73XqqPZy98V7uHwmY7",
  "key34": "1ksd7mQCyHYmHZ9r5veLoihucvgk7j6PXDEK8kmksCTAcc5oVFxv5Az2ERjJ2HrjsjgLMjXGNpZYSHeyTNRrjNq",
  "key35": "3hoCLGCqwQKrRmPdWdRH9niYrU5ZQTRJxmpXKaZdmqg3uhomSgypBeAr9HR6g8RKUiWHVm5tVQGqqSgnweA651rb",
  "key36": "568NeqaCidToKk1SckcHR3GPMTK9rAegAEYtgAiEJEQfoKqoM4nUvYGghWQZCjLYrr1Ap9HRA4rUezm4YGjgsP4u",
  "key37": "2T1HM6WnWNqiPfxeyFPkjXmrSbfjcm7wKmzFuFZUeHVVLMmZFiSDTMhr9KpJNgGmP6d9CrGW6PwaRDQchSWtVrcp",
  "key38": "4yEJyxqFY2x2EfwQhXVo8yxuZzLvpXPwNYpiz5axfFb4CEUhnbNSV7GKXfGFe2F8tCqAPH4TYeyNAJnNZRnnw1Lp",
  "key39": "4Y5B6q5CNeKKPnDPYvfHrxca4L4jNFwG3byerbjHF4jF4cNYrDL2CSuPTVN9gqCyVdoJfYor1EK3tcQ9oacJ54Vr",
  "key40": "2oePRSWErosK86ZiteUQFwLr4VzmuTXLrrkWStzWTqxengMhsnxbrqXG8aoASMdL1MPshCtKMHsmAB6GrbduuYCU",
  "key41": "8iS7Nw5ZDgPmWMRvgkhCEaRUWsAAoFuvchwoKWPzr7XcUT4KWwchYoqfweZaSFDuMDsZg6Cg9W5GMSepASizvNA",
  "key42": "2phVwyzpYnfuVeVHpaM7RhNXGp2JrVVfnoi7S4LJYfSDDjwgHDKvKy3SbFdA83dmeoEnTFVixCZTxJxt38SduKfX",
  "key43": "3bPvsghrhqYh6k798Q7giox6DRrRumSumBzi3mJex81Wbe9GpuLrmRmRh6TngQYjRKo3Z31Qg4iwmNUh6PrDU1G2",
  "key44": "62NVYtWfWottTiV7h9KUz745PTcyFL75nsLBcpwrsivfiFDkszjAW3vnWB4o8TyGLqzUEF4NGbUegzmesgp47PwA",
  "key45": "3K7MoburG2i1sdgXPEWze6VPCj47Rxufp7G16eA8WFsWEmFQjD4JUC1oVmrJvYoaCtTstz725L1s1WbdLhDcdup6"
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
