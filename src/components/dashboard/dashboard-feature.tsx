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
    "AEp6i7hCDnavSc1CXbJMn66LCgEWi8rtEDeLVQjDCiuSfgUccbRamm9a95GxjRQ6eWFhsqkFCQGLM3gdd1mRGec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3diBQad9vw4QVi8ZyE2p9QoprACGC8FqyXEurW5GidZREG1P5gEtLDVXAH47wYu2KkMokobsFmB7K1XxijRSzEfx",
  "key1": "2xjtTkXs5HsqyrQWF7Y4za8Nb8Dyy3cHcUnWyY6PfDyhsZ5DE19hgsQ2p3gBQvhasd4i9ZQM82hWSMzmKfbx8nXA",
  "key2": "55z7AenytKLXSV6NkVYNEhBsC8yREz47A9uYyMAfG8Ldqci9LqKAW733yR7kpSnkJGFB3TczU6QdWYDDy71jkiQm",
  "key3": "44pvSQmbNMKvVvzHKNuLUWNcGy2JYqCwvfumWQbLQMXPr76wRhS4DzfhdAQrFdQcbVaEf4wq4FNh36DNmkRWVEci",
  "key4": "59os3kc1rab8P2Q7QnuPaErnK83nDXEqG74ijJZPHMqRSTafDQ5PivFrYDN6MmhyTF2812o1ADmwC5LGAc94oskT",
  "key5": "36L9XnKEK86t7Gipa5r8XXRYHa7kgmiETufGS1999XWJRau7g274A8aQYBVZMCHXL1apJQcx6TntrZN6HDG3U9zX",
  "key6": "2EtKeYhAsWNwJneWf6ad43TBudVLBzfn6f5UYV6h6LDXRGXg8hSAXakUG7MXbbeiZ1VSvDBknY32KysMyayR2XGx",
  "key7": "5dDEBZNePrqiaVVq4PUGswymHcdK6An91j9CvJGHT9F1KTZdc8UiBvwFd8Q7gngh1amVg7QcbA1f6ZUD8BGJr2D3",
  "key8": "31w5gUEztoU9VXsAVJWYf14EcTCAA1gEFH6x8uTukuuzdKRmUgZwFNrBZ5bxzZBEkhQtjC7TgvsZ67PtS1S5htaw",
  "key9": "32uwp1bXyNjQSv4p2QAgp1TzFLmsbv4W6a9CTMvkvUrfXo8tCcsryVdgnZ5Q6q1PnGhWhZRWWnzaHAZ8brobmwfA",
  "key10": "3yLqex1ExhRWfN4pAJzxL5wLs9mP59BdE7te9mFiGb5vAr5aonm5dQE9yTn5g82SM5r2XzNKjo7YmnnbFSYKWDWF",
  "key11": "4DCWR3GicNnkd2jfKopLu5UeJLRHKNx3svRXT1TJT5SFkp3H9G7GKoMeoioebRFtFL7nRo9VGPvcFKDwLvmu9Wiv",
  "key12": "Qyfvm7eo7Qmk5e3SBUvkmPyywExcbC9JHVb6tSU12hvp9K4ybPcd9Nbj3YmCFDP242cL424tTk1cZ4A9CsDVbCs",
  "key13": "3qBNGtxQse466arXyV7FX3mEChc7UfSBBRdRS3N3MUyBFBgXWdErn3wnHyvZGW2tdqthEgjakL6f8JmQ13xcdcx3",
  "key14": "5LKx7fyYecbvPVoW5dpghZjyNVnh34UvXGojFiE1pKKqDjm892ttvs3WJgFVey6bKiHfm48SXsjyKrMnzk2KhZgH",
  "key15": "4hBe8masK5AU7yb1xLWRt9DpWVB6XTs6GEHPXiBQc7uLqayJRDa2ZDqtvJbf9v1LmnaGhaueozHFqat2WSX5PKF1",
  "key16": "b7Dw4x1ea51WEgV9FgmsB4gTfPuEnoSZ3NWSDZfeUi35QwsWy9QXY4ArECkUBxPJJVrmK61c4Y7HDJ8qLvzphS6",
  "key17": "3yRJcQMnXgscLJhuic8GcJnW5PVBJnc6VQo8oLZMQz611VfEcKAsXK5g2uCcydcLAk689q5F7MLrgFhegoWS5o9p",
  "key18": "2HfmtWAijz2UMJibN5qJdx8TaSS7yrUrtEUgps4kSxnrnkD7BFJqCNRrqBkoujtT6SAgeWbA4h2gSNVd7WD5qeci",
  "key19": "21rVMXX44myo6mFdV88e8yQGuFDsbR3yvTmxKWXvfKL2hBFfMQJppmCvW6ZKEJAbxpomak1baPGkpPE6pjmr2P45",
  "key20": "h6jqW84ck6dQNo2nJzQ14yFXX9PM3eqGHM8zswc1Wt5V9djXwyFo2EBpErhdyqvGYcgyZkfzzLJ8yE9KQtUfL6f",
  "key21": "4Mk5RJ6QXLmZ3s237CBqgXePX4dTdBy6UfLjJ8MhyhMMAJcmG8byu8kqjQwEt7CMr6B2esPUSMLzQCZoERPHyYzG",
  "key22": "2XrEFC4Zsc96EH3rHnUKQg8WDUwoeHFyFfmFj8n9fVCpqL4mRUBuoUTVjmCNxNzN1f7p7Chd89W4EBWCVhNpNcMJ",
  "key23": "3kK3agLHv6NWzFp9TobPeCTsFzJ2s8bFmhejhQr9G6X1UdEZ2H8njt8r948SCa7dSU32kd8j8CLqP4YEPFNTXwKg",
  "key24": "5NdTuw4LceRF4ocrmkeAAAKJrqQpjDKnWAcrieNkPxP6Pj7WTka3Nh9zz1R836inmrwTsnB6bYQmtw8REKpYrFxd"
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
