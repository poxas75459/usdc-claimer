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
    "3XPkrWfe6Db1csoKjBJYQy5v8kdL4Ar3R81P5XZwiuRcg6jaU6yyzr9sNW3DertvUQjmL2H1yABnTw5iUtoePZTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tEbxTroyv3giJbqDXFYdoTPM5DhaxtDdzgb3Km8HCFEyoLr5NyHxMdGaS4YZ8Y2ZA9tVvmPKVkBjWQkFYwT8btm",
  "key1": "5MmcN5rUTcRXW1FFMyQ9oXePSW9qjoNyxwB1dGczbvKc83DjrxFgsY6zZfYVoobhrbU7nSGgPuw5gxnKWfMQsER9",
  "key2": "5UtGLsnMUrNFdqmHNdTL57xWBg5iaEx5bQZ2vQ9xekWust6wC4DneNiaN1HVTwDN3gXkhkdvv1sQZf6VZyvQEjiH",
  "key3": "2qYu3tmDn7v4Y2DxKufE4qq4vAoTgmooH7yMMXJJ4LEPASWQfcNfcQxCc5cBbcHRN5gSykQaRYL8MWKbKYnHJT72",
  "key4": "4HcWy4BrtmDhH5XTX4DJg7CkVchhgGLQ5xe1WLksLWffYJStNLZqbPfMHRQJVrRTdT8HizkYom6uXz74xtgR8hib",
  "key5": "5BFNjgPf2tUzdBZoPdrb2UKh2vzze7fr68Cn3w8ENB3AGkqjPyC7Tgt4ZUTzUUqt2wBkUSM2xV7fgGRLhFF5jcCF",
  "key6": "2XLUS2hZNAgwhgZD4bUpgJco3yxYMhduLs2H3j8ADkofPvFWuNp9cKsX2WYjCGee2j1QCacLXgDTxz2WFWjNeebG",
  "key7": "Gp5QCETuwSxURRU6fBjKefSQ7PY43qTa5hJN5uwTkvb5EuQAdTzMyuHF75Vo5GLCp9rMAq6xaFAF9vn65rxeogW",
  "key8": "5JF8SLBFkh6W8QE2GN7GMdMJjRSVeeEfyHZnN7g6sXfE7vA5KSLqguLhZfxR3RjJ3BviD4wRH1ao1mB7otnx9KZq",
  "key9": "53X8jKz7nTmQxvyw817rnnyY8CKWg2dMHhHBZc6tb9C4RXsZ9By57ogj945tY3jZX1AH26oupXRnYxrnCrTE63H6",
  "key10": "VQxoDb6paGDdJ5XH1CXKQBD6RhG3ypp253ECS5bj3nUPqEsYzPRo4xYq17Nh6BfhBGDcoJwNzMVjUj81PwSJjuY",
  "key11": "2J1Kko1AGfsxrJ4qJ2T2LC1wjhXsZgHbxbEqogBL9rFHpdKjG5LDoMPg6cVTtskukwtkhSPnmiFyqrCiVqVXEygf",
  "key12": "36eq59YahS5Jf7A4rYicQYJaYYTjbdyGF66DLfAtGj2DwDUXaCjT3LRanyXPKrG9zGktbeSVui7cCFPkiieXhhpz",
  "key13": "EtkbuxxzAjuM2RWC6L1MtuYMGQzjdXJ8xZEi8hQeFwTypb4AuPf41D9GSpfB6umD8ydKfj9DLHGSkdE25jrnjAJ",
  "key14": "PpNK4YDfHAxJQetzqPK6RdrkpAezrLPJGPSWiwiDMzeo8dy2nA8QmfBi9W2WnKC9XsXySvVrh2WMX7S34Efn37g",
  "key15": "4bW8MzDB6iA5siN7zMtkPCi2Pvc8jRTfVzNTJEX7HhDpd1CRBRF9QiuTmNKjTEwm8oCWDTZqyMR5rpzks563VkdT",
  "key16": "5o8rUGSPcqAqWeekgKcya8FBi4RmM9ReCXAJGPgwooFsEd8LmgeZxtvGD4LqQ5CVeMPjhauxmCW1MuRD5Ryv77Vm",
  "key17": "56w5KzM66imxR7yYwm7CuLM8dQsovg9sxgDNq2NSXVbgxoVjJQWJfLbtC1BBLDJ8PR3FjSDN2K8zFFiNnz272Nny",
  "key18": "2PXGogtztnBCTPXrfXDAYpVmpjcEyRtjiZSX8UudUNGxsdgCjZry4sMLh8ke1dY3JoXAvxi2644atQuQLhfiE9SV",
  "key19": "28c7AAK692HCXtU9mSXExDS7Ntts1T8MW3rjh2VdcEz9c6B5pgikjxjcZ9B1bLL8bRefdur1yRzKrFpZDpW741WF",
  "key20": "2VVQae4L9TvjJrnWzyGeL7hybM65Wj2tGEd8H9qaZHD8J7kU1HgcMg9vfYc6Z4Wm8TpTHiJMs3LJrnVtVJRLBf9j",
  "key21": "xrFmFYUcvxNSabiqQXkZccRUqqza4cMtnqDorgVBxLB22DExKh6cm5xWSq2yfL1kitJZ8sPDeNFVPih31FqpAkZ",
  "key22": "3t9w6rR3jyGy8pGnVPKXwRko7CyepMGbe7ERzBPsRAq4yKJ5ykH9GS3a6CzDjpTYGnnyD8PVibUrLFoGZdLM4v2E",
  "key23": "WPyoN9iV5n1zhgmTj5yauVubEQkkJnJtETCGfdykaB5eCUu38yfMqAAYEKqKnqXw7GtsT5GD5CLCtmTcK9rKX3Q",
  "key24": "37gwWCYhbk9RrESTPGBvSs3ij2gDaPiXn3p6PwQp5wTkNYbLav2F8K1yWubCHqfrd4ZodtL2M3cvc6ak7HAgANTT",
  "key25": "3fg5q95YHXTkVjeP9d2UngLGyFark6v34HcZ25bkuJLiehZ62rRWUmkSmXYc9xAfWSPRPbGiyGVBJtWLHj9wKyWm",
  "key26": "3poJS83DfoDeFyqAxZLbcThAmXYikiUKB57vR2qinY9ZZrHExqK5VPnJrzbKfBi52bfPo6DqsmyfTXcV5ASyLiSj",
  "key27": "3DdNGtvEQjUu7dn18DEMPFttNrfBsX9Ar86VTHSHmUWZ3jj5QGWATGhU8RnGUp8WsTttr6oEb2LNzcGSPWEztrcp",
  "key28": "3N14umwkhfv4rUDBHDVmPiKLrK14joWyLYeaeF3zhcTp9KyrY4kaVwsxFB7Dc9jNeRSwAAjsLa55Xm3KuryW74kM",
  "key29": "81GywKLihFUxyFvK9GxiQTwKtc96M7kVL9TQvm7j4T76xLo4BsjAEN2NXi39DTBgj89KBrQe7qRNRWdMQ6Hgc35",
  "key30": "2obgqU58HpWLL8vhyUagvvKgffA7NzbUpRuHMBjdNT5tv8jKCo3SRwqKWj7G8o9g1WNCFvRHjHSCqnJYSnGxaBVy"
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
