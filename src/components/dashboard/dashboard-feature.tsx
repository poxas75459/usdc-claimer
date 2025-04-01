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
    "2ZKK6tYd7ApAPgXEKMiCVzvh3HgqxWpyz3knCkDZjND8ZTmGAL3GxUxb7Z3NFRpc5EaCpHFPRTfPSLaiMMJQgoL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vkwFAYL78DjQReati7mK1Wyi7jYtsfcYD844jG54owRCzuGBL2rnRbEFn17pdjuNoVD5LNSkvFQcETSo9xQYDyG",
  "key1": "gfEipks6okyyzLB3fkYtNmFFj1LNenn7F7WMVEcgkps9apsVKeEZMcUrsGzAnnU5mjrhCN7NKQkbfLJW5VUJtP3",
  "key2": "3zEZby91uBJWHHjzeiiV1y3ZY4z5g2i1gWgpGq8KFBrFo5zcZUJvEWgXbLFQadXLydzRDt3HMfQ9eq2NhxiH31ry",
  "key3": "3W53n4Grfkiwx8LXLPHoeJuzGk4qGo8StkujWJggo7D1W2EVe28H5VEwqigadViWH73fsuvq1TxW9qJWHDuK5Ww7",
  "key4": "5AS8hBgUF3pfr1aYsxD5PTvQzpzi9NwEGz6E35hVeZ6RpBxTJow7kANgC9bzqR5M3hpmdXMdaz4sKsk8B86woxSj",
  "key5": "4UEcDSU3JqNiwBEQ6MnASa8tbQ6r3Ft8b4P5zW24BSJSb5k71LK8cSceguGbTkkDpTu5RFiwidKHsXJHVe6W4KRu",
  "key6": "SBfAwfcxxi9zugJ2NyPge81qbrqhJ84KyfkAMGAEAYGPtaJKJRog4ZDchPML5fcuYUNkX8TXZRUHbXAY5jDioUF",
  "key7": "45tZQRJqPXQZWf1Bijyz6WoWU9HTaAiWaQUwgkNxtk2YdXd9WUASVkQQZikaQQfJwRSqy8ooZxHozLzA3n7HrSFA",
  "key8": "4ufVG6PSvFyi2ezXWg9hMACN6xwS38SSZ6FMZPV8jzognYZQn3mZKUYznjWffzaTRyxsVy7yHJyaETVzMzNtEu2b",
  "key9": "ApYhnrSEnC8pBXRwAxX1ZHFZDCcVUdxjAVd8bxra9v5PF2HUR15P54E6mY1XnksykiHearfeKdmeQ1YKZsQHxLC",
  "key10": "xqciFk66L1NZNWiz5KvpyqeXZVZjcB73uEfUwcLeyqZa3JobsBgZ42fLjHqqR4Tg93R6LDdsqwtwmUFc1LUW5m8",
  "key11": "28DEtzZVNcqUtoHp1JqTMzeKv3Apn8NyRab5fY4T5kN7vbYSBqBCEBBLGG2942ZcgttcncNQqLxPkMRDsHpeory3",
  "key12": "3ifbSCdyjhQMaPx9CgCTDjAwyS1CykRVmd71kgBTDsB9364fiDWchBuqtEZB5LXzL2xnsJrSqyg4UWc6hFwtwMuT",
  "key13": "3wHMK6tGqATT9qLqpjeUgxfRj3VZuDQEh6B4gZP5oU18oPZ243QYRj1Gmc2Sj5GAfFHZrJ5MvWidPST4WChbjK41",
  "key14": "432457scMhwbFkqAWUVYNVfJ6uNAUgcixzw2dHz2E964yQ7Kj6aAZgWhzLQnrU9yrUfT1gzyAzE8aUcmX7ZUGtJG",
  "key15": "2KSMBJxmQNs1o2dmnc6vLMJGD45z46cptidtR159etmXy7r2GTxRDitXabYYnDBAENoSje54ncfsiN3aUvhJ83tg",
  "key16": "3UGUfTGg31kVaVF7AMzyLp7CWSdRQYBJJSWfd7nnQJLGy9JYxFw6oSWcWYhafXY7m6YL8dhNsKxKsdbcbZRZnnfV",
  "key17": "2q38ZkRW36PAtKgmo7StW9nm7xep5zghPSMM7xxwkEALkSmbuhkHXXtYUchiVPNE5in8VyLQXPQMhjyEhZBXmFLm",
  "key18": "4DjjMawNmNMpFrhuKSVDpDtUd1fBYSTabbaQTPnK5AKjNUGEVwk1hqzaR2MjD22YV8uUKadqNgj5x6eAo9e7v3F5",
  "key19": "653PVHT8VpNCHqWJPCeiaNmGVaqrAyemX2TF64Ewb4oTVoyLJDcgEC18zPKbmjax8nqHACxhH7hoHjx1jrdFo8nf",
  "key20": "34ULDxhEMx5tvfGb5bMVr4pxTyX9utDtGF6P2ywi1S45X7dJAyHtvDvRtJHQyd6C9KKunt2YT9bfjiooJ19T5j6L",
  "key21": "NfQSiLmyLw51CM7Ww24AjPGLqRQxhMwkTmH2eUEPXoWe5JTECfyKtjVDZHD8vhno3RniGrfj9BpQPpiBVbuziF6",
  "key22": "j4AwkYTzsbG8xbYn6LH8TG6XRiXr5qVTsmUi6jZXFNhDHra6fjddGgLgpebPGSLHpoUcdkRzqGam97phFMaYum7",
  "key23": "3rb1MYZdGXh99PtRYABCDxaUGx4u1pP6VKqo8HXSvuKMCmpN9rHtckFEK7NbiR362pZivLJdMcBRZgqajohBDUER",
  "key24": "WsBSCQ8mRvB6LgsF7D6yYiRtM5wqDAXww6ZXXrE18r4mRkmnWPhzzpxKS5EJ1UGF8NaSMGJ1SHUpDHFk1pTXtEY",
  "key25": "4kSjK9f1NV6pecxWMSZtskeoJ7G2UvbQFw46XvXTCL4RGsx3Q6dQJYYZg7PhiASeajuPb2F7bdyX8FZBELdpGphV",
  "key26": "5QtwtNY29KD5cAGy7j2UaT8oTTKUq1ccc9jrspkHyuXFktEo7aEC9QjWCJjHb4SLovfFUz1i2w1BJnqLfjhkLgNE",
  "key27": "3FrBkhLU7g9UroD5jSzebEVi57qfoB9uy2up29kRG96pjA9255HAFzoHFmie6BYVqmrYXii4YA2nJpjUqgX84Pdn",
  "key28": "2TeCHYdg2nLFm3eVwAPBkqr4yHch6KqjMLL6hHLrHJkAShNRKN1H7oaUsy9vhqVKjya5AjGKbxqJmTqEFnENGMjW",
  "key29": "XaR5ZUShyaB9ZrDJbN22F69kWvjbxp7YEe2qhqpTc8iijYz8f1mYCNHJQttV1KK1Cd2qsmW1BiVQ444xNw3HQju",
  "key30": "4RrJJNQJLJq6maktD8T5vUpwijxUMNYdkWjYnPRc9FNpkyVSE1MsaYPq13LhKFdxPuoVXZWX9wcd8uskPTwWFMEB",
  "key31": "4ifYn4mSGJdbk6vUjVHMm2jqe9gZcvNYXHZJsHAcFWoSQxbeTE28zCH5hvXERnksKRyRoWzsGmQaNZdEnM17aYUb",
  "key32": "3rv9GJRHHL8zfRft1Q6rKNTAT411URQmPdrR6LCat9G17vEcLWoqbuTqx92uQ37fWQ121WuGG4zTQCoJDzBwdavA",
  "key33": "2F8f7iEUpJXwTbMJKQyRsaHn7Xi1hpK56Hvi7LnjSmyHVVPGA8vXt5c71Umcv5MHu1hAG8dT46yKE34zptPwZCHJ",
  "key34": "QHZ1C4sekFGq6RXPsRtczr5CBZNBif68YvWcZmfJPYuRUCDm7omnWeLRgdy2D6UGeyAFdVWaBckA68e2YSUcqxR",
  "key35": "5FjJBsxLw6fL3snDhDuZgQy3s2c8pY2Fujot8sdci3RBoTgMUJ9pNcTSYvAeAdafQtLe2LGDN1a8X5hNBvDaESmU",
  "key36": "2unHogBHCSQzLEtaeHjdZr23hhDZJFpc2q3UgjjHV6EktLZ9itLXd9V835P6rV6jPUQwWDjCECB734LJKk9ytGGb",
  "key37": "3aB3uwJccMzNkFcCL9Fk2NxRpRTooAh2cdee9Tvc5TWmEBrv7rxkw8vh7eXjdkoTeupEuLKRFtRdmDL7HuBXucuu",
  "key38": "5A7qLBL9s7Y7fd11iP1MnsUJcwdc1WXrRyJuZsbeomuYHrTNztYJT7opsbL5H4R634q2JrhkqqBpSaSSCP8tkaLm",
  "key39": "2kSoCrZowkmB2wWWhBEMUGxmbPXzifddRNvgieeBz7jLBhPJPc8obkhkFMYMTjWDmLPUxex144wW2N7Pr1K2P7j4",
  "key40": "5egACiYvS8aZfjwiLmnHk68ZbocP9aRgvWvGRvR17ZrhiTcWW56QwXS1wMUJHxKvxPgtuZ3YgGTBxY1Bh283VxtH"
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
