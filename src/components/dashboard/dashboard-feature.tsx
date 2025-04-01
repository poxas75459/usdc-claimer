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
    "RdiTyy69bgNLNoDme9uuyXCdVmqYaJQupTVaFUzrqAYbP12K3vMqCZeRyWiQzz8iwSrRWbqiSDzK9cYHtPLDLJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ndya38cBvqunL8RBCUoqJoU5yvW9tQdMeba31HEQKnLKoRM9eyEGmrFswZ2HF5Xi54y72h4SVEM96GXXH9rvqA8",
  "key1": "4bffL9d7L6DvmTyiDkRgaXxacvFX7U6aqvBBK33yMhcKX6kNMp2cWUC4T12eV8B3NaKnpMWkScoNjj6DRDQDteL9",
  "key2": "2w2kHsQJrGekemm3PMU1L2zxMaAwqt9GhyF5f55PBaQEk9tW3kVCEmNmPNHDZ72hrj86MNzH7xQECyW5tDzPjEgo",
  "key3": "5dMehFng4LD7BXAJir3cn3ETYzkZLQ19JsyKhpg4T46Xd279C9cLVkzN3RiCiLb8k5swrCc7aitSaTUZLd8SMcMn",
  "key4": "5QKwBxbCyyX85bM3msLy7reP3RYbCwwHP2kXQmJ6ZQShkwsSxgt9uuWrpKcXT3arDQgSwtFgBiQDfagcDd38ak2D",
  "key5": "3FuCMwktr2tnGqw1MnBNSup3YQ5wafnNAfK1QgWVTG3mQZuEwjEVZ1M6rgLo6F62kbkYL4x7BcFKYLWzK7CqWkk2",
  "key6": "3QYVrtk6UhwHjBpwpRdzCcLUgFzFKEf83YAqr8ydvQ3BbY2KE3UnF9tNjEzMPgpr5jVfcUwB9ogMYqY5CgXt2BEW",
  "key7": "2Mag1ucFyG9RmCiE3JaTEa7NQ1A4ThNXpu1PgNXtTWHNX6bVKUsiM3WnvJNPBF2tmv12HcwR8783bD2m9oRxtuD2",
  "key8": "dRTRrNBnxLHbcGXhZw2nr1dvgnMtobjPWrsUPEoZ1TA1AijA8aGot6CH4XvfJdZQtjfdqmvojHZd4Kf1A5LXmdk",
  "key9": "48q5diAHSyfZ18M6t51Sj8L8KVk7K7rqMWE1kHZ4PCFraNdYe4xsCuG3uBii26fVKtNyMyoEKhXKPtxjwMnctz49",
  "key10": "UN8jUiVcpp6neLs1CFa1eer3HysKeXf9egm8KkQ3bJg25oQYzzv41bvjLZ1v5Xqjh9xqRLnX7kPg6k2z2SUAD8a",
  "key11": "3Y6KdQErn4vBRTLGMzUvL5XxnaUnBPvWRWGk43btTX25meAXPJK5HqXagFaUHhmav2qNcdjnZCFvkE8eMLEwPsUp",
  "key12": "H4j9dsftH7PZtgSPTAa5fgxVwmYDyNZYNcGnWePXX4idnmyAdMPz9M65MNCsrUpgkk4bNPM6prLyzPDRVRtD8Fh",
  "key13": "3tkxQiXcLfgyHkempUWwj78d37QR31AofSkizMbhpSLfhfFD85NDmjapTivWetgK6MjXAPjz44LgmD6q7bn6q1io",
  "key14": "5JArisszVLuf82fkz8VGZiy8wVfxLa73k33iWvgVS3xckwqrx5GKuyzw9fuyEBwyEe7upWSchEwGk2Path3Pc2j8",
  "key15": "3ymgNxFhxhqYpPJr4JkR4LqMtUKyKRMNLsuG6du8Xn2Eqo1xdFe6hdjZyyeqgsvAJ9kJjPfvnL1rVtGc8u1tkJjd",
  "key16": "3euVJFGYAdEkU222ySoki4fnscnC3v7Ks3PFuVa8ttDzywEtijDtpLPFmTL5ouSfBZrqPAEfgzHyAx4ZdafCG7Q4",
  "key17": "4VrSDvxE4buh2QmESrbw7HdiDjMWYpHPuypJCWk8NxZkUcDcy755u6E8Y1MafoC5bxKto7G7sqxwAL1zkbp5JLqQ",
  "key18": "4qhJmHLhUQmjxGEdzNEik2o3JocvvE8Rf2AxPrmv9Zk8yrtRf32fJdCLMXCX7EW27jLwfPk4JkHeuFyfxXb9Be2Q",
  "key19": "pP1HwC8YpP8KK8CF1ryhTXisLy4hU3h4LLmCNZzDM6Xf42TXjPR8pckDXJNatZWmDyh6FfKgq1rpiNYKcKYEaMa",
  "key20": "43f3dgWeJCwmoxCDsMRDzDs1hn9sKYpyxJv5cjv21tqFox17ppktMSLKPbHsr7ePVnS46vm45FCGHy5By93X522R",
  "key21": "3gkPK7fgP9anB5YAzz4C85NfD2LxC3mNeUCUq7MER1qDFPeziudYo2Ksh3bRcQHYmrhMy9RA3HVrnUQ5BaJjj9Cg",
  "key22": "pZVgwUrahEC1JxTf1BUTonc8ddgrpy9Y5LzC31m1vb1MqvyUgsjpGySouRpfLf5WZoujcboVutkyHkyLHjP5XrP",
  "key23": "4zWxtppyyrDa3WPfCtakZML5UvWkLkc7m6ASqBq7bfomAJncHg4H551sE33uvbdCwFNWBsYGTJGJZygF9e2j5V9W",
  "key24": "3HXaEEEp4WarMxN8vi5WFRqiPp3R3La7fzMBuuvDBioH31fuUr5Pz1tyHrutmaQ45hubCA98nDcr4jqZnK1ZxCkp",
  "key25": "KePcwzYvPsGhf7zN9dENUpidTTBk6PwaZiYqVEuKDsJgS1vyicMZHpitJ23jJ4krnLd1oSse41eCUcmrddojyNp",
  "key26": "4gXpKbT4ChpnF8bQ2vWjCTRMKd53e2q2NpeGX852V4bxWmNHsj5Dyqtag8tJ73Cr1omQWBjx9qw677xUZEeTbEz3",
  "key27": "4dTNNzBpfAwWwEf3Sb1LED3UbdYRZhGtHXpSWyvjC3fQbMRaxxNMf1QvuM3wXKHroHD5ArbdKxYm8PUNfktkPPw4",
  "key28": "3KZxpU1uroYwAicjqEVogpzb98WY9i5TvAE4M13t56nyxXZbRcFSwPCjkthhzj7GzHVYLq8cf9cCtNVkuVwvXqwv",
  "key29": "2FL7CrE9FCF36LN3T8jq25cHPWQeTuR2VvfWsQLz7mShnceNuAS9TiF1opdXHXJbPkpnKhrZzXQGSpr3fHdg9gxW",
  "key30": "2JrTmPZk3h6HgoAyahmTzscjm7bgXTR8J33cRR9JUG9VLXaMkLFyhsQjDuMUekFvYwdU9in14vFrHFuB2aJu2zQd",
  "key31": "3WLoF8598DM11Ei29Be6VvivoqB4fKkMEtP4QEankvaqwYBcYpSGEYAjrMBW48kprYYqhuc8WpkvJPtw4meVpS98",
  "key32": "5GvoYZ26w6rcBZ6b3JWQewMAJ2NtfwTAwUu4XniJ6QzvBEEMjbm6ea9dHHT5fMnmPcPSKXSsz9R7NWeC7NrL5U5K",
  "key33": "2QmTafhtVxRXKuQ1XHrLGh1xNisxy5NQcppPhUgk8Ttda4KDwg9myMHDcSnJVWqiGmg64pbLQ7cHLrm3SZNTpJo3",
  "key34": "33LUdAYxchnY46uegTRsyCWk1GwW4NuhcGJ3VX9GUiuJsbNuofHxb6Emv5jmWnXp9bArzqoHkVMvPPL2cbZbggcb",
  "key35": "4rVGidbxiiNKXfd1xCE6o1wvUUZFua4Y2nkRuE4E2KXWryWR9u9dKpM5r94kqL2uy8kptgpMW5FD3BQjUXgdWHor",
  "key36": "x4L4WC9c4TnpYP9HjVbwC9FN5zD1tV4aJ65WLchD1KZwy8LbmbAEevgQ35WFFEkcNRooxKgkgvZW8akpkDB735U",
  "key37": "2SUCbpW7gJHhfM3gBfdFy8pc6boMpozRtnqUKABVSzyqE1FfYz5MPDBhxeTWnS2AqAegWpJhYDi8gnukdDeAD4R",
  "key38": "T3HLfugXY9K1J598BoRWN4wEoEeg8MEVFu2faTcgHzJJ8R2dtsaxs3LAjGnaWjgRPxAE3Xt4Vt3RHjTMFkk3tLi"
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
