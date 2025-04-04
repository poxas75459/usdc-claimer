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
    "m3RfEFL2E4BVs5s8KNzwYU3FyiWELA9W4BfCLywhzrULFqj4wNit4GsbvZW5J67KS2wPVdJSbp7QY8XUFdxCdsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pchLeiHyWLb5N4h9FArn14LyKKKuS1Hxej7rWM8g7vsNxTdgzT6ua19oMMAWnRj7AbTeRY22F3CbzTdfm7zB5XR",
  "key1": "3hEFxugnV1nkn3m46Syh43DgNyv5pRwQsbbvKQfwbeugtzx77efVCqqL5VisMGoJ8yyFroB3c8smp8NoHshwnTNX",
  "key2": "5fJgvjwaqzPHyuhy4d7BUnGSZoJW9aLNi6JExEDfEctoy56tEwfqabvQH6j3PxpRTpUGiQobjkKKPL3VK23GFH9u",
  "key3": "3KchaPZRzRXq8macBcuuPKZBFrsNqgjd19QBisbEL4WAfW2PeWpi5yVVczRpCmxN9QrkHuTpAS4ursB59oLybfk5",
  "key4": "4dyDBCDMJCJw4bQqj3UFKygRu3183Vb1AcnfrnsWRNfeMxAKVup4f5x7TxbJGAVD28gdTpjV3X4mQKtgfJwcsiDQ",
  "key5": "5dapsCaB3cF6rhAoypez7A7GeenqeAkJKBS5S8qQqbHPTxMifWnwwtSuXeb65YJDULeHdPDKfZF1kJB6iPpToAz2",
  "key6": "3KTnK5R4tKB9mZXwhJPc7kiTN8sD2XTfotSi2oNExpgaYkuBabpQ2Bc8ZAoatHEWBzdCHZ5sV2PgxXY32hHfevJ1",
  "key7": "57t8vMhe3fMPun7wyYyxW3xfaPmdAGpCouFBYHugboNFy2txwTKAGXVP7ehp3aX3DYFP1v3Z5mAgp55BUmxTUyZF",
  "key8": "2Gsi4noYMRXd2x94fo7wqDnYjAhQK5sXQAJDGYNV8abpFdZfJtbv74Mo8dXqZG7A8JpJrEeRWR9TYVGJzDkHwCJb",
  "key9": "4oKR8817q983QB4GSH5V8c32r9EnvnfYwa16cbsro8gNMJ73qjoGenw8dmBHANLHQc9kiDTkctqV4ggG5VKgdS4k",
  "key10": "aRyLjkSBRvi4GYGqohiPnUTd88uC8WSFUfsDKJpRBNjjed2Uo6CeoAhJgMByi3hVySMegtkRX7EGYtRc1xt2VPT",
  "key11": "2uVb988QxN2FHv1dV42MqRtpnRPVtiXijDDxzCLjgCgiGoUg5mQhGBiUU83z25QYgwdKfgk7bnESwDqMwedX49z",
  "key12": "2xXeSthRRPEZE6jBjXfghZS7AEj2BXPC1LhNGwgD3DxQEseB4yGyMXhtSg8hHmniezMQ3x5vKpu56QyNrdZxiSSe",
  "key13": "WhWkGeiPZE6QxHxcacguSBbtc9NTMt3XdKn8hzfmZU5Gxs4Z2vJQKupu2SmBs29rcznQEwET5QQCg1WgisMzck4",
  "key14": "4VAYDT5sTMGtXWHZLYJ19nxsNABr1pko4Cv4mYexgiXcK6WA3suMgoL2bS1j53LxNsBpLBQh1rphucNQ2j3HDsiz",
  "key15": "5kR9Z4gUbMubGtpdUpJkQJjd1f1sD3g7uYyy6EhvdhFSTzozrNYqQnWNgQKJM3ew7TALZiceHKCATNwSL392X6za",
  "key16": "MBbfVaCLFahsfnwWR7fGWkge2LS8NjzjvCJvSw66AgsmMHYBYMh3nKmkxsQA7fD8b5UJMPkhZqqQrotchVqkTWV",
  "key17": "32EYoY1xEE87iHNjjas5yDN6LfiBA37B2BfrYjzbjCq12NcBnXYekPpGQH7XXZkSkF1fB1AERivbE4jW1Um7KdVX",
  "key18": "ecM52U5Z3pKf2cnEzKwW9nqiUWef4hVBFwHy91FePUkwZ26y6cZswQhoPXWagQHn7PNXYQEJjxUeauhYy3hqTCn",
  "key19": "4qXDgcy6Vg5a9z6AsEZ32TjDAW7VwnmNuTk5JezoD9gzAtkacBiXzjeEdnPoEarWHWXBcY54cNGXHbKKz17JUsvs",
  "key20": "4SC1KZSSLBM7msGKzZeXQQDC9VbjLPqrr2GBPJqBgPmE6CY8LxaUM3N8x7BsVCTkg4q2p8WmWd1fq4JDWrtGxw7C",
  "key21": "4Swi1DqeY65z2ddYKuPxkkWfiZCAjY7ZsrHjdmuWRfNTpbpbjk2koD8iu6Eaz5stXAo6dxgmadQvj6UaJesrLhhL",
  "key22": "vPpsATcpM59rpYnzkBxqiHtvmQshMQWVC3ZMYvdpU4i7mgnFpUnMunaaJpWvUcuMKA8RjPwsaWv24XuTdwucRji",
  "key23": "2v8gAWV4jCQZhgqG6rXzjctZLKdr6pzn4g8LEsMyffTrb9j3Y9hV6Ht5pJPWDvGfHH7zGmSeQwxFTqmbHG5yzguB",
  "key24": "mrTde1faJYNg9FNjToMUTZ38Szk3DfaKJAtbRGUkArcbk5rdajoj1zcLd4og5GQxjtf4kPwGrahqQQkSCnYmrcp",
  "key25": "2joPBQbhWjdMUBSQgHyQKtG6D97whBRmuSYEAJV98mvazAoPSe6xiHhNY61Sr96WE1bNuwrPcKaqgNNMeNUzKZmd",
  "key26": "2NAm6AGgj37P5GKBewxnqeXs2q17YsRoM7sUMCrkm31inapt1jfdnEQo9jsPRpmBpftXYx56bjP1dsbHnkqWpw8v",
  "key27": "456bRZpPtp8PXokoBKioWoSb9RQW7M1Xt68QL55goyjZm1zoEPEcU7wyfsan3c9Ym6vdCXTPcFsuoETEk5uvc9Cu"
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
