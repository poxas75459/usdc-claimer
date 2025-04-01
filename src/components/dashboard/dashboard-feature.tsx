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
    "3DR4KFxu8RKn2M1Dg4mwQoR4Fqfq2znaoA9S8whdH8NLNRKVnpV185UbPibKu7Ypm1VinHU11KC7vZMNNMQYK9Qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tH37WdXH15D7YD7x5Y421K4w6XKhXVQNfe71khFCrRHFyoCzW8kuXCHYbJXyyuXQVNnkVF4fvhuhhWo32JrEVuH",
  "key1": "X62ZkKzeftATTeoPD4aDjMxnbavvVsT2Tvb7JgVoXub4TnEhspZumJVZvfZRpd9rZx4n7cEyAA9EH6gqoT37VUR",
  "key2": "2L3QEiXUDJ2ptWtZnxWKcgZX69n1Lcw2Yvwmtxw5tMn3DetDq7a7vCCAjWmXNMgRKWZ39unykEBnzmPEGyAG2BCN",
  "key3": "3tXzYMBmocrD5FtvDNfF6QGZ5Mv4eAx3PHiupyjvuxUaGeJhxCPY7RedKhhobUn8Waze9uDMCD1qqAoZt8Rk2aVU",
  "key4": "4FQ1aYGko1bkCvzfxr7EGPoYhq3ovbtmfxUNYPCSaZgv4KW45mCv9xmxM8QW8jx53BdQgjUiR4C4DdYhUAwGUVi7",
  "key5": "4zh41TmBh99ZNJVwkfLTnByCPgzCPUqohTFnhoot7PpE4cGUipGqKb2P4xZnGH39mwcrtodrXoSWyBeAhH4ZWN4a",
  "key6": "3MeFDRUwnq1FY2K1wFakdUAD7jarJyU33ivSVMdnMw6vzTkFwa8QfBFAAqQTV4jUsgirkkgePPj37uiiLde6ybhu",
  "key7": "5VysGQUrsh6D7gNdiRSd165rWWgASwccebBoGoekiy8xjwDHoHqYiQuDwtYqSediJHo5kgwcCitjgyQv4YquASep",
  "key8": "4ReMNr5TuMxHZMd39jYJGVeh4xcjSixTS1KsxDCwh1Sy1aUX1ChxRy5eBmXCyx8rLKFrE7K3Z33S5em2xcZhgFfP",
  "key9": "4T59cZ7zJxXfTBeSamAKux5nj7857zgtWB3F52M7mJJSACbGa8kFWUYnpwrahy3UfsdSyJA7qXChHC7Se26hWTRo",
  "key10": "2LDvjE1ivKGeCp8ehQacNZpqJxKqW8WHY7SLuMwQUZ8PMFoZswaA4XPWe5nd471gxuf1RNcDksPzjLWuKrUnfcee",
  "key11": "66Zof3gmnJCMc9ZRghWcdELy9EKmPLKYETCrua8iXDnJHCPMZSRcyFjSALNkptGHgEcyStKp4STTrCpfLuv4EPzn",
  "key12": "4ubJPCwZgwSWTYmwwwBSrui776YwKEa5YoLgVzdKW7RWTyqMsXzPj7ZApUnZRgq3Df6715zrHGMxiH6gX3v22mBF",
  "key13": "4LKF6eGx1fpBw9tyV5Su11ZqkQPXoCZBwkbBZ6juUQ3w1SDHxsXj3SefhqWaaf7AJUTGQHUM1U8sR2UJBW5tmB8U",
  "key14": "2qnyR9DHWUWwPFV76sCPoyg4rpSxzTHHTdzMF2iHFYZVXVGf4BBrhgibe8HxZUDQqjwbzCTvsL7WcG6yn63aSiiT",
  "key15": "5FymS9L97hU4AxHeZkdhBjH6HJFCXvyYXS6tCYYX1a5KnpmjtjVtggHvYDy5pss95qPbRqU8CfsAyCiCZgFb6kfs",
  "key16": "5wTETKE3mLro1WHP8oibpFvvihCdzZLei7j7JCKU5NrV5GwYMpeQmNSUStYtjnyqCLZnrCeC1YPiQUekPsFK7eJE",
  "key17": "3GbnEfur6kXKdqaT9PrDCpkSbuYsA1K6CFzM8RpiVWMZNn9sqPBSb6zUxhVtpiGkXn3EFYu9FB9d8qLEY4jLjiri",
  "key18": "UP2uBN8dojokGWNSHE7y1yqXqbNLeoVUVXdLXoRFeXcHUqoJmbAMAbtWGrtnFMKGNzDbcjpSysHxZiwcZSrQLW2",
  "key19": "2va2jkmH4p5gGDLT2ukxm4NyrGiv7yJht8x2KGfAGWGRPqBvpAY6AumEmRNBZaaNNoS1dsKWnYhmJ4pt5qpigYuK",
  "key20": "5hb7AwLrZ6ocKEjPuhSNyPx4FjGoa6DVGhWtxchppnrX93GpBuT5TPE8BUhnUMwNffR4QMajLAYVPCE6DEmAmBq1",
  "key21": "dfB9pTshEMJ5bbshTHJxDYokTh2QTK1XmvEtQxTwtvsVnYc39ZMT8EaHxqW19LhnqfWxh46yAGeTkapYpY9Y3kL",
  "key22": "4aUYNCbFcj5Mykb6iWxt9qWui41n26sVZW1AgnxvE6VZzthAN7yqxFSBhtmCEphrGNKjiVDTXjJW3bWKyCXAFc2S",
  "key23": "4PJHqBv8DPXFjPqQACTPZyaDHX4H5AAuFnFud1REiSb2QFVDhiC2ZsA3jxu6cmWjME4AywTng7r9c347BucMnBSy",
  "key24": "5cziSosR8pWfFqT8CznbmmufLm4wyJaSfiQn7mvYQwhAmp6UpYNWKq7z5AppaRGJitGgEoKq7vgt3cqKnkjYVQgd",
  "key25": "2D5Dof3hcwH8yKYzioDXbPpPEYbMhYXoLTNPfPA9ne6PzqvzbZD4gEnrP5joaGpKGVarz39nxCwDDGmByrc3RnU3",
  "key26": "2Bb6M9naTUkWoAW5PBJqq5o6BxVdihp5LS94NdZ7v5z6JcWVhM2iQQRj9kyXP16rziRVGJXcP4otL8etf8iDR4HF",
  "key27": "6mWY3wzZHur5TVKCxAjeSLv2wKcmKtZrokQNQe7Q4NDR934otTnannE9TzgRKWQymB3oQdSRRwz1Gr3wFYExm2r",
  "key28": "4LYbbSz9jX9jekcXGLEuwGD958vRMcyoyCYPhndPPJPL21KtvpHRYZX3JBzbZa4pvUUuS7MzzZBC6kdVDdwTJK2C",
  "key29": "3YCncbJLCA4PUG6LYMZseZFGxp5pLZKuHWDs3EA5AFG71H8KjabQRTqkRtp4LTLRmpoYeLUwYWahdGCMm1gzfj5S",
  "key30": "3gopgKGxPVg4SAN38wvvtbWwY6zuq7mR5LnhMoZAD3sx7Yzv3AH5PqGms3vuwrFRL3bd2pBnYuurhuvFJjaqxGxF",
  "key31": "2YMGuTtfV3hzAmpA1KZRGhKBYpPUZMN79JHVkbY6FZv1dw41WxjVmZercSriYyT5zQev7DRCuQoamG2cZf3nZrbp",
  "key32": "3C6jL1GzTz8sP446ntMioXNLPCmGQvqzov2PQSWDnZme46oV3cgy3SNeKUNjf8TE3pEwLUz542MXTG8KMHw6VFE5",
  "key33": "3aJmQrt2EZkXVo8GTTMxCGL1zrtZXW1cgEjrJVzGbfqFPWBuZ31MSX97ZNsYg9Q5YcTfK3fCRQnw9CTtTXNQqw4W",
  "key34": "3sM7YV65NB2pEfDrXsycTjPJg8EYzTeqgDTrWsik91LQt6PJ8SGbufueHvwMuJPu1iLPpKD3iXqQSNCooM8ca38f",
  "key35": "8iR8mygNgx3QuFjRu1V1m8wecLs4UZHAyZJsLyn4JqSbt4VJC7p5MnPnrkMAGqVWRNbZseHQFAtqbSfihCDJb32",
  "key36": "3UyBxqKh8aDf2jRQLpESxp6jSZhjdxQnJMjAzxkp3m4jdL1QSnmSFCj6WfEWNQdZbxSyZmWDG23CivPkDyETZ73X",
  "key37": "5XxFak4YkmmKPWXSeKqTLWZ4oayMZVg8a7THJgBKhTWk8sRqTJxLEtndSqKLyoNEM3BhGtBjRs7PinTFSCZVFGnF",
  "key38": "4Lj8zVws84FqdMXo2S4tgy48V47e4YXuC1ggoTJDCpwUzP6d5Zw7i5iaUzEctL8BkWiPyZZLCRFiiQaCz3MLzeVQ",
  "key39": "2oojjkAD55tDf4xRJQP6XWKzWegdHquuKNQGJNVSUgR9entZNRzDkENo4ECueYc7hoS24ja3PyU7FEaFuSTwC9pj",
  "key40": "5zG1EmzRocUJXtbS6QYwrQF1m4L5xxCo7w1BN5P5w2pFdy7mmuhAwbhHYXzZoU1k9c6Kq1bmr7YtbUg7MVW8JNwd",
  "key41": "4urFHodrken1tELhKQwohRndPNtBza9NjFXj7H3uYC7hR1wcwLmHC5eoTab22Ps9dkdyLmLSxV3iSQCpMwS9s8fU",
  "key42": "583tR9oiXLfiwKQ2m4Fec5K3jBmYifVrwJZy1VLrFyQiXZiHy5VYWmzrX1xRGUHu2RUBPiYP8S5dHPYQo6Fe31vY",
  "key43": "5oV8PmQj8gRV4CYx69XNgDxhqQySoSjLYFotc7m1r7QYMD3U1on6WB4YrtsQ1vxescVX1csSp2aDFTyeZN3fzvWt",
  "key44": "4JFoPUThLyzWzXYjfdupMdAFUwuF3566jsZRqS22Ai1Vsbxg8JGAq4LsUJVDr1azxQDD5KBYXR8PNs1AyTn3S2wf",
  "key45": "3Vay8djXqkN5JJa1kwpsdAf7qTmQVK23qd2qjEkHHbk7QpTsnsxb8mnPVrrQM7JNwyqTopjzy64rLnS1znaYS5GJ"
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
