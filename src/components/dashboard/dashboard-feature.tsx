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
    "5GUpcNe1mdv8EB7eJkG5DaN5hojxJVkE456NUgtBjNifhra9W21KcjvhA1mVC9yEkENb563viiq6LmAtQSsYUCNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sturvb99cK25WTK1jCkSAhStTHpX2iDzJ3gcF381QQF5G17A1ESb8EZFVLzgR6iJMAjzZTN2L3ydEh7D8uQTwVj",
  "key1": "4dP9G4hHbN5bBeCdEkbUJbgqRjrzS1tza8369GmZfYdVg8GF8pttpBjWotxTZSx9o2VHxrKkyjVZRpwT4yRaMQSk",
  "key2": "atvbMYjpV4MwYDkn4by4iaHncPn6A7BrYuLia5dfqfXs4UCf6umtCAEYmvVbrY2mcyhayYXdTwkGNs1ybQq9bqb",
  "key3": "4xx5h9NdbkYV6F59WNpRCqFn52a4NuVpxv4tZP4bKNRozEEC7QBRJbQUT3bDHqoZqMdsT18CpG6Z2Ai1sLYK7nAZ",
  "key4": "2LbuPdhfGBgRy3A4EpJenYSxVyrdBDjz6fkLtKwPRcB4Y6sb8vnQRdv3amMf8QmNRNn8qMc6FAKrzCQjjKdPaqi2",
  "key5": "2F6PT1yzZNCPMJ41rL6zmviwBdUaQjBPCkMTvhwLmXxzkh9DZbzzjptkZkx7g3ZtVABCvtzTgdmhtHXXtxsazxGn",
  "key6": "oUCwMYHnAXZU3yEPVPoYk1kj66W5znMLJ5nJ5bnGyK5ee7RdkpqN1XfDDjxYmxifByRYvMjMow84QgesAg22umH",
  "key7": "4z8sqxi4d6whPVawVe3v3xVo8Kmap2Bx4U6A8xjFxhEmSmP1d9DmVJWbvcBCKBbVahX6YTKDsoBSkd5ncUNVCngi",
  "key8": "7Jh2pnFPxQJ2x8whnSBhhkVPzBZf5XZemf9ZqPz3NQ9aeo2GvbXquDLTqRK5fi134RaPTiEbKHn1yh1CYsDp57T",
  "key9": "3QcitrcAAESzeRaPJwyKZ9eNooCssuBtzAteiHgzR3Hzzo37ruJWgcXbBumK6MGqf4NpmWuT8DQXRfQESN9TwRNc",
  "key10": "2zhgVDmU4n4eRngeW1AWXvP2SHvBGo48Ym7Fqa5sWasw7ogdJ3uu2DiPzZp9qJ5E7o7Be6xGa5jcvNEZNQc6snrW",
  "key11": "62r1ULbkAfX3rRfwJtADJQ7eEZA9Q76FnDuwXjeMyYc7jBKMfukGEkgFcfadSFz8ujHvThKEJesH2asbtCmmh4BV",
  "key12": "64UHCcbKCZ1624BQdweCUgDyiQk7E1j6VUsvdX6H2KNxdPVhKxquQNk7RDNQJxFPKNMDDN2WC23qwfnhrWdfjygD",
  "key13": "52RMkKz1TPvd3D4t8RmAJpcxEfQz4hCNxU9dk82p8NmwDDnBLsQX7k7T4CTpZNKTNWmzT4JeVwnNGrzhD1USnTMj",
  "key14": "2JQ8mEnGBdKkQnuQEWj9VCSSvqMTVwEQKDPnq1uHWy2azsLvC1vvNHSpybukA6ApffMY1TU5Pk4TFPcfgBNTYd6P",
  "key15": "4PiCeh6GCJj1fmwMCZw8XgodJpsPB4bBAhCPttr5SM8gNzVFjcGDyyCKcmM1qJeQyAco9kVopssAnL7FjohmmiQ7",
  "key16": "4Suj4dmP8fscRKbyqTX4usaHXhDfsRVUpvfW7pP81GXQRfiubeVw1c2AMytWaqFQG8ZLQ5h5t2dwrzJp4yP7BYfy",
  "key17": "3VpQXRnKHDSjmsLpFBQvWi5ZfvpdV6YjuVEMA5jsJiyu1uJAZ4gZ4SURurxFTvTWPT7PG7ydyFPavq6WxqsZxxLk",
  "key18": "3KPXEEtyAxGzEpMPKU1YT2QqaQptRnjU2ivTKV8A96htEDJHskvMTgvyXQBRo4Gcp7WymiXGgccXLUgWy1x1AnYU",
  "key19": "2Zrfx1AKRXMhigaKsF58XidugLbdrWNzfXzBgTWnb1YuWcTDM7dubvcXmut2HFSkNQahLjeQ2dUZd1TA99GjTjoJ",
  "key20": "57w4YuPquXRCmJxkKrZjmXWLDekwN36opiFpmEj33ebGjhgV4V2FA7RY6CF962f2FK8zDfLheso3RhxEWSgTZTi7",
  "key21": "5A4MTzZ6hyv5Rh4PS83AXVvUg5UD3sTg474dTwyn8f28bssZPA3Lhq9wGtupyMUwv5CKMuswPMKN5TkF975ASYMy",
  "key22": "63SkC8Fi3Bwz3dt9aXzLackRQzibLQ6f1hi7cWL49t3D6UGT77vLYYsGEKqTf9kFq4BoD7BefkpimtR8j1NzBHFC",
  "key23": "3ZpzfF7BBAgxWdsVkAaQVkiPvfXjAABEXR5VRx3LcqJ21Wf7r3jDRfPLiow4jTkokxDuPx7hr75iCdSrWaGBCyDb",
  "key24": "4jZ8WZzqdn8Hgf4aLGLT4PxAXsbVJyPayMco7hD79d56J3ZUPKqvbrVs6hNTGw9T2zoYfZsDceLketByySTRXfxJ",
  "key25": "28mxWqWKHeDq5LPpdsh5nQysbxXc7JHcRjZKZ2jJe5MpPJPpRsaSaMSJB2UcbH9WRF7mTawtWm1JiepZgGPRCmvL",
  "key26": "5yghfZeWMMi47EqFwQvqPHETfaXEX8AAdBePF3oestUK8RrGMieZvD4AvGg5EbUbJ9CfVfxyH9ANatNuAH5MHFZR",
  "key27": "5fThnojJjqputTJjuSAGCsCzQkYmgAXaRs8pi9FmPh7AJSsHdDH18nd4Jf53jQDkbkzLnkmFX3jcHNXteBDw1Edn",
  "key28": "5ZbCBcbD2EbYGHpfiBcHhhrBbPpvFsvFPsZDmeQM54HVX6NsSgjwPS7NPVBQVU66pqMu3mPwFAyGxnajd8s6VZM3",
  "key29": "4NgoHvyH1jJmX3ieqg3gzUvKuPAC8EL13N7a3a9W2SjzZnqqA9gxJuzmmNQVFLnrC26gYrxkjwwA8GqM4xLz5mw6",
  "key30": "3tZ7gQzZe1GreV3wfmiYyMeveb79UFy9K8Sdt6v7UzAaCR7G1FGBpwbzGmYusBX8s8cPKZ8W2moNjGQvqEVC4VBg",
  "key31": "TLhU1stJiXq8us7iLwpuDcLMM8jCQFFfPbGVg7QhduAzQokVq1fSCP9VrqChELZEDT54eZSJWdiFZRBnXnqLRoY",
  "key32": "2ZEBrxjzGjCov5jPS83rREnaHYjzbSmt9ubenqzFW7MSW5GUoqjwLMqhsxNgc5c236tsLJoLPvHDT2xrzqFb4eM2"
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
