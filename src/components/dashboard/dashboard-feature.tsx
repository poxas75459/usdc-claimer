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
    "4nYs9gBHEqkTMBDf2MqZWZrxhfqUU113NrExVCpJxmWBNNpopypJib4CpBqPcqEdhxMCVNyWVGB3zJrxCsYqHkBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLXWLMyGn19x7GfUMd1o88vdQ3FQtMfH3sca2S7fV6xmmYSxJwc6SNMhngiPD2CcZz1k7yxrT2kwDba2SgyLkyG",
  "key1": "3eCiXNYK2SBC51cjwqK5PfqwjkK5HwpeoR45BmQrH1FPSmQMQr9oGs7H4jTRAeRNVKrEn36gKMr8ir2MpnyELQBk",
  "key2": "5s7QP1wycwCYa1TcbzjCYYRussNQLNVRw9xFaSmw9kaem7HtFwfH2ahNjqDtddX6RNQgaJSwXLqSsMJWAcb9eF19",
  "key3": "CvdEocaj7znZ5RzH4NTQs1BjQco8CpCiWNa6UrHyRHyWQuFDwZ2Jo8b3AzYhKhJfLYY2eHVJLBq6mmy1C1fxcE3",
  "key4": "34KFW1Fzu1AdoefYjJt9DFwLHTfh9wJUjFNtRfrspkfZWE6PEW3UM7RwSCucBv7PrkfPeHJfiSsQg3KFSRa6EHkL",
  "key5": "478qymYzdjoNnw8pFbj6dggHN5tKSBr4bZ9Sjq14u6nDv3kQN1P6C9kQFVjut18seUj5Z2w3rheL6Any8xoBvHf9",
  "key6": "3Q32rJbX8UQMFmyMvrQGxDfqP5AaP2HBXKjDBjbVH8ff2M84oUNhuNGPU1ZsJwfCQhSxcdpHLkaFocoaj2f5ZrmG",
  "key7": "2AEEVSnsXhJwkj2VECLdbd96dY5vtqPs3Cj1U2UvjJTPnLShHSJRPF1h48Y9tLSBkueMrKEPeXNwVWz9EuF8ym1a",
  "key8": "3Rira56igeohyfnK1yNmtAD44suusJCpyoJKq3KLsDHdEpybJJQ6WqExyHQWfSitMLWJ4UyhR5gYma6dMyoPcYm",
  "key9": "2uuBxCFhqSndfXdfQis4LF3hNFvjqbuBzJpW5v8AJ1oQvcJ4ncUvDgux4APTJVWu3i1vpuEc4nBfcXuxpx63xAWQ",
  "key10": "5JfDU2J1cMxP4Z8VYQmuXvdbNLFnW4FYo5MRqAesZWFWCUxZU4xCgSYtKtqVr5yJso954ezWeDX8HSRVYZiZ3den",
  "key11": "3QDdRzvy6SuLT26RV7czgYk4aHrVXRF7JL5u3HWcdmq2QgHF63ZrJN4BWjx1FmaFytHTns5JNWjqnKjWipSrANp3",
  "key12": "216RcPjQJLDGrNaK7ggAFYV3kW7iAcQLZf4SSZnrXUsBHF32ky2cUxvTaYjXb916y2TBJYFfScqqKgcdgVbQEDDF",
  "key13": "MMJwPgWmQ2UH2Zq8MWuogJwGZMNrzN8ZUcSiueqjshe9TP1vJp8ny3AqRYVcwAvWgBtZh7R54SfR6QLpKRJUFc8",
  "key14": "3f326MvnHi3SXABYqgVHocegpXWqmjfVM6KjqY8sXKs5viogmcuhzkGkfTk3fWSKo4oyJkXgyorhe2CdWgniTfj9",
  "key15": "57AkaWw9VxPfBkKSc89VWdqfz2QSr9YnqbnreT4pgce9XVWxC1ba3pURhjck5kLVRLew7kEuoqapPK9f9yYBYcXY",
  "key16": "6daPXoLY4CmHr7mq4gZp73W42tfUTYGYMFfUDYWtGQVvfog8dfd38GGZDmgXFK8MYjC4htnfn3K2UnU5XKRJcTh",
  "key17": "VCkUJYCEn1WPRUBvLY4d3GmNvDL3hbJbULB2KWLqoGPZQrewiFzHS1MQPGRAfJxWNtxnXFc4cp8YNnqi8jvaCgH",
  "key18": "4RJ1o7KXMWBBUauYfVb1CYEypyXkeBnrDJiWVgRigSGPAiT91GjVmGTY7mL1WMNxxr3UU7BioBhsbf5UfTraaBrA",
  "key19": "4SzSwhcCYy6RJA7tzgJnD9ai38SDzcd5Rboe8fhFpVMhJLWKiaXXqEmNXL9swdH2EYYK29SqBDjzjJNXxkBv1k8h",
  "key20": "4iruVx7x6LfWjxVuPywpYnKHud1UcVw6Kt4yUuLtgcjv8N8eXpNvpxSihFrRnfJGNbFa93ZTyiCymZ9JvsXKoJuz",
  "key21": "4xVdY8nyFbfc2hzayjeJnpeE3M2D2jodPP7hYPeXzYjrec1jwWRi3Cf61vC2FvLK4QM3wLsRWhCY6YvWfN24tsZq",
  "key22": "5G7tCZ2V4zvfpWfBdjgJ3ZrwfsYFSXe3dDtsxMKmKTc6Qm86oLVA35vh1RiUKaN4KTZ3cfBsBXVQm8DByercProw",
  "key23": "3LoLvG1REQvKeS9AASNqVsrFkhGgXaQrzTgeembppzYWvbt9iedVtkqwR6uQBizkHmy5HZzc4KNhWtbPXW61whvw",
  "key24": "uZTpiAEvWkqwxfZfAVa65fGd1rKzPMyi98FE4uhDGDQ616JQZby5kKfe3qVFSnSX7PtvFoRZhXZFoxvpnwDyPeP",
  "key25": "2gv2tzbgUQTTeAPdGjBUT4SHRStxB63dNRdpFVqB6eHFcV43hZ65hKQWWvdT2FjFYWETzeVJZh3KtTahAd2tR3k8",
  "key26": "5PuXX41bBJGMyi3bmnGkfck6K9m2tNsmdDuWEoFLiM3YMp92hv4gPUHresFLVEzfXmvyPsU2W8gMs47XDdM5pcU3",
  "key27": "3JKRQ3S4q1N3w5gTXzbwNBWTaX7vmtMrX1WYXf9KUfDaTM4oTMP4iqjP1fdhd7k2dy6N5XahEgxWp6QjBDesZD4E",
  "key28": "2CWj2JVVDK9ceMrtr65A6ocYGWwSD5LAM6A6tCCbh8FrWrSwPQyeicBedrFSDxdtb2cg1pFzUQuitcyorbXkMCbv",
  "key29": "3kLZihXGrASLDgTgwtfSNAVexFXMETx46NkmWu4Ns532B85BQ6RYKttyuKyqPjF585Hn9Grhv7om56F3A2ygusL9"
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
