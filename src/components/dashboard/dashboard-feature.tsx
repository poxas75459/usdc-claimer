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
    "4ALmkwQ6D3hAqCw8UwKkAgtoJvo7FbcHEe317FagHG84kanwfmYabYGCubCnL8BYcpbUXNcj42YvKsvijeEGH1WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rj2kh1EdHT1gyksqQoKbM8svw8rkWjoorFPyfqG697fsUpp1KpbqawXRP8VZeFEEZuAbru2DmtnKb1rLPeC3d5Z",
  "key1": "2N3etr66DSGdHnwrwXeLtNBGM6NxJjPg6RDco2bbBXYSCoa9YZ1gqj3tegJgWSkMu8rTGCPwrwrmvKRz5oxQF6bx",
  "key2": "66xMEiwkojiLAWCWVMDk3hnsGmsg9AaVdNFmLJyponuJJkZ9qEMAhLEK7BqNSYxiAuyJeo9YwkccyR8BhM9m9Sdy",
  "key3": "cn16kYUhR3aEcRtgfqR6kXEfkjpa3J4kNWH2V14ZPywjL9smdo8rPwkcFGuSk76br4X2gCj9Lu3bHQEPLkWVAD6",
  "key4": "2iV5vVz4XC9C21YaDs8vrvU325X7TziiG6gSSn8AYYcojH68d9AWQ42Nna7TzDNx92RQyiTAivVNryEem1BzfJyG",
  "key5": "P4Di5wMS1hMZQZHGJ4Gwin9iWEkBwV3iRd7iyickcUJCjQ6D2hPtazVLoVomY8v2BFSrkQVP9btNsBmFKPsFyop",
  "key6": "422EnuDLHPYCTjqjY2DvfeXRbEaw417ncT3j8Hqww4xRJqpngBgCT9xvUE1sx9r7NwghdSavCzzpcvpwGTh8MBfi",
  "key7": "tfen4FM5J1nxBR4hmeRpkF1BVixj7AzQivabmY5ffXggFLFrDwREq2Xxqu8rJefNBkvxJerMjDuisU5CVYQ6srK",
  "key8": "2sLPjXk7RBGYH8KYx8xb9KGqXYecFvQW7P1dAuV2vGmgpk2vB5V31e9dy23hgwWqGM6J5JB7AU8CPpPEEFwSCvwi",
  "key9": "5uQve7XHhYSUMHeX41fhRLqXgnqmqWZ6b5J57t9ZmhCYAhfLgTnnWqe513adDbP8X3DAb8t7WKr3GweC5d7XjR1M",
  "key10": "5KgLdvVa2dMZHbQF4eP7NGj5MoqWDwANptmAVLeVixAyW5uMbFoLaSTg22YyShvgeGJgPLmccDeK4dUF685iewtm",
  "key11": "5kXro4iF5edqh5URC866SyatpWtWCpb87eYCY8ckoEmUMk9qtF2djoBMmWRY7abv2CZh9NFWXXWfhG9kbaocpUtU",
  "key12": "3sFSTUmNkAwhUXbJgfaEeTU61QwkaHGyTXdraFCwPEXnPGpyqxHYqsH5LLTM8yKoY5C4YhDN4u7pSAAQTXimhjvc",
  "key13": "5P456Rd2nq8yzfCmur8pyi3gcMHaHoJtRSFbwrJC63GLUXDMDAhK9hdGscHgnVWLrX5ptyPukSyeMoKW3uup4f2C",
  "key14": "3pkvc8wRHVbBwdeLSfzyGp43sAihe5VUY4MnrkaRep4iNvg1cN3czx9AoVbhv9hcWZeKa38DwzPL1qYegZyZYkUe",
  "key15": "KRJ7gBDxbED9SmAYhhZED64t7E3mXwyFGcyb2hYQ9Zgo16NKS3eYVZFnP2nYtjHFx5eHuGdpoKN7yMex62neMEX",
  "key16": "4eaLvRMzKiowYu9MqKt7sF4vuvidSQDLeVyjje6c6d58pmSEyRhHEkRYqhE6T9jvXfAjV5xMwbp4Jt3YtrRpWf9s",
  "key17": "3xUeRBV2s46gKYncniUhPCBLNZoaL8epLHfsXX8cZZErencHP324FvXcUq3fq9G6cD2UEhmmnoi71VcN5pnmBPbY",
  "key18": "5x9tbJPU6eaH1zMwpcMmj2zomQUGHV6UsRuwwKkkkjLLubSmguW1ZXZKkb7tfLwGAjaJJst46B9Q5r7fwxTVnnMM",
  "key19": "25n4aeWhUGcP3M3vXGrwqKP4W3AWJLSHcoxMGQDiydA6EWVx85TSziLXw6SYQujMH4efA8BUAhHa1iJ4YLCf9gzY",
  "key20": "2NCi9hZLqH62xS25KuMDSZ7T99m1CJpDyzWy9RfSKY4uCb9BLkSSSfhbBFaudNqeoC3FBEFojnAwUmPP2x7YQt5A",
  "key21": "4P4EZXBEDpqEZmig6KzRXF8o5tbTZSGeDpSA4serdHER2JYADptvZNjhH3owWegWdFCpYjPKg4PQ6f9nkrxngCxj",
  "key22": "5pAzhSoFkSzXsFVJAMvEck1jH2j85FbWGKSfonA6Vccx6diRHR36MxhQcn2p2irsMs4Purzddz3wqR87RuWgbzR9",
  "key23": "2xBEiwfLLo6A5kH4m6JyiKhNj5NSXvD2SFDzJf6XHwBV3cdwahoLs2EvPJaaXPUhhaW6G8ZU5ixPRhVRubQxdhgP",
  "key24": "5D5csxWEiBXFEvmfA2W1ZR5jcfcLGHegUTko5g5Rbm1ZKNstp4rJfSgjgAXUbPLdqXnqTQrWqrFfuMrWBQHSLqdr",
  "key25": "4p8tLsR3c4gJtyeCyRVuApPJu2hs1udBD77d4TZRSKGdpJag7zkar9zQELDF2nhSYpM7xR5UJK34AXK3hG1MQdnW",
  "key26": "49NH9CH8ZNVkgo1ca1EKS73iDi5eTRq7JkTRd9pHwjs5QSjpjVw9qCxBS5S7J6NHyWJAbJ9M9Dw2wxRZKUEaVUYB",
  "key27": "2Z92oP44gNyUFFdoLBJ6m2t8PAjbr8Rb8QzYMoaaKY5ZmuBX7kSHCqdQuo4XAZg6f1GHo8fx4zHpYNRjhaFvHq67",
  "key28": "5oQvgDpfJuX7mqPQQMqsbxYcEH274W4hxatkfPSdpw2uTgJq6GCLPjt3BnxFgVNKqT8FRB236E768eDN57vi91vt",
  "key29": "2NUxXsu2opjC9WwrnD4xm5tqpDb7W4H66V2Pd4A4WBSmkYQUdJymsyVz9aWQQ2VMAv1bJSh6wKWHikpKNhJoR8g4",
  "key30": "2Y6VqsSZpWpPTBg6aQau1uP3KehEJXATUp5VumfqdejHfn26KyfXJgbqHkTRKgx5Y2uUtU4CU6E3mBMKko9V4jxG",
  "key31": "2WsWV6TBKjdpCPQ4mQnBHJKKDpH7oprbMKcixKxc2vi3dDUjtMuNvx4os3N2uK4T1CQNWWhsb4NqyHXCxsSqpJ3d"
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
