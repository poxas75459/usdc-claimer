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
    "2nXcSJ7DLJABgm6yRh7bKzb1JbJatkeJCut115kt5NsJAgX4JXhNCzWdDKi2BDHJqaNKS7yU5PfGA1xBr18Fp1UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3owCkPCTCgwVx1s8Ycvo6ZYxbjqGVbpPKd7c9UUVT4i9GrvTe9V6QE8SmAUkZgwnghU6jCDS8ntwRiBafZZytWKG",
  "key1": "3k51nTcfv81BA3CFhPnKkw3ZEVvfVzoU2wMwqJfXxHQD6zroE3LGStw33JUB8rsuA9PcoazMoShQ8ys7dsbtQFox",
  "key2": "4fcVePLfAR9HxYbpa8xDECbPTu7spjD8wFrh1evN3pwRg7yEKqX61FqCgG981gi96YVC6gxf1oR5F1n6jZ8GXhm6",
  "key3": "4Ho6T7EJZGXfw2zgMcSCexTrKK4BFzHPhr8kd4K3zqy9LYFdrwrVjzQ2MKG9pkE6n6pJjnkZCeuwE11Kfm2ooA5T",
  "key4": "29bmysLjKCAhm8YotRT1RZk5Kq37q4W6WYYdWTeVMTx5ZiAYHumuXtJGNAZPf99uv2xoet82rLqeTeZPc3ap8PkF",
  "key5": "4ZaDFTSJHoeAzbiWDyMEWJ3ohGEmnrYwLfGBNRBTQd47yy5Dizwe4ybAniPRF8bcS4peyUBEwokYiXq671zRY3xh",
  "key6": "4hkNAVTcDFEZpKe3hRNkXoNbifmQqXxWmCoFyMHd23zN2gq87R5TG4fW5rxKexCEBPKS2XKkPajnKHZ33qSTTrgF",
  "key7": "WtR9Y5NPYjuJYYqGrTwf6zQddxqFPX3DEt48sxCXnRzCsURuPYSbKhengzjdRECDJDHzJZiGD6uZX3X3TTmUNxw",
  "key8": "26aTyTWsBVaNLByd1SKovQt1g3dbooqi95dtT6Ru4Pe88D1UsMcdQcXy5SFnZh1XePbJgaHUcbkpD59NztNoJqkJ",
  "key9": "5iQ2gStae9SL9u6xMoRb9Ltss73Qf2znmyvbD5hYcLYaKfWQ3xN3wpH3TA1wGHCbGnwQR8MJfxyh6oC9cr9FBTWJ",
  "key10": "nvCJ4qfedapTiLLWecQP9dUR75CNZ22XAxfUBJ1imVWjpTeueRrojGxLkufEChNu1R3uHB4fhoH7hsxbbY841Z3",
  "key11": "616JgPMB76GbmGVhwYesKr5mhzJz7DfVFALRTahEuPfnJ7sYaUWn7tUMXhhsMYn3w4zXKgVYjSYiXK5g7Wgj8TFB",
  "key12": "4qF556bEwFVGZjm37iEx3j5rsH5tzHw82Dewmo2tBTiRbUqUWGvaZcn4dnYKD9qoUudgpEXBRZKttvgzw3jJKrPM",
  "key13": "2eaUvpTL18WahoByEizgdWEC19jgWhszdQgK6qXPxr4NKVezRkJSt4L2w3rc9ybZnWbYrA8He4PNMKcjtjZNX9K6",
  "key14": "3ymmXJNufBqfho8AkMeu4kaeGbnKbh85UxS319d2Zz9Js9tqA6DJs3ec7cfKB6AeedHMYAMYsT4XhuVRacetYowA",
  "key15": "2tvMNExjB8cqjmZyWmhcNaYHHfQjLkK3SEq16ePtCncQccPvHmgEQWMxgcEnt1AXLZVnNJPssCBgmQSCMCmVdPYz",
  "key16": "4nf2vAYsyTwUm9FSTpH96MGw4TzrKbZte4HrvSkLQoJHWHU3kVrwQxX5YibddxnoH96t41NZeszdhVjf8J4j2xT8",
  "key17": "336LDXy8VQRCQ8sb3783crGgTpLtzz2vhxosQtYMNz543pzrWJ8y3uuvC7ZLp7kFkDCCzm2TH34bFkeCgDANWMQH",
  "key18": "4qkmrTB89vG3tQfnJ3NavaHQ24CC3cWduLjga5nn9TLwiNu4zDPTKbgyjLMMP6v97VEUC6cFZLLfWcUBeZ6PbHYS",
  "key19": "59ticc2Fnrn3Bv4i5vrGBxACJUP4S1A7GJa8DBXpD1VL7ySGKqK2h3awsGEdAPrBsmq4wmvALUgB9iJmjBVbCcxg",
  "key20": "2BnNfnFgbLAoqbKSDqM2PLVCvKf8jnv1zCk8ZNo128qxLGrKR3fqa1rLV7xnii7ni4rSRy7utQsg9NsC5u7f9sxG",
  "key21": "2bxMhserhcDe9g3KLLAZksfPr3JYzYkK8K1U3a61sTLDKEAjUqBXxP1Yt5H6De8uquxCuUVwX6FRFHcdQpThkgSp",
  "key22": "4P7cxYBw527sJDjixvpUiUcQCdwvsrTZQx3ieiwz67fqMViV5FLkkBw48e4SS6pcBiM6wxdgJst7fAUxCqYp3QuF",
  "key23": "2o8QHom9nXBVRHXS7dvRLuU3EJg4aioYHacKKRGaNzDNWcJfCXGRFDRzXUKDUypK54rF8yLTAWLBJTGAtaURCa2",
  "key24": "pHPN2EwS7YjE3vYuRZRBU1FCCphyChEMXD2Lrp8mEmZPSxDFiRVAenamTuqfPWgtBYERAGToV5Pm6Snw1z8Zprw",
  "key25": "5Tc8QgF71NCXxEUmD3bwm73vWVRZUkjxbtbGwV9mUbeWWrfdrHBaQGnPtxDGoXNnHRbNVYybv939xfcA92JfcLLZ",
  "key26": "2c34JhUF2eQ49LzGYycpytxVRuCme1p73bHEfUUi777igxVEZqzQUt4Hmv1xPWoQfjR2fmXnWkkzQW3CZevDJ8sD",
  "key27": "5KW6eXfJTK25N9dzWG5ZwRdwzE7ZT2o6Pcy7iapd3CmbfJzrA7DRMeS638TkRYHpbCbcZxvCo1qHpxaH9hY7USKo",
  "key28": "4imx6yMMLy5sFJ4cV4QEWm1kpA2kumNfrao3dTmTiWMN7EXtjSf6ZNozmZTxvS11Z2o1cr38yDZ4twVxw4RtTuiK",
  "key29": "2jsUd63QKiodRXJY7Dv8X29zt7MC88yofcarWmh5kaYuzN2LSuwrqTQg2EPZsP5mjxRECL7D5C5e99FN2h6k4g7r",
  "key30": "56c4H7rkAuqjiocVLK4rfGLJ1qTFWMjKtY9eEn9ZhtYNhRSHQSTnn2bC2bd4rtr8JJoEcgeDcJtpuykjZuFwR6C2",
  "key31": "22nmRfdMQ3Gcsam8nGYzYxFL7K63N8zVVyvbG3gwo3BS9HrdRPFQbVgDRHqJEchUAe5CHommZneV8rL8XhqHzj7b",
  "key32": "2JQkWPLoSY8B4VWi1Lnjr19Qszp13v4UxH2PznPUJk1SNNMzNtm44XXJHBPvgGK1ZGVg8KZfaNzkrMebRja144ZM",
  "key33": "23Ntg5Tvgpm5Hii22Xyff3iD8vkrMyr9wdDoLZSD4UF3AR6gfq9C7LKiTB11n9ReBULW1PL3KpBMcMGLJeLFvo5r",
  "key34": "4f3fKoud22kNrgHTSkkKwyi8UMzec8d2bVmNGJ6d6JofgsKmiKsjGViMeDXA9MNzpzrh3AYvkndBxcfNTSFgiaFw",
  "key35": "3izMkcZhU2cNWtg1JmQaM28xQpGoY8zgFK5P2i9tCucdcdPEwDcmW4fVLxyzNWs9GFcwugoin3zXqqYexXVPS1Ez",
  "key36": "2HNaHNJA7KGysyM1zRteiMvi7ypQftFdQ3y1girwKtGviLHJ1CrGSMAktqhuXTZD1kiaGjLhbc9pwKtaEETL4hgz",
  "key37": "4QXSBp6EczENPgiJMirRJ7cQSWF79BUrHDiKcW6nHp83PsgME1m6b7RUEL1JThgBC3trvxTc5irQcDfv92SZgn96"
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
