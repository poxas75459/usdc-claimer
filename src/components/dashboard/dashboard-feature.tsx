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
    "2tjKLzAkFew1ykMNFpfsnxWn5JZxG3PbppWBjMzfKPAapj1L9mNWvFwSpeFKNrsZnNGc6EFi9VDDWxtCtKD2QVwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uu8PZGbgkLCHbNFbxZnLbCzLEsArk2s4sZE7wmWtUdWhJfgJEm132WskCszr3Fy9YLXBJskzDqj5DeEvq3y9stw",
  "key1": "1D4ujCX735i5aNiVHG6cANxVdfKhyzKtxAfYhGfaTt3BS45KeJQtYHCixveGrtLh5VrA2HPq2GgL3hQpVQg8N6n",
  "key2": "4GbZzzTBEgvyFCAYFv6EDXHLpHok9ddKhZ9zLfafBsVygb5isgVRGP9f543WdCFk8vHsFL1ZJKAuPnskDbrZUB9c",
  "key3": "KkdGerwy2Q4BTc1zV6m7vVNassLHEQJfhX3g3HrvnopnWyU7Srq51PtPcLs6VyTaQt58hJRbdfC3uQh84oN66mF",
  "key4": "3dHPuriR6tufWCgqc8ge2yHb3BGCYV5GPXupLZjWfDCrs5vyihzpByikoiffPNq2hSEUxGrZ3BvyHfWhAMzKUzxq",
  "key5": "2YoXF5hNL2tfYKinmhn4SRWDrvrLY3upqBemAaD53v5oooKkVKieiduaTYNgP7g4J2sX7Lu5kz8d5ssWA4ssCRyV",
  "key6": "51FUAKFcuyhbKk8wKELwpTFFCsZpv7HHwHQvjDT9nhpZasEQ9t3yyRrxZesUyQKkG3GjCqwn54MyE6tdLpccii9V",
  "key7": "641yHrv58jvJS8tKudpQDYz5KmKvmeKordVeyf3EsF8sD7tAA2t7aC3b2JVdBwhFw3pt79QTsg5eKRbq3QQDwn1X",
  "key8": "4me5KooEUSRPXxGYhLLLQdPvkXyY9s6xKgZhrE6XAJPpQYr6pzPFMWd32TXiGeh1izuDzKan51yvS4FzyYrf1XEc",
  "key9": "2Boy3UNHWC1dyrJUsQ6Gr7JgA9u5fqJjaWFuH2nsNJdyvQNCFrAwu7FaNGA8ZRWw9PJyHBDDEuhSwfMXywgRM4jh",
  "key10": "35GFm6zH1Ksx1sgjLaokHFMTLjQBMRb42vdgtujEkwaHC2Z6ERLGd6U8o2QKEGxEURqunqJndR17SKH95BW5VJuj",
  "key11": "3AnJpeCSeXA6v6v5DpJLRCvS9XNzjWrraybYaVdcRMZP7nN3JibmQtWBaRq2WevugkGM9mRdLS4y51a38yU4qs9N",
  "key12": "2NwRr1Wb9TajyfyhL9d8uwtw3fxghs9D8JaCVzMnPdL93m4NLLwzSHZq21GEWUJM7ddFPyau2k3BmMaYuN3Y8hyb",
  "key13": "2DrFLxCEKB5zDufFk3MkVZBg6nYajgB9HWBDJEpPdHN1zz32Ck5HLdrSFRZc19TZ9zue3MMYGpJFgyVsVbWvJPG3",
  "key14": "2WcuqkBdJsg7UvVS4C4gHmNBsMyMEKHEz85fUwqRBMksjcPMuMoDk2oHtd5Gy1xh6BXbU3rbxpQy9Z7T1uCSVAYw",
  "key15": "5o3nqmphYb7Kx4vdZK1GNkw3gGZJKy5iCWMeCC2ieDxkVaZSG3uUWWELLDNEZ1r2kPrNr8UU234AFXHohGsJCUaR",
  "key16": "53pRd1X9AbeTgNKrkCdvT8tcRqtFTtKYkB2EEFtQWM4rAEaZeJ9DA6fDZFSVAX6F2Lt1SbBx5GKWNL1bb9dUztHf",
  "key17": "2uFa7tnzsJt3fTozxzTRY7nmsmDxTCMvdoN1SFz3AXw8HjVtRi1kysKVUJmQNUYBQzsHeWzJKKd7JGTyi32qMhKL",
  "key18": "5RLXYGKaKsLUEHEw377VLe7G7p5dL8usEZKmSPrThyVwN1s9LEbK8z2XyTi7v1Tj5XhBkYjf2ZiUJzUQpW8GYCax",
  "key19": "4xKnGeetGWDxDfManSBwJXY9PKMQfAhZVH5ch1HzEYD551AyBs9cdUNWN1gomdzdcWLMwuUGNCABrNMVEZ5ZshYX",
  "key20": "3tXFTj6QpAiSeNUWffKDh5DpgEmWJSPFo7G6kqpw14QXcGbAj8XJsEqbrgRm4Pkq8HVQZU75DzKuHbqd5yNgZ6jz",
  "key21": "4qvdzxeaLxSuz9Gc97yJT67upcyxexP2MwdQ4HqqSKAtf1742obVApfmJtpozsASEwRmBYC1entNVxq7p5HAEuJe",
  "key22": "2kbeEtJi3TDmr2DX3rdB6Bc58BM3J6kK4MtSR3nmnDL17CGSBkLqSC9M8VQUJHjaUugeRQdwK4tdrwRtLEuPr3yu",
  "key23": "28LvhrMhfCj2pMv9f3vyq1SUewae3Kf7UQdPPeSQsfkSA5jc2FMEbhTdnPajfQeEefrosvtyWZs5ka1gBbUyM5BW",
  "key24": "8nepG4M9kGndRSN96ejhNcTLYsBbzgG9NqR6jJzM8KX2qS9ZnTNbRiWHjFM7UstvNwwyDmE6EGWhZJTuVyM8MA7",
  "key25": "4x61hWEENW15WkoDgz6Fwa9MbegfYFhaBT9eBdvmzsmtJcWqTKNsLsT3SSPjbgaHZdRkDTDH6dG8PLVnQr5fMQo2",
  "key26": "4LequqFjPBdFBZiFkLjfZATgShC6s8WRT2K7R9GHUs6e2mZgydGAdALKZNzKVH4YRGkL6mj6ceneaerikAUjNzbk",
  "key27": "4JV8NfjyyaW4SR7XqJScj7E1XgXpcQmZwyim6VgTWYQwk6PSKFCx2atAQgC3mUkEbsPcCBRBuwszCpkmbxoiCQVW",
  "key28": "5Em7CDrfJs6XgCtq7ywCieFMhtXCijaBCitDnobCwU8yFcNV5251GrXoU8WHPyKENhVc4BwwSAdDBHjMU9wBGK2P",
  "key29": "4bb3Z7HULqxQ7dY4QwLmumggZeyXjBQGLDH6ZLoMJseoYM6cMJKZvRFqNbMAn8isfNEu76aR6Xq11djXptkqcG7J",
  "key30": "oVoEJPtPQhc6v44zwE1zZzdjUsX7roz4cXP5V6gexgsg9UAH1ps2HV6Ap2nKJHwYPbVKnYKP73UPJx21N7mBRBZ",
  "key31": "2kB2ZRoS3SrZcb994hwxnFDNjK4EdDaP79SNkai3MsMs944WQVpcJ7rXgfMGro8QG2yw35muG7o78w7KMDSemsfy",
  "key32": "3RkNghns5S7LTfgzgZyLoBsA3szJ8GautZmYzy1QacB8AAhcUb72xMXvWHMBTLziJTajSVAcjzoXdjdumsk88PaM",
  "key33": "5B3sVkk85iwmRYGWGQMNSWUP1tJvY31sNBEpHE3XHZoGbYbPUN1Vpmydcf2WNTSMYUMnKb2vixFacvjeNcViaSsf",
  "key34": "4yXD4SVvj5xGDo5iNX7D6wUC8uxrpgVmGjRQhrJBRJTtoNXF6gyPHVaygTLu4mBYg6JsSHiDsmcbcDihX9akxFmb",
  "key35": "zn1yPA8tFb3AEQbfSvGfE38z52LQocyPMAv1h7iJV6A4aT2RZmFbsD1TmAYcz67C79YpR1gE8A6HohdLxFziKbc"
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
