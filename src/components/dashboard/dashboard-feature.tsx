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
    "5AbiZNs62C2Vm9BaG3y54GWEFVQB3CMcRwJFyAWMoDAzzr1AKxmr4w1hm1fcursBuuo1uyAW6qXYDTuVdsQtJnXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GafXexm3Lubh6hvqafeBHxS6mhJnNbpWnLUsox52CiW7jKPBodZvaCHssKWwhgSprPipvXRveo3uMsTW8zHX4Lb",
  "key1": "mxFcgzPB9j2kPN65Aw4PZ48SQDecuAf6MZeL5AwAcvRdnFk2SCmJXvnzV1SfkKUBD3cHhdy2Pk876ZgjWdae6ZX",
  "key2": "9ocd3nhRjSJJHLw7LQDKCdXwtTEpjgpfUMYnHqaR7dD9AsSgH6JxhRgtf7hwXGYmPTh3tj6GwfEGo9KwCu9HF3L",
  "key3": "37S3UsEK8QxfBeNRVkbk2avxwj3aajNVS62kX8VEXDgdHUrRhBXcYKpWC9qns3TYiWptWM2d7uVHfa2SCa8QEUVD",
  "key4": "51Wmdeg3j25sQMWqdRPHE1GGMprkbKeFCd7owAjhTwYfhniiub2MdCkCMXEE2RxBnw6Z2KxVyFW8XSwi7HvsbW27",
  "key5": "3z9i6jZQp4EdryrZaaQzAVTF7m98fXrGs5S2vxzzQjUNg59BmDA87HWouN2sbu4o5mQwbXGvMqYyJLZJqh9HSPrm",
  "key6": "4kc4xfMd9hrWaAadqpoNmpqftjN1TxQN8Ce7NaWccB9vAwc8AWi9L3fcvks7zgKtx8uWbfaXoXauJHAT2AEeU7bE",
  "key7": "29FW4tdCyzSuydV77hfUuEwuwmYBL6TwWdBo7azSnnc3rFXa3J3eq5kFyWiebJuRKd3npecXzjapbpDotYU7QBHE",
  "key8": "2KqY8Y5isvcxMpUSQTY2aq1LDm2cTrRHWHhrgSLdY1QXGvENnnvpCDWqmyYyMrfrK4xc4vbBNeBkeY9RLBpvmCKc",
  "key9": "EjCqUCyS1heJ2t2XHgBMCWrnWzJJM4UhdSUQaTMYL6DjhzZDo3scVHsKtU1mZciHsomeWoSkYTskpUy39iAd39v",
  "key10": "3UBXPXZ9yUUnorAUH1nKKsZ7LmU9CbZEY1dVneYbswJf9zycRzVP8Ev8JKdRPby2hYyYjzuG6xPxrFXSotjBAuSV",
  "key11": "26usVKgaRanyDAWVNL12wGj9WMuUa5dL7S5DSM7DGsRTW2oZd17PhrNNBbLYArZaoWpLXoTQgj6E57cciJCTA1V6",
  "key12": "33gRZyoJGa3PhbHBTS8MUUDC8bfjpuKZAGrTtutxDa1M5DKdPLQzs4QRoq7bS3Z2dMuV36x9321UYQvbjTi112R",
  "key13": "621118MpC9paLLAAz2ZTF25iECjJSevH6irSLhKe28LRbw3E5W2HNqYM6d5Svpq7C74BRaiiZk9Ld7C6AhHg4Etv",
  "key14": "3YAbP8TztU6SzHr8Kfssi1yFF8Ad5gYAR9GLYoZMZU662So6oRLbM9fqyFQPuKyWtjKtFh9KCHGZraqBDqEJEJcL",
  "key15": "3nZrAQkVaNdUyzXepXd4jVkGAQv38tuzpeTv9KQ1C1cWxCSUo9HEWAA3vDJoLSQ2j7RUcvKy6oPDvYRV31qKdecz",
  "key16": "2crJ5vpxJEXc54yDiKxbnSSkYcqcNJocAS1rk7wZ6VpQoBf53wbweHkgaTSsE26ceRcNmm7ZpFMvzDQr6UsLtHrq",
  "key17": "2MV9AogGqd3iTFUuTasJ86nTDGiHmBBN4arUdEuXyVviwYYyWNcSU4aeCw5eeXF5Nv6pT3fjPStEpNcFhWdAqQtR",
  "key18": "6DA3Gpq3NcfGYTDkQMAZTX4YwWHQwjwtDCYJgJUJQ3p6scWP7MNq14SUiPe5dZ6hPErQFUNmwr5ER5h4TvL4qSC",
  "key19": "V3iX8bsk2CGWCVvthX1Fzk5CUAcC8EXGVCnzTMJze7gnab814g1MGt9vxfXhBqC7y2mJuB1MgG7V9MH2aUufWqT",
  "key20": "4LqufACC1VGjK46v3wAXNdNCL31GaGFYuzWzNCWHjV95iszrYRpuQxDwjoR3iTgT3WDzuW4fdPAzJthhmq5WPQkY",
  "key21": "2w6DvPQZ9EytyDEZWXsPXWFE2LvY7J7RGeSQzQBUAVkurBh2sd1maU27RXWctc3LLxExSGtzT3EMSk6zAgauNvVe",
  "key22": "3xMccsL5LAeLMmTvBLNTn3JFci8pXPPPSfu5WEPvBtwiZaZfdH492xVtFwk8PTQxQY18ehrJBhvEyv78chSFWJrp",
  "key23": "3nZzbCaoJWNuUKxc4KM4trfH85WpCi8wRvxbgzjcMNSWvcioXohc2Aed7m9G9GBqLiajZCAX7kAjnHZSwxzcjN34",
  "key24": "4ERz9cdVoYmALUaMq7XY4WZ1L2xGnypMZfKCYT1W1ktyKEuUrd4gHp5Nm4VAawS9Kmdi2dsa9vhNPMrDBpk8GKyY",
  "key25": "3kXTE9ygF9A2omd73Mx3avr4wvjy7RJQfQ7SjgrN8C6nHmw15JEWigXrtfvKBAPv74isRnoTxreuaYgi5w1pnBAT",
  "key26": "3HKcX6SmNek7y2974yWR3JhA4hcYTyQYZds3JXfgnyWUXKc1cgqK9qXG8tuED1BNgBManqgPu86kZfzeKrVSUckB",
  "key27": "mpxX5EQBkjz2Ro3FWmRcsN6EKUWioGXoQJ2GRuZBUHH7vrsnXqZp6iid6bHC73d8BMcWZerBdhFWzJ6bBxHPYR7",
  "key28": "5fXAQwHMbTp2amL3YgSAJAYgA5xxxz6BzBXR9gEJHJAwQ2jXGNR2zZUkWkRexPgT2WpVz2LbVCrPvtAckMeKpA6f",
  "key29": "3fJFLvofsUsUDdhuTtz9Zeumm7dyqmENoss1JHpWHum3uZmpmmua39X8uMTXtw3BUaTVWFiySPNCGH8hqj9u2L2b"
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
