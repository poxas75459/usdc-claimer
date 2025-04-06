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
    "yxT7MVtrUBkgNEKRFoSMH34KeaKrMZjKgwCb4kYyhA3ZSJz8rKeq1MpghK71qyuwPYyH8bRpkpxsNvv5W75BgaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KXNe2iUtoaGcqWwk196vw7FtsNTWduikEWxuPbjGv8ZeKWju9uPFv633uUdZoeyu7sMM6SiX8FrrQ8aAh7Ngi4Q",
  "key1": "4d42hFeCbqjBfg7V13tpa48J521LrQdzthaPVnhtZgmFfUN1wYh6JrZa6oCRGwZGU2LvgwuvhY757LMp6vVpBiBS",
  "key2": "4VEdpCvurFhFjypTVZAXaxBXR1uezKCTNYyLYk6SYn5kQKkpYy1am1UG6wTG48WtGG727Qiks1nJ4wwAMBcKkVKM",
  "key3": "4Yzd9nNc14CXf2hEvRH2bqQH6B6MPc4D8sCT4X5tWwPXz8eYG4toELfTw89tMGh8EcqRN9a7GWDgCBgAG4eE14kQ",
  "key4": "53X15UK1DAwFbmsstzVjEWnUU51reoRpmbXvNdVBk5eCaPREN1MMeHMZFu8yEw3dFy2TsmuXjF1PzpeiKq3AugDe",
  "key5": "2c7mnTD1PmFfNyCypfCN2coji9bNb8AkQFEqQfPnorHKmxLW81cN7Di6eUxRkQXDwxGQkUDrkgWL8rvXaXEzuPzp",
  "key6": "4ARtwhRJYNs2ZzhK7uFn47tBprDGFyCTZtfNwNPTEPWt6LrtrkjNMpGs51nGvbnCrwtYxHZjY4xeQYB6Z3pzfCPv",
  "key7": "2ahinXGxhLEgR7Zz6ePD94sYY7pTt1CpzMQJbQuQpKt6xCqKHE2WGTKeu4BzZwofZX6dgZkBYsD5jxM9MjZoA9A9",
  "key8": "5pj8VkFefwqsD1efNgqDjmktpzEKw4J7uPQSpwN2BnScz3GTfT4Pfhqod9qRH23DCL4K5gzjyzSxkDdLnVR2QhH",
  "key9": "56ahcyXkAmTEnsMYk7o1HfrezTrsGWHpBZ4vwqyRHzoL8d2unvDqYfdxwoYWXpVpFVV42bV43vsGhGKjwZ7wKsVe",
  "key10": "5H64HQvfFwCZknVLnv2WL9zDxwcSRSxxZbDxxrWZbJiuh769iUcBjsaFAQ611HiYYN5Vw1gU8hUtN2k9CPvqmC7w",
  "key11": "4SjBwrcTiQUWJ25MgaysPhKSrw8fGPG7KL7Wx6RYv2ooMvhUNQYkcZueQ2SeD4HXPxchwo6s3bA2gTxYUa9UeQ9F",
  "key12": "5ceTQe9WcU4FC3PGbmmruTw2KspwfvpSU3Gco5N39htnm43PCKneBuAC82G2qGRMDEKSbXBqxZQVz6a3S2ovqFQr",
  "key13": "VPP2yV3eVVmzEAkc7H9YfuWWmXP9D85C1hUy5FvxZuxAAJxV99UqVWnbtLH8ehXU4p3smAjpgRU5iLArxtZXwAT",
  "key14": "34D5jKbTGgtksNuFpDNsexxz45MT4HDr9DMa7PBPfWZ6mmjUQZwFVWxFaJ8s9XXQnwvGHSXGDNFeUtU6Eh7rP5YP",
  "key15": "5vkgmD3SjqEwDcvCqMSj51PQFkiExunFUzQuPMCU7HX9hrLB859uz2deq24D6qovQg4jf538ar6u7jfSdLYVSJWL",
  "key16": "3dNsecXJPng7YCWjrDVc1CnerZNc7hAmjHwSC9XwuUCS5MTC4F5igvQCNbXx2TqfB5jry7cwGBFRpWZCCcEkBL8M",
  "key17": "2r6CNJdx7G28SpUHdutsySLwALumBUadAoNSvwcCKkhYCpR7Y3xjnpbTNXJx3UZUtevJ51ngvsTscwkbqiD3K4wW",
  "key18": "2StEzqsZJHvgMXnG1JbaftHnbQqqGm4a8RiG37TEoQyJEwhEep5BLBwmRW6W5AJZ18ytxUdH6trP7sgmeMyVdt7R",
  "key19": "EHxt4wUhXRZavsEwPmDEihenGyurrBuSQNN7Aw853uz9Dvz7diWQiCXv1GkxztgoxL38HqgtVTmiNyaXS6Rn9gd",
  "key20": "FRxqc7CDfknLBe3wkcWHGmAUdhLYCHCBFxmCpfzew5yUFpitn6CXhN3yhHuUjg3cros6BSakfntvYxVbLd7hJw9",
  "key21": "38nicSSi6fEUkke5AnaN4YatQn2PjiHsy22DxMi5za5KEegqkDicANY5yYFVAXEK1Y9tiyWvt2Sy4sZcQvDnxTgg",
  "key22": "YbZhZwjja35becUx4iysFPwg1Ai6UKGFN4q38TDo9y5M8hZSEuKo2y22ZKfg3qovpMLQcDvDapPVdPB4pvyEo2t",
  "key23": "5vXremm4LLSTbKVtUCYqEjpUM4KfT4TTmn7cQBnd6mJ1fBFDtwHLY79dKi79zBtoG6J8A5hvZSCdzd6RkkGfC7MX",
  "key24": "39JefY7gxTDqXkQ2e9E225E1KdsNe7H1qS6Q5uvXDT2WKxvZCV4TGf5PJ4maZfQC2oWKEE8C2MX7S8t4NF7ZvzZ9",
  "key25": "3pb2yWNuzWkhZujHoMCPc8NgcV3xkKsjZrDgaFHxt158rkZVmnbG6BFJkMsGrB6HGPzyNbWabucK7dTtzF2LJW8i",
  "key26": "3QJFPqsJiHqCrsFVY8BdCbds2idSricyaxAEBfqbtgtpoERA7pT28cpM8SZArGMEBbgaQmEGVSrNxq2MsHAxDZSf",
  "key27": "3j7bS5Mg2PU71XjCNd7tnjBZbH2yFpoC7646YrYJghD8x65XynyuXJ8khAejk636VPNzYUb4ZNUgrazWARRnWb2R",
  "key28": "52BPeVsQLN7mK6teeVHPj8v5NGr7QJXeM9a1kmVd6rR8ZxLYD4c4YUckFTXH5r7SBqUKqU1iaS7jHwM3baXxRcfJ",
  "key29": "NSovvtyLZsNufxQsRFsgQPTtD4qs6bXxRWF6AE6rR3w2x9APWo6awVveJbhx5Kiqy1ZCmmLsJhpjSTyz8hVoeTU",
  "key30": "U2SPSbQP19Px5i8NwLtzd7EMfwpx71XVqTR5Y4xHdG5bHyNoqGW5oAZdyCvzgxrB3RtoyQMgH3xeEF2E6uxnNBP",
  "key31": "3easr9woPEj91gTw5U3YJfznkn45KbbhBcu344dFzsDF4f9UchfUhMU5u6hhGFLByJfYfpGeAHrXkRsC2JFqoUvq",
  "key32": "66U8iVuS4N4pFfUmc5DG7QL69fzLmhXY1F1kjVFrYtoMhMbyfAFrxosqSdtcU9jEKmqQ6KY6FroF42bCZkXjZU95",
  "key33": "jKZnK6NqmsyJj8EhsQ2P9rQTdqJya86CDX3kAVgR3fWvgz2R8P82Xbr7WYrTMKTutSzmvbjLzT23eK2SkcrNEat",
  "key34": "4qKKBpxFqSzx8M5PsqhY7wfppwCu2ycgB3GM4UzKMRjRWE8b7K1RxzJK56ThKth8odr1v9vxF7XLr7PicAjNvNGe",
  "key35": "NZhYrFXUGFFPdyQm71aubPnJXhtXE8q1KM1WQQXiuKgXzzckdqp59k14yBTcX6s9jQr14zp2coBv83U2sxS8nZt",
  "key36": "41THqkxioanCyp9KtGB1bYK9L9fCY96FNxDLgDbTn7wypaLETYdr6Gs5C3ZR9bmgmJrr9eQqwzZjm7iBQC4fKKwv",
  "key37": "387mHRYxQTb81zUc7RuFDEXFR3he3s4LHtUdUY9PxfUCCT76DhwarR7g4XgYGt5J2XKa8U7AvCERUjDF8XH76TiA",
  "key38": "iAsuTUyWLYX7BWksbizQ2otMGsHt7kiNyiY9RPY2jGGW5QU2ctt1naAKGk6NFYpfkjNhM3uekWxjMbvCDNbuEeB",
  "key39": "55uKTP6Nn4FwTEaDFVak3UB1qBpia6HkbhWvS5zYfiGuWgvqXGort5jXcAR6TEavkBYdkhpmi9RdJ7oMDDQD1kqL",
  "key40": "3ihBG1RTV3mnRPYLAgV9RYNxCXutKTMxdUssbT9zFJAMcqJPGnEk9Ww8pQZvdH3UnzXXX6PGh9UGc5ptdW6bw7Pn",
  "key41": "3y8jYLbx4rmtjqDzGWDdtUKBhqituNfZB8D7Kxqt1m7xBGg277pQe6KydHTh8jZXtsAGejQzuLzmb5o7YXL9QBZG",
  "key42": "2LqkFuF6AE6Hq8dDSVYHfEqui6wH1asfxLYhJmizCaNT7vF1TSuetVXChbMpcTarnm7yDqYNt4gunzBQsrPfQxCC",
  "key43": "2xkUDrHZBB5hXvxEdn8Mvc2JqMtofJHv3yJaUVVBvarg22pZktGV2nrn4SiwqChDVXu1HacVNhXnj5ZSQceC9Aap",
  "key44": "4YJFsSkxCFvrca1U9RCSnQwTNEBWLM8wN6qah1qSZhDQ4YhdvA83zBBUuJUYKqdhtDw86uZhLK399wrb79tfdujx",
  "key45": "3rZqKg5xQunZ8kZZu1pFcU71LwSL3TfK7KanqZ4dUW3E2B6RVVmsGnrnwDeoVhuLbJfFZDNqj3TiA7xpRmyrPCsU"
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
