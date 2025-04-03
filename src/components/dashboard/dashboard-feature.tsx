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
    "TWiWk8hV9nV6hb4zGzu6LyX7ZihndfksZHuU1amhZ18zvzkj5namauAW17tVbgpP5v4s4s5MWDr8imM5CpG78nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKSS9jKstbD4tfH7zZBboxamkKrNH6mT9UKHcdVEtXbCsftfMfTihZWgF85Bp3VfXcDVX2Kpw4RCHCz2GFEFRCQ",
  "key1": "4vNcbcB7gu14Gc1tH9VTz5sFMpRruKdruG19GdpFq9C8PE1bW69ayw7pMFLieKVy3JRv3ubWTqyEnJkmjjYDzNpx",
  "key2": "3v2nJiNsrJ7oEbuJxxkzyXT5V6AJSH8MMWQRECBaAxoxqGE56Jyvg4frLoPqdQskFW9Xib4eCF58fnDbxgG2fH9d",
  "key3": "3GJctNUfrfCX2BUNibuzpF7bzd5caBKeeAtd3DzcAA5BL2UeDspqsM9NLnYy6wSy8MxAPFmUiC5KF48FbnwpJEFs",
  "key4": "57JnsXHXGbrP7xcH62U6vED5L5u3ae1s512UBVPTXTFgZFW56tcP4sNVRHP9HV7GpCZf4p8GnkxHptvwoByeHmS8",
  "key5": "5x9Dg7cqXbkP6fv6iZehELshc1XSEYB4Uhic7aFWGHUZAPzRjuju8fNoKBRiK9Z5CUfDMx2UN7R7kx9AHLtspUUJ",
  "key6": "4FG2TZZKqAnCybX6D7niGRef8h8YSAtXHtJPxQ12D5ygqYhs5gTx1FCWKkPEgbz5yuBshrYqPrvHanQykqmpKvzB",
  "key7": "PFMTKF4YA9MorFhkQ9GaYt5pLS8ZEGs3U8gMBGnVwrdmygWyv9JyJ1Uvgq7hzqDTGqL1jvaYBhMYHe1uFfDD3bt",
  "key8": "gy27mkBmkHq5WErUFb4ypDvNRAAbDBxTY18PmnT7bSATTyZifdMXKN779zoeP7UpG2kvQ8z3i9tN55Mm5jSFuPB",
  "key9": "2oAMTCmtKn4RoHgucppMDLvCuU24vZJLUk6nFFVaGimxBHL85GK7wfaTnZW5Zsa6RQwkUHrjVk38gUUtcxoxYMA9",
  "key10": "65wL9jH6dWjQaZDkD9CZg4XQs941p8Hbae4Mrjk9yzw8Wdz5wo2Cvnpztca51FZYxwJtzoqUKeEo7dEvBh3XGWAJ",
  "key11": "4kVJy4UpytHDQxjpZ5RN3DLoftUhVwHLPvMHqCZe2pm8hsiTeQKqrS4g9NogsGwDx9u2zU7hpzcCsTMYcVcAcRGm",
  "key12": "2MpCTbYKiMBo4jyH2WbN7AxyUenUZexuK3jj4wgjW4PpH3wDCH3d8JJqQrZ53CkTRHJJovP77HBh5iFdmLEj7Dqd",
  "key13": "2VV6jyhmCNmgh25XN1vCywEFENwdAtobYDUtjVqMsXAy6gwA6v1jNm1xX6exaLZfsckxsGU3E6dbX5vRKa21sn5d",
  "key14": "5hDMTbjwmAigFAAqwNdFY7PfhWd2ShiM2PiG3xL6ChaXArG1bdE42oDwqqVu7SEQzo11eP3rf7L9JP8Cs9ufo1N2",
  "key15": "54mZtfq7eftYprLsrGxFD8jXNzs3UxgoiGpx6sZ6TBQXrarVRn4PWVMGE16pU9a9JXC84r2fHabEKFTZvkUu6Zmj",
  "key16": "4d4JZNg5AbGTcfLEnkcRRmWFxnirNsNoaYUbKV7P2rcFS24dKQS6wm8mmWj2S5aXeb48mNUm3XYXCPTLQgqcBPbo",
  "key17": "3x3QZ1qg4EmCviLN7My4oD9PDEZzQJfGSSVmva7FhXM1oDqQdaVWu2fYVQJMVzp8iRL27JcnPsc4Xt1HtXZZ5sTj",
  "key18": "3oJkUVRWXwqpG4DdZLFkUsL7xgBeyNpEWqmSzVPoaK2mPfZws4KDWqsY4KXFXWRERKfs15XMtAVuEHxC4Fgnzh5J",
  "key19": "2sCKJydFrD4dKwXjkCxdLQTUAc3XrM9ZABokzWZrjzJweMztmwk9oVMHcq6a2LbY4stCUztV9wZdU81qNo4BUvpe",
  "key20": "2uRKTHsCPKCZGPrjn1mgWp6E6pnBL4m93GEsqEmq7avym9jBwMcjHyDVc4t3PBsk5sfLUmTNQTnED3Q14AankU2t",
  "key21": "2pbEQQFdJvoLv6A1EPcNZabS8kQzviWDRBxPivFidUyLE4ZihZhNHD5LoD3Roe64MzDfKLTxabqktts61FHYwjkS",
  "key22": "5FxqpVT8QvNDxrHjchjxUddSbmYM77HNCYzzKa33spSb3M4gnmW8XpSVGgpMj7tmUCM2eo9MxBC9EaxqqKkMgBRF",
  "key23": "5gtXAPwu8PhkURSSFh4QHjs3bjifWhtMFr4CNyckixzPXq29iMoGJGV58k3reRqu52YS5iXewbDNYuUvUDmXruU6",
  "key24": "3RiUE4CtJ2p8TGoDaFwoSAfJDr7kiThQokDjJoUCK5MxnzJby2X3fpTprptFLCCSt2ZbHna7gVE7t2traGjUGyxf",
  "key25": "67Shi1dFyu9E6rn5HauxpsKHpHBGyVamuJsY1KL1KH4wKWNgavH9N6jEHePmt9CNLmLcZ5HP9V4R6JR8i5FLXha7",
  "key26": "5WXC7c82gQ6YJYGNLPMyN2rSusyPAMzryDj6ChZCr12omE1MHFSosZqzQfAagjziwoHtLRTDMVaHjepGyuVkW9p",
  "key27": "2u4xZPbh8hjU2p6FR4FiA9bgk4ZsnKvNVPpDjecjJyMQUEsiKV26haYKgspnUmocLaxK3RJbzW6RskjPjyV1xuff",
  "key28": "3iAvm7JTVng9RqazWCTMssjaVHeciEVHFJYGPHATbwLu1ctDP9Qjet1yZtWw2CiPHjb74i8HRhiTNeRTqv51qPyQ",
  "key29": "5NXAkwUAcpHXfDBjJmmbvEnkJiN7zxyRZcBsuWntLPcaxXBYaPfqe2XwJWCFJz4B37S6xH8DH21icjPFUT2Wdd9J",
  "key30": "3rrX8tJBYHeK6MAZ8GJMMSMyZiwFq4TUcfR4WpvxT4m6sz2LGdoEKbMdAYJYAfhLiAFBFgEqdeFkXFUNDFPNnPeZ",
  "key31": "4DUFdj6E2u9EmGF7bnTZGgPhqiWs6v6uHXf4obQHpnspsHfQNLbqBBXYTsjGhnxyhBaBKy2Spoqx22pfW4SYEZem",
  "key32": "3DAqqpQ9kECHqSyMw1AsvPfCPRJPkXkZE4rUys7tw7J4CjT5RQgvoE45RCFEPYAzyyAL8Nx6NAzRCGaany4vGKfZ",
  "key33": "4ZCmDu5UsUmSPsFNB6eVK4ArkasbrYeTkaZhW6duvwZLNEmi4pccwTR5ZEMajXkT2ApaqkHA8ZaPxAgLssiumo1f",
  "key34": "5FHdxPcM3pMJBi9exCc1vzPqgDkNKJVeuLiiz7NZ6aWzj24WHwzGguKyJ4nHSfhQtcor2UPWPjNReeiN4x6gamnX",
  "key35": "4AzUkRxik6GWqgzwLP435JYZKND3mZecnkDc47yCSG5xDiDLMTzxBuyun9YWy8oWpFmb9StiLxP63AzAFtRkHQPC",
  "key36": "3rYd2ni6NtGKCMcnioRK4y3bzDQFGZoZiKd5MMXDPTdUHEcvjsC72WDJPR8MMP3z5Tvhxdx7KBJdPKPVpESEgYT5"
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
