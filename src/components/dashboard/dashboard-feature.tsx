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
    "GMfDyQAThmjW2bmmXCaWX5nnE676GU3yvHjYoqz31feFcabFDUGwJCweY7JUzWsr1RtkuBW5MWnK981oJFUh9qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPSxXyyKtbpuqp1f3HiKZLZ3dJQ8QeTicDqo8vyUTD6vXeso7HVa7fhVEVv7hDHm8U9TkRQVd9DKCbEP5xdZzi",
  "key1": "56ZmYvgybDbwQgz8dApwWDUxq8obmy1SxeeMhPDDFvTUwrxsejTwiST1te3juXNh35vajjDbQPmLEcxQtJ8NSdnL",
  "key2": "2waPaVTBRUxN2rmS5W9e8dLVooMSy4YZiuajxMgFmkMgDmrwnmfX3QJe1ZG8EMYzxydEVumJfj82zaWmkxDaDsif",
  "key3": "4mNYay7Kwg4cha5LLXJF7mWu7yMNJv2Dny5oCBGyiPr6a8VBH8P8mogEKycxsGK19mmXP5iprcy2Hyug9B51cLej",
  "key4": "7c5LHAXoNrdM1oH7AN4p7risfk4ThNPkd4dLL84ftVHa3vBvQPRw25qHnoRb8w8b5otN5H5gY37uwyVwBtGV4My",
  "key5": "FLV4np59d5xKjhK7VvKK49egTmn3cTyN2MLaQ5oQUyD5dvjSDRyKi175LM6BvLLMkXdzSBYJ3Q2zSDHYnkhRW5n",
  "key6": "4PoAKoXnYyAKC8WY58BDyomWUZdrxsTqu6XH5nS47GHvXgZtmAjseMEgmEAUNyjHwj7wU2kzeoy6QxwrJamATV3E",
  "key7": "285FVuFhKw77NbNgCktiGZttUkasSXVTkxavLUQeLvLwQFFTfASDas3xynXF3zk2U8x3JkUYEVSFcB9sbLmp7VF1",
  "key8": "43okAKV4V5LsGB5wQhds35hDMimQpj5Rgw8TJzTp8thbzZ51vWnjEL7w1JA4F2aebXymdPVwubrR3Ny7dWPMzjyz",
  "key9": "4i1wyCfqzBanuAtfygUasncWzoFNE2sfhr8p9XuPQP5oNqeW6DgzdLye1SpaBQqvGBWEY6ntKZ69z3msLZSoYps2",
  "key10": "tkTs9isHoCLLVi4W6Cm5fpUbgQNA8ZkecGk7TqVvMNiK8Arm9yEMTCKDQw5ULrGdGurY9fx6RvznXR3cWmmsPtU",
  "key11": "m6LtVAKH2Gofk8Va31jeTqCwSt3m3L82eDyLesEZxhL5tBxiyW4oVsw7gBEroJXdajcqMtSwpd6Vn8recJeNGkZ",
  "key12": "3sAiaksrhsGQYjkTGUnijpJZqppDG7do1dY3oGRTuz83ApdumCYz8hCSgZ8np9rcVa45eianjmjDLsUXeyf4X69n",
  "key13": "N3HSwmUG4PozmTT5vdrPGPY81XTcq26DVFZdZoC9jhjxf3sM7qx44CuXUAKraeoD6Nd6chpoqUnErgE9CfwRNtV",
  "key14": "X8Wz8zMAaE16aYiiiGSzQaZFXywRwmdcGw3hw6pVHuokUU1jWaYtBTBrrcyzc82SdCxUeL7dPyrfsHwacPiDXCx",
  "key15": "3516N9coEy71h5veq9tusCpoM8rYDZFqy9DK4izVKFMJ2pGKqRnX3qRR7KjGLtC1QjZKrWnkTTvkXAAGqhpdV8V8",
  "key16": "NKq5CGVqiz6UfyWw7e3szxWyfDhzb5s93cchK8kpsNsbjiyyzLsVENYhWfSGHMbsL51PTASiT2x8FwRgG6zsKso",
  "key17": "VQQc9vnDe26znZ6CFD75xH91ds7MjCjon4ns5yJxntFzaDQ9x5fxFbw1KYpMm27kfCBQrSFBoCvK1sCRZQ2hHeT",
  "key18": "2b6zhru6ZxBsHMxSQkNL4Ubg4LKQp1Chff5eNoa9paWksqtAPdD9eoNh1Q8WqNGSfdo52ErigG9N2qmkqQHyDS26",
  "key19": "4A5F8thkEbdDxib2H1HRdJzNYu6QqtSkCQebzdFkGsb3xNxR9SZbQEW3L7eG5JfasrEiwVaNc5QRerL5ht5WDiLZ",
  "key20": "4RMV3KYNt84L5xoViwh9asBbDBR2aDDnnnHM6CVgLoRCuECGsPM5Ak1SH4LCWaKiaS4K6JBBsHyCG76Ly84MKTNP",
  "key21": "5TRNgWY3JrYG9Bt7hLJzcj8Tk2i6cUuMXVGjVv9cSesAwqddAZy9TagwNgLQ9B7D7dwKZbB2n46tcK5qBUcY42JV",
  "key22": "4VghitzjMgAvPt7QHyixVEFmh1e7X6Ui6wJ6KGjTmsUjmtzZ1eRwYKmLPTQnr6DRTgnGEHPmsEtCmJsfTKBVHeGd",
  "key23": "4GBRTQw476VVq8ogGUxKA5dGdGdWWDzgySozNzQk7s6mD9j2MfttbpFoAbaM3Rhcjoj1zdpJkuq8BmtsDyx6j8pp",
  "key24": "5sZCyT9xjCUw6saMiWNSAcH78FRW2No2bjHQWwhuQzW2qo5s6RiuEVWNszjGA9hoHqBFMGK2H9Kn4bWtjaZmct2c",
  "key25": "j7QDKUSfW7KvY9FWtGza8aU6tdhZ7xwqanzPoATY4EQeZv6u9quR5pyCWZDWwEA62t41hgHBCVGYuZAxwmVsMUW",
  "key26": "3bkmFQUJ1dW9swH6uuxB2xfWgQLFQmz8rNJt8Qa9KiFRCCHkZkP5UFHBFCoE1TBhRN5miUpqAJb1UoWAEhRUBWPF",
  "key27": "2TmgiLetQiywcnhx457vco3VxVUF35cPLkBg3uLzzrUxsm4cnoDdw25stC1HDeFwXtSEgMtHK3fzHpP4qV1buWDu",
  "key28": "51QifnwrbBVimXM384wR62ZDmHnhToZbsFtTm5dV4qVtTXfPCdRD1ExmQ8ChshnbLdyVNjjbSUxdhN4BERPzJV8P",
  "key29": "5j283boUjQFweem18bosDLjA56MeYCNmRNWEKEqKZGKXFbHvbBcTeKncmoLsayQv7sHDN3Bm5D6KTUYZGuhTbV86",
  "key30": "31UhDamKbyD5J7V8mfK2fwUxZTdBbJX74CM6T5SUaLhJu7LcbeZSa9Vn5nc3Fz1WxU3CpR7LnuAuvmStSLv7kg5W",
  "key31": "336o15XzFVgTMJXqNwYxTS5vkzCihWpry7HyQifRWVXgPuJSTAXFhDNcswNCtvkP6nQBBZ4d65UZn2XipPZU8urA",
  "key32": "5ckP8SBCReEPEb2bb62arcjHhuoxFW3X8QMBguafQAnMZcY16TvD4PDcFMJwm5YK77gRp5Ab5iyjDCVhE2uqwdK",
  "key33": "3khoab8e4pDQ1nDs91ZM4LbTerRAqP3XYycZRmDCxa2yNNYCzVQ9hLYAYgQeQBJi6cHnFALszqS5mEAbyfKQe7qm",
  "key34": "52KUckUjTDa46HKRNbu3NDqnMeMusLRSnuqLmeL4bSiZjzRDDR9dtrnPwEkvmZPYXtLe27jrKDjLcqnxj5i39V9T",
  "key35": "xsWuFtbFMvA5kLYrSbd94LECiayMVmLxaKTZtAABdqSAhdjLXwEhSakuDFk9jsk3w3SLdtDMUzdyXg72NaV3kda",
  "key36": "4U5MYeGPHevdCUWHpUV1PmGc4PQeV7v8sP8xPxndyHobBVM7Hj1sxwQYf7tRQKj9tLiRirg5CjyzkFbKky7gH9Ec",
  "key37": "3XHKYK9A9ZS7ZTvAeMURLsdiLCgfuTtmeChXqzQnFsUkmzNvzPAj4iViyDGHxkqsKhmwUFKvcwabGfrP326UddEP",
  "key38": "5MFrnVEwLojY7rWCmGMmxK24g69Ucekjp7t4V3F7q1sNU3Sn9D9fwTuvyxPu9k7HdBTXNMEMhgQw2bDudz38Brha"
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
