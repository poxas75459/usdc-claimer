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
    "5BNd4uHc5RciiPRSa5Xm6EgTFMTNFBgqSz16dUPy5hLU2U4xKVHMABGSCGtNv6o2NPhkFT8SuLp4KVrGQZDH3Lkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39inG2NHitAC34pKpGEkRfx1c8XgB4tDSQDVand9vfs5Rh5s1agUhurEHqVf85vUvKuzBRDpvrazhSprvo6j5KVE",
  "key1": "3VHWofqdgyvjqWztSfxoaTptsSVcKv62EmhNXMq3Q78QyQhL7FBLMc4RM8ReTBJHVZxpR2QeYpj9cZPb7pJdBD5Y",
  "key2": "336Juo1J5cJBxEiVMbCxKvJVA9xMcrA33ax5ic2p4Pvcp2mfM5TEemtZkvHt9hnuhFxQrHCVAugDo8kF2VxHk3Z6",
  "key3": "5d8NNF4NzMcdrcrzgGaTusKakAbBk3i36NJivtWKyMkEUdFFzigcVE3Bt4XsDesDfyo7CkmWxLH2xUumFZxdK6X1",
  "key4": "375YyUMRmwbJtLRnVeDpPKt119UGjmbZHfwUWALMH9EPjaK4TrC5SryYz7NtpxjYxj6B61TSFrH32VDNZKL4UUYv",
  "key5": "2uapfsJx59vAZZ79fWkQiZEMD7pomqK18C74RpEkzusXVoV4Sd8oKjkEPMkHyqoRPYGwNEJgiPthA51Jxxf4qx8a",
  "key6": "B2yDm4a1VEZk46WK86ZgjMkqPMn9r3C9xR7HJBN4d74phjwWjQ2i7AaPej1gLmP2vCvY8TMcu3r6fUp4Pm5xzFF",
  "key7": "EVskMKPgfSSsjapgJD5LwuBfMKVk3rvNfzyMRZk7wXWNdHKRo83hTbggG6VmGnpmdvSVxsjeGp4LSkBusr84S81",
  "key8": "57iUia8FXWyKpRoVwiiKEJDXk2iWW2U5KmR4JNzwU2Sn9SV7MgJBH1F5B1QzporDZKvCdJRsQvD3f88LvS8VuyFx",
  "key9": "WaHeGpoyXb8vNQWj9Smp78AK34GFFyrbCPfFcJfr4WvKwRihnqpczrLJYGiWrwCaPTA1yMjcYtvuvj2kLQ88SU5",
  "key10": "eebCgzkZ4M1WY2nAzHyNpsxfoze7h7nLkdcc4HwNiECUUJd7omvtr7iDeLModvxYbsDJipm8sfuNF8PxAvhN3C7",
  "key11": "54s2ddMo2z4tr2HrvnXaGAQDLjZY1K7nnkGnSRQux7K3zBiSHDrroCCh474juLEucqbjqz9E5sD3Wz3Veo5YUGMy",
  "key12": "5uwzSYUk41HnKLBjL1qoAW7QeSEVkPthfNhkPkYd2ZMg1PTWtg5UdjYN1cU1jE9P79nRHi8eV6MSiq4bhvy9itNw",
  "key13": "335qzAtLHSucwt4mHvLKVmWBMakV7Q2pkBNVVkaXUKBEnNSNkTFA9RJMDznbjyvZqWs55zRkUsAm62q7Ernaf7qR",
  "key14": "2kgm8r9s6nUtfrcPGqkNRBKVqTekLuowLtVziLzcTbtS7mrhFxqekfd3RJyYPF2bVHUxAhmrokUU1qij3t1GTy1e",
  "key15": "iEyuowB86vvCVk3KPXMzN2csEpbhbpfiEybfcDHCdHJ5g85PQoHkn1SDVCnymcxbvHrumgsuQB54SZsbQ9Zxcma",
  "key16": "4AE5TM4sWbfspeAjfUEsnNGTRaU4o6bbqgGVfgzRfBMbgsGnn9DX432MeAZrf26RSaMUe6ATQ3TVqttgom6wBDW9",
  "key17": "3LDPxZ9G3D6QELdnAdvAKdtM1nVJToswZfKWYyTtjhP64HQdwU9iUB9F5itemgxQiU38P5kDM4j3wYBeMcqLGt3q",
  "key18": "28f2dCzGBep8iXnGdovfv5GKj5yHk8rdRtPpVpjw1puwdXTxZuFHhpaYHZXDzSuHeNbdYFiEbuLknzXyqSRmE6SX",
  "key19": "4jEEVAthNTuRxbiVpfKrG1FHuXTsAiQdsx71cWErkn77zEKxu4qRWEJiVY5op9x7gFLRnjWndgVN5P14xt15qvcL",
  "key20": "2BmcifUCMWYcHuhqmDfT2BgWqKnPkk7JTFEuutTHhX6pEmYsDzZvG7Z15rzdzxV3AyFrpnKsw6NVBNSMPrxxP2fL",
  "key21": "4wwEVqu6AG2VBYYVixnWzA6X5Roc4TVVwBvPaeKJ1EJBY5L9Pgn3GvTCZkm5AaDkX2t7PgPbQUZbZRumG6k6AfRr",
  "key22": "66waPYTA9WagZyX29Le1UPoPBsq5o9kH91aengmk1WWCu8hWiKoQB5bQshha1r3QaoUYcJGSTnzuG9dQAcFDYfH8",
  "key23": "5gL4tYtcEKy6JTZpto9GofVHQeGTaSQSBVgTbWoqqwavr9g3HHMsLXXia7CUW3c6zdSc3LzpNeSwxAihfuhcXej9",
  "key24": "3xtazZXjFZitNBRARnBned32doDKiomQ72dBgUMoF2YCjYSjgVC8ifLoMRmSGoF7mRocbzogufs4ZUQJGxgDoXx5",
  "key25": "5KSeVXdLiEMZXcoaTGpfeCxBXTpe5fSALH2xkE7Xmqb63x6zWasMhF2drEPQCjE4xGLSDcHgZaJESxjJt2C8KzTi",
  "key26": "zQ9L4dZFGPuZ4TqWn9bLMvzqospkV4BQdir8t5JhrjwaKULDevd56Xt6KhwxaNqtP6kYYSbcCy2fj8Wv4FPNGoq",
  "key27": "3cTFtcq64ufGePexM8agfW1wf4yJGSy2Se5grwzEPegYFNhv7mSkr8adCf3Htp6i1gNLAh4E4QxDYZuUJX9KNySb",
  "key28": "3tVNQ8TbnDqVu4gGdkDYs2yybkRisu9cQjRgP9RbhjLUpyaCfCKyQq8f5A3h1Uew3zZ34AUatSUPZwa2PePPVAjB",
  "key29": "2mEbLHyfahbqPok5smMtZzAvwK1z2gckhz84Fs76HJx8rkvAjDrAMnRK9EzeDVTk9Er6t7Y1sMxRAKpPFFnREYNZ",
  "key30": "43w3R2FJgUBYveUUzpgUyXm2pFidXYUE8aTRFJvceevMKWpvzBCoMSqKuyVGjyPNB2vMo8TW5vtAiDwrj9S8w3j9",
  "key31": "37ueRE86Ey89mAsmx9oNamSYccg4aosB5mYYV9GQEAmBGpeprQ4LSJbBCi93N1YoUtiZdgVXqALoGSwxQftH9wvw",
  "key32": "33k2z8dYkT1oyk3sK5hcDhzSi1vsRnYHN8WdsTZdxomSBkMXu9xqHjRHpQGJi6oKwK3wwCbNjqVQRq5sxiyzj1Gk",
  "key33": "67bhRpmpeyUrfr1Jn6E9KMvf1mQfvJWEoFZtMMp4X8sJEhu4Bi5YqjMvqd31QhpW6KAH5Djymjndjt9nB3Y8wGF9",
  "key34": "3cqRZCC8XEGsThxHEkJqA1qqGKNZNyRXj5zS1w7R6AfKiVqz8QTb9tYLWYhH1d8zKREVsei1UDzP7XvJuJSdCBVb",
  "key35": "fajPUZAaJvS46WRosuNe69FVTJE27N4uuCDhcyno9tSPvpQKEWuXgQH2KeMP1y6D9fAyoSewiMip2MvspDcs3ua",
  "key36": "4eh7sWaRENtDVeCDyxwi3sCXyRD1z1Y6m23H4zsuXnzdcc4zscUpuA45tDXWvob2LYzcX7tZZSHbLfHvzuyLqSxL",
  "key37": "GwEeJiSFZkA9TwRny8cckpiYb6qtfQ7hygnRN66wQ1PuJoVnpTTyQPDtJE7hKzzkmxFddreDb2AtYdv1v4nQFDe",
  "key38": "HdHzZYTJhbQTDhoQSC54S3rxEp5TybHcyq8NSztRRnk1z8xN9QoTj9cWMdGwqpB2pHHJRqp5icaQ1DwVXFsn947",
  "key39": "2ktkDqzq7Djt5pMh1mt41mrwsnxazdP1tDMCajddrrofN4HExL8DixxHQ6izXBYr7jd5fo5Pzxu6bFnF7K8UBMpD",
  "key40": "33CMikrrapxTtHCo6GqPB5eYbkxhy9NzFwAKmP1KD1XoojvUZKsrZaY5EPPC3JM5CRPqaL8FReh3Q3ZSTkwHVGst",
  "key41": "2BoENS7M65EwqD3w8vRyb2qrmab4XpfCPvcHZurWWH4jaarfPaLTdk3E6GfG6DnvCSRR4gDRsGa6EWNRGCteYMmZ",
  "key42": "3wsdH6x8eCDpfyody5rc7tYiRaCK4CFQq6vfhi4cuaDHJ5hy9kHBBQmaYpFvA7xFcYTxTHesoDTUADc1Y8sY2dME",
  "key43": "38kwTuXomdDHCs1PozhuUgquoHiNvtPa7xQBYngZsZAqocm2xAfpk4Ztk5po9rw6LyP5NaQtDeUGB2coEXo9HPc7",
  "key44": "4gzVk5qXHD2DiNHLseoP1Z7cbt7oJQNzHBTQhMSGcw9RUrZJfQcxzFpgD5vDRG4x1CdZJc9XbCvKuPLeXr28B4WD",
  "key45": "T69MDX7rJznRsNxcHw5CrEpjFXEsj2oBLMs59unyjU3wuMWdyNxpaLqZdCtJQdbGoytW2TQYUKAGqv1P1KqY28s",
  "key46": "5nY1tGXtGiB9PHa9TyVWX9R4e4cVtgxoHE4CfS2R9GG3ebCK6zVHkh4KkQwo3DQB8cXqkkgbKVVMXYACctpaiPCx",
  "key47": "5NDCr9yrp5pTo1ogBXDtqPE9c2r6VC2KtC6yuHeBA7Si4Y5teMim37gvotf56YKWRTwwyWEDczan827MNP7FKpJH",
  "key48": "5eV1tPa64RCxh9Gh2fGVqdw6t257wfsbfp56w4YHwCMZYcMjP4vUVGFop7y6XEJT7y9mpSrUhKZvyxiPctJbeCYi"
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
