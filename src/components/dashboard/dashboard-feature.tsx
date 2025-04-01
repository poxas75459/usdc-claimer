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
    "2rH4jdMd3f13mYizUxyh9tUrfEKCsygDrSvd8jy7o5XsAJpkXzPDReRdSh9cYFfxKYwtJVS9JZPGcqbyoWTynDtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45P8SpUoa3xeg5iNUfVzNs3bvxWounb2VHyLjxnNBtevwuresbzwgEj4DVHWgjA8GZi6r4iV8GoqyGu3ysKk5cqZ",
  "key1": "23yU96aYgHRXWv9jWyeA41RAvEL2gFvjWRQ9nEQwy7b45D7cavq6D2MJcWtkg35YnXrEVK6QePDvdubQcPpA73fC",
  "key2": "GdWYjUCsVx6WTrqNt2fuAT7jeXAy4wi6465Cyy9Cmj8i7Ee1TiyewZYFUKGsDBazzn6huFNybX6jin7yqSuKTwy",
  "key3": "5UpJSnDmx52gzwcvdmyXmrUqYiKAabRhUwQgTA7Sw4onQZSAF8tz9ZPqWKodUDaBVfTXnDQ3rNTS4xnqgkRrdWJL",
  "key4": "m9CGJ7n31koZwiiwJfpN5Byt2bQCcPDRRZo3nPcxh83JoXHuBfJPyyvBQzDgKgSRBxfZz5RoCGKWyFFQtVn18JR",
  "key5": "5YtTU8WrG8VjFDpiPrpnoDe7GEM4XT3rwwgL4doNRcHwrusxUsueTy3geC12NVVCN9necqcrgc5EJ3MUbeH8f6n5",
  "key6": "34VRUcHbUC1qMfFfL8KcmwRHjtd6UKA6ByECrQPC1q7t42ECVSC74k2t2Sy9gaLBkPEiaxnqVCY9tkTPncMy14yJ",
  "key7": "45SEZYY9YoFsm3jDmbrWMXW6YoPkQaJ8fjK28aJumHnoDWBEk8uocwjiNUhYqMPooD3KpBA1tQk4brJWofhVLGGq",
  "key8": "3zDYtxoCL8ZeFQfVshPoEEfMyPdXJARLPKPizkmPDjZ6nKA4k4kssTJ4DP8aNhqiLntD9TTYjJEXYjBUeG7Cu4AE",
  "key9": "2W3YMZfyJzShHnLvTeeDkxR42Kk2owHac9bJ1jvVJRgvSdHUsd2JhD9uWMEZNLBbKXpedGdfmRtKZfcaaVTFDnPZ",
  "key10": "4pZemtEr5UzSFo4Y35ePoRwCg7xe92HxQwa1RU6hwXxFuEo71VrShh6XH4MCGCMyvTb5ZRfh97fnTak7zSVcuRVQ",
  "key11": "5CCofs2dse2AiYVeY1S9h37rvqqLhkma7tqSRfb8p9DVathZCwjD24T39vjzLUMX5auHgtt122VD8keia5rKr4Xf",
  "key12": "LXXqFiDmutUZXjT46sfBrCKANutEWeouHQ7LrCvJdsNG63LkzWnxQQQ7gi1KYq3uinWaPXPfUExuVCAq2wNz7mb",
  "key13": "52CTZoyp7DZbrjYLfMxkCzh9SQz6ftTUuMPuTY19XA5TNao4srRLrSffW7RVGM1Y6YdkTaWWtvNMi9GMkairb5sD",
  "key14": "36D5PDLrwYvhtQ8X7vTkUVBG5xC8yn5VGSiYxnxyMFe4X9CuXTFksB9gyRZWoTKHqJL11vBharCLzKR7TBCc4rpy",
  "key15": "hVwZMiW32P4KCaBoDZKSVLu8rpPAsqrDNDE7E87VwqYbrvPpx7ZLpobEt77WfHHaQeyGoaX1AyYdJ6hksevirEP",
  "key16": "4wwUxuEwRZHvdaaH2fKRn71C2HqR11o8RrQFwLu6jXQKGF3mZvcWSNkMBqkdVk4CMKb1rvWVsgYrNdKX7bj9A8Jt",
  "key17": "2oFC7y2SLX8PU2C3B2y1yJmhU4yPTVRa9gLxDy7t8giaasKHtABRiWMVEjwN7NV1UtUbgdb34MrGbKcFdW2jXXKQ",
  "key18": "42b3ycssZWdYJo6NcnLBYYD7QqQLM8iL2qzgPNgUZn53p9Kt27mUYpWbjHxeK7xziVXWJGyXiJnoHgPVb8TLqFPz",
  "key19": "4M9CcXxGd8L57xLAMru2s853aiFzQzRKRWHqf286hDUT5Sh3jZBzQ27acBU5af6e7XZkF4gMDHASSP9XZkMtemaX",
  "key20": "GjytKTk8h519gitvku58mZZ4LyZPAvWpNDpewietnxFHw7U7T4zv6bVkrAoKKJjdDJmnAYEnuTmCTjcSRJcV7Y8",
  "key21": "4b7VBUo9B9jpivRjSb7GWydSihxP8N2Webdu62Lx95rxKqA8QP72jNjmL2U7gkfXK3DhbwyxgE3jN1Zo5CBh3zhD",
  "key22": "3NvsxSagX2fK7TubVABkwJbp5iEJAuTLLSARox73LpW18xtbArng1wYcPDC96J7XX8upHzXwtop6pQKZ5pHh4y6R",
  "key23": "233LwLvfZGGRgP78QsXc3Kz8nHoLET4QDFhMddxscv4n3QsJX3JsAZMC88z1N5FxvJiR28vZwxKE7D1VExqBrWq2",
  "key24": "4MWKXamFmhMHwNJ1hYvv5ikxZr5wENmMgtNjsGE6DNA5jrABjPCH6bD5tHRnxNhJevMLAH27pjTZz3BK563pyKGC",
  "key25": "41qqD5wnhBMGHQR6Cec6D2LYwihsFourkRsRyPaDzKQRi8XGZYtrCUieAdQxWYeAnswdRYnLSFwEzCQyVB9dMP5z",
  "key26": "2qqqVYMJTUrZ7VdbPf2HneMhAmGVMVtPfY8nsTVowDgqMpi3bpeyuuxFx6Gdq4cCt6p3JVYgDcVEhd4GbnUjvDZw",
  "key27": "29C1pc8a6DEBYayovMguMKdUBpNxqSCJHUyuNczCZZDaDgY7k5BKZj95AhSYkHBAMwqSxbcEfn1ZYPwYe6eFip3C",
  "key28": "2KijxZGojEoK8b8j2xmS5zjRvc4o3e6YxCdATRouFdBFNvwANbr1nTsDhrMrXmXB4ZQfFKz1D9v8NTpa5GTteJVi",
  "key29": "5qfJutUccgPRTW9P7LHshbzXgn9g7X3YGHKL64FxYGJFvc7cPz7J4rzWNa8g1ZgkiRg3ssbn2pE4H9PZonp7GxqT",
  "key30": "5ERcSeGM1CKs42dthFYTmXH6XanwVwBdakHW1FFvx3hFr8dfShbqFMCreRFoeCweJXfvFTemMMaq8WMQUWHwRmbJ",
  "key31": "A1EK7kF49xcPviVWPXhYEGesWngjErQhU2ty9fE4R84RBx5wfyZi6Yypa5GrDkYJpjpcSbt9j7nKvxivAFvHRs9",
  "key32": "3Bmv8JufXHbhpDSkchMMVGLjE2uFhPPmxVcLpUhNsLmWorbk7aBUiRfbf4SYoa3b6ZpvFZpAUg5A2GaNe23QVG4x",
  "key33": "3VNzpXoJVKLDjaM9ka3ktvficqC32nTHoCeitZ9kF4uvTcjetbxFRRgV7s2TegS1CDJekRr7DNore8ea44AyqfY"
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
