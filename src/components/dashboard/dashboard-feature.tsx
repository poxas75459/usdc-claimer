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
    "E11m3QJfmqbP8XJjfSns4heXqPbA8ucE3FyjgHiTXJhescnnbRueVA9tQ1uM66fHjENZnmzprWV9zACPL8dctAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NGKLLM7K4rEcxeY5AVT4tQCuTrLi613GK3z1yaLvHshUmog4mdrKkxyesPqeBtebJXVc257YY3fvojKt8phY6M",
  "key1": "Xzf3QRL1MtXV5ZdyLdyAjg2g763481Ejc8KHFSMhuHoibj5WVPssXRtCUReF4DDeEFkY2GdC2axxGyRMHdQAp7z",
  "key2": "4tRvoYiHmkK2n57atFEzUvMEwQRMJrgw4xEwKsz8mhZQidbNktdJa6yvyoM7mfNtQi9PGPqCA4Y8QUDThoxp5Lxc",
  "key3": "Pvew5cgJt2nQnVapnGet8q1jwtUcH55wq9AxvQNTYoELU8WQDTCSd9noET84HevcKYrmAuZ2cJ8vDycwWtW2wKA",
  "key4": "3eiBQ9USN5XcKp4ygVYBbMTuMMts4rWkDsTz61iqxZdSJHxzbsCGuGyB74tS5TFNn1RLDnQeNkLTvCjE96StoLSW",
  "key5": "fatSMA4jpSgCGF3NfRFHB7e8Bh2BKcbWMkQZ4ScLW5cYYfAaZs837XmtRJrSvZgemrTDg81BDyVpwVsiFz1haWq",
  "key6": "rJptdBAUFq8DTjtpXiBPQjSr1uiACMxLhh4ZP6fN8d6AgtgZxaG3aNRTq5CVqaaceFeJUW2tnai6scuZBmQWgDu",
  "key7": "4Uagrzvq7YknwkbKnnYvQjfaa68FjXx4QD7q562MATqpSyLjKf4v6PJqTPsj7G39giogwfQc7HSMrwD9A3VsUrUJ",
  "key8": "4L5ekJdrLjjMNXi4UX3jL5cpNECkTFrawfqiJakWFesrL4YnE4wAXcEn2eCsrVzSc87kLJ2RVd7BoJkjbq8DrzDR",
  "key9": "5ZFYfkSF277DPPcuznNqQEKrF5tm5XSjUmULMHJzHKBAec7cohJcGs5kZoYL41jxJGbwR5jEt8SMiR2NzvPA37wL",
  "key10": "65FRk8eUZT9Pms7KvTUqfxLG3qpKzb6LATScEXFrbJjsJpshKxzs4dYGp3vaUxnwmTJZomRPcYUZzTUwMpUVFSrw",
  "key11": "29LGdZM9Qrzvw541oZPvdzJqkffaCHqZfezB3yHL2P6EiVACR2hDhFn6SAq2aDtm2NW8jeYbLJHHkWPnQNEWxi1B",
  "key12": "yZgq1t5FZ83LPxpQUHkC5T9w63vT54iffMHQcwW6GhHWxAuCJJZYyUB1R4b5WrjLG69Tq6qefpKW8iCqtsXCAY4",
  "key13": "2ToU6FrorumttBEeCMdrnYMTwhgmdczdLdX7f7dhwgWBz1zQyXwoQdhWRD2GuPtuVUbNxTu4gw66dhWToMaFyDTk",
  "key14": "3aC5JshawSGvHifWPrQYAZewuGLdpUzCGqtSeK9kd4jVej7LYGn9enoNLVCPHiChRPjyPyYz8UowiqpKhGsbhHyb",
  "key15": "4u5frMy7vNmyipMk3kUnbyWZoAYsCHUhdHHz927sW4HQJKMXTq2YZpWqug6JRXncZM9VHZMHpkXWWJ1DccDhHaqJ",
  "key16": "3bdD15t59SagqfqiV4mBXDUuDpD5GESYfPBQxorYEiXxS3CuDEQsyyyHUmMSU8cfpBbEGhTazr68FAgxrR2pshdt",
  "key17": "JXStUNbp6tpUiFxa6tQzKzAC5Qp3FGZ13j8PovsGZ1zrHrg8X27Y72LWeNQZLwGNGDAMzLGmAnFAEQjLxN9LrGx",
  "key18": "5qLtizQnyE5yE7cAu9Qdy2ZURb28GRvrR8NN26i7y4Y2WtUeKurtCvKG41WY5S3PCXFYAoQZnNhMFzHDUxq1ddNy",
  "key19": "4jCgHnAHeNp2AGZyHeMs9xKvbS3vxXcqDLYajv2So94r8qE3rDZ2SsaEka84zZLuw6kazLmX6rTnQEvq1riGZXWF",
  "key20": "36YiTBPYd2Tgmbt4xeRiRrCRj1n3WYJuUrZ69jeDvYRFgpgz1Nrjt9opSvNjb9DZzz4uUEp7tmCa3kLAF99aoEYH",
  "key21": "2pVtANwY4vzc7R6fpSyoSCeuS2fWL63eKeszYsaB746ChP1tG5Kgf2M1Zu7CQDfL4MMdnPzLfkuQbRFALmHzH5Ct",
  "key22": "yJVru8q2KPhVk8iqRW5JiskiVNvBWtj5y2StCkPvfjp47gHEpXMik1iLg9CpXAWyKnnEV1MhCDnL7whT1gjuAaf",
  "key23": "3HBZgnqW9NtSADR2Ar6P1aDteKVfAww3ZdxMKKA961yNZVH3zQ3NPV65ijCqddAUShKcimMsYhjK6u4qsdfGddxg",
  "key24": "2jzMcbbyoEqRNaiN2NhS6JUYt3N3DzRPdVjA5V7W5DeNCntx7Xs21cenChcLaPmqCvogVZkbstqRNovebNP63ArJ",
  "key25": "4PfCyRUrsvijEQCyXRbShVSurFLstPpJXLS9skKQsZKDontY9fqezXA3Tg9d2xuHSD5uyxsSgRcwtcHLuNfa4MWa",
  "key26": "5Guy8GjpRiJ1BppYKGKCL6sox8iu2evASso18L2AFRpThfUPtCCqZRVkUmDPtVDAtw5vetGb3qKF4thgJKtY9hgt",
  "key27": "49b7vy2i62AbxvzCzVQVWEqtkCGpnCmwQkWvUiDF2ahRdeJNQcxqVCbFmv1gEbDBeJr6To7bgzDUDefEprnd5Y1A",
  "key28": "67QSL69VFaWX8eDszuKvweB3kcNZ5t8k14HNL2kY6jmzSAXYUEDr8sHrjkb8rwWerCtRCAws8sL3xCYLGGNERmyj",
  "key29": "2nRJ9B4BsaEn2ndbVgjvsDhALaLZXQutyvRdzqdi5J68NPgiNuNtkekDhe7aXepyxLi6fR6ngWYxn7S6FXLHt13y",
  "key30": "41y61qYRFXysjHtKPxkhJ4ntAo6QNxsnvNpZty24zM39xvAxV9skJzcvZ9fGVK1MDhDqYtzHQigAubwwDMD42eH5",
  "key31": "3ZXmfKGZCsQRLVrs5WSM9NxH2G1xvwsfMB5M5kUA3aqSSwFxy8mBcBpETcJNf71XPqMByWjF2YgQeVVm2RGV8asz",
  "key32": "2pBvsc2LqN91u9EomAGcKjCqsMXF8dcaFzf6ksidDDJsizzb4q6n8Uv5rKPz16suFxksDFzRhJssrt9cDnPVTCF5",
  "key33": "2VLttv2adH8eG5GGMq8LRnykAniHtgdY1LrKMu5x6fSMX2P18ze9nPF6qY7pCXnDNNu43z46CFybMy2NDvC8m8ce",
  "key34": "3XLAc7PubHSe5Uujy6jszANkvRFj4YN6enQYCPoEn98j3ghkWYGYTyqPdfUdzedpGMiTDrBbJz2uXwf3EE8S8bS2",
  "key35": "XMXZ7PzuzTP6Ab4xr8JCTr5uvUj2x6mpsmwM9e1NNK31D1rpRi8P4YmAXtJ97nZXcmkMovPQQH54zLs3edfvmtV",
  "key36": "2mA5ZkdrRBHDMJrRXHhK6ZRcGm496uGCDgncfRwg1VhXQfXsMRYv5EvmnUbN7kHWx2aX5VmzKUzfU1LSjRUcdaFj",
  "key37": "2HPanKN5NJ5uKmtB41QNejRuwFUuMbRs3hKRWQ7Yv417RimJjTprsrpL2rX7gmsJk6E59H8z9pLF6jfzsygTVFeg",
  "key38": "63rd19fEWow2rBArREiAYMZZXDQC1Yd8Hob6UZo6Vd4DeUjja9hpB3ZbhCTpAtUkAk41JE3r3jbwgZ9QWPjJfVjw",
  "key39": "36N19wpYxCfUF7eE5reTnwFCBswczFMWdxNpLmzZ7yW84KPmrFUjpC35zv7hLXRokxSuS76AaJmKwYpkbFobBcKg",
  "key40": "2g5DQCAFWtyXQfdnhbPspPitfasLTcSfXSzXCELtwsE1hSjE8X3XJsPyE91hoYF7rLP5SU43V6XMa2scRX4EAi6f",
  "key41": "4iWjaeZpgoPLP98Lmqknup7gkuHe9nLmNyAnArMFzMFSyJiBE3C6BH45pgw3ZN1DQxAQED4UyfHUHmDmNEvXvzGp",
  "key42": "UfxEGFNGZZsGNzJaT7Y24ZDfTCSe7KCGqmH8JEns8KCMDK1m4xDmEb2duTAJx6gMNjJtFcvraCXM1m451xS3Mf7",
  "key43": "KrioXv6vAQpMY5BZ9bspVQh1VBaGHy4sv7JCxZQ1PxgahZZFZujKkYN3xBKs3aKqJmH6EuYztKekgtFZEi4JgLH",
  "key44": "27eQUDBV2SCP8cEGeUAeyANGGXkAhuAGsEZpN2kEdZXfUJWwCbQiNqJ5dgWaxMwtaU51aD8XutgUE6nUZgiz9Foh",
  "key45": "3iXnB3W75c1ouKSvDSoXv48uTWU9DSWC9ZsE8FZpjVKJkNBHWrQqFLDWvejNhicXGu6dGgA39ZmJT2XkU8RWfoXb"
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
