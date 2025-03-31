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
    "5sEo87wmHgKWjPqBT1yTnDzTZKdWFgcsUXjttMCu5prbaQhNzLLypFCUexVPnpjDrakxQJpKjS5JPGor7rJDwvmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uXf4UjKbsBykoAKZ1X5cVNArF4Xg74X2DoFtikegbDcVHiXLbYvAbXKmRt4kzHi91kLUiNtNcSBFnhLoc2AXrqK",
  "key1": "54NND9g1SLAMCNuft4gdXsBnefvbTzHCjiz9EDrefXryAafpJwccyz23BTHGxEBUZL2UafdMmiT4k2L4KQyjyyDT",
  "key2": "53NRA53qUk63yZDbZoEudkDN3RiJQeJFkfmuerY76nmHPG6QHFgmT1GHqhhdaJvB48QpLvBzSq1Kvi1XeLcvcrCH",
  "key3": "3N9qrgzeYvwSGdTP8oM84rx2iN1kp2GzLMFCs3eCBwFw2RdBYDCxMXLRkPSXrpYXLEaKULWcaEpyjR8JUZjXjAQ8",
  "key4": "4XGRENDDPb7krMAAsQByRdHsQyFkVqVGFrafvy5wtg3QxFCxYiLWyX7KKM1vaULwqKZq7o5iJZDfcdMSwmb5N3tP",
  "key5": "3TH3i865oRoDDvkhC7QeiECstrTPxQLHeCx96n3ujwLM1yjsPnEveT2XpJvnVCUq1uoiYMB4xDjm9fPVHXegfbrL",
  "key6": "3Ph5XkF6Mm23XgbwJ2rrczYzGc3BibhXLYdSZh2pHu6XmnY5L1K7mhy4f9Mf6UcsrpFBabkPBLD6Z32PGAaRzgJx",
  "key7": "3PmzemcHAa1WmfphtbuYJYUo5KC5r7S77SNKxaesXtm6UJBiTwH646j7AXWAYToRNVRseyw7FK9v8SD8HHRikDdR",
  "key8": "5GWrEvx2TzeqXB4cwQrkpEHWHGYSek96qk81W8KNcnUW9YRHxrrd328Zx4zC9aKvfdnAUnj2nRX6jPGfKtcgLSFm",
  "key9": "E819JgDVRw9oeaAmGczQmY3CZYV29NEwNPZuj7RywWbPEV4Dy6Y4aeZmq68UCKkbzoUeU7TbkzPg3S1oUmiWvFw",
  "key10": "5MhdgYrc7XQ8wrjYBqpxrgnPyE59w7UQHu2gE21h42VhX8BA7FsFLBDmBVy1mxVzyvhiRjJy6t3eyTwoUxuUxMPq",
  "key11": "4TViAYv55MBcSfQavbLQkLwoqKCmzeXGyssX44HjzAGSnuqqWwnjX2tYWyNF8VZdDXEhdaCxYwmPPZeKNqGEM9cJ",
  "key12": "3yKKKZW34RH4zvy6Y9f79LRYFT7WVyfwKKSZKCUcCAXThLeE9LZuMBkXPSFhHQFXcEJwMD74SiBiy6CH8XV2NfkD",
  "key13": "3knaBeAe2eie3EpijR7bfx7uKvj9fxoeVssBM7EmqBmMG7NxeJ8agDsqfSpZypLWqneKa7S4GoJa6uN6N3aQuZgZ",
  "key14": "3JnoEoPotAtWXustzCPJJ6taob1FfHB4GVNjxTNYHcaPHVNHvJX4WL85DHQQvH2bs3BpiPRUyBSzACaZpchEnb3k",
  "key15": "2QpR3uWVAE8JPxp4qZJ5uQQ2bqSEgeHdpmKbrQPEdYJDpEwHQJj3WB5iJG4NMR1pc91XFpbseGgfNBkiUtYXnz1P",
  "key16": "49SXLjF72ykYUCJBxW8ReGXFrvgRP5MvngUtuPu3esUdZtEnbQXFF77aWyfZJWDgsdCk98dFdGDmTvCD5Wfctd11",
  "key17": "22Tb6tso5wGxNEBCiYMu7S7oEyGiZwj7s4pG4q9bTR8YKGo1gxxGYRBrC2rVxNEJNU1B4ApquBaRWxkF9sDScks1",
  "key18": "Dxo37rmMB3irT4CqrKLzvCpLya9f2zeEBcagCBaSxTpB2NxNWWQc7HoNhnnLVLPDch6ckLgcoMbx4VDpkZFSpes",
  "key19": "48zfrnNSWu4Z5PR8S7DihHFHHgZcwo5frzFx7giHqyf2SCMH7mrZnsUwseUvAqMGnH4HEb1zyxptHAdckwdY3jXf",
  "key20": "5WvihNbRQcXB9ZaHPzGbu4mNA3W422yVR2M4sgYMRxDxez4zTGA3XPGSo9MKyfPk1fas3xHHyeEBsRxygzAubhbq",
  "key21": "4BT8ojZpf2ZsGz2zaK7D5YXcwM4N2BdZNobepErfWNhojh9ia45fKqEGdiF7WHibrvJ3XXmnbVRhYuZiKZdfuTBR",
  "key22": "CqMawsiGfLZQknQ4Xn3CrLx8Ld6HsFEMutF4KcyAWBVZ9jKfdvPcmvh61zRBsKXNsb8fBPAknPjh31naKcY7bpH",
  "key23": "39tQxrGE5iTyMExfWxZfQRCSVN8A3GkCiZnQatGDvK8L5gCRwcmp83vEJML6efAdAKFYrGPuTUVHuxQCoCx4fiau",
  "key24": "53SLqjyenf4Z7Qj6ATxUsLLKDPsachmu6cajaBkcY7amkPrW4DzAUzt64d86PpjKKywt9HjjDeA4xUWfmC6QPLFh",
  "key25": "4vaECNQDk7RgsJjKwSc7DZXAHQNbbZjPKD4otkYhB56hXJqJbcXYPdZA95nkd2XbJTJtYt5uBkGC2yVWGG8ipjTD",
  "key26": "5dQvcMsrF5nVAMBKDTiN9rGUAxGY7sJe7iLLne3tst2bakAVzFkpCiRwbEWcd3ksQJnmvtouf8qQKRpCn7srTiVf",
  "key27": "5GhVe3S3BXT837jXL5HCy2nc11CUoqHCeCnoshp6gQyEEtKihnWHW8SMq8JmaA3TSpYJ84CAD5r6CASnbNWrVvKe",
  "key28": "67Ueq3YPfPx4L1BEbcb2tqJAXxUeeEwXbV9L9TPRK3uVw99unE4fCXavy9sst4GWqnB4t9dre55mXrNQM4YnqztL",
  "key29": "5oziasuLFi9fUeKFCc9ttNCRpiYavBbcnL6uLJwV2iefzfLRXQEZTJMey2tfmDUUiCtYu5u7D8sbaKLusp7355r9",
  "key30": "2HHJYZ5FVgmV6LTRqrJZq6dxQ86L6eum33xwmGyG5AyvMMAD4RCFsPwnKLkDHXcM56TFTnpJnG48VDB7bYBsP38n"
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
