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
    "4LzeetqeYy8b27zke9eC9K3yubiCV6XP4CsEzaT9K8TWBdLoG1tbf3Bdp61LLDQdVcx6Hosgb7TQSKZ3zBEQuRzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HKzem3URq28CaB8hYr5QacXcr9UrQAe2gcXL2C8DARYzVj1X7KuGiK5T2VsfZgfEJTEVfyQSjq9EPM6mM5emQyw",
  "key1": "4iKgkJ3bYTsv3CW3bs6paydNAgNy5moLB1wmgruF3N7ARowEP94XFeEFYJAq6QciprhBZHU2bpCUNMuDHJKLHVHY",
  "key2": "48du3VR39vu2Wq48uSzfqfnFzdERgtrASZSWRRuHv2VeBYmYUCn8rQp6zvjMpLQ3m5gXYgJzAKeZgnaLf2YrGkWA",
  "key3": "3nKyZtTkLqM2tgMD1rQq7Tm4krLNiDk23WdXzQgLfrkNB9D4dLTWpCCW1EmiC74D3gdLv4FebXq6TwbcnhBm37YR",
  "key4": "5war3RccJVgKzbr4TXHyzETk8cvinf57Ump7Y6zmxnttesLatbvujhxUtWvsRG5ENWC35RJdkWX2K38UaXgVvTR2",
  "key5": "UrCs2jnXqK2s1uv96mzaustAqQ9eFsPArPDa1okMwnYBvQkFu8oqTt7qBQhCMyhwqBqksptv5QdEMWUUQ9uwWGa",
  "key6": "4yW9yZq9z9bPmvFQdpmFNcjUPjmaAQfjqaCxdBG8PWRRbzxLy5xC36XevJ9WUktg67uxCrL4seufrWCRpEWZg9kb",
  "key7": "64Z9dGyKZRePpL7AsfSjUjEXek2gdgCoQXZX2RzBPLeZ6E7sz8G7XiZsGw2E95VQ1urMUittVmzxNFvB4JZ6gkXV",
  "key8": "3qVwTP2j7YTGjxRf94UwheV3TZYxiEXf7MHKCHmAa2bti34SpFnf6YtUzQsyqZkVN4UPCcpxMLxYbqvdMNTAaVEa",
  "key9": "3vhqLWVELfiNRXv2XK7cCCZfF5yaBZEM1TeqgdVLR7Mn3wDQvHQaZaEYdY4bJKgHrKr5ujgNHCe77jRScR3pNB4J",
  "key10": "4iueZgX421A7EXY4Zogj3MB6sbKRMAHqThNVDxHr91W6SnQmRbeAEPp1eu8j8AoXhCSCP56y5eKLwdRsNsyhDPDT",
  "key11": "5sKmXgfWwzqvNxiCDxWNgacCDixjvdSNjn13MRdSNT5csWXtp2XYfkBWbHF3gRpor1fkpEw5MBqwf7H8bswAVjQ7",
  "key12": "4j2byZAuG6eRai17V4thG5SDvxXphcr1T3mvPjH33evrgsz58wUJmQf9u64eRekeSJrBEwJ1WVMioaFWUL64nDTm",
  "key13": "3LHVgtzTSPC7PcpRXRfZAPa1nMUrFBMJPxmmxoLMG9DKQBxDEU5U1aSMBJxnpBMQNDd1nQT8NYA3zCz6QaVBrQzP",
  "key14": "62xAeReQpuNSmFknDvhagrpLYxJ1w9nhBvp3t5gedYz8zcjheQWhxZfoVA5CAZo52WWgUo8L71QQ8i5yhFqTNoNs",
  "key15": "3LrBpuscd47cKYwxcU5QZWvdCVbPys1uj5wfuqKZDpVhWmRJET8uLE3JNeAMjBNuokS8TwEwmtKXKgMEU8zSEngk",
  "key16": "Zo3CDCMK8ni4xq4orbWVVxhxe9Yo8thtXtwSHjuAoUNhvjjkWyMoFKs8mzJtzAZSuyWJLwsjjtoSmH8sFHXxKot",
  "key17": "9noCUN12p6yNNjRBiNbYpUft7rtm9qRDFdmuLJjJUpb2YfbH2F5svYdZoATLX7fnKbEjvo3EwGfAf6umwBxR41q",
  "key18": "2rMQjVhWfB6FJwf1CFpiJdN3mP9ETX5Sg4vmrbpveYvAtvWEqU1ASnZ4iTwLA1zwyuZ2ujYe6Qwwc4gqxU4EkK9q",
  "key19": "FXLPDQrFFNpZHgGGtM59nvR1yAef1Xhcw3NzUHKnwXZfTyEhJ2pzW87thE8kojiLq9EFwF77SRnKq9infofF8Ex",
  "key20": "44HggyAo4UTUf6Ge5WhEmPHkQ32o4tNH2Z1Qg2WRzz2SLw6foMQa2Yvx3h6JGFLCXoe6ZNqUchn8S5hgrxdxSEek",
  "key21": "3wyFjC6Jq9RYGRuaGfHAV985qkRBU4CCu6J5sCVeMRfHpi6pFxLPoucMsz61wDARomB4zqhf6pw4EouFeDsdLz8g",
  "key22": "4Q3c5iXDdjudgeKExHgv1DYpDyYbmw4S3x2Ayrj43EtTyJGztBY31sYKRrkzNMfkzAy4FMKiNDXzgcibUn5M3sN8",
  "key23": "4i4Jk3qDqHnFRuFUmaUuam9RAQSJ1S3LNoYGXySgZQA9roVpA5payjFiiSAKvH7JhszmttdqB34r173BU47XEtFo",
  "key24": "4cbtZr2NcFHgYoPGwxzyvLovdbjiNbCAhVfK7cxS1QHgexHJDMk4imSVS7EfLvkSZAULcDYjn1Y3RcFkbexqae5p",
  "key25": "3LsetACeQckHr5FbSV2urdYdv2PV7zWHAK5Lsnc5UtAAoZ9BDkwiSQtoDT3iqF1xiVNrn6MHMWywLdrVxKFMQMA6",
  "key26": "2LFKhJQFLLVuFnZBVuwFetyPg2cy8zwkvSv1DUVRdF7rSRUKDnVj5wSC17mSCHd8CzRUdcdfAPNMDZi7NEoLouet",
  "key27": "5MPo7Jf3UrKxx1yfNMG5FpFegSYMTMa8WXUoYQTV5cuSsQMLoy4DmirsEipYMAb7ybN23EntVXsweRMpphB7UBTg",
  "key28": "5ncePASg29MCqr3PGbUnDiYcqH1XxfAo3QTRRRXqZpiGLf8yCYU9R6FYMpSysCwjv1LkHtcgnSjnYS57zmPauRmw",
  "key29": "3ZzZ8AoTxRQCZLrGL2WYZqBUenoYvxkzS5DUtgMB9DfQmbpb3ZKnYCZvpvW3rgkkhjGfujyHkqNKbmxDqheHRSqS",
  "key30": "5JxdMs6zVdorPo7nDnkAjQ8Hebm8xGEWEqwuigzriTMs5FJCccr5m3Mup6RKKzdFctJcTZWVuiratjrtJM5CsijZ",
  "key31": "4jZnGEuVLsnBnSXtui5Wvtn4xSJGwGLwQjhndX2hcQDRPWAJDks1Gh9Qqo8os4cfWqHRyHwsag1s7kKMJhTVFHGh",
  "key32": "4WrBYuwYLJXoZiMVpce85PWNLYH4hiivUCSESaSu2LW1CetTT9c8je6kHrQdi5kJnj1j8MzHhTGLkf5VER5xBuxx"
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
