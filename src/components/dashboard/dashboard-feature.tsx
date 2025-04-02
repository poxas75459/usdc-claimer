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
    "2TFSfTeRL9t46fxY2w9pa8yunpdStw6JDE1qZaBefobKBD2YGkXBTy88u25GEjhMErqNwgx6PWBfXzxkTTmqeDeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pGLV5n6kJJRYgdQPBAHBsV13srUYRrApH9bhWRchUAwssCg88dFpP6qADGuYrApDzjX3dbs4Pj7XppV16Vka7si",
  "key1": "prMVSkBEt3ca5HesMVwgVRgfED1mexFYxnsiiYTZuMcoYrSmt6Ezo2qK7Gm1fRiyHXTCLn1V9d2LYQMN5vX7FEZ",
  "key2": "41MaGb4ecVMw5FpG9uUwPtp4zmKbj2sSaPByd9pLLaksnduyrJEj3avUnkvFrhYWS3DFSUVa8bqPjCVx6GQwTPRu",
  "key3": "hZQfHbBgFBivyKwPKFJgLoC6hzvH4DA44tPU6wvSTaKgH9A4EBazJXpqRjHjT8koAHZ397cYkioWbFN8vGeSXPe",
  "key4": "2J3tiTSmGRhgqMduk2t2LHvs3TpzUpo7mTAmqLkQhseETKuJb36etCsvpMy26AEDx2uDx1AoaQfDUJbfEMmFdzTa",
  "key5": "5yv1F4dcLreXwt5syAN3bmYsZncEgTfT75283K1K3CvEBPDqe7weiknFcF54vaHHbHLfTrziq3xjLSgFhkrAESrP",
  "key6": "5umKreZsBabt2qRxSJEfzn6eWpxLuqESy3CBcsrKtqEpiLe4dr3nmJeX6nS9pgN7t3uuUyo25Hgenqt5uAhUCyuf",
  "key7": "5LKAvhNj73ZYbrJkheuz2BJSpCg4kkviUHqSiMGW8zgi3aJKGVCE8oBRKqosSLM4z7D4fitBBHzFaKxqnxCFWZX8",
  "key8": "3bcykGB9A4yzk1MJRW6STVwtxZxbfDFaqY2KyoLTCzMwJoknJJBZ6ZiLnd2UrWAtxHGY4vrQxLPHfBApGiQSvoF9",
  "key9": "2QB1BnvwVrzqJa6Lcmkp2G19h7mehMhrCnCQhEwjBtvCoRn6zeijy2PYDsH5xj7T21Hmt4Cbe4dDEVd7T3TvzzdH",
  "key10": "61J8RAZr8Y38Fct15daJBVE8J4wfcH3Hgr7mp6uf2zEAdpoVA4DWSvHJPrPopk5hQEYbvkKLMYfNMZZwyQk9DqjT",
  "key11": "48HL7cuxrWLfoxU3JfaaaRSQmBdwvFahCcZYwSM85vHci8bZyjeqw676aeXvdM7csoRkVZHJdMhtYKchGr8SoUvA",
  "key12": "udv66KAnjSWWbRmDa2bnXyN4dqAHVtRWBYskkEZkbUA4xywy6UeR34RbQWKKUjJXmWWVjyjPMt4TH9aFX6XyhUY",
  "key13": "2W6wddDdEtDhLJsHSXYpWkBk8Q8pahvTJG1mDAheSSmPemYxzHXogZeiTfNLSqWZ8ZCegFWCkgu6Af1ZAuefwi3S",
  "key14": "4eLayUh2NrFf5pV5xJCbav5Cy6iZxm7wxFuui4WBsCtnEp2x88nSHxzf1Zi5BzPtpA9EHzRQc4nkDfY2LfjYzdM2",
  "key15": "3BmSzm4FNbiuuVHbrNnTHg6moyad5sJS3cTGvrGYB38cdQe6pvXo4LejKhqXDoUSKqX7zhjomjpb8qopADQHZnc2",
  "key16": "vPue8ivDLcPzuK8WV7ZR8oBLnonpQQFyr3mEdRcnmF9vHe8RsFFs3wd2bWHtMpPT4HMgyVJHHs7cxGb1UG21ZBX",
  "key17": "5YpWan9Jnd81iizhRp9zef7n9Bx2sUUBb8neoYknw2utptVAMyAi47dfzc8JsVuKZscQSVTp9uVG1DW9KPUAgyx3",
  "key18": "3mVyExG4Fyjg7d6UvwYtfji1bW8YiqJnbqwBfPf19fzNNJ2izJnJZ5gZxtG9nQWJMHsqed8b3XiBbvoXtZ4K1fxY",
  "key19": "F2uHGhEJG1vfzvuKwukxYLeUrb9ffzBGqRbnbxdLShkqtUmt8fT94A3ucsChzRytG5bnEFAefJbsr1JEv8mYstq",
  "key20": "S4TM3aMtoomNfHqS2JKQQf1dJBwRE1yK1Go7Ac6uZFjKxh7WXj7GD55HjA67buvHY32i3frcC4FTZmthpZPxU3T",
  "key21": "5W9dwkG6Py3BZf8aLVJyFUAe3WaPdfgSr8qVYP64GKSXrK8SrY6kBS2M2D7uRR6ZvcgN75s4VTWWX9QdKpTgaNPp",
  "key22": "2spzGxAHNfcCdRNDEr75sB5z4jvRnKwqEsk96QMsDXzzcETJf81xuko2xRh8PWVmxZ2zKxwYdmJhNyEJ4Hd4ugZN",
  "key23": "4r6H1naZ9R232dUqAmAaSovf3wxjdLbKSW7Ait976yrZch3HTHMM3agbN7N8rNTSxpyt8qEBoTur9eWcsW38Tpcv",
  "key24": "2mvQH3patdVVN7YzV2LkvCVPtSDBHcG8rRqX1VipN2mXSwQYxRHkA87UqhKVhYNN6u1J3i3uEfwVmUv7ZEW48uWS",
  "key25": "sCj3gFJ9x2MnZRfmJffGSsA3nKBMfcc5GbnQJeJvjZvjoSCnFu4hsYd1bGGYESukrj5qPMRj2Zph6vJhEX5y54j",
  "key26": "2Rqdhut9qmcRLyCc7qH2LrQUSDPpS3YUnfGgUQg74pUvdypyxfb4MKGQpFiN5EtBgJNMcJvC3Kv4qXJYuknyBuJw",
  "key27": "42VF5vY8rcsZrJsEB5ymgRZRhJA36SbzumLZWwBv1ruWeYrt2UAic2KzhUr1WsJAFKgkSXtLcMoWZWXyG35kQabC",
  "key28": "4h3Fzzh8o38WCtAWGy1bgxZZymqkVtCZQzSGMLbAFjm4FZ7DeU4Qg9Azk6yGQsvzEiJiFem64We2fJbjhn4bFqfh",
  "key29": "3ErubJ6teMzBsp3L6FjqXizZqc6ZK49Cxennu9dNNYa4XnSbWy6g4hnFDPMA4daxBt9CvLkoM8TYSePsC2Cidun7",
  "key30": "2uvjeZE1uEB5W2ACyJcHsJnngF9iQnT11pT8MRXYdCbCoArP8ecWAHMXFG9rxC8uMBDF18oveytA86m8Lz96WM92",
  "key31": "cJjDaMczwd4JSNqZ4rKMDfRCQSxpPt5TPwpR3nDMKUBTPqZ3s7NfKSMRPfT4JDN3RiSGaPLN7wGZ555gasda8DD",
  "key32": "5ySUwHkVPgnsBMvFuDnCUP69fdjbMEXY44EuJctDXv9qETuQmoRBvWGhPmTkVMTvKmQ2nhSnwcDSoneC5k6wqNaf",
  "key33": "57toXnivt4xaJrNVCraf81RMhc4xZ5v9E71B6ZMRtLHCvKuSGiMMNo6WeN51nDFCAE5LfEZq6guWqDWMFg6KJkPi",
  "key34": "A6gSETXKdX1Be98HdoCpopw98YYEknS3g1BB2cNhHHamQhccFDg3UxPcsn3af6my9ePmzL9bwHkWLtSjRvfcYRn"
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
