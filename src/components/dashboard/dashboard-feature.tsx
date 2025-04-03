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
    "4bKXQRgHSKJXfcyBSH9D4z6E6iCTRJvkf1ExoC3krqjBMnC3SrDxuEKJiQJWWteXGrBQJWNGV2VtxCf4AQUv6di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SX4862D1LhcbCNuVxiDeoT24pjdQLDeWGG3haVWHZiUYgmtuBoNRBaFMtsMD4GvEhu3hhA4vJJdeQApL9iNjnje",
  "key1": "3KVfNgMfJVmWAMRjzPP6FPY4QUqP6ii64jaKS918vDpD9JN4MSETNJ6hJykckNn2SKGgZDXX2LFVtK1zMk3kRxAL",
  "key2": "41U2yUhReW7RyGE9UWsvhSAcUfkes3gut69JHqJq1jrUVYpVR74kuwVJHr52r5fTN2GdMDEuwj9inRhjFdYrJPpJ",
  "key3": "3r1QQo3F4kQBHEuudqXr12XB5LTk2EuSAjAzb9g6aAzJuDqH1YNjqfWkcTaa28kt1njAG2FAUAY843ZGH1yTAAWM",
  "key4": "4r3sAePrAZNXzLrRXNXyuAj54r7zrL7vGg2a3BvZiF1wmKuJMmU8nQb2KB8Zv6n5C9UK2ffF8uA5AxyS5P1NcP7t",
  "key5": "5S2o77J6XWSV86EjEeWBmA8JZzoXxb7CyAzMHyckmMd3EQwCPAWMpyeykAtJUE2aWgHmWscokSgZpy6dQPx9ktSJ",
  "key6": "65w4oZanmPCrvyJoB4ABBfhyMFAEhjj7YBgpUuouLUHzydsQ8Y3H4FWfvvkAETjsCZaNF88Fr2oEVoscAGLdXw8Y",
  "key7": "2vtVibDEPfkTu2FsDKuELWs9EoUeZa36TCU9WrG7id3KLa5xzsMGPFuHjMmmSFTd6ACAn2BRZcopfGQMKXzbcWtP",
  "key8": "3b7ruCUZpNKB546syfwbP1A1bTrZ3S8UxVe3Xg1N4dy21a1WZkCpbBcbUpkNxXwhVuXesJ4XEFcTtWZSXeTN9iyR",
  "key9": "3oPjZnXKaqscxjw53tt9g6RTFmmKUH7VkTYkYjj7TVQ3usFUCWWrka7Xy7dxZPFJwJniWsinnBFBU8J4DrYcvLet",
  "key10": "LVY5byEozYs88GaLwXEKWCnv5sLZntV4L8NSoSUDsLP9tb4UZNxmxoiXDzjU4Hy4Xch3sWDxCtR5UQHY78kAF8R",
  "key11": "5tcYufGNpFkYYNw5zR7eybsBgzYf9zaGi1ghEYBcr87KGhohHAmLduhHBTtYBYmB5HAJYABPPfh6HXrbshNEqcK4",
  "key12": "23DnD13hja4mhZnKHajJMuomco832DP2rB7qPrxq35ZHzZM3B338QjcTomPSoBHB92cbYtujig3g5Jf4NXjANVZ7",
  "key13": "4P43QopYmE8hq6sWet4vPrMw2DHWzXYog31E9ca2J5bEwbqvHsq64d5N2xP2crosxP8fGQBN2f2Ye42wwTd69NFY",
  "key14": "5YSFgfWwBVmufYRsCRjvudSABxKLjRrEYDU7WzJdHRUxEWaZsfyX9rVhbvHvsKjDwqp7cpHbMkSu7Em86KokN1B5",
  "key15": "MC7opehF42VCYUnCrXzGPWAXUSZeaNLDNgt7tBjzpnLniTeCTLsgBY1siijFZNyY8Hs9rBHfBuLFUccBqqzwxwy",
  "key16": "5L2Wk2fEjRz7YUMq7kwVWPT8VSRuQwTxZtm8cjoeE5ixxYVyaiNJ88JrK7M3z38jaMgWFV2QgTj45HcPa4LvjcsH",
  "key17": "2vxni4jqvJ5mB5b3cm1xYrs3gNZW3ALKxufGAEPQDjiMaBY8LFjFEKA34ZgzamGcpPtSerBNbWGigH6oeKhz4AiH",
  "key18": "3EcDnakcGNKme6YFjcYwNHntigDLdbRmcj2LjSyrYkUpn38ysgBoa6N92Uhps7RMoo16mGSWS7ufqRb6yDjJC81n",
  "key19": "4MT7s9LA8NmvoxkAgMC5KZXZDLaDNhavNEba3AzzDERZLTjrt6PDPy9eqdiNUyX8hJViLkwqBaqiv1iz53LHyFLB",
  "key20": "4KGJWzQAvbmYbvWZJAKaq1puvDWgQyTWEXya83BiEEB1ARu8whs6mQWDQUJdgg7vbV5CMXPkmxCbR7Sw3Y742nLp",
  "key21": "3kGtXqFD2dzHDQGhLbx312CJdQUZtAgCQZNMSmhy8EPqtRLkx1dYBdK3KgnfHEgMrcbTCEX4fBvGwqTjeDSxiGEU",
  "key22": "26CFje3Txgf8gYric6L2QPg8jfo46mU8V55PUPvKyQRC49tpJs1chC2ybBYK3ibb7o3GuYZCFuxywDJ66mL5kVNU",
  "key23": "1VVR9EybV2Hiia59rfri4puT7qthLtmeqTBPL1k4MMubKVHRApC8AC9FaQcpoatS6x6M4FMfvBstzxDynFkSFCK",
  "key24": "4yga4XZecxgKqS8kobvYzPo7osNJsBbdHp79ACoUVbTe64DfEFpuC2h2MWJfF8fcqa8T2dQkYqSi6GJHM9ZihaYS",
  "key25": "2JRM1DZQmXgQt1NWoPPsVyV5NKTQajgK6eRiaTJbtu5zaY3DVwhzHZJdScMfVdCb7bs8S35ehHXkztKm6mkfFePG",
  "key26": "gDs7zTt5UZQd45mr8Tjx7USUWsqfgarjaothN1izYuiwHtgBkQSpVEbKXZK9Vj7Uzpq8FHTG4pn8Aiz8W8sGaGE",
  "key27": "5UQPD9HDLqUjh4sRVzQeRnfwqUJYcRvppWwstKcxNgriewM2F6nFVokJRFYg4D6vsKWioB9E3xeHiW5JNsDym9nR",
  "key28": "5FdLh339hcYWBtpz8pNLhqWEvNELTaKEYdddjy8vGq21qkApe3TC6jToxZkfAppQBVS2unPRKvpdBVMQm3oeMZdD",
  "key29": "5MhVbgJ24EvKnMb2qE7cn8ewzKPpR6xuPxeqMvfYXRey6Y4gp8HWQS3ZeVE3AsxQbaMas2zJBdCb9YDFsE2VHJkX"
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
