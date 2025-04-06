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
    "3hadFd8yjD5V7y6YGPB4X6USY4yBSsjpp6mP6WTJJ1S8BQwLs7gJ7rMQ7hdD4ugwhteTc7KAeufQD26yrb99eC2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488UhUvVGYENXorpRtKaYU3qXcnH4DezbfDnUiw5UDnuuHmCkzjTujqpwZx4XKeBu42oSj38FmqJs8FgnXzk9Wfq",
  "key1": "4x4GeJrRx16aQbMxuQWHCLy47YdHxFtS7zm8WDqi9xksmfvgzFm2dPcvEqmrLMzMxtNsuAbFC9N9bPTEVoji8v7V",
  "key2": "Eug44SfVcyx8GW9CNRxSdkPC3vUNsEfkLgS1PfWgv39hwdVPwhRczWycscKsnwLHKcRqSaLTvtnJQm6AgRkA3FK",
  "key3": "47cuHb28TQSjnQy6qxmcZwcjcsnkU63cDvZCu9iLtGW6ozPRxkPkoXeWQ3wux5UwSXHh1THaCLgfuHVsLLgJWCkW",
  "key4": "JvZN1AiEj1JKA1gTmarxUMoApKUhsLwMcX6R9434cnqJHKHk9iN7G2VTnYTAQkLMoTXRSjwJKhdppsiMTb255aX",
  "key5": "5Nsxow3N6Ei4g6mPbsfdyBAZw3uAeKiVnX1B1d7Uz95kjMCrUyLT4bED1aMQx3y6L1T28mGiPdZ2uDyXjXPq7QFD",
  "key6": "5RmwyDza3i6x4xjG7EPdeKXLTSThD8cPjqZbKBwniSknmnM7iEvwaj5RDigYujA3YR5qd2E6RKD8pW64KVnMEojf",
  "key7": "5U7nxKVpHmR47gAEuk8cfc3ULcUZhpiocYfAwaftRdXTovuBcvmiJf4EQwbbsp3xg73NhQfimrYbFJov1gv2Qxqn",
  "key8": "4Lm7Z7RmUiinvv3ToawYfLcrf7boiRLEVxmQPQ8PfHqZBzKhU8ZAh1zw4faPzy9AL9q85JrqNjRMCa97T2E2bSGQ",
  "key9": "26jZfTUoBeGnkXbnyBq824x7pnCU1QzGUcpzBP7wnYqKy9ZFSVQACnUwvMQKGr4xWvD7oxDeZXdcPchZprF9z9Q1",
  "key10": "58otfjCstvC3NDArywjazhprEYvFsEvbGxRW52xfpJV6eH1YXxX3Mv7hDNDRYLdvF3SEJuD5Jtr1PPEabPUUadgE",
  "key11": "5q6dWefSjQNnAix26EPXg6pE7ShrNKaEDgdtnYWXM9oQdkNEBRwfGbuCXhitaW4awKCWk4TCFkU2ECWc3LwoN52o",
  "key12": "5ACTUnWLJgrDidSJPY63Daby4yUWi4C6kaRffxunvVL4MTA7MiTxiU5ub3u5gxos9RZTN6Ce8YKi9LveoyJRUGhP",
  "key13": "61xaQHrFJSwyUXYbnQAkMkHGrhxs9eiavtV5cLhbvmnsjxPvrJfdJxryQEJWofhykhtknh98xNuTqTvJGaCumHJq",
  "key14": "5JUSnGtmk3QcinNiZvdURvMhVUzY6CPTJbYTXALRCMBKDeTEKDUX8VG49A4TctMpF3PKKRx7gNoH7xNfoqJEbq6d",
  "key15": "3DrPrbsKYj9xWUYR1eH1DNqTzDEyQ7caEtFmyqoZor5rufrimHtA37Mxi8XPmF1dWtrRyGP17qFWGyHRF8nwxNAK",
  "key16": "5AAU7aVg4yuFPC7mxJ6crtxpQSF49uCjopuWzLaoz8t5YfNR14u3DsmVfCBDDvpBkTK8cDREi5vdwy1U1gJ1WCKW",
  "key17": "5QQnXBk3rMnEKpU4Q8QqnqFEj7zjg5toc8Un9PfdtuwDDfBayo2Nds5WMJfG7X8sjGjDBnE6V7qQjrmTLHsHn6ja",
  "key18": "2rJ23FSqRNCfhg3r6YNAipizQsFkzvAPYUMaqTPWwGCPRGovevX4uBezn34uMr3hMYcKBNzTWCVaZCtT64DXvmjS",
  "key19": "5dNvP73NqsS4S59EFRaBH6Ve26nNR34qkifJnXFpzNVGiZACcUttkZh52rrfasNMkutYGyme7hFEfBh6kGsYWzrA",
  "key20": "5ebgUqiuxqhjjoQqQFYXoAd2ze6Ai3zeuRuDtRUei54Zoqv9EYQchRDNfhobcuQpZcpbxAbyJmmwSPJQsV29bXFT",
  "key21": "7L8YUfz6oYXR8pV3deWfJQQa5Qy2yZYZxrhTjnYcCaKSwbsYExcp2kaUGDm9qmspisJPJ9HzWN51QAxjEMJQqMr",
  "key22": "26eyNJBNNgEa27dGpNaGyHeZ8Rb7VUmVDjJVD27kHBCYfmr1hyfECSLQGXZsrNXVqg3yTHfUDuuSLu8nbnBun1Bz",
  "key23": "2WQS7v1gp8HiQzK9H6HR9DN3u6PDMQofxxGzMQtH26hpkgDmmRvZuKBBNaZEjrhj3kfStK8hpLJUJ9dkyagHMEy6",
  "key24": "5nnd7HJ6TPkjh8DwzMqyujFNfPSspuwx49AxLTX3acAkkbJNEDNt8PpS49byjXSxzbJoT7KVDcfVi48oNASwSQWS",
  "key25": "5WFJ5hef8P2cSuVDH4bCe6ortTMb11kNLshnPzXmE3SJFxmmoVoXWzPi23tPRMLrkL46VjpwMLsq2eYzt4tcZhW3",
  "key26": "267dL7ZkZ1JYJpqRmqhFgeWg7bnbBLKgeuQt1mhHU6xj52whvePB4X2cjAhVU9H5ExxuviiC2bpnMtJ6ukJBNh37",
  "key27": "59F9Zrfu5RoczypEAkfnnUcHuvw5zVFyzBhLbDBwmFEGBVJRfTGW6tJm6Lk4tdttm7VwtTHKiazzxS3oom18kXX3",
  "key28": "DwMkSGT8z5n6zehfahEEnsK8bVdjTYRvEtx34BYXyydhYccKZ6k2CutJiPwdVYw9whQ5Mr6oEZWizwf3KaJMLpD"
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
