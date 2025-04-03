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
    "5P4hAV9AnVGipsUngtQGVRPgzGRJdRv2baBHLqXRdMY3GEdpqtVVdA8V5VbBbS74y2abMtgQdshFqBsiyUvp3Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8dvVfZ4gZt2oFC4YxRFLrd4PLa9fGj64tF5S1UGQs6dVgXVuNsP4dft9xXEQiS2L6Ud8Td6XMT4ci65GNZbFtA",
  "key1": "5pYXtKyU2TM6J3V9BLJyV7ccVsQWPNLYKqCQFiQ4BhFzkhhZqN649qzrfQ47vMk4SM5DgsxdxdrqhQWGkAzg299W",
  "key2": "337MpVGRHZqZcb3LK6gqvFcNanMQwSCcPucYgqebN3PsQ99ZH4ymWjgDhpzQJEZwwc3YApVVmC2AdWXFPt24dbPX",
  "key3": "4qoXiip2B3dthaPGJN5dzt5kpTCBHxEt4AVkobDcYb3KEPj15XQhdXfLLANtkq14bCeg5XQHGJezuiJ5pkqJuXw8",
  "key4": "LnD8KXgdASiyoWyddzbbH9Uy7VhV7pQnFsLfW9EUJV9d9WxaaVLpzTtWmAxgvG9LAxF8S5fv7yMxXfJFZ7JzxP8",
  "key5": "pBvUzakbLfRkEwnUdsCjKGBZfBw3tQkgJMAxg4zUPgYPubFhMEXAsL9HKrssjahNW8o9YPETvWfsP8kjK2EFoBN",
  "key6": "3XuAZyePG4GBjScd2FQKz3rWeQ2dGEA4ivtXynrEyofJWTEFP8woihprN9na6bwEkree4QMtB3LsPwoPHaMgZVTE",
  "key7": "C33iVz3Ndo1z6D4Ha1HqSD5duVDGkcJ7eEMiEczs4c422r93zjRJ5qZW77Q5MpZU68sukqrbNFvd8KAuNNQL7no",
  "key8": "57sKAwW49ZWDN79aNHsZuFfT98AY2GFKgm3jj6GsfgDXUfFaxkcVnpyXUATER2Kn75UAT7f6tiVXyA5SfjHCcacf",
  "key9": "5eAUQ3161XCr13Zzt3WP7co6t1sUmdCHkBKxhkm3ss1rwi5eCQtrnBRx4WRC7ZVmxKTvkC2oqAVypXzG3FcSxZTL",
  "key10": "39hojVyiRMUSDHut7p7svRgcNq1VrgvqYGpYo89qbA9WQ8Uy4ZFnefT7bEjky7g74yXtffBwQLh2DNdaky5AxbMH",
  "key11": "22HBiJqBkb44qeizF3brdnTomh7qPmNKUU5SVdZ2W6xCtFNRSrZEmuXebJdC1f43GRvqxXMEuGSkGJ9jLrLNAJte",
  "key12": "3fooeVuR4voppZacArYmykQGtChMzSpRvgU76z8JUneDSMFSRakiEcAwjvfzRT2tmYt4NjBDLCPQkBz2WSRGP4CG",
  "key13": "ukqerZddcVnFRu2LZZ1VzfhDBYBKcALp7Na3w1LvjBr3k9cFbSniQ1ednSg3rpYtKvq4YCRB4D5wvy69rjgWkUh",
  "key14": "3Jww5dJBw9FnM3dYSPGWyMNe2mC2F6zcqt4JwiBuhv3NqUajcWiRttAxQkcyGXymdPLhtEUGRAV2ASYJHAdmSKRq",
  "key15": "5LoLaAXtBLP3sgQm5nxPY9RG6uJfXMm5S4GZXoEDzYpH43u2AyHGh5nJpQWFZZcAA92borZ5QCu3BAkH8Yo1VkJ",
  "key16": "3XpghmYJcJZapC3GLwM5mguFeAzbdsvS3q7QxpdLsLQAVQyJ2Ut8H2nkEJH9tTHzu68zTRmdoCYCRTXjCq3mGFQy",
  "key17": "42bDXLfGQkuXgRHdCRz5e7zUsPYbf6MrbMEPTPKd8fYphZYN2pN7asgU4zpweUp8LrwzRTa7nZJT3jzCWA3FpqcG",
  "key18": "2eWg5Q3kXmdYNQnTPR5xsQ2XgndL1iC35fmEWmkiUsaHvw5BqXV9Prebc2fFQMb4JPjWwJNyxffK989rATozrG9i",
  "key19": "5HMSyorXs5wDthjAkGccCU9HibMJ3PabdzE5JFWypvjXsmbLDeLSL1W6jZh9Bcw5u3wBPoLYHBhWMQHd43kKNw7H",
  "key20": "WLScN3KAJKXnCsZVsRzgaZeMhNoABTJPWmq5YLJEQNmWaC5QqwftrsHQ11BHR45EwukL2uSXZNePY1SZ1HbV5VF",
  "key21": "5PdPjG5AZ1i9mCq1w2ge9admsuubWobcRky81Y2Vy9eHLQj1irHaa56y1GEtcMTkaVh56MeNTQnF4ShfhKLxKyKk",
  "key22": "gNcZdwLSZc5ZYEbUmV8g7F12Btw1cQGoo7niHyr8u8JFYuLikyMcxpvLxYD7c8UnLHrnhoGWuygbQmKxsjqdkFp",
  "key23": "4MZZuuyqtwcGcsaQXCQ1BDBQKkRQtWatTpSsjR2H4jCXu4tUe2wbGYAC6KsF6KitL7Q6MwdgXVsdwRHbdJHLW58a",
  "key24": "3J8bjLt6KEYUSm67gkUcGmM5KafTnTLxvkrD5Nn3jKcNDidAViYgEXFByvjXBWtvnXTJ3LLC4Zu9QYGPp5Lvrg9X",
  "key25": "T5EmL9hS3kfKc6Fu3rTgCkLeJH45QDHzFVT5JUWqUJ7yYx1dt6SaH75YZexmMMDHWo1vReagUJjJPjKPRjNRxJv",
  "key26": "6dWc8nP73AR7sMcctiVdcMUJiB5581pNeGdgGJHsXVf7HNTuR2DHHEedNVmKvA79kbRXi3vTQLUQgHpBb7RqiNp",
  "key27": "4ZGq1KFgy9frvbcaDKkVPLkbd56VFGCbFH4H1ggoXCg3qZveuMj7H3uWWDkKorVZB4hqtyUijoZE3bo5ZiWGAQ2R",
  "key28": "5ezbE1dR3aNizNHd5b7rWB42aBYmsLbJet1ahiV5GSyTZF6Z2CKLKExf3n4EXzW4RCZJDQ8FqfNn4AKgecVY6yPs",
  "key29": "3W65hqo6KtwbQWHVdoNJ6YBwb1yQK4K3f8rXgU8QcXjMvjjh38NefePptGtLr3wsp6r9GTg1mrTVJgEzDDvGrpx2",
  "key30": "3KX2vsWbvs51wiVkZAFPcHA9JLxCiyUkSdXjrEVHTmy3rpsrKkca6PmNxwRJkMXrrNr6GNBCvSdvgHzCsLCihdyx",
  "key31": "4QXytPuEn1Q6oAnYWRiFxA8jGt6KtneyTAYQEMMBRHjSdQvEpXnobK5fy3FnwnL2Lv63ro4oVt68bHBHYTzc8jbg",
  "key32": "4r8QcnEVb3tZY2deS3ih7D8ociozH8VvngMp7t638uMLRzUkk2kB2aaShadJ6cB4ZWGQSL1jyuQZR27QJtM8ZFaJ",
  "key33": "4LNTDmBP9ssggbfiaDqtJt45QSiw5iJRvbsUvrfLYqVeaffc9HCXu3obN1L9cURTsiwqu6C4A2JDo6cFRQQoxfYm",
  "key34": "3hR93kH8Drf9T4Z4hLfkMLUNGv8seVtaj6hU1WXWQbrkq8vWPmHL4am5dfFFNZ6Ci63sq5meQq69qUBS2ijewbyu",
  "key35": "5DHJJRQms9vGi4cfDHE1swpM2UPxm9Z3L9jCF4Q8q3LuEMDHa5etjvZ4tyNXMsqVEFe7z97uUMzizgMRPZezZEoF",
  "key36": "5Qv4JLadRNxio3jsEKNCUk4P3BSU5iZvsNez9ZRfrCxPHL3xJeQ3MC2x9YRnmRs5y5enNFPiFx8mLb4xbFi4H9yK",
  "key37": "2MnuCwYnHSRfxRpvfoXJosAUcipuJ2Xud4T3qpLDqRHmsStRTkcRKNQZgiuGx3R8AMqzBwd3qND366NuUtXeLj28",
  "key38": "5BJyUntoapbYLEu3bRgMXxA63sQ9aPKjGbQ9Mfm84NUC18PSKWLW17rv8sLE8DRKDkhGGWe2yopkk1y58cB48nFu",
  "key39": "q8UKZqnKiHo71GdyqvCj7mWBMa7WvEsjsnn5xaUTNAFRHQEP8arHb37AsEPikBLttu59LyaEUBvXWJDquy2B4Bb",
  "key40": "M8h8gJ8d72R4nDfM2Y9iZUp7sbghnS55Tfq9TZBEVjW472RGKot2Tgz5ATdboL5pzD7f3KgZuGLzxRWcAG8NCic",
  "key41": "4kUQAey3fQYdWMXwdxq77envampmjUM97yfzP3mDqZtj7TCeeSdA7dRgcnRjcPEtiUurWBHYHRejH2LBgVCfuxNr",
  "key42": "3iRaiN7c5D6vk2mKkmwyEGk3bBq2zRrTYmW5jiF9mudoqZ9i6eb3c26w1rai1QgiSRZjJKcKKjX2X2jH85WkupAC",
  "key43": "rvN4ZyLzvjDCA7SyFHjowjYnyPMa4daDDVD5D2srpfKMtxYciW644FGFVHhAG6mHTuG5GAHM8fD3Kgzeqx7YEJ4",
  "key44": "4mkDs4ZLDLMFFqMFaerSUwXthRouSfHqn5feqzzKpxxxWUXcF1412xC9ehxYv2vvmtGXrEz1LN1kyHDaH5AAGesn",
  "key45": "3xnZKVv3gqWXCfedLUKyacTu3yUSTuDt8yJaTmojajt5DPipcvGqAMacG2F92txEHvrsnTdxSGmwJHc77VPD8oMz"
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
