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
    "4WcuWSFv8kE9f3A3wk544yUwp5d2mu1AjsB452wjUSNoudmkfKS8ZJgWYLiKp8xzdduSc4n5K5HTM7eM88xFSsxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JbZn2cjzraNy2hJ3UfYpGvJXYnsrsXYnafCxtoZQ9QHmdJBbZJ5De1UMTvQVWN7obhonB61KnXzaoNV2PfJLkNn",
  "key1": "3dRLjTKRrDgQqqj8gdRDvkku1adbzwe6VKg9zZUepWTCuqdYbQ2NQWcxkYiuXiWNFNGA24mB2oWAZjSFGmgh1TaZ",
  "key2": "beBLRpWYz7sgZ8avJgip4kotBLab84nEf5EtUATM4WyUmi6cctoHUzdmgF1yPuLE7Wf1BrU6j2nRUCxoNqCTQQ4",
  "key3": "47P5s79Th5uUGxb2zAQRafJX2mbjyn6rZ3bgsogJue9UXze97Gje6GB3Kd8VVPaMoMXTANFPt2PGXD2hubiJYUw7",
  "key4": "4wNTg2eCqrmAjDRi96jHWhRAexjTpKGWiqJR5igFLb7HNJ92vXMyZ9KcAUaeAWyA8agBTFmk9D1TKwhruHysNYRg",
  "key5": "3r8P3LmsqMbuwsBB5qBCXBn2cZW4QD4MiWj5z4E8jY2LUQ3GbN6MLbW7syEYwG1zhGp7JgMVTdvRo83Qcm4puZyk",
  "key6": "58dBS1bZs96yhphvZWytK7ejhuXXFBRMfefDxjaw3UcW7eeXe7meADUy9Wc7UnY9pcw6YVeXFoTooeg2gLxfmWr6",
  "key7": "38hEyrF8B1L6t4ZaGCWmrY9bsupUTz13dzuUZonqK8EX6xAWCNdTbDjLKzLdCjdk4KbEAEAJUgt2d171Nz65J6vY",
  "key8": "LjUNLfbTcPHRnSHJEtF6Wqv23B5zt646yxRSGSTX8c58vFKmuMEV8qpZMjbNvQXH2RjmwFEmRoZ8DMjMBLTjgjo",
  "key9": "4kCykxp1ZsrjLvsZXXec9eJ57pbMwPP9dX7sVeULiisMVLCQ35Ti8AyWgivWyojDcv7bVoMvD8fr1FkKkF5kFHj",
  "key10": "3qU7jXocSn12UAg2TEmimxUm78edZuwdBUY1nrzEm9ZUmzm5dJL5TPjWeT4GzKVgiCnrbKkhEpAUTQnGfM4nivnQ",
  "key11": "4PiRcJ1iahxf5MAYsy3wgu8vC1umJGFrmtFWh4woBuEKQ44TrueqADK1XwfjunUH6GiwDQkpGNv8Vtvufgaie6aH",
  "key12": "5JkMNwKkGnV5fdkNef2PyMKuA95R2VXMeTTvvmGf2bjuyye5wvrMPcEPLYCBNEEunJ8HwqccuYiZiEkB5Y5S39Gw",
  "key13": "5HSc7xwpRZdGqBYCk7G5mmaW1ZCahK7UFnJUnXoP4xbWabBCHnMdZ3c2ZhWvFraw1hXQgC2bRRSXinBEW8frUuHm",
  "key14": "SBtj2KhcpGNKzD7xna1xYcKxubaGd7oaRgiH4Eh6VngAEjdHKayeUH45JKidW6RLUBCUE5hoj82fhTuW3S8QyMg",
  "key15": "2qYYaN7yMvaR6tDMtskuYVMvtnCLnWj85ZhD5pJtauegK2Hxeo9rkz5dJFe6WUauDVbY4CfVSfbrxSPeGung2rpK",
  "key16": "2hK2gfi2kdEctxEcYXnS77QuTNEoEuzTR3jmRmPhrTFGyFUhDfyXg9wrVEhQCAUD3HzNB82ztuTtt1cefjcDdEEg",
  "key17": "2ztrhqokxJqjVuRbzyNPtEsEiJYmdJRtbPJbV27HYoK3WWqKX111JfDjc1cVscJmg9KnuFjDWjFv7TYGPk4QZzqp",
  "key18": "65mgNZDxhzDJKiZU7LxYVbVDuPuL9s1CwUvG848hXzA2HkEvGRL3YUYkt4R4mTyhJ8wE2nWnYPUzap56eJJHWFwS",
  "key19": "322KomwvCerHhzb9Y7xC8e2LuR2UF15FdzK3txoGtWRqw5pvHe282gaCFPdzg8GPoW7xRQy3iSRvypjWrAdTUrPp",
  "key20": "4W6Sd2GGhLctyRinnPtghPpmqNMfYTh1b4hXDjJtXXfwrwN8HNojm5PbPbBmydcLbxcAqL39zwNLZLKCG6Nry5Zk",
  "key21": "2YozDQFTmxyHSjZzyHYRSAfMqEhu6muvAXD6czZk4Cfd4r5BecGXLe1TUhkjqDshg4vJf2AibXaydhB7t74qR5Tk",
  "key22": "7UxcHzkyS6JbdspAeyRMf2DHppDGjxTP99o5F32zyfMbiwQNMwCT6p73Y9de19bmga9x6RwyNMbfDs8kxWJ7ptV",
  "key23": "3CfUA8bqS82RoYW2cvERjyPu5LLPJky7cdJAKccNCNEV6drqLJNbjb3nT288Zj8VLnQCvUPxVBw1CWvGmoThiZoK",
  "key24": "Zp1v2xwoN9r6D9peJpbAJw44jFXP5fWvNNxk1YR3vr6F1CLVDe8L3UxE7PGoMfRgufm6fdg3Z3yPjhqV2gZWeQC",
  "key25": "3VgavgEpqDWNL5MgVckaKPms9m25maZQhayYyxXSSLXUwGmz1F6tvxEBKBYE5szVRJBafttZPiQ4AjpVqYusqgDQ",
  "key26": "3D9c8ahhzcMV8g2tDVLjo6LEcnQ4iQ4tHMEtqGsQRmUHxqM61CX6RcYsJuBUkjCgAjht8QA84FEFYwKW9YXVBTZi",
  "key27": "2nHuJ9ydGr8AcBB9fu4tkMZsLWu8ZasftrBcJBzFUu5KeJnHkcxykKrvXinYxcpQiaGD8Fy82q3Z1dNvJDfa3JvR",
  "key28": "4QJGGtGwyisneg4ojhTzMJkATTAY3cAtiVDvT5d8VvKjKmjkTBK7wtrjcb5FVzakXXCjRbzUfddjtidiiq9yWMsH",
  "key29": "2tk7R65jD3hu6grdC6mYjPoMQRMNENwSPw81hZCq4835qgKHEV2h33WAbwtHJa6sAmsQNLzCwkrUoQjThTTHJKnb",
  "key30": "3WDMztG7ThpdMFnB3oGfSUv6CT5Bzo5LQio3KhS2Bvz7d6Ec1LLjgDVw7xFQvJRiYccTN4vVf8Bn6EjqW51vdbrC",
  "key31": "4XeFVpWD87dt6CzSMLNkQXwFqBMiuEbWYrvzZa5GBk6CmAjUsGDh3CatFpct6Jqm3UcUcguHUqp6PdvNkpCyTnox"
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
