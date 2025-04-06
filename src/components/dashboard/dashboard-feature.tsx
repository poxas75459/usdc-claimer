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
    "5AUsdFabgeJ4Q8YLwXDUU7Uq48VNNxS3m7Y75ZMeJX7ZmiCD2CmwZd1jLBkUn9QwbrEGWQedrzkgKL4mNu9awHms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VeJUEE2kRXyv873AFWtroVVHcwNERkd1vJA4U3tMPbUEb1KvF7iG3Gkg5yU6u36sDypqzDikzQCjGo3QQMgkDt2",
  "key1": "24JYvrGN3JvqpyEBXNLkepdsUugSrHjEKp41c2U35CyfLN3XqsKsenaWSgjNzCwTpfYK2mkCzBq9mYmouQDoZJ7D",
  "key2": "jS6E7dtkA6TXW1FhaKmUTWYB9zJvciRyCfwU5ovS2NN5oxCc6VuXJayK8nFmeEUiRY298YjDfv2dyGwsva3KfwG",
  "key3": "4aqQ8sBQxrVMcpizurAhwXGRhXjYbSKp1TgjCDpCJKF5SU33qRVHcaEgPH9NNn6qzCznXWi1X8BK9PrLcJFtvFsX",
  "key4": "UNy4VFmiGdczozHLELB6cQtymEzTefhMgCjprS1pCiEWa1h5EfrVxyuwJk5UiAWsV8M47VwyCsyhxFihaWtcnyN",
  "key5": "373HC5zc1N49tFAzep6ELtTret6agPjZ6keDqhvCYDR2ihw6CxfyT1h6g4QvNLjAvJPk1LiZTTW5CDPczh8ph781",
  "key6": "2Hq1VGhdeCZXPd9deKgKBhWdoM3MaXwmygzm6eH8q9RmhbeFdQuoj2bTmy44qwxhBzVEndcp7uGz6t3pdV5sJAUc",
  "key7": "4wB7dVAd2wGgsj1hGxvpeDVaCGz5e8MFkK6cp98KpvyFUiPTRxinyznB7jR9ecrxNUXAK2mTtJm4mXyitpy2BZzJ",
  "key8": "3hKdhPbgfXMKgSs3N5TpVs6vFJ66SjBxQCLrrrriAEU9qXkvMpKx6PszcasV1QwzQLttedVfcUPhBtUSHLehqQ87",
  "key9": "49kPMQE86yEPEAhudkrHaFJgT1UjRLMpatpqtj1CVL3kdJJNiZPbXVzSXJ7sdwP7ukDTVjmRWzWo5MjE4xTG87jC",
  "key10": "5Kw9c917Mhq6CdFQjYALPhYexTPXKtg7ktEuGpZw7ZWV2LsZDdbKi4YGgwKfoGLXgENhYwQDiC9ACABLrifVkyzH",
  "key11": "2oYjzz8H4qH4q4ApVMGEHH79knrgjJyDaCeKi3HNDaKLyT1RuhK87eQEgWRY75dFvAnMpCxpGyhPS9qWuHo7ZkAx",
  "key12": "3Qjb1JQr85mkureRAeRUrqVpJWfYC2gy6e8vnXZUV44MZ5fCrsVz39GNH5yjNZFvqnMHBrZKHpG6piQ7Dsg9ZQ4x",
  "key13": "4bqhwaw5gvcKioYZ6T1MK4yvtV1oE9RBbHvHwFPv7qog3CjMVUyctsxMaV7hcAjQKw6VapxRigjhsYhr3rBvYHiW",
  "key14": "B7hyiS9nvhA8UTHoFwugSzAGNGY8cA4vEcNRyDMgiTA5EYNouAjWqrAspUmG9XaRQeWDEUVjR4jYtQdZeKdX4BB",
  "key15": "r5bxKTsq4k83oKJnc4LymSzCKueQF7yKgEtnnzp4tLE9Fa9u8iANWMGAozF6ubFs9JX56grdDyk3qLquwZr8A5N",
  "key16": "3HGpJQvHo5swftJyfNfS2xCXyPcjnvvNLARZLXTtaG7qJhvTbBtK8YWGnWrxcWQQMRZ4myvAk5T91igC8Qi9MAeK",
  "key17": "5oVooogmrKHKHDHVkWBtiwKm1jSf9swQHnFFZfp4hJv3faaEdAJ89o4WMenUQPPUfwuMzZR9qtSbPvpgLKppwgSE",
  "key18": "3mp6G6cbnx5PsL7GjifB9CyeEQs5fch3ZjxErRajvtg7kgZZRbqepHTsKx5zN3J8mtLamWuy4vQ1ikoLaTRjACGB",
  "key19": "qa8p5dkvjKXLxhC8YZEvrfMeCY7VBWRHN6jxY2zMWkVTcHMuKqHQERFX218Duy9AYmULXFeMMFVoHoZdujxZbok",
  "key20": "9B86t3JNyNCX2BVL8va3YFXLm8JCpXX9hkHVqjYSXCnHBnsRhgiyKCwqnJ6Pbsr9LbKb1Wi91i55EDbhiSbcKCV",
  "key21": "2CeXhfD2MxG47AQVDAs9jotakazeuDJS2S8dG9whgHq4EPGz14uPuPwGDYi3tpmGo3Rikp46idDK4mBLPcPuEUnW",
  "key22": "duNJKKhMD373PbYJ6sSDtnqDbghVpE2HVffna1LxeTxJ7Gaetpm4CDCa52BLTr4BXFi6F2zo9ZDPyeUcGxqqC8Q",
  "key23": "3iVgLnBYnrV98D61zeCbH3L1bdhFWwSKzXmF8FBeXCe2VXikz4UWD1j6SpAQWkyh3rcE5y3PX53VQ9Xsm4PkssSn",
  "key24": "47CjvyEnqqpdEwJzaF3dnLmZmimaDRzuufJX3VZRUQiqmmEgvw1Qfd7LEeeBgGBAeeTCXKCUcz9ajTEt7j9W6Y6W",
  "key25": "6529UQQ3yAeDNRa5Nxtdc476RuyaF5BUgAo9neELceK6gMAo9XHQ5GcqgvhqrUGpBbeoVnMWzKyWkv6uZUp59NLw",
  "key26": "3SgBxL4G2SDV6GBWR4Ct7F6uMtiE3z9ybangR9GffpNCwW5jZxcNFNDhDwkLQNNJz3k6LJt9kRad81vxZ58HH34o",
  "key27": "5R4h85BAfBoMX8cVVFqUWmarws6TQABCTnv2dFkLKsXJPadspc2FczcioZqcqeNeV7oGGu1EWrT9tuSbP2Pw27oX",
  "key28": "oM8fS2zY4QAZAdMCU6A4sjtxfKnoEUrr5G3XCzqqMw3pDxWhjPZGQfV9eLKme4xn78HKG381zALnUUX6LnPpoHo",
  "key29": "4aZeg2NuLms8re8hWK3NLpykGgkrLDSwh7QDvygHU3AULr6zRw4G9ZFt68kK5fwTHo7nW2ptXkW5exoXM6okMkuZ",
  "key30": "YUaZadc7QXarNhii3rkYMWT8UC1s8mquk8ETLmF9nRbkvF2q7tVEePkn27icYuvogiCx34VmbF41eNx6R3LSRaB",
  "key31": "4DCQmToafVfcbKT9hGVraw4MNLqh82EFLTRdSNywXsabnTuFRozchJiCSUVfaqcgH485GXEPeA8NBmTsfgSkQ6K4",
  "key32": "4UZQo4jLev6r11PAEP2kLKrWjn96kJkP1ZKunMRvMBe7NVX1DMmBNK6ZnQrpcgXwD4sAVU1djdS4YZfnEUPxnVex",
  "key33": "3w7ZWLp8U4aVuLjMtRPJUQJJ7D43cT6iW8Ee6nFTwEaZYACh4XJ6qpC2VQ7Q632B8SpR82t4SWm2cgptAdnYtHTr"
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
