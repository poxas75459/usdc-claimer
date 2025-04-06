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
    "4H3nmCZDsQpZzH7TPk3GPUKcuNa2hsWXoW8N8NLE7hGfmaTg7qL1SjfJ5o8JQYd4bWzqKMRGYqo3Jm43op5wdvSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WepzdfMvkBafhREhgN5s4g9PchmCmsnnMYK8UN7i9Ra4odnhA7Eg6HZT8RtGKTDB4ewWFgSSDgxjA1EjcwAEdti",
  "key1": "2NQPKssJnQQwXF5faPbpci6WUHaSeGcHCFkJMzoK1vDVXgAK3TNXBdopxhGjLTtJJytLT4KTD2U3o8uLwGw3pGhQ",
  "key2": "3Ut9XjPfM4iijMxn8uQS8q9ZXjJxphRh81p49MXAw6CtBQmUopEQSN7Yjtz4Q7SBmUbE13hfkNDxPchGttvEh9aZ",
  "key3": "4tcTwUYMCfpoBkjuR2fLxCQUzGDuWosF4V9DNnoijZbWuXvdDFKzpwdiQKE93bgPgX9d9LFSjBDtJg7XKGpsGbxb",
  "key4": "5fLHAjxggTYyaJdbQWnZVPu42nvMzJCeCdcvfQoLerqHm93GSAyu1A2UNWVJBENMXRVn9M7fr7RAj5Nokk4Tz96b",
  "key5": "2oqdn68Gy5YEXi1VVYr35wqnjZfzm3mtpZiEoXbe9G9QuRs7Ze2FdD4CmkBREWTT3NreXRfPz5ATLjfC4rY5VLBW",
  "key6": "5zyzY4KNbXjnsXQ3V7CdcLV7jun4qM7ucrzEL9iK7VLe6xwwPieBVMrMFfiju5E3szPRNqwJUomFhRqX4SMBSx8t",
  "key7": "5WoTLRnCFrPneL6aNrRVTfq9ymptvfBAojrB3j1x5b7jbXVNwkGTu2iDL5GQ3NkPzskoQDKkSGVJuARqGZUuyX8W",
  "key8": "2hg83FJiqGEvkVHn7KRXirU6egF4xTfVhshPQMqHDNrYpEqfmKEvdw4MZz8o3cfXRMAKFjAjYCsqNavtHGN9yKVN",
  "key9": "3Mb7aaJ9BBjADP8VwfzjyGc7PE3mvNhrF8f8MJY6wrbKcTAvqzN6Smhc1i9oETmRm2VpDakfq7tNurixnoUbb6Qx",
  "key10": "64ScRdqk2VdRBc25sf49kHAcuubzVXRQcX6fZiBdhXJ2FGFjipSjFjTB2CG1qMCBN5iUJyZA1F2jTCZTjQrN5FTR",
  "key11": "4User7YqSXkHq5ajrfQ59o86pKiqgaySVmqy7yx1eV7VxiNcKPY2pU2CsKbEogEp5ZrWkoL2b4hx9ApPEd5zMmGY",
  "key12": "3MckAd2pFjRSjZrPU1WTLEJiJwdZfPe5QcRKGpGeSkq749jmH4QdGbVKWTjZeZ51ocT2ox5j2KZoVFNaxisbLMtz",
  "key13": "3zBPyzJorSA7rEaY97SahWfZUzo2JaKkzqvnn7P7oPctmGwjGRM8ZVXXAAHtf5jUm2QHEJZsPPkEiZCjqyW3feKj",
  "key14": "31oCdTjSAQQ9UTEhqa7RZ5QzoRHBsP1rZQ62GjBpC1ZdfrY3tT5RWWBdf3JB88xNJxp34wfMCNbssoRueFvZnevp",
  "key15": "2eJPQk4Tt6J6pxxhKgmNEuLTtBAvdEsJchnJHNBA8EFudRwZRojNqUtFKLYitX2vhYzjp6spycTKEq9hy5cxW2Gb",
  "key16": "5dCTvGwRiAvuVfsCfj5EcHMHhj9DyPso6siULhnqMeD84kHuLmV4dF6gV9i4PvNDcg1ZMHwyggXgY9vt3qF3nony",
  "key17": "5N9cRXpggv7dufQpTVTWqhxf9kLi18M9gf2KbqpHJiTJXBcdLeDa75LzSQxtooiWEKtsjLjpBK988cPn8ERXauzo",
  "key18": "4rFLcG3N1nhRVTd995Vjiv1k827yfcyjWTWFhcyuMZn4ArW3Mf2UEwVD4nE5EPaEMue4ggGvRk3ydWT2T6whhLAP",
  "key19": "5kRUugwqraWqHvuGtTQdhQZUZjoRxLJ6Xx5AL1VXMHm2LQNnXweYo3LXavsYft8udsU2dGesPhwpau5a3vcFkJ7u",
  "key20": "2hgSm9YKBSLL3ye8itzb8Wwt8UtRhysQdRUZ9feemBWA5yiLkqGzWFtmsHPZNjuANxGRYiH2FKFdtqxYk1o8Vcsx",
  "key21": "4YMHdBXaPE9TV9twoWJDj3BRv8zDThBxKJrmwUJcoUaAycYhjKUEVHqJjh6oN7Y7P7ob3dwGBKYJQKADg9NbbqNx",
  "key22": "28YiKyeFhQEFttMZmjR5ajphA7xMzuVnKGdtVDkJB8hTXsQrzv6FeCMw6HdsYiN2kFJtHRGUQksCxidvPvam78Y1",
  "key23": "35UH3zs783kTHwFCpkfFiZSVz8zhuSksAWBznfvL8m4itArzknuCmaLSgAg5RCgGT88C4scYRey1rFRrc1yqr9FM",
  "key24": "2p3s3GqmAFd7s5T6Z81tCktbCEYxubMKjEejwQerE9JV7D6w5F8yqbstKipBpEc96nSXftFTkkoEDU8cAy4V895n",
  "key25": "3Q6KTuGr3s3tTY3qnSrFMmmvZZaEUUWRjzheJQiC7wp76CoPUVLCsqzSbtKrHP6jgzUmMuwRSYT2hmKHP9WRhK3q"
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
