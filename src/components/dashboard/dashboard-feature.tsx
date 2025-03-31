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
    "3pkkfmsKusE9FxetyTZGGC3rCPmg8Sz1KbizeEbHDeYcbbJM8e6Jv26h1NZ9PBwHiTixMNJLX1KMUJoEp6PRkbCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACnkBsmCKJj5wNurugm78GyxRCUKtYvrUGv57CsKmZAjV5LjUcQxASmb319Sq96jEATuZXvskRAFMpzjmJLNCJk",
  "key1": "3vXee8KgrMDjZcbeKrBdbkdR7g7BvchXnbptotRGPWCpazNM9HHZdgUTxarsToVGmhc1jskRBRarVXFCcUuJGPQx",
  "key2": "3ueaTtKA8jWP8U9eKHMXqU8XEkCjaHTDxQCuUJ5WxbkzyyuzhWUs9hcsGdq2j6jc3ciKAWC8VxDA63NYkyc2XMoS",
  "key3": "5vVQNb1ynzKV8mQDhazTEGFJNChhBDXbYkLaodKcqKgkF6hg4EToUhTbYytMdtf3LxK9WE6PWfB4fwJzkmAtpRNV",
  "key4": "2WDeZ8Lbg2QWdq5ukhsUKa1AFyDPhja1DgcdGqeQzUv8P6B17dHDc32yZNkSJVfz3vHUypwbemvi94LBuabKjnSy",
  "key5": "3b5JFtounjGqASYDDxDDz4M9jwWHR8UNSpGEefWs3thRJtfra9yQstCNfVuTX13a5VKjjJJVAmHnWvgTJzBrMbzK",
  "key6": "nE8eqe4gjV7LbAkQXmmhGtUEBj2vn6C2yrsus795jc8XK2m2BsMSuZxBKQuB8Q5vkoxvM8ntVZHXfg3i73dxXxi",
  "key7": "3pwA5pf4RnPyNnRNPGxsNckbGxpKpmiXbonwPuL63NwB5DXcjQh4GJ1YeVLrbXq98jbhiWiaTNvCT1vtbCidH2bw",
  "key8": "2RKRvoq3kX7yCMXHYc265yTfZQfGE2AtGHv7cfMgPP5ipcetiFck88hw7A74HY2JNGcTJm4L6FcnSapUiBCcYFu4",
  "key9": "5pkvxhUNUrqzJTie7qM3HNsFmkeqwzdAUX6vMuZatL22kt4xJwHpaUVoG72F8e93vEUnW3qaNvShhtym4K6eiyJ",
  "key10": "5TSirjMgP3pcsCAhzx9h4LWQyQE3JtzwYPYXDy2ibwy5d9kL4CauhvHSKVP9g8q7adGGmamxcSGuD1pRsYxXVyLv",
  "key11": "4TWyx6xcz73ehfMuGnF9mPT4DHJsHWDnBwXouY2QweX3ppW65TS7ZtRwBzhiEYP6BbhGy59ShmCCxkZkUD23VtYX",
  "key12": "5j4EvLqgJEuaCREsZpqD2thRcLdX5BPtafPkZ35aPaYjm2oGfW1BTdxz9BTM6cbFEbZoqNBCAbdwAaSdXcQikigS",
  "key13": "4QShhWNA6PdKskpQevZq4dXmAHsa571frLPfZ8WVKtJ6gYEFkJn4hTbP8FPx2hztvZoNBhQr94c1oHyUdxgJfotk",
  "key14": "5bFGzxVGvTiehWsbcZ3ryrXtdePVDYFk57awjUyqLACFKmpyKAK8qqTRW2gmE2YoiV4U6WTvE126Ru66bBfdMk9a",
  "key15": "2BHdAj4UxLJ7m4E6mKc1HH4RnLfx2fuD1tu58XMRHgNdbQepyxbEwWNGiNSkBGKhWZzn6W66zA9X9hbEzojCbUnu",
  "key16": "4Jp1BvcTX3n4DA9wHrXgegcyaLKZzP9QaoHZ9jUdNryLp6yMmQ977DJ42PQTCyWigtDErWiNbNXV3R3xDzV8B5U1",
  "key17": "5m67YQUt2mrwf12Gm823wJXwiqEqhTs6Xo1xoP7LgQMBGNWX9bLYkxNkHFCBjQjvibM86jzgTe1AKp4Ra3gv7VPo",
  "key18": "2pQFZKScWfeGKUyz3xnxiePYqJLb4EBtggmMH8WkrsM8yYaqumw7xwbqhqM62tnbgJWjLFa9R1Xcj7bYBeYCs74g",
  "key19": "56xZ9jYTfxMwySM36BeAmCpzWbgKN5V6rrVEdGgUrFk4kAvUAQekbghVT4biy9bFsEwrZ6TNhEyFPMHu5puvSKXn",
  "key20": "4EAAnXyPYjvMf4vM29e4covPgVxogQZ6XwngW1yn6rbaZEfPeSja65D4FZVLp7sWkcQiMqG7erPzniHm44E781Pa",
  "key21": "5f6LsAfnKgCHmxcm5za3gK6hdR9qZ5ggRZST1rbKLEasopG8QaQ5xzwLsWaTFLXHNi8VvMxaJtLbJQpNivd6MeE7",
  "key22": "U7EguvvR9MgynyjtcBcp1nT5bZw49phuPtdtQySHcuZW6EzBFyYocdEmxVez32iCtUgTjjunu8wJFFG66DLCMhd",
  "key23": "Mv3PWp7UwRm6dgapngXgdgFxRMDpndxWMa7ne6EQCVTfogrnQok2CRiGAtC9oS1UZhsRDanPfmzYbg6jgpNrqsA",
  "key24": "3ivgy2Tj91NGvpN8CJv2Dzi2y9qPda2FyHhGbvC6afBoJiX9nZVbwYk7TNnx9bzcBZPP9tMkSET8tWmRadAphfBF",
  "key25": "5s9E759Nfu4FQDCommQzPmDLvAuQsALe1FJj2Lb8VEAnwMCoCpZXtKBso72n37mqbvu429RvCcX2PY2cYBVNu49f",
  "key26": "5ahmnjBCaXUscn7rCooGZYpb4dqheqcsqYe5cfhxc4CvqNJ7VBadtLu7P3BTNisjYek2dVUfa9gMVkGKCwBYu5xS",
  "key27": "4ZZfos3JWJEK5YuRFzZExAfXRkDAKUZEXEKp9woB79zy9ST3pDhMktHd9GNMYC7Fao3G3Zpr9thy2oCDiMFYqrpf",
  "key28": "5k3ewzH4CQ7qftptYU9LkG3qN56eKBNzEdZZeZBmYzkQM7qeyGCKJaPFqiqxtvrcazbufPR26mtTLexdFz1RGMst",
  "key29": "3rJW45XjyqUhRUnAheaW8pMTCHVXiZECnsEFRw6AfUpUqtZvN3zKe8SS7dR5ibyLFFQVrJrvHCnyH6dFDcq48gi9",
  "key30": "4tJtv3LcgygtvLjMQhr8CQADSM5LD8c8FUgwgD7YPf3dGcKecNhPN3Q73q5JxGX7UAsroCQgGErL2HssUzspueD4",
  "key31": "4eszKdwUXf4MqkXNtsVZ7q4esctvKrziYxbXE4w9JQjF4fHETVPrVNQRbQabQqgSvu64oCBFeyG46fdsovErJDRX",
  "key32": "4MQxDfq65HNBLj1o2fr9BvCeDqYo4NYZpNBZugRwriAJoJmKo4zNzjdTfj3a8A4YfLA32h2isZYSdYyznFpxiDnh",
  "key33": "tnUHdn9a8Mn2tA8KYS6rKA2weZtEnNdE7gCUzZs9YEFf3VJbEhPnCbP4q91m6Qr1tq8FXAxvGfxK76BC6aW14zK",
  "key34": "5tRcWaDyDk1KMhTfoiuXQLV8jCwnH7xFB6s4asDXTrb7SSSDqJvRFo4kSogEY7p8fefCFsmN9qXu4wpq8xy8imwL",
  "key35": "63swJinBauwMTT9Zr6ApwMRqCTuykmrBjztGsVehuncdXGEms1uEgwDYhNM8j8VguGit3zs8Zmp26WcTBoJMnesz",
  "key36": "56VS2ybb7HhqhsRWAQDNnCrwgnzMhxu1shbGVK9S5cRCjcL99bPkw58xVdm9uD9Be3gtYkYS4XAXKZmibHqX9uHd",
  "key37": "5Ta4V6J7kJqYFKQUCJyWvNi2a85JgHbWRr48y8M2k8gBKSr4DCggDa9sKUpW6wNKaKPrhhk5sx2thuSh5YfEz5r9",
  "key38": "4LeRthmK7bKiU1GvPML3WCeuXastaGXSdJM9PTFsXunFXKoZxYqMXj88Wk8w4B7XNotreJWHwGUeLqfHGS9L129z",
  "key39": "2xQtoFo7k7x8epwZxs88MjoHmfUzvwdA2C6KZvpma8pS1dZmU9gUJhZJ96SLP6nsAhroDUK2R7yLbjJN8Dtgh7ak",
  "key40": "5HA7Q97dGsDwhtpGchAHHVBoB3De6Te8qL5EyLqBfcjQ4oKw7TiaRmDHjTHyE8wexh3dDmruPRuKN7y4GoxgPSsf"
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
