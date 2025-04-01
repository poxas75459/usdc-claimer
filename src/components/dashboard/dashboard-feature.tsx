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
    "2gjtUpNAU9ut8BBUi4ckjPEqjUcm7gqoPUoPAxANyFwe5fs1WKieFMM49yVM7vanVMwfWVy6hMq12QS6FiA2Dzgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msWAVteDFiEEJpCQHUE9qNQ3JmYAG1hcaJdjuC9onNbskMv22wMRaYq1DDgFaMSeJCB42xrKZygek1RDUAWFpk1",
  "key1": "3aHPMAiatuw5CEahY5Y91KsuW7ZtPanzATett79kFzcbmg3BDKrePZdmc4rbLDGPWTjj8BBzfA8SPQVesZyB8iiA",
  "key2": "4J5kUnZMrTLxjnrj8sbPgMTbBYUjwiP4dm4siAY7RX5Ym8mEgeBWc5Vz5xDdxfgLtHvubB7921eJTGTsQCuvpadQ",
  "key3": "wGnDvDjdXKFKuDTNhboeekCZFMG9M2cy7JN6QxMueyF9RXBwRTViKnqE6FtYc5CjXBuzqME1nAbzfojjHXKguxG",
  "key4": "3C1mj8nS6VJuAXy9E2aDEU4u12UNHYUiWaKP6NLU9FyAmDa6VsmYVPS1FPwbxCJpJUSLrmeaNcEUKLdPigWmLXKi",
  "key5": "5cCEsTA57pMggGS3rhtuzfY6kmLucqF4Tyf8JDCVQSJpNNszsUPqqLbAWkeYZZ6NEKF5E7Usi8p598XEW7mKHTaW",
  "key6": "57W3YEMfU3Zq6yvwH2jh7nY91zX88p6mqj6czBgcfB15R1smWnZEs6GzXSn3Bv9aLspysPsGxP8Y3NqfkPad4vME",
  "key7": "5NgVqfjyQd9sgz9U2B8uAgV2ebXQR9MNhQXkZGpRWVfcGXv9kkRvXB3Gr6R4oTJsTVw4gH4GN9J8enerELCcU6Uj",
  "key8": "MRuVek3jsrGVraxwC4ezqAt1u11X7ZgZuQgr4TEXryjhNgXUoYowSi5igTJATMMvZFZWZUQnye2vu4yFVtWw7pD",
  "key9": "4APbsYPVCextG9zq9zoUKZhsx93GB92SMKTraP21ngM7HJ2bfCgJ9qAUTtQXGiFmnzaRLrZp5LWg8hoKn2st99y6",
  "key10": "5Xg5NPcSnnkiFCoo7hNxZJwqt7gaUuN5vh8NJHi5MycZmXQm3fLHovAfL6UQbRRwRRWuJEcNrRfzV1rZrKZVciLv",
  "key11": "4J3nWYUdxWtirTJSnQ4vvP1BUDgzN9oGCzDBdWUCVDUGM3i9cXLes4GpxSqgbjmchNq9GzrMhLMcyTDVL8DkHFZB",
  "key12": "avenLmo5kZ4io8V2qe8MUYXfGKPxzHipF3GuZVwgRZohm2Hva6YUu3k5CcYAVERkhJU7DzSMeybxtLG9BexndFJ",
  "key13": "4mBeibcjTyAFDhertQL88UMmGCQ4BD1DEzmGpegsN4rLHznWYdPCkkjJduXjdJWxMm6MZpYngTn8JXW87zWAZJVm",
  "key14": "66U3rgyP4yhiFViXgwofgE18c1fRH7Bd8ecZUxEnJR6MhU7Pg1SVRX3vGv2b2QCvWjsqYvkqFq3NFjMYkCkNFFfR",
  "key15": "4eB1UpNGBbReMTP3njVEEe7uP5AZQBN381FTyo7FtkqBGgm1jwcAQykC6t4Evf7UZJzxsGvMgv5irsd7PwKwshxE",
  "key16": "eSTB2q6EcBLuZ2tRmMj2JUKve1CAKok8Zh5VnFuNry5QPBkemBrbZUPXDG4DdC8Ho5DeazMgxD9Zp46uxmZxDg3",
  "key17": "5ceBjVPxDx7ugyYUGdkqax5n1AqJHjJR5LZ7VW3GSzKnxd6uXTuwmyy4Tiv8z3ByXWSixwFBqBMq3sfjjmgFj5jp",
  "key18": "5aafwcAFfPP7qq5jepLDYB7esjXRCeQMwzeVVJJBwHqk3nMw5J6gWWB3Uyk6GkdMLdLbABfnM7fnZVrCTuKq96g3",
  "key19": "3UBHLmSwdCZaE6yK8S5AZZ3HZ7cB6Thknh3J3VaDXMb6j2MPi8gLe6szabNPzEnNWYNQeqfc7uzzhmeXYHST5Kpo",
  "key20": "4FzfPAeAg6wevMzBvTKKvse3rxrgsbADTA416v4yRm4n9ZTvsSSEe6SVeMcm61YVQnQev9dJ74rwT8FseXY6mLRs",
  "key21": "5wUqXQPuCCQG22w8VEo8AfMLtDyYZp9poFc4hLvEChhmwf9v2FaEEcRCCdjfHtHfhMtoTBKBZkgNaHXCNGyfAyox",
  "key22": "5yzWNd1Vr9J67JxWNbMFjurFopaTyK3MUDS2i6evMq1wtkasqhg3ARNsJDeRwZy4456AUMWBU99BscGqWVqiub9C",
  "key23": "5A5BQtJLS9VcETCHSTW3HfZCu2oBdE8CNLaCiHy6w97SnnF9fcvDoxBuebfJvvMZuimXyki7VwEdfXTzjVoRBi7C",
  "key24": "3tirrdqc8ECbwwGVqChe9Bi1dA5ZMhcnoQbiMerrhivmnrzd28WdeXjJ9cs4kSdB9BioNjZGzWhmCKuT26Ux7j9W",
  "key25": "4Msw2pVQi9J3U5FQ75xFpZcmu2UxEr31vdUQBzJv4VRmNZrT8b7qSeCxTVWhHDzRoYCwG3trA72bAKZ4Ca263qHY",
  "key26": "3uT5ahWiNRJrvpXUVUnLBtfVEFe1zS5mJHZAersCxCQ93kJ5UzkAh9TyVw6rb6gJWm643tcpCe1NysaHMXvxvDEg",
  "key27": "3wfzhKLwYnGeFyWEhF7KzcHdbna5M7xwAZSPuUdrF3YBv6y9RQx4LABVC6GnfgD1FuaHBwr9fNLcX9sZfXEsAVRu",
  "key28": "4STZ7MZEMhMfsQbBgBzhzs6dUNSs6XDApS3gjuGB9WNVR11dM3RRAbX77sdyVF3fH59TcNomFo8otLybEBXaUnM2",
  "key29": "3RUVhMfi5K9Ca8tiXDNeXg76qxaz2N6EECZ6395NNC595uijaJpzYidF6c5ywwFkkS9ANfuCzaM4UajTYdjS2ZS",
  "key30": "2zBbV8C2NTM7P3y8bxMEjp1C1aJ3qEYhKvFkac9WPsT3atMvMsV1yULNdmQ97E3FnCJKJqBuXUjS4GBktyc5ws9f",
  "key31": "3yezncQZ7CAD9WXi9c7zvoXKtJxrw28stZiYCpZatrNLHsJPt8Ft9HaaM2MA3vZtMHMorShVsKdXeazFrdSzpuY3",
  "key32": "2W4eruYGcgJqM2zxtATgwfxVwzaTVJX6DvryEG5bn4nYWrUQPnGb19ePmdzQu3gENZPUiEJMpwLL7KvWS7HTe5hH",
  "key33": "5Q1LG8629Zh9uStEEVRhGuBWSBP2T76VDc198ssG4Lvs8v3FxyGbumBov2PwQG1oKAnweTtGGC3H3UBN3thbyZ7E",
  "key34": "4vBtH7LSWa8b49hmSVyU2uaLadn3A6DLtyQoTMzbXzMV4a6tv9sNZJcrfjpBAqD7MmTW5QMnT9UoBAWZdVxNdNTx",
  "key35": "4FzHvBvpYc4agMWV4JeXynfSckauRVRh4qUixCm9frrsEqig6wvUBWwydmR6mitdrXetAuJ3FFbtZDMmNyu1LBie",
  "key36": "3vVLYnmSN8ePUjedth8iURjPiouwgDE4Uro4K9hNHuLkVHHUAYds3gvQgr7GmD9xokxSxqC5pZZJMRpXUiGJcHdS",
  "key37": "4Vi2qtLGq7WmNnu2rgSMLBJiME2FRGt6TYAHprveje8veqEMAC3WnN5b8S4pg5reZx75hfPMmzUEDYskVdfUcUqn",
  "key38": "45haQyPbGXA4duTMxBbG9E3q2GVezx3SPwLiz2bNUbdqwcxfHKFckpmQcG4pnu6zvYcq1QjmWCu5XBvVHtYpfMNR"
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
