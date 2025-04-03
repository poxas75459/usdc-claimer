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
    "5yTvRFxSuHVEXffZtHszLvPVvjwL4LhLwZw8qUzMRPFEaYRBZ7hYfE2CVGJoKTkJQgJR7W2iwEGKrZKWpKtyaKrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qxtdfoyf749EYmhLThjuQxUnZTAcaK3KU2BMYAhZtRuqDKkSj3GnF8WPvSt6M71ottXsVTmYq8m5FDU9N4RX82d",
  "key1": "2BEkNvZktoZdog5sJgPdENg9ezq4HT9LkdnnH7Z77JuQcbXT6rP7xKfbsM1NhR1G3AwVnyShE3mfNLfS9gGhJnJY",
  "key2": "2P4x3B5mjaUDdvBxKPE3T28kqEq3ab2kCvo3cMFQPoA4JVhr5XcUAsaLhHDguK8NpJHhXuhC6NtEJ44nJ1TzHnCx",
  "key3": "oZ95P2vB9bqVRvdgVGb3xL7VFVDuVGUwJUxjqAZ2dAy9vrPtPfPxwM2VnxXZpK1rkzcAHHhfYzZGgJS8KSLCPgX",
  "key4": "A1RNionjDsLZppaaR9AnNXNzxGqQFdNFrmRT6c2K3i1ooL3BT7sk1oQS9N6yybpvdAuVzrUU7Xg36XRqEzaJep4",
  "key5": "5bsemYdMfkHJmX1XxfryikHWzeeVzV4xyM2o2emB7NqTRzwGNjGZ487VuE5auWg9X2TvZudng6wfo8SZ1ytonxSv",
  "key6": "5gadzwrcG55RUm1zeNuK9UCjGEr8fCSt4oiyTV8Ai7tYDzfWgZRk6WegFkRugS2fp2VeLwtmh5F1m8hENnh4TaT8",
  "key7": "5HBnMH55zhrk1XC6qdQN87ZXpkkBoRW4wdoPLoVN2h7S2DpmaJtZpA4RWr7pJ5ifNZpL9HuxSRvQFNnbYgkfUUuz",
  "key8": "PDj9smtzfki1iNxnVno8AKvb62uWJYsYbu4hddH2DDz6BgSNuaPCRqqtK6hJGVpiHWYkSDNARNGKqW4aYyN5AVg",
  "key9": "5NEH5xr3HbbMnSXFP26VNuNhUtDcwFeqEJkgkzyHEm9NMPw6o8TeXwvKkKzsZJMq6xnhcSuNwU6t7DaB5sAzxrqS",
  "key10": "2D3m1jpYQLwoUN9db5VMY3viYGYNmU9yGB3Djwypv474qin8Yc3SZEeKnJnVDj54zPVRWFvQucNP1m1RGwQJhaYw",
  "key11": "5oMqXbxvm2YQvtS69oyvzzU3UyKfXNDieXrqUFKRV8FMMDGsJeHuLTfALRupz9RKC1TQaGK9d8iDs42L1kFQFoQ4",
  "key12": "bNfQSwvdPAx8KHKYdmJr9CzJfYJAAC5CL23xMe46JWDVSkbdLxe94HxdNZCtBrWV8fU8AN7BenPfKExxdzM7Moa",
  "key13": "3FZnX8D22NFkNtHrj1QR1gT73Ffpaj6hMhWWyGhffdS9bp3y32L2PP45Jct8XiQDriHnG6RbqTqr9QNd3SHBmoJ",
  "key14": "2JuZazVsnLpgSHr9iyJhip1bDdrL93aFLrrUD3nJJJPhWq5Pi8bFvm2NAsehkkiNJ4hBxhBUdFGNnME268WBPbDT",
  "key15": "rKQJiyVwLXnyqEivhggrE1KcDLpF4mx4rxm19JezmPWcY59c98winVuusuVZRtmHvoESaG5YMRDyrfcSM5PATd7",
  "key16": "4K8LAawNnEy1kfUn81tFtYfYSFZPHo6R97Zd5pNSGPtfWm4zLD5QuLaL5ogvoqhY1xtafFiv1QUZ9RnZK4GXJ5DC",
  "key17": "5Hj59hudafdvK4WGszq8J4GtQXsBD65p7CbLA3AMDu8cyrHNfsEPryWQLyjW6bDyZrGYmMqbWmXdsiYdyTDZ4qh5",
  "key18": "4SFKAqQufhdXiZnwi5dp9WpqEKRuEz6ytR1NSrSrRqwbthn78NzXg7rScRpdj29mfugF78SELUs5Ya7zZdLWYfV",
  "key19": "mcFwfAaLxKwbVcntx6UQxPQzs7tgUPy72JE8JqRKR121htjwmigZHzjD24sjoQAfPK5yoJc2XRnhYKfsijgZtL3",
  "key20": "djEtierPRsyWjWPdEeQEvncx6cCK7o3KbV4Hyi5wCN9H4ouXRkuhWWmKXB6S4qNcSnufwAX8ioxK8F9NBV3GM8j",
  "key21": "cuFHg41Xs7mbYy3tYhDShvvVQc4FYZ4Fo7QZeNeqbK93D7LfeownvCM19A6mTWE44AsC4eNE7Fjyf7x3HTEdpf8",
  "key22": "xoFFdjgGr5pYSabE1qc1LQiF11nomsU7mkJMqzmscgEwYJ4NTQt5cnKx6mGUuNW1WrgaEC8SwAfzrYk9rZNvEMH",
  "key23": "3vw9E7KaWKEMGXrdF2uw8i1PxLZW9J7WxBZq16LZMYfH4DRwYHdR9cHEx1eotBTM6MMvM59F6PMgWDqcA7CjGouV",
  "key24": "HDX2YwkSmTSEdzCEvWYxojgbLpS7mPhJHoQPEYKcET4JEquocFhn3jkHHnZN94vw9icFiVPXmSYrui994Ejo2Nd",
  "key25": "trabLwxV5UzaL25rjTGT9MA7ap4HEsCep6ncs1WBxdGNPSLfxPHSd9bEkCV9ycXLXQw8ousJrnXdhsuJFAsKBLY",
  "key26": "5mPRFjM9xJN3Qov993deGL4X53NdBVM5yoKKt9pMhSnt7NYJKk2R54xp3Z76aLKhzsZEunCsjDBVK3c3m6yHRaZr",
  "key27": "5NR2Dt8P3CGifGndPvFRmoLJRC4jzBt3n5UbtXvSsL95qfdeEERFkbMQqqZYr2ZVLqTJWcschRJPEPRbddFg2MgA",
  "key28": "4qqDFyzYyqwhKxKiLoPocKfV3vR5n5q2SVvdhwkp8gJuKNC5Rsey7rLivM1Raiv4QmgL2a5cYcTTDfCwH5f2D2GU",
  "key29": "3r5yBd2tBKYNqc6XZUT6HQCEsezrZZRaKqcc2snRLoeg9HYcLipUrqNrw2wUcJsdzz9Lmcr93yUpC2UmRAkvdjUF",
  "key30": "4mVqHp9WbzhbSGrJw756UYQwxfzqBQun4vULHBJqHmD6jK9JsJxvHdrkZhLdtxraeiEEmubvqrodRfke4SUTyKoE",
  "key31": "4nW8V5Van8Wtsw2ZYMyQ3UEnGEi1Ecr5k2hcqMdLBicaNZwEy7NB6MaLXVMzFNXca6Jk14vHwh9EFdsrCTzx643Y",
  "key32": "ufBczm8RspK6H9duf9F6YjYz1HkkMrviBkpZkx7yN5XZMgoC7TgTvsgeFEZvFoq5zocdoh9kdNGRe3NM5AiXbjg",
  "key33": "5khcxkdTYuzASgXadbxieumyEUUDZWehLjKUQSzr6tvUFVcUUetieG5gYwf29V6gyU3LAqb76timcGBaF1rp1d5g",
  "key34": "5ucff2GnA9kv6XQWp87pkBMGybNSyekeMeL7CqtJEKB4tnmUSYg7SzaGhRyczJVmQN6BqEuF4VjAa9MPRfornZkU",
  "key35": "5S2dVV9kEYDVVNTP33KApSzazDAjoPEWfX1UsKdo485HAmKG2z2Q6jshgSf1BDVF8indStEBquFoZyhXa6kjshFM",
  "key36": "2TKqjDRvnG7R332b5yY6QMVQN5DrnYRno6mXpgDzPvVYtBdyhx87514nikdZLmrR2vKGbE1FEWioJiSD8ADiddui",
  "key37": "5CAbi6AfEKehB8cwNpziMJc9jCJqDsuPYsPnND3k7y2mbJPRyj7v29V3U1qCJ9ryDejj57tTkV2ki1pskEiZhNgJ",
  "key38": "4Zyc15bLxMbCnBqK2FasJCYbd6s27KdUpkXkKfXoKLmCyMauhV9fMNAbg6BqzbCjwssM4YiFg2x5MYcrXQ6ZUMxk",
  "key39": "4mB61PSB1EpWVVUwYquMhhMs599Chmc3c7SLM5HEkdyxAiM7m6d2yG124zSwnwXvDhNfzhMn9FN991U83yBp3wrP",
  "key40": "2pcbPWfcNrX7UZPX9dMMpj5kKtxBduMUyQ7mSLUpq7CZLg62XcDMt2uFArafXQ3u1UQLDRng59iyX6ANeiQnqszn",
  "key41": "5KkrW6usfHuLKWPS51N7pRYqByFUL2CxfH3mBS5rf9hgnKqMJ2uCtogyTAMXnuLkQNCuMpskQCnMuudgNhQLp2Gt",
  "key42": "5SufnHwpkg3JCfNKZLA1umhj3M3d31MNq5EfFg6iiaz97HctYuex7LLhbFkWNYXT3oeH5Z4BM5fZWvtGJ7L5ancN",
  "key43": "36xpSpQQjWh7HYrhRdyFpV23iMFhq9hMp3wHGdMWoX4CZZBq1ogQdijPtmFPEK2wpxAc5bRvFztqnkUV51U3GUCg",
  "key44": "5Kd3TxbjXG2pW6DrCS7s2XPyCN27SrD46r2nafAshw9Q6DHksUGZ5CD2A1qia4SPhjQnCXzzTb6Jh9CEg6S47Xh7",
  "key45": "51LPuy3yYmfq4ojxr2uYmmkRyKJ6EX39FreaTmuPGSYyBsoT4Q2UiUC5BHuTfTFGiEqzT3ndSZpVe3H3YJPEgPvY",
  "key46": "5rSiFZM256CV7A9Np3te4zfaA6mm94vnb97TGJNpmdStB3mw6XftrYzeNGjBKDbuZjUuM1czhpFHd7ZbuP68dSz6"
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
