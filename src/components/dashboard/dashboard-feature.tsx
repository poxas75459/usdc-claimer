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
    "hqPq1sLYQnYYE356bbphJx43SDdvV5B5U7XgjzEbGJoKZWubf6xEcxhHTxqoE2QRhiKEbkvanyscAthFtr6bySi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7vACEqNcZoHReWmftgSUo1qpvJVqkBbt5JZsp1nekXvB1dDD2mzhniN9FDJqZT9VRyHnet8wPrVy9t1k4qnGhn",
  "key1": "5KVJDUJhWfRSv61wTss7G6Fo8SwoM3gHmyDMNSnJbPFrnj9msY552CL54fE4aRDEWL1RzEQG6TF5Z9EN7qrbjYBT",
  "key2": "5iaL9ehskQygnkeumhXBJDEfi6i9w24hMkhDqRqtgN5TtjHZwnaZq9G9hLm58Jh3Q8Bi9Zoeg83D1QLfcYFJgYat",
  "key3": "3rika6D8cyfWzaywug49tm6mKbQaG7uE724mTsUNJiZA8SphK3iiuXGCu39HnYjydWHJvorfS1Jkp1vqn8zgE31k",
  "key4": "2eodnoZ9ACX3oCpoEMsvDb8jbf5WaKnXANu5rm8UMLS6QMugeadvgdZMBro8RAGPHejTDv7FJQjmneEmGvrGuU5z",
  "key5": "5WdypEkXQLYfSUETrbmHVwsnq3P8angdnRMqFe2jsrVfX7g4n2CdXh74DWyKxmg1yULGB7EpxJcSvDsK95rjU7hD",
  "key6": "47vmrj7VsEaC11gUT4Dw9jmaE7cZVEwaVwetMHyn7PbocVxJto5q9uwKnMbu6sHtY65kUGhEjEMvd64zBytAuiZk",
  "key7": "4MbBbcSkQam7GbUigyy6RujVtYKX2htgNi4yVCF7G2ycYHC8RzXKk6g7moASyQAHuwTQdG5a4wxrei3mUK8CwtjM",
  "key8": "2wzv4qAp3t5XYrfBzBr4zV9AgCywfACWofGNntQaePBKV5sBPtBuVeiRTJAjZDrRYFh5xeVWdySXTGtdBTNa8bZp",
  "key9": "3nUguMdTDs8qt6Ljfhh6EtHRNqHSNjuGdK2kLMJsCnCDeYxS58f8wkt2vMCVQ5zPRYgvCXBoN4Fzq2bPhrNobHU8",
  "key10": "2LmEeWa2Bxf1h8NfKDrmFRB37knEbxEr7Yg5q2LL4iVHhS7ExRJgnd2FGMk7KNLtM36CBqgb24FaP91EH4WSEVzR",
  "key11": "3hWYosmsG9ukZcKY2S7WsYu1MrLmfpXViqRk5siAwkY6CBVtjvnUQtqJgG55JnYVb4NAQuB3V75mgQprFvq2s7qc",
  "key12": "3hs4x12zpWeFv4KZD7vYunkK3j5cv515iQuxmKgSRVzFBhTwYCEvQvPtgjEv7mxyAeXYhMH2GhWr6fwnwMjYbXB6",
  "key13": "2mVjxXqdngcxC6e4Cx4duCXRaySYrDmqJuT5Qx7XS8S8HrPoqP7xSpPoYKypw13P6UNPSip2PN3nKcCWNEjM8cTb",
  "key14": "3QYUFCkApp9ptg76D81GScSmYSVKohqWupFfQSTprYcZ3SMHuR4gKL4Xbnoj2zVdSZLExpp2ncQonsUygcmYcC2B",
  "key15": "3odxEdQdT3wSvcem96iZgCr4vuEfShRWmGqKr7rvz8jfXTAtxUevXhA5NE6XaQaH72CwtJbu7DGp8JLKHKGnKoV6",
  "key16": "23ZprURc5UAXYRLCkT7dhBchxZQZ9TwNhV3tSd1MrrZdnw18uKW3QwciJVKXXCmMg4U5JQdFDK6XFn75fpvSQrRy",
  "key17": "4uDPo3ya6HbzGx1SXtSP1cN4WwNwjHsP7wgdEjYGseESuJd8m3yqiXuAtxv9ipXqiMj86iyvA9CaQU2QM7ci3Xkj",
  "key18": "sbYHWmNsK6jNEqcz25GaPVv2zFMLp46MzYKG6RRbnR3vXTYm18cLuxofwhReAqqW1VY6J7NagoBPZ97Lnyq2RuT",
  "key19": "31ahpU8AXRjZ8jGHmoPUx51cW3bMG6h5LT9tj5g8HNXhry4WzWhtzCJBooig4HYEA68EEZrD8sQDeiFUjFeNQDaP",
  "key20": "21gpfrgZSjfUgyRT8rsV9jWuqQJfzabSWZLL3MgdUr18NuWfBTQtARWLLzXvKvzfchPxL1EZThPegB3zSep6L8cP",
  "key21": "3HrNFiWtAYVRTEsdcbEodeP3u8Q5bE9ZS8rJ3wjWdPuKW4fjQ1ZUJb2upNnGV4cZM9N3Dsr9boM6eLNUJNEhHAUD",
  "key22": "5TfDFRhjYNHGDKCPw3zAPyUMqzFcKspG3GmUHz3S9fSMnD4jECZ26uS2sTw4ZPApRZHnC6DY9WN95Si2nHz4o2jV",
  "key23": "2hH3yqkwGYCGBuvAgReCoE4HwghE2on9tBxBZ6hW72empHEhnRMpthN5tHxe13m3y9J7bBDDeyMwnuexDBn5gwz1",
  "key24": "3KQRtNVMJMMhnmSSSS96qHz2D8z4pivNVeVsYqFAqz8qBvLmPW3EXbDVjE5o1bxyVkQBntcK3tGjXnoUE1SDwSJc",
  "key25": "vA55z4mrbComhqJeGGQGxhq3nqCXuZHduqJk7nVypfwE5ZgiyC37UeoG64bFxJhZcdjU59qhCgabFbABfWWfqhW",
  "key26": "4JCTKFAPYFjZM8XggLwV9d2qXCJehiUw61aSHaa2UQrMmk949dGzZxv6BYD2jaX9Q1uUp1C2PDPedHps6xxiQzLf",
  "key27": "YdvSJiiV6fkkuUXeAcCoB1k5QqzqGiU82hnUdpHguQWgtf1ebHfEgNdd5dCBw98JbY1n8e2fVDbbJ8CgqZxkYT7",
  "key28": "4aS1adqhSqRo3v2mFeXna3a6tGZqFHubfES364T9gi8oczjtQLXRojFHk8CdqVVWcnT6fxuSTU5fvCPDAdHptpNQ",
  "key29": "3dkd9hW6kjmsDTPd1zFoPrtr4x7zTaEtUb5e8qwSgiKwyXiiNsTbLRJfUzvuMwSXNG8GM7hzYU5p6fkTwdV1BFVF",
  "key30": "4h9KvGqrU3iHNQ7Q7nrX2d3pYNsAdTnxCkCXqX6ni2WYrb72vcLXD1xTaFVTcnc2LgKLCQTAyhCFBBEHnJVU5kiB",
  "key31": "4qjNUnFiY7SdPAowAZkmaipvYXu5FehpywAa1DU6SP7pbcekPY65eJzQp2qk2cAQii5G9rHa64BtM7NGjcC3P4ed",
  "key32": "3gJpyiYb8MmEgsCdzsN6fr1xCh1ENN9shaSY2czASaBNK3KXZkboXyd8csvQKVPe4uz4E9C3EcuoZEUbJiyQHixX",
  "key33": "5LLKQ7PyCbEKSRLbTNFPbCPQFXkdZLd9mGamGdGY9GjUFGfbquZvEunCHJr5Sgz5wtcaCSuD7DxWcqArZ5jCQAcC",
  "key34": "28LQstKVDfcs8zYx3gw9CNNrLeiHMQXuJFruJkwhggP7zfGN6UtJFKqsvraqUwujSFKRtGvjCmojJ2f2C9V9eooR",
  "key35": "2qBoQjq1WtbpRgH8PPbrRfC45fedb3GRnJnyE8JJjCk5WBwPHNB4Mqj9JZeFJuMnxJ2KW3Bc9VbPMn3DiwV5vegS",
  "key36": "48SVHbe5beZSJQ2ojB6oav5p6Q7fYGP4jMniscP359o9FpGXnWvAvAuqBPLEuHw5EPo3PXdCj78K31HBUwNPMmtJ",
  "key37": "4Aj93H5ufWQ7Fm8YvnnEYg6Ufmt5zv5pGrAYBcYXpKGB8zZv3hqB4gkiP5ugf76ewwwNAaMUFYDyCMweTM71eqy9"
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
