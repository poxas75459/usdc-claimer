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
    "3dVtscgZDAnXA5gPHjDPbSKAqDu7DGHJHEA1dB3Gk9yFrja7HGJxqdiMqyVftMnE1bn8MskNUfuzhq5LGivXdntd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQbKxpNPK2atyNTUvKa9jRxi3MysmPBfNtxFiXRAkHprg2gzieNgjEHg4Vidxisa5F1Yck81htMuUPkAgbuHV3S",
  "key1": "fzywRK76W5QCmbSRvwrmp3FYKe3SGeYYMDVDvwt5yFX8JQWBAXFexYjY9cNz6WzD4xVRJT7K5ASZbDYNEqFZdpR",
  "key2": "2Tx6TVEPNai5wApyQdJRobbsSGVPzqo9JtfQ4GyrL3pnYU2dS73sfD43YJgwSajL6EzQVmk54EY64VbmCyEKm8di",
  "key3": "4Zg3WxDdxXJ6NKv7pFYP6gRvP1cdBMBurCwppyRsjGN9dmgoY44R6Yt4D2khECPuPpERxPcxQYGKBq14Tfehmhby",
  "key4": "WwQDY2V67T7bUMFBCRfKfJbaH9a9pNrKo9kYtpi1VYo7iymxY8awVPzg9JCkK6EH34hYFVDyPJBA277uvbh53tN",
  "key5": "57b2TnuwdRRmvYtiUT4uuBNp2HpzrkGqeSwajGTAUPhazw1Ciu3J7AD2UEUFosbCoBYM3iZYL2aBRNXwZVcqyubT",
  "key6": "5GGnMRLH9cFmuQnvmw4fT9ePyfh6zqGPrnFs2Mwa6tJJpzMjTthegazcLw14ZMmvHjzBdx3EPiuwhDbM7fAgw3Xs",
  "key7": "4TQiRBdLTjo8NacSLAYAn7hR54gq6b4VAB2vt7ECKSKAXr9f5yYJtYrnKS4jCtTEbZbEQfNfnD5GEfKXKc88Twyo",
  "key8": "2VKcd82j4S6U76stg6q15mXeDXKa25VSRdMg7UCxJB8vvoWmpvAhPxwRzryxxJHiwHtyP5iGJj3NDFj64cZDatzP",
  "key9": "j2yKwBcpDV96fhuhzdLpcQgRFcXVA6bSSixTC5Q7yxgQbMQbCV9cyTnRsiCZi6s18QK3XzdjM1BYQ1jXnASjsiy",
  "key10": "53NSbKNpmy6BxLpbbojAXXCdjiGv1TvcQfv4NoWjdAn3oV2H7PcGDBJ6mpqVxekrNbYMGbWjFdzy7PNd2ssCTFL5",
  "key11": "3RsZXYXJCLVa7CuUS6qy7ZiNoLVJvN64zqwEQ3ynrNyPRFtijkZSB9ELPacQFaACVpQcM2ALoPcXxSoGbiMsMKFH",
  "key12": "5aSavdRb8QQKAY3myvaJsy494weFE5Q3GyWgWttCKDSQ5UG4o7AFsE35uoP9dz3gP6y2UfATCKhWqbcuMtQHXnyF",
  "key13": "4Fh54acDATuP8odF3dTCwKsbDQvDTm4A9K3Y8noM6r5PbXcosX9tFh6VKVvgmFY2njEKhwCykX77geWXe8ew23KD",
  "key14": "4vGXFrhkXX6Z6zd2tAB2c9exCXEJhJ1oV7c1Wo9pKBjNyJHt33CVMgB9PRXa9FkJE7JmYK4igH5NPp2ACCf97CXd",
  "key15": "8di2HBJLZy2FjqGRpkvmBoM1wu6srEPupqnVysJRgPw1kZjf4KVYarytJ6xxaaSsbpsonsTFM4xtRzeq1HV6LHH",
  "key16": "8rZTXNmjynBux8h282pCxdTx7Q6Wtapx43TNGMMYqZD12GW1AoW896zEQdvQCkajcezGwQhehXiACduKkSCWV3f",
  "key17": "64GynuZ2zgprkwPjchZ9wJWijmFAAAZTRqmjUTSAf5prCQ3VF6KdaAxcnQdz6YUWyYQW2okZe3d9dvdwQBucFmoL",
  "key18": "2aYgdGcva8Csms5Z43hPYwWKaF9BrAALgGVVrGxS7kzvcr146e5rnmc5Mw3pjpGFynyDdu1FfmdUjz9tcsNakMQE",
  "key19": "3RBPWkvsWE292QGBvA3wkisPEtiih3ZY7J9stpnHDBGUDrsypko1TN4N7xzCqvE1tbsPBEKc6uz7CwKzwHQYeYW5",
  "key20": "5PtW7CpNRb4HxweZJ8FCQJPmZ2Zr6Pd7CL1why4D35QL2sD67QkYsYTAGcu7B4JwVKcrpXfve4G5viqeE6P3GUM7",
  "key21": "3WJXrKHXHWnCBBed9tHt9GFWc3gaSkpZn839KggPAHgbnu57dYWKDZLXK9PMjZZE28SY7yrYJQMpCSMM5KAZnfXF",
  "key22": "5jErDEb9FgakL1PYAu4WPn4gw1sGuR998wNyBbWh32uCNEMDwZdCp3H8CKGusnzqxYGrCVNb8gXR4vdZw8nuGo2f",
  "key23": "3qLyDkrk6r4ugaBcfXW2gfbHctKN6a5TJYz5TojU7Lz779v2f9UnuA2XMhcbiDFC3J9ammxvHvDXg28wzXenN5Tq",
  "key24": "2DsneGycDxpmXdRiupQU9WnTTbukcnyz1VRGSaHrDwn3pvchm357hWkRAS5r7Y7Mo4DsuhWp6eErduLbBkMXieZB",
  "key25": "2QkzquaJb1pUAnZS1JVnkvCxAM2NnveLf1pzhmMH1s6a7CvKifsrStE3vZk7TfcZHc3LR3uFevC7tBajnMLBWH4W",
  "key26": "42pWS6V8oNRsrc9xj8ZCpcAM4sZdcex3anuUrVgQXN9P29xoU49YQxSXsBgF39G3GF8b62gDSZH8Epe5ouMqRUsY",
  "key27": "3LGSHjMXTT579J14so6NXecB2qsKHyKfM7vEPSXTDGTh5XcrwEvG9wYqoAN3hXpUabX4ja3JxzfR9ykhTHUpB4hQ",
  "key28": "4tc9wLJEmjxLyeEoK5Wo2SNwwnDzGhKSyW9zmcmXs2PUdaPd9DY36mkfX2Z58sP75Tya1FRZD11jaxkBpSDgJERf",
  "key29": "Qk5xBrv1AZ7YuwA7NbFyQD2LDXMoUH5npSR9eCs3rUVwN3Qv5zEHbLdVAicyy8sSjibP65zbWuCFjJa96jxwYF4",
  "key30": "3712f5zV3MmH1SPEjgpDkP94AgPLryZDcyncxkqJ5EcQLtKG6SFC3g54bQhBYxUqmwK6MmrgY4sXVBxTSKD4cH4W",
  "key31": "2vMbsNnkzmVSnAiiPkn5YMpa79aZDa6HyGK7ithYGxCyik7ybuFtuucvAkDfX9t4ps5E9n34KYKvT9pXDnuqTtbq"
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
