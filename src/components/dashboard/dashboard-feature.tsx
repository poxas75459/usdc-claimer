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
    "5RpSAKBCxHpz4Btay1NgY2MHPDEtAk9id8aKwLNLAsfAFvmdGwcVY1FSJ8Atz9hYMGmPyeB9Jet8rzZfpmz61hUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgs9mzpQYD3L1XpKC3HBGbBwF4MSFczfpmwHfg5rG61TgXL4op8Uep1wDZEcWCBWf9RNh1NUYqN91WpN5gZB7Wy",
  "key1": "5uC3XrLrpzhjQkFWoccm9exFHk1gtnyJnyN49Dzw4rJobwh57HnoWFijHwSvUJFR4eqtudEeqjfToS6Rmyd2zcqz",
  "key2": "34UHeTVGRFwCwSsatWqNfSrwndprL78sPsNfnWqC6Q36rkYJSd6smqmuLEzPjxuyzF2WA9EaUUZfDAL7RRLBy9pb",
  "key3": "4RZnisGQDRtrpRybKPQmYD4nTmSN3VEALmHCwMPfFRqzihEyeJdJhnqCUaTxZFzW9nb4yEniagzpTwLi6gVmx1Af",
  "key4": "K2WCbgQ5NxqeDoJx2LF1JETVk3xU5J9NVgXrB6oJLCu1cgJ2GxQi6W2qdAb6hyZxuQfLbrA5WKWguG4eVWtxpky",
  "key5": "5PfqAh8A176zNgK8i91vVfXUzXcJ1Dv9a2Kh8dhHHJiENrBxjtnKtUY3ogyHB5v9meQADhrkj3EJPQNhLSho4Fvc",
  "key6": "HRWXGMkLAvMrepbcBDs6VccNA9fKxt1kBz7AHGPCN1JvNX98q6n88VNzr2fRfE2zjkfxFMf4JkAvJ21QY1CoN8k",
  "key7": "4M7cMW9hUH2HaD4igNWg2gH5omTc1s9md7uTY1HgzezBabP2FcoH1csnr9fC6y6Uohg6MX55PLUDVZePQYUAku9m",
  "key8": "2bTKpVAzs6925h2tqEaQRG81mjoudgjrA32RZFeAqdBF83EzTswqGccCA7XV9cQTAhpBxaZSJTb6hKxQMMEjhAxV",
  "key9": "pJoPR6QygxUHjsgsUj8CoZH6h6BNCPPehvAnrj2RqVoktdpdir2w79kVRwnugEHuTZhVsrEf9ezeQiuyjFnAvoR",
  "key10": "65heUpMYjwkT4LLkoxjnMKtVzCs52ptt9aTTdc1CCDRcTgx3uQ6ihu5FBZBxAMaMyLHY1Re9GgLjT77oyNk6LWbB",
  "key11": "3CyGhr8WvFHPvzuM2ZieukEF8we4EbeVrUR3RdmMYTQxEpPpk6CK7VEi8X4EcyyaUZKwBYSH6DiyxgLcqRdwZGRy",
  "key12": "25Azk1WrZkRe8Eect92xMV9SU9NhWg2Ko1f9f41QZrh6qtaiTpEurKuvjLQKwDw2CeMD4QYP6itNhV5HUJNdUR2c",
  "key13": "2QyPKPw5GKFvg7wDuJrSvnJsRNqEAJWdMnF5F3nAM6Q96WAxFEVP31QMQvm5U6rmpZtYnrvE8KJa8Kd5cFXY9QsU",
  "key14": "4CQW4ZNKpv1Z5n9VrKHucenphJ2Zm7oMVAurMkA98pFRvKU1sgyw4xRqAUXqXz2CowdysfuJ6p82bXRTQiYD6MWf",
  "key15": "5YHoYabFUAvosXzrApBr9Xk45BFthuGELBLhZKinCzvFSx8q4x2uEeiGUzZNMY1QXfyYMEqqZykAxThYFvxK1twm",
  "key16": "4BBNEcxcwwjVkkmGg4c8AwzFpTtYBdeiPjYtQudxBvPof9L2z2KDvbaCyxiiUbtFVECMVkUFDYkcPmcFEAqLPtwT",
  "key17": "3MWNhREkwA81RDwxHwWe1mUeH8Azpa5R7tnxqZvxxMuSzjGbjkgqMHdhnvAKKhQp7MMW3nG7dnhCNuGBJ97iXU9V",
  "key18": "4uRYWZZbVzoMeFNJMEzdLVc3S2Gvqz8pCeZowtXyvFwdgyMUcNhbQbYQ8wVpiDC5ErPeHtXgxnxdFFwVGzHeYqxX",
  "key19": "2yyTJityBwf6oApnoapyBgLyUEbMvjyUxjMstrJZDfnRysL17JyWh7gojxbFJMyvvWryL6TKdXWvCfHC3YVKXv7j",
  "key20": "5TYG8BUDfVqV7y8wcMug84WtzbYRKTGjsMD7RFGmSXTHZayWXUYSPMwdgCGtESNe7jxtuGFCeL2wBeq6AuKhfbze",
  "key21": "3JG4pgmDSHMhwHg8dxTeWDNw4rpkm3bhwr62D6w7cFvHjw9WtdKJVXYGkDGRGWpAFHc7E1gkHasg2XFRyd6qSN85",
  "key22": "TdBMeH72HUmY5WvwbYSotvzpNAhzsZ7xRSBTekYP3Da7E43qq6m7JfihBFf3DWMcMU8Td4UoHLxygc3SgY69jg3",
  "key23": "23PHWmN4XxigBAjsoTUEyso3QztoR4MitMu4U8WiU66P2BZdGYqVAyy47WfGpfqukMLSebMzbAfR1DTW5vzrH6um",
  "key24": "3wE3nsRJVK5JaSnteoszCkZh5UrZzRPSHCrJJDsqNaDGu9VBHFPG3HuVGY59PGybDzfbXPPNXcaQgwAuk55RSxRU",
  "key25": "5n3mdLGVPDVxp7UsZ6kyR53Xc8mqYj96eHvYWD4PNzTdDhygvmch7Jz8RWyw37vKp3TvmXJp6A5eNK9U3AT7q2uc",
  "key26": "4NUyRxcxsmgytdg6kAcTifC5suSNafaAcohuGqaFWincJ1jKQF8R6YwXznzugQMagSoZ3f9GoJMMC1N7gXRfGUqT",
  "key27": "2UigXAVwgs5eVEbNvW8HdmrdFPVtMVwZmtS51WV5e6Uq4cCRwcb4ieFogDkoqYgeh7TAWtEC4oqT5D39zTidHrnh"
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
