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
    "3TWMiZosjpBZmPUdRDe4oav9kbysYp8TnWqFLcKsST8QGXL4guiM1jWgFnxEn9yWGyuq1A4CWP8xa3wGmftSfyap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KkE2vLjkJzuZwakdajSmFvnGNbGLASAcDv6xnvmdjaeXSLaMHrGPvVfJ24V6nBxV7QB214ejYtfndCaP73u6w7R",
  "key1": "364BGVh6wRs5J9hKXrot1aabjytgtuqbmYoG96ofEMRKGNFc8atYNya3Xx1o6c1QuTP5iYd1vGh6VFx8yi5xtH8B",
  "key2": "4JxPhfX5kip1tnytDRr8QvS13dDnehji5ZJCrv18C4XsjswUZmLpELJx1TQBMM4fT2hGvGBhPtEVxj37eYPQ79Cg",
  "key3": "jBsZ5URehpd8vFt5Rsb98ARf97HYVAAhLBHGN6fYmt2MYSThSmi5VRMmXFdq1J43kmxbijdZfPffq65cBjnSjgd",
  "key4": "3sVuB1iDwPVdBPGYwuJ1wXFSKM9FanEJZxCXLTzmgRzAHtkKowLZAS1aCCBh641kEPPzW9YqQJxKi28x9LqL5nBT",
  "key5": "5naejwFyvtz6kkk1xpTPe1Hx4mbcNSiP5vU8EGv8YwaHUVRa6yPVEHUzJpMw9Qzegd5YJd35MQnRQwpFpdtitKSr",
  "key6": "64pRtBZp7QnYPBFutciYdYM6u99LeuP5UueocDgS59sJUhf6YkZZp5MxKipodqMJeP4yTJwuAJZtwFnbbfVnv8Bv",
  "key7": "4eiBGPbncq6d5ko38n2YPW7ndy474RyhTn4jerPtYwtHL5w8oC6nStCajbHwfac7NEjQKSYPYBnCBKLBZjwik4F9",
  "key8": "4j1MThPaWi7BAQBwBhUszmdijhEM6JPpjpjkpy6Di5cxr6uKs2H4heqfxpxKCiSGMt3eSznj2w36ezkYh64aQdx6",
  "key9": "5BGrXMDwkqwF3mm8FU9aLL9U5iXqhZkQVweg9LPqBkJqZRPPe7uWBMTRV7MKsBhkmTZV5gtXSNApbmbAj3Z5ZV6G",
  "key10": "iqgvkgU1DVdDcMobKJswwFBEAUV4miaXL7QhAEjChnYGpTvfH2BfEcEFF1B9Aq7cZKtx7vDoxhJvqFHUQiVXq9b",
  "key11": "4aow3aqEvQoVNq46ihiHY1mw9frsznmD1YzATSn8uyBvQfGH5XTbhjTbZ1egzJGDeUdMQadcrbd1iLYVSKGDvTxX",
  "key12": "43xMZLyTykzmBCyGKg5nPVGBT9c2kNDvhN1A6xtQvxmDkYzdYG8RY92tcFDJv8Gf6vY65oPn1JnN234XWLJEbJgx",
  "key13": "3CjxCHAVft65si1zj75qLfgtWxGsnATFRHZMwwSMhp93EVHD3Kmxsr1RvVhHcYVcUN24DK37PTjAAofX6hwpmCxs",
  "key14": "4JKxhzFUDeJTciZvcLHmiUSyiQk6GRFJsLghLacXjku6wvwt3KtGhbYi4wQvkvsmsojPbEU16sUSkRULEkvRHcS8",
  "key15": "ztm6EeZJpiT5og14wuZFSPWABHSzewM5YUWTLyQVd9TH6CyJwL7z8tEecb7ovEAV8dHTcZ8ZA8xZwSQveeXjpuR",
  "key16": "4TyDLTkwcEtSfYsB8PcNKAE5CeuGxKRjGZGC9ZqPZG2ZdA4dVMCAz5FHQgF9XCEr7JYhw8Dd99bJ8YvLJWw6kM2n",
  "key17": "4vnxGtBCfUvecStYnKS76EmnnmtewtwzJXBWoPQwmXbkiymk8NBZ2zQG1UbCjBfWBTSDGMNb3Kv44dRnMr8J5oiA",
  "key18": "2xgJEiHrNAr5qohP6kmYnVZDaFfnNmik9mZEom4AAqHoU1ZbfKsjg56mcJfTeYU5QWsmD3FErdrXZ8p71u8FsTrq",
  "key19": "5USGXfzGd9BiyMFCs9oXVo72Mz5HWZrKYrcDjvMqHqFDy1vEPFB9336e8X1uBkJjJghrbgSkhNDtPSW8t9jhJAEn",
  "key20": "3cQwbVwr6te3NPt7J19gNv4RjUHz6xeV4WfA49WqTbi9rBXb175JACj9hKx1r94KReJ7WmPRGJ16Sa6JVu7Bt1gN",
  "key21": "3HwmG7EL7vaQ3KEDyX4y39YyyaXcCDUVLKzgsf31bCKtj4gR1DWJfMPscYVNiF7YuY7wRLDRcyc9EGjMLZoENAEQ",
  "key22": "3gvJcmgMZBp6MhyJiqfeXs3DCZFsM1wyNB72m9uE289LLn2rXmDwrrXfWK9sKffiQbfCmrrSkpKCsvQVAnQUPCGJ",
  "key23": "6zTCTcsRchc5Q6msiARu7yBnrPPeESWaQvpd1jtm3Hvpgbdgu7znZZVoAM511V32cr2JpsY4oiKJ9SBi2289PJF",
  "key24": "v64v2fCCuRSAjNGUig5Vrm2QDkcswpin2oA6hW6waTyEuhFnu58EeRidmx1jt4Kry3HvHPJAEx46oka6za72qMj",
  "key25": "38x5gjYJQjoKBP7MzH9VXAM3BTFWEQnGUgBuAudRvYHBsoPvSkVuA392CN7no71BtT4DmJjcsufAKC36yT23rAi5",
  "key26": "6JxDKpvZazkPtbiqvNxyvHUtftqhyX7mkmvsvpqeCPumdB7Q9AArU1MC34iK9Ku8YaNS4PaTUwsfVJp4N28Udve",
  "key27": "sSJP2y5DNPCxcJ9aTctEJCY5GhCZSeAocLt9FZYHWGVF9iZXK1SW8WDANVEFxchadt1Ud9Ah92bK15zRpfNXhBT",
  "key28": "3UmfsHwzjEtvbhC8bs3NR6Epku3Q4wNBNkKgqatovemTWfEYv62BUj9gQgSAJ7YHSimMm14yLF2rwAw2rLZcG7xw",
  "key29": "3LiaBuPGKG1z5TSqYJjnMe3EcsvgK932rJN8bGt1L9ucvd4eKM2KXZBb4VRwripuwH8fkiRnVyJXt5GDorHAZ7JG",
  "key30": "55tTpujiSa3vfT4pUhoeQGM7vWjhBdVYdvizRc7jx5xquad8z6ku8Rd5B31MSWhdais2CxqBRTPUrRVCTmJEXA97",
  "key31": "h1JoURpjieN14j48W3UWpqWEQmGX2Fp7qZeuT7D3XLfZCwcAHAmGXHszG5NY27vgUUo41aLqvPSHqXPzL35uxHj",
  "key32": "2mP7t7q4WeCFEDgExTC3LvvsQu4mERkixQLNWF94nKibG8XGHQqonUGMUNkXbUYMiUnXYu6cwvxss5gQR5nWxxVg",
  "key33": "4cTWFqpmgCgtHpR3YBqaaw8iwKvdwSq8NMZNiUybcDshz46Tcpy1RmiG42p89BL56wTg9Gzbkz6SpyNhCeiHiS41",
  "key34": "4jAiV2QTKCam3Jy5yFvTBPDbzBLBpGNEFnkmLCG88AUi33eKnMgU13rGuQ8V9QNJiA99o5Ky73VghvPaJSmHPvTd",
  "key35": "nX1YrxZMujZ3rYyF9kaxsB4gVvw8wup3t7bReEATkP4stTQgoyKL6ENUjSZ3BWQYmKPHsdvkxWSrCiauRwB23SE",
  "key36": "2MigTdgWFZd7kZFpicpzk3vkunCg5n1hjUeL6awfbkL5Y8qTQvRayjBGPhf2z3fCXpN61gwNvDTVtfep2gGmJbYT",
  "key37": "3dUb6g9Py7N1EWANPuwJH1phhWUHeBcQ9WXD88XH5t7a6pR2tFvo4TtHb1xgfsY7j2MCR8fEV8cwkZJYJNZNDVG1",
  "key38": "5pejeuMJ1MkmBmn3LKr6ebybZ2ZoEw1CYYmkDLjD7PjtUQeaemCeQaeMCUXZee12JQutszx8pEFnWtThLtK4NDor"
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
