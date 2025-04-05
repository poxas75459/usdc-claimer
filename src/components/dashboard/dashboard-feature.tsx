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
    "2AWDoUu7PiSbcHDz2UkxrWJV9jBUTAeUrDwECC2poqpdd2pu1CPWgzNUGimhfw5UucmJPCLXxkdt9gPq9bRFnukU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29nWzdHSRuodbMHknkXxj8zt2WURKmB5YvzuYJo3hh6PbG2gpur22MUBzn3VEdUZjcoHfwNVxtvjjz2FQvowBzAp",
  "key1": "3fqLRyJzEBXZH8dog8LCNSqVySbCi5veEf43isDSc5hAGwSeYAHNJoUJ4NS9TgCvUhQV5D4ibsruMc6fKjuda7bw",
  "key2": "4zLTMbYkfo6DDdLPKhsz7U9YFhT9ttFw5xSG3VRbe4y5s5sE21ErPdkE4mWDz5gdpbHPoih7ieb4duNBLWBCfWrG",
  "key3": "59MG83o9D2feUKCtwvj8rQp9ouddfLgzn8QvjM2DxB7DKFCjpcnMeRUFSFLZsrJ4eibWkD3xr2Kjk8Uh278WMd24",
  "key4": "3Fbt4nGzYGiNhAuSC9ddmr2uFY7QGYcQ2Gifmh9Ywz7TfDaMvJSjG1mA2ZcMPT3WJQ3HCP7sEg4D3KWDHb5f6ZWq",
  "key5": "5aaibdoEDqK6CHN1T5sNp5NBGZkaJ4r9MmKXHmQWjmcMGnk3mYFr4wERWZ9s3Z6EkKhmwELTxXYDexnMAPy8RuHG",
  "key6": "5SY5HHTGzvKW4ykdoQsoK8pXLcxQFnTYNcCKuRCQFTZLHmcsY8ciVqq7dPxK8hx3QsLxkwqJ8H9Kxjw7WgnHK21Q",
  "key7": "474jgDLwXvJUxbSjpZeKBLMkuxWQgZvHdyoUA1CFoJ3zeAULAKURFyhoanTjyXxFP48XWiy1C3bb6CN76Z618n1K",
  "key8": "4bduhTJpTG9AZHTq9cH8st19GP7VgMWqFgUa7w9gv7zpRKZXPa89TFHj9uLFQCPVBwNLRkd3jBNTFoagfdDT415w",
  "key9": "5evE38zxyhUKnkjoKpEoqgLg8kGnKEaZB8yF3MH72E12oocqNqhEBcpF2YV9Zhku5D2RdZstvveJ4vyReEgXE6S8",
  "key10": "2CsKBuDKSZqFYf5JDuYyPE5BmGek1KPn4vaMLbTypNFmDjRdSRbDy14TfZ2vmVGFnCu29xBcJSkwoDbMLTEZqczM",
  "key11": "4itbg97Hn7XCWP9d85XgN9rkXFCxVe9YqC4LD8M5oCqerwkZGqwd33gWQDGM5t7WS8jF6XT8j7bUhECHp13FeynW",
  "key12": "4cDh2rLZ6bULg6mZFbdWEovBbN8sLpZWYfPmsA3MXpc9fCHw5RzLfUaRMU3c5QVkRJKeiZxnYBmEJYkpZQdFMu3F",
  "key13": "2rZgn4me8HWfWQh8yZxBCi6sVo8688VSo8MRDvpwLgJKCcxuvbCqfRktsHjKh47zJGaTCj7kbKSc3kQXpXM3YFiK",
  "key14": "HC4dDN8E34R6Dc1EgUvJh2XKSfGQ3c2CpokEm3tAnc53MEe4xcoyo1USTmAbFfKqCgrZdJJFEWkzx4E7gNhZ1JV",
  "key15": "65uFbQJ7sW5XuaJerHUFbd5hx3YUoidyyAF7rgh2PZsdEwJ6dNQb4K3KUuZbK484pLpZW5xy3jjA5gKUeTD9pZuM",
  "key16": "4T6bKo7mnCVSYv9Xba7HMYRokT8jN8pU71KvMAzk3qHz3HZqhURttK2dy6sZBgLiosseAG8bkiorb4RTZ7v5fBJ8",
  "key17": "5bpvnRjFKTi6C9UtUAM9tERVzx5HKz7VD1xwesZRB3Le4vXaNqjz9QrfgeeHU9dLz4fTCyMEB8X2carTUZL7KWHb",
  "key18": "3dy6h4wMmkvGRArveps1esDEbnyrmLNpsQLYoBZwSsAzdfUo8NjvmVcmRPXLPuunNeqz9NHTrioWW56A6KMiZ6xd",
  "key19": "5uMo9taKwnsN3k77EEXb13guDpAh1DY1kaWPHho1p8Xq5DMVVHKidPa9GwykmJnCeksTjay191KLB9qfy8dyBTxq",
  "key20": "3CtAdfyb4bwEk4razm7y9yqHzS1tf4DBSNkNCdcLyEaAovpFdqRYQ5owg8YsSdfFXafGhg5GNnghueSdEVt59Gif",
  "key21": "3DVGVXzDR6XU46R2KwMggyebw3wb8Q2ccWAP9oyCHAa6E6UbqrjuVyFydp3szx5N5og4eBi7yygGdd9H7dYy6DwL",
  "key22": "2PJ2fd7sYiLtRGM3V645htktJJFLthwAqtVLcVR4p84PA6xUmQ8g9MqmMBeBgepnZLuwdSW1sUvsotj25636JPQt",
  "key23": "5skwHPuXS21XgDuZsTj4ZbRUKzEzyKkUh33E2r3DJ1Sk7NN9vVReiDCYgigd8s51yuTxbBKoCmgVp6UxNv69Rs6F",
  "key24": "3jV3TPgH8RqNfNCa7EZhmPHuhKr872icWTW2o2g42fMhzdVYGyUrY1GgPfxcY6snqF5DscQafL2jNfkACwynzTvX",
  "key25": "3Jg2BP4nVdk7xYGtfKMd9cMqFkA2VdQERC6ddeuiqMCw78aXkTS1JPTQNf2oo5ATB24ifW9eML4dWuhjM88ZvTsP",
  "key26": "2TdFda15PLtZSfC2ncijWcoZHpWs7P1XJJQR2C2qz9FqSunYGQgmozb28hQSMge2FUzw93ZtNjMu2v2NVJKhoPdy",
  "key27": "4dBw4KPoFyX8hzQSeE5kUk6EMwgayaBhEJtK6bsGsR8nCePg4WNfiM2oPu3vuJWZRisXbtTJ9HhXPW3S6Neq5MuW",
  "key28": "2RhCewen5GjFMcpgKVqjRwszAyCoXdXcMmxhHZVDLN9MqYjdJyWU1FEKQt9Mn2UFmU6Jktth1RwNbSQiqwWEYvve",
  "key29": "YKdTGnVhsp6oXG1tF6wNWei3ryw932QeBfzAL4EGdYAdLg1pvCxWjP1ULwPfvRoovGGcS3Ln6VHc1tDw15yWk4F",
  "key30": "2y63mCLyMLkTtSpxQVv7rMQ5Di6WpTNsaiaxbvZm6Fdj2gnRvUJNgphV7bRhpxkmHZZeJNYdpBnArexqhsSz5YdT",
  "key31": "5Pj3V2vXxrCErHK8971KjuTJd2uqVFeMm9rT4nkU542oo6fHKBLqfP7DvPcV8D4GwMsKguj9oag6otaV2Bud1KdH",
  "key32": "5vMV8VG6XzzNT87ZAWU9hFvxT3whiTtNAnAn4DXnMS8D15RWLL2WfB4bMZYAisNszUvh5ahdVHE1JYfqVMoFK9H5",
  "key33": "5fXKE1SeyRGKca6zWYSj4EJrf1F3N2mJLBpKSmKCXzqhBUwvzunssGVpmAx2jPMx7iiqYF1LBUbc4pLZXfN7aV2N",
  "key34": "4icMqsB5fygyQSJtC5deAVVP6A8ge9W9hXgJvEWH7WV123XicMsdSmxDZ2G7kEpFomWYfUaDF2AC8pGsTXDzmJcZ",
  "key35": "rZEEESpRE4VgDACK3TcmTkW2E9aCbrA4VwHV3q8hnQiGtuaDHAYyfbGve2tzqg2AxWtdnaxbHMaYK578LpngN2G",
  "key36": "4jSGCHvpYsD61dAyfFZ2a5r4ZwWpQJdPrf25vNr2HM8LJM5QgQ1M4U81nH6VCfXjd8yEWWWT9SnwEb5hbjdXd6aF"
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
