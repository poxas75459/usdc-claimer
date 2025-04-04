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
    "2dUhjxrx8AHBsx2Cw2wATA7bMcF53d51vhsT2pV1KCy1bz4DrJSrbWepNhfFKWfaQKCc2MzY2K13YgHCsEvy83Hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExbaJ99Ee3ELP2gvsicFbQ4fhrDLVqg1tPAfqZb5KoYZ8F3R465hXagtMYdcZ4RxSN15W2QFJw8F5bsoMu3Q9U7",
  "key1": "3DR9gTmVbHjdtHEcLNBVYP7WCvr76UYkRMxRsBmajSfhUyAeYn5N7FGyuNAZCBGT1kt7iHp6xvXupkk6TXJA9my4",
  "key2": "3fjfTvA1h3DPbo6Nf98QXpLFf6QDXxvLoQ6Rne85GQMe9dFq4QSPhJATNMUuqhE9E7SNCY5quvyHvMfV1Ef16iDp",
  "key3": "5wQhGP9xXGXS4vRY8gwR2Gg3jXBjWsGqyEmPkNNBmTfAmvmKGmpReVy5XjKh4x2KuXhePYPrKNxf8euwXNv7hFjw",
  "key4": "2yqnTiCVsYMHv21WqpS8Z29i4fLbvRAGYKkAic8ncBKLrNeDMB89Q8uuJNVA1WhW5MrNW6Wps5XBpwESCpD8TMD5",
  "key5": "NXVxAxwk3rxoQhqQwefvQUUhmCHcRAgGZnaZjGhQQVoMna8wyLREh4RDnV9qLSY3js8JLhCpJC6YLo1EHShQDJD",
  "key6": "4baJgnSZpQ7vnYMVLnN56dznsETkfhwkD36v8PyPLPD7b4fwFYGvynESuTCV3E4h3rZnc9Joc1H9CdUdbYPTwntR",
  "key7": "nFguuNWvAZCzsH6iKL2TXMbnJZBnm3rzKMBgw5kLFpoLC4cvtBw2JdGrQWve7hEJWh5Hc6mmSXBWBDKgLbftRY1",
  "key8": "4VyriEuofJX1Mf2JhHAgJHwxECAocVz6kQvGaSeycfcDcoJL2gdUeFY8xtAHfY1AMJA4C5sjumDmsMxR24nHv9gt",
  "key9": "2LG2eycCqn6WZuCqQx413PapxerNeNdJ6hET8RAKAVhiUQinHvo93dTmDEEnHfEVzXyhMfQGZv8ePejkbYNespYL",
  "key10": "3ak17ndExm5tXTJEhJ9Dwzp8ZGTZE1vJ54aMZVAhHeXtATFvyEmTm2nAX6tidRhFnUKp5rvmEr18wuKK4eRpymky",
  "key11": "394Q4zSN4DKDQ1Va4bEQRoxitnA6AyMz27398PYXRyTY1DmFFsB2dACNrfVD4nyeBPmDkvgQrKz57SJ7Eq5z17Bz",
  "key12": "My9gHMqeRN1Jbss1c4dUaciiy9aY7eQCyXPJJsc2Y1iwjaJNQQ6rHLnSTXArdJtwYx4hYASo8YmBVK1afbzwmYX",
  "key13": "2B2TFCoJFotj66FQb7XnaX9CcSxTTQ2oSFciWZvw9u55bVsu8VdhHa7ak7adAnQVvjgnLjBKug9eUvUcYbDV65Ts",
  "key14": "3CGskZy15J2QDyy5DivnRapYtYafL6L6S16bpJ2a8HRrLjWSqMoDwDHQnrb8npmVMk8Z2ZfE6RAnA8HSEyJXronF",
  "key15": "QTJ7auDZfFm7B3ty4zrVhPRigFnZjMNJanquDzkWvaMhUTMNUYLP7L6xPQE3DTzDeVrB7tZesqx3zZvWf5UhyyL",
  "key16": "5V96B9thDBHK79xHAuLSc5BFZpbgyVKNqy5ntJgsEAKMwFDnkYjQpvw1RRXnAnx6x4QMJ13iM3Jtt7AfgV2kLbng",
  "key17": "2GE6QumW3nK7tSwWRRsNfkN9kS7F2NN1x3vSHK3hm7WoMDNkVgQ8mnFGQBK2bHwjxsaKfjcrWAYAungsLEoXvsxE",
  "key18": "3DPPZ7fhRA46yrcEpDiqFmS1jSGeHechRNDNAcFWMEfwvMCubXe94VEZKn6QacQG3gkSfFVmb2PcNWcHA816eznz",
  "key19": "wVM9kTXxgWaqiMq8LyLzPMt4y7s6kp4GYdK916WR7PiomiCVjqRTxTRQDv9jfiRJKHgoZ6Lpb2P6QMNhsoxuvAD",
  "key20": "3N6MxpaALEaiWghEuxsR1Wahm74LwWcYCfE4rCn66TtmHDcgB6wJ7jYL2U5tXc9zC48ArDhRADibnLEdfvm8FLsz",
  "key21": "4zKBkWPYfM93QH8BorLM53AATFTB7kVwFcJsj5oTeWtitT8GT6yrUm4DLGdRsmtvzwqMyTdYpMwuPEv9iCrH34Fy",
  "key22": "4PoD3cYBMj9iudaTkwWDWSPTfKVLtm5NWTPW8W4aPWaAeXFMV85ZdPQKYwgeyyFjaFp4U4k3JqDXaniARRxnUheN",
  "key23": "4AVF6QnDAxZzr4XS9stcEkm5PsN4eRwMUDCHuXz9HDgoK3dywA2wxXbu1ykaCfwD2vPgsDqvqVB6KNb6kW91yG25",
  "key24": "QdU2yWCWSgBifKRMzf5V5SRcsWPUQzzy36DtLKim7eyVTWTvGhS7YD7UuXj7XCRTqAhvHhBp4kDtH9GHkA9o7WL",
  "key25": "271v4cr3G2dksBEwi3Wd2TQjGWUkMXAxRGK7ZCa6DwBrYPfbybYBHB8QVpyXJx9CwizMwjmXDpV8HKF2gtXxU7n6",
  "key26": "ZwC7nfwhYcNge2fYiKhNMLT2R6YiSgH63NCtAezMccz8EcBLMPhuBQ15z4MLuTjPfAMeFzUwqy1ZfknKeTfVBZZ",
  "key27": "zDA7V4kP8KAMXxfZ9yNxyvHnwLyK9jKGMTCKgsqcHtzkZzmgc5bvqkcdSGkz29bEd1jgP7skCXfWCzi1xiP3qyW",
  "key28": "3NHZ9iQsvZcjnQtbpJ5UASsQhk2P6hiE4KB4QGAPqkntgqGMv8o4KDnq3M992bpLjLVjzM4adp5oGfpCBDgooMCJ",
  "key29": "2x3mR1TcEagD2AYDZuYjxSaSa1FJqmoxPQ1uQ68Y81A1DM7knqm8EToCdGrEXRvyK5PhnF8wwXvBTzB9RMdM3n5k",
  "key30": "3QyfeGPh5szu8zUQ5xUxj3E51CAchqS6vYpdCAXRLpcEcPxwLcCHUjaf1PixeKPFxjwaJBL5776ujyhQAv9v5qso",
  "key31": "5G9VEkUX7YTQc8Ht2Pj475zNcWR8uAXmgh4z5FQkQU1JhjS4JEYJ5odfTgToQTTyJv5wUKDLVSKpKTMdRapytwxA",
  "key32": "cSP7PxEoDwVWiGMz2ujuBYZYKekuiAJZ2rhTaT46EPo7v2pSmmd3PvLqu6qEvWspqqG6apF3JSA4tRDv9YnUX5f",
  "key33": "3yqQaJMVfpwhqf1snfhvyEnCSWdSxTiM9cZLmCvYdRvHZtc3uRbV1g84BfrDzd5onwfVJQ2rttK9hkK3gFmBcSP4",
  "key34": "wAh5UQfrwHwHaHVxALV6mHcBmLah3CoywLLVL8vVL6JWuNTJ2y8NjEF6agVkJFpBmjerWzay2qj7cRkEJwbkHN9",
  "key35": "3gUy4745hCwuUdg4dz8DCg948qMT8usafWbMZyKvpXr7MHRDt6ymY2V2YT77sb6NETxp4VU6VAdwsF97FarfsiTH",
  "key36": "aEhsFVZX8mg16cmi4SJRXtyozjSTdtiQzkDvmRvZ4vznFW6RfwGRYCtXQnc424f5kxDwxVPxFgrwtFrf3rL3FHY"
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
