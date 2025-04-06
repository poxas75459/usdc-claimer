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
    "4HXk5wbRDcD6379SLztdnr3pqc1qhiPgPLVWbCZxJEAo9Td1Ny4hZkxR67zrHawJRv7gQ9z2RS5bMT46ysxMzLc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AayTUq9tEDiYq7YbGKFue9mz6zv8HdiL8NcYUhQKMZsQdCLVH4SnMxadnig2vvMEF6nCv37fR6QaeSrV1tWVEHM",
  "key1": "51V2QN49u1ScN5KPq7z3Getc4J6yuLxYcQPUzUXikE45AgYLR42ogifJaTcELPJFVnm6ioYKmWG5s6iW2ULKmoDX",
  "key2": "Nr5oaragb2eznd96yWyb3JwaDZVRkyNxGDi1gTVwVSQAvWYhKXJtue6oLxXp6AprqYfs5owMU3cbgcjamn69kQA",
  "key3": "3vMvhWLHJvuNV2RQXBmSn41SJQk8ZJHvCKhAMHNbd8usQXiQJWhvSn47QgB8budqgrSSsGzqYrudJ7z8c9cZa7UW",
  "key4": "3jdZ21Jesho11GdCHjtKrvuMhvn1UzBgfwJtaDUAZR23CxFPHW2iqcG4w6qBEabpPbJg2fssJfPQQW7upVbRFsAJ",
  "key5": "4Rqep2AqeLi8mMbXQkBHY3LJnnF71TinZxRjphMiyfN83VDArNxr4phT9knVpwFhGX9hjT4fx1NzXqqYBMWkWFxC",
  "key6": "hgh3g9Cv27bujmc1UyLwEuva7P9yhkcyo6e49kpFkSPXQpwWdzsqVdLkpa1ssKppvjQVctgd96cjyMEfe4Dmb64",
  "key7": "35MLruM7NzVeHD4kRLXRk9vLNhSGewwb4T136eoVWVsGzf4UirSfccgDkUVUb8vYXwF2rSwWGDFEYRntEKrdsTyn",
  "key8": "3pLLm8Ac56Leo5UsR6b1azXu1YQRkVy2Sfvd6ivVZMawLkENxJsn1VEPpm7DhudDGStaBueZDPYGZKcfKDPdGpcS",
  "key9": "2kPHGh2jcNSAod46ZyPD34QDsGYbJ3CdsrC994JSDzUB2Wcz4h82vUouM467awNWbKmt5DUj34KZTSeFNpAwZEzG",
  "key10": "3hJ5rwV3VrpoxwmPvWc4B69hez1YxG42PH5YDyTZp9RuHAvCJCyQjQr38ddQNY3KbTP2cf2DoLQxfi8rdGtmVFc9",
  "key11": "kyDkjJh5MN5JRCNwUKdahRfJCpnTk7MRqK8S9XT3uPVZHzYXWnPBfhHE9aRqYhU3bBS7wKZqeBpEQEUtrnwT9DV",
  "key12": "3EN7zcSDTQgyq9w99o6462FEni1ZwfpeNmj2yTgtwQ7SXY5PbuRjvP96UMrUnMbCX6Lkdgzy7mwaDJapx8T4qqMD",
  "key13": "5kFNSRW8FeKdNHQ9jjZeKwsQ8DYrQXJ2cAYnJpYSUbud9iXxq4TmM8K2brqUCa4TsMbQ9wBoxpJR3WwWtMQTTGF4",
  "key14": "Fcjd1YfdL4M38ri4P4uMBau8hPQLP4d9tD72hS87FALrDt6pTuc8BiTJKUCUD3zqK6M6dD2Jk7m6wBYqpGyarUj",
  "key15": "3pJ5bEHv6BdF2GaJsK3x3Q1YxV9WPRRt5o2tY5SV2v2FvC7cdCMsaiA6vgwj7BgJYk9whXhdFVbN3ki9C3NFWm9A",
  "key16": "4PNQFSNg4QGG8WzE2okJrLwN6kAAvbjQ8gnRiFDY68Jj6Fk6A6wDDbxT3ooJS5AUb7QEHCXC2URUvUnKLU8WCZVk",
  "key17": "4F93Kz4mQYet5bwgjZ69GKwwvByk8XoHvD3hmHHMBnzr67FbqTSsJGUUDPFFkjZ6HvsUQjfQp7w8YLx1JTFrFQKd",
  "key18": "5LxE1U8roBpsQjMY3RQXjaM8sHxKWUgdYFt4UjaGzyw3UBrAV8GdWJape2GqSH48J1atfbG7gFuwS4XdzUxHczLu",
  "key19": "449A8K8P2nA3d9waAzNQ79JcfDA9z1WaNwXP65cxbbvDrwVqfFz1pViGeFQamfHNXtBiyYhVs8NUHzFx1vcqJLMp",
  "key20": "3dQVkXh5PuAuAFeHsskqFVg3EDLTdiMg4gU1v4u3goEz6jD1AjFqwFhzAePYWkUn1BMb9ZuJCyYFbXYKzjaGSyHH",
  "key21": "sjoFukoKNMGZAmEUkqv7akxwpzPUWqfs8ReK3kLoX9VpYwZxPEQ9YT9ETMbe49WCfEK83hh1mA72XMhNvdz6wAp",
  "key22": "3fxrcxhNByiVyGn1gziAMaR9gKr16uR3MDT8yHseKXpTep3o5j1nibEJMLRQ8vmbLwP5PFsrhQR7YuBNLC4KjxeX",
  "key23": "5fkRf37FWyx5Lg8mqXBnuEYQfBhxajZFnEXrN3KfQqCBvk7Dng6zxUNgQoYNkveQCjm9ews6Yhx6nVwikjQhAKzF",
  "key24": "32Y6ZPUsXMSSJn5utDMokzRbKFxsfLJR8zS6sFHKzBjVXva3WbZuVWphrS3zh8TTC6wY2tKK8Zyy9TJM7ZFaKyZP",
  "key25": "2S3ZDGvYcU99BqZX7NeGELBGoprXuC4DYhwF5B8KzqnWr7TePsfgsST2rmQqy5cJtbKUjpRL6xfnNfAsgsoR8Q3z",
  "key26": "4ZrXvnEKr5WhvBEzzjrhmGu3JLZoX165yNnBK71bX8bDitHmjk8bdny9ggFvGJt7F6r5ukjAxtt8znmtFUMczmaJ",
  "key27": "25t7k6uSZ12riL9xqnbbjU9QPAU3MruKuoAhSeoh5tVQkHgw7pG34Yf6PK4WmuKt1hvJeSR8T3oFyJX58Rgnj8aA",
  "key28": "5up6waznnPWbstiBjFmcLeBG1Ejkf2oa7VTcdXHvf2bpZxR3JdmsED84CvQfrLXpyu9LzCexHQqQcdVkYdyrjrke",
  "key29": "41b41LouW2FwJiD9nxGyo8oDjS7AMtbqGjsULTGV4MABqdWJ295QA3vx9Lfkvicc2px8GySNFpxWAw87v5CQLF7X"
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
