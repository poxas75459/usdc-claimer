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
    "5a4oeBgTFLrW9UJo19F9seHDR4nwzXg4NdkcdXfRNWvFZRCq8HvEwaT3JPFtbLdtj4R7f4Q7xskox45AAbNFNPeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3PAXKh7xQT97uj3TTMSNLveCPttAvADrhwUxcvpajD22vC33DxEk36a2fzxD5vD5A3EZJ9iePXfbm1ULMTY5Rx",
  "key1": "37eHfe1yE5HZKQX2Fh1KCXv3QEGwQARebjvynLJ4pnpk9Pf1m3Nuie8WhSXsVKEG2ZD4t76vXhZXtuRwTsVyvbMs",
  "key2": "3wLaqXc3fgS3yWMp2C1TpvCqBBbGw7xg7NpyTEAwNYC7c94g96s1kJcFe1YRwd92GMT4SodKok5XUCj1posTP3ZW",
  "key3": "2bxYDvWZeo1dXGdCgZ1fDr8QUedvh34kEn5dELR5ncgL9HLweN6R6p5hcDSmhB8kx1RjRaceerwxTauACrNxuJQL",
  "key4": "ZuGZMWMXcbQKMjBAcugyaK7PwzYtciYdEGSwR53JRSRt392ZoLBt6XLacVvH1RTFyBNhARiuVqB4GscMux8yiLS",
  "key5": "2Jgtk4QkzGjugitPDyGkwQh4oUpTfxTx1bfG8C55T8wcvh6vv16u5TrGyauEVYfMru1dKuWSK2nAdYL2denqWFxL",
  "key6": "3rxoajTDD38kZsEfkPxeLyskPv4kBRBZ4mNwgzSaSnTrMZiqspzMNifcoSAdetH5cWCGFbsxbwJEX62GoTsdWJCU",
  "key7": "5C16Fzyc2fiBTuajBmX3VrZ85FcnBRA8jEULP3AAVjLNkj64d3F7iE69tFtGaY24bz69yzX3Te9ENmz1uPAeypzN",
  "key8": "4nTYYpyEiSQGKhKHf42prnvX8jQF82zYCEPSdZeFrUtn193patsayRyyh7n8RynTcUJ84Vk9gBxgvNbUoiAYH3cL",
  "key9": "239ZhT6hzxfrz7uF9voRf7V34jJC8yCNRhQujgvMLo68yze7bzbkWGVnd5tSFuw2LoNTymNTPVHyifLJpTmELzJx",
  "key10": "5oyXQPaWXfCWi7in3jaKWGoSy36w3MqjbH5q722Y3DHRXqv438X4kLk1haN2pBzesxHJdZmP5iC6ipboDjWjBknK",
  "key11": "X7tkU4tTxttfgM1mPFSN1s6pVpivEjVMqjG3rwMUbKtX1Et1VMf1KnG9uefTnkbiiDYVzKdSgFoXQMhesjABA8T",
  "key12": "3NDZjHwrAwbycHLh5TftsdA7YbYC5yg7dcLVBw5a7RyAiNgTVhzg74KgwGSXo9wXn7jzeASAYtt9XFL5mrmifenW",
  "key13": "5bYWg95M5oXYkxybFsLAy5re3mrfQeSnzef81FG2gtmWEiWMrHn7b4uMC9wVuMHAg66PwdsBNaNhymPZfo1hUfMW",
  "key14": "5vFtyiA9RSdNWsatWuaxWFRpqh3J4bWF4372uy5EZqshHfcQ9eBwtues1ApfTiiZp9mX1TEm5vqHsj1TdSXi3YmK",
  "key15": "2KzEMZjS2t4wmQjsRK2S8ZRH1TD9AB7k898c5XEs43Zfi1LTKhYrzzhWKrQ3QvZDQae5yGsWdTXNqJywPcMfys87",
  "key16": "2w72eRrX1szTYaXZpfm3ns4AHJTzJKYTcoAkaG6RmLxdQLtEvgSS17CX6cFp7YnSXdQF94esUq238A8Hv7tyFEPC",
  "key17": "5yi1AWBacFf9WLvZmV7oMmBkn3hufddf48kv9TwT4WntDJTcm3igfbWGPKDDug9NYsiW49pd5rwYPWcebz7uHsG2",
  "key18": "5Va4GzoHKbkFFd7AYRBSSxLnqSVAgk7s8AvtpiVtY2SkHHPsC5gh3W3HwF9EwvcC3iYenGGHopwU9HDSZHKQMPVe",
  "key19": "5kehUxwitAxqxaVCJMGS6N8KwRe4h966M7K89exywfWWxjCYsYukJPzoEbNfjJG1DJqK9F1WHhLvdG621sfa1ZAS",
  "key20": "46BrQ7dsmtLJCR72thdfox3NMoCi6QTjcWZMyWZe4BHmvEUpMyoKDmh33ezNcjrK6ALesvLN4VGXDEYQaUdL6XTQ",
  "key21": "5r6K89PwKmyprXj1NoeAhk4i9od361SkBxSjkQJAimzx87oG8ej6inaqbNxK5B2bNi3xiQ6TpuSRnZgUDaq7HT74",
  "key22": "3jyP9Kuvm8GWtFCmgPprutTfZG3tkAUgc61x4qB17hAgWrNDbMFZgNFB4C8js8RjB5bFjCNJgQuxiKrr8USGA4TT",
  "key23": "5iS6kbprp7QFMB9S1GmVqDjmq6XB59DPKuc9U2nbEvgiriDFgvx13E3ZwTtDNryV33XHQCdttn4yf2dy684JmgAZ",
  "key24": "m4wKRhgzhrUu4tb8L5WYFWTBCt1c9Bcbh8a3dbBxAzegHsMHPKAEPKG4pNf6ynJkRup8RUvTk4TtPXA1ENPGxp4",
  "key25": "2otR8H71AEkqLuRG4Ph6cAvFLcXmZmJawP14YNCfK2YkguiTuRKMgY4EfutPfTuUM5poJK6aFttQc3JavfFDDnoX",
  "key26": "2diPwN1bAHuDArvbTAtTCLQGcyomynBgeLuMmc3bjFxoJYdBQsKQGAWaHySkGqhjx8ujMc1Ya1jeVPkun5Z3hVMA",
  "key27": "3SKzAvn5oYpGfPWDbBEhAq3FpQCeuv97FHjS5ZjkqpV5DoM6vZGXFdnyp4y8Rvw3JDmpaGsQcgTNS1dQM6KzMCeW",
  "key28": "9YEfRSXPA7o2WQ9mUv4QNAQnMzj1hA8Z5bCZQk6AspcwgWFBqyq6RTFouJfRMX3jBnX8pGhjNJo563E7jkpxXkW",
  "key29": "CocN1yoHtrVQcPFhejfHR243mP6APnpzUZHeJvLgoQpASLW5ENBc6JmvApwV4J62CbC5ZCeXVe53ZZrHkfLxSsd",
  "key30": "5ijd7va9H1raD5p9oFNxDcaHPjvEztSJEtyxJoa1w1HAXHxitovt6air7k8bsS5QKh7fvjHW8FZFhbb9AD8GEHdZ",
  "key31": "3ZL8r6aNHQT7N5BrEGbmKi2sWbcCsRVywDMudtzCagfcqBNTCB5dVLm2rZvho78XtNTheYubnJfWmzgYAGXcsNHV",
  "key32": "5g3DjgvYEwYjXFxXvUKnH3XRR5T7UWGeozJNF9jAXYEhr3TkHSHTW6BAEV4kb4Mt2smQukLv4tNrDq7e3msHrNDF",
  "key33": "2C8yGvgGTEnF5EmgdbP4QxEMVHD9jyy58JPdqjhZvPDjyDzYn3GpQJKvMhKuX6GEuszXu4UWPvpn8jxs7LWpMFnw",
  "key34": "278ey5MCoNJJWdx2t79izedExJpx6L2yY36GiaGfeJxAaGUjABWTAFrngYeGXGquKSKXu2yHk3kf1oaAgH2gjjfJ",
  "key35": "RUtJwJUQ9dtsYdSK8gjW29z7A5ZcWGttEuWVm2S2stVyPYbHYvpPRwEmGmxTDcUnaohZuq76rgTfAnMkhxP9y38",
  "key36": "4Up7VfAUVgSS8YaKX8ZEGG9cZKF1NkCqSi9zSwAogbcBN9tgGJ6qCya1h2f54sVoiZ1MkErbEheEukzT2nHuPZUe",
  "key37": "2vLRbxUiEeuYD6sdVKpDfn634yoVokS1aMjThbbToqsGHa32cLKJLQMv4FDAMdNdArtvpL9NWMencbQ2XEgGofKk",
  "key38": "AAyAQT1JPyBVtgQ4uxCJTYwqQpaudadD8LWviH3L4Ft2yxqYJkxyQfi8ZXws1MsgmdoLbdcu36Z9xcQVe31edYF",
  "key39": "3Nz6jcszAwnb7fUdWguAGix1SF6QD3vsDZsfSwYtYwrp65vW3ze3gRVBqGhxpZNCwbdgf5q4VzyTdcZfnrMH5UX",
  "key40": "5hxGF5QQzoryCSbsoFCUFWfcrp3EEHw66hQVJY9uy6KKf4jYaz6iJY8f5iiwmU4o4i4KaEFwanzGaSkyuE5i3CTt",
  "key41": "2nEQXBh2Z8wgaPgEYDtEmHdrbacpWtXqkLS5QrhvJsyQfECxBxwJ4XWNdgqFDsm7dZz1crgjHoM9FJ3EDUGjJVu9",
  "key42": "59nyLjGg6qT25UpvCR76s6jfxQYk3M2vVmuHigFjLxneBsuFMJe9QeXR3wQNjWjsZLnEypKwmnutXcmfWAojKeTx",
  "key43": "4GMojqUXgNuk3M17zYNz7RuTGSLEbGyeWF1aNF1tX6VQTNFXKJE2HtmVN65reQHj9zTFoWJvjavj4umqdbW5sQeG",
  "key44": "2HcvJEvCbamUJMbsqVe4vneb6nX8VvQNWjXboyb8Z9fQvpWE2dgqwtEUDTD7wTuttj25g3PXdvhqPmLp55FCJCjo",
  "key45": "4Poqh7y2w6EWaJnv3tsCYEx6LCJQQZgPM97AYUJVwtVzz17zNeg51mkUEM2aRKFrWQNfN1UD5ZbLkeP14JNiF7H6",
  "key46": "4TtDYH9aJYbkPXzRKSZMYm2M5Qc7x4xX7hS75fW7HQSSnzkLxNj3kqZHezy8joNVFVWSTNZwSuAeEWUJuL833Tvj",
  "key47": "5uqF5S8Xwi8SKFwdzJ2Vhj5yME4Z2YvApBZQFrb86z5oQZEFtTY9QLqVDjg384d26CQFYDh5P4ASkNWEvLhDmpGo",
  "key48": "2hJjxJKQDHnHZyHpNbebCpXrPhKYDXK8uPA7nQjttX1TGuBNYGGMwV8Jk3cQ88edhZGZRcKWmbeuJ7N7AU9ZUChC",
  "key49": "3XWAE3u2pvfhdMoHjSM5LqQ3pnM1BUPq1kDMizaVTeojEKhxysXpZteoZ48f8hTU8C4Pa8GBNCCEF9ci8W2Vid3c"
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
