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
    "2jJy9WX26PUifYbvcpFYmpZgjRL95ZTfzTfe3PLTdXmqgb3Q845AmGdzHhRbfyKAKf96LHCz649WaHcdifNtmdWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KukeYoU9Xrq6VNM1rkk2N7yW95DRfkQTt1CgRgWWjq6yiTKgxykXKsapATqFjvKdS7nMXkSZqGWXbczxSZYaRU5",
  "key1": "3R4T4TmyjyrRxUMinBwzMfW21BBu2FXfH4AmX9hfEfF4VY1KGMDAfa52t4BN1NFUJhRrWxYiDnFAzaXioS5AdtoG",
  "key2": "4CyFFn7Bz1RR2JKNFDGZr7XHG7ob7wqv6k8dE7YPaDhKNrmqsrRqoRvWp6pvcf2Ta317AJcsi5Tt5UPSyASuTAzr",
  "key3": "1CZvuEThiiCRDcSiaYvQ3tqfrMucKBc5MqxWEWFCcLLYHdeiwNeB2zZLctzdBUGkKpAp5o5Y2wC1dXQ7SoVd4gM",
  "key4": "4dzosVBFH6mgqWnrbMjeZgcCdSY6pRUbsHovaWvnKUUNxKFZ1t2gnDvoabq7oJUXPYuLRVL6iVKzyPZ2aBb6cPJR",
  "key5": "4gAXxCjggLreNazdJQTPUHb9yZvCd68Ym6uwDd42Ae6mQQgrU79STGzPui87T8A28RQygQsffNcnF2QBb8bzXzAC",
  "key6": "4Y1Wu2aFLfqFqE8GLh23pXHAQBhRR6Rw1j48ZWuzbgpWxEzMQHUSKog9E1XncX4azSa4dKS4i4CpNuUTH6dYt6r7",
  "key7": "8akBdmvK3a4aJotkcAMC1ybuKpUNH87WLWK8qJab4oJp7GsU3tQpKn5PcGkPCZDDpdEUbTwNinTkKgHK2DeoxM7",
  "key8": "5QMYehDqoxrymZQUTTTCJAhhDnUULGirdKCceBqsP3Gp62epvwxZ6s3da235HpcLDEHH5pcPMcVVM2TcVSeifELm",
  "key9": "3nA8AFefqx6UNDCrZakZ97FAUhrrZiTJEKwBRyBtJQqo7HvQbkSDGXbNttQUQbFRQQGFoiNA7C984oprL6RkwrX4",
  "key10": "LNHxmShVqTy4UofsiARbF2GuC6cRLwVCVX4DtyyyzgbvDq13WoXxTPBsoEdnv9fN37ZiVCUPYAdoByZ7U2jhqcc",
  "key11": "5q2W3VZ6g5m7k3c2hGpcxvKtGjVzqTE7MaPntgdSeRAXYgWNUjgcZudUdajA3bLFwGGs6sRNXCkPooLH5j3R7PB8",
  "key12": "3G6oDTQyYdrFMHwDVcXbYxVFQsXa2JZQCCU6iHzfHeiP2MWTR7WGi2YaKJ23JfcjUT7JyV9R73a9kjN9dgrB3aV6",
  "key13": "4At7dNpF9dM8Np6SyAWV72rh89ey93LFSsYjs77FWopYzjkif8bHxptgJTXTvC3eh5Y4wQ6usRN7uwmy3TnNVvcy",
  "key14": "G1JyvdjSWReXQq4GF1q67s7WPs3wu7b98wbbbnWYPVUBz5TtQdXAgTru6bngrqr12FWWZbte6iDQm9fhq4j4yyM",
  "key15": "3aekcB1pvjBMkbA8bXZKXz1spnFcxqEcwHAkyQHUiReRTu7to82WQZDrNa8jhqTjFHiFRD1yRcAHBujMjGRTv3VB",
  "key16": "PABzCQhLqCoBFajsu6GPCjNT5s8EM8M5PPMoTSmVNGwNG8rVbe2fwz2wcvCDD27rdaPbJ1uc8n9bR8n21BYNPdv",
  "key17": "4Bu9ZtdPUUWnVVZzArr1ALaQgAD7EhkVHqbUdJHtqF3VEkw6mVLieRuJCvVWZkS8rmMfa9tbkNMC3ap2FBTu15fu",
  "key18": "3iwKm48qVr5vDcpaNGPBSAHWb41fdQYhYtGbUWscWi96kgB7BB7ErpCDtfpLmG7UCg7aiuMnQfjGKZus7BSzDcPv",
  "key19": "2gcNuYHXWbPrd28mrq6ZD2H2Ff8Rue46RsWg7v8Nd9L1qF5UUZmEZv46sxPcZTPScoTBzFnFU8UPHae492dwTQDF",
  "key20": "6Yaixm9ASCxqp92fc4f3GmeEigzqupTfuWkTaGQoFFvDKJT9sDXU8wvwM5fmxNKspsxhJWFJgUqNMVHuQUyJWzp",
  "key21": "3EKMBfm6watbfFFJ2aT9G3QVsXUFTBH6a4ErLixirLJfk8x47Rd8KJ9ExoygV6ahNGvomVa5VACNYHmcomDZRq2d",
  "key22": "2qq38KLrVjzUqi2ieVir1bqL7AW73kUWFG1tGEKCHQU7BWnkKQVPShUJaPqXPzzgnEci3B9rB6KH5XK41gDJwzUb",
  "key23": "4YTrW46nUYhAuuhhjc4m87VgqnmcjaUUTMvRJruwpsV7642L5cVcKuRK77h2itvjsAYAMCaVHLPk8HD1LWWczp3U",
  "key24": "78VaPeiVKwUaHKD1XCt3nhzymhktuut7oFnukZ1pmdbh4TvcKryo5VpEe6TdykbC5oqUXEJCGRrKQjcXtAKWJ1L",
  "key25": "4FUNpanyVWcvSFv4X2NgiUUe4cYFWu3DWWbR8sPtsDq9Qt1T3946Q7vqUNMWYEPWZDYWH9vg2LPTb91KNvSrS1hH",
  "key26": "5yWzQbU3wVLLUAyPhwkadvBtQg3ybPEWcVrWyuyVFhpdsBVk52gkHzoF4r4HcqkC8EwNfohCZTZCXQcGRGwz3mu4",
  "key27": "2kaH2bQEufdbKw738AHmDz48WbJG34qhtSztmNt3X1zRj6wUuM1g8fKLS2JZ5UcbuuUDfeUTUSydPHt3EH7Ng56g",
  "key28": "neJs8x24ZKjG6VuvZw6zCForqMwmsyJWJjVSbZ6rv1K3NAbRBYDWjohYjorafuRVMT3ax4qiozssi5NeF2EkxoP",
  "key29": "27rUvRUHEH64wF2sts6g5aZufizFazsg78WEEGWAoyfiBcxgBM21ckXzc4ukgWHNLgp4DnrfvAkWBPoxhDuQUdLY",
  "key30": "EtFkv9FB184N1gsjSbkVDP6jRVJD34Yfcfs3VND28QKBzJZYi7icYausE9gWeV4FbWazLdSEFpkpFbJntJhgMTu",
  "key31": "5hZr5iKgP3WUn38JjfUbQxXYPiQGC5RUbvsx8HRQRm5zvjbZMJSzPkkWTQ9Gt1i32GPCtNh15knCxQ78tUCniuNs",
  "key32": "3J1Cce9GNTj2bK5aK7HrW4kPAPodqurhJcAPdy9hpLPTEbS4Fsm86zrDDUpmKA5yKyREoi56WMEEdBJM1GT6nzje",
  "key33": "4BXZA5DPNW81SmTctLQ9q8GxQVr49nt6v63QdaszHU3ikb4XwDawJFJko1c7XzWbr5ipVD1XJsidhaGVgw7VWrME",
  "key34": "3U9JYHeTodQzjvBd8kMYUt4BYzR4SgZE8Qq6k3Ux2Twvk93Hm4aecXiDEGEXUDkt3KvUFnmVvmq2VcLfwxNRke1f",
  "key35": "4Gw7e34jSoTgLH6sJNWpj5jZTh6nz1RNkxAZ5NUZHnxbhjWcV1iHcG8rHc9rFcwZS8iQKnF9f5QEKFBU3qcwVswh",
  "key36": "49YWaLQ7Cy7JeEWzse55VSS2MYxzyLiZ8asvKeNPkQUrZna1EFYsRuwPJ6dDZ1jDsNLueDRQLEcVB9BZAKdogYBc",
  "key37": "4csNpkgFydXm8WhWg1ucwGQYDn465sccfeyaJDyRGCMEBWb3emutKaKsMK2t12eNmLuixc1C5TaDQyHHAvrcaZLC",
  "key38": "3fx3oTWvnEXDoxPFuXjUtKsztt36bNYR6k7vNNHwo6JuQXTq38cVi459r9W33SqC8Ddh4Ec1vgXJ6hkWgvbtJtnc",
  "key39": "5ZZP19rKnB5bhcYrLLsjvuLXkUmTZKDJXL3Nw4j1Y8YcvSMDJS4xmCjgJo3PXExjB1p66bHGu4kN8x1NqdkYBeW8",
  "key40": "3H2kbS4zsjXWHZAKaNf9MgwnE9FZPDRtQu4qytVdW1FYnjTFsYYYJuZrMWHLmsubwXBpLZfWdnj5pXrwhXCK7Ash",
  "key41": "FsdhzdiGeKjRmr4wn7MBTryUxmsJHziakM5QfFELZq94UhYingusvhHe2NjT7TtXXasxhCnZzffT13v9kNMtDtH",
  "key42": "jqQWYPzkRN4sRFKjvQN64fPZV1Je3Vvnt2B2s4KHMseFDYrFnghzpQr2EfRYk4U8RRP3xEGZHumWLU2NqfBGG1U",
  "key43": "2TXQywmox1SUaTpjtTEujN9CeQqfvNZQQXM9jVFeHRW1KtmakZMLXcYDBBpDZBd2qbjpfQGhmEEAWq42FZABQNkw",
  "key44": "2CpdNH2Ku6jFYW8YEyT6HBfoHSDQv6aThZxVnfTYkuuNrc8JFc8VE2ZxVtVNCwmc8aZWH7coFRikvaL2RgdDWYJk",
  "key45": "74GY6DVoDbuytVNPvUcwhHiWDnLnbDSvU7Y9HLdXwicKwuLfxSyybSXSf4X6HcEt4Fuenannu4NMVpHzDebdY44",
  "key46": "36DVbnWErMDhvA1sYS3RuxEmxe4fvWBFYWETb83ARQ4HoiQmhE9YftWf8QfTECfCnxuRVQ85zKpsWCqo35wGUBao"
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
