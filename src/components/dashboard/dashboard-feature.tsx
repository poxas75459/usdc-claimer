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
    "56J85NGeXdV5ScM3U4z8s9sVDEx74ngqFf2c9m3LvLCDD3kMwhUFud4DNGJA39qqc83m2jpC6niD7KGP8dSHHaz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61NmF6493ELoixddeGeddE9EWconB9C8wrgto3ihV7Mh4PCJRAHdjkJTrSiJ5gAi2YbF2Jm7WwdP5DMQi9dst5jN",
  "key1": "5A1QkbEH67c4CEKq6JGhMDBiNvssEvjt6W9CifSzvtyvov4PkRJbzZeDEDTLcvQvZx8KJEHe1TAT3JJYrbredtDe",
  "key2": "PB1KFpuA1bH2m3aoydQP8WNNEZsV2eZjyKJBc3oVuPX49D4dn5zMdV7HuZUJjX9wauyG8ZwTgJcwttux9qGVj7t",
  "key3": "1jE7XEKLt6irMjXZ6AjCVQNEka7tAyM1K24NYmxUvCUfRiGgsJeK8ZQtHteq6rjwYkgESBHSPPGfw2y4pPYb4TV",
  "key4": "3fUHxjdYJKCMua3NxfgqpVNAEG72Kd9PW4YdYZqmmDuu3JtJntQoc8fgdvC3z9vkB1UhMLA5pxC9wmrDcvbhhgDu",
  "key5": "21QeMGnHUzMLyDynGwXX4TxoWJYNSNxuPzwumpwxJspZE5HorEagKEF2Zr5wqAgpKVwsEWn6GkGEE7pNxdMiFJvp",
  "key6": "2X3FQJXMJ2fNWy7LSs6CpMsGe3BWFE8rsyaeRGuy6oVUesQhbsMiW3ZWfathWu8edRVTt1TG6kRuwK69Jfb3YiSt",
  "key7": "2XkVoqDJTNN9EF5j5busYgYrgoDooPSWoSPDTr1Kw4D279ipzBo3KpW6A2AGKb75UQYf9EqdMTtR9mvjaamrh6LD",
  "key8": "29phtFwazBTnUQcme5gKD7u9hi8AjNhzKEK7nVugni1wchai2aMNGBoD6ZcEdJxG6kyM9baRsQpBFWDJCLiBMhc8",
  "key9": "2V2mzQTJ6aPKM3MHzVnPaWVPyBuHK5WXvp2LzgrfpQgsfASprfURBVcvUN7qrNtYez4XBCCH74iUrHx4foCcexH",
  "key10": "4SLsi2Hgg764JkbC2NRKKo3esxeJ5sAEVGukxGBLHfJ5aw6HXXSDoxV5SUfJJvAqEf7c7hghLFQK4tZ2R5neCcG4",
  "key11": "5k2SKm6mVpG8CoDgUjfYMjBsQZDfjpoKtQ6d3aJ3idz2p89tNKucNjtgALJepxDCNPMRCzVXZ4gPk9tEG8Hxia6t",
  "key12": "5M7cSoHLnmiAHosNPB3usazRN7m3tAfAdbb977GpAxdP3SYbNM1ZudraJp7eeHgyY8pi12StDxn7xUhH74JLdvXf",
  "key13": "yMRXu4pVEj4gobkTyqcfa9QF6C9YcCh5pdKy7peSop4dWk5jrefaA3s27whuB695KJmB9S6PAxfwcaejzXkfXsB",
  "key14": "8SJgMzkXnartAkMjfEKhhNN8EjrV1PiGpqDc9eLR68LdpCBMTqcKL1vHv83JX7PFNnSaQH4EddxovyvHX3QsxrT",
  "key15": "4BFLv8nHjJXgWfYGVoN1qhkxzwkmiKZNYFF9wCmyxufCJbzTGfPQBj1p52TaRCfSiXZseMPKn8XnoDGaGN1oAdyn",
  "key16": "32UYd3V4H55f956aRLhP8JWmvw455NLDWfzaemr6sLuPPDHLAVa6YoPEwmtEWAA9NTbVncmAsijAm8ZJETkvGyzD",
  "key17": "29U1W396SZnqTVdDWwW935mZeps6XFTtGUG8Vc6yr1ycF4KX6ioaUgzyLSwaoA3zHtkmwpPoSfBDMGoUdGU2Csuy",
  "key18": "5gH6TdAh51BTcox9hEnmRvHTi7aZLQ6eQPVykDZj55wNGJENnYARcUrfbG5tyrBt3HZFBGDLsP7Lnwb4UEndEwNQ",
  "key19": "64AYdssBNfVDF9z4Ksyc9PumX9JGjfJvYZHQLUqYD9AxUhDcjNPBwMWVCfWQav8XGVYyGGgA748jcTbNUXihy8Uw",
  "key20": "5uJMVCU8UUwo8R3R8vQGccf7jbZDbjakQ9qpXJKMzCzYhWrNRcDn6okR79eScvh8siuVqxARC39YyubwvXtuWkG5",
  "key21": "3nVB1DX2cS1JQ9owEiqHhe4Mjh4cyL4LGpT9Uby33vRyvz8xhvUB86w2GZfGNC1aWzP5iC5CdWkFBQbhXAQ6m1Ez",
  "key22": "2jsW8yvh3CdZWFg1RvLXfNGLHS23GdQ6E2E8dcjiyGqLvUFLdXhGYj3bCvC1HLrLFtkdNb7DxjrBYBr6eHErUU15",
  "key23": "MyALdnL7baGCDdj3DRPKUaak73JS6BAZ3U4MUWbFscpUXMHXRr6MpVngiydaoAiSUXtcRaCQV8o27fNbtdMhK1S",
  "key24": "2DvbpjSu3bnvyZT9knqsNQGJbLtE2A8xDWvoKg4gU3seqV91P9Z3GDRJjZedPTNpZ2vEtx6n7zZmQkjzeJgiQptY",
  "key25": "3erNm64ZqE4qAP3pgNVABJJM5xD19spzB7xWwjpQWN5PcLphXE3jrAgf8DbMjBpKsXV5R9cWLfzdMMxWCBwVYsTL",
  "key26": "61j4xFkMD2hJwKvV5gazo4bgu2MqPERWmS9a2zL6QAnJKMvzX3UHC8T3gyK8fc2iJ3RBWHNfHsXr6nXRU26TPWWv"
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
