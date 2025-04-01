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
    "5dJb9ajnS5zqyeiCatW1zKYcGUHokNGrQiVZfEbiigtLFb7EHpmjshEg2VkhqTr8EeZCwrQNi3s8qijqFyhH9dA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUuS2pvYXhvjPAiRvH8pfoec7NwvLmZZRaGb5cMnH8Jm8XkheCwb9UM96Gsr3RjjJ7CiZjHTCDoMCq23ugfjkRZ",
  "key1": "2CHNYAoyNeH5FA3o4AFTXNQKuzNxsVYtqdfSu2VxgprrWNZkRvqLpEakXKi9mFj8rrJnTfPHtV49SKDm4wk3Mf5Q",
  "key2": "XDHUue3YuF6eJf4UzJ4F7UD3tR9hyHFpHDw5i9wH1uHTGe2Lmx7ND6iHEqKUtraP5nZvxdn3D2K5jhMCdu3TK5X",
  "key3": "34hU3uiuQsMbyqXgbrxuTjpgPi7jxwyfynkmuXjiNnwhL27qSDWWPWNJYrbJrRR3a6K8s8CJMbE7JKryDpJBvb6f",
  "key4": "3MTWwpogPcNotxhvA9LKxdNdxHbBjJo2agfdA6TDLhyuYwjAmuZDByjqinrf8Q3Df98KH38AbhzjRvvgmtzBTp8U",
  "key5": "4cM62E7ptmgTNddvszWAD8YxYxK1hePFZeTCHMP1GCSidvgtKiqPcZGbgPHcf9WkZQcXNW2MXxJvZ9WZ1CWQHt8n",
  "key6": "3tQBqcenNmyXy8VQbWRVL4f9sXuVXd9zWBYQGkwscdURUrHhodN1uJnhfw1XgY7UumG4WiisC8hP1dCMGHMMBQPy",
  "key7": "5m8EDFomqJ6NhjHWmr5eny8qgmx5oMpbuauhz8YTBDc44EFevWRyS2k6JQo6Y5K2KMAGobCzYuPmqRH5LHkNwzN9",
  "key8": "4cDEsC9c4wxhtWwbPhS6BKkZwBVCqKNA66e4NFmxusp6oUQvBjj7ZyydD3Ej44CH59ij52o2EMPnwT8AE7FVNByB",
  "key9": "4f2CTXMwaZsfwkPiYSf17vSxMevWyiQUjFpyuPA8h4B3i7C2ZJAnq6vaW8jQvAVd3x6AecrHQrNa93bYgZntmiBR",
  "key10": "3wuB6QYL6BHruo8bvBr5wg6TgXLVgV3PWwB1RpspaDMYJGBW6UwSpjaHnfaGiCcsav7qfWUkHJ7QdQtbEJGXptc5",
  "key11": "3FdZx1m9GxTymJbs9AkeUBDYdCkstohgXQmMJt2Z3yyqzom4JoTgoWKqD7uM9Pkij2Jx1zKk2Er8m5SYdSnMqDFr",
  "key12": "NARkkFo5oUjktRvNS5ZNmd2BUiUKF1dJturAEZ4e4eyAgBZqF9vtMrE8Qhe59Kh2dFQh4uo992HHirmDymSzgaC",
  "key13": "5q3KBnTfrLKQ5JgqvucRT4tanfjATBaPunp94G56b5HpSrgk7Pr2MUFjSwGHXteR1iTknFA4TutxcukzvwW4pEzD",
  "key14": "WEFVhtbsUzNQnLqoT4edJAz92F6YwvMkWgQJb7BBvfYySfSGytn8LyVeFnDyzqKboNSPYv9vTt28Zfcuxq9V8Cm",
  "key15": "3awpD1usFXpaWNJ6qUSNeArhQ3dDLvcH6JuRDFyxfnRKBihi5snH1NE4cjnxxxk7fdVpiRbYmPvJcKNPTvBpDung",
  "key16": "39n35fg477hjeJbepS4VcVJBPKP6x3QnKLd6RLS3s6uyMZo1QUHv5wn4d8MGf98NZfhJDWWKiQXS8tyeYC36tbWY",
  "key17": "52htmDwWPsg1kZ4nNDqqLWPmNLwN6xhMkgd3YQi2RW2YLgcQv8ZMXaS1o9JPd6FDVz9DKdoYQUVi8xMjReJoqWhx",
  "key18": "RK4STc8ztgku7C57GVvKUGXN3mZAYzckP3YaHCyatgsH4pKGPfeS8YLxGC7ht4ABaLij9UcDFHdf3MbgmogzV8R",
  "key19": "PwRyAGXm6ZNhwF98ZnqNoLfiyWB8CJNjy5NGhivoV6FRBPK9fVKvpJiJTg6KprFAV75gsQKZrt4eweqSW68k2dJ",
  "key20": "3o7pNXxtv1tsoDKhY1FDaKLnKcS6dv5XnjnqMCqespeG7vbw8r2RHBDA3BW4LatKR248wSw37WCxe61nMhMgtVRx",
  "key21": "wSBSWAnhFKX9R9n8oWSi5f6HPH5GDxhh1ieuaCE5BKSEB8weRpmC3ckUoKkzB3tzv9T9NR6mxPacB9NFDqUTPWb",
  "key22": "SHwgSdAyg87oznsbWErY6e7w8vm4iqD2JEsXieZgUmJBshbwCehDyPAYZmPvC2SRygWpLApnUrNnyBCsspcKe7c",
  "key23": "2WEEdWHmqqhftD6sCUK6Xjn7oZ5oKHYkMJuXZpKcjzKzMpB2B2HcGesLayQ4xaUBHd2AAgouZNfYncwYqs8BErQC",
  "key24": "5bDHnJ7MfD9cCtvPGr8Zf5aJGV1ho9FUxJXqsKXfJPy53QXHm6M1oZ1CGF1uYD6bG7nmAn3K45jh7YBL5YH9rLkG",
  "key25": "4pCyHUpG1FeRPi3mSubhzfr8TVQWDgKnvyaVAhQdV4ZJJJMHdEpABYiJeX3YTGjftaRKzJMcaxdT1J5uvkP3ix4h",
  "key26": "4izEYN8kQbZCRg6ypgvqLzqmVzwtA4cGFvSMjbgrW5sFcpaGbSUv1P14XKxxnvtmPaCrMjhARqtjAaxgZqFYgQNj",
  "key27": "5E3UzCeg82UjTzaCkfQfa6vjykBVd9BgdtdWWz3GvXYFVTfo5d9n8cqNtS4cBts3Hk4joecnhUkozSrp6GkzJUWL",
  "key28": "26qYcUKejnA59omSWM3nBzY3WH5wRf1mMpZ8M1tBNyoFmXC4qU1unECjxip4jkrdhXs7BXT2SoKp3dva8hf1zUvm",
  "key29": "2BswJtiaJHxtjJ6HcNLV5weW7Xisuyhoh4mUACzvqcEf2zkSpcAkhm7D3cgk5iSDvLwMpB9d42nZN6mpdbmxpL7s",
  "key30": "gpXzVcxTcoGsKhSYG9E2vqYzSFgkJSxnqXcoLZm7zETGqB21g1CYkWCcAp9aLYAmoHa2CkDJoSnkrv8KGKmK8dd",
  "key31": "3Y11phWRvjnq6s4MyaPwmpBkMWY8BTfD9JUZvfcVHgDpVrrPPRYKHUeed5Mn64Fst9FJNAZqgurLHPoc9CzZHbZc",
  "key32": "5P7E5gUbpxRUMLQA2TakMXJAgGgd6PaT8neeoHfCNKGayZ1W3NRDpWRSMxwCEqg7EN5JK3LTcfLBHuc2CcwgT334",
  "key33": "3wgsLrai64EH7FNEGFMeuCTvV8qyst1JAoCngsyj312faKQneJAFAUpSQvsvS6x7xsKdqFw1yi1zPFQRCGt8jaj7",
  "key34": "2vqAHEUnHDrZgkhdBY2KudRneqLSa9ZquPp6fwkmvqvtQCHMtGnk3sPcYZtcnKUecv6xe9TGHWKH34qiXXxGzMWd",
  "key35": "htvYhHPSkVn72B7dFLkZTAXvsxrws4er8puPrb7p2uY2m4z5QSDZbqfCEXuS4pqbJHpU2iHnh89ZptiuabSp35N"
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
