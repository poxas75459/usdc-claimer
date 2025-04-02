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
    "5QDtgn2tQoeoNBLWzhE7honX6kPoendU6NeWgXH3crdTVepDwKZwsQpXF1bG5kz35d8JGo1k1J1G6bJ3aQzJ4p1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArB9wnnUiVaLH8fUDjzqq7RoBWbkfVJSFjAKqNs85qNA9jr478fimLikRbaL1BcimpoeAgEFEakAgbRzhH335n5",
  "key1": "5yEWf1uG18riW5gzvyBu5vJjzUrxurJM9pXqXoqdzVtyF6cbiGKd6HEd6KMg8ciAa4VGJGxdxzWfg5Zv4BUprdDD",
  "key2": "2KmfbpJmtHA2LbFyxCnVta2ko5K7Tjsxr32P2HqXpU75rr7Wvpiy7x9HtzPnjY9x6i5TXh4U1rWt9gCNrRyYVBh9",
  "key3": "58bCfTLJb4bYn8zmRWZywgqUrQSGjoV3fjMpuBj1hkyHds1fjcxvdgc6Mzvr2M2QoDqt46J2eULoZWTKNfsivsJZ",
  "key4": "26RpnHvRQVcRMDxEuKD5GevL4GQ5qjwcvAYMzxVeMUuCxcwU8EZbcJrVsbB8zXG6eFhsCyoqN8Wjuy3LE4DUrzwk",
  "key5": "3cjg3HwJrjJ1QqEW8MPoCYi6Rq85QRe8Pwjo9WjoStLMdTfjcc6R1khfV1uSW33jDV8G9X2pfN698KXZ8we75Nw",
  "key6": "4suPty9Tt9QhY3g9QUFs1ko37UeKXYLGtRiwKjVHFz86NBkf371LnF8MzDN2cFkT3cBR3bFsR1Xfgyy9WYLqvbW8",
  "key7": "3yQLxU9Hdg4tKQX35Dmw5M5ZEprShW1myztJLaybcomQ2UqW5i64HEJhr9AGhVnvL7myb2rrZfR3Xj3AxLF6DRV",
  "key8": "3o5Co7i3ATm4CgEXyKrXttRok48pFqgBchbzkuKxwY2SDszkGfUdSagHQYojrJ3RLVDz6vL5XdBsQTkVWUbZkyrx",
  "key9": "4N8yQueyW8zzfRV6cAhBEvz6794evcCmRWro9RiP2ZeJG7o8bt3teJTf7ZZqQXXVUpz6N8tJ6P3ZxsQgVQPHPvFK",
  "key10": "5X3qX1Hu3qcDzWeQL7x7s8CLpqU6GQpvyUEZ5hbeDVQKn7WCYUvNJFtpG54AHeRZGuamZ62eCjSWvhSJsue3sTre",
  "key11": "4hVAPztu5PemAZywBwerH6u5UrwLeWd2LdsLhMhBYxFtskG9K4EXh1aTANrBS5ierkw5HJGuY53v6HtChdQYaKaz",
  "key12": "5vHwRN4JwXeX1hia6fdBeX7YsnWDJuJwR6PNqwh3UFn65Z1DSwhXsQdp9rQ6jqiHXMm3gWuCT97wKuyTfi7BNW6w",
  "key13": "124ZUR31MzhfnGBkNEZc25EY8k89kZ9nGq9FonqKz1kfX3e2f9xFrNPwNzpTC39VxBE5GYiU7ziXSkntW1z1h7Un",
  "key14": "5bmXjNAr33tFBAfn1Q4WkMwQZUuoUZZwfhrgGTCC7nN9URdpTPd8JmFFyo2UZ7r2B1W9eRDRiv1xA8Ng6QkunmCm",
  "key15": "LaddtR6WjEJVPTqMGiLBmJbCwsH2WhfwfEKUyqaShaDeM6Vm9jJTVk1qSxwULGAF6icvkx98YfC8RFzeC41rVZT",
  "key16": "28RGwPyAbYF97mdPGYYpVNPGUDFRB48HKmeuEpkKBYqZAhKsvqt7WT4HBmo1Uk778bU9bLPHEDGorLTRFp6DrrgM",
  "key17": "51En84qwHPtb1t4zoQSiwoQM55bf9UEJ8wN5fWW1VuRWCkQMqaUV8zLYVRxUY4qYExBCDf1HC2gQRjzRK5CLPZPn",
  "key18": "4m8oeg3iCvjQUT48d4ggNeeKdj3YEijLjLZXomZT6GM23QdEQF2Wco9w7aig222nwo2xsp4AisQ9D89CiUYe4y6h",
  "key19": "5BA4hxwmD6jquBzz8Ap6pUgKfc4EvPbZJ61NsjVqiHMt9dGAiBBopLkspk3F8fUhQeq6xc1VC3wLjmyvZMdz7U99",
  "key20": "2xwdn3iycPNnNTy5zmX4s2dSEopKFJi2YWtb6XJxEYJ4uj6VsyzGVFbKHYTemZRgdGLjhMP69k3RpDFnV8JahUm5",
  "key21": "5ELsZgUzDW873ouznUDGpRLtpbC3JvfxNp15v5sRV3BeGpo1LbhyieS4bkEKE8FLvkEqyfkFuV33mkZuCdLMdwCW",
  "key22": "5J443VnjbC8aSbqX3tAMGHEyWNtCD7gDFHEf4E4nzveQFQrYnk5jxEHE8sKqsQNuU9QAQAjyX2psH4CZG6GoUnCC",
  "key23": "2Ws9J2XBwLBnh9WmycWpmwLrACzRHhU3DWycYtpAuyEbiRzmmSCpWbsdu3mYAmmxwDG27xVPSHXKtiEKdWYUeYiT",
  "key24": "SWGQfted5ZosY7Y6X28FKp2zGJuJpvNeazJTeaqMz1oQtWiGxNRKbMYAoDXB36rfY3PbZDMUEfbMpYMKy9VfNe6",
  "key25": "W6rkTH75fetG1YSeaUZSEwhzmW756DeMevkrZajMeFpjtifmReTsLEP89Uo8VG3JcVDycMzCgz9k5rKVMiefKTH",
  "key26": "28kJM51S7mbRuwhNMd1L8sjhogPyW4PukBQo11ASEFZi4fSUtxUdZsP3BVtnqvpF62af3R23irMY4UsJFxf9DaAV",
  "key27": "3wrLCcGpVrYCtofpjJWjQfnAJECH6MYrH7wb65vxfsKuqUWq9WMR8EHVxPKdpdRrZfvdAVzRLXpd5oYGeehvAvS7",
  "key28": "5vXJseUbJDnvKUiCLhsBSrZ3U11PqtJ7yq4aCHLXqCbFKAFbs7j2i1jGTCDbV5dT4dCgYwnU3S7cjm3E5XwRPyB6",
  "key29": "2q9ef8ozUdfYtYRc2RbcmopxMVLYY4pM6YfhVaaeCPjgpnki2exkmzkUK1C258RmZD2Ak7ve2NX4mpXKQuGQrqf9",
  "key30": "ixKAJ68QU1awBqbvdPiv15eWVKrkoEqTiU1xg45vQV5cwyh1zeirhXkgvYtX3RDNCVnddwUNghjFfXn5M61xaPg",
  "key31": "2FbRX31u5dxbFsmcjvMYKsgqXrtCGheyST4dTXHPzZrdznh3rSUHWMsrsprYbDaDL2pk2iH6XBXJYw1EhBZmXUD8",
  "key32": "aRZv6BTEMW7D5wmeJQSLZjmBM5YR7YtoPiDvEM6ochj7FtCThCUYj7RryxA8v3mM6zusj91qU1UxawZUPgszUFJ",
  "key33": "34MxDt5ZeiEhWtc3dNxswFJmgF9N1tV6u1fVr9THZDyBQNz5D6SPtQsLuY43miHG7bfpEYL8GhAaVBtR3Zcdo1c5",
  "key34": "3YbvEiPYb9FfhoJoTybV4nTzqbhuxLQHG3HuR2W7QiKwLFvWVpRrvcrXoyKDQbNydM4w9YVLP99gkpbqFyYq6S3G",
  "key35": "2x7ieB1FGnWASw6vx44ZUCVMPgYgighuXkXyM23iVSJrinDAuvB9LE2xh1dxiDgaye5f1wEgPGRk1BxMeay4jkUd",
  "key36": "35FfSEbdDJW295GaFsB65eijV6S7g4JQ8jAimXyz1PE3jUeE6T6h8ey8AsB4PRAvqhvgEAMLjMTxVQea1Bk4tNtu",
  "key37": "2DZ7Btbm8EJCn7VyxHSfZFaUxa91CojByJjPAjNj7MXeboEK2CicJzcZdoysmqgf9XPGGbBeMHkFdmg2opCumWRL",
  "key38": "2hxZDXRDN8qMeCwx7CVkdfcAMpZCJRHCwenyNBcW4vFB1ceSzjoZbLmg5hPZ7edaoJKvXSJs7Wbh1jkHHjpBQbkx",
  "key39": "T2DTPepNFG1rs2RhWdgJkDcTqhvDHQXo8mb48KW6AExJkz6tffNEeyDZygiSvMnMKaExUcjyCRfU4svQnBAFjUm",
  "key40": "PKZcz1VaN3iy6uJ74EXiMtT7Sq8QoNE4E78HMpDNXGc6q1nf1p9RtGzdanMh9eGWdN1uFsjEYDDySbCRKG5onG7"
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
