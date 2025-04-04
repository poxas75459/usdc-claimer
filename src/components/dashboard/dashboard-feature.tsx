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
    "su3t3ta9WnsuNUeitYFEXJ4kEQYABYZR7dSG2A7KvWzp6dSLDMynE8sq4APo1TgLk9AwRinkwQZux7co7ZCVjuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j5orVivpBcZB2NeoiDQpdXhSgtq34JQLvuydt39sVgf62frnWMKAnQbPiyqRTsojXXqf32aMeMFDEJ9MgfAXjBa",
  "key1": "2nF8XUkQoqsHsaoQzNjo8A2zENFTgneZ2MUnkpFpN67qBFtKX9fzbLMF18qjDL85R77jR8RyygxSLz8ZGkLuPZSH",
  "key2": "3C9mYTtP52pNEmt6tH1FYVN3xCMJjy2zoUAvjFBQpircEDPiXrCcPTScDgBkZVXZFFcCjkrZqxS7goe5W9jb5F1j",
  "key3": "4qyQjkuwUUYLUv8mUGwK2aX3S5xb4STkzbogkxJn3hgxDwSVvmNdtj471bvxtNZYg1yKw9QskSke5aZtjXTAGyTd",
  "key4": "3G5wqqLAUYvWKVQ6xsC8HrA5AbZSMatv5LddUdjbqnUFGsdUJrLY9Ds7YzKsDAN2fxiZgENFFcNoZBwbYaF1jLrn",
  "key5": "4kvorvYkfBLbmBtVk9Rn2kyk385PuLGuDDwBa85h45tY7sg95Lz6Jox7xv497mn8Hpud1dDJD4ADm6uKeje4sz1p",
  "key6": "44DrJSTt2de4z1agcfh6vTbnukxGfSB8GXm8mKvxvTJMYsvoqs7GUTwgUz3xw7svtYnnxTHW8pUSs36vJra3TF8",
  "key7": "4wbUFkThc3QnEF86ctRPsJGantVdJwDNAfYtbcx57AuqHjLhUqNbrZGF9UDog56GoFjMXjqSG1hxpDPqkvBr6HfA",
  "key8": "5tKYcFavv6UJqVneTzGFwRcA71GkCSmsWHPZsV8Ce746DCxKVwFzudU59MWLk1WdWBoJLChL3WDbM9zYabBoDWp6",
  "key9": "2FVw9ytUbxJzbv2m3Q574UhMEYKNh7vaEbTaT79Sx1qbG82a3cwywf8AGFe6GTf58KZFwabKaHtKBkHZi11QgFq1",
  "key10": "58uznb46EdeukQ5aGJbH8bJTZhUfLReLb4wU1oK6WSnFQ8TEYzCjVXyvdRK1ydGXXugpuyNrJsiGLw93kLGGjNM4",
  "key11": "4Lx81uzteEQjp7zYCHr22ix56vATZwqSe4uWJu7ozWNFdexfhGE87hidFJ1T8Qiur6Q3GuM2m84Lrwn34wiJknMg",
  "key12": "2KihmMSwc4ji6PmLLv712X499eJXk3oZgUQUmoeZFpRzo4PDHoCXcPqYuY67X77zeTiNdwpZvXxntDk5UP5DCSxU",
  "key13": "2Hqn5XMFAa5dCL3stkB4yrMeLNVjbsnv6j9KVv3nRzZfabsQdTNfFUDiTGtxCFPd6MnEoJ5uiTehyqscd8YDqnTm",
  "key14": "3DEjhyp14dc9DrJ6DawvKLitLjTynvqd6nd3HZh1uwjFgbpWNmzrbKW1w8fg1uSQsV77Ytik2MzKgGT6ZzVWyCuD",
  "key15": "4xQvZ41CUaaHGQAgEskbPZkS42Ru74xjoQMNkgpJAqmCP8VmUwGDsCGwoPJzCXJYZaPwvQ37bbYX6aHLSQpEqMZU",
  "key16": "5PdKqGQEZt33H4MMu8xrviwEKTQRWNXx72oxjVLpc36DygmX5QBEerhnmfTaaKeV6vbqmAmsmJmpCLyFkcSnRG6F",
  "key17": "4BNWMXfschkCQJZ7yHELtTAWFpmd3Vc9gJDb9hb7pCLrcGQnyNoxUdFC7GGijhnzHmQzrtC6SsYTzXx1WwCeNn4S",
  "key18": "45JjGtaDHnsFSCgsKkACoTiEu8pyawQ1UwZXvHW2z87DeanVWh8KsLY4zZe5c5BfTwC1op5M5NLeUJ4PyMVnmo4B",
  "key19": "5uNVeY2YAeebKtLw6jDegJdgaRJznMQVoeATLLVfeD9jKMq3r3F91wuHanxVJZPXSSFE2KPXaCBoDqUkSnKf3gHE",
  "key20": "51qCXEwxavZy98TV8UuW6wpBAUzb8cPQeF1Xf8HjSMnZcGi4yu7hY9ze7ujfaDALRaCj8KY2KaxxNbW71m29LqF4",
  "key21": "3JRwECVSXeAh3kaJPLj2vQhmGa6kVKXvDzv7yrdpcYas2SSCzpEyrGgiVciKQeBZtwmDGSdcsJFMeu3NbeeGyYXT",
  "key22": "yWNdpPRu8eqVoL2Cpmg5emeRek1oMUjwVjmYKhjunEQ1noD7dD2mXfhArq5aAz7U6Nqk3Uoba29WBMGiRZftXC2",
  "key23": "5ZZXGXHr5YYxboY7N2ujV72WivqLEVjZeCZ9n7qaS7Jt7ZRa41V1JWS9uywRB8Hvm6cmS4AwnLKHQVy3X2sptERm",
  "key24": "5uGu2TqwyhcXXtNWpToGVpjqVtv2SyQBpS9Swavr3bUV3S3gXvNbMMoSVvyUo59d6nsACEBPksdCHtQVdBUxfhmb",
  "key25": "4ka7QDpSDWabr9qYP7s9uuN246NXYkn7utFiBHzJxgwEFvZ6rZxhmFi7aLma57pE7fjstAdUt4xsJ6Wf3bvWzax",
  "key26": "4jLJwRpcEGw3rX33Lrt2mpt1HeKWEmYdpfHs4AEvG38pcCivnGmMAt5ddRghxHxKdpjEJa1XaHdKsa8f4u92x27g",
  "key27": "2Yfmt4w4qVYvExAynMrc2wCkgSjdqLV4pLqvcZ7SJjqp4U7AbxSkSiVYeDmJACtHQTd3p5cFjf2ouwVZ8Lq9o4xU",
  "key28": "41DAzfUwvdCaxiv6AMix99rWwXNmQiMHdvjDbbtV2FjMFiuyb1pG6tkEstrjT5S6Bzzn3nzXrQg6N3vyAwNcPkgh",
  "key29": "3rG43DTpdK34BYn6TDbtnUq6MjKiUhvmAaP4rhQ3VR4nphU6nPK37gmJrTCbUVkX7DqZhtxpBzAjPxNS5VmJCy8M"
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
