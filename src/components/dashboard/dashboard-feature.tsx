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
    "2oqAoQ2J5j9QQU4tMwokm52qbqBgNuEKC1HacA34T9kSHt4b5p57QR4QikNr65bZZBhDqbtsx7AS1HZxW5gaKJLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZTAtHGxxzCqCRNZX3Q8BTqzu1KHaGzAXpWc4DYK6EsVmHmrSqm2dyeoFucYZX3yn6L1DCrPUeTQKeQgAT7a6e8",
  "key1": "4Lq3vFUpeMJfBCHhYEEjVbaYgRNV2smxpdnDDhrM7G8pnsucw5ZsxBzyF2rKpfYWC4zxK5iHsLua3pM6VJhRCjji",
  "key2": "32j9FaRqpaty5fa7VZRyt4ZNSceXPft1tLvhcF6vftpVfwmj8NBL2PZe8R5sqdV9fyFXnkjC9FzoGRXWtDCxnUx4",
  "key3": "2DRuFiCf9A91Z1vX7wDuFqEepg81c4mEXX6KUjJf6o2sTkBw8juER5N97rc1emSzTqjoueMcdZKXCmG5831w3koF",
  "key4": "5Lmd54nTLW8jgaGmj3mm1KhsS2RmCYouGyzLjVX17mgeZtFUELVXL7PnatGuGR4Ae2aeRdYsCD9gk6or2afTG7Kb",
  "key5": "2tWfuER3fGdPskfQWHyo3LXqJA3rYD95uCdHfLKUyrov8L7KZrUt36uC1uWwY5jNXFSegYssDse5HJpTBxxFZ2Pr",
  "key6": "56koLBoGYtKvuMJDtvrQdP7V6e2R8gLiyb9mcq9GzzaCrFNGQDZg1PLuHRjgDfbhgmnfj214EWtSkfsa3vGcKV1j",
  "key7": "5FDJjZMucUdky5JtqCAzkKkXKrgDM8W9Q2rMPBziL5VopQpqzWj2GuQHC6Kksz1z93VtE1PLbKfjuMjxQ7GPqdvf",
  "key8": "29yPDUwmaG2rb94tpwFwCG7HSqV9YBwQd9CzS8xf1fW8FyVFpvD1adEGDZbRi33yfytZQPG5LWDVeSj59F7VFkHu",
  "key9": "551HZjj5hscpcHz7bnsn5sAJhgixiumJarjx6LMLtDq1zCrrtA7kPXi2zB9GhEri7RZnCBVgxkvP3r8AwMRSTuud",
  "key10": "3961z2SJNVBymoWxHTdk3ynu5C2zVCBgPDJJYUEH3FRhEF9B3C8XQVjVXfGwJF1LekzXcQfijd6FnnMzj8gEirkJ",
  "key11": "443BTAzx2b2oShirLDb6aUYAdw9yNUA3mRxXTcgorrpdEcvFAs9NUc825Swo9DLAn5gsWTfw4wkFjuRSoap1b9vi",
  "key12": "22H5PmqujF78maLk8rhFA3aFmkoYqvpcUmY5BM9hqnrSBLHgbN98Ev3r5kcbfEHg8L8ncQT7jnG19oNa1xVnCmNi",
  "key13": "3YqdPVivJLdGymU4UTAYrKxbRacWBAEtNTRTyzEzPG1SZRPSbakZDEeSns4So5CJxP1S5G8dhPriaT7PE6zCwWTn",
  "key14": "31HXMxcjQs5uE7cGT1AumE1U75PPtWMwLiTVppJFUMtXUFCaPSGBvGhtwZzmp5zqLY7SVVEyVkjxFwTedTfFRequ",
  "key15": "4v41qgiQCiHNryCvxTZCmXsAEGagowa4ou5HdHt3AhGhZQxVn1NqsDARbKze5YX7CWTEHkGpU8YydhBREBYBqPRD",
  "key16": "57JAyqXZABgZwxbEfwdBEQkswphhRGugG6eWo9nxgEcerWSMB22stnPzbwyUby27oUDKHwKDAKG8Eo9c4J7FSM1Y",
  "key17": "3x733XYipSkgiVDrZcUrfTiKdLVjUhqXusTM54Qty9hsEPJ2SoXx54ihx7jshVYdVpAo7v622vKgyEbqqtSvxZMV",
  "key18": "WXFRSi8UJfG977NBC1vtwGUXwB8mpBZR6fHji8XtemiFTF7N9Kg89SNDxphW9WUYHtD9SVdAePTkaBfjTSHSGJ8",
  "key19": "hRsnoErRHi1jk36LutEcDgak9EH3s5J5qnAJ1ACLAo5CeDcmMcWdLQY5wBrKRmsH5emMWeEn7KCPJgJznrZ3DEW",
  "key20": "jJZoLp7vtEEmT79EuUMVyqi6x3Rxc5RViQfTGfPRgYVFGaFBRDGj98T4vWhDtdGkmjNVKtMY14QjomKqebKLSTQ",
  "key21": "35zFTTGp9rLKWcMb63iSFZ1hhztnyYKJRfTyLoMpgaY6z59TJu8sjqpaVpLnCKfLmGWzAQD41KfRv7QoqGY8oQzs",
  "key22": "3QazhTqaZVvGCfXyzzHgHobjPiDiAsxhmd7mK455YZGpjNrbchggWYwxeWBQ3pKvgpRg9NPa1Ew9sjxQvLGSmYzT",
  "key23": "5cH6jhyhHwprttzyVJVgwZFRVWxBwV9Wbhsp8ABsvb9aysy47VV4byc6LBCj3jVteoaqEwj9Fd7YTwNxno5QgdSq",
  "key24": "WFBo75xXCUjFH3iV2CU64A7ecL2jXoYYaLcyhr7tZ1E7fT6q6z2fRp2wZ6i2wu5h2vqt1gxYNGBNzuc3SWHvPJD",
  "key25": "41fBR56f4nG26DZr7krbjTYGCC5vosy9vskec1osA46d5WcXdLLYdgD2ASyJEF7trB9dpc6z7Se81Y9vgsBmCqTL",
  "key26": "2QEvBdmoqUcaC4UTRGYqtPNon5PKGkWsvMeYznwoJU3bkeTBBRMxiAMpTJ1Sn3hpY1h8HCKTem8FdLt1kjZXTqRD",
  "key27": "5GdBACMTyGB97G4dBW87M5BVF42THGTcHoBtN63G7Jq5PN1jJiPHWrs8bocPTtWL5t3EktwcwoUjnfqK4gw9KYDC",
  "key28": "43VAzgrmPWqGTfBcB3E2vtYZ8SGLcs2NaaALkygFh643zKi4joshUBDGwMQchAwFcRdcnGjhSmwjLR5dSXfdK3i7",
  "key29": "4BiArWf78mx8WqySu1GAC9LXeKUhhj8KudgnjDRRAa5BCV24hA44rw7AqAs8r69HsxpmgRQEni6sJbAQPkswj8MX"
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
