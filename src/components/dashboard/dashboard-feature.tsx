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
    "2zS7uQ3RTuSGin5CctJLBgXrWVCxAHXLQhNu8PZRp7PgtUS1Hc88u6zRPp6h36uFMD4AU2dwKtUBYMfUdLQLHkSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PhX8mJCW28SCzPbvdQiFyhi5Z2EeCNYgkVDdS5HUo1UMoRzbHNGFkhyJvLpW3FvDm8AB55wDb7o5QFHTDSd9fZ4",
  "key1": "3fs1VseuY6oEwXjUUJv3Z3UEnxKjUwUXPmkqDxpbq5ciAgKCGpyqf5naAkdFbsvWhTw1YyDCPUL8nHzRUtquQzvB",
  "key2": "3sPsZwQycz9ENyrDQQsZRKthPNAqkaoMXRxTQtPfbqAQNqii6TFonJ1eWCRSmiUAB9ASV7GnEjTcP5KbMUVtWUiG",
  "key3": "2Qink8dVqCRfrmZ71JPazifYqtRYJTbLycyiNMpLQLM4ecRnyKuKqSY8beB9k7mWTxtDBaQmef49chQ8fBFr3k22",
  "key4": "29UUmxnyiFn1JXdwsWxh31vnumCwquQJ4d5EDtDpQfzXFpGfLSxydxGFDsNjtYPvCN8abeAhcktgmawgAp2UnVwD",
  "key5": "3E7mcskn7r1hxjUhYmjQCMyLtKEq77fykqjEcikNSZCYHNG4GzH9kKmfs8byeQ3K376eikD7RgDLgi2pt7WDZq2n",
  "key6": "3H3jD2ccnCCv7YQWhe9p372pARC43NtUnrkWE4N78vsMjpMzJxUFDGtL6SXPn3tfq7Psq7h8FN2LvnkrLoGjLjfG",
  "key7": "2nJWuamjPkPntsD4fnhFfy7i5cRNjkW1ocUaPAq8wmMmRq3y3EWGbQsn7UffaWZinD4ekWBd8TsQr8ZTbPMDgKme",
  "key8": "BHymP5Dcp13C8RjQiCBG8SrHgaus3UziRZw9Ag6KXChFdnhaMwADYegsgyWJypnizDghJMjmLuwHAwVpCKtVSP6",
  "key9": "3Jpjaj88D9UteUL7stg7HWtcywLrk6BcQ7c9UEwM176VCARayYMyqFdGGGBwjZKBUNUHuF1WhbDaPV9CjmF1FiEp",
  "key10": "3MvmMd5CLvfutBpvdZyW3JvMmUuwWcNNehERyhuurP6tdDQU2bzLdnc9wjb5D4xxsjjkX8qGPXr49eyRF5GwFGTo",
  "key11": "59EUqknYqwjjhAy6NefpPPZZK8pCCRsqALoYVrjqVowc4g2jHjjY87a1D2eH6AdSxEqZdT1QZ7ba7ZxWSDVuyPqT",
  "key12": "3aedfEat7yHyDDsAjnPUdhE1RXQvM6WxhTd6qh3dS7Fz6Xp1VZvjP3YUyeJAj3zYYoaqQxe5AoUJ5heYkbdrqLdV",
  "key13": "3BbWhnVsqjdKjkpYUo8MNkojkyW8pwxxB3Xr3AJ7KiDrQ7LqJdJdmjuFXzYT9uL2w4GDswjNy4syVPYJ7yvyMFBz",
  "key14": "48izrP9zwaSkdszTzqPR6ELmxdcFVdCvRk6Trxd8DWUvy2uWGE3ekQdPL9Mm65efZwbfq8H5qM2SXJsnikCGdDX7",
  "key15": "3WYx8xLXnPFiuAfLn8VSTWDjeJUKZueRRQG83gaGn5yLT6aZirsiAE5Uw4MPfCqsV8YktTg4ZQ7yhbaYYVR6vBpp",
  "key16": "5wYpkt69nUYujD4CCPaq3k2Az9gTtNqpp4SUmceYgs73VVKHgiqtX5sQzaVayhUh9CF5eHaLVyhB5AyxsA73kDC6",
  "key17": "2ztW6vgLsvq8fso35nqnH65BFgEQDQ8Y1psyuwDSjCNQbF4ivr6xV1q1vPgeFJcdxgW7tBF9UReHn4gxQKdCj4K1",
  "key18": "5hxcdw7S78wenFGHbFhMrdJo3Fabf9ESGm3nrpre3UF64fgxe9p36WYLaQk2cb3B8hriYsejRgsTcDqcCeNpoSS6",
  "key19": "58x6VMXri1ZksAzM9ESssmyqzSbSu3w4zoRQfTX8AjuVZX7pJoFhgv8aNXU7mhSJ81B3N4mv9Phna39FYNTVMHfN",
  "key20": "3ab9A2M5gjde2VhWRJRhFHFDevKhqmtxfETaEAMekHxY3uawkYM7nUJqu526jVpHWrKbm45JSyCuUsEKTJGGv9DX",
  "key21": "Y7sR9KZZnfMLEAvk5gLrn4f4hMTR6APaK9XDbW2xRGFd4yCbBfi41t2eevnJ33Bkbrn4rcHqpU1tYt43ESEjUdg",
  "key22": "R1vTXbYspnwPKYQryX4LjjeAu1raRBXTYDLonfC6m2qAz9sHi8EZBwvqtJa6CUg7TBeJMHeY2suyctTrvgcMBRh",
  "key23": "389XDWvJqVrrXRL4mTXcBciab3xNdRbEyCdM4QhLNWmNM7A95bhahmnC3Yffp2a4ph2Sdhw6p7ZMyBtnyJ4Kpfrf",
  "key24": "3CjwC9yewH2GkuxZn43KfPz1WsioRDfwK91wQ9sFvHstdvWd8jJcW1tcdrUaCV36PDRPKZrEyRaYzpH6KZSDvt1V",
  "key25": "2jhbyePfFkwMUeQ3dR9L77RbJKkpnUKccpsM37Tb3aaNKVySqDK2f1kTsuyX1WtbYHjZYSAm3eC3Xi9wXBkHZXuf",
  "key26": "5BSuStdcRMYh2JXwHGmBDy7LqLwSbA3Mmwb9Fu8x3phf4NKgPqTZB5sx6SMLARoE6zdumnZGAuY1L52tcpBTuTUd",
  "key27": "3EtccixqHzAeEQnkmFJswVdeh2H2Ya9HThcu2vzYbjGs4YxsjspW2VYHGGCpGmkNbEZ5SyJZiqnb8QAcq4mrdrqd",
  "key28": "YsQ5j2mhPFDhggDNaAtjWuCov1rYdAVtvvaGsBfgwCYoQ1gu8UHYxXZGLD1HBSDhj7PAtdspJq2hyDwXUUBikyQ",
  "key29": "3bF8A5jiwdcS4PfmJFVyNf9vEBYrLiSXfgUTfvuZyz3TWSEWQ9eJ9X3PqTUdM3HJbrKV5sNzJg8LvQbemFRiN65M",
  "key30": "4EKPo95fiJPfUKPXbC6Fqm5voKEf9EGqWEMHMkzFSHBezeaWxRzxfkWGe7zYiGp8XaviHWfMaSUcj4DSAn7znpMw",
  "key31": "56fKDWfCNQ9GummoHbbHXKQzdKiZANJqN3J72G1h1xhNxd5yJGVmk3LmXA9ZDzyr9q9w43DuvgxKDLhP7nSWAfsU",
  "key32": "2ar3hhwzSJc5htUUtrRyVVP8MeFD5d8cpd8dBdxSoAmuznqEWgRbGF8wyyXgDo6MeYY2qjwsuKHSpNaSgPivvwhV"
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
