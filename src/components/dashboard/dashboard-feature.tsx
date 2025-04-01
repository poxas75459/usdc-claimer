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
    "M9DZFht5yuGrdaidLsArH3ppkfZdY5RWENE5ZiQCmhcwCSxth2DXjmz3Nd2U989G5uiGU11CszNA6zWc1R1UxQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bujQjRcXWdqhj4S51fQcKk9EqsSJPUWSR1ze3qjZEvKVETDjyKFtHLXEwhcW8Cve48LPLuSYL5y4un3zeuqm64B",
  "key1": "mANX9moW4BR1xNeXPibgZEmNbnas5FnCRpi6t2gcqg9jiMnf4UyJCGmuwWGH7uG7GTPtm99HShGL85u17TiKQHN",
  "key2": "5PqnU5dn5vTyftG2nMr3sNNt2fG7RXtWxN87Xy1PoA5xLkdpdq929NzHnwhgtzSJMfpfHJU38DrPwAEu5aE2g5wi",
  "key3": "3AKiZch3qZ5YJkyVLkg94o625cXamdXhT6YLTEayN32UHqmbNuVQpvE8TMMvbzt2vX4J5qQtZWyDirEMSFovy9bu",
  "key4": "5KEcWDtq6imfgV6vVpSuEgHVduUCGh8E5bFLuaLt7xjGQCwkAJEuQh9HXcmjA85LzeKZ71Cm6f7vV9aVdFvnHzkd",
  "key5": "4637Vqozo1avD7EfNDFtSayJCpQVqFnPHnD968PKYXhULDaAB9qnsVY4XHHtpiVUwX7KhKUQCvdzTNumiT6BFhRr",
  "key6": "5rBh79GFpP5FM613Th9RCupwgTG4ZAAzDtPL3P4HncuhmthSjxHBeTWV4FVV6hrds246t82DHGwwawR5kDG7BWDr",
  "key7": "446wKLcqwuJxTFhkR65Km6y7iWYYo9KNCyaZYMTDpjtcBohhkDWgfhK4j4ieM1f8Z1TjH6iP4CwGzgb8DBRYaEsi",
  "key8": "iaByhFQKhoc7SWuymVfPPYDv65VFw6tTfQvwFrxWnKGh3RFp1tdYi6GaLivdbzeMYZhcu3ZQAiX3vUYFoXscztS",
  "key9": "4onuReTDPcMjmDq5Lc8TopGTkN8PbC1HxD45iYGvTFtz7rw4ycAPQQYkpry7DJL6npz7EpDNPT7aduE2LSwCT1Uq",
  "key10": "2c7UAzTrifHsWF1Z9rtRAPEQXGQAAcPQrrtvryqjuEhy2JuALC5ERn3EBC7dQU1LfmWZ4odxkxmV8jgtzucoEDhE",
  "key11": "3YNHpsoqFL3Tx6PDdKRrNPjxSRpC2CpH9cSj5XCAForBTgmgsDfkLXbnck28Z4bPHGtfirQcucwqNJ55vmVdCaas",
  "key12": "2WyaBEKnoaiQPoQRL1eJprFbRJ4fMhUE4rCCggXe34FTxSGGe9yPUmCwXCFRG8zQoU1iG3R5R5N53x1mtRnZ4JSP",
  "key13": "5MBoDPoVSgKTF7TSai8NpgjT9AH2fKRJL3EDysPxhPSQhvL4GwrgtEYEVMW2PecwAByXVqYvTAntMv7buxBzf5MU",
  "key14": "3VFNcRM5apgwzgy8smj76y5ZDvMx46L8yLK7fhLMoBqUna1tE1TULTW6WRi8GJCDg6An3cchUXWMvbh4EMGaysgS",
  "key15": "3bUMUxn9jZrktxGBCsPo1gseMFC5yuMYEMyoGAnsNeM9zm7Ake6o2ixcB6aCecH5DtFffVMrJnGnsqzYs33zyejq",
  "key16": "49ToD6ruVeJVFYcLaxs84ryuEoYX8DKTprVUdD7u8QYRAdZNaeebiYUfqyJ2zgNNw5VxxtEtw8GQTkm7buSebGHf",
  "key17": "29AzftigVVcUp9spufimkKCr8twrtWiVk8gCxh2g5TxVvW53sMbRvSVZB4XqZDCR3vd25tqmLZHH7wAPnmKhPNCs",
  "key18": "5X7rqDnT1qewvRiZK2Dc3pxZCn7xTAd47Rp5E4c714n8qmh29WdGE8tEYVM5S54BHzLG6QGLfRf7PStcPeaiM4Q3",
  "key19": "5sVC1zB7PNG14EJa5DFrLPh8Y2PnCGEX9ckgPfmaGLVw8hwFYF84DbEKyst9YDiBJVPWhqo9CCrLhEskjRB7F99B",
  "key20": "3EtEf2DeSgj5gxTsfW5sKa2JS3EXLNTUWpZqUGXjstwmNkkKaMBwjxTbmsmE7WWpA4pQ9s4uBwXjNbBarg6GX69H",
  "key21": "4Eo52miYNmdnScK8a6ZZxz3BkA4q1AcnhxWHbgC5GEkhemYQ72YLSei5ktnQwZMxvsPxaoH2Qn5JUCwMeHVJttw9",
  "key22": "3SKYuXUrCAFgjNVYmDszQrTP4mN8owgJuGSVhAnaUoFVoC6uCAvszkHcQ3waQjJEuK11aApAZ5tyzwYwwaMr9nbY",
  "key23": "3nZ1PSYGmWgj95iMZvd2KaqrazGnivfZPYRGrcHjNi9vHj5Bkftxvmw6HYWuG8Z13gBxD4ePBdYdSxdgJohGiif1",
  "key24": "4Pc3dG11i4bFpBZqSgaETmmWCkx6NdyZzA3RGjfkXmfYami77EZcAHAaa3xeKwCeudktBUcoerEFZspJmobLZFyn",
  "key25": "RG2x8FWWbXwpAWmKxTLQ1WPXvmRNwtbbh3Z7LPT5Sq7xmLqZ4FTwKUMWqFGBDhcgVhgd22kivzxK7vXNr1BfvEm",
  "key26": "5JUK8DEmy45cpMToUfxujPuvtwyCfruCYWj5FPhgBC8eQ9GF7sXErhkLLSsAmSDhFDeP43m2HhJXBunEuk1Hqm9x",
  "key27": "2jXriyAhdLBx8btEch1MrDESzBRGAm5yfQtek9kq7bhcJAkULvQFfUg5CCd4tBFNdfF5pmNUykE1SSQ8AndX6Yx9",
  "key28": "2iQKSfD9M5yTsujgTo2xJXYhjEWLpp9T7BSGptgMixsQg7hLfZAhFYxRfTJoicW59a89mLwc8RFb3DZWkeLHsFiD",
  "key29": "2wZqvp5NS3jfZbwAnfyYhCe7vtzbVQvdu9SdcwtaY9pZSfW41GSLiwKrqGkJmXqbu6Xq5P6S1wm3CqQp7Q7wdJ14",
  "key30": "3YwcYc3MCimeEUZuMa3u7joNp7EEfURPUB4RnSFKeTvafYLj1NdzghqnydspMgmkS5uJsaBcJmsnSmbWBaTu3mAQ",
  "key31": "65wxiSfkKbu3h8yaKndnj3UBUKqQZA5FcUgnFdxRsGVmbJRXr6SQHjynYWyooaE88aDkWgR1doD4ddLEMfUsvq49"
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
