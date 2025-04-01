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
    "cvBhwmEZqmvCyvQ8xWqYZExk3RDRDJbGeisbGMVwtP8rT1QWYfzRY5rMbrcUezTUNcYRVXNMNyTHR3xgAh7WevP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HKb6jYvSLEWsBpLTFPB5LBi2DCk2QBQzkQKDHkjdGdkci94Qsu6gCbNhaPmEhcZFKqTQdhGMqip5CboBdT9PCX",
  "key1": "2emoEfBJU8ay3VZ2NQLQTS2nzsUneCXViUqFvA2BAgiStY2BzVZvxXytbwU6dRY5r6BGNFue9XyBhCHV9hUAtqzC",
  "key2": "7qX3cJqDv3kvswb6zVktBX6tTFwyv4attVtuUwKNmRaPEGiBrxP82FpC6ZCY6q2GAZKEiRjjBuRT7ocg26Z5ihk",
  "key3": "21BFMadFN8Q7aePqaUqbscN5oCrstb9zw14FSAHc7K1At5PK79E8f7z85CFddQVveQqj5JhzZH9cWDWEB1N9Z6fa",
  "key4": "5JB2EYNnz4u1FUoBZK3CxvavY6LBq7V5ZNKCCfr5iBTjKVHtiiAmHVdHKKLvmZZRxknTFTEExGhCNeSEZvfZp7D8",
  "key5": "2cWDmvbZhMnWiueq39zwSQ3pBHMGyNGP8LWevyovS4FZ1M3dkeSM5odD51z1a7d31iKzdYoGxCRVYL2z7EKN4xd7",
  "key6": "46dg2VSAuutAMiNoAPrMm1m2wjKFEjdGATZNbAH7QFMhR5N66hxd7eoU1T3pKGebmozyjUB2EDxvUso36ZJmgc3H",
  "key7": "ctqKECe2srDgbhme3xrahL9aWCuScRezFWmMn7F2BHxPRaxLyQ8pxMJT6GdNgLjMvyNRxYqmcgAjxrhpcXapPMR",
  "key8": "9qSbKgfkW65CZdTeaPFVkoQntkkT662AsxTSgCeRnKoSZGvg8RVbogYtdnxaHTA4L1omUZi6KGXAvFVoSXsYWs4",
  "key9": "5FHrmZ72ajBbeoqsif5Eif3kcenJg2kcHtHgyBmi1KAnFV2GivR8Mrv9PrSJXJXA6byrx8t3n1Cc24TNfQv1Gd4C",
  "key10": "2aBNobjUf7mEB3K9iS1tT2RJhWzyVThU5vH2X9jigCk5P5Rv5uvxnd4qRiraECmFMkKHM1ieHURKe3hpx81sTjyS",
  "key11": "65ZeUU39j89cTGEQLY2zheuusM2GoD8mi9scKxM8q6iH38gQNehovL6mKKjNpGsBjnDgNW1aLZh7nN7JMb2sLtY9",
  "key12": "26JytfB3FEd1EjMimyfdr6BFDpQTZKrXzmJG1TrYuzeAduMwJtYU4xoQCEQBhX53YutZpQrcSwvUPysRB4C213HX",
  "key13": "4qwckkd5pjbVqyMX87az5VwyCYXsnGDCBt4PP3uvRfhAWZ5HJVpwkmxDGf68Su1s9u8AsWVSqGjise7XeeHgwFsY",
  "key14": "46GdUA4J27uWfkrJ7RHfXHqcqTBLYahmwzud5uPmSLikhAMLreQP7rRK9UuS3emLzXTRYBGNJHXv1iv4hgTYfQDH",
  "key15": "3vZsu1X5Q93JqkYT8NdPYWcjPFmjJnZ97crYDsQmtqeopekzJkLVbt6YaB5zPGujCmk1ABqAHqZsT58pXkZ4Qjxq",
  "key16": "55tfmKv1XQwujMAc6fLkdAriVNbf3Z6opdZaqHGGKRJzJbR7JeWA7eXGBNY1Av5iCjrV8PH5ccmWJXJgrug2i845",
  "key17": "2PNZKgWe6woqPFbi9uEJXVh5uf6pJoq6DBEuC4ErZqsnWGsAQMxQiAfU5Xfm7GSkPRcwP7iyfMmnAgDkgwwWHFgr",
  "key18": "4JNLKqmfJ7vT3jh1JNcmCYGRSytWnsAv28T3GRxy9rSPu3sayt6A6bBUvMneYpi7dVZWHcekUKGqaRxzfjgaZyMJ",
  "key19": "TghcqK4sJdqKxofH7STvxQbt5tr9hmayYRq369TdP7zgjfBB2VJ11rCdYn2hxy1mUuu5KTx91y5b9kdM7qC1HfX",
  "key20": "4SQbffeQP89e23h3PGfxbiyZBvTEE28j5oTCx6xC9SYrzKeKTGUp5t2n4pgSVQfkJKXkvCxkes4jFEGzTjvuso9h",
  "key21": "32FhxAKb6norC4G53mnunSGhKydaxaNievTbfLjtLi7oh74xN93Lbztw8HzJ3nE46TUgQGTdNYb4Xqo8QWZbKiXs",
  "key22": "2tvr1k2xFpzBCxcpRkMH8boPCGr6kd7V5wW2Dpcgp1sF9LFGycCKgkv9RMAics5qt8nj6WD1HdVUAgX6gNFJabxb",
  "key23": "3n1jr1enPqDXuJRRm9Z3ptz6t8b62hyQRt5UFiBu1Q3U2Knp4MQscTg2R3Luu6UTkbtRPSGuy8EK5BALn1wUxFu5",
  "key24": "5WJhk9NF3Gnr3bnDiVXcUHhCb2ds7oNuZfT7QGuuaENnrNjwCTpoqLz2VsD6aW4fMGVF2phg5a7L1kLQfzyp4a61",
  "key25": "4Jw9NVXhAHvF7W2d6WVcEeosQ586ap4c1n9bccWTXZwuK9qmUwtkLgLmRrdWJMpK48pXjfaBRet8F9AQjs1kAint",
  "key26": "2Tw5Xhgwh6cTYhNNAubtKMQJ2sPZ2NESV8mokS2uvLErige6VvZgR2kSWyjyFchn5osV69ibQZFVqDcpjhfQqGxu",
  "key27": "4yYkK3VDqhoeCaseHFuf2G3z5ZMeNPxE3nC8FUV2cVVrutTq2cVqFuRTJpQ1WcY6uS1xPUBQDGeoA3xDe5AfUMo9",
  "key28": "3g5bM3fry2hZxXUnrtfu1qydUnbjoSftiuscWiRM6QubHUYxztavfcmP4ZeyqVEQEYUzF3zPqUpvq91gC7RohyqD"
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
