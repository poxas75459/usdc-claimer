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
    "3X8pscvbYSWoqrFz3wUqo6tK4V4rxEKK7jBobXC46wqe9EHBu8zrmGUiTCjh6A9XCiteXPx9kvHfTbaoJzagUnxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hhUoyr5L49nPeaKi8wCKPzoSHZaVg5rVJSbYJkAA893uLuTTE1RtNu3bQrwTKSpmVn5yZyn8s3TMJfyba2eDLJ7",
  "key1": "Bh8mEFybroL6t4xe3zuJQT7WzbFcRphWi1JyJskJ8r8ToqDgXHMrN2QSUytBTS6m2joyjQxoZcXDYAzvjAQqbCK",
  "key2": "VFyrnp3tnRiPVMXQwVBXrVd9nPvtV9D9wDouZGLY4cVioT1dbB4xFzu9yHPHqP1rzyXD6mV274EbfAsiY4uiYv4",
  "key3": "36gDziiBdUcY6nBPuBikMUghLHm3PzzAMHzpJ7NKQ4E1fzwhAHdopgwzPSowPfe8GLCMJohrz7a8Ef3WgEcUojRb",
  "key4": "5gqzgd9TTT7suVUFgj4XuL46LwNajVgEKYxKLR6bSjPb8P22R7ue6xZWCG1kzYSAF11jdcYPVoi9we15izJJ3N6v",
  "key5": "on3Jz9fHR6u8PwVbeLCZKjiDxH7ZYpe5gxXWtEYe9An2as7cXUNb25QFwBQLyzWhmameC8y2CovvbWr248tD5Qf",
  "key6": "2dJaK6SW9GuHzYxzfYFkDJZj9WRQa8DspHiLdrHjPDrD6U9ZWTqfAuaKuRX3DDqBtsMAbLXPmTDRidzukxnuHqzx",
  "key7": "28x6rjHPLPZ6qtRg4BhHdkLmxzWrG3ar5UzaMGSiWHajaPwaP8vVm1YuzbNvdsL1dFAPtTsUc2vHGnrsTXc885r3",
  "key8": "5DDoPRsGQ1UDwSLkgTz8EreYr5gvYkLL51Z4zK3YvcNEhx7dTUsW5tQsfwN8y5nPwEiye8RJy4HbjuDRmy6VLdKe",
  "key9": "3AFXpPdytynu7mefc6DohMAiGmu41bRWk32C1rrgbrRePfcGKHain9V1ZRyNRdtbvy6R4Fkz396fkugCxqzGTgnB",
  "key10": "2rBHk36jDHMpyoXhWSXWGqyvNvTf79R4WsTueswtwpuXV9oxUAuGQm2cCuX1kidee8fXGZZQkpTfHxwK5wRNZRD1",
  "key11": "3BBnipiQVUCCUUMbgbSLiyrXsedjNkLeosL1dz56VwcK8GzqACecx2vEksFypg7hZGXavwgBvddjv6MgbhterKy6",
  "key12": "2gpPsXSXo3reQtrUGoz6ab2LJdE7wsMexWVmGyzGsiUGmTEsz1mTCJ9UwaBvU4KGMU983onEdSzFBHQhnsYVqaUW",
  "key13": "2fbZmVQzQN9KeH3YbXQQCEtbWnbDLwztJmakMuh3wKcBv6Mx5TAbhinjLjWjRfvWDxwqQc3EmYhcZgtxanWHDPXS",
  "key14": "XQzLHxRErKXtZ8EZ8rjtFEA7hEkQzbQTpY4LN1iVaTTcPnrS6DZia5YRxZQghVV3X3JanuBE8eXmAvDn7vXxSfX",
  "key15": "3qPxxrSVxDh7QFAcypTWSHZHLJgEXoYGbNybrSTXcEYb8ZmGB9iVgL3ZKsjmLCbRcRZ7gq1BmzdF7AJUVVue5hwv",
  "key16": "2zfHAXztsp4JtbArMZ49d5uYdoDArXQhQLCQKL9W88YdnwESVVZahSpf3WXKwwHYyaUidicVeuyrUN8w38QJxpod",
  "key17": "a3jedbTD83k6qFxXXMuBYNrVSG5JmsXXecohchdrJKD8WC66EWV4eCWaQTcQ6s8P3CqFsL2iCirGgGsmFwCwVXR",
  "key18": "5y8BZErS6Q6nc4bcL8vsRWbV6bj1hZWtY61aNJf84iQ1XhjYCKkFDhXGan8JgrLxzWjqWuA92adJ6kSW5Ns1pHyF",
  "key19": "2F7WMfXJoF1TKBoauieem2MjqsSCDcmwfJMjcW15meQM3FBcukVua2Yyz1qbgm9WmEBYuMCN2RG1K92LxkA5rnnU",
  "key20": "38iFuonUyChn4DEkMURSfxeibNMWd1J4UWd9dNCtdx6XJ7FYkG7ne68h4BQHCauBKWMzYuoukorDufHQAoP5rJR5",
  "key21": "4gyMQDLBLBkemqa5FjEi5fZyJh8U7vVQqLSFaXyCbVhGZorFbZmCtrp6s8F5SeD9keEj5FMVS5z8745SKWZDXBGF",
  "key22": "nvZQS9MvAFDsJ3ct9AUAmuRF3tjYuVG9R6RRB3RoPyuL6gowdbN1dZP6EGChfrBEdgnT63aJDPWitJ9vaExw1xB",
  "key23": "2PxWBhJqU7ao72pgGf5BtxSfeaQTRVdVxyanFaJyGkAakXcVa3CqdZGxK6a8gxb33i1G6hCX3K9CMcyHz9NAKuVx",
  "key24": "5nD3WAS6zpHX8DaXx4xF6VQWJJpeY234FuhfUuvAi1u1Z6GK6zE7UDp7cZvLAmNTnjFJJxDF8EVqBkCpTgWHJYEz",
  "key25": "bsmqjz4JqKUN581JEQYbq5N1DBnmHnZ5KwUddAW7VBkrizBV7qeryLX2pwk4AxHyV8A7JDd4RnYHVvAUqtPyUoZ",
  "key26": "29izgCa3BgNAgrJDhAZpXut2YvsGJYnBmKXkR9qnh321woxVNhF1GzF8xZMoCwExktDqnTUt3EFd9Viznjv3rRzT",
  "key27": "3S6JmhMX5RkPtFLEdFH1Jgb2Rf623AnxpQsfVRzJGfGcYMs4n85dgu7TkTmRLSmmg5Wh1pQGTEvX5R2ZgyZSuL8C",
  "key28": "JruEzfXYYCzuHEsExschSpB1PdNu3MNdgNGBij7xJJiGPNwKohP7t9kNFhSJUd4ekuFKbQXa1jXy2A41psKWv7L",
  "key29": "4WpMTZ66ZThLsMeTE3XPX3xVnhNpxB3foCgfvW1NpozJY8SGWWsJyH8zjRSjm4EDBPGjH32bxDPB7Lbzdx2VhZbi",
  "key30": "3mQmCG5tPAsaTRXy9gfTrBAtg9tgNpLGuU7ZRtE2CUVsfEMKiXhtrVLpApzPXLRp8s5epdaJm4ugPrQRomrm3cAD",
  "key31": "2Xo2tHZC7CUh4ngxiL8cRTExp2eWhEQ4ELHvZ6pv7SzBQraYCbSG451xEVZEJGdJ9ZyBxtuQy6ZqxNwBhYB6EZww",
  "key32": "2G2smBX9RTcdU9qkZYev8ZpPPpo2Uq3CCxpXAWTmM3iHeeH1AAgUMYQDyBWd22PtqGGHyU6tGTnTN2bXhDqGaAaA"
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
