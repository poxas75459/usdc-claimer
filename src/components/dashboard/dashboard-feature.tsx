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
    "4DQ9eRRyL22JNPfwMy1CHcnpuqDhrqaKRDPa24coveCKJamuJu8UusSsJiDzgud1QGVkG7Yk5gN7qYVPFmfW2up1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qx4qSJn9pNVvP5yBY9EKyZt8cCBBVQyFC2jDUFVBQ9x2GgtrFMRjeBhULGCuGYvfBfqfWj45XdA6VfPYsGWBDJn",
  "key1": "45KoVYVbzmYXAjc9m4SwGcyUZu9ogo3vsivMKj1f6XRp3Aqhp8mYDgQdWm3mPGQgnWusjfiUQYA9wduNYoiqKewY",
  "key2": "26S6u2AxYSANEbN9fczhDbzmUCYUm9cpN39PpTPdUD29pyMQErsrL5b8rXiEJSaCADeXiMZf1dGJKSzQHD1kkYsQ",
  "key3": "414CrXr69CDT6rcfGps9pZV9cjbQT39q4VwaxoDP3o9uzBbLxmRh1bSaGKETKBxh7gSCvvfLU6BhUyMC2tfiukA3",
  "key4": "o5TiDMWQXE1AsqBAe3GSWErUSRAS8ucVzcu3a9kjHZiPgJbF6S6R8HzgKiTCouHSzbWVLqWZTX1dj7gTiWvHsgP",
  "key5": "4ws6GqFCN1aXcpLCoTa47JX46syLQ6gfoTb7ZbSDRyE6aNXm4n41eicKGAxUGVwmihp1viakUnsWrDWUP71Ndudj",
  "key6": "4NQQ6upLsiQrUKmSaAkX3GZcUMjad6brfVizV6hYWCrmW6ML4Fwy47Gcimvmfcyu78dNv1BJQnAPazYt4rKtrS8f",
  "key7": "3VnQQXCkKxzhnEKemTK1PYJB8SmkA8euQggTgwRoeggZsCsHQ3WAZRx3sz7L9uzHC6CP2kvaiVrcspaZFyTkDFpn",
  "key8": "g7CDA2NWhQKapbt4iCQXWYtKM4sDpFXqccd1pAWzpxZCuguqN2eaB4JP4MUVNb9QKYJG3aPbbi3V5LJ5ffM7F6w",
  "key9": "3sDb865D4zkKYKFMJi7LTQ5RCbLHCuF1fjBMitQJAjLwzrNkRP6crYpZECsSntxzh6nj95cKWUWB6QnTboT35ckq",
  "key10": "51UbMAEfG9GEZpbJfii22G1nHqkYHWHTonwuXYzRhHiNZB6b5c91WFo31UT55gfzfVJaPP6YrAJiEeW1TTBXUGAX",
  "key11": "4PWCQwERLiCJkieCFmaAHHixH9doRRRT2bpCq61KVu1ecZ58BpSrXBVPHUoav72MNSE8imyhc7WaqZzfCMVeWiuG",
  "key12": "R3Qro7vmNwrxrBgiGdz9HQGcRa72gdD3edkfk3snHbCrgUBS9hQxAGmGeBroQL8BhBtx3cuC4n9W9JukRSB6KYj",
  "key13": "QWks4nM9iHZddhr2xtfNBPofbfA28NPHsU1Fkdj4LWMzWP9xUXea4HoZ5fKzJ8cFKZ8p1gWjLRJaNXfJWaXpY7s",
  "key14": "3iQExko2L8B8Czfo1qqUkYoPt5zcKAHBm9zheeEif6a1oNBEa5DoN55KomrgPjtSZvcJKm3wsHckKKKtvEngetAu",
  "key15": "2iqg7ozwmuUNGsHARBwrTYg6DZQRz4wHHnM3ZxupqwZ7duEg2p1ttitR5pWZZLPM6S5At2hXzcAeUJYWoWy4YfSQ",
  "key16": "3BvSXPR55epZKFqSknmZvuEDZLWj1yo6m9Zf1nRiBkxnRB3oaG9WPwqCxy3E1x4nKsshu73qL3fP6dm754CrzZ7B",
  "key17": "2PQrKHaxwbyZCQBrDAyxvzuwYkN6gY6B4HVhdchx9bJw7jVxddzpT3ACA2NE3ZDZhcDttK5VnVw2caMU1X99W4ge",
  "key18": "5JToUqkviSTSXSC3LdGpY1rT3hptZcNzJiRJuzERFdpEHrLYjByAJJRZdLV6FqSdna7oJwr7Ed7rts4oDRxho3L1",
  "key19": "4HNYxC3FAPEM8Pp3vSYdSRQzs9sWq6Xq13FW7yTAWwHXokWz7gtrmktz6p8cXKAJtwTiXXq1eZdZAYY53GmiHRo7",
  "key20": "4HDkLnnw1wmFcLkZgC1qLUteKo24YZZNV4rdk3y8NUs4NUnJ47tL55iW4YJ1h3UxHuq8Asf6yNHC74LeURWzcfko",
  "key21": "5ZwBwwmwA1JzFiRTZ6xderTbyquTf585sxuvy3fZHt8poMdfy6xSATPJdE7EXw2NKBspZixGRUciuYJwuLeZM9wk",
  "key22": "5UqWATnHofF48A6WPiytdAtPs4tqN8bL2mBHaotBweNP1WTMPK4DFrpHRdepJqdqDosUy6EGmpojt4zDFep8VDU3",
  "key23": "4ti6eVooV64spRoRTcPn3BGy4QoeAy7VFp2Hz2Pdhd5HsHpAwjd436K2ge4Z4FEdN625mZhhKWswEz2tN2gs2gKR",
  "key24": "4m9DeMYPvExGLWVpZ99763qiVUmQFSuW5QoSQe65EVieY5xgNtzTCaZoNGKaZfDAsbDC48NbrZxdJCpRA5aC9PXL",
  "key25": "2Agq6Zb1siBx5vgxbh2uHdLagoWbxNeJD9PP8sjzRM8f9Rx2zod881csjBoQjdE7hYR56PEHGi63yJ3midybyT9v",
  "key26": "4KDh8nQhRwXsRLSWjBjU5SeimE3ADLkWcp9tqxdAW53QHznQ1EaP6Hm1yhYsQys7zEhXkgMcARCdRYGERRqCYhtB",
  "key27": "FDtCvi2xTLpnyfkfEfJnUMt6LpyN6KCmHGFUDFYngre4r2WEeGeNNA2EMVQJ7KVcVCWEviy9UoLJb2A4WHHYQ53",
  "key28": "2snn4tBahfikXHutFuSaCJg3qNc3itrsn6qyiNWjaxxEvnLFdGnLjqEmefNurzbYGKFmRLuNtQfhAu8YKWResymW",
  "key29": "2ZybdQcQFJ5oftqZoR4fSBHUXSPcWfKxCxoZHMr89g9gfvRHfA5r1f6kR4LC9LKjSw4RcQSJRuuTGhum8M4fKoXN",
  "key30": "5UZeQ6Avn3FKNX4skbui2d3CLRDUhmDzgGJRz8C7mW9t4BskNKuVmYwJQ5qYAGHxxwzba2kVGKh9XcXsR4CTtxuQ",
  "key31": "iP9o6jMRAzUCCmQkQLauhmRXLJeTYq1F1NMficPqyn68KmWmKZbvh3yJMvLeN8CVy7AwVjkUFsguPRr88KmkqF5",
  "key32": "4Dh77ry9uDSbc4YLbp5hTp6SMabMfu7LkCGbu7j7EEENpKLXshVBJLzu4XZimeyumFvLN6aMSFhZb6DidJseSE9V",
  "key33": "65LcZVTPNVu5p9cVRdJ1dmMkiW5J4pYwbSuEyWrHrda7ATZwCHJRTVkK6UsaTd79ZcmQUsJzxZXYsHsApfhUo7GL",
  "key34": "25yAnm4WhJ8Ymqmj8d8A3MxU52YmpgLNGWNVFPmaoXxgojUyBBrU5S9VvmXoSZqM71PpU7hxocRZJyZ5mZKtGfto"
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
