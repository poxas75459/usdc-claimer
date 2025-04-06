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
    "3RAqxF7XtK9dByMpC1nTzA4kFvwdNZtZSbEj2P8vbCMKD9g9VF1bNSG2WdceeBBJ4STY7Mg8eXavm52vq9A6KG5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQjVamZds9ZtjfkXdiNXrLc9GoXxEbAmTicv7U5D1FjX26GKP86qDThsUgp9rzrDXYTneZA4HDNb3rfaUFecebS",
  "key1": "5iWzjqtzcMAws7z8CVAV6Lnsyf2JmSUu9Pd1HsNPjS3CUkjtvyodft2G4XLz7bDQyEyvamkPMaFfyoqfWeJfnoqB",
  "key2": "3Kp4Jo5MwctWvDtHD7RZbbkrKCRAfxFeizWo72cNLeY6qiqYowBPadeqjWM2DSwRTkyaWdBV9qMwAG6JK4JX4ZzK",
  "key3": "2uLehHRvXUXW9XCCYn4aPKgL5wuAp59oxKe83mBbRZGD6sWqi4p7tBXAgSkawYyMLefipxKQZyBkiK8PpR3JD1Ww",
  "key4": "2GkNc2iKvkNPuuhwY1m9q4JdbZwQWmcpDfxZdCJFYjGTcBmRHfFCbKNhNaistcC3yZUDPJd3AmewJowD1QKKaQJR",
  "key5": "2oUcFm13BHBSzVn4Df22LY5oMKGS52TTPPBpu3W5VvEbnf9kKHe18TYerGGcDDrVumR15muLuHSS5bpJ3TLHe9LB",
  "key6": "2nzwj7QECeDptStMXLwQZcszB843b9znCExhNEtbiNH7p3NRQAPJ7kU4PhUJBUf8k9PDbdGbw2tfoAAte2gcugqs",
  "key7": "5nXzUKjY7ZmgWox5GCtoRZvaCjDiNqFEY28VYnjk6cvfNhGDvqXKU1JYydgVuq4rbJNxn5gVk9MnXn5pQkcnV7Xg",
  "key8": "2uRzjeJpAvYjUCj3YvKzMdraJBiGXLWe6oGL2cUyRPzBN6dESkvxu4YtoxjMdzdrrcba6UdgjPRd5VNkRurpVkgi",
  "key9": "5BENjWf1MkYLnHaW1pNn8v5Q3SsXcKpcasm3UtYxwLGokBzV9iLd9bS583Yz363mfFeSzopLJZuXXQrzpHn8ycWY",
  "key10": "295kSpM4meeAipaphsC9zoxG9hd8kRAHSEd1jpA91Jqs9yDTVoqzzVwLyKx2HzYGdXAwACvbYRGXD1JWNmDMRaAy",
  "key11": "smVvcW7T4MKLQcGV837bf9z22rVyi5mxNHHf7ZP4MhfhaEDDjrKokefSm6VoyBEZyDcgJJYmTYdu9r2Aeck33iN",
  "key12": "4hrTgzHRGTNr9PU2VWHQCaHJmM3d2YwBkKerafbBf12Z6u2npQVpwgJKhUi8YDToYKWbWqaUTpXrJ7xwALas81on",
  "key13": "3VkMwrvQYfdXrHa1dL9YNjmWXRwutzC8CZWPLFVTRvkXKBv8uRa5EZw3Futu93zihEsUsDyHXxcpX9jDoYtNhHPz",
  "key14": "3wfTabHbug66r73DUBh3rK2Pac3KUpHSTpfw8V4YAF9eoqXTm58iq3WvdhB7sBdk8z4K3cctRGBJhYDrhGbNrM5",
  "key15": "4VsHWkYBBFNMrkWUBxU4Nq8rYBrHovjjRLMCE5xnLkCBNivn4rjfjSRMLrahGwv5oPyQDBWDZKnNSeWWk2xgJzNn",
  "key16": "3xq9iJ9DVUzYTYDW1W4Z81fmiR57CjpGgqWu5WX3L2n2aaUPVuLgXPWpS9FxqEEiebYAUmpbyqVtc22EXxy8rUhY",
  "key17": "4Ks2p3FnetHaiYZTzSeBnKGBVxGTLQRDaa4VeCR1aen37k2om7t9LKJdCnuXHspLtUnRBvi3h6rVr3sr4E6uBwnS",
  "key18": "56jdus5vdy3e3gh1BUHx6MG7HPao27R3FJYBmdEReTKMBkherSLNhTb3hAKmz647VRxQy4t7aFgCMHxEBYJhaJM",
  "key19": "4xVRH8X7GVSeB9RyU3AX262UhJy8Mh7CNPGq1VagK2Cm96XjiFgjLVTffi17Cy4JLgmzHzh4a142yn4PY2VYjfF5",
  "key20": "ZUdHPesuETjSt9jifp9h2vznWjQNUTYAudjBQYMHsaMMyWyXrnNLtaFmPU5XRw6EiDbxZ3tCEwqXvvsZprwS8GT",
  "key21": "38DfvyUNzRaDpD5JYEJVViyZMz5pqoMr7SXw2j2RbXxQKb7FpkxNDhiwddMesMD4Au4Bf4nLQFBZirDKHd9UDAG",
  "key22": "4YAFKZ1yWsrPRnKbZFNgDBTJ1gpU6MJTjksiKtRRezavYzG3848HqQKpxkGaXtNU9VHn6VQQKcSb4iRLnR1eyaHE",
  "key23": "5pafWpLY5fMKJaUAE68cucqDbQEtsf3N7Tv5QZhgr8ZDtDQjjzyWxZQVyokP1oBFvtEhG217scvwUbdhvovTxQBs",
  "key24": "5DNMLznaVZ6Rbn4QJNvmogGoUo9hHJsk9uEG1hgnViAkFakitbjdgmCZjfX17cFBkMm27H7E5B4KHUWDYoR2WLJQ"
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
