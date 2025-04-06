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
    "4uoteL8SdFsoxoyiXbWwhJ63xLSZUCeCFBeCTshwBFroNGir3dedskRKLSdNXjedVJJVbcjvHvXonocUGEF8VnVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5asZ4HSrEEhoQjFfjZrXqSgwRVzV3xb3VKnF1ZB2awCZuhToatKe98E6DiQeMBdsXbtZnfwsmQTSqzkzJEE4xQKt",
  "key1": "3GunV3yRKU1zzCuf22Wi1F5YKYFwW1jNGgDYprCfCY592WhGiWc8XrJnLTGMP3tDYDeM5B75oi8r2i8bXpjZvUj5",
  "key2": "FVRriNcZ523wL3dnJ4DCd9ua6Z7KcjPsNGhYQiQySYUJSZ1Z6K3R8r62zmZjVoHaYLm6sefwPnPUefxe7Y2jrAW",
  "key3": "24jKoHmftXk64wVuVTA9zfAaGKPYFJGYaTbSfcZzJHJsnyNXap5Qpzxj4eP9KKoGin8DbLQ2hKSB5SczYqejn1Ri",
  "key4": "3iBtgsMUMrNeWHqZPzLLk4NoDqfnNqG337DsJ4RYdKShoCaVWvnuYs1C63vnVAYtUkrHiT5EeWowCu9aWWuAUNby",
  "key5": "3Mnhis5KgTTqZ7hnApKA12tf8dnwP7PfXt7Pwz2yrKLun9jKnxzHUoAwp5QP814uoXQQeMjBA9R5u6sALnfE4PEw",
  "key6": "3i56yGCMb2HjZ8WhJYn6aZr5pem15q2dxswhUv38pyy3cvx8Es7JhvfwsbbCbk8TJSqYyjZXjjgwydioAytEbz9y",
  "key7": "4Bw8Y5WGJUtkJpyg8xxiu48Aev3FmmBuViPy16neJehYrQxN5J9b1n6wr2FAGKsnnCnpVhchyQv7Ru6ks3RuGmBB",
  "key8": "yGx1QvnuBKhPMzkbiW439C3hGLEhqE3eqR7ZuZvexNe868fNcV1CNWfLPYemhNKBSaE76G465qD9Gf7nF5uncQx",
  "key9": "2mjksHT5W2KM5oB41y7QKALaQsRwH9jTb7kbYuxVEpAp1SEcy39wq3wTfL5RbAA1ukeTLAqByTc7S3NmRpsqJruH",
  "key10": "xxrRsNusvn7ukmuqGW2x8Gr8PAVWmqWncaaYfbVGJWbGHChPJkuP6TiYYoA1cdAnKapWc8NLxKhk6TyAjmKVVXz",
  "key11": "3rAWACVZtTX2kwNnrgNjWJ6ntsD7h9mCLvdhWxQ7mEK26CVvrMCvrFjK98QcPKPhPKXiZqfyA85qns6Y1jZjHGuz",
  "key12": "5YzahdtoQbcQgtuLdEy3AaBwVKh4UpP6yLxwDN6gVG5z6VBzkvCAcYi3FSw3Qcxj5NVvsDC97xK36JwCjsLPNv6R",
  "key13": "5hsTy56ZHanhcdw1ZoSrrT5p1E7uXPSXy6JupVZ25EbGwhkXS2bgsLnM9SsUQn7dqynrHugdSTZ16fdPReUWhsGV",
  "key14": "2MuSA1v6aMoPjN4S1TuqidT63My1HHdeGkDeF5kSfXTeSVVteDhBVbwuHkCtrwcDCSngUNS4yTngC3TRDQ9FWdjx",
  "key15": "2DcqmAdApv8YoSCR2CGZqVVTQWz4odfxcv33n2wbJB4JyM35Boi9tdz3nHUrUJYHEKaABDyAYMLdeuY788qzVWT6",
  "key16": "3uV9sUFsu48iYhSrUvUzkoVGTR84CDcJuj3b7M3FrZMYT4GTfGdyg4LrU5DEh8aYjswAs2HPcaUEddw7GsdnuekC",
  "key17": "2TcPjmSHKpNWv97wj8mBgxr95FUvnpdJKsR1pmzZL2fi6e72fXyCTeu2UjHkqkjtN8EyxXZooEubJydRzRxcAQXt",
  "key18": "3D5eAW558LXLKG3unPytoxQpSUn4N4teGz9VgWs6SdVWcfeZTQ4g5xxPsrenH7cJW3R5YWXLgtf2LrhxrccAtEki",
  "key19": "4JXdmxqDHGnmisE5BrcYJg9mbo7g5r8egdGXGkoqTZkygPH1NuB99hHpNHr895eJ8bpdArbuosCdBExqKvSfefQC",
  "key20": "26LKpTNsdvAhxiyhP7utpHeBdW7CqKinSKj4erZzBaULN5XPKu5UvY4XTnuS6fEkMeGFcBjwy7mzyjL7TXxrktQi",
  "key21": "4yC44XinkLErVb7LVVNAjuobg9tRX22gr9BnHzmc48trKsXSdJCgUYPeD4kWP7WojDZMsHP6HDKpJL3r6kk5iovN",
  "key22": "2J6YGmz15h2oJsDp9xfPaj3ufN2dKDsxegWD17CKAFXKcHzxYGowvHYovPdfF2WM76tgoZMSBxFjBJQs9i1p2hV8",
  "key23": "2yysQoVfC8YKwCPbGQKDGLLDZrhxQVaeynQ4uHfdGp5gD1DvL4ezEs9jjfudGMHMJmwMuaMcog9hrmTKDo1PQ8Yx",
  "key24": "2sEPoUKbCLhHqgEu99VuhhUsELJ1JsAfT6EWpxZqkcvJ1uDpdDfJ738HPtdvZtkWsR8WNuRggBqWxEuhusUt8TC2",
  "key25": "35ayHSAUR9xoWXZYjdV1PxzZYDgvMaLhiohGbzEdJmADq1GGq22XTJZhcLVRwArCmeLTjQAGZDCx9X9uUi3cHuZ8"
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
