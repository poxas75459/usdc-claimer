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
    "4AjGNSmosPWSXdnbPF3rEBSG8ttiRyhwyKNcWe6vqxciqoYnUEqGuRKJdoc9kZMfWfDmooSWh5jXbCjmFHVfPurF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oaAaPEwp4hBzQAou1fj8gj2zEXJNVhercFsFKrPAfrfKA1DB9npf7szcyvTBw4wmHnAKkbF4BwHK2fXgGLkXkiP",
  "key1": "3mWM1grS6gacZdCpn3xTWdpiL77Q8XJPs52DyBen9YpbXH2Ca7pVwmkxBrqGmFRyQVE5kqN6fuayDUSFUWqhkH57",
  "key2": "2mKCEUxz4PsRP3gYPnu6vg1uASbTFK4HeBhceChHjT8tdRq5KYJ2Nda8VNgrJFBTB35gHHsJeZ3hKMnmuV4HQnpu",
  "key3": "63Kcgp8E4NZ59ZhzFaTxoVPGe8DQTUaN9FZLvyZ16rW5cvRRRVpJhJiZfctTTtHpmi8hah3LdqGCcMFeELL5HFQ2",
  "key4": "GtrWYBD2T8G5U4MpbA9DUnrhgLCrgKy9NjtrhCuEJHqc8rn7rrb5sHGwzatx3B3ywbSDV5V6i32qw65ZNacozL3",
  "key5": "2rGrWscKkkT9kNUJsE3aNshjFq2BkKWqZdnv1bKFoJhZgJFqcEGbpSLPjmAPMy1WPAjyTKijkgi5SLhoARHgqGDS",
  "key6": "3nDfK7qQoEzyo8CmDiUskMubMRGpiw8Pq7dykRYzkyCAgCF9pncsAW9nF5kH8SSD728DUKXKDwQp1Fm4FqF1ejgx",
  "key7": "2exQMyvxGLopuKbdn2SrrSKiXa8DAnszzxhdwjdiiimazMRnz6VB3jbCr9GAVpuBDev5s6FbKvMuGoDeGrbrjyNk",
  "key8": "3fBtZpsEPMWbTYrjQ4TpPen9LYFheCdwWALhLJL9B4X2Ne2SJZh68vNLDvqJD2eG53dBr2hhbZHV3qNsR9r1XQHw",
  "key9": "4WSQ7VLGNuAdbMqJJ6Cnrt4ekvSyANa2obagpiHcR7pBzWBabhFk76ksnXWhwQrJTUsxpzFPYpVvoQxjUK5FHSby",
  "key10": "5S1qJLkG4SbE9QqNQiDfSCndQzjerwqwR4PkjSaLh8jzZ6tjD9QAv8LXeXfuSVpWRLgP4TWzEMM1eCggrf9KvopS",
  "key11": "2LGpyqw36gcZUC9jHKQoHeWhcTcvb21bo4NNHpT5QTwkNLgdfYe4jj27qNqy5DykKtdSQgfGPZMnq3BfmqretFsm",
  "key12": "5WTajZbrYxMgBVEuKp5wT2ffmSYE98iH2rR4qkKz889ENVX4EhBCY4MfVJWC5kvg13YSwbr2TDPEnKNTgWvp1v7b",
  "key13": "pscmgmooSfrp51GaRrmza8kLZ4TrZcs1nTygtanyaPWPa3p26dWC99wEFjHDx1LzmHo4TERwjCLnakYCZpRDYer",
  "key14": "2o6XQFfNyrAKyerq6AXFPtWVzVNrRJsYtsxJgghTC3iJ9EZGZH92W2JavC8qL6Sx2A7GeoUjGgfk3CTgBnLqDStQ",
  "key15": "2aeG4fx57HwbDT8KVekvCAffpe6GCaRZoXkEAhxbMrNuppkLz1wZLKe8pnbAt8irfUE7Q8SzaW6zovtMnXMRtEDm",
  "key16": "CtnATF4KdKCHxoKvek62RWbRcXTUFhpeC9irzkerdbS2H1WCwvapt2ebUR4QLRCK7JtvVm8DniMq1Zf7TnrVHxK",
  "key17": "4CoiUd379a4RgqCyfQqzLtCCJrRRfWkSb8niUPKSkkGwSjAU5yVLvUkL7VPQjiyW7WAEAbVncQMNJP7cB81Fhefd",
  "key18": "7wt5kqQW6WvxvQtTPiBRUkEqPEA9Z4Bya9bMpM89r8oNjQ1JVYbriAnytgYFoukLwnhPRcvfZpb9kxr4YMwEixC",
  "key19": "64f9itSKn2zQLnFWyLLFjHwsFHMiNqgLWoXxQuiieG9UVWuCfGzDvCJBSchRq4RStXbPSU3PKttN4VGmFP8CBbnr",
  "key20": "2U8xLnMSZqooK18SXZSvEXpxfUAiuvHcpYqiXGFdUUKH9XRUF9VdTBKZ9eHQUoWM8hTrM1BcyBf9qBhoqAouhUHq",
  "key21": "41qGY5mRV58J48F36m84fVYog3HougkGGickjnJkcR6Feg4ih4w6ekf4L6uMzgZ4ptTDqGoJWbqYTMKRUaQUi5VQ",
  "key22": "45nM8jqgXCBqkGrTKDnHy8PCnMqyhHcATiFeonEPzU9u6UZ4tzvXDSj9QDRWULMniGB8FUuaYy3FbidnNnd7wqNK",
  "key23": "5UyjxNgw6cnKKJQeMCaU4mAyWHZSPhbuFNpLxSUGsma7SVtGH8jEoEfdf5PFiyJMGVztuEMWmHmvLxBEnhCo1RAA",
  "key24": "36Dnu5bPj9WTQZ4M2nCD1SsfxAVRWjf5dsuiUXMKEyjCdbwKkckgnimdCG6YURmxNcXHRa1Wb7LxeEYLFS2vSoRc",
  "key25": "tEqvAADKdeSrqyvFnfdhCeR4YyD5NKDjnd9QDm7vve8yBFfwMTbfpHa3qcah1Pm3gqdbN9mDiLV31cZQpwtAYmW",
  "key26": "4CUTbHsTSKrWdfmDuVw4pxPna5xK5xxV3W52rRATfeN85cJqMieQ9y8QD5j7b9nXiLYrNqzUxQueq8fnPpnpynSP",
  "key27": "2t7Vk65r2BVkwWUvQ7LLJ44JxtSGpBYmtxutZ748ycLYE4tB144VEweAjcNHQ5skqQEphRf3GYcNxJDF91um991y",
  "key28": "4xfhcseM4mjQuW95GZkG666GKL8jgqiXq8pLnXDmsLtjqXwgQwXwiMdE4g1TfEKC7B2XRdDpUKDxMv99mMtHyEu8",
  "key29": "4F7yoWtYfrdCL5r2L7azM7HpnuyDVtPaUVPhMNw2UspQi3CDviW9v663vACkvrWavFEzoDL8kFA9abtwBwhNrM5U",
  "key30": "2u9XRrckoUkd5ar7o7fLVypydTTvTkGFGA4x9c2M33eFoKrAi2Yj25wMNPQ33j62MurQAAha3k42dCdF4wy3RTwW",
  "key31": "42p1bQiR4s8ywUVLh6qtFs3ajBP3mMXHHttRVGmf1iEE7D8UA2ebKtPq5vLRGxW6MBy8ot6zn3rpMYXD3ekTqgKM",
  "key32": "4b1WdVJje9uWCd1JX72PRWwPQn5p9ws7szfm96ZoGDZYJV7t6wW9cHQojf7BMnRwpUXCV64fpau83ySkT4EcHruf",
  "key33": "5rL3D8yMCf2LZEKv9dBXD6kMLYxnWwLJPxQJ9rVcamMJR9iqEAv1CegMWNjiKNaKQu5fdMkD6X7mNUQXoUYei6Kk",
  "key34": "5qbX5hLdMXZhTQvhCz7uPJmH2acCrWQnqyuEnwZucsXfXbo7ceKHfuUZ5jaTMAeo2ogFTDiaAKZ7q5qzgZPSzxvS",
  "key35": "5MWRFi2JZHF6zjbLUY8YcpGweC2C1BsqwJrsJC9M2ohoRpk2K3KErAwQwpTTtmRuJYEBdprPuKEYio4vP4WwLMZK",
  "key36": "3cbGtb1WUbb784UwG3U4XAFUGfZm2px4aHh6UxapxF5C6PRXH8iKbFZUWyEvgAcFwXutcG1ifToUz2GeNGA1qYJG",
  "key37": "dUmkaj6xWPE7iSNErCLc4DPvzPqDNiA9yTLkXQGMW3AGARRLJzjrgAWM8ypYhUFsi9H91buz2xmhguGrNAATbU6",
  "key38": "2PUKRsCKzqqaSD3xLVmGxhDgYPbtZc6jNojN8gzVuwd2YdPoSEifuMvheRFT62F4qiRMceoKxCTVzBZ6QxsTmuQZ",
  "key39": "4iE6waDRKd3nhi5KEyF7B4Y1itdZ9KFvg6z2hzsQx6F4hAeEnrY5CRYMwWebqFXCkxqiSEUksgsK5p8qUgjvxPeC",
  "key40": "5QN6yTdJdh5S23bYADwi4NMWXar2eKe5fHsxnJWX4WdznQvkzJKHNvFwDFcQ2X3Ci45LUGg9QLk8o4Kesj819B9D",
  "key41": "2oqeXmHovvefNLQSG5Kfq9ev8oyqAtcavhcc7qDLQK4xq9H4QTmLTwdZ33xRbnCQq9bPGBJRsgAKwDb8L3hVrmrV",
  "key42": "3mceT4JR7ftFTinwq8zxphgs7ZFh9PG1eFe7EjhVK6SeXLezR1aLQCMW8adtKPn1ptaYoShtp2VXVJd2MCtnKa8p"
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
