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
    "37Ceg1fZc9qTV6Gw6rcMYy8BEZoNBzoZd2Kzy1qFP7ADwitVNFHVsrJ1UoKA8ZM56u6bQd46Fm8Qa5jpYGN3DpTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iTwTUBVnqTAmmYnbUqZsbAeSg2txUUSSj7s1du9y3hQpH7Aw4Nyw87HZMHCQarP6q4iGvaieaq4ws7EkVgwwUs",
  "key1": "3Sk9nizcxZwUj2YaPsSnb1Eb6JfVE4DJqEe5crGFqGuGsbf9SKAhLLsE6f4cTPWoXW8vfPFiRzM1o2mipqN119x2",
  "key2": "2rLz32FQcdLCE96tRHJupFiwc8JzKejs1a4YFgGhYJg1aymZgzjzXKeCNFqJLfW4TTYZGBYa2F3SUUaf34R9Qz49",
  "key3": "fKqyNer9FwVBNjfRTdzztxExus2aRh2W8Mp96wj8gQwfMP36WFxCTCV2anH9QrHqf9XDiQG3ivdoJD7qHKRNkwe",
  "key4": "3Vx5niEuy2AreGM3KmPx6KeKS53fLUnGPHLoXsNSkaNYDJD6WnPg4apjTVyzwRDqfvbG3xKxyaVz9BJUkrChT1G5",
  "key5": "5URi25z8iZYwzJpRkKNHh8cwmYhBAYQnJYpFYi76XwU1CyvNXBQAy5kh5S9JLFGAoBkG4gDnvj5babREFN3UABEg",
  "key6": "2VSoYqAmvLWrGnMDMCkAPSZLNS8ZLHKzabNv2osvErBWe2fhQfe8WEeTmzAkfbjn1nSZXYUGMTrPVcLbEkXRBCnz",
  "key7": "5Hh1PCMsVDGmEJq34WWw7SaxhjcmeNenv1sfhFwyugofBRBQna9PSyJvAay2BZb7J6zusERKPhHNrXuKWFj1it27",
  "key8": "5T2CAeRAcZmeRGK2D7fEyxkxhPUcEnuVKjf2n3tAr7ERQq7mziduMzBnLin52eeBUvR3RiMfGxdKaipLhcvDyqv6",
  "key9": "8AkLnrgzycBChBLuDR97AWnBpB3rThM99Ery5rH9n4b7d2EobkMBZ7GVZAyBxHx95ySV9oUJTjQ7iCSiKadTGVQ",
  "key10": "36xVrAgRsGAfKJKBJG256YLvLUbvYUYYhGoDYx2sg6g2bQcoJ7qmxbT9wFupkSJEJVHSYEUaiaVdkDeUXY49dEsn",
  "key11": "5X5VEU7GLrUjec1Jcdgj8W5rbPFUHTHBNeLD3wsYwwvcLkadvXMe43GRcT5G183RD8omB39ZmW3uPK9NtmsU7x9i",
  "key12": "4UgDArp8SbTeuh1s8bC3QENikkjE88PRLpcaqXZ3YwfjmfDCL9FqpqJeqry8peqB52DKXq2fcv5rEkP7TP6uxbAe",
  "key13": "2FReZceEdSeB4M4ChYzXNJzTJ3VuiJ8m4B31jQqqNAbMiCoFtbgCjXLrQRXrUGWGWZW4poPrZuvjhVCsZrbUFhut",
  "key14": "2y84kLYZda8ZGzKCgSGcAaXj8Ny4JwYytCWhk1fF9ZYUtgrhi8GGFf1oeFzCMb3Civj8HrgVPvoxcnLuUGnNF4Vw",
  "key15": "51y3tBBJc3oZCEjThLQ7iDdA9QvoDwN8mR6PN3EwQdcRqp4uyqfKsDApSrYxwbEPxhXJDaWAmiY22J9W53SoRyPi",
  "key16": "3u134bwJZxNoHSP7XTM1rRV3PmT7wifcMg1gZD74Eo4UhgUgR6Dpr384cvpJLMfVpr8TamE2aL5SrtaMKeQJgFrT",
  "key17": "2VZGxW4ed1g6uiZ4TXu9ft6q9akWnFiHLgpGzTAXpQNfVFEfHP5H4x8mCqmGj1wTWbpWTvUAJox6bSLw9J45pFp2",
  "key18": "33xhRVfxnUsoTKByH1umN8VYKDCXKezaFDMNAgx3DFTa1ndipmuhXxx3f727EDoP1FDRxgUQDBqcZW3c56H7PfSS",
  "key19": "5UyxMBej2SqRTgFsLPf6CQNBxtSfrxQau2qAYQnZ4CRvoKGbq2M5uMUVdnX2p5sGsvFpDDP4dhZXmgEvqv78BiNz",
  "key20": "39QMcYxjeRpZxsGnkHifh7PWj343mRBYmqFM7Y5RnfCoLzcLTKhsoe1LjCQBrYiXExQ8EXbMFCXPsLUUJVtoYAko",
  "key21": "4xWjppEZCBRwkxZ2NdS3rqtaMrWCvVVkHN1xjEqNYXoStGs3AQs16GFuFr4SKVHMY17GhXJc4tn1vFVW6542g7VF",
  "key22": "5XsNgchqczQoPKaZ7ZnvFR47Es2VqffT94iVX2N13kTrfgtAb3YLZen3moZLZaVF3oCLEqpPdh2jPGeRhYQaNnc7",
  "key23": "54UmttYg8Xe5DFw2D4LHg9DAH4u4arip982QFsodjuxn8TfqTnFECbaQbDLv4swqVjZzw3DjmhbCjTMBDHjAa2rQ",
  "key24": "5DUfufQ3qoFKsixfdGe6Vj4AzJ9nctqpi2qnp9ynAYEjFso3KVuyUWJSB9pTV6j1Ap32oP3tDqe11Mr2DB9qQUBk",
  "key25": "3QeVnfu53tg8CN8RNxd6GcfcmbsTTq8i1fBLYK1vDDdU6ZyTzM9AbMFVwuJ6if33rZeHLVizM6QVpBuJEGPK9MBi",
  "key26": "3Mbx1QPCtKdo4cf4ZqfHF2ERFYv6Rr1nYQ7zfGrbbSmeEbTv3dqg3nCEptPBiYvETXB982dRQCUHPQY6P6gMYVqb",
  "key27": "TqaEgj7k4FNMWzfeWn9D8n1hKan3hjwy9dpBqSfa4Qx3Js2FDuJ1oxTMAY8qxKHWQgyYeotKCSdwpsVoUsG8LiW",
  "key28": "SbwJkovfHWbtc1cAvNL98BCXiH4A6BHjtrWZPZXP1nKKQjuXXxvnF4o6yaeAoMZD6JtJdNYcGukEzaGC16kbfVT",
  "key29": "3wKhUuMacsz2YLtEdrz9NCoLvhiKtM6mjx7nXiuyFNvRUAsWKHpSVUfJRy9sJLuZoTPwWUBQk9dXj5uj8PyT6TUA",
  "key30": "6KYDLfqsRmTB9hQcCgWGNo6YHTWhtUAw1Fkg4R6Eqqi8agWHYCAzVukFDpDSJywRfZkuk1W1nGZggwZfMJgYguP",
  "key31": "281jzCULfJGPVxzhrtPVThMGLQ3NTczWf7U7QutAz6V76K6FVwfmdKvGc2gLkyfZJDadtJZiSn742cXyMEekU5HT",
  "key32": "4ps6gBiezm4TJkfp5a1TNk1DPHg7YGRYXWvaUVd39BdCEKxutwjES3wegdjEcppZf9GrdsX78xKPh6wweG8D3dRF",
  "key33": "3s9t4cfCTpgLPxjU7MxwH5Mzp5ni6gMZEDSFAScPyx5PP5KYjHixCSSMXRNDp7DyyZLwosMX6DV53ZvWZs4uBDJg",
  "key34": "2x4YgAQ1pg9Zc6vgU5AbyJA6xwdm1mNj2GmHGCeSBZPsFbY8AVeVf7uM6TmUXa3jpRsJRugUGMV8G2LdA7wpKD5t",
  "key35": "3NSPKdkMwBYSmwT9ACJN8LunzccNbHVXr5oXEnzdTxRaM31HGwqcXH3M9JZaxvzBsXoKpoGgtRbEFB7VYJQGz1AX",
  "key36": "54rKuAi6YLDUyqw4TQrbw1TuRm3FbZN6fUBYpV6vc9xQzwtP7y9QXB75KcYfbz5YBWEry7QpNWfLCMtXESB2fd6E",
  "key37": "4GwE4cfAmsxYqKbHhPpipoSUY4THLvraCVf48GMz29KbbfxijsN6RCvgXoGa3KFPpfr8DPB6iJ4ndXdqisZZ4YbG",
  "key38": "3dhXJ3BHEnGFsKn8vGiTjfu1iqHmQ2oCo2Fq8CNhYj3eYPpeEsvBmV5xV5Z15C475AP6VbWWbe5SaKAEm23853Xe",
  "key39": "3eodMey4EUH2U5k6ZVnoBtqd8XijvfeCZaogxu5mFj9E259dNmo47Lo42ZX9y3LwKVL8ZHYK1wtSDRdFUfXoWWzK"
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
