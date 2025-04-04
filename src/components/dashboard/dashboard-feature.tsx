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
    "61AQ95Kd69UrhTisvHkxixK7Vu4CUhvfyofDpEvL8CVRRnakmYVDdU6iG8z1efpGEYbpRkb1xSAgJq2szcYbQHvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279NLJJM4qCnU8kSc2PjvoRMe9bnMR9QHKMEosiizetnTB4o2Wy84gV145pnX6T5W9wwdfWUhHYAeDht1gFkj5rF",
  "key1": "226fF35T1CVAvpqN32GeuXvT7Xmufzzx4DAWdzgvXHwJeJBMjdZJRr8LPF18KhMzDWQiU586G1BKfmdgnNpR2BzN",
  "key2": "2VzBRuct3GKAfjxRAv7ZM2SQYagbg6DXAqQwh6zW6iUkzV7n2Jom5PYVm3viwyxZvvsJ9H7vG6UsDWeqD1KqAwWH",
  "key3": "3vfbWVR6WahCBwgTwuf1niKx8VzyBwtgB1japjtDfEWK4t3LmpMYsD7qYVjSW9jD3M2CDax7iRxRGGYtFUJ2NtjL",
  "key4": "2TBNFpuRheCGybMcchV7bSm6YA9XUAbL8akTLK1BU7S1QFt7qsAvjfR5Mt2UWyQR5k1EuiKs4uadJD1AFJXGe4K5",
  "key5": "54Rp12B8kRPmbVejMpzL8qKRdwXJxX5FkvX8XrG2gMzXwBnu3D6CJTMydizf88Cr3vECJo8LHdSMJEa39XZhTi3Y",
  "key6": "nBCeDVoVc3WXtgZMcW6xGcT4epYMxTbbqwd3Tpt4dcpihP8U5sh5UqFFUcUXEonNK4ywVwSEwkKg6uEWJ6VDDqZ",
  "key7": "4q31zCFnkHrGRyEZrECx7go4FU2ZscUp3it42pxZRnSraDF2Nmvnedgc3ZSnJ5xLdA1Qd9cqK9FEq4gXKrLNfPqY",
  "key8": "5xCh57KS6KoCSJbwEgM43qPrCsWLW9ZnA3mgr6iof9rV8jFxAA682yaQhs5R25T7PTMLRBWZtkGZZ5Prz5CUiq6J",
  "key9": "3w8bfnW67BwM8AjNHnufosomstXpjfqgXv36Rd5WcaKKjGvuVEGcEwt2yjDKEmT4nuMamxE8SZ7DVdmE5QUdgDKc",
  "key10": "4gqET4ruXTawDFdE882ZMACajjPTLwvgkJ1gTYwGTKkb8WkS5vg7XLjouUfYR9F16ruHCDEKnnLWNnDHthAh6od8",
  "key11": "YXDdShGgpwpCMqgAMdkXiuDAfaJtJpNd8RSs96Vo7zqvYLX8DfwsapBkmSrWwe57BTQRd8EQjkeC99UcNtcTWDV",
  "key12": "eJQBtGU8AKCzx5HDqFNSgbL8hn2Q6AeTs6HrHnqHjxpo7JsRXhfUwofzYTwXc51qVpxh45WY77WDvm71yY1DSRD",
  "key13": "414v6qYejRh5UJewE4nYFw6S78XkR8cTxbx6XfzKAhKZFwryT2uc6GH1ky7W2FZDfxuATtPGqdkfsGpQNB5YMdki",
  "key14": "2uRC4ggcFV2VjKBLEuVvW4J2ESMm7daXsuiqKK6kpVoUL3hSHjxfUUst7N28emncZZwP8CC7h16arMKgn6DsN64d",
  "key15": "2bkz3owQENmmuszeQvMZLSS25cSMm7FtLdkD1V6xPhzWJ1DSi62ZwMCZizFSnDpwcc8NVqGXPmCxfBYXnYEV4add",
  "key16": "YrkkYPmqWQb8TQnriFetJcpCVKB3YPaYtBRfDtJuEBdNuXAxzTXZGHw82cmR9KDfS5TqkJGYL3UfV5ea9b4tqf4",
  "key17": "2jkKLKwshoetyncCoj3Dy6pNywuUhWfaSFwCMuux6mtHyH5Dea5iGXHLgv11eoCfVztyXvdPXojTTfrzfWgf1tHZ",
  "key18": "2xPUQF1BKoxkTP9fsdiMAR3enZWYv6j5HFx8WnQN9tJo1xVRRZaRQsaPW7xqeV4XYPX5nrr1JRZcKM22bM3yNb5w",
  "key19": "3fxL6CLFY95pu1P2GzBq7H3mdaZ1yhTw6Facor6kKKp1Ksydsj3b86gYshwPJCabsZAoqkLyiBTWH9Prp53JMTGP",
  "key20": "21XbMtkKWwmtJwsy7qW1bE2NU6wvGBfvyxMfLNf6QgDxjbRGae6sxsCpCGjWL5Rw6uqaVmg3RxtEQ1QQtVu3SpKf",
  "key21": "5nK7EVcdUC2mwxthwBEDPx1aTCj5mokhSB5AP442xXoDzMkViAec4GH2tDeXW6t588H5ReCKqfBcW9f8JMfznaLv",
  "key22": "5pGZ7kQKRpGvtEqDvibFqwNhJLS6pG5Ysy8ELb3e5ymGKbRgEX9J7GSa96BaBB6q6JrocsjxLQ6MsJWmiWi1ANvc",
  "key23": "4LJyPN7ZPrxmVAMM7fSqwUxWKa3mbnNP1mFJoq7ZcueKeBwC8usatyp5APjPYq3RNk9ruq6yqozQ1WzaeoDwNoVs",
  "key24": "4yHFYbZi1nThHYezSyL9BB2kHbeL6cvVPfsSujQGaj5yD9QT1ipMD1mLL5pk7cLhgDttNnuFLsv7z9tVEZGKcrGH",
  "key25": "58jK4wNvVdecEpXbMTKSxoGmnJPg9hr49C8wPdjvPDqVftXAdcwpUqPKrtNrEE4ue6BVJdxFG9h8ayhGjEhZZrB6",
  "key26": "4MiQPfcCSkt2BsLFp9ky2XxKZqRPZnQbcEZgMH9a79HwhCtXbmhzLwa7NwS2uYL7ZvSWZdW4UQvphci46BxvsYrv",
  "key27": "5y9YppzEgXhfGkDBD2Uf1tKwo6uCY3uX5Bq8LquPUGTTwjyYFWtbwrEBS4qqoXRfqjy2FVxUP1e3CuEmMauU91CB",
  "key28": "EpRGrw4fRDpSi6eUD1SC9uLnWmYddSTY3QLBgVFNNrJxiP9JdsoCnRaGwTxaVu5qSHJgDasFbkTbGmDbULsjBak",
  "key29": "62W3kA1FwvUp8QQKrjtSMzJaKwwhk2SbsezJ8iY3H8LAs6ocCpEWAzMy321X3rgjKyE6rVwd9TW8EjSZWZwxMwuL",
  "key30": "5EXdoaHEoxgDh3sddYX2XWrxDRerJAzayeCfjHCTEDH11XrUhH48ySFBcywowqZ3EvY84RjfTNh9MndqV5KeNSed"
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
