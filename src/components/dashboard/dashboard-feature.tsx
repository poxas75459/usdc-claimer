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
    "5xLWapFnzAzHfHcLQWpCjhxxdEopWbjZFN59nVonQU1ANjN6XMr9GsctMXonqmYWSSnNN23nZdmbzekAnfTtRUnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25FsK6itcMcsNqs2kkffJpMXtmmPdGjQYKUztQWQn5wATCsF2NBUmGXASkZFfJ2zcra3PkqSHDAXC3TFh8cwuRCp",
  "key1": "C4yBnz5JTjg8TnGQR7KXixfYpapL2XWcH8xJgt9hPBzkdGcZzrieHqn8QWB2VpvCUwsfibsRv77Le6xerSGAce8",
  "key2": "4ntz5qv21eXrod9MsicBUVc2V3Q4Nhhekjfv7Z8wodHhFNkXGHVeZEMnkU4sAjpf3xujNiC6B9AK2ZFFE6ZLBY7V",
  "key3": "4K4qb5G8gqsZFDQHGLZBsgFnhimzCNJE7FN57QcELsxy9g3smbnMVZyQxLLLvsPFHR1z84sfp63BNwtiDzWxvzSK",
  "key4": "2RKDSfhYNCHMHP5jE4KYgnzVLJ778dDMiA4ueBX9mgwpRN2cWreu8iSBFnn92fW3rGomBDCK2CvCCSuBG9rQ7vF5",
  "key5": "4ij4ECurs2xnzNUbPs42HMzfsHqA8zRrqsxVZBYZRpdTzwKo847ux63kQLErAfyXSQyStmVc4VGc2gmNfgfo1YhF",
  "key6": "4rssyE13RFbrFMVM4vRjD1DGfjdKzMvNqutvnVAiVLSnNjbZr47JLcSNrgESknjB1ZYHYWJAxBUmBsGjHFwC1zve",
  "key7": "3jqvNy6e8kmAaGAAiGUVFkSw8ivSPqtMx5DxzfbS2JUsV2h3XLEcLHR3999sgiyDtG6aw7qKpWfhVPoEWjc7BGSN",
  "key8": "H9TEVKGYVGx1QTP8PfdpvoJfuK1pz2KLnSWAxJPsVCVbcsqiLkHidiTGua8SD9r2j6eSwEJU2j6XgXXEuJ3bQzs",
  "key9": "5KYXCMKvo8umCKoKhCmMM9d2ZP97EVuSLDpZZqHPzMe4zShNAdGKcHFJfQHxGLfqmEfmV7tYSkhvsdbdjf5mwh7p",
  "key10": "2th42y1otGFNKvZDCPjMA2TcUaKTR6KFdZq9QWzGTPifQiysYscnaEmHFbZzHczytUanubDEtZ9pbtpWpAcjwxpd",
  "key11": "3BhZ1PirwQZqPhwoLDvyMENK6KeSvckELPm2RmXTgKacHgzf8M1kEKdtBLQkEDW5pVgHiBHdi9CSrMw5kCcrJy79",
  "key12": "566YwqsWP1ba3KGkewAYLWmeV4vYMwszfKqT8QamFtKcG5h2LTaNBhdavLsFJvgDLjDQ49w1ZXGws9UPEQT1FNqw",
  "key13": "5ocbkxeVRKEX8qRBY3AqvnSmz57RD5wsqfA155Ad7acCHcdazTpU2oz55JubWNHRfeEguhciTS39vj7vGmnaEyPU",
  "key14": "3dZsjbjzTdRJPxgk1ruLxBQ5MD3ckYiwiLNy927nLqJQVtbo1TaRxd8Ne4YQozYqLPhWu1GK7Vs1o3DnUahDNN9k",
  "key15": "5SHt5dJXnWo4JXoQZgCXRFgeysPyVvkPwTAoVr6p2pgftrEBA7dG4NAQJaczcXVsKaN3bJaAD5mM6zFRASHKZM3m",
  "key16": "3kT7K75iK9PqrbX7aG4k4o9MShgVE3bFiGQfQNYUp3gi6DubECkawpSZAeBUbSuriL6t5bE2xeuUg9CVXYW6ynt7",
  "key17": "4waPE4CHATmrPvguvhFR77bATZwjJeeuJbV471fDk82gprusViPHHXLYh3crgefraUnjDcKVkpdQMSfnr2y69dnA",
  "key18": "Rgnp8nBKTNWarsZ8sDsZWcJioNG8VQ1Z7vdBhXiSM6ENzZtgWsY9CssicxxGcpppGB7AJVaEENF217B852bdcVA",
  "key19": "3sZng7GsyMBJfYbMTEUieBj1YAFQDbz3cwiSmfk2m5MzdowfxSDwMEQZEEEZduGzXYQFUEAeswG294KMrc5vJPDk",
  "key20": "3MxdATeebzCwEjcaqpHAV127bp8DsJ7dYzqruiGaB5itGsnX51fGXtb2ExP5d2CZvbELvVJwgaj4GJk5hcGDzKRH",
  "key21": "5AJWPQBFaKCC83syJF9AXw4QkK6BdxMBJsb5zJcmbKUT1ucfjZhnAdEwuY8tfG3qANaykY89qJBmkcBwEpcvPX1H",
  "key22": "9xKoL2nCgD7C61p1BPP6PAU3nvwePdFMZxfaW6KiWZLMRVp5uCPTmqggFWVBRSTybw6dFgF1tHo9hxfNu5viTgB",
  "key23": "2gWPAew1qNzLQBPBGSMS39BC9XTkBsBkbN9ekR3U3CEguaoBc4Kye4HophHiBshxGDVBYbbcLs8jp5ViZrwvXx67",
  "key24": "4jNe9L1qJ2wToyC44fPWUWondVkcnnPHEBeP4XvyfjYoGfrNZPrR9q4N3Q4tLdUF8aG7uydHynYNcgdZ9xURMTvv",
  "key25": "4Gg3eBnSTpvoTBEyNpP7416v8j5Ruv8kDi6hYFG3RocBpm9o5qgRszKjPKgMtThDH5oqZtx8utt66FnG3hfZoUuc",
  "key26": "WSkPkfDqQdng9ZMvjpkkvq8JWj1KkSbzCR5PqHWqpCXTevKAes29hiYpqZEaAV3F8wAmEy9mjBLkdSUcoS5FhpZ",
  "key27": "63w4RWTC8PPwvEwfELRYJQM4VPBtwhBaGrHeD3db18cLNk2A5n2FQFqjuFCrmx1u6PrKfvN3JmfmL2iZ5NdB3fSG",
  "key28": "2U9DimdEUAHWZkCRwVWwf9EAqjWis8RYp5Kvd4ev9pKwv58kib1kisEz44Y9xWTRjYkxeYhXy1yw9rEEMFfHrKRf",
  "key29": "2JXp3CyTzhh3TSs1EGXonTwFPLwcN7bL1gFDMtfaVNkzCnizFwWATW3JWJtQ56ho74dckEVw3Y3btMhR7bNzdxE1",
  "key30": "21qRHCWvRDAyNZ1762eUC8KJ9bnWtbNurpi8x3jzsnbR6u8t5zRqiDFt8JnAV6Zz7HMMfYDmaxq9usfRnMHrKZHi",
  "key31": "2yZxFVxJzYixUxXEwV2bvrWYMqGNBAa5ruPKwHWTJqx8ndkjq3KyhGucLaoQjDZ9hkmSDRT82kHMwDmNb4c1ToAy",
  "key32": "tXEffHQVd3P3WZbW8GCuBHUHz2i5SQGJW8NuvCuud2Kd7zceK2VAiU3ZybCgqXNcBfmBAe8FFwzj96RR4qodEUh",
  "key33": "4vnKpNqZmtK6kmFGrTozwHRnunSe2DxynrhnPQEAQ9EMrScfjGNg1NvFptnw9acEMNHa82H3ARvCXri18DB2uGBc",
  "key34": "4mA3ivAQ3XaJF4QyYteJHknTMUrHcawudgEgrqqLXUz3yG2ffgscfwYFnat6GsZKA16dumyGhC2RCgNBUyxNvnxH"
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
