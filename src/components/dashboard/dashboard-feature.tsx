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
    "5dX9ZdZPSAMs79nViNa3rvCu1QtSwyGW7mMM6TP9ndqxe7VT1mViLaUntKwVqKrdEy9Lph7k5BqGMSDmzegDC39z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTghopULemZ1wbBAE9Mx784syxqXiU8pwo9NSTXDpjFdUZpqTBWEgK2aJqu52xpkxpdHLAPZrokULp75sNbdcqB",
  "key1": "uUExTwzgDwRVy4MYEoWoR4MCYpzU661zYQUc2AJAzkHa629uhQhVH7SxcLV6m7Z9kKVfz5B2xUNKCnwC15QyJEe",
  "key2": "2r7yuUajZrA6HHuLdSyd4zx65Ae6DafKrkE69KRq7doSrQni4sVaSW9KEeZ9jbwMzppafgKuhH9MHNUEz5iySncV",
  "key3": "WQX6ujkosPgCcwNGQ4sArMrhokQWMGbNCHk8oNEFZyF9CdP5C1BbZ3su1adGVZX6jpAZX6SKNKBxXUL1G9nhZHC",
  "key4": "5GeoKpLHDPerbdoZtHBLDyPeHci429ifiserevGmYw4brq5dL94F3dfTnUiyUiFiF9JWxgiST4WERUZVCtYTtUTw",
  "key5": "4Sarf1tfrF8kfctR7LMhodsd9Sh59QkbLvUn3Gude31cC25t1SErthXqPRiwyceyxY56Yh51DeETUBzqAUqTf6Nh",
  "key6": "4jEXyCQSMEWQW8MbtMkcUwfYBFz6inQZCcTmL8jH2qZBLy7jL3yfTTm2sjC1tVqEBpo4e4Y65z3sKcEMRP86ZXCM",
  "key7": "5XVpXW3RBh9gsSv7XVDdnoLfSJSM79cCefLoHjPAW2hraezLFU94DJ8ebCnTxfTav6vC9necj5gB3F4VwqHLdjVz",
  "key8": "3Ho9mvSFjqrTV9qxFWwGknA4j1AGvPVXkU8dEHD4hBPMQBTtRsFozLC4x5z4kSEhqszT5tusXvumCDHNr5dwRdXs",
  "key9": "5bwj1bgG2oQaofn5JzL1CpzqkEthQSu7Ug4saJfyFX4KoAGp9KVeiZb9nBXjBzdqfDCwFvqqsTQrCitKo7q9om7s",
  "key10": "8JGGngm1zhhJFzmGPyj98TcM1w3Kv8fMkmYKfjgwy7pZBsmZssbMiJu8Hnp2evWDs57fvqij1vffWvuv6TogJvp",
  "key11": "J8ojdvCcMBjxYf26dUCVJLLwS4XBtaqcrXaXtBavjVaZyRjN4Q1sQnCEocyJWEvj1kXAK6fy2zpEC9wQXejeLJu",
  "key12": "5RKLNAGxCzmKUM9syFFHnfvcVrPweyMfgyoNtLYPQ53yWfjVbRpjwPJaELSgqzq3opQ3fyFr9BSj4sDGUL9Qpy4G",
  "key13": "5urq9fgkAEkn35MfB3Jpyuh4P757SQMFm549HomGcp7jhLxjWMG5XjPyPNi27a3TVqkbsBpTcUmdEronJZcv5Mez",
  "key14": "5NknugF97PMBZrqVbz44mN59UtC3eShVLjzuvbfr2GYgQNSTH4vsxG9FLLw1q1KMyc4WvfKwXxspUpXzoRLWUiR8",
  "key15": "3AxZVkxe4WfDKqa71iAykBetBctDvzVzqhLRNxJzrdhvkRXp1XRyheva7r6J3iRyWC6CjfM5Xsddd9AfasvoMhXE",
  "key16": "UVsLYF15Tz1VXXMrCMKfCRZySgbwHa9YL9cvxiZYHK6fVkUG6KN3DLEwBQRWuCKDx5ho5PzYBiWQ45HPMiqcfAb",
  "key17": "4wpSBiZggVkidLBB5ahnWEzQZgEkYe3mHUgE4ERybbynkj64QE7skXbjTtQmeec3FjJP4QBPU54i6MLf5kVaLgiK",
  "key18": "jhd7At1YmjjRxuKo1P3Z6qFUZDvDALLWtRHeasTfFprL94DGUytQC135cuWY5NV55FHABCv4LvtXkRhzoMRRS7y",
  "key19": "64Cfy6kdJ8m351kAjTkJpqjL9ZL3jZ9yyk739reFvw6yw5zf51pYkNdBqkEaSeWR7i4265YBRMPjdBAcRJxzhdYD",
  "key20": "4tyfb6fESgfsZ1NAu47RARn9m4TGz3n1aCGqghCTPypAKVdTYQoijCgWv2YiwdgJ2AVeJHkqbhxbwEPgcZtdxmNw",
  "key21": "3wCjKj5yWkupo1LjVbCQaPiJKwcTvDn7SQ9dqWfjj2xG1EMButLxnDLFqNTAyfVmrX5mhnYG9MmJcVNgmZSAAhTW",
  "key22": "2s8BquiDNVeTAoNLNiGdhEU9BRQarpHZ52FxhgZFTuybiH8TEx2UejtkMA84sNnpTSitNmp9rRD6SykhhneRHZ5e",
  "key23": "3Hv9y1t6BX6981BvSTuhD1rUYMs1TUoetuJEptnpRwwr4hfcUoTM8jZY1WcN533YFLNzCQutKS9BgzbyEdW9LPkB",
  "key24": "5dMQomBzJGbfz8W4cCQtC6Xxt1thahd62hFfgAfMEtT1LjHxtYjnssjnMhwQ2zssRcqJYJcn3pgPbymbjUWbk9Mc",
  "key25": "3Xrf31nCt8NsJj69LQ1WxSz32k9vE6VgLx2FDs25ovQ5hqEBcUQ8JpxmuST1T46pmHsuyQk2rxFDsrkiVq5PjYbV",
  "key26": "ADmLD8DVwQR1gNhcwsMy2Qxf9d9wZkczaPKvevhYd3mnttAwYKjoUYtWLaKeDLmWnt7YssayUoqUAHBaztSnouT",
  "key27": "2Yb4nJ5vTVbhvYse8P6RGXzecwX9DfZYqUU98k6XGK3X5WfYX9XYMSLJZbLoYkKruXTAAPDpAVrQAAe7di3PqBHc",
  "key28": "59Fv2u89T2HbWT1xfGYEpNXkZPZNMHK6Rv8Q3RDMv4YdMQBXV8NZu3CQAQMFN2mShQXccSCjDqoXvUXSzarUJe2V"
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
