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
    "4gm7TLPG7aGH7jhkHHX9kVhWkeWoHSjrvRVKzt4qYtZeBjyZFC2wW57uhVxcK6n6cvpJ5k1ZJEC5HrV8Udpo2Ad7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33w4EUTs76NMUoG2v71Vh1FhJCX4KB1NzcPHKXNM3eKaKmvWFMqY84B7Jt1a3dXrFy1qpGJTEmJJUQJAKj3mXzF",
  "key1": "5dgS2o7JJ5CnpwinRMpzyYsJ9CfdvX7nB6TiKxCUxdVw5tL5Tpyy5FMz8KqnHnbWzjfzzvtruypUvL3RWYcUXqT9",
  "key2": "4mHfQutJfBDfaQci1TqwfC6t9mDjpQxKAW3bFiaycybCXfbJDa32j48RewG7fnJG1jRTcADjgKW9ns67i1SNHgpX",
  "key3": "4vGSmHZ67iGDB8PjvDwebwaBNz8PFkM2Lp5i2o7CXGyLGRAwkzwGxm6dtFEap19greFhu9KafjYRiJS1pLeYACTr",
  "key4": "x5EaY3DjkVyQUwEefpV9vQc2LAbhpg5p3V26MAsHxLG5nv8xGYZCy33Wv3H238gvr6gCxzTL2BnGSx9MNqepiVx",
  "key5": "3TCtWG81mmKT5Y6Q636toZoMhZvBnTJDppS5nwsGHs5ocjNFpsMvFytrPNeAnyFJZMFDm3yYBsraw28KrWZasjC3",
  "key6": "3PuaPggvmMYnnCjSQbMzSmzfiQpyfasKGbq1E6ycSgeiD6cQJqnwP45LJbwEWZLiPPLcHyYyyW977HHPr7a9xd8t",
  "key7": "5jgb5tysHPwbGvdyde1URnY4EJxF3wD9uYhdu5nRauQqgBf23PX2nuJkkTSQXKRSH7aYAYGhpVQQaiDHXY6fVfXu",
  "key8": "sfwpPcMKXECXsHDLgEyPcnhGyw4iBd2pHwb5RQr8DZQKgwFK6u728xrEDk8LmFkoteAFfXQ5irBepGgvhhM95go",
  "key9": "3WTnPfn7cP1vKXTB5oizRNLqYj86pFNZZFtWZeWB6VUwJow4wWwdAdoJUw4ePikYxZ5prncyyQ2d2iZZ4ymjiEUp",
  "key10": "3hkW4Zt3RGJrH1Gos9kzKNdKfrDQJooJMv9NiLcFW6YqfS8sJQbwDf2QVRPhMAgSsajeAPeRUgK4rA2CfhVwLHxq",
  "key11": "67et34poBmaiL6sxMsXP9nVRE7XJiq2Q2amnwTkHXmMgqfL1uGrqpvJPa2DXVnhjNtm3EVeHtiKLFQujwYy6aXBJ",
  "key12": "4aPE9ihvCj2nN6WAkj2YLaQ1xwsc86Zsih11hyfM4i3Apt4EEoYQhLx6PndsJaV5sB7EKhABnep3rpsCqHHpdLg7",
  "key13": "4jcB5Uz8Sxce5QwT4hrKxQdHqFkGtuWNxGCr3LUhQaX7NF99zWYLhpMrubibTMa5pgWTMtTFreBLzgeypGMZuCNi",
  "key14": "5MQRdJwjod4X7GGFg33vKdTrEMr6Q9k1igjhEYC5qvNpmcG1imzvnLjxJoUZSUWgdhnLk13FD2NMLhaNoy1ja6bt",
  "key15": "MARcvVe2169D4XWUspvqGTs3JhVo2Sm95TEp21Zb3WioxcdDDdsCEpuB2CxMDC9VVsiJgWLxMjyeDxAcHcu7qxv",
  "key16": "TemrJKM3PYFYuLFFHnfBuzVER46H32sR4wtMvQWu8vfP5dCFpGAMMGFcXGK8UeTem1KTtkW94XDEdAYtGAS5rHB",
  "key17": "3c9rf8Wb5TxKn54HPRL5SekGtRXCYJBqAq7jDueGi3idqhAsXykSiFQ869bsyfExE1Dadp24Pgc1no58CXRFEDo2",
  "key18": "mnN7LJ5GLpC99oDJYoGcXQ6vDpQRsS3BJePuGyYk6DEGbXv7XVyPceZG5WALEup7kLQJFw4oHxSzj3mVQepvEzo",
  "key19": "7VGiLqcKa4geu2vUcwDsZaBw6p3BSSHecNdBdmJUGSNgqC4MUcLvzzWz7fDBqFjCH31DdHu5aoWYC3c2kcAw2ru",
  "key20": "34fnFEBk5DDsxLWN5ccQMnyu6qRmers93PZWw5VoNNonYY4q15VPCHtX7VVEGf6YWbEhvV8QmqKmRVVjuKoFtMi7",
  "key21": "4utjspbWhvBBLhCoq7vEDWCKvJJB25B5nN4CEQ376BL2AvowgHjjjJ7tWBpY8PSHKYSHQZ1LxkVFTnocMPdgRS3n",
  "key22": "3C1KYDFWhMJHH6kr9mRcBv4Gy1FuDBUBv26FPb7L6WYKF9EVfdT1zWUsniwa9KVLkzWMfV99UPHVVnsX7DCDieR2",
  "key23": "2vRW8E9i8EhoBrjYEMLsRM7pf9DAaPYkZXtG2LyFxHJDGjbLSWPvHftXghihWBcTfdSi73sWHV66Km3dwR9uNePa",
  "key24": "2hZkehy6UqQ8USSbZujo6kuCuuitWFaDZPzNh7Tto1UokjtBbnmnHWQEERkmYcCFpc3FzaHe7yyDE3xMWJt1uG9v",
  "key25": "vcrier7BRK1JyRoXQTxaVWcDNxByV7Birh5qJjxjuJJtzYuF4hB7ST3679XHANPmkmP5HJiX5WMRzcZJr7D3WS9",
  "key26": "5KWh24fHGypuvp8WVr8XAxQPf8zcDDbmQSBTeKN8Fyzd2EWhf7DPqeMCKddDvUnBsamuduGb1o35awodE4bMjTMF",
  "key27": "eU4aSyCunn8fgzG1gS17pbDbS8Doa4JfWsvNbjvmXnuPBkUvkhqXnzcRCz84vHLSXuJVXDkdDjuX27FYxYG42Pw",
  "key28": "omk4YEBpnkPxtu4Zv9nziPun2Dh7HoaEiL1riiVs3up1naLuSgwVkBxTRi65Nz3iCJRUu1gUptwE798xATatTMR",
  "key29": "3KnE2g3mva6C2DzeND4ELTbs1uYy8DGa3R6R3TjCpxxAYZ3F9avc8PFQmbrRxfi3iu7XHjAfeehjmspRVYaovnoY",
  "key30": "4sUWot1nHYmuNw2qisgvZaPCpqu2poEA9Qt7gq7qbvUYiaCWAAXAdTDybwMdLEeiSXGQCiB5nGrNaRMo2jqjvUiq",
  "key31": "4HVMLnqg6nZ9gN36NjFypk8x1mJjJi4rYouJ8Mh4tikhovh6ihB1HDRGuBbrfXwkcYrgRoZcDFZ4FXK2q7BfXGhY",
  "key32": "5HGo18J3dxxtUg9gXUZNVdATR8keru5ZBA85AGMYqjgYRBUhQRCLhS3KBRj63uTThhGNugQVQ8xEEQyovZJmi1tc",
  "key33": "2Z3G5kAbLJTHXGzUnXUadMYpAkeGynGcGQVS6V6r2HgiAuXhDCZrFjsMZEgGJo55pvb2zt5XCwRcfqki3oEK3avk",
  "key34": "3ibsCtEWSHRF4ycShjt6R6GnRaS9bAc9eMkfyVZ1fCbtP1S6UVj9ZSxK9ozJz2hNRapeq59g4uDBWRPZVwVUFZax",
  "key35": "5dQsnagsXpFExJqo2uDYBX8MLtjbbremCQTNgYxSsuHvdukHjDFxz8DTbWQb4qnVXuZaCQQAu3cJ3JJJWpsdsTNo",
  "key36": "26QkFf6z4C5rcPtPFVuFh7YEzZzZ4re4fe6z7DM74Ai6WacQazqzpwyB6jWePYV13HWq9mHLUKco4sEQtr2xXy1p"
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
