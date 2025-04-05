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
    "4rJBvhp9ER8mAGSDHJUsF1oVUN2Lresc56yqgFtvJtq5hck8yCpnAibpF6vtzsvaTUzPa1wHt9xKwcJBQkw2YuAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24AAmywVDUMee5YArgV26uME9miPjmxytbomPnHcg2PY8EEJg9QFhCwwUJXczaj2Zr33WmdeWwnJsqanUVg8Sh1Q",
  "key1": "3EYwLnL4DQ5NJiCnoJGPWTHaDDi9uv4A3zZJS13FXnwt1YcXqSeX5vnpgbVxEV7L5oh6EVNJyCLxBTBP5THjBwu",
  "key2": "77jRbWqAfLYNFke95ws2bsUHp4E2AXmnsYxk7pw4M95sdYep13U2Cg7S1Zh628VAANNun8NUNQCoVHgsx6tDXqY",
  "key3": "4QnkTJ6axQyH3euLSCd8jqQsPQ91aeCjqwFvUA97HgrePj9GZqPRAJwGFSYbmQyxxq9r2PoVSCQXsSkctQAwFB6U",
  "key4": "2KqTvnMXKbrqZDigrmiLRZA7vkuHTWgtNJ9xA8Z4D5MC8iY5GN6rs5UsJoX944WnguoirfY4BH3kBsDUzueMXzAA",
  "key5": "56joh3y9rixQNucBAzxcFBDVcRG1pS1vQocgBh2fLKKnULEL2gHMZV5wPXiJQiMzFwYC1wJJ5dxm9RQUvquFRTMZ",
  "key6": "2nv1YxQju5VzZ7JNhKthHpADGghx3jyzFi9uShyh1bAwGHJko8F8TJx8eWSk4HDbQiDgwbBxpRLmVCfnkVSb4tZF",
  "key7": "42VVU5YzJKxZUPnNvaKrm7v7JdxfNhtjeS8VxCfWVtgBVirncTVufj7RqtvGPyzU6CmohZRVuL4W74ncxZBRmZH3",
  "key8": "4ePZUkLhrrX6omJeVFra9zQPd6H9UF56LNgYhLvmVRrL56RYrwj2HUCfBqHXh5i7GTxQhAfX5frpdgrPHBWZLxRG",
  "key9": "2AhiP68CpoqprMfCVgK8Tdiji6q1yc7fRXH4nd98ZjzZKB2uKiTFNztYF8YK22teqgGudfv3RL6s2N8hgsdcEXz7",
  "key10": "4rhvWGuEAWwCA7SqWQw3dT8RsgoGtY7LND8UBAwcWuAMxLLpAkRtjCXejXgYst4WdkeBdkzDQHxRZwNeLUEWc3Bh",
  "key11": "5Aqb3mss58EiH1uaHh8UzHMYQPHVyLqg8VhAfwpsEo15RXYUUjFsHG3jEenoPbqpw48c8we569Jfkzmy9rLnT9JG",
  "key12": "idptbRCcDvrW2fmAsxWQ2hRqjFTwuc6qEzZf1WQ7SDray4m4tN62onjSPb8fJxZbPLNaEFSdTen9SdLzRGSDaDV",
  "key13": "5sbUcdz8KBMVxCWky9ofPFqL78gqae3yAXb9q1npgbsSsTGxJUnuTELti7RPZZaKg8arQrbNHuCAMbbRqM7MgNC7",
  "key14": "45cSJmnWrUiXN8YvAr1afoMcS8aEq2KBpuwHCqvvayWEZBG7bHtum3RET448eyM9kuByhE1TiFhaQ9sKiaL3m6uF",
  "key15": "5uor3Rj34kTza5zxgG83MthLet4UoqrfeboU9FJYvfkDdhjNk3YF2P4qyziy6xCx5F5Wz3Yryth1rM5ya7tfJuyF",
  "key16": "2r5coNCwRYAmdbFPgF2AdwQCztMnq7eC7HMktDB6yb8QkGow95cdm3S3S7yrKNHzwtgLkvWESe8ikXEpiPtppZ3L",
  "key17": "3nU7cbaB2cmggujy2TT8rJXbxxX42R1SFpyuKgRpep8ckV6xDyBe1k73NFL7VqCqU83TNPsfVWsvcym4kJWZPERH",
  "key18": "4S7evtm1BF4samSndrKRbCHorHTd7kFYZbzrCKCKsNww32kK99KM5pfugahRCzzeiCq2285PSioDFeyBSbF5bWzH",
  "key19": "ijebR8WPv56xu5aHqCZ5RxRCaSFQGzwp5LwVkrDsjBA3xQHhD3eDuWx84Kk8ixmAgiurtmQ6nmg3PWMdunDoCwS",
  "key20": "PMRkBZB7KX8TPTeb9FaNHMqwHdpRBAYHc9EPvr4KMiZUPEVtcJvK8cSiqZqY3Z6Q8o52TEcFJdU9bpNDm6ReZGj",
  "key21": "4GNKLUvruQ2wPTa7wtf55cQcyqayBbAKPpDkp6m7EDt6YfC3kzNM4suDXJww8qdcQZPA2jdG47zSCnLyhvrdjoZ5",
  "key22": "TFvvVrVa8xzRRKm9ZXgoNArbfP3GhVyavTmRRXsMqrt8D1uwg8XkWgBB4gHxZhcuyJXtrfMeKKoA4Lirx5JDXeq",
  "key23": "3zivcMw2eoFSFZzYNrDFeACZPXqNTCtTJAT8oHEpvTcjtTN7MbAEZQ1ZRWj689eqE4Bbb9t3hSHKbo1sSzK4Dcpx",
  "key24": "5cLcHaDUDQEGrXF4Xkp2zfM8yMgs5vc5Zevh2M1rNHjCGskpSk7M1jTiqi15PPYQHmj8YJX2ru5UNo3FWYutbqsa",
  "key25": "4hxS1weZ7mhh9fiSS1YW6VKjLbaptQsgHe3RGsdGZr8dFgmTUiSiwLkeR1jM7zgg5YRSCEadb34Kc5wPBUgPmtCr",
  "key26": "5jj1y5F6BkuFywDsosPjRPYm1mUavND4tWZqpQCsSALQKhJPGQK75BaB2nP1jMT9deiqN1epkByZnoHLXj1Djdrj",
  "key27": "2pyinZBGgWQqVwTKkHNKfgriAaqyB3uA1ZB3R5u7Wu93sCMzC5joLwa1sYeScQq2qKu6YT8y2HqNXH1FXT5exa3p",
  "key28": "2CTiumEQd5w99oxdFpKDB2mARgbNs94gc56t32dpD8xuBuBEgdQnmn6muAPe3Nn3yJ7icQthb35QPYZie92MGeEE",
  "key29": "5VesnJ4f7kyZ5EAHe5kPeE6twvqz4LDVmApH24WE5pJucya646o7pkvuMqU1ZUUPjc7RrhX4JEud1YgjVBPwZsLe",
  "key30": "7Zy542aQp4S2VTYpaCSiZMx8w6XvAj8rXJ9Gi7pM6HQKH9v4T5uPoHVDi8RmJb15GZqh3DVnFae9L14widDBxZV",
  "key31": "4LhPjcFavoWMFLSjhQ2FUaRLxd1M5xA2jkc5oHhFYRziCZrxekZKwVpj7NJ3nzZcFVL2xWJUAZQ69Xy96T8wpp35"
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
