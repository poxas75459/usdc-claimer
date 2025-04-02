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
    "3pHV1i7SmEHkwoaXsqLDKyPWGf8S81DHkcSDSueZoEKyJHiJ4BzSfWM7CyCrL6WE7qYUVUt8FFp4Mea7Z3t3Zj6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XLZMzk6WQJL9zK28a8H3ZNBDAjUN7iARe5j25MqoH2aPbG8xiBntgoJQnenSmdXGghS9N94rKHR8GUfPPEYRh7T",
  "key1": "5Zjp6wPt63aobAoUW4p5kvUsMnzMtw5XetnEEgNcsuQonUd9wYrYZybLR9puibXGRq3Rvsj1hgECwTAURLgvkEEE",
  "key2": "53cF17EZUh9D3yxnB6iWb4BSZ5VuqjrViJ5FDxs1izHmJNFb5BosY5r5rJhkPRsAfwvYZG8bbF88YHNNkA7EsFdG",
  "key3": "2A1gJ5Q85NwPdokuSJKzMDpKSruYqLXu45NU3D7j1YsKe1rTypUKGs3Ka7jMQJqBYPzXXAoZzehJawwiGTP9Ym73",
  "key4": "szbcfJwyN6kZ7UaWcSvtxfFof6LN1jSy2tDHnP5q3mRJdiUaABDEG6WWzMiSizwxKheVeL79mXGsJiiBFT46vko",
  "key5": "swFgA5ZUtqfRddkV5yCt6GLYFaSQdzDi2q7xAUqAj8RWigeCnBnS2yApBnwrLRRxSmAEiHzoFYNcEaiGsfWJprk",
  "key6": "2C8K8rK54sHFvxu2Utp4FZFdmnUXt5d4viMiFfunVBMfdJvD8h7paVHSHTRhhNrUC7zYRoJtPKJPJBLRh8uE5qyt",
  "key7": "2tm4aHnS2WHKagt1EQFUBjbd3ALNPxdWhErBpUJPNdeSu7LRDhggGmr3NTHM9Lygyhf4nKAciWXWSGeP6PBpDqRz",
  "key8": "4hPzcdQtYagnb5pYTeiQVVmeKHMZW7sS5FA9ZWe3ds21xwPww5vNRfjJmhehsogVRqgHQrhpxuNFM4LGTCnP6Ndd",
  "key9": "2oPKpWW72S7iq5QX3ZJcUC9DvWhAmQxwWnFhE2jmznNe3cNJLVBPSGx28UNaY26rbNPZHLY8DmDDhkxC4bhzwkir",
  "key10": "2AHEC8eLNJY2vNenqBkyvw2Lq7TtpLxQqjSYbDWjqHRDUEQsB86JY8YY9DxSaDYZM6hmHnm63WHYTV3MbRzui17x",
  "key11": "2DrPze2gfQkd5JySnrhxmqwegQ8DeLUqaFMN3YaQQr6SGFymkDTU9QhBaYKrNxzUCqZNFqUPQzBHzWvzyzXFvys8",
  "key12": "5Y8CMSimEjNgGfgJYGPEpQvoJixMazcQAadm9LaxY2opjEccKFZAEPZAg1HPLrWQvVkYdYmkUp5JyCW2QPcmsYtk",
  "key13": "3RfevfFZEHejG8yZpP9yXpfhFTjyPRPNkav7H3k4oE4XeLJjr5YrnewnASMud9gwhzHEC7FRCthvu4V7vAQebLhW",
  "key14": "5CiXqbXWgXBvvgJXrsmWfzCkemEgL5Qpy1KFC6pZ8XfMsJk5TjFKMWf7c2Bmju7LwxocuRPyANPCfuHJHFGxDrNA",
  "key15": "KnB3rGEkjKm4GSoNZY7jeY43SUHKs2U2Vo6BDoRNsMUoBvowJbt3ucFCHFwFgLvTouz6wfqFMn8gpBu5z5eXnWc",
  "key16": "62RxUushXVWqi3WxupwFFDhAyCbS5XEsJVbhH6dbv8srWeXaQX7bktr1cYXREvutMNEVhmAoL6Kv1c2vHV5Y8Lmh",
  "key17": "3sDQHNacsm1owokBe9g1sXBJRoKzWmaDV5EXBxgsoVwRh1NkBcPzCD6T63RpuXaoYo6Nnx4qXjpxp64P823TPxgn",
  "key18": "59ybM3wf17ChMMJqYC1kpW6dvjAmCuLfZsV3Rx8d2pyeivHfuTekxoRFmDTWotkvbjLHiNMdV68sCfrsGoCxfGUb",
  "key19": "i5VPyQdzQKpxUpfRUmKxpBDZMmN7uyK5pPELEMwsm8JH8BEqxBFR1x7k9xJBEhcJF5dt6J8hAAwPp7HAcyeLCTp",
  "key20": "2n877Ca7wsR8LPwk4JQtWGzizh9WtNeJ2bW5U5Wu95ub5YopkUVsHwqQz5hSxBC3BUxN3k63jpjqhRzYgd3U5gbz",
  "key21": "QT1aUmmo2zrqBzBsS7Jynf4STUQGiTrqNFM44ANaBzsmtVkzvVHpuyHSFmpdwpQ4W7sgd6Qa4fsZLintg5PMF3D",
  "key22": "5MWCyMzcvb4GGULDcAWs4ez4bRGoi6SjJPyvv3hKdGbvPhPan8KM1ZmkwgQzM5wBvwHk4h53Mkk1goUz4WUVDVHP",
  "key23": "3Wcp1G1AzBtXR45u4kwntqeDPZtSNzccQHWuN72t99DSdoa7QvFqJpZZ8aRVRHVxxqZuwGAgCrKLjVKtW8Xc3ia7",
  "key24": "4jFX7LYAEdFQpW2hbs5iBmdxSZZF9N9DwMPsBT4c6pLhSHTrs9jBxoCXNniQ942iQbX1otKHU1vB67vCkeh3CXNS",
  "key25": "3UsyEmGxTKdBRvr2cUAR6Y7yMw2BMNLHfkZBFJ8nbPTeG4FPTxYcmtw4UWUoNn2weAfJnShoGP5W5AFEBYyvv2pz",
  "key26": "4LxL93SzbQb8ZbAzrGYmRhoX1TGrpyDKaCXgTB1pdDzqzgVWcJTh4pS4J4Uz89KBJHTDyyuwqL3ASoCPE5oNxQiq",
  "key27": "26bVBcXmmJvqbXEPtX7L4pSkxmMn6hq9947kL2GisPnW5ZShY5YqNfjAPSDzfTeauagV3mdjAfjyfwNSs3yHxrwH",
  "key28": "2kFQpEEwUXrtzW78LZkJo4537Wh1DkhmWCq1YTuRhFMhUwS8igBQGAfuhWGCYMzFZ37oe4GxGG8Z2YeS8HrpWbf"
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
