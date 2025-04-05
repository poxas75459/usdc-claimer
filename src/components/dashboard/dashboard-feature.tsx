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
    "43szKw4idE8oRJ5VhFiq2vDBTM9Ly1JHKwxN4JWT5jpK7hL1t1L9f1hHZX7pp9skLEDXjx92cHPvqEiHWg2Zgujb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p7N2nX4DKkykMnP3pgdeaNYQk1jGSqw6GiPK2TCxTnSqs2qiu2G9MeTyGpkrL6LatXBoyc46u2LW8fwtFGU31LE",
  "key1": "4NHdgRG4wscV5dQ2LoTt1bx36NuQfF3PgRqFJEvxKRd6MwjhWDJcQH94UZVotazt42vaU5Nscwkjqu1yB2ujukUm",
  "key2": "3aVE9gdDhPHGk6SnvLJf9jDnhbWw1x4huQP7ryZeZ3QZJHDxJbuKeLLFpkmGDNSeh1szbntwbURCfraTkGv5g1KE",
  "key3": "54fqbz4dANjJb15cEtXay4v94F86vjQi94E9UYwsXRgamcqXGTsYdpgdPm9NFXeKWmTghpt44vsd7HTWzvsAoq9a",
  "key4": "3TZgW2fd5KLmXhyBc17BcAydnRS7NoJjxzVeR49KY5dkzgeBZ3Zhku5iSApVEpyLBrEEaV4wJehsqjvspe2dYYhM",
  "key5": "4ssSK3Rvhy7Hr6E3kEALVcnAN3f3mKUwRyeZgyzx4mDRQvFAM7S4jWfHe7PWNB1RAmT4iSVKELnv4cTAQrsw5awA",
  "key6": "3fyHVdyBJZLe4rvqQ8pv4Fmf8Dj1hHAK1dAzJvF5cii3bHZkJ3dDWVP7pk1XUSS46ULoJk4Kp534iXbxTabzwT9X",
  "key7": "DU9WoiEguUseuGzZsCubccBknnnL5jqi3M6tmY3oHAfWUy6Rz3hCP2uk8gNzHScGenD9TnF1sstRgcS8RUeuNfX",
  "key8": "3p4FWrjWE3tSBKExYAwtCw1DQhn4PBgobcfc5DHBqhhJMD37navhoQFxbroLEi8sfkK1M1caddCkQY923z8jwYLZ",
  "key9": "of2ezU6CekLpGZsNF9KRLpkhEWrGtm2bPcaGgYmJfjUWwSvPZ11ZMFvXmgjQoHYmf18wnQnSWUCPDCt7sAnHt2P",
  "key10": "3kaJLtaUj5rAZjgtMiMYrfKahfRnUUusrWJgus3b4QzWQTp2W5d4AUnjAtRxXfPaJSAAqy7DtLiNF93WFDDj1YNU",
  "key11": "3N6TNv9oJ42vKAH4YGXNH9QjFKyH6JFiSRDGx7hZSon8DZULTsu19uSW4fXXsTZcfk64GpWqVTUbq6WhWuLdfNfH",
  "key12": "45TvWAUDaaMBzo2VWRvSRf89yBdY3ybVJ6cK68bkCMCskYhBMjPxLcePYsibrd7xUu1X3cXiZSYx5eSTEWNUpv8s",
  "key13": "468BfoeMS4npmEeZDqTmmyC1JeTRhV9M1kCFoRXm3vC4eB5K9i7niWm3gDPyoucgR9K67CwGYWyyveMp5ETXRZqR",
  "key14": "671q3gioPRytBmJzrVUWqRQ5Xe1NAoNpw4NXMMi7pHn5ttJtt2XgQXsHJRUWYt7sZaizYENnFgVSqfEMrkGqzDLk",
  "key15": "4thrqCCWvgz9pDHj9aH4U3ZS72e7JarV3g4bSxK7522Qtm9W1wGEc2PHNSnKb2UF5k3uNbj59cEnGRPaCV5vgG8m",
  "key16": "5vNvUW3T1yKb5Dz2gcEfUSZbSdQW7YodS1UxYAPHsH55ZXBbGo3cqR8t1Hj7wrKKrWoQj7jqSJPSJgq4Wuxgr7ob",
  "key17": "2hytvD5TFf4cQ72yrJyWQyuvowtL26RktzbgbVpxHyjxbb42vFndSUjRZeV5ybcj3sG2vv71aLTQ5c7caQLFYQBg",
  "key18": "j1a2HsqFjqGPCLN6QZbPtzsdXwxKdoK3q4B8hqnEbi9a1qfcAkaKsUMJ22tA1MEHgeQnxdBADkgayC4MMrfobH7",
  "key19": "4ttvAvJSLetFFAjgEVef3ws1M2qJqkCkBCWq997j7CsxFBwwUeMAe8bAu1SwFYLHtXLFJaespcgnMjt5aLyKUUJf",
  "key20": "5kT1k29Rs85tN8yjxqZNccKfebauWVJZrB4yUxwETyQFVh71erdM1R9ByAmNnpoeBBovpbKwGne3uKgqk3R2QTQJ",
  "key21": "3zgsVm2FzYPox3sCJXt3Bo2MrgEZpqxdViMyvT7Q5zJJXC6KjGUjE2sjF7MqfcYftiP39GjgV1uEZP4yNEZQnniX",
  "key22": "33aPn5A4mjApXXyZQR8g7gQYQBvCEbEXaj6eA3iwuWET953eL4hUgQyseoCrqskNe27vubPz3PLT6e8vwSx4EmFz",
  "key23": "3QFP456LpbwusK3S2pAF91bQDLqFuVixzPYDofMx8RFMwZajvE2SGxcXWSsrdxWDDybKLQvTXbZgHgx8e3zT4dFC",
  "key24": "yezJMpkRxzHhQz1Y2xErgfHhSZn75SVVNVCfzETUjvN6AfB6xzBiGGhgKaSEANaZd5CzybnxaJAn3h5w53sUTFx",
  "key25": "2VodFwJRbGpgPFJNrs73JE7GXxRSVRYrp5a71pAEV5CQ7dfM39pPU1bRqB7QWN3FvLXNGsU1fmQxA6tTcHVcm8BR",
  "key26": "4i9ev4RyroJMBxdywpEYMHg3VJWZSF9oWGZNYVJDReH6YeCXn1Sn2N1zKzrWvFGnbKK4fmss5vmNJLcuvTfMMgFj",
  "key27": "4aDKaCeijVfAziMrJypRcy86pnnPcCGy8SR7RdPK2JDZ9EtxX9jXj2ChLcJYkeboXaEQCa8PwVnPfQtuCZbiKzAW",
  "key28": "327QabP75v2U9zT5g7YYSPVSAFKy9jsSDmCXFeamdNKxLhG3j3HB71yFWHkavUjhDwRjDCbCampf1p1TvbQbFUqh",
  "key29": "55NdYD1Pn4X58EcJZyx2ganEsdwPxGMAEmxyd5Wi1yh3pupThYq6gkpzHJ7W3UqAhZXwi3L8oQDPrf3VrKF37U2o",
  "key30": "4tvwj1aR6cVnu4MKzWqtMWaDzmbF6i5RZtakQAH6ZfDvP3AQUXmn6PHptmGs78nEvHZHnxU2UnnQgbn8GkNRhjZm",
  "key31": "3wAJkC5SZgnhJeVypC92kqo6BLasHxjW1taeMoEj43VbacftJKrdEJMAQL2qGpUuCE9m7YkAKtqcSdWvNhhbx3B3",
  "key32": "3vD3AP5AZgi9KUyLstwGGWjCJoz4DfZoUsvDyAQWQxa46niJbK1h3c95iGfuoWURq31MDMVPm2WX73Q3e4DiNxwS",
  "key33": "Yt6JwuwPNihQaQRtXc83WsMq7Xhjbyz1z8n4tjfjNdvzPZqpwFdwnRYif4Unn3kBVyGw7R8FZwcQtz4sWCamPFQ",
  "key34": "55Nf9KP4wtaCjPHHsM5fdJqNYgSbf7gRYyE1JfxBMyDFGJN8xQY4MKF4HTrXTQXJseVniQnEgpYYM4d2qS1XADuk",
  "key35": "rUNJSfefFP5hTCmfy9KYNjZhmXujakxYvQxmv1bJhfwPa3Qswd3eCg1N8MkqBmsWh4FMKXhMM9smTHPPyC9sLXh",
  "key36": "2bTHKqzKvvP5DPyA7SfQggnPRGVxCygVpWxxsWQzq1WNnMXLfZtU5vrGeRkDUECdyZnqgH1HmaUWA9QdAx81eTiR",
  "key37": "TaBTmhs5FomBGhLvGqazGjeQ7hwQA5xHkkhcN4wkzWB9DLB8hioBaqzjp82joi6ESkcND6mhrgV5GVvhe79NuNU",
  "key38": "4Wvad8fptc42eKgwBxKcwGkA5mR91YyA6r7ypMJ8wkAcBLVj24FHiYuVjJb44cfdcBf55EQYqqpr4pYXGvXWzgjZ",
  "key39": "gSUBQeLquCkAUddTioUBQs5TboLUdCebgWDkmw8fqV12xhbaSxo81UxmmfFmV1wYWUavBT1yaBqAQnRvReggx9C",
  "key40": "2YmHVSFZxxRW3h3F5dAorwYNEwfJY47aaEcjhpW8Y4D7JoE5iqukVVFpPkAmeH1CDZbctTKiX99NGYG476Sga3oQ"
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
