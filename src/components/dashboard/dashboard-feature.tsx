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
    "38gzn3gEs4zDzp8UrpS8h5MsAczCidpnKCC3Uz2cbuKikpbwns4o7G5TLztNY9NHjaqB29nuu645SopFU8j5aawz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ekktXJoEMVjDiVVvm6mWbNxmp7YeS94C2Z5533kBmrMRjPeJLgtxJrgAEBx8xfRFpt99DD6QbL4zTFwALVLBPNy",
  "key1": "8KmD9LBB79GWa3PdLCYufPNmfYmdQyaAupB8oTYSLnFQBUQyumTg8vodtM9Zq1b6cutt5DmAU6DU22yqFfH84Wo",
  "key2": "4z5UGZHJqpNAG93cFksDSdXVuvFqsQt7oY4GHZZHk6rmEpVjGmpmpjkdHBqn8HetPQKgX5Qjhg1BqNqQ5KNYpisN",
  "key3": "3zSpWuBHGaRyDg5q3Pc1sS8gvULB65JZ1cFSnwMWh9uaiooHgUbJM31Bvzwh3bB8Gr8i5WSAWPiwQ7j9yQcx1zPC",
  "key4": "XFT5UhUhowMueRSr8mCCZnYMm36DduqLVeRgPr8rtp4oEpgwtvbbYG5GHPHWiu1trNbkuwmgvRnY3u4hkjoGmoU",
  "key5": "3SvZwYTtWWX7fNwhWqVM7poqWBqrBRm1sJG91n4U1wjm5cpWRpV3i68sp9DR2d6Gp8Lou4J7zaPaESR3AqhPeEGs",
  "key6": "F2UCngcQj8qUQsG7Hb59ZqEhZuiaBVXLVt29yh7Mo3JDcjjdPdZoK5UCqv1fGxTqCYutEJPpNUDDNiTyWCB9Zq3",
  "key7": "2dC7XfxcyNEh8ZypUoP8JkSNsqWiNakK3aWx89q1s4gRyw8JZkNzVhSwZ2eJbTjqAfj5Q11Jb8VrHyBReqjw7Qad",
  "key8": "3uXUB5RPzpXTqggSFBghjRj6o6L7u9nGhJzH7D18dS94aQjpUP3DxvZnKJgEfeeji7k7EYnYJaXyRKMDyE58jUH6",
  "key9": "2buDX3CdjsFVL97G1SJza4XeZHRLVywbbsQyQKVFP7Vvs4UVarNJciz9szc2hYNiqk8LCqMrsosKavmkCcsC9znr",
  "key10": "513sZAz2GoCGzQ2TAqdzcgkAw55nfSsWQCHhMupQk91Nf2XCjJssVifQtRb3YPx7FcioeNyD3KbbK8Z5d63EQEyC",
  "key11": "3Ax5jqF4d911CgHj1Wy4X8rXhyUu7vaL5KmzSbaZEiR1QEjCZbFqNNzwFERARoHqaqja4D39fjQFAUFTyhgWMThZ",
  "key12": "5onV5f1kksWdTpNjZHFuVTzV8AAU7P7FZWgk3sEAaJiAi3HD6w43kVYzaXyajyhJtc5hJh7BNuhQeMCBL6Xqng9f",
  "key13": "4F1QZ2eFYdR9o6XYgDtdWyEybCWeAeye3Do7dKHuohNMVbbzMy6LhhqdYUoLgF9wvhAAgitdwi9Gb67Bst3877mu",
  "key14": "2S5dyE1TXNyoAMBNGsrLPBsUgex6yMqF2EnbbxUG8oW49bFsqyDnGHnchctxRhjGD1SBi89iEgCK1zwaWnSsihA4",
  "key15": "5Ts2SFD8Sx3wzb56eK6k6CzqQmLMWyazYAF2YBqPG5pfF3r6rw3UrxnE8e3qwDk9eKaALYBQo2zBZozzuDew6uxW",
  "key16": "2M5WvRhUMYWCjrRgPVt3c2DpCU4DoS4aUQiaXJbq9QAMYJ9Z3yfLjneRD5Z9Qvg3rhHEzqDqDm1kPhzrXyR5E2xw",
  "key17": "4sxbYiQhexURZdaEfuH8DWnn6rkC6zUYBwzD2Myqd42hfUwf8K1czxgFC1UUJc9dE7EJo51nNq1UEU6vNR2KA8ND",
  "key18": "DvFURina61tQ6EzbiRt1fxGPxko1aYH92bRGfntyBf9jGgGFz49vpxrTGVRsjUganPcA8Dv8d8GdQ62ZUVdoe9R",
  "key19": "3MfWWQHWmoVtL6tQdefKLqzzcJQwMBT8dcfVM2WCHbKeBZViRqTTug8rkGXAM4Jtr7ZKcm9TackLt3kwsH4KkWWw",
  "key20": "5N112ERr2Y2BLnYQ7HXBwqEMLukRXfuSJZkBfu55abjiEqJicBgooir4DgpoY72h3Aar3eqasvUvvgkVQpnJSGpS",
  "key21": "2fKibLWq2ctFaUHSrwDjmA7W2CatRCtFgyFGuzY74b9bsot9YqxcnbqnPixYNLhbskFYRfvsiQkuCQxa4et2B62u",
  "key22": "64TH9wFXrZV6mijMeQfXhCAZ9p2V4U5ZzTGgti8YPLxHLTKitpWQmTWJAEyrpfSaiSf3igwKLi5iATa2SeX9GjNX",
  "key23": "2nkvQvfC7bNNpU85pS3JFJ8fV74pLdf2R2T2GJNEQEzBY7Eu5PuVbYwu8vaQ1bxMX5FEVQPGYB47xXawFBrcx5zA",
  "key24": "SKanoDBLpEUpEH3ajGhU4JvsxmbwGS2559uPFTyPyK3qTgmyc9QmBo9gvvNmxc463LrrHnynAnuG5CruR1rAbca",
  "key25": "q1jo4SQauYyUff39NAvcoxKgBMqt2q23bMfbDW5HkosZvrnUeKRnssCHMf5BccXRW4xNHmDaQdEfd2zQt74aFyV",
  "key26": "28uyHrV64GuPHACZ447W7w4QBaUmCDNoYJD4bYUsbE7MxpbGYv4KjHbZKQj5iEzHdcUwZxexo5XNxJTwF8YZuA3D",
  "key27": "2TmemcbW2RxiE9bjqY75cT6wjAas7a1QZ2RHpE88YGmgjkwyoFUAZRNqu9og26wxH4cXCFWgRqbwb12XQ7Rto3fM",
  "key28": "2h5RbptkrzfdqpR4TxBsicZ9zXbZTd4iy1EvPMHaej9PCRFi7eKKR6TY4n2eHyn69BrwD3UoVdEdzcy7gErjDzgt",
  "key29": "3jLiX9pcbc2UFKuFY5Nj2zAiXNtWn8JKJ4odh6n5Ub85ySNAQuamAaQQ3jsai76FGeVSxHkki2ZBnxywpm4up76k",
  "key30": "2hZ8oGXn4ezkKv8uWCe4pzheoG2a2QNSF8drQagnD2MzhjeTB2jVrfhvQs55AKyvpsREHsb1vqbC6FrhLR69N4uk",
  "key31": "3TP2grFGpyifMDoWRfv7onEcAqPYWp48cAzK2CAWe2tGHTJ4mqh1rccLdiB5Re3z1V5qgYVxomrKZwR3UYYqi6Ed",
  "key32": "3YpobgKXbwFDqonnAT29ftmSYc28eEYutDFk72tXJ9xs19j4p5c4TtProefYSKNvpGa1fM3SNd2LYpR9CZcZgimR",
  "key33": "n6mgUhmpdZYCTzfgWVuRVBj4mDxcgtT4wpLKptbeRQeuVDewbnTA8fgHfPffN55xnsAXKj4yXe5VY7ykxpf8KUJ",
  "key34": "aSa3dGdTaAEMxFJUd48XyL5kRSNJLTFfjognVavJaEVBdvxQY1fA1Yk9jNVG5P7sfbz3CfN3VQerXqNAGV8HfPm",
  "key35": "4QMqTS6sFCoqbdQK1Mnu9UXRcj3ZkJQ7Xvooo12fe2foXd1tZ6AGxiewLqJLaz8xydEHnc74tsxPGfcw1PpfZJAH",
  "key36": "5fZQUVWf3ap1igddqasDBQQHMqU8stLcGuzUes8sB69WaPQoz2UXfcDVGnLhDEUgebBsBZrdfEcMh8XW2WDzy31D",
  "key37": "3JoUK9NvuGQybQhQfxTe7Rw92qwSiXC5aEkWG71TJ1xZ8CHjpUWQzLngwvd2owoK1nfmEBe4PEJFrjeBxxEfirqu",
  "key38": "4QVrymaHXqYy9xVnm9ZND87V3aDvq2FR3kjNxa3Aw9nAmtQQNBgo9juorisVRJxCAwfe69rE3usJyRmqxxh5PMZ4"
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
