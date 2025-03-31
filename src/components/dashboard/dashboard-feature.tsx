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
    "4XxveezdBcDgoHLFNsPJkjaB9bz1Wt97TUcZSM8vysU6XWFhrtYmfNxMp6gw9puckpUzR1ZT56B8tcXLwgiGCUgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zr9JAvajGgjW18PwSZDJQgWjoCuTTQBVXE7pQaBoMuwGfVeZmuuRdZB4Q5GeK34NWZ166QQR5W6Pbsi9tMhMiNb",
  "key1": "3bukFXUqTMjBxGgJTvyUULL6dQmG3p8gLKU8wga6Kq5VHzc8DcYHzPUq3RtGcdSNgwMBQ1wRFNrcyaMV6eaSU3ys",
  "key2": "3NwjdsCAKPL6DcLfKMuyp3Pt7t8oaRVrLqdEP3FhwHmZzNVEu22Qi5h3PSJach9QrGpzfcgrpmRxChBTC6WbxaLE",
  "key3": "2McoCkxjy7KNN3wc6QxMwpgWJ2fvAvUswVqWuZdvoYgErrqwCtB8HrQzVPwAcgRBufVGjem9uMo5nD9px1jJhkYy",
  "key4": "Hym5pR5JD5s8fVUA1spN6hmz6EHHsoPNxcvJz9fQMQ9cMeBchuLMs5oJJ9eVjkCyvUXogj3AYPYMejxaCNFk4Ly",
  "key5": "5zf7BefdThYspPhcgsPEia6xZcpj5TinpGyfa4kvVSzQprwtBi1Z44btRq61J3xVGYPJzCjQvnHFRhX4np2Untij",
  "key6": "3t7uvBXw7HUSLUV8Fj1HZzW5TUuK9EFNwM6hktRRVqGjCD3JAancVkzQtL7ETuPd1onHHpKXx6XDDDvWCFyBXRQS",
  "key7": "4pGykmpMQMLwkvc3gWW5T4jcXmef1JhysuVYjt2m8ZLNUsLzUXyJffcw6xD79CxseX6jMBm7LdQxBmsHptiquddN",
  "key8": "4iWPWYTcjz4fBYxovYtHiWwrstSqw9HTsTCjQxSN8b3f6ZYWfKyTevrubS3fgAVTj6EJsXANLq5PzDHiRfqaSH3v",
  "key9": "4CQB71wfwRgPxxbpnwQ1SK3Qnis5HxtKwnkbZc8izSq8Nb6q6ZWAGZc15iUiyiAFp9ez5AU3aKZt1rKWQXb9a3Qh",
  "key10": "5hZ22tyxr6r7RNVaTyXz7AnYsddCHgyN6pmpa4KYsqA1Wq628yoiCyromoiZ3raR7VMyM5XqbsX3eN48t9Mw7gYi",
  "key11": "34124PhzixCJgLfYUsSbXHdUc9V9XoKZyhZG2SrejihLQBhch391km6g9qf6qCZSSedpEkUbUgADCYqiRJSuVsmU",
  "key12": "4xrAGaCeEnvD6QC1tfWnngHkQRw8ikujn6pta2pVe8ujV6dfogvxs1gzvGQAHneth8N1v1Q2tRJ1GojvT6JDcDv8",
  "key13": "4T7rKYDmzDDuH9uY9YxrQfvZMNL6YhpJygXUQVieZ68PN81TmbccSzDgLjxZmswuCyFiGjtGRmDgTxbgEPgKW8sr",
  "key14": "4mwgzebvr4gceFhPNgTaf5tyCGwN8E4uNjgasaPT4QuXzejy6EtgYthbBcosVRmA1XiaDH18jvQHQmJBC5qyCUvg",
  "key15": "qeitu7tLhLyKshmVdXqhFyubvd1vMqtPfpw5dZeQDoNNHdge4NCkR5u8AZNP68FusREpF1dhS6HA42AgVTPoZbS",
  "key16": "3RpoqDyLEjBs3aq9ZWDZG8S95f4oG8vgbJTGKLCu5XZycZrqAfox9GaiJAJSEZZ7EZZkjXG6BTcjAY27SgMYzdzS",
  "key17": "ThBDHe7ommNupi2Gh8pk54eXgpqtBJtRBqtzeZeRm7FQj9HiiuS1k3ftumGrj399gVRvoARGc8rHRu3Cvia3E15",
  "key18": "SR3USmVrB7yENyk7pV5dWfuj8319qQWzyw8kfMoofsXzWJv2jMdz7D1dAaqadBggQH85G7qfHZKTRePFuBnzHqs",
  "key19": "5EDchQPn4iNfW3YD1U1kJeG3Zck8bs49ewsXTH5hUQWLKaWDhzQsmZutEQdsu8Ngd4NMkzn1MSudUybQZGdcb45o",
  "key20": "4wPrb7KqH342JFTMdnuGv8zM4PVAhyB18EYEpBgeuBRxk2fJEebPPQDpn6urLK3L5s2VVnAezcsb8mUTwMU8WLuz",
  "key21": "39qKAvYcumrHp82FXjrtNZ4fyyYHy5nGf2N4ZQVpG2KbrVmUXHKYckZFaEBpXjLPQBc7RCgMN33stQcTrqh7dw5R",
  "key22": "5dDWiA8DWv3Hdw9xFRJ1Mo3fjHmMnaDnj2DhznHczBfz8AHAWW57f5dtJtLv3uqWxXCcN3DREokPLXfa6fUBvfp5",
  "key23": "4jUp7pA67Qgh2Hfwzpz9m2eJwwG4bz9pW6bHALMTuTt7a9ieS2wss5TxxmxqtPSgzs4y7etVMYLQ5C2p8EZPsd6e",
  "key24": "3aFzXgyba9YVaR17gewRUYJ4cy7m9xNjk5jNPAzg7EdVGX5DXoSUgGYVwXMA9YW6csrWX9Y6pBwaTKqdTjXZSesQ",
  "key25": "2qwP3cJwNg3BkK8x2g2s2mb3BZ74ixnmwHGYhteX2RBtQPVraBJydea49c1vnoHuhjghFU8tq26WwsvMgZaH7gPN",
  "key26": "5QuQX3kuR7U9g1g15GoBDEjWQpdPwRMQc7MnQqfityxPsMzTRLP2dmLW4eiF7YupqNyvGaHrve3K8tpC36XXoRMN",
  "key27": "2W2MBw69aofLh7uX12nq68egstZYiT9pb1sUX1Xaqx5sv4eLT3JhvZrnmDJH7dTDzLm1gijFSS29QY13LaeyUVxP",
  "key28": "5KPC26UntNGaQpTyMNuPeXkL45uwAfwUb3G45J2dFMDvsLkJUW7ZFsEH3Zu5FgdByik8L21b29TMJM8xWECMMZs",
  "key29": "qAeotGrSuVEWwgPW2VPNf9i8CWGT6Lgif7EP6U9sB7GnY7Y6fzMeTyn3ofHkaSuHwucwnXPjCqgFiMgYnQPaZ3K",
  "key30": "5PZHyGVT1RmRVV5NDX6zodhdAH9EGU2WuMxe7S4s2fdjGnePpdfeTwtW4ywsK1sCf6ruSaThpLEes1hMzuosjxJb",
  "key31": "G9vKF4DXeghT48U641JrHDRKReKCLvccteZ7KH7BN889xa7nVHep1vAN5Q7vL6ao9pN4UnaxR8B81ATRfqBHj3D",
  "key32": "3qV3muNAs9AKZNTEgxzGnjTq8ZKnkRyBk8nnoTQ6uXvcivDoyiLHTLAxamtsQ8x2wPXVwKrL4xCdxHC3rXow61TM",
  "key33": "5wqz9ujCGoGtcZFsfk5eahLNMp9wHj4WdL5oKbfDR6aQq23awRu63asKtAnJwqNA8wYHy8pwUZL5CgQAA91nYfcz",
  "key34": "3ceRhNX2uGSsLEBy18MXUgvUtrm95YtgxLxd3fjmizfhqwrA6mHYnXDvYmwYnH2twF4imb2e8eheRZQr2gGjdSBN",
  "key35": "4zVHmkKJ66mzopRjXdWp6Fh9u8FCD6RMYx18jpnDdaGk56yKCV2EyUmzRyQyASsnpu31KY9QSzyKmE3UeUqDchUZ",
  "key36": "26MUoQULYh8pL4PUQBTR7EuQpWCG3qxs6v67UbbmRaEvyNpTD3BHo5Yjjp8eonLGrjfjCihbqCy8paVnZS6WAbiS"
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
