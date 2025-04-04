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
    "2FT7Hu3uFEt5z1SineMpYkNRknUWJKCVmLaYqsHZCS1XZ7rvDuh7attXgEvpNVD37eqNcWtKJR12BKLENZnMcNVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YrHEbRFY6axov16GBQKXVqfNqQv4e8mF54oTmxqfTepdg6aRS9oUeFcuHcr2EXTJiuwkABCuNFTDJ32pDHN53JB",
  "key1": "3xo89URi8d747BwKt3CnuGgyRUsDCmyFSLgLqNDsUo2JXRFimQLpFXxdVTz2qW9V83KuFhfqsC3TSZGgExyeTqZy",
  "key2": "66UxCxax1pTv7wUJ6nY2P4mjQSjtfw9AtFm3YsreUC7XJuXJd1oiXkBoNTLgbnyYan7vHoc4bKAN8VeURFqRbCGu",
  "key3": "5kNRJvchkfjLvNEvqqkpZmvXCAmf4CUoVaS2QzDbfNgHw764chVFFqvS9q2HrjkNaEuxTsefj14wnbcSyHwE5dUk",
  "key4": "5EmXZWvQZMgTrMfcmFWCBdgnecfZ5YPifMGYUjP3fvz7KEVWJNPT4Bxb3zDKmQ8c48qa13k27SADw6H3UNF67for",
  "key5": "3gpCGpiT41F9w8j54dG9bgijCy8nGy5fPHyZVo6LGpLyhpnAzdsdXpHwy4FDKmDvob7ZWN79gNJdrsMykEAax2CC",
  "key6": "3vKLUwwf5sitZDvDLVLKJd7vopFMvxnsEZTy5wKsyWUnf5itnM19uFyX1VFTnPTwRuHCyVzLH5RmQgU739gLAG86",
  "key7": "pmMy5ESj1hDmf4VqoDip5xXjmsP9r12MzJuAcVsarcaNcpzVTByuA6db1LBay675ExLLBEtvgRM8KnLLQZyDMtc",
  "key8": "9FrowzeZXea9Ko2CYi54fAeTKNdV3a4aG5PGSTP7LEYzTSz5rfe8xrHRwJ6LhqUh95F72JjyswJyXDjahPGYHiB",
  "key9": "N7gAiy9X9ZKXGSP8kLrqPhrq6QbJXjpF6mP1TbvDAovx3uhS9C7cAGLgqQJRXM1Zd6w7hjNoynD8Vmt5qhxCpUg",
  "key10": "32DhtkLySdpC8aiMs7r8AJKgbkh9nTf8vA5XbbNzvgaNvZJCCGEgu7Mwm1NKvRT6VavR6ZwBei5dAfnFkVtgrQo2",
  "key11": "qwVDouFHMHeMJXmVDmtsDxJnFd3BHhBgf5KT1Jk3Shw2BXdWHRPBv81mZRqfzhp2MiKG7UAyaSm7t7PqFrfde2T",
  "key12": "CWvF2cKroSP7HkTyx94PA63RyPr7mrWePxr4CqT2e9TbBJjF3ec69xUdQCHKXXw3HKn6cP61bKAZNF2SFPhvtn8",
  "key13": "w9km72xGc9bvtdVEVkpb6z9KZ2RvBj8GBQyZEhUnfP6pQfK5FAZJ78kVaUKLa4Jb7mrYnitNmWWs9mnL5oy3TT2",
  "key14": "GeVKE7yCwRNzEbGZysaM5dxw7XPfrGq7FaUYRExgnfc82oPTurtvTF4pC9cs8gG6aBozZhk1L6vSCBPz5L1SyYA",
  "key15": "5bJv2QNwHCX7TEkbYkVu1CEJaLKaSpUmKnvtd8JsFNwX1LGHSBZQTQzWnHAeNBUJaLzi5ecJXJpUEsAmcb6ptebP",
  "key16": "3JuGZRYB3KNGkUjKCm4VZuXFHZpsGXNGXMdMcfakqHBiXewzyBh8Ayn2teEgJ2F74BfRiKeJNBykxrRzSAhCmwBh",
  "key17": "5eoAaK4q3QipvwkEEHrJyUMKfe7gBybdcHm3mLg2JUpaQCdGxqRYsNDs7mZj6wa2FLjChrVc5UJX7Jtts3k181M",
  "key18": "3ZeJeYmYrxLzLEy8wfYJStXecZwHFSzWapudzoxRb1NGPNWdpv4kzekWK3ULuaH2Rvi52aoRmrBsrHrJK9Se2FNM",
  "key19": "5wjyscknwqfZPteoU253AE7L3tdUfsnhadqzYzMzFvdUf1VuYCvATru3p3SbkVZLzphKQ77MTZAyi7pCqsAHJCgN",
  "key20": "YFuUuqA5BohbGs6wSXjnKYARBAm6LP87nS6eLwNRQD2gmzYvKmN8xz7qPKNegfVsk7qBjWuhxy4dTWQrKLHKxC3",
  "key21": "JYwgw8NQViZLZGTCBvxidRuTgGzuiK3PoNiVVa9Cr1ijNGfb2PXEq9ycnvXtCdvcqoL5vPSTr97viar29Ywc3DV",
  "key22": "2EXLC5Cg9Wa8VJM2WZ9LFYP5r6zveZqYu99SXyLo51fZd3Fe5CtF2vhKxKmAVvuf6aUWws477pgbKeJfMMc5LPrj",
  "key23": "PrHVhqn39KQtHbo3NAWGsrPXDsktANBADmWUGoAt99u39TnGFo3mBPZYww1uJSWpEyikP8RMKDBMZsbQKdzE6YE",
  "key24": "3EfwiomaGNc5JoEe4xd8EbAES7SozNRd4nveRfoX4KNSwo9xYkTnrSMWaViwZABGxE2dYa4zPHHReGKqRxQyYDZ8",
  "key25": "3e8kY54RwysUEy26iWiDQRTBd3QBMVAhk4ydj1khv1BFEPuFZmoiAg4qe92ms921nH6DpkfyqRDtH1xk7iJBPH86"
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
