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
    "3jMd6yTwfhJvyH9u6AvuSoRr61r7V9mVTUYJKJD3jrUqTYgAShvGgTbdUju1Uq1pLNLgaS9W2UNvuRVAngGS5AeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293xFVDX13hSDfdF8n3aZ2ubcraDQeyxnvTJtr2vfiCsr4HTrzxCdAidbNdLsJq5S1p6J2nfDufG7Lu4Na4y3ZVi",
  "key1": "4pXwKBjbxzPGoaHz1WAxznvCcb2qjwjk6obmsHtPWw7asYrzJyBPuBctXfbNiXtdquhXWxc5obeNwxem27yWP15f",
  "key2": "RLxYdXyHRVaBuyA4fxJEgQWLBYisqJmK6Tvz4ByMPzvwSCwuDXTjEn3tinMhtuLB8gpUWRaDUkBx5k3gz3VVYNv",
  "key3": "qmBwR12M1TqCw5tM5ckiuDCbaTNSUWGFudcdrh4kFmnMHxMfCWmrLjyksRyzhME87nmTX7yhrzz6AewALSy4Ynv",
  "key4": "4a7mU7wZBXqJgn1d2fWZEn9MY9qwDj5MRiQe93m8NgFas7Ug6vT4jCswC6UFBVMsMEG5AP9nBwYBXzUk5cptLvEo",
  "key5": "122JsgpsyJ5VotiJDT5SdVd6CvrqdfVCdJB4sYf4Wa3P4y2rc9D8iXujd3KNEUYtkYsrWqmRURqJsC6bs28x1WZQ",
  "key6": "58kxXSQdgVxs4A5q4Nxb4i5Wknwhstyg4H9A4qrTM1LiLKQdXLwFHfQ269a8PMvMhVg5Zi8X4AJJHRRdnRZuw8RW",
  "key7": "4FdFfyfRVW6aJqRv7FXSDHs7sYKwgrkVotMq5jem4r76wCqZ9hQi3V383pUnwhw4A3JpcLNgQSCDRaJSmodjS2XF",
  "key8": "5MvwjyfPH6WgvKkfK5Fwyac1KHUN2KZYfGvPKQXs3krYGXvxgEVEi4jWHoKt7D6Pb2QKkJShhui5ZkNCwUbSqiqz",
  "key9": "U1T2WrAPRZhK9UYD5fCArVBNcWreXQBjPqfoXhBMmdEx3A1CGB5LfzbwkiX6zmR83GZv646p3vmrBuFDuWC38Bj",
  "key10": "4nFxpMTKr4mpgRVxHapfeXpSUTUsXYJvknD4HLPLxU166CiBcydVEGReBHiq5kMmNS8ZzRS7AABKMD9fj82RzsZV",
  "key11": "4rVp4uSub1bxuStHzPYJPb4pGHSYXdzeCDeak5ehriCp5SzmVQu2hkJxto6VCLBidB5eHNivBN26eTfvz53tv7Mo",
  "key12": "4DQneE6M5atviZLPFDDtdmysNAMcKk4CCYEY8zzFkrLyumGkuXT764kUzuEbKgJkEEihUFe4u5JdX1MnUs4xHUp4",
  "key13": "5mUYY3DoA2ybjEVkp1wgFbsA2fLJNVgChrvuKRttyzXy4EjTeJbaoQjyTKhBdjEGEnUsMxK98JdjERjKkJvgrmiV",
  "key14": "3kmVqT9YF4PQLhYXTwaREikDe8piopdN8dpLUStSpgR3sjBsU6HnUZmE6G1agcJAGvzLqtD1sMjUk9xdv3Zgwc2v",
  "key15": "2e4eJhvwnbe8pytBNd8TziCWPZmxMrDyRE15Q9ifYZe8NUR7TsS2nUthZ4NWiAdJxwcgnLiwm5837rYJpLSCXx5R",
  "key16": "4eK7SMfZk9zhkAGvHad7fWPexZugArQab2pEyE95qBKeVATSCHEJ1yHVhXAmtSdKiB2zuVg679UzdHE649SuwAkP",
  "key17": "36CTN7J7aUCwzahG52s5xPEgs4uwafAhVvDLht5i9fh5u5J4NRqTpsXHuJC2LAPGRQpgwbrZ6HDL68xvKMB5WJiP",
  "key18": "MSt2zLfrZymCq6UpYDn2BUpmWz5Lgz6FFBDZ1Hc6CGgFYPd9XNk72VGnxHw7tHhqLAeUU7BjN3e35inV9rBkKob",
  "key19": "5jBCY29QHwfakYP9GLxPB4dji9dpm7spnHVBkN5ijdtoSXxPffS8LQdvWgzi7v21Ypzryidq8R8LHvSxdm2HKbg4",
  "key20": "4QpWEu1RwpoWBh4hm6qubxJTNq8oWbuAMC4Ay1mqPrYz5udgc698pyLizyfErt2PQoA5HQAfrjsxzdTbiLpPSsFn",
  "key21": "HvWrvW5YcMD8cDh3sD72AC9sQLqBqZgto2B6K8SJX7UkA1ATUXaJgzLcZPKxaLnRDh9LGCjmGhR4kowFw72snLY",
  "key22": "Bu7GdWpoHbqSN5KY4hngZBa1nB7kBwENfmn8aTa1cSDx8vcJJaNsgowGnC3Ra6r8bRaRe9mDYxDKVsiP7wX1QNX",
  "key23": "5TeZzB93M9N4oXDiWMJ7VmVkmZjYLa6XgiFPU8TkbRDZP86qABRcYY5nUBMQFJCP3QNedWd2VVzYcXh57oXQJ7j1",
  "key24": "55W8JqGXdLrJgnddRABmUjHxE9vnxhzch4e85UN69LN1Dzg33Ssk1tpZkesewhddaNC14FVQ8xBbsUQ2SfA38SeQ",
  "key25": "obEjm2AgdqC5tcCUsYECxX1u6W3YDwauatozTXovkTWpdFBaSiyNxie33N1Asd8hJ39XuQu1BsMyspBCTscMKDP",
  "key26": "25C6ws9qWJaeX1BDM2BWSc7YDNNjqdb7K6zS6zdMgJ7cshUNxpz1RZ3TZxgM6xdNZxifVmN6E3rpZ1WnbSRvakD8",
  "key27": "3StY3EHR4UxDyjroa7cMad1sJ9Hw2nZVwavNLprmPrTcFu5UcxKDnaUVUcU4huVxm3QC4iCvM9iZPn6cVESqsD4a",
  "key28": "5g82PWvRev48DHyws3RWnLPsHEtVqWKvP7SZ3axnmpMgZ3LCFGTiE8XKHPPMjAKStsdXgFkjYq3ybdiq2P3Wmnm",
  "key29": "5nszu8EJ7oTk8X1T17H7atAAECdZ5T9YVVQ1EE9SWTefi4Ed9z71Xr55Vu5YwaJ7yt8xgACQWokFb7FdUExhWxy3",
  "key30": "Uk5vVSiSdGJicTLCiw9BjbJBi1E1FStE5hx72xRxAsjD5yVBBsUb5Kks4FJnxzs8dGVSPrZQ4pt6CzBzeC6mz8M",
  "key31": "39KZaTnoehNNAgpwYfbPyT59RhZk1QBy7HazrUWVptUNUt6k6ajPbPBLZuoXT6QCmMLVJEh5UcTs5aKCGt7msVQd",
  "key32": "2pSEfqkyCorWjQU93k7pZKPgD4kMs2eUqEydtD42NP4K4Gx7n5PUHe1Hyz7RJ7ekKNhtpEDQHncpgrvhzrtgbG9v",
  "key33": "4SNhmxRQkS1bwmPSNnnfLLVsbQcYTLQ5a3tj65tosQQGiyehUB2tZzfuGp4tHFZ1EeAeVjEshJDQncxNAs4hA8Zy"
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
