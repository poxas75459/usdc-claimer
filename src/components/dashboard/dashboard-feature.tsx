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
    "5dAVr7xKjEgYNyKWQcp8JaXEDADzSfCuiFVHjHit88GeMtobJwuvZ6TpzFTPFCjvGYQHK99uU1wzsaQesjmTmVaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AL8gi8ChgZmfNa4vWRtdTJbnUtzN5o4JfMcL3ZRUZrTj3QcbCPZaAnXwrrtWhkF1ATBHoLNS51iVzR683XX9drm",
  "key1": "61THj4LtHyEHiYZLM99u5dMS3EZb6MhegCoRf44f553W8rjUYnnr4sJ24hBrieo9bwZ3nW4DwwPx5HobZnXF9HGH",
  "key2": "5Rgys8wFeTDf4YwAGH21CrAtp4uysS6vvU7vHBX5x95FRgZrcMarJsx91BpdS33cRTcpidHgufxiuuNGbiQjGzTV",
  "key3": "5VWdEYpbzJQh5hc2jiPfZEHh5Y8hQ74kMKxtw1eA6cGyrwSPDQnHgq45muaDgQtSutRbKYUhzdsKFyyuQbtxa9KK",
  "key4": "5jtckq4DNZA62Hq2wMWjfogu2cL26AwXdtgtEAn2dAJ1ZQrcD1HYABpcAE6SubZ8XYzHahCGcdRZCGdfJM8g2XRP",
  "key5": "66CxpZxJ2aHmgMjAqp8DEDmwh1wmqjYgAMfebyCaHUn5H7VLBnA8P9Eb2n25ssYL3kLFFG49UikU51fpbGLjhvp4",
  "key6": "5RMbTNCuHVeEJDYozuxJ4NNhKCvRBnNDyA5eU7vL7zY83GL6i8s6fEqn9WTMrnTC7pUiEcvN4WffSwDaS2wafZsg",
  "key7": "4cME8KFudMCoV3GEtYtGvCdabALZhJevAZzb5BC1aS5VA7aXrcJoWjyCPv9AmWtKqqCJQGc4PSUtWvB97LrNFnig",
  "key8": "48bk1zB55KeJihg3SQc5jrP6LdgQyiuPW4tmsrhvtJZqe21KpvFEttvyiWzxPYc5XPUVG2YYKB2A8EhxTSc7ey3v",
  "key9": "RaLSPcDWzo2YjHfwaKs8HmiSZcLuciU3WMK9bXibCmftY7LoJHvTSHwN6rbNL9u1DfRnmp63z3P8E692v3DtyEy",
  "key10": "2qSeVJUctFENH5v3GPpmT7kgCpoqCwmFQgjPmZF2UCDSq6M1fRvMwBqVFVkPsCSMSaXMQGip94kuDNfBvWR1GA7G",
  "key11": "3EgkDngSjoregKk8hSf8a9vqHK64sUJ2442FSn2b6mkzTP3tyVQepS9aoYDzJ3vejqF84jMaNp1FRjCsvjCwC41o",
  "key12": "2LUkhAYG13CCsfmoVRoBvwWa9mF2wJJ4imBNoepVf8ejJcTo9qi6FyAHCSiPbLmSswfqpekPUnZSpd3bTABWpchf",
  "key13": "NiLuVRj6QVFkwgzCdf3eo4F5q2srVkFRRvgYezhq9fKTzKBFEYC1c2MyHVBYPK33BzaM3rcbr7VTTq89Uvk5AY6",
  "key14": "JQVwD6SKxUNt9jznKjVjGUw7VuoxXaBaQA7aHKmHoEEb8RL6hBRMVHL1588GEig5KLguwYdxmTSNEG33tSNSAPe",
  "key15": "5VYVdrGPLjYHP7oZTq5APktN3d44jX56GgsVDmUEW93w5j4SPC359DDxHPWcpCCYfz3LXXW2fha3UU1J85rPshkV",
  "key16": "2PUQKud9PBtsbbvjR2pKeSBZWJ2t6aUmQPHjjiZZhYF7rJf78fD3ENJk7tmnVnGRz6ryGfFXHt9yQ6zFRi9pDPJk",
  "key17": "aAtMUfFqjohSiqbAGNUavvQ45U5Rs2ZMig88BQxJVE1yZwpT7qwCZT6A7dqUsTgygAjEsUoLqfENS9FN96THHXH",
  "key18": "hnoASFW4vWktA3K1H4AJMMHzHfLRYq8A9affdhSumyoq9tusB6Ycj1TY6vurgeLM4pV4FAxcDtEKzeUC4aPiaTA",
  "key19": "5j1KM1apFkGygHL8K52N7rpKQkXxVRynG7JNPoxCoWDoGngwVgGiwUfoNp2W7fqxj7Ggcvyn8xCP2zKzVze9ZiPU",
  "key20": "3WFXeb9xYBzktEzj52Sgrqkehha2umd1UMrKV6B83HfVAoCGQMyHdAkw9tThHWq3LTseSrxtCiNBtavD9UhxGvhp",
  "key21": "uu75piA9M2qUNojPpPKbD7wxj9M2D6K3RJ22B5jUokJ88EzDcReYD9SbNxU78Ti4gCULh3tbv7jnXio8kAq5xHe",
  "key22": "5a76TbdsNqh9iWrfJkzMzvHvFodJ3GpGaMigNdyhRt4GGKZDABJGuoJNwtm7cdaGdKniLffZzWzJZ8jVMcy4Bmem",
  "key23": "2qEoqEHQE4QFY6UXEumggbckooFoEu6t12wcG4i4A1EKCX9ZQtFSV9vaZ8jN1aZFoeYyZQXY13XuCMiEL7wvJqUv",
  "key24": "3F5KTTSkm1Mp8zxK5WkjiMggX46yU1Z3rt276AviCacFPC2xVmyHt3aucx31b8Vu88EBrFR4pZrDUggYkqKpuoXn",
  "key25": "5QTZ4E5GDtVgT5hm14r98MV7mvFwByg7SumB6UMhaLiRFKXkwxXTJCw1w7VdaocbqREDv289re7Th9yv8eZH28bg",
  "key26": "3SsykJaK6SapB37BsYV99gFxJwECKUszF5Py9DaD3a58WXGgbgbHq4QUJkt6Wa4XWdzk8df9SpGhZu2vKctmz53P",
  "key27": "2QScVftkQDA548kJ9qFd87ME6RAGCiNh1NYbqx2mHWLxSECYFA2nNd3i9b9iVk1yn8Yep59DwgweQwPJgvY1QboC",
  "key28": "64WqAtUevK3hQCe4H4BgNFky3QAsadeXSm3PQn7hPEE4gbMzkjTHY4Avd33qpqGyVepAw7b9PLrbnqWGwdJLGVoe",
  "key29": "3NbZbBxTD5baoKXS4ETbXWnW7q4GMpqsJrffJWRuK7y26kFzZfEqKpFgMfuuAjfPFH7ULkLckuZjCpN42ddHeamD",
  "key30": "3uYyPgchAZwMBytPgqHxg96dH4iKubZULETw3JG3aWKtnUoMW3b3v5gxLeoNZmvJjdB7Zyy1wNkytyXXadatYsxC"
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
