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
    "59qSnhzqFpWbPw9whZJpeSNgPKnuu31JhFmL9L27GFdFrxk1stxp5TmX7NM4UjmozQfUHiyb11ds9yoYo9wuALB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hAgSqd1ofYonZaXrbsTCTBFvbYpannfThMHyykKCxPL7JPVWkEvqfAH9aENfcAVHJYygQ5DejfJoMHAQGVZB7LX",
  "key1": "4q149odnY6whiZMMRGV3qLb74Nqv2WCpJzMvoGHiocdrpA5ayFoy8rnmqac9KMug4wRi1cHiRYTMuZJD8n6mRDVY",
  "key2": "4xYAdkTAC7Nfw14QDwTuKD61HBiCsDoYucjnk31GNNheNVoE4Aykobp8o4qo22xRG35UFaXN3itxhzQjRoCSVh8E",
  "key3": "2GYAwaFEKKsGsCibEfYE4x8XBJtitWsDorTMZjR78VrVKnNtbX4rBCPphQfnWhbZEzj1aRVKx6SHAtgRmCrEEFVM",
  "key4": "3vDUW2KGz1cSnbvRjn25uotJLF3VPgT3QrQkyrW7U7n45oTQKL8rJFbrcFPDoyfCu32jYVX1EdEEWJQ773VbUMBp",
  "key5": "659oFox6wYSoe6fCFanuN2N6kshdLtZMzLGB7kTkHdYSAViP5EQHwxQwNrNY6fE2Q9yZu2SwdMNjmbuAYLJjFqt3",
  "key6": "7m9dno4fEx4ncfd3ypaZUEk81thqinR5YU4cVi9WSkehbTMezUWC6SvTZK9KAbKvxixZym7zTBgqEVuTpkmy9A8",
  "key7": "jX8edyxqMpKYMXFrg9oPYuJsW84WKARtVwTS7q3Y33FqVW8DczRPAkiFE1nszRG9c1KLWAtDiWFF91obZYKt9n6",
  "key8": "4P2xoJr65CtS6VtgLHAzajuoNtffhhf3udzn5hCFbUGcvJuJftPTmKcf5Nw44N5rj4BNmoLLHzRjJSdQ9WBdt9KL",
  "key9": "HwpPtiZYWUDhL55Ruk49UwdAsQHXPSdki7EwUdgjgKbCAtWTMnQex1gxnYmMFixc2thXjG5cD4b378yeguun5Ui",
  "key10": "5MKQzcr7QUiBDQcVoAmNX3SaETJXTyTaq7Xneo1JDWGFAkFsyWr97797RWWBmLYHvVe5kDE9tLnPavxzoMXRVmfA",
  "key11": "3XvPrByWd7KSpjHEvoNnJiLGn4F8W7LKuHgPkD6ZK3Q1W83Eq3TuVsoryoqH1bz2tNitJy6eSYWqGbM9o127s4Dp",
  "key12": "uYtcgLiMHUW9xiaxox5kQDfVB29J9dpp5n9qi5fkZhVqe36QvGWZFS1Q5sq6yZ9Du3QUJpcDps2XfZsQeKNmMkB",
  "key13": "5WCghMG78UuH6uMi6UYFAqQyjZhexHUtFUhBm4nQMYnqpWg6yUAAa8JxQuXZcaumzzDMq8KETKKMQxPuE1eArxT3",
  "key14": "3ydXnoK9YXsYA2jwgN7xYyoDhvpjbGxSmP2yQN8g8BBzZuX2MDn4Cx1odw6FpmRSovjHoHLSU2mAaputZaGvb4aZ",
  "key15": "3e9gN9HY8rh5LAfo8Fpv8M1edWWyVNxYYG9ZLLm5kQEiJCjRxhAeHUcDdymfpqLyxDxHDrADXX38hn2YzMEuaXiL",
  "key16": "62RWmyFxS2PGQP8UxJm22ezyoZnt4eM3VukzmtjguNUWEwFxgAs6M8zFX6DYDF4GWoo5jrougLWFYQf6EcJ57PC6",
  "key17": "51ASWYsoAPFpM3WTHeWMm4v7fBWKD8Zk1prLaK4CHQRL4SFTfefQSwBnHG8iYNKV8RQMm1xE3sSE9iKfrzRpMcJn",
  "key18": "2V8z2TAvoPRjFJ9mbcvyxSjXGM3e4Y7dhp2gmbfJXHhrrVEH5XbcndGMjgL1RKV8UDXMvpKtmtvbg4LAq6BSjYah",
  "key19": "4HFc96p6WxidEWezCqp7RTbYuryQFHeqggz7M34oMk44W74duB4XxjzPdnSfoRJBwHC8GGPcFkjvCES6mqn3y554",
  "key20": "5eKrJngowUvsWJJGSxpGzJokH9rs5YttLWRurfMbZD3447EzqFaCY9q49caLcYnUouV9c1kHgEmDXY2cQQTJfXuF",
  "key21": "yTwUppdfdvMpmH7VnGTnXqHciiqPicnhnbi9iPXK3fwVxXLsSSMQSQsdAKsUFbJrkEpJ1VeU5fBYHp8A334zCub",
  "key22": "2i5KbaGC5A8CgmDVeaDEoaLJo3kuSdyQ72WPAkeZR6YpovA5UBJ69FiZHFT8TFrXxfewQpF51xwrrLPjdfsmNCQJ",
  "key23": "4azfDw8aYupiZXiZgbmja8JkEc5XhoHuJpnsScmXF55hrFAaFS1dytMJTdbCnQVvDceC2bzYJiYGbx7zpi8qw7VP",
  "key24": "5CdumjfeHUWgCZ8MnF5DcHC9zX7Xv3CjWKWd1BUcfTGDbmMqCWnWtVsTk2UU1SSrZUow6N3poQY5m9VSNQUuxvPy",
  "key25": "4Bfgc4kra7poi5ARQH5cur52bZcK7F79Fgu1PyAWBtJu7NqdHph1eoys1ExeT3FW7vqELRX7B1jSBPrBCPxcGR9g",
  "key26": "4vZ9US9Uxs8AdJKHQQFMk5Sxp2fykp3R6zmfBo74xZERNSSNLgwETeyvyTPmh3eS3sffLih7YNSVWVngND2b4hUj",
  "key27": "4iYndHGu1dSj8i1TSunVaHUKKgND5waQLNiTMaN98T89G78sp33Ah1mrGtSrpTrfNDh1noe5Mxv1TMVXHEhpmMYe",
  "key28": "51hqSNA86xsg5o7FUTDuB1RUULgBTZVTD7cMn42kWoQmeebAVtKh7TsX7yh3UBj9t2UKHfVGvb9EGBobJoFX9svD",
  "key29": "4GGJvTQjTtuiipDfRUFnbZaiE7ZD6gK7RNLupM9W48zYGSLK4eFcCMaDUDAeT7K21doKjgRkbJQaWpVT9xwZUcTZ",
  "key30": "2aUCRAvwxaLmdhJ8UEr7SwTYonnVa3opeeGGuS8jN2TK2Srd3YCJMJy6qdY3u3MYpU3AEXb1JwhceoLEFY7SgV8G",
  "key31": "u15rJixeDXgb5XJZicP7He2huFPc25ncZKEeePP8kiceBqFeX78LgKmWRDUv2MjdV49hMwBJbwgL6nTFBpUZxyu",
  "key32": "3kZPdc5H7nESJPaN5yVy4YzGhFWgLEpcLupaMgHmVkzQDWctpdkj15mwEWQbbDCYz5N4j7etB3jmeTa6ZtBMbs3U",
  "key33": "3ZGUT3VLM6LUoAzBgnuAqYip4BusyYRTQStYwDhiHt5EM6AakZ9K8D3zjkEe7v2TLvMGaDmo3MHP6fy8r54WEfN",
  "key34": "2DxQBCkgnSsVFRahhL9i9KuR89HJF1a7TcRxXaW2rFrckPbfdY5Hp8esehg1FxrdPNoMukpyxLq3srdXUWRbQ6X3",
  "key35": "N3HfgdANyczefteHojvFNCNUgtFA5ytT7bbCHnMPbQFPuriKqMNhhrk8JjdDhBgpLodezuD8RYDXvP27kpfgCK1",
  "key36": "h3bfYNQ4ViaR9k4xKxgJSnKgv1EiYoTXKNC3hHRrtQSvT9DUrNdhXmjGRDYXNWvbTvjAxenU9xH9UcvoFCzZD3Q"
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
