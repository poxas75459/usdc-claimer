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
    "WYGZjGheS4Ck9bQqseVp4zmSGYxTbygzKnS7fXfxRmBUJrLAZiVwVLc55kd5Y4RdzBzoQpCiEqeYu1MVo8yP5ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpoT4M7rYQwQhwbXTs6jfvZxb9Xdn12dieSbQWuT51Kur4UGQvQpbbpRQdCwkN6jUvCvQJ1Gu48ZEV1XhFrTRAp",
  "key1": "8duoufymYKtDhmc55BE6X5AJrWy4Li5m3LG9fhfbsZ8jw8NE3eyPnybVXfXZhHL8PF5yV1XX8SExfnEWhuunSYW",
  "key2": "2XS1SP7bGJUPALnUqjfPqTJkPD2zkXcVwZH7mnCod1H3YzRLFReSrJYxarjG16GFiWRfDd9M3b5aEKkMNYdXkD3r",
  "key3": "epmoX6TfQ5dvrBLFFMq2qdYhEWmSgopPZNZzejdjUCQ15t5gUQeYPrHGWchn3V4pvre8xVzu2nwez7zEnypps25",
  "key4": "4SKrC7ZNshkFzVVFDY37U3AUtSvvBxcUKTpiCAML5ydpt61kTzXbLJw5msbRhwBMcnpYtTAVx14quDVMto8WtaWM",
  "key5": "4xUDr29JgPjCr8eLKEc152DQ6K23ua3nurXXPXqtVE46Tvq8Jnp84kGim87SoZDkPN855DWwnN5Huj3EwzqhYNwy",
  "key6": "3Dt4UxFKy49wmG36RBkHF28i9mTprNSSDduR97HTbX2G9qcMP6NBnDAE8brq78WsweUdSJpHxfjG5tdjLY39GVh2",
  "key7": "5M7PLT8yr8K7xd8xoxAPzRatpqBwHnxKE8BEgr9pnUJ66gKTML4vePhgviBjtyKAh8qTg2b1wkRtiGxTbXcudGo",
  "key8": "3hVQFyYMLiZwicpJg7oE29FfSjd7Pc43wpzVHAo7M6kyhPKt4PsokNqyeNfYv8R55Ns8ywDGXEDrF9ue5waHVvUa",
  "key9": "54M8ezsS7uqUFJsvd3XanWozBJ9eTSTc5zJCJcdFzxU48N8ESdi4g2cQ21nZSrR6kNk7Bi6vn54MQUQr9Mo7VMQB",
  "key10": "5TqTfEefouLz2aa9oXBQ2Qf8oZVDY3kAoUtHWzwfi6WdbBcCbn8QZ97dtQVpMoLsA4sm51f35XU2pW771gkFmLS",
  "key11": "65DPSFXELcBkgXQTEidMUYiX1BMTGGyotjo9Sw6UvcM42Y52a1jrcCuRQRKNaHyGoHA5uGDAHYk4EJ9uvzQXQ8Lw",
  "key12": "63D2wPx78xUZ2AWb9DhFGE5WdtJZFY6RWtm9TJiWtXRMumYVwaDBnEbogf2DFjjQbydeSJ8zJR8aVc1dHnxh3Mys",
  "key13": "2UtRmLBMz9rrmSp7Ma3DHcVqz8i1fyfSdXuasfpXUHd2Jkz9boNrRgbjX3tf43VFmq7AS7sY4MBY4LeWeMgLfCoF",
  "key14": "2oNs9iq3z9JdmPsaAAM9qn7kT9iwoXJX6XoiAeeixn7iqbN12MyyhCLuLH6wak9ahC8JefL4XUjaNeVfXkTLqBbV",
  "key15": "3DefmyFcYecjj3YGEYV6sq9QVba1LXMWyXwwoit8MZVkGGSz4DPwwACYymrDqy18NHt8KBuDPdRbs18gzDDRL1Be",
  "key16": "49sywV8QAZ17yq58WeWrGZQ2Rwt9ffTQjmUmCYWguCBBwKJovuwbwJZnjSHJUeefJQWaWmrgxaUcEr1Fm6Dd9ggf",
  "key17": "3u6YF8xHDFpUTxVdtda1G8MXJW3tZ8i6JGRtFm2HktYyg5cyhZLhjH7k7raDQS7KiRnBW8ZfmEmC933WbyvCtDmq",
  "key18": "5sbqWiJvR5LuYAfgMvMBfjb7RAMpbJFzZ2xj3hX3QYwcStrWbavz2Xycs9pcWrP7a9CSCrMa45K8DirzK5NvWLLY",
  "key19": "2tEcoTRNVymGwWZH9JW3iU2jqALMKJcb33Aqcmyn3vMHHM7JYXdwr9MwBDocZyas88AE54dYFzBfyACX5Vix3NFW",
  "key20": "KhPvdWpL1AueicVGsg2vSKrvSAMnTnNEXjjL5fbZfSnDvSwp62XqVCjvwNYUHLQqXoxzRTheEheNxnE5ed6MqSR",
  "key21": "2ethMaSQbfWkVBdcAGA1dE982r5n5FLrLz9nqTS6BQPTdGgL1smz7DUEP5NV2GiohTUYdBGfUsnxmiiLye25hF9Y",
  "key22": "3V9UECquEvbR7uyrTMeQSbPt4Ckw4nNcrVKoRa5Gm5seK7qu2DGii5izESTjr5ubTNy2j1xwFGXTcxQ6JtRnJZfx",
  "key23": "ZDRBH8T4PWV5fgJBP8auhaTqkmXRh1SguVzjPqTFvWA8zaGe2sXXoBLbBQTY7aeqPEkxSqiz83BR6qGRqJNSP3G",
  "key24": "2SehQQVJqSdbrb7qMAJj1itTMdmvmpAT3EC1qkXqbf5WwXBYVQ6wWMbJfqa2QGy2mtCEvesBhD9xpfJ3WRdMuQHP"
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
