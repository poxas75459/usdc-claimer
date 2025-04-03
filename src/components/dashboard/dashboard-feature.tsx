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
    "3ZyyGctyNdurwckKvxQfJ6U76nGuQJ3UvC14Rgn9HxZx7BSzjqt18cg1NonYcVub4YnEV8sq2zdc1URdJx3fiDY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jem27EaCW4o8kwQE4AaE48EubRgReqv3fJ3aQGQnWT3kTYCag9dM3m7YTyozCeSi94nFTKYqj7VYgGuJ9LWzTw9",
  "key1": "kGi993veUwBadU1GNGjNsQZXbAYxKhgqB3nRhybCGYTCnmdFdhNijBGakfcu8SGhPmd8Hqe1Tb7nfPKCH4o3z1L",
  "key2": "51E7xzzUBX1neJCCttZPBHtwKnJf7pVmUPHLeAn3NJYrDaTseHucKpp4Msd3hagqBvTUPRS6zsb5CfUsXQ7vvnRu",
  "key3": "3DpCUGjApcEw9gAyTPVMhsGf6mhZCJuu4i14ZqxuP4CG9hLUDw6NGJCNEDYardjhHgfk3imWRLfST7duWEJuAtxm",
  "key4": "2Qu5vibDknMCaEYcuTJbdaL5P6qBbUtJQtNeZ8FYcS2XH5serrymKxsGSvhPe2PKqqV9CKjfbHVZ93uFY2G3CcDe",
  "key5": "5k16fMAXaN8ihLuMzHbajSvMyoaKXX9yyAj1DQZX4GDABzfabxZ331UyGh3V7CucXMFqAELK9k3KcmZko5VSKbr",
  "key6": "3sgwvjdAgL73Hqtk96SbrnQMBYsehkN9JJdwRGoUqWC3drGpnMxiRsyz7LGMg8pVwUN7TzUKiJuTUprndn1ScQy8",
  "key7": "2GKi27iXVRCQ8YP7jNDFquW7SYceoTTJZMkLiqZpiv2koSpSqkUBxf3k8ZN2oPHpzNDSEjAzzDVvQsgiwYMrZiVx",
  "key8": "5B1ZLEpjGmCPQGufbMi3pDaFm53jLUdKeQnCGbun9XgRH9oWXDVTmTeRRGR8SaDSz7MayE3ueGsx4G1KcXKyjzPe",
  "key9": "zZbo3ZxJqYwmiC4W97TfQ5Gx6nHJ2bb3RLHZTXJFTkkaV6P4cAgehas7e19mUMj3Qv7uUMD7fsteT81dreJTGdP",
  "key10": "62qsnsdvU2H4YP3n5uqxQB8oFqzDisZeE8eiKiMX7uNJfyhxEVEKGfZN5JXRhn5eytTCEg2YXeeE2TSaFZwdKTTB",
  "key11": "2BKXaBErcXbX5nRQL8HDm5ZPoG1VFSG23WRi6M1B55PxUL2RifexSaKktNUjLeruNmLuczDZ4cFS23HTmsVdFwcV",
  "key12": "4HVWXoYk7HPCoJzSrVn3f8f5dwQDdBns9QTFGrUFr9Jwjozs4ZWxjQSnG47CaN5EiV8jtoud8f7KVWPGfgTiKLWc",
  "key13": "3eJradT1Uez4Wbbi5oV3kL8Fb6ZPEfQS2ab3DUn6eXWhDt9EcQzkWs4zpUN9u7DVzRKgXbPAv7kbJx9D7i1CK8Ds",
  "key14": "41YPYdzGFdoXvcSjtqpJadjv2vpqT4tazaZhEMYZ6GeBm8D1jiAq85uUvXrP1sdCMHDGER6mrC1FHBQ1TumkHxTt",
  "key15": "zTxMBLGdfAc8Jd4M3UApzEN75MfJcqNVRbJcjBsbWt5zn56bXJi1vtLsxUpSnZZQbt1FGLhJ3huDjAHPKu8SrvU",
  "key16": "4QSX16EDWs1FurHX27fvuduRfM5Gywec7MRA7xuTcum6rBaL4CCNLNrMBuoX49WzRHzdN6fqWaqy7JGQVTKYb6U",
  "key17": "4H7QcxDZT252n4kX7ATLPN4uJRZMcTM92RM9KujEQQSb2Ju73c1f1cLqADfhixNd1TRSwpWHuyiLUAD1Up8wSbpJ",
  "key18": "4r6qoxgpZXnpfzvGpvihM2bG3huMozeGXmQ1fxzsRJVvotEjMc5ufKvKhqgCPVGycfFYL8Fa8SUSK1LaxsH5bcdu",
  "key19": "PVQNLKRiifxBcGXsmeELxqAk9Tt9EzA3YPNwu5HC5SQ7KwwPUDpHx2vxFULGgbMaH7fmQyTw9NAugweJ4iTiVgz",
  "key20": "eTJo9jpYd47xB7GMPaFko3uPhTb3CFeedMEq49JMouqq3Qpnn6r2JjsbHQvRbumgeuAkzsmbKkjB1m78ampapAr",
  "key21": "3wQ5MspLuDUy9M6FRj1CFGocxU8ZyLB9WCM5wuHNc8RcS9XLndRUrqPUJwAWyPS2xoaicZfXdXQAPUFieHfLQ3Uy",
  "key22": "5Lzib6WvKptSueee2dxZfXxLhf5P3YS8WSo7hQUKtXauvrKraAddSFEDAMVxpbtPZFLUXAC355SpecHG8sjJUEPd",
  "key23": "212qfELDmzPsVbzgbs2J22LnybEiMZbp9QJdmswDVohEbo9KGhP5inh3n8QNDGw3x14YA1zio75De7EhMe1USaKY",
  "key24": "MGY9xjw6VGs5tZAfuHx53jqKbzx9Abr94W6k4ED1B8q3RCWa2qtgYo13h81DeYtDnTK7wZ7motYVwVUXwa7KLPe",
  "key25": "4ebTvzyeLRaSsEXkn2ikE4gcsg2J3AwPwazvSncbTkQRa3J7frcknBHriPuGxNLyXCKE89EnTepuF6fVcMNi4zha",
  "key26": "QAWuYaUPNsh6cWGyCyRN7T3S8go2YNZ865Trt7TnDHec2hqqsiwNUARXhY2W12AFJpPoh6vChoDJEb7UEAKKnZ7",
  "key27": "4F9WiT2nyTm7P22RfTcRB8xZyNVxjkeAAtAvmZCrVnyUAhXqn5NKX6ZWfPgiDziYQ8mF9MuKkkzWYsxuw1DNfq7r",
  "key28": "5Acmw6g9xuXz9iBkafx8puYaP2mu5b6ArWPrLsAjAUJTixz5Q9YzPDoNm1uTa4ZashJf8xLzv3KKCg7wcaxbXXWy",
  "key29": "2sSjUGsa3mCXX1hhjx7gZfueyKMn1U88d6EdrDU9FrTAMzkvjdtVbJ85NwYt82wZ59KP1NkHdZvUvnW3hQ5LcNhy",
  "key30": "33N6jfCD5Qe28Ljgo611p91rUG1H8ka5ueSoTYKYpoA5Ts7yeJpscBMDCwqS3Nch4YbM6Vo8niW9xsTgVtNWZkkr",
  "key31": "4dvxTLD2y8DEahhSLCRkLCvwkz4VGEP8G57qcQ28m4oujLznLPtLQvc3dUg3Mq6wHfUnWqm3Gc5VKFfv7BXnYb9x",
  "key32": "2Hns57gbfi8Tz922J5KvayGW7hM5979iTwvxwzC8tixphGiVAADwDb82F7FNhR24N3Q1bmB8PYVPCvBtKZLhg8Ko",
  "key33": "3vXDtPXfG5XFNK722ioxt6yE6ZcKFTW23spHUm6mg4aL6gH3HuXWoNuLpqYoTn2cTHJLkbJ4bUegJDooEdCNHAgy",
  "key34": "4hXPkgMYUoPPjLTEtKbgiwamKZxDRidQPoU5f7BqcLBcuZQpYpv8pe5HuRr6Zkt9mQPMd12wwwRgJNKVGbU34uHd",
  "key35": "ZP2DkTeCZymrAYBHm8HHTqtZxYdbKbe6PJK7A3gNxif4fP6jtd81Qx7atpyVggbz1dRQv6UyvgXs3bvH7e2mKSU",
  "key36": "2JWTWahfZiw2ezMvwwQ8fbxi9snTV3no2YPwQZsxFDP4Y9NuhCRbu15PDigGk814HtcQPKQ5rkZ6iLgyRoFAdVH3",
  "key37": "2DqL8zcrVmne6VZejXfRHydXZVA3CDhmegHyFoWv6pqmwiBwdsanJEG5UaY6beDnu4z2o1cAy1kvBtE5Cbq9rH4P",
  "key38": "2KYNDyzHwZ2thxRv8PsPGWaCUoiFmPf8szpV3rtoet3hjckPywYJNiFZZefWYjZaSxa2TXqoZfHBPazA9LFpsigy",
  "key39": "5x3o2o3hGNUUAVzTMLoerpdQDZBMVQhYXpGKJv4KKiGDVHzDdYmwt623iunHq2x59QSE25QGV9J4QvKLUjiVJtCL",
  "key40": "2wSK6CZS1cNr8us6gYbXnZRYtZEsLZvbUw4br8A9LXrA5efax9TdYeedXFxpHwZMe5WqVghyq1912A66DXWQFXCV"
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
