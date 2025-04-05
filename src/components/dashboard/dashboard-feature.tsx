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
    "2pWPYxToorkkdKXhtnBFkZT5LvC7wssJ1Sv9a3uoCtLd2GMZRYiZUtDWLMUzttLLKgvXbL9DkLK5GTk4QmTaa7Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQTB3b8t3FeYH9kFHDbE9AqvtXrzm2hCRdQFodwAby9NpBKrhpFB76pJrkw5MmPmftTpxmYY2ksJUsDzVypnesk",
  "key1": "3Yhdx4aWrekVvnKPUUKNYf5hpcDhvC97sc2CYEYqXJ1j5rwhUd6hAmWdczSfqVBExjj9rbnF8pgvr27G4p3obApL",
  "key2": "3k4MqHErkNmEf3Z1FA2Hn1zeX5MGcSnMhYz3ZoTUSYQYTxDs2cvYjwFd72GNM1cGhGHa9xvhSQTyPCLWt69xR8bv",
  "key3": "2ixh5KfCanFrVmL7YZof7Teg2FJ6RKPoVy3KrxVV93FMdDHNDxzQTC18dvQ9ExfbyaEPRCLkmWR1GGRoZFzcPsQM",
  "key4": "489uFfzj4rBXSGaPEjZWMnB5LUshqGpnqto7wBPzARxnceZdaGCvySBAeZqNbCE29xSUip1uj85vp1k4AAqTMGkF",
  "key5": "TbPtvfN3dcXLDABqMkjX3ZaD4yYebsZL3SghMSRUEFUcPBp6F8WzCtJd2ZUBstoUXNj7boSJPe9bmwG2dJyRfX5",
  "key6": "4Hav2E3z5B1BGY2Ryx4wVbaieHro1fVpHiphoJFebEVWzWV4KZS5UaT1oVvGuPtXELV8rHD8ao713izJvnbi4EAH",
  "key7": "3TfZEGXARtaMudjw4FnDGKSBRkG3wQb36VzXRB1kfQYdcwPMhELUjvDwptYK9XYTYT9QgbkrSGgyaP2ox2uxU6bx",
  "key8": "4zBXTF6BbjAvRJuMKff1eTUeCQA1vCK3WrLWHQsTsA2ZhZUbUcic2uwQ5DurpvfdQMexFwQURDv6MoZUdoqcHVLH",
  "key9": "3rVU5CGyNoERKvLHH15VvrEYp2PdcTxtbFFeparFGQLSDdkYMSV1k6Qznmzfpwh4qsXegD7LDCgDxY5HWGuTDbnM",
  "key10": "2rSqjCyGZSeMd7R4FW43KgsgdjnT4wZhnJoEwyQ9kwDh1aRjCbrWaGXnvE8h85JLMLbjAjFMJFBo3sw7sqxKSGJn",
  "key11": "5S9sVz1sxo9hnBUmtsn6vMg2i1JQrYBL8uaaY5AiLkE4KRjhtJqm4UkGBvKWPnyYR6M3pmh48ajdrypMZXHS2zZe",
  "key12": "2KXG2y6udDCWmq4mneN6Gtx5CJSt3cxvQnMygUcvVsoCfin3iVXS1yVNZK2o9RRNrrBVHY22vHHKoy6bTaKx117i",
  "key13": "38hL5kDeiAX2HdqNmiReZaESa8dwxiJSFKmLpsaJ76QnpKQT4zsh87SHxBJBvquv4mcHttVU8NZGVnUy4ExCtQFH",
  "key14": "2dRik2BCC83j1evYYUBnhg6U1c6BVaLpciZ4xUrrnqCntbu7Zh4CZYN4T3b4AeVMoqDye6xVwKgndw6BzjzimWw7",
  "key15": "QaukafhksFSQfAv9Dt46zz4zxF5CuHfuM6kacQAqCjjCrwBmt2Za9Wt3UugsZdLVnsiEhp4gLiwJpzE5FuPfaqG",
  "key16": "2dv6ZV5NVogMyFVNNvFQZi4zWFZ6e88PBdg3VqKw48EvewU5vYMN3E6L3FDyf9CfFK9SZyB54iZGQ8w1sFXRn2Rx",
  "key17": "3nyNuQQhSssCX8ZBgFBZGPcUyLq6VpYsCuY2JNFtWov7ScomDFte1eScV9rBvPgqvDWWmrzSCgkALunB75mAMswo",
  "key18": "iae9eVEU3qDPNDkxWm9gE3TNfnq5qjiVKFjCnzMwibTc8H19AtHv3txFxXzNWguUVdChF61b6nUrzLtzHrDqyrd",
  "key19": "2qFXENd3YfMvzBC1x6sSw3ZNMUdytZw9e4ePBnfWXD4zeY3i1SqY6qLsXU3dh7a1NVYHqfitGGiSTSnnXXy5uxGH",
  "key20": "3waxNsakYZgdDz9jFtrQVvx3NemHbK1ci5ZauJtmGi2Kn6QWUjsrtuQwpUVGUwvyp4TxHTcQGv6W9uAPuJpyuQJY",
  "key21": "QMxKB47Rmu9SWZa18PRSH8xQncxc3HcbU26eTy9L3wNKSvD6FH6tUKbjXAKiaFyRc6VS2D9qpQNxo4aKthxBfiu",
  "key22": "3SLMRGcAGWAKeETfQS4bRkRijiKJMQhMQov4AUjgcYg3Ju3SoxYqfDWfnLE6bNw7NjdquMwVxevXVJKNgD4XzBH2",
  "key23": "pySHjwg8b1oEhPFnQS2J75J2HFEWcMFEvhj9rbpMTXGPKwVf37pWwASDbG5QXW9GWqtACUWa25eiW9LyvLBv9ip",
  "key24": "4CbpxMZfRhGL4y3Ze9WNCxQZvdhfyoahtUDbs8URqbx4U9P6uXm54rbAyayYvYfU5tvBCMMtRo9cXjUj2LUAUkiV",
  "key25": "5DHNXZYRza7MMqpKvBTvgjZaCnY3hXSzSXsatCZfJ9ZhV6f8gUMzF3pdvySCcC4mAM73mynwAHVqSh7fJN9UX5W3",
  "key26": "5CVHdgXLhK937kSju7Fy3vdDMUGLxrz7E5x5pBp8u2XsjLL9snZYsYceZRM1Sr3LusqVS9eSbytSNxajQ3YLYHBF",
  "key27": "vs2isSDcY1yH7tup23L14HaVaw6B3VVJnbffBpFfkgkFsVi8FNKcjAfyk9BmgPUs8bXDTSWVQ7VrdFFC8tn1reu",
  "key28": "wn6HX9ESpaBTUjwrR12z4qc7izzWcTgpdkbU1FbDskd6HDVYSMdRGv3KinUczJdBaXX7hRwfyDmoaMjExSz27gD",
  "key29": "ewQfKVUtztXnpncKXA78jBcuntZgXxU3ekNQHRNTXLyFrwQR7zjAArtKwuwmuAtmGunyWiJvyXUKbxsCxYJnf6K",
  "key30": "VnzGudqd5VB3jUWyWFTfW125TK4QWmgpKY1HNojQUYm4xWJ5RfaipAv93APxsdxz4oVxbNndJYzzxguLAwwoCjJ",
  "key31": "2wcmUMKDRDEkyzA68aD19tmkWfhiNmXMeR4CrWEMyyNyy5tbHjAe6nQDtWMAzQGkSRq7zqvSeQMi2t51HyMKsYCx",
  "key32": "5aLNyBK5agDiaZqixs9Lx3Ytqwa6BNj1szhWY52vdLQsTBFMAzmC7wVTgpRKqfUpYbie5HaCFNbRaE1aqd5PWPV5",
  "key33": "4yMptYaoYH4Ns7wBTWi5PduGeB3md9dFkTMad97zW9Ecu7hxg6XtSJw8iFC2NADaVKU8Q3nxPN3TvjzQbSkTSUaU",
  "key34": "4GkTLYQ2Q4YaTnuVssfVE62Q9gxoXR6WxkvRbNnNJdgVtdYHY4Qd3ZQ89qmQm5PWo2vUwKhnCLoFEPH5V7ZD8N9K",
  "key35": "29zuZmJwYoDywTnphyEwqBovSPiothrMWi4vHeFDR8tRLMqqiLh81iDYoahmHuPjroYqwBucdnpQiRGnym97Evqb",
  "key36": "5vxSXYwqT5eX9iY4ndVNBNv4L1fRj897miUZEQWH5WDYVpWCLJSJNUCvJWVXWmc3ALZVbvVDDgaAexJRrfZtHSbe",
  "key37": "5ZKM1dhVLieozFXxpsBRYDWz41SEsDrh68Gte7i16MNesLjPNAsbgDh9wRUtNoeLJ3n6rgNsGbvPStUK8bsdTVbq",
  "key38": "5NscyFH6xYSvCD1f8psvJQnvhALNwXjf7G2GVWb6kYVHGmUGMKzDNiFk8imwihtcCsmSohCnPx4PtNDJc9HML1zu",
  "key39": "23qTbXMNSJPkMMpSSehFdDs1X9hQhB82AP8BWbPuh3mV6qjmBdBUPZoda72qEgWMCvfq3wh2jaB8CkSUSv6DxfhY",
  "key40": "2xygwKrJEjjWcov5oGY3386fB1qT3D2bF7hmtgPyLgybu5h8Ky8UCMhrTjdbbT6mLjJo7msAxhvdoLWLnMCpkEc",
  "key41": "54FpFziHFzmm5tuNFnqxniyYuiYcX6ArbgrUfarqUfWhNBwrXR4c3obL23CAbLS8AreDkasgYEi6k9Ti9fjgpAeW",
  "key42": "3yLoCHCrGAWPBLmEfqcMioN8ipvsHb8HQ7296vpyhcF4BuB8kFgou4iftvUEQbAyrib1jketCqy62ZRdRv8wLisv"
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
