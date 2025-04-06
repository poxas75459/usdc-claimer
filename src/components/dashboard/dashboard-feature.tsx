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
    "4DGQGpAzvJ5XvrtxTweJz6eiH9nd7rA2JYPGihfwsqGLGDY4zX6CpcBNqjdeq7ZAzRYyda4ygSndNuWbMKMsSDLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SH4VjZsrVG6Cn92Z83kwdASVf2tDvuEx4j5oos2PGkergDJZXTRiaNLs9qrjgmC1yvX9ibYamDLqVrERg1kNtoB",
  "key1": "v97H1KGwD4s4feKr3ze5d1gjiza6hTWQjjh8y7M8UsW9b3RqYnfMQWSsppAdFxsdQ5bxTLUvFyG9Bf23ZMnzxGX",
  "key2": "3LWCz2cWmqsWTBYJVAwkxqwgkUJ99f9tUdBEEvgW939hsx9anMuXZSu59XxELTjycAe3qGj1NkXsHRhsZFQM9CvX",
  "key3": "2AQCs65HJXCZDRJvG9rmuyyz9DS8NUT1r897DM1oj4hDi6w6vAWhsQimqrVThghNNzQrLASzThD6icMA35tcf7UD",
  "key4": "78eMA9W5tg6zqKUcJdDpgj1U64uHfjG2XCDwnodyUaMrTuDZdFn6n7FD6sekiwxmUVjbaSnrQEaAjEYuWDZBASL",
  "key5": "2BAbdZg3gfZD7DBNeDpN81hwZ5r6G2hj6nAmzbHFYeW2RCGGkgi1vey2hqHejWcWD9JNBmSLfVK8wCRxUc8NHqkY",
  "key6": "3ee5kfm1PVXqhjgXmzHx7VTAZpcMymkYXU9iiQ1itKvkT8oNEriR1CFyc4BhW7wCTALwYW4VqSLWBNyUp9gfsTvS",
  "key7": "23kAPz6jY1dKemhQYQZ8yHuhNSRMaGsXKSjqeXAfNit5PezUkRF82WeLWupgPzwEvQqZfKM3ncZFAatFGHNpNmT5",
  "key8": "os5dVjnQjx3oMpKxbQ7XgshhJP7Waczzzteo2h1pFEJJnacsR8SjfUV9dKesc2qKrLKmYv7yw6j3ZEhcjTKCNZC",
  "key9": "3rFnXHnuAyGeYWP2aGETfoWQD5w57pw3EGccZ9aDBjKkk19BW3F4UBUw8Nd8K21CfVnsLWjguC213tte5pNSxG6A",
  "key10": "3Gi93vTtrNDhU155PShScM2ErVAriDMeytsBWC9PF72EEGQH7fwU7X7oNmPNx11gkoJwWPD5movWxCUAXPtdTVQH",
  "key11": "3ofYiqAQBdReZN4jHskf5rns6aRh1YKNP7Sr4MXmWV5iPW4hX9gzgYAmQDn1233raJ6qf3qZ64z1EEofUt2bxZP7",
  "key12": "3kbFB1MnAwJssg8mkFFABcdfeRZedycS1HjXPSYqZNmxzX5VArSVJqP42GSM5mPgU1oY18Zqnuavz3Xb2Bm1bK7k",
  "key13": "iRtqgJx1EGHYGStZxo9FJrjewARLKSd5cveedVDD3NvnFoS2zGTxg1zNb4F3umX5fxuYU4ScT4k7rezzzcDLu59",
  "key14": "3DGgsAg2FRW97AQf238PEq1X39nKNSZPNqGRV52Lt1G1w3ccCAuCmpcgQGupH7W8C74RStuZnGUiEhLVPbhjZiGv",
  "key15": "5B38quNDGDst1czEsg3nnGMy2pZv87JxmS9mKe4mchtCBpjpFSumW6ENZmx9U689eWuftenBjkpsbaoVq7mWHKBG",
  "key16": "XETsRRm8wxW9Jf5nbw2yhEMJfAMZggwMPFf51MPCbiphPoCFMZeoDSrLf4GSQiMSZdJGRjbrH21NwdNhQQFU6Lh",
  "key17": "5yvdiJG9RVKLPsXwvLoJiZ8DPiuexMSu81mP1AseHUZDq5dAzLhFrTdmTcAnimyGY3eTtUaqtiQdAyeMSS3W8stG",
  "key18": "4Q1eXJJcA5uRixUV98yohUpk8PG6g4ZQpcqPAsT1NEPZ9ePGTsuEmkdLzTwcPuzsaUsT9i1dD2tLuTssTkJ66J9H",
  "key19": "3Jgnt4rHDPuqwPU82NTycEWaZrDvbH1cpcPLZY4UKhjMpyZgYdSwxFiMJ6tT4ZJpUJmLCZ8dTqvDjdwRQDdE1ZPR",
  "key20": "2KCWREYYV5yArkDvz8Tpb3VvedWhwoJzXhLtai6BDryTg25azhgmghEdGbtLsUcuLTXSvqTvJL5aTXjZtZJ84Gq7",
  "key21": "3bFZ4FYpsKPBtELqGDJfN2creXsGAdvojMTfuL9hUfFastZSeJqwAXqbUMgqHAd1AfeKSmQmYpX1J6DVWRiy5zHN",
  "key22": "2PaoVFb8A67Kq2eVTC1FXJuQ4zU3zaoAuA5vy23tY4jD5LzR99znvuQcH14RcJQYNXwAmxJZT4Z4EKPHc83tdDPe",
  "key23": "1JJPgXBvwncFc5Yx9mRyAQHgxvp3YU5Kp7syxjNBte1ZAA6CkBNNk8f6ei6898ML3KeqAgczAHEKdT9oMPRekFP",
  "key24": "BXX7rY2piaqe8QYivW5Qm31krbcCUH7Cb9bnc7tY1TmLy2CC6rTPMhbBhgvx8s97PEEMtpUt5dCBrJyWjXBFKB6",
  "key25": "jqHyzphgyNvvgLBJ8QKThFiacvuCiSRcCpPz25eTcCd4rtaL6E6q1MJEqNwp9ds9vX1ZKqF9XasT11QLAVJScPA",
  "key26": "2rXvbmHLLyirAS8kc9udHd2Kv2ABnDd2SR6Fg84VeTNR4XtcVZcA3cFmPBD7Xa6NCE92eJiskSU3Mpvr7vj7wk6D",
  "key27": "5pD24Fyy3GAZvU89qTEddT37Q9NKSG6XQwLEA3FQS5ry8HHGrgZsjCtu6mqbqYg4PpFtv6D16BKUJ4fCuBsKmfgL"
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
