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
    "3wQeBP6ZNCeDE48A4cFH8DWPxZztnQuUso6ZCQWkENtC1noCb1zKXasQuNEjRme4NoUKmNNWg72emAVUzYd6X3iv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "452jsusoz3cBMvmFMjNXoY6qT6iDkMNeTAGsona7XC5A6g1prc14xtQnQAaymXWXncLKX9Miiuc7e9xF3CruL3Dj",
  "key1": "61m7qqJuLyNirhqhaGqh2FAxvBnX9C9r2oWebSDn6cXRUDqAoCazzyLWoeSLUD15T5sym5WArzPWdsiGSmueTekD",
  "key2": "Hxo8H31CnpfLkZBDoE1AgLrsGRXJxQ4AZ1oY3RTCHsEdJQZe975QQSEBXn9wPjHbZpWoBeyexh2wcxbkj5En9fa",
  "key3": "4RfsVfVsPeejvKPrHcFFBD5Ym1Ex4HoTBZpmyRdmdBSSNVCGdeLJ7PGfSvvw55jLRCxHvJzRbznSJTcssq5ruJEJ",
  "key4": "2Bu3DF8uGBhpP5KdayNTsGMBqYasNeS1mhhp8z7YNyMpLQQSYqvFx7cGd7qAuckADPyMQq1ANuw1RTLSJbfieh5E",
  "key5": "4iMKHsaA3orTGJZvrtqoJmQFJE8Wbnfuubi8eNtLK74bfgEM3aCSEMH2hLD14FY9rEwTry7D8ZjH434eUSEKsc89",
  "key6": "48Ax8e7bnV4QucXCs3SLGqZCqxCXPiLLcR7DtZWiDHFrwfGhsbyFeMK8UvVSxZPUY5J8cGBTiTnrgBV417Grx9wo",
  "key7": "4q3MhwEKhqGCwCKjwcKFqJP85Q7MbAHYn8wdZh8AgyX6ZZdyZTrMgYC36GjEhnEAedd8RhfJ5XHTnraezpxKBEJQ",
  "key8": "3LEvP7RhCH3u4aM2K5M7KHHJQkdhaXeR1UWATM2pWvp8CZVfTUCK8Ja4qeLQW2mGYd9gZYq8hLfWzYrkFQzm6kGo",
  "key9": "4pUKNGPZa8AKSX3Bw4cxAiDzXtsnxsfpiF97kdWVrxANJafoExLZg2QtWxuiVYnG5TZhhEiiQu7vGk7Vuv7zPpZy",
  "key10": "3M4HLd8FLRf7JKywQDWoESj7p3mHKdGP1UxwuazzeMxX5x5RWwGZTXSDngLwkjp4iJCEzVsqp5aid4jHroa6Mzuh",
  "key11": "4qMMiKGZhQZLrHsPd9HTYgbtgCfhvTd8tCtS2cChvg33enBQEVKLsJdiRm1hfXEWkwegpiNRrzX3reKwYqeMXgpf",
  "key12": "36GKz7SJ5c2JdyTfTC7GC4B2W2ByjUR4nnK173zBELCJhiaByWWoHs3QjKeH4VaeTpqCeqzfQQ9BSRseSdGf4jCP",
  "key13": "2j6Cg6HdFA8jxudW8fuihMDRycR9kuL6LLTPNAQ6a3zCXrcd48AGipmibfmqJGQ428MzTKNEZKSUko6hvveAnLsd",
  "key14": "5VSWoXDL6KYVfqsejPHmRccXLtAAEkithzary2rX24dDbvgraLtU8EUyMLHtf6YSP8gyF7J2JEKiQrRyFZLrBouh",
  "key15": "3WUNirE7RwrzMRpwkzdcRQT6UiWtVW1KsYYUV6qS73gfjUMEzWLMpnVeevvTqW6E744gxEAq3zeUDQn79gtQFfY3",
  "key16": "RhLktPvLrPcauMAqze5ZTDpGs1xPkrDQJoDhyeU5pTv7L9G5DtiZ6hQcVyg1uwYRuHBwSdTaeabMzQbauFJguwV",
  "key17": "3oXufJxxFasRyZZUzFovmHoeeNq4uhU6Rp8j1kWTU3tkWsk8UBqtNYJAVtqvfVAc26rqRSC23Pzq8DQ4eiSJEjYN",
  "key18": "56HzgnLXkioYMqCK22g6UFScU2kDg1RdNxvFCeBbbX5rhWr4GmrbzxCrU1JTssFsztZaFETbRJtKNhoBxcDg8Q8F",
  "key19": "2A1n9AT8agf4YubMRDpxUgsVozyEwyYtMa169RQPnnNp6GN8fmjt44NvLPo5UCAyvE5As6QGQaanm49gVoB5Subq",
  "key20": "244JQ6XDd1anMK3KJc58evnEAwUzVJRYfTaBcA1x4oGNNeL4XqonEhvs3Jz1esAX7Nvhf3xWv5m1d9ebHsKTpAWz",
  "key21": "2JLjG9VFhDkKZ4v6zDjEQmKQzvdhhkHxoi3PUUG7brqw4vNdbGUht1Z18xSUhLWbz5jAtBVbCvabhHDA2Nxkpjsk",
  "key22": "H2BEkAjKku8eYGaNd48qwoRu86KNjATCYLwgJwvCdzSiFE6WMhggzfuUHS2GEwW5EupzEBcSdWeJEsHPEuEuERe",
  "key23": "4Vnm7Pw2KTbT4k8gCfrFvS5jqc947b5DneEmQyw1cXdHRJwWPcwFUBn1EC53Yx4JXVqasbYid71AkdpgMr55AD8t",
  "key24": "2wRa4xPZUQ7eEhpyY3d9F8WaBCpL9bMMRBnQ3H4vt3nuVy4TyXx46tshkkdpKF9nuEh8y59WDhfcRJ6q6QWYQkfB",
  "key25": "5KqiHLkqxBKs5jL1BhCWbivZ7tBMap3r1bGBVCbpSor1kJYW2HHmRASxBpUnvi69R4tdTn3TJxTkrY9cUCk9gifr",
  "key26": "gNc4uNyECCQMsMeuySq4SFL4o191p7h8VE6T7yfvL9JLUZ2SjBFPLaDoa5dLR5dGJsc8i7GHKYL8xQaeSTjzJPs",
  "key27": "4ViSqkyuVjGiVwyACTVWhVLVgVJehXvKmADE4scvMqV8zJNxUcp9EDnjPBH8iAjqohuaw5PBHeQakPuZzsZy4un2",
  "key28": "2Z3YgdDPwGU3oWCjup6Fk1amBhwreTbCfWSNV7DQwK6k62RWyA22HmXf2A2LXUN9kUFiXQ5QyPSR6gwrn6uLeWUs",
  "key29": "655AiJMhCYiPq2AoT1zJ4D81iC3P1RthYGZ9o6VSRzjuWzfVrxvoRLyQe32EH3AQdAcg3pYoTnHHMbFHAfFN6hqi",
  "key30": "29aU5ve9jNzU7ATg27vWRMiAhPUxeUy3BJcUkEyM8JPJuN6x1zShVnw6Sdkhz6T7CvqRXjNEPDBcdU5P2MKTrZzo",
  "key31": "4iYgZyvLXjYncK9o5g7JdzhR2SLc1HUkLKmY8YLW6BTGB4FcG95PRQYW9yj8ZvWHsjkVqL1zNHSVocebMn2aTC32",
  "key32": "384pN2pbyaDg8rk8Pz63XjdBctx72wETPHMSCL24Bb9Kv1wWUPN22drV92W7eigk4yVVeyZjmVFaGUjsVvd7zAtR",
  "key33": "duk3Qgys5v3jxw5EHMGjpRDKbJGXgZLXMsUfs7R6KN9MSCgshs8CMZC7T2vnKSnKjDMJsxAmgSBFAmxAUQnZ4rs",
  "key34": "3diGYHD3iJJnWkgJEmgJJg3WAcQ6k3AZgqzcRuYC98fNwUa56iWkbPFgLMZjp9k1aEbcAeEiPoxppAoyWEN6u3qT",
  "key35": "283Mt2AjZNgWsQ94zddsNFFuymGCWJmwkaPRZarNn92Fe5xY7vMyox22RZDEy2hzZpBzjMGw2eHnJrCFCSwBntCE"
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
