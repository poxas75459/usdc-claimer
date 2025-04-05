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
    "2W4CvUKW5X27X25i1GJcreWTJ34EkD72nfLHc2UHd3hh5XXjoQ2pL36H3kSnpnmLZRMttSmtDmCKL8rEPjaWEZNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTNGNczBLBczzyKnM85zc7ieqZhiYhXiiB6ArKTcVpuurXBsbknqFc4qTwwMvP3jwQH9a2nzCTwqA25RQuKN5Jp",
  "key1": "5NTeVboiM9iCuSSqEcTrPe6CDCfNqR6hBUaKHr69aZKSSAj5zoLPM7epTfvNvfhjZ6zfaF8Aj9PWnBcVcHTQWMHG",
  "key2": "56K3UjgFwMXA5z9sE3PW6GQcUkL43h6Mz1eSgbnVjELh3jD9LKg4Bx51AMzUHZ8vvHMXfnMTTRnyR54PzJP59TK7",
  "key3": "5xAHwmsDE4mN15x32gKarEHSL4vyas2WYsr2tBECa4RaLNn1taqsgL4WE1Pct8psA3kbYmSFLg3w4YuGAo2PpjM6",
  "key4": "5etx8JR1EZyiCpr9JiSPftyaNYoeB3nAHJEVJZX8mwHwrB5ukzbNAYdei5GcjZBdwZuGTfVYLUVohahXVhrL6xRx",
  "key5": "2ELfjqn3D5JFLkSqdKLs7ZdZjzopew9FvbzX6hXGA3wP9jZoscv2jK4oZviUKzdYPUDSioZR8UVjxQREGSvcXKi5",
  "key6": "2fYKeMaV6KguuQ6BUNeCcGdXZbQANbeBXyLLKS6J1sCymtpTkTc9th5ZCCTQktawPtSBuU6q5mUPUmBEFc7WJihu",
  "key7": "2J3JLB4KSMSrvoQtHNrmgoKKkhYJgreU6ZNgh5DeFr88RSdpFzisiKB938QrvvGdx6TLSfymicb9KiUFyjGj9W2Q",
  "key8": "38yLsBxvWYMc37iqXhqfxT6T1yxLXmsiUyLGPMSKu75o1rhViXz2P1vdocr3wSBkVV6F3HXrranWbCReP1GF7usy",
  "key9": "FfSfwoSzCu3bVZoGRcs5VR3i48eApMwnmdMrLFmyBzSoeaRPiZAk7WtG8QdBEEEAHd25gNqjXaomDf5EPH7rppo",
  "key10": "8X8D2XuzBfBgkQ7cAsEbfNxwt1SBU4Qcf9UQpT5nVi5PYCWVqfqEWkQsYJxR7CP4WviXr7Vgkp5etBUj9n99jT1",
  "key11": "3Y2Zzhr4UXbdRSTU5C3zoNtPRayxg3x2Ws1Gm43Y6XcT59wnL1EqRUj3vMEpSExjmz5YqPDoukYLJypBMkohAus5",
  "key12": "2kTLqcxNy8nBpEMuzN6NHtdELnPRgMqoccQ8iXrGX7r37KLZEzNFJMUR71BKXymu5sy1Cm434Kgo6WEsDDtWHSBw",
  "key13": "4Azsz3a4xRQjZaPnyaGegaxFYtfSp6ih4KUM6t6k6N4dTF98dwrmpkMWFD9sZuxoXEKKPep8BJpyeLBsKjBxfZvj",
  "key14": "5E9q1VeQcEoRdmbZngwodJBDBeb5PZX7ZpUo4ynVPveZFHdAfkHS8wXtdTFYNS8f9URVDMtiEbFKyYhx4swcQW5m",
  "key15": "ti4HpRrQ8N5aUvxR89Cnzfs9EeYa3i7DkdCRguWbPqLJQf7BsBsvUDxZNFpAScjqTWbyj1syahPFYu8K3Lp7vMM",
  "key16": "2pGAueitu4Y4fiR5CUWSLSYtJsoik6njrcN9nKGjUsTP2U2aQgLGnGVcbWncLPTSoBFZBrFS6cPtUg5D5JUEhgAi",
  "key17": "3tKBHbcVeghxSTim1vAwmr9quy1FWg6uasuzDeadF5nodiNPHbkEp4tWQG9koQ2EXhx788GiVGwMeoFFMHz5zNaT",
  "key18": "5ov9nWR8fRXX6jMtaftsQihPke7mTnpQKPEEsh3Rj2ws22ZcS46L9GeZErBboVhuigqdVY2C4offmQqKNF4JqN18",
  "key19": "4xYbi7hGzXnMh49ErV9fEnyCdUW2v7a8GXNXKZmxV3cabjcfLMbyHLCKHnh5o8zqu7uWsTwFJo5RSDRPimYeTX8g",
  "key20": "3rKiSEyaAsv3S2hx2eN4H3TMjNkHznrmFivq9A9tsz3a81f4SP8VWj7c7oqMYyKvB4Xzow8h8vkiQ4Gwr59shhxZ",
  "key21": "4fi4EuwYhRhWgRicePs3MPW2RAM4EswXqjV4dWpSr2N1ULY8fMyzdPgsEjrxNq7kBriNXpkiGCYAJRKFzzFzpsBB",
  "key22": "4AhotV68BdU1PBrKwQrVABGatBsoYUYo2s2LwxnX7Cz2AZvyje6Yhi8UaexyNS24ARLkrWxL4fUkS8KJs9AdowYw",
  "key23": "2AGDeXDcFU2w99k3uND5yWu4rmM6HjsqVKPesQ7J3hQSfMPWo1PPViagqwrjSmzVCqN8a8aBsBcVQYbiJP3Y5kiy",
  "key24": "3RJZKYS9bqYx4TXHqewXs68n2V4e2wqBMF51DaeQ1e3Z9u2DSDvdJbTURBgYxCheQpQQXzDVtRzEWDUusgv5KxLQ",
  "key25": "4vinzBHVoTYDe13Pr7zy7aKpvqQmGhWA14nXTVAyzGDUkzVPGZ3R4hVz3eYZc9Ye7cfcNcFevwqM5s5gsgWkoTJA",
  "key26": "3mVkMZe6D3FCpA5mGT3w3hiKLQmMScaXMqKeYoRb3FwRcFMcbqKNzGs2CK47BsK4c5UwWZN7x1iCq5Ug5nSvZgm3",
  "key27": "ABeLiGCVQBkddaVjqaj8wwfjBwUiPESr2igrFHhUf9YNwrB4xhn6MTfpqjo8sySw64jA6LfedS8Sz7soDsY9Cyy",
  "key28": "54pkNrmWtdpdS2JUuQSTKdaaa45SGJMZF1ZZsEC1YxhYc4hvwKmBpNdmCTFm7kAqKSMPrfQjFTPcj5RjupV52Jbk",
  "key29": "eLjMUdc3qzUcarUNNG3F6cEcRwniGQRBb4JyxmEdyK9zdJkY1wVmczxTAFnEDjtG5sxdNvoM2xpBzUK65CznKNL",
  "key30": "5Ngegs7v5iA11M3tu7BfGvMUkAJKcLR7RUvWEubVbrAhFzb9YQraE2R2mHsfbd1ioBsW2FZ3x4Ky7DcA2ByKUj3c"
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
