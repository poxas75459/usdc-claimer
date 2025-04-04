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
    "369rJP5ZutcbRcnKATnZyY2ghYS7CknnGqmYRuwzF6dXfwJNFF57tL3buw437kmVKyyE5cYvgMEuWueMyRyP5iVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcwBxFYKD8QsiPitNLpB9KUZSgdpJ4K1adhvrSVLskKsoxSQSCoFFR7bkRDf21z4vMqZSqDGr4TG4n8FGGy1iEL",
  "key1": "5AqRnFczuAPq28NeDF1Q43PvQ46kHtatEB5JZtKj2U9puyz1aQtKvprLcQt33FuWWGnbgR4UUHnpKLP8Sr7zaqSy",
  "key2": "31bMazXjwiJ58aVhyQdQZHiwLcx8bTE9Ri26tF7bTb4qQQQ5hoUbUoxv6am8T4HXPvUxvTgZqSrA1opvRu97GKRz",
  "key3": "55qnbZWZ12hsmH68XUA33hUPMuEda5uaRjVsoP94auZpqrrVVwjZ94kyG3V9wrMFiWzRid6vKBZuCJRK9cQ2ZFMV",
  "key4": "5es7jweDurYbjJ7zqx3PTvMhMQF9kVnNFD7tqnD6UJJ2191L1mBFBThKDzVhe48CkoeYunW5keFCsGREJNmK7ZsS",
  "key5": "3s9TMpuQBew8DdJJ8AtgxQKVJnmFnSpficYqVgihxdiwsi83kTER8L3cdHTKhkiEpu6XjG91uwGrmjHw3FpsP1Js",
  "key6": "egcjiEEVv8zhyQVqDGX3pQ14QbXjAu8CYAXtcsbmMTBZnfVEGkd9mgBGBix1w2iNex9YP1LzTUEdQuSRauCQNiR",
  "key7": "3Hu5wm4hiqWjipr5uq1ieqXnTcVt2SHmEvpDDn4BeB3pPKb3GDHJomh5j6f6WyULuf5m75cLxFhe4iv1YDchBH24",
  "key8": "3PBUR1BFm1uwLxRGetiQKS6iX81YroffeUxxpYVHVivv1reEMv84tUn2tAhJCA8jCfuxX1ShNycG2HDZZUFPZcda",
  "key9": "2L4xxziwJK8FV3PffeUkWw62kifphXQuwxmUQmE5cy9d7s6AGNDWfA7SsNJQqqVKqZGgQyGFiDAvs8fk8tnX5UQb",
  "key10": "5iEb35LTH3KUW6Jv2uWagXLxJVZkH8YDhkExM6fjKWdny4cY6CmAsHSp8Y9Mk7NpgTXUriyTUqdxhsWrLhJuSSnn",
  "key11": "2BHqae4Y6dMpsUbs1yGxo8M2HRdjHZmwDCXR8ZNBoDV74YEcaUA6ZFFC3YBzkRHSut7CU23oe5HF9AyXEGNx6Fsu",
  "key12": "2CnQyd3jjQdhd7Pfrcc3hRkaQhyk1C1xihmMmYxTXnQMgfuAE7Y2Z9PypMB8SB3jThYMDJMMwtNtmugU6eZTCauv",
  "key13": "RgxH3y4VUrK2MAjS7CtnkSg31Qc537z8rxHYxG7rX5iJtqmSVxUEJes8smRvVfR5mqKijSZtz1cNerhetRM22bg",
  "key14": "4c2zVRyAQAtbGkmpjc2KWLGa3Mw4aoc9P3HYeYBpKKN8TcKKrbS36nLx3EDTk8MvpKuPGJwfdkBf9WqefTNZP8TY",
  "key15": "2NnekwUeu9VoxhP7sokwqCuAuQj1BUYMKzWQWwbMBrSKCEPYowf5U67SbfS8wAZnkkAKzRCPtRF9h6K5DucrYGA3",
  "key16": "4DFhyLN5LPvtZiFs5GicGssoXjuzdCzs6tkR2en4ydGvfe5Sm1csWP5TWf5N7Hh9gjom5Sexx1GAZsefTAfDeVYV",
  "key17": "26vobAJU8gxDUERwKPtZKbxKpuswtmjMjTzsKH8c88T2xhPsvqeXUiGnGRGCC4kJL1uvyf5CED8Cr1qQsWsBTgCu",
  "key18": "2HLTwCc7JHVgvd2rHRz1bEe5QfErfaDKoKEqDTWSziZH3g8gsks54gtwLh55nSc8nXUM5u6FM99oaeakkwp1BiLp",
  "key19": "HPdXC66Jqo49V3YZKeoELArwJZZAiX4UomjsX5A74KFesSk6E8A5HBRFLN2KpK9t19WeNZnWhJ5RKHMEhtw1x6P",
  "key20": "4xMJzGZEsNJenkUK5HAtxDhSKGdrv5KxUvdGarvSuCH81bzqgUUb8qUGQXxRH9N9rFpe7MXLfLxxa6B71AKpn7Ea",
  "key21": "2kccr2m1j7SXjgPfJTNe6YohJohKzjT9oB4AXzgVkTjS3fLniWdoFgWr6e17KCqkGhLNMPoqNGe1Xrb2SDpggmbA",
  "key22": "2sbvaVLCbijsZNZpEXSyUCzxG21x64bfGejfDBz7QUnm5dw9EVt8iqEZipYbE2FY4cUAPv3gFZ6KveA187JnLRMx",
  "key23": "2iceLVJoUbQmAcmyv8A4i5NcBhYYRjCKgpbp7huRafo1iMgAQhfWgzFH6RJ6Mih9TvxxtBn827XG894VB6VB4reV",
  "key24": "5N4WBdpXBcwiJaTyxhexKeZrBEFiTAH8Nns3j7YzSTGC1fD3Sa7HtxX8NLksaY2k6uz3bsnH3mXzLa9C3BfUCYaJ",
  "key25": "2eM9M6wpQG3b2L6B76Bq21vWD9iKWEdxe3ZWPpfMi7E66dFKjxPEdZm9s8AQfNUCur2VtJJS3YRFZPVk26UbpkFj",
  "key26": "5uhCv4jBcaNDjemnukLAoVSYLfLsSgp6aHgvsjPdWR11o1nCTKJm454j2914SCvCRrREHb8n7m4aG1xjTqDTf9Zv",
  "key27": "4hsQwz2UPAAYGa2WEYoDPRvxcaebq13SAX561MTXpgxnLYf4iyqYJpCeY6KF6gN2QFGU7oKtzfg5dihwaCxn97t8"
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
