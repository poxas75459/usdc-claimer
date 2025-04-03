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
    "65hzewcSKs3d9XZpHYgyrnQSWyLU3xPjtEwA7uiEEhJt9Gt52aXNArKVgvUNJMPPjWjwXNCsvHgwF8sixorSzR9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBKHfNiyyCr4qTKUTP5WygxSMtnnQHzRnSqnaL2GDbk2keyN4hYVRxZJcxj4XCdSvWqiuDAC4TtCR6hHahQS7WK",
  "key1": "4UJ3wMgBp6xFotCfV7NcXh2gw7R2fYk5cLazjy5J1XzzX1WDGcKXG8b7HqTbKPvfzr6PF9w6C2zjjHbwNn7zJ8qZ",
  "key2": "2h75T1NX98UV1Y9Fu8WWEV2mmMpPTrQ4NdufUJJfxt6HBw5PUAwyxx2GAWuEQQHnDyNCJ31c6WhikPCCfuzA5eZK",
  "key3": "5fXKYRL5yoDZpLReasLP7XkEjZunsLd9eSgsv2eTUnPEW1vXurXcr6vd4HGELf11XGkf7H7KERV95HrsSRh3KvVB",
  "key4": "5soQJNPPtskJtH8wDbuwF7j8j6nRHjJ8XDkhrfcUVL4tkH8eTysXMifH38XAU8oypqWh2yCVZ5uVEcfyr7d2HBwi",
  "key5": "3nQ34QcS2gctm9Lbw7ryujCTQtpyie4uDakdoD2jxFmTjLMKFKmkPKYbo3pkGnEk2epux9nqST4nAXTX7uvyFQB4",
  "key6": "2xyHUsE6EcbZ6pAZGYpA2NhJAYwyjPG7Pvf52toM4HVHs6VGMw3qth84pHh5dEdzktZbY76N43viP8nCfSc9M3w9",
  "key7": "2NE4TBk8J1cFLpuAhMs194TjXYSJV1BvZVsDbcty1eyeFa2FBZvejnfmU9imhswdoTtGWYiQ5r6zYk6d7wBLF2xj",
  "key8": "5qSPX32YZFdgJgWyhGcTxyXR1avKqRGhtva1XnQns9VbMfAjirhu8G5NwhfuBtMAQ8d3xrZtyV3DDxBf4wQ6VKSt",
  "key9": "4SknaJZXGoW6Q6wm8AtsAMEm8SVL9eUvAe9eKNMshvgrS6CBDFHwP7Ab8Q7ZsGtuHG8DTSKv33rr6VZhLNVnhPrc",
  "key10": "2bPx5h4rqM28aszvmsVBdpUypMjvvCnAqQoLZ9svYfsFWmnUML8TBAhAdB4fJKFiydRzHRQkRhfQf1UUW1PkFcvV",
  "key11": "3BZkPg4eH199vefs9hWWnD1tehzvy7dUK5hsYW9D5uN36dyWL5L81USq4SfMiiAwVy8x3L1W3Pae9d76f7w8xUbp",
  "key12": "4hg5bDnnBmfpdCtPo7JTv9DPC8ppaU2FuSbYGDUMRQrgDUCyhw2qyjB1zqbTX8JSbZjKTmjsJvoysvo859H1KV61",
  "key13": "59hsTd2qSffMUcgE524TLfj4mn3rm3ubXqufVxV3uxYo4kHdUxJvP2j3Kdbpe2UVZBoqH2eZeYFffMk12j48L85P",
  "key14": "25Usi8y2Jo8zfDm6MADshMHAivg6q672ERLFeUhgDMD5i27a4toUyyFua7UNPEtT9o918GiW7jwWtNrZomy6Cxk5",
  "key15": "5cdLmFwFRrvyjLan63pG4oKgM4KvUKiNqKzPwpMwMsesR6UovhUvT1itspFWFvL8PezYPbHE9Em2qfG8Axxm6bee",
  "key16": "41LFVWo14xSKXbqu5mrKWmk8Qx4tdZoSCNAUDzhXCeU3oQGBgVQw8qnAmiGpVmPw3iZAXsNKqjrxL9UQKSq9oWfS",
  "key17": "5omaJ4JKR5cKUogqejrD4Bw88CTNCyJfzAUDHqvedmBVbKn59QpxpxChAon9AF3CSfPtsYFkrVRee69mza1Gwnt6",
  "key18": "PQsAfnE1oKUJfXoFN1hyhaMpoyYVKNFoYVJbbN2avFXhWQimvog2fW3SuvPZfemxHfYz2kR2BPnXv1BUvCFxkLV",
  "key19": "ZD7g77PksZ3ywTFZKLsksrYvV5msACemggRDPaZtTJCWbPG7vWepJgBaJCPsSe5dih9xPfr12v9xH2vTpY96RPo",
  "key20": "2W1pQb5PVEaVa2uw2KXrNt1SDvb3AJkDP4SHvRXbA7sbCrmZLk52NEPRyVd3EwGTkEpBfoGi3FvMNHbgip8QChBd",
  "key21": "4poHnbBxvWdi5uqbLAm2JWTQuC4AxpLowVnieysJiKEJYj8APCKPR3G1uUB2eEryfEdVBmwBDtZgihTzC4e3FLh9",
  "key22": "3U8R5je6y8LQd8Y7qjc2YMyTMB1fHx8m2ZZkngWf5uqrFgLyssmCU1yMgzcWgnv5qg5edcdyvqyfHseNLU9kTKSc",
  "key23": "5cX8bgC2gpWKwKedp8cN3XSaR4DwK1fV1MzEhLEf86nMj1ePahZ5s9YFUbQoKXqoEBsbt1gwQeumNtfPqiT1BdKM",
  "key24": "4HvFwyAoS2g2f55ey7KYkyeDdPKfA8Vvp7gfUb5FJVo2PCaZDYT9smXjUEkkw694dVTDRtodKi9s7bq4yYF5imfF",
  "key25": "cxj8u97Y5g75AEwb4J81ULB9i9g8C2EpeyVCFXs5PdDVbxqE9QuSacFg4Jqh1uDYh5byXKtnUuUFjup2HRMLppT",
  "key26": "51JpxCWGCHbe11q37fagFexTh6GkFvjRNJqW2QZYjo21JC9igWzG6Drhntn2sMP1uEBSg9FybxEbJaUWq4MvL5U3",
  "key27": "zMNFGEBUrwhQeM5puvyLmF7VtEc5D4U1JMPPfoikhkHaiVc1fyA1mpBF5bbtm7HaX3pu3uywsPnEBnNVmgMAG1i",
  "key28": "2MkHK6eh6tR1zfkk51NEAiMaNgyYAyk6ekpfUYXs5U8efd7914oNKEmK7SXcYevptZANt8GzSnpPktzuXy5jgxU5",
  "key29": "3n9T48fwSfq9rHJTvEPz7xQz8uzybv7btQfnG4bJgdvewkZ6FCikYhzm5igobq2NecmSQnd3KA92vrgwGZWkETUB",
  "key30": "3e5CuHc56oNZ1SATYkMmA37KdQo25acnW3DSTw1744aRwfdvM1HicQo9B5fQGqHcJkva9iHDMRFQFyimQGz2fxSY",
  "key31": "2fGiePn71YQTRVmRpuj1A5cbrA771GiFv6jaUQGXMCxpLf9zQxYa7CzUCPeeVJEYKXXgienphPn6PPauJtJwPGuv",
  "key32": "2JzL5QZj4qEtWAJmYSoZER9fRLEC9ePg9YF9msrobW8mooNrzDQjXTdjwsu4ja9gASvcxzzkHuZ6htoNwkzWi6kS",
  "key33": "4w2PnVKi6FemGCDQG8cJBANpa239NJK4gS9jPGC9v3PuhhsuUNmJovmgnn2mtguBXNmpQ76dAywjWnn4egRCnWZU",
  "key34": "kgEN7BNuycrttmWEpFJwe32mNrnZSeKgRtjeNShj3Npt3rjEBNm8YZ87suD3B86ZKWSM478wYzaueSAs9sLgYka",
  "key35": "5odzEXZeBwpEb9tYr1M94HAZQXgDbLMXwVfWv9Mhv1D1R6LAZUWUC4DeXL9FUwTm7XVVRsUhVfEp13E8UhpguRp8",
  "key36": "4ByBxXLJ5gmtFFnsdoDUMTB6GYbuDm723eEsE61mVwZfncmEs7CycdgQwg5V7rAFeYKs6p8bwDjWG16vwzR2viPm",
  "key37": "3r2SSJ6Bv8WbzmWb14UcEitnKjhw7RyPLyAVfUZAxvMN6qZnqia7Jv6Kw3hoVQM17zX2Wr3ABpEhWe8kXiBedhEH",
  "key38": "cLmoT1uyiemxDw2Js97JzAFpkhLvWhUM6jTgjsvmPirWcA4FswtB7jaX5jy7rwaHcYtkFPvHVrABHRBRiBXUXk3",
  "key39": "3b66BMrdBGdWkc5Kq1WETgiP8mLUaGdk722tWoxivTLLP9nku6ChpY4RUKBjwvnpx9wkFycoPFk3H86AtHSE8NRN"
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
