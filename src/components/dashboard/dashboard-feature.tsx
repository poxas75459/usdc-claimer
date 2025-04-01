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
    "Pro3PVFT3V4Ed1JSGNC6jHm1tj6rpX3uVaXsd5dGbz92G8var1LRC1UKbwsYPJwn9HknHN4hxG8kA9UNJn2DjCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HoNQnD42Rv6zbwkW2FDjXTzWtJnmVnetSuDhTjJHfP93R2rnx4fxrXvCeqr8NLEoEjkNeT7b23hbie4APgej7tu",
  "key1": "a12zFtu4HeJQiU33pcD8wKDYzMxDrtzUU318ua72XjSFdZkgcz2fwcoL3EBwrpfJTbFBhFR8pPb252veYPLaUdy",
  "key2": "3bc67kn6aUfCKwmWuC2WvGabLvc93zqgvtHY3n23X3MxThDeyYMNLjAbWsXAd49FFfELC6PQDN4fNA85HCwKywtN",
  "key3": "5GsHRfXbTPmFmupakp1W9LmFxoFSnfAp1dQJiULjEDoy4WdM5P8kxrDbjF5K84kGWHiYJCJbUEjViJv66QEmDYas",
  "key4": "4HcCSGGiiTUkRaAZNkSAr3WuQeiid81KxtESFqWHJr8J8z39wpMpGHhWaGpjh7MfCmG55a63WAvutQs6QPUzMEs2",
  "key5": "4wEwKU2ZNWYRBKLjXYDm7jAxK6idWpmHYYzzEj4UqsaW13HK4AMNRQFL5SQCsmxRuiD9bXhJMbBLDNJcmqwitDCQ",
  "key6": "3c8Y1p1EndhNsHGWdQDTm6b9RK4zLHCgvjTAqXLrbaChMwa4UakYd4fGDsPqictzPuNCeBTnaX1vCKfnpQQEBE3P",
  "key7": "3QSbKYYoErrQRG9ziPmg21L1Ar7qnNykADE1SVnHXkhQc9ZiGRAMQb6UEgWP8REa2erVaShRxZ5t3ASjQJWeZ3HE",
  "key8": "4CpwwnkezNbFK5f3Tvh2bTyGs4UF32i85XbuxzCUWTe9YMWayfGX5L7XZZA6aVE1gwmuJNaNC7Y32yk5V4tuPcDi",
  "key9": "5x1HLMGh5ayCVC9cUYXUhT1sYkVMRKY3T5DM2kPYwbTAHp53bZonHYjYDXnjZKihaXWhEBc6YSiPbQTGeVDDFBci",
  "key10": "2jVfAvcsS6S2WM9DphrDXxDBqYTMGnmPjE8hwtXgXz6TcAqoMej4AbeXwNnrfkPUD7GeGNTU7qAwxpvmSxuG8D9F",
  "key11": "2L4at2ezfMgZz3LhXYTWN8ZZqypyYwdnS7fXd3oJzWA3ndHKuB8YK7m6zeVKchYbryS7p63iAh6gsG8UCTz2rSoz",
  "key12": "4int1ueFH9BkFRF6xQE3WyiygWj4eKKQKrbNKKMN8n3bDC1rvNULmuYrTVRNaJgDe11GwBQ9xzNQAAoWUnBEeGxS",
  "key13": "55kGofy8WR6eBXpZd8c3QN2daH8DLu9dkyMsnpnStqc2GDTYxJi1JUUtYvgmJvecWcYMtmohyGf8Vef7cMdX8D7J",
  "key14": "PkMsg6H4o7GstxizbGqcUBcU1SJcp51Eucxj5gk9g8hmJcWE9WFkBTXoSxDno6fm2drwbwyC3BHAFV7NwfTfE9C",
  "key15": "67FRKdUTBUCUVSSGHiJoxKqzY8T7JA69CceNWE2UyRW1ffpPumZrb24P2E2rsVzHUcxpA83CUTwvPxtavAY5rEFY",
  "key16": "2pmtYeJ2kDeenq42v97t1megHnRkzUU1C4gRaryMnmZ2ofoMzSaeD9x9m3zR8HfYHN64eKm98DPMFhUn6kebJKzj",
  "key17": "Ye9UuzJ4gL6r15EKRxihWSTak4LdzsReZcYJYtDz4vGHdVAJC3JAixfp7AQArZ8VV7z9qhsUuuCWm4TszRg2k26",
  "key18": "3SnBq7tk2bDrxRw1o6YograWsvaARysfYXAAFnRkaUbRMHjRpk8dVPByfzs15rRB7WRcdvTVocnqwim5issRN9Cq",
  "key19": "52rZD3VWjnKi8YdxPyRfm7hbgjv9ffoY3HB7pgdJrT2fmButCioN6Ava5nZeTeMjcZsSfQ1Yydyw8z1JMAF24FSb",
  "key20": "3ofPzU1PmcQJoo4jQiXtLveBYugJ9Ha2JQKV4sZTff5DQYEKBHRjaHYmXGqgRwHds5jCYsY1HrqmMHrJN3d56x81",
  "key21": "2JTgn1AS39kT5K6T2btQKKfByjkPM7rXsnNGxmC6erFyevsKSaATwXdrGxDnbbCJo1t9JrzCr5KQtXFx1ThwQS6E",
  "key22": "3LYNQkmURiot6B4F8DYWhhMd67iJY6ugCcwNgGJikSeCMznzdvMZiDSsjEjhddgSCPeXycK4juKtseDwnUGu2o8W",
  "key23": "2E3QKoHJhDLP1pd7besA3u85vKfpSGwM9DmRJLtLcNdwitt7aB1YknMQgUGv2f7EopkA4aDQFqjmXAD9msXiaXmh",
  "key24": "2hnsqErSHxNkbhzYyqYea6otUz4bicNXsNQEKTMFryt1UHXexCRWZJbwZrvxNTUgZWoNrqfhavfRjT1ShrtSNRc1",
  "key25": "7mtNirR4MKgZoEZr58XHDN8pncuVUGGd51tLkumdhYtbZuMHWgJccX4qdStiFHy2cmDKdVeBMMAnULBNb6mBwGh",
  "key26": "XMARzjbpSktsSJExF5UEr3MLLGfmBQCybCiArJAQecSGYHg7Pzbo7hjtpFBq8bVTdwMyhbhfrm3Rq8rcAkoHoDo",
  "key27": "3YHptjU4Z1oGpZ3ag9EaL95SSA5En6UE9YNGDr26ga6vp7gqDXLxH2TDGwEDdJGs4fXwuyEBatCtR5JFgZQLQukS",
  "key28": "41HH5fCMAEAJG6wQpKs9dhdHriFRCbBPHCRR9x2iVbYvGaH7SE2DCmDM3nUL5oJyjVgtoF5LxH3rEaVoAXoiU7TN",
  "key29": "B6KTJ6iEG6KJcRNjjR8pg9iyBKC55AuBgBjjUfvtX2ggDp9FtBU1jkDEKyHjvCVbBXdcqVw4hd7ezwDaJwCqnmJ",
  "key30": "jcRgriPRE86hwHeo1jV5aZTTypuYavyoUzUwyJg54Z7hJx4T6skRauCiVktzqCYbErudnrwZmLi1u43DNLEoe6H",
  "key31": "3panD1qaNjRyu8oVvjGDufkG5CVXHuWEHDLkr5iNB5T9qkTmSfiPecwQ7s5Dsm8KvsCgjm3XRn1Fwm7wPegaRZ9v",
  "key32": "5nqCfHRSpi32D4e7PhN6PjSY8PxeG5KpjGfZiFVTBTNY9qiVy7dUhxATRhgMvDuDV5gcJXxFcjLLAJAGQoJQEojz",
  "key33": "36BhsHmNamyCnTtuT7QtGYUMMyh3LuPyfi2o2FC2crHBkEYovrd7ZqY959BAFQdhexSB47xuj41hT9RTqQbFioKc",
  "key34": "UKWHbhfGsvoe6T313S8p1Vrt4o4DD3kCLQTGscDv46pNfREp2L2CXopygh2TyZ8rUGKRXb8vdgmHo1apyAUZRzK"
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
