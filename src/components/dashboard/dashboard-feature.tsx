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
    "42mXTCubRTUVF8vQh5AYeZtegLt2AbDnu9FxFBTQQ7Npyt9ShjjstTGDxUh2gVQf8iBkBaWY4UcbRpjuU2gkQLua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gD7XCaaNVgfDpZEzfUK78tLDTYGg8pQDvKL2hsYvZVVnmcCSSryfJRTwyyTgSJUJLwqrnEZxUNz2QcpuxYobdSW",
  "key1": "4hQBW4Nf8vxy2sss1B16bD5dcQ5oniTYDcJ2c1U7WQf3ZH3eJhe2xF7L6egHnGSmMgnKDuynqFBxLCChpAHYFJMw",
  "key2": "sWbjFVGmwnHQ7Tzuw2gwHZHbHmKwSy8H8XTj7pXVaVkruXLzCxxj3xTocGcP2DfdTs8Eph5u3cjVxeYYDVA8HVA",
  "key3": "4zv5VwX3GpUziCF44TzC9AtUJCay1gMkxT71RPxSkwEnNyKDmjJsLxj4h1sgckYiPFifE28SMSKqhGXweRAiMLAH",
  "key4": "5XLJMeSGibioGXN9aFeqCYSaVEeGQfiRUv1Hi2kMQ2JpP18cB1VXyLUoVDFvUhPJ9DKC35HskVj8BcbMCTJ7vCdv",
  "key5": "3WZqDm19eM1gALzZgQyAB8YCqtvH8YvoEMPuzqg7WguhKXKj3BrpMe13sr9dWDRcWEyuitXSVM3B4n6P3pheaNx1",
  "key6": "4b8LKCmchekyUb8f9K49BYkHjYRqkRqkZPLoPcjgEK863jSUFzmCVpVMXit2xECZ8zWPikFGnoarNyyQDc5i8cox",
  "key7": "4FMMtKyQLsz3tw5KBukPFmJyoRx6t3yXeZqj9i593X8mrpziCzi1jpC9xe6qfvYEYzeJ5dDif7WJzSNZK7tCUXML",
  "key8": "43rJmX6LpQspGGWqWSd1k22agRHuHp7WjcmdiNnDFrk5zLtmJG4pVFsTgvKfPUQ74jTR8BqDLb85MNXFrxSYErn4",
  "key9": "dYb6MKJDsRRj58pHKq2BJQMpLnFjqziesntSVBZXfJ9Hh7FSQvRfmj6c2HJfAN9GL3k1BaAbLoafnfwLvN8s56H",
  "key10": "2GiU4KAKP7rwsKRFu4sVRXhTMzGJRcrMdjt1kwkWVFDJPduhD6GzAzSJt3mZdEetRAoN7vnp233yF3P9kLGdWbcE",
  "key11": "5Rq9rpKGRmSTfXdDpkSeg5WGA7LWzsWpMa5cL7CfE3z84AGgFA3ZJW73QRSFXCG2r9Drqj1KukYSFcbTHVPKkg74",
  "key12": "2361qky9XGCSw11bPeHQtQN5BGJcs4ntzwW8uuZf3TevBUx45xEhf7pUgtyvU1smeRFwr94YnhMCUfSmqn5nmBZB",
  "key13": "2X8dEEK1iiPcVLxyf7Eb4xCEwuVVAMmzCMbh7BeJWR7u7n1oytnXP2A4ASfX71PfxsHmGBFfQfRrNKmPWpwPaiQE",
  "key14": "3BLEJj7itz9KeqzwgSVi8XvvaiAUgGqYoUpwDqjhH3zEFGKnrweKbG7xJ87hdtREnYaggJYbJUZ1FMzzbPkinr5q",
  "key15": "2WfxMbfxHmVsyd3LQUfMZD439KXUw6V1x3sxDvBLMMUvNEBzxwZTvDoo8PJBUGgMLDCvBCPEzxKmT6NVHU4vBqou",
  "key16": "3kuaYka5AynQoqQz4XvoqWasJ72Ax6qP9ACwwdscLL29nLeX56q3yTDcFkJWawB4u3XBcAqFXHVj2Qt2Wm9z48aK",
  "key17": "5t2idaFeFyZvdvC2moMAy4mXnmzcUorQEWtX9xh8GNzFc5oDxj8zHqeR4vT1daFuaWXaUJi6UtbN2ABjib8MGJxK",
  "key18": "3GLwLLxHQAibfMpLfpgFGJZsuvJccbXZ3yCv6TyL2Jc311FAe9ZZtMmd4Tez2VXvHxqXtcsxST2Z6q3DHtDkqLFT",
  "key19": "3aa6Y6QDoEYRCnvggTBvE75zd7H4QHxNSYGjQ8xSa6tvRq2Br3BgbLMJrsUkdn9B6N93WvhRUrJ8JGzngKDofxjC",
  "key20": "2GzutsU4Vm2zmScDLk9uawAMeDaRZvZ81K9p6YberjEWuKGjzRfQC7Zoq9f7Yw9jR2TkP4yg53b7BDbn9tGEeyxg",
  "key21": "2qVARWCtZzZektiRmpEz8uG2nSZbAt6yVEduL61WGQRyFDsdaSaN4qfU27eB8NKNNSvynro8CnUzvpYC3nAGTa8B",
  "key22": "5Gcs6oxRXEkkE68X93wJJd5BWMUueT8GxDTetaSyY6NEXTS5wgYaE8xuW9xvkF4EQFYsK6vaANiwfzqGiv8nNcRB",
  "key23": "2ZQi2S2wnfU7TWJfqFJSfcMKerKvcs8VQmmxpLVYB78kYHzDcWfMUGsmG9YPYuc6UqEpUveyjRPLv3LMEtadpYhf",
  "key24": "44X5Ko5s31GXnM51KZB77mszYK37CEDjjJsTNQ61aHFx8V8YdSv557zkZHjAfBH2SbQe7VyBXwhyNn3W21eyhkva",
  "key25": "33rgqZG5MKsmYs227vGv8i44ZJkSzzugnP3jT3utY2yzm2YAsVND27P9kixMutesEWYzSJ2PLSaPJAXdJMgZcEqb",
  "key26": "2dMTsN8ZqtSiWXKUo1WfkC3LcF72uSERsJ3xd8zWcUVi8knPdxF8SvEEyfzskdrmwKgsd6gQiDifaZ6U43jzW7wF"
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
