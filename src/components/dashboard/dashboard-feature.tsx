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
    "2MrpfzYNUPy8rzeWNavRpRyBVrWobWzJiqvA1wx52dj8A8ydaFtLh7r6h7xDsgskm3jL1h7svv13ZPmx3VibP7dN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BVKJpcfN5m5UMEfXygmF3BbwFSgtJG622ds59iFqcwdP8LCzD3uyN7jNyqMZnvxACJywhfcxcNM4MKdcDJFnKbS",
  "key1": "3xEuYTgKVUDxLZ8bYYfxexzGpZYWizU2sDFXMjxkW8msMwwySFNdkCfZy1MsqFbU8J77oyQYEoNMGryP867iffAe",
  "key2": "3T3iCGQRdcm1rZZ69w9ncCE37t8k2ihvCZqwG7LDQ8rDiVBzNG2Suj4ACf8uE2oEALE3YPAwKe8bHebwi7ZPdktF",
  "key3": "2GQRYDnkECf1j17Xm67KcLqBRkm51DooTF3mvmjc291SRpmdBYwQpZTVcAp3NbvaT16f2TL8F6dr2pnDuJndhbhL",
  "key4": "RVmZkQY3CGDoBgusPSLkX5FzCCurkAjxM8kNXz1P2ikmaHkWSss7o7BH8w5uxx7AQohuMPW5cmrHCScAhcmnfkP",
  "key5": "EJWALF1PByBGyZ5odQdWJohwuZCkntzZYe978ayRgq4pk6zTLsnzDpnfYny3bM2U6enaCRK442EyZDsnvzzKUBm",
  "key6": "5xQBEhG3Bf9fWSHBa5EVYdsEti9H4CVHJMS5T8HN9ktGyBebWxmP68nGyZKDnsRy5dKyRbFt6ytTXjjoREhTrSXL",
  "key7": "44y5GqmpDyMJNXsguKQrHKt51q1BytYMd97wdMncwSu4McJYYFTW8Hp6FfAXqrDXWdVUR4WgcMRxqXwbn8Jnyszd",
  "key8": "5xDt1LkoKRg4ttDSow7jRUqS934qfajo4fjwzHoPajvNgww5KvpqynBGewizQrZDMiEZdEfKB73b7zqWWSi8foFa",
  "key9": "4TwVfCJcr8pi6PhZ6t24m77NmaAdUWtRXZGbcTjugaBGUnuQ5eW9VCjJFsFZn1uXJ6i6jMFHfwCV4X1NmmJ6FJNT",
  "key10": "c8J1jx9qEUEMdN6iYAVWPheTFhw6SemxxR9MRSRFZwTyng4wonejjuHij7kty8H5qJ4SwnUJhaGjQuw2fVMRiRQ",
  "key11": "2A92o3tm2pjwQnj2EdEMZfqHCCj53b7Rt1W9fjFcqtpEFwAV9aQYXQDvLM5vT5JcVA3swgkN96m31rTBAp5JjArS",
  "key12": "2SDZ9Rk6aTEvo8H1RuRHNwBa5x9oX7cZWrSL5B6B9T7kPCcvnR22vzemumwyivZbs8ziJtHT6u9GMiLgc3bEz566",
  "key13": "4byH6p4MD4hR6XGYbeoduFVgt3WmnvpM4QoRVcBwGUmAabw8qoYoyvVSjZxc1cQJ1RjVpyyYqWaTBd2HSto6iqMk",
  "key14": "5kSAP5EawE6jaz1Vk8jzzYfzs3V3dv3kZzpQEzaUA5fuHwahMStdtsA6aGRJxe4JZEe9N16J7b1mmuPBDquVqb3n",
  "key15": "4jz5SrtMoTmSxy6cfY5wzxBqUWhBc783AYykiXYFEyQUCCUst5etdpTmGRhJRo8h4AYZJcknWGiQkCRUdCWeiQo6",
  "key16": "5LhUjHbCezYHG6nVuCuhDUezK83L4QALCS4oQ87ACrarrs3eRXVA35anakLHuJqznpRF7yDsmN33Zqr6A9Y6sACj",
  "key17": "5ojnrAS6jo2uyeztkECFZwSSWkbrUCjG6X9Ge28Pq8kVZV1DS6dpZCspmpZZ3rNpom9moRyBVVJyEKx1NgUQNWJG",
  "key18": "PMCEyq9kCAd3ukQmSkN2cozuA4oVaHhvk9rZVzmuGzEdqMj5KEXEbreBqWqvszhrcrz6yb2qQ63tTJvTmhA3mob",
  "key19": "2DLcZSMvkHyZ7HJ53y3iEnoAFfuF1SSvEd3y57i4PUkkLbHCdASaWdLk8uA4DS75W63mkCd8D8MeHN1RGFzpTq2k",
  "key20": "3AS4jnMowPc6h5xjwWBduEj3vf5hGo45qLQcTm4GV79FbXEhnAwyJVqqdRDjFKRHhdhb1NVuHBHfo4NRsYhheZvk",
  "key21": "4GsgcUeTFc3H3C1cpFVFdvicPXZFq6EBep1vZKDnQB6nHeq9XoGxSmayvrHEJGRDEbfSYZeU52RnvrdrKTVSNcjh",
  "key22": "44yBYuW8rjnfTbovk8kGb3YZM8EUzuEeimoUEuUboekraLkyJFyAEHNmBqszqxZir6WFKzngHTrnaUfMNa7SmVUd",
  "key23": "4gEHbNVGa4PWjv1EPgLnEbZiyZ1GyYMSALjbVWAAgNRXzZ5TKk74wSzST3ujet73h55yjpHx4f95AitW9fY9CQG2",
  "key24": "9ufPQkvTGkPtXyn8pzt1Wmsy6m6pAeb6zouGD1g83PaTSeNiCmUtcy737iE1E5WH9cdVGYVjxaPHmxbQ3E49atH",
  "key25": "ekdHAGdPzD2pGpuJwFAnGeC9YbXr8xignLr8qr1fAKXFA9m2mfsk64VfStygR2soUHpNemnzRDtiTssocbZCgkq",
  "key26": "pQ3LMQ8hrR4319sdRyn2tr2DxUZMRcDfj2a9JY5dA5gLJwkNHUNpGqUb2zT5MaxSKFFwkVXAQh2J7X7X2QviVd6",
  "key27": "5WoBCCnAThXtLrcehC8Utfsx6gTjysRh16sZieV52RMmvwpPTs8YEMYHJ1xVa7r6Cvpy4zmwk6Gr3S4b7Bu2nHEG",
  "key28": "5rWYLDHHRhfHr5ERLKRGVnBorvTdyb7CyiMcifCRfYwRxxQyY11VhRUqHNyRZYcgfsjDRFjW9f1vwuDPAsdQb3jv",
  "key29": "45v2bXAYuPHhSLn25uJ5MMXzcHfw7TJjnAubQ4qn7y3QtHjzCX7VaaJuX1xik8wAZdxZ9cjfvmhHKZ6uReC5z43a",
  "key30": "4XwJhHv5xCTXSqhCLYWrrfNjLfYaDWfRbVu4pavDi65t4kimQzJUJ6VPKketMqBVP6fXDFRgAcFVK6pGaph6h29p",
  "key31": "66SrZARFwgYovLKiSbkGn6kw3G1TjdzNtZx9doiD3ga4ckXuUyGYDqsJ6x8pw2WFrkhGoafCUcNLu68mauqY36ki",
  "key32": "bxtT8tZb2ktTU7RQuMxYeMx48qwhkHXsjvoxZy3eLLW5Y1dpUxM51EMyxjEh2KAe9Na1YDPHCq8QznkE3w5sz5g",
  "key33": "3ciB8bkouw1bBgZDthHbkbbXyyzD479XbNMsNrEeNZr8CBxYavFiWefs1KqNi79MEwyy7Uccf6HmZFEBqbkehoXJ"
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
