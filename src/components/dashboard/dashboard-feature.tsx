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
    "4zShfmFhMXsqq7TxY7qnH3KQhuDYZNWpWW8j7SixBf8oLq8Vxd9bE1T7Vbf2Uj5SUtGHTigCKE3tVWWfANuH4S3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmUZBfbixMhZhsaFwaNi6zPzus7F1pYfiqqL9dng6vLisUVcxnqdaWDCCfMwo5W4uwQMm8ko1TCMG53BuNcyTz7",
  "key1": "2Uv6RXzuAcGfCPNzRZpMmUUgwguM7cpHBF3mrhMvk8UvyQJQtohpM8Ey2sjs7qgiSvP1ELACNKmoZ4VypEZjTD8b",
  "key2": "yWoz8JK9Qe1BuJBaovF4f3rk94yEuomNDtf6pcFWscTYF8d4jndGJoNniwsrCAEQaK4FvVX69U8PUih1c1KzEYx",
  "key3": "5R4HJRvfs3A8g8PjTNRSSY1PdJGDk1RTn5m9qqkvkE5p2TE1iGgafoDRJ8PGiyNiiQ5W4Eqy9fGaUx379SXdh8LM",
  "key4": "wEgaD1n6fWgaybJoPnhkHGo7hiczDABd9jH1Tkr5vru9CCyHoCUNUD64cwjPrVSAsiRucRwgu26QXTYoaFJZst6",
  "key5": "2ZwJA2LKVUAkCK3Xb63vPc9Uk5Tu8CV7nc3QRdEQ44Zyd6GurV9TQkMhVXhQw2eeEL3KbP8FeWxdxYLVmKWQui78",
  "key6": "9G8mLmHUxzCm7ZFNc62YATvGPtxA51ynkp9ZVbHaknizk9zVFpq1H5wi1Kn6wmMi1sopnbWduZvAqfqngzdKwd2",
  "key7": "4DWjCz8SCvTsSA2VnQsPVpMFJ8Udxj299d7poed2jLXq5hMd3Gk3hM6xjMDMRis71tFiXQhYt9AZ4QKYc4gb2KK",
  "key8": "4XB8EiEybXmL4zoMNXUV5puFVxFbNFtTHcZHz8XvTaSa16fsqSzMrpj5NKuW7SAPKQ19eVhht3Sy6MU1894XknUp",
  "key9": "61HrpptVARLgtXmgqpnWk5epav7YnE2RUmKfyvk43uQK5rfwbHpJcooBhe7HE2PxnqJb4fVP5i5p96HgigJRDmMy",
  "key10": "5EdqL3KykxKqKzPcN1mKavcfYv65NzaeKNuK4F9fpArQDprcdTHyNqSvW87xu3fDWTo2yKcBt8AmLpMuipnwJ5FQ",
  "key11": "53acCiL1WfaYuqUHXnWTHR4hXVCbDwPPcXdTkW771u8wmkVFax5jSeASkPGSzEws1z8XnBkRgV3nB5CfSt9Z8Tvv",
  "key12": "4uab1uMnUQdW1eEtshZBmKFfRxe5DsuHn9p4ZiF7K5V1qSWiz3f8sXT4FLLWMweCdkWEh34W1WcLoNjLMpWP4ocG",
  "key13": "4qNMDQuvXe5wNiYR5jmY9caSSMZzQtrGWbRSgsVXbJCotaLK3xHr2gnjGGfy4X8TyUUxP7mZEcDfBzFNaeNVLWwc",
  "key14": "3njWHkqSKHqHNUbsSxDcVakHNUuTVCfC4GqocwZEBDfiCvQN7oFdSTyzcEguVL9CuutzHrvMcCNsLS85YexmDnAm",
  "key15": "5coUz8ipoPmtoMzWfvE2qiDtfSX8znxewejko6BS69dS7Q7cDpcwrxYqisP4DwesqGfZqVgWa9iUPJDQFGT7Gskp",
  "key16": "9TpqFqPbSq9DuzLEn2aoejJ5K5WFhGzYjTX5GzAE8dgAmHBzKo7pPhxembSNvyPcDLCVvEjABzwMUAaSopTPaLt",
  "key17": "5fgWbL6hQqzNbV9CF9f4zbTZfY6iWxJDYzSQ8NrHzcCTh2cA9gn4yjAMc2MzFjvS6Q1bUnBqLst3JuQ7seopwsem",
  "key18": "5Y9ouGLdJ1Z5bby7g2MUN2ZHxGW4knzUUyKi4Hhu9MV9ajFh7X6YJNj5DzyzLeAThkAbhKRFT6ocLBJWPWL6mwLP",
  "key19": "3To7kLMF255SxWhSAqZk66Tuwp3Ur8zphpEtA3hG2sDagiZrdgngFkVSNw7xGzJL4uW7GrTZ8v1cki6jjcoazibV",
  "key20": "2WGtNpwuyqURj4E9N2gCsXAVazmpAcVMh5YBr9vq37iJV6WqYp86WzHySBsD5R4skVo5YVcbHBZ7oheBbs9ihmDt",
  "key21": "3gB7m2qjr5rxYF2GhzptjnpL7y44KoU2DqpVeDpcw2w9ihwW3odois83FJnbktuvz7JsR6FHNwpkZJe6PmEDaPNJ",
  "key22": "5owc7CeEwoehBSheDvijZebPGMUbfNghU13wBpCY9SrXEDw3PuKZFxuLcbdrw2siBFfZrohoL356Mi71aEmMoGS4",
  "key23": "2SENpT86aR6ppYPycuVaMck2LQEErKmMSHBXmJWQLdoc9nC66ZEaSppSpQvqrimpTr2GKFwTK4QYjWtqmF8eHCvQ",
  "key24": "5kUXxwionqAPZETCqVNvj9bXbc4o1Qb6oy5HVbVNipEyxWwtz1BSxeHUaf5Y5EqpNd78z92EbC9TVCKXzxuM4kD",
  "key25": "65oSu4T46v2jRjCMLq8FzVZKK6dDJmPsMTShBHFbNNTnP5LaeBaZvECkk2P5bHK48rKCCrjb4BVL3cV8AcvHqvsj",
  "key26": "c9fWZRMuqjrdxCvR94QwVAg7x3FPBygYdTEc2qeXVw2JhBQg3jjJTsuwdk32BF8zG5avHnyAXikwNSDcPH7UUaA",
  "key27": "3ndPv2DH8kUYeZgRaUqxHpZVd3pvcuD1DQZWL5qgyZYpH6dnSkmRo2inH4KDiPS1ZqoFae9jD2k2NabnnZmwoKu6",
  "key28": "4kiim9vvRambZ797CrfqXQxNJh2exZHRy3u6sefbfhX79DsHtYUFtLiXta43zQSWneHMX5wW9dDtDz8DPQdby1Xx",
  "key29": "5pT95fiNJrfoGbVyFSeW7sfDUhb23w5C1SpgddQDPomWzGZTqKZP3BQPRFWoxJULE5kGe38R3W9gqtrgKX3hB5mt",
  "key30": "4izHs2CUsNJZnc3J2bbSQAHGVvaHo8xUrbwKs8RCsDTgijNnAZQhSgqr1zd6h63JVHhNa9ZjXb5uXvQcyFYFVJa4",
  "key31": "5AEPhhebKAxsnCwYuHMq1jTXVW5yuntaC9usUcyyokWb9zMdE5FPeSxNWirkMN8T8rE595rK3rGBxzgyufrX5NNu",
  "key32": "3JgCGotqKiNUcyTPNWtGbdJ9RrysMDdg8xHTRQkSQbrYoj4TVHXXbg4Kk7jVMn1ipR3qFbN3YUmedo97sgUiA6Rc",
  "key33": "317xQiLGkgU3LVFvkoRF9r2sjwNWYy49cnUnx5AMz1g6LmFKSXc4MiqH7dwjNj6cQXZzaYXZ7ZEVBHyvQeEhUitQ",
  "key34": "5Siy6YcGgmemXjKcWskirEuYQViwETNvxtAAFjh1Q1rEEitq98AS4YBaobYUsuYskYJX2EDuAok77EH6wRRFPcDV",
  "key35": "4fMM9d2MKgNMTR5GstdfzzaG91k7AC3DbjTUWrf5XGkyYq1KV5a3SjjBeuaDfNkJSKE6NYAenUJjp26aJimEXrg8",
  "key36": "2hLsYDagyyPxRtoRFzWSTmRo9o2kNtm8VVdKZwQtSRqFzia396vbjs4FJEzzLjmnvJMgUXaK1um4sKbQXimdBSa7",
  "key37": "3XZmn2Wtkyxnuj5LzTzZimE31JaLgbbJg8rm6U6VWfh6zvDigEN7sNnkCxxyMqbV15Vkp8JBmiQFXdwEAomcntyu",
  "key38": "5C21nBdGW5UL4PMMAT9dMxC3A2PZYEXzJSUuYdYHYz6oxwSzd9pscv1tLG26L7csRGyiirGZMzs48CxzV4TU4rpm",
  "key39": "uhRTnmGeMrpBi3hraBcaubxq4EZQzzU8sfMcMUZ71M645g9KC498yL4VXBDQgMJQjJQ2bcpxY7yH2amRBps4p7j",
  "key40": "2YjrnksABCbgFBUh9gv75sdCmPXWTRrmiyPpABEks6jThEjCf98aRxnSAH1ZU8qKS4cTp9oZpXQPmZM3oET9EP37",
  "key41": "BhptcVJhndrcWhK2HwkPQr2ahXaG5aAAK2P5SekrrTDJse6a1BQSrBUkUToBbMUtb12uCJkMzM4zoDH1Dwc9ciZ",
  "key42": "49tVMsda4ivTrrFXyoc3UiJrMpskf4HfwE4UXpsuAmgSFp7fM5153SeFJEG7dNa7cg82keLfW1RyP6ESiCNYKmJQ"
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
