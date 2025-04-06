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
    "51rxwjDGrQ6nALaVW3yqNoiqFZwmau5rvNtWthY1dZKCW5ajhtnpjg21XkW1jYGD1oi4EJq5RdJwXvozo343zgNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XkpjWH1ZKeTxRLy6WUchk8BPEDPka2ABME7w5XDKiRR6NSrAcT9jtEihSddeSGAkzQSsA9AKkiM9x3KPL4mu8t",
  "key1": "2zhUX7Ynd7e15fMxE1FfLG8spN8LESVa8Hmhxb9bQ6i3mdEzkHPXUtEfUtewn9sDgjxgewJLR9KwN41zS7rnKwuu",
  "key2": "57RBXPMZaypX1CcSXynj8CZuaB4V8jxPqptp9xScqhCUGLdeRg5U5XEQNnZHo2boJsUwRCpLzinL7A6v2mCWtAbT",
  "key3": "2HDmp2gSVhpJZL3U4ZKzN37bHKAbGoFFYUYMFtfc7dZANRqrRZXQp4DRBmQPrhTGZsscAsjs7ARSgjHe5Qf4cP9k",
  "key4": "4rmsT1ESdHjkhA9hWPekryQXkMLF4iAheo5YUSYZYj4k1UJSWYcGiZ88b7e7P2e1xD6o4fMJVogTMb5unbEybvJr",
  "key5": "47kJWKTYbH339jtaMvdr5JWtoLhifZxrFE5s6RSKMqt8EF9xFvdGPCjKS3M4pQwvFkcJFwi6VxSn7ikFRRZYypWw",
  "key6": "126bjAWRkwcNn1dMfQNdNCn8ETezZCYU9cqGqbK2FxkHGPfvMFBFxP8kqmU5c9kGwja4eJMMhp3TrdEEdSJF9YdC",
  "key7": "47vQAq4Fqo58ZRAUJ7d2HwjFfC1WTmjiuxFrjCJ9ru551jU1U4JNuq8RkfSJrAKkyUEndCLmgnTaJ9H59bnzaJWW",
  "key8": "2nnab4F3JZVWiv4o8rhei3gSJJudLjMrSmUbXjmfTgScPAVZQtMCJv41igprFw8M7NCaZRS1KJsTnxaQTwLYXyce",
  "key9": "3VEQMJqJUNSAs9SPN4SJSKQa1zXLpM5ZYwAngc5xEU25nXh2fq5khcC2pJVTk3D1JUecKw5mpz13tjC3os3Kyn6B",
  "key10": "rmhv4hbLUpcThuNMe8qDQ7E1ysSXghPkbDFWPhfbeWFJLGn6VLFX416oUBuSgtde56YUSywSrNYvdZKorJEft36",
  "key11": "4Scum3CcWc9Czpw6fFWTdhjFCVFguxo91DYp9sRDfXhuBQfnhey8uMHAQgQEKHKZ527GS74ANKyU5rroDTug57Y8",
  "key12": "295wEgTEaqbgXttPHY1Dh5mrENuD6j6LGzQi8fRJU1kkeZGHVztg9KFoM7adYwAaBJmmKKY491iQMfs3pH3RFzvn",
  "key13": "51BUdYzQXwGJaqsfzTRcv2BrZFvCaqnRzRHZK28BCzzwykCMC7kFR7zwVzWk3PWkXYc3YAyqgaPiVhnCApXPnXgN",
  "key14": "3swS53oqbZeAcDH9QZYMjv6dSHLcsQrs7hXtUmaHBn4fGmV1FQ3tcD4cJgP3RJPhQAsmFirquhy3iDN8oTDgydW3",
  "key15": "LG1dWDy2WpYrtsZwtXdsiVDtjej8vVNPUw7NJ3MQ29GgVWfgSwmnviKygK2JipkN3pkshNvUYTPXHRUBoLahx5x",
  "key16": "XcZ2Bn6jm8f3vE14j9vHhp6vFJBoqe1CmwzU7XbQifVNz86ev1k4KHz9dbBpDTT2wsG2XYqYN2yRAh9YToaWTmx",
  "key17": "fST1cTpwZGbmf6d1JWk4DRapEwVudhFh4mrWWVchyJghL6Dh7c48XmFpCgX2WCu8ZPHscakyMFNuG1K1JACdXGJ",
  "key18": "5y6FsTF44kjxn4XcswTWrZdKWpSfLrogSfux3iZzgjRtY3y5grLbnhPsiwcFrqDSBdH6GMAU4HNv5ZsPWtG2X9eS",
  "key19": "2pXPQaRi8VHvQx2Uf7voNHQtBGcEBGS4X6dP5W9vswg6bqJbDcxoDY6W4saCdHLXDMgE9yQXrq8sxJXfvE1HR8Hm",
  "key20": "3dtQm1xA6iqWAQxVuWrW2Wv8ziRuFWgT8B9jqEXctCGjKGy8YrnuF5LaVm9zqT87mzyULBfSpAnPF3iL3S3N5giW",
  "key21": "5dioGDFsvus6aHx7UongBGKNBM5QFJwuSHdvtYeWGMSQsRpKHAygMGm3366bQv4zbhJuZ8UT4j1FnMuskKpd1ew8",
  "key22": "VCNH7Exn3W5GjcBtoCQbP5vPnsRpSTDJMKddEAeekr54832TQE3UmkQSkf1JMDKwcerdcX1Ce1NpM6VF7Y7TBQ7",
  "key23": "2zieTVYLMP94xZeBS46P6ZfwQGbqauNEmyUvNzg8PUD8KMwtpicMnMdWz4VsprD2KeCj3MMwTXu9Sronkyeez9Yg",
  "key24": "2XG3HQ4muTL7buRB5Wf8PG5uLMLHxwJ9AaxgmNkHSvxvQc4EeEGR8MEbvWRTGRAdc1hsnonumchEei1eXQ2BdG6W",
  "key25": "8L53WkYa4JMsnvLGmXtaaujCymZArsQLLokDQtVVgcWgX3wsfFyqdcds8YoRwLmpWmt8pzpDmVhxEzyyVpBQUJ2",
  "key26": "2UWjLzkEGXdWYD9LQbULmK4QEzAXMfBB2kJSWACXMyyqeszHXYjKc6LLhR41Hys4h8yf14EQctfebRRhSTXYbE7y",
  "key27": "3ZF8N9njqUXcC7GXgmuNVG5J65wt16yE7kaheTdM85zoRSUThPrTUdLd73DV92t6z3Bt2zss7wiXyMbhwJhSArMR",
  "key28": "294weUq62hhihJ9C6S1LbBRnAnYfvqB9BwngwGaJkMj3hJAQsfNgURti2XGk3QvebG1apsAxL9SeZyyhxoRvhQ8S",
  "key29": "4yb6Y6E3yUP2vcwwHQdVpAyTSeEg5VGpFFMMGKxbpZh5N6bJ2TikKRGrwTWzw6fzt7cNrLgpYxYHqgEPX1efLLQ1",
  "key30": "3ZuhX14Cj4UbDNRxK5dZc1gS5atcL5v5GvfA5KAAzm6Fzbk4DZNEovFKiHiFYzNxizrGyrbTNu7pco8XrWFn2izH",
  "key31": "5Sknf8KdQD8HAJeauBNAmQwwSMK4GhEhbzVUwDx7sqM5e7LSDJvuvwercx5dGrfxXeWfjHyTiNd9Sro88QQY12HY"
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
