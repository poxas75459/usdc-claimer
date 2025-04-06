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
    "314LDQFH9godvcnHi2huWsEJezGE8go5tvqRt2pCuick5HEgCjMbdqKh29VJJ2esK4MmXXn9pGi3r1CvuueZScKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5nUtqKsPwc5TxF8paCjtZUuV49d9QfHwdo2x52W2HbcbbbK1KDtN4EP6tLUrHG5deKpoJYNFa7CeioPeNeu1kG",
  "key1": "2e4654t77FDMp1NPpKNKaN4DWdpZeQUaJD4iDush1r9mkEGohSYMY1qjhGdbTbDAto6L5e9omxz5e5gSoJTRKFP7",
  "key2": "5rKfLt4RgGZWdFEaPgfLvvoW18EPJ6VBbshe2VA7ymXr7dU9NZkwmPjbJFGmfdKTLDJpAAb1j6C8QmvNyTKXPj4u",
  "key3": "2oKgAzub3RY6B3y3qHRtQ5LDFDQoWtKwfvmg1h8VL43qvPRSTHxmNjZXEXJs8M7NqaWVNMfduzKgiuu88pXJvcWZ",
  "key4": "3Q6poScGkEsTmdBberaKtBnuB14ZsGigRYEi18UVJtLTQpxajfwd14SpdrKMcyL8BhG85QBsHUVEgqu9nczkX49f",
  "key5": "4rnhreHfF297QeGymTqc8Qr7SU76WkJskDu5yJr2u42U9ZLvqR4SVxsF596PvDgnL5Le8WnLHaU584S453Mf4EZB",
  "key6": "4Qc4anoNxwVRkjEuriy69iAmj5zTQY5Af9wMVwGtkaQfMwuQexPAvE3iWSHbhYEQ6FYvkwsjndQfBNT64hWG3xrD",
  "key7": "4qysHTsULjXgu5yqB5Vktc7Q5FncHkRAe3hqcq2KfeeLmhrv5vcGM4p9RMfB79CXw1XcQccewec4XFBidGQxZA7f",
  "key8": "63ry6JMBGXBUC4zJVA9LrCQHCDk4JqAx5wJY2LaZtCgu98DVSGArAZ5r51W9yo3fUG6YhxwAyuYPdPeEzHpKv8vw",
  "key9": "2J6Rk9d985uXWXqvaew6SXRRyKXwMLADmytamo3ezthZRppqpPHC36kFtB9XuyvESbZLZKst1f3gKazFnL8xtyAv",
  "key10": "4wVt9LoekjUyu33Y2oEkEXtckNHdStZBSCAkem5Gw1iC9oBKbtSUHSmA37rKqsFvt2PQsE3SFRd8ekAmTeekXpuZ",
  "key11": "x24yjUoxhH6m3Xp3e7JeBPQbtPzdD16okfTqC36yHNDCxPZVDA3tq5NQTrU185DR1Waq5WbcJQrwGXpt5ciVy8S",
  "key12": "YJrAVF8gmtoFZ2gBMGEsGMAURxB7oSo3CfEwQwrBifia4roVhwqhrvBfZQZtk1QoZXpWCaZaFebGkRL5uG164Th",
  "key13": "4eGVxskqRMLLqrw16wSKnTPM8rEqGXwqN1cudAZWmwKnM9kEVUvZp5jeXKNZK7cwQY2xjbt2C2kaNJHxE7U91m6Q",
  "key14": "2d86rGE8TWpso5PpHtxfmJYnHRx2sGMYNbiEgnkdRVR5XnTe8oMexJrZbP2s3T8YLt1FyMU1uxZEZVnT1oBp9C3F",
  "key15": "5q8rCPabyGDYEZnAWj7v8zWwEwB8MfEzHkucQmYugzBsKHK2dEG7AAnqdczdXWMd3wtuGQLqTpP4d9JHhGEY2NP8",
  "key16": "5rKR61nzzJwz8rgFpbjtSEaax7onpK79VSecwap4Phgib2vUp4Z3kE4sRb5p2HNMa7TKbGZzBvmog9XGnYqzcb8u",
  "key17": "3m5WC3FTwcBEsWr3pY6VCdXvXHegqaLXTC5sggfVwwyFmUBcEFSv5rfYSfh3sWqHEfK8878fFB8wGVTWkABkEsXx",
  "key18": "5tZrhkjiRKFznX6UxzZQUKAEsghwxBW3UNRyexpWV8KsrqCYpggGZRM46NsXjv8GBLW8AF16PgYhCon4jTQUM56F",
  "key19": "4at7aexcYyzvJgZBn4LXp1KeiNNCdwyDrtXXGUrdsCohc4M2cFG2SoeXUjafgbGH9PQqTbcc4K7JXUthWez2AMGq",
  "key20": "4DnTLYp9XcMy1fS1DwYMBfs3pZMxazVhE81LzCcpZxXXHX2B9BzdNyoJ12kRX8TUd3g5gDCqN8vQnC1tcjmoYvss",
  "key21": "3V7fVhyhdYRpxECGBxV7zPn9JxVKbUSE8XJg21TAJbNcYzVCWxrtVA9eNB6VbvCd8LES47HZaPYyLc1b4FAgTwSM",
  "key22": "HmiTnkUjq5jv9PsGoqUN3H4KzXJKhs4Y2yD8fTDbypfSeUvvGUi4MSyrg7NUkizNjivMJDV2Cvp1NQm4iqGj7rs",
  "key23": "4b7nkA2jXA75uW93bFEKCWybCNvJLY9auSdg2KPNPPaDHyLzEDKMTc7XnwQF9aL4QYWVcSMeU3ucv2QYBq7sDG5i",
  "key24": "3LfKgaYiuF9D7SWSfQWarc2j4wFXfoWkMv8ZdFMNByyRzWS7271mMT5JziBthJzRSoGG4bFYRGdmsQi283WyKihW",
  "key25": "2geiwb6QuCqyBbTvdcNTRqjfrdQHXQc3gSjw4KUCgcT5McBf7NmxiVkU8jf7AGXqU6fY9X1m7QYNtZWkb291wkeK",
  "key26": "3kzECmkxF7TzwcFr7xZjjiDd6WTy6omXmfdCRVj6VoQLyfYJxLo5xesKicxCTGHBryrEZJ4F6TDoFWaeey95Nk39"
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
