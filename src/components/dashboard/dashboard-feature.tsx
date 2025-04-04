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
    "2aXn1paTU1ruqFuAnFUPuTw7da4ybJMPr82LQ18BChbLpF2HC65Sdu57dAH7L2AoCLSZG4CGFnZc8xwSqhdGmrJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zktQiLL5dyngKmCitzWNjAKcGfCHpkRKh1AN8ygKHThbT9wgvwB57tCBbAQ4TexY4krodSCB89q2F5uQnAERimJ",
  "key1": "DExVHVJ5fMqWHnJoPYksCJqYPvpTSYv9qHKBVMA8teyFhUFBpq47znWkEZMX76nQUkpgP7kWTExjwMzdJJtYSmU",
  "key2": "4ofZQQMDPQV3a9is81qnGGCdBGBUWDTbznMQCiVj2sf4Tg87CJ71we9ogxECv36mkdMLyWC3j8VXiKKW9RmQG1TR",
  "key3": "zC9VDrcbZRYZekVHLQHUqmtR9BkXD7QZnF62UosDggggtA4LLnAtpT2BcCQoMnCB6GWpofbXZWr5KBdTrEQNfHY",
  "key4": "4zLSRhPiTNb7cn5qECzfyiW9Y5HQt1WqbG854gBDJykVzHbsXGxYrC5dsojQkq9FMYycYxUofn7h3AbbkrYWTsKv",
  "key5": "6vGCfFwLt715zctFJ9exZykmxyt84SHSK5TZeYe2Lvi7jTDqvYNJL8ALhh67ncjaTmzN547JLAiGEym6xeNXXAM",
  "key6": "61GfQDZrvN1LpxfcRafRLTNc7daLUsKiaA2mBZgUytacPVYHUVe3cmgVKyjzJQotDHuyDsAvVTSYm2izivPQaErF",
  "key7": "2ZGpUAfbHAYYw8cTFV5LV3NQHgJ2LMo5CrgGefExtenJAA5VPAkJvLZdRjZNXMY3e9z7mxRyJZuP5yEq4jn5Wyi3",
  "key8": "4iVJVffoWqi4SUJZVpUpFkYaht8B8uEHQSjMMg3HoZmYpBdeBzTV1RV2A4ze8ebTnHSHECLaxKsQA9q1pSYNF7eo",
  "key9": "5zAZQ7rdFvHaSGYSkgWyGkAepAUr4RN6cySqndEZP4n2htTr2t1kJEPZkwaKFdjSnBQNQjeM1gQrXUQfs8MaQqTy",
  "key10": "3W2n5iK9rxp6a4hMXdbUSAMkmy4uLEFaezMZLxJHRwHruWG91iLvGxESmyebddFg66D9KM92CmRZvoxo39iPtB4Q",
  "key11": "3xgBzrYRbVf8s9VeVmjFN5RZYvkrpRHwjziDfUSvTGtY5ZKUNenkHcdfCq5YxjWfuH7GtKee18CZfjNG9jL9ESby",
  "key12": "5P72aVQPjdtg2W259FHvAKk8YEAgp89xviduW4CWMqRA46Gkd5kfKR236nuRZpStm788EMJWB7s1JK78pw5UyNpR",
  "key13": "DjqrN2zEuDmScDHnSt74F8gYw4rF8hHsvCmc4fYo3KWHdbK3aiCzLUGiNzYpxNEwTxhfmY1hMz9PmqW4Giub11o",
  "key14": "3mRuqscD2izMG8mwc6Ai8XfEEgJutK7Lx7P3FgF5gnrYefDeiAXxGG2breQMDWKubPqr17xrYRaNZqegmNnZRCoJ",
  "key15": "VYW4jaBU4FCjuBGBv5WM4FX3zdA9AtGULo7zPB6pjUDrWq5x7Y1uAxFGSpGMB9DkRRcWNZQ2hJBqsW9vLWKh3yh",
  "key16": "2VVVP5xunD4ByhxTaFsUuCmMc6UFrr794DiKvyU2WBjzvwkyTr3MgMC3uZ8mKb2CuKtkGDVfge9RB1ZRPfTawb1t",
  "key17": "3zcLeSMj17ugzyfMtsgGpNfdsvnXeXZjrVnzcL9gRzKbC3VuA54xcHqZNAafg64Diw7tDnaMxHK4NYMcyJekNtGQ",
  "key18": "3x9HucAbJme2Eis5i9qCobAWbG1d599SKqwiwbqgZSYfk3xP14txyHZGWsTrkfuQ67FYuiF5PKKYLWQghU9UHNuz",
  "key19": "4hK51o1X1KWkM1XZmcdsTPyiTb2PmYnQCA9rivujVymPPqFLxNAhtoyrtYtPFAtHoeaqspC449KAM8LB8sErAuBM",
  "key20": "3Cw8e6bj4YBmh7R2dNPEneGBWqWnFEi9zEQ28dNaLxvywBwuUdZXg7PookWEguVs9VAZU2ZmQVcyFeuKcXjuTP3x",
  "key21": "2Vc6XuVMftM8Gsvu4GwhF56GT1Ea28NNDg7eRiecwb5fnY9LmWa52erLMz7vajzTcy758NpcetkQfUPPQs8MbpLK",
  "key22": "5A2fS7znTJSebBWhdopBn1CCLzG2vDMi6ozQJtksRCPkpxCj5xctSQdJVJemuPTKui9uRtRGdHFHKeEjESfhFAcq",
  "key23": "3AZPJMV2xRsExm2WBYCARSiKYMNc7Wj4XnC7YzNoRsosgYcwzt2fyuD5Pqzf3MnXaE3MgqScmNDahhbTygC26hrL",
  "key24": "3L2gCi2DnCWEqnyFctrb6RZUytfpzkjMw1Akq3Vs4Ng32NkPzLPzuH7RojpouAotXFTTTfQCRKUjABwu8i5HFysu",
  "key25": "2qXMSmBBa2tWyrX9MuVHKHGPCSgCdNEApTAM3CeyVbjrZzbhxoatVRjJJuNZMrdtvsC7TqnqF3o2Kkt5yQMbf5Jc",
  "key26": "5v2uQggmxGcERJTkUyjaQTgUEiMhpnnHwmQps1Rx5xjbxpr7t3BGeZJrxfYLydqMKfbEdwi8sPgQ4mxsCXyZHKda",
  "key27": "4KteMj4W1KFQW9JVaoTdsuf9gTC82LjwvXiV2Gtt6dpazhtNMD3rsyfqoAEQeLyfaaFrtL8Z9oz7SN8krTiNjcZL"
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
