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
    "3gvKAk9rTb5S9fnRLM4bwm13LLPAp62rtCBqHZYQMmANfQrHnpehD5Pc3RBZ7ctnbZ9EUWymhNKbepX8p4d41wqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZJKTjKzFntZUe4S4JvGo4ckRfasK17cWj4jBBVvQtHT4bPxE38w42LWvkB8S5KD2UWi9AGyUpad1SJUuvqwRZH",
  "key1": "2sSf3N5WiUXJyJYAhqzWSwpaGo1GysYM6xDUoUSYb7PautpvFxFDkvhAi8wtfJrvuM9usroeBLiLju7AbkEoErvf",
  "key2": "4eJVbM9LfpyVF1kWh3exEM85hPPXPqoWKTZYytnyFQ7mgMbTMQyykBYKpctEhbAcxyW8Zbk1eVMYnV4vyNXreKfL",
  "key3": "AZD7twWaaVyUjC7chHCoYvKxG9LiJC2UDWctmjY94nUB2uvipbxjtio3bYkZnTeYK4SeTQGpkb7JTFF5ag8Xs5b",
  "key4": "215RTMi7Vucr1VkjzYgDz5juL1rAqS71MTH6vqKnHQthobwHcFjPXGg6NCYi3eTdbGryCJtx8quAjZNeTbmt2aVJ",
  "key5": "H6XzT4pnLDxXmd1eGkFEkkfLZ9fQNwmjRoMAu3RY6Afc6SWmXEpwr9KZxAfgMmw7dHRo6EiKbU2C38q9sBGEgy3",
  "key6": "2UMrkvGgWYnvNDVcfTmEq7oMdJswXYNVvxDYz3WT4nv6JsEHm1CmZZmtcDBVvfSHGX2VezxHP7Awen2RqPYNMpEZ",
  "key7": "3JkY9XdbjPGdmmzmYH832QbimZxVdjmzwHpcRnfCtD1PM4vZ9LNLcYjCj1v8mv2tw4kCdCzXCaMDMAVfXxE8vcDH",
  "key8": "5mHMUKQFYbrnXwxiMfRhDJpkWsb7W3WgCcyU4BfekDBFF7B1aPvUMrgoaYiHPphRcMVyF1U3AYJbQcukMtKSwEFE",
  "key9": "57QQhJELj9xkRT86FfQ8BrX98rkj2SffopuGwvtoJ5hLRTvWW3yHtsVfKBWExhfyLBP8om36VikvyqSWbTcyyeqK",
  "key10": "4AYSSFGd2uChJdDYNb5T6AZcXmdEyxsYXWnwNMtH7ohRqJdaU6mGS6AxN1A5RVrCrC6xVaYuuD314BhPvDRL5Dk7",
  "key11": "4rge72FFNkxM29uQJzNmMxiD72Q5WL72vu1xBRpc717juNxxvy3ULrKsRuvF5Pf1ghunzatgoRbZFPNT9yU9sxS",
  "key12": "H8ULfKbR1ijDw6rXwD1i3eaRbZqSsWBguyWhuyDFEdfmG2NU4s73dUxPg6BefxqAn5ZJtiAP9iufDs7o2z9An3r",
  "key13": "5YztW2Sumt8SzAPe9DKsi7mQ3e7zvUaXWUhDFd5WLUstWQDyPgbsedyPvZbFGV6tGZ6SeBmt5Am9bRNSD3s51JZM",
  "key14": "4C5vh5HLNGbA2yBoT3M8sDhBibksSHP7pBkW2UJy7JFpQZqG8PcQdKDT36PEzUK5YcpoWoZCQhGrKvz2hJCEa2yx",
  "key15": "5qMdaPXoz5xq9QMy4f4g9dUDPjfcfMyNQE9zk5JjqxP5GNMXH718dfYCAnFXU3uJsQivJ1oKDrTHkUE9T1Wq16bR",
  "key16": "2c395PRoXEEYaqFPJjB7yERm7v12dST92ZY8kT9qGjV7Ym3bLT7uN7qMVs9acNxBWmHjFcyKH5yoPzWE3b2h7xe7",
  "key17": "xYP7tRAbzzeV4pjdmYjbMgvvpjxRZfc6PUa9RDgvTT9JMQbYTzMdERpcoo6accvAjTNY1RuRW12TQzjLAWaaY24",
  "key18": "ZJ8FyLF4iGhSQFESPdmsmcjNGPM3NfRcTBN1DzCYfezPMxSKrZG7FhacR381JQc7JJhFPn2Jg4stWwJ7CaLWBqS",
  "key19": "35SKWErcgqtY9XbgGm5bZqWnvn86ekRsUeZofZmfdw5DffvNpfKNoNu6F4hyvWC4Wns32B5e4zQmusHSsU7qW5ok",
  "key20": "336zqjLm2Ku6pDSCC4hzR45o5uzBmZww3VFUbMrwYpQKaqcAtvQgEgvRg3cxz9xMLeuexRAKyAGcjgjNCaFkAR5d",
  "key21": "2uM2z7rhcX2mE5BGaWjW9sDMPzTRp42HNUXPUguzMgpmTT6RHPMn4yGSAGqAXavXXT7cfbJ6ugRBqyHGAKGFkQ4t",
  "key22": "9mdGD8f43cxwcL7YrPtqx9QNhP927TyLoPAkz4KzKrppu7FzQ9e2KoRwKsGarLb9NXoSLQfMGkGq85wdj9x9a7j",
  "key23": "5FnVowu6SXX5VK9fZw5iffu1u93vgd5PKfpHo1XSMasyFxDFCubaT82TToW2y5vQzVQqCAWXgaReyyfKBUW1bXUm",
  "key24": "y7HyL75QFJ6W8eTBpZ2yFnCoysfofN2q7G4smSQdKsYGFmnMwU4G88LZBWXWTMqGjLWv5k6xBJC4yuLDWB13yAv",
  "key25": "38QCTgr5o9HZCYMGPmDLXfuW2CrM8Ea5TUcSpaghoaVCmxgXzxiCLTNCGFq36Wri9HF9bEHVaTTcq9SuNrRnS6LD",
  "key26": "25GQqF993VFMNhsArZvBpgFrDnKSZLBRSKDoFWArv7aitcmGGZb2iebRguihGqre5xVah8bjiQbmqcuwa9cBf5Ga",
  "key27": "5uYDAGsPp9Urj3gZcNgJMQX3CRkzriHNUybDKeJKdqRvSVDN42ytRKL4km2DRVfxDvMMuG2G88otDNHhSGW7nXiD",
  "key28": "2dv7qgZEfDybSverNThy38xvoxf1PBLXGjfUnEvpr5FjB2hTqcijBnwpyPNNLAZPb5DPTqRjoMRijWQPVXULQTzZ",
  "key29": "3mF2Jhw8b5MiCeDKD4rHuc7XwvUgM3VWdXHjvapuyd3uUxKPNBXoV5KFTNA2EgDeBvgiRvUGhCtz1fvUNfsPm1VH",
  "key30": "3UpJkyXkRDT9tRmf2K891w7HYZGafYUiQH9fwjW73CzhqyX3bm9dkZxHA4Bvsm4r6YprVwRLigyvUVjfAtiiE4qm",
  "key31": "32dT7epcaqQU2afppRfQYbgpc9AkvWPoP6WWQmeiaEz8V1BqmcghmXyfq8LQzwHQPZjJqRZe7pjpaRZn9qreUj5w",
  "key32": "2X9CEBrh3DNrquqm4fGnKkWXhLWwF6PGiJX2RnuMKFHGAvPPRm9zFecgmuWPUDYHTA5DJz3LHjbhKa1BZyCPAUQP",
  "key33": "2t8P5E4FBEonv9S3W3a8Egu1xiEEzNXBqsQvDNnRLUvjhTMXunyJycGLrx7ecZ8JQBwmnMDhjYccuFwRt7qx2Upf",
  "key34": "5VMfUiurHo5MUxRupMDKwJk8mTFvPpGU8mBRzk1RSf6gBumtHBLQ7ehquHGe4aCEbi4WDeMUnfvv4Kw2w5Z31V6d",
  "key35": "eKYy7JN4ooUTvS4qSYwQ5Wb44Pd8X96BDWw7wV8hGQZzu8Ag85shTAseV7S1mYfyrYRTB6F1iwkHaW8huXBtGRe",
  "key36": "34BShiQHbbCFnZjR1EzaouD9U27kCJhhcQUPbruqNaX9gZwH3zo1Zk6PTXaUJyp25f4xCPSyqUfUhnVW98M9FiBz",
  "key37": "2b5Zd4t2oBse94qQmJSZ6NGfZmoRBXy2BNXcmLHGYasmMTBKr81PdjFBsnVR6V1j8hwcnJBz1YWAqjPkq8EHDo6W"
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
