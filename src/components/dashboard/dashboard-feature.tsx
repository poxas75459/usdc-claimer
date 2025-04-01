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
    "2kWbbgL127rmu5ufxXMZKzJ6337hpv9wZjNq4HbdySoUVmRv3iN1m2GoWVFyY1S8MM6rwDhCLg8RV2jtdihSQhtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHpD6oJbuQv9c8arsryggPUtY4WrZQrGFzCurFr2fxR9rr2F2K4zAQxhgywXafGNjZDgJMYpYyWgEY5P15sNnoc",
  "key1": "547BnRFipmbU2NrdD7cyAXAZb1ik4aVbdYUz7dy53YT75Z74xJexgsdwqs6SB2gTVwmfVBHPD1aLwFm25BeXehyG",
  "key2": "3S5AZDSU6JDMZq5r8sj4yFN6BsmoAfRk87TSApD6rq6gCFpdNZNkLqzP4qUCk5S1FK4ErZ7eF8AhKR9sVxmv92zE",
  "key3": "3mKaDozF5QxRC3NVxJfa6JH8Wgr29gZkk42nsQMwLzQrPHNcYrgZqkJNx5prrxQKioUvN2roEUjtBjaRakh4sQCG",
  "key4": "2MeYFADYTPbDg2hQ4pZL7TU1XmvhtjL2Knyw1urK1cujynWTX6GBDtkak7ytUqM8B9xp5RaUGkDfWuYWzFJdc143",
  "key5": "5fNRpqhQYiYdox9HyocbMjuAaF3DGJbpomax4FxpheudVSqxsrJGcL57eMThXe1iVcGc9JyRi63LztKzkVq1fQ8d",
  "key6": "3YQSiRbhqd7ZQPzPY6obdSfEhjJvD7QtpCSuLuvZRgMYx9PFzVEM6PLrVMSgKiE6iWZrMndG9Ntnna7RvedGDwBc",
  "key7": "3UVrgztLdB1np9JsoP9Do75Sm7tbFsPPf7mPctWNJ7qc7jCeYc4Czw8mB6W6GWijk4wG1nw3LtSaiETAgw5ZcyNY",
  "key8": "4xfx3qmfQLHagpLRfJF2d9Wj932zVM2GsyakiSDP4Rk3H4XhE4rgkci1SkGdgRx5Pzhq9yRdwG7s8bXzttUELqpN",
  "key9": "3m8adDJhTz2j8dBwAgznZWpCkWa1fRZmge4XDQraYo4tGzGcXQYtCHh4LD9iXXKsRTxvUgLXQxFz4jCXTifz6Dec",
  "key10": "2aJi8x79tknJDqtNDuEK94daFoDhgEryRUBze9p4WqAz2XWisngb4tfXBLUQah7HVjaVhEn34Hq9pthw4vM5V2Y7",
  "key11": "4C8fc5qQs4p97ighnmruftpvcfCgAtb9JgUCUjhygD7vxqEQ2CALCgiZVgPyxbwhVZoWxNnetvrZHQnAuFJVpcVU",
  "key12": "AkaVN9X9SqEzXKp9c6NrrebjnjgnNyqEn9edAyaVfUJX76pRcNchYx1SGVrzok8Bdp9bJJWPfdCv5tjkgBpx6pz",
  "key13": "32w9AWH3zNaePWGhHmupwr3RMEwPc6f2PgJnzpayfcj1wSaS5VDzPDztoCReUSCbS2EwLuecjvM7vmt6kjyM1WZ3",
  "key14": "44vSaChMXfybZedDEK8ayc5nprd6msPDxSFHxZAhtVAvGBKgNJg28wssKBfcTc1mWBnRAiZCbdgDHXwQ1YsgEXyG",
  "key15": "krs5xX8qxrmjz3K6zH7GXt6pXQ1r2mo76ExENfDmUNUo4HtTToFMTDhXLdG51gPU1JzWTRQNNAgpVqFpmngvo5u",
  "key16": "21GxA34Leu4VbxnciAYbHavpckheUZN9y87KAPqwNjhf62iGaw7poH7U2tNijCUkqKFTfpHmq8qj5eSJSchG8mcw",
  "key17": "5fBqxxJSmvd7tjQ7wEGuiuXNhC7cGCh6h8JHv7DRAt3KmVjC81WxwcJwCuVwmiPmoojxxcoKgxxuWcEiaRghkmYF",
  "key18": "4XrnvnZNFCtFJpPo2B5YnLNcrwZyRdTZiz95L2XBGvjaRfS2uw2DT4KMG9entBecRBSKnr4FvrKcKNf59Ms4cd8D",
  "key19": "3XCSzWKWupp6Sg7u84te24wK7A3sWa36nJxujaHKTVHZ5C6StGK1BxtZK9yEkH328vyMgwBn6GARZsFDQgFZ463y",
  "key20": "eaS5hkfGMQ3QqgxifSGHyaBy6MiLuxv3QtNABYe2N9ZDKEjtnaEyJmw5YQxoENdX7qYppZzV5rEkJFYUASsn2Nv",
  "key21": "3c33HwwfVKCP3J9a18JFPp5ZrcrgNoaEdvv4fwdLdtpim3Ra914e7RYL4ZaATaFabcTZGghaU1rSmg8nm2ZwRVCg",
  "key22": "S1uMMXzyk5rLtN8LMhQWpwB387xLJqYzSw6vCJo2Ydn1H7t4wiLnLgdzbWPtDu87H5LojBFUSdDNugGTRDFCstg",
  "key23": "5SEbFxohtyuW5wfXk9pTxsdSRz9auRbz9gQ5D93ywjihKkPw2g55vbDQ8GUW4R4MTvyP5BQ7B81g8WEoEL3ZyDY2",
  "key24": "5yMfonue77n8MsKYfmUyfaQALYUWRytScozcoLVg1qgi4fWrBaURep6F2Ta8PcX36XpDTPsiFV2ngZiQZtXfvieq",
  "key25": "5m53N9XrtKmWP1NA5n1dwc3m9qNrRBj6hFBWEtLVNRYxu5Rp64N5SqJcPLu5SqdDuLSLkUgvSjEPtdAnRyhTGVs2",
  "key26": "2nnCrCczjnBuL5qbkpsPCJdxUde3w7yZTWUKxuyz5c7gzdPtgEUjUEcdLaQ8kdf5V7Qi3befuFC84ktcw3LsMEih"
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
