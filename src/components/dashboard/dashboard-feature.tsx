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
    "3G1mXbRxZgEgBLnPNBSpAdZSYh2ivUe2dSe1AZ8aBWhCb5GmyXRUiL7nrfoXUfaeKi6TJsbTa9FshHQsvaqvtoKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uzUd82mQGLRARvhWYhU6wn9zVXQ6eVy5s55Lz5ytZVZJbsLuHQyj6ZMWH4E537f7WUMwzFcVXjvh5HNPJuj5NRp",
  "key1": "2gUGTyddgDB8x2bTYLHJhJxp4QkLktYaG5Ei3AyQ8Msv186LotsycEaHJr3td3Tvbhh9MzeKjmE1EFJU3hVaofPG",
  "key2": "5wSUuC68tmKo2H5douyya3CsRJoSNfYmgTMB9YS11MrM3DT9YDAq45GUKQ8ZFWWeSNE1H6PejRoCPR3MuAJDVWX8",
  "key3": "2z7hVH4ky5sVVj8yAGqrVSnxRF8Bysn33TRQSUUJgxVrHV7nS1yVf3sn8aR427fpkorLUt83vLNxo687ZLP1nUmF",
  "key4": "2h7acs53WGMyJ7AF8qNecr6uonVh91DvGDnUo1fYCCmnGDeWn8PMG8pULM41D7rb3F1RXe4bvXyJtu7cVpgZ1Xba",
  "key5": "574MuekoHMCwXGpWfYzkrHjUeSkpcWPG6CrZukGH5FNuvjwyBKREUaPeXHhv87L7Ncyk2RqvxskHGvsHZW2zEMM6",
  "key6": "rDo8YTwD9SB1qvBikZn2wM6kCT6aApnJsiYqvrAQU6bQK3HmjzbtneD7BgSq12qQYqYQ1sdMLbw27g8UQBNAnCc",
  "key7": "5y4UyJxxPLywWwzB1HctPfSj2ZKjFowGrT2r8gq8E3818W9esCGmCmbAmWMmhvspksCgW5SDK5qgmLPSBceUYXXs",
  "key8": "2HEXwP5wpKuKLXRX1HHpexZtbm1ewTPQ7a3KSumrg5jXfx1W84YZjdqScGBwy4kKNFfqMaFk3vkydUGwCrsFJ6jL",
  "key9": "6UaSoojYhwEdwLHAgWd8JRAqBdNG4Y4cFWR3b6GZdPBPpGcVa7hUYa3hEepuJq3FNqfRp8wtV41Vt7spfz4cUZM",
  "key10": "4Q4QYvKZNqJZR94VXAXaL5yhbanfavUQrkoDT6YKtbZrcFR69ivSCWHQcBY7LW2GRwNouoccA5ZebDbhv8Q6zCTt",
  "key11": "5VsBqJX5Bw2tDdmmDsuxy92Kmcq6G6Kr5F1BCL5uBQ8DNTFnZSz6ZPYGSEZqpGVMUocFbQFNJT9dsamXpXw1ro5c",
  "key12": "343r4PRDptdDpD8m8D11BoXb42cxK5Jw5WUUvjzwBfK7FyhFZuirpQ698cMe5mnUhkpwTjhdpBwLoUXdLFcqUiBz",
  "key13": "3vVyTAsepzcXB6mQB7qCYzv3EJEbFTohVLyki5ngrhisygNbmr4rQQrhfz7UfCuQARHGX6Bwtj6wt1CB6eQfKM5W",
  "key14": "4EMJ4aBearfYgefv34UVd9FEgyPv3YrhGX8ipJK8s8ZDTWthPENbEA7NhSyLVCuYvXToz4R6XJFqYwP8NRThZU7P",
  "key15": "5Pf4ydJhxfATKGyLXKvrafQGMbrfoLReYmZis684nBBMy2X2MsgauuYLccWDLfqeVNCD13H17gbah96eGGkGu6Wq",
  "key16": "gBkcqbUXwUqpD8PqEsn7jiNnD6TJaiPa4eWVUNBG3o4aM6e8N9utjmgjUNJDzTd3Px9mJU41c1cvAixbRWx8c5S",
  "key17": "DWGaZsVEwA13nEr8jYMmEUqRtDbfR5XQfZuPAQY5yykLpGUPCPVWASAHB1Ms7YCktvgB5ZxnL127wDkfMiPXfRz",
  "key18": "39mi3sejhG1ZDf3zuseX2aBJyV2YeSpndGJiMthPXyxfSzqWhXeUG4eZTSWcoWDXS79djQPLwX1bBYtG7NjT4TJF",
  "key19": "5TtWQL7zYk7TnXyTJYvHeTrBNtYydWmL8gyUnZU8RZ3w9yM5eRF2GU9cLmBgCkuH3onTZSJ287HsoajoibcFspCe",
  "key20": "3XtALYAWGsj6VtcTc3zBYQWZwuTtbTUXN5QspFip4UqZe3xsmVsaLzSzBQv3JdTfJ3U7398gTaVkHr7KWW3wuLqK",
  "key21": "3eY1qc9532FxjmAW7gfuA35rSeenpFpo6u5ZtXaXfFMgaoCkDeiX9z5AFLuvvbuHjgSpvBnTC2kj85KdipL56V5K",
  "key22": "3GXB9VQrUdvycNMX4K7RFBn4TTULPzNK29UBTmXiuVWKmpmqUmKvrsoAxZ8bGNxXGEup2W3uBmSPjJLHdmUE4ASW",
  "key23": "3XV7K1rE7ndn8KxjLu3GJcsd4EstykoAJ2sM644Xf1hDbMEERvpVr8f5F4pMt6JfbYbscdPYmMFjsxnzcockQny7",
  "key24": "43ZT6rLG24cxCtrCLRdnLCHp6zV4L5T4MRazepNk142Ej43eezB3qEeBvksHpJCz9WNHm4ZoYGeiQXKjYjVzhTA4",
  "key25": "Muz1C5Z7dgexXHNSE11KfVY8UqhMyeSSZZc5vin5X4ih9E9W7vwZiG7AVKBHiYYuUkZjFDTdE7H6H6itbCanCGV",
  "key26": "2MXzd27WScpsVaAzAdMr45wst7Y5c5oXh61r7Rn3wPycLZCRPQDY19fPjbyMbDcsZuVArrXAp1poi8Y8BSfmsdWJ",
  "key27": "2XzqHfTXcaxvgZVhY3QE9PATg6aHh8E9mVnh3iQMb9Fjs3iRz7ddLj1JrtLpTHqZmknF4Lqf5eq5yaTZHyeWKUhg",
  "key28": "3DvsED8ZP3jCtddkGxv1XKTjuTY5uTkhaA7yJkdR4Pz5xu6EU8XYMV4tw6kNTGa5d1UFz5zXZRJh1WCmqrCwt5Px",
  "key29": "3hTFonSRoDKg4h8xSK9awwiidxX8PUS75JqAhABybEzwki164FwHFmiVi9YGJKQjrKtqrVnyzCgGNiXWh2d99guY",
  "key30": "eaQ6icojxTkZCVqvHjmq6ZdMSutJHYskAEF2qo9jxFFSxv1vkB8eNCwGsEMy3aRAXWWqkDMz4cEvpjH8KSc61zF",
  "key31": "4UGy5D8JpXmHbFBai3BxtLKF9vBUynZ9bkSh2UKeBFu2gw44ZzHhSp7SYpUsSrzB7PLMe3EaR9NEuYQYXVFeeR5h",
  "key32": "4FezHmDNhZ8fktzf289Ywi5XqLp7suZ2Uot4ZL3WMR12TdqgqwKMVmn9h7nLJA7dc9m8xKXwJVSWbSgLF5i5wFYP",
  "key33": "oRfiKPTenRb4xezPm8bybaJBdJ9dtSdcrz9hQU4wE6rRbSDrprMccQdGuchDQM9EQFxmQ957RFctxya1ZRcG6ta",
  "key34": "54eSTf9k8zJVTS1hLS3oV9ZGiDHSAQ8p3vHMsEFb91vZXMNhN6B6yrE5Ng4eUyAw2W7kv1Cmn9pVDm7QHTftJpDH",
  "key35": "2MTm6eGVuTGSUqu4DrdpTqo5a2r7fouKYSPfmmYpNqLSy9gp4HePbp4KNj4oHRPv9w1Xx3yezV8cqYDrdzbTz8eo",
  "key36": "2u8Q7DeZMV4HeFosjv4VgkM6HDWLaRT7FJeef8MAk6MShnz2kDS2UDGs42ZcDMVN7sX8XErz9cVy8DPY3KDecNQB",
  "key37": "2sBgXqUp94Afa1xjrBtyvY8FYunA8489hPKsfPYafTP5xkkXH5t9Cqg9UXzqu8ZwgaMS9nQQSSujYogKqu9Uv5EC",
  "key38": "217u9xBHo71LEQ99wvnxf8v1UNeN8FzxFEHyKi3ir1m5fTA1G81KeBnCEEaXS6nX9YMHZ1ejnkmqn9Dyc1TrLp1H",
  "key39": "21UtQHpZePHXv57eYMWhsHSuYaw1ttkgJPULZU2xf8hStkcNRMwFxS71CcKuwYGnBRP4zGm2xp8ZdfP1XCivqQGh",
  "key40": "nMeUinGN5DQQ8tJH9euNvSCZgdLL9qYMBkgxUHvPUBgLG8hyyWDjFiC54tVSWH6dVYzGNpRrEBwUXxGWb8chwws",
  "key41": "5rstgiK3ABAEDNPMsccXRWzFZ1haAj4VFzRbAZiKk8i81wKCYswPtRxWfrUnQga2zeyxYhbyCHvv9bBAtaU9kiU2",
  "key42": "TU17XxJG3H7Mun63YgXd3VgekKEYabFtdjtWA1ujcATp91zjVHo4MrC6J3DDoCjyCkMKtUpvGSzEsKQJagD1a8L",
  "key43": "ZK76YqpZCPajc1U5Ct9qXFSmx2zgAq7KsjYm5jEQFfkbYP2DrkZyd8mtiv4M1uMGgi1WhHK2izpYMN2M6a7rELV",
  "key44": "5oBH9F8Nrq1vQd6QFaqkX1MDwRcQjqEgSPjixPf3auqrh4me428SioGvcbTU34fcvTbV2tYAq5WvupX7ZE72hgUg",
  "key45": "3TgoBBTfMhEo7mQNLjmdgWxfwskRBxPuiwD7o9FZzmXu1v5UiA1dJCpQN9PBCP2bkvhnaCJnCrgiB92mJfyhRNQA"
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
