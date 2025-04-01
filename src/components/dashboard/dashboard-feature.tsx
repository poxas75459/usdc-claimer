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
    "2wLCPVrkn8wg78xU43ASXuJyt7u9Vgb6N7jZc82GL317a8TJodWC39GJ2uMiDZEfCKt43XwVZcjSu7yRPxfgK5Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaJioCpHfQhqvjg5jdVoUMtFfLPAp2xfmuiy6ChBBE1eePNXs3t6Lbdr1eR3WzngJRAvCx42VFrQ9z294ryBUPd",
  "key1": "3mKrn6CNGVeqBb1c2Xxozmq3R5vahrPWzjsjnz5MUjDjf5Hq8V5iiRmBUXHeReptS6dbmQLE62prjXVYg73s2VzA",
  "key2": "2UBKEJFvU3sTqGjZv1BdEnBhCuZficARGtdnbzRNRtiStWHyMbddqDm6RDXPGWzSZxFpPW6LT5tyGmwpck6L9Rpz",
  "key3": "2QY84V5HD5JksBEju27omKzNnTC32XsWNndxsZGk9oHnw3YusDWTNVuVgeb5UBGJ6KMdWX9AFfJfbUQwRAVDpaA7",
  "key4": "2sSRprLQAtHV5wDCAkHuY3Da84BE26XQj1NDidosGn1wCsowPMmWrW46XWC1MsTRDrCbKBvbQrmDTxTouy1bgyN2",
  "key5": "3ScXw3YNXhkDzDcuUen5u8PCWkoCJvFmEFTfnrV24Zxe8PAQcVSKypHFbVAjGtAu5H1Krq53oKyKsp1BEo7vqFRc",
  "key6": "56BsGFXMq1oNxcovKwgh8eYzdn11HWQC4H1oVie3LKbGEdK65mGw44PkDDakiKcemwJKKzqFFF7QyqFW3rpFhPsQ",
  "key7": "4A6eQT3Q6oUP51iYM8aY3J6mRXbWMTHW1HJ7RieYk6RHfe4Kjo4NXzrDUVwL1cL8hbtHLTgJGVAAJ5KU3SsHbfBm",
  "key8": "5fugj5c3kJe8T1ha787NhgLJto7Z1wUa4CTkhKggnJ93zGdB2qCZcaWBtsQWPHR1jRjRLgGhMyfNzeCLYWKw5gQK",
  "key9": "CEoAYLFVKELDcZjYWgt4bEiPvtWJv3P1Fi3NRdFWGVfDkXVPpdG5aCsyqMSCcbidehiMhc3TX25GDQSXDc6PsKB",
  "key10": "3LtxoG19Zg1toYMYmzRa8rN1QBGFyFhgQEGJbqXc16vpsvQN1SbewkJgvu3GCm2ZdcAMpjhEXMt9ZzukNLS2jUAc",
  "key11": "4RPqwTQmkNfUk8S3dpRnnorwHTM8Lx8sb6wtweXsmpA5u1YnidQ3PLTzsDBgZE3iq4s83tPLzBHJoifTuVq7Z733",
  "key12": "2UBxA2bdZF7J9TNpzUyZjoFci5rcCsxe8rg3cQ25PWcuzge2uXFVFNYKUzyeFsf58EdtYpycJtTEQXJLfQGUaobx",
  "key13": "4txWE8vdCBtjCzS44z9HHFRPX8YsBtLGv9PF9xe8gqaUTMMmtqCuu6ciQyJ5tNm9yVdYgW2w6j9vAfmya95WVsSD",
  "key14": "3Vgqq8rEibWEWmQZgHwsj2oEt8qzJpKT8uccavV7NLmjEdu41C4L6fLBCkzahK5CCZEg6tKhs5q1SZRmEoeT24Js",
  "key15": "4RRCmpfic4anP66DoqyYY5X7zaWKQAyYS15dzziSuYLRyR84p6cNEvBxJGTK266Eg7RsC4ZxzDGcpGxjUrZa6KhB",
  "key16": "2wVU36gKhZmpbhTkh5eKH6rKNVa6NDndAFKNC3MdspPjRHErGMiTMJqUggcfMN5RvvX7GrfgMWFQjNMVovp1CMGB",
  "key17": "2413jKXDsBmqFemSk1CVfSVb6FNJs9QsfVtFsaGNjwH1JJHVzfMTTywFFBL4TNXJYaZZT4QHmWYQEsGkaye3RuFt",
  "key18": "5wQnFFczxj4CU3GRLFM1Ttpjsigmswo3CYtbkMJcekc2CfqFaDC5sYZCHJtUYcmqD9teeNaPWYy85LJaddud6hBb",
  "key19": "389WfeEMyhkU8gSCLNcDPbCzVYg64B1C49161sfhJCtVESbo5hekU37kJs1MPkuXWpgmVLRs9gkhb91mmt2YYzgx",
  "key20": "26jicApEKcLgTvJsEM6J8TV6HY6rDihc9TRjsiuLCi1ET5h2ou8LgqZQevYS9usLWrXUhbGjzzkB3ugzQwxRFR8x",
  "key21": "5xgnPNXRm23uSkYFFLARnfnM5t1yQZZSmFaRB7BVFkMVb62HFahtbP3x6rKsCQ54XYRdBa5MFUBWgX5g4Y3SsvYa",
  "key22": "8cJYgMnkW2ECBBbqQAVncT5VjqnvBfN3dNpeYfR2xo3C27PMhzrBRryZpTwbU3kLTvv7TpFqhaqk37oECxPboTJ",
  "key23": "EVXjACo8rAbepmD2ofnM2oLTMi8pZh9aZzDDC7E4rcKt6aQa5g7UPNoNrBWzpEHUWvTD63ibkjyzdzGzSPwdr7M",
  "key24": "2cFj8sgyPjbWkUn4jMRVrZFtAvmvD9ua7uqnPiLe2D5MqgSPfTTCSdH7vJfhsrxoH7LraxWjduMQqBNceCDCXByG",
  "key25": "5ev4QLRBm3qDezWLKFPuM3Ym4GeKM1LWYusems6cc2xotMBQF6BVtCH7UsSUXsGc2bVCna7m7yZ5nRF8hhmuC723"
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
