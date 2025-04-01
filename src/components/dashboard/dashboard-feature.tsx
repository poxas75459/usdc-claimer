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
    "U8CLpAs25wjSoqng8R7G4xkWpFcPfxqijTeg3bCCdQtfYJXoQh2EnCMNqGJ2cNvaJ57Xq49DY8JRi9Nvfgr9JRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7tFjhELpyMyrixnTrfauBSjZtV6f1rR26wu6P2utQuEQq3aGELkX2CgoYEgg6qWNLo5CMZ2UDLPZuueaf4K1fV",
  "key1": "4tmjqzAMead6iQChA3YGXFUZX5qYCAubY9tP7h3Vw5MWa5Qwp5KvwkbhPKqCCYRjyRAKscm11TrupSfEKWzCej56",
  "key2": "3sqaGJDp8FHQDNTQUidN7FUnDoeHDWYN9ghjxMJu3H8Wqub1VCC9vkRaYFsjt2RYz9gf3DJuPhzb3VipVm44TuuQ",
  "key3": "4XMeTKQcgB5qNAZ1xUA4Rz9s6gRr9eHjLreNf4haQMQpX59Qd6PerB5Na3FsSr6pFHcaphWVsiNNDqRz8Tnt62yQ",
  "key4": "5Q43G3kTDK2V2H3W5u38HwYuificqiYRknpyChMFuQrr4PporVGUwQCaurLUg6kZrxCW68j8SZzcCkiHEUSt6Vib",
  "key5": "3i9Ucfy76Mhs9U9BQLbGRmPQFvpeNgndtmhUZMtVGxzASg4ab26BwmczLk9h9Uftbidcj5HT1MRW5AmVWG4ujqp3",
  "key6": "CjqRdqrf9NyG7bvVorFMif2y2icCpJZbf1ESTZDFjtw7RnCpMtaMhXU9AiVejUocnVv7uZvrrmYxoeHYx6sEbs9",
  "key7": "3eKCvWcU8575a8SwkkgMwsRiPqjqetdbijf45maRZnPyTLMd5Yis2ZUePLkYFNpRPR8uXeoXK3yG6REfzhqFgz6D",
  "key8": "XJrFhETQLWHzUY8pRU7NdGk1QWFSaiy8pTKqqTMognB8c8xeSeFUPUJaaqAG7kws5pA976XEJLMVkDtDRrfqT89",
  "key9": "5RxX4gtsg5EtWC7ttLHqAKWsNXsQE9HKtrBr4Pko9eS382URsDKUoJFZZXDor8EjPc2i5ND8TTXEGqX2oF8V9Ndt",
  "key10": "2ukhnw5ANFw3U1MTF1wuujAvJny77351EPE1sNUBvGxnMo6e3cPhp4JWKSy72zajEjSCH5g4F237UoQ1rAFZVSff",
  "key11": "4qNrjUo42uSrFQnquY73FiXqPdtbYJYC3pMRFb9c7mz9Zcgq7PiG9VGWaJkQNYAnMhNnwtohkw9uDNgryiWwXcPs",
  "key12": "4Cckv91ZgZEsH2pXXZsmvJEozNRfedviLwFXp4nhnzKwSMdt726eUD77PcocdMS9QeXBoLBo1Xkpivwq8N1j3JSV",
  "key13": "3Kgy2Q6mrk49iQQ8HasMgYy8r2qpce4DykauT1nj1untuRyzht8FZEwmbwMYr5E3iebmk3pG9J3vtrztsHjvthhG",
  "key14": "4VP8koquc6VJAwpBrgZ8S5uSG5ASBiKShQf9PMphzvH1CktjB5fDBo32A2URPzjJHqeMtmEJM5kX9G83Z1phuvTW",
  "key15": "3S25poPYAjZyvQoEC1pcUxVWKmdtAe9d9ZRmk5hnsU2AQyoqntLWEsjyjmVK4Q1ERH2DD6iusftsur1weWyywCks",
  "key16": "3cSvAb4yu8MsALKXDQd1qX5SQckebzk6y5XuDZQrV4J4SQE4bu5Q2XrnGjmMyTmCd7C6ToeWuye6pvLKW1jHT1cR",
  "key17": "zw4TFKA4Bq3GfWDauLDRaPTayswn3eNPGTMJW7H5izndh59d2Cr889LzFZEuSdn7Tx7uszrejndcdr2BNpTS46C",
  "key18": "4Rn1KfcjQcG67SnB7BgdDi2Rq3HM7FCkkWtnPP7NtcDQbQT3r4BGkVpkgXgNeRhtF26zqutejs3xkgcdz7Q5JdpH",
  "key19": "XhKL7Z8dj9Ui45hcgkBBxMvJKdeBohiBnqWUBN4VHSBuUEyWY5P8oJ8W6w3eNnMPy3yCmby2wbJYc1LwH5x9myD",
  "key20": "3d3TYLnwrmgMjVtPt35FVuyhq7Nfr4LkibTTNv47Qj9EBnirx8urYRchFVZsHBSLHEut7XakE2BMUTihduAB3Cym",
  "key21": "62QkkTWq1FKdhsoSMAwnwrDZVxFCh4RS1eUCc6UegD6uYe17EyGnUrKxbftb2GxsLMborvaKMVnk7N1K9XY12hUm",
  "key22": "3THEzcyYyW4ekqAA5tQafZcRh2mcRa2aiinG6atze2xMs7qVGpNaAAtAHYShBTCiFZbgPZ3dcAzTYhAhaPuoy6Mf",
  "key23": "66Cvi3zL56Z4WEXpduHDeXnjdrdcert51LAj4uUoZVHmFuXSzHqUgPtmc62KENRdh3hXtDcc9ZKVsZcxYYEga7Ro",
  "key24": "3EEFScHjhVDCfhh1UVG63i9YAMNjzmpwderPo5zVrR9fX1NhmgGgaJjVj6HBQXQ2rn6cRLqqNw4nhorKZJX8uV4h",
  "key25": "cLxLz81uAF7VJNcwBEy6uWPJTZ9jmyhXWGoHkPf5vqsc7SBj1a2vsXvxWpG7PrMP23MVJH4TXhVsFNaaXLLuDtJ",
  "key26": "4ZzFZw8oU6C7sVc754M7pSFbGMCEAQpiz1JN6dL3vYVfTVDxg1pM6TBfxnGSqv8iDWmZpfhaH9vA7cHZoKKFP4bF",
  "key27": "nsygWd7uahw5BAhAkWDfPiigb8YvKAEB6ynepCggdsbEFEgEBkjhToJ7aF9s6bYUR7m1xHtgJ8wMmt4smSZ5syR",
  "key28": "48fuEcrkiPaJ8RvCHJ4otPckKKPNKxAtkCKNmspCjSmC1saTmdS4N5b2eqz1m7euA8RYBd89wjeovPV8jbcBQ6xk",
  "key29": "5JrLZgxVUpiirVMXfNyD7FxZ1XmZHCcGTSmypghrjG6cMYGx7cPt6xWxB6kAfvGfUELzVga4HD5kgWZFf7XEdJaV",
  "key30": "2q3azYPUw3vwevjwogJSZCUEQ2khRjEkuetLjqvkC943yayJiYCYCzCQoft9HS3j7fSsEzbknU4pgWJghQYicnbe"
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
