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
    "2AxmB3f4G8a1dYMsZVUfaKu8bJTmLGMGW3SC1ji8s6mdnTKPAkdN1sGZYrPo6aCbFwSy7XZWJdZB7i8YMurSWzsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36oj4jh3RPy7EqqGfogsGPwHT5fimDp1Rp1fKYoWhEVYfKaE8r1JYz8idBRdVpUgyAgUCgfbDtZgrcixaNuLnnk1",
  "key1": "3eTTHHc7vkd5txaEGPJYB2CgTViaWZgj8p6snNgroNwyzmng5Ft51mUBJxdA9QQ4zBiRZ6zQjXx3ydcuCwL3XXQr",
  "key2": "KtrAUUwpCzu9qDjkJkF8wweAydCrFoeeVzRLhwZw5B3NphARzTj47zt1oN9thuHuCaoUVvVT8gNRP2jJjQ3UdZL",
  "key3": "3ztUePbXDznmJGBFUAstFLe5RkscTJHtgfHcatFchZSGxY7NA1HQLrPWmjp5FRAU4fFQHniWFH3BAtHkqWcGzpRt",
  "key4": "2ZaKWEbjyHCW1iKE53MBwhx6AFhDbtN7JWBUgZhzpTg7RqWCJRRgMjaevzbxDjoo1qp6btw9rab3QA9Scos1Rk6L",
  "key5": "2uxoc8ZAvV7Pwxq97qxYWk5R58sLjPzcKCnYXumSuX3Jg5AJchbeQCqFZQHMHPZNGdUjauuQD14VkHsv18AYoYE1",
  "key6": "rDGrDEUu1dJyWKdoJrPVdsbQ6K5spDCy3FNGRULEKgfV9i4ECRVVXJuJSiAtxvsuybBzYQVtDnytTDxFNLhJ4eF",
  "key7": "64HPK4X16QjqZ1ZJc8j94s35mimGtW3zhMWyWQk6hv2JEZoLiJsi6nMneWFU5S8FtfExrbrWuhgMTLjGVUdfSeNY",
  "key8": "M5H6pqMxfKXmdt7ha83s5cjzrHQa1p3MaWbAb7zpNDBzqg2XWHcp2sF47LjoNu3URr3J3Bp55BqDjqBbsFeBkJu",
  "key9": "2BCatGQd8EjNiiwLe5ULeAJj5UC2uZpK6gdke2T6EFu3DQ9CiM29fANr2FrpzT1XqoVxcGm5yTRzFnKxH9itVabW",
  "key10": "3Wt2UR7yonSBohKPLUhX2SJAHEcMbhc9dbNNwAjRA3oBCZK42FQQkG58gn8adFjnXjPqJjJkH9BJhdjMvA2igSdL",
  "key11": "4yC6rraD7GJvmXzyuFLJ7LWhkFPRsArDRtwV29xY1pyF1EbUxTVxGAUAQLNgVkCp5bjDLq4NPQ4hzVy432gMJnyW",
  "key12": "5wRdDf8CackWJeQrbhAjuQELqo9aEdDhEBgQh7UHjyjxjmQqRbhxUepEAC8htiJ5CkCGcRhNiNSsJpqJC4eMKg3c",
  "key13": "53KkrJYLtrfyconn5H7dtaWRu7BHJXew8HAdTWqZ5aUUvBt62HWozD59FyMrMV3nEPUVfvdV1RpJKoR2JW9ikN5R",
  "key14": "5L7cZGi7FHXGDipQnsVC6oCcx8zKMtmQ5Fw9f536kzZDTVNkwht2LHyb59VvqdougWthp8kgCrY5aBPD8DrBiHNd",
  "key15": "2oJoBjAP4Saxwvjgpkc9u1ykiLd9paRFQ9AEMfe2uFxX654ZfybN8Az2EN8DupXxjYrjG3fSw34AM6Tp445U3aAq",
  "key16": "31Xc4sZcUAhVLV3YUhvLwLutS7qj62cPyZdoEVwWxzopxFRoCapnjhrVB9r676k3i2fFZmJn2isoWkJk2Mb5k1Zc",
  "key17": "4BiXWgjkbVuZZDLKSG7LP7cEbobMiADgP7f7zYwHEbLS8cJ6X3MZbD1W2WsZxtAFGp1oCuvM4XHEmwvdMyzyX7hk",
  "key18": "hJwi67DfuCtCs9RwiA3qgPEetqSEG9Yk1wPYVN7LJ5duYo5F3v8uLyNcspFYGHSpA6hxMWJ8vwp8reNifZTEooJ",
  "key19": "5VddqiTYy4A4aWcU2sVJCa8UUHv7KnPb6Ko9jK4igGEABouPVGQtB4egW6u65EGFtJoHABBXczbZotDzmiR6KXkH",
  "key20": "54eZuA6FfU5DTb8p2RQeJR16HrWnEUBSA7vGx4kzmCxdiwnimKCMQEkCijS1jGpuWnzbzPuuKSxQ8DGVHsLYaxCZ",
  "key21": "3wDCfUzkHEcLCbyNwkwZSXT4jNsTLa65pi2upgDSfDX62qUyJF5QiLyYdzGgM4yFVNcD3x8RnQYsh7cECVWui5HN",
  "key22": "At8SnTVV7WWTnFWr7DYsaYwihQr9Zq2znjX9d7jyfdgbHUSMSmfNaYJkZRMX2KfwTeLELwCzHVi75thvoKefrbC",
  "key23": "4jVMtcmT9aUrnQXq4yEtysEgxbjTBFS3CV8hKSFAQi7Q19nVHkvwTs97Bn7AmWX6Ji56es4pyyWhepKf357GHjzn",
  "key24": "2G2fhoZTu3SEvt97FhRxD3svLVKFDjpujU25vMhPtKUgpz9HD6MYJeAodfX8iNtxwcasCEctjZRkeqCB7qZ2qWiP"
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
