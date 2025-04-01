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
    "5qcYkXK6RhFBAcKNfC62HrbHFnSYbywG5GyVAqX8CJxb2MRWmHfYuhnqXYnTpDY8c3t24cA9memLtTdUqnea8Hvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z6EmkSZumU2rFsfuW3Qj1J9kkHC9W35seqDP5sYsHQgRamQ7UE2y4kd32zwUGfLuc9reXtiAG8CcUASV1SE2VH1",
  "key1": "5ELahJsstG6eBHQhq6UBFQw2HMK1JQgQcYJ6Y2NSdw4SWsWEDMBYYRLK1QzB8Md7GSHP1akD3TdeAmZUFy7qRhVT",
  "key2": "4bS4392iSV4Pfh449Z1WGUKsneQ5EVvnj8KcZqzPAMMRtVJbj7QEwMVRZpbHo2B2znBzHqobLsvmn729vpzjCpgM",
  "key3": "5zkVkzRF9VricdsMVWsa1w1NRG35TkdJDU1jzTvwf5ExChiyFroh5ruRwDMy9bGuYW4MNaAifPga7UGYboTUq4Cb",
  "key4": "xpYiCiEYTT4gWbNV2GMFrCZeU3DUqwVei4WSKskh4x1wbbT14kAKD2j1uhW1YmpfDCvMBicd2kJpbVacLVyXhEN",
  "key5": "58BFK7cxRy1HUL4P9ZA8BtjExjRQiLRHC8s2Zm2JGMdBcN9n8C566jZADBha1U4a6MrUbzrgLtt8Hc1Kx1fhRBe1",
  "key6": "5qF3UchoWiYXMpu8WPEEhFR3m5roCAGux9pFKqWzaJy7GJqoh3szKvGD3MBWVdx715VnNcSfdcmMHWTEtV2dM21e",
  "key7": "664nJRsoJ9UokPVJrwJjnT6nDg7b8oKUYdHzN29MELSsXPoiVRYG2Cq9Uar9BGsbCnAH85pxJkpWgqmEjdYcsNT5",
  "key8": "2Q4UnM3MdyXP2BQtDY6azv8cnF4mwbeVXyKz5nL7t8TC9gPxTWy1MZ8BQRkAMW64q9Uf8zYMnyPqeDcaLLWaE4Qs",
  "key9": "Cxrm6v9euVjcDvVLZtHf54p6QnchbAwe15cBTT5YuRPHsSBr4ut99iPPVFPfHGgnMcDoAph3zYmn7YzEqyqPWjv",
  "key10": "2S4g3QfbrMvAKWL8ST7uGAPtUnC9X9jWZdaAGvQhCbuqT9Re143JVTogkKWEVkkZwhNWuwfH3VC3yv7FeyYYPfCj",
  "key11": "4nyJX8RoYMTeByPRN81GWiB8BvxZ2C7kXzgQdhvz2ST6nRDynYjSwzZqQvumjghc3YuwGqa2AK1N5i9LLkqYq9Yf",
  "key12": "2yAvTib2jqHKdcJ2u9uf3uiqWFhMdKtucE11x5obHj3k8Kqxb3cB4oUiT7ZCSdkQUijTjwBCbCfBGPmVY3f1wyzM",
  "key13": "62eKx9QMX7NGNsrZ97cHpF4kSw6rfXmWijvVgD8we5ppNj8Hew3VggWAGZC7hc7grY3GPWV9pQiSdLjKCJwqAxRv",
  "key14": "5VqdBrJeGjYEWdZbeMDXRe3MGtpParD7YkKNgESaLUdEEJ3BjWGkiNSkq9Wkq2fCmvEaFSPTx53pf2oivrYMq9EG",
  "key15": "4k3PHog6nC7qxxLE6oNzkNbXNVPgW1nP66pyBsFQZyK3CrRoapkn7UZEZt74KixGYSBzejX197Yz9PVRLu3cyiQp",
  "key16": "29KAFF949JR5SKTh7nX3CJzxEqE9whaakppZFxbcXakcqejFxy74eyEoDv2ZJTExY7GnirajZ56cYum9H414zxUv",
  "key17": "64MiYezF9ZJKqMFKw9nypWQYiknyUJ3eNxU4h6Trr7QgitqPySVm1hSghNmesz4EfVxfy3MUCkHJD48c6PVN2xLS",
  "key18": "4kpt67NaCuJ3jeZFPJ1ChS8ryfMByfLKQiDNYQnBiViKg3a1HA41imXAFsBhtp391YWrfexwJeHyCJzwceRERx9Q",
  "key19": "2K5hJAMfcyqJD4xnm3p1egCmM3DAFAZVuFm76aehkc9hqophNoJJA8v9BHrbVc7khEof5CMX6SRb5PoHre1kYCrh",
  "key20": "5NUVkhoRRWJczyGWQUiw23457Fju6dfJEGbB1V5e3xP8XJbbiE2cLaFbkGV8gBWwEQmWcEuJapLKekg8f1Tf5LbR",
  "key21": "3GTAaF7HFTq2PgQmSoD87kSV9tS1AjAM4eLGotLWtRBQ48aEGv5Zy5FcFRB2AQ4KWRncfnzj829Y81QLwGE1PQtL",
  "key22": "2PhqqZohFLrZE3ZBegPtgk5CwHRtABgdLhGFc9rNzis75VMugM3v3uiZB5zyuAcUjcvWJ1y368tjXvsszrqC5JnG",
  "key23": "45MR1t41Bmetc9angqd123kN2v3GUuqG3EGG2Kbv4Gup225Cu4WKRfDtJkaDXYxD8EZ6WNXuE8p1B3Jrt4cVFrtC",
  "key24": "ubFSXm2zksAvRzCyfDHR8KwshwUHSTdkbhjCeC3tMddCrUTKQyCrtb8UB2wPZSb6KVRB8rDhPbb157abm8WwXm6",
  "key25": "28VPTnhMR8PBydEZNZb2YMYSN2GuccFKx2Gynpi4Fzm6CrQRenczTrQsrdKAY9Y23dKSFRTP7TFhFNLKwxm7NPe1",
  "key26": "3pdFjNGjdsRDKq7Em98gdHT53unXmpKu8gHDYHdmdZZLaz8qvwPMWo9qmmSKyZNEBqpynsYAQrUrwffNUvEEUxEA",
  "key27": "66CjFhDMa3Af9D1VW7152PLpbznhnz348fxWSk7LzjSXH28xDvRHq17dnvjbHeDQbwaU3MjkYwhECMgmojdFXM24",
  "key28": "41cPA4zwUURgfWvKXRLtsm2AgBNks1A5SJRRYLoBcqDe9dHHzvpNUqn4jWQGhMkgrZxnkmMxQXHupEAYK21nkxK5",
  "key29": "5g9DGjYxte76VhBHiQP4zRsZaBTDUWDCSnGoMTharxXkqhYwWgcTubYPmGhe4gwEEef9B4LBPsZ3eYyr8WfW7Csv",
  "key30": "3uQEgW9wZEjHi6Z3x1BMcN6t2qcon1ToUgx9BBfPoenEV9w72QCdCNgBeoUTMRujnQPmUT1GfiX4M4UvioUC6yQF",
  "key31": "2F8rSe4Fzpt3wZvqsriaKUBq9j3fQywEtQHjCikg3ikQa2QX5n29gnAZLs7ThruWzGLUECkdSdjPGY8aPhMH6V9Z",
  "key32": "y4tVN8QvpnQskYstXzz6XezUMCqThpPeaJTvJS5RMueMxvmEwQFZupZm8pzuLQUKVgucGBDtR66rUjXU2gh4E5A",
  "key33": "43aCW23EAqZgWprtXCALgKRg5TwDcomRQEjQu52eZDRrUbWpUG9UACJw7AUW4P6FSwkG4WyMDbvQRB34bvAbiVPw",
  "key34": "pCmomcPo4ascpUDC1GJ8EcE612xWzMAKL7mSUA6jr5rnCZX2N1jRQpfnsorQVNAaK49ckMPHm7yBA9vKX3ZaTq3",
  "key35": "5LHkQjjM3pyW72zUmGymunN9TnM3mnuKxz6tvvwR555DoGr62hwHpZw24d1pgyN6bdwrvn3A5MdBMUdKUc3SfNAi"
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
