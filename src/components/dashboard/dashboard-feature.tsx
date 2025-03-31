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
    "U7vpPKYcxgZ1oZFYDDeeQ1HFa9CuXekxrGuf8qmNNDF11Q3849rcmG7Jg8enoMsAn7GtbWaX8McmF4UkEitZsLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvTe4GxF1cNiiA7yfEQBL5yzw7vXZrqBg9rNRNdsddbb7dBETrxNCjWjyFui5MCN4XSvVMjWpNkdRPQ9BWKP9AB",
  "key1": "5jehKeqJM45Y7NJxY7A1NrCBHQZQdZ6sth55TPvGqHVaaDm6BMv9X7sZG21HD3VZ6UJoH5it1JvPeQQnC9XBMaL6",
  "key2": "2FjUAJWHqSL3YWHi8LXrVVpdoFAUBXhBofPspnKHdLb8CkCyDgSNq72CEz3aXLk4uWYNLafmon7cBdP77TU1bHam",
  "key3": "mZCtfbr49Xm7zQiH65dqEB8T1bc9kcP7UxoaWjb1HWC13a7ZPqPgbX8UvskdzQTRvDeNVmNibLKa1y5PseemCi7",
  "key4": "4333EkjdYU7QvoiPSyNLWcK5z9npvXSRcSbcRbG8Q9Gunt2tHyB1zBr5mCMAbtJaX1XbEUSiWFKEgKgwgEBmUQqi",
  "key5": "4T7mXyHvQHYR4XnqNYHtxFtBaDDpwjShVRX9WpYnk6KdJhZhdLKLUoyoLsecfuXNZpAZdDXcSjHEUXinp1hQpU1T",
  "key6": "2vLdxFB4SKQdcGUKN3JBvsqBjvw5d7QzkG1diZE9ShLwwaLajfasovjUWb8Sx54Z9cqZQ1cX2Kxqxmj9kJKojtPm",
  "key7": "5YdL4oXqz9cjtkxJr7bEG1nWcQwWBGmyaZtgHdng8b28pv2nCS7TPn9oTHSN1nZWd19VHXAUJ4QxwTKvEVvB8Kuh",
  "key8": "3anpX1bLu3JqzmBaC9UdEAWKnyPtxTztLzMREUwZDCkxQBqct3U9eVHXcVELrfJhBjutsv5niSGtfBeMisgfnr5D",
  "key9": "2oN9Ff4PfxYEfCkag5TeeDvQF6nKbmAJA5sYVtwE2wL8tr9auSUgpgvojzhuJh6ujEw48KUjrdMA9cUyZmJzsmkv",
  "key10": "3NfgiEUDqWnB7bADqsKPkv8xhFmApgbY2TBifnJJHnedkvhsVTH6ZxrRwcLwxMt7nnpFmRbszB9inUcXJgxmp9N5",
  "key11": "2siYbMeFdF52gbUdhRJt3h2uQ33ZkKQgh2hsrVvccKEvcmqog3sCFm4xg2BjrZ2iwkvY5b1GcVEc5yDw8w2pgfyc",
  "key12": "4RHGLESE8J2MzPhB8eG1mDLD528EtK2qBniD9xd7PKd9ZT2dDrjzRuDNY3xKu7Lp5fm751jk9WvJA6eheMgmHdZ1",
  "key13": "8mu1MY1Y35NLKpz1Vy6mvKf56vbYpMuiR49k9enCSowMJBdFb9SVgs1EEtP5MSnKVbHtEXHoEfNiHyjyWm4Yueg",
  "key14": "4BK5w44pi3C22QGMxfj93UjaEiZ4PBB7hV2PgvhJiWBXR8dSKmSUELebBKkTxgWAtDvcpECMkmSk7ZhEG9fWjLQN",
  "key15": "rjabvAMNhdjJY3EH3fGngppmNF7q7FQqAS5UU1CTQZRmzVr4jf3YaJBUQTNPDgML8r5Km5h2Whnm6yAinyVchcE",
  "key16": "3nHFmGTTRraMSGrEKxfqCphyhuf1zQLeuFTCjhRXovGcw6ess9PZS33hKWJButGuuKNQdUuYawswfiQLksjYeyXy",
  "key17": "27QJgjkoZdeYgYreBPBeBDT47oqWn1iR4avMg2w6qAmMD3WDLVaZNxZ8kRaBRj1NfTPcApkA7Ays5iRZLJGuduu7",
  "key18": "3SUE7gjyCnSPuB4NybRU1EJRdKAn1cSmNvNz4ukkeqHGbuzHJqEkihBXKZxBs8cyZbEf91jT67fXdmSuS1C5yPf9",
  "key19": "4RTLzzXJaaG6gygVe6fZ3UyV1fBcvDCvnd8n1cScVuQrfXrKkGaXFy7yh8WG3offD2jhT1obqrEGSoWNJ8r8o2KT",
  "key20": "NRoXRuGB8QzycKCZ8wrSu16qnWRVhiFLeaXxXP634VvBUsh8NTKZzumvkC1VrD4sJVztujhJLMdvBbFX7PeRr5i",
  "key21": "4W8oSv1awjZD5kkndFuFnTbu6JdAGBTVYAgG83QJUQgyhpmGUMqyP83VCgXWHSYG4wJFoDReTUAnv75QkQs5X83X",
  "key22": "4XJhKLoCeLehLKraCeVPsB1j6jbqfFEjALJMV7WgfFStxXhXiCNxkhntofWpg1ZPiF3gLM4Ym6M89jJxcsjrqthP",
  "key23": "4bruripdwzWkWf1omK89P9A5h6PRwNZQsVNWH7sDpMwpVLBY299CBQEX58DwAvezu41mg5LuAvwQicnY62kh61pS",
  "key24": "nTn1GLjuvG1V9x6LRacUAhxpT4rTAMkk4BHXE2jtU8Uc7uxczg9QJXu3cjwde42ZVPTArGUidqsGrYSVcVwHB1L",
  "key25": "3a2VrxCKk94cdaUYdZqaqr58rHevqwLFFMt7eE7hccMvCX4TVrAXvHLRJ5T6r3ocTPB9oEs515yVt1ieqUoWP1ge"
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
