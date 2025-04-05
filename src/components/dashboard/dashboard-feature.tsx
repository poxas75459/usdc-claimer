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
    "31J3PVymkfYo3P387iQhLgQr6dpRvszmJ6uPNmKWm5bcmk3eTE2d64kpXDXctupd2qBBuHF9dyRbpm1SLawXcy34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tw5wGZwN1MADgk1SSAm2wXok8cGvcwK41cFe4ssH7QjwyMp4ZGmcMHrC15WQoipusPFjkDRRWp9Y4ZxgiUbnebT",
  "key1": "4KT3Xhx9dSra2ZsTEtNZeYAW8vo8fLrVz256KqYujvTNZgPFEd2AYqDvh97x1GHut6SELK5EwAEfHeNTucAJmXrK",
  "key2": "oRXnv3QT1e49DJLJh2tPa1dYaQ2ueK5VNprr6tVgXSqR23uqBb1JrgBnFS3Tmb3M1PyRNjTBKQe1qj9bFuZBwiL",
  "key3": "3ZRsGvE4ebLuJ2FCGc6X6F1WTqFdCG79mkTVdfmtAedonuV9CggtESQkVEGXUvXC6K3W8WfYGeSHkd2NdVbXBQnZ",
  "key4": "3a8GJFd8VP4LabFzQ9Mt9ER2HEsHczsJn4Ny3KgJ8euCmh5c63Piypv1avvP7QfQnqD6HzBDpxCGNJ3ijqn1auhD",
  "key5": "5ttNu24TLvzhPANCK6qLHqxybNWh2hZSKeCLRRfxvrofkLVenSqmgFqFdmz2QBTEvdYjptHgnGVjRWGp8UervT2v",
  "key6": "3HRqpAoxfzvWyTY5Q5aKAV4iC8rXpVkvNtUzup8MQb3ChWyZKjQjFq1dJSJaPiqPPAcF51M8ecyV5AoTXrAvx581",
  "key7": "2KvvuTUeH6qLAShLRHFMc8kKM1TBcK1NeWemh9bNdDMt2A1Yw8xg5fjy6LZ3Q4jWkgThvPrm4Z3D4TEXTWduwkd",
  "key8": "2WHvAXwnBbJjhJGpfa5EdNc3NJ828toc89FSw73C8MkEMUg5tWFim2jUMqSJ9qeaLp9TmRvqPEXUHDQMQhvW2EMq",
  "key9": "3hpcDxM4yxeMv1Uu2JKA6te55wyRLwRAvQD7x4aoXySnQ8aChEruPrHmcHq7FmiW7VjoiGwLbGSX3yDwjJE9PHhD",
  "key10": "2FnUcXqAckWjVLNauv9yT1kSiH44YubEJSHV5gauhC7na29aQQmcsxpxexEWsiXS4ebJE4V1vTJcfjkBebbSX2MZ",
  "key11": "63sYu2AvsrJc1i2XqkdCkNc8RvMyMkRaBgt4McubQ24SE63Q2UHka58fA724pS8bNjT6RgdbQVKNmejBBQsYXr3T",
  "key12": "5w3ybsoqSSQ2drTxVDP5WoMmUD5qbRKstn9dpneZRojZkVzu1G4LnhckUzyhM7F3kL2VMwT3cogs3BFJFr8hAegZ",
  "key13": "qdat5ubbGvNyn4KPzX9FXEJjKRpkmyGxJUAYL3dTzJJsYKN5qH9yETygcYq4TPqEMjhbMXkRM9488a4WWUQ4zwX",
  "key14": "8kCtiQHXKAAhPy2Xzz2biqCUX747F5aQM61Zw9YpQ8vWxdXxTSPiYtBcJ6cdpPHxrKPumNQJ43n4QxuxqwcDKwM",
  "key15": "2PqmkHvLCEaBpdb9gNqQq2oWZXqxcciuneVfDDmMExJ1dXUWkRs1CXDPVsLQiBQnzZJvRgu8YBcDd19j35rvstJp",
  "key16": "4yG2gwu5QDFpb7v8rxCyAsv9FCFRETXPxGarShys1d9YBBKc4rxeZBsPCo7UdSvRkKDUZ1hDJY1PqexFDrtzPYX",
  "key17": "3UYqFiqWfDq59eu5DaDH1TCK2E6c2KL4hy2XmHee5muyfjZDZ2gUeibesPi8DUhUnifQUXH8a7i6dCjBPR5oAXwj",
  "key18": "4gBHFAdAGEE4WLXrsh73zmTmUVR6YpZUjBoXhcWRxGdtSbWymbEJ4STQboWCfLyw4zf34uz8zjwwxrvBdkjwkPHv",
  "key19": "4GDpZFMb14TKGBV1HsVYKE9uTZqTaNu22Mim3nwtEVeamjGyhmmrzrGH4n8xBCX2r2mWTdhCzWLjKqkHwMm2gHJo",
  "key20": "4wrJbaxTxJuDwM9nkLHQtPaaBMcDftbpSQAsuSaAhdev7qspVKFBkAyDfnv7H8P4xoiVSSSeV8zHBtLCKAVa8tgt",
  "key21": "5qsgqX5rNi9GzZhbQMzP33od3Y9pZWX6Dgj2ups34acyTroLoH67berJBsdifLd8aX2utt7UWZQbgTJC3j3Ff8Jp",
  "key22": "4SKgG3CWE15NcEpA8KA7J1xaK6CF8FYHCC4qAZ4CKEQGDLHPTEnGD2saXFdtqDMP5CYNrn5MKwfMX3cbbbMbycU2",
  "key23": "3s3xkpmxF8unPTSdCLBWmpCHJM2nBbua9Wp7Ch9QvvztmjZFcNzBYmE1qzFEJaL6g16e9HewR4g2V6FUfoV1k3Ag",
  "key24": "2PFwo8gfcjMTdTTpJ8ArFFCeSsuc6qaoGdxp6YWBgPnMzvUdmtWx5t6R19VxvRPdFe8oPAZsBUSUaD69VHPb6nav",
  "key25": "2ozQM6WreE81n1TPGQ8G9tQWqjednHswZmrQ23yaAPj67GETXD7DxGCX66L4vkwMFFxKfoDuMB18LC6nzxwJjyBV",
  "key26": "5S6ZS7qFvNjzkn6uypcPaj7mQ6aujyDt4FdnnYdFPe12XEG8wnciq7KfRfFE1s87V58kQ824fazgRiwn4Jkgggb7",
  "key27": "gZZs4dW4sLyASzi8GR9vqp41hSGFfuCD2LHjDAka1tTfcJeZb5SEujD7BTWwmvNgaaMNUGKghYonpdMGe2csUTu",
  "key28": "62hESxG9HnqXwrGwPkH58a7MReQpLTVtYWERCvz1cm8M9xi1CWoMf67n22PsTRGraKomWvptrKW2xRjcuZacoyCb",
  "key29": "gupPKjiJocFuseSxqghXA8TPfVWKyiJc4NAomhnGCyuKiTLauGdzfd4WFDJT6auHQ3pP3KBsZgwTcMTuVPbmcCj"
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
