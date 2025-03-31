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
    "5KGNaVWE5UTDKbczmySkXrGFohyemJa8WqHxDNYapBzdSJf4pBmJaLJuuCd7JeHQihMnBht7Ck88kCq4cU9JvhBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zfqGnPDbS7qFW25AEwgPWYb4hC5vKabsasLSsBQoYf5q1wkaJW6N1HKn5TwGTtv4vvjg5Yt4D4bPxP1Fp4wjAyP",
  "key1": "2D3mhKswdoeK5XpkUqx5YbiKoiLyKfmVknKfW48RzmrbpoUVxXUyUaHPN8PTFMCN3FBTcy29KffjptYdXdqUV7jU",
  "key2": "29isQH43DyZtVxteef6xQSMKS9McDcomJc7ckCj1GiC7moWGTV15pu3wDzWUtrQwMEmPJnxrY9uMCVqBn18ihNPa",
  "key3": "22iobwRFQLEFEsUqgNVgwrNfrnMVkDJhMHFjnx9ubfTEeVJFYuzsh9ToXPVpsqUoJDkbQmwtDxgHUHA9oSjq5Xkf",
  "key4": "3pWyj5uTqvG2Fs5JzUZy61EQV5z8MoUXRTbx9ygUmjmdecWmU4sJrUbWART6qh6nCSo23McE5hcBVez2yaZADcVr",
  "key5": "2ARcWA1QTrQTJZg3t9KmJi17Tr56CzWQ3LgKbriAiNLbGkHb5Makim7LLu96MMGewpB6hFMY8jnfhKY9ZU9tfoUD",
  "key6": "3Rsae1yXA4Th9WLRwChykyRH1LcBqC3QqQbz8wU72pHbjjg4rdMZfX1THgAaPMGXUcMAuSeoipK4Lmg9FGTf9BeJ",
  "key7": "4Gm7UsB8KgDtSYxTmjaVVZ7KG3sMUhSPEu5KoeN77mRXHqumpkcNBfwmuoYSWhszxuyhudcteraHodtjjDQAft8T",
  "key8": "31yHqpj8QAhBrU4rkB6kSekMdfpjQpFXebNJbuunVZjNn5WAVFgb6T16rFubYtVirZ7jauRgZxjvscQRCfeytTQ",
  "key9": "5AMqzQdoQXDD2WQ4WF3RzSEpHrWCJkPGFJieEnRCPXvUG5mDpFKRqLGt786HCCXeDiARzXWtef7eZdpX4P1iBPYe",
  "key10": "2nCwwXy6tfjwRX5og2kkjnvTCAo1LTCNFHGQDak5yiEGeqv3LUKnAprFrQ3cc1CFJh6FaaYCcnyzZjb5serSEs4",
  "key11": "25VggMuf3rxztaeW57ePAipuhtGwqPpza4igtyf1o8fLU3qctEyxw8tTCZrDA3NwsjGyDiL8jgTBhSq85C8cD62y",
  "key12": "3yvorNrqxExVMDmxSkZP5SAbFxJe7SphUGhHGmcKWifVicyqinw5Zt8TEyZ2b4DD7Wd7NdYh7PbcTTH7Ph6gPkYT",
  "key13": "4Z6Z6V5HQugYPJyR6ZneRH7YSzD7XewoSRDsSGCpwLSYUo5oHaNojPQXAopGUUnnw7kkY5wPNuYwkh6sXfAxQvgo",
  "key14": "2FNuQtx15b5DzpSHfQy2EL6h4dkNFbBdFonjHZ6mFzUXiZdnepjFrgy2QFt9u5X7vK2QLVGvTv7aHzWrS3qLHY7r",
  "key15": "2D8R1VE6upG59fVdzAfjHCfPb18Te7Vg3gUnwob22uw1qvWzghcNZq23TY1cXAhZQVc8suEksgksUnjbYcThGxq5",
  "key16": "5Kwx6qJxGmtdz1PgQXDK5DmF4A5XHgK82wxM8WGgRdBZd6TWhvzVAiksDJq8YhmWodXLB2YXP6RWo1jecbfcvSR7",
  "key17": "TWYNSW3u8EjtJ7EuehUHSQBNhRUq39jSzx75SdXEMbE5cHvRK5d8uTVFnqJ2gDghtvzu18QLQVMPuyHXMrZxk3L",
  "key18": "4KZhSFay8sp8gQqVTizRnh2ELaniW1ViNT4cYmbGeY4Ct9bCEfsppV3oaKkAveBAA6vuN9MA4JJy1F8uQPWMWdhJ",
  "key19": "aVkdziRqDsdPp4g9VXeoHe1ubfK3MuygQVJHsUCYjuXmaKR83sdHYJGmkUTMwFCz9zSM3EtECRHSYBGUjfSpH41",
  "key20": "31tX4YvuegF3SB66RjrSRFBhmEs7pg5vdhkgwinuV2Et9WQRzasJvqDmGDJJJnMvv1EsRnzfrRZdn66h6ugyQmJX",
  "key21": "4NG83aZcXxQ2ifeY1RagLYM8jHVQ8HqnwAyvYg9u3DuG12M3jPAmYwgFUV1TvMAkTHw6wL4B5iq644tA3ZMt1SMK",
  "key22": "3JpqTfB1CahFQf5vSGGFF9DM4cQL84EBC8v4jSUfo3hJQyt89JpJ7zwmEefrpKRLbAV23P9zAVtg2RMZ1PcX9wBR",
  "key23": "wxWswwP5uk5Rux6TkD9m6cVRiQmERhX8Up4mR2ES9Hjfj8B9nCD4byQybdsg9jFdJDWgGwvF6FRgJhxJpiGksit",
  "key24": "22eHN2gYyFRM9ygudChRAjh7L1suYQNwjUipdungXMzB3eHTvzCRgrnTL1DJrT617FtbRoz5KpwS3V2zWtDkh75R",
  "key25": "3Xeqib8BsMECGcGtw1ienV411MS63CKzrQvJ4qedwUiJao53NNKok6yx7XJ1pNhaQSzeAC3BBLSgZHNQEd1QH6Pe",
  "key26": "4QosXTmNqYTpyZdyHSoJfkYm9pNBJctQCUtfRyjmq8xscZHKej2BZd77CwrZ5yF3nhRrxdf73MQviZsxRxuEAYZY",
  "key27": "E8VmmFmSFyYF3URu7bqnzqViKJBnf2wtaizPGeTTWqNLugUo9jLYR9fxt1iJZAjgxRYhZTPwpR2hpQ3HCwiu2tG",
  "key28": "3sHev1ynbqfnUSiLysQGPfskzor2C9wR4iSGk9U8kZg6qcS6EqsMtuumYiGXAJjRg7nyTbJqTBjidaTE3hN6Vwsy",
  "key29": "5knfg7f9CJk1u99YTGEig8mBkhmNZPzi2wd8FFeuvvXNERPGJsBu15h7PaCrnMubS4QS2ZWf71VDwzKAfpbGHBDK",
  "key30": "4iYx94FkBayUAxHgUUvbqoNrQU4KCL7d1835VdYSwgRkHfxUcbCctzgtK2ASpxUCNNNcRujv7VLeR1bFCfGuWpTn",
  "key31": "5TvnMnqhWp5P4VvSkabkWMGY2h8iEk9hSLuM2qypa2vzDBZ1f2MQx83K4ZPVt6ZR1RsNu4tvBbouQzEsaWVagF88",
  "key32": "5mtMym3H3Ew9FGq57ehaUTtLD92YuBQy3jDzfgRHRJsucykSiPFZKJjr4fHjBwRBpKQSECSRGv8c6N74fNBcWQQo",
  "key33": "5gmMNcyMHjmrxTxrdBwNSVb2bwfBnH1AJLqDS3hWgLVUKYdenXJtDQeSw5wFv2jEtUeyPHXMx1JqM5LuVPpHC4vQ",
  "key34": "6663ZZnscnrH9G734zrMVYtAontzJaP7K9u5ae7AhzMqnwssnqdxNd8sunTjESkR6ygJRSPvNTLSzfuVgBZ7nFMb",
  "key35": "3j6R1rfdvM3T9UbNcfaNiWE4yFJY9GJpTCbv3yJQSCAVysZN4jQYQxn4UJ2zab5T9ab2EhUdgz243wFBnBkAjYQB",
  "key36": "5pq5RHv83nTKqbaLsKfvFdZaUWPR5p6EExtb9UivaG9KyiLHfrbYwkiTYkKHZKdSfAjCyfpkbC2MevGRCrUoRv5F",
  "key37": "529FwXHUHmBCnkik4UX9UgVANNzMTjESBGVLKJHST2GBiTeh9RHyWXYF79sGjfxRdiXXqVrHHqNmsw3ynLp2DE83",
  "key38": "36s6YkvcP6HLxuLJqQ9ztxFKkCZEzAADsisRcLbnhoofLQ3kup4cDN934Xv8QRVL1EuTcpHQTbswf9B3bYFDPyeW",
  "key39": "4zFiave9ryPjumwMS2kQQj5W5YAKHTxCh7y1rcejfoYTpTkfopEb9YnunWbECDjzYPXgXkAVACj1a7iMdDf9UADk",
  "key40": "2rrMLj8wC2HQeQ1VjxPwB47ej6nDQSZn62djofzQMv84epeYYSoKQTceTNDTtBY2Kt2aGhnZXCShADpQSUEdwKwk",
  "key41": "8duQ3rUFnFAuHrWe2bQdLGXfB6VDQF5sbNUNdofrwHGyzSnVpjCDsfhNraFkp7U2Yrt4BWhbwTe6JXvYjBsdDvZ",
  "key42": "HsujfkHiswhqpLbHsXE87bBXjWxpAnk6LCsdrMLujarVywmmsvUeypbcZKFCg2wotaLBBtTGFsbtE25Yz2Vym7v"
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
