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
    "3u4gji737wzFccXz9QEAoGoZW2Mj9RSGtUUuLpcKU3AkZwJsBfmAMVYEUbkm1dBbGq2A4niTUAzh45pjK4JNNByJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4ArDETycnVP59iabRy4kakRFZsrh9hMmJ8QNkc6i5RkGtW9JwhTxeKrcPnQAJqX9s8mUvmoQGgyA22B9hsDxpg",
  "key1": "55GpgJZzC4Yh288Bsopy5ojsidpAjvdVmhkfP18M6s5koT8mksp7UMN866A3N4rf7HA3woyGsGUxSZvF16sQMvNQ",
  "key2": "4JhZyubrJYYYLkgJAxYhRRDwzBeu45Bwn32B1iDYdnqv7Bb3xCfSZCciw7pLa99yCmuWpHpqoGQ7Ks9GqmkREmcV",
  "key3": "43VNZo1pvWUMFAgreWcSdGZqekdUNcT6e2ZxQvaLKyAnmDHfujDrMaWG5sMp3PyB9UnvKEKEESsRLHn6ygPVzH4d",
  "key4": "37QNxRUverYByALB37gxzZ8XX257jtq4jNw4duDdwa9ECJamne37uoSz775E4rnZkgXYDoVuLqCXq3KvBKVm8yNY",
  "key5": "sXpQiYyejY7rw2zf6tq4uvH3Ze4y9VXH2Xo6yKRCoYXbooM5UvHyPwTjCRfNcLAripJc2cDhYarYUQDNTpR9KBy",
  "key6": "3GEZUDWzDEmQUFKAenCs7qRsZ5smvztx6vpcxeVfyS35kYb7aBZQmJ6hD2wQDozajPDqcKVaLtZBXqP6qV7HniDD",
  "key7": "2YvfhrHEoYNStwRX2wp9esCpN7u3AWeevuNkBcAqpaLXTGN6URhgpAqQZzAdxSioCpqCSJzVM7sdyCWuhjYtYYZn",
  "key8": "2hbEiEFXDj7vLJFkrTvai66VKTWGkdy77Cf9DPmwThJGxAr7Yd587E4qJAAffs5LQRYjDZAuqTQDMzV8ac8p9apS",
  "key9": "4Xq1nKG2gLPYYCHGsg5fajtsuUe5MN54xNT2zPj4e3P4p5d4JAXH74JYR3S1cYciXvv2W9UstE7ZbRA8zkKaMjj4",
  "key10": "2GrBAV9GE6xQpZyNPpCZdYDznUEdMjjmitgomPraoLo4EN3NST5rfEGtqQD9kqN6c6wSJtfxakEBAi1UcUwSMvCY",
  "key11": "5LxgDsF6J1joLictLtq97g1pFLKc9osSiSBP39P6LNT3eB4SrszNBi48Wqvw7eqt9xvoB7kf2KrXcsKLe5nfk2JE",
  "key12": "3ZgmMTAmvQ3AfroqYrNetXWDrSL15kPpxisNLDiwpxBTBhA9KFSucy64kcdVFEWzDoiZZp6QUBrDfB8HcjZPvQPD",
  "key13": "2no9QUMUQ2pfeDeJj6PB8HNhgUPHh7F9bNoGXtUQZMq52MqCdkmbA9T8ZkjBzSfjTiqDaKXthPWTVhb5RmzDDmVv",
  "key14": "vRmWJBUTejvBB9vW2CBB3LKoidZ8fYVHpYcZnaSivt9XMCZ9ekZrXD5m93NRzyxyZHULVNspwgmZ4PtRobaWXsT",
  "key15": "2NVwuV8kBpnXdCmo5BNnoLwrfwY9tUxMBPYTDWfnSaAQz5WSwQt3HLhqjRTY9UkxkT6Bao7P9DX62fRSddFioea8",
  "key16": "3k3njoRSQQtAtQ9xBhHwfW4taytQdqQPgeaNtKKcCRCGeJwRmVY1iVdrsEG5Tud8ZTkad17dXNW9NvXQdUSUNWLd",
  "key17": "34hnMQWVc3metWKC6j6jRQtEQmxuC3tMHUMQBFv2fYbsKRJ4XCXQRMGYbKy6uLHhs8us1mqKd6GTFEcSwkRKap1R",
  "key18": "5GG3GfGm2Pf5ft5M5KNzjZMkXTbcDX4ypUpquZK2N6oL5oj9cteK5vxZLTKtfiA3jUAM948Nm9JPaH6Pj8Tg2NXM",
  "key19": "5gLQst5KczL8G1ZesFVcjgjpd2NoemRzdLmkkzdowHeZa6T4H4cU4QE8YGabx2NwqaEgHUjfSVVV9scM6YNgJQ5Z",
  "key20": "3fN3uK2TwyUgJSQMgpa8tYBQvQ5wYkU2ychkJN6dVte6kQ8xdYQn4prnPmJHjDLcrzyS25vjsm7oyABqCJXY9oSg",
  "key21": "iW852THFfG2eC2Qm1cKdVCiA3b9Wz3CatBegppkaqaBfmocvGvTXrgDyM8mVxNvKP9cpanvMk6Bq6YHJP6GLQ64",
  "key22": "5Qc3QUqXZsLagRnxLdyVeyLH67eviqR9VVHJh6LBrsxJdZndWt13HRF2W49gJbGy6C5t5uNJTK6ytq3RMnqfrv8t",
  "key23": "37mZqzTnsX7Zn7YQJPGWtVCHqFiXjb598yFbK2yZoh7wQJeKQWvqPKPXyuj5Uc29pdKRK4PAW4Ua25SsQ13ihBKd",
  "key24": "TZkcQAUVZMX4PqEmXbyMBpXpN2vLe8W2p9c7k4QSVShiCYqtda26pAVZJ55PKXhAr83MtHMShh1xXjjYT5NeSh4",
  "key25": "4d3w67E4d2EkRQGBNDQzCuQQofLWNa9W1vbVzQtLxoxHuEiqP9qCupqrj7XGeUCjEiL1AX7L6CusLAFDE6U4ethg",
  "key26": "K2ACVtYnoQ3qHXEUYu1te9FxHoQfW4btBdjyVtyT3dbpLyYV7UuzTsG8e6SpsVosBHk6HycX2FaKZBhN1oVrLSd",
  "key27": "2ZQTwNRpuQmYq5e8vmsrEvmLWjTtkivYyhmrFUjasgjaSRLRHy3RuWgL6mvgARzUfSrL8PvGSThSFfNu8v5NoLt8",
  "key28": "kpaqnQosVUnuxMxCuH6d6QpFx5gu8iS3skLiY7DDxMLQcdmyPE3geoe9Ydy8vo8vFZvCSEGXzmNQUqhkpJqNV65",
  "key29": "DfdVc6LscFJxkuDML4uo632jhAVDDcvztVqhPJpSYHdLxioCLhhAP7hrqGDRda5q15zWAAAWwFePHcRgGBPf7Br",
  "key30": "4E7NCcJheb3NEtTArTcruEw9NaWqm737D3cVbnTU7ksBWAps65D1KDkmaWP2kVBDh5iekdQhjkNFXDgK3AAWV9dJ",
  "key31": "SkpEVRcS9ZmRxCRiodWr4v4qPFkFnT88WtwE5uLZ7Y6a5VLQB38yvzHvsxuHp2ZM79xLmyPbg1qSEHvKuPY7Mfu",
  "key32": "2dykjavYHnYaUpaTfL5JdNCiKMmLYUm3WwSb7X2HLRdb1dJJgwuFR2p1Sfq13nubd8tbQCvjYZrrQ3m8i4ymcSFf",
  "key33": "2VJJD3vPTGFJAp23NSCrgvr1CvrGwFwJDCurEBLGZgvYNFFeExSAMiUxwKS2xhXcj3iH5zM4fH5KoyxRaT2LMbDG",
  "key34": "JjMdcodmXYz8WYmbwBdDN3Sxh6oa6e6qC5rsFFZR8TsyTfu7HZ3sCUET8mPJUbgvszMSvFmjfScHuLXR7m99xTs",
  "key35": "57h5pd1eZS56VDMD6qdbJZfiJpgkf4yrmwvN2Au5kSY6jFTQKamSweixvzeHvA8RcbrVXiZ3PFCHFrtf3thAiBKw",
  "key36": "2z6EhD8sUnhHnwKFF7NU1pfy15Z49yMBpvt97bGHAV2qNTXke2HgR79uDCcdECFqogRBq2fYCETZTLBpU2Ma6Y3a",
  "key37": "4pcwFnaLAd1crsiQHGAx6N6x5AniqJbzBEy8x59ddyL7Fs6nPuNT7aYakKWKqnQ9aUFhrLNWg3zvJ2aLnng42M1Q",
  "key38": "3Y7ZnswFvfDSd5JCGaFk9fuABzLYVs7xgw49bZ62wnGXsJ5NsYTesyhVSDCoVtnyMLgKsR6XBr26gBhEUjMNwJmv",
  "key39": "5ozruSBAah72Gfmazzv7HVvhRaMfB3MYCeG73kYQqUHqLyuDPMaq5T1uCrtPafNt1Y1CYKK9H8mkUhCo8n9EdNy7",
  "key40": "2XFaDM1XuGoUJ5SBtAEs8nsXP1y8DmNw9msPR1aV7Lv2vJncDhXhKARYH3VtkaM2ZDnHwCEivDzBSBoje1e3ALiG",
  "key41": "4AcHJcxsVJbdj3GsfPUnctyhWwPGbDpCohPVyQhouQEnRQSZ1zCrhmbPVDa3g6LB5VJBBGe8UBAur9Kx5HhNiziP",
  "key42": "21mspdB1Z5GP9Ctbxt15yXF7A2L2Q32RPznxAkkM74sKmqRfjWpgQjgeNLy35U8TzMRqGVcbShaVpP7MAX1JcRey",
  "key43": "zsbdjyoGR34PLMqDBbWkK3ApajEpNKgQwjx7bjs43MT55CFDEwcdykz3Feu1nfJ2mZv3WVvFMAaueeBbxwaLQdW",
  "key44": "2CmSD56G88GbDVSVK3ivxtJAz4MHBiAx6J6Yry3RwdHyKgdFK6twEZMhAYdu55Tjk6YpNAdCW4tHqi6a8uLqdSrf"
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
