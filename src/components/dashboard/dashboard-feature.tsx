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
    "33S3ZC9UN6Y6dzPYZTxg5JjZuWxvtgqfzjDDWtQrCwykS4xS9fid4qoXGV7qrJjJEKrXykzbDgSte29DXHHK2PTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8wZRkbkNsHwQvTbifwzDWepkE2G4sL9xNPuMzac8unXJLHhSty6DWF6Dbif1Mb5vf5aq26e3evWSQXYDecde7s",
  "key1": "2vYYUacT2euxyDfRrG91ek6gDtrGh9g2MEVJFtmXFd8VWckRQN9ftZtPKJ4WfhAK4MGRBwkxErdGenAnHDuMqLX8",
  "key2": "tiszRm7h71qMGotrUKx4yfRkdUtjRCwYUwK8DppCWKm6XGgkx4iTAWBW4fbwsnDWn4mA9SEgGepRzktXTpA1VNp",
  "key3": "4rN6y28ziMXfn3FgjMuJtnps8J6qiFvyh3pjpB8RxhR4Ljh2YPjDGVyr9zy5rxjPsBLjxF6R8vwoX2B7grB4PXQy",
  "key4": "3aU7Vnh4Rt2TkyZTgQom6MNT3bbdpmUrrb8qvzCZL18XYmtTYdeNXwsbQoerN7xRM8aJoqhGfAHAuLekucRCdmbE",
  "key5": "2ynfGQqup1QARGHL2ZzKF4sYWV8UcuxsjD6HpSaC81kXXHK9xSDNzuezPEB1b5gJTpJHDaSqQtF7kTAYohDSLyYS",
  "key6": "5Tu4RTPjRikM22SN4DSNUJNFqikVY6vNrfcFsFPctSQ4SUPQ2PxjA45LCPAo6xwxYF1oqxE9p27doWKAQoPCCY9N",
  "key7": "s5EvnMtg8gVcR4hhigRMd4ELtNneFK4okamW7yLbiynErtAsrJYWgdX6dJiR2FKbthBska3FrzeS3DEHpZDt5eR",
  "key8": "3UyXpzCtgxcf6SNGYH7FU7uzfQPQZXYzbpMMSdGNjT8A8gcsSvKnKRtHLZ3kBGw4eYdhyJ9iD4qPEAMYXpyyy5Zz",
  "key9": "3Gf5L2BQpAubcG48poXudjWMWdXSKGxUo6qB8PTEDYSXaV7n3YNg6hVE1C3HWyxNbYyXNN1xXobiVUtW4xjPTr7H",
  "key10": "3qfofaYFkNGJVKQeES6adyLSXxsCZfGQRrR3PxrmUQeG65ZjtQ7Q7ZWuhyffDADz4sGJrqBb4XfY9tWu5wadkeVq",
  "key11": "2bNcGGspMbqQemaaejw6uxeo8SCW5RnwQd7CDMfvrBp1oPr1eMGgVkqg6Zto5FNjXKjLPKxqNcfdVYfMa8Fh4Sfd",
  "key12": "Dh4bXTC7ZRB2eDpMoXJDQVU7wPmPCATwMF33dbEad772ePZAg8J838cYv7XSVYy4aFxkUdGrtdm4AP1SnnNXCai",
  "key13": "Ase7k3KdsgN5hwCbGuWJhLF6NbC4qdjnYL3igS44eKSKg8f4aZprPGBzMxsSV1mVWTeHXsnXeJxUo9RCiWGhFaD",
  "key14": "654dLb6YKH6hj6FKgfE3ukJKqJJpN2SQPPkdmSMQtKPphLtzhmsnyfY5tzLXeWvuQRX9BE1GtLkrdsEvPCQZTM3V",
  "key15": "LH43WwXR6auH2qUfLeUcxT8r4MkwmUwcuJ93nVx8Z7xU3ajMVJwQWNgdEXKzfT36iJ2uCJeG3b51KAXW8XnbtVp",
  "key16": "2f6fjEGzc8qMR66AiFgYwtTbS9oiho7b67c8EtyzumXApJTbbHRnUiNZ3eXMjByDjgEVbhZLeLrZZxNnoLLPLfuC",
  "key17": "3GB9g785vEg1NPp7C5ZYgJPrsDVXsCJB2gkgF2qAfESSScd9rYGmmYif1L6xE4ycrzLtPRa6rirMY1MihmxbNXLG",
  "key18": "2sPLbziSej4iP58pnKcQQ5qCZ6EKzCAFTYBqWsDXozT6bcxfdX5fhCgSCYSj2vXv5cYe85Us1ej17DYTGmgnadrD",
  "key19": "31qfF2YyZJomjmbKbCGhPzR4b8mK76n679Ee7Skw6fGqsFjx65ecE99yPb2iPtjUDrWAT2ophY2W559o8DYpqJB2",
  "key20": "3mbEmCjU9gFo755fgzxBaE6Q2jWJyWs6Z5iDYedU7bC3SUMca8MDHBdVbTGgJjPAufRbTXpGq5F31DZuJYJ1ebK8",
  "key21": "5bMjdZdtjNvVBneoKSVuG2Arrefyhyc2TJyvM8HURYcvhR2ZFNGvwNCCoNehB7PQMj3YbVhsio3KEFUrs6j8xVs3",
  "key22": "26wH68QJ9B6Aa7DsTBhE1REoYw4EjE9tmYiMYcS2QhCkjv22sbaUGTTELzFkN2TMmtVqKEPSCX3rR3d3QCdnzfML",
  "key23": "5jR6gTLuXuazeUYTT8VojRVuwDcyck8sSr2vAdnqc2DUhsEHJYEMJhqjtenjYBCmpkW3LqEvicdyCrzawoYcm3kp",
  "key24": "udQuGwnoopX7v5SFHmuUaS3hyhSwk4bHfUQ1eKp7V9WmTCXF3uebfeMGrjDsXpm3sdexockkgxifjSKXu5G8C1M",
  "key25": "5PAUE9wbcc3BTfyWCUyujNku3iemqYMg33qgMyFpxdkpd9MvAZmgeSm8yCnPRJPZbqqxQhrybhK2fU4x3YkFx8Mn",
  "key26": "2U7XujDoaHnBytxcaH6cEwV26JRAoM7hFNaeC85zbQ8XELd4RufJsLiZSN2xqHog4BNkMBvmLfHeRHAw5LyRBNNF",
  "key27": "4SSU3q7zNQkzzQdZM8RRQ19zt8MaRhgXKj73yVA2eJdB1y6zsgMQgKK5aczZCGH7NmW7LDVX6PPzouCi1GA6xzXw",
  "key28": "ntZbfpNgJM2rXo2igh3YNEgE9ZoezhtVq4WBjSGnviQxMNhdxZuRqFDz7zZpHAxo3Baoz2KzroEHBpgxpMFHwzn",
  "key29": "4Sy2KegkteJQFp27Wu9QZMemeMRtuLDV3CHxqYaZ9uQUt3AVsYd2LxfapMWwbvZsbpGkYa3eGp8CQa2FucDMreuc",
  "key30": "2pTojDtFmYAm2QacviJYn5LDQoPuXP4P5SGTqUhcVFyx4LP1MdUVR6nbume8QBhgDVSuSE8CPKxao59nSfyeLJGQ",
  "key31": "63CQt26ag4pp4q5HTCHTtwroK2pPYtNk4CnbmbB9gWr7F7H9iYjaXTYyvG4XR3kXN5GgbHJGGPCfE4qit3F1ej1k",
  "key32": "2sPUUtd8pBUJjeixfCiP2QtXVCfb4X2WJj71ueAmXvEEw7jQYJH1umVAswUF3oA3Mg7rtSeXYMZkkWj9EtibAhiK",
  "key33": "3E9JtthDakF71Bq6PSdVvKrVde5CXKXmWHREc62B3f57fmjZjy6BkxdLe62cGZukm8KB9FavNJgpQ1vVVtorGk1E",
  "key34": "37SQKi7ed8bnZbMnw9hA1A1SQNW6rbsgqSMDqvGDxZR9SthdnaTi6msxeqEfDHwBfxyWt6oz8fB6u5FseH5tzQsx",
  "key35": "45X2Z4EcBbpTapmjXLozjjYWf591anE34wSHYWb7txQLYLBKjfRvardBeu6vmeqoehAqMsZKRqs3NpAfmBkekDXe",
  "key36": "5LPvQYWX7shscLUXunWXy4ea9SvyXYZD4Sgcr9XfdRQQSjbvFs2SoRL8CyvBBDkVWRpkrYg2JU1dzL6kUZvMvpb2",
  "key37": "54eqzEd9b32w3kQteRWxpm2Nf2ZzqFi8u8ZeT6WVUoy2Xs2Qs9QWE3zVcoPNFiMRHGWcAXUQULGqxnDauKDGWyck",
  "key38": "XMkmoeCwAfooWo7GLSBCQaDnDZ3GFAH3V8Vh3grc8nb8kNHbSGNLzHVAvPHGvreo5gL3q2xhJ2EwrxmYekVsmi2",
  "key39": "S5VEvzEwBPTLteNZMVnh3qCVEaDwsB2VB5bsNtkV38HhE54ipmnK6A7DMzxHVjbfFrotpbJwhk5os1gKH1yUBqh"
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
