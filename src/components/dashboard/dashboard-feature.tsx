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
    "5QEwxqBSRNSitt9gxDMEyp1xxZUFi5adud29hDYT7qazGEQ4YNA3HNKsyB5DpKwGojZ6qGS97abJcYhqrSTTiLNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWNtHBphoq8gysjjAtG27VabVEdAkw4WfdiwRa1om3uYD9qtSZJE4g7w7ygntzd6RpbwEjCPdfuvKejfUpKkzQ8",
  "key1": "pHWVgwvVVb7rNi1iEa5LAns7MAo2ghvGV6Twn8BPfR1rX27UWagjBhPibsbV54oKHDxKANSF4mFKPnfgrX7HfjT",
  "key2": "3eTFhnDaw6gjdDYGKgeC2ywnxsu4zH7dM8hNsRgDEeEXKE7g9473faGnnXCYxXDVXbtwsiKCmY69RWniRs4pMrJK",
  "key3": "3meHuacvSJD2TP8Mi2nZJRWNcTCcMiou6am3R9hKKJRu9Ffz41WBzQGo5hZN3vwPqGxpFjgDjpLNtoRxPt3jJCzD",
  "key4": "3xGVPh4fpzecoiFNENS1rC9M5g3T8m4t7MZFsKN1idr9ou2sCBQv2iEdXVfRQuSJUTjeAGgvRTD277gBgctaqn91",
  "key5": "3wZgXgjL2ap5DaZMnBegBWBemyYPPnJTEGSi4pc3BycvvvPvQwUMu8uBre8odsjbaQGoN5BPxvae2RGvqDu9kkSs",
  "key6": "5sBovZrengB4r3nTGy5ckdhT9NviKouQ2a4qki3iVMZzMqUjMPDJNzTC2WjEreYyAYFPn7oSRaKAwzuxiYZEoBNP",
  "key7": "4Kvh19avtDNbgQ5LfmJAnYpnDUYQyP4X8Sr4J2FUyfXPeUW6yPS3qJHSV52vymSac1kY1p5T4Hs47J8Wk4mbUGcW",
  "key8": "4PBACDmwgnrC7BtHHZxx2up2mK4BZt6A7Xx4ytwspEZQhuJEYdCS3TbPJ1j239TwVNyjraHKdJFga4s4vn8xQWa5",
  "key9": "td81ECk7icLQ8GAWv4dqvM82RjviishmfmK9xWckbgFKyZhJLfVxkqQqMZudXePPXep2ehe6Q8Nbm33F4cFx9CC",
  "key10": "nSAQAT6khUHpk6LUbKJr4KBumiKzJPixMmArHkywz3sWrhDP9kD8ergMFgxoQZa8CkfHVA4sCyVk2b4oBsXvtMW",
  "key11": "VfXEXr8cNMQVnL8C2qN163r6GtoR4rdJcxdKRDdZ5Fo99m9mB7SzGUHe5bhJZEWQHCmSegJggKxfzA3eGKkCw2P",
  "key12": "4Vg3XjT2c3iRNXNShLvyYGxo3ZpMM4bYwuQbwZUW3Nm85K18avY7Na4jsQHqYy4skuVLh9x9tgS7Eg2asUcqH5wX",
  "key13": "2NDqDy25rgb4xAkdeMaLUYLjZdhqvGtXDqJb2pVkgWD7XGw6LieAZWp77HV8D6zMZUtz4adSsFwcPmQVQJ8G6Zo",
  "key14": "3gfudHw6AeAJsGgiPr8cqwqFviz5TukMRA1WGYdjmvyaow43Wf6runNmtp1i7caqZ5Kcq7nozCmVoRg1CoJ4j5pE",
  "key15": "zZHhCWRr4TF9gVUzDw7o5pD7pVXGZD91QtjkkrQ3nXyF2ykKDQuJhZ91qFKGpiZWZ9ZCKV4RdgGfdAukvXYJMw9",
  "key16": "4Ezz2Ybae4fhsCTvBWUgchzCXzGnx1YGtBpu9PM4qbviHKHct6g2ozWXxGeyMec8QQrBNp9KHv8BpGY6ZWFF2qsP",
  "key17": "LaRH1yLqW58TcCcsmAL5uhMTrjXgj9zfuPtn9m2FSgRwEQe74pfcRVq3h3qU1wRHkcqWF2SUfbm4hecpRRMwTgU",
  "key18": "5vUPdjRF2yoxdbcoSHK2Ru3NHHF8ZPBDL1awh8BimEERJ1oDakD3t5HpYat2Mhf21SGEZ8p1M6LBRSDjDtwkSw6T",
  "key19": "5v2subWw6PitWkb2wL1hqucEGo3KGiKRiCDcSGxsFdxJovqvuudmYiTG8qnQuSfWC4jmq76p2rv7MCder4Frx2eL",
  "key20": "4ETirfXzac3D7owaZVzj24iJ4P8pnoEKGHeeDsMYiKMA2onrkoumaXxL22LMAPwtLzu63qhBzaZ72N86QNAhKqYp",
  "key21": "5d7DLR1cME6oJnaFgcrTSJ2GWG2CiL1uj5wFVcnt52TjkHmxbyxvZDkrVbpemv3yzPyCgV9rsy7BXqQy5FQXLj7U",
  "key22": "n4EkstFUgRCGN3ngLst56T6dRC5MZtce8KNp21F78QkEVZLxfifMPhFg19mRn4zGt9nPHWnNttnXieddx1dfW9c",
  "key23": "3fxo6izVhqgm4uYA1A2rSiFdVwLtXEsc7XgMN6zf7mhPa45JWgBXpMCWGxANi88e8qLEyZooAoKB84Gv9i9qkJEg",
  "key24": "2c9T4FS6LDpHHeUASMbCusWHMh5L5i8ceX7ZfkSCfMzTFpu8vR1ve8KXojMKu9VggoUHkhaQJADHktNyMBTB9t7S",
  "key25": "2VfS114bdfbvS9zvKwaLeRJryULDpyuaZfbrX9jcD3DChMUdkBuK8MzJ3EULUhrfPjEMkzxksEfhCehqrjM18EXo",
  "key26": "6LyDvNUEF3vNQiPQQNtj1A7hEs6U43saJA9RHDNQsQXw6KVy83pAC161beNV3hKD7HixY1a8ajeVYvK6TYXQhY1",
  "key27": "422XM887kje964aSpgDyHMiZkcjdBHZsJfKRjP3qufKF2SNWcVnAvoKKs3AKXDRkeKKw7Ego3RUhPZ3XGvnuwHde",
  "key28": "USHYzV8XtbCF2VYFmdzjgh11RVA34484oSeSYK6fYPK45ZQXcvFBmjSn9ZRLBxgQnADq5qqQj6VgjhyiRNhp14r",
  "key29": "2wHoo446jamVZ3MnXv6fPVzbZPdBFAHRBC6g6Xx1YHdtroEspAqJ3SsFPrbHKuBQ8WdqcRgZwo8SzZHuQ6BPypdz",
  "key30": "3jiDB8oUttWLHYgoCjF5RWKNhWJnNonmy6cxbFc1kzXHqL4UsFcmFQLZDKvcAQvbgYw5Q8WvEtA5pmqmw9E3LsEo"
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
