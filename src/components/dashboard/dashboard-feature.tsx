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
    "5c2Ge4DexHoiToKgXqPsYs1SoNxhHRNjAXhdVLd9p3QqJUbX1BCtcYtEF6wHt6XkfwZj55q1iKJy6iu5bfXPL1LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMD4cpQic7rxMPjL2Eed1RfwNdTT5ifZ24FdhCu5prY9VbJx4Vw3q6SFi7mfBdE53TzaMAS2xGzrHxQZEMkLHmz",
  "key1": "66orGPVUtEFuTF5ZBkFLxg3fidSPmGbuLSToXPhvV5LCgS7yKzkgKPUEibnMePJ7N19DQmxG2HiZgAqFPif96gsm",
  "key2": "6da7kDQktXZ8QED4U1PqAW7zewVzmUuBTPgn2xF4WsRu9eb3uBF1FcRVRz3K3RSAsKTpv38TPCmcd29ZfJ2Bg6S",
  "key3": "3eogC2RKGzzhhQ3h3V1hvntRqSY9wBjvYj3UPm7CQQjADKu1V8PrGGkB2Ed5RRMEttaPoVHdSogwoptxU6kdhQEh",
  "key4": "3PW4ExLJW6cFtRZSYDSFpmR3TzAXBPzdtrQYaqxmprUStBH9GqKppDuvUhhmqrwZCArZaGSW3eKqMYwoWFJZvijU",
  "key5": "9J4VyyUKtuRyhQBTz89pvHXzGWNXqYMBg9duQRdupeyvNM5wjj6PaF5ZKKNCDdDoyc5U9Suyn4a5dykoHJq7S2m",
  "key6": "2tM9DgadzoiByMamv9VkBSrhPoSp9r3C4mYBw3P6RDfuyC471nb8feJ4vJZNXyYACybnZXeibzuT7kKkKtRgqUu3",
  "key7": "27wzeLBszjseiYSodjNsDXbhqzGmUvTLhQsQByq1ZZJ46T8NWfuirV31dYdcFBySoTxP7r8TKKAR7mNsvvZSJ7uq",
  "key8": "3XPxzwpNHoUNgyr4Uc12B4995FjvyV51Er2nLgCyJsrXZ9hhFQbgENArwBXSxFzjqHrh2BQgxYJHzqTopikKWzB3",
  "key9": "4o3pso8Qv6xdFdw5n9peudy72xNnaYm7xgrkPUeEj9S7iK9sDQv1UpPvY6KfFJvoiYuxCB99xaW35eb6MseVrX2J",
  "key10": "5TbCzg7xcR2cpqZYUZh8ybc9SRQa4FjTJFTwWQo44JwbJbjTNtyHRUhB7hkyGHGQtModKK3Aib3bYhmZMRPPWaVr",
  "key11": "ZRrGS8cUaxWeNNWuqYgMrnoDKoZE1EUKWNTDB5snkUvcFJ97UkJjik9LmLA6x2TTZGBZbiJoycW1HRv2ZD6LrFf",
  "key12": "62LRztYxTCpLfA8iMQFdvSRxqCxnZKKA2E64eSfwcrbhN3qzoABbkNMjUvxqGnPhcyW2Xkkk8ia6rZ6TAzhRoiPE",
  "key13": "3HCks9zgpDUshoVMqYr4UgQfBaGsxSjXBhLpnPNnEuaPNDsMuRYQiikVHvqBPCRVbq2MTzQ1kNUtq3PEk45eTNaH",
  "key14": "xhV13S3rVhKzZD7y7EzHT21fge7QHXs9gSfHEvXc5GxBbDXrrZR5ardvy6XSajRLJXVgaRLWJQK1Eu3Azck2cV6",
  "key15": "2CF9bwVxSnDQKhxquaXdmTCU2S585k5PiHb1ywY4XrvHZZcAPW7P5ov65fU77hKGJCWY6vQE4Ao4DS6rVwVtDbyr",
  "key16": "4oWojgRn6FxJ7RYaM4kNsNH1qXoDoGNzRotCxPjBSuyAQx5w6vNzQnhEZbY7sKPsARH9PGXGB3FsVMTgCUPRGu7f",
  "key17": "5N6iXbiSY7ZhmSePiwptvfAjbFra4NQLR6dk5AVaubkUxA8T5yi8TdNAQUwvo8ZdLBbNw3sSMDvLkVEX1Jd4hmou",
  "key18": "2UTBxdHdqNYMymQJYPJ69DB6rY8aktCKvaHC6k8cN9g3hDe1vmK15dcSnoVKTP9XnBqxbvxiw4Y57K4kXV99eXV2",
  "key19": "5myznMr4JDNpJTxbNtNBvrCBC4T2TQPwzkMuYXb3xxcT5N8nnAwf58RPcmupMo4sowKfHWFMSo1wpA1dPLSLdxPV",
  "key20": "2U5W2Dv6vW153AyTrVf6ma4SSV6TyAeozbDLSiFrxKG6Zps7xSe79hYr47HNGkQMyrHKcgTDDHXkZrebepV7Q76J",
  "key21": "5R8B1Fn3Hxe1evmiAShDumL5h2NkY2AMMjEsd7KG6ESeWAJzRNdfr17ZiuPZNZokTFiiefqMUUKU6Eq71FEKBqd2",
  "key22": "3Q6eippgm77o4gHQR1QLgbbAHKMUwxd92Xn8JH6wVt9kwesfrsiv6WvXPLih1yeUcvQffQV8xnN8mjboU9v5biPT",
  "key23": "3PCdd4Wigak9YnKryJ4tYubtKGECyxVsCGEGvqrNuSvtz6Yxq5dTfktxbvh872hwJyFaSoM2Gy3NMXmNBBDS8q4r",
  "key24": "4kE43aUaduGEfGCLsa4bL5iEuyftQfdHvaP4hfCNGCDT6yntA6gKaczQ1tgUxgzTsL5TmwHPTzLRMXhFd3GRUR8H",
  "key25": "3vFW5zcMW9i2Fx1sbyjB8Z31C9XRfwV61VyVXyqfkanY47sp2apKtYLgpu5nM863TQgNsibDsfYL6QAuDUSzFPgC",
  "key26": "4u3cC4BRT8t7vjdgE9CkCLakR9DYDXP361dJkuwYPaKy3D5oeD1F2CBG4bWvL8XXjR2PTgpcHQ8VorjwJRayNLBg",
  "key27": "58TPPnjBD4j8Hz65xrhWBdh5qFYqUrcBY94UDHnMX3Jw8vygDNcZtsu3RCmEKyVHDdXEbfdzaCaTw66mA1BQQ12",
  "key28": "219fytGTi8dJaZpsD437bhZd7e7gbymoLjCXpcdPNvCRBNcZTC4z7hs34JnJmHzWFGtzSTa9hJtbhu1YBnyHrkTm",
  "key29": "5kk2Y7Ko3AAagXYn9wkfcvQKaiLjCQ886jR1CjE1kJxeAETSSDdUCr9XRRqDfbeScwBxe4qwYo36oUkbMuFUA2mK",
  "key30": "HEnNJu9v7i8fu7y7JXonjeVXwJFW3YPtLHBDHobJMpH2WLi4xx87tg3YQG7UNhZJrTEY3FrEbkjEBgaz86df1EJ",
  "key31": "2BTyLVPUB76HvWsxo7zLmM8WcioQ99zMHKz8vQi5N9PfE5KAmw5knVpZfqTqiBSuw9bEqzLKndHZjV8J8psrL47u",
  "key32": "5UyZ6HXxQdpo9MPoBfepq4n1wDRw5uKoFL8WcqpdvtWJEuxJK3AbiK4K7sqZn6myLTZrC4kmwmCwDCniUWxsZgMW"
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
