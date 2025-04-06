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
    "Tzip4B9pCVaCd65cpv1V7wA6XVLyMNwzdWiHTK8bt7H3tG2DJAkhrwmnjyERKD4pTVY3n4gt7U1jnisw6MnBJuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61aHqpkB5HhvGSxttij5X9h9P1nmNwy5MfDSUVWkT1hcNBwi8PRaAiznEKJtipNcHBDnzb9HyY4j66HAM37GVLxL",
  "key1": "2tfjATcQQXK4WaPYkaJq5JXFxSZkgUiLswcHsP1FM4kfcZkqaMQN9XYp2uEo3PbNR1MGRDa1EBidmCyXqfUKKvRA",
  "key2": "4RwHcYXqUCGZUYqTHGCzqsMuKtCwmSvuG9NKqMzocEra4M7o89NQVdMRnqTAnvnReJdDzn9E3gHgVgMYxLauqr8z",
  "key3": "2fcPqFPRgfxvJbp5dcQhWraPAA9qUn4YvjkZYThDt8iuHM5LGbWjGVawAAKccvia3DbK8inFEP421niQrPkwAQte",
  "key4": "3c8rqw4XesBu1SfgSaySTPScFjgYU2udvpDmL2RgmoMGSQD1XcqxP8AZYKwMUopi8UswQS5UyHqcmpkH9LeFBHSG",
  "key5": "38FSYpWwuzvhUx5SHQoRUNaFNsHHbxPD75XuR75nWwVGdT4QwD672HcPYmULWJhcejwTuDExnZGzjWsEL6GoxNDz",
  "key6": "3pPANTTApCe8NQbjs6NtKbmaG1ajwLKbbh7ZPt6rPiHSFR92uJZQne67HcR3AmTa8wNrFnzKWAgsbywKi1CBZXjR",
  "key7": "2PHdF8tvjTsDKU4wpcFe7HM9Zv2MjvpgffXnuvV7VsVUkHR3TVBXz71KF5JWYz9YtpKN1taN9Em8VDU3tMVeCfA2",
  "key8": "5LAM3RiWRjQ64UNFBVWSJiaPTYXA1Vwg1TKa88BvS6P8Dr4BLTJFaDoJg3WUWghJP9MNXhfvVhAEta5kTZEmmjqe",
  "key9": "3nz7CTJgUC2FacW37vdNjpuBeLmCNBVsCoxtYNVYnj15UPCsV2LehDNKaEDDGWkCjgiiKYjdhVUC1CyoKPvduZPF",
  "key10": "2F1q9mtEB9xKKVrhGpK5uhoTK4EJLzP1iyxWymYh9b59hWhv9sHJFPyYaAMtg7pbbyVd4ARcrLZ8kPmC9RQ3D6eY",
  "key11": "24Fzut15D416PgMnb8BDYzBD3dH9K1nTNXjwbRym4LRiCXXWdzPeFD5hnjEStRDg5H4Sw6tSLsG4b1KhQA67a8iq",
  "key12": "4SRFcwsRmzB8HfNzbo9pTvdto2pwpoTtkmU6pWoATdjEa8bbPQakNRmGRKGVetBeZqQUjhaawyXbjAQugj5uYNeP",
  "key13": "2F4Qw9QCcH5x4rgysv7dL8Q3u9fbsdBWGVvaQrEPveNhKJxZeAQFf5FeNe5XbRUewm8aA5Lg72optszdRJ1CUTjr",
  "key14": "396uYzps4UPnF8DBjQNmUverFNC3wCn8sKqu3PxFU763Wi93s2vw1Mpix8iPFCXRkxfTbsUwDuRKJqHbWV6siLhN",
  "key15": "JssnLgKvMcTRrY4KPnJxqo2LKTRXa5vkgqo6AYZeCyLSH74ADu8bj3k8AVFpSgMwLskke79W8mt9RB3XdnGwStv",
  "key16": "3qmF5Tya6UNKmKuh32JGZWKFkY97x2U2Acnxnoyxiu4q1L5EgL2XdLAeikoLTckxoecXg3JzwePKuxabjEgUuFTN",
  "key17": "62YTqDggm2mNNNXijBaVMeG3qAYGAirqq5QKtcJ8UCi2MTMyDGdBy41cfYvBEBsGZeMQEUxZhxbFXZWGPDHX6SR8",
  "key18": "21FABh3Y4RkQdMS8NgXZbXGJBjEfNNrsLVwzwCxzHmHpwx3Bfe69kESAQPuVGf1eqs5L4k49f8kG4eFaU2uuWVYa",
  "key19": "fSRcCrQogHpewSNCrGb3fQgK9LAmpo8ffz83RFH5ARfvWZHTyeX7sb46gvpBvsycQ2u2vn7KP9R6MkL5f8MeACF",
  "key20": "5EqFSsTRcwvsYZLWh7nBVMbVnkjbcdzBrkEYDGLM4FfASf9bB2XGoZ2Nvwzp1DEhx6yFcDbZ8hqP4XUGNQtHGnTg",
  "key21": "44eDDgd25SrcXCbfoLQRGCMKkwq5THfHNx3CUgCV7MFZsdyJ3YaF7wmWz68MbMRJ9cJeS7E1X2jaqwZpUjw4nCFY",
  "key22": "26WvBbSSEUS19pbwRxtJjsb6wX2e1xA9aNbeBvdMf98fUdKuPURY4JkehwsYJ3tSkQXWT5KrXDpZJTM1jEEWfvsS",
  "key23": "5JXUBgMYNe7GYoxvfYqhwqEjnKT6uF5zH1zS6EZsLUXBxLpG2KPpBtjjG4m93ysRiQWRbMgtqwV3Azjs6aejQ3DM",
  "key24": "4hKgKSLmiZxqAisMjraTtbyjcT7GYN3TV3ndz8f3LkWU6fgM2pcARVi2bGEtBnEZY1VhAbVnviGo3sLivAasCXwP",
  "key25": "jezaUb4pCkngRBMWGf5DSX7wz3GPVJUbZ27vzLCjB6HJc68LryZM2iWrgmGpqtJFcPtjrvmzPhfEFsNQG26tiMH",
  "key26": "54ZUbpxhpKEBgw26FN5VyXr3P2fB1vdjDcxasyWiH4FvoptoAaqc6v2ynuY1TwsjqXSXmwyvHhTT3YZqnUi7djEv",
  "key27": "3fPiwWushWhBSPPoXiZQw1j2c4SRLJM44AUeQJvNNYE5TSdGcRiy7itHL3wuh3UXMFC36Xu1B3rgUWCVMKRLZnhC",
  "key28": "2UkyunvkJvtoSqggxBKGFdzNyXXecS9T73adiNr71nRpdZgxD4vt43H3SqEozif1XCcYRTDQkfkc9QtMHLTKUQgi",
  "key29": "HurdpiMzp6gVDE22LYJvmBYFFPH5DAU5qUGjvcXVeTFtY4GNwLfyBchnAafqAjgwADFFp6KvJXhUEMtiLJpzrjP",
  "key30": "2pMNRkCDamVZnfetgBxMb5M6SK66w3jN8ubZc5S4Qrad7ES8wq6P6Z67bdw3GPkBpoz4LMtbiAeWAPu6igt9m6xp",
  "key31": "3rLVgYCjwEQh31yHZ1i1aBCadn6hXRAs71cKSSkpJNbgtaBaQ3UgB2cEMPxvRmpLHcNFp73WdAa3avSb8ecoMSAN",
  "key32": "51EfYUjt6srHccLK1ARixcUGuGunx6bTSaVqaKXW6MoLWVAVmLvGPonRcaqmmJJBamPYeJqfaKd4w4AEgNPfYpha",
  "key33": "2zdjB6vagB9Lz42cPvFrG7jmLMFNudVkzsm4jP9Xu6w7gWN8dx1nnra5fMx8goTDAE2CFxFeRFVxJjYK3RvfR8vJ",
  "key34": "3SNBGH4fVYwnTVyCyKjXzFoetZAwRCQDs2MoxWAecKZA1yZJd4MiG2Qoi1yVF7sTHdiYicd6XdF26ahPBWyt3e7D",
  "key35": "3VzvjgQgqdX1Q14QBY86z7vCj8YUVRhUnGy9UwE2n2uNL5gd1GS25Pe1FJ3ouyHxX53i9t876TrZJ8GrCGFmYtBn",
  "key36": "66mYUnXwfiTXRMShnniGzPpfN9s1zfj5TGGwSk4LxHLKKLbWMjpQZk2eYVwZKY6tV4j14rRcRzH2Wx68Geg2Q6HG"
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
