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
    "jqGKZDuwCY2JiRWmgYiT7EFguXKmEYcHW3UEtxce6fVi533WJoKrHtpRw9scvRNAq1HJrGviLBRdZzhS4Marsp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DpDZMGjpXHhPTosWrUoDeWj8f8hzdSjnjQVsNAbf8KbgvZX5diTda1aVmZgfzcvb3hvnH9Sr15svFtaY7gpNBz",
  "key1": "22qVmiDBQdjpFWpdVjkESrLpfRbkhdZZvtncpjSaC3WdmZdxxFDcu2oVb4sG1odHVpyzvdFawKcrtxEy3NxMuxbW",
  "key2": "12umtaKZRKQmb3ewTVnN2mkKeCtnsV5FYjhoW7w7wGWdiQaWVgFAW2NgamuLopSxwbhgEWmksMf8EibSxzxVAYv",
  "key3": "5K6RtxMPTvhKrB5joky3wfrmPDVyFFawXHm1MchTiHbid3Nh7xwGfnhe32wuBWNvpN6qjmTZezN5XgDpLtSUzFRn",
  "key4": "53Hdu8PsGLU73aQKx6VSRxmqiGbvcexQd26nFfXNfcCKrjbwRPVapqavSrkQXkJpMyTqv5tpBc6mVfAFMME7P7tf",
  "key5": "2ZNSMR869TwSHmRjDkeDJi7wNE9Kgd58PpCA9BgxxsaVRgmFiqYrVdrdYESg4pyZZAeVwmXqUbj6ae7gjJFda8bz",
  "key6": "39VLkfur5j57XBUavzjPyCjmPt3Z1aqNkasq8chDHa9PprYucnkUqvUTG8SRg5wddSx1P43VQSw5Zx3zScrickB7",
  "key7": "2u7dKDWHLaL7MpmHaPMTjHMSjS9WT3C7R9USR4kvYWNsxSykt4pk8BcZaTajYCZuUetUgPosztYfBJzmqEQktwna",
  "key8": "548bVQz1Zjc1kAxbJBjVn2eqq9rVmXav7fSTe6LH1zqG7NoriKWDqbZPRN2M6Sv5qnUe6CMeiEY2MoxajosvZzYQ",
  "key9": "zBEf4xushPVEy7V4BgwMsAJJ64DEmBqW93y6MFbr8S4JjrmmyS37kXzELxntSJgk62ThWS4VRXjxNbw88Bmidt8",
  "key10": "3YSRznZXAL57yyrfiMFg2RyFuQEcfHP2GRzB7J7eHVSJAbJDL2hyRaVNEXsSLx4KvLdLxnJx7ADgqRMKCEB4Ew4A",
  "key11": "v8WMw8FcP9Zn6viTbLhQrYBAX7jdBX7XFL6p1igkmKkzVnbhUen8T4S66gKQUgbYWzQVQ6Q1m6Uht6Be1dmgZSd",
  "key12": "2y7yDUwSgScTBjgutUKNc8UhPCeCm2eB7bvwmz8Nn2Zk9aWpnTqhLyMdgPWFV6FChL4FcUWWmc2CFDPBEpSCStEN",
  "key13": "4Nvu9YMyU89Bs6fpCMF4Kj81dHMGNfjwYZL86wA7UTHzrMpcmshwdjc3254dwLNAgsu8v5KcVAwyyyS2LXCzqE9x",
  "key14": "53HVnQB2nReXk9v91xw3MNmPJ6SH6N33UZ4BUgSZ91AJQyJX5oAZzdUrqneccgQoJexy36uDzVxRqBYcBxwM4DSp",
  "key15": "5xNWaxgzuL3SxFrBC5kzSNq6gUbzjh2rrHLXt7FkGAyVkR7EDD97t7BtvNfRfqAY518c4uBjD3KKCajrwPcVzg9A",
  "key16": "5qU7rv6iebTZHAr6djaaDsGH99vUS3JaHJzUEtSJnGqbdC2sFvJLDBKEB2n6n4KsdFo3WFhLERP2bXomfDoMYPAk",
  "key17": "51CDVhr2cKGznWxs9DYGxRW7mj3vVoiiG6z8teRpaCYGadbFSqGCSBdmp8QkYr9QGCqRkx1VE41J1bo6Mw1L9TXL",
  "key18": "TcSopwUMYdrwAkehpaksWZK6ZNkCdvFHrwKsU3Z4AE5TTu5HVgVe8qoBz8zFTRAYRhbNz8ra1kUV2151EmoEKbo",
  "key19": "PpTRUFJWGpkyBfx5VfaqFCmQyRwrzf8NcAr2Put9Rpktx8hg1Ye6w1Bd7zVPYBsQPfcUJbdSHUz9gry35Gw3wZT",
  "key20": "uo7BJGJbuH6WXCmtunVfYrWBxQtSsyCWrxEdmukvT4JtXgFnGnhYwKFF9TP5ajFBaZTquML5f9SSzVd56XhNFXy",
  "key21": "Mtr8niEHut4PPMdorPSL2C6oUWnuVKwgzkwpXoXjVksvDSNbsSDK47Roc22dnsMXCZ2DoK1DjPx98F3GkWpay8m",
  "key22": "27ZREuo7LSpPK1F5zxcn81pHYc6eXUgENLhX8tMZE9mfAuPYFs5Kdi9TnMgCLQXJmNu2Ndsyfy6k2RZHV6uWS4PQ",
  "key23": "39BrN3HSYdTzbQZi57pbrTFRCXbK6EfmeDDuaqCxCwYJ3eNsPpRdfDPxQpeLzSVh1oiNWpH1XEJ1MSuBodMnyeC2",
  "key24": "5aLUT9yoe7KFgFP8Af7sHvVpjqaNz4vnqtyC87aE8WfTDtMB8eDHkygHrhb8BkjpipS7TD8bkhm8Ge9hgFByhsz2",
  "key25": "2uPuXqNWkASQuMo3caspFnBtrbT8xvthQqvsvv3wrhnzmMg3jj7WFzAUsWACLn96vur1ApbiAPEmo8VFV3wKyDuY",
  "key26": "1KfMTa6ca6v7euJd1AVUZoTYgCgYPUryaVJt5jRqr1UBzhJBZmqMM4X8aa9xAHuWemYoHydVtvE1KbgZWW83qzS",
  "key27": "4omRhnygwRyq4KAuk8prn2UjFLrX3p9dRTg3b8xrD9fC5AjwbkXetvtuqu9zTYYXUgb5ehRwFP9rmUWvtPSmPJqD",
  "key28": "5zqcG7vUJ7prXArFw8rLi6hDE4cptDGx9Kin5yjqceWRHsbrMRrnfTLtbHT2b2EdBHDYCuatrf51d8DPguAHomEN",
  "key29": "23Xafo4rg2LiyCWXrpUzZPpocmUXApdU4K3ZNus62XqvKTsJ53RtRAhUVPhhiWSiEJ2nSMiWZSajPR3CVwtJRZ6q",
  "key30": "31c3rJpYA97i41umADXFe6R5di249Mz1jHnXJSyUDmUnwZf2yDWENvJQDbKAwvnc1Q7y9UQYBP7FWnYGEaHwV9QG",
  "key31": "2bHS3W4W4TpJDsDBJUcFixVwmdAy5MYjRCCgSgWvGb4DzNVtWwvircpAcpwUQ2eyKCpU4HQH9Mg4N3xvqZ2UXEeu",
  "key32": "4B1XLKDEj5bZhjLxy5nABMb7ARMsLJ2YSWeGExDN2iDtv4Q6YF8xJhTcibLajfNqSHqgFVCkRrtYop6rYp4E4enc",
  "key33": "4tR6Hmtxi7AeVnYDbrxbvSF2jaR81ehou6AbSPBFkaVWi9ohS1M56ys634MVwsdhRY2D9twjkwxJ7Tx5qHvRTsHM",
  "key34": "4kPQVywfgk2URSsnTt4M6aqhVN8duxZ44AjzMZPtEvNgm3upcT9ZoW132RToramF2FbuQ3LrRcaoZREsuxopQZJw",
  "key35": "3y1QJaWZTWrAoyNrSYPYkkzwjRxuduPqKcCJuBNDRukoSFZRTSxQKS5Uw4dDPs3WjAcr13THWEpRoNgWh97CcuYj",
  "key36": "5Tp44PmRFnfSQTc8hPjyGHxVQjhUV5WSehC72UjDA2MoPGhiYe8kgPMbWwBqFo2rz28APDWMdFX9MW5MTz5pBCap"
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
