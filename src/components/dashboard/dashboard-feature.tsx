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
    "3MUXNxU586wSivWAQRBWBZ7CvyKLwYebbKcSRrYBssZECuzeSDDgLm34tojt7wUkkYGnhqN2s629VEwJULdvK1Qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZ1TNpxF9Q5CutVhvFXuwJFG6wFPEPDCZyQR3D5FgbcQCcaJcDEZGNryhjKgGYnanUFTBiTpxX5XFPFvgz6i2cE",
  "key1": "2Bdh5pQBgA87nXQocUbLdZezfbhUJp9hpFuTnsMduhN3c13NyHf9Jq5d63TKqfAgeZssXwnistsmpQrzaJLkd7AU",
  "key2": "57HTkBJMB4vfxWPVEPEZiywtJGg51UaGTz6BXD3byzNp2FqEyiVMyMt8T3RNTe6kLx4oYAYV4K9maiSz83PQoska",
  "key3": "46UHoeojnvBmbHrCzk2THcVgRJMWttjjdKjDodMcaHh3aeLSJtythDWgXKJvKBiPXvw2HiumkNLeKp1631mokhAr",
  "key4": "4TdzSuBxB95voJ98amsWHdxKFurem887MXNvNYTxoBzh3D8rbr4rDemYL63zVaZHzjWQ4fU6x8w2rptLm4qsrsAr",
  "key5": "NpjJEGstBkUohdRBxHzGrgn5ztHmMkz4U8nxqshadgUuEgiXXaThMwwxx4LEtYuLdPnAJxXKx1ALZJCbBNcRGGk",
  "key6": "3yk6SBNXJ6B3CtCwdhgsDcH3Yr5QDuwRjCHEN44UFjreRKqo5Gs6aLR68HYT3MBkJ8Uv7v3FZVRexXNg6FpjLM4V",
  "key7": "3rdcmgbSWCLnBfAeM9FNHgj4XvTZ9syH34Me61LUyhvwi3n945LGVJxjaWhcTvfSRrWdhNUsWRD5HPuyYTgArTas",
  "key8": "57uexKtq2Pui4Z8JskFVsczR4JFV5AQtx6v6NogRTFDgZnidGYUBDqAZgPES27hXHZHei6gDmMxUKsySmHDVk9L5",
  "key9": "3ySiMBn8ht8MDdMoR5WeLtDD8y77qKKSeVcWJMmbcd85Vxw6zWt1vu1Yj6359gpK8jEr7PsoFFgW1HhaF5FcJeNC",
  "key10": "4SQiwrrdugni4XZqhVc8PvTasRHeiFn4iAup26MUgMRdxRTTtHVZdeuYS4tc6nZ6H5dFdnnquffWsYh9hqgor5i3",
  "key11": "2CJyWTUW9eg8doopBQq4nMZw4hA4NcLMAV1coquxerDp2GJbHpWrjwqD26XmoY5e2WvePNgL26GHaWLfw6yZriEK",
  "key12": "hd4nWpynTDszBBC6dyTB6sGGG4TNndk19bxvA77fzZmiqf6XBBFcKj7utuN6gVBgBG1knTeehfG6WQFKgV8NSxW",
  "key13": "oAGvuF6iAsD5zmtxG9WLzywSTaP8MCN6qafkKJmZeAY7YzZhjSqCzCfkZgJ5h3n9dNL3xqQK7LDbKfHVLRp3FpY",
  "key14": "4NA7Gm7ij8FJfPqCzuRax9WstouNttSMmzBjs3rnN4vTGXc7XPzGssXzTdvvMjMAvQdwfJ7pWFuJz1oRAFfqYnNR",
  "key15": "UQbiD6dg4g8yigo5MscExXcm61phZJ9qZ6b3uw7QZ7tykjhTBkNTJbmAmTQUKD68PbgZezuj2EpvLyzEbPyAwuC",
  "key16": "2VXBfQpb7NCTSTjsr5ysvMnHvWiNyNWPsYBwMeboarymKZYLtxUtDUTRX3tmf31WJSgwFrtoAt719QznCLKFtyku",
  "key17": "2H538rYnjT4WD9MqdnmaHnE2cDMEZTdShurxqsHz5XJmSZax5p8dxdzwh8oUXbWLAm8fkcx1hATa1re2kqFJCiQr",
  "key18": "3zDZknb45Vb43jVkdkdtbQFbDtcPy4GRPAMic82rqUCMVhcqeQiD1BmW5yRiJjA3sGqbZ26AvxWzyKj9YgV3yvmT",
  "key19": "YGkNTaqmyGbEt2vhwnzRL36BZmDYqXxaiXXLZTnm1Cr7oa3we8xDfMNHZ92LJzUfnmCFMo6zH8tTMsQdjUo75Pe",
  "key20": "36rgSMKDSRrNFDhEijo2S83aPfuK1BAmc47sSpWJvND7PX2xuQ4RxV53PS9vUowNXuheUDAQu2boNEwrTxT6pjvu",
  "key21": "317QtW62JaiNxeR3T5kdTFA7tmF7aX595CdQf7zXNE142e4sxBivejMtKtetNavTMo6g2NWWFBAy7LqhaESd5yar",
  "key22": "4FVLxtB9CHng1q67uRvHBXWaYXUYaD8jWf86kEGNNZYKMW6DQKXCfxf4SpVeSZCGCBTaMGbLGrvZVbmHYVQi6oRV",
  "key23": "63yazvbLtNT1Vk5LjsFfrR5P2Mjut1A1TvCtZYrmxW9gJJhVDuRSP52kwRugMY7kVLKqLwuQRfQX3Rw5MMdR9gkd",
  "key24": "55wtWULcKTJwcRnE42NSewTsE9jaMYBMudRYzky8A47WVxvfCp6kms5oCJFwM2u1pcwTUQYjVAkSSZ24Yieuypsy",
  "key25": "2e3xDX3GxXmCmQHVTLU9FhY4mHGpZb4XTDTyFW5u6wvsttA2SLgGVmmAdv3qpgwMCxFeTWhBJzzoHS7H7ghrC8J",
  "key26": "2Gmq429KQYbuCPWSdZrYwkZXwq9SLPUPHyuijfUyRLu2KCu5GxzW3YnWY6HNWPL6ZQP2F3zfZJMS2TGbex4E8vP4",
  "key27": "4MTzrPnvgtdZW3LbTGUxypHe9aygQ7tgRWbD4uYKw3q8fXZ26RhaQXBEBSQiaqBFEZwsAW1DZ9YtE8Xs4kjft6rr",
  "key28": "63Da17BB1k71k3APR4ynMbA6jBQfARVMHdg1rsY4ymBXrsFeaEpMTg6Qddi5HaDaYUvR6mU9k8m9Qd9E68zxnfqH",
  "key29": "DiER63ABHTFEF7KtiNb9SuQBDDLzHxs2Ua5sohunVMiHm2x8bbLqWnUzZqnHWUeMXXCBQJQeqKnxmc2os2hTNfN",
  "key30": "2QGRP6cwKk64nBK8asNuSnUX6xHXCygP693Usu7RvExc7dz2oGxpeCJQ4dGhQhZMXH9x8uCKrGiMXAjGkHqE92Lw",
  "key31": "371HpWH3fsCawsxHjBtQyJ7QmU19V12nfZ3FVf8GZcvVQoaLDQnga1UTr2JRqL5JREK61Dke4sGbGRurEWMxY1U8",
  "key32": "5mpexDTL65FnNuWr1Yyfi4sV6ozWqw2FnWLQYoryPyKAY3YTM8KV81iczybAi7NaP7tuh8pUPVZLFYF3KbNUyXNh",
  "key33": "5Qo7taQhEvfCxQZu5ZcrAU7Py1ELGpKPstpmtCTBLP9NgHNjQ3msCXVYiJVaj1UGD3rMWwQR6CTKU9UyZ8mTVi5L",
  "key34": "3wkA1NM1i5msqJogccuc8AkCN3h6NU43ZDEmb1kTMFVnPWTa2k4bSrVWkgqgMUmJgsMYVHwKuBwwZS71HNKcen18",
  "key35": "4bu6bj2PRddBhtDFsJWWYg4B82qxtbA1JZWApe2Y5NdF6rvGS32tYD3RwWNp6oLfvEiTjyNmJGurXf2ZeLZpato2",
  "key36": "49r9Xicqqw7VjXFXxEPLVeGrJGTT9YzronbAEDd2BEaq6u39FemsASk7s5vEYTcGzDYQaWVtJCQJuKVdfTbWikA5",
  "key37": "oZnYLiY9sc8dKDX6SPaEH5J37cym6JkHrqaro5BejyTM5iLhBWANy33UfaRPGn5wH672vRgJDpU5Jp4an54tTwm",
  "key38": "4cymPaJPauhEqkPYwhsGKaXTv2bytpjTVJAbqKpJ9q2iNszQVKbr9Ymo9oUShmLYGss9yFkPRQpUcRF9wa1hnXvT",
  "key39": "59twJ4qgegBiGJT9kgzzp32WShGAbQ5vtMm5gcHNWz3UNfXWwVd8ZeuXiVJK4bPunf38hLT9WHYeofzg5a9DMAd",
  "key40": "B227QQcncM6bfMA3T8Xq8wNRgEsRmjU98QvKrPP8iqWTMDi9iL6Pi6YPcZ2EXXH7NcuprLTBVWdfGwZfPxb7wfA",
  "key41": "27PWM8eRETQGdZYq9a5wDKzT83mwnMLyw4bGaxNzYogWmbAdDgf5vBM9DUSKVsVA3P87Lp2wCqXiWrksEfDmnHsP",
  "key42": "2jcHw7YYHXCp1um1qaup1TW5ZBW1XH6M9qV8EbrgLftJRcDWFwG3LBgAhiewSh2pqoqNTEwMB6n2DDHp4L9abygs",
  "key43": "2MxAxNLETXaF1Lnr1pHPXXiw8FKhp4dWC2m69Um5ff6UFhx5AxX6eWCFwxvjfjBiBUxXFxt74Qwuih2HzRtsxtK5",
  "key44": "DDLRNmAEPe2XPqckVUNorNAxFMENFka3vHREeVoW5jgMRiDabWd3vmA7orfR6HDCKinEk2VkcD2U61eDQt72jUP",
  "key45": "2StkJvyebCNEhPVDpEbzDKMW68CgpkTbsPmYFTXjgZgivPWH3vVtJr7eD7yLXHkHh5zJyVNZkuk85uGqgaWVvnMH",
  "key46": "BS8jCHv5W1R1TJTboMVr3tG39Fxngm7nm6nv4aqMSp5z9pvRnjyQmZmnPoe9DzbRP8oPPc3XmAaG85khwrTJKW6",
  "key47": "3RV1YjvSodUbrYAnk2heCfU3AgYVkFHkya3nSwUqMRvgrxSEQoxemz4B4be3sWe8gy1aHEbBT2MtSFDQjv1Ui2Dp",
  "key48": "37Pt3v14NtgxRKqJfw2BF2iUs8HTqP1RucPYV1t4kYcinkbrriiJSXPyMnHrXoZi4rSfTbmamvsJeNqU4Gm1misq"
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
