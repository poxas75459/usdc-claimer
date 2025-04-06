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
    "3BmPrk3B3pu3gBBGAftbfoW5jbCfzWdTn74cZrKvpCiZ56b2qhakpmvMcLV38DjGdgTigWFBGHFA7izPCzLP7SMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xw3YAz4yoAJcXRKeSxvzqKr2i12TYT5AZvtL74NT2x81LZnQVwQqgo99KLXHA7R3zbrgLGXd1SrfStXc2HtxewA",
  "key1": "T6QjNZpKuRzHp4w5k1JBoo19bMp3i2bVFYbMTVaUaccwX2tmDRCrPZ9VAaw7kDX1CSH9FJZcNZoXxtyraAtGSPw",
  "key2": "4HFo3YEyJsnhwueu3NxLwyMDULPe8eY7CKBiy2xPTwJJynEfRrNAbFetWuJe3jBz57o7Gdb3yonBcYKXGdvUUjtG",
  "key3": "5JNoRQrF2JRFsNrcLsdiGgsa989Zjf5atrsNJ82XTJ6vuCbAdQe3zynzYjwD2nKWLN6f5XrNBgPDQcyCEr2UnXXe",
  "key4": "5SPvyWzn3zNmH4rHjorqR8ZewK8Xnvzg63x9kZ9hH44LPyHMYqsvV1unuXYwZCvwK3ZaedgSLtN8BBgbXTobN5tN",
  "key5": "yGmjfuEYxYZ2gtRDZXFsNmcYBv3hkZtnDGxTuEsETwcCTxUm5yF66WNi6CysTngvHFjhMZ9PFrLPpy9qMSnc42R",
  "key6": "4YRCBSW6oGtZF3MnZd8XrErMstVwfQyhwrupNCGAvPPEK6Eo5VCGSVGhpeuDq8dnXGnbKcsTax8FCi5SCcvGL1cy",
  "key7": "5xde7F1No44769RrqRfcYVqpAweDDF7TjFvbs8FNYCq6vF8PyzUdXpEwhRWouLzFBwRwhtFV5CEVuymJRDjdoS8G",
  "key8": "22K58JQFzS8TKstc6LHy7pgbkKquyHEvFVSifhJRx2NgYTo5TVGyrt7tdp8451QxYQ6KV8SPBhbW8WC44EJiwucN",
  "key9": "227cXGLuAS4CMXTZkdRGZdmcGpnCrr9Rm8pGj3Ea72YdA82mtUAW1GdyvK2XbcdtN6czWHDYRnbeo7J8m9oRgc9A",
  "key10": "joPb1h8mHsNn1QZkV6mkHJMWiEFnKZXvtJFMr7gVaSHFhmeh8fJWH1wdnKgj5z5UKcF3mru3fNwk9MSB6x1HBwA",
  "key11": "3AXL6wwxkPSohUxvscv8aQWvK2PGf8cbVCgN69ZtjU6RVwKK8zHH3qNXHunpWtjgfNCSegRsBuWjPAFrdq4WeZRR",
  "key12": "4ZMqKuynwuYf2AsrD9vcYEQuL5Kb5fHpZcYF5Z9pwppYgeYkwRLhw7GcEphEwQeYsrgsdx1vXTzDyDcELMBkK458",
  "key13": "ivBgipyDYkRcaH2GqkgHJfBgcYffD3DRgBhUU4feR2QSBcfZeeJ9Aj64Yfvb42WFoh4DdG1RtMbb1AP8hu3rE9s",
  "key14": "62xQFG4LvwX1AL5jDESFozDfRLLEpmg4KW5jTfSqCQ4L5jpCmXhmpZQUKM1G1g51L6A6xgopeTqK1pQadSCzNmcS",
  "key15": "5ByMFio1D5pMoXKyzdhUDGzU5ajiDBfBpbfp8q5tPJyLrYzJKiPdDYuGwXeZtEL3DB27nXtxEmTemrvVCUjNVAfY",
  "key16": "4RX4eZSNsY7tndosRShPU98gjtDxRLRCiuBuYzN6nVC8HfAANqxvQLAxt5w8FXJi5uvCUcQBwZ55aA18ZiniDo5G",
  "key17": "3dbpB7R9qBPHmUVSzFnofSYKJBh4W9Au6UYaiZ9hrXb2cyfSYr2VW89amfnATpf7ZRy5XeQ27Zay9TfhNVkAbRAu",
  "key18": "4vCfMQK9Jews5SRrtLAsi2u6qhJSqGXKqPy3youWj2BjK4qyhkom5vPNFdqw2svsMXyDsG7XczY3jz42x9fZH9AY",
  "key19": "2LnUviLLyG6nn5ZzpM9reNQEnEXsovUCtLbxsKa2oTwX2HbgpT8mxQU7KVdNEHWR3p5VPM9ce3PdPe2kJ6t6ozDA",
  "key20": "4NPQXbGg9Bbf6nf9DmNACPUyUd6dU8aoypvAXjKQa8pTxf8zjs4dYaVcUAjNcwFAcbqZAh3aA3AthS4UiMhXgfks",
  "key21": "5UyDLqQdwUtCyuntSJCtoYKbd3Ud2UrKdSCkdX7P62PKfbj5q776zE1q6CzThWQdq8n86URE7J66iDhRLXX1RiPz",
  "key22": "RLuepKvzpLW8NnmkR7FjT7Gj5BxJDT1gLy8K7z2j5WFVndnNY4rBxhYpdGBaLGXk7PB3Kob4JGoK8oSgHBa8JiH",
  "key23": "4GuGzpj8XGFHinExWouhNsdMEoL1Vu86geU5piNM4Vh8Z4PvKXhuQByAAL99ny3CyxUJ5LfACBpacuz5Qv3xqZq2",
  "key24": "4YYWJfQ4YkFkfSJMUTioYRDdestWVCNEG8BaA9XkgxsMgpKRgEjJ8qE1kioTBUviaH7B9VVM8NeVZSnacnQVPqhq",
  "key25": "4AvyttBNFqm8g84ureNX9QTXuPP1ZHEsCFJ3x3sfsf4UEw9Mz8as1rt7GtdsvLLgv2jXjo3zGqezN82Q3wjJWGcr",
  "key26": "28SHAz8Tx64qa4Q6cxUjwZsRPBoWsKhFJ3zsnLpfjARuLuHAa1Q3uB5rJzenzGUAjcFpFT6pqVcWPggaq5fckPmf",
  "key27": "4g35DedBCy821iCweNVyBWijPkwfimw2EBiXFTLk9MxAx46YeiJ3pxm2qbMXayuMLewRDDjnkw6S2vbQwRfgvnMo",
  "key28": "2ZJkKQHB7cuXFy4kua9ZGF12zXGU6DX36VX5DeSkYPE6YAdfnz2mDVNRconEkHH8aVaGwvDuQqDnP8g9f8sdtNVk",
  "key29": "4F9S1FbBeQkMZ3azeGysj9rzKFdomuPuUn4MmjrWZF784v9etJvWCQsFWfeP5nVhMmom7KsJXkHnMDUhCebruYmJ"
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
