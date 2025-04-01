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
    "5Z38N1ZvC5c547ykBqxV8m5kCDvx5ghKuGZrQ4toaAvaAjGNjWbPfLuL7Whf8FiAEz7ER4nG5VWaXTq7oBSchLDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kuwivNzWHrteaVFDEdZCgsdfTgs4Snt3kBXdmx1P5LsrcsQDCeYUfcokSSDUDZKzPZi62zVrXksHyaMPMM4xBq5",
  "key1": "5KJXKK2ZH4hxY8cHfn1zMFp1JB8GM7CDRPnsNYww1yuot4PewBJT1GoD1r95ZXauG78tkkdToWZeFQa5WTaN9hZo",
  "key2": "121EVnUijrKWBYPsMHC7PRhuH292f1M6eXjBmFdo46hMRogVZZnzQK1TKtdvqzfufn7h3YZG8HvZN4vKEqS39npq",
  "key3": "5qJy22FTyi6zi6pEdQsj8Ez62gvzJGJJHN3HACdQHrBFh7GJtFJdsE6bJCS9fa95kMajt4YdG87TYNmYnxH4xvLP",
  "key4": "5fpBFTbv9XNVH3DshjzjyukN9164ddv9C7XiMwLpwDJ8VXYztQbxEEonYcTpgKuFu161StteZHWJjsPM1wWTCEun",
  "key5": "3BY9AfJayiG5krwFcDYSUjcNqio8kejzLtXZWHJCxotx8c2XKmr9eXnMrqm2xkP1FJwg3ZwjCQY2WgpmSnNSJsML",
  "key6": "677szu8PeUE3s6e51MhXm6tNE3mJFtrZb1BZuqMJeYe8Wx3x4vfLBSj2wEX6r66xH7obvgZYKoGGTLTPBDF5G41p",
  "key7": "keimCsyGj2xvkABe3QoqsA9dRZhUELZDqhuNvcSUpn7oF17cPmFNxDZQQCUUVfKx7THiMMdXC8pejJLyGDYXJR4",
  "key8": "21z93cwjEkfS6dnvCvpJhArHm7NhdcuMGGavZah1qtYaacS5G5onozQXkhY8WwMJPt5yG2hMadA1jrJcPLJ8BUYL",
  "key9": "4EUiTNByEqBjan2bS7R3BEX1gjWy87y1x2qnAHKqP7pJia2A4H9vVrHrW9QLWa93AjM3dMpUwXPWdAnEb1rX1zi1",
  "key10": "2ABZs3htqv9P177Fto7xrzMp8SGEPY4orW2CPctQDCMwc1ERqqskufm424S73cjcGAZTrrtYmpADjVuJ7SMFS8kT",
  "key11": "4WT6nKm7khEwBfT1cqNiy6BeEUs3ZCCXBVuYrokCUMXa7RFUXMTSf32BfLJxM28aVrdxJFNSEUHQ321a57AHb36X",
  "key12": "3tUPjm2xTXoHR1eyfLu6S5iCxVSGAxm9QLtCdkBnvqVWDZjL3QEAnFjQHMbGVt46CY3HubSV4YKLEGkacHLkSqyR",
  "key13": "5P48xaGLSSJGTSAhLPCDJSYTEseLVwd4n7A8KXoywgGJ9prmRcfnBX3KTuy3C8WdC2nqgMRFQBLVdsF9wMAaPbpK",
  "key14": "4FCB1A2BYA1RN8EzMkR5Qt16bcgXUNJYwCyDj79QGihnbJjob7ZGAEe4K1VVgPEQsj2Jyvx4EjwYbdD9rSsH6kye",
  "key15": "23yCkYBTNF5Et3oD8xp5QzQsyxNYJ2quA88Ej4qHpugyDqy4jpNHfhQQmHmbL2VX4x3AWowNvQofh6dMdKcbB1aS",
  "key16": "2Tre6fHpDSbuTjufQ4jwuPaaFGMc3RvkFECU5eTH8ZM4EoS6Modyzmb7rBydomjYWULJNqDag38QQ6AdcKv1X6C9",
  "key17": "cgZ9tTKwDg6pzPxPL8j8kpx9c6Cv6MPgsLTJf3eQohHk7oxBCKGHS212DPpZHxqyGri5dLNXnqdoch18XZRrKA8",
  "key18": "51TEPcyHtMPq5jr639wYqZeaR3TFU7ukDeEt4NRxXQDqdnYAuec2SGhduTmJcDzhsUiPBfxb7VQ3qGZ5VHqV5AEB",
  "key19": "2a9pRojoMEXyxdAKYAJoM3D9kmStkn1nLHyxug95Jk2k5XqWSfysk8Dpay629BCd6Vrj7juAwrWa7gvmyuTsmigq",
  "key20": "buj6v2KKV6jZ2Fy1fGSNsafL42ZPtXqEroeGdCsq4CMkMriLZdqzdCQpxKDsHkj8sk2K6KwVnX6nCxpD6vRxxWM",
  "key21": "2TV6YftUnKAjRvvZjnZfJkSXFFhfBQDykVnBD4WNyJmzM7KQWCQXswuKYWZE84wsPBqwug1TXwQtQFW7rp5K3hUi",
  "key22": "2ER5b5812o4XiQ17aYfGjS6UmAJkWHXfyEKurWNdRtLACynM2igxNd7b4bqHTk5wAYB8AGHXTU9PF1GMm95FNemh",
  "key23": "3K99xcDAr3rNmwvzHzmBbPrjpmNkRZf8Y6dbr8rQz1YtVdD6t8cBzYFpVheuVk26WH6HJPv69FFnc3m7ARoWK7De",
  "key24": "59WrJ5SgW7GQiTgLukfPn3EPxjoshPmyozJU75uepC9LSLtvktwup1znhLtV6VVTy5Ld4oVwqNoYCyKcM1NAr9xZ",
  "key25": "5MJnPST9NefKeWaEREy1UQ9zyvoQnkPDENvzAsVkJTcmLh8LaYYUTyLcsE7rbSyzhauvUUJKCeem1Ei1TAB75qtn",
  "key26": "3YGRCSXzBg6KaEX2GEaLi8TnMSbWnELgD937nZr6dvUuPhLyJf2S281rpT5ytjM7XkEZ6wojdzuGdDPeGN9gy8ZN",
  "key27": "48aWxiBmDddBXUuDLNcydiirK6KZzZtoj1iYPPJU8e7kNUgPX6VRwxBcJo9BwwEBr4ruFMcAX2XYvDqKZY8oF44g",
  "key28": "3gUgKiTWH64BJoSdvASMTZFXw7XmTL8CNixq6wycTtm7feRqb86h4UMaz5pb9HRqKCckVhpF5H5ZCpPqDzw4Xu1D"
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
