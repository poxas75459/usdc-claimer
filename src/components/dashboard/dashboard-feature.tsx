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
    "4zfSc2GJe2upka7WVaoq2BzqCdL1b55kyRARnLfB7ZYL5PWCwquc5GFYCqugh6GeXir3hUDdBrMVHX9ohkZM7Juj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3esSzV2SPYsuJQkjPrs7Q1qv1dNbborvm5mWno6ZpfyJikZCGHKUacyEvKS7iHEuTEQSkcqCYtGcdaQiQb7X4oxk",
  "key1": "3v2g8FiCVWmwSzjKZjEFVFJQotGLthpPVHjmYqoShKQbwZqKqdRbR5kVVrCVYjq4PXQiu7WeFtDFJJ7rgRzdQEeo",
  "key2": "3MiZCoE5tdWDPzYLHCA6ontBzNKUq5Z8DCtnmC9jifLRszZgiBCfogqyCVqnh2CsU6prUiJm9XCC1Quq6eUVdkCP",
  "key3": "5nbfGCgvMWKkh4JQ58vSThje4aecCRCxZbUz9jMRNWSe2NnEGf2WxSFs98BdjaUbfVu3nwMr1uJ7fdNb4pz97R54",
  "key4": "2FGvq9VAjd8ftXANsw4BSPj9QgA2CBpEaD9tsiRwZv7pkqHUJ77hSgDu5hUuKV4cUGAskz6TbCbxu4aPGRaLNHzM",
  "key5": "5JnkAYvr3M1tqPijTYC9Qp49TJKwwspsDQCXvwkcmWRVebN3CXvDFDTToea8jUv3TpqxwEMy15hFGt3ZmJSDhHjg",
  "key6": "ZhVTLKmRjyGDFneR7P1FNUDzmURt4Dmf4h6EM7zMSH47bMwSYHRUbhgVww4r5NCWE9YwQvkS4aDX7oKLjjRUz1e",
  "key7": "2zW8GrfLXYiw1TuupU2iDPPpxk2wkDRN9owUTkh3vwxpREBBCAduJErDzVJeTenk6nRMmjpiLLo4feP6myn12s6F",
  "key8": "5TNNZi3NMYWTk8vEo7Yp9nDyWKftj1TER54VDrzLUmyPnNXgQkx4Nv4KXnNmXrv2Sv1YMJ5dDpAuR1i9AvGXgKv1",
  "key9": "3kdF9RnrPXXJCGHA7R5vQqwii1d43iehbVWBtSjRiHCpXeRYx4M5Bw9snvFnnnYjZk2tSPVpasqSQ4qs61Me65wb",
  "key10": "4jz5ZTd9NpGKjhhBZ2rTr7eAqnyJWhZedAgznbaxTyk9urRRJXuBkzY8dNQvMq6LhtEuY4jmffptx9TUWs44hBvM",
  "key11": "5kXpYy6eBPFxGuqoSKRYVa97Z7HpJMGHFKMB6t2gsfnkf2veUEcun5HcgR8dxtr7NM3DKcTxopeG9zr6D4wNTQBs",
  "key12": "29JPxqkFJJffB5DA53XRuBnUuh6weZqaV4zvQAWosX1sJwzCgr6rAi6n4XyCtYMce4sxxZc1avSna8WnXrp6ArVz",
  "key13": "2Q6dimqKN3eDevHp2PJZ31gwjaeKGXWRVZrCkjAVRe7bgxcAh4VzxxRPuJAtxgTyDZDWWNPXZYzLkJkE5C9Y7Fqf",
  "key14": "46gJUSaNooCeem3MAux7BKw9FvD6bVgFZ2epX2xC2R2W4S6ePkFJjR1ThMLsboPcKXzPWeJ9PST68P1CYux95rSA",
  "key15": "2jiGdEQhzPU3YQyYAiwod9oKGzHkB8SSAYBfPB7yfcnpSbU2otwxFzYoZA1HT4m4zx633gqmRLA9z1Lcai188bNp",
  "key16": "5SZkmNqhWyKwUFdA423nezMtYrRdcrhsMxsqj3e41fN8yDKf7k9JkvxYfB4Lw6tGLtqXS9h1aLUvfAiKH1k9hBQx",
  "key17": "2n2bpBBqdQax8g8cpWzPrh9GHNuPt1d14bzz3ZMvwBhGE1FNJFwGf5cA8b2uwMCtjFWtDiSMECfqYfavWkCXv8mw",
  "key18": "3RLoeJcNbZNUZyZAvwenVSSjEfqv1dGu5WmaTe279u4kZj7vr9cpNiqwiEwBbbNRRjtxk9414KRj9jCjchYCnHcP",
  "key19": "5PdTiSY6zWjzwg9WcWdQe38kufruPdqsudP7qmQM9fAnb4twVg8fLvvpjwScyVeKMZUnVQPQPzPi1WY7pkiDZJ3H",
  "key20": "4tVawcvFFP3WZAMvmiPJYDddAfVxa1MFwkVgpR41bbEod1dUo7KPqBRadCMpAzAtfbBYJnbu25Px7C5rnyBbU9gA",
  "key21": "28vtXeSmeDajfHerT3PbrcnGZgpgm63f3PKVfsJBaVSsp2fCcibjKQD4Cvc6GZJfqbbbXZmQYeZ4FUfoarJK7AVs",
  "key22": "4bdEoGguRGRb5JcsVG2GJM76C8fjTrMr9kofTnqRbkrLLxzdAtYNQzdvqumMMkU8v7hSvyyQzqCSMnLtTEbzuJZ5",
  "key23": "65E3FHQ8byFHmJ8azbJweVEnsCS1hwSbU3pgWT6DtRDJ8ZsrvNrQQfT5AbVjyNC1QW4KJhDD4NNQm8ZBPqieUPEA",
  "key24": "4zCLSk3oRaFhGRQJohuwQvHwZdnVwzfpNfWPGC25277uuWUVvJNLbaLfnsPbLwAwmteXhcLSFTp91e63Mc1dRgSD",
  "key25": "5EtLLHkZi6vNrVeWPUScHpc3je6AKz4LjNfRtdVkaFTmvcCk845W9MvLoW14fkt23DaQmkMVq8xEMhvnmtssWFfe",
  "key26": "3431APo8YarBzMF83jEo2GsN3vXxFZ3MJfqnuFbLTDwg4FTk4jSdsoDQ8Q6SBL3947yAFhoRnC9ZFmHTJxy8TUxN",
  "key27": "5stXZcDEE5uq9W8mt9v366f7vRZTpaoHzoXkbJULLEJr6KpDfq2ZSxgQ8xc3hWtZJPXf8yHUCPxVp6tofjhFUavB",
  "key28": "3tSkxX2f9fNVFtXM85KQjgbr9ZEFkYogWEV4V3axxyZDsqJrR3gyZE9ULkEt8GL9PAYrnbpJDHT8RRDWN6KLxckT",
  "key29": "5uVTiPTBxSuvHtGx28njAwgH1aVhQ4uNKiktLCVnWyvbvHnGag8HWdbYDRo4j8mkvHZSktpfFMBmuLoZm4V2bCgw"
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
