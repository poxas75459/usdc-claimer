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
    "35sCuFT4ADnZzjCtFNfjEYVZhiBk3kNJnKe3b3bqWoHbkXHcUKqz14MdWYCvUwWncjvuLN9C6tmEfc635ctZjFP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HXvDvb4tC8YtRAeYYYVtuZPQU92KAMzVZn99kCLfCibFVKk9qMdCZsiZMtgH1qj5w4BPbADexrgjSqQfkBKQvs9",
  "key1": "3vPZ8ub8wCRYmEA6xYnN3nbvRoPxmk68jgpr4eW7Gp4JXSWYoYaR6KKanNGiMXx6iXn1rAC9svveLiXdw9TS9b4C",
  "key2": "iGNXtmJzaQu22xYfGPrLQYn3rF8VjiR54f2CChFcKASbetxyWSeeFd7Aid9VM7jdUDJBpJE5e7LtkJYtnJC3YQf",
  "key3": "3dEbBkQQUNZxEx4knX2ThKirdp6xJxzQvWfto5ixV33DeteCL982FqJ3wnMWBd4Ht2agKvgmmGSU4xMm1wyX5zbn",
  "key4": "5RD2UggpZjFf1buDX42nvqngJK7qrorV1qePBymBYkhtTkykwRnJDoSLj7pY86TQFPmeaWpHLPw9SkkSDrpJsWZe",
  "key5": "5cMEcLtdCDj1hwLi7icVrmsTyHXDkJqC49kVJDmdrsKhfFR7n9FybmjnKSNwfxzuPWAp9eNrnGR8iGL8EPh4bqTQ",
  "key6": "R9Bm5167NGzAgcM4y8QXemUrSkFbVuLYe4WSDhDvJeTkDmRJCfGiTvRqdt89REeXEZPDDLKtFUXo7TE8xpQEakw",
  "key7": "4XzBjTPQRKuJ8NkSkcnaVNX8gzx5LvC5oijxA1Myk5PVSfyGEdxTTH1LFfjvPEH36y3JJvC2VW7NGJubmiV8xjqF",
  "key8": "GBTB5HVmnAKGHMYyrNAdB3xoCxJHfatHpXv6caev9ESGn4SZhwTKDBVqCbEF1FLmKtT2ZtgHUEkgJXF4jfpsKSB",
  "key9": "571QTXyt2GRG3usf3ZVgdpiJWFXkhCsrDT8tpKJbJY83yXb3vnLReoqUuU7pqcwTVN9chsVGNDGHAdqUqww6xBVq",
  "key10": "66LTrcYmCmESzxYB36CBsfjMxkqTemDxCRWxoGgtFH4daMTeFFDQvr1GLkydnjBC6qjhV61dYvhbvoBhqUjTRTr1",
  "key11": "4v2moEgxpxP4rm8YUQbFxQFTtTdHfbgtQvL61DBuqrYYNkB2XzFRhxFykKYNHjhzNZcqPvz6yyBQAQp4zs89JrGw",
  "key12": "3yX5rRrD4iDTcX93bQwDVE2XFuXfHc4dYaghdn3bKTK3vyq9cQBEJy4DF9i3pgos4qYfAxXhSx4cskwcK62nRHik",
  "key13": "2b6LJanFbS4tpRm7bhtM69s5LCmSPnYbXautu1p9ZFhpYnCjR1hgUyBr9FcWYpV8viNtd7S6HFEy3KX2Ju4QWMY7",
  "key14": "5qcVMBk49dzqkCBGEjsSfdK354Gj2TS2kUDE6V1WXX96a2Z3aU6cEYxeBrBeZsRwrs6BaiN2ZWneQHGYNNFXFGqi",
  "key15": "4uRTZ2cQL6Lgi64JnUwr8YPGXvLu7Qzs6gCEgjp6eLkbk5TYUiupp81QwFMknsHR6GyMVLC9cNnEH2D5sSSsmDxu",
  "key16": "2dUfeRV2PWnpeTCeqxtEVtp3bYi5o8vAWy4V2F5KCfXsQisk9G175z68K93eW5ZZTaLadx8w5S3oHEzNks2EVY5h",
  "key17": "juD7XqNWj1tRTCpcPdu5ULYUf4sZQdtgXgBMsifJhDznKvJgPDseWxDTPgpakTc4Km3PGRPPGkGeF7AkeS2XsFc",
  "key18": "5cCG3Pxx2nRjGfFQaQoDvXayGVN7Vp7EgxfdxYkrbK7RQtaNGpuHdGzyXPjySYQ8j6oMzacnZiFb33xuZD3wRcxE",
  "key19": "2nVGSamj2CDdond3ZMPnGTf6xYDzpSGgHbDtMPf8iAMDrFyTtUGVThzFVgRgE4qc3LYuEpAuMZ3NEs6GYUCNcNvQ",
  "key20": "3KxEdKmsPaGuQjrFxinKBmw3CgtqP4K717V3D4QkpfrG99ssrBxzcN7RNiYF36oum9eM41pCXfvnzCkXnhSYFB8c",
  "key21": "tLiAeJeeJsS7UusBueD6zNapF3L31MEqysbzugySgYaox1AL3vCZbyMJK4HW5ZqwR7tjzRAcz2oFMwtUU8a1pYQ",
  "key22": "ZNaAd9z4eCocR2KyAVrtX5HCETtur8f8zVTQkgiWBcvsERWLd3DV18K8GunHBndAFdXc4nWXU5WhHWnSPnbNFnx",
  "key23": "2vQMv2ybWsZjLq3btWDvWUHxvYngJ8CvU2NgtXQ4K29dzLNKaoa1LgswiGMFGTJq4yDyaFVZVbCwGiNURZBVRMFo",
  "key24": "4dWgenC5HFVb1U913Ez4vjw8Zc1BikVFvRoKhbdyFDCdfEK8M6HbiUZGapbBLu9mUobHREBN97vkD5YDiyn9iQQJ",
  "key25": "3V7ahuLrzbiNxp9ipz8UT1gQmzhcFvcW51Z6uBjSKwYYjGEDhigoYrFL6GGC16ikwufrTBP7wVbJfXcwEc86tfuC",
  "key26": "5zMRfHBAdRHjqRg1sB4EMNG9mVM1moWY2ubFPmfmDdoYS3BgVMf18rgJBMBARBh771ekaw2tbgUWZbLxJbsrsk1e",
  "key27": "5tBMjNpaa3AmTgKckKp52FjGktr7zamWGKShKkZBZvS3RLh25wxtrLPhbAHg3oDx87uFsGnk8agYQBxJa1V4RGuv",
  "key28": "2dGuQojmTeKDxDALDbgwCXw21FXBvaEpBo6Y9jkr5RrJdkr2vp1vcYjAKkv6a26Fk7i8s2HnvP1ubc5uTaqG1a85",
  "key29": "54NJ1vU7h1Vy4SapofkWCTeXufcCec3vA8sHhH4BkunucGuWyNJabgAGQafAJU15GiRA5Wf7ktgd9oTPn4Zi6Rjz",
  "key30": "2nBK3H2zJmVBshHpBxCin83ggvVvEhGffJtQmFxLfKsvrhEEYxGEEs6L2qntJSKhsXkPAUWRZL89vQ8fsK63rRgH",
  "key31": "4Xzv2wYzwbdhTB34g6vLRjyspBZmMuz3bWnHMNk7NvsMrmaa9efDSbN92ceEmnNWvxknKxfAa9tFRtuAk3bXD2N9",
  "key32": "5c7UawMdrtWYEaqorXSC1uGUTcVE9twcXH22Q61UxZ2aNEzyZvtDHnVyL28sBVZWovByG8PhydYn1cwjtcA5Vb1e",
  "key33": "FUKZkffrtiEzZSLcRCp1nNzmHV62EyEB3Rdzog8ASX8mt9yfKqPveDzqLWoBnd9YKvqbsz83652qmPBmfdMLXUo",
  "key34": "xWJJfPMrLhkr6Zj42LgenfowZhJh242CwpJYUVVqBDPp67G3BfxoJbSFzACYVv523riSKNRoPuMQ3VGeCPjhCJG"
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
