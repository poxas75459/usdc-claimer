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
    "2bdTz4zMxvA6EqRVMqFc4rX5v9V4WLmxsDa9voLstTiZ481Qp6MyzqjNYN8eGNphsxyJJ6BXJ6jion4vqfmMVAMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XAqSkZpmDiiMTkqV6w7zs9tyCkTFm7iJKmjWQB6JHNLaP3kRbDxcNhp9HWaCpnkHAtrDvpE49hSt5u7DSx4AzME",
  "key1": "3zHtcSr1uz8EqKSZ3tC3z32BF9auRWxu6Gn6s4gTxGMUgms3k4fFnojphAeWBb9mEpfTBBnSJ3nuvDnTadAW8jZZ",
  "key2": "YAgusYc4WBrfCCecTnZdkDqYfrB8ognasZQLHH8ddxgFL96Prd8cFYhCASjtgjwxmydqZj1GwSHALqczECVFo15",
  "key3": "2YHHuwPGDJUSevK5trCy41XJvPEM2L7a9sxzT2zyvrPtnc94nKULmjZGWBQFSZ1zgtcdhUDJgB9tgYa1icJTwMme",
  "key4": "5o7pN2brejkGfJbaawY1zXMPUxfcgWY9q66oZVP3Rt1Tfxdscyxb2NVibPfwUNxZp4gCpZeB7UgwyTfnf32Y74Qf",
  "key5": "3Yg1JjFZZLT2YmUZVEv4ju6iuzWm5vjwQ3kr2fXJZVi2U3u6eg2BUcRLuTkC9eJjwGRZEa5H6L3mkRtEQk6f96KH",
  "key6": "4rLbN1Lb8v35bMXnnf9KUL14faPPCYJjfDLV2DWekCvgKdftcLWYYLAxz2P1DhMgkHpMpivmkyGzjSEvLTJxhcq6",
  "key7": "64niwaZk9uPTJFHsXhCYcVKbPuNucw8EJtz8WDv94DuyVGfVUVsDibVt7NN1G4HqU6NZpfSDodGEmpwdSPpE3k41",
  "key8": "4jcp4YC2McvbrbSkxPc5wwW7Mtou1hDkw5LMVoSEdqBQmKwn1wKuTLe58kZN3WvuUBWSrcA7AdY9t9AR8HHisK4z",
  "key9": "49K1NGznQSAXVRjxrtq6afCEr1qV5WgMyiJDhPNfjUi4i4LGQHLhVZBZftoy5kTADLLPHAMnDhqKHQ6HXxeqX6wq",
  "key10": "2KpTQSfZA27Lxh3HQWjKzvhiRVyBjRjY38Bf1ddDeqGQ9YigdNAStab8kj8wAR5FUrczLg6A9APZtf8LpA74TASM",
  "key11": "2bTqHgui6XFgZ7uxPQaSFrjZsKZ4t99v17ac4uFqgFqMn3T3r5i1AazWfxM3dwGVbfvf8wwwRkYF5CcXfDrZUHFX",
  "key12": "KHSfSdTYnxsvpp669qpB8P1fhmRZ5zge97vSr8n5HkudKqpYmqKaqzoqkdB2GU5euQzmGYGz6xbfFKHbRKZvgUj",
  "key13": "2Mb6CEqqF9EYm67DcyDVDcc32Mrq1T64aVY3G4BvkSsKT4p1kjxG5xSBmN1TvMRunSCaDB1b72qSKn3K2kRvYXWm",
  "key14": "2B8gAz7oWzMZv8WVgtauYLma64k6NvoQLSbCueZSLcZcoWULd5N2QvSX8u5xpS4TGuPahx8K5FscQZz3f4zUXftt",
  "key15": "517X5uMZh67eQ9j9U4NaAycqqMsafJkLYADzW8iv6a5EmW6iGbK59faaqxbSk4VXX6Me99VNCpQhdG9SYjcmsd3p",
  "key16": "5rsEguP8JNpJC1ue1BmuL2MiRkduxym9SS8FcMN2qLdWDRvd3omvscQrMtkWmcKkzh3N9Z76DjhNADQXPzD6DCMF",
  "key17": "4cEQfKDNiK7zc8Rtk2sKWV9unbLeNBw2gTmpouz95kPsXZisM3dmkMBEF5mkn4wkYTmkZkQhZFhF5k9K8PZ1zhnv",
  "key18": "3Rh2sLtZm4gNnUDLuNFqBYb69qGqUsx47BsPX6b5EK8VW1CjbAZHvL1cW1cEj6Et4QNK2HYbnTQzDHUPREKAdk4b",
  "key19": "3zvKL5d4123TzuMcyRWkBg7e58jjqTbmaiP3GvCvyXSFUraW5YRv1VNi73AH4xVMCdrvR5hm8BNFA1zh7DAzA6VV",
  "key20": "4PAb9Lrc2b9oi9yoBptGumCKyWBjE4EX23PH3fhAPnNek5tRzG1tym3qXVCv4eUwufryDNi37CgELKT5whJeuMfj",
  "key21": "4v7TSCBK3VXvqHP3SLBAvdhpVPm3fiuJxUkPyWdgPryUas6pn6y9ZJNTZHcbC5HrqdQXvRJQvNECoJU3mjbnJd3L",
  "key22": "Z2mfauq958fPXdMZHGR8ka4yT9A8qYNkGn2SqLExrTobPd66Dp2GKrxyJn9jFjxceWRDT9arwS9q7orLkvef4Xg",
  "key23": "3FgW63df7TusP6tH3AFszGfxjKSMaRBphAPRdTZAQw7avZ4WYQxeivk4Ljir7LCj2nxf3tWZKP2x8Vd9QQEy3QVp",
  "key24": "BdUGKKZAjaTacVtZ6RTDfw1LGA6Pa5Vz6Xqszn7t9RdhLBJPkuLdhekS16ZYGHnpsQap1Bq3Y2xV68Xiq7p6Dio",
  "key25": "3CqofVtps26oAZ9oPPTSmGZTCaDZm58voWsEZJxJ5rUZjL6hWUmdTcS525426Hki9eM1h5kJ7pgX89DHCLnudJbP",
  "key26": "3kXTZhheK14W8WH31P8qW299RuYtnmsb6hufHYSFNmDAE7QnX5tYHN9BRuxzVfexcoFw2TEHWHE1tnLVRZLQWUZi",
  "key27": "2QPAs3DvfwTSb7Mg8Q7Yr8AySPWiWteC7gKyiy6S6Re4h28yLikrXnsy9xMASz8bQpYb8yKjZU1TVwnHK8MuGRxk",
  "key28": "3Kb9epMEzM2sqDvYrAXuxhABVHParLdgPxbTZWVCVf3C6iHShjiaHjJgSKk7Gfiw6f1DJoe3bK97nivrpBnybmhY",
  "key29": "25zdm86NV26XL8CnQ8D4ZCn6tMbn7i57qEcBmrg9rM99kKidrBnvTgE3T98BoUqDFnFKhMrCYg1vdGzHrBGQg7i8",
  "key30": "43NtmYW4DayS4nydUWNBdh9F4v3tgpWTUq4T8MPtc5kkgtggEKdyXGj4mCC57Lt1hT8vkPnuhc2FUt65WpCFBrYP",
  "key31": "cn5DHb3Qydou1zVXxCaCwYeVPDLN2zqLWenTArebCVYfArHYkZjxJkpYwVjsNbyDAAhEWPb3Q3BNEyAEoqySUUL",
  "key32": "3364GauUhNDzQyWnSsi6pVjfnPB7HEFyZ6fKwT7iH7pbBaTCj4FZcG5yTcEfuVvvgRCxnziCBCxhB1NuCHVxaBE5",
  "key33": "3qy3syAyjxrJM3L5RmBTMnf3ysi79CdhtjdmeHjLjrivXXgsCBdsQsupB4Hy9pvDXdQzyFw1RShVz4D41Wr7c6X5",
  "key34": "368j3FwkawoZE24iDzecMqeA1TyGnEinHdzd1iAVSjJaFTDocK5aaYwTUMZv7jX27cMQGrxB9ajQRxGvwjwGY2fQ",
  "key35": "fb5iiA2FcrgR5rkMHdUT1sjuGTDxopfExWseApnDK6Bouuec4Nca8A9RymfNLrfYoCbXdjJ8eEdiiVov1rzsM6s",
  "key36": "4kjqxb6HungsUJcjFTfn3VUytH9wvSLU7sNzSqXY3emSr2bVYoV5fBumeXvkjGSkimroLBdnsXsSxpRogCKFdp3U",
  "key37": "42SiNaxaAekzhiwLqhzNHfggNuNCqW3di6Yr5JyQDAh4RfJ9HGgAnqRzZ4RH2ZYwCtciVLhffsTApSWvt1qGksYD",
  "key38": "2mknPcuj3FhxSdTtiqAk13VMpdoxmMjPmeBtE1bAiQdcEhgHeZD313By33tMdiZW23TAAwm5KjamdSXGwjHAVZgc",
  "key39": "5J91C1vQnBKY3VZZufSJSNqeobzEqVxaiMFgqoKzCszgqXZ1XtqQV5qwt9VPNV8aZ9Mdd3jR1SZo5sK1VQScJ6mv",
  "key40": "2sYMbv1WQTGnFQutFNR863MJoU6qDpQELYLYQAnUp5SA87fC6UMegtLGEJkStFYYUV26HAQWPw2LahULj8inG1Dr",
  "key41": "3AsgFnByF2pTUc6q4QL3cwPB46aiDc24W9Z1Ewi3ZfXDAxTbQBVBZRjS655huGAmD26ctDDyxRU6kf4zp1sk4ERg",
  "key42": "2dqDpQ3MoToXUvez77QqobFMGSoSaNiMu14trDbburcLVhfkjhyghmUwJMkgtXPfLrhdT1PbrSZwLDxJNtzHmLJX",
  "key43": "49aaQYDnQf7p8bqEfmUPFnqj5nvsEJQryMquNbYjp3vqZnprxY7JgW8Ghbi6rKNZzTjdutBdNKnRKuehXkQoSnqr"
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
