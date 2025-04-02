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
    "4oYtThg9wbm66GTLVeULSywU4GVePZqNGXJUyqenJUhvdpsq8szEnzUa2djVogNQqxaNVVEsigJ33EzGHuwwteAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wfchd8q6xoFPyyj8FQnyv1rZxZQdAbN3MPDcPE3N8o7h3HV98ecr15eeVrc6ZDfFTySA7MWMryx5JM4LkPtQ47J",
  "key1": "5grwcQHt1aWmt2RZg7z3UTdk6oHmvAk41pyk7HT43ezEWTqkEpPDHHWzsz9XkXLXA9JjXzVMxegktWUqc62A79EU",
  "key2": "5w7jzjWpxvo1pjv9gVMLzNyCcNmrJKooy3YGeL3aQLSeFGjWQiuByb3xCUXEoLonUwrX693nBwk6wZ5HvQZucEiK",
  "key3": "3uTDPyrC54s3sWRNVjqod7MJcv6b7MpvSgRkKsZ91KpvLC5ppxZxgkBQcnm38R7Lvjs3QEhyuHvF4GZa6pjutaCU",
  "key4": "3RiFS7YUSSPyaHzHidEH3hvZP23MnkKPvrpsjFH6X5secRpbLuN7kvVNcuVjySf1R4ku9TjcKhiyFMCq6X2gQGdE",
  "key5": "658ZRQzA6PR6N6uomRimnbVnEuLM2ug3iYtVWJzLuqqqWXQziyiX22iJo8arjXJ4okoDREGNu3dhFEuKpJSnNCA3",
  "key6": "2Q9fdg88oE9ZRSxPKmtcdc9WD3zrhD1aHe7NHLh4YXbEaoMA4Uf1SSdxhLvu1x1GZhhU2yMNx5BRLeZSrRyMY8yV",
  "key7": "5LGNPhunwSSggW4xqxygHfsSRb9qSdtP29yyoLCMvjxVpPmJijKNDJwwaPCgEh6qKBkxT81q8k6wT77cVmBdfF5Y",
  "key8": "3iJUq4ux6qckyBGqo5rDGMcUeisLMopFqJtrDb2CwQQPDr7WCGv5SMGQ7AY6ukCBGmiBN6puaFhZuJ6hzENftcXJ",
  "key9": "39kWJGhAt4TT8JYVr11hXR539Tgz4pJqiXUVBs9wrMS8BVAjCD4nG19THu2jHXztunz5P9hKmqXqisXggBRS756f",
  "key10": "4n4E69ZzhHLBd2Ced4XHknz9XcMwwuhmX5oUCALdxhztzJMwKQ262U2mWQWC9G9LVN82SfzftanpEuyGVLFj1991",
  "key11": "5WYRffn1j4MHSdzAbpSjCwXynx9QRxZRzgeUtjKPsuBWxvXmwvkXAo3hsiuGWpYEB3gLdnKESumun1SenjgiBsbM",
  "key12": "3oHAx7249jSotwdV3WveKD5wdUDSrLtpT9CU6JMnfbyZUpXxKqTmynWw9867e2MDk88foeZMKJiW3GU2VWGho12S",
  "key13": "4RkXoY8ZaVCouyHZmPbDKzLUnUjWLfVTD6ZRC1ApQgPXRcc4yEFVdrXrdetrksUZt5rywmV79nSX7U1mwdLGPCV6",
  "key14": "3gAmW5dVi9u6vzi2oQ2h7nFd7n4emHsABVcGADF25q1dmA56rVKsdK8xyE5rQpxDjGjQyJShDXagpjsmhPhMSSZ6",
  "key15": "3n8MXwqbkir8QFdVpfkfJV1REWQVDEKoz3X3y6aL9s82uTp3iS28KYtDfgRuSGPNJFRPQd5AXbxhc8WD39fbjp1j",
  "key16": "4DZi9DHQfj5Hib8jeLmSUH2WuJ8rHfLM2K3eFXAqPcMiQRQmE5A5CFPhsKsjJSvtfDvVP48DtDB89aAuyN9HHqZE",
  "key17": "kQRyCtwwF2pYimx71ThzP77p2nYsQf58HHGt62C89d1R3Zve1NLnLbMCNTmUeewxo9ndMB81e2rnoktHLoYfiJE",
  "key18": "5E6pdHVmQDf4LYM6ozFDx6h5Xw4U7PUHGFcM7yNyWXu4qeKJxKriUoFXpq1nhjdYHR4RecWd3G5xCM2z7t7tqi8w",
  "key19": "535Ps8Tjxe9iqtyPKaEuHaMUF3ovcJtY8Xn86rWyUoxLvUMNuCKatehmEyqyroNwiw8SohZcAfC99hopj6j1UMSe",
  "key20": "2tcm5oCfuicEaxCpqSAo5Bp932FjRbpfuTb7Q22ioBBgbZVX6RoLUTthsWgDK16XiubV6qx3qkXgWoGbVMBG462n",
  "key21": "3d9RyAmniMMdgHufS7NpntTsEnMobZzDay5PiuFtgTKeZhuMkVVpy99cSrSTQTvZSo7SbtV8mX5WKj39XU6J2UNz",
  "key22": "5ZugS1F8eFaHMLvHYdo9G31wA5yuoxnKyZbYZ3K7MgmvitBL8nDa69RYx3CYGzPaE3Br2Q6xXAkFvuNRJqfwtCgf",
  "key23": "5Jcgt2FSgTzhktWR6nimajhsfL1dfHR5Qr4pUzEHY4NSCgLo4z3GVovkGjofBRFUVTcS59cVrvbvfRbSARTHT8V2",
  "key24": "pRaWNFeXnRPyNqYKZ1bzrwKpTCCaDq8T8JNxJmZ6p5WpfX26FhTehenFDEH5gHZmboKfazKvdSt7g4K3B38zpdP",
  "key25": "KzuxeWnbY5VDYiMprRUjLqnU3ZynfM4hFVRLZV5jbTuCsCCk6JQ4Cpo7iHtv7pMHuenGD9rmiv3q1rGYor6bvVr",
  "key26": "NV9LVJYcZ2oZeMihWYiBtA3CYQSHaZDESJm4mAy8c16xF5AwnRD35paT1CkoVCzWkM3gXWyZ4u9yr7M4h1qmFfG",
  "key27": "2BbtK4BwtVPmuimxwbVX5W1VSXu9dw32rKE5uFWhfe1LVK6FwdxbPjqeC8jwBKghwDx5XMG4myqv2fYaUuP2KJPS",
  "key28": "rDEBjePdkobcfLfMBYmd7wZiugARg3eu5BFMvptjsjb9ZwRydtszCHw2w62WZfJkQCFQj48bSwNwu1Fgk2fqWq7",
  "key29": "5tcyGLmkci13dr6L7NwFGy3BLoEYW5m2y1caD9QhSFzFhnu8KgX5zXsThA8aB6tpzzoDsHhRYkpBKFgBKEpiKmvR",
  "key30": "3PPd96Du68ffJWvAVSR2wXawwqVbqGiwsYuWLg4E2ntkFzpzhUa3XypXbHxwwjbQJFqpQLJ5ThBQDftnLyNVVKRq",
  "key31": "4xK9ksRyiqoebEZBLzARyyjf44PowDtatAHabtwPgXLa9NzDeffqJKA6tqZDMFg2ST1PmxVFDYxkS2odzjRphaiZ",
  "key32": "4axCkZoAo6DNM7xZh1kmLcGq429M4apATMRmKb1a1CmL7FjwqMZv4PnKEwZxUTnA2fJhyoa4oThYHYhBH16FCPEo",
  "key33": "4JomeEcfD6G7tYHmYUmQdPPRPjyHhwJwrXpUgAoN6QLgcxtyNt3eTs4Y7VeYiwch3u7qy3a9AeDKTm7ZUvzKK4AD",
  "key34": "YVB8CaJAyzLfkjnE8zwiHJZTT9dvZcuj25uYrNrWsw2EP2n1HoVadj4AX41JpMFgs5tzETugAY1kZGvydxDnB7U",
  "key35": "2pwjFNCXWKdhnWfR2LB8ZcRAjd7WKKqVhUCS3SeUebbbkjJpXBsjmPPPYmA7bpiVgf3eQE13TwzJQp3Jp9Zoviu9",
  "key36": "5wFvzNC8Due82JR4v1Ba4wKnwaRL4HPfYRnmY195eRBLzn4CTHgQJAh2aHVCphEKQMuLAH7kZdDNVNT5f9qUEMXJ",
  "key37": "tzqJzUdB6iEv4VmxWy5CKqcRsjADntCKANfoAba3B39xFTff7pirw2Keut4drDfQSUWzS739iiaM1RDGt8DAqCt",
  "key38": "4rNjtxg11HbvdnMWzwo3mXZBw2K8Yy5NUhqAE8mSsK1VYWzXqr1MvssQNrZbHeges2pE2YZhFU5wF5QH2y75o22z",
  "key39": "2Hm1HG4D9dLEPhnPoGdkm8XKAtWHPpnN1L76BL2W7wuJEMK6ab6WAGeGstdDQCBfACGELzXxxMNzgoaymHYV1UHr",
  "key40": "2Edau2V6w41xehhrRfMAkHKsWxKwTsDtqyhVhy8omDwEAEPQX4ppZgojtZMM3tbg62gvpExYQNjiJjEvD57M8V4h",
  "key41": "2LrMbKvyBhd3gSMZBAvSmeMQ9DT3fZWH3v2kinR1AF1RGihDM9Dqs47AwAwhds4Qmgw7oa62GGXdRsbYdCeuYJuy",
  "key42": "4mojDXiofVcm4AEUqmoWHdwxyNZ3Vmo6sSmrNJMWzFeD33wV3HokefFaKAF2X6U28GBGC5JY7LHs6tVs8oTsSGMD",
  "key43": "33W1yxkDFx7ptjnEQPi2ZpHEE1mks4r83hBcs8Vnahc2Efp9gQteSPnXbhu9M3NJJfLycDm9adrGXCC7kKjwL6DM",
  "key44": "4mPYAfYEynPE2HPXBW2LT6k2areZArSKoGvhJXGKYZD7RfsdNRoi8JLmAeLdVtkhzccHw8ZbPbxuX8gCFqrS2iny",
  "key45": "mU7pxZC36WgbQSh38WiWLhB685aRS1actN73PVMQcaZTscADAAKvzq3qqDDTHoEZMur7uYuLTkCrH3dggRwbhca",
  "key46": "7f3XSfzEs6T6hUGDswBLHnmbyraapu9VgFP5PGyG5XeLLfGoxnJaNyV44V8sWFTYuqKqxtKmhBpnzjXqVaKMZhQ",
  "key47": "4TeQ4bsqgSUSV7dRqJuptaG8JH5xvMrhsHyKJp9i2uAhu2a7BBSXNVkrWrnKnVR1kfJCc8hJugPBH6sVqV2rmAuz",
  "key48": "5exMAB8byCZE8EVv4yF1qigu44GK8NvNfsuWpLHwkV8eWnxaMdormsANgoxhasrSmbb1ADwFy4Umew46aZj3QcWN"
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
