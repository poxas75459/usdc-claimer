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
    "3CEZ7shoobhN45EccCujGku1KZK4EorMr2S2sA4HfyndctEsu8SV7MVveYCBso1EMLuDKiM4Dzpvd1hnz8nPNpMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vev5Wk3idgR3srMEq5KXk4sF1VHGA8pWr6Ts8DZBztqzL1c54y1BRWVbrdnJS9fKPDhAzgmkH7PEHKwq11REPZy",
  "key1": "5oXA6orMqjq9DYb1FRTf8qCaPLNixeo97fhooMCUbfd4XQgrb3BnRaXTXXis8kmrodSAPcpQMUFRk4qX3HU5pRHa",
  "key2": "2Wdr74qoESc2zo6puyKpZQKDakT14nBxkg2jcJgwEhNa7jrjHUWS8qGeHgAAo4Ewn69Wp8XHBNpHvyBh3TkUHX5B",
  "key3": "5bCFmbhyUefD6xBsWdxYGRwmJ6RzYmfKmVm3NaW1Vva1r9su6jGBF9nRAsZQNpe7psYfJKVTGSRA7318WPG3GdCw",
  "key4": "4BpuVMYzBhiugCkXnFJ4KF1tkNPLQm6DfQFbhPFNSU6bpp8TPkAnFQZXFojFA8xkX71JRRF9zfe7EggJ8CSkqw39",
  "key5": "4SW4B3W3Ai4KyzhXTctTm4fVE9dHkiGHNsr5MJJPLWTNUCULK13KUtxvMFiHovpUyRoLTYMgPBGnZExGLr3xmFdt",
  "key6": "5X72hMaB4bjsmudqB4J2v1GSbvtWAnFQ5fyWxCs33s4zKQ7fKxQ6gFuH35RtZU2TeyYShzDgYYikdcML3WYazyue",
  "key7": "5emAoWy3ajeSzn9d6hLsD1Ku15BNhAgC4M3P3eC7kWtkGptLn5fVcxY5jF9kc3wzy2Z6hRYErZfhafxQGQ5gUjTb",
  "key8": "2VqpFKg5hdrojzzProLKxbASrodiYdgjQmGJNjXa9tgGeomA6duK7MvALZMVWWtCJ8LYR1FE2V8KJDaQMfg9kvFP",
  "key9": "5ctdSJx77xfNHFhEnZnJnaDXDZhQUM81N4phajkzd4sNao9qjZ6w83Qfti437oh3zJfgEYTy2jFUB8neLTcZmJqx",
  "key10": "4EDuYBLDuaJDQar2rpAch37GNpR3fuVkLgLNLZBGrkJu2pniVEYEtGVC5WsXEXwyDxqCEgKaFkK9u4a4Vorb1SqM",
  "key11": "2gwucdU9WQtgzndLFw1LSqQgk9TQvr11JmUNFEp4seArji98MErSD3f26eAwk6JSpkRKF3MgNu5NhwhrYSh2nF9",
  "key12": "2ruuvSGTjkAgmv91qxDKfJp2ZzbN7ku5uGmqb88UUGGU21GnfDEHKC4rCCi4Tq3MEurf4RpDdZegbz5km66eavRM",
  "key13": "df3hCALBLLPwJvxw4PcBSo3d5DZwvfqpTmWtencGhG7GJ1NUrRg188pHiyXn5wuyyYrRjRb57s7MpLCY61oVNxC",
  "key14": "2FfhNGiPDBswS6PkQRqgfMZPrhhnCRx5c6iCAqo3VabZg5KMUJMqBJHfYTYpnPMX1Sr3bGZzUbBPPw79LAs3nFZH",
  "key15": "aGe5thzrhbz95TZ9Tju5Lw2AqXuUkyLJWEmUHPX5o6rU9X8xoAxn4ygp5ryrHzj7EwEuqKoestRpHJoHck7aE8x",
  "key16": "LzyLLp9mcaagb4nBwBGyXQUTWvrFGVqw4fNzXP5Hmn7bdYwmEqeqCur7nVXfdqnR1TNpCYQBzJqyBryofd54e4u",
  "key17": "4y4u4TsRvd5NtU3vsm8jJJp2Cz6WWmbvnx79nsHGmzL3LdSJKKrha5axb5ai7pDx27XF2yYuJ96KUZuEEXgjuHu9",
  "key18": "2i6QXeBcCcW1UmPzkqVLr6CM5qQbNuRLXEK3gxcxj5GRgT7q7k4gkLmi5zpae2RJkxZnQnWwvsWMaP7ojXykxdJi",
  "key19": "5kJeZCyh3a3iUXbhg3yfxf767nyWgbZsAj9h9UvomcuwQnugT3aoxVavg3JHrKaDuxha11ZKesvDELbxENErAAoc",
  "key20": "2WtV1e5tVWz5LwZ2sftUPk6im5rSi4Agp7M4KdRVe4mPajdPnaebF4KcdEGhFnj75KFhsZfTUPCaGve2BknkkbR4",
  "key21": "3422NDif7tjbZYBP26zPnDFSXPmtzBCY6igtM9HGWD7jfyLaCH53C615o9DM46z6YnKQy5SPspUHS75qyHibBtVL",
  "key22": "25noSiDv4z4cuoezhdv6A1MurWVfHnQsbT4fh9MiXot3U4CsKJSnyQZbyYwaju62ZCdhFQp8kfTiueUXipfW5cb4",
  "key23": "2UDvueQEuqebUYC53Uv7RDxBovGWqaCcts1HEyx5uxxTiWERFTEC31xNsbZM7PTjqG72A6KDfuDDB84v6Gfxvamy",
  "key24": "35qXF37wrzGfa2cRtHBbeByCcJ7EoUwfmi23nHTr1dfBfequR5yMJUQqSQZz7XftssR1YvCGDQtE8ieGYkkBeBic",
  "key25": "4kJk8b4L38e4jjrWKQ4GQ1EvgENzp1HnPiK98L8WCzYkXN3u3pzAqXagkFvqcvAqKHLq4uEKgRu5Qmev3a6XY8dc",
  "key26": "zRXtFdsRdVbqfvDztZFbCHstKjWoK2B3VJm7DNKcV6cX8mdwAvnHMyeyR5VThvL63uEr8Bico46uebC1HB1uixn",
  "key27": "MTra5uqXoRyVeaE7T2KkKQC2Gmo5XhVTvQ4KvnwDw46SWcuidsdjs6wFRHb2TeznB7mEL6QJuhL35rVvqaUjhCH",
  "key28": "ZmWYVzmajHKVkKtQ7RDYmD7FYDiyQGd8YkmMVi14MUUUSnktQtu3X1YHUKyWNEpZArQ7KNwcGKwHgHX9RYDXaY3",
  "key29": "2dbS1aoDMMECJP4HUuGBmjp9SKL2NJAG2by8xZQp3fHuq57ptW24j4TmNUexyysSyJgZBGBoAc6DS94jZyCU4sAT",
  "key30": "2WHV4yj9yan1LY1gq7oVqCuMjvWFy5HFVseg4ppLsuC4CokAZaPNzmN2BSvmxbxnVmyjSuAySRx1KwNcthGSFWkb",
  "key31": "C2iyzEUxGBzQdezKicX31LZSQpv8K36bX1uLNz5FPR73PY6bqmdKtctbYdiEhDd1NzdYW56wAarJmGkMyh5cpbs",
  "key32": "uDrds5AKQdVAKVEaEw9QaQsm9rrSTqAD6h3ZwKuR3KxqkELSydUoeUmH3DYpKZ2jxPdnLGVBCRgpxiPidPZ6s7d",
  "key33": "3uPRJEuAszJCSpsuaJuvtLmziZzEY2YBGzSzcNEuLu9if3DiJwKa66JD5RaZ99yhMBvTmGh1hSBUQZGM6gfkcaiP",
  "key34": "3t836HJ5yqaMh9JUDQuSqGfnjso5aqPMaERzzheG9k38xVtN1Z548CnVZ21ntZD1ZXWwuGBmntZTPYqz3KbKwo54",
  "key35": "eSkLxJTqVJvTc2b88a5DJ2Tbj2YcjN5ppD9E17WDJkeW6WSz6zs8wEQo2tSf3cPJWmfsThkdtRuR1d1Xi2vJX3h",
  "key36": "4P17fa45B8BCqegDSz6yqmBC4ppJt8BF7XY8zNxfBWc3fwjin97sGvxfLe3QSjwiPcRGTnUornFm35Q3HowsSxwt",
  "key37": "5rtwaG8EqmBQB34rpqxcrLk4xiyHjaLc3kZ1MdrMb4MEjYQHk93NhptCknzbC7wjjf7rQ5b1tibYZMRZCGZ6YAf",
  "key38": "3rXKPTthkPNDEE2AjimiH5y4UboapFZqahg3qmBQVr4TcbiWHKxX3CAJgLis76QjNimVwzzdEMAwwnAKAoDQzpC5",
  "key39": "2UZd3cAbTj1QiY8Jj9KaaeqyiXAuzs4CAj6PYtgcMx76FYzYSsTfyS7SrQc5tbghRtCpAxGcALhwxosyhcjQiPdn",
  "key40": "3X59EWtt96XjCT6sZJ8qHbvzaCeBYcEkKWbUKjQsoYk4jrwvFFcw8FSEA77NsWUthoGKWVniVVFQWKSKunH2pCh",
  "key41": "3wXAMPmknfnDjikyvVqSRETbFynzx89FJ5eAS6qVyUH2iLyc3X5fWuw2TY5bupPVtT6HPEHHszZ8CAVj5oU1eNo2",
  "key42": "3pyRtpqX8o6qdiMgQj4ByFjqrBEMBrLLzjNom3ozC2hRe94gPPW9Tnou9xcJ2ro4U7tMd9kS1YJLNd6B8Gaxf51s",
  "key43": "3FubcCYNfJU9TuzHQDY6T5SoTf3JbLmUPuvbPbuC2HxPtcsEv44XPztcz2ru3kg8JAxFAJ6XDuMhrP364we3PUbv",
  "key44": "2zY6VUZ1ytjs5uKXZHgieG79F1nZTLABpQaB6LvySkSXL2UZzzmLeV9VsVHEHVBkxocaSCaDdFBjrMoyi525s6xo",
  "key45": "2ZgfQSFA62ayE9U9nioBxYQZSLjUUxs8KVgQ9JijSSX4qSxpzMt1fnQYEzJAbHAPR6SYZFVfwUkS3AH1gD1fMZSV",
  "key46": "37AyiuPYrPCJe7CmsVXv7ASPW9hahK1E1wXAqtCrt7ydU8T9m4uLKGeUMr5frh71Ur2NQygyaR67jBogR4NPVteX"
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
