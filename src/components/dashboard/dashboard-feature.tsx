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
    "4ezdap36EALv2awMkUt8PuDMK4L18RYt7UoJmTHdd66hmuJo7Vsu1bYE7wARtSHKiUwq7kLuKSopnVPpF8JQBjgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJwfidJH4y591puQLcpptHUYu6bwAAes3Q5cBxuFfmW3Ji5ogyG3Kve8Guind7eq8eTUsRvMs5zc9eBwiYBVafk",
  "key1": "2hQ7Qk2kUNHVNEsqmtCVieHHSUCTMs1hSH4JBo5ZU5kiYzmpLiwosLHUyN4uw7ZEU9DHc55Dq9FF3bDQqiTRo4pR",
  "key2": "4ciLEW2t8WazW6wmFP4V2bho1kFsZWg7cNS9RbpGUkmsSL6YWWnVJpemo7rpXc1uYRnk1JmF2eaHnKNDE1M3K6T4",
  "key3": "5RXt39gZ2kMJqDbxcTa1WpbnERE7AJPirNCCQP8U1tHMEqFXdJ6MwbwjmniUY7cQyrqd5CKxxGPz9gnH61fWqZBs",
  "key4": "5w1DJoBn55EcvoMzjSpq6mcneETMuMBmX7fng8hsEzDS2bt5wANRW8DDpdSyvmHvKLZ4evdoYuP3xZGu6UCYZJM3",
  "key5": "aeBh1imciX2s3KBfx1cFDUU7SnkNM9ibNa1c9GZu5ypPh7SRbxHFFTpU3vVekEuTc9NrEeSPMyPbrhGSnprXU9x",
  "key6": "2zNe2r6R1pcBhVi9j3CKTKS3nL69F7HbDtGzwLNqj4s6Voh67Sn94sjmjFZqbd4BDgKJbjBN1znrPqvDLHmnoQpE",
  "key7": "2rEaff9XMtms4Br1oL6PDXDM49ydtJftXhUrWsGEAbT3mKYm5eVChu3aKwCrZfPLgfqpf65t5CooRFVfNtXHzFsZ",
  "key8": "4aghtUTBVjUkuhAdZ6haT7dJZZnEGeyj4iYzzAGkrtGrCxDrAMK7LySdj9wLBJRzAqJtr72EQgNJ7Vu1BSgBd4w6",
  "key9": "4Br4Gm863gdxoarbwF4Vbs8YKbS9UT2NtXjLp15TptNLW2YB5ik1Ljt3MD1PnzyThAtg71dW7J6oQQRn4XQdyXyV",
  "key10": "oCBAfHvjxEWFKeKJ9XnM3uvPBNefi9AGYWBWDMijoEQ1SZ4Ms3CAHkbpzipQZueC1QGgWK2DHUUPD2GpgacAyBA",
  "key11": "529WRJBBPGzpdN91v8e9XuVJ2Ux2DLbbYEbvKQyt8y4PdbEhYW8ncQdXMmfqWYi2AJaBJaWnSjwa2tSnupDpEMZY",
  "key12": "38qsJ2EuuYGdqqquWn3RLPWpNDSKJfyZJdyPc2WZtByo8xkgHwVCELjJ8KJQNz1WsSAsJa9w6DMxLWJ95K6pYkJo",
  "key13": "4ZgQEqYn9KdwrDCUaFuHuDTxhw82xGn84egP149nXVmxdjjMCRJ1wPY11EUtvwib6ePufKAtgUs2aZ1NEoRP9RYz",
  "key14": "2sTKGPhBiAmugcu7mp18Ljn2xXKF3whqpJoFB4tPZrBz7LBaShTDHJdhCKBdUFCZCcw7unU2JMfW4xmeyRMK3tfQ",
  "key15": "2M2QxtJKVFJmEmzvYhnXvfFV5A28zRZRD4rScEtav1Crx7G4SVFiUuz8mNyZaoRH22zUdfSn7WcKpbrU7zojv5eP",
  "key16": "4ec8gJL5wjphANC2rDzauj3t6S5WVGHFn4XUXeBYTZyxtmNTRXohckDbwVfAZCQUr52EY8uNUhZotex5KoF7hrwP",
  "key17": "ViT5YWKpRkSrks1RkH1ZRvqryFeg3GyiPvAqwZZM5K75V5firxwozHCybxiiM6gMRCZqQymHwRPYFD7RBnEdJze",
  "key18": "5pfa7urGbp9haJJGeW7Z1vnovLmsi4LqpmxaJ3fh7yfaJZ4n7TS8k2UNSparVbTCYcwaLZvV5QWDHt5J3Lxxan7N",
  "key19": "4xHx7eUwXDbidbp75mBpigxWeARmtyumFNgY527iGvnSUvhUVDEiQh9cAQaRXunZnxyP9AFJWXrKaRoEjcrxpUdU",
  "key20": "4dABjotMTjNrnrbwmJPC9JeiMyxyogzQ68Rk4wVZRE1KxYmAefUB8xGJbA6WHwMJ7teUP8VyJEaJXYCtCn7XJkSX",
  "key21": "3eQPd5oXkcvsF1BjESjJhPUAe3P7D5DvUK7L9TPneJDK3tBnH6DXNMHKUsTmJVhdmueDF7xbtLBKyurbfMZw5TZZ",
  "key22": "5R6RXbmyrtejnXApMHRmhh1imyrp8vTUTzUuj5z3s5DnNyQuuSVFR74Y3M3YeA3BDitKXEMUrbxbJWeFkhryQv3b",
  "key23": "3zYDc9kJSL3d8z43tTEvzCo7VGuqVF5jonJ8nG5xkzUZ67XA42Po5MWmFpDYsehGrK1jB2zbXW7FNGBxgeXAKkbZ",
  "key24": "33EykaHeKyP3d8VhjUioraHQq1SCgM4F3N9Wsd8LoV7znJ9TXYjQz5ZDnYKsRTJSMNmiVfxUsTGJKzDYUb9fGqTJ",
  "key25": "5YHfdpJDLhbagRno72bvauMrbZ6RVgSioXzRD7Z8W5J8FXXHnihJbRCTV3QRJUtcJt6t8j7LzJmgDHgnYzcRRrVb",
  "key26": "E6C8xVsA3nYFQVmo4EHnajSUMxVtZpKFMMJqm8quSu7mxuJkg5Qa1ytsAkPhunAdbaAENExekK4bzd59ujxQT61",
  "key27": "4j7gxFUtcp3iKsK1xa9iNraScSU5UwXsWqmqYGm9ceTXC7NYUzNBxzQ5RCZDZFizUa6v3yCV7TbyEMc4upSWhcGU",
  "key28": "XNMrPeiuapcrh14RvbfuWQSuvNjK7EypbLDqh1qKL6GEmodWUZMjjZRKVLLam8fibTo84HfYGwNcGoyDwZLZD65",
  "key29": "3uhBxTgUMQcQ3QcJPxMQDHVAP7SscgcrnBmBaDKsAw6nPUJCwoFkRcjMLQfDDKYbEcobD99fzLWe9owp1TrpaPLb",
  "key30": "3k9DiQb6vHBno9rvBoJRdC1QVgC4EjbGX6QhEyAbdBS78XyMjwePigZqiDEi36JYUXS8WHhHHVTZ4CHSqgTpc7qE",
  "key31": "21KfSsDSz6VXg41abjTPezQBreoWPUsfo1MzFKkFEKbkbvNXsgDnztsMg4dZ9DweHU6JMrgvjuXs64Z2DZQQq17V",
  "key32": "5sKFBVVmgKWuqrVpjDfwrQAAYBB15NftwBc8wCR3S3HrwAy1sMGSxCtdaUNLm5iPAnZ1ws9pZsRtr6Ac6fPj6ApK",
  "key33": "2bvtcSXwGAk1NqV3be7PQ7VWDDFGQcWq4k46KJQNeWV1CWbRHgVQV6boMCjEFxhhJZan181vfV2h1ohfH5x4NwPU",
  "key34": "2eVs1d4aTGiNNGDjXboq4B4JiaqRgrXtEsqhii7LiXjsKB8io6B6xPzxbRf18AfxiScNZsDumeVLQpcX6bBFPycv",
  "key35": "3mAXuRFJuYGtA6Ddq5ZTDVdgCB7WPHdwNbq7rQPHK2KoDopTRFLxYETNHH1dvPYMYb9tGfYraoJkxh8ZeQ1qNYKj",
  "key36": "4ucMwr4wZMWrwZq9tFGoDFkdjAZ49fctXWxe3AYvLFxG42KjV3GiJiYswaipt76tbL9py9xCihYzyJFkDp9F1cKf",
  "key37": "4fRLrEwhUqmDqEMdiZrb9MwUaziqvzXNrPEMxDiwZoAA1ZTHvgCmZNVTzEnk4NC4wg2U2At65SQDUedw1tzxLSwe",
  "key38": "6mA5zYYBYevCxXDms5itwB8mHkn91GUXtzqxSFYMsehpH5a1nMTWpPtXRpmh6jj3nETPJGQbD6voKuK2EBzjrn2",
  "key39": "3fAqkeHef2CaKuUr8ft1MKT76ou7yXV3TNeKa5fAj4R2H4es8Z4ZUrJX2titCo2Lh16Z83RFDYb96ks7WYFXpcKr",
  "key40": "3UEWAtoBGXfu3kf5AXkiPihzeQRvLd31EzCSQBcVHvbUdgj6agAeQu7ZdTAxLJ25Xdc9peRMjzWFZWfurfvreMpH",
  "key41": "3tNvV8FfyofPM2mmsF1UURfha2kuSkfw3Gq5N51Z43TKsG4oQ64XxKjLQXmpHhgjBnBHWriMPFWBmR3eJSa7zLxm",
  "key42": "36LwTNpNYMxQdVQZrwUSHhkbXCChJkYAHYDio4qWUZZzYTvPZDuw86m4KqLXSG38mcVce8xaVEfwgcH7PC5HGrkj"
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
