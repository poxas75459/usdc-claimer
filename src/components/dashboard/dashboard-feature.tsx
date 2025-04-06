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
    "4xNhtVWv6PKAQydCcgrYXVkzVDhFu5P7ompJRVseANjcCdCuaL8urkWxnB9fsM9o1WfkgyzBDwqSLJvhfub4RAkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HFeeuigsYxGYbRRPqn34fVWDDhVwakLmrFPy6q966mAPiFEhAPyuv9xzvdKS9NAp2T9co7myypKFJ5hXAsmVa61",
  "key1": "2m6qSrJxsMrV5A4GodMBPBULGa9AW2jCBc6AyURDH5XxmpNjXxm8ePCTBA3AJYbmqWPk15eQHitHWvhLU3WpbH6d",
  "key2": "2JG53BY1wWZ93PuqasyowxcXxoSrBYt1d876p2NsjKMv9RRrBMKNHj2F9u2o968Z2jdfszFdEy2euJtCUaF4suqr",
  "key3": "32Pan712wa1dnA97FrYaZmC79AoN7nSgcpHCbPm5pRAe2UxyeueJftehVYnZShHfzNSUrnfpqVBTJEvGU73HmYYB",
  "key4": "3fxEyNW7ZDsM4gaLHDNg5B1XrVs9LL9VyA1Hv2iQs4tfQWPSMCj6K6jeHbvrSrgw2SGENWtbSPemMMoYcAc2HenQ",
  "key5": "x7zDhFdE8Q7X7jeDvRuvmopvux9MRHpmnrYvMNULfB4FDfmnkqv9WUvAoE7yMZvSic41ccawtPH2LDizxGJM71M",
  "key6": "3eG8WQCjk3EawgjWSeX6HgeKXackwVb416g4pYpim6Nu2yf6NaP6gYyDYRQ7c1bLx5nSafxVSAoBNKx7u1qjU2Q7",
  "key7": "2cKvxtft1xvYUYfvLmMTca5Dr8vcoScUrSwX2fUxTGfC41gYNw5mXXpGB3Rw3xDg2yS64pj2HMSXiz6jNf8ifFUk",
  "key8": "5sVXYwje9iyoH7bUvJEs62D2eVa4Yo5tXfbAM3jfrEYKAhzvWaXSxVfDJDj1rPozLPzHs4nFbQqf3ruUcNgn5pFw",
  "key9": "b4htF2XHGo43EuLpKHS8Hnv2wY9YwALpE5NT31NhVjXheaaLfpSBAqb2m6CVG2F2RsVynD5MskRL751z95y1qi6",
  "key10": "4KGEB8BPTTwpXDF27GtZbfk4gXYppbh5JRsqQLFmDrvK1NL8BvgzsYeDSSfJcU7gQHReJfTCEvyLTFAh4TJ5kKUm",
  "key11": "4mpiEBgisEHZyRsYGeh93CRPMn4FoxJkp83gLb6RUcLcRc5avdUXQfYEuNpHbqBoGH8ucuFRJvprt1RpjvRcjDyZ",
  "key12": "nQedwb35EcgHpqdheumrjgYMfF5pbrtJCrzis1NUSBTPKst2DHNA926mwQtVReReYyESA3MT53dcAViBfQTiPAy",
  "key13": "2JzDQjjVtoHwmSzyZCoM4sYFJ2x8pje7oTXyPAsoBbK68Loo6V2z56s8YpZGJtXzPNyuzL3DigbZbtyqEU4HzLwF",
  "key14": "4BKn4tEddKRbKZzf97ynwBiJio5dBP7zAZgAaW6T4qUmXQG9BaR3xXcLa9u21QbNkdYmgbcxgL3wDH1kqRmTGW9P",
  "key15": "4Qb8kXofYQqkqrjPWUdycF9MPVpymYsjv2ziPc2m4DkFeD9HQ43zC7g4Q9sMH6cHcBivbSvBLaMvUQMS8RHUFNHY",
  "key16": "3C67mPjVhXqHxXZbY1UpXZEPjqZUa3LzJqj4byaAuJbRrSrkbD4WZJPxSRnC51GVucBinsfY3h8S4a4DfM5axhG4",
  "key17": "2uUbRvn4s7Tg2T4T87b5pYiBMVSwiwc3LUBzrvWtinwAVkGu7NhbAhcy6MSgHmF8Wttv4Vfxb8Dv3fxQZdUjBVyU",
  "key18": "2ko9SAKnsBEEcDGYyKRxacAkev7Pj5ndLceuefax2MsHNBEjQAGwru7G4sH76PGQVYGCV74RsLJ4FZPrcWLmkrYc",
  "key19": "5jcdyAMoMsKbTi6xv8PnjccanAWRas7zMWS4zHwhezt9TvzxEndHK7f3Ucud3TL87UDZEPScgbaRu5GzG3GcxzUS",
  "key20": "45pNEXZb5rJVATFYbkeMsPfwgxTWXoYneBnRVQKf7PJyE9c1CKS1saTj1VUZg6D7DAxdLbgjYzCfwdpE1j8iVD6M",
  "key21": "3NMj3hsZBNszP4FqwQkHTZoyVBwKHhcrdqcc1R3ixffw2yn1v8veywzHq5GNZRvm7JFMKH1uBRkaWCod5tCFVANc",
  "key22": "5b5r49h6gSuzM97PK2UDdaSofNNm8RRgY9gFjGsinf6hjQMjAU94fsTzKxPoYGuk2NNrDY11uQ64D3McjVUrTHVy",
  "key23": "4dsth99C9Qz3pefRJ4JjDiGNTZyAUgGsajkGx2RcrT2uXCWa6AAjM4wBte6xckAxd51QUSEogURZ7dEcPdC7NeDu",
  "key24": "2WZvJ5J3o8CQHQXqGjQnTTKWNmvzyQJRbEZvXBLbThbTCKJiPDeEce92Gjw4bsDhJzvGq15d9Dsx3wm4umCHJDJh",
  "key25": "4Xnd2Yn6CeRgNjtDFyzf9UZHteiZKsnCyMf5cvpL6HBqZLXCBEVhyfwEBM2Z742o5Msdr3cSdzgHJawjCKUtQ9zu",
  "key26": "3vGX5YDrpapqYJVWXTGUQ1fWPU5rSdbXdryNauQNftXTBUkdYhLZyPkpPaiGYa8cnjEUVMkFtQHWH1vdhwYpasbT",
  "key27": "MB6yuibzfDctxYj2bMbTsXezTMQy4JP4JF347hCrLPvzYLe4i1NuboYwsDgxYC8qYmXT3ZVGqFucaxqp9FNBofd",
  "key28": "3r26UYe28oS7NnEeizDRDycCCTz8nyfxcy3kNaChMvmNHZjZ4RRKonsJyrktbReKmvqZuXGu4LyGNZDfEDroweZb",
  "key29": "5P6s7wRFkvMKS4fiqk9S83LthuEk2jycGDb1N4X6juRnsW4ZmLv3fm89Fq6kVPXmttcMaq9c3NUyF96i7s75HHMW",
  "key30": "3r2rtDgaJak2RbSCTgXDs44siJ8PNi7MovqRi8pZkiCrXPzmMJqZNUx8jT4rRatMN4XzvrkDX8LviwVKU68poQN2",
  "key31": "2b9HKa5NXfzGgzPaVysvEqRgBN8hpQT72BqZhBWkRRujr2MNGsqYHSL6YgVevndrhQSHYuMLbtkMpvv21eE1hv9R",
  "key32": "uPszwJR8n5y3RDfSeKer4ziuyF62N1iVwS5khqEPNXJ28tH87HVaKg9WWsv7PakVN8MMYaE4mXurWuumBGvSgMK",
  "key33": "4nis7YDkdKLwaWQ47Ku18t31Grw5TXgHPUhESe9XQDrzoK94UctsnQhnWZFfCwGCiu9PX3NLFSWMiepQAV5B9ciJ",
  "key34": "5u5XZcLvZDhkXsD3TSQZTX6r8YPZ9VMhxCukxCx3i8327Vv7Gh7rqTizntfFjtkMgkyLnDSN7vSj188RQGSHWwhb",
  "key35": "98ahWCNWnA3eeqKoQ8jbKPSnorG2G5YFuV8DcgpauAt8iSYp4HiSkYwp36cwcEGTaSpeKLAMWJyB5sK4iGhEBJ3",
  "key36": "22arR16pYvJyrRCNitEk276MyAaNz3nXBXYdHomZTf4iepcHvr2TERJrichmccm1tbBBcRWc3gwW5HMNqyxLH6tT",
  "key37": "65oxnJaavSfpZHT2AzhQdy1HZfFBevHS66BteeJ33rzmWbQUmxdyAoyq1M7BtnxNgp4SqobGJMNqaEiWUhPmcNVZ",
  "key38": "3ezxSe2Pm7CFXWnomCV7hv3t4BRX6uMpQczD55uLhx9D8BZGq8Lx21wyuuiERGC7rqHHoXiiVyLUgrhC6hLuhere",
  "key39": "4bbYj6LREUQFsTfWRt1Ppiw5zPAgBSmgH5jXsLYSnZazAcQnFFZRvj4q6PpPEPXLoyrGSc1KXhAAyKntrNGs9p5t"
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
