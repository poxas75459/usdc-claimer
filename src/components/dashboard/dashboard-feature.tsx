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
    "44RqGPmt3sz8sW4Bxi9T441tjfXyxc7cbvASFeNodZejmXLd3VRk1UBp4Cn6KVsoiU59NHUVweJeycEWkU1iE6Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibLQkqS3htAfd3VwKQSdQMqBnMMzMWJT8rVpds4MvXmyFB9bxF9HsXdMG65FPRxJ46t1CjXrRNcCBtimgMAK1dd",
  "key1": "EDkuzkKuTTx9Nx8C6XHamxeVmrcF5jgX2cLatW7Jr2SrdtkAzw7gwuwwjy4saMbGURUbVvTjfv2cZE7fcfKULWv",
  "key2": "2cXwDgqECueAQxMY2hqSCUTE1WoU4KzuQhsTVZ2CuXXMZPBa5JJYbRf2yFU4kfcQE6YhdSF8MdUtRX4fLEyjcLN",
  "key3": "42Ym1SeHcefb4Hq8vS1DFhQshb6tmeJkFCeDvpPSvyQWVqDThby9UnN2pLyB2uK4mJiuJvfDdsaN1azdRPuNcYNw",
  "key4": "4SMSRGej6C8vGDskYtaMB7hHmdDip9fG2CymjkJ4SsTAg5vmpvSTbcSxc1jMQmLpYwCLYQMwXEMTkkcbm82JfgN7",
  "key5": "4eBLKb48U8LLJQ2UC2pKd55NHMb5RRUkFeJddaz5VDwHs7xZTxzYrAZ9ez159sTGznokXuZmyokEF4eSxpp32Lv5",
  "key6": "5PJB3jemGgJX79GDaEuJQKFnY8XZWjivhAqns2XJKsrPiK8q6TTY5tPnv2eSLEj9ZL19ceQ6YaYzvMBrbqZWZ8af",
  "key7": "PCBtmte7qXjZ1EyZZ2D4Z2eQsvjLAympk8qPuLCJXKBZqrA3Yyptd1WrCtaStdNLnRDj8fPnvUSUSg2L7UCv8hu",
  "key8": "5e3hbCLZ2rwniz6fuRDqfsthsuPD8mkQCnBgjSoH2EvDxfcxJ5aQRAeLx3oeLjfmNPsEmPbY3jzrcCgJqMs3Jzzd",
  "key9": "5gQvpXUHtpuM5vaBVTVJCxQ5eJwynT6neTqaQqMKCZ1tJ9mHGDGpqnjmLyUpwJ9ksdPyg5jBPi4CwrfVJPekXTQ6",
  "key10": "XqMB3ke8WJj9L8asgwrgPvQy72VmfKTMiaBQtZ6PQbdSnLtNGq8LGwqo4Q7HsBkeYHmnSVGXLzBcGiaPk4NFuoS",
  "key11": "3eeMcJEKnunnRU3jxbHpyDxv8Jr5TzqLHkLez6KZuHjMJxgUmybRpkLNk2K7GY77T3HFU2cQ1ohmPiBauvyjcwC2",
  "key12": "3WE812jGZ8ZatuZWgKGvtjbn3XTaLEHngsWbmmLndH2FCtJEu8ub5hyQSVq64kiyBb3mtAAEkXmmc5FGhLih9bR4",
  "key13": "2em8ZjnbMvb6hHQwaUkGDter8H8tLp8PM1EiqUVpYGDDDS3B7vaVoouvUUhEnVUxzsG9qY6J1FFoi1pMBVh61Kz3",
  "key14": "5x7AuW51kHQrMnEMXYcwUCH8bRA2ty76vGBdUdsLiMvb3M8SXr54MWDaNyDkkUNuCf4wzxpFwZJbTG46niHgWqKj",
  "key15": "5bzuN4obmpPXiSihr8bULbutf7FDsBzecb5g99kVTVdN7VrDw6aRg2vatB4zfhC8hyMhavumf1AXpS9yNng7Ynji",
  "key16": "2tKzFtuLHMnXc6L8ogeJwDkrotXL9zeff4jFnh3KXsZycmqJzwkRXgxDGHFmSKChydc8Xcs2wH8Sxotm5UfMFqzj",
  "key17": "U5RqhQu36wQHKTZA3JKuCtWHVMa9VQwCrPSbxcqFqv9BmYcUc7Rz1trruHCBChJHJCQJkU25eYeX9iw7fgCsQcx",
  "key18": "535hq9kC8pCQfvbE5uXuiZxzP1NsNcCv83W1eLXzVneMpkYVpjtS3fXtmBKfCrpaaUTQiBssUEsbbQQDBmhAAy6D",
  "key19": "2pLedcJMt6LxvgcMn5ar6cucBPiyzakuBEvKL2RjnB7gwf3KZ5fbrwNGLQU7q91gnPuQSFzVZmrGjyGP6PKAG6Rd",
  "key20": "4yTqPMmCV45pWeEUwMgnbLFqHFjY3nmaf2fiEfnsUXCguSCHjzUz6TT8J6oy3JERsfWAJKjNGyE9wcffXYR3mY6U",
  "key21": "4JkKCv5H6uz1o7D2xMoMRkR8AQUBRAAYkHKxcvA2ZezGorGTUkWuzqYEZLbADuMHXxgQy279ZwU93Wchoq1YL6kK",
  "key22": "4m7YMeyR5bsaaHpLxGvE2f5KxsnTqX6UbE6TYgAxM6RTzkV3RaS7FYTD19ufhgYQ9bae4nJeJpaeaM6yKV9Qsg1h",
  "key23": "PkTXd66manTkG2bGoNTsqFvJPeJ4cvyDvq2cPeMRNyBjiobSh3gSxKjRC28vEfMduJqg2FNHYgbSsm41AwyENyu",
  "key24": "5Y3FaT1mKYaubg3HjF1rQbf7RbUb33uD7mvvCTMQ4kbQ3qRQD6i2PKkBuAPgpMGHg8gSKP9ZgqDAdCCMdcMMsA2N",
  "key25": "3iKnE9WMMkYnHrJFZ8nQ77MnzU6dNuzLoSY7Jz7CvoMFTrMpKiGq3b82fkExerdEuR9sdvC6ZVQfsixpfj1UKrgt",
  "key26": "4BBHpLUQ5xYz9RGTju46B7udCrRDdFaN31dZbvuhfsDXnCnvXoMdupGoUai4kvZoiSDYNgocn9YwH4rwFf1d9na6"
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
