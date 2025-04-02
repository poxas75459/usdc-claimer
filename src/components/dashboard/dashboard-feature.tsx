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
    "5xDSEUciACTSt4PBHuaajjEAjJdaQ7LRr1L9eLZCoypAwLj2ShqZF2HQ62ZnAXMQ1kAA5MAgTkYYxaxjWrFygUHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1PxKsdvWvvr3RqyvzUMsr7JyQFKrtX69vVUA5FRBygsHSm6QWt1BeTi7zPDu48h84h7LzyB9Wsf2ys5Z4hD952",
  "key1": "2ktJSCTWjasrrYB8Vi83XiaamtineFVNV81iiCSnNGE9ZfXqWihzoN5Gp33JjqK7CxFuRvZY83FYiskkXBUEofj5",
  "key2": "4T823923QNUe1uwHBNm3vSm41n1Q9DmNCG2HEY6YNydMwQJb3EtCoZjNbXeysdKgUyDbswm6Mcg9oFqCXnAnHjjZ",
  "key3": "3uPo8XPGHQtoNkAPHpPGUDqdxmCfjxAwDCL8erfzW1qNABeppe2SKK91FgTpSiGmUWDRTRGbppPwkNQH8zafop2v",
  "key4": "DrLG3fJe6hHNjwDCnjio46XNViThgnGTXJp8ynhnRy4QrQMj52GX4V1fXm8xXRwBP4TYhyVaEAYCkBysdrMvZri",
  "key5": "631kpghRTSKGwmhuuXf11hQy3QzJDpo8NQk7cSBeLes7qAUePBqVtb4Rk4NpA6q78FCKA7YKcinwb8QYeA7W7rdN",
  "key6": "4pAyN7UDmst2JFrgQ2rn3j41HaS3AadPYHM4TQb3HARmG2zhN8qz9SumWi5K8eEmgcVTfeN8wphAscDPKX7u5UFo",
  "key7": "4mMXMpTr5ZQMs5sYDKTvx58qEeZh19WD5pX7D1ta7c47N5Tn8m5HfAhYHXQn9RKyhgCaFeC67kuz6ULbH41B1DUm",
  "key8": "41S9f9RENnS7Hn4KXZAGUjw44unySR6P2Du9aAzKoC18sSfiH1hWpB8BycJYCPAf8jT5WvGUuXTzm2fLfncQ2WYJ",
  "key9": "3az6jUsG3vkgLGyFQDWRse72cUoj8MhepYt6ZTehzUUkP3b3Vg6ppHxmQfUutdhToMeTQNcAAdUaLX9XBJn8Hcsu",
  "key10": "5ounWNwe9d8kzFmJ2srKoYxLf9F3E9S1S2dCH4uWU1tdpwi6egRM33pajjM9qi827EFniawn4fqFmjmgHHNF8Xeb",
  "key11": "Jad8QsBYMy4wWBcqf4KLXbG3sr9MjqX9nxR9tgLzz8HiTLSSbVebLD4vqNCbiGC4GQQPJiLJij7pQXCZWjKHZ7F",
  "key12": "27CRkZsrH6KJRX1ib2BDk9JcR6vfCZ75TqP1vrpshc4vYDvX9uYwqjdgDYDBrLN4NzeUi3duqwLrxSpwAE83fLyN",
  "key13": "4ocFD6ydGWkPHREGzo8LcZG1X344PXL46CMZipSNbYwHptg5bqU6T8wX1nbKLbxvoFEYmU2oUjWMBF1bzHhaE3z9",
  "key14": "3cmTVX5GgE8izJcVr637c6kcjLX7EEwWTCAZt1kJrjPujBJDQ3toGqdeyE4QcZzktxdfrPEUELJXtK71soJA4pis",
  "key15": "hmgcohvJkGmqaGXCCN5o3gfK4PGeDTkLr5m9VCzwYLVKbp8Z41r2q6ggeiKYatqo3yopEE9B8GfL8So9CBU53Xk",
  "key16": "4zvtdjinYGUJCq8aMGYWoXo8BaKt5ZWEUZsPncqwuU5u43D8bB1D3fsWrFECqnBUB5mhQvkymEseZ1UZSm4jSwAA",
  "key17": "5BECbt3ttwzedfLGZfUc4oYegd9BMJfQh8SrmLcBYU3W1TGwafqDvHw6dPGBm3uzPvZB8ySL9k6hGXGNqKFWGD33",
  "key18": "3s89H81kvuaWUdLVjwnihxWv937tqGLuvYBMpAgFKgzCkM5bGTdkEra2RdYHFJbk743tjbR46vQJXPnGiycSHMr6",
  "key19": "P9vRjt9jA4EPiqNV6mzK1kHzVY8ugC9ZqrK5kxEZCkLdjGEkafiKES6s9Req92MyztjKMTbk2qZd5WawrpohUJj",
  "key20": "62tdv9oW8u87A5FcviByjRcJ637QoWRHdn4kXZLhPpsi9TupTrmR5vV27WBKievkgiCinhFVCafsBz8MPbucrfBf",
  "key21": "5c2Hu7TLjp4qidnwY32h19HikjswkWugi3zrajTTEo3bjbVUy14GPKERxcWfkoGuN7SpSqR5azZjWhXZaYjUe1a3",
  "key22": "4cbua7KTkUdWChUdMYVo8c3BkrSe3DDSXedCufVMrgbfCLFnkX5zCgmAL5kuRpRzUSnPjPy6UDGV1Z61Q93a29SV",
  "key23": "2FE6DZrkDP24vmcm4XPAhQAy5DEyoWF292iW6zR5UvQ6xzMACVqRhYp3pa2wruMn5PvZUoviz3sX9yUnKZjrHYNb",
  "key24": "2dTnjxuP3uULe9ofRBGSLSQxGQykJ78z83Fsu7AyLRbKLdmu5qM7dBqBziwx8eS8tVzV5GJ1rp1Ev8aPvSUb1tm2",
  "key25": "3dYgEqwXTeSodiNKxhon4S9aZTiGJVVrvPb2yjGKQRBKYnZds6gimhd4ffZoTNdUb8g8qDo2aZHwFYcxSe5iPbUS",
  "key26": "3TkJvb3bA5hfSBYoxeph69dztVtZwWLAGX6g2Gcr2zapgzju4PJNTQYnpTPh89D7WpbGLDEnHWigpUHYsM1PrQBU",
  "key27": "5AKhKQ1amHbr3V9dykyqnS9WxfdjtRcm7F3vaZ7hnEMrXbcfG3puAiN7hXNHnopwbpMDnqyDaichjbiL65QMx1rw",
  "key28": "61eEJS5FzYKL33PPFhAR6sU7gL2U711yMNK4NPzPiWHGL8zDw5aDuLMSmpJzWVNiMD2h9tcqJQLE261j4MfpyqYK",
  "key29": "ASBW7comySKUYybDmFgpigxNMPHT4zjEyRPFUcwUCHrHffiL6NDerWENpPzbfLeYC1gb8VYiY2941Ug3QZTBqQG",
  "key30": "499kYHZoRwfsuqqVf2qfZNpppmdqc3Yeo4W9koUH4HywFFBsr6VwSoKvyv3XhTRG3utB7D6V6YmsuSyCqo3Rj5in",
  "key31": "3bibafX6HKys3CU6JhSYQ5BMZ974eiF2v3TbA7HcoEFY3fur7NA6ipDDK4W2io9WgqbwAfXsBR76LVV5A18w6uhX",
  "key32": "2oJwfDs6JJKxEUCA43J32LWAaDqSr8tak5jjFtukK6BvTnPzyxwjgBZJ17op7FAGP6eB3BzVkyqqCh4MG2AKgnTF",
  "key33": "5feZvy5JFUdZNhgwX9yRGYTKWQNGi3F3CZbntFTWvoReTZETi862T87HTZGNGCyszbVrLaS8h8eAKynGYTKnGB2d",
  "key34": "4JiKS29TwDyYfeWVZgC4F5dtyn6TEEZzkeCb7b4xg3EdWQWp4vtUGqGeyQ6b4iz7vsAKsqgW3RGhwJH3aMQs5LUJ",
  "key35": "2CKmtwK7gt72T9Wmweuxa7di8XLKtrqaM4EY6acuLBZYh23DPEw1KABSzv3MqFYVnrKg8BES5TxTwfAFV7w8sv4D",
  "key36": "2nSVyncnqzXr85d4u4srNTexrhprQUEezBsecYvaShc7tbNnDoMiGwRoFXGPo3jAMgZbc8Ca3xkwKvuVw8x5Krhe"
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
