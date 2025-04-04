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
    "4JYj4rEFAofEfZC1PXB479hVjLevMxj8gjCmJkgUCZ72VnJfWshGMzbMgdGJCawR1TdwzFUsddmqjboKFwuzXyVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gq1GkBWyj7uBYDTp8DopdG6QKQtZDNyQQ44mLCQ4eaV6VGabG1AvFGQSUAe1tcrHhYsCASe5h4PqsN46R3tAF9c",
  "key1": "4ivzEifo6L9V4hWiuCCaZHNszZqv4abkzjae31kkxwHjJ7DSXn5RMTcG5LqPMJrgjd5LBHpUABu8BxdBEWWAqtqo",
  "key2": "5fdpQKb3ZA5ZFiVEc4Ue9jgJmQTD6LbunDesZi78MAS2KfPiP6ofKcj5KxefLcqWP6rUirnpH8hzSepWmmvBG6JU",
  "key3": "52YwT2NNhq68YKMiEc1DzvmA2bci4R9d8gxMxiMrji4cGTE6huW9F6hvSFKE7yUATu7LBbfJMMzm8e7BGDtARdu7",
  "key4": "3L2RE5Rx7zPCdBHf6NbZqwdAG7KvKNqPDzyNVsG1oBye4zwiEPUJmJRsXgL7fKnDqCUARaHHxWUnoMchPoaJEJee",
  "key5": "27fh1yUN97oJkuuMJiZP5Eotd1tfdhVUtcmw1y4xtEUY4YaVJUfpGEt5t8h5m5wToc2akDLAocz2xfg755p9rU3z",
  "key6": "47yneDkAP8AtHPvRj6jZgdWW1KqtZLP2pa4oNqhnkkPfJHAuUx4Uxig7on31xsjXMfbzHqG3JJbo6Vp5pxVbvhwi",
  "key7": "4VqzpsR5F1WQy2YdTDEP3afekK45NnsJruMUbLpQX9zGh62Eu9xaefAZfVt79EQikFxPVP1Yme1zeeZzAUMuzSXy",
  "key8": "3jpQqPGpCB7bqwyX2bpEXie6SrU5bQf6n94ih9iT5aANuJV6cNBvUqbJhL9eDUWQUwbZbG6XYvhQZhHVgN3AsdkW",
  "key9": "5hQyPbtJChtZp31UsxkbJDPoeu7GVjsaVT4HWqvZ7skDFxjLRc526HTiYTGdADiuCx5ioNLL9TvjtYZSMWwXcmtz",
  "key10": "3dA2qjU2bndjzpHr17nE43fnfPGx33R4zC232epWX9izKZFXkcmYQxgN2sak6UKE8mRoCxk9kQxzEf57RXjKoyZm",
  "key11": "5igxyQWQvLxd49mbLjd41PVx1yicqvaTrGRL2HKxJSXoqc2TYU1gn6X2M11VzupREq1UeY2DtXvD7Fwm6TV4ymff",
  "key12": "2Yfp1iKzEdosqmW6iXfqwqp8VeJ3L8RYWKmHwox5Ck9ai5rCHoX8mTEAkAoEr1yieM5Uf8WKPKWizdyezLeSrYCh",
  "key13": "2yTtR2ZxfeUrCNbG4GwUQHMhHr6Mbn9Lcu9t7kLrZ7CMfBmjeyRtJHdQypYi83RquG8n8CPtMmWXfNHwB1MGpBGk",
  "key14": "3Fx81HXVMEr2mffwr5Pm2ExXLJmfZpw8Y8KcxCP3HrY2dnWtzVSyRBUHXKC6n7bjhy6BevY9STL1EsZgwJd5yfgb",
  "key15": "3HvyqMsT4BcFrkxzP3vBNUwzAT2qQBeeEph8ZWAGVTR1rfNpp7m55rjzBdyCDSZNNkKWVkw4BT1MHgJtVYz48CFa",
  "key16": "53EAAQa5c4s2XzSzkK2Qbes8vKD89QudGkrsjMVxMvgVRVRnN532rT5fpbRyw5SQGB8buBuDVbFpd3Sp93kW96UL",
  "key17": "2BXFqpggjN9Gt4aJyhEhr7dQ4mHGYQbmBi56eior6zNCq7hHUWox4kaUUKJMtJ4ucrogbKJkXz7AAVVK227MCyWc",
  "key18": "WZCsTTRTHVPKbzS8LtGM7VXnXzEzkMSoT9gjKU4JtGdsKkvBduaPbt7kybBjjgubgxaVTbhAaATtRT9dk25LVvu",
  "key19": "24sxWQqsDDJHNSm1CSPsAwxZ5U8z1GGdt8oUjJha4ydngptQLGigiN43txYNQWbNx1Wqh18JZDJpFzdCxNiKMzpB",
  "key20": "5AA9QSPN21tYgB5sun9t21ctyDq6JyACjiwSEC3xup5yicoPYpFMzeHScZFdQuHxwdvkmEVQsT9sKdhB6VksXnxp",
  "key21": "2HZk56RewNjJDm5cfJJzbf32vDoWjp3fLBMchw4ziUQzwjXdFkQoiY5E55rWv2LsAx6QfEwGQPPYXWXrNCt15csh",
  "key22": "5nVX8U5jki9WvGndMfjwhuHgowt9FuQyygyhZ7PgdajUwHdnN3afeHwMjPrAMv78gCrrkJiBvGTGAxTnexZNXADL",
  "key23": "5zs2rWAqcLkFxAhA8wzeF7jzhv3SUazD6RbmFDdP177xrmwehFZPQxSNVs74n1aph4qAqKA7QHnFX17YN3y8dpZg",
  "key24": "342G7G4JCEM3e5rdc45Ruxzd6twhA3cDpTWxn2uStbCHj6ZyLcsCwjPLKKFc3syNmp6kkmr8qF7rL63tq9kJy5f1",
  "key25": "tVm9Uk2EmdAZ3tmg67RHSTpz7MnmxbgZ2GSP25ZM2MCkLGrvi8PxEfHN8gHbeboedMAjMXZUMFst7TLiycmWqeb",
  "key26": "xAZaZXcFK45196PL4n3UGKFgJKVzU9QCsM8GhPUq53Vq1rkNx4e1ykxYd58qxjNTqjrQABTx3AwEinFN2BrJC9n",
  "key27": "BCHRAUziaaqWX7ckDUAqX3RAMHo1dFSg2tVUBFmSRTJFUFZP4sX4up5KCShT8cub8ensoo8kzCemc5P5P7ZSKiX",
  "key28": "2Cbbxd3tX5ZrcfsJDEsLPsqMhhjkUHMSydemQaEVYUamutC5xdjnLLKd4gaBpHRnEEQ3q6RyiP7EhijwkpHKcJDu",
  "key29": "2tRt4RQtvq7DeGPVY4n2wiF8XjdHic8S6WguGnmzdKvxXZyvTT2kBNLSWPGzgQJ24VZEPb6JgyapjALMdJ4TeKT4",
  "key30": "fkVtvsZxMUf7N3fUrxsoXTmwYRFi39abT3EsR9DyWccpjaEqUZMXKooPXdMtMkcXJfYERh4BZzk9hHn9377dKpQ",
  "key31": "4SxDVHfVsLpf5UH3ESKhdDJQCvDKzarqBZG9NmML834AiyZZE1f8DjrfzRM8rtLv27RkCEPJyjJEMR6TPy5NiKdZ",
  "key32": "8GZM7LcinDtExocKaE2frYP5WtyS8ssqv21WEMW3NFk8DTwABE8mrUKZ4m6wh9FZNtbEuF92kHUPw8XYo4EKzkF",
  "key33": "svbCBvcGn2xVSSBBDWbajBkhCS8XPJhajhRTp9t7QFGEAryKuei7qmkarj4GcN2qD13yFSRNquZz9EFNGeEoGps",
  "key34": "22Ktwu3bBNQRzSYY69GV91Qn2uK2fyFmZagTrBYEncmAUJDZ3iWeMUgEtXGeKHS465eJQJdXv8A7WUTXQEnDvwqa",
  "key35": "4NiX47cULNZXLAwTMR6RBvqGM6S2ChZtPVpXnjiZZzcbXPfNnRMRePp4mAjkd8RpbutCfFxBuQytSDswkh6NGpDM"
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
