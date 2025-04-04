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
    "4fsZnAeaafctbDhP4pycGrtxtSGmGNDFPxLZWqiCNBEPQyFizD3i48YHN4NUru2NzYoc2a1M2sqG3j36H7YC6wg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhdM8Br9tXz322TRcxbk8e7HVrQEbLXNyhA2D4EdYXw9o3eM1NtyHA77EGrMvwDTDbsGL4XPuymsU5j5FZ5jYsw",
  "key1": "3JYpFFAV6qzQKnWmrwhLQvPTmKQPyJd4us1gs5596oV34Af52FXb9PBacJ1PJRw5WLwRfyfhZzQuYD8tWknE7xn7",
  "key2": "5kTZ9caKUHqz8tLtqrcoVHmFvmt43gj6eNFht3hcaYGw6u9XmKXEzxoc1R5DgxMDjhQHVtUa81SvJB7YAM1Q2E1U",
  "key3": "43UGC6bGiEHYnFZm8nQTw29RY6MF7jLaYj2b5y7CUWp76kavxSmYENPgV2qzieZ7jkCXcCguapbLY6czZTL9Mtxd",
  "key4": "64iNLrRCnJJBrG4bfPpoSicQaEPUZc4jtyfA9U9vTKUpobvuFASExReV9nu7rfnpyUf7YdHn9W3NSuupBhSs3LtB",
  "key5": "BgvtZ8r6XF989CoFieuXfS6cs9R6r5ZMBQ1A8cv4brQCRUqhN4U8Qo3cejWLEvEMB8FrWLNEvmXxBWp7vwfiD6M",
  "key6": "2iL27qD4or9urWUuqXiTZie2jVqFuGWXwB7rcdGNsj3GCrkG4A4uJyRUTfmezqHkXubGzxqzAiCWu2t9neCyrmrQ",
  "key7": "JbATpTry2ep7KnySNqQ5p5VyE5f3ZT2EuL2qUboUuEgwQqpRnumkKFwAX2xHS1zw9VbdtvETLUPi35zz78xDhUA",
  "key8": "5MfhGXNEZqrrYN2AjupqrG1pJxUZy7Y8jSKfBgcHKZMNeDXYxkjLkewgpxnYQP3pcAZBWa8R4T2YQfCD7x3Lz1oe",
  "key9": "4Uqa3wJG1LX1X9tQVFALfDTU5maNNyLp714Sp7h4FztzaLgimQaKSTgmN5g5mYKGuCXq9iv3xYkZQ7g4fnPNtPAH",
  "key10": "3s2nCAuaTGESciZPoEEh6jzhhnN88DbhGVzZJaZurRCiFXG2VNUP7cuj2Cqs2v66HwsNLfLSbwmviET7CLVDwiRQ",
  "key11": "4TQxtqRUnwRZJ1dDtp87oLf9W8wqU7qVxcsDT4AGQNh9WiddLkKi2b3Y3auGZRUXYAQ1imY9Uwq57poUWgNHeSzn",
  "key12": "3umReemGNwWuZWBqnduJA6RgfwVXLnYdcqaS6Fv1tt5HTZCnvmgPDs1cPSu38nqB5QRK83pRJVGf4ctNshRaWNSQ",
  "key13": "3djTCuxLCnGuVa4DdXLPLCvZ9hRjpptLEHsagMfHRfA5x5kWKFB99qBiMvHNEk9Wqm4ugPyrNwHsrC9PdTgqcewu",
  "key14": "Lmwf1bEjP6BBDJheQQwNLiYaFD5hAbo3kRMtLRTDSoyej1WqbAeeKFqgbGCTHfd7A1epXYG5Es7Q7WZeiSJL69k",
  "key15": "DUNgLFfGrQi3Tt8PX14RgyyZPpo8c99pTZT1zZ2sYBxi1jCnAi7m2Gt8YUtoYvKjwR4FDXu3Xi7AMHu2CbN5Px4",
  "key16": "4YAXjwMBuRUj1jmUSTSi9AzPXXEEWSmUaNKeN3eSsdkadW91i7gZ9MbRwB4LReEZwRXeo1E1bG6YVQg6MuRUApa3",
  "key17": "34gC9MJrdqx5UakSJjAXtTyZmvyNin9v8jYVKwDtKqDNL9wQUKB5xizvCJsmboXLJLetCLJtpUD8kbdgAnZ56J4K",
  "key18": "25Loy2dekXtag2516eXE5qH1sLyJShDa67MpwuR3pDFbRiPZfK2WuLRZNBfn7pjo6HDE7Vis6xYLt84V11EtBfyn",
  "key19": "4LZijnh1PZHHkRTDCpnynSsrNVLzeL7wfRptGUiZqtNWLTQTwdetR3waS97zELNNXh49qRCxMpwoD4RgnQRnt1w6",
  "key20": "58uMW5rZw7naBbrh3jgYfM8Td1XX81RinQrZgVYUjyyiyubjFZS6m7EduewbZoJFDsXzDkE6Sfei1Rjqq4w7jsBc",
  "key21": "2CkNy676fjn3LLVtcKmi2HhPwrd3JjU3P5kZqPLCidaJ9cck6kj1srbT2a5rJ9jdUC6uMUh4puUnpivS3c2qdH5R",
  "key22": "49a4726d7p8bCAj2PyUU4SpBz5EMjgjfERpLPUa5Se17UiHuEJRZr9mMgtonpyUnmBsZ5X6Nohp8inVGRdY7hS9d",
  "key23": "5vqJ9M5bQ2bTRDmFhBScD4oX6RP31ZVWfa8xiw3ZPXU5iLc8ZXrF2iz828XMKwdhdbu61hgytB8F4Eq9zBUdhMfo",
  "key24": "4qUzousYnTJwNxTRNVuBoSvsAhwf6mTba2zczv8VomvpNtwEmvBpQq7aVmS8jHUr9YBhTYbZbQ6pvQGp7W3EYvo7",
  "key25": "3w3s5jjayE8tYPacXqTXFx6rLZCapEjiDw2FQ49viS6HXTQ3QWt7WwJK12m9KuNLDrgFhV47appQ315KFZn66auK"
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
