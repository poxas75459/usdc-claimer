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
    "2DCQ1tGqukXTUrCpym11XCHcTYYCxeq7LLYR8qE8A1uUSc1ZuB7KC4jqazdQiPLhLM7rC6MqzkrFgQd9BRogtdCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9jBt84PNdb3qcv6feeL5cNm87yuE47k8fwjNxnpGySepz6SDxvHoSTXenadNMUDVt4QW7MCN4QGPYRn5JGqBXR",
  "key1": "5hx95UoUtY3NFtC3p58nYYJJCXxorrPafT1i2AT5XQtZceHRMgyF3xibQAyyQMRyuPHAcUtwZFkpsRjsJniACkUp",
  "key2": "D6fyrjwyc5R493W9Cdczr3e5vBHmJM9xANLSeJrzLYRfUJVaK2V2sAj2ZZmKLryi2LH11apuCXmRBEE7S189BDq",
  "key3": "5SVY7MFnUCuq6w5ok3x81YUZmH9XxU7hsxuMKEniAsoLqtMyAqPypoMMpouxZ8xatZTjK3t6UQS4Ti5PK9ZUmiVZ",
  "key4": "5tQECQME3QB1mQGZuyLpLTX7YL8dAxALxQSHYih4Ea9goANyHmP6CEWdX2K7Q6vTr6MTwrikNEZNNWaDmQiaHrD4",
  "key5": "5q5bK8QyeWUEbMBUX3v3V8azEqiGRj3AuVt2xcCnuYcv8wZ5EhLZZ2a8rKtLp77Tr1b6RWz5CEJ7hLnsT4bYcAu9",
  "key6": "3znc7e9N2X1YKKwA7rF1csbQ2NgnFG93bavc2r8GQLDdDrMyRb9XxGxeenxGJy6zJ6vDoi6UUSp8bPLJiiPjCERA",
  "key7": "5nhtHy9m9mv5GTq4MPHeaBpmQQHjKsYLnNJuDgCaJgn3tRRy8EMT2af4DCM5oK9oNZmVa1jhGUwrqRu3AtxKAz2k",
  "key8": "3PP78kMdWGn6zug4T4qtGjzpwXrEigV6HujqbU2fcv3NdTPhySUQjeWuY2sqKTKELBwh4uM8pwAW4DAYKLENuReh",
  "key9": "WoRS8EwFdUduHxQqBjE8MeMt9FWrggUK1SHpdNMmorkVhe4ZAd68UpcU338vGjd4huuYo1KTyqhNzVZmXQkxdnB",
  "key10": "2YRvi5MJ1kAFYJvtUpauz86r6LjUqqMsENYbXWUDP6tDpDGimuC9iQGr6njx4UR6LmTFy2HskTXMkKeq51qn4Aux",
  "key11": "3VWkGFTbWeJ1a2iixQ94jYwj7DY1mDCRwzFitsT1Uhrk8WaUiaqzZpwjHcFEq9K7iwYf8DTGeA12iPx4Erurkg6b",
  "key12": "4msMbxYY6yvBvHA8XdJGtfUPMMX9jtfhtYnJ3dRxMKvtuvjcJT12X1558nnavR8LADXASb1MUjJCQHk1YHRwdTba",
  "key13": "5e3xUQk9yc59GgfcPKtRXeaz5Q4BNm2aPkaKNjHJy3mCc3PBN2e8vMup2cUWxi9e7AfpDax1921dbkAX6FFUBkig",
  "key14": "2WF2GLgK5zNNyD7djoEqdBjabU519wGMVmRb5iKf4Si54S6q8FG9Bpffzvfe5A1zPBFkasirnzDFaYna8YvyHQSE",
  "key15": "4r11qiZHeXePCwHi3Y4nsfQ8jhRx5zuRgM8F9yzYhhYc6pkpYnNX151XhqzGQBUYjfBx6XaKdYwihXbJpRSYkjzK",
  "key16": "45nFt9fMq8rvR1DmgW89G7G3DTrcprA4HgKqw81C9ZNaZhkhLHFTGaHkQJLRWdN7qKrBbeQFpMH7KCHHeFDZW8ZU",
  "key17": "3eDpwsHZVvjk55bewkZJAjevjvkDHQAGjBSq5oFYwCoAaR98KSwK3ckR19Gar1dc6RZ6i1dZTRLatGcEnmCKohCx",
  "key18": "5DDdp7oH3wDqWxevv9fefyi23ndwkChRYaZnYu8LvPYVK6cFcz8fdoLjUncqaRUj78KV7VEhrADpdUtv7xwveAhw",
  "key19": "4hQUBSQpCgGg3Lsc2raATcSfzYwu6HakKqZNcB9GGDymR4TgNsgh33Wuc5kmoBFTNUDxBTfzBFdzRt3vnztVRdzD",
  "key20": "5xwqW2zmMK4XE2xq9UcyxQZQYRLbtayod8tjEbQrua6fH33nodAmNevJgbRM9hDZX7S11bQ6cVcVM21fSstbK1tX",
  "key21": "RHfn4z93tVRXMsNPnWXFuxyYpKunjHqpHPFDwk6AumedaJxKFRQfm63sze11m9DBkRX46JVyy16uuEFCUUnkSTi",
  "key22": "57oZ6jTE8QC9JGpnDu5LUgtastq2YKewfgKyjb6yjcxykwLRYyXj4n1tzWomJWU8UcdQBwQjaNRPkYY4iPhr3sdt",
  "key23": "4hBA4jgQT5nEDPeDshQxaEbaktz2dNLKyC3uwudD58o3vFTPo2vZu5MTQWzFZZWhzcLJ8TAMDwXCk8o3acbeYeFR",
  "key24": "5QfXjmJ6sCnCq5eVtCoALH7Dn6jRbb2T2sHWumivc6YLc5NmRG8Kfj9s9PY5pJJnJuwDf8kGVkPg41zsLkTob9gN",
  "key25": "5KzVZfEWkjQQiNUudoDrrF6EUHQKVeNmULyquf2wqe3DUv2t4DvSVkevd9nkKzNWPYzXQfQBpjmZZF12PNFkuCTG",
  "key26": "5k5zktTPAwJ55N1o3fdsyCsB9s4EkdNvn2FjgDHYCYTKEqdJkq3eB7TTFKMxcx7NUUcB2EBUuFNBPz9YNoybjwBz",
  "key27": "22fREFtxLgMrXaRgyVXidLDMQUhSPztTAxpLmSWithRFxpUaZW5Mm3YKFezv1JfVXmM8sesavBbwQ4QKu5Aj532P",
  "key28": "c1D4SBPyhRvNohHGhqq1jh57ghHWoFgL8ZL9nDuWifTUtUR4xphAS8Q7ai43bgPEFDffoiRw5p4Az8vC66Wck14",
  "key29": "TfVuqaGEsdUL6LeXSwg2B8CpkNuEHf5QD761NHdQe5wkuJdKk7BRvYPUahoCzEc339iuL8xdo39x3WqTJF4Pzzv",
  "key30": "3j6kr3KFLzddAiGPHNbZ4z5kq4HjvAcvwfa9742V2D1hJ76Hon8jq2RRg8nUTezhdn7oLW16NUpb8U4wv6nENozU",
  "key31": "46Pbpe9nZQofZo9E6WB5H4rnvaZWq4kL5NbUWcgTdGhtafXTGDr6rVbUwvacTNUsU5Fq6NjQ7YiWuheam3aY5EMK",
  "key32": "2UhYnzzYy9a32jXCoFfPFMRWbgPjJixUgjzEAtJdWHXvKUQroGyMV9HJeXfNbEfKru6FWQ1UQ7ga6XsPFGwciEBh",
  "key33": "3XEyEUGSR8fbxNhoRe5UftaakToZLMjjXoeVR32bqfj5riMYes7xhtpBJysnzwdeGNsFHQPG62uGdvGjUDeSCPjZ",
  "key34": "3K7NsXKuVPmSeYd9CMn1FRcyXmQiY75FSKJrjq3gvYbqpuBwVYJRG5DvCaXoj8FgSau8PXAVMsREiL9XsUEoAf7U",
  "key35": "5tTk3EThP3cBzsHca4rRzPWyPstHc3KsqKi3kWmECxCfdtkbEGM5xGY6ynTuFDuZihwwmwfA3WzzetubHous1cko",
  "key36": "4Yj7sw5pdqaE7H4gxvTq6xgdRdrFF4ignZkLAQLf553jUdqxePvKHGgz8GQ7NXcyHfkmm6jJPLCkLKPpuirpFhxx",
  "key37": "4R3LDmsGAy7Cpd649eYToYJ5aoYPF76ef9XkJvp4ECUxNBWxRXwCC3Z1YG1q5ggajnSpjaV7UNhAcRWXZsPBSRFF",
  "key38": "3Mf1SioR1AqmSY4myzhpbQ575SX7vxzHCQCSRPoKbF7QxuP64C5V7F3uvjiHn64Fi3KU7kuSUCVkDRy6wnL7J6Qd",
  "key39": "5mqhb1D74TziA9QrW4ApMB76Mq4EAoahcDsVVs9k9k2CYC3CAvnhicGUZqJtahVAqGyZ2oJrjVwWHJ8rKJmsENyW",
  "key40": "4xqEymMroU7t2SaPMphvSCwWRzJJB6xRzqW631Qt4ZzLzvd4unjYZByQUrZeiHVJaNz673QdxMFArPqTjMnj4B3y",
  "key41": "S4L69aopj72gMRRG31jsGwtKL31FsT9oYBWDYNDMN1dJmYfeN9fw8L2pFH485TeHcp5HaYqwGR8KMsUEAQZUi4S"
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
