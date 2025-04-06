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
    "5orWFoviWzF1EVri9vEgzm3bvsTYAqgC7BZ2vX3GCz9VU5UrYVWmefjTzpzBvqnnELskzWTEKmBBKgKcyGSjwp8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCsEggBtxe2PMpuXALRj6oKwYm9Mc3Rcp7BUqKBvAQC9w9a5wKHwSumXxrcbUy66uwAwHda47vXmqweSbx4Nd55",
  "key1": "2A6dpgYzBa5UM38Wm3zakWjZeYyUVWbrr3mQKp7UbgU2cYgJfBfygk3aJ28zJ5TTT8XwRQtaoPTn4TpBw2w6m54V",
  "key2": "5wfwfmMeop65CBKvS99JJa96cQ1XLrBDKnG1HPdNi82tak9zy3cqyduLRNxY1m8mK8j8P113Jra72GhakHym1MZu",
  "key3": "5gvquD5NKi4ZACWneqvf6QDgVUHk5Gg7ZYY3MCVhPRa693ycYjzGPzXmxpS8phhMr2kzSeBbYfUYo3tvpan4kKek",
  "key4": "3P9ARiHuKaAQHWFHg6mptc2kudwvHySy2sdXQEj1WtciXNQboBvxYwyUUePm8Yg9dgpmbmKGK2BULdpVmRoyRuRT",
  "key5": "5JrcBz7S6GRQJPf7HWrPy5o4Rr6DLPhZ1P4wFLr7jdKWBBsMVgpdzBmc9q6wZumHo2B9UJd2tNuMTf23vYxEzhYN",
  "key6": "5DPiBC7aibVixX9JFyAYBfRuVZ2hnzF3bmwLVdhBQmkyb2oGj38cbomtPSasBRLyR6gU4mBN5Hxn7anfH6dCtn4B",
  "key7": "58GfNvD6UuTRXzGeBVwHA5sS78gHMDhCbb7TGU9ToN2gneu1sy9xqVchuSKdnuVTdxqeMhFPd9rpzMTu6FMGxmp9",
  "key8": "3Bv7hnSEaHUHj57HNKPpZCmB9jEGgviS2vZGeuXYuBgs2aQFu9DGdJw8nvWhNvKUHLeCQRwKz7oyF1efYxJWp8kN",
  "key9": "4LzbELBswW9ofeNuPdt8K56f1VGaJjRSgYfYzy21mKCNfT8AUkaPTUmTuGw1ARjL32yyNT5kV3UwZV4Vu2rVxhgX",
  "key10": "29abxXTg7ttXEvsqAYxFqsQyt5QJLTEnc14niwaBPRUDHXk97VYcpD53RDopRkc69sUM8WRVT3CU3QWKERifCYw3",
  "key11": "37vhZn6yFYUSmnb32mQ3AMoz3opVwQs621MbHaQSJfzeqGKC73LeHCtGqPzBhupbA8N7KT9fxRfZgc5tt4dnCLW9",
  "key12": "5QYoiy4iDK8836dbxvCgeKFmq7iEYrT1fY7iBDEBMdT5z9nmU5hYQtk3KHAGHBBSvTo5bDG1GE5rWD3t7aCQReJa",
  "key13": "MWPexhTqFnxoegibapr3WLps43utKVaHewdUgTQHrWtE32bWajqKCLxj4Nsz7dbRbHjwGNsodVEbu5126oykjgp",
  "key14": "2LYerk8L7df69PeuQkdref1DPXF9cTdo1UtFZaBN5ojFBAZpPSw6c6BNSRfoY1GhJNaEaxXwEAjrqJhNNohUD4Zr",
  "key15": "5f5UCc2c9oTCy6dKGpD39m9bsy1W5qovPNcEapBEHc6PYFvzq5Uht7vgDKiCN1FPDxNBa4xGeeV8CRBSohJ49mMj",
  "key16": "4r9gjiBDX8XtLmVuueMhh3SezuvMEJDzS2eh3fVRk4FjbgLwG658gm5R3LjNsiLCnRzL9cTHRd67shJt4BeaUEac",
  "key17": "3wMzsmRtzmtcC663vPMWsU5fMJ87sLFnS2y8YVgQQPjNCXdKxvYNj9bhEqeY1kc97MEp85H1MzSZDwp3s6dhMesx",
  "key18": "sEyuo9SaxSp8T4de8r6CFujoBzay9A6GxPvV43qMpnBYKm5iZCbsvjJwMwjuqnyajC7kgHWS6k2nrtUT5kJrY3S",
  "key19": "BhdRGrw7FVMZHbYDkJ61htfXdjEtg5UvjZkoqjG1eRUQfDGjVDtFb3dgZmCbiSiXDHbndh3iYPXvcrrLBUF1bxX",
  "key20": "Q2YTzu7eh3NEnTTUdKQUadM7NPHgycFdz1KDjwzeLSxdRKA8Yrqsj5eTLYZUF5TyC1yijZBTxxJmcB9mUTkKVgx",
  "key21": "5YBv7NmNqWLdaDwLYinRQKvWcyE6pAja3ttJde1eokjcrib4V3dsWZHeyz25NhNgvczT2SQ4Ec4EhWawJUvY1GRy",
  "key22": "5nSt8oxqed7tzXUJUBHdeT2f2fy78maymD6QdoQ6wTMd3pac174eJ5JvSiBasGjfbQod54muJfgffyNcWd65Z4Hg",
  "key23": "FtTqWmJA1NuF6G9BjfjbSK4BWm9kT6EFAEBytNrxcKcfSYetieoFK85VnTVQM73rd2AJ1GbmUZHHkBbLqdjrr9T",
  "key24": "2Y56kJvMyg3haU43hSJJJNV85YunskjiYzQZsADuRQkmY5msY3ysC582RpUDjkLAumifif3RyxhmB2Ue5xXevNuR"
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
