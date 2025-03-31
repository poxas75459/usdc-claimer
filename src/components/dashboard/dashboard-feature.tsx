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
    "33Lmv3tLRqxZJgJoXmDJHVNSG9g3JNpk3BsNeKzNPPVZoZZ34LdQaj3FBJW1Uxjmehi76QVPd7UXMTvP6DyPEHnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66SDskLPf9EWMAznnn5Vspfd9wTqrUqgF7F9UeqieNvSvdYtuF2nkeHZukBQDQNmPP5en43P27LzYu4hru1zj6oM",
  "key1": "4kV5TFdWdLQLvmTsurnUbQ1T5fi4HihfoGRr8YzeBwsHzjSXoQQVz7iaa7BUExiqxeE2ufWXDGJMKJtHcCopddWD",
  "key2": "3923UTXJLXdsvZRx9rfasXGpzmvhqHBs9Cuq8nvyfoJLwEq9G6keGf3oqLHvoPFR7ybSHe692zDg5VjYEzFcZbCM",
  "key3": "5pHyYRPeRrFeAwJ1aSJxfevzj67JMWfmcZEEjMQ9TTiDiCn6yiwXmPS43UnKWsj3fAVcUZAKcGyqzjsoihqwsu35",
  "key4": "4qLouAb7yAC11Fjc2Ae3LA2f13E7RywwT74X6Lo7KxHUmQdcPU3QAgGAVNaGg6s1qbwxjbkDLKsVB1iFfoVzEHE3",
  "key5": "24U1QpMKhAZbHxga3VRYXRNr9MviS4N87jjDXnq8dz6sCpYLMi4FEUW4aYGwvHALf8SwJJrUtg72Xrova3kFM9YW",
  "key6": "2ZYPkGu6YjBTBh7HrhwQnhymwJyx12izzKb3ZS2S2CbNQxvNyuHnejAgFXinkVBWaobykRgzzeNaDTo4jiCnAXPp",
  "key7": "3kycjRgisrvZ83FuAMzPTybP3QKvn5jBP3GuqivnE2fEbAt1y9HPThx42oftZwG5KFkXbqWnz2GfTk5THq8qPRTo",
  "key8": "RwxqJAhZru5i51G316dYTP8VGaTd3xZUP8mxwzNmV2gHAsy8Z4vGwncMwaSmQWzrS28sayNyNbL9KSu2JYw8SqV",
  "key9": "2oC6TFveamYR1XdJ75M1dPFNEm2c6rfd1gRtLXPPxMRPUsr7vQJn6wLZRUjp5E3wAU4Dce2RSijifdxfKd1XKGPg",
  "key10": "iXnQHhR4s3dvTFPUswghHk6CUyMAhX9Ly9XUd4Gcq1vBoN4MyVVFat6uvcNopauAAHmf8Psfwm7Z2XKPFFFW6LQ",
  "key11": "4KfnvMPGUh9Z1g8wK6vigCTYhVjr4riZYzrZsz4d4VPbazjjgrhMKAnur5piBfDKV5BWNkvoeFbhJFPLqKLFP3ET",
  "key12": "65ZnVfSPKNCfjQgwZozpFAuVhnEEZkqr2o5wAT5dRG78Bt5tBLvCehVG5EJBqr5owkaq9kZqJkdBkNZHu39xvunk",
  "key13": "39hoSE4ibnPHacnpLc7Cp8L9Mbxd3TTEVdqFdrZzPZX5udEtskJEU4P4wr111NpcLMejuvETDSWStPVvVvh21utY",
  "key14": "5FkRy2WpwSAKxjKZyG3HDuj7sZhkTYNRUZeVbwyC3a8EUeQgqJz6JEop5tGtEssaTR7DEAdHCWBnDYokk2UPsyYy",
  "key15": "46L7FL5LwcsaHU2nYfYcBS8NgwVXAKLrj1vANJqvksHMy3UV69khsUfRkcYEu3bjL6Jyp7zsNAyMBUqhaPeUa9iW",
  "key16": "2SUJ4XaXvc9AJz8Z8LMmYZYs7yfKegtRWhqeX9JcHXzbGjg6EdZuQvQVfgwG2mpeA7n6tZPDWRAJiYficdzxCBoy",
  "key17": "3sgDAcr3v6gV4swAhHEkY9AR2j3dqSDqv2QxoQuaHETzzLsEbJcTT6yHkhnWA62wEtKNDmaH4tqK5na8JasbQpHV",
  "key18": "Zev1udfgkK1q8NBLdGSLc7T11sHmeVtXgQRsTVaGmA78k8G2b48T1MfRS2pyDbPi9dH5NJBd28k1iawB7eFmcWU",
  "key19": "4Cjh9bCwyARz4F3CTTZxUgLto9EmvfzX5xrnA3wnBBs4reULq4bkdJt6ZX2AuFPHvJxi9bETPSz4252ZVYwv9TjM",
  "key20": "MQNafKikkJGr1A2hLcNLDmXKB1K3AZKU8dBPUEAcLBX9KYrV25iCU7W6jAapWYUXTagFNWX637bWPJdGJxZYXdK",
  "key21": "5QDwR6hH7pqiCnyYTQVSMcMB6unpr34YdjYDZJS84r3fDxw8U5ja1yFMxM3iHXtRbWVoCrCpxLPVuvLm7aVRAXss",
  "key22": "3jvNmrrvBArBnMGoDUDFf1vmPJCfmY3tNMnQUch4w9r2ddAYyZEkKv99YKNfbdn5h8BUm2ZXruNbkW7vdCc6gQan",
  "key23": "4Bm1s1QhtiMM9rFimxUgGNEUz7C4tbZVYnFuidFDUxpETQoNiKJp7oPAucf31qnVS2vrRm3zurWAigvssbzfYjFF",
  "key24": "MLBUmrr8v4DkraTPmJCWYkUtBukw3m4gthZzyoRGTDfTxDqQee5RGWxtKuQ9w5JM8Xgpf9NwneU1mSjnstEH9EA",
  "key25": "C3eeVgnNDSaXGsoRCxekrxDZ3QHkf2aQcgcvZNUZwgFXv7diuuuwcxUdFKcwMGVudKPNGQgvaoRpYG4izt1H1oR",
  "key26": "kVCsFHMFGZxpwP9zQ3NxRnw3rCohRvK6Lu76w9GCgcD3WJen1EVZhmyz7y9QSof2J5bYcyXgSUGWmTo6SsVYFvu",
  "key27": "bHfLnUUccDjUKH8KjkZXpE3AGSohfrzGKHGwTqPZ7GuvbsQwE1TWrifatay6qfAWmLPgcrsUWoVQRbwxftYayYA",
  "key28": "3H4Q5KSdcQpPAohrZnHQ4VbVRDTgscLFsuxBew28CbwXAyp959znHqAXxS5EMQxiduX1bP4XjDvMwUBq2qYHsVRp",
  "key29": "4wseP8i7KovBktvEr6z8E3mWc3AfW5sQzD4jEaR3hL7HKooyTtbmRhirCqJk4A4ctojJYZXoR8FcZSku63FNaqFG",
  "key30": "5sjP7n1csRZJNbq7S2YcPeUehGHzA2yTKBoeMnkJcXrCeFVYm7vYGmZ9gRBRbqBaDxDvoSF5qnw6SBEG9i69d3CW",
  "key31": "2GLHUWPUrgWmKawGCXQq8E6D4S1UBUPMNFfC8dTcCZ8dQT8FPF2Yokrci8ihw2pukEsYoqT7YSHYyYZKNLv6fkpN",
  "key32": "2xDKbsvrcHgPz7uViuh5tp9a6PTECGLvMCCCh9pTh6sGnRMReAtRp4PavA5RSMCZiYdovoYRZByzBrhGzT7ESgXz",
  "key33": "5jNL98g6CXSTDPGEXg7T23VkhHASXKF5qXHmUoVxj9vpUFUX6f1ixA2e44a2hFMSTiS9rKXqHfTT4XXBxjF4Spuv",
  "key34": "5VtrkuKaDkGYM6ysWHApPdQwZdmGhUpe3cgs5bPj4rD9j3FFjsnbNFf9chFx7KwYncJL3afVpcP93jd2vDjNJMZd",
  "key35": "2gEs3NMH2FyWDLiLNnX7TzNBa86fRWP5c1Xs9TWoKoChMxFLEKSFP4gY3JCZiRS7BLE2SA2VKCFoWgnzpJsmKTrJ",
  "key36": "4kdzNW8LQYYEexKipuj8AGtStmsA2in3DhsYJEPHuEXV6FMsb2d2CZbqHgoEqGY4NxzoBVEEDxY334fVHjwkvZmX",
  "key37": "3CQMZaEEwEw8DXdzhmADgakLGWrtxKppnzA8AD851BGWEitNu4sZKTtxvo2ReN1baDG2HxtbPhDyqAkj4gY8evHj",
  "key38": "4yJsTAojBJkpkvHD4Q5oP7Gj9KS5y5gJbwrwojR3rQe1f6T9UJYVhR4cfpdUCu3Jc3PLVE5r5NN79gxdMBdC5BHo"
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
