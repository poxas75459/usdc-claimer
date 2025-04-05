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
    "5khFHf5ZZ2sLTsRoh9KkXgPMeSuFr6ZvdRedcZWFgDpH4bCSX59ZW1jDCwTm9Vc7KqJzyfEeYL96Wr6eVdszqod7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fR8HGStkVniyZosehjaWkAXtX3TxZYXgMTK4TUh4wMM5hmjzbbCWjBb9r7SFGqCPDAzVkZWKpK1Fk8TfZWmTJF6",
  "key1": "4HRTkQpQ4A7CJ4Jc4sWMNzaeqnz7653yWGk3NHJCo1jS8Wr3pYk8KYr1Yp6YxqSVKYxZsq6TDJnVZL368cdfYwKA",
  "key2": "5G3mVf1oYj2VTfj2XjRAs9Yc6byfgvbKR2aHuNpiWeSMgL4sk5hDFVrd49xFEQnkxsEddAAertf7mLvLTj9VGTzE",
  "key3": "2FXHLoKFqp1hTVWJFcuqAWA1a29ZPRSAowdk3HvpCamaNr6zTWANdAMH8fEoDkxH58E5owwboVdxDjtdw6BWREDA",
  "key4": "2BpLwUDC2P8iNWfGXAKYHKGDWCZq2amyhwcm5tZzJQ3V6daCYJAh4rDHeYxPMEtDD1eDMW65bDF7gG2y3keHT2zq",
  "key5": "1189Yh5Fhc5ZXVq7dWMSiKTUrUXvAoCUVJ2iFAxhry1AMr4F35x2omXtZgDF96dBBJpj1efhM3y5bLj3VHgsJCV",
  "key6": "3tNvDzeDGMQzRcjLU9RD2yiHCA5anxPmgsP1NkNtSzRWpXvyX3XSi98sT6M5dZpqigcvTTkthWjvaqMDc7CRBnTm",
  "key7": "SRdGNYcmTsJYyxF86GDhRP9yZNZT8sBjGetXjKtGLBDtshtZZszvsAEH4uG4tYXCnFtfiViFtjhYj363nDHAvDU",
  "key8": "5pw3bj6xHUAp7yLH4TRyBBbEjzvAKynCnXcYnFjKCkJfLEVcQQhUwTjeEH4iPG3ft1v6YNJmy4rz3khjNG6UaGXi",
  "key9": "2auUtQnmeJhR7bkbqzHcTHqXfCYDS2xnibN4jCLRwTYeuxpmeETUo292zrKEU6ep3XE58dAK4aWcjLfN6sXQJYNX",
  "key10": "4UCW8SwXkrmaQRPGYJPEZUPdvsGTeVa7QJ6wSJ1TEWYGvLb6QsSJpNr4dHYUMYrW1WWMim7VExvpZ1UdnLVYJ4Ka",
  "key11": "5RgR7C5REwREYpUc5AKza58GjqoKU61XCw5bzfDMRgdw6hbM4jgrJkKCao1dBWzDD9vJqNUc8tHoNNBUdTx6LUEG",
  "key12": "3FVK4HBKifRF4SmMGGYBDm8QRG9xQwxz1uQnuSRQco82mFzZAczww6rGNcwASarUnELDZMD4iMH4c55ZKfiQKXVu",
  "key13": "3FyXk9C2hqzjsezjtZQ7JzQczK2YCV7Ben93mhtWQEWEZtj3mVwjWkitNEtLUQQ7aZ5i23rGPN5zoRr3Pi81jyCf",
  "key14": "4DTK6bN8whLQK9av6DsFxVNxbLevA1re7L5iUKwVes7zYhMzz5LaBDucNvmX2L74CR2e11SYmdMgAyRoz89E4722",
  "key15": "4WH2naSC55iPoDyCeksyW62w1dokLxqBD4e1fswtdV8dHfRpb17R1YCS3Xy7QZF4xzK8KDFBeAyhRpqtEG81Uz7E",
  "key16": "3RN32ozeXPjLLi7iPb82ThrDXKNRVL2o6BVFsvTLmpz5cm4aY6dLxqYYgFybpu7SxVvfcqFUdaYtMUg4bKCBJ3k1",
  "key17": "WSNCcgZmgxMpxH9CgNvqC4ia2gWCqmmAhPgXpyZwAxHxBzHqFPH8NexAoxYGyVqLm6cS6gP2tyLiccXyPVYD2WC",
  "key18": "23GcQ744mHN8cuXDkhgYMR8C1Gcu9LcMe3wX3hkzvDmX9czyR4UiUxebiP8sWV3PxWPkgvqboRDs5y7fEPhWF5r5",
  "key19": "4D1hZE1XiA5hZ5DB2gssmHKpGE5GLoHcX8gKvbFFrgUjqoBwKRtSGYeuRg42KS9Q8j4uhem4SjkBsYh2ZP2iUaSm",
  "key20": "3W86NJTTPqdztVHiXLq8fmQVj8cieai6LpYuwqQBEweqh1DwqJo1MrtVc8LCFeBuX1TtaWSRKra6jouusLduYxk6",
  "key21": "4TXY4LUs5mjyoGKJwR8rfc1Z64GLGxiqe88MeLZnmjHX8GBCEn4ChmEsmDcUo2jZCPwUUAP9acrBAfdAAKzb1GTF",
  "key22": "4PoTk1HYrTJbBrQP58qAdVRKwnTs81uedzp8aYmZTtZumb2wKyRyDwjdTHUGx4GTDKYS1n49w3U8ZLV1u2Ms4ZwH",
  "key23": "3HCohJPTv52DsZ6bjZtX9fX8fNqEjiCxPFtQpUmBytyB5aHCZMuQUPueiBMDDta6YCnkCAAfd1aTAvHaXxhou3cB",
  "key24": "4AeJiJV6WRoQdDc5yq4eiM736LMQyWMGtpR2An8z9uV3zj3Bre9AHnpAWB9kPN6YuAxqzCkVx2sBU6QtccM1133",
  "key25": "617EHSVU2ptWLwKskLHPRwhAF2jo3Y7L9E8a4xgBYg1K5gHvyZyAnq51HUfEppQLWKvmUomAiDza3nTo9kKEbhXd",
  "key26": "5gLjGSquomJznHufDCWYYxacgqJEgyghmsKrxLiPg9HLXhpMnoSPVZ663opnnUax8dNCmh4SZxphcLUroAGfLXwf",
  "key27": "4UDtiJJ1Jr81AuU56FjjS2AmoL3CLvJoG3PtsiHR18AMAEk8YY3PgEdk4zbptiZXGhu3VRiVUsCNjy6DM1m2ijbM",
  "key28": "4cPgvk7brWa8nwC8uwUKHAcH79PdfuttHpHSsLbT1G5xPshToju2NoDteNkQ69W5YNnrz99xrnsYqJqu71ThvUba",
  "key29": "nB6DmkgPDPFobMMRfWxEpPZtWY3eWZSXqZXiYYkXZxV6bFBJkaNau6uF3r4dmv6JBnizK3JqEejfXwF3Eo6tmR9",
  "key30": "3wSJgccYjFFwQoJ77yKdtKyncLyqn325P4WbYiEVJc49HxGimWDcRRbsCXiVNyYGmizu79iqfoczw1uNHWdxkcu7",
  "key31": "2dRooQxxoDoVeYRCJM6QEnQBRn6sW6454TPSyWwRWt7hNg5QniSBwmbDMKyd7pN11aFpoCV5Lc6ShsNYby17ShuV",
  "key32": "4kxJGxqqSm2wU5HbkBZ5agY5BKS61qkUdbwaQZmPZHuARSpRN7fDF7k8d8cMPFghuK8ChX4BBGDUrcRjeZEpkqP1",
  "key33": "QZQEx8MSxhmDdjjqWnpq7YLkK8zuzpA9HBqxKYC1tZ16wD1cYYgeu6vFYdhS1NMES68dTfxT9Uk2cTptDQc6k6Z",
  "key34": "5vkN8oc64ERG8RB94j4vynKo16tVtdabV6wXpScJJtLP5Zg3ZhYXVwVo2H1CkwFQ8jkxtbE2afhinVh7trHXuWLJ",
  "key35": "4VuibDxjxiLPjS3QkTwxvKM2f9o3SF3gb7zoXsb1CY28DN2XxYwXw5LyYVfymSZfa8c2WCcLYXyb77SGacquUS5M",
  "key36": "3tJ3E6ZnKsM5KpPfWm18kQgWC82jAur4Cw7Ng2bxNvYSMbkgWv3GYLpeeVNHoVG5YkY8MUUn4mmAer5qJa5GKEP6",
  "key37": "3sU3REhrwNzfPRNBAhEgzgdtJVcNCjEJYQ2qGJo558swFTaJZ2xHx3GxBTtQitfEHawhoTL8vc3LuiZgSJpEaQMW",
  "key38": "5P6ZCFN1QrdruaX1o7rBv7PvzVAx4boApLceQ16NmcY4BZ1F8Zu85hnKJWKvbhTR4di4H552RTx6ZrZXVouWvA3A"
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
