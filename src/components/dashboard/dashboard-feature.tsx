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
    "4hyMR64Lgrg5tXCHops2oTGkSGf6rshJju7wwYGeW2WJkQNs1gBwotUkojx9YpzW3WCWnTFsAoLiBK9w7DBCu4uQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wuCVjcTtDUvfhyyTEsXsEiRF857hGzczhtR3bdZ7J1UUepR7SDg61qkKyTFMmrx5i9tkRbgJyvzeUTtaXmUDLXU",
  "key1": "3jdUkaE9kWaDQpQPZ3GJAsB2VFa3bMjFNYeNhdiNi1Qw3Voqceu76cYB8TegG2uwp5nQUUr2V7bX73YPLPPvdZXK",
  "key2": "5PSkCmWrnXRQ4UZDgEZ6EZJME56ZREsSUxGueguCU5HsHJPnRWxjTkooV2vgfFGcpoyFNBNHpZTA98x7r52W3iXx",
  "key3": "5g68XxEj6LaNwftWXkg8LRHXPFaU77Wa1q7rhXqBZCwcek92zdU7eUFDfdheAR9fz8pqJt7EfYn3KWWiJR45ZNPW",
  "key4": "5xBpaxmwWt279QTJsrtTmHjpnKYqv1EW4ejUvMmyYNcQrMY3WC9fR2WkDyexvTJdQDV7awX91cGTxH66tPn1fgZu",
  "key5": "3kkKkxxX4giH2pr6jaKPn84hWZo1kQ15b5dKwSmVcvJ7tATzt8p73y4wnjLvW8UfFPvWP9GG1cP5cJYsQciRCpqR",
  "key6": "47WQQwUPbtGiqSALrfF8uALfTw16HMAC5vAwtauAVfBvXXx4AHRbPdtAcAKXCNW9gq8DP2WqcC811NE5pbx6AGp6",
  "key7": "oWC9zafqveJnYC4Ag4jvJuZ5UmPYo6ov1zPtRx9iVCDq61GRq1fm5FEnDBvzS5cAHmtpMT7sUhyKXPa77yGZpA7",
  "key8": "FAPVbXNmVw17Be9CXTsyVm6gAkRNhQfvCAh5bqNcXw8nEGpQ3uEGVWy5LMgRnuL91oqFMCW4V6Xmng9G4FmFFux",
  "key9": "4Yr1qeEGivkfgjhsPdsWDT1dRzrJSzVQVkBy9KhWNfc5AXUEhd6NXLmyXrZjQUokqpVDiYK99B13RRUytDk6fwKJ",
  "key10": "xcq4dAmXXiv6F6u2xzBwNfZ4eErm9ZriuLQ1AXND69MNw6xj4kTCTsFkNMfnEsKTWNqhivb25nDQiJVtr3NQrxg",
  "key11": "2axRT1bYhnGjpYR2i9jWscngSXV4Zg7tWfpC9zohe8eu2AMofAAwexogFEDaK8fyfRxfDL7AX1BKAgz27FmGku48",
  "key12": "2skw84sj7FnMBzos9Ej77BvGDoj6A795oNByzfj7LtaKRyz78dvDBS3KnpV8UahmB3kEt7G4CqDwxh3SXXM4DYzQ",
  "key13": "3tdeSDaxnSeDDdGAhEQVYTnZRZ6XnwukpMGteQ25Rp5FERxrQArXA7rQy5VoT7ta4P4NiUbBDia5ezCC4s7p7BGe",
  "key14": "5RJcC9VzJcgtiYi51nGFVFv2T1NmPUB5XthjDQXb16vVV9RtscYtpepuNRQi9MMPXseos9wP1Cunb1CcwQvWfEkr",
  "key15": "AJ4FoMhrA7QKpKdsdttTtZfQk8smSoWULAFd7n5EkjVMxSZTvkvBXZZrn2VqSvacWyDYQaNaj1H4RJdrgBTEbHW",
  "key16": "LuLzKhZ3Q7DfrEHD2oEDzgVdvGGKHFmRerHxmLegFdF5dKzN4UjASgvogpdDNJZNFC3FZjE7EFEG75gNsASEp6u",
  "key17": "5irNvnA5a5wJRpKRyKdqsK5cJTV5RpMKYLYUGQ1sZykj4GmoXL4Yem46LWQDoHU8Zic5eFmx5qPy3meqCpLb2XjV",
  "key18": "4h3tCFedDyqAiMrLem73RjS5qgZy1frba3ssZNwdjQLrk2G6Cc2vB9Z2Ty7NycCv9BNNxvwpT3AL9G9BuW6GCPpi",
  "key19": "5mrfGQT1wdmhM1EoD69DypCREsQBXgmrkYegtEpeuZmHrSygG3xuTrCioYbS6AyNWtDNXALXyai9sMYcmxodgzUR",
  "key20": "nn6ByvYeBWiRAU3kJTVdhQg2pGWD8xhBsaqGUV7wHQuGkWZKpGqLSS7W1hveL17BUNNTbaLua47psfiXCEdLQAn",
  "key21": "3kVXENo9htfFSP75MojuPkV1ppNeTKFLSVuHxgWFtgcGPU3H6P1mTbUdAJSWUfnuvBNTthRTt14vckCJiY7SR1d9",
  "key22": "UMtXJ2om7HHS9NwY6kjjMkVhyGrdHY23nBw6xYvLy5cogiCJfLKa3xJDbofgnjpJtX9FMSwVjSUY9CtR19YFAZe",
  "key23": "2MRhKZpRCPgTZxvDGyBXGmwKGm3kgpxn4Yy9U17gccG5LpijurQ3Nrzr4CcrtrhXLgLEiJ6Z2t3bojAeTDr1XJ7j",
  "key24": "4Jtbu1xi8fkVK1wLeao67BvUdqE1Jvr7GEzCMWN7zRBTRFR4mkWLmJQHfEJumwnbA1TP9gj3TxNAdA3ntN6wcLCD",
  "key25": "Nw8Vc7H6hFndFF5s9BVpdmK5weA4TV5Ahide6n5FKHHV9qohf5FPfwX9eUFAKjuBUqgV2RCsnYoiybZZwto4yvu"
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
