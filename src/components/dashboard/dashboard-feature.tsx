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
    "pkxhSdGVqdTXYvzgmWmBzeaZFnRDsqpLLBh9S2FqTKHYJk4mJiussrW9rbMDw9ZhahhuVcqJ43NmWAG3utGm3Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FHLZFrxD7tMsJEQDLmk3cbj2Se4cY2BeDbgR1CmDJFjgtbwuP9ZT642E6TfARZCvswTz9gVLr7u4C4ZU3erVsC9",
  "key1": "QjLy9LgyRk5TqnUPmEk8dPEmUYSsunooF5Ue1EcrNV5YYNzxSjycKcqS7brZC6DhodnD8BsKuCHh5uHrrw3EJeQ",
  "key2": "2BeRkMvRQ7iX8oHWi3MowCHVuTErzpQhPgasND4bMGLNpW9nX3GLd9aVFGfEivJzWrb3GtikbCqravkEpSgE3d3F",
  "key3": "5a9xJyscMxsuzTrKZPqhbjCwT8uj1zjXh3gHboD9qnbx4CQmbjjp1HRyRTbksxecv1iN83MJpG2h58Kqqh2uASVD",
  "key4": "526v5niFUVN162LUchs9LKtUu1DEAsvHZLwYb7RjBDw1zWJu4sNPMFzjZCn19xzJqgDeVFPWfrXRAVDxRLtbnm2o",
  "key5": "4dZJ2FFYBsfFaY4uRCF5G6tFFUMSUxo8Ln9Jm1QGyx5Z2Ewhbnfo1kZc5hm7xeUuZgkY7VP9p7qjye4Pp879Z4xL",
  "key6": "4StcktybRSs2d1gsuTt5xzpRRhAG3Pezf4to14cwTzspphg5jw1eyhan8DegHy6Kvt7LBejBgxt5xRTDQqNC7EiC",
  "key7": "2spx8D8qqebcvaDsrfh2rbq3u9X2mBL5k183YhSNpiMmSFjDTpS9geJ15LZG95EMMKKk8QvBakqZV2EGJ8PHsr4j",
  "key8": "55o2yMKugZtsv2tEPZyEecrSXDC3e9JFKLZfJaxXn4Qi7PLSbLioXh3LBJwu7gVXJnv6DGtiMLqwtEq6GECQ9YfU",
  "key9": "m8PkuE51TgJWFXaTo3nfeDhgR1zBWayBt9WZiMBCbx3uwSgD9sgTp4raxNXEjr8hABZJ4YfpDZYjqfk1ojQXLJ4",
  "key10": "4kpKNW9mHxcFd13oAuC7eQ8qiCiC1SUo3ZRHb56ooxgLQ5CiBEfNHbY5LXnnAAFR7eJNBj8Vuz6MAYE23sgXeMhB",
  "key11": "7ZNqpHSQi5K1aMqgJ7j8Kjwt4gkj2oBa6rL6Rf6ZiBt7yBmg1XcjXUhFZHvQJTmBtYXNhLZo42mLfRsCXr5mhCu",
  "key12": "2KN7zPp34np7Eo4ey29NxbDZKP29uE9RineZiAs5U4fXZ2tV66GRuxSeNjUHfxCsm2h7WYMrq9rUJJ82WtuVUGCz",
  "key13": "W93chLRNYdVkPHdDcGTZKiBapTgyM1SiZ6o4Fu8BWoQaEt4vvk8hg3eQpHEPCMZ4djR3DqUp5PCR3Q6TN2oUh7m",
  "key14": "4Dg8nmWhuEQ9AacH9SDFZEhTAsGMxQghZ79XG8hBJ2mCeWREr7jLAXXoc8EPE9iMrs6H6oxDKEtEpAzfjAdvUbu1",
  "key15": "4tFYV5M9iNdvQqN7iWMWYvDzV5syWygaLp2NZxy8qaVqUs8Mng1TH2sQw8q9j2vKL9oCKgjCfzi7x8LxmHSKwfsr",
  "key16": "5vYB9PaSifCanwkq178qYVbwhwM8vKHcPCEK6TK3eubmbghHsHpcR53Ur9fuurhQjfowBQBVq9UBXh6dzTX9MSf9",
  "key17": "4cNPhbDJiQcUhcPxJtHe79A59kvFMzUDhqy2ajQx9Mmo3xqZuW3wdbEAKLxsLqyhfpKtXopJCutJCmjiSFudw2Fq",
  "key18": "4uC1VJCAazPDagohuvFbWzgUqbVq3AawwamD9SW1N7zufExfHot6TUnwX6PUMARBJTPpHbeLpjihYGHt3w1Rmgnb",
  "key19": "46ab972R2ujnXEurbWEC4khvwW4WPqQyNYbvka9KmyEMn8yxhzoKKckPfwp8qv1MzMUgc1p358yPHaoNJM7Jf2iL",
  "key20": "5AadDzHeDc5N7NNXmGQvhGvWSEpp5XxM7E6aiE7JSQewaDSZUZtmxj2g3dV8fMvq4iGG4rJ5KYGNCRK4NPysYuU9",
  "key21": "3kSS4zhKnMEyFF94MYorN8hrDhT32K41XCP8SYhkMaKzGRBsPqs1sMjzCWEKiUnqP1KqbJMFVeZS9EHdcTRC5Mbg",
  "key22": "4vHxrdV7nVECKBXqGPS9uFYvgqndiMNJwTskhjN21vrg2xv1ZyQtA1NfbRJZ3Btb7S44ppHHyum8T6eQg9TvmwkD",
  "key23": "4pESR1cye6gwpeoGdbaZ6ZE8SYheXfUEPABfoWSFnZn6eiGA3hpJfMa6RYzruSFH7PqzF1aAyeXpsB9xZSULgg9y",
  "key24": "2yGXpx9tNHv6vqZPuVYkto3Du8SdrqUTxh2QPppibuVbd1tJTGzdCwMZhggTgCmLaWhrhpDyhjTWYUc8xZWB9Qa2",
  "key25": "teoDzndR6dbGGoT2irLkLB2xnwmPA4KjgXb6B8BpzzaMPxVL3pFtqZja3ECxjN7Mf5MnwjetxAKXCoRJpMK3d2u",
  "key26": "3kvQCZRQTy4fDVWHDjBwpgVdFgVmMc7zB9TU7hdaSf4DnAFWVqG38xEPQy3vDXFLqzpg7f6KNBugdzDrYEfEwfAR",
  "key27": "3pKpGJxE2sv225asBNwCLBjrSra13a1tjigKS4s7sPZsJAkxTWSQwAHRDXEB2MKdrGwmXbvn8QN7JSd5hctj6iqP",
  "key28": "5QRCGvWfPrV1VG26phyeC3WKY66j989kxtwq2UpWN4yarSJQ4u9cFxwKuLQTNP2dpgWH1U41BppJYxyPFTXXt44M",
  "key29": "25hkYHppxkUKSaKbRmmbpoRCaZfxfg2e7925KAXWkfcoJqPAokA5KkbakAvSjVHSb4UB99gmJ2GNgJN1iTWZq91m",
  "key30": "4xaC8QA7frcDZRzWs41RUs9wvbQknoxrnF6puVb7B4mcgrJiy3ZeaTV1xMF5XTTf5E7QbvztQWm6QbxEonzMPBc4",
  "key31": "5C87qTbEHVcufwskwLt9onkc7P2hvhNk9t6d5QNirK5q6eW6eyk2Kqay65RVb4RFdzNoPiE65CuoWh68cBZt2nnu",
  "key32": "hhNUpCEpgemiXEWnqbxEM3LK5HMZDeQo3xyUvB8W6C1j4SidrbsoMcMJ4LYWqUrSyeXHLSwXsYSocfXUt6cnzMc",
  "key33": "3D4qovA5UbfvK13ncmPBYy1B7gCwjScznGKBijJwxZPZGei4rrtMvghDLEoL5fsbBU3BtHM17yJkmoQMYN8sRASK",
  "key34": "42vedEM2aCWDmnFXWhR25Fmv1QnxS4Y37WcPid6TgciCMKrjJySex4AYouExm7UyWi9XucPXVRK1gScKTMwhDdT3",
  "key35": "3muapJg4SDro25JWdUN3EqauF6vknJJj2AM8vZ2e4fj2KC55N6ygkq8yxe2A3Xvn7E9CDQ71RvSBGxHYWu7bK93i",
  "key36": "3Z9ZPrvQ59C17SAZ7Smi52WBdUhM24BLPiquFPzJK739F3xyLKw1f92brzdyYhQqJkQwjKQkwr3sWnVFpe1tH528",
  "key37": "3AnxksfZ3rSqVoko5U275zcbMruDNSMqpWfuzG3YVAsUgkQYMr37SUevXtKPEYGg2rV3u4ZzaaKeRZJkTNjKE5Rv",
  "key38": "5SDqHWGfLCQfBk4apzbHSouYVg7L86MJJcAm97FEYh2pRzcNjsbdu8tWawvEmCTwCfVnRWZvm5b9HxWNR9SyUs7y",
  "key39": "3YS8RFRDt1rCjdZQFLBauXymUGraViyzRj3XtBAw4QWdfv8saEaiXEyf8jjgx4yVmyn379Y8gfmBo2iFQ844oaNq",
  "key40": "5wkAFitcod5B7WurkLXPCPtuTtTTT8Eb2AufhC4r3XfbckeRvZD917mxMh2HCsLUK8JkqaLbv3D7Eo2xdKx87s4H",
  "key41": "iEcfVXbzBz3drUcv6UT3KyVLWrxxNwLTmsmqo4VdpKDRygEVezAgZSCxGVcyYFXSU8g7oioPjSacSpZhW22y6WN",
  "key42": "3R6Gj3MniMrtSNyUtH1FuV59yLAMqrnY64QNXqZKD9A8QbrRvuoBAzapQqutUUeec4uv1i72QJT7Wcv3Szmh3wZ",
  "key43": "3KnpnQyuFseqsS99xvVYoqJufeVvQ5eGJ9NHWe37PS3t9biJEgfXJumPuEp9HbataNhRgEbt9w7F56SUnEvQizXT",
  "key44": "2LUSRCb4tHoMBBajhL1YaMwvCi2gMUrfpDwtcTB4Npe2pNqDQYtRhG9wC2z41CV2vG1BjNmjjs9dQa7kz9ZiNrfj",
  "key45": "RQ4MfperdoKteiLRjNFfqHCxv2B3cPgLqFtvmdZWvz2gNsqrsWAYkpvr9nXn6EnbrtmtvGCEaty8LdcFmkcpBe9",
  "key46": "5RGff3UPbu1aoPb4sFY6cbyYycnXdtLnx5cUVZ9FiMU2tmfRvEacxPqJ33oVWkjLFG3KGR2ALXYJhKReKBnPiNwC"
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
