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
    "2Fj62XEiA5Hrv5caxPCBDvHuhwvhTFuwh1XzSKpRVqAwZETDFh45FcZnHb3748fgNuS3D7WHAJczEhB5Euq5NyDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwnxeA7vyCJfWH3CEgsLkwuwgGy29WbMNJxGNqYE6rLiDkSM3ndzseqGgaCVkF4ffCLhNi2ZtuJqGeCEyaknZpR",
  "key1": "63PH5Up9UTtoen1W3Qtx4PQqHixDmqxRHTRRywFPvLCtKcXzcwK9hp3zqrwNtWq7WuAdoXkVTqaCLYoKhtGpnYkJ",
  "key2": "2ot8tBRQeyD8fvBYrbKj4ydro8zXYN5a39KFGM1Q1PdRGe5H9f3d8djfcHm6XSkhRMmAA6jZH1dRmtLwUFXiEMfw",
  "key3": "39p5HrxSbd55dmxoPZtMyN63LRAdwznjFkmh64hZ12wtAWNhNazjnErfsy31FqA7szwhdDHFjZwn6usoxjWHVgXu",
  "key4": "2r4EV6WBYqBF2Z21HU9GopuYzxtwQxHxiKqBn3fD4qbQqh3CiJPyZtLTsaR3mVX48gEXgP5kRtWkEEDU4KFGEssE",
  "key5": "3qwTYV3f6dGRKkMbeE5BZZHTCPEuwXfzY2xzNq3hCKgj9ECD7CEkn5wZcetdSwKByna93ibPUysWmAHP8X84Vb4t",
  "key6": "4WWcgTPswWeuT5p5UgrTVYM5WSRUY6Uf7Mwg3vThwh6mT4fUcWeeubVyH3W86FGHQijdvFNc35VoWxReRz7t9kH8",
  "key7": "62D9fHpXaGPpoReAP8ZpYbpgqAASK8otVc5UnKfyj7zbirAqWbrPw3ZYYocDGKW1sp8QDiHFUL7xfEcWaZw95fi7",
  "key8": "3i8myqUdu1Rwzoa1qyr6LzZ9T3JGGTNSyehtAwAE4pT5haP8pYGGe1trkszvoWQkWiDCn2SWicZq76qA7hKAALDZ",
  "key9": "5KfgppDuNUgcG2L8D4pvp5ywjqbrHtRtfMSQRZjTTQwJPbYy1JmSX4LA2M9BdKgZEi192xPmBb36Z33n9XwxyBeB",
  "key10": "HG74GrHfFDiU2GXw154HvUsFNBGHkuUR8BJuqrjKsohfzCeEJ2n76eqy1ETeaak7nMf9AEpHCeakRxc3N5sgAgW",
  "key11": "2EhsqHz6QxHMvPFUtG8Mw91K4B8Ad8BRxnJzRPeh8wuWSjrrswo811svqb1bFDmcmKcu2f8cJCAqYNLu8gN3PUYA",
  "key12": "4dQ4po86bmHNpmSuBZX9BtPDqxABRJL7S6ZTrJ8xapBoxGymuhr74qTGtNfZtH3mgtD53SiMkSj65AxWC72a4Rtp",
  "key13": "2S6Yyeh1cKKDp7WM5TqNyPL3kvoQNpkG3vnXFiqTpS8voh4gSKfVK2EGxhc39qCy6iE34Y6CKbcnLyjPLjqSWHyz",
  "key14": "5uy1UygRfZzgSqwJvP6Xb6VABjcgNkdf3VrRf8CRe1qgcwGXS74SxfHW3PLVNeFA7SzxctRKSXgFF7sHU26ZeBsx",
  "key15": "5uruQ4SS6Rs6jfuf3m8diyCDJmZEVjinBWLoUbG7p7DeMwWUxfkLQ4a4Gue73BKrXjKkZiPeBMtchnQ7H8HZHytB",
  "key16": "Eqx6bBYWEHdeDTcT8Xjgv7UWtAbZTYwtRohirQBQff8VnmsoDHovHBvrrEpaefAcK8etNUQaNKLm6puEuE9HbHp",
  "key17": "4YqucpMF3MZ9cHPqueByBZT86JuvND56Y27BZ8YTNuZJ76owx3QC4Rt37yivdTKbndPD9TKNm7t7eU1xJDjeLQJm",
  "key18": "4tBUTbdsfSTMaLZYMcwCZmheyVuvpfhijJJvYPvJsZH4d5qujBnUTr8zSXPL6zEwCH1RAQJw6i3jbHjrKMyAw6wi",
  "key19": "5W6ERYwPuD49XPHg1G1aTeY7M28fJV8QEuwVeNKSf8fZCrRt7pHbkextbwMANWZizrN9oLQfNxsuj9WPrDXmMoH9",
  "key20": "5rZXpGvaCvP5jTpHxDsHSDwBJbWELNrXQxfyPZB3bvsMinjCyQuYx7pGFtkZzZ7mgT2PTzEKwkMzPGXciTbyNbLZ",
  "key21": "3TtVGNv3d3q57QdCT32k6W6EWshVZjLo49LMUrHviEGkgypBZfmfFCrmspVtQBEgVTwrUCorjkvUpmPNB7tQB9JY",
  "key22": "5YqnsXi251agua5eSiwyg1kFzjxyJH3jdYjYgaDfEny2izdCrjdf7qjfqyN6HTZdy3cHaoWuuqV3SspPEKAK7DpR",
  "key23": "5ig8e6CzPPD9Da5Q9j5R6Fz3ouSwSkEo9yyS7Bq7ydZV8NQQyb4eQXqQ5qcYP6DbNxkvPYwbpsB12t7Vo9icrxqS",
  "key24": "42DUHdL4SxDMrgmAUj18yU9URXMqw7hzSGGAbcKbYFJPrp8rD97zZusEiE2MbPubpRsA9oAZiczu6ERqjLVgM9UF",
  "key25": "3xuY1oJoQAaYxmMNCCKLV5C4DgvYvH8ygCBVxUnsLWz8CYE5EQXWZXT6axNffGZDDtRF25P6wam5FFR5f8Y7LStJ",
  "key26": "53g7oEgW4MtMbdg1semGUtDmWMvghGudF2UDBCC78dzwbbRpnoyYP48shKNGb8kXBztJvQcMhDoCGi3BJkg1Dud1",
  "key27": "3XjPjnP17zoWS3aAMGwENXofobKAzD5KtEnZ6buNbYXUCVC9hHjafyTrUDE6f26Y68VmxExPcTmgtxQGPWphq2L5",
  "key28": "3g75B5vKoimYbKpNjNTi49ZMhH8akMCyyg28iRPRdGHE4XMKEqnpvUyrVdV7GAnBjXjwztdwDdG63F3SzvEc6XK7",
  "key29": "5AJhWPuSxs5mM7dryq4JyVSRTqEG2pcDTb1u54u3FQEpXJZETzAQ77DoHS4ZdVS5VjraTHdTUkVZWHP2qGcH6241",
  "key30": "4yrvYpdoy9kaV8rxqwqMZGHoqQM8JSNVvjS9WQpHrbcJ6jLuHxxYvCThLZGcwJ7yF9oAfwum4fu4VLGP5CUDvQr1",
  "key31": "5YNsSrWbff7Ux3ei5Dz2mQJG1XXs1jBxmZRTwfikr5NAGubmxpoxkcjPNEozxDnWBC44zD9AtRENDNDtfwbEhtBV",
  "key32": "3tqDUuzcD5THbXwjHxzyGFRUmzaa22Kqhv8nHo6cW8PyWteYvJx2ozWTzxWLhuAyJsghpwbSvvC7VTsRC6XZv367",
  "key33": "3jXxbKKt8Fj83WnbwR4osK5jkQ9PjtiSfjtLi684kjpNPQqEf3N5xtpiF7Dxq9xkLvBuqyRnqni8Ri4mfByYVra2",
  "key34": "zhZn1MbS8BYPZHsuGpgXeoisgNQR9FENpyEvbTKvDhJxMjKThyYvVbNRATpfGfxGc7DaCN8NsyoSkAsmvB3ynZM",
  "key35": "2sRrGTykZCu8DaoD1qYmP7Qzg1TmVhncpMq3ovS4spA7zjvxGLKmyoqq2yL8bqS9hrGphwBPjdRTeQpac31Yzzxu",
  "key36": "2nP3Wvqu9PavaXHCmD83cWHsBN8rQveaVavWq3Y2zsKKxSVeU3rfz6PxhschJwbfcNUVytBwcR3Ak3249skQ5sNv",
  "key37": "2YYybE6zGZoqz5rGiPwUwFcwtxFctZ8sy3hGeSvAg7JUGVjYuLEHQ3spxy4mR963VHS8W49ZUYTpL2qGbrZR4GTg",
  "key38": "4bXeELVdh2fdK9b6bVRyL6koZbikJk5wg53WS9DRt8PkC3VYXP4ZMMAorBQssJNtLjnbypMxL9YVDnpKKRQFjcpi",
  "key39": "pkbz3bHhHKQ1DBKj85YyA1GYx52p8GHZXrKssMSyPKUMBETd4dYmBfQRjawDbudSFpeDHacBZkH51quL8stNWDi",
  "key40": "3mjMqekLjjnZrynFqSU1b1cSrmVPWznwGtMhf8RNznade6ZcgDxJNdETjrjV3PC26yDEKJb28f5SERLq2RiMnCwZ",
  "key41": "3Qwa2dsNDqMkGPnBYNfjJwC42Ss1ChiN3c5GjrxFPzAju1sPNu1d56uhBxDj7AGNHKPtR3mCdEPuc3XqyY2AjKT4",
  "key42": "5fSarPSEWpT2gwz9XhyAfF5TokniqEutMxahTtmAAUfm6ytwHSLRLLSp3MuzeVreDJtiM4qwesVfohDDqN31UjPc",
  "key43": "28A5Pzma5cmAK2xqkz6QtPFeTswmRhXyYWZg7gB1pTEDGkE5swEWuALYRStfxVJD4Pf1HKJRBznjQTrAAanjG7Vc",
  "key44": "3Tf482p3XXnSJEPRpT75skKWQcgELuayjHgw5rctbAYr8wtaxJ3EBCGjpct2nnXkT54TadzWuefhMqdfy2PUMcrB",
  "key45": "5qqEjcJq8UFAj2x7tfS44cyJKQoT5dg9zTyZemM6buaWe7M2fFN7JMMNqDsSH3GDabz1ATcMk8VCYks755EPdFCQ"
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
