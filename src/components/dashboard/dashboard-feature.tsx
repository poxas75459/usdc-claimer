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
    "is2xf2WLcgfzuam4q2M9aT6gRYVby3utGEfNeRv6UhGYvkeaiSwX8vkNrVJtSbAQwRXtWNt9ZFAWGZiP9pPbF5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51EZ1MDqATuHnRGV9wXSknALg59G7TaTysA1Cw44s8gkNdXkYfqYYGLvpaizCfBRyNqZanJBht3vcbzBTWHmASMB",
  "key1": "47sUone2Y2oGQv8xPRp6SjKotYcLPzp9Cvik3eVnfkQ69HMUKXDV3xRqtFU89rR6BgFepypqVyDEN3b2oJxa9fCz",
  "key2": "AedoxZ5mCwhJQJN13dQ5UxmjEzApFavwCwzHiPR388WHurzqjjXZzL5LQPaMzFtbsKBwaKzaREUvQSRLvMKmQxz",
  "key3": "4xjDj286n335qc8HNp5sr4r4jF2AfqsuxKVjP8EjTeuokyTbw2c89MsUeFg3c4izbUJdT7D6Ux2MEeyzkXueZ7iV",
  "key4": "5DTWGxpHFbFXDMtT62wqHTmPwEcftts9UMGwKZrQ1oBdZhmZbDAUMwhCyjk8uNjxHQ6yPyDa7bZndngVBL5wYymW",
  "key5": "5rMWLwSv7yeR4utm3MS19M5C8NwzUFDv9wGELNcHDj8j5FQcAbbxWkhgA8LLHit2Uvg1VKQPehLhXodnCCMiLGsL",
  "key6": "3Fjc37rc3EQ686cvrk9HsnB5wxihHTVB1WpJhq1dHYk8U4JhRdd7EkNowgBtQQyVsLuZkw1b2CPJ3qfjjZiF5Jdb",
  "key7": "56Nq6iQJrwuWsdgHLbVfAx4NjyUEsqBGSUCSBJptXuRcqq6NGR46YULVSXHqv1TB7CrSYaKrhqB8emYcQKNRFRAE",
  "key8": "5YDQsnSaE5V2QgSvHTT2RVLUfCpz47MWo1Qu6RBP1fb6EDywJC9WnnQSsH1vaHShqUdhGx1fvhum4zjKWV1AsdxW",
  "key9": "uBCbyADrTyjXaoWi2FdYvq8Npp3B5axaCCDzm54BfwYnr19cdsMKhXqf5hduVZB2sb1D4ZhDSETx6nJiu3ZZEJX",
  "key10": "3Ytx4ES14QXrjXFvh4LDUpZMEf8h2YeMEAFKGCxfbk6YSoWfu6SkpMxwpNSg3KncepCc45ZqBsmuem49G3kAjUDT",
  "key11": "2bHk6n9hBr1m9MJzsTENz7eEqCPd6AmaHMBM8e5uhxqZJGQyprsaXmqEhAmLdm3iycNw3kR3WHpv29iqYpr2v5vP",
  "key12": "3kRB9hJV3KnVm1W8YKmLdsde2oq8Vpo6ZpiLKxW5E96ea2yutyBPZcPZF7sP7pdnASHTC5Du4MfRhGzGuxomis8o",
  "key13": "4vzTybq1gY1RE1Gi9NkSS4xLfUHniN5KHzquQ5QnRUsf2DshHXxLCPuwcq4pzWoxA8kkYGcf1esC8niYAgufXr3U",
  "key14": "3BVtWgUrF5dFnxsP6xqXgfwqtnskyYVMDiq4JR3gB2vGq61N5EGYGRmJi6NBw3rAfztRNMFuJ9Tgt9rHrex1xEhe",
  "key15": "2D8fQa9mHUXtpczLhaZJ3XGGxqNQGaZx9FBSjGui8hwviDhFfd2YLYeNZmuMVk8LbUHbTXLm9SP8kYyBe2sW5Tee",
  "key16": "3RDv7swbRuyhD6M1uAjWbeMSgyiX1zkbf8kUUrRdgdCKZSLhG2rHXEtaArS7Px7wy8qt64wUoEGEjAYyxekaMi1G",
  "key17": "2aWa4a9dEFkLwtD92DDBwhu8A911eTL7X8xY69XX7bKAvGBjLLHpXmynzXoWwZ6oCzGX9jMRh4gzZQC5K1n2Arxx",
  "key18": "2gHDstJswNj9kJE1XnLAb1P8Bgsecwf65XEp5gg5zuG9Qv1iLMhk6L7uQTTshyzjivC9er8Y1yCLS9aSmrSzoYzN",
  "key19": "5gUEDpgqvjGbnuQ8ajVyVCKywEv1v8SPbHAGdjpQv4TMxfxpKYH1oTz6QgFHj88TAo9Dk7XfEMGZ9AQTJEtz9Tw4",
  "key20": "5U3ZXkMuVMxpJFtdtFw989F8paxFirLNewGPDWKPFXdVA3Lbp1p4j1ibgCebFFMH71Er1BidM54cKknY3zGgvGGV",
  "key21": "2ksa6QZhjL3BED1kd5JSybcE1LDFGUPQcErSbz3GrAUP1d1wga4EsFPD88vNyh5CcAnCsDBucMfQzCrkpEsnmXMg",
  "key22": "5LgrHfMfx37WvKEHj6wFE1Cke6Xq3582vy6pBXnFmv1FfA6zDm7NBxvQCx8Ev5sE2XP2my9wyHTUa7vDQR6UVHWY",
  "key23": "2rSAAWQs2g8UrUDQAFqxaLh6HW9f83duXUvjBuvTHphYadzSVmCtpyeTxgmyYZHDAS6gYeASoAm2VgTp9m2yyLCc",
  "key24": "4ZhHZPTEZinNwB7CGCBMbk255K2kLiYKRb8WvcxB8UDtr6D1wJXdUi2YNLvsKF9QrxaMkXBda4CeDHZuuyZVXu6N",
  "key25": "2vqTnN7jiApmyVKRirtfC7GbDHTUX7rwg6t71UptP7GWAL1x2zaGhqi7jzC7fQf8JGTPe95qvMtCyu2Me6MAMpjy",
  "key26": "3vffY1VLZALMpNRdBsBMqrTfYBdbPsXV6YDdrpjHMMKv9zx3bmRfUqGsvb6GWhFFeVAsX9ufEyW8vUMXCnY4U4Ba",
  "key27": "5rTH1o4nABDiqgDqYQtFuymR4V7Zzy9odirtzAXH2QTgUvuKnV74g7JndqHVq3TRiJXfrxD6sa6fqeWrVLaaXRRt",
  "key28": "67QsHqjjWNwvXX1Py8zwy5PvRexaxxYJkpZHE7RX99d3grKSVKF5X26sqp38zbqy6cbQcvD5ggsM9HpFtsXX5qof",
  "key29": "3iQaJCDypZCaa9QCnatPHZaMmm3acavRBpzx79BLXzcj9TpFgwRHGRunVD4yTwdeok5vQP6tvPvAwAr6xt2bMsKt",
  "key30": "61CUeTd9motqhaNXiH4YVtJnXYUdXfYsLj7KYLEcGeJ36pYsBheFnfSe7t2cFBvymusW3GcRY3fyezKc9YutyyF1",
  "key31": "27xvXbhwZ35iSZXzdU7i7BemaZA317tPGro4PDS7WFxWLAS8zV8auYLHUFWzW9vMw68RzWV7Timmo2rypNPymKya"
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
