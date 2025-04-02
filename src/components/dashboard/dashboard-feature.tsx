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
    "xwFmjtWJ21kFXSSaSt3WQZc75mq2JkNjREdnZpdz58RtMpcvwrwNXZT1D8MFvxYWrZyqGeNum8ceJHQQbMXbfaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Bq7hbvLwY6xrxxDewaGxXcxUqRn2ZqL9q2yFzEhunK4revxLgnzi7hwXewyLrMJr88RKNszGHAaM69oCN7vX8X",
  "key1": "pGEscN9RousXD1mTcfGx86FoGVHNe1Yb6vjF4WQvPjrMBYzDrkuaQSdYh3sccK7e5PPCSNZUtrrUThwLtGhXeRH",
  "key2": "5F1iMBLKHaVZEYCiKeR25gskg5xRNhz7M8hdQgr3WWJpqKeYAfWeGgJ5dsAEiDUnpQq814VFPQGbmVtFmg2nHddj",
  "key3": "BHBM9t1Ht9tFg5115WXypqtKsyk89JWnXWY9E2Z5BtPkzFNK94hcZLZJTS6qjNEWwsHHY5tViyXiYKapnRArVBN",
  "key4": "36fWhGSqT23cjHk5P8wdS4Bt4SRm7yn2nxqKtizkp4rMHe1DmuEb3M8K7adruneJyFRgrwsbS9baGYtsY9aqzrVm",
  "key5": "2TRURn2EJ6szACtqRV8JTbrN3WEocr77gvCXoLBCU4JuGzVBG46EyhBNtA5cjDNUxSGUERjDn8zeSc1jk2iLQ54S",
  "key6": "2Ls1TME4TpTp9Ajw3ZhRPpJhcwVEoUzBzNrTn6q2vyUxXH3PG9EVfyawUDNmqKzXtMAVYTh5DcMLn3GA7486iSWK",
  "key7": "4bJ4ruVFJXgPX9ywV1jFjiQ9ztKGK2RVdzNvELGdr3wEgDhox7sVoKaKN5VCxVtENyc9b56rss5PqdaZuN2JH3QJ",
  "key8": "2kFEV49M6BoezvgEaZ16aTXnTCZ4NmQMFpnxxEpmgEBZfdggfaNLw23KqDquDQVj6nLRgQUTwoLYgp5k6TygMd1A",
  "key9": "225eTGFjPDR1wLs9iQ8CpbLB6XeUhVcBRaqQbvDJd3kMT4b9wzXrFACAqEGi69uBCbD8LSscotPDme556KCCHscB",
  "key10": "5pG58w62ubF5Vt5d25eQS2gMLvFgg7BTJ5njhqv5VNaCzZjybcvQjicmdxUB7VDvb8DRhzKdzeEuAPScwgHXfZbj",
  "key11": "3cubLNitPbE2xckEt6cXiYrwG7GFUriywMkNmKqJDrKJ5PWZKAe9Q8iAC7DYojV5q1W2S8QuHpLoLG23HZX8Tbuq",
  "key12": "4YNeS8WgwxocDZu6KXT86gAW21DqprECo7XbmQRtZwWd54kB1tTFfBw3DDChkskRAd1ugpqgBiCjMvacofJTkuC6",
  "key13": "3qDxr4opzo3fSpaCgPok9BYAupMYJD9cnfA2zB1EmMfy5kv3azZiqckwbu5ycKfAzEsFZnSdbxDn3RAzF9aaE5kj",
  "key14": "2LNRcgvNw1cofqMyhnzwtue3QB8XWKNaARu2dAwYWLqXPg4DoHm3m3h2mxj7LXMyi5eY3qhKAjGq7XNjaR3qyPJE",
  "key15": "43KX6CRaSF5HZcQk7ApMZmJhqeMVX9cWZ2EkBL9CSgZbaHzHd3P52GPtJ9TJK5mX9SAJz9ouaxfZS81fif8QKVYK",
  "key16": "4XZQ6mLXJ34qYAE9rwFuUAMtKsLxT5iTzh7B9nigqZMmYV2XwLQTVeXq4yyr78mWXqZYKqWzqsWi4AL72fT4Xjok",
  "key17": "27MerpMu5t1guJW3GwEV8tzoWyP2r1ErcHHAEU5qJDzzkD4m3si9CYGwAuQ97C6yFeAMnzcLJtpoj8fdXmLyDtnV",
  "key18": "dYh6J5EGkwJsLQQDTV614nJihSLXhpYQC3C43BUdCJAscx4KfKBaS7QHqciwG6WghD4peGLCzcMUwBHi4YM5wk8",
  "key19": "66otEKUR7RWB9kuBCnmLstRUcB3f5hQGxBAAr1fwUh8dJ4CLsgWn98emcbXDCU3BSCKf8akGorKPqUDN9y7GHrxd",
  "key20": "2WcrU5A3tFB2B1Hp5J5uYZ8CvNin1mSMrFk4ic97FFW2DyQ6cb95y7rktVfq2f6aSjF4y3fCREUsJ41MDDHWkN7F",
  "key21": "2QvEknP6AnyAst96zKJpB7yhFA7fLaYXCxTcB3jFjZydPnubcYQdPzXVaMBwEtSj1EmN2Fc263C99Ue1LzDcWj2W",
  "key22": "5U4cDZSn1HcgiHqCEVxxiixttXQC3xJmqwqExNAe5ThWSVykGoKyfmTmrVY7rtKVVKwGEKt3sob5Cavm9LJRjMcJ",
  "key23": "iQSs6eYz8cggrKF19iE3XPdsaAVg7oW3UhpKseeR9D9z1732i3dhVXiU5bP7RsEt51dnGEW8AqKMiwhdkTPKox3",
  "key24": "43k7V9U6kyF8Zh8KkR1vzgRbEurXXJvXXHSL7MobFMAWUC3FMXci8XZ7KC7kNu97nZEXEV1J8a8eJf1oqBWzwo89",
  "key25": "Y8QH3tiWmgehTnEU6SKbEpAjhWjdJGeW2ZHZHL8X9GJvQQTmdMP9dmgp5tNzKumb3tTQCwsRTvpt7EvTicQwztt",
  "key26": "VzgSQWKpWvmTHkgni9eADWS5P7w4bHDhzEiLCKS1aUz1zaqzwcc8199YLg5UW6ANbWxU5AcTYSviTCcyAiBgBSW",
  "key27": "5Dp5bq9tECNCZ4xH6GgCecarKwPxrM2AyMhQY4oBxaQDQknsDyvv6E4bTk6s4mLQMiLoWab1Ek44w5Nm3wx74qkf",
  "key28": "4VMJeZE54QCM18CDME9fEjyBsxaqxUQfkEsynyz6o8XJMkKJCx7SwKnVVbfiKKDuhajgU121cZYEZcgRJckCYuhb",
  "key29": "337wXAmxCspnpp9e4rxzP1YPE57Pgp2gCDFJ7MLqRhFux3bpvVPtCMEhgCuwRi3gaknEV32sF63hwqpbcpmUw5UC",
  "key30": "5eBw5wT4aC4NGHkNiMkFthsuDEEhfcCTFxbvR2s6Vuv32bqzR8kW8K4mBainxZfBExeiWEZ1dPFD6RG3zaXQfSST",
  "key31": "2iRL4tF3fH5w2Tr2wSHMQcvfw1h3jTrHUiuLAP5jSW1NTpTfsQ8HJadtysJMvUouQTMena8v242X5RqoGYnW4iTC",
  "key32": "2qZHGXKjEyw3J4BMmbKiHRcPvkuN66HEt4YLn2L8UmSBUFDpM3ECYrr1yELX5gHecC8q9ND6onYbnb2QX4Fsxb41",
  "key33": "wVoc4z44ecBgSw7YGniqNWBWjbHv4V2UtToJy23UU7PmDs5oHdtN5A2DwT6877tu3Nc1WEvmbgpxfrBuMLayTGH",
  "key34": "8NfdyenuccFr89pumYqyNEEorg8minxTk3tupt4U2HDLZENCL8UbwFeiVMoRBscTxhsJtSW9y13W3Kt6eZ5hQ3S",
  "key35": "4NdLmwbmdLbY8WEY89Nvrj426YiJL55Ds5NVMWhKGQLkUX6PELoJ5qBbZYcrod9fSSs5FvqsKtqGSAmCGyeL43u7",
  "key36": "4VkuLhx6FYxnkC41BvSyiFA1nRDzQnRWCJoYAc73LoazkLGiR3d5ZHsBHcEESU6FNn6RPfB9iXgXtG3nddn6BRHY",
  "key37": "5Uyt6LXzhBWy5TQ6GMQ844mRoqDUDeCJ7qnCNAbXYKJPwwsJovERVxA2aQZssyXZKS4hGd9QaVgcqUufcbW11kfW",
  "key38": "3fE3LLFVzExTsFQCE1MWq2tV3kVcDSBkvD1dnq6tRbvKLYyXa2ucQMYjVuQRxLVbWqMinmtHuBLSvRvfnDj9Bjtb"
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
