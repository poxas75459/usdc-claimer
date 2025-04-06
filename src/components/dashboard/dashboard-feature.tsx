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
    "WN1YbdEDuAxSzV6EqoBncNxkPYKrzwGBsdhZqADSpQjVfhexsmskT1i2FKb5nzk9cbFqFN7yDYnve2uqCZK8o9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y2nXPvoPBhzZAcLUrud2Fq3tutFoVEqZNBd9bP6Fwd1qKDRe4hv4Y29eRhAF1N9kWUBktyC7Dkv9Z1KYigWU3gM",
  "key1": "E57ieLTXVQQHjDN618NNAmiHFMv1w5DWJSPCBXx1fJsGfAZUhyJmBX1fvTHWHYhG44Nwg3S7FY213ZZ3BDN9T7x",
  "key2": "4VtPKHBiCmmMfULSrvTDqBpZXYRSyLUbh13KhLLjnFy3v1F6WG17pKDVYx4NbRA1xQw4iUpWKxe9LDUoiHMXXunw",
  "key3": "fzp6cDLeLGCk4x648a74PdFt5dnrQMxxWFpqaUonnuzSJBZMHfhbYnZeyRDjwdLYoU5dCt5fcr57Y1PJGwKc467",
  "key4": "qehq8dhknFsERBHQRn4AAG3WZRKDXyaBw6ufJi9ajRV7GftupBHNMHXT9ARaR4gnYagEmgXsmNqfyeqy1oi6Suo",
  "key5": "5iWuZjLbuPH8kViXGgYA74yVnGLkTaJ6s8bQkrnE4Ls6hbGUjZB5DFZsafXZZSzuSPvD9TQQ8rGnbAX3TbpRTE91",
  "key6": "2fCVZSXhdo9HGnUqVRACrHL5JuPY1J2n1SCVEq1LGPD8Swry2ki6MJuMeVDXwwgDu6vL7yNVm4HBJdr4chcL4RSW",
  "key7": "4gVjD5f9Juov8JqqwHpMWkVN9WpS4eqKKSWHubdtrG6AYSifvFKb4NoBum7v5b5foTZNAbUeqNDbDi7F1vCp3CwX",
  "key8": "2NidNBe3UXovWUayGXNZGJssYrBhB63wXQV2998ruVzPDaFbku8PmZYoTShhZqeT4PyMAshQaCdDbGwvM6xwjtMQ",
  "key9": "BQCWCP8j5oJ4ZcucwQMnXo1YSehVvEkbddQTGMnTUu9ACEnvEjjn9A6pt53tyivrM56vsRxWJXw3dRvTeDhA7St",
  "key10": "kQSbBRQTq6AMV5dAJQEp1wqsAkrwzNYM271afM4WS7DsEeqnL5k24CYobDKX8jWVHX4uoMT3ovAA9Ld2PHNTBnP",
  "key11": "4eAp4dm43ewfaKhHHJU9YoWwQU6YJvJQF4a85PjctwDvqdx1VU8oWi9vczvWcwiTkjj4sCoJ5kKXfpkBscrcQwmX",
  "key12": "6pC761ccAEonVBxM2ZK9F9R7YaeF6YvLf6ThK1yKHSJfgQdQ8FBGHVM8S7JE48ZMUFfcTCvyxtZX1LXnwq4Xfsd",
  "key13": "2MR8wHuqsRQToB4bFnioPMsGnsUfsuoDBJHSBr6r33pj9shHjiPGkgaiZA75zyhFD5gZcKchxcDTukY7HNAcKBcQ",
  "key14": "63KwkUcfJFuLY9dfnWRMVa9geW5nHQe2BocRNZwaomCnLTemBdLCRJngQBXDfAicBaBKTHx454YPCCP7YR1braC6",
  "key15": "42Xa4XRh6ABxPukHpCHuDrC3vHRUoTMbrBbnwcLJWo2uvhHR93L5WVktnL4ECWX6fyrMwg6GuA4G6KrUa8oVpPEB",
  "key16": "4MdchUTtXnHriE843ikrAzzFEuookXzqX5YVuxHuACw9CrHYv8GgeYi1YAuseQfgGq49P9abLGteFB4jMFWopSrW",
  "key17": "EMbTzoxYsSWB2zvgUxib9JsWikmTqTKw6nWd7cvyWjP4wC8b7UM1oxYZan9ooBscPbD3tvK326dJDWWM6rcapbb",
  "key18": "28CxzgSgaAzBi1V1c6wnkvCkxfAVHydpAPdbr9FXVP4SXrEaH868hKC25wYTUjNPLGxkAmdpooXv6Jvy6CgkZi1P",
  "key19": "2DaqwCwunA6ZhecVwMvDHFdVFHjLi5AWUtEsjzN7fGgopK9bsdgtCnaBToGVQKgFPfZU1NeEWpiGW8GoDE94JpF2",
  "key20": "22jmDz6s7PpK6r8sgaUiUcswyH9VQ5WvJweEe1ughtaH34waJ61FuopsQ61VCLivXojr4qHoiB6VFKQwgvFHDkRS",
  "key21": "kQJnewzxanTsFkAAjFGj4Rfi5R4LjKgg4LBqKEeL7Wzzix6u7hS7iAH2gFwEtv2u8BASq7MDE36piG1upkSjhTh",
  "key22": "59hezWfNTECRXARwqPgpYwTZozqNtK9CyZM5MDAnJW2ivaTH4CcjvN9HW1z2q4Ja5phBoitmSK6A56upiuypR18P",
  "key23": "2obrEirqQANiE6eawG3SoHz9LhwMHNcibVLSshDonmoCLUuMFdSw1pamc8Gju16NrYuZbhqJN461dFmx3J15AY52",
  "key24": "7ttWNm2zYS4Ae9QkBxNyTLWNfqb7PsjAU7xjDdhM3BprRCHUXvuZswyDpgEq4QQtsykFNYMTKp4ZdLMSytyCPV9",
  "key25": "5EUjg2VcJMiGsza7hfDvpT1urWr7ht8SXTpMSc5HXbk6Cya4oUZj1kfFrcq1PUFGoJH5r7uw657Z2XEUcxQ9hYd7",
  "key26": "5tMmBq7NvhUUDyggogZJhRL9w4bf5qP5NtYL6asypQXmNwCnANjPdgZC2yScSnr93ZzmY7rW7wW1AdDkkJAvc9o8",
  "key27": "2962koX216soHKTJTZ1F3CvzzSymGhZzEkDzSw248BBnoXdeWGz1bDRw8k7RLWXj5uhvUL9QuU2STcu8AeX8jMuv",
  "key28": "3DxDMnseDe7fJQ8M3CnnrTHnsGjisxyVBwCw7uGx3pTKhhRcrknPCv1LqrqShm6uizjdrFdCzdmyAM1EdZXvacQM"
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
