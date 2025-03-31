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
    "66NeMncNfV47YCpbEThuV8ar9L8H33BpmTL9UFYq34w7vjhavGVUkDgUsoWCvLRitAxh5q95VMkvr8og9tGKAEAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gLnSYF5Uu6rsmcMEsZmkGRokJZp3ooJv6YQE7vr8pRVYVyeSiMcDSxs4T3Xc2o1PCEC16NpXRrZZFVrewzQTFgE",
  "key1": "41zaPqd5qzGssERckwqxrf8UoLFJWQ4B8djbtNeTboijkH2zqy6Yqg8JhVXC3TKE3YWeeyQziebGPj38y9LCDCmF",
  "key2": "4x6R6QZ9i4za2KykfJDRpitCLCY9bKbrUH7GKgX7rG4qUAUvPJhocDmjeM3N4SkYfm6CWYNMDVPhS6gw1yyf5g6v",
  "key3": "qA5pFjntB1yEF8aP4eDmvtgFFY8oi5jMiNrWQNLWgbCPHDi59FoTkJ5KrDyAY7rHx5VJ9JosYqXRNTNkHMAYuNt",
  "key4": "2Xso56oGviWLkW6yj6hT8L6rqv6YBUJ4BuGETLXUdKrYfTAWJaa7RkQfk5NrkAM3FoUp3XT68tcc5ddR1ioELAD4",
  "key5": "t5tdY8d19URsiqCvEDEUuG5tRxSH646RDQYtLj8fFzKV4ZBhbe6BDhn4BsWHNk4VjibJc7TY4tysoKooxseUxcS",
  "key6": "5v2MPYN8Hz5Gy7P9P4ddX6xyLxajebQPZdY8mh5Yusnw8bEHKN4T7k13AqSu7i8JXyD5tvf5PQZViH2MKMWvbRyZ",
  "key7": "3agPmihDNbtbCqKjPVr5v5ErYCqzGz4ZvkgqYfW3dRbRZeH9FdHvKJWQDA641F24SLU5D6nkXsfajwzM3x1VRjs3",
  "key8": "vEn4PKMatw66DMKR9SQDW2u44fZK6pxtHCnvJWgx6GBLJLhW8eZttEymtAvrYAkTbDC9E74gQvSTGDTv4VSV6SN",
  "key9": "JufUtiaE2hX4GtkU6zjeDFxig3v6aZyQCowRj2GUKsgRG8zN6PKPcfnSbm6nR7gdDtKZDGnkwUUs9hTR3xcvEBd",
  "key10": "nzMApBoJN8xHYFwkqtCzAo5rhsXjEgRuyxiyBPfVYZGX9YCJdZTGtyuo6tNPJKFg1u16ztMgp3QBNU3LKU4RuBs",
  "key11": "2RNMiaH114hXXhxVFrwG3WHdWJBMf5eWWs9Cvdkxyd2YYzqWaaeUJH7T3RzbbU3mcTXQP4FLRipwHueTLuiaqXtL",
  "key12": "37XFoeJLFnCQEDdN56xytW8v5vcmpSfo8perrMm19srBj1fviFY27sawTDd5T89ST7GPMvanXeqFJeDy3BLAmYF1",
  "key13": "5FkH6rQLAP45gcH28bnT3QeQDiRK5AmUvvLFwwNczDtDibUW1bGgWTnCTHYy8D4gKtVmX9vQc2H4ezceWFjWvMku",
  "key14": "dyXJfvkRAzCyP223Dxxyimij7QhLZV8YBRmKfgaLYX6cZiRp9Xv2HH4uxoDhXDJg8k8CPzHvVf8wm5YxNRG2XWa",
  "key15": "4YgXigmJqn6BQrpFCocZFDvBrsEgCoVM1i2XVFvus6NLcq6Yy5cPjUSXcpocC5RLa5MZizS7ZZdWLvoBCtDrYG9j",
  "key16": "2khbui4KePRitTfCJBR9LrVnsvERDqJ1MmPwaQBs8kg4WMhtyjgMBndS2HSCaXokddKqZ1F163tR4oudeYoxAMhR",
  "key17": "5kh2CYvzCiVJGfbuYMk5eEa7CYCMBEpJXFK2wCGaSj6kbKdcLPXKBXdyeb3pABAfKnu1A5uKPf48J3ak3AiezyVY",
  "key18": "aYnMrZgQQDTNNH2HkbEsMUQf4Z6G4Ae8pBWBipXu96h4To9fjqfLwn6QQ4dihCWswtCpx9GabCuoytX8bo8PhW4",
  "key19": "2mqtxqwKEPC1tDiiKq7wBAPP4TxKha6ehLVbTXibsLyjDwA4AfwTqGdudbx8S7J8NmseWYquaqb9npxy1RjFD819",
  "key20": "3JSGhD8f1Lgco7UmbiEX3x6W7Lon36mKPCsCK4gyoaQdaowAufeSiW5zusoA2KeMywZ5kRAhGwkUiQsiCTqQd5Pn",
  "key21": "2oreVKWTAi2NYoPaocCgDaGr47jngHdqtF5AT2uAA57ZPCNF3C9B5ro7FmBTWZxVPbcUJhs9Wnzz5Uw7K9xXcbzm",
  "key22": "2SdZmrosa9UMkUMjHydJPAQ2WUheQsgnFqELZs5gTRWNdAP9r2LGtb7243QNpRikg6nQFY9nXYYijmfojXHo7qH",
  "key23": "487DNytTWmJv8bXKmRLwAykz1V78vSbZmXFAQvNR3AGBCWU3u7XomVdB2rE26MSUE557uDZy9qDmbrEi64JehvBx",
  "key24": "3zP4JXj6xz4HbMYzvRJiAEUzURWLYqD76XmqBLUY9D1hk7dEBkySrpDpHBcfeA8B35vuENxdsM8XsvC4aikFo121",
  "key25": "5Xsi2Y3yvz3BkLoBhcLTjVELpwrkYQfYwRGn32gaeHtsRKi2pG8bKCq8hzzTYGsrvEdPoAtvJGonUoRqvt1uZGkp",
  "key26": "N3gFdyzERFBzyFK3KGj5fFm7TbaisMng9poWEBwXXVJagB9YnEXhmKPXFGDxfkCk8c9Sjrz84F6QP8JZ3Jhiph8",
  "key27": "3cR2h1ukoDicWxjFbLUYSoh4yNohZBchtK1FjPoJn6V84np7M8JPVC8uXrr95EtV6ScUWEMc1gUZVnh7XCo5X3m3",
  "key28": "3MEt8EgHzAjekaq9BLkt7kx4i5mPsZsdJELUgGYh49sVVCuykeAzzv9PJmPx3VnDM2KKypZbEWRG1mM99rZ7Q1Xu",
  "key29": "i5VfDGx4HtesgzmPFa1JXKnQNY9jNQFWXoXgD5ccxgYxesd3ZjvewgAcJ8oz932kt2kpqxsVj35VDS9ae66M9fQ",
  "key30": "4K2EmetK6tn4ks2pp6sZVK6B1tukbf2TBGMiBMduJxH5HAmTjUgZLbZCybnc2gv75fbEqWLix3d7CAsLroXdeszz",
  "key31": "5T9gbq7z76cRBehoDufDTCpU4cnFQQV7gZpyxdVpfLZNga2GjaHNTW1QE54atKwmME3ARTcM6zVjwNRgneAC4CQB",
  "key32": "4QWm2c4oHuKAUqvsroi9KkWTTrvrGsjpSuvHZq6zDUNiksDoZjavmiRoeY5KeKcC3B1FrTxV42EmW19LvrgWbWj5",
  "key33": "5zwKEpmqVzhqVoxbXkmFbesAYYaYkXHMaPw1RWBK3UKs3EFvsn2QeqgSJfpanmSzVnKrH9L3UjTRdhSYThUPSNTR",
  "key34": "perr1DNZPwwfFcziXfUbWoC4CksXuYqfhcEzSXquXdqti5hZx9UVDVgKvJZeMPjpc1QkBFmcwDvoTsP7nZGu9RL",
  "key35": "5V2DmSpDQmNGo3rzNhisrVNuDyBz5jemdwTnXFe3XA1SBmsSvwKjaUeYa8ZzHgL67T6W7S9TaivKv5wu4eEr3ztF",
  "key36": "2DGPqVZRonArpmt6kygVTb1XEchEXPGZSNBiRx1kgJCJpGJygeXasUZpYSW24nmXoVuU542yX64RYgx3ydctdxLa",
  "key37": "2JaaMQ39DppRmwmJPotV9HLUbm8drCWjEEJMsK4xn8WVZPeqrrJaFNwwgtvxMwrwQ5MXsdzPm26YXjuWceujDihw",
  "key38": "4rgcUxExro3sMQvGi4hXdieUPXbg2FRCd6JDU3KVvfy67W7T6RN7rBw5zmwSgXPc18keQwmmHa6dnAhkJy2o1mgJ",
  "key39": "47djjHmPqU6KTkwmoREfJYHh6dKEvBi9VZjPrs7a1R5ReoLtnRSHEH87fX7HLQfj7dM8k6q8FUmvHm2HXZ9BTJzf",
  "key40": "3ueUPVzznrPHcLP25LyTKMCaeJoGdy2inRaYTvoXJFPK1wcnm96QicupBym1PhuDLyU2KDCV3JVccpZyoXhjW3pJ",
  "key41": "wXjYg24okXWSDHPk7pHsz8rNHG3ckTGz9psKToixXP3KPU8oC7BsyzLgUGVWQQep8mwHiruG8AGPd42tDUFCnFy"
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
