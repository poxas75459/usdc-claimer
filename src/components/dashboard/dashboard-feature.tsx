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
    "4M4cAn74SUsGCwDwZpEe6enuSwxinthngqyVfUF2v5bDeoGBxyrjUXJw8oZ8vv5G1YrpLfVsLxcoWn1XQGq4UACJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UGkJuuGT1bL9DCPBMCZTHzNsMwH2DE65rF7cr79hZiyxMjzD8BaG6Q9GvqpArjGULgePuZuHAJn4ikoS34amUwW",
  "key1": "GjHpzhEPF1ssDvn2rphZrhu22MddisLcmm6pp5in3YesjzMVUspnK7wG5Uqz5S7es4P8jqnrAzkw1PTr49Wt8ng",
  "key2": "4Q6ABm6nf28VBiDzTW5MdtNT635wPMJEVVZnhSCKRuXDwcqd6g8dUEmxiA9xvbsV4tFMunDfV6K83noLC8F1bQ6D",
  "key3": "nvUwfcjHEF9dLyu8Dj9SpnT8qGTE6vgRyjX6DSRzXF4ZqeyZMWmCGo5uRH119fdf4AcrjaMYP6fdU75h9YKBHwL",
  "key4": "5BaecPSfd8gXRyE6CfeSKK8XvQBiiQn1LCEtEHkbX3abbq5TwUqscTgcBSoBPwWhiuX4929nzTLaG2TvsBvUee3n",
  "key5": "41WQUgQaHnKFZoqzeV8BvF1ECiKJKp5utYxoAauprFcBsaiLASpBPPFY6T9vdUxg2LyPu73Ua7Rg9Jo1fzCuuA2u",
  "key6": "5N9z8B67eAwjRDmhv1bbfbAhVkKqfnRYNadrNXRKeoovHSwR9cK3HN8Eyy9ZojhhFMATwsQAbQv6K22KaVcBuoDR",
  "key7": "m2eKj4NJHPCgaZj3wjfYefYW4wz75VPxrNH2iMmWBTnMDF8dRrH6U7jh6HNJdG3HpryByGvt8sxE6mU8ad12sWs",
  "key8": "26J3ijo6vDSGecbvH1PbyWf3s38jdjyUAu3rfpXwD3dBW6zRUWnbDyW5nXsFeEbrUYa6hPKbB5ryndo5EavfmjpC",
  "key9": "45YqcK3ak4cKnbWiv8waLhJNnCcUoCGBSSHuMpcwM49TMU2bGwDuZ3L5zaCovz2XZeRqnmri1m2AuqmoeTzB21C1",
  "key10": "4pwjcGK9uzHtaWVULYbC1hjvceeAaJWrvif5QZKLSfQUFek75eqARmQseUxSxNFSq6LMPQArHYWzBhQgQbbLd8Lg",
  "key11": "4sfXb36eQ1vZZnUhVvYUg2XTsgQqHNwuAd2qNoDedSeAmB7uVfUa3cHCYCDabiLuY2Riu78SfBzC5XzBt5sKYZnR",
  "key12": "3JtWQyWKwdbEM6mr9txuusXKcnDJDCMKX2NUCB8PDg2X63QGdnGybKRoWjzbPmZsugA9chYwsugyEYrsZA3iazH1",
  "key13": "4MLh24TMJX3bDSpz5TvVBiLZoPsZP6Cok5zR7o2NTsRk7DGgxZ4CqqtosdMCp6A3xoBM63q54haKskA7Q1UqwEt4",
  "key14": "4EuN3ttWLTLA8oAv4ZVcJwRvDXBorqEWDk1MVQhogpfWXHsNkhUQUpmvYtFeD5kXxoGVWRQ3v5wBboTCh4gidkuo",
  "key15": "VKFgfvr4bdr2RTnq9R5egps5hc6jvNaiYj9tDoHEcZwv74CzW8AuK9cqoVJxdZuh41nVrGTUhG8RpsMy6xmtzvB",
  "key16": "yjyuDUeo5gwKrNtGeAMc2RwQ66jjU6xc4P2mLm8kXABKnAWkeCywxAJLFRjsKy2BdWDbgTXWvLSjCjGZkVnVqZ6",
  "key17": "4bHcbrY1UA5p9mrvzw9PafPpWuiTooM6E8kDajG7xryAnCrXXeWXWBfs6s1ReXJgaeVFZDr5W3srVEqau6aex9Pm",
  "key18": "4oLBkwLSTst2TbZVLGoYbDXnafXkPkS9BMubY8jbmAYr5rXJmcAjbZdzQDhSiUzSWhpAgo1bMkFGuEC5gApxYQys",
  "key19": "5GRrtT9Dkqb98cPKRv7yvG5EX8ZGe42Kx5cbVfMszjPBnrWZoai4yW6bTMzhNxysYL7PfKENEbggKEwiYpVSdMNk",
  "key20": "2xryFA5Kij9pqPE3SsZ8c1freUgnbGs6oeam9PKqJzK2wb85ANrpvCLfvAfRHnP7bwHLrBoQXPsiw42ZapTRVVxp",
  "key21": "5xpCn2wmN4CurvzBkA8kML3nyUGa3M1p1oXKnkMPQZ6zkFktTQuakYSrZWeHdAykXYzWtqGsSJySZR2VHK9WuzCY",
  "key22": "29Vaox2z4dVk8SrAjuqbp3DsJeJJRyNLqUK8ksrp1tpPve5cc4rEMwt1amRds9peJMCUNJ8HVpUgVoapFn85CMhm",
  "key23": "2eyi3aWLmVhtQ2e9HMTUUrjevGR5QcJ5NYjyjyKq4mPT6bkS5bSyEWpuGu39aJWuv5oxysYgdCrKvs5X9QTE1fm6",
  "key24": "3pUZVP4vhErSczBzk2zixjNjY8XVbEbjRMMJt77Dc3CNjaT4iXrgruDsbX9GiX4Gz2xtcu45mtYiXaWzVmjozZTN",
  "key25": "3Rco5tkYipJKdCFVnfHZEodLVMqZQAmfsEpjFAfxfbneynyhjNQ7y7Y5Byz77L3oGQ8f1hqoA1pwbZJBbi22ULMH",
  "key26": "gZQLBrWeHmiVcbuYNyKWrC1JinrhMitJ4s4yqXF6ssxXsWNpjeKExVxuWvriXjVETNhv7kf18gyt1HmyXBNf2LB",
  "key27": "Sz37CYtFin5MaXpykijEHTz1K6vK9vejxuQSge75KyZwQXqmz6hyZEY6GzC2AQ9zn91CxRgzZPV2RVfrLURnyio",
  "key28": "Pumdk9tVEXV8EnxXqvfkhdxvidXULYFexHgLa4FGPVRexgWjyRbnvs3Bz4nLC3SBmCmU3b3e3tDQPHZsQ9GGv83",
  "key29": "5HpBYT2QeB4fQs9rgGqhdTQvk9Eos7BvwxUG5vTBKhdBZq15nA2mBNRBgcAEo8ava3EJQN2T6FP2QRSq1qrDsgkV",
  "key30": "5i6BcGEGso9hse84UR4JjghRBUWML2C6bNk7dNZU9jE8L9XotN25GLnfgdgHiwDCRSvKAioEP3wegWA1cMUQ75iN",
  "key31": "4QqpdqoXrVhUufXCm2UZYdyHjD7T5ej1U1mHqK1sC5dRKieSz4NuoXZtT6FynttyER2ihYD4oNroa4na9uNcs1am",
  "key32": "2c9pwTavejQoonoiGmNXJpxJEG1UZS8QSEp4M31JAho3Lk8zSLjfRTC2nq3U6ztD7SkHryRjkVTnxL678RrnBZhp",
  "key33": "2aBsi4UnEHWWhCgbzU7n5Xf3FG6ga2BLdDHZJZ3E4UmoKkQyYcjFFqcM1wswv5uoSXisHabvURZcp1NYJZ5eA8sP",
  "key34": "3dpRpRYe7yMBUJvwpiWCsS37YtUnLWq8GcPz6XrnWC8ML43sAnTVaUk2zgk9ba7txUznYHYPNYMYPtREWCmouSsH",
  "key35": "EZUQqNcjikeysyVVtFowMP7KdbVLwJ8rgNXXN4yWyn1gWa5ANe349RGtMyWwbXEQHaZd8cSqvPxVqviAs8hcvKr",
  "key36": "5q846z8dHcNAd1XFfeB3suRUXneqmvmDFwiFJnhfjfDuWDY7ebiycniWv8pQwDsEFSs2REt4r6AAMhZzChjrYrsv",
  "key37": "4scBEQVjADhseUShoc2bAnqp9Vtyq9dzytmJm2Vwpc1uRWFSG3N2PuTC9PKfEf7mCtNACp1T6MjGCrvh3mdSBuBP",
  "key38": "4yhQTZMzKwe2dGT5M73xH2w7D4rE3RVQKJ34gpyGBhcaTbJ3ztaBMgY5UwQ2W3SjVdFxCy3faxdV6McFsoijzEwG",
  "key39": "myGfLTDS7MTsa4GtB2UaLfRSVFZj4xtkewyDAyYxFxy4foPLqpqLDZ41LQzgW3QNrJ7UVxwgs3C1qy1cv2eSbpp",
  "key40": "5RgMcmc6xyBx8ep77WhSttdPbZwGSpmUnet4AtE4WjGkwXWnCpruAe6kfuGNywkQAoXXM7QwSG8QT1YUfKGygoJX",
  "key41": "3zaJfuz8hFNYJ9CiDoD9iABHWzCFyGFr9PK83aVzJ831FC6zteQEtJpS3iHYnU3FXcowgBFzyEMuvo7rEqK3v1nm",
  "key42": "4kLGmYMfL1S1Jq1BgZjsGSSrVtZL4dDFBM3knUZMcgZhGLvZiABUfBqitJU85VDNAFahC42K9zUmasH5XQBRVaDh",
  "key43": "29DtJYZYYJ1xn2uEEy8uckX1iNKkbYGEB1o5poWk1zzWyap6X6rjoSJy9tx4wxD3k5dpA9XU63PLhw8bnwRDV7Y7",
  "key44": "2USMFAqodWT1MN1w1BFWrkBgiLSQ4K7mNWJGkiVqs91S5HMkVcQ1TPM2uLXU1po3mXhUK7zokb6cVEfm2pGL5TbN",
  "key45": "4m8n6Q91bGgsQuuTefPfP3nXzN1oupwCWZMmmbqiQx92gDGwKW4yENpk7u4RroHZZ6Nqn2zf3FPLFC1QEhExpuug",
  "key46": "5Zd4wNakShpWyTAm9xTAahEjmZJaVcNUgzwc18sBnhp93QQpJhqH3Wwd5187ejF9LWwHgcuCd2wUi2yDZ38ypmfq",
  "key47": "42MwiaATAroMBmqxEPZD9ywbSt6hBWbG2VQYbw9b4T8GWjFwLgtB2W1YqEErrkaUZHN9Vu6xHF8vuDbXfnqs4fu5"
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
