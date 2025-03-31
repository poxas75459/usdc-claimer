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
    "3NTT1hmHsHEHyTmgPqq6YTsvSZgM4etaAHt7vmmnEutJYpvFAsMoLnajbBUYU9NawE6GQsz4Bi7wDbvnFpqC53va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCEq8cVSAk4LMjmatBRWjR5pSA2bszE4ZDzmEUBd97rkJmFKzWfR9JATUVAk3Gj7AB1u5XEmEaJSbmPemZdUaQ8",
  "key1": "qYpcyxezLdCaCJ6E6NQQXFsRWiUbVhDsgpGi1CHJfbmWhD72dnvs8SqMghhBsnBai57P85L8QLsmxNdQLgHvGbx",
  "key2": "4u3bMBzWiHkFATqUK12LXp576eVizRKJ91UdvbuWSFKEX3SGKP1wAJmCLaNMuFwQBTti99EbNpvKhU4iaq6cfM71",
  "key3": "66KyqB3BLdNWBaZz6SFx4MUdWa3bYD5WrwhZfevSrRRGJboehuBA8FTKsMuwYhWs8HBkZ9XaxaiE6VJQm2NMtQ3X",
  "key4": "4Zj1BmADN8vUrEvRxhFz8ukZp7ZMYx1rbofRkxfoZoKxpRjbw3WYZ3hVT8avjFeBnujHpo2pm4hfazdfVFZvxRvk",
  "key5": "F7XoLRgYtKhQFKUSxqbx8pEkx4aqnfa8Lv73CqRGS6dVRw97aTRmCM3xa1bcYDdq7RTKiAiiBL1ehdbJAbYFndy",
  "key6": "33JvmfKgcsXfj5hxhe2ByoDRajvj2YL9WcVuL7xoAPzGA3htCMrQ3UUJ9gtEAgoUGJENsKAbjHoXkGSY9FbQ1u5K",
  "key7": "NyJny2xETrKQVAynEv1JawTaKLutEUZ8WV6uSm5vrGQySkT6Xwsfk3a852QojcKhMsgS61YoxvRdZKaKUtNQi48",
  "key8": "3U4Hzme85qHRAPHhvakiWbb5GsM3ck6D6Syw7PiDKHq7iLDceTfnw14A57X5YmRewVkBunKjSTZTvjEPxoFgAMn5",
  "key9": "5AyY1xVwM11B7pHfDDVwUgFWBKx1H86mRjgCgyUcVLGdjqiT4oZC7me1ETQsMr1fzhScdCV7v4sAH61FvEnKRuF3",
  "key10": "56TMeW692bR5uerPvMx2dmJiQYzDfQbTa2sQbHJPJQhT6NyEnRGXvevaawsV7cjB9ZJWpZg6HYvbov2AGuWGxn7Y",
  "key11": "5mVBrjqtTCQA35hQd5G97fVokwvRexRyRgA5u5VtzuHmw9hfZY6z1hpdjiC5syeBaLCjuftDwBnGjU6ccqyKJ5oE",
  "key12": "2AyWPF3tg2qtqeg2WUCc5sFuZojwErYxyVw6hTCamujq4ZXtNebU9tn5mtzKutiXkGSCBQ6pcgWbLFbeNkAUGqSS",
  "key13": "2nnSmSaDGAz3atqhyVPKKeUAD3mT2WsJNmjuRMD2X56utt5DvWEryaetUD65aHudjZmJKrokUdXzVRzBJJ8Y8X5g",
  "key14": "r5QLgw6ZxAB2r52u5SzVqL6cwA77pYN9RsiYhoCs4m7uo5k7LN52fqmHLcNjoYhSzcBS2ccBe79rmBdXyphsX1U",
  "key15": "5t29JWoJaggFY9vvU7Vw27wXoXUPzhkwuqFY7k7nMvCJHwgc1GEpS48S3ppejEQueLYRUKrisjeG1D1c1PsFHeV8",
  "key16": "3L7Fmmem3HdbDJHEDTEUgsF6vm2s2tvHCTRLVrgQSrM6ipXviPB6eqRRmTz6ZTRsqv2mpC9KCsefpdadK51eXuXf",
  "key17": "VMrvGaYzPwqP9RSLEAoojCFVhfrFubq1TZwBDD648ZLRGj7BgGZYpj1vTNbCapVHYauHWKJokPmQDTh97uvHDhC",
  "key18": "3wNqSeg4gAqp63D1XB7Q6UHsS2fHtLVZ6exEa6SvsPrTiayJGxhubLNJReLjk6amU36zeVJCpqn4tWoSmqT2uvyU",
  "key19": "2RZirf2PmL8hMcLHnEmqMdS3uSvTnJsBmJG6j5ifVrieRzXSHka4aCE4JiZLgM27bBQvKcJzmomTtJeHcWcKBXCh",
  "key20": "4RFfLPMruEWpWCjueF8Y4driCT7zru3q5zGs4x6N9VMFnmrz76ieBHJaTnUHLvhpjY5JzCMEowYuEKi13cjXG4re",
  "key21": "bGZRZHiFSTyv62ahjS98fsC6GhqFmmL7b6eNnEW7egSwDJuEuixw3sXCZ1iqpSKEXkMsU74SncU4E5dAQPu4Ru4",
  "key22": "2vNmQMkxHhSGGQgLVt3tmN264pbkjaYMkDbn1Gr8tJiXjaXhksYdPmUCiDfZoM1qjVmgmbeBunUVbMNhA2oS5tQ4",
  "key23": "27Md4wU5ypJfk8om146j5T94WcQz5Njpd4HpwKRT2rTnJfcSUAmQUNxKPmeubP6N5gqy7Re1fyEeHnmLfeiUPh8R",
  "key24": "2a8trbZs8ydUS2ehPcXxV4Lvh2V6z3377mFQKXq2bWwpoMer4xgG557V1zXdTvduygaDu3RRtvX1oBsnMT4JJZ2J",
  "key25": "33xqRZUNyxu4SZ2Wo2HhqBjENqU5QwZdL2mqisXRP12DhEuv4RVQfamUrygHjGzbXYRb64VcY3URdDnVEvYarP98",
  "key26": "5sZzSURJSX4v4Ksr2rsmnJMg9hD5CHsqf5F8Lyqx8KVcaRjZp7zPFMEBuuiKko7Tn496WiNwVtq98LUNn9VzvEzc",
  "key27": "2pTNEYN361c4yd2ajpq2gfiqq43CHhuSoVBKSHrEXz11NYibaeAaqYYSxnYoARcvkWmzQUQujvL2YQ4FPdG6zbpJ",
  "key28": "3rww1u6TU8xdJ4HKQM5aCeuHwuv5hCDupm2zibvfbZBY4Z3pocnDFGUwtZFt3Ssx2CUzE24Lm5a8QwY979NqCVBs",
  "key29": "4GGqEjamAt8VkVgJpxLzqDNW5mMkkJG26esi9Km1Dtmu5uYgKjQqNzTs9ZgJ3DtKk1NmyAUEPTiRYUyGThT4A9sp",
  "key30": "WSKPE8vYArZm5dthmhUgNTTCAQw6LnsernmQ3iB6vypjFZYoVa4ary3hChyXQU7MDGssr7pwZAG1Sd5jeYJUrHi",
  "key31": "2QxYqJEHdJt7sZj4MgovmxWzU6WRU3JZyV8dL57JawEkt6MHMPbXiKQHTYgHzdmgGJbgYhe2KQzcuAEM2tVmH1Sx",
  "key32": "63pHQizGUENduUkH9o7SMa8hVm9YVx24gJkHBEnYAjVGr6DYUsFKX6nXhsMmeLc1tboRLf6jgT2AFMnDzzMGQY2q",
  "key33": "2qtYLwfdBRZPHzjqxYhZLv4GNNtrmUEiai7zEvuYUXp16F271pHZQsXuaTTC5Jx8vjH1pz6CW9ZTRKfVaFVdedrj",
  "key34": "499aL7jj7EofEj9kpswnZJ1zfUM2rMGibLMnWgCYw31RKKxY35NKpwqLz7YWv6V5rGZXdbyobkgt3wMC8BU5YqAJ",
  "key35": "5RueJT1MCbCMkbeqwVv7G5go9CcBkf2YJfiX5C8r4giX8d7waXuQZoSBkQcNdAoRdhGdnBCwzwYFUUyA6e1cHEP3",
  "key36": "HeZR6gQxYmmj518WJieNi6aQDW6Gb5PBxyP8WRmBH37gVR2GtozkenZw7nAzgCvqxvdQvovPzTiqy1sA5MkeEaL",
  "key37": "3Js6GiUcHXzd6Eruo72YQaYKWnfCK9o9GWqSfnMThVUo2gWToPiBfK3daYPHUQ2nsky2vAnjSSqjrhEQf8wDmTsw",
  "key38": "3UiBDqmq6BmhTzDmPhetGPnAc3atc4BWSnZ2vwY7sE8wuohkmkoDEtpJVZJi4aDqMcUJEXR1EX8jR6T1DQTy5TLP",
  "key39": "4q2BRVxbnHhxrAFDtvhFNBsGc3mBhVh2oLkHnW1QiqBMXohDJrBApenjYwwgQ2K6c5wmQP4CgXzG9EwwsirBNfj6",
  "key40": "2G9BokFLWcNC373opULetwQmQVAUBHz1qr33LMJniyotBpuim6R62mmznHSGiLKzYLcLhUFJceUW33wUa2yB9E4S",
  "key41": "5B7cm2T1ttYvU6XzQWtM2BpGiEGTYF6eRkhPuEyyMVbWfsnZ5vXpi3sFDCpCx3v8pb4YHUPTqyyS3J7oR2jEdKre",
  "key42": "3iFprjtQS7Nsa2jxmz5zhXFRTJFSFbEgv5BXw3qewMg8RWLsXbr5bHCRkeJZVKBNxYLi8EBpiJWkZJfCmKU8ZY5W",
  "key43": "3zdd2nQyBhPwbawvb83z7xmSsszTnrjoij3ecJkCTwJPpKafoRxf94FrGDcbkb84DqL15LbVF7YNmvY5YJrMgAS3",
  "key44": "2GQJeoZBHycE7B6evwr5fhU2Bno9xkwrAhRXheeHybBu9gE858ymHJtuM6ywrqYEtYUzuVBVsfx8Kh5aQHTCwCmq",
  "key45": "36u7kEtsPwxNBftoWd9cvrKQSdvCa3cEcgyhket3TZzcFXyMZ2WrCuMk2pmAnXe7cczJp9CFuUVR4uMMjdh28FYt",
  "key46": "pUNAvLzohpiiZsvVLdRcJJpDpzRSUsWNBRuyt1G3fws5xC9EmwXrq2JdZ3zjUWqgrpqy1nK7VjZjCDo4oLzrwW5",
  "key47": "9YWd9fmF4eJd44v1acymkd7hrJug5kwAhCUaJ6VFHSKcTxhM4AMT2ipkQCF1wroen84FtJn1KpQ8AjDF73EbDRx"
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
