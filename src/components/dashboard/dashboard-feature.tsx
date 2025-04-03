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
    "2ULZzWSu2P7dkWGxcDoShYgS1N89ERW333qruCNaPtgRj7tvFHDRdwvCfMpPvVyQGTQGvpx7WyTWzxxv2W3n3aP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HRsPGLnBQH7FTbQsQNrD6WaEaACV7ivdLYSXiJuibAzuS5mx7XCL2hZQ73g3rAqzYPfGmtDMPfPcr4EiTwUCu5r",
  "key1": "23hdHBxdDCe3Et9BTMuRQqtyckRHR3F3WT1UDXCcBPP7YyrvEutUyNBbUsHys5axdN1zJh37aenUn2Cfr7Aybnqi",
  "key2": "3cN6v8T8CjVQRarzFNE8d6p1zFZftuNgg6PHEfrYQxyPmaH4KNaUa7jG1sCEpM9Pz8zJnw1PBeCmB75yZjVENHbG",
  "key3": "QCiaHKjL2UUK8BLpsbYZ4VRSBXbhnirJ2jLpUZNwprK3kPFgjdiXThudfDw9GL4tqot9Lc8tzDLmCfPTQYsQivy",
  "key4": "5jNjrXuk2bJaxR5PBPJVM8Vwkz2tygEvVYnfbkwY8nj7PpbxzWHnkZpTmff35TxH2RecgYKh2k5PR8XsHtr5k2g",
  "key5": "3iM1eas9p7jZuBiBNTHP8KgBdBmgnCyA3TPXXNekDQVc4VtU6wn9UX8NvLZYDM1f2iUL5wfd4NS5V9qi6DHnNDs5",
  "key6": "2euuZaQunYFiYGihuDYDZPgt5uqnsX6dKdxh5fYCTiDpr7fdXEvnaaKW4yuw6YaDS76iH8RCLchBhw5YGGfFZA2h",
  "key7": "3YxWywB9UZpDw5PgtAYnCVPF3kTxPzq3LuEoapPaT4VQgLBbnrczqLu54cjwubfJCKFWAGqV3Pme62wHuXqcMbQT",
  "key8": "29dDkCq71Gn1cfX5RB9AAwviY62JH7qeqMmwRu5PNt8YJb1vYLXd273Ce3pYSDRrRWzb5R7sBcbGdhN6BbnttGb7",
  "key9": "4cspxGbExjoxhdfTu8x4tf8DVK6CaLwAQuH7qrsdRLZ1bv8uP6MW4Jo7Yjh2nSKVyzZgcXmRy87jfkJ4wBG1wZr5",
  "key10": "5NNnFjFgbt7xzpgizJ5m7o4TnK3LsBxBPtuf8BnaasDaWjDiTtQgyR1YSPVpRzSt5bLs4vqfv8EAtKA5bBxPaTsE",
  "key11": "418mVis2yiC1ooVWqrH9u4m4BM6zMEZSnRVaCo38y1mgPtut8P8TCkK5hZD7dnBquwhWuUWyaQvMpA4rJMeMhKxV",
  "key12": "4nnAYnZnJtiWJE2SQXgpRKS7yQfNeNnHmZhyF6wjiejF6XoBTMHFNLS3aW3gkchhaLG5yeTVMUiYU96GkAMZ2Ned",
  "key13": "4KmvarZ5piDK9WExRcW7tW7tx9bHczgBvrFhtbKRFUYAVHU5Lf94xpT3Y86jdfTmBpSVaq25s6fkP3FKNQazwSGp",
  "key14": "2QLCAdwBgHYaEfWk7hZmBkvPA7mGnKKcjNx4VtVWXiABHmhNpjnsfwhm4epe6wnwktjEpqm5Gvzd5zfqRnKdJVcj",
  "key15": "2psguh5fa2BCsBXQvNcSWNNrjbMS97HoLgVWSZt2ouYk3MDWpL57h1JBiazkEguFVbovMZVwBrjRyrWHWJcsZPdL",
  "key16": "3waGiko9dM3HpwGe9y4mhSk9PFUm5utwMkp4R6zXMrcLetdRSfpVSKt2d7h7VXeWtKVv6BB1A4KH5Hgh18DNtd82",
  "key17": "46dgRXcGPXZ5sS9q4G8EsQXBRUsVJBG7LNpbnSTtrR6LYUi3npaYs5Hx9h5PF834fVP9z7NugNsNG1eetMY6urYg",
  "key18": "4HrVS1Tez5LvxvoWWTNCdDnU3FqwMf8uwoUZApsKNGW2JtPq8bu3NMcGktZinfib1ou8bYga3hiutM1nsY6tsCQG",
  "key19": "ahT3DvZv5i3uM8tbmnWj8uG6WkNbfYxYqKYso8uXTdsbQUWE3FxH7cpbDZPFkx8tDDv9WMokhSR4ZB7m4G27GEK",
  "key20": "yYDu8tuU4SaAdPU5PCxpaWH2ZKD64bSmewWbV19DExh68Up7ijgQNP6a7gffXYrUCFTZ2BBEGuKBWLAVtSxDAWE",
  "key21": "4QE5NB64CsNEQrymQrgJWQDLLTRUFuCfxCY2y4PKFkUZLp5Yy9TodXsBWv2v4vjgL6UCWrvJMQR7c4r3ZfRVDFM8",
  "key22": "3gfvrZU9dxt3ndvXphXBZy81TFYZFtgGfjJFV8ajetzcmQA52D1D7vyVkpgNuWZpWy2qiQF6M6Ze8m15rzsxGdt3",
  "key23": "uYpKb1TYPi3hWwYwcPAp2pbNaGZxGJRiHCt2x4nBhChsJUePtJm8pLqxCw6aqeN4bm6pfM4x44BiXCqCQceuX9R",
  "key24": "9ScPzaDC6Kcv6jdBWjmQBzofcbGbDzVgFhzNUGxWyUVa3Jpa5Wz39eCp7ZPz28x4trzxxr8MfJyWDxNygahthnu",
  "key25": "28JSDFQxzhBkhBfcTfFBbS41kRgBtqrNJHkGWc235NDghyuDRKDv4jqsqbJN1itf821SFtkUCf2hxZ2wk8fWheZM",
  "key26": "57xHE1URJxCcaYEJJhA2eG2YJTVkzhXMvwpAxBtVUs1XZPresVtfRwCinLpfsv3Vfqi4rMsn2CiUUWPRB7qnqrEm",
  "key27": "55FKvVr1ccR11cBRpwiXNKu1Rit73qHfFauAMTNELqZzJCu7iWX3F8FKBhLs1XPc99zbKUSgDGDhhCWDgN6G45R9",
  "key28": "5J2cnsW6fu9ohgddiWKugP2wDd1Z81memQUfjyNtZoCkkVHQp3NeYggQR568SX78jYQViFyAJuKp5RfoxvSVKpXm"
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
