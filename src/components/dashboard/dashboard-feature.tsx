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
    "5ctf2TRsZDCUAzNCUHAgA3XGugk1row5wZfFYz4kWv3ZW5UQ2xkYSrsDL29PLNm9T6vya6JQNfdSkWWLCnroYFZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34SU5KTE4pAcZDGS5ATVQ2D2JSRpPekgTdq2HzKWvMrDfka7hnwyBMFXGfCEn26bu4ADYaRYYx2urmQvdaStaWSp",
  "key1": "63a1WW1DCtaJMzdSrBfVDjjS4B3FYoBoA88NDf7PrmwvdcnBkKqS1UJbnzVFqAumKknJsSzTyKk11n7MxeL2bWFA",
  "key2": "2FNqnb8hREUJAqfiLA88LRCT6Cc7X6hGNvZExQtm95jAXacy6E9UmTXMxEpD1ZpZLALPF16EdrGePoNRt8EwmhTs",
  "key3": "5EM74A15wrBTwcB7nCDFAkSNq9ZFxgHAsmFfYka7EEwnE1dvMPy2GGTx1X4KGUGk4bsYXQ1BBUpFKesFS1WaeYEv",
  "key4": "3iaPT6sFpeVFCNnmVthJiQW8jDJkwqHydg5fxDQokgD8wW6zrvuCFnauk33pxSzc41XorrJXwEDES4TqU1Jo9KyL",
  "key5": "34UdfG3wV3KVgxnKnFmvXL2XohF9fuxuLvd3euvNMpc8DKProSPGd9PsYhz4fEAuxXaNWczVEJDA3ZsTpCyGfozy",
  "key6": "5cpwqWQMaZQXmJ6T9bc4r98fhK6aYvjYm3ncVfhLS3Y8zpdu1DoeW6Qu96mRhQvDppXW8SRRvA5dN4EsjJ3sLAno",
  "key7": "5e1qxdbVvR863Twagw28GX5bKSgS49dMuzUeRUnq4oJUe8GUXQSmGfy414WPNemwL152p5KCKpjpb7zWnReQRYTL",
  "key8": "3MbLHDKXyQhhsUXmWaD4SS5jfCk9kV1KB7JWnNd91vJStrSZJhZdTSBBy5JcRa5yC2qR1QVbjE6wp6rSFH7gGxu3",
  "key9": "2oQ6vKS5UjmW7XS3dzEmWJg89v8sKgjLVQ45UDqMJgeF4zPUrkbvmKJaBScQmuNeezr9DKjwjbbcPWdzVixtgjPZ",
  "key10": "4Pzs9CgPNhHtEXrAdjbD5o71ZUcZA8LaN26isCqgSdbqT8U3hKWETFPqK7ct8CxvM8M22zRD7w58Stpf9pFNVkkw",
  "key11": "3CS1aFJcbkSHXGvGVukzYqp5vXuWLJ6jkewrhmQWUWbGwa9ZpBu5rcBZKBUwpktarBzWHSS6MkrG6sdsQHeweW8p",
  "key12": "rK8BWQ5L7u17nFCovYs1T11ihhxa2dQ4M38stDFeKf2uTZ8SnRa8KuaZmWWKsVZDXU6aoZU3JhdRx6tKH6VeAXJ",
  "key13": "52gsqAX85D3nkB2K2No4jeDM7vk4PtmAET6iv5eFcpv6qkyjUfmKsrz1Tf42h5NEK66GsBjeq9VqDc8a48miXujw",
  "key14": "5wDYtkfi1KRsiTBPkavLGB934NycXQ6AcVXuiFU1gR54gcdBuAdmnXRzVjDrvmLVQMkL5yJwhAVvv7fygPa5Etcz",
  "key15": "3p5qSmcNojRczSMKSr5kvrUsA6QDBsNFEZxRt3gJdZxDR8i1JVSA6gEmCpjFjfBZ4xd6j6ASE4if7wkzbNh5i26h",
  "key16": "39XGaZQ3kyApTxRMHjaGUEearFD3z7AMem5H1YQRiesY6Zn48AVLbdEfm1Fq8cpL7p9UreqkVUzCG9KgvP2R6iax",
  "key17": "95TzrGxeL4S1RPxUEAiDcQhSR5VxQp1tCcgDdPTztjsGX2titAJvEznCzaDEgGnVFG9pEwUxQ2d2BfimbeBBXn8",
  "key18": "27J1bSXTPUHz5nzq7yZ8n3Z6FQpqmgzcyxTvGi5wrLkzaXM2UBL7rN8M7YrMrFJ5BXEVwagnHy3quCHC7BP76BGU",
  "key19": "5p5oQ1HMzW2rtsBn4joJLo36sYrxaQaSfpJA1HP1BEQsg9ZL2VAfr2RGKVZGD1yo7YV1QwGARxWC4Sh3NW3cA6kb",
  "key20": "qZcWKJtP8YpmV7viTrfLduRXbk55AW3ENjQXE3EbSVLZgXhoSsrkJrDjUiVoLjCopnQfsuVSwzFfmqVPiLYD7ZU",
  "key21": "4ap4h38qPLMmetV2rpST3UXmgavjGbrYBLrbSPYGfLgQYeRcn6k3ykSRQVsDQdVNmvTRPf4MPCibrHzSXvw5u3iR",
  "key22": "2SHFg8TMQRwdTk2zhiCX6MRCuyqTSpGPWj3BrFnFGi56yBuqLkyYLyc3PwwPpJAYhHCUmfzWfXhUB4MCKStbD9yi",
  "key23": "CGG5WprxRhcFazp5GqDYzEXGMVeYBNraHWzJ8p3UXnJh2XtVE8W38VckhosMscYB1rDoXaCf6YyEg31znTmnrAV",
  "key24": "3LPnWuJuk8dKNow5zgd7vghfEakdnn1L2f75M9ewWGRSYSf7NQXKBkWtjkANY2hSRaF1GgmBgauAL4RrjNDHamgf",
  "key25": "wKPpEKWgGVLASw8d2yG1141tFdpFDzQu52WAyHhfkzTqNqpWZaXNEZZcTVQhrqpSKyH5QpV81Zvi9W6DNw9hUab",
  "key26": "3cvpLD4fKzsSKk2njbCSsoDYHjGjnjpkdm4C7t1gJ5air3CSUziCPKEkmMRmdh8rJTKsuyVzV3Y7nmppqU3Vupq9",
  "key27": "2suq8PpPuvu7TQ71KPXEJSeXWMdBoVGWqpa89335e8AGaLBqKjxXLrbwm2KqFjBm947LSZBpepRR4dbpiAVYZgH",
  "key28": "2E7vaFXWgCqurhjeNk9LwBjyKJGMo8K2VUEwDb9qufqJNup5ph1LBeXuBijden8fuDn2MYeeG17v25MM4e7D8h5c",
  "key29": "4Ha5tf6cR7vZW9d95j7NCYwKJFjsTN3skk82Mpbeu9L7n2L2B42MjNvhQZnGSYLGCv4nmavPnX4MCPBL13zCxcW9",
  "key30": "4tgsbXWL6m8qSGvE3VdGSTFronttHfXC2MMHALDVLKyiwfcYWS3kmZ9UXNNCtfffksL2r8thusURFgSzvkykUx1K",
  "key31": "4W7JU6YW4ewx7yR9bdm9PDsMoEKMtULiBXmc2gmHEEy2XMSTQxxyc43EapAyssU8kF3Vw27rbR3dVLmpA36Hn2ey",
  "key32": "2qhkMqp4TkHnvr9gCutn7hfChQ9J5fHgkJMSD3wvJ53QmLuRYvrhuWVxxE57W3rmmmU6FykUEp1zbFyfSBnnPMyr",
  "key33": "3zwvrtdDpzRrbf6ontNvGa2rShmNMVpvPNuEJ4xJ6sn8RbQSSZkvQ1SeFvF54HxLQa43RLnFzjWM8qpFj4zHa2rk",
  "key34": "4GKHUvNRxAoRGdsrxecVegVksGFhtUf5hASiEzAAZdFkYaQcAk8cuh7a8Pd8L5NJDeCYQHVoRwd9ZkxVacRAjkZg",
  "key35": "3uMH1M7ArsLNQthDxJXGo9dHGYqhLHjzskuhR7QZFCBq8d9CkxmMYA67YUgYRe7WAA4QpgZ32HWVTwKJZMv5LChW",
  "key36": "2GZeMDpZKGa3ZtCEDpGAkZyoBhgWZnVyJZrgQJXDVCr9REYiuJN4rAd1aCpBVVTnT2ztKpqusfCbHhU45eK5eUuz",
  "key37": "2sqgerCmmyoVXuiesmq9ZWX7rnwNohLWFmbr8b9JqxeS5kE4ZmiPAro6v8CnF986fyhRnE9Mn33scb31zg4psHwy",
  "key38": "3Kihb59eHDsiqvCZLk5Hq9vnAhY2uBYa4rjo92kuxzwFTDMbFSJXxwYNUzekuvmg7aEhyfhwirfw9q3qZfGbAHrW",
  "key39": "5HqM5gxSGAhiqrxEcAJqZhw1u9S9RNSZhvNismS4rqH94uy1K8T3mB1mPCVbc7UEL69vonCv2Yadnoy188PnLqzF",
  "key40": "3Q57faCHcyq2mTzGWXFXZF2qrPBxSk1EHseiT6qWfPJcrEecqPwnYACws7KRirRyRMpXWTSe68br5RiEhadJp1ya",
  "key41": "5HBZ9SGVpLMi8ePXHeLAcBjsbD3EK4ExTdGUiVzzewPAi24VJX8pGjaQKtuHLb7Z6BHWbjtUj9y1pE3y93hRd432"
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
