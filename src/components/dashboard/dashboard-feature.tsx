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
    "CpbjgLAP8H3CYxxxMoaXAbX7xJPpeuptMkrPtVJQq9EKvh9F9c6Kn9UJteis2twKYomkNGnGKMm3URGk9yVy2RE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36suxuBQUEmazPFnpqhQSMTC3DbkN6CKARxQ1NLazZFsYVG7Sn6NriwJS4CLySbreMG79KUCgTr4d6o4GB5Ntypj",
  "key1": "4j7bPBJqbCxnYT2kyJiSxouRscvKbcRDZs2L42dvR8T2TPXFgA9XreEwraYAYKXZTpVrtHhEaFviuxXm5KTEzAjh",
  "key2": "32BZU3UT5RThK8z2nSdGi6k6ofoHM9Yn6oaje4rwvAw9Q9h9FspnWF6unT7UEqbkuX6gEq5X32x7YDX7xzpFFrUb",
  "key3": "2m3RyH9gAeNjnyuj49rZ4qkyZPdcR8m6pGqv42twA4czzwmej3e8gm9pN8m9s8TrELNR3T6eqvd4RoH9iKgB8XJT",
  "key4": "4SxBtt5nvmGdhnwrEftabRFsn2UayKgKwLzMb3tMCbLcFHbxYy3rCUChEHPdAusB8GCqLKZuMYhjfjbSjNnrhemC",
  "key5": "4aJ27fA2T2vfR8wK98JRaswt8G3b8tNExdTZi5Ra91vshSgjf6Bd3pt4FU92utWVwsSg6GetLhi2bFM7kyPWGWLq",
  "key6": "2rbhawpr64wTz5G4YWA2T8ZVCdWZ2GfZuZT5dNAUvBRAmDbed6d5cDmkszjFj1EXq1271iKLw1vyX5bvzeRbBdV9",
  "key7": "3NUCHakmE35iqK2dQQRBfXMKtXkuXqZRiS1LGkJX6ST8BiS2gc92Fa1Qa9vVRFSnNSrFi8ovcaSEfTKSfwXLmYXZ",
  "key8": "5RKeN9KwPA4URvnuWdn1Tnd7Zesk6EK3cVDhSea9RwtYCdyEbVYDbgTBV7EfcYghpxSsx1H17xTYHZTLEgqy2vtG",
  "key9": "4fYixqyfVeBfBjbqpZBPjeLmvziCz9k9sEZCA7Y8okoiYs2dyFvFYX262CTGzUHvftBcGQbpZrJk6Md2HuxhjVjL",
  "key10": "4zSwPpb6Nyr9XbZ1KfN3HFdyEVrnapMWEtdGP15LrVgKbU6NkstyiUwpFvhcw387MRRJrzK2MbQZJ65CW4xBqy8w",
  "key11": "3dNMi3vnoAf83QoGa7yQSH1ZEH83YNry4VUuq7j7yXvmUCcmuJxN5sRYmVgkCDSUZXMB1H6hhxvSaEQTNVspSTg3",
  "key12": "3LQKuDSHHyRUbdJSjwGHnRt379h7DyaXAGFXq5hx9CesDdfpPLdVDxaBggLh6VZv4KX4V6AbjkPn12ZyF87NkPzi",
  "key13": "eNVwuGkUwcNd34MDXTV4W7yG2rRJDpUyFAg6kgPa551QyuzXcHUbYorzpTKNqbqQGp2FggxGKQq26pznTWwr2jq",
  "key14": "yqJeLdRr3dhUNyAw2vUSJQME4UzsM27S5RcqH7WhMqFuPZH1EomvnRNaJqsR1ifCuNY81oVKF24XUBobVTvdkJy",
  "key15": "38a11BSvTaRx4berRjuLf3Gff5EaaUWmJoE3PmPJmTaNWtvqcgzYfq4wM4eicCsGVAjccgXAVhCDzrZZDAFTrk6v",
  "key16": "4M3JtAKkKFMbpwB1C4iVYLfAZ4Fkz6uc2PWsfUMr3M24uzn47LLqcMqdhYDrwGFxxcmkPK2MfwQrmEH6ek9ZwdiJ",
  "key17": "3Mo6EXcLAekufLXgmWEMksT9g8Zn8qXiGSEexz5jpJFhTUYRDC3HAecLUYY6CiN7qFU32ibZ2DYeZVPBZ3YxNgwC",
  "key18": "4dxdq5yS2cR6Go8qgkRfoLcqcEPv7VWLkJXS4AJnPkTMLymRKEkMAPRYzaMDHXr38aM7wrtTRYuJARdAXUgsCcyf",
  "key19": "qadvbAw9yEnsr2ad7gXP1KU6TUAiWqta8jUXe5Z33cxB5MPiy4W1i8Ndmtu7M4pk8XMCgddNyfdLARz5CK11DrV",
  "key20": "hLywDcsoZ6mAXHfpjFQnuHMkWk1xZeJDL1q9uSob6C572wTKWb41PrN5LSVxgZc5hkRiRdGXUPDUgXr7PqLj4Mn",
  "key21": "5QCwoJ2Jzeec32UwAA52zdFwqd6F3qaLrNJSWBFU86ubAaHjYejXbb7QAohhDUT4m4NQS3MmP34WZtwG4yhDDZdD",
  "key22": "hqGNmZ9uNX46WLHxhfnS2pAUAL4oLC17hWfWBJhcty3DY7watp5ZZfpqWvXZUYiWCfdRCZaUo2ydvPfwVucWnqT",
  "key23": "3UMMdniAkqN29duuG1kEtftgmWtFYsywqCUJ3n8y47GgQ1svWXBSNYB9aC2TwKQtyjFcWT5bCYRFCwNYLyJLZCsq",
  "key24": "5ojZMHZQgXmZb8xGvgpJLRvYFq4qi2D63L7J6tGP9Gu4S1GrLxDYseZ2oTto8NDZVF4CuRHvbjzzDHZJD1jZQPfN",
  "key25": "26D39grpnPhXkxyMdNxqHAW3UaPTf5FQCc1JvVP2c3TkJAt2MCModZ3ULZsTTxmNmcB4HPLbLLyAZzkxhZq8tNu4",
  "key26": "434AhmbUhzuJ5z3haPWAncQTtccqA667GggMgEUdFxxVuCHRKKVUMQ8wrk3do2gbnLv7ykFMZ4UTJ4VtufWLZzCw",
  "key27": "2S8LVneickUYECGBgv7v5Pop7jRijAsQmktG8pK1tR5KZQffAzRvQt9CuPYBXBHNR4up3r21iCx4QsfGqaA4M5ov",
  "key28": "371sQxf747J3CycSHCip1mf7Cuvw768rBPcwFpZaojeAHK7YPJZz3RRCRvdxnoiwES9YzqAQ7kRx2YbuNNx7oNKm",
  "key29": "3TeRznYbMz2FbYdrGnFKbBiDnhHTFzxznQptfnmgdDQPWvKqDtNMtyzpYBBMJUBRpYgbSGPsRBgBmqTFzpSjWjjr",
  "key30": "2BHKrRLNQpgmH5xVXoRGq3Jg21dGNf3TBqa9XmJfEtRZYQJLajJCYKi3jVjNj5zqdkDEKN22bbqk41xWRt8pWbuu",
  "key31": "44XcTaXkkWyu5R6W2pB8fYLgFDPtkpESY2kSFiNk9Cah8jPPHKPvuAFVJCjHR8SFTGNbtRw15SCHKQ3ipoJfNR5",
  "key32": "57KYFdwtovgBiZmAoDhZd8UzahkR13d8cU6Tnhq3jkZ4xAroR6cqWEyEicrWRuNMcKmQPZQqcPf6xEMHgYQVHd9d",
  "key33": "3sfXtWCp8DuEUoXbcFBrg3VRQM7Dpoa2uJa4z7MfBrFDwEQuLGUhn8yznDv4CxL4CyGKbRQ5DgBVFGFCRKLS9oqL",
  "key34": "2vfLFnnTiVs9CePMePoWmUFUhvw29NYv9ExcQqyqbaTWwEv4G7jwwShPtZybJtvhvc9r1wQDaCBjAaNnuqqbvZBX",
  "key35": "swedYZEBrQvEgL99BTtBQLADqpWY92xWo5ycQdQwEpF8vdWyVNq33f58zrBwwr3fds7De8M3DYfjU51i4MZ2U8Z",
  "key36": "36UQ8pHr2aEaPbbQJwWtNUjL9LrVXkRNWvY2DgEoQMGtKcbSreNUh1teKXPvb4z9dKG6KqF9ks6ZWVrD5puFQrbu"
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
