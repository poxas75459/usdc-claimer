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
    "yR2CGr8J22BuW8DQA2rvTpXiuXkTLQTmGB7vGDPL4PmWqufCsXxLvrdqULhJXh2nTrwpULGzdnMhh84EtzTcyzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGt4hfCfhwCZZbwQomShT2oKcdoXZTMjYA43dVGbYwX3rP7gGdzpQK5e61ttB43SoRksemZfRaLXsuJH6gDkGBq",
  "key1": "29ipdYSEnPYGaTKwCCV73KeG6v6KNXaNQ9ELS7JdrmNA8vmy1EzbXvJ4bRQ7ZGZdKXevfQeBR3QmqkZysnc4Nd26",
  "key2": "5fqNQu3tcnPvU96au7CNpTABkcgE5E9Wvnidw1DNnRY4FD4ggYWAYb28S7xrS1SGET21V4LVPD4X5i51Tjc6998T",
  "key3": "5wVu5za19vpRjzjvJcD7kaYMxheBHQbB7eCe2t1ah56kkFSGrKzHXVBJWr1cEtCowve2Moe99Z1495JEDpbxcrdd",
  "key4": "5aCg7Fz4Lkcokgs2kCA5wdd7NsL3zdB3T99YbABPRZet2tXFfMyBz7Yf3RKdZerZ6gLYBnPDkrDHgm5JjBDKNkp",
  "key5": "4pVL1YcqXCzRn5BvksZoZhdPD8TEY2VTDJtHcW7nCWF1Pkhs47SB623sWRo3WBouEpz4Y1e91qXdUnskmEP7mEf6",
  "key6": "39aha3BgJxV9PxQaZCw1jS7mKsWNFmnPsaHyv6ZfNnRs1aHBiNac8wRNM5bQbFBjgFeu7EamVryqjS5eaFcqNPSH",
  "key7": "2uNxYc63HnT43zn13MSp5ApL1YEo2MRRiPXaVZV8BXZZupCDQWXxgE3dmsXDcP2CEHgkG4ZRCzFVMYBSptMa6xH2",
  "key8": "2GfYVLpNjXVboxrfa4rJCeyZx1kqWoeaM5euV6kty37pqZVXCi1AmWJdiK8HJBfpfywgKhgZ3KDrUb1H5zgrmdtG",
  "key9": "53sJYMwARitCr6v2fvZ3go4fprVEEWUu39c8WPLjRaPZkMcDCkd93quYjdmmi9scAfTSGuJVHQ6pytFo8q2T7TbS",
  "key10": "3ikj1VQr1DWadE76EfUj1xCjfF6g2YVa92y8rATKseS3BDrQHWomb9Yzcwbd5DqmqDkUzsknXBPXTunpUEv3qy18",
  "key11": "4Nm2JjYQ5SoM3QSBC3hH1HF178pwamaD6UNQLMAyMUVxGrFJ9rXJ7G48jPGJUNurgG7Ftm5o2SGZLLGoBDvoCVMF",
  "key12": "5woayqvL2XugcT472egBBdCC2AWM5PU3mKLkMEbz6i2aevtXfWTFutXgonhAzCMFnHvT4vpoyshHN7yNLzL2PGk3",
  "key13": "2vQTDBAUHUWcFZ2XmCHEQyQdVuRSisV5QQBDZjtEVJiEANEPsfTQ2XmZoByF6BJCPCsxLP6GBDe7RUkUZntgk3me",
  "key14": "6cs86dRK5mEaXbmd5jUqJVunJdL9G2nQcryVyjTifeNGdyrtrA83yxXfUdoK5xcEtmA4izuWB1RrjcU6W3cQk3S",
  "key15": "3RruWxryxTaEnfZhb39VkZeE5gKyMKVBvysc56CZcPZuRoQtaBz2tARAuY3xcCY1iQdzmK8mhfYE1MGo5MHBeyiD",
  "key16": "2rUTDJHpCgWx7oRDXjBPUCethL877TwCG5KNu7EXAAs7pkNMZN19TStk5uqByPU25Pdcmqmf8iMYymzPCA5LGcg5",
  "key17": "9tActvCX4VmetFxCR6r8zG5rJeE9s4hraGQBBE9qH939g7sR4Cs9pZ2KeJm8xJbkgcT15meMjoMsf2us3Eq6xqx",
  "key18": "4KybE5DWhGroFvrUKHpxYYUUe5TyDWoRVFju5dSrTUbjKLG23krroeGQidMiUDqsdNAV7w7BdaNavsPjNoZVG5Z6",
  "key19": "4j87t8ucBiomLTL2ntfADLtt38UteXjufzWBcpmToex6AaWomKomtH8QyYq7opjNrq4f9pTHKsiBNTL2SZ2j7f7S",
  "key20": "3GE1xUk9dkNBqkvK2okDVen5Nt4XjXnV4oy5eoMEvhSGJHB9Dq5eXakHaVqP9QexhCbdibE3TubTByqKzu1vhVhX",
  "key21": "2GoLqKo12Cy2fwFdkCvkuzfjDC1s8WhvrfbeGMHvribSEGUsEQuCMTbZQQnh48SoWi9GYnCGjKV8G2br3CwoSxxq",
  "key22": "2VHRSZg9ovG8zuZ1RNhswsDmnZGVU2U1CbnLpLjhikYf5Kmhy69cZRZr9yuAR1uzDb96znqfYVwPSYWNxns9EJ2B",
  "key23": "32t3ZQa1BBD7yGSAE1mrR8ibmHcqNr4aqVEEdc3VeDFgiXFQt9wXKgWK239gHisxpqLau5qjTA3YchLLtrw8RAhh",
  "key24": "494fTH6iM29xgcPPZuWzKNRSFU9ADoY9y5c6EFYo8eQEVg82fWp5uAYnJvoihSsATwo3uKSMAfCtoDtNmNbAKLPt",
  "key25": "NsPZ8Vvg3XDr82mqJyPH93PYwysQdgPsq2HLmRftPGg9E332DBs8zj3UoruR7uMoJBhEdsuPxEksBPVAZZzMg9V",
  "key26": "29iS31wqohoE2P9WuacqapVYgY8Nyg4bko6wyXW82skTLZrySYUd2eEZHbAvdLgWiMrKKMNdkziyZu2vnKC9NZZF",
  "key27": "24pa34LaECCyMjavvEpHnwj4Wibe9uWFK8LJV2r3h3fRSZHstSXrgnbUH7t8PsC7DVKF5T3rrvEoRLZqMiYwEYGW",
  "key28": "4oUXsvGswfRDUBHg5hacX6mssmWF6Z6uUV7EnbCYFbJ8qbuBiXNh41YQtWwdNWWM8RCRhoTaYgZVcB82kYNe3B8N"
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
