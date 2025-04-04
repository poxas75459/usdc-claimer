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
    "57YBwu9TSDMFbjBX7m5TQAJ6VF6yGyMEyUwpQGdVVQM3RmKDJv7ApDBq5QmbjhyKh3eQixdMm4YtGE8oZu9dserJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEnFDe4o8v6MGsPc7RHhMWEaawP9Bz1vzZAh3HjxqcuX9Rvt511hKsDDRDukmtqXtkeoVJroaJ1px6xkH2iTJiK",
  "key1": "2JjJkHLuxjXSsK5PoxWeDEuWE5B1j5kgvoNMuawQUPsomoLonpbkC6BYbgA4DCgsWSM1s8dHkEK5khrQQv7Nj5va",
  "key2": "3TtmsRuMGEG3SPXvz93crtwB4iFPdLSXJJe3sNitTu2tVFbV4vXcVMBTQqSmegPxL1LsMAt9pqiWskpVtJB2rLTx",
  "key3": "3q7KrcDKNW4aKiJqdLnDuhB2FNPPxBMvbpVT4him3vNPUVArMJQPeS2unQNDmLiQSxMciRGxndNzGca6xTa9kKUZ",
  "key4": "3bSTmXXhx8HddZfAVH8CX561PDhZzeyc4zJUwrZ5PNpZUtvT6SGsgwXVn2R6PrS6niThW5XP7dqchQA1EgfPaWEB",
  "key5": "2qUH8un2vX9YthjqfboadCvRVycsaRgAgcTCA1Nh7R3CLwBU3TytBkQvWPnSv7YWCseE2AuESwPo3yvuBn7uxAFA",
  "key6": "2JFWLE7J5KkJtVmi2MA8ZSW5VynkTkp8WCWBCjRWZAM4QuSHEsnBvKHYpTVe1aWfqQn9vyKiEEmpocnLbfUJPgyG",
  "key7": "q26on8X1PEp7VRztrp5Zze2fQS3bfZ5EFLfyKdUoAdmWBjdz58vURLRFxYjmxP9af2YShxZdKPqPVRk2ZzVZ9of",
  "key8": "2hqQPsK98aAAGHsNw3NNfdyb61bk9sUH8wnnsXY9UPmYfB3emZhWdyD5NSn2mH91dy9addZ9JtTDksHJogguWCJp",
  "key9": "jVLwN5py2Wofe88U2r2mzqMG4AunqqtNAfnFEd6EGgcXG2dmXGodi8rUvbqSwXgVygieZ6v1ae7DrRbcE9LD6Ak",
  "key10": "3Zz4QMyzMAK3uQnBwJ4sr88L8XUQAXGbLttmrYaDbr6vDWQvrsqEdTFbgPFtdoQ7ubd4Me4x9JkAc3ZuQXyP7cZp",
  "key11": "2cPR9zouKFmE1wKxeUE731wnrdHYAeiPZ85LvviKNX4G6fuZSJphjfoQ8sZZrVUD1KK8wwaPX8oe5PgU4STSPXrd",
  "key12": "4BvGHMvN7QKxP6tPjEfBrU5gjkRF2SdiVpPGSr88eW3QR1AV5xjsWF86YgNHWQm8Fd5wChubAVvvDQES89znknPM",
  "key13": "WVJBt8WdoZnaFSPHN5z23B3eQY3UKVNBD64xWir94QtU9pYm1P5EsEy3mHDydh7jwUWogJY5mY3YGHjCzoj4h8Q",
  "key14": "5tW43efrzWpPvuSNickSCWYuvA9M7JGsSjF8XxkFsSxxgujiS4zAziPj6oRbRtLh3KW571zemAHyytLKukmm4zrC",
  "key15": "4ghujKgS4LMyEh1yRag9UMQ62jcc6AfbXSA4DqhjPSuW4TDJgoahNcsHxAs57BwtbCxJRAmBGUGZFaiFxv8ri56L",
  "key16": "613BLy7Rno6eJHYkh2HaDoHUSWt9QpMDqc5zFZbTSvKdviRUiB9s6XpjyQpc12bj3Z6EBKNXbzyEcm5qvLWK8gw9",
  "key17": "3ZFPE7Ln4WwiSXyhRqJS6V9iCcsqqzpNGu1ZUavvZ7WjGW2dbWKkX6boLcB5PLRHEJuJqVmo8jSsnunpL6heV7Hr",
  "key18": "2yyKFZaLfYPmrJ9WJFWk4BL5q7yHCYkDnyNcF2Yh2eznURzvGHQSgUrJZHRJETAeYNkh3opbB78fwvY6hVuSTCGL",
  "key19": "sxunYVM47GMyMs5KXqd47p5rWNFuNbrTagoPcghHqGNnKJk4j31nMgp79zgNEGLmN6LNyhjnHNB7uZfHrYzY5Ta",
  "key20": "63ehYK42qb2Uxkv1vAYaYBs7tbeHLDDu8AvoA6CrXmf4L1ageinrhJynLgi2RtJ8YS8XSWz5aSgAFxSZCz2GZFAZ",
  "key21": "YQZZvABFMZKUuqr4soZ9FeDoaTEnsJU7ewKyvCePB8L5Jvvmkgn7Wj3uEh1HGnFnDNrTpEPtQBoSAAqBHnu1tQZ",
  "key22": "2FZqQpafSQA2Tu7RVGEwWMfJ3DZgH9RTUNou9ApNWEcesrPfzNbXqR2pz2Ptb1T5aQJvTM3BDyRpcjWfEQooTqSK",
  "key23": "5sjaDGyFKrZeQKbHcD2aBd6y8ybKssQZGwTU2ngoZ5NPe9J8msC7GzfSCTS8wd7TNE4VTjdP442ZGrR7oD3MsDc5",
  "key24": "GCAs66V4QDRqbRvzY634oBiXHGPehZpFw3JVbFnjRKTiGBd3NYKsGDjs7FTaUyCS7VURwmjBNXYCr8BWPNaxVZo",
  "key25": "xrXkw74TPkYxbNNeaxkmgXtE3qPDQVUWVm7hzVDw8HYARsAMkSTvsGyF6wcZwTmhF6gCHED1hZDUYfCNp9JNqKw"
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
