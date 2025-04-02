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
    "3sGps4UEShZs5SuR58LdWYMYw9QM8BM36oaQnbnQCgHW1Bo9x7Yc1LmMYSXwqwrBz6kbwRU7CVEhCVzNxMBBukTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fwvrLcKNWNrRCcESwLXdD9n522xPMPSZm3z21ZyJm2TVE2ntA1ZpcRgDchGfgcGGBnw8bwTF5ACxz9XwJh4MJQD",
  "key1": "vg4DkLbdUoPMpdqKsHDsEyDGQmSqBeFw3vLkpYbvbZZHh2FcVTHWnw9Q5XpMg6Tn6amkD3FyepdqaSyKoaFtgjb",
  "key2": "3qz6PLScetLniXurXjPW7neAUH7TeE242MmriwCfGfia7DGpW74pXhHM5ifbMbMsPQBZrMG1ec3WdDgRux2cmrgJ",
  "key3": "otAAoJxsdhmVV4TCogEfaB8ZUL7MFnDeUtsdt1h9rNQoqGzFYyZ4NDwNjLg1gC5Gb12LjC6PErdvULYUMZFcCAC",
  "key4": "5dMAEM52iwcXRvnZdwZu8pbWa2BqK19vVF2rhoKD9tbqySiNHD3h8Y2xVtM45ubX1vngB3DDV55qZJ7gB91Zxw7p",
  "key5": "4Tg48jiBc2ugdWMSshrFmBJGUqdjhwYMVNiCoj6f73M7N3dv3UZ9qFC1t7ohEd33q5gJvg7DnLaC6VbDiu6fuKiS",
  "key6": "3Swy3FbB1teCjBV8dYdjmvzBNRSSPvj8TAHdVkrEjLsEfQ942E6DJuL2yCqArVKrfdHJimD4cZq9rH1kEQ7TFUVx",
  "key7": "2jon5MC88mTpDw38YU3fAyHbwvs8VjJDgrMToNdjzkuwZpF88pumLwhNQzP7VJ7yyJYq9MGXVDXkX7QwekLYEh1s",
  "key8": "36WacKUvfyHv7K4Z7gTajV869DoyvP4e1C2rEskW1gLTtuW7NidGHacgGiGXQpjtVKot7kBNwojjwN8X7MyJeQZW",
  "key9": "2QKWPLtpudivsezM39kNGihnZecmmrYAxicE6MQeNS7hYtDVk9ZvndKZRKfnRCM5wm1EEUrWkdHmzvm5R9vazqhG",
  "key10": "4MZR4qyFoSdj8mALjXK5m61nm6dvofok9D8PGwnBRzKtRbjpiKvKW2hthQaNNrhfoiYF7G7tGfRkKkW2E5PE4y3u",
  "key11": "wUNYM653hG3QJkBzDncepeR3svmDQQvMoViaPjXQifxKgKuviJYnhYdT8dcCXrUsrDec2srKprnXUXRoiLneJa9",
  "key12": "61AtcQfGdaimCJf7Ego4JoYLA5pZQwTzqVkihoxX89jaeGAxqS7JuuDHqePjWEqSfdc4bHKf8FqMktHs1WztZNZg",
  "key13": "5wZnHVXLBQwTwNUgrrvuxYpgfVj6jN3vxa7ZyYDKJLXVWbVTBj2yVFwVgAwvkKhiEki3YPBao5ifKYZd8YrWqsAr",
  "key14": "4SNEronfrF4ig3qZ8GwDdn9XB6RdGFi4nVQNCzt1eow531b2fYPSGuLB1uxLYJBvmuUpkz6vppRK2QHqD4oUC1m1",
  "key15": "5aQ4uvk79wnTt44cuALgTuHZHuhD7pDAeWzFnmjmBUypDEGdxZ2gHwuRzMu1Ue21Dp8vC7FbBge2h7rhL9XSbaH5",
  "key16": "TXBq6VXoY1Sjyzk4U9YKoGBDxD9Lx4qdHs9kaNznhMSyxtHyharWtaQvbSFTpkDbA7Rr3NaDEVCrVARWQ4b3eDK",
  "key17": "jXMyK421BRFvYxvDQwkWpR1gJTXhwcK3gq8adMsNpZMnDp77PfQdCM272qTiA6GwqBrbgNdGyP7vraWeT6wFCwV",
  "key18": "nPqYQ6hQEaf1yNUNaYHUToFF5TrxuXPdV6xjmuTYz1iYGR4dwehi4smmaPGUG2LpsNb1HfVXtECKPuq3eF5BYen",
  "key19": "5N3sFAGs3MqXJmJnkbdit7jHYWroba9ke9qptZLRr1icEfJ4JBHSPeDnEv183wViyFKWrk4bJ7cqcvbj5MYUNxp5",
  "key20": "51HTp7VDxuuYnBoE9nkYddSBHN6EP2VA7AkMLNAPfuLU4NN4ccepcZgJTBgCpx6dBdh6xAso4TAm3CuDcLYykJyb",
  "key21": "4DkdAA23LRmMjZwH72JH39aFreUx9jBgyNzEhkafu9ceutahzQraZgAwjjJJj4BNYQ6p8vs4eCV3CMVbGs2Yaqc8",
  "key22": "5s3HvuCXtZt33t5HAHAzBV7344gMbkYjM2kpss47dAS4qRBEM19tRk8iYnRjvRc53mftWPj1Z6NX2GCss2fWRB1n",
  "key23": "2AGuDv8G1UJ1Sx2ojyzpKrHRn3p3mi2rDFKLk26XpNtvAPJdygNUWTPd4ZZoZT6JW5sAc9Hw2mb9BkaaWhzCvBwB",
  "key24": "5vvVmwGhhNuMEn58waVrzZudVmc5JVrwaJ9hDo5G7GsstdedkWpEJ4QkoA7XrT8aqTjm5TtJqKANNnbKMwYdb5qX",
  "key25": "76d7KPduZJDEoPkSpKntuE2eqkwyBE44PNCaWc9K7kQxKfh1oznYbxb1YGx9EciAt9sYNvNRYs8EwuQ863gqc2w",
  "key26": "trhWkpcS9uVN4e8cwhL45c8pT88VQnFFQUSHn64Ann85Fc3a5arUZMvDBkuQHTxoW41vwACYxMq8rSAHqXCFPoU",
  "key27": "3sYQ2uZkkUsSs4ViEwXJVPRhu9sg59Y5cptKXZqAqFkngGjTdPpxWgWKFbfJQoE8Sn1xNvZmftJtmJyCVaVaWQXm",
  "key28": "3i99wLT8UHud3JTBf18dUwTteetfytFdwrJfyrEpeibQUa9iLx1ncUjSUaCSAxzyX94jJchFRGwS5B9YXJtkUdaL",
  "key29": "42sgU3BSVqWFSzQ68Cc1wjKFQSevD2FWUGJpoTsys4B3t8TuvcpqhH9UZw1TtKUfp9Gx4ds4hg9iJpMmfzi4Fz9u",
  "key30": "4TdqxwaYcA2Tgxshg3aJi7NMfRBtfZtiHoBQb16aL8kiwJzuUmHPEXHbRByXT2t515ugekJUgngXE642sPXLAUCf",
  "key31": "3HCEynVYwoZ8Upfup4c7BMNUHaeuUiW7YBKADTBF4bhgHr77BT9gpKo452jCAW1Qao17o5YhEYuwvLTAeR2YNKhQ",
  "key32": "4pPyycNuNePqTAzfApcA1iLmrVzaDzZFXeW3SNTvWrdvCfRftUpJSWHMFjfZj4WME3Ut5rortPpJbHnG6DbYmvJ4",
  "key33": "4GLicLUwynCnKm3FFN2fNkGAUUk29mqbkVKwD7GgaqjFhducJz7BFvSbXNcPyA8LN1PTyZpyvqug2r1vAXk78onB",
  "key34": "3kcByMjnehmAuXgJ68KkEJgi1mKQQUnbTGTucJ1GcEsV9kgt7QG63VfPYdzWf1WL4AmvDSMEbD6PKnkiSzH6XPTn",
  "key35": "62RsLPvZT2UzDSbLDRmtQrAd1eucETGd4hAyX2oANFJMx2sC7R1z9ywMyo2GzNaJKfu4FrQQPKEJiHVhHtWCQDAx",
  "key36": "2xVvw4ZYqJhTMcWZ2sXg2K9GHeE9d2HzB1ueM8LYJqWJ25SG2TaMGUiJvpsRVhacEafyL6m5LnoFDTTGfsymFFFP",
  "key37": "4mjRAzG6gRRz2JsJJtGhirYwvT79vc5RSJwDgm7Tv825xPbJV4ZEpWVwbV5yDZUyVeShNJUH6JUnd9PXgrZ5TSUJ",
  "key38": "4Nw5Xnr2WqTRM7bTkZxc6VfhnDwWTVMHdJQ6n21PA5k5aoJgPMR3pKnhAbW5jEKPNSU9WShZEYR1jCS4MvWeGCzF",
  "key39": "3Dbb49WuDSFjFxe8QvtFqddwqcAdG455hHk2t8cDj2YrhziA3QPc38MRTCEhcjKnCvdZbTUAE28tX6Z61yKtoN6Q",
  "key40": "53D1G7kMYRP5VWLFYgCXLXaSvVrXGxrFhtAB3iZXgwc3ckzJb7pZ2QK8vXNHvz81PNGeAtsCsLW9QKjRcCZ8JVh8",
  "key41": "64eRL8ardpThyFHxKezVMvs6DuCeXE6u5YdfWX9vzTUhnjeT86bbgyWzfJ1NyRSPnrCM5wobJk7LRivWCXvjUx5p"
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
