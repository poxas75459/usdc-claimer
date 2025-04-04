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
    "2xQguAechyjHbxbiKrUpjTW832CoXVZQyDTKKx1SiwAnNWkQTsueicZPHC7RGhDBJ34pjjSuozRV781kD5MEX5tR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbmKvf52J3RPyqSzmZ1uXn44g7gsUbvbCx7QYcVRty3uqk9VSd13KTGYa7czzx8TWUZEFZd5yNG3fYQsQS3kNeF",
  "key1": "2ikmf1WP66JWKXLhNpdbUC533ShPbHueF198DAPuhMjz2FsFaYi7T5UEsTPwjMjKyuy7sWGBoBoaQynxxA6FiKwv",
  "key2": "2FfAEKaT4PPJJd2AbvVUpDWnLZzFmMyZbpLD1QCDhVkvFeex5LWqo3NVmoeEYwKJYTfi4ZVJWG5HEDA6sH1H44z5",
  "key3": "56ofndFHL8gvav1U6z9yEiYyudXwc1TwiR6nfCMUWsUHKKP6ajA1VP7dUicQa3BFet5cCudN5uvfwEUGWg8vcBBW",
  "key4": "67R9XY4Mzyw7T7r8bk1MLMLPMXZetxtJq7yaGqG1dvSJPqNcowJfkVwAVYkRfLMPTtbsxfjiQK7keHkk34KZKhBp",
  "key5": "5DtG2tnxU39HyPDBTiEQiJKtdWPYmrTrhFzkCYNFh5FmjZapfoa5ExrijUJiq4ZV57VgAPRo3FPhWKso7X424ZLC",
  "key6": "611xyMFuYWxuZAkpnr8JeCTaAP14XUyhoN5P7zznB395wmGJBNXhdMELk6eE5j2GRtnCXzjLHuYhvQeFZyHPPBvn",
  "key7": "42N4bqYQogbbVqpZ5VHuNaNX3zu8Lx22Yy4d6XNbkTD7JgDGzFDBa2jgUzD1jkDxiSnA214CFyi4caFXWzSkar6f",
  "key8": "2aGJim3nJbzLzatXwrB5MU7zMZbSNJp6iKBSVoQyTgJrJk9VNeqM6cxsxweNp3h16hmUG5x7Z6d619PDJZm5fvZy",
  "key9": "BwtzFwtFmF6W3YJUX5G6KyV2J8Ky7mi1savMVctvyKG7wkSSCLSE99dWLkq7ZPu89wKb66B21L3k3hbtnCyd8z4",
  "key10": "4U5MmhNb9E31QEs3xwm7kmqwJhbjvFpyBr5iFhyVeyE1EgzfJrFAyFC2jwqEYPo7e66FEGbntgaFJ6mP2ESFVf2R",
  "key11": "4XdgDDdW4sDd2JortjeH2n7DCwCHcAdqA5Uax5MaX1PDpyMVu1bp3Ks1mtbyAD2aiwmihD9L46Exz52q6yRmhq3S",
  "key12": "59z8tW31peg2rfDpmSea8Nxap5zg1uUKJZ5BX1CfeUWPyDbyNzymNy6QRg2e8tboxCsgB18cX2FJ5ZypbXLHpd6A",
  "key13": "62UeefoMLwQBYH6sdftZf4mbo1247GXaeYnDcPZnyoMV7kz4rzcnsWsQQUy71XtgRcGpiwTgPW8fpeh319g7wjaQ",
  "key14": "5oNTuRqsE2oNVmQ321wkQRzUK6JELYuS5PsNgpzpNTRc7RTECkNdyQMUntRmhshkhXg347LeiWzGqP1Q6BkDixUb",
  "key15": "5eU5irw3Psk6aB1Mj3BrZVkFgF18sRh3ocF8qD4BRc4m73JNQ7csHe7kabvTAEkh2MJMUVTrD3L3G8aTFr22Z7ch",
  "key16": "3onzHdpQxezhXa2ZUqNJdLfQkgHKEZyZMzvni3WV6WYpWRZWGFTB7XDC3jdcCseVXChaSzDg5r8avnwEwXfxk9eS",
  "key17": "4MNUngSN6QH6XyvjwcZqc1hAZzcBGAC6rqta3CxSjVTdwaNmrsq4i56Gg1qeCNvzkEtrNw35z1ok87sLXZTUkU4V",
  "key18": "23a8gHTY7Ckeb34Y7JzTVgt5sGWF79fLf6V95XZKaqv9gh6mJPXYRaTHf4qRYvYCbAVdi1SYVjZB3JY2Fqt3JVM3",
  "key19": "4W15FMANFV4bfuVYhiBACwBme2E3jBJYqAH7gSxLReh3RuQ7wbiSrdPU6JvoK2spAn1ZQq1GzikMkNdbbPbvHxsZ",
  "key20": "4DVdJbS27avtiQvxTSup3yFRPLDUtBkBq9GcMXR5JHCcDGkBLhFHvBR2poZe8U23RNA1u1tJuTWGytS2GwnHKQNa",
  "key21": "3QS5euSGKEPqfEBPoG3anLw1pbV6bio3NoPXr3s2aq5ShgBmmz5VzNjRN3Ne1cBuRwZ1eV9ZxgqQ4g9P1REgnRFi",
  "key22": "2uEyfG39SwX5QaktvXWJKhecFvLbYqQKJKqFk6MRvRjaRehYdMsrgKAW6fph2SFGNVy6Y3yA6qV4dtxqGRt3EeGv",
  "key23": "o1eyKk42q3L2hdjw7AeWdXDHXD2QycD2saaa3TiKbDHcibtwPdn7ojZLWv2z484hh1wsvP8jnfyUHyAqEmyqo41",
  "key24": "21vujbVEnXFg5Em2FA4GjpGvwzYn4krbHS5LAvUfepiBcAK6nbx1CVPJmMAsdBYkZxkSivJovSFu8jHUmmfC1tr3",
  "key25": "5pQaSSfWtdotwKKdsNDsee38zHepys1eU9nUnAJgddEnGPcktRhojh59ESbmhT3upWy8nmR7V5BbaUyWWBe6k1im",
  "key26": "4zcNMgEbDJiRXMkRuwYhs1UjnZcx5uMBJXzfNVhqBhnVr7EeNzHydB7ZTCek86jdkm4Ui9h41rw5uZVReTSsYNsE",
  "key27": "4EmfrFGJWdAoAs4RysoskEjjH3Ch4gZ1JKTo8bjA2qWuGPir7xDctGhf4tQYqGKWHAhayoVVLUcnVuewQuMBJTub",
  "key28": "3miMdry4Lk6aMo8JrMN1S66uN2q4JqtxAWMDSjedne39sn2DGP5dWFPU6BCrVmdpPtqJoH5YZLpyDzfUKAAFFaKA",
  "key29": "3DTMvG7CXvxBPS4WephjS2YEzpzG8ww4Ef7eXbV1idQVZ76oQN6t8o5L6LaLXFF9yuDrt66CSo2i1GQGBXfGWYSd",
  "key30": "5aAV4doeoi3v2dmkgC61D82hnbsDECxDGTkLbgMUPXoRw4F4FaFs8S5pGC1dwyJUFwY1ZsTS8u9VnA6UHyJLhPbH",
  "key31": "38sdDtyQ3YPQtRg7hx7DkcP8PnTuPWXbbpZ7ojf7mSf2h7qpT6c6HUyjDwLwQAArLrPJVW7XZsDonGBK637VSByE",
  "key32": "3G8k3pCFkPvWyikbQ7GNMk2Xck2mJ37w25K1GfnStfz8fuHwbfqSADhBvT9xng78m8utf4pivJY3ue7oCPmPHd2n",
  "key33": "5H77MpSX5EGYx18dwsqASzThKcyV4bF2rt7NJm31EZ7vTcn1eK6YgA4TZYfTTb93KXh9XoCLLH6eyJor3jMAMV6Y",
  "key34": "67HFbPoRMDNhpvv8kgY92o2TRUJG53KeQCcbg9P11oqGFVv2aDBcTH3SKyryf5CSETTB7Y9ifj7UAakjP21BUFNh",
  "key35": "36X2MwK2uwDk81SyDD52127ekFmiLxLi7ZsSMjYyrLSVxnM29UbMSd8rpRnJqpGktsenjHQZPAVoVhFYggJcgKmY",
  "key36": "t1NUfgKwLoKFeNpcKMbZdu7DWa7s5fF9R7MJA8XMNoZFwTqMbYkobuVUKXJ1LLn5DQjkE1muxpJYsxbbqDWuiQS",
  "key37": "2XWsPGANHMVfqcT8uGCz5CxdkhrNEcozrVZrEHB74EytwBQCPUxurjgptZEWoAfyUMeVfCFsKa1ktwpowVpnV9Bh",
  "key38": "g26qW5BEhN2gdVtLyz6weNDUvPGDmYGStBjiwK5yRrLhttBKyvJTUESFbcXrT3fJn98CJD4BAumFNXjtxRtftkK",
  "key39": "2fi7jXeioHgeAK4EXMTzuXJbFfbe8BJPfoAzjfmv9Ran2G4AS9orPPyQ1oNS4KRQ2JfDkZ8V79XEAPSBBUVYUeaE",
  "key40": "399gzWAFZckGpxjYE9MupJT21MHzYnSBJiNFK3YHpnfjwaBG4VDWbbMKsowBuTFqorKVgfQ25S2NadHzyZMG8SPA",
  "key41": "43ydBtKNJ9nyC81yAcHodPdYMbMfEqqzkeytRHDspS8VrvJGrvfTtzKSntdtCuucKMbvsuh2QuQ9r7QZtJkJJbrD",
  "key42": "45ZuJBCTCbWySgq8P58GSofyjjFLoamGT4ZS71c96o2Kn6VNAGkdvfM8Vhp2JwzxudKMXs4YM5Wy2asMY7fnndKt",
  "key43": "6BbrkyV8JxXMcuiuPKVw3cFdseZSTedTJ8kUEi8GYLumHv24WNfECPSxUy377rgSviP9JADJiqah93bdEnM4zqU",
  "key44": "3DNNzGXc5KD3cTj57NWUWoLTt68NigeC9WkZrBuL2iqqHBZJGV4rzC4VyoEFff7e3Bn4t6kxJSZqCL8eNxUibva7",
  "key45": "2RnsjRmPBcpdec9oF8K9S2LyDa4m2peSRab53bmDMYrNETqTr3ixZwLL7r4aRZXYy5Ac3bzAcLNMJgST7JpHkk5T"
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
