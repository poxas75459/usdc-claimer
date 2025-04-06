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
    "2xNuXai52GAuZZiZo4PbYu7Nhb7tENmAX27pTjWFm6ZLtwbS8JpUnTnKU1Xry8pE7ZvxMuDV59D8dtHVX6JVfBFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gP1yFBiLZGauEDYXkAsjFMwvNZ1Pj65KvEFDtGpLsDJdi4b8raXprDhXnmyS5crrPyyWhWpj27Xhy67BbH6uDi",
  "key1": "3SeAK5rR88tAFue7CG8o1M8jSy9Vz86kuLQW8HDTmTtBYT5q5a4vBCGdyAeAYB8UxgdFf5aHDLAWkeaV8Jh3cpHq",
  "key2": "3kYD9KfUEUbr6am4KZzFdvqraXQKLhtaiSd6qMY48J7LeidsJAWAbKtTVWKiCWtAKuGDMDL8QUCwiiLDtqSgaeS2",
  "key3": "3D8CeGC7SWJwVpm9EF1mmnMoDzbq4zNAabtagpQxnJWifjEBoKJWYFD7mvnMheeiW5k9nU4bRirfP26NtLbYKsUq",
  "key4": "29bg2jwYUHh9q4yi8gPWZwmTS6ubyUBjuZL3RguYiuHbsaot639yMYXiJsvSQ3i15eVdzpTQnXJBzK2sLUQtAnJ6",
  "key5": "3S6Bd3xEhDFcyB7KyhL2RJD1vRQrWCQDhF9wMibLRnYSDNFvPSX7vPvbkxN62vFTdFkxnXgtzk7ZUwq4Vqgtb2sx",
  "key6": "3ibTjjrGKdDs7apZY98gKgGh3f4x6dXWBW37vRWnA7dDGeREV7xbnvE4DXaBq6QqCJ5RpzWLW8xWCgm9nu8J3UL9",
  "key7": "3DGxuoUJcVHpGLDvfU6Ayv2BBer9AyCsR6BgNaZzSvjwmcHZsoAiHq5wLQaM3Qxsumcai4EfPQA9YdTENz6JeS3a",
  "key8": "5yExvPzF5AjaW3VTB3Hsi2aSq7gERRv3PWVaRkJp7pJTYzdGfUWiRqWwdze1YdwR92fWuRwugshuPxhZnDbqhjUq",
  "key9": "2DSX4xjDQ7ncikMmu1mbWs1YU4ER2P6s4jcmCepVb7LQfFeWUKbLavFKu29Cr4ndBFTcNcYFfWoXWS7kAx8Jqi98",
  "key10": "3JwWTrVmfWfJwZkcCupBhZgL5xp4KW6adb6CJXwBcJwBy1JYVfFgy1XMoSYzvY52btycsEu2R3wc9ENM3niVc55f",
  "key11": "4JNCpAJZxMQMVp5zZC8e6KAguJWHkBFraYFTHGpQKgEkkrUW1HTbvfkWUts3qVAHhz6BS9SAK9CCmRCA2tRTFwGf",
  "key12": "2BTQCNqbMDFBZ4j4Hox8y1Vo12mboUev9PdHVe2kDBN5VWYbK7kzz7tsHTocip6KEscK7LA5Wh8M73aiKu95vdfH",
  "key13": "3jmuRb87D54RzpGBRAX1jgMfee4etsvsh4hh75MCPfRKGYAN62Ewgkg9JdxtAoHQoRjoW3EiMwAGc7G9nRah6oht",
  "key14": "29uWhir5QVGF7LevQ6GJeodkhy56ArxVjAjFSpj4Dgmq9FBe9TSn1ZPixRgUmYEL92BqMw8MceaR19XAeX7hJCRb",
  "key15": "41KszL8PVWBUVhQ6E1HsUBwvD1xPw5miEpykgyUsu1prmsZXMSkzuoF2pqZxNZdccU46p3iXd8usNVxegUjxdjuw",
  "key16": "4aXNXLT4iNEzoFZhHKgiGWH7jpJGRvzZ9CwkwFqzrERRrKGHKCT8kmqGTQ9PHXKNtnkYUR7mbFRKCfzDPm7Z6gEZ",
  "key17": "45y9DXhaRnqGQxdtdyzT5gA3WGrK1FVy5Dcf7f2C38HNKLpK7xTEgHgzJc7i5c2gEWCo1EsfpYvRtc6y1y9ZpLRU",
  "key18": "3k6tYtYfKMzf9ySshoWmHhUMWi6YECaFA2Zd5jonEskuT9VZNvjyrTF56zJLR4eGhRYqxQU2ADVweeXNHYMhrHet",
  "key19": "5J45bEBNHurdFCXKGp75iHFGPey5ETkGzeGQWhpmEeTQzakM3QoVjon1o4RUzTe5C5wy6rgeEAMZXs77rCL5shc6",
  "key20": "3ryg3jZoCF2ui3e9uxVMBwGpkiqG7xSDJKTWX4qAxMFnLdoPd2HEJTtRXhmtHqgEq4mgWgbqTDSy1KjSEoJBMNod",
  "key21": "3Awv4HR2wfk2rJGPeDeZGbQkHWSff2opjecSt1jwgVzyDWAURoWdhQoPfsFdDDyJyLJiPEiJkg8jirnTFvs1xdjx",
  "key22": "5FAuyvntxhukVqgqttGnPfd9jVccTUAGNJ9qsvune1pYhFP5JxnWMciBBhhqLJ5VwehWum5JKrTAbxAKDJQBAk1N",
  "key23": "2eSpn8kT44VZ8SRafwTg58WmdoHnYSeHT34JxurmwaAXGN1kT5kcgkSmvBhgVMG1Jd6nMpy7GLBZRzoDAkBNjbsx",
  "key24": "4QM4fXe5RK6z2Hud8pP42v8ncssZ7htQSxjtABHhdRc1YoHBUYCfFbgSzrqrwBdPKyXeVspaUvZNmMfHFGTHyZot",
  "key25": "47V5xXEieLPevEf7Nm7wjfQG6H5TGUwRLUNtDxasXeo83JYY1LQVrwz8G7fnb49s66Y37pWdGRK5jMFV5wcH7Uxx",
  "key26": "2UfLPbU4QA7QQgiaWu25JC4ojHN7rZSUghxoiTyTQPvi9Crzy9Bwx4ViVcPJy9n5KwPFJtDQeWVMmTDKQ9AQf6ha",
  "key27": "3ZA5zaoL1SEzaEvCjhfJLhfQdsvVKj96iF18BPwEruykaH72oCPMmWcX8aWePNKHcb1NRrMQuEHHTKcKpdAQYWCZ",
  "key28": "YqiMMFJ1ccSXM2XZkwP9YLqBruxL6YzKcrMxR5emhgDBFU3sVtMcqLdpVaDWm2HXjuMTWnMmnsHSLXvcQ23GcQS",
  "key29": "o915nSme81fto9tgDf6rFzS682qGUJ55Xjkkhohd663tay4ngwzciaJ4bec1tpH7nAEfTY8hGkJNwqMyuhSJWLv"
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
