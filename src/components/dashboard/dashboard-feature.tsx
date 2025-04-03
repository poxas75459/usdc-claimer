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
    "u5Au98qB572FF5xCeJD5dYVoD2fvRVN3rrKVde2fSEmTrnmQWRex54T8qPYhg7GrxmTE6QnQAM2jc1vhVBuS2qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZcpLwZdsAgGnPpve18P8AF46kxTJbQHgomyeXpvTL7A8es8fMq4qARBj5QRuVVWBc3z9dgqkootzKQvxNn6k8g",
  "key1": "3FkB5YJxrLVNUFdSHRqqH1rDWvXK83GocRYhTQVoh6YnUMV5h1otJ6q1hX6h6rfdP3N5AVpirPf8wjhqdvyNCq9H",
  "key2": "4fCw47GFS4hxyVNNEvuAbviVo49LLp8GYuf7YWZtVCHhoAqzij6i8Gy1xZKNJP663hew4eyT6RZ7UVWRWX66VpgC",
  "key3": "4FePTjrgpmV6pL47cGYv9LeDmdetRQ4dxSngHeQadvcVYwsebCn56SkoPqeVpcmFWSjeQoJ1PHVNnTWAjr8tBkUV",
  "key4": "5FBeeTUxAam6mCVMsQBVVNHzQCewF39bsdBFyeDDfAumsxJ6ciC3heVyf2XyfR5Gq71MxcSz2Rx4MAyaVgg6869j",
  "key5": "3CfX7Lnk571PQ7UgQ1sbD6pybcz9iWjQ11jk8JAuAZHZerxyFq3RxmhbTzRXyCUTfZjoTp8tARzTbPd2gSbPciEp",
  "key6": "5sYdoHCDEo9TnfbkGfro4NrVihUU5wdDzCziXmpgPmrHeKDsVPjSFsMDnezMjD3vzzMi935vtW9Kii6bfEoXkwzB",
  "key7": "5JxLMYjaxrmgm8edzWtpiyAnTodm6Pq1ps7rg6yZCPFkTF2Cz6v5xC2k8i5TNZAZxbRPx3V3mGHrj3XD1JUwSpEv",
  "key8": "4dveAsFpoWsTC3c5EBi5SWqgEAEmPYer7JhtedxACKpWbYtjXq2qVN1GX4bZTGu6yDi7tcRNDZJuB5jdjER8dXiu",
  "key9": "fYr8W23rXNoBj5mJ5raJggiGmMZG1q6iaYxWZS3bv3f5WsPiKzMwHjZ2S6fMK1CWwQGR79oRyJfVSbDXe1amgkE",
  "key10": "2qJY3SsLJcjs4cvfcKogrhhsui9gYmJ9JCuoWX1roQ1NHCt2AHspNumNJG4F1BruB4AwFHUmyPsew6nXWnn887pd",
  "key11": "49xU8ZDKdrapDFTfHwxvJ5MnEZdUv2sK4tMQmoHHswccCmRf9wUQK8jro6JtkyibQaikFEEgXf6gHvWz9qVWU9iX",
  "key12": "Rfs9FnScBjx1L5NRqanWNp5ugHVZJrkgSjcNWvTKLaEWoF9BBSfGEtzzi5rvwfN8dKutYTyDJPuRxtAUzPT9Zv2",
  "key13": "2ZA8f3XnZayX96uZQd1UPy6q9nKRruyDxgddX1h6BLxt7PKk1AhGTF7gXCpkBTTYzG4DDYnn1mq38UBaQF3hnpQV",
  "key14": "45G5jbu6SoQR57S1KzJdiXtQQQQ9XhqdHZERSPBtMJLwqjzi5wVqhSvPgj5cYpzEtNMFrvZzLQP9qdepDVbYjbKX",
  "key15": "h6GqXw3p3qXMUVh9bQ7GUrP163NMuE6RBqV5af1hLkYDkmHh5iPP62VztyYn8buLBY6HosQ3NpghF3NWcGcDF1T",
  "key16": "4r7772P61YxYxoCN6rqU8HyFt531g7wywAZRsfzbiLw4LsD2wS9pXS1S2MAYVgMg8zBSzK2RLVXcnjF1DJoBS6ME",
  "key17": "4Kvc5Qrn8GQ6NMmiZEFWh4hMuEPTrtarZ6pqGywdDzkTTzDkDnxTfw7feRbS8HUtz4jW9zVZRfctbvpqQadncQMW",
  "key18": "2niUzZ7MihjWELyWEx6ioFMbhZiMWF4H4v9E4JEn6Sf8fjk7eA1VKgHrdM4jSYV4XjUfskrVpQts9dwU8tLsYCrK",
  "key19": "5m3KrerhMczznH6rVqe6mithjyxKnYAgYiCncSpLZbpqjkbX3HVmm68aArXpmm8bWDBYv5kL8APG6phvpcUVQkvt",
  "key20": "5fxDpHxTq71U32mekXbm7KjTQj6EXq616XPz6F8WtwxsSn23gxTnab96GiE9RHkgraMLVyWjfz7syBoEhfVQyeqr",
  "key21": "2Wmtpmg86txMJKryayHhMdeu6FvLQ9vghnXczQ3mUKmujeudCGQWPhn8CkkZaZh3kfVXYayS5ouLPywmsfAUC3uT",
  "key22": "28UqDLWzmQtVUSQrfZpECvbRoQ5QwX3CQn1k381AqZZJ2kePY81w88duaZkkeWFNgS7qSw3eeXGLqUqZ5qw8p9Ci",
  "key23": "5iBZQJjJuiB6EHJWZUAYKYb3fkkxVDw6bnLwASYBHHq7dxuB6DqDfU4P27KgUGHr4h1SN1fE3izwW1Sm5YoXuWJf",
  "key24": "3s9o83yBrowePFb1bs1kpd4nxmoGbMAcd13QLrYX63DEH932CyifEuEbbQr6tujUNKG6QwjudCN8UFupugsQzENL"
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
