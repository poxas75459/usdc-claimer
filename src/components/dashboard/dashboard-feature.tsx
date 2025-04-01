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
    "3uEq8CYzpA3Quatv6mz9Ypn2FPGafMYxnW2RoBiCaatwSfwx2AioyvYhJfYgpdM7xFygVhXhW2XDncWgHxxceQmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2KAcAQtKbvSTnehEqkaQRzB9y4NzBGpFMTEbWS7QxRzQPY2dPqp1ypJmhH9BJEaxdzaw9jVQkPktwyaT5bSPVy",
  "key1": "5CeHk8c5qNeybk5Pbce7QfjdbRXtNks8mQKiWenxJDddfsnXZoJn3wEr8Lxpx9MM2me6cgbFkUGbuNZrNCqCmDLw",
  "key2": "muhmg6V5ESc16kZn8zbwq2rqHGFdR3iem4TTTCYToBKDgRLfhGE4sgZztym8QJhxGFwcWH32oFSfdb5FtiTsynx",
  "key3": "4jc7JhSuKwK9z1PKw9zXxaE5djmxjJaFMfPNpthL3aK65fenJmUeFiRZYiVRkNS7poUUg7quMp2LN1NMaP5UE3gW",
  "key4": "5Awes4oDfCXxaAdqofWTRseysK9HD89S4HbDB7vXb5x8E3ACYJE5UaeR9tXqNNMWshWNEQD7go3e7XcYEPK2LHRk",
  "key5": "5ACky131RgN6KEvCP4n6rbf1BNEmp6mA8VsUksGjz8V5xMhmZuGyky6Gc5ACHAbh4PmLzbeemumTujxQVWdq8yG6",
  "key6": "5D72G2j3FDcVZsKgeBYQiBsuwXXck1Ny4w4iDFCPYrqHyeaGQYfPEUibab8HM3NnunMjdagHWVjzhGmPrRHKNL1M",
  "key7": "2ov5c6uef19oisWWz9Wy63uNNcE8mB1kjs1bY7GzCx8ykGAxB8ZxmTgsEz42d24N4BpYdzrqgzDSyUTSjqV2Snfb",
  "key8": "4nscodosU5dSRmNkXPTZavnomiFn1kqZ7psFN5BaAMwbY9HY9597Cf8NCt3YTgKEDSrTzWRqVuHEB5re5r1aW6TY",
  "key9": "uHam9onFDMdLvSvTj4tNgNAt252f7mpLQbmAorCiEUQzfEBR3cjPS9z1KU32nZBuqm9Cazsm2owLpVkN5vCeYo1",
  "key10": "3CTrYNj3vgogppAoDxQY52SApLzCQDwiZ8UoTMrahYvirhGrqXhUv8Xuc2Vk75AzpJNJvMgTasqgrgfegAzin7bq",
  "key11": "5mBWXo1u9m3snEMWqAGwCf8QMfUSvb8NMMp8Bzmd5RDSNi5wgyWmiyTrCnC1Kz4xMKFKxrvJFfEjx7uPyykPM9C9",
  "key12": "5SkjQRpaSsdVGfxJh2ujmCKEVwUVFHHgTwgvjib96YhPWGfXc1v7PRALmMH9iShj5Zkve7zwBxEpw8LucwWv2qyq",
  "key13": "2Vinyo3o3sW28qdT3TY3Xg4ZFLyCh7HSpwgdsf1t22tzYPbZSePShszXH39YnLcG6cY1xjTHBDbvbXVoUA4nG2dM",
  "key14": "2Y376aybXv1vCiAoZUBvijxQf6L17HnyazSVoih5z9x9Wp3zrhLd16KzvZAAPRC2jWQC6R7uXkx7r4LPSHwbfcCD",
  "key15": "3RsDpKtDkwxP2BQYzdo6Zmx2Jz6JMswyur2qWxDHxN3Y5bVsiSLFbsjkPqxeTJKUTtu8GQG35XccMWUogcLnebPo",
  "key16": "vF9CFYBhAmb2hTbLaTkjoUEU537Xe6XUhbaZuU25Vp3BfjQLbzCDrzcjYsAT9VLu465ovkXbPEDUkKGhvSecGty",
  "key17": "3jAn5zfdHRv4KoSmcyjBqX5NPqVRAeqUDZgBaE6o6QjKNfjfWE1nobntwu6VrMWAuQwedh5ouLWCJLrfvm7HztaK",
  "key18": "GKirXiJH9h1YNELwkVUmsvQ8Wwyo6hCWPNLd9idNrNVu4NpB2keSkt7aLZTXtBZx519BzhgVUZgwNK39SWudLko",
  "key19": "3GoAwRZqgshFK53tbTQWnBadiWJJfdxK6pGvRmQDxx247EC8e5EBRWuWM9khda5G5cfTw31e65YCJyPskXJJwkbC",
  "key20": "2fHCVEFCbcTFi8FmvBcuqJLDAr81fXCevAH5Seok6Knq8NA3BQNwZZoeQxQJvugRpax3WbDB4EWAVezBZjHZTSmo",
  "key21": "2jqXUdwCBsZwaTByiE8zJzQN8mgwQoq63fTk8sNd3ELA2dcZzWJmmqQsYDR3HDGHdG7niByQgFQrCPbYe8cTZafe",
  "key22": "3gzLYzzS8bjNqC3sphMWjM8o9CHV2Cw4o1U273wc3aDKceZKKtonZY7qLR9HhNQWYTUagGhZwgYLrMTjWvaQFxKR",
  "key23": "43DuBhQX4KY965gvKLYGR4bEPi5cjmx5o3XKDpnKFdLeW2ni9gnjjwGWSEaetuLSZtiGJK61GnipVvPqieptm9qJ",
  "key24": "32odQdbm53GMNw4XHCEiVc8Ce1GGYxYa9kRLRWADT3678KyJhHHu8SkT3o5ZRnhYDSNTbCfXQmQ3Qa5WPciwFH9D",
  "key25": "3sPCvRoogAPPBysfvZqZ5nGAmSPsN57N6ARBvRVMf9t8njBZsB2iwR8y1BWnGsEG7W9EiMUipwv4VuMkVaYixoxB",
  "key26": "zwtww9UtXY7XnwimED3wKUbByQShVttKbXivAdz698JupS4tCWpbUVeUjjEmBRJ4AU9KDU5YFPhcPk51XqHf8G1",
  "key27": "4ZPLs6aoLvPV4AxaJYy5xi3fwbFCY8Xz9WAnA1itEJftFXtgTbmBNAJJyXw8N9vdC69DNraYusV9ZNcUErycRvFW",
  "key28": "4TaGSGEYpsW1qHN54NPwww1Gs8YoVGT7J31TCJ4HY7bxrFLnohb4Qd786epygALJPuSG7JJeVZ8du46q1oxp2VWk",
  "key29": "2LsiDWpzRuje1rQEquLN8NpihU1ya9FiWYEEYpaxMQyTYCAERauDggUajNvtpg6MjyxGGXYkJjuzUHdGXxS4FWQv",
  "key30": "3mcoz37HveLe2F5kvh1XnPm7uh8Ys4KhAoqnr7gqeHukvxaRjW7Gb8xdAu54SNPgubLyD8Vtt1oPxSKUS2hRbTRe",
  "key31": "2kMBrGbUux3qTPegTEraHzkYqgiAdKZxUSLgtVeVMRcY4gT48ENFjzBND2egHs8q5KroYfxcdnTC1Ht2G53MEA2a",
  "key32": "3HHoRAndBHWG3stweDEnbjMMJhMUFrtfWJA3NyMtaGagW8vDNJmz8ca2YTm4ZUTDD7FXFqD7KXofLUYvNMYS12HE",
  "key33": "3LjDQjzDrgX4xqmnM8NGL32ykEcgBnBvoRGAPtx4afowSFsk883qqw9M5gYeMVta1pvs6pebLz4FcrKVyvFUeWxp",
  "key34": "c6g5WZjibKbN56vyZ5tRBvFuQxPZNTDj7LbFdwbQnZBEqxo7sgwqPrs6NrKXog5TfAZxNG3LhhzL3Piw8PrgKqE",
  "key35": "5LN5EG5BGK1LzLXv8ApxJotCN7bfvTCQdf2rmLxSdDv9bdjKdJcqnri8oQxsnqV5XTsUY1syUAmUWSYuWQhYKGJU",
  "key36": "54Vx1KENh2TiRQT9XCZGPXUbu4RhRTfAAkqJu5nzYsHQchLQuy2WbzHtMTotHbMm7VuJrBB64iPrC4aaK7MRxqLv",
  "key37": "38icnZkoT985nEffyGWm7pPPxx6PZ72XPhmtdnni74b7PcCMEdZgvkzbayddcXMNCkns9u6HD9yXK8Qpd7hm3BQZ",
  "key38": "CwcFGQzVSGw6A7UNrctUkftvxMfUwvhyVV4wuLMFKt3y8cnQKmDQF71WaQzXLJpx9EWgXjJatSokZwGkniFEKWj"
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
