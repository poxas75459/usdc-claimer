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
    "4gdpjgqH1ZWP9qeCqdQb6HeTsHKu3hhcM55nUWzYGTy7RfJQE8fRP35RNJvaE2LajsHkbfpP6b7Rhy39yfSTQuXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46nmHwh4SyvyJ55HUamVFYHWJ8zEs65VJZiCmGqvVCosV8GuApRjzzSMY3Hcq8F9CfSCbopxQEzibVihr2H1EwQ5",
  "key1": "5G9ZeFBpGZ7RTx3KmZaacXweN4GMxHYwGYQ22Kaociaj1jbM7hCTZaiua1PAhKPVi5HjN6KXkTJjitXi13wPgutS",
  "key2": "4qtq7iSe5cw6xY6kdhufsje2QU5aH6fL82kTeYFssNGJc3eMLVPKrveTy7NGTJrT8F6tWR5nQtsj26zb3LppbxtC",
  "key3": "3J4rqhZG8gQyuAVNEREvGRY6JSngxy2vmqXAcc1NHoUYQjF6Bhi1AsPYnS1CNA9u1J2w16nKzf6Nv5yD6VX6cAKF",
  "key4": "4xWTkcyKLTA2xJL4FXMQ72fsgpnhHYgzQnLH7Jd4wCravFbtDsQm14UrevB55N2QVdgDHeVo3JFaNfnxRsPfinCk",
  "key5": "9Rd75Kg67UKwqw5mbMYqvfMrK5pBFe71GDbwZ6r6X99EtZPfFPBhNa35nBgNjZfBskE6Xn7MNimPFMWMis5rgbb",
  "key6": "PuN7mmCqTbg3nJT7kgpLgDaY8TLUdLmfWjbJiNbxF2yosqJssaktSjVF7EqCHwC9YdAwgvAs3xkggxHYvXWjsih",
  "key7": "zoxBDHhESgzLnVWqTZyNRfnKXcLckv5bAW3wWNuLa8dtrRXuPhn5HEJE5azF8dFRHQov6BJG1Kg4FpBNJ2epVLw",
  "key8": "47QhkCBiryQedGGMwFveNhTt2RNeqGGx7LqjXrwhbE2wHgdoF6yYiYxfG24DrVa8FaSgZh5uiBTUiq5Jv8izTBkQ",
  "key9": "4ymikFNbNYkRwLuiudeb7CbJcJDVJFqfnhGJoTPq6wNTnXgTtZGweauzrqrjR8fWczZ458ct7riciSpdAGxQ79KF",
  "key10": "5B3kygPtrirL3BbhAh6TgVN4xMA7cfSSC8EC2bjWcsgoj1K872hy6cmL7kRnuy9mTGZac5C2kEAYH4GBXLfh4hEt",
  "key11": "4ZTZUW2HgZc8gq3fhSa3NVea1V9Cyu9EumZJEt14U2kN3iYv3L9amqckMx3zUeAnYzVnLnfrLeYhkmTzZCT1biHc",
  "key12": "59XKEBb36ronGHFEVb8uqh1U7Fj9pJUYUJxFp2VYoyy5mRUFp2Qff7t9QeoKsXnhbVJmXATm81Tcebmg4oC1Eri5",
  "key13": "3FAAnYSBVk4PM48wC9K9tkipbcaxX7GMZjmNvXz71XftR7fTNEUsw2yt2PDn6bgZYyte4QH1srdyMR46vBMUFvLd",
  "key14": "3vu61AkmfYLNxqcdFSTrVeWGkpUfbepdKfBQiEG3B22ZVqzYbEBG2DqSXL1kxvdRYPnKkMw4vGM2DkBzwykf2MFd",
  "key15": "2y253sqshdysy6xojKy28stRUYW5t3wCHk9Vy9ye5emcfmaifPJsunxbhGHPn6nPH1vFaPPkCAkPkwCMtoWhQSGe",
  "key16": "43LyqnABvkFceueRtaLSdxqQj8oHVP8VzVQakB35JNnaTXhH86kksvA4pfb8hkrxLtdwZi3jsNpuwSGTf3gFGi9H",
  "key17": "64A9Wd2oiX3FNJyLxM1LjTqvn6KVjrRqNyZuE7LqwbqyT2WWRMPHaGAMohgNepHQexdhFGZPxhq7bEyFa2CyMCta",
  "key18": "3XsrjCFnnDijsm72dRAWcwwJ7LGWjPXibyTY3UVwhTsMaCMLvfbq9Ddsft8F5TrG8xGt9YTD7cej4eNKWrgS3bQQ",
  "key19": "Unngnaia7YtviV4iUBdpm9h5mFBUfFAHTuBvE1efTvays3shY7vuayNShKFoJWgg35pDGxTJpbC4EnKLdb1zNfz",
  "key20": "44Tomf68N1r6VqYF7M1qxp5uwsK262HWPJGYMhCQ5wSo1gqYqx19AwQca6Pa1zvvwm8fnV8z5TAmo2fsRGLmFSAv",
  "key21": "2y6yGojSAJLpbza3Yfxp8XM4MNTmAiTprKw5Zqr4kEyWtueSSN19urYJV4JDwW2EfsLK5bCc3FGDAaqJGwXCMKUV",
  "key22": "3H8gZWVyuYzwHssTG5NSwF72KXM8mnAo1b2jiwxfh8hd4UWPCdoByYKmrendfpWBz4i4ic3RULkCXnaQjmr3fogv",
  "key23": "2XtVjdLbhk93GEeH4BmZ4B55Gmnjr52znvrFoVXEvECPYiv3ctbo9MYbGnMxnffRJ3SN6uY8xknKUsyzUbFXTCw2",
  "key24": "Zx5jaLEdtnNHctnWcDmDs7RTpUsoS6WqnRcnze6VuUm75eKdr4AtvVfNTYqy2JE211Shd4vAXTQq2VNeUgQBYKB",
  "key25": "3MWXkUZt5ourXQ5z34fDqZe9QvT5KukF5j8c7RAa8dViKkpK4V3aqi81J9LtCtW9nTuJSGPuZXu46EqJ7MaYBDw",
  "key26": "4pcGxL1oQzYQBXB7kUhbry2zutbRGGywiBiUoREAeYsKuiy8rqYCs3YnoqWeN8Z8ox5e8mzwQPBXb4m73975siaC",
  "key27": "3ZADkf6RTZfJTSTsLQ2oziwPh8M8qhnW6Xdqa9Y3mB2TBynd6dnvkjM7yMfKcDTcdbAtzDaRhrPTUBxgY3hvns5Q",
  "key28": "2gJYdpQbFK2bqWpKzWsUuHY1it419foPttUjvkxhPMaMcDw6sFzkJxf2B1qS1kLNWCToBdGmsQHezZW3GEBvdWZ5",
  "key29": "3wmcofxzxWVvJgjh3jqFSJ2UhV1zUciz977kxxuwWcwL13CXrpCfLPBvF3c64CWyE9pRF4g6u6rH6cKak7qRtbHj",
  "key30": "3Zhp6SAvzT4xmBdLS1ZC5vBJbUsBejQJmaaumUov5uKHQErfSJSNrFj3ozRuyzUUfhjEFUSxo4t1Bmqhefkw7qDw",
  "key31": "259UXq57vDS3rDfP49dGvv2cSvhiY8r74xLc3ednXYgTr7XVKMsQPrHTX9ihTc8WDyBp5TDgy5AoR6hqLG2K9Qpi",
  "key32": "5pDmxdfSq52kTdoCpqPcH1FpDEnXjeJb3LmZzoKzee58eVtXWXsiS5KAqaHixzkv3JHdtNkgq5CEYvRc7GmVkRpZ",
  "key33": "2ibR9aHFGB1eDcDwy32XQUvZqQmamCyLtCo6J7divpQFYvnk7TXoUnN9sTV6rDyf5ynJoUAfEyV9XiKjpk6akrRy",
  "key34": "Ay55TaGcdvHkM9eQkifYoNRivLUCaPrgTJZvzLVtpLkUDiRGFAaNnNGHFqZN5QuUDuB4yhzYBTH6M34sv79hcUt",
  "key35": "5xmMEvWKP5tH4SKbEMGkfLZD2QEaTdtu1Msm7Rz99PW1kug2YbiXQ5tSfJqETbDfrjz6P7aX4Zr9DVDXSLECNcSq",
  "key36": "2sT4yjFDAmhzzGCbpZS5PMVGQ8jbFU81pSieqzrhtvoZw35uY1LnhCFj2oUyuV6B7fPWAn4GekQoq5LQoSL8Wb3B",
  "key37": "5BMK7KzqnetWrRq6gV5mBfjwxsGwLC9waPvYPBaRrvZtNjLSDU3Hdr67Y6ZPcnRE8aosdW1mSvfTge26psCALVNW",
  "key38": "4a7o8V24tzfdMqQtnuP5sw1C53H4KBXPRGWJXA48uEnGbtKUNw797SdV8hR8FuePUSAH4ozs3YiumA8kGmCF23H6",
  "key39": "5xZ3dBMpcYNNdbuErpRUXqqhAcDvsQZtPzWbV9af8cQqYEvzZV5kjRBSioAQsP5W9TWdCYkDoZX32nCMMLMMW7Rt",
  "key40": "9DWmTTojTNvZHhVd3WLteYiu78RUqVSKpJsoaCwXvnWUXgmWZoNz7FHTEpq56VFhYGfU1Wh56iepbLHLMEKroyv",
  "key41": "4FfHsNsNqbT411L8jTfGBVc4ny7WfCYZXk18cSr1HSaZJF7Ejy4fbWzDtnSC5tf4mrkj1hJ2rrva356ufh2mXJeS"
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
