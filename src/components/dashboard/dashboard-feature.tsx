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
    "3P71VXYatPhfvad3YewHvt6r57LHot2vGGKoyLhVSk8DBD94UjKedXyXQf7FrqpUgEXcvhmH1RDtNFZz23jrCTBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XyPmMCSvMn7mAjZZD2ZLp6n7FjcKMGVhZ9y5V8BarkG1TUxgTJ4VBBDGSRxEV5x8bmWXZzsX9g9CuBUaR79Ggug",
  "key1": "4it4asrY4f3GAQFeXAFggdS3Jt8E1xTU7T85DQCf3GcGGgJSFELb9kz34mDP2yECLLZmaZTCWVTzVpKoUudh7eJM",
  "key2": "5htS6y5nHKsDUGJGPNY7M9fKrSEf2kPpaNQYd3FQNjYKqsEMqcNMgYoiRoYtEuLrWHR97eqsm3vG5eKkmG57R4vT",
  "key3": "2ae1Enowob5sG3vJYNYWJHJiMM3BkXkQRr1zHqxRVnK5xCs5Rp49iFRBcEa1fiY9bE1kTmHSZTAsVD9ufhUwoTYZ",
  "key4": "58nPpBoAYRqxvYUgz7735o55uCBmpaeHBc65oTU49tHXkjkvE7qggLQBvBEUdy5RCkaz3SU7DNQDVnAz8c7GW76B",
  "key5": "4YR7Vd5ZVp5evRzUbvVqUnN6bQi9LKKhn8muchg5RnQFj4imttABhYkw9PbFdQMXYNcWhF3aTSJ9P9Z8B3hnjiJR",
  "key6": "3NXA5svBjBgcQ6JG79chVxLT8kJ3b2C1rZv6Fo6yQQbTxdRHoyv9FERDZbUFYpYHJUNMhRVNfNyCGSeeBAvYiimS",
  "key7": "4kWWSwE2jw6e61W4saAE8Eizuy3yjJuE9Wu4ZKdfyAJL3De5WR4gZYxYi18CLWYZytyEHz4nfAMb83TskH9NLMN4",
  "key8": "piA9Z8WHX3Zo37FHy6tWYZsw8C8nzydVik6ce1o4MBrJR2GpS2hGxS4zGxXTBhdtLrpCGhBiNBNquzFJGHt6Muy",
  "key9": "2DsRw5HoFX2AWQwhv1iRAG51nbB2iwbd323HTCrAs5MYN2a6qWh2YhrpF6Z5ibGfVqyCpcs3WeK9BYY4MQKNsHDs",
  "key10": "4Ccw1F2hKCo6nhKoGrYEHL75FfPqR8GAmXfdhpRHkbK8FsYMsAski92Qdd5VecEAAdfZtnUXKdX5oxUhdPSUbsgS",
  "key11": "3LRK8tSvZ7uCQwX94g3h93Tv9A59MJotPPvJ7B9LjQUzrD68wgm64x6JXzvBCdYqW4wjDDzEfgZHWWr6TK9asNHU",
  "key12": "h5ARyy3Q4hZuXwrX9VmR9uBcoM42rms2ersn5NYCN4oo3ETAUC51X6Us8C6hqXstfZHBvR6Z1u95Ywni9qSeqsk",
  "key13": "4Kn8B3EJWC4tbbzwaAz3SiS7jrdpfDJ1oZzfZozzGS31rPZsQ8bStBGg4DLtdohCbYzHhyUDuWD1Cxw2QR3Um26o",
  "key14": "ghyuT9dm6bTXHKqB4xxdehxK3fd7mUNv11qJM91TrLwgAGK1wdKzBqT7RS1R9kTdGeSopQbS1u4E8CzydW3FJKT",
  "key15": "3A2ut5zMxKMsoMk8aaFxptacFt8qK3NuGdySHmttTUh4dDJc8eoprc7yYpemypGcZ8sVcQmSM78MFxfdmAgeqMCC",
  "key16": "63yskCj8PSfmcpByxsrRttV4f8e8V3iL4KDsidRWQntGWJnZ59qSqd2KogSyWzyQ2njYKwd5JaxMFpaabQPgiqCn",
  "key17": "5Di9zKQPzADKiN1LNjwe4NDWBD7Vnhs9Nzz76FMtS8vVr2FooY7f1M6k6oycmyCH8hUFW2dkgigBGgcrFdFUoUsJ",
  "key18": "5mcETuTWBFQkS3U244i6rMxi8GLorn8TTq8tDCNNw6akAt4i9g6pmtDZMvdiQ6w9WE95o5WiJDtgK42u2nXAgi96",
  "key19": "49qoG2xXRmMUkbQr79KC7he2VuJX2Lc7SjuR8sKUAhzxJcntWtqGzYcsR8Z8kHFDTCkKevKRhvqetU1rm1JDC6Ae",
  "key20": "4KkccXputsFc3Eq7RqGsFNBPoqhrcaHVrxfjLnFcCi5Sw1iD4R7AYRd9NSr3YdqwzYMYy7PqWiHAH7s8XWHkti1Q",
  "key21": "2PGKakjgYHkGuCeoATriGC3BxNTeWKxTZchjVgxNu4th8PhShpMUJe3cBygcpYGAdM26oyrezuxauGLwnFgzhnV6",
  "key22": "3nLqKW6UcogoReTUYkq7tgXfo9uvSdCqcEpDMWUMf9fHJE4uSMgKLAqwFzmo4jr4SDLmeiDk4LE3r3eeav41dXco",
  "key23": "3H1wXwm6ZW4qAMpw79CWUHG4iajuoAf57XAoFcnrLxvL6uJ8JrCVHRXAHma2QSaf74FTTGUHvHWF5PUowyuBTokW",
  "key24": "b7TLFcHBFk8kVXf2jPoQRjVv1fmdXFdxafsRVjMPHuF3Mp3X7PQLF3tDSSHN2mgGa56vGrN6t1yabQ7Y7Kb5w74",
  "key25": "3Linjx3m5xfeYpa2U2A9NW9R6cwMj3MWsNptNHDwqXsQusMWw7yoP9iR3DoAvsqMTfdsPgKCgLrQLDj1mUyYrheZ",
  "key26": "BTGrKNRb3MgFnoiDQvwx2D86Q8MCAUVXkLm8ifnU37FWNVgMYkKjrdqXc4Lxz8ETDxYbWQY3AMiYtPNEHmKvJSP",
  "key27": "4oux6iFjqVHchHJyVC34t2tULwBaD5Z7qXHwA1aXMG5otma79pEpaLmhDn7bNxXSpVL5AudFPhvUgBTbuMSYGTGf",
  "key28": "35PZ1iqezE1ARLgahG1Bdws1ATJfSCW6rRp1qasi38d5Bb9yeyqEqZudjsp872ZnKb9Nv1wqqUR6Jz5BvfL3NC3S",
  "key29": "3EZdcWAgTkhQcfTWgQ7bYjaPBb7534tG6XEYr3qcworDCLTCvpknr1iyAMWnELLoy6sgDYuP8pNreNmER624WpfT"
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
