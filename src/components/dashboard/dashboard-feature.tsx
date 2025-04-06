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
    "3b5sWJbU4jBK6Y9nHnGtqvxaxRRFev4aJncFWVRAJoibBEAvyyK4DYp51XoVyjyz9X24WrZTKh7gFGRJccMncXxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1GLexr8jX3cWqjEBd48Be2hWn7YQ5GA7rx93TQ4CaK3bK5wTeGJSiqyJG7YHk347QEv5c4ZLmpsHMBYLyhnT9d",
  "key1": "23Q2xN1qp6rHdhKVnjFh2gMs57BzC85e9nmv5K6GrctExXiJwVPV8PXsM1iDhk1ca64TVZNutAe5q3MqdxAWbiMf",
  "key2": "3vjQcoVpCM3KX9SAD8NuyomWutozjsVaBgrikXx52F46wc8DrsZkVkukMBrFoaiiKZ7fUQQkAhVYgaiswmtMbFUo",
  "key3": "243rmxEabqUVgkgSv2dAP81oPY7xGuCAAP6JasyXcnbZYM3be9cLgozyHCJB21WBQeYvc29Vogsz2y6wfaWgvc76",
  "key4": "7L97Yq8LXaHmWKTcU5fFULnLSHdv6YLKJiiNiVEKUCsoN9hqp2PtdrcrhUNMxZ6AbkuMEXqQnAKGqNFXCcU3xWA",
  "key5": "9PaPpArw32TniGzMn8dWLzBJXnpZE12gZyynpb1JgZW6mXnZPeQCwd1X1qYH7XmdNXM9oVDgX5Df3t2Xgo8LAEL",
  "key6": "9mAhGw69Kx1pzFnSMDNtM4wQHbwezcN5DU6n9JkR3hWwoYoMV9i3mvr6NybxDbVtiS8uhtxzUUTa8QuSqbnDNmV",
  "key7": "fsXchhiKRj6qf4XtfHitKYkdd1NvG9SqmQgwmdkv37tV1EcaDSWwZEtGQYJa92FsFsNaJqAdaeXm3H1P1tt6RTE",
  "key8": "YB3ihqTRrpfzVo5Mu2KB6EZYKraddLgvsRCcNPDMzJ2nXJtDDbRPWfzuJCg6cc84Us18udqEUQJkknFs4Rn2FYW",
  "key9": "3xB1LuBYRqkZfRBgF4iC9NF6MSNLxTYcF5udYBDt65HysVcri3pb9aeKQ3dpVjJsL47fJ2nodPs9YsvjchtHquJ4",
  "key10": "3eUHmCu6wDAEYFq158K6hiMXQsSdptNQNrvAPhHsZMPhknzXTnAdfwgP5APgn3hsJzwbLmKXVpxFkUv3DobbrYSS",
  "key11": "5H4Q1UYTQ7jVVo3jFTxqFgGJrt9phD6sDJ1fRUf8dYy7te7Cw3kuax9oVZ8gFVMvzuwiVFWL1agneJah5yhb6tvR",
  "key12": "21ty4osWvJw89XrzC6BxzqnBMrwpFjg2JgrqDtCQNok7HVd9jmkfrUUVGmmDgYVUaQhbCWBPTVYStLcX8xWU7XFg",
  "key13": "2Xac9EMRL5Du3e3K846cUfxy2KHeK5mJH9EFXvuJaLdUzzvzi91KQg6VjRyAiPYv4Ebm6jRL8k2TDraCSLBzx72h",
  "key14": "2CGG1KEt7fQ8RygV9p6YBpB7iY2DAPi3QfYRL1BVxZsBh7bgkDeaPuLdH94vtPDCJZFPXZRhwPzmkFiuW9vdKGMk",
  "key15": "5JkHyY5wbHGQAaHoJ4eLj9peHKH79rxu36PgQTK9jHxF3pxwfmw44Y8LSWYAQLunzpXF91JYSKey9peL1gT4emof",
  "key16": "2q9zcYTeTJxzN6tHZg2QgswXcrc3odbRwDWHuXyUb4gFBzMS2Ye2oCz6mtRHnkk3yS5h6WMN3cJheuYVjY3DUBaa",
  "key17": "4Yfmjvx2tt2DpDk1hjXzH7ZdRH7uBmWNzSRgY2Ay1EnCwq4Ls6q9d72sgZeGHyQgNhnbVNhRnD61qCVWMPnPinCu",
  "key18": "4mpcmw4GWvKpGzMKdd4XMz6oTngwyEx41QGmMFYSxgNQNnXiaNDUSdJKRpBVCpPHvFbjjZLa11pK6MPixjPTgGnw",
  "key19": "5WAef2gjNahxv7nuUkDd9HYS6KaLPQz3VtifzNBy6TeiLdxG7KoCYVEcNQEKCqMZD66GMPfFLRG2MhDLh7ZXCjmN",
  "key20": "34L7ZVWthLDGUNxftoawFvcCSvfXHvmXK2PQAqUPk6vrnh1xiWsxk3ehGW3G3ozdiRsPe6nx8Cjijtfe2uWS9skH",
  "key21": "2Wvoya5eFMnStP49rbWaEhWj1KfV8zX9ivnstF6nFaGHNtAoz5TVEman99AaYfwqjawFhz271H7eTTx6ZvPv7M2a",
  "key22": "299CGfdc2F46NA3vF2fn5UNsKBznJcxYJuV3JBLsL2Z1Jde1rAhjSXziragA3jD4oBNQ4iANRRpDNvfievw6SE4Q",
  "key23": "wq6g7REWgNau1EMfhLbz4QxLfohb2du4tt3WKxHesEdTE6KyYJN8VKWgcCMt2Gc8BC1p4cK3YmfW2X8CfgwiAU9",
  "key24": "2x5naLJYyoyUgY67pwhshDK5Pik6kiJc7EGpTWuFHFBHrqZNTNBT7teyA2jjCo1JHFBs8ai9q6G5xR6ZMqXjL6jw",
  "key25": "37omFM126QqgasUdPwQcuHoto94ve3UjdxzF1wgAKnWmctdRC8xkoT7toZZUmFZ72vC2GWZc21aNfcRYwJBz3mSq",
  "key26": "52w4SK9mNvWL4jv6uS7DVbktyjhnBddG8LL6zKgMQ3DQkym2o43NiyQo6zksZx5SHnoe2sVcHRBZ2egqBXZipF43",
  "key27": "Mba2GKAqDDmyXiFFDmB1nDdMaVAJugZmjWL8VmQwagYowXDXvTsjHNTF4fmV1h2Kect3mbcnNHmoujLf2mcJA5h",
  "key28": "5YANkdkxo4nuvbudneeQtR4MqZ3jAbrAZBR1kg2FkxgreBpG6z8fkqKt3x3yH7PmN1kXvfjJbdmZSVrhQB9FfeFQ",
  "key29": "4XBXu8nuLCKoEtFZ879wJ9kQTLosKXSuAZWkreLkNB2VVEQRfco7bGJoEcHSEP3VYxcvBoguughDNPWKDe7E6xY3",
  "key30": "2R4P1Tmfy9DCNRMZmmzduf3WKYDHxezXwCxBKow1RdPzfwWshRh8eyNEjCquezzrsR78VLtCJVjdGYNFizEE4466",
  "key31": "LPptFGCf5jJqZpd6k4z6vkTf8k5DkMQXZkeDuNtvW9u7QygosDj4YnrLEQCzWi9PMRGCM5FNycPNfT6nD1wuVjL",
  "key32": "43fJdT3KDP22ss5YYR1NEzECPEBNwpm5uHruLLKSisyUQ5JoXu6rdt6eGvaWNb5YuKF8bQAn94gNa9z9o5Xq9SPL",
  "key33": "3GFUZQbiTE1xciZE8FqttaXxFZbEYVwACgwpwXf7QXqgEsaUVttXYtY6DJcwXUxkBTzPVPRCxizczM72yR5fyRx4",
  "key34": "4EGxUjcwseVLrmq8dUZRSFFi8BNsdjgva5u2sjYe8n3VeGmchbSY7ZSB5QCfCsh8vxmYTu6TJ8SKhch1FPzVGZ5k",
  "key35": "2R3WzEF7AoJg1T9yc9qg9rc4RLWWkuPZnDm6aLYk5U6FCrmFq8SR94RvCJR1LJdcCACQSX8VgWvz5zuKpEs7RUxK",
  "key36": "3cXpHd3RMm8whGRSWd9aay4Y4sn5wkfiRjJhq8bShfiQau4W1NuJeErYzKxwSZnFBYpGmN9k2Mxhos2o2sp3WPEq",
  "key37": "2dL5GycyeLuPP3X8mZTkxrxeu5eczBz3qeWJ88QLPbkyjcsHkDtMqMArd5nozGM3jB3tCRaWCVRygfBEsPgAnfSW",
  "key38": "UiSv2e1ypk4y1AE4Nt3PDFMF6LEqVsuBx5Zpv9TuX8dRgRjJouLmAnZQed5U5aPvv7ZWu2UgF7e58PWhDEfuaQA",
  "key39": "4UBniVEwynncCvfU8r25tyMF9A2LhxZPEH8NQP64pDrsQ8nsZMvcrkoarPxKCgZDPoYyR6w6E7r3D2awePD6Vusa",
  "key40": "4h9BVX7Yupxs9MWkcujquBVzAa4wiY5QQgRrHjooac5SJw6bpwG1PZj9RMjw58DDmgrZkhJZcDcdZsZEvqCyVtd4",
  "key41": "C1JDrsVqF5QNWHoS3gGsePwTbE2PXSCAjoohBtVxgWSt4VtYLysdj3bCmLZWPLAmqJLFyEHF5fmRiwDeaRnoeoV",
  "key42": "4Mqs1mht1WMSRmhfH6WXrkEtAL9owfKJ1Wen8ignLcLGqayqE6GnNhuXGZtNT2aVYVdmF75aFaHwC7jWaPkGnC5J",
  "key43": "4AQws8eTY8YkgQzfwbdcCW7MqF3RF4uAMoYkk8yjxDRCfvWFPmnGTtdrJQxYLHPZfQviE3ZEc3MHKPwPUy7Hwb27",
  "key44": "54LUDcxjP7FmGZdWg4SsoMAAWmCR3Uo1suyBnN3VWP9axFcH1mYcyib7RPHZ47K6STfy1RLMN8b4j6md859YtyWu"
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
