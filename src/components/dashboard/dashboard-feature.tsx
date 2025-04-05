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
    "2MeaTwuxzeMprkyFBmJ64ZJbdW6n1hmNL8R3F9yFzogRVJVS8PTpGBLG4AtthDL1wdiGSaBz8HVwdEgYUGTLo9h9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q5PKJQw8B92aznvYHhQPYXo1P7xNi6v7c1UJDhoLxswfUXZz1yaB6iS6dfwqnX6RXKCpaPzsHFnXAT9McC44b3h",
  "key1": "3WE5ARdmb1t7MbYV8KyjArnLR5onwTVyUm1GxrRbkAEGxZAuCcnyEYSzoCCxUJiQSznzA4JyT6RBXAarJ56UqyGD",
  "key2": "3K8uCtMbJfTXEyfVBXRhpWE7As5xnPUL6u8KnwGVxMJMggMU2fTvPEESRcvQBfxKkJbBADow1XFnnGmBsKKzBXdZ",
  "key3": "64pjTAzctfLFJAyZjFLEmGPmTKMeLcKhcWx9p7Cg7thXGrig8CMPaDXNzHufm12jx3UZVVnFkpSh2yzFUeD8oppQ",
  "key4": "5WSHnpZaWKzxdD7Q8Ex24ytsphdDdAU8GrZ4n7KQP7co3ZgYWe6kfZX11JYYc4k4yoCs81RpiWUaBXnM3Jd3FP2U",
  "key5": "2cV9c22M9zy9VVgBfcQsc63CSKksErpBqBFU6i7wECUHnFGLQ14mvWJc8YRhpNH8chFPodqJEaUJD1RuTz8gjKqg",
  "key6": "35mLdJH28SL3SpVGd34Qrz1K6yo3aDMPpWArXNfHXsR1AnF2hLwf7ZuHVEQQdNNjaLd2kWyeSx8j1hMSnGdLhjeL",
  "key7": "hNy5YmuKGw885HRSTCuogMyb2vn1bDwcveH3YBuTKKUjsSBoQaeSc3r6aXcageHVH8PxMNdXSCCwMPsReVbu7Gb",
  "key8": "22dGLR9k52nCFSY6wGNqi73ZAaeoyV3p49UNWaLf86KLWW8jUDjWjG2WdLUKnyFmLZTKdy4vzvH7amMnT2ao42WA",
  "key9": "5omsayd6XxNvoojNYZtn6BfrMgzNM7RrmdyZ9KDLYsXJzL4b98v3JKjtQLdL1DrK7zcvm8E3JKEH96PF5LSnqMCC",
  "key10": "4BqJb6w5r7ayJifckwNcEkAzBdeagnqiJMtCgqUzSTjsZA5iP2iivgrJ57AUveYHTFF9PTYkGmtaU5HPHMapJmrJ",
  "key11": "4uEnqUmuLKtV1BsJErSMSWhAcaGbP6jRdYz1Mx4wuRGr6z1YUDEGT2GPyMvccWFeX1LhUtSSY1KFBLduvaGXcUsU",
  "key12": "qmEPLGTndYFH9ye63Dexkb1TP5gaUmeYs2AvqSpFEa1cPbhZ5aqi9tZkBKwqxGm1cVN9NqorbhZGNd443jGS3AD",
  "key13": "2q6TncHxPCRaGHEhRH7oMiHTx3prsVamD9c8Leeem2zV6DHS6n998tgPKS2hBdGgbb7tBX1hahsYrUGhFrXZSPYi",
  "key14": "nKezcJP3Lx1vqFo5swrbuG5fpThy6QAPR3p8hpvfxf8G9EdwC2vZcAJ6B3CFpBsJkXesNpywvqF6m6JwYErUWen",
  "key15": "49u4CS911z5YSQMDYbYDjYfbQxaci37N9gjLpnpP1gUvUuFrhNnagqd7hNKiowh53MU6XmfN754bytm7NEFCDbVL",
  "key16": "45hrKwRta6rUtEYcanvX5KsCoGJdDmegBDHMN6v9KdcGuHhe8QooGFcqVM35c8XN2iJGVeNqjwWfDo3nFbAGCVVq",
  "key17": "5U1fmtu3VmimVsdcsyJMad1qKu3RBBMUNkwt16TFqNgHq3QGK3UnpCkZk84hL8kekf1MLtaWC1dYD4y2JiQYceTy",
  "key18": "4f6ry7H4CpSFuNnoJDDpZS7m5MkhGMyEHvpmwUJmMt28UP17azDY2n8NdeVQVqKmmEejrGKyMZuK7MyLCizAZiUE",
  "key19": "5SywWXtgovh3PqQEmCbvVCaEDo6ncQLcg3Dkpn8MhqttEazaqLKSuRpZcUh4w2poKr2qpt2CqECiuXPg2cEDDGXV",
  "key20": "MzmXh8QoshxaBQBe4u9z4z1cXxHGaYU19tydoMgBKMsWwxgm6QCxPAYmmgLmRz5uMRzMsepQGtYuv8SoC7FXh51",
  "key21": "52noHqoh6EycX3sVQaVrhNPh8JNB5cHYMueRCL1hygvNGTvvpCxNHVbByJXdBWC5YkMH3ZMD67apZQ8jGCEvvmFB",
  "key22": "4U633gcX8aLSngYQD7zHzwzr7xCwegsewhHqQParLksmNJ9o9PQmwTUKCczMNctSnYGV8r15bgppMpD47wn4kPtd",
  "key23": "EgAqEPgjKuK3qmdB3hgxo2inAd2GHcNTG6Rvd1noGfwYaLXBFo62N1LTtuPWpLQJvDWQGigfP1iYgMeRAzcjSqr",
  "key24": "WHAREuNnG9Lg2WsJmVaM76C1tcAfAX8FiFpzQr6YqVT9VVntXrMUhV55ppCDXedtZRt1gfXzduckMmxXd74f3bc",
  "key25": "3tGeWv8xaHf1b64MEobT3StzRq7m8HvKMHfEqyKcYp5WsScYk8KB5vDNfpn4oGvJJUz1VhwHtppdWmRgtDGvvW11",
  "key26": "4hNpktS4ir1VspGBBLCEp4v3DBcyni5BY982F699Ff6L3BgqMt82SbfTtGN16NuMeJsGP9o1E434uCNJUnjNZnQM",
  "key27": "2wns95hYu9BsTv278HoM7gNHACHkjPnjdwnKL4DBta7zk1ZEFeuCKnmjkqyu5Jqc38ejeyAM6mLrggW6yUoXQ8Nm",
  "key28": "Zz8jH2nEaQwRJCadyKTKqScDvuyTYGZ3soMfRzQA5yBGPJu5rvqMmneP9VM5npRPexSF2dWqX43XvpLEXGJatFn",
  "key29": "31j8KWn7faqgSGy3Ga531nwjfQrD4kht5f5MLP8dvS2QNY4GxnrMinokYsddg7BvijQCY673i2gzTT2Ct17A1TLt",
  "key30": "5WybPUBpsz2bZTFyQoo7x2YCztFTnvExdo6Dpuj5beGJDVWZkn2zHSc8nnFpf2fG2im5M8fwKasnVewG6KxCwXJL",
  "key31": "2yRCjwZr6qvcp1fFMJDdxsoH9xyE3KvNrvMYUuUmvKM5bDZpaGbQYzdP2XJ5EDKdZGhHMtb8y9Po12pL42dE2j46",
  "key32": "5U5q1ZewtxxMfrLVEgs6SAKoEagegahjmcL93R8z2inKxYprn8bimUFeKuYUY5Uj5e92eub87UuSeJLheHsC8gJP",
  "key33": "3MqpDXGkQ2buB2kptMastmibmYBkPdc6BrvZk5VPtZMWVUxDw8dk8C1XKouu78SxMXD57VuAuoPtC15G6xWxj9xF",
  "key34": "56vB7gjrc8XAKuPYuLwXYAbKNeXhtTapedetDE1sLqCRz9wKE62rVgov4FqzyDPYD2GdsXTyr5SYDLWcUvDxNvDH",
  "key35": "2TgJq7wbjETYDSSRfsWeqeB5MC1XvznQ6gf15aa7euNgEzA5zfDbFGgDzeDEyexSSAc1T7ayrxScPs8Q55Yhoiis",
  "key36": "3KFnqu65MQWctZhcXvzryTK6BqtqNZ8ezVzAgRu4wTKE7JwuCbxvKCmicEcXW58kejRmrZh2RtMw9312KrQpDNH6",
  "key37": "jbQFvtksHRu3UAWwYtBBKyz4vPm4ywTvaSKubNCxLQVgnLB5VpcCE5keHdAaFDfBncGdDUwEP4vtcFwaSqcU86N",
  "key38": "3j3g4xG4bPppZfDuUyEgTwAgmmVBncM3oos8Nj8FPvvS43ZSFAjEtEJKdeLsVuiQ6irjxpcTiGYnXUmV88BEv412"
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
