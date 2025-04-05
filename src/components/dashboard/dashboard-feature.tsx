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
    "4foW1qSsacBMYfwKRbkJS3T2qrLGBWBfbp1jcto1kh3vJPUFKzhvaAGZpTuH7VWfzAD9TPnXq3L9P6yasBrDW1HP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZawTAFUZqduyUXqgM1ADCErCQwYo1hNUqhmyTmXcGU5PMfv9oGVjNTZJ3Wxk5r57SPk768fkaLf6P1Yn2mqwwAw",
  "key1": "3tppLgexi7bkegFLKLs2Xj6npu1aKyLySHSCJ3p3kgyp4fRGzi3VVn4GfSBJarpcP9EVGTb5aYz9gWRMJgP7NMVh",
  "key2": "wukJXXW7u6UEwEHwFn2hEM26G3hXykG42adcaqXUNvq5hmb2Y34Q48y3ouGWM9GxbjBQkRAHrgmFj7m8c9x9S6o",
  "key3": "7dEqeYw4mShKfYWsPX5rXBGLNhMWBznc9uqtBcxkbMRBWuffEQYonh3hAR4L5QGEvBjSu1jkAJHAy5uAJz3bUTm",
  "key4": "5QrWHvZyk8Lq614XB3o23AzRiNnfNsxnA9wrxCbfVrLLSfcQMZ7GG5HxwJkasa2LEw2DcrvoSa5g81Jn9M3rGVXA",
  "key5": "2K5QdeL48t8stbSqUPNtiLL1vE42hWqmAWTjyJiTYXWh7rNR8yBXzDADTShg8BaGxdUkR9yM5PRXoY4Zj5yWrHtU",
  "key6": "3xP73YVajgr2oho5TorUoeFH9qRaso1eWfhmvseKt8juyAC3XMNau8ERKqefNyjHnwwLtiQVpGCJeauiVWu2BZZg",
  "key7": "3yY3ynzHt38LHD36vratByDTxTzFXigwTFsFSqkik6v76PYRsr8tXitzSt5Eq49fn3eesSV9FxTX1UbCuBUhCCoZ",
  "key8": "26toqHV4qrxKESwTf6y8C5b19bRLJSL16MRpunjbWxkQkN4AUni3YavEp6RZNEBqAFRBN2X4BqjfjqKx8D5VhDUL",
  "key9": "58G7enxL3mjEcEB2PnSVvyauAy7ZmBMTXESSENSUW1LaUbpfsGzujinQdTTqyLkhJAztkW6XguDxZ1xT4FCBe12t",
  "key10": "44sjcrhi1tq16UfZJW2WR2zMmhH36Bx8ABucctyMk4EHHF3qiqxvCgS6guDyYQqi85ibRafxJy3drsSYE5b6EZc7",
  "key11": "4rdNtDBiuQqoGDMUVXuKR7hDX1rNECbbAWpcxEfP6vztCcDgFQ1uSpRgscYhUXWgSCDhZMhjkQeXbCLN3tek9mfg",
  "key12": "PmRU4spitteVgn979kNtJJSq7x6K7EmKrYAVKG1wiuYgkraottqML8KR5jBXoiMokkxsZSSs3Yq7ESs1iY3tAir",
  "key13": "WAG4UQ4dRpkXAzTX5mguL7NzsKcj61qvEVzTtmiWLHqSUJSc7zW8Z1X4AYnAbQgXCyREnysU81Ai5ETsmH8P1Hj",
  "key14": "4Ee4cA47TPFYjTvrfozr6sy8ZRshYbgQCbze4enRe2Twti7i7XgMhCyyZCoMwwSETkBb7iqoKeAiVgQNrLDg8UAz",
  "key15": "4BFpdPVteCuKjvwqxnaPgBDucydzXt6ZQ5W4A5DSHatpXsyggV9dcx2BgJqkzzi78bCeserZTXWhyd82s4crtf4s",
  "key16": "21etUGAhDmnDWmYaTSkA4oF6xgUeXMYgZRqK7UXiV6VpFdy9sqxzMo7nMJqWXEUQd75WG62hfALToZpEg1ywApsU",
  "key17": "4CwRjXQYgZigfdbEdhyL8NTFWN3wXYSafnCcXNx3o3PgxBDXbK8CF4MPd3bMu6RQKoQQpWgSjFrtgtwhp9gTjSsv",
  "key18": "3Uep23WY1UfpZddK4ELYGMomHw1iwpjwXyQKXaA9Nfwu9PNeUrqCi1Ska3VPCYtHhnUqbSkmEioigiGm2SA3MvLf",
  "key19": "3gqjpeW81pg4dmyiWqpja7Ku2Fhhup8YCsXiNWeeK11TYxHj8FXt4EYUvvm219hvH5N8mz9T9tyjxKiapDDVRZ98",
  "key20": "5VkJL9ZrUYkRrHArwGHgJii5dBcgaRqis2jkXXb4NKpB9KyqsizLKEZ3PrmgVaqbBsgNfpMCVEUJCA1EJZd8yPbA",
  "key21": "4vnwe3ha5jnWdqWA9mxFxtcBAMEqBBpVDwYJ5P13XxkU1NZt8yX4YcKbb4cjPtoXtxp8UVewigNhE6uuXUhCR7R2",
  "key22": "3sLwbsEcQV3zPLy7VPPxCBfzwGDb7bYERbWwzHEEwfc26m9WWFHQypXfN7zmEfZTXWUDTiDpABZg8v4M8uQ1hWHL",
  "key23": "2ssoGvqjCB53GiG2UwfqbxUzUZB5vNYGFQZfjxRz6JDooc288Hrxv5qcWtPRqhaTAj2SHpPsPXiiizcPA4bvviue",
  "key24": "sYveHSWroSn1dEWfkbeG5EhJ4kuvhN6t6hHjaFQX8b73d4sSU4VHbfBMaJdG6tLHKFR8pgMXwPuQq1gLQcKakTS",
  "key25": "63fHuugvbu4Cir1jE3Fg2KG8tvKyeZm4S6NZFycXifC6utf7jXfp3RUcTqguRnMYGQHXY9M3pRfDxTLHWNrrjNgx",
  "key26": "4M5cym2eqB4yXVphgu9MXUyzuCN8YPdi4dc66KJxTLWKV3MEjVuNA84o3pabkyEE2sxAiD5ZsMNjpjFTN7qh9ndr",
  "key27": "1nVpRTHU854fqgehqcxsR1vDKKcf9PUm7ibHNXvfgVhX1DruQ5Q2GRvjX8pQcB1Gf2PhVCVzrkdnEbWJWKHgPFz",
  "key28": "5ofZUv6iv5prfzyfJvYPUfBYWwAXYRv5BRKQ5od5kpkmRWshFdFfs4d2pZnWRjgRkDfpw8NsuS2xKrqq7cxLyxLw",
  "key29": "57k4xm2oWCdPLPp76V7uVL8eM3J8wYWUH8Mb5Wvvcc8PqoP6iKvhaRpYLjnvRgbNtJsCPwaAYvPLdaeFRihsNPEr",
  "key30": "4GfjoZD3fYfr7CD2uwwWmxLaBLCLNK4NxQ2cPxa5ci8ni7bz5s5HyXFtmzx9fU8MtuqXV7CgHYz9GF361YLtHT2Y",
  "key31": "5MnSx8DoMWPX5HqGf2DQjawRqeq1oQhjV9nCQXbCbdDt4NjAH9uDnE2L43dBUDG6Dww8mS2bLdEkE4ekjfLbeAbc"
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
