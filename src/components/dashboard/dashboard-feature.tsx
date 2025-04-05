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
    "5wgjjvp5F9HNQEzeuekW7LKjhd1LnUyEFGZhJadnufeQM6oiME98koiCVU1ex2HxSMRsCaCmPR1z5UaH4jep8jMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CgT5UC5FnpkyRGpfM9zhmvqPuawZGYBc6VmtGrVFFKweHuzATzuWvNsLpkE9f8yfCDKZPAkoBEVtZXWz7Nf3J96",
  "key1": "67qFnZU7jGkJP3Mr1YSHAyHru6Qscw3Ush1LLvDA8hjsHnkPSYLVT2LQTMPzkvhuKaFeVEBwu9oCj9enU4YZGmYF",
  "key2": "dZjrCsRAwxu6bSYdwoCxnPSuGE993NeJiZkAfu2XxbZwAc17kYJ1mRtENrELR5vChdtt1kbP2ZJHpnNCmnEYhDt",
  "key3": "2NeZc5WzaJFxM9d7Lqi2B4iUy3R8JXt8LT8GvYnnyQkVyUfCB9DYdCUuuHcV8yEAcDC7kWJTzYDLVCEcPoHbprw2",
  "key4": "2FFTP2KjjgwsqNXN5ghuo1rdMbANhhJDy3XvM44PWNWxo2QSqLMVCCQTbP1pzmHV9RLqV1LKxAd28qSPY5SWma3",
  "key5": "3AcvDffaAhRyJUgD4QrmzJgGDkLnr2b8DjWFLxfxd1jxEX6ei5jKZpqtgktPPSkZ1CaLxegtL4EXfNFQrtKa3PVG",
  "key6": "2qobaFapNCfC1fLK3tmnNw9caPwVqGRJDAgRceUYVTJinYoyeK43Yw8SMjY81AQCGozX52mCoDN1s9dTep6Bf2TL",
  "key7": "4nwx2FnfBqXs7YdNg7RD9TDQqkMJQbxNiBC99hxzzJiuVwK4RZ7rkXSbGjwfDV16Nsw5gMESvMSnrr5VHo4vtG7Y",
  "key8": "4vvUGYjA7EK1BcuBrqSf1Cs9gqduFbS8roBs653aQXDB7uHmadP19MXFGfGUqi5PDDBDSYBLwpEMqJyMV5iCdAc",
  "key9": "2C7xhgwinPFsN24othHySzELZD6Zr4uQef4wrvXXq9rm4hY4gcjSE3Uq1EjBG7XRA1iUz1jMDoNcLw3A4yyvUKCC",
  "key10": "QWRu5y81QBGTHksXqPMoZSHzUoec3JjxfSdtq5AYCCrtSDCbSJjot2K2VYLY8JRDTgsVbwvKqoXJuq5eMAbKgjR",
  "key11": "3JtcwP1W9z7yawXU77w8wUcHsE8LDVq5yF6VMQEcFwEYNjVuBrm8Bjhqc2PLp5zCkdBTQCRn3vtggFrnsXN5bMUB",
  "key12": "4bP14SvgW6dQcKKMXk7cEQHMSyMNkB8iet4qeQXtFKMEGGMpyND9gFw6hWnr7Qw8HeEQSZ67mPYKGqAwsg25ZBDN",
  "key13": "5ayC1mCractxFKUERJupQsQd9sV2NRiFMaXPZGmZAftAq6SWLnWzNFMvMwkL7GnntwtDgiD2CZqsADuc5Qvo4iKK",
  "key14": "4Y4hcSmXyNYFTAhHdkS9Na6kwdiftedF6WKByycnHrFEsNvtjhA2dYLHd8GR7FhruCrvXgbgBu3qQetmwU7pdeAn",
  "key15": "4ygbUgRrJebqEDim4NZVCfwEWhZKY942Whso7TrUxvb7T1c9iDm9jF9gqmKXkszu7WxUUBKtDaMK8J4GvVCGc9wK",
  "key16": "3ghrYp35csMzJKSp1AQ14mfNETHs1sR3fo7Yr12PvnMKAjBjKgTKwQruLHm4CADdVK3tkqYG38YYVUzny5Avf6Vc",
  "key17": "3aVVKuxhGHQq6cxCkpcMtZyCcGzmDDFrfP4eiJGE7xRwak6ECByvzw79m3SQxdMYthX8YVCPTgqeX4UHG5RX63LR",
  "key18": "3sEy4aSUBxvcCJp56WwPHVU9v3T2hci9koz8WofraBFh3ve6U5jGzhjR5FsTVTnsu3iXCaMiQCL4zcbtFzYvkzy8",
  "key19": "57kNt7aoSALhi8UcKVHxgGmZprXCUDsSSVMCMYnPAMCj9cKh49gCkD1g8xA7bVo68i41MGRP4ypkHczrETAsx77k",
  "key20": "T6ez7js9FXcd7xEF5TXbCAF53EMBCJDyiiv4SqgNoyqZuyJnntULSkw1NyNGWCemT2EbhdKkJA7JsGEHLaf8gFw",
  "key21": "36GXRJRjXQQaoprLTj85QwnYDQLzt6op2CR3UtVRSwC6TxSCLY15X6iNXMDf9koecxG3j5KcpC1ZpB3RwvPgsTrn",
  "key22": "5qn9zQhqBLuJwFkSvYtG3dQ487obA4LkHnbLvUvkgSFpZSf5ojBMTiz5WzzspHe4snjx7gVAWByEdHp7r6f3dWeF",
  "key23": "5fjc6e9eeASG8RD9oMzhdhyUUD68gmjsKDk6M3DQF3zFHms2y95dqQkqgHAMePszDp1spQX4dsKawR5irNCo7J9",
  "key24": "5W915qEeCyTEPiUse3K58SaZL2GtBJZwQhqigXDrQiBUMVnPDNp1KLZxpa9LTy1Fsa9SH5kSx286XgmX3QgfrgXx",
  "key25": "2tpwKfytkAeWj1trnktXY9XgGqXdhdUWTMoBdyvTyF61ig32uwmjEbnjYPksU5FpCd3wSUkHv5D1HXhwEiUuJveU",
  "key26": "2ZWJtT17gNa4kct1MEybpzfruSDk6RpChWxeZCJ96B6RfEenaU4fGmd7chGm8Bxa3Nd82PNqKYhGed6dcXijotD4",
  "key27": "5RQgwKhHd8VJJZcTMyLBNtRDnFXTRWw8Q57DrDe8mjcv8GvXMAWb48niWMfBqnX3RE2dBNG4MNPD3FkHdiRmAa1f",
  "key28": "3tADFmNrp2GGKQfgBckoviuaAyH778Md4jNtxghRdJYzDxUZmDvS82ZEaTP9MyyBZkJ4diojwAgRdueXhCWbRgGn",
  "key29": "4q5RiHP8c9qh3JMiFyVoNgMwqQRnjpZBmNmWg9mpkEMS2Ro8ubtCnEVV1skHfgnDq5fcTsipqr69dr8NoDfkSrS1",
  "key30": "2bKAVCGcrD5YssBMWhvhjrKAX1NGQrzM9XQwRVbCxqHaGBxgsqHWtuPCx5nT8WGRuajk7TNUPM89gVnwsaYe1phL"
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
