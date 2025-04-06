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
    "3ovu4HW7hR1upzXPp69TsYNwt3mZxUMrafrRYXzfbBsCJdFHyGGRiQtygQoFiZ5WqeWMytuGV7WpB4YifCnckiBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZTgpHmhXhdce9SbrKPLHQxXSQAAQiaVbD5NRZezUSiTucuZBJqjFBWrRSuGuG4uw9U3evUMJ3XjPDA2KnanWZ5",
  "key1": "3EKoUvi3XZTpUUaNskvpUTM2rSoDiu4MVtEdNSRsFN6GZzroz82RUWGzZEBnRkiNZSK6GAnw5J2H4cCmHna54H8k",
  "key2": "2ZxsXeMWg3U4gemjEYjX4iJPqA47hCBqiFFTUW94MXnzX6QLSAKBJTURNrmbeZ1MDxjTXr4dVrVLjKXzT5C3qRJ4",
  "key3": "24HqKoFd1XhRSiQXycN6cUqtu3BNXymEcNRMa6H4bUJxf7LPcVbz5T3dr899wC5XkbdgatWGZ5K6mXWkdRGAgELL",
  "key4": "4U5tFqiNoPhBsR6V5ACWne6PqPFthi33xgidfHN5zsUgGJxpKiWvi8JYPx43wjQcP8KXFj5VQeJyfadekA2Jb6CN",
  "key5": "4255xNXH4ddoidkoX7VWK8xqYXtXGhx4hmCt2z6VEMG1Ztm59oXg6WtFbgNXmrDBoMVfCabijhbbGmsoHmHy1vbg",
  "key6": "gEqNUVaW3y1XPKBPCExzvnQMtg1eAkPCZeLusPNCSMUKS2ZQE2f848ZzsJpzzRAiaPfavKC9hA2NEy8fNDRLKhv",
  "key7": "2qeuqCeHkCvBCnCB4AjUHPnDRXN1YE29Q4raufpPNbPuzbTbsedMa7M2HLdrFj6YA8bTPz3fd35XKqTkUyBvyMGL",
  "key8": "3ErRtg6tW12iZGk6RPTd5Htb784ye9WuvJUR9pCwTtxwRUbeMEsP3ZYizZWjvjbbkmuG1JU1HDVnrNEriVvpNruu",
  "key9": "2t4BSGJoK5aechuQgiTrxGTqyXfpQA6mZQZngtfzGBcNc65Q2WUnw6Dm4hQTgfJJbENQE31bg17kUqnihg1pvyxK",
  "key10": "GWesmeBgVcnAZRwpn7Cgz2DaLNhG7NX3wvMmK252FUCKLJ4QAcu3gBQonvYXjwqitBwQFu4BD9YW4szYxYrE5Rp",
  "key11": "wjqMeMGbbenkMmTFZYXsdqN7zvpBdtpkdqch8wvZTTHtrXrMa3wnKAR6rVWtzrzfdD6nLDvquzvrDLVRJXM5QHf",
  "key12": "4Srow821G7aV1NZrcNWjmF8s3t7787ZGaq2vh3K6ALS4m9rybe9qenKMwD7f1ThFn3xJPcdYumyhAruRA33EDSr",
  "key13": "4x5zjMjR4d6Lg2cC1F7xXmBxPig9FYFgjptme6VNwNANr6wDh2Y3ZjHqZFJtxwJZYSjge3HiX8XBzu72GFYFvqUA",
  "key14": "23LSZDdC1VsGKNeKk6Yyx5tX9uZ5LHmNrXbXEubsbymNPGc2jQCeZKUBvUeycsy14pzkkh3jxLeRB8br5kDuwbZ6",
  "key15": "vM3uHjh5iGywWBEBfsyfU4K736Digmq94xiQuLKSQqmHfn8cf88LTUyyd7GvRFkpUr9Hugg17wKw6m5uABcb9UN",
  "key16": "33tVmzjjRC88daLw1dswwFHpzpthLdc76JzxhooVSm6JMjR2FCdBUC6oQWNag9wTippt4wHj9TciaaJCqK8LAdSz",
  "key17": "2mNu3e8AnP1z5tnR2dvTMfuQQ1NrtNgTVKfcqT2G6XT7WwPqyC9JwFEYLeYsCU53YqGWHxf7Z5tYV4tbjxLKWTxC",
  "key18": "2Hdp87DdiLM2RUVHT5uzB36xka9dxea7x23CFBjF516qWdUJbkqYmncuia8ghXhFvoX1ShoBbdd53uc1AEgGvp2b",
  "key19": "36hHzs9BgLBN1tVnKpx3ogmMhRToDwC3TQkPp6HtDtDZfY6e7Z5DsPTA9n1Qcwt9GiUcnkGRezRu2GEozVYpQZoK",
  "key20": "5qovT8JihuSwveCPzDJrx61H1nf6rxWLKiUnPqfPswNaRTmaCQUuKEhhNVNxGErkhQCDb9p9T4q3D87a8Bd6qcfR",
  "key21": "4Wpe3kyzhQ8ME8eK7h6tGF8iR24oat5Zw5rPG8ziJ7WvKUvm43J8Ag2JhswWcMHG4HsCw4jbKYo61WU4QPoxYfeG",
  "key22": "5ondCmE5q8Uh4GvxM1PAfWBTkYvAidTos5vgKBLNX3q5uRpaobmEwKURhHEXSedaudPiiRGBtgwZZ5aZM8donhwG",
  "key23": "2DC8PUqRhVUp6CYHcogYCV1ucTsqFEcbghpJ81ErP2kbvEh82NUdvMSXR3whcUcDx7zMtbgPHYTzJnuhN1dYnSkH",
  "key24": "K3MK93HWNabVkUKYreVkKXmsUrXusut4ABi1QU8RxMhNi8B7vm9JyWqE2xdbPeNcY5junFxm6njV4UjSPCy3rMU",
  "key25": "2rsdce8ewXbczdqMWb8mH1epDGcX549bT8Cov9HtdsYWA5wm7mzRXMPZDD1T9pYuWFetrgJ2NbnrQrnZXDCTBwBY"
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
