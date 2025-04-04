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
    "2Ju6rkhEuASckCiveVVjzqJb1iw5Q1MZF4FdA6vmKur7UgYXLKgksh4fBpnoGjzHtfJVwrmnDRpaqtZWmBCuj4wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577mAMLD6XoQnzdojtWqt8Wwynswg6KMEaSKnhGdx1RYZtCb8QRo8jAmgriD8JnDahzyC35b3cVPC5iWRJHBPKKj",
  "key1": "goDLi3b2xPto4rZGYzYeXXPw9iouPXgdAqQNkZFQZV992g3zH8HiHLZekFH8zrntb9DAQxQNCLnY293uz8Hfriw",
  "key2": "3QRSreVesA6dKbvKXbH248jX3SB5MQZhsEEAgY5uatm9Lnd4BEKFdmzY6hUrDpz9KnLCaKVwQHUfbbv5aSha2dTH",
  "key3": "55ysS6ivenK3D7poLuRQfqETvjJiYrKk7Pf8RxAkw6Nz9s88dnWGGeRDsn8SrUHT6AvyeDkG93Avy5Kmu9fJoZK6",
  "key4": "3hTo3zEp671Lp26g9GYYWMtNvWLmGQrhg7FFXc8R6AuA46ibrrMmPMQtRr9BrdCPGKVKFsr7CSttLHjit5Ke7kgf",
  "key5": "3xp3vdzcPRD887oeXafZmKTD5NnXATEap1z9vcu4LzPsgaTDGRotZpL4Dgnes6TwNgWCr2wuRXhpxVg1dp4zwToD",
  "key6": "2XdqgMatmV2rwDRQUs2ba6JVbvGYthqVhSY1gJQK7ER9RG6Tc3Z1uS7rotAyD6RjM8LzaMsfxyQx6xzsCtJwNNEL",
  "key7": "2BXonpx1rRz1VmGFEta1dj4AKTNSP8x3KCu4pjArX4chvLL7mnvhJV7KHE26uv7zKUSED36BPSGv43kEzFTzktg9",
  "key8": "4asMXKZiaAkFCChWt41FfcepCQprB88nY4NTFXPDZXJgFkrLb6Dfh6Fbuy7axPsVo1rngEgzhNKeRroT1iCRvr1p",
  "key9": "5b1wS6P1YmyZQwhftTVCaBbbfihywgyuSfNFmHyQ9JZEaorwmq235njX6xBgsHbzw6SzPXwfxncC2nBwLphBfZKb",
  "key10": "rQEFKngBzbouYTFejcpvxJrqVfkKLZA6h6jM8VEyN5AMxYmixzaQJCxFDuurqw39oPFC4HKobsC34aMRxzSEysv",
  "key11": "3gYQ57AdkWUdXmcdPdwqJbpSNBjCGXSLRErPQJ9myj6nfviqWpZDMzdQtwgjXFwRdv3EDSqtFT19AgVHL8YhLskv",
  "key12": "2Cg5NtvdSRyEGRCGifb7PWMmJ9GdeARC15hCq1RZrVZseGSuvv26452SGXwEyY5v7mQZWkgesm3KqK7srmQuLK3C",
  "key13": "tRVLdSMm1XmMXYdiYth56uMU95sLUsxLvCSVMHp9CpZPCCf89sWMb18kgCdab1TDt8C27q1qfNh66hcNfUJwVT6",
  "key14": "b4p5oyc9LjotVAdgofzmkvzRsgYqV8jihpwjSh4o5YXHbdyXEpDkLjMiQTXmPZHY9ioFXrBdFst6jbhHAaDZzTu",
  "key15": "5vSAPVTCDfh9c9haP4B7GmzpBZDXkc4UjMyoUnrrzjkjES8mT3QA1P6o57BwcXTiaHhyW6sQkQouByFuWakzq852",
  "key16": "3jBH2sHhEwWqgkXcrxSyxyde44rX1FuU7N5CHJCSHgokDDEDra6TagUPTdgfNi4muACu2dTQXvnKFqjqFFVDEfmp",
  "key17": "3MscgxZ2qUhdB3RAmJoqDSbKKWW2jJx4Wfg3tENQUrHUxjGSipWmSnryq7utoGTkbXpzFyfBM142gQ8Qvwovay3G",
  "key18": "48tYD43gT6HgmmftmMw2ym2RRzqaVAb6ZShxM7t4PD6pg8ctT1vpqktuzJAJTd4zhdoYSmCZFMJN2o3oQpcf1Fbj",
  "key19": "23ToCB24TCXkpHexVHYrcWG82dfxnSyNtGgV2b5NqTqxMoEAxWuLWSEpHLr7SevnCvRbxeggMquV4UhEqDibmEFJ",
  "key20": "2QLJFnPEezMvGaXQHnMSkbuP6SRonyxA9GTjuUPrS6q1xztJSmxcxCiHbDm1Bev8jZYB1ENZUGt9Ho15L3y7nPwJ",
  "key21": "53okmxGMQidAaYe66XkgHZRWHg25Vy6Dx4ZKsEdY1tV2FfQHe5q8uaM6vUXme5wH97YGp58NnpYxoJ3R2KYJ4iLX",
  "key22": "2vubTEhH2FmHEyB6NcoeWJupW4UCFNQ7k487LZsfTQg2S6hbpT96EJCtKTNE2BWW5CgqR32Q43ZZt9mDyDkdK2Fr",
  "key23": "61eGKfh1efnNshfg97UZRsU5z3Ki8swieDuoNsBvSX5pX3K9nFvNTXuiihwwfQdSfKCzBCvieZ3fGeuczAYRNqT6",
  "key24": "21KFhopHmwrHGaRYrbdAyxM9TT74vmCtAriRBkpJSe3HF9ZjFWvpDE7fxUh9iqqeBy3kqj811Z15mZGJwEPbCdjy",
  "key25": "35nnFa5QuZDyMRqb5oSf9HWqWrrqmtJTLe3hBftuAYQu8KywuQCYexo7spysgC56f2Ug3jbSsTjUa6PXaDgEMQ3T",
  "key26": "3rteFMRu6FZmhHUirZoJvnLdq4xV2SxDG69ft6uceaWM5RH4KR3hpij19YvqT1nNSZbhTqboTYgcUkCJe7GVVrvr",
  "key27": "2AHY91JqppP7LZacrd8nQoz9wqabmLDTzw9hjrQZaJoVsu3r3ZvcBtyptAr7VBieQm7jWULRdHgHWH2yEr7FJ74g",
  "key28": "gySksrkmCfNGLr8yg5owNn9ZdGnADFhv96g56aicmqqdvzoyswUZ9BSWXG7fC8Kg6seJ7tF9dFByjfmrbGQJVVx",
  "key29": "5rAdND85bXt3KcdkYmRESDtZ2mDzNzAuhoFT7ozwEC4npGnDovtQyikTyWuBEUZWM2awDMFcvNQ4simJHsPFPuQi",
  "key30": "3MJ3NebqrvTyP5eVyNdCzdGETTk9U7h5Eh9oW1Yjv11EctwkAsMWtDjcjZ9WRqkcYgjULRuqmXdQiqMes3HPQk43",
  "key31": "333R8CTV1EdBp1yEDwQyUxGQP3XcpbMyb2kh4yP9CLJWGa85DEBaoGdBZHLePbSMsGwd8N1YoQeMQQWVSZk6j5vH",
  "key32": "5p28KqposwhDzZyBz4kS1e97QyANwRrDKuAuEWPBDpvHft2M1qRH7WogECxthLV5vgXkFY3vEgX3Uxs3xBMV1YTv",
  "key33": "4mTeQes2kKRzBEa1on5dRhTwAB2CSC96dV2T6XN1QwsPSNL9Vt23Y2qw6HnKYFobZeHdwbHKPQyw9Bnhs6KvSxfv",
  "key34": "3s6VvGrMMxeJbPFtBdEYDuGK7pdPSmqaF6id12FETFiNv2sofNuT9YHSD8K3VKkZYHy8dSWXsqSYpaCUVLKFfmm1",
  "key35": "nNvzoPEXBB2D82EsNC3C3Anm7BSFGYbcx8MwnEfUifLVx3vjheHomZQFubfYdV7aB23qxcMDiq2DPfbNshDyqRD"
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
