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
    "2XtgbVX5wVUDvimKMtL3gPGka9YXqkdeuNSbeDqGFk9bZaWyGiCspsxUb1ECH3Tyb63jje55Q9ZXCDHEHMwGgfVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gftfFTQcWiYTKfbTdw5ZgPGPffeQZvApRq9BZDPtZzhhS8Xbw9Rs1gdHY1DHdrFjmdn2bKdtx9jTr4PjxYoTKTt",
  "key1": "4Ux8i22Rkif3na62WeHxL1kVXv4sbkzP5PSYAzTQMwSD1fXRL1m4riamF8Sz2XJnNbfSbca4SVkgR3HEf9qJYtzs",
  "key2": "5vLvFSQPXJX6z19DgYz4mqWRA92X7uUXwL7uRMHwxTswHPMXyWQdALK7XZszeFHNJRaXhpo4cN99DznJ13CYX8sg",
  "key3": "Q6euKV7mA1LzagNwtjJrwr3JtwoCeTuhtyGbymVxv4y8feBRDvuV6LpFwwb7ZfRuSoTvr3JS6rUqquUGF4kNw4t",
  "key4": "otYPcz3rfwrPLwaHoMneJ39QSnzyGGka7gMgMBbauQdRfqB7tS6m75A3s7axCuX1qd5Xkoz1i6Lx6ktyy1VvdYB",
  "key5": "k1TdFLNC9Dhok7DgL78tQuJNhDhLQNQFpVWwTmo9VKMzMPs88BmnCcoXtVkVmGCT3GuQNhFTDSeWXBopNUFJnWk",
  "key6": "3rLbqoMJtm7S65Tk2raypM5NYc4zFGKd3xZhhVXfLyPbk8D8FkdMdRkwZGKBkXWYyjCiqDRccrCfBP3AKJJcvETf",
  "key7": "5AHfkutpbwyMqkY2rXrDxcC79TYhZ23ReYNBHq7U4beNadzihmriqauhXdL6Psa2qQc4jsGubV8eMfeYxcnPvX9k",
  "key8": "4rBoX7JGnJnrN4tUiDUxQEpc9PyVqXMqPWAAoPX4BKqUirhpJ44LVsL8sYTQB4TaR2vABLnpgFVSJNLe7wxKzo7A",
  "key9": "2HYvutfzu3AWFq54xyBrgjQBaq1ynZzVfXJ1bwM87J6LwgoaXHj1KJJT4staDmqeyTHHgjbemsfNmsskXq5C8W8N",
  "key10": "3EymYURjxNXvnx6dPGHvnjrXEHs4EqKd69W2RxA6tgssvSjzXLvQXJftze2k8JLjCMzW8om5fHgamxj1SqufjVVP",
  "key11": "VXQPxZHNrW6gqYXE2YwKrkBZ5SY8TUvnCafT17cJKMxAPW5XBwBHpCbJFnLtj6zKPfbutZaPn2TEADqKX1m2Pa4",
  "key12": "4cfexcrJDDYrCH3tuspHsEFRyFNmYJXg4wRmdkwbwzJexCCLuSkm3aDnR7paUhjnW9bWd8zkxawA7eYAUnQfiLpK",
  "key13": "2fy7wik9YPS6f5R4CTnhAHGfGVtf7tvpFTjajXsDJNg4mvBaHDZiMeVQxf58o23MSQJuLeAJKeB9SvM4dJwSdPML",
  "key14": "4qVWhszZECjwgiSNQwTpv6sY2wXj8ioM3aJD5pwkTa2S4eD1F15JgED2UVsFNkXXuSTQECMuDYHr3BMaKXySun8J",
  "key15": "4N7eM1KoFx83QUeUEbCUc9yARvmwSSU3Zp9eGsFPGwjyJ6j2RWgLMvmkHdUWYqbYmeGaBZCN9WB98HHporchm6Gu",
  "key16": "3Y5k7dWy3kWY5KTeKcLgvYjNmnnACAfxDk4rqvE3rWVndwUQGtk2xbTQwFZJs9VeKGAzBoyt9USpRCTKWprmTcFW",
  "key17": "5G8C5YJqmCNMsgSofThiX5KWWHv1DX5WmduerwYSkSRfLzWTDgGap38qknokqSDMuu8QVwEizDwzese5SViKcdqu",
  "key18": "3whhXdrujbnJNJ67cUMogGAusUbqn47Ru1kB4XnQN5ZNvisEthUKP278Y48nJibe1hsVLvA5rNCkZ8dxqpemMcjc",
  "key19": "3UKNuS91FvZnn8KyQz4o3hp2azeFEbnHZoAoA3qedkn1XpjMQ6khuxH5kwribLfBus6wLbx5CkLrL7biWD1EDvg",
  "key20": "4F8aF69aMb2KzURZ9txSGLaeuu7xs2JDNFomJbpq5zQZ7Gz4PRT1sRWbf8EtDS98SdSC7rdemS7uxFRL62TU2TnE",
  "key21": "5ZfJDcTbunoBYgfuYUkfS4Bet9n6Nx3evSkLmqeqZawjjdxmpi8gwSSAwPQUMV88pTsTk9x3mP7mau8aQr3XB4ke",
  "key22": "38MPvj2jpzNCchzQ4ZcP9UxrREeC8Pg7dpkpjrA9kmDTcvyVvLBY8suPuvsy8pfcmciS11BQXKVd3Pwhg72vEJXN",
  "key23": "3re9nADa3WYD3mrusz9pGcTcZYRCv7icfPwMAc9xk8kmjvEMuivARKkspU1WRQJS29L2s62dAdNfgpXV1Yatys19",
  "key24": "mq53ZWjdoCGZmKXx4aQom9cUmqZEVDJ9sV75eifViNAKhHA5VmK18FXBL19BXZiFSeAboh2y4GBzD4iBSS7UbCS",
  "key25": "4CtCTFw2ug3DtCkidDoXDVUwxMxQWTR19zy13SqLKvPhVTrK22sWFNrB8Ak79UUYt5Ttwe4bffBkpbDcWm7HV5Qz",
  "key26": "3gKFYgDMAM78ikPpHwh2aavYPVxgLrcNsExrX5PF83ZnH2DFmrzka3oG2CEyzZZmoc5eXN7519GarL3YwvsZiV77",
  "key27": "ifiPeW6CGuhuPDsh9cHy4aE15R7hhtbvkrg7wYRP6sCnAsntkQEJNhQGNbyq8KdNYZno77fg5Pmk96R75niv1Em",
  "key28": "4mVfz7S1YXG7SvR6bEbfcTGeLdxuWxbQV2AszTKWmED3FHMUKyBBcTXZwfCo1hpYCNda4ZRGSPL2J4NkE2huDRcS",
  "key29": "4tQhjkYW2Z1XDwiMC3cUHfjuDTfS1XCP2Ttv7FVYA17BzHp6SqsNfDVW8KBa5bpJ9MLPCNmis1ZtTixdp2VknZ6u",
  "key30": "2budwr75VeH6SpVDQFa3tGZjkNDr395JFNuJbDVKZJzUzAGfG57mYrusJ7pGg7VFmCjsjqCNyBcq8cDR36HHGrAi",
  "key31": "2fuGUubaMNJabWLA3QarhynpxyC1jBX92h7T6hRomUqmMZ93fn2EtemYTL8775HNf6GNJRSrn6W9gPcHMrj3gufZ",
  "key32": "5uvsBPwXhUTTHPyH4LSGe6Zdce8ngoCBWESqH4xRCWpuAZvqzidEbL175TPYkaf8KqS5PXWhqyW91RVWVREj79r8",
  "key33": "c5rN9r18qE9WuQAWvL2LeCz4UenwVkaCGNuuwBvWweboSgJDAAdRFSYzutNZgFs5ML4pNgnLS8LUfbgrv76q7aH",
  "key34": "5MMyFmtzC6xQnrMQ81a7j4oNX4RK519uwrcWHZGBWhcr2FQwuCXogQqKV5NYVUpq2Ysvu5uXAqtS7k9no9jreNN7",
  "key35": "4baawoLAWc4nXL6LmNgtbKpjzQyWuaVcSb1UAn9mzqcuF8ZhC2oURDv4ruX85XgCEsr1FbB79MhDjzsLzeUkxjRU",
  "key36": "PXctQ8sMe8RKPzXm4VzH26hZ4LbGDa1kzeupWg3Up4CuwTGNcKgYR38pfFvct7w7uouAznQhNZBD3Um8fcYqE6d",
  "key37": "GHqTUg13jQeeQe1Hp5y5JhqDv2823j3zVLfytj1hPZ129dknRreXcCEreBugDNuW34b6voZ6ZWj9xjgceE8sGWD"
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
