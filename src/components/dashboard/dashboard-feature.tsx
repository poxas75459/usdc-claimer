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
    "pLrPqMfqCDc1EZMBEvjKChc7VXWbddy7b2CxKrZ2fEQMXJKiuvLPUNzNfTG1xXQvRTmPCE1o5kHmbeS3wAKYrCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nv7DxQCcQyTEoMF3k5PsYS3Sf9g22ThyyyewntHFDfP2cHDr41DtWMkphw5R4X4VYdi14bQNdNvM6woMNTNL3wm",
  "key1": "51b4mqErsSeWVWS4u96d5eGiyBqoeUD32p92BBovJcjFu8z1JhBkZ59mNNhv4vXBE5ejxw5BM4MxY289ddusXrMX",
  "key2": "4S2eHQhqM48frKTdzw1hdaxSDBaRKwnuwv7zEKSEQRSQMppGcYUeNCs1QneiojuoV8nFKR5kJPwdL9Riynp87qEt",
  "key3": "5ukmceBpefXrR1kB4wgqtioFGAHKcaGE97XAAQ8dLYwsxauzbNscSZs9dvZPGH8U3B1ye671XKXcWw7GEXJPFocF",
  "key4": "3RuyiTB3j3apxjRPgHUMaRJVXan7rVKCCLmEX1zMYUBfLtRTLJazpNDhoGc2YhbtEvq7PDVgdwARHUjNdUvZcCgS",
  "key5": "AmCs2EQhuxsQ2BkTDY8vvUrZWugdVC34HFDtvjpqFFXSRogzFpwm6jju2E9fsV76x5Qf4PUZQawpWJZcnvpHb4F",
  "key6": "4jP8bHofbRFtuphAgA2A7QuJ9Ro6tNn7SN7JDBzihhqnEHvF34xo73r2xxudoRWy5NRxRN8GCuVMpyDwHGJTeSpr",
  "key7": "2U3Rv5kua2JG3jXkGy14pJsPEeQRkVU7W7F7jZ2pjK2noHcJ8zGJnzowd9NBcVB9YmPBdFpaHuKY7x98WdkAcWvc",
  "key8": "5a1gkbGdDQkZqKrMb5q8HVQmxoYKLt1ZtugRmg25apCiYdh4TeMEAXaEK1w29mX2SJTWfY4i7aDL5wMwvrzdvSaE",
  "key9": "5xkYFWqqJpBRrDropyn5gtz78FiCf25eYXewwyQvpargrwKau3E5uHYDo2ctS9gNiUc8sfPLgHjURzVxWNScwyhH",
  "key10": "44u49V6Uj8EyNagm2GvMmUDJhuBJAMYrJMtrJc2EorJcsvKNv2Na25sJspZB2gGJjtTAtTooN3LSBQxaz1ZXvsVF",
  "key11": "37p5CpTpn6Y7gkUma4LefFMnEduvXA6T96V3DcDwMLUuGjrrioVmg5kuvU2eEG6R2GhfTnuVs78YL9Apfu4YUTFg",
  "key12": "4jse3hHP1Jq8PUqLJ3VW3Najcwjm3t8kNsn9d5fUXS5p99w8HsWNHWBDLH21FrZYMtZJLwJjAaZ4iK4CZvZ1uJgh",
  "key13": "2oV9XQX2iVLcwzm6osYSzUc5W3AQ9Yv9ZdiF4XiJwzDCDrxcNQYjHX8RxtEg1AyYgb1wuPtJH5E2bMqJ6M31XxcZ",
  "key14": "4D6Q1xbCXhX1snEMKf3EWKFmxiZJv8v1jkLDnmd26jUy9LW3Ap3cnZMMxbEdqcXJeK63V9rue3qaePhKAdBTPqxS",
  "key15": "4tEymBjkcGrLQH1m1oifbcrsLQJNRWh7S41rXPQ95eDMLxPzKtpoLfPZwddJbASCmvVYNHWyLKq1myTj5z5USuf4",
  "key16": "4zMygnXi48wzhbQbRuR4sy4RQVaQ4E7Xabc9uw9c7CrHbenTbGe3vekPZxZFqqztevZUzikW4eXzuAimXTs5aJjX",
  "key17": "5BUwuoxYkjLoDrf1J62t4dQV5hDrF7DaYc3HppcQZisfbsH3Jxxv9kSLgDMPwjVAy3oUYByLWwTQs9x87EAjr6Jp",
  "key18": "4i9BMoiBDedcJwTKCS4MVR5SGFatZvu9Ffe2X37u4qAQ57i7Y2b7yT6ddxDtXV4R7usuN5uVRSCJWZSiCkxKsKTe",
  "key19": "5UCbvB65DLmu7hDU6YJmX6ZjsjxXvzqv8xGVAjrhHxnEKwxFBRJPiHbTyWQvw3VMoJYKduMBvtE4jPrCCEnt223S",
  "key20": "scywmKYrXoKEWmH8dkjMxTEEV8iS5N2FEqBspMqbgcmPtXHirsaDqWNWj962A1tS9vabHR4dmjHiEZzbrPpSkq5",
  "key21": "33zAgbFScciXsgvXBme8dKW3RwDFczGTDbupC9kpzkGANBZ1PDtBF8tMYYYUAH6dyvwB5CFXcEQdtSEd1oGTDupQ",
  "key22": "3GcBM2JeMhd5FtV4nVu6BxBuu48MLxcDEmc2qxe9ZrGRFA1kxEQpUWumCVgJDpgRygY4TSrqTG9LDpbgmyuSGCDP",
  "key23": "3fMrSHmR1FRUN8Mh8uLzj4Cq1vEAF5BkDN9N4Kf2NckxjGU4JJFb6gTFVLQuC7bM9utmEuYE5rGnPgD3Ptxwn5VC",
  "key24": "5WrqhHnZEdoj8Fc1t23d5gYG1gzCTDydRTg7EZTN3UQ6E1mwMHLJEBKai2Lm623nLtapxeP11gatidV3JaftJ9Zw",
  "key25": "282HZzbXvggziFMCN8kkDK9C71o9c6PbjRKQk6mTynp51iUGTRjzvthtuTeHWPtNPPVFqwEgDb5S61jaC6bRfQ49",
  "key26": "4ojUEnavM54uLFSXi7nnfeZRptUTn2rNWs6FhEVfHVoXjgmv7tvJaWum9AanWgTdLB7L8q5WGUKT15LRfZirTc3E",
  "key27": "hZ6CqmZYESq5NBmo5iazyXKMtHR1VG3Z357MabYfJc6oDUSDVJMs32qAKnRWeihys8xLonBH7ZF8H78FrMUDxQ5",
  "key28": "4u6mYASGVURNN8D59kZ1ZNFsfJ78rcWFpHnjEdkrizBwvhdPzmChfUp2xq7SPtWAg5p1HuNz3vVnA1NCcFB3E7Rw",
  "key29": "5pQVqHJKR1sfBeoJbuXBxTpJ2bmwwQaWdwXiS6tbxnWsA8bNoxdcphfaaK2ER4mzeRogsd9fcNf3JctTtMcKJXgd",
  "key30": "2hTQ4YpQ5seNCMtCS6ALQsfi2WeyuMZVPGUxFHZFYfH5Bh6Km14a23sHXVD5N2RDjPbdXyFY6juDLrXvs6ktdBai",
  "key31": "4VucRrjqDHAhft45dPPf3oZDSqUxZQ6C72vt65FyFtMrFcPjyxQcBsTvxu84tLz4VyyjD5SiVdeHWR6DThH8ze5E"
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
