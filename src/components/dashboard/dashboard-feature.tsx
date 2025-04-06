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
    "2xtHb6RTJmESpupaY8gCRXVDrxx9acgX6VzP7TPeLx2puYP2CL5qZf5VV8n2mmxEecDjGCTBHixSn7EWCzAmtY2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6ANJkCivTfChLdTPRaV9k51s7eyastMRFeHPm5iQWvtmvjNMk5jBqkSbnVkvpZq6oURHX2FhZYLyV6XzZDXB1c",
  "key1": "5ZmokH1QYiNhSf5kXdJvxf2ACAHsq64eyjjNsJsBpvK9XR3vqQQQ5nWiao64EfXtcD5svbTE8qAMW3dnz7HfwGU4",
  "key2": "3Pi4vgva1gX3YoxEF6f3xYvWpx2TwYsWfU61giFt8qNtZghk4QsLC9EssWuJh7bKR1WkGKbGT65aBBhFE9xX1Xux",
  "key3": "5QWE9hPpiHVhKe7QRgGTAEPGwcMmJG6znG5ArkyLZdDq1r34KBzi9aKRQ6whLKwMyqGJQgvujqcGat1mcddqMaSK",
  "key4": "5JXb3Zjx7gPyxXDKEBVjZLWBYmKYLJL5wvFwLgVHrcMeV9sCgasgRhgHp8o8YBymTz7qQ1QABmGGUhDEBBVoY1zV",
  "key5": "3w3co7sKRDbuqM9D4bLuTEryCpeykP8Z3WaAqvHJhtW6NmjYtB2L3BtJEDJonc3frUFbqocPStDAzdNSGshFLFiU",
  "key6": "2xJgf31UEqZ9EzDBprSn1mDRt9xpLmoH1iVDRnAm5Vbou28JUCxpacq4GMLJcUV1Ar3YpZtQPV8E9KZ3kDdKJuu2",
  "key7": "5CAnew4Ew1Vx3JXvnbWpUDhygCeDfvomM4yu4jAyQ1n1oBg1ZDgAenW4FGFjcB8S8yjrXYgasyCG4Nwe4aoyxw5K",
  "key8": "34W7VwEzHSEakRP4WeoytP7JBKaGJU6F1NBXMsm7sGM1HRzt8xbxePPshXNeU9JAVtKMWXxJ8kAMoiRVgCmj6THY",
  "key9": "2fWYc4H8bN7NitWjbfN8FfRAewfFzwXXu766xaJ7WU7CqHR7y6JEQG7Lg8W9Rmi1CwMb2AQnyegVMZmYcdyrZrr9",
  "key10": "vTnDAfEYu1zYEWNRwQ6E2BcuXA8pSo5KK6SMzq2KopyUY8BERVpSqJE7U7hbZtzQV3ebofycPwDzDd8aZzYaTv3",
  "key11": "2qHMn85ZZDeSigaBjVM61u2qDJHVHa2ghTadJWv3JfYhwoa8Z6KZNnLPuvUkaKRcn2XvcTp9ruLaUWt8T2RdrmaC",
  "key12": "2ebQxggFconMuATAuBaDhBqRcXbncy6PuHTrf2CSdhijDoLhaqnSkzbiLeMgDyCUWGJCmxQNMdvSJpgCatcAWKv",
  "key13": "5auSYpLhjKtX5wTxoyRxavUTXTD7QaeYCbUUKTYGnwe4juk8hNH3shkwQVJDYGQC5T2MdFMxqmLEuen8RYVpLo9M",
  "key14": "3yLsqVpmaRsEEJxuiDBGn74vTLtLAnu9ueHCra9E7Lwai2MrkmcXGrkcayR1UpZDUrDTYg6Tk2WXMrmsU2SCWsdF",
  "key15": "RYrFVPXyoBGxs5NHVLUimocNkBv8az39nBoAXc9759rb82wrVHfTw1B4zCfkmvr3th2wiVeHULBMwu186iShWCx",
  "key16": "4uqfcv81e52N8CijRBNBT4y8oKK1X5B4aQRLeMYBcyMQMMwnxWhXKZ6fMSg1Nab5t3wAV1o3THrjSJHocWZbqieW",
  "key17": "5sbUYMxM3cnC4YXcMqwqc9kG6pYWYi3spE12RDFJ1JZ4oNUM6GPJ9RbUyDdvGgZDB3mEeR48VFKDyKvWBP1dE11V",
  "key18": "7QVCCCXnpHph74NVZEaMTEMWkZQwXaKyE7G14LbWNYVTjKWJmDXsRhewvXY8JR2k8ejHFiRuE9mpHLkeSPTBkmC",
  "key19": "261Kbv6UZTmBCJv8na2N6GFnJ85sdKRxJpZdtcu4Syo25YpTpGfa4rQRME9gLJmQLg4tp3siEtdvZwXeGmVBpeCR",
  "key20": "6zBPk9bMpmpv5Y1XJmSBrZ6j8X5EzvsBzgQv2RdpDeoX1ao4abpgXNxFQi4N3iR6E1giRdhw4Mrc92iNUG8KTKP",
  "key21": "UEaMdez6x9RGFf8zERWwNhhovQmVEEb7Pa2uJbH7kciFLTbQsWKLW5ULAxNDnP4gjbUJFU2VcGpDvTkmnRCJC1W",
  "key22": "3NP9iCLUwVU1oGeFWEjmfkWV3vsndCpyfs6KNMKHUEJ7dPjNk4MCSA4ubHpev9YCtE9HasMPkiddaLxzLxsYNKzp",
  "key23": "2xknS7BcEV6nETF5zSGC8wKjCLtpfFhFxgpSZ7cafKDVWFH8iRPKnoeGpKe1u4h56ygo8bdHpPeTteED3oVNjNPk",
  "key24": "4nAfzRWxhT2Kmhmc19G1wi9FmmVFFsJWnQSY3LQrmoLDwSJtRvgADV7N245bjJMdvj8pZkhVu44yaPXe8F9SSNm5",
  "key25": "2mDDCzSbLrAJUJn91Am64qEAM4uvUDYmED4mVERo2DZ8Y1DovcXvJSAHEsL3j9uZZvoRQXX3RgY2rDunqdMbKjdE",
  "key26": "JD9zYLgsgAViw7AE436TSSyfeUVwnWcgewaznsMQEkuZxFLoZmtggUYEFWQYqPxKBAqzkav2hKeUZzasjbMC9M3",
  "key27": "5zGd4xXjC1AiRFiRHxbqWBrzmgMN1ksHwYjSc3C1doTh7pA8C2uUJwkh3nmgsAgKPsAJr7FpYbUUiDLFjmE96Uib",
  "key28": "34NsZJUVK9UctXqjcjrXQUFGwk9nxHVTJWf64cT3uBrsP2ud1epnKEPrKGbqgYmBopxU6iqNyZVGCNEgtQwJPk9y",
  "key29": "4rRtus3aVoZw8K9upigdmZQzPW3Wc2WsEciGXdf1bNKEALcebsGnGQRNN3Ws7G7hYDR1k8jKhqtryovR1TbFGjQn",
  "key30": "4bhEGVF7KeBxadPcKPEdzjQP77YhYekcTytMz2VWAz2bVTcqhkEwS5QH4ZAnfJPNwkC4k7igan9gLXenZpydaigz",
  "key31": "14aKL62dbqJaVjU9FoSXFx6BvzmiFg9hGS9qcKU6r31oRX3mDFSb8ec2otD3NFD8dZ4oSdqLb1zK63NDnAYcP9V",
  "key32": "nnGrzc2Bx166QdKfvqy2LiLjoyyWaLgX7TGK4SWt3Ng2RbhX3CU5WCzvGqbF42NFZAxLn4X56F49WkgAazJiWs9",
  "key33": "4G7Boy6SXhSVk7CjxcEc4GBX6aeeNwZyMqPgjuQzDrsoX4uZzLLzwhNGnPnVhH5fwqLGXupfsKE2uTVkV8n8FqVY",
  "key34": "34a1YAQ3HUXJQ6JUjGcQnj9CWhW3YYi97aVjjcTyF7Smmevhw7twoEUdVfjgrQoGveaT3u9NML6X7sbo55NL1pBY"
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
