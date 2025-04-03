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
    "53VjyH3uoxojbbADZfnKX8HfBAN4QSJWeM2jjrtCgqLRH93tU7qUP6sxZjXqC5WSyrjPo6SYMiLXYt54n3DR5fqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eEXHyfb4P4ibCEF3EcE6pE1hnkCcWBP2d8MLaDoAL7k137FuxY1WMzMLp6jKvSxRiepxXe6AnpdHyGEXX8p15ij",
  "key1": "4XG3qGHsK46AKL77Uc27Crhrq3nk8Pf3LggrUAGyErc89LQqidQ2usoHD1rs5uxbgCMgvjTn1ccVmmwtCw4vMYtk",
  "key2": "5SETEofWBVG6JDsFLvkpbfPaEZ7heTwKLEWichSzbfQTRTWzFURNBwb7P41znfgYdDiLq6NSjSXXB4yN6FcwNCAY",
  "key3": "4ZGMMzS6275rT6FAfKNE3MbAMGYxBxukQTtGf7EUMB1iDUCaary7JDc65D3HFfdgf5mq9FDFAhsJvp8hAhSnqZVF",
  "key4": "d4h46fDoFZYApNdx6U3D377TqB58pP8LBbMaBm9SuVZVSg1qY415MAFVfyr9iqbrK7aLiaN3JWiC4VeozUfcozC",
  "key5": "5WvduEdXjhny5AnAQ2YSYa2X2HsQxguxA85STAHHEimSFHNS255XZFZkv1YEXq777DuBS7zYiWBiJTq3Ky26jSQs",
  "key6": "4JopLJ47RRHy8PsoySP3C6SMNKkGJxJ5tRd66z16YwcnZuN4fjrMFbZucNjb6L6yx6KYCJmtGc6ZMzpXp5cu15FS",
  "key7": "4hqGjZb1GP6igqBnwdq2EeMW4yoRUGAPpEp5sxmH4WFZ1jhVCHGMY5giWZNMYVG2Dckid19khr98itu6yNbHh7Fu",
  "key8": "3d6NoXhBvbKJ9QEiZdzeRQqisJwtsiRicv8i6yNZscGNum64KGr2q48H2tXj3KFkr6r5VtBKNYYCr9mDWvoU2YMK",
  "key9": "2zkAGREkvakwN5BQ6vx1A5wL219Muv5n4bQSKLMmJfjTNPRgkGz16fcry73GzqG2omJVWUK9SzL3RXoMuNJn3EkD",
  "key10": "5z1qat7wheP3922gHetT6qPSbwtNVEr5sysgj6WQN8ahLwwwSvTjYkdyXAq7Yv5PAWVEABQnZP5ffT82KE8CvsTi",
  "key11": "FuWjwBKHWPYhXBV4kiyPkwG5eFzxWGgMhk7PgMzKzvB6tLY8yMqQ7nyz9X1tAAffw3m96qvUswupvtmi3uDne5s",
  "key12": "46c6vGh7wfNTvoRraiDWRdG2ARNxh3eGnCM47GTbXk8zYcvA1NvJjAR5ma9Lh8feedjQZo7rfaezCPPVu8ocVuiK",
  "key13": "5BCLzn8Cn59t4vZHdMJcjLbWcPWroGTBUuwGFhcn62Bm8R4FDrFqTpjVJa9JTYxcvcn64ESrywHnqdDvxJUYkXha",
  "key14": "5o1xgupj6eKKWWnABD2fXyxcQ4cqcjjuVguZe6wodZEGN72rfEZ46DYw3qoPcVUkLWSNvjDiu4FXes9agghHvbZd",
  "key15": "3nJLeMAJ5QjXdniZByN6ccBQTvt2oaLB123a5ckyKitKntKp4TsDmovsj4J1PKcEgpiNKKTBTw4hQdm1xUib9ZhV",
  "key16": "4XsjWQ6DgEhLreXDWruHL2GN6rhhtf6PdwEdhu5dKLSzhTYUvhr8GfyFxv6CEVKSdiS2dRQc1utLqXiYt6yt7oAo",
  "key17": "3Qnc5nEv2gu6LnVoDu3oBnwbHUq5Pb8HPzZSQLSx7ApRdwGsAvTPFjBFJUACbvgX3zUhrftvftFWLE2Zh9CRfp4F",
  "key18": "4BbMZYjTtzEffRrh2aqkuw6CvBcgEhbht9eJobyaeFizhMX5nrkasFjcfRZdT9t85g298u7toPzfAErg6HKmZM8x",
  "key19": "5dt2kicjnoeVevRMSYovQJvcAujKr5PN7cz9JutYRFpU4vqiDUZqPyFayjTrsmX5WiSBxpNAWg77qn3k3qL1ee9v",
  "key20": "4djUfgQMxR8axsQ5vpdfLVgMBtnxJy2MpekV9neLdJXA5dmVzCCD1dtn9hRipDxn1WFS1tYvcQWfcSTZbR8XGGf",
  "key21": "3BPGgPiJ66FeavMMCmUrjTLqq1Z3SRmSQADEWmcoZRWqWAzvX1gVDi9CjniTCyLJPdBVwSRc6bywfkiGhwDKEW5t",
  "key22": "4eV2nKo5YrGoBadKBLM53D8i4fzzrRif1xeGMd8YssZUiVq4sRgrjKYKfdtYqd5kGf8kBju2ZbqcbUqoSzw7KmhC",
  "key23": "FqJch3hQm88g64pfer51aCH8tvFfgFME9h3w4FfoFNtRBVw4E6B61xomqyYnVjvQcPTrkob484qjd2Hhbjzzore",
  "key24": "44FG52ctsaUjrJ4myFSnh9ZcqA9TLGJRGHtqpdxJqQHR93fzYeKbTnDABWaif7ejr2tpVeTGmbCASfG46CyxV7G3",
  "key25": "2W3rArYssjo843JhWifEr2iQHoNwAqS4cD4QivPUxod4om4Kvt6Vu4YavwPuRG7UUGiFXpaCLf6PGgKr615AFz3W",
  "key26": "5GzKyC7xeszmKJjpd1druCa7m11QraAYhxz2tkVbs3NgtSbRmAxhfYicGSyvzJgoTcLdW7mJS8js126AfEF76vvY",
  "key27": "5rtFkdes7df5RncJtszVSYnCunxp48SA4F9cke8uVL84eV4FYCzecX6QKAFRQffnUHNPsW1N4cQdLmCTziU8N5KL",
  "key28": "oS3V5R7cQ7EJyPrP4pADni6Pmr7izY4Hndp3dLQmmQnvbbEGpw4y7rHU8CpyUHMZvrvuvkArBkJQQHwdU4ZBsmK",
  "key29": "2iDXTBF5haRceJ7PKTnNYfmovC9NqMkvpF2R62G7Aqv8Up1wdwte2G6jbXERWSjMQj4rkWCVX7ZkuYPCpm619gBD",
  "key30": "5HP6u5CFifSN1rdyGEYehN8UhtRmBnstD9wHi5GmBffeGXchBgbcsksCBftbC7hfhiAA9vNntygFkcpU88kPQ4u2",
  "key31": "4bAAmXdDjzjknNp2aL1G9gbmfZeeBDm8bhXWd9wKyRpNLC64EEzsUnemhqH4homdERoLkzBzPqNkEvv6CCWAts1f",
  "key32": "2aZLQocn53u351Gx4Yd2v6fVNmsJgcG41wTHDvQ9resMVh2yb9T2NcEJZtgNs5aXHcW7sv7b7hetyaNSnXVb56G7",
  "key33": "5eQSXz4LKtMQo4rPkDbnodnNqbiMW4KJB1PBb36u7Y9ARZ1nFvmNyhudQm4tfD3UzBzuGARyC8BQrcm34KnW2tMP",
  "key34": "2FuyJpVyhRvyP1BDBcYs2sNSuC8NapCjjU2mNTCpQcYoSVpHjMaQvbQNdPRNCcgondgzygdAZCsnwLHqCVbMmxxt",
  "key35": "UkqJ5n9SD73dVr8VX3iQosmFF95gxxuEFAmwyQxjcUS4nwhDWxFYeaLpQCDc1LkC2BPra4qhwC3fkgzxqPsJbrt",
  "key36": "32DY2KSbGQn3uexu79f9hohJd25UCRxQNqZiaob6cvBiwtJXBxzbFwnF5iPoTAMxr9rYtZyF3jHm3yqqeqrXGSzz",
  "key37": "qdKcHNC7p1BgatyMbVq93TkvWc9kUEqxBAR1vrW1L8Z1EZVkvgusnnwjLa1N5xybhuPyWeGn6nLKTUk95nJjeEB",
  "key38": "5vZhA2CKNfjSSo8SwSLZ6xrHsd1WVf88o61qbAbj4hkpEt4MqMPZriv8ACiXSgVSmBgFQdAKGzrmgbNwnTC3NSW8",
  "key39": "2mSRMQ1H3di2pA4dTQqGADRd6VsLKJWETWatYZVqLQUBSjajLumECE13jtUVbymjNCgrMTSzU1ww2vV33GgDanAe",
  "key40": "2fGEGyaadw2BTSb6NGyAM93vxcZchypUZ21kNnyMt68B37HRAzfs4CiPJgtACeiFwHxpvvuwkD5hhBPkJe47NF2K",
  "key41": "2g8WgwYMexrZw9a9MjxgMficgtpzTaUGuHhdL9FnP8Fqdcv19HeqNtnQG3mGAhNeRDUvgKZomWML1bSVCEBmG4To",
  "key42": "5zWbyQzvBX7TCzPfHHwCnj6QreqGJkDUK6a4sdHZjv3VcRkyWMvZ4ZQKbsE9Z6PPNFrBZM6dEmqHubitffQJPKFJ",
  "key43": "59q6LCRRnegLij5jQAhiUadGcFcU51JJyMrMHvWdJYPZycdh4eUMqpP9YjB14mgsaAUUUobhuqa9PXHg75uifB33",
  "key44": "5phPG1KQ79XqvDCm2uieN65uCsTAnogSc5WfA1nmTgtGJr5icb74b36teo6Qjfb9p7zdwZz3xefxHFymK1Cpi4Ca",
  "key45": "4QKx5FUF9Ay4tXVoGhYm6yENgnCqvoYdT64TosvXt2gDZ4npYGqoqKLV6Eo4acPj3VmSC11nwCB4viBLR85MtTVN",
  "key46": "3cAMiBsPCjdLRn26VB8nkzmEqfUNsjRcq8FTV8ndHq8AggYxHrAKJpoztJgz7Zs3P7WmjbmU4uUbLwFmSjQZzFFc",
  "key47": "5L8RDVBuYY24MKaYYJqCNS3FKPT3G3XfHkApwrvbQaW6SMJrvDtqYVfPSbcLHxz9yLaZqUZyo91aUWv6RoowoYoM",
  "key48": "4WjjLxbAzQsBdcVkctutEtsi5fMBBLa7dJkexLoLJyzqd2L4gkkWBovwsHdWqXdvmjoE5WVs6CkhpwNEnHNjVgS5",
  "key49": "3ntyfjamdrqZUSUzATMhtDVeScsfeN94fELEg1c7GYQDYodQKMwFZn5UqcjerTvYucXfhyAYvY9yKtvonhwPGTUj"
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
