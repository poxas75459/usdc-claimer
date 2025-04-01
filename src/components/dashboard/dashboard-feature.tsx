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
    "4oTfWwAVANpZJ5WFSCc5eVbuBvo7cZziQajuMtnJ8dscFYDpfjXtZFxgF93mJfNgZYrJSFqjGQeqDe4dHKpWXT4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7ynnmE2eiYEqwYuQsg2KLHKKsfi8qAvcF5jawUVitaR5VWtQd5dSGTUJznf8VkZhq6ssSpPJyBWdQgSRZ5jJKf",
  "key1": "2DMeM5MoynPGkuEqvwhatg1hzJiifAZtE25cfNEq657z3nbxV1LvcPeTQpPjPuJfG2kTbDEG78J1h94YFjVXKKyF",
  "key2": "3r7eq2z9sHnK7Jd4jnKocbzXuhLjHhK7nKWwbjnFLb4RzEj9gQwc3zvFb7UNLtyLkDf4pf4bLDJtUPLFpBrCwurt",
  "key3": "53WD9ewy1onHTifp8dZA77eYFUxS5Q3kJzmpRuNrbuF1VCHRooCEfZAVXGpiRH69snMrZqhic7vPyGog6NYDGycx",
  "key4": "3bntQKjHCZYvYTUvuK6Xnorxut9cE667XkyZJFYi4MdkoqqgngGTV3EGi7zwsHRaEqCXaqpdLtxhPoSm7kbXYzkh",
  "key5": "y1vvRW9NfLA46ZPipuZkPMsHdVDYPiZ9fLdoWSsmfiLxzorHH3Gyg8819vf64akmXuQSRcXX61yWmcNv3j4vvmk",
  "key6": "4CRtevojcM6qiQA2jjfvHHXuSmZTEEyeRruKbxqviw9VRNTicMB72642Pgj8no22nF78G647YCwLPhJ2y3q7suQ5",
  "key7": "4ayEDmDF9jxU8gPTbA9Bpa5Vd1VrjFEtoghjkcVFqKAs5rcYHik9rSrZHXn1MXPmSSqxfnZXbUUPCbdCE8nuc4q1",
  "key8": "3PyXTNRLrCZpCqg5YHJR9Z22rTfagtMDBsaoNFym8vmLbYAQHgXLUXTTFL2E2jj4GeYU3ybRsJjsaRzJxkLfXWDm",
  "key9": "65e63awMZKtg7eNrzoMcmBHLzZmw97ogAkbC1jbt6AgqwR9g4ZiFt1DSP2WZqEg1bSqBkz68fjW5MY9uFbSUE2sE",
  "key10": "2yj12kVXPo78zFQs9tX3JagRLcd7R8h2SN2DVEbRZRGNKuZc8fy6qgQ4YVT3WsmdCwFGiwgxhYPkkZetVJLWgYRr",
  "key11": "4c3sdBLHLDqXihaTXoqkhVHaYJP5AogxAQh4BpTLnsQ6SMAiMW2Cr7c7SpUZVxEbw1KtpDLy6UbJgP3wnNT2Pt4d",
  "key12": "y6w3NmfBwx7ngczFouXzG4jaR5Wvrh5nHYp63KJx4Ee1pZ4DCrBs4M4tJpDzkJ3qP4vtb3fyU55G22KHSbEYmVw",
  "key13": "3j4Z9zfiMMLKA4KGovodo8znTEygRj2e5JY1LjdQpoXVCdkisDvNJg9tiMavo5QrNmvDAAEQurXK5W5eYin217CX",
  "key14": "63TnYjgTkp8jHgmKzfMdcDAuctuLEUQjADeFZ5PadqEDofq2NBjoq3n4wGsa5iesAgpTuzq5Yx4PamwGnagm3FY7",
  "key15": "42gRzxp8n7tKC1bCZMXCsbnB42qPn5ZwTTvYhRMvm9P5NVERXv9TvA8wzVJwXbWDUBvDSJW7NdKfj6PpVsqtTwZh",
  "key16": "3SsEC9nq5ap81PzEmNqKPAkUfjUbNL91SmCSDE1LVBvzzGfjEdSYjM9P8yAhvtj6neTnqZLJM3WqyavW5PLP7jET",
  "key17": "1uWpLpgLLwuZXj1bWxLa6q7RRf1ciS1Hasm1MdbdwajY2C3WcBDDYMnD8WFWsHuduxExqTXy9BL72hwUvsrKU9P",
  "key18": "3mg2mQUxA7gPaAC4t6VLxqbEhYoRcZTKVF5czscA8h4TeEerWUFhDBhrXSTZBnwKRxLeqhhxVwEqTHxttXCBjGED",
  "key19": "5scbZ1ZKFWJP1RvLDyqx3BprwGfwkktFusb43NhVJsRDFm6Eao4ouPnvYVTadYrvC8VhWyvYDkQcCjKAWkwjuSw8",
  "key20": "56GWCMNBq6YQyyfCyHrQLnAhuEKjjTKWXgLGBkKbKxYmdStwYVU9Kn7ogi9b1juF8WhQXQRqFDkgKnP8CNv3TiZ2",
  "key21": "4Sm33P876wQKEeajMnzmtvYdsaFuwbx671tfQN8L5EopiJKkCcjEYzAaz1E6PJXL87BxCxVphgaUjoV4XBKyo8V5",
  "key22": "4f9PUvdjzWnJfBxqEDtYnc6x75q52YEcjhURSEq5Jd14q93C17mqrdfjT3p373XCxGyPyVBUvZWFeDwtXjswVUMj",
  "key23": "YGDRrbK4NZSacTAxXZK5N77zEYDpBVvfRvu6dRDe6VS5Ku9tmRMa27BjtmPLTEZmp2YbUodpPexokCqfqg6YjEj",
  "key24": "4isQaRR2YEhcDgDj8d5juXA4vHznqC9edJb3hCNxaXrSw98sHTv8rFN2KzKai8PkV56pBYGF5uxX4fpsVHzbMqAo",
  "key25": "2ZGfAFG5qs2i3vHdJzLaccWDkPzqgETCbJzgx3VWz4f7FtJNb78wX5FkebtEsJAijr1tF32Eshq7xsx8Nb98DZgR",
  "key26": "128nZW55Eou8SECu92N46gjjxvPQPTSp2u2BFkcUMCWZGcMUaj4VnUK9Pja5tqH8bmLxrJGN9Fd1YbXPQ1Yjom5u",
  "key27": "4iR65XVVgEJirctChjzisoWmPXSsrsXUmwVAi6j4y7NtFf6VJbAT9zZ7ybd2RBTdcjVy9xqwFPb6iH85W8nju7Wz",
  "key28": "4tGzNz8FKUzSfzHPXrP8aTsGJ8UUcv5eQmuQzsoNRaP244iA7LFUCHW5L7LnnmWWkrKNv3Jn3aJh5NEdxYAZMhxf"
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
