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
    "EDvzKtiT4KxpL19tUxeFi9UZg1GhVGujVa2xVQLNsKrWeYGQyhcmz2qe5FTj51YSgcVmLmDw9mA5K5536zwLtfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E4ebJUDM5UAtC8hRKD18Qcd2REzuN55CLCELWhVXBJU9m6bDVMbkkvo3JuXGAkwet3H1BtH5jYbCQctzahcjM1L",
  "key1": "61fXsaXqvTgHamd3boULJ1gysdyWsob2iphTWB9BrEj2tXBKpN3bimnE8v2VZpiho9xL9tBa7SELoN4qsiDKjCBQ",
  "key2": "HUF9P8HkDecfLRoMfLeAPR5eSzkcvLi5dXwcrRMX3pjNikLHtiA3zUFgMvDCav61EvD4Hq4AbTqjT2PLjsQ1mDA",
  "key3": "4osKnNLuX2HVXwTspmSQiX6pgoaxgSVMmxXEaBa7FHPvR41fBmLgePHZGmw6r8hkmVeMPvJCk6M2fxEGKhUtnMdb",
  "key4": "4Kp5a32cxBMzKcmV28iyVVw1yiTmF8XQw7xBcXhj8x8DLkuvpLySPvGkFBS9bfFJmM9aEyQTuAS7jh6wELxN2uU",
  "key5": "u7FN9YwEqYqokvePDK8ktYbitxRvMjeJQo9QDXFBfyS7b65NR5yptbNb6UjUJDXpskjWwVHKcK1b4bNm1Zbw6P5",
  "key6": "2f8fRpfT6dnUu43Q8DyyitLQdA5ewKrpCUEmEh9uTTjkqXuNfKHMyZzmK7DHg376Qr9kMQa7iioT722EV7o22MBR",
  "key7": "2AqmzNidY5VSoigdxsJEZ6sx8JAjjmMUv3TU3vbxnySkVaPb9EJQcrn89jGqYNqFcjyD877VQMCrbAYE1QX7jeWy",
  "key8": "uVXoUZiGabmoB5q7QZiLZh3Nxrd3DXytzUimtsvBwJeGxW2bdodJ7DM5SfCEAwixPP3V1NeystMY2Ga5By6ULxn",
  "key9": "34RShmJgupuEvYwCiJn8acDczeXX8vpfhMvKTZnt18tGNcBHy7vZYLNQU9VbcKNb7qNPipbKoTPEJzZnMZwL3BBU",
  "key10": "59AeViNgAXA3HZvyapnu1tHwueTrUB4sH3e2Ubmfbxe1zvPBrTwFXc91Qgv2ZdTN3HT9SCeJf589kFvPK4fK8e4Y",
  "key11": "Wmm8BXySRNm1jPYZUYcaH7Rf1LprB3hXJX95orXCVUAG1mQZM6VxESvnEXVMV2kjKS3pCbTPSTWnTjStdqQ3MBS",
  "key12": "3CLLjWCvkpr8gCjz1jFHD1UaZExbvQ34DB27NXWmeh8KesoRtDEZMiNaudhp3JkVWNmE8iKThWENB8aCAuNzPK8y",
  "key13": "5GKoKAJ3v7P9t6irojfBVDaMz6mLa9bpB3RscsjZuQYjmU67hrwbvDuvZ3WVBfjHUUjqrTjiyvaLF5srbeeNRdSv",
  "key14": "66Zg1UgyjfpjccRHNYyhEVQiSGLeZ8YnzK91pAXDP8GruvoXrRqxetneoCEZH9K8W9RdqGhzBw5A6SDfVX2HyDq6",
  "key15": "4rXvXs67GSPq591CcTt4UBxQbLzRwGDw2hos4d22zcWjEYNUbfpV7K245ZfGNnz1z2dxjhZ4vfQAsEjuYUGjRCN8",
  "key16": "JLz4iCKAKKsC7hw9FmndSETrtJz8AZdXiM8JATpzDrX4pSFMVDRQfZ8nzVkkJi2LrgKesE3QV4UhsUb76EbabCK",
  "key17": "4SEtG1a1YuSbjgoCuQx3ueUBNCWFFYTdrR64bL9RbCdE12G7dj2SGyECt6qdWCmuATKYHTE1fr4iXshjx6aGEe2y",
  "key18": "YUMXZTepRWZmeKTYTDb5beUZ5v3RnPE9cHS3Kh8Ht27Rx8Nae6UfmgrTDUTLrP7yqDibmfRsswhCTWzhwFCemRq",
  "key19": "GrgLVjeLsGmLCuckphkoAq9buHwwRZPDdd8Gk1ozDXq5DWCMpwugieWMmAmNuBanquBKyUkS6MmK3pMZ5jYFdSF",
  "key20": "31D5pMAdFjSmx1Fe4beAUBt3e3msD7Pv5UTzfbZuoUXdWNqqZZaAyxUkdwK22g5NQtjS26gtxomFSqH6T4NDrKLr",
  "key21": "x6pFVMkpuQ198sRbixP3y5wzZwkQhTpU9kY53V9cZjecYJ8DXZTDcXiSi6ZBLqtAhQLC6Cq5zbj2AtvwiQyW722",
  "key22": "5G5NTbnSPuBKwM7mTcCzo8nV2P94PddSaCUKVA61aR3SeHhY3wS6n7ZAtHnjBMkirRvy1YEF8TWBAGn5gxuyeL3p",
  "key23": "2zfFxzBDNTGf9XjgfZSYY8usuwhkXB1AeD7TNe3dJwbSGv4nSZMpEYP79fyxuXMPRveYGjKHCKnqZkAP4dS4uKXY",
  "key24": "5zyChkXpzR6nKXJJPabnyRCJHeqD18BbNT8wTsyTBvcR5mFpkuGkaLCXgs88xpXtzJYt7zbWAiVTrSW4LYjqHNxk",
  "key25": "2tRQ2LYeJCNwBdNMbsa2oAGGUHpL22U5LSdEx5yz3WaqXjX3dm81gM7VHzPVSs3tPxQCkktHU6toD2PMSxo6kuHV",
  "key26": "YA5RSfME994gx938DVo4ahct7cLH45ZjPKS6DbJJcUoBmrPWRGdH7cKtMzQQVd7kTcMgowfx5BT6Ykh1oHAK6Wb",
  "key27": "5soXwp8rdtgcKTRW4THu6HJLwyWwijn8oiPu3fV6dLE4pnEiuq1PwnuE9Q3PaSASTJR4wg3jmiBU7Z7oDv3oQkLQ"
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
