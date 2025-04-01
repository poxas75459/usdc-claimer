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
    "Wn2z9aB48XT1nAgYCiL2FePzDPdqYM9MrosZNXT3saexRGqwnjf6h4hfBAevhKmsfsp3jRVgz3amudv5MwQw3s3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dj8VDEbZpEx2DhatgDrnGY3gggwkKNwZz1MKFgFSX8M5mMJH7sTLSz1VZzvo6VSMpP6aFeBFDUdr3h2JjGmW6rh",
  "key1": "2Do91xhqn5JjEotPXR9tpaYPSZjPH1UEjHxeAz8o6WDbE1dMWwBH19HT51wfKTZmte2urz4S8aQvC8VZFByFfsoW",
  "key2": "3Zme49ivvLigst8qMznVrdwKJK7Abp3troKeXcaFeutJbFFXmUrmfiwMUzADgDex51mZXv91RuZexMEVZroEcDuq",
  "key3": "2dXQpCvdPhsY2tNayQ2XWfvaWJtWhSkSLGg4DB7vU3jCqkKNJ5wEVPMfQLWTbGT8McJJNC1DzCpqQujSth7xA9Ao",
  "key4": "3BXLpG2o1nUh6MRpZhD2dQnB1dHmVBYgTLfCNdw6RcutwZZQ1m6arZ3WHspnid7WrV5Pt4tRDLfjAqdPdRJw7qKc",
  "key5": "4BfBh5uwePeRbuqqV9iHejy9U2R6kEFBRJsxzdi31JDU4P8yKPZe2DjJ6D574gFQJzzWHCeHMsCShfBPm7jnFAp9",
  "key6": "4Bpqzbsj4GVAaTHV9H77iTKpzF4D7xVrxJda4uQBFyhqimC2VmFnsWBb5LUjcQn2k8VvGux9gj8PLcZAc6x5LLj7",
  "key7": "3PmDgBZ2CZuvkcDHvQreHdDCNMrur9M17rB7ZcC3taxhrMinpmttoNzj5KrpwVu6B4ir7YQo9VYQHNRxKxPNhn4D",
  "key8": "4VQU5vnvddVhFhvvwPSSvQmwEakR6Sx2Xrtr7PwX5SD1MxSmzhAkiUgrydTQa6wLms98wsHRTACt8xHMHCBeR1DB",
  "key9": "4X427xZdLduHuwBzFe6eiiLvteAtErtXdRspXNNWD7vtGPWdhFPVsxHMrWZSzkCArs953UBzRZwcLiJbbyBnT2JW",
  "key10": "3h15emJopbs3SaCPruj8FhQSsvWw2QeHw6NmwrwwmbBUvWB5s47xAyNAo8fLDkhSiyQYxACLHX3Z8uM6AkZn2rQo",
  "key11": "rxKkDbCUEs6wzEg8Udy14TNniwVwqNPG22MicmAdtHTbzi4iMDqf4sx5Mn6P81H6iAmshxAZnaLY3pPt6AxRHxo",
  "key12": "2y6JGXULjWRPhdJTYTbG2CC9BwBxdBBP4WpL7VNhyFdPUs5Dae9xSh1J4kNnSL15tY7z96icL9hca3zpHApr8p37",
  "key13": "4MUCXf46nn42uyUG6NwcHCZmwPMQuUYnv21xFZGPgEVb9Bh25yx7uHQ9hYVNmSvH6SgrbNr78JdHnB5aoJGMfayN",
  "key14": "5DfsM2QJZ9ftLt8yZ67pC22roJ1zsrW4sE2GA4WeH7WGfvcmJmPkovw4QwQgiRz3h3WB8tqiipjqic8Kmg66WJFL",
  "key15": "2nL7ZF4xezhKn9pNd6p5Bbp22KMPxRQ8JeiBUrZc1BLS8i9TG4wtsGhbEFihbC57FzL2LmuqSQJknduQYFY6jJe6",
  "key16": "G3EqaQYQkkx8kim5vED5Shg9RipPCZCLgrbWJwuHzzm4EDeaKZETHq5PUQq2RSpdrxjgAMztqMbikYjzZWPRXcC",
  "key17": "3WSEpmGNi4b9bjhu7RCUk9aFz1i4CuNqqyT9ad4aebdmrxrK9rRu4LT8HgmAYxBjLTmdYupozvmBMNxWGnyY5tFM",
  "key18": "3cbEfN59AQ7H7wxj7XYhDVKsxsiBVzQCtNNL3oaK5hs1GNTZ42uQ9o3X25jAxb3JynqzFoNaDLM7hwCMZimemKjX",
  "key19": "DXvtdAL66X42hmnhhmtiaW29TmdkGrKo8HjpLgtkSKKc9y8jhm7cNfkK5VTJSAZTtVkFyAQUg3MD7oPjJNgXjqN",
  "key20": "vz178CCHei8BXKGsLeUEi3mgBzsNGvHZ7BSDc57Z7r7mfrZ3LBEepqHNn2o2yNkAzBoahaaADbBCZ5mULs7nyyB",
  "key21": "5s9aKVPHd4rhZy5dN6egLD9Xk23iuADozwHXB3y52RAeVa4z6WBVtfejnHVXfCb8Hee78m7Hq8ybyZnB5nMqPo4r",
  "key22": "4o29t3TqrGGhtUF8LCsWssZ5yZ7GtMt5CbmaX1hCysZ5fs4XDYT8Ajj1Y5erSczLgGKMDSFUBZL9aTrrbk4mX8mX",
  "key23": "4GzePUNGbZWHV6itfcJ6Q13CZUEMbKEWCM2tPwTfoGAVUT76pAuxo8Lra6UbVSZjWFJpTCw8c3GJs1p95FZJdBcE",
  "key24": "4oUbnhTsbUnw9GTw56FZk2cFuMMkdbKjpm6sRQzdm1wfJJF1UKwP7HjDfnFre7oJrnbVujrXhH6qyuHaCHxWao6M",
  "key25": "5p67pTSv9tRyLMgM3ndp88CnesgHYjLkEDE6SGLugRmGYUaB5C3byvvoFWqCkJYDtFyHCXDPDGRYT5Sn1NctGn65",
  "key26": "FucTLnSqNz85kgSjehmQDF2gjM2CFcLXKMt5U9AANvfccPmHKaXi3P8VVr93Q4Xp8LHUtAieE1kYVwSepC1yd8g",
  "key27": "3E7KgE4fCKUyg52eAqEVMCdtJVZCQ67BVJy2uhEm3c7j5EAC7DNJJkwqfMa4njjnRU1P3NE177TqHokG2Zfsm8eS"
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
