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
    "5jZhgTRKEao9ohaBFZi6ZUazgXNxmkJyVJnpDgm3Q99Pc1mBRPCePLZnU7yb37fzSxF1a5Bmd78oZVUGnLwuj49a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6693Yyykw5JXwpay8t1TfzZveZFdgpJn4k28HuRHMzEjjCvH6KgoZz1iZu5vALzyZ6H96TBcYnfbL5WRFVu1sGoy",
  "key1": "rm1tYCDhrfX15rk6w1nPcgAfSbKZjQP9QFNx5GE9r2nN2KUB4yg7WW5VPjN478gpFJzEkSm8JsDY3G2P754icj7",
  "key2": "2M1fRLof2zbxWJGUqW7naby4cXFQnd9sNtbV6mrmCMvDUDXfCDQmyXbpicDvfvyv5AqUHH3BBn8ET9pWPvwZmifA",
  "key3": "4sLuqN8rZ3bGc5WKH6Tspv8JYiv8heWfvVsqivKkTuCUMhq9Mkf6E8Fcp2DWztHmi7A4fzNdJzfqYVyNLQKZvtvx",
  "key4": "62c8JyXu6MkjpfzUebWX7x4ca5G98YTFYYLzLDnZ5ePfdLqsJ3hEsdKMvxz6hKVB8wsFG5FTC34tdNMV92JcdZbx",
  "key5": "4mEhYKkHFsVbmEZyouEvtjfLRaHGMKwtfCZStQTT67tL2V9S5JgY4Ch8yDDgkCbzgeuQ29RC2tBDg4JDMffdLRgj",
  "key6": "3v7pkCjwY1MZCpTV2e8qWe4nvasNhERsFALiV3F4oyDMqTjaQhZNRhWn8apwG6gxk6EAnox4bxMxAHYQC1tAtCph",
  "key7": "GVtWQoLdBpBcivBCuQhBWsidyH9zP8yBPnkVUTRsYCjRNHwVeU3MRMFGxCP45XenVBUdtGHqJ8KMRFPA9JKc55K",
  "key8": "496zGJvKdKvqArXbPoN1kkEXHSsQiwyNxxZJ8pHS9Mve62J5H1cktFjGRmcm9bY1DwjAb7bMiJweZ4cBjKLzaNyA",
  "key9": "DmPNp2y1bcGSuAHXJ7zCmyvCZJtBsGAqwD5mDiMVXWKtpmsK7dQJehoj8LSYyd2ghLRm2DPQZuT6G72FrxP9xEP",
  "key10": "2C4xdA3juFwV1imtC9YGjeYLXgirMbiAuZtnyKj8wM3u42GPgmT5vFJAyKgQPzJmwKoSBS6e5LE87uH4HE4FLhVx",
  "key11": "4muerevGWCTEtpt2oU7cFVToowepmoYiYVXm2hyr6QR3itxA3ySh4QnCcTzfTrt26B15mZA5Ew1hK4eC2PhV9Zk8",
  "key12": "2wTUBmeTcfPwyKML2Xvf8zeT88ob5wqhqGEKhzCkNTfDnkNVj1FzNxoH4CH24C1LRKf22SfNi27rc3DooF4diM8A",
  "key13": "FYTz1o7JcenFdbRsCcDgQ5rVeAegi5dofCxp2ZYno37eiKm4U36Faxr8q2KNrkWzMq3cP1Ui1JMcWKPPeZkqHAD",
  "key14": "3fnn8Bb34nkNzPGqtZnpmRXZjrQHjKgFVUQTHbT81JwJFyPKbWWBNqMGwFBMx1kwCqsvoFfSc3sVDTZRZdi2txMA",
  "key15": "SL2141iVQd3nnzLjNp31DmR7QMp451Z13Sn4YZsf2tuBK8DLWzGoE7WMbEwX1XGfALVnNFcSksa9P5vHNLDjYsF",
  "key16": "3DcmRbZuD1vC8rFj1KfZD6t8H9cLNQCL6dZnT7TASymMEWKtfUfQ8KVYVpiWu8j6vrgYx4eo7ea7R8k78q7JeouQ",
  "key17": "4DEpuguc7Xi97c3yQ7yCcCNzT8TMPjabRVckCVYcXViYnxfecXAEJhqMf3PQGfk5xnYovZjLSwhB7BkBjmGy9fUG",
  "key18": "2isMeGUbs4CF6UhsuESFM17omhMVC5ruYs34C9CHK7M171kJZV7qfiPoxFAy6ijNkHfmZrUWBBdeLUy3W86ASWQ",
  "key19": "4MnUZe5Jptr9YPHMhuBPZs9sdsPm2ZCj9jJ8yt9YdxRari38t6rsVtpbmbfcSRJxAvjwqpWtJeYRTy6syvkoZyvi",
  "key20": "4TuS4DYoU9QwzdiKgL4hbLYFYExf1XqTnNSJTpunYwhYE5bs2gQx75pRsuqzhNrRUd3pSVsvsyun8EvnAUNcrL8",
  "key21": "uqHrjoBgvqq1QHKsSbSYHBpDGoDswpyBiSpjJysHc5s7FZ2FC85xGWkxPpMzUgnMSuNxZq6PZZPFv1CiwNzDugC",
  "key22": "4SHp5fn8YPcEZifhefi9Z6KmFXfbpu2LsRpxUQZd5J7ta3V3S786EFHuY9KmwY72SGDo2Byp5M6MNTEbU615fdhe",
  "key23": "2s4ikkSHk4gBB3xKR19xhNVLci6Qm6P6DWb2E67Eu8q3h9XyCqS25QqrANtyyx6oHWryXbhY3MfCe7G59AFukdEv",
  "key24": "3dST8bZtBwvRN2GBWh8u1uJYVJEpAkQxHrZw8RpaCQmjDc8cfUSpM15anuuqPBRhr9voxamyZj67rjzApZE751Dm",
  "key25": "YGSRZJashcPipK6JDJPaFZQeMbotEqxJzLN9RVyLxAv3SaE8adHvbdtiBj3z6DYu4zQJ6oLB4aKxt4fogR82sNG",
  "key26": "WKJTLeRTBRy3haU2knfFqfoicPHmfngTXn1YPcfwtQdXUhCjEcLKMW7BKsbkHmYqEeqHb7uwd3rnKxu4G9RY8dv",
  "key27": "3ggNskwYod92k4JSmEtoQ7HuJ5sq56E1TFmhU1r91PG83BcXiviLVAivFTUNzLZTciWk2goEqsGLEEUomgKs7CVU",
  "key28": "2dXqEXAMjZgQ9tYVjxjXViniZ6c1Q7mG6V4kNns5SDEtiT19dfvHVYMFFrHDRQcYD6zYPu2TGcRgbUHTH8ipX7DH",
  "key29": "4rdQtwSsMKHw7bio8qCBiMUPBjaXF7hpMKB5FhfPXQn7WVQyiYAVkFs88WnMsaasVjoyYmVBnXrEaeqBHLP7zAYo",
  "key30": "534F41Nf9FNznsFaCcQsMAocGFDyx8AcfT65e3D4QRp41VhL4VJASJrcsmPm4N43YKQooFz4pPha4dtDRHBAyEyb"
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
