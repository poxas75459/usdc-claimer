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
    "62sUUbdHu9Fwz27grs7mYY5xng5do3j8nFzZ7kzF3ewUuTLULvDe6a4jBWrRidvsC97rSv3rs7o9cYXhCiLxnVYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSKX7J8ffDoZW2Z7LYR1ciYYn23vqDRpiCt5DWogFhEV8DxfxdW7Va4eBN1pV3YqUNn6nLh4Ybbea1erLuHG1nA",
  "key1": "Q2Sn6UesFR7uLHJyxFdrMAxn6CCtSCC7yn6HjwrKcWLphGULXB5xGifKaE5rytd5Y8aSaMJXWNzn1DKtSy2k2de",
  "key2": "2mL2MRbKJ2d3HjMT7bpsJQEhJ4fgFHQ4kCagHfa2xuj7e6csVsWgETnTeKt9cuX9LUQvabpbt4qreb7nh1PseW1Q",
  "key3": "51HL7CrpFf9xNrcEr4igXXJqNTCoyqvz1ev6MM2mH1F9rNsiDNPgtVroJhBLmKyqCfB71ihWrs883GCxmCbr645m",
  "key4": "3tJhZZ27T9W4z35ZFqgccGrY5ZuwXevWf7DLeGnxg5cdLztSHq34fiFgadieA61qdUwZ2d8AmAxeDG2ijAAxPBi7",
  "key5": "4r1YB6kSJzBVogrWhZQ3oyQjLigB5hz9N4jpspkzERNjkixY3FgptR7KCNSc5adMFEjvjZvqbkGjyrqHenf35Cte",
  "key6": "24y5TPdVd8GsvLQPiSusaDB8UgPi2BxVM75aAdPzkGyiiagUk9mkCm4W14cwxKqE8ikamQkmf2ydaf4hFP85AZNY",
  "key7": "3E96amQ4bLTUQC7YPnCAsNipNREc42eUmbGy2ff7dZCapeoFX9xw6k4cRGDMWJx3F7PiLcaVwY3u3nKTWxhzaD7b",
  "key8": "4SxuUkH96PoacdSw377WNB3R8E7pRznirLLQQmXkbnanCiHVnFq8fDsQpWFVJ3EpbirGtYyPbDCy8eMhQZojGCRh",
  "key9": "8ggxs3BZbWRSg9w76pjadkDGS3YY7nNk8QSPZwLoy2isNP8Rn4WNt2Y39HUnf1dMEQtU2haLH7CLXx4mPXqDcuZ",
  "key10": "2CztZL6yazGggXU5YZDKAmzmgq37CgPYQXZ2Yx4wmUQ2o2USYmEWqxYP3Ev7mXdKysAb1xZVSJtXBsyBTyJ9fJqn",
  "key11": "2pPYG634NaAM4JrGaWhXPfk5EeZJ53YSPFswbWKcYDLgwyfYLCKVNZYVCmJMPE6NPpWM8zRmkuUheJogerAt7HwU",
  "key12": "4wTQEhoj6E5FZq16ZfApA4Y4jueo3JD8Hefgiy7oojck3jHpgKhsdbv2HhZJm5FjL5Uq6defyDYyxyzx8bh8L4dw",
  "key13": "2jJbMuBzgJv1UWjzE7sfmPcK2jScDc6nTa3WH2rnrsC1YcYy12HehochyAGHgq7xaCkG4YJkJVrG8Uq9WycBmDkD",
  "key14": "5mTBPgkDaA7BV3kTDmv3XAynDj6if4bwpkNZz6FbCtWqDgWDoMRfj3mL3vegFxk4jAyerCwWVpTWtpgrDcpbZM2F",
  "key15": "4UhrUmK4VuUuCKzjETwJyRAF7Y32mGx58EZ5fsRSE1eMkhFyt75cdnDn9Vzu1p8QmcogxpPC39qT8daNmXyBPVCy",
  "key16": "2TZtwQEfkAkhocYaSmWJLKNxMVftNPiAWp9J6K9pHGn9JFkwRTPJN32WnugGwUnYu4a5qwhvrGWDVkkHj9i7H7Gm",
  "key17": "5sUC8obi3qTptferm5bsCYWDz3NtEVYqtStRrBBmMnEk9jUTpSitGzkThS1NFAUWVHCFaCShWS2X13abcjYCCniV",
  "key18": "WnPedsWAEXkpTVQjTpq3fXCNvnNzqpgraEjSSCuHVKFLgWeWQ8uUfBaKi83VLaQrFtF9TVFKouMVeJj3FEiC1JS",
  "key19": "3NgceejPv548gYss8K9NJpcDCb8SrAeHPM8apebRTwApU6kZoWcfj9tNUrFPfyor9rHsXKV7dgZxQ3aum76rvPfU",
  "key20": "3fswSf2auT71DssipFunsmZqqtb3bq3CHMTsQKV8HbZSEcYSXrYVzm3fPbmBfq6AQZBVQTtpJv7G46ZiDxkEhpDE",
  "key21": "53HYVUXQQxWtNRc2gVGD9c1y72DJeKxA65ZrLAvVVQTaBzBsZWUCPtSXdwNjiT7TqtfvsWJKLWb1obQ6jrmLCWWm",
  "key22": "2mfj8CJy2qfb9r4YtpN84ic27Lz419xfMyVz53siGfVaM5uWKmz5CCMoXqUDkU3iKdLr96BDtj29m18fQffq7BDw",
  "key23": "4EdQbkVEo8himqdM8j8VF9hsiApNhKyH1fm7cMizZRgw6ahcStYyikZuZhqBDSZEn6Lfuqt6deV8NbpAVk7an5yY",
  "key24": "55SkZ2PsNwGodTKeSxcZiZh1ueArFKFRZEybw17CxFu5mpAYBHp8FnWm2Tpx8RUvPTQ4ABCDg2dpQcy2iHrDY19f",
  "key25": "64fj5LtUNDtX2XviXEkNvrpK4ZWKNHLB24WGEJGKTSqWuDdidShDBDJoyuABbBLs53bcjvXGeyd4Tf8CHHDFEobv",
  "key26": "fT1eineQKPo271b2mh2HgQeomA6JWVUVHcoKmzDaS6exKGNAkWpZTG5Tq38u58st4HnfpHPqpmjnxWt2jnyRPkt",
  "key27": "3hMrYgakiisMiZZ1MGaZG9ppuU2Pfo1fZjgByseCwn1CpZiJVbG2M57oeLtFVnv1vSS2p6ZFekyYe66KYwH2JKpt",
  "key28": "66js7jAzF5jtWdjLcnGPEGhG1HUHoKstXEUNAwrvv7jTQ4gNFtbsWuwzLUjvg5hjY3tRwraNbXrw8TUzaebn32h4",
  "key29": "2ZmjGW3HJtKp7XhCpQeVfn7woHvngQGPD8B5umHoxiVj2wUYXyRq41bieakRiQZtLT5JJWELs4ZnAYwEskiVf4zv",
  "key30": "5ZE161qjMdQ9E9jDE6WAwhuquxypuqowLTnUzykXqei142g54mwJQAE46edTa1E9fXXkxy9THX1pvZnAo77oH4Pe",
  "key31": "2twnRRRWKVXoQuUyTaLVXAcwSeBQUehq2LJmcUj97YK2fnRQkhnYDHfrgq1sgjyLfVgL6VWaYiP1vY7yHAKcdPgD",
  "key32": "4UGvVJW7v8MVqNp9ga5KybdqbaWEDo2r8D5uXTCoxgE9BHspUkNHgA1weoDp4d5T6kX21MdDsHH9AW3TTxDfUv3o",
  "key33": "kVn8yomT6hjyCdWHp5LRaUj1WRuGrN8AAj6ptwdXn6G1UFWeazaiLU5G7SC9AYoD8mFTkZifrf4MDbnnQuThN4E",
  "key34": "MiuPAnWbSmMryfnS7yEKHP9XGTXrtzWGkcajYVqBWCyAVsT2cUhEiiGSG4iMAvTTuWHALuREqJBBN4wWy5P4w1S",
  "key35": "3z7A49RtHFEcSEGLVTYkyZVjHySNUr62W9MoECiLenRTgHhApgCBYTeZN96gkmjE7np1UnUECRurxH8QuNghPvVK",
  "key36": "3aTAXUNUxYAE9SyQwG4tsn4AsJVTpQQ45LhSwVczEgQKBnPuaU2VbtF7auwS2RWveWqwB1ojTLVnpoGVLz5TGroK"
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
