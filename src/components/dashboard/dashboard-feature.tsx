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
    "4rEgAz43Bq3S3ey77FjiZQbxFNWWeDp1fQkWjv74rQSpTSDpoXmbzG9L1ynMwFEAXdQtph27NycF7nnKxbLXwiUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GCyiJz7v6HoXoxcFtLb6uzTiejSQzHf9QRkK15TJ23Gd6Kd5J3UggXZT6bM5HzeSQtDg5vt7qttPvN16MtZR6Cj",
  "key1": "qEwLZzs3DAcZ1vvzge1MigWEqVLkZ3bmb6LKTMizJbDqQcdDktdfh8UhwHugnFj3Jzww5yz25Svd3tPLhZNfJLz",
  "key2": "2Ss2qqRcvhjRg9zo3SoGDn1t323y5TBjQgCxcbFW3bqdTzEM4NbkvVa6D5bLiiuGxwaRwZC6XS2jvtYjDGzofqa1",
  "key3": "5bvfQddmXgQcmKd8WdiqNbya7UgqrXP4y1anr6xzzsWz5mMETSPtHpowYzGNMRm4dabirm95s7LiZNMYk59Bfhku",
  "key4": "LLJaFHHnGCVnSZNuFv6iCNbwrG5XkE53PoNbrr6nNgZQj1BHhNUyhPpiSLfdt8Myhx7biSUuRatgn2Ya9VcQBzq",
  "key5": "3qJsLsfx3nAHVKiK3x5UzXJv5vWLoo8yDmjv5JP3XGHy1LXDvG2V8HjgWftG3FiAMLBtT7bHT3fJbrctaTmYG5WJ",
  "key6": "32yXYx2G34jhnTzGXAxRRRFw2U7oF8nXdwKF87hWXRVwjM93nudjLm3cs2GLKvKFuKpdjWvmA5WKn182rJZ3ftcX",
  "key7": "2HrYxa7Ghsz5aWySHfCvE8QokMLwrqufQptrxzejpiTzugPKGSbKaNybUsR6bhQgz9f28pMuPkEBtBmTemLcPTtM",
  "key8": "5hkckHiM8g97cNDu8VDjugoZofhMVJtjBprt1R3d9mDUsR9ijkqgrDg7hrmrfhzBKsTcS8Ko6RquJpY8L7EtBWHW",
  "key9": "2Prcq9kQdMz2RUtfQxtf27kTRNf4TsPHiN3mkTtVuhL3R6Q2bDoYScbGzgUuXYq5oZV71SLLEgQZ4LXgvxHEU5oV",
  "key10": "21hXGiWHhSwAnpkmVk7nNFE9nQTLZJgan8mEdRid7P9LpEYUypZwFZPaerPdiLC4SNriye8ezj2Km3L4frzANfZE",
  "key11": "2cNnnbrmCdRBNVixiSAZyB5nwEdGYt57wdsAfmuR9bgcapr1kzNd6ghA5u8fU9KeCz9sEzWPvejfNgT66tpRb8g",
  "key12": "5Qgwg9YxseZhqrBadUrMseqUyozu1cGoZgBCbhS2rkEqPQKj9MGVybaAb5cD2rvAQQn2KgGUBzqzHBFBAxtTK9WS",
  "key13": "3Wcah3MDGoVqWaDt4Pp37HSSnr6iH8ndsWuqN1v1owSy6hwkWkPBjUgN4Ag988LJEmj96d6hygHs9BhcgmbC4kAi",
  "key14": "7P8WPnWEHkww2yVP2gvWAnbPDWdDE19ycmfmysom5d7ukR1Py89tApHtz62NV9rU8yNjpH1oCTmfMNSFkR1SMXG",
  "key15": "2m8LG2g5nZED3tCd17s7h7AwB8Q9ohdLvEhyq89DyHfDi31TZSTkL2SbSqfgDvpHfV7DMAUwA5RaNTPYbh4bLJ5r",
  "key16": "49qhA3TLzgPxw1dKu2sKLNez4TFGMrPzrXiEGzDyfPyNYUtonUK6daUBmtT1uoTENP8c8HGynzE8XkwnUGkfgGmT",
  "key17": "2zATGdRXzABRipfqTSEjgBCqVmQ66U54iLzYz5rkKpzLJwVAWvvuvrRfc1HhnWegeTtT6gGbz9ZQNq6Ae5gohkj9",
  "key18": "3CoYvixMEYRkoZBLy8fBQNPuG54NneAv9o2MoGDy9v7hWdLmr8Df6fU51pApovoW8wTdEykTxHbox9hfPsTNPhUD",
  "key19": "4yyQKY92WJL2rPTzasdAf7MzrAgfXiRRotKrzAUhYHm1F1e9dTK2LoDsgaz9EkmShyLq5aYotYubXwoBC9DrmmYg",
  "key20": "5rn8uYd7mn24r9Hv7A1imoH6KGY7YR2XcC7jDCUWTKeWzvJohj6u9TEoepQytT9SzPi7AqNK1H5MVho3wVDwz6RU",
  "key21": "36YDFhtNWDR82MaZN116MoZUzx8aZotHJJks61wAcd6K89ohqbFvtErJxoMMEnYbQj8BYNbe9U6CYV3XRPuwbKpE",
  "key22": "3zsbDnsGrtPc5RvAYEDysS3pxaPqYobQxQj4nedzqheRnbFaD9vcnM6sYV1BZSnS1Qweg3PNMR4p6woezMMht2tB",
  "key23": "53GNugkgaaJXJH9bvMgVWzMMhUirxB1opZC6JGcEGnLfMPb44LXNaipatvMwTxxKxVXm3z1q6skchTQw45J5F7yq",
  "key24": "3tStPbn9RV1STZxbNsDnmiWTYmutsNPfqzSvJ6LrnRq5nxXysTtnnF4DziGFCyeC6QpARs1WJxzKH5VXNLqe3QEP"
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
