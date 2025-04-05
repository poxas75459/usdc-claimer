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
    "4QDhL8zp5d9w6AKNwg5m321vn3V9BKCQmuw27uFv9rqvA5bSDq5FKCeAezHufBNDbaB5rDjPvWj5FE11FD5XCiQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYE1Yd4ZsqBygZKaHNKTjUnonSQkNyr2DrDcvEHbHPYBW6HxXgUwGdzGLVvw1jz7ByG4S2FFToKZVFXBm2wqo8g",
  "key1": "m8ZThGrsm2goujAKPZedFEVV7gfV83gFdRorcDTNWqb4H2ggUsRazJT62ZVQ7n9g8oAmqX2tPXUbxVGrLXoJsHx",
  "key2": "4iLEaTYmwsa9E8P4Qz97AkJpCvwBFYBUdXVHxGHe9qYYj56JXdPiRfeASiFNiS6ebX5PcbYAVd5PaogQqLckfNfh",
  "key3": "2VeDsD1LsDjYLxAe4KJZKuSquxw6WTjUHXbCebLKmUpjx6qdoMuK8aczWBAfX3iDU24BM9iWJdhmZPoVcj4ExxRz",
  "key4": "PrivQhkAw9W9nuk8qHwF3AHJ8YgnyxV2tMpweiqzoF121tRwa52ZXh6c3X4vU1J4jSsxnLQQpYkPz8ovM2CGZ2G",
  "key5": "3Wa78tLz9oXFmUi3r2xxE59jpKDw18RX4AWDC4s2ZCQd5YFkr1hPcA5xCPBoMa2fJM8DCwSbN1fqegtTiQHGDJot",
  "key6": "2Lo6BPjdShfPK58omtfY2E5XpffLyHeH72MAVMJHFEd6XbvoGgAFTLC7yNi1P7gT7hSPGbGkmmNFWW5cmhUK7q7F",
  "key7": "4XKy6nus7fC1WTgwnnc6bcvQ9QSMZgeYVzqRyJiqkfBPDmqnXVhW1Lhj59sqjq6QTskvKxh1s3VKV7x1RHJhzTNR",
  "key8": "2jxA6yPiRpAqNrGcYsmvpYBHRzHivKVkXZVDMnBMYNBSkeauBAr3Uh9po5qHpnp2rG1WvAt11C6xMBFsuSmZkMCk",
  "key9": "3pg9zBVpXkaTei2H27g26dyWPDg8zUDsFB5yGUKcmwsh9cZUmTY8hWGJkqfbfGWfjbggUZayRqPmCD2Hm7ygeEbh",
  "key10": "5iv9AtiefV1gKbg4BQ3gfMppYwr7rQQ5c4uWMZ9tHMh5oN5eauTbAMsmt3iond2sAWvAtDAhAUkRWzr33gYPzTHG",
  "key11": "27Bq8UaQ6KV6UL5sjTsSR8rtWjMsVUnQdynEHPshy8FfsknEg1QTr4gDV87H7mDzXFsiyYARwZtwZ77Pv2Vb6fY9",
  "key12": "4i6eFnLwqUW4zqF8nDYvm4gDyTgbni6kB6Tano7HburLa9tJAEeRFvQHDXz4t7R26Dv8YxYvSFAnLhS9YwYGNHSe",
  "key13": "4V2WUM9SLjMUNG8ijV7gFvPETUmezTyQbfw7Rij4sDMPqUU3t59G9Po8JrQeUgA91RBusSCViSP2pfvfrdvYPn2z",
  "key14": "3ALBzyHVp6SrT1AXBjzY4iQdPnaSF1Rp26bvVDBQS2Y3tvjWqGpMJm9FNseFA5MwHzG8sRMaXa7Tzv4LmmmLb3JN",
  "key15": "3uSwAs9YE6ywHSnFpBcy33YGbedpSD1oD3uzqPcLGy8BybLjLor2xGrxqWWj7iRYMuZxts3q6FY3wZwiFLv54qos",
  "key16": "614DyRyiepheZyRViGqGB6TDfSZdE39mveVGv55BduqDHefAvwXjH3vQY4enCa9FBfNn4gGHd4J2XbZcDYGVJDVA",
  "key17": "4mxi2N17cQ3Q4zgiS1sQXgsTLVVqZPJct5zPvMKacLu9oG9pWW4NHSDyQTkSjKbMjdjm7gXDsjT59sP7h2qxoah5",
  "key18": "5A4BW9LyKUM1UT547XQswUTRk2tTSmVR7PwXhkPLkKyUXMiwS6FATzDFwzJtgBjntrhGqhFiqexP3JkaUvDazciR",
  "key19": "52pJ1Y7FNwkxMCoWunwPm9EfiNZtJn4ZAzmz9Xmpp4F37wwrgTfzSbnGsFXATx4enMHYyCDC3a4ZBEKbyxWvNyTw",
  "key20": "wybWqUyV4zRWuxHQA96b9Uawtw9QmXEbY29JK2YmG9fNYUEtSQk5ESnrXyMxwE9pCSzzhe3D4m8RXMrusCyBTFr",
  "key21": "5Ecm2bf2rzwuMEk5yFXmrEdvXdgdrzr9wi4UTJmw6vMaj6uMb2MYtoAL33xgZNGx5dRXLEcdPGdu2N4iPemgB1aU",
  "key22": "3FdJfrApZiE9Ez1FnbhHTUKg5ABunfS4GAh5TtMKkMS6LJZSUBTu2w95RyynSfJX5oy3e4khk8rB9a7eN8UKPReQ",
  "key23": "5VErWDPNwXT6kbJQ8tye6HWuy91oGxJ47e7jFADkhWm1uMLVDBP681xfCE9AsemjppHEG7qCoz2rks9ou1NhdJYe",
  "key24": "hjWsSHzGVJmc4duj8epSAUH5ahZr8UePLEAcFX3UeAsqbtnDaSVjgiZ9ieTHuHvfHBjCpBJvUFedJGSTvkTRKPj",
  "key25": "2xCAxM9RdxMWg2g8hbjxczmdsTYMztkU72h54cEd2vCxud1oYwG1Ebq23MRQRcanPn9VUQw4f9c6Hm9uqzCknsS1",
  "key26": "5FvCNbzLPKvihPx7YWnipdyFRGTSUpNvqEdGgmB6xoQ1L8cm4FgNvVnWmZpTSoZNhTXgjMF1RVB7JYW87GB1u4rU",
  "key27": "3h2Gs2aYaDkZurPZKiKBiqVqNAvWUMr3FjxCJFysR5rUQP4CS11JZN8y713BJhpUdGhmEp3TFZvHVoffrjpf7YpB",
  "key28": "DN7e7ukWKUMHkG5mLaFRM3fXGgWsdvNF4Vh8DWC4DZHD2aWaPv1cxJJGFc77ku9XDnjCR3kmjqM5FtfNSLLoPND",
  "key29": "478b9QLEhu8xH388e62LuBHJwU67SYWRddwvZwo4cpWxHzFZJ5fWkn1jCuUteQiFzty3bi96VyfxpEGiDxhnDjpy",
  "key30": "3gvHkrXcL67KTUzrE6tnLeubBT9HieF927fPakjimKoKcWs9w5aj44z2UMCy45jpoKz5Vpdtn17JtNTTX2ia9suM",
  "key31": "59rN6csTWSFpusxEfcVmTzFBWw6LbT2Ss3fjjb4UEz84M6oZhGuJKsE4JQikt8bNa9UYc3k4L8MuA6DDkmyLBU9V",
  "key32": "CW4Ziu12viiTU2g78xKAMn6fQkWLFxzAW1fWGR5wWHhT3H4zMBtzkVCvVxfmRpXERHrNVujGmJpyAL9syHSRh6J",
  "key33": "yApR65NSwfmRSgrHfrUDmAYg8cgVtz7PvRjsestxeiD1GazRZSt5Hk3mbmWNQBcxHqqabMUggbLzzJk72r4mMZ2",
  "key34": "4kZKdrjpoRPa1DnAQhTCzzbixhAqA7MkbMUEqgQKvnYgBAa54yfDbAr43iFCxo7vkFJQ2qzpE3KfxF8jWgofEbFi",
  "key35": "4ZQ9jPVGp2fdPByxHJe8gindRekuLL2n5bTf5uqhMdUuGbbVc8TTT3aFAkMjqobKS2NGwxSiJqbjmmJ5GhCJz3yh",
  "key36": "j3xYr8doy2bEE9U4DYbUXcARTX1LxkRiQpCcEgGP4xZkzo5e8kL77uJd1YDcDBx5tBsrUV2MX8SSs35HQYdwSTz"
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
