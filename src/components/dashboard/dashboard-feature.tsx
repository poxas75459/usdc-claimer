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
    "22YawjfRoyT7qneKpsUGZA9qwF5sG8VmPTNvDiyqGPyP7vwJJsUB5UUyX6Gw9xMejPqLJ7hhJxe7CYYiHuDLeYWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpLV7GQz3Td2oCmjvxChXTLykWEna7AgNmWeVdAWxWjnqpVve4JhWJQRiALBNaELKbt7bSo4VKycGR7t7pVxv6x",
  "key1": "4BrWNH6R5Q48W9s5PL1QqKAbUBdjPRVRMATZaMKHvKTztEroyADLYGRGG2NmnXQ9vYWXXH2ALojR2YacYBHa98YY",
  "key2": "Eaont44vUzzmGtQo6czouKiFUJkx5YeS4AeVddMkQvANyQo4DLRNQR4KRRphvnvrwjfu5UZwFqpdgw8H1dLPrAj",
  "key3": "4syWPa4Gg2erre7i1jGuET1KvKLtkH1SwjSmcH7g6tbDYfjzm9XVHqpJ6BL7mTfRKF6rbXaZVdD4NQg5LaEfqZWC",
  "key4": "nabNxrrYgpteCJpQPe2Q4ooi7zdTxPqYXrPfRouwKawp3ioJmCWogauHrvS6KuSd2M1hN1PfVcD7Tua26W2aBzf",
  "key5": "4k817pVhcBQx6uEaf5Mi5FyEQDFsdNNXJqig4r1nXee73jeJBTQMHwvoAYn1AFtkkfoQ9QTomf1t51vPYmRZUvYT",
  "key6": "4n5VMZcSqKoPY3PW3zPzEmPad5gMtqQDZvUg3qDLhqMytQfmE4o8VptrAsEtZ4kdkBSx6TfSTSjjX8REebXr6hcC",
  "key7": "4AqBcGbzY4CPnpXxCWFPoBA6rUHgDJdd68sVRBxKwVr8TGy6UkQUCasJLRRk1fSiVHKYH9HtAgFCnFmbsbRWT5A8",
  "key8": "45gCZezyuABdenEZTZ7ysWaKHr5y6o9wuT4Jf7TtrJGKKphd8Z1a3uWXPcciwNn1jqqiX9whQVM1j7QNJTnLrbcR",
  "key9": "5RAX3xH1wosA58JAtFPQbshvJytsk6hy1nz2isfK9wCVTFB5dXuLn4UBexr57fPoBCK66EDtqa4wQpQRa71tkCmV",
  "key10": "4xPoZd4Lm4TsCAoyipYqeqLpZi1zU3z8tEBmESCh4ZjD32JpWx2h7fMUb1bzjPowXgcr6n4MYKqMLcYeTdcpCYpP",
  "key11": "3uR2X5HBe6x3zCh6KoS1uAwJrf5jf2W5HECPjsgCQpgoyGaTTCBysRB9ozjoGxXWVJxNPqrsTzJhgFXEZXua5YXQ",
  "key12": "bYFEvRi4gXKXhg6m5FRs3S3FbBJe42kjbWdMxzEmRMNUvnyco3RgCQtDBeBmmVau3NxNE9oVpitiktAEKtkJe4K",
  "key13": "KVywhRAubULis6cn8mcEWQqauJg12ytGv5o7sFKicJTAKzmK1MLoXr4ZVR9Ymtnun49kqByiZ3S57zsDwT3kgp7",
  "key14": "28GhPQhZHAyyTgb46RQboMJSpSQiTqmpWR6H2y2Faca5VebWm7DSH14vjsKWPsjozruP18ER1Vok2ZkwJq9t7jzw",
  "key15": "2zC9goqMhiNyxGUSd823YZJhxEUemoqRRcTPDwjqpfnJK2BtJokCZjwWfmpR3KQPnyeu4pRQ3yyqnq7JdPu1Ag8d",
  "key16": "3mCfUx9Qau9CXVjC4iyRxviCT1dVSKvgdp7rktBwEeMWLiW59U4soRWBTk9Rbw2Yw7f9Ltn3aNKm6v6Vin7ifMNN",
  "key17": "2ZbKxHVAEw5RZPcR3Da5hYEr1vqkvspWux4cAeUeszXiPqhqur6ZZ8W1GwkK9jQ92TSEuzztiaCkGc6TMiFCVo9t",
  "key18": "32CpvnBe8hQkVZzkBjewLAhRFq2Ju4n3RoVzM6muscU5LDUFgx1PgP5Q9GTzQtBrgckZGADgv5mENTmytxDA5cta",
  "key19": "36qQhnErBNGnZcqrV2WndaFwLUBcbJYpX9a6KA5JkHo6Z7ecKTqG2BwhVVJ7jihE2mq4guRXLwRsLZDKua3FSK6f",
  "key20": "555FHeHBLL6uTP6EBFgr8Zn8yuuojyLpMjYyjw8MkjY6yjsJujduZTVdRHGcRjJZvHrjAxZq8MNS6oDwcoRytcg1",
  "key21": "4JyEhroaiGYhqsf3DC3w3gJtzAdAPJ3a8mYXMw166R3gcE6PDSBZnqVNwf9fcy1ViMTAk12zTvLDdm3XfSszrX18",
  "key22": "3245VMDABpxb1fU8qhyDqghmuSfYoCPNDdvGpLRgcKLjqM9YpUyQ1fpjSnxRvopqvCk7Yv7ToVeGFhRmVrcsKqW9",
  "key23": "2D32m4Q9W5FyDLrJBBoMTZia2FgBh8wNQnU2WgBnhQEbSp1FTudXYHqcGWd135oMVb4xEgodR1WsfGH8XKT9DWj6",
  "key24": "292BDbNYGyQBKZC6QoXpap7Vw2xg2RLhrQ9514jjkC1g6fk5tdaJZ3v3Fdx24x16nXBKgCc9LrzXdVUXUNnGeELq",
  "key25": "4CuXFZPPVsP7HNnHUMD6fGtW2ni63Sa5aamLvk3UPGqaBCduLckNmwva4ybZUkFwosbYJ3t4K6QNKzHZyRdoehoM",
  "key26": "Ha5yZXKVJHwDvHRAAEZkS6xeufNc3AC9qguweKMcCiybYWeUHy7oFVdf5h6iDtZ53wzHh8WsptQyQdD4Qw9i3qT",
  "key27": "5smY8zaDKN8wAvCJwjiJjsPTRohfh3tLGEVLF1mCMK17iGW17pKz1AQySNCvjMPWLM4kD9nwyAUWMWuKPEnpnbZo",
  "key28": "4g1S6Q9mxBgKtXHedMNzbcng6wk2PnoZ6aRdU6ZSHnkymxqg832dNLYg75f4A2fCBLvcjJW9Yfdeajc4hMNf572F",
  "key29": "4BKvBHAt1HHouapjCJhEwt3GGfGyVyWdwpqPaGGteL9teLBFAkFVmLduoJT1nB67y8uoa275T6bnVaB1bWRvzoSW",
  "key30": "3avPNn8fQQgqYkQMG2mDtzMAKCuVra2u2uwASnnmkej3FCnuqFgvMYtgHZpgSL5raTauZ1y9PN6wDS1PPdqRQHGD",
  "key31": "y9AdAhpxHiEuCgEZeWS86t5yoMhAWcDAQ3tRRNyhu8Vk5zPTq49SPiyH3rmRTUbHJixMw9GzFnvH1SgBacRyC6B",
  "key32": "4LQLeGWZGHawV1GfqqNepr6zPAC7uegKpokF2QVJPoNMYtaDuWGxTtn6RZMjkUAcue1NzvvTX7YqKMPRpG3xNuDT",
  "key33": "H29HQgq3UwcEup4P6LzzVBh2APRonn28dzpT6X4cHYnZmk3JJGuLv6jekbyUqeYtwsExoftauqJVoicwgZNa9oZ",
  "key34": "N8XQnDRvhCra5d9et2dCDewotyHbrXB1ZVC7sSZM4VWVv3fLusyKW7ddbWKULBDL8L3c3bx8fLKpQRb5tH5phDu",
  "key35": "5uFr4kkDEV2bVSxwqKnZUHVKawjS4pQ2oFYHmfH1NSUeDnaHNkoXpn8zfetgvacBvpvqqkxbUQ7tmz298v3DE7xV",
  "key36": "2UfURd8vpJcSKxJ2aQWMY8YuJrkUP3QSNtTUA7AquyKrCGL5BtuSc2ZHKkEhVSZk93ysdVeFDw7oo4caApiGYzcG",
  "key37": "4XxiUJiNKsKr83R7YgBa1N1sxRH5zs6dyFz2qY6SXZwcCy5Q1GbbAfgw9bMfbXCEWLh5ZLd8RVWpKpWKGKGiUNh9",
  "key38": "46KuYxjuXPZhj9GHyZn1dsiPHPFmjZkmuZbtdDQ7QEwyzD19z9yvcjAya8FLtYdwnjhBwaN42EfdFUziDdrf4Bmm",
  "key39": "2mps22RgdKv5ASMwSkH9xoLKpXGP97a43RmjaK31T8ABt95wNwZCyvUZGRc7nYsf4iizUEuT3KgMNhfW6Fbx3Kta",
  "key40": "5Nw1zN1dSk58DXcksNQYL97dtBCMzymPRq2axEkb6BAktyKWZkxVFkxzhXFNvGFKXxfq1gEmMTsHVjsA7fK1dWhD",
  "key41": "tdZu9fpxJv4KeFDDan42hg3Px66Sk1rUQN9HyGa33FyDPi2AP1Gqzb3DszhZJ1tou1EHxayESSmuwiHacsrAhWT"
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
