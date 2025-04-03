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
    "34j4DWiADZpjKidh9kgYsytktPuKaxzSkZiMD3LRo8mt7MYEemHf7ZSqPchFNmjKcwjkgLKrBmNQpy2tWYrtCJnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LYEG2miwXb3xUSZGyPEYZzsXroFPWJ9FNAhQDxoLZ1bcDkgM9PQkCXPYK4EZzthfCERfLykoPZmRzM2TN48oa78",
  "key1": "2rrvZLRj1vQbuBhppUXj6p1VKWkkWcJ5nSBYNaD1uZ4B14TUL97nTNxV9NCJqCC1uKAC4a6wCS9iukBsnN4AjfaS",
  "key2": "3TB5g11gWJMvSrgGkzE2XBp9WUxeYGXTVW7S8wRjLSEG8x69FU8MLbNo5y4XXedru57pCAfGEPWbW3V6uZcSoA7g",
  "key3": "4QoHtb1gShk3Ep9KDqtCHzSSePSFfCNRMZjnLkGLjsxJjidZiJNuDq7xZ8R8qpVBYAJGzJgzv5i21TPLbyy4MRvX",
  "key4": "2kz4PkDZ3rdz5JaNV7V5sG6SiPVw1ofWDPgt661RRVa8RmobciUwnDg7zR4QPo8FKja7msen9txfctNTqfXmAxuo",
  "key5": "4MdaPqgHkfokd1XSuvTdUk6JfEGAVzQFkzZk42VyAMiKcvDK7m9aEfrLN34iQed7MztVZapyNRzoDMk2rsAev7Zj",
  "key6": "2cynDNQkgHybpXQbt1J8iDdGfuuA4YnRgsVqf7SENXqmEAukaKXjMSt2br5wXUEd3CzuXR1uaqWaS2LeGut3VNf2",
  "key7": "H9m3sNHXWSSuYoFW7KarZe6fonF9A5NbTw7dzhtk4yCQgwKGu5JVWXbeiqpHgXEgepyDp4G7TqvrPncNARaJ2MJ",
  "key8": "3gPqNfrXJHV4xNMp9wTLJAJkeF2CS9S8UzFACMxLnH2ARLAnqQLtPNDwVS9F75gD7HageXpYqL9n8iCzgUD3XWVJ",
  "key9": "4BYkuvTPYfNQkHnTagTmbeiwBT9ZFByL2MVeY8wNzTQBfg2RJG48H5UeNj5cgtSuYGZAMDiFgqJmDUMAUcJCMBz7",
  "key10": "4ksGymMppsSBfEubYBfpMEkGxMgezvpx53HbdFxPQLwh8oL9aDBct6vkJiqyio7pZpM16xzr3ATEKaNg9FNBpJDH",
  "key11": "6NZzCmxC2xGPLX1M28zrUb3UmzdpEvuVRyMCWH1PW3m1saf36dm6MGQiUziDTtQTi5vhszEqMqmmuhGjNeVjk5u",
  "key12": "ZpqDTq3JWowprq3Uq36qqS4NrYBmPfTiu2k1kSratpvjdzSifoWqTYvbamShwEv17qFe9oWQohtJDqQMD9Gvggg",
  "key13": "5ikGQp29aS6q71PMcBjeuQwHa5yRacWJTN455jqiZjsK88MWvD2MD9KHyVTXSNoGQSjEBbvWVVuqbWw25uYcMSDL",
  "key14": "2UKNP87xoziH7pYrSG6vM81gyWDw82DzAYnbXToYRyksfr9ovxq5AVtauJ2p3UrsDGknPWmB36BQTiUmuUaFRLio",
  "key15": "3b5TYotzdmJQ5HfboyhP169YUPBv4i9pkHWqEyqPb9YHxZxTxYg4g91qD83gkrj9r1s7yU13fyY9RCEbssBJxtc7",
  "key16": "2Vw6jwW2FjEgxLS2yn7sfE7TM6QgjrFbukjM6xCv9ecwB4AJUpBt6o4yBuvTmAjj54gDPX7NRjR42oAcGnikdw33",
  "key17": "62BDvbLc5dyyww1wWKj7ozvLGzAscfvey6Cio618oqyVSScpVEaNNrKjj4h7VWgtQZauYB9ZLZERjT8tLaKv9zig",
  "key18": "4HMcFeRpLvWzyiqBjzohsxVMZZh4AN1VfFfMVWmQ2YxCYkDz9TLGCH8wyxhnXrpmaeT9YScks6GyvhAMfJ6fth9",
  "key19": "5DzUYdP9sQveL8q4qvrwu95wkDdCXAQQRbQo7Qsna1CSegHWNHXstWpdDmDEQPu5qnGisacujp2gcXKnzsw5pcFo",
  "key20": "3ESTDKfHKxyqeGCD16BaYngfZhAuURfZqHeMh7qC8i6fFhk7qnF3a3AGnzP9jsH83DdkYEEzJZbCkJUa47b8DjAx",
  "key21": "4mnSS3wYMPDmQKCdmVN6mK4tHFJqcHU3aJBnwpc4xSgC54zjjb7uKVeYmwFckiJ6GpCEu4ctQuvfgn8nuLP7TwXe",
  "key22": "2DhGag45qYzJGJMPYzoFWNRM6VtcZauisnxcsSdDapxYVPNC5FWUqPaXERK9AKasn21nnGVgmnLQbq9bUk5SJ24V",
  "key23": "46bo2zX7XBNEGkiivVwJKckwNkQp61GFswfUmzSXNNRXJB8LAVjpfjgHzqfyBXjjwQaMVgFS7W9b9q46Q11vTYBD",
  "key24": "5WdehZPoNBKqqya1eDTJ7DJqPYtCEAmW1xrwTJ4qcfrwLK2GwDVNwGZ6Zk6C3FRMT2JzxuokYJ3AJ6jdc859vBn1",
  "key25": "2aGTniHyd857cTgat6pZZa4Vb22afPGtn6JmKwBZrUwaZ1sdHCkB7T34zmWCfZdiDhzPmKukex3vBPottLEd3Fmd",
  "key26": "3PU6a1cZjPpJZBh4FKLyXzMoCb13NhRBeXXxN8kuLVRAf2Bh9aqz6xC8aCwyMM75WYZSSgAQJ5jTRA7xMbQ4zD9g",
  "key27": "2SMDFZCxvWkshaJQa39ky62prZb6u2ae8zdtFPHpnaU4K8QA9Sjq6WZNZqXSHRMcbTf9zA7JbSLfmhVNf4i9YvND",
  "key28": "2KHPETqqjrCrLx8W2PEydqNBdEHwiThxqUTbA17D4kMB5yFEd8fVkaBkEyfsTwnxbJ2AGBKc43pBmWck8VgwEntc",
  "key29": "4SZ9owxx3jDokThjiq1KvCEXW9kkS2C2ZosQCcdjZGd5x4y27WqytNxCTG9DeFAoE2WETjKnTWLmZ3cqteJ3knjq"
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
