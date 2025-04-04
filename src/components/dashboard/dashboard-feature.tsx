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
    "64gQ4536Bk9Y3o2WRL6rqfREMcTxdBrjvwNkjVCZq5wncLEy5yMbN7eKjn2axPGDNe6ES9L3pFMDFHWGXbtci8Ye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64xkEZ7RdYdurzbd2M7jP5gJvVcknYRb8w5cLL59HhCEaJjwc5NWVYAjvBYaBcJ4vVsuP2ZgkZWREqLEktRsBV9t",
  "key1": "56BEMH2ewNrsUbpzgmcCRLqBAjUCanS5DRMjvwMR8EBD9BnfJN9UXqCM84C6Tpd8g64CAFyRaG5b395n4HsWe8Qo",
  "key2": "4yAPJBtBdBdFb5LkiZYxzM3BRzzMwEXBZySRx2EmvBNHdLXPzuypc41GRaQGUiu3dcw3M8YefizXRKQuMTuw1YG2",
  "key3": "5K519c3FM6tJERUvXbvPLjSqap3y2rmNzLcvd2swkmpLgKAMNTwpVSMCmtApKDLgRiZU9aKToCfrU27ijoLvFca3",
  "key4": "2T6xe6teG2kER4AJmwNtjcQgcURQbN7myGHmdUMXbEEoq9n1brdt4xuhKEATF614ACqowUUngADkRXuRkxgv2Eqm",
  "key5": "zZ2hBbz1HuQqrBVMLwVtexxhVWSWbrXBF19wzqis8ta3AvjVBjn5HUfdNQ3a54sSRi1fUBdLJGNj5Yzv9PxgKVi",
  "key6": "4GaqfpJGm8Guias6fKfbgwScCjpemTpxjTzJcZHVqzDe5X6EQxdUGoh9akW5hUXnPvEr1FBKorbKztc6BnQ3K9E7",
  "key7": "d4w34VfUY4Zgkgakz7T3cHHyAEAFiErN1AsT8yA1w2Br88ro4dYaW8ugN9EH24Ate17iH6rCXobcQzcZhJmLbWL",
  "key8": "5zV8p29nE2JKouXUeBEPEoGczyQSPzNHgt5udWDB9DzDGCxRZbzEpALDUByqf8gz8QQaNXVu8dB5b2upguvUjnUJ",
  "key9": "3tDCUz3YocEBtJCR3fnajGcuBaHLHdnVZBbUbPC32pja2wyYgreg27WE4EUDV9pRUv6wGfv8DPNJndTP2wnSFYGd",
  "key10": "5sF3JNnr19qLTudnfXKmZtH34Wu7zWf3v9NKBm8MrQAS3RyJ6GjEEqHZZgTDxvkK6j8UHFqjUXFJApwuNEbNi7we",
  "key11": "29JThJ6hDMRJ5hPAkzep2fCSkdUiGUeCPUqqqqsQoXX3s1cGARRSQcwcwj1hLrhBkyuqULmeZCWTbBENx4cHqUzD",
  "key12": "4DY3MsoRBTzy6QN2KU9SkHmTwA2Q2KNRvpTrqzdjFzH31LE6ZSXtNidMTMrnQ3p6gePuKpDoQnormAoifTYX9jwA",
  "key13": "4F8KRHCa7Kt6btvrmNTuAFbpf5SQH6TBCC3eHekWkzf7pao6DUezkngW9WgtPufZYNNwVfAoN3rjUdZgMfTqUYct",
  "key14": "3zvBqE6qkR68qxR98S5LnyW9tUSx2zvL1MsHbXbesVUYaYjvawBKeXrPTu614NYg7yp54tY5Axuyf4swj4bNqmB9",
  "key15": "4irs1rvf3TSHX8yjZQXGsdr3BiDmERDTm4vz3FWrVSNCtkFKDT3sJ323zg7UCNjCVp56oc7GhCC7PFMQNrFSmLaA",
  "key16": "gwRJbVEkCDcbXGSvhrasHr67wHXo89GKudCKSASzhQDNjobcT8Vdy8i9xR2Axzk6ixncBDELqDywPWPNB8UnJGd",
  "key17": "2NVmkz36bsPtHwyqTTJdzkbtfTPCU5ChiSqXyEkYCNohRJzeE5mTw68VBX3T4as4xSmcXTBQGEayZUiWn4otcfaU",
  "key18": "2GimM4FJ1EP4Y8vVhjYxFs18cRmWT5xm6tCYkxR98HtmugcwzAiSS9RDsFJM5cUWWhTk23HBEwqT5RrHDWT2qmD1",
  "key19": "4KbhPBf3a6GPCTcSF9p1VjWu12Tz9G1zgvBXkRBj9cEjWeufjFaWfnbijKghSpRL3oZcTkNB2RYW2YddZCu32LSN",
  "key20": "qEh6Zn3Ehoyyc9rZJ3tKQp4dQNxx8UL8JcrdzY9J4KMKxiT769AESXV9f3tK3UM8rwa7g7iRvR1v4dPisxRmGuL",
  "key21": "2RgB2Xf2vHA3jPGy1ZreN3BfGDm71ToTUcHuer3qUSpM2pbsVZWYU2jo8L9PEiWwNuZLzgpbsQq3a5tFL7MT3N3Y",
  "key22": "2Kk5W25pgptm8NEkSQ3aJAQonbgKepMyw743tTGELM2bbbznXuyxMGqGUjK8NdC3pGav9iCRFgsfEvc4rGMDEwG8",
  "key23": "4geRwWZ55YfAeJuRxDCMKuwjzGe6kDbNyqMFPkZzfBbcNypo6nexcKB2sh5ejJY3RTCKWzRXuYm2wbTaELCmBiUs",
  "key24": "5NCKPEjRRSo9thgJc6tpLfEMmivQwAwnvGYA61vZWg2fjqpoKQQdK7wumM1JgC3jNvNdG9ci9zpTwBPBhGmJWKyU",
  "key25": "3MH992d16WLgnWdjM4V4q3YLQFfLzkjTwBTcXs61eCw8tCtogxhKTqguv2rWJWTZ875jUwHLwm4FFGGufHewh6Ld",
  "key26": "4zwnKCDjxUnqY8zwTeiDdp3pL8wukM1M36c3vzSAoPKGtbXjLWBt8d5XUpZEhuJWoHh3sc9u5gpAh9qoexReYhKu",
  "key27": "5eTJSPSniWdi17tUdSSqBbdHzAr2H3oyjkcmbuXDK5j7ycuxXq8ATT4YrShTGN6YwpbLmqgPn6t29SFbBm9wEm6g",
  "key28": "2wLcJtaqFhHETC4gyg22W3w651H7vbSADj7i8ec9dPKrKxo6fADBGY6dNG3VFez9TXjLCvcpreaZtByAVHhLJRJg",
  "key29": "HwgPENVhFa5X1kwtoxM62svmtTMAGvVuYZFXsGDEcPkurVtwYCXFkMDvzAVw4tCBdnnjURhgEZ5k47snAuEtnco",
  "key30": "2STaeWfC4BnKn91PFwymF8vBRKr4fUBHsZ3uP6oAx1fSmx6YUP1eYHj9oPGXauQmFxw5hWJarFfsVPCEWywG7SBc",
  "key31": "4841XWpyBm8KWGftwZMiMmrRgcrrfgJSTPCnQgFg2KugzNwbTVNMy6oDa3sZTntWYjVUmqvirFj2DBfdxBiBJknS",
  "key32": "Qq2QqGepAjwiiS4gAkZo63Mq9RUbFf5DJytbQbxAH8VUGoofptLJEa4qNeZRdbFa797Yz4DGteYcEoKqsn7G3Q3",
  "key33": "3gqzDZdcRALphXSowGj9tduPnbwFzeLbnwzeXpGhj11drzVBJkNY2teRSVXiinEbZARTD8WRcFqC6RpEeber6hPk",
  "key34": "4iTeUuSXxtXd7wof3Md7oo24scUoVd9wqUfG9qGD8QbGvcDDUNB47SZc4gStcqitAkDVKGKD121H4Z8B6GsKsJP2",
  "key35": "2w2y43ejTffLHqW8RNQtw845Pwgu2zkbBevmirt2FkiFQmFJBQUCK1n4aNJ2ACkUwcmspG1SHFTcZeMnGbRZeg6g",
  "key36": "2dcJGvFQVvopeNteLU4eosFC2vfcNKY2dS23oJq14mf7DfBT6Y7TuPjJ4mUyz5AisF8p9WzdXKx38LcU8KHM8ViC",
  "key37": "285RjTFPQbRkh3qz5VYKdDHnXFUcycEHQieagYDNPdkTw9F1DynG3ciueQ5tpg4jTcy6DuAn2zVzoQSQq7jxi1XD",
  "key38": "51a5t3giZdDpywmXQ8Hc6VXu8W9iWCwrvkMXZvrHi9NgTe8phXpfqBNqLECjJC7omoxvfHQrBKGTMxdmkyks7vun",
  "key39": "2iqQBuugEE7PSuCrd2MwKij5TwF3x6N43isoErHuebnHyyp7ExvVZMDfetEKvcPaTELYz7bQdVwAc3Hi8cqAXqbR",
  "key40": "UVYqiXGpX4Fc3jc52C3fqBSFgUbuXSyA6NZ2d4rsRArzdmfvG55f8xtfCHL8RyFSe3atyzUmNyCYckBbhSGf3KA",
  "key41": "pB6KoBfUA5NFkrjW2fZVfh1PEbAsudCFVHzdsNYVMbQiwM2ks18TadXNC6Db6YRa8bqUaBgHn8V5DVAW6Ps7ZDq",
  "key42": "4bv7Ep8fDe4x8reSrc8Pephuq2pGmcU71HVJZefHpoPH6xT9dRuSpz1HarfYT3S89pAMcrqHcPHPniTtvEPFHRNt",
  "key43": "5nBgLdJ3VXeQsSAsghA7g4mg4YFbsxW9s7SXZVu94avCts72YLVPGzTz74AKgPBK4GBxMNkvEXYL2y1zVQRgy3MB",
  "key44": "38ygo9LDdHufrpwqnUiZpjzgnYH2m8WS7sQVErTEm1AfAdHpFsYyTFnFLbKUL8oY5UZMDSidB6vP7RB6oEcGQ3f3"
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
