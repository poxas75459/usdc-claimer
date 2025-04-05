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
    "5JfLr9cWDsUZFgPGDJLea1zpfDQftzjFtuxLUMaPLT2xiffqAXQYbjX2J1AtDPZ8g4nM2T6nkRERU6ZCUzazHquW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WSu79vFmeu3UZsN4HFfPWo31T3pHPbgJARYHAU3DEWCoVpSLbwbpLSyLYQaDAiYkJtLBkudQEPxKicPiGeQQc5L",
  "key1": "3tAbkgXqymVqQnR1WeaSrrP4Yxk3T64E6PMJNKm4f7AspZrdCTPGKGWuvDcTRtFTrz8X2cq8SmE8zhgo7bX2pEkz",
  "key2": "16GnZcHxMcD6qbNBoaMLsCzbDT6cxLu8CCMr2FZHQHXLqwHVCmqutfegHg2Amauj527Mi5FcmqUepafNtQNgX2G",
  "key3": "2j49ny9tLJEzhrucWbNcx3ho7rdQg5i4p2TkAMA1fPFJ3pTE9Q8EoGGkXUk1ZhLoaom131UJAStf6tLEhAoNZPUP",
  "key4": "4m85BgwAENQ83PKdrXHYWfeFaCni2XojBwLBsTy5APZVMTdP6gtg9bHikwwjJ8nUV86LEiobMrLAtAPbNxEvjpWo",
  "key5": "2NtR1vkqY1i84bXEXxLxaLQC4u35Az82rrHNVYNf5ir2Yx4uJtbiEVtMWayWNjA2SMSGsbNZKuC8ANpd9XAsN9Fg",
  "key6": "4FkxbenVvLYGNhtNKSYRH6YrHGPFvZmoFMLBYs46RmVnpBT5o9piEUmb9xzd3ksw49nT8YrJnKsuY56gQ2Q7sxXp",
  "key7": "2pmqt1vK1ZJDFUvk3u9uU931mS64EJL1uWMo7ekruGHnG3Asr56chCAayANX4J89MbPRn4CKJrEwp84P7gHQAAwz",
  "key8": "2uAehE6gHNUyJvbtJmHwEzEEh6bYYnTRMssSixWNz2Tj9kMa6p6VvWfP4pNQUPjz447sXQ6uJweJqW5efUp5GaX8",
  "key9": "2qAtVYy42CUctzUhuH3YxZ3z9gPWL6kMYHHrxZudvanxB8STEBiv62Nf9C2WeUn2Cjjy5NVMn9D9ZJ4B98N4nJ2o",
  "key10": "3nPN8HiUSwxSDfN8GNQ8UEkHwuayLuGw2VwWkZiu1JKvm8489WhsFGswCvHnqQFG9Y9TDa4d62p3uZQTV9vCheGa",
  "key11": "39bM3jHnE8wGuGEm1kSpiyYeH1Fy5bLetttSseLpJbD2HwUubpncbsbNNALiAREdwngqhB5sbrsjRUWKzaN18QFm",
  "key12": "4b22BmKyMYcHTTpL34vd49Hw73gTfBEgzDWwPsi7kyDV1zhd5iMuwnGAt8ewR6gcmgvJNPCq6o96JNwzurTm78Qj",
  "key13": "3JyvLUNVTT7LhBXMviEpBxF3SL4Go5vitHhS2kBvTscAeVsJuNhSTvVX9jfcv3h9ENwdQhavkY5YEqQn7FSHPTNb",
  "key14": "5PX5z5YRzNs5kEgJyebGT1aQ2Lp2V3KsYY2t65VaGiR6Z6JMxX8qYbA8JDzMmfxR3DA8DNeovVQDtctY13ud3vrn",
  "key15": "a6N7rVgdGVW2zsPSfHz7gZGeqXPBbiP7pF5n3XZsthjxZWDEWevcZWM5VRJU6qDNy66TvnGyQEXDxEnVs5a5HiB",
  "key16": "2nSTJ7bo7TqxUZaXKj78rkgqGAFArDAcCZqVqn1qNz6hN5M6MdCC4GWtm8fCSvRCD4cMhoQyTywm75RXCjvjP1HR",
  "key17": "3EUHaSr29aCuF3qzfrQDAhfMKq9xWXf3b2wMKzBeZtJcAEMRtQvL2ZE1s2SitpK2mA55DCL2RL26qcAhjJGDmHd7",
  "key18": "2cwChNd9r435KDMb9KL6yoMrYzQB6CWdRmapZdhnXiGYVbDXSiVpjfVuB6oX8Wu3siXfFRQdtih5FLnpoJf9qzXJ",
  "key19": "3ebW7hbkXo4RvkczcYXJwY1HmRc6KfhEyXcmuFmry9YXmQKkfcS6fR4qiHEnijrJnSJxCCLBveJNi81jrsRWMME4",
  "key20": "5x4bn2ts82uBC2pgDBYhXsqXEdVQYBK6p2Sok53KZH9VN2WWQwkvJWojyy5nrmFxzVTFpigMHVm7BUoAYwYveDEF",
  "key21": "58WrEfM3jUK92ESG6FY2iEJ9Ctn7MWhyiLxLkx74M7oGgScb1Au2AcLxmCLfXG4C2AExutsqRKDjN22FpBWbtQUM",
  "key22": "4yQ51x1ANhNY4Chr3XaynNxBCSrmVnNbhX7wmjRGj58rWxa9qMEXz3ZUgG1kQUauerqCc4v75y5ZZkwDzYujWPN3",
  "key23": "5FHBwtyer3d4fiNfdGctzk3uRdkGWbThooAJhJYKYvcNizaTdaaJdGUQ46BpQttbLAoLVJBun1rqAGc22e55Zcch",
  "key24": "aMFe2Jt3seLyCgVqRBxFrXBW6hTdxUJVyBcGr4LuUvvwp4w3ZiMNWAQuRJDoY6FohF9hDxHXF5nLK4oiVHrCUYM",
  "key25": "5yyiin4nj4tk1Esb1QJqgHFLMkBCVqFrcRjYvauECRRoHnjCAniwj3fBWR98DmNPbribEhxqhpvqaFrxeqNdxt6f",
  "key26": "5tRxug1NHTj2d6X4mVMvBxv8xa21TzUr8TJLPjjCgPFkdV3Vmdef3jT3o8m9ZjpL1Uhq5wTJfMDVTtUcDYLkUQaM",
  "key27": "4FCbuAUgYfuxTSP127bjko57qGyBjq9ND4tHsUzHg4UPQPuYzi8uW4j12TLD1A4pvXFtDmcjyRhUhGpmjKKCWP9u",
  "key28": "JsyM7LMuxVQC3fFS6Qr132LgdZq13s9JN1d4FCTEbdhH2mSFLtLN3CSA4w7iUTjkuzjP89bd2HcxdXz1hKWocXB"
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
