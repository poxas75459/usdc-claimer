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
    "3DKku7Xgub4J7TJ6mZDxCSSTvZ9recKYU3rnrohF2zU695Vb2GYjM9hF6hknqQ2hP3HQckMDDu3yToAnEBhe2rrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VLZhdGhDokh4oMYYhu5uo4cXGRWN6wsUvyZv3igR6NG7uhp7bDgebDNEpqQtmfkRS2zPRnvBRSpivwNR8GiCJR9",
  "key1": "3GQKqmkSDiFcUsQAhHWJJapoNerEijuJ2bm6HjpyazCBpanpC16h48eK9ryR9aTK1c1yndffJnvUnbZE2CFuFUwF",
  "key2": "5g2qTGQPAPJvNQC4ka2zyuCw6NtGuiQiEa8SHwKv6h4NegpigSYsSxSpgcueomZe9RLPQL2ZxfXSzGeq7Txtnmgz",
  "key3": "2w9tDLGX8NC48eSTUscVK6k6tASJSUeocuSe9X2UC1nvAq6hDN5J3A8VaRKWbUNzyW8h8pxvkXFhfpn3RcVA7Gc2",
  "key4": "5eYA21kdPktwfzxUoo8PY1Zigfq3bi2RQGWb7Ub7NpH3Gbom4UtH4zsNpo55Zjg2gWfAGi9wXRsecsVoERCQVAyo",
  "key5": "5UAo9H7GLaJSNf37Um2958BmZEcBGCFx9ZYqN2d8PeNR5ZhQ98ERPSSeHfDqEiLM7XHAqzWU6aEeq4yBb3FCsm8D",
  "key6": "5rmrUjbTprPnGBc77HFSsQuVEanWSw3GQpPTD1yP2BQwvZ7iX8QtAgu8gdM5Br4viT3vmmSopjzJf6m3x1tUzvDk",
  "key7": "5FqdZqEkoRGxrLaJacoksLjpHPHfxMeayyW2RFgGVySYrG2beK5ucEACiv1c7yrS6g11RAw1HL1p5KjW68fQxQKX",
  "key8": "2PFfmwEEzAvGDy7Y6EaR2M9CemvXqiVXKsuP33xPMkj73w37VPCncpH7rYCYW6RhHwj357VjGAcLsZyvq4PvaZYG",
  "key9": "39QLmdd8GxvJi8cvorogrUn5UbYnqVUBjX6fSfu364Zt6QYX3okffreXnRKCL7wqXZeD1TTV9RtmMes55DEenuhL",
  "key10": "4CzJ7epargNgjVnSJqjQnwj2C5PHsUyp1XyYEapEdveZqxR4WECHGwxadCx6AHA1fiz3SV2y1FKA3WR5ZiurKRHM",
  "key11": "3zAhdwoaeWLWjpnWghpV6kHTpD2CaquKv8CiuLj8wXxkGd2Fv2tbmLfGbbNGLrFueDc4Y6jdepdtqQFBWgsBJWfB",
  "key12": "235kfqiD7zFjVTaAjwHkDACU2ZYrMXNZDBPy9CY4zqBSorZMn2YYsoJaiM6jnwqyjVG6L8PHqCQnAgRiFWNpZ5ZG",
  "key13": "4VEAKChRdVQoDy7j7YeCtuzEh5JWsUXDSjvTiRrUL58RADvThqMHeWurPrd47Ag5iijBDVH8zBQ6mQiPkysDeUYz",
  "key14": "UKS9xXdev5V6oEFCVNnXPGCxsTy5QD9eRtRq5v6QeyMmXYMMck2Wgj6gm5ieG6jXqyDDDmduPVFUEbDsXk6YKM6",
  "key15": "3jkr3aKEkvUpQQEzeUNeTtuJgE4wGA7RMpPHKxvA3zk5ogFunXo3YJ7WLZJFPYufXkXHi78kGmSFDvgKUXUPuy3b",
  "key16": "3Kkx3r5hqbKWecPmcpc1pebpXq3jD8ZkrhVpKbxSro5Ag5HYvsRrnS3opZGidrJMPiCobzgFVw8mpSn4bbYcnzH7",
  "key17": "2Heti7q8EryZ23xNu4CLr9v9mN7SKMXY9Mrwko5TdrUmGm9Hwk27MKTUtS9c1gHRJjMrB3NL5j2AyN2q59XnEyzE",
  "key18": "4jcTcQpQq2mnhtHfnreNLEA5Mb4XkFbg3LifD2jbzLCL3GbsaUmtCXXuidZ7TpifoTkCDtDjt8wQuwzpxXW3gCn5",
  "key19": "3rnnHSyTLSuwNrEFzAVyR5f2tG2h8rj7SZgFgL9Faq1Dcx7gkhyv8HuZfTzKDbNmHjLVKjpQ9F5KZAfVdrJvPCJ1",
  "key20": "3EXkToqVWj44ffWMhYUQAjxnT9uL1ogP99gHMVkyKc4Ko41uKoeJHZuQWpjVrfAwYiVYp7cGPWywEmqce2w1TS2E",
  "key21": "55Bxw6rFfcTpaS3zuRtoMbc3LPJk5WPcBBMEK2VQfKAtNb7fP48Vjy31KyFTPGdN5S9C1vWjzB4CaPxbqF984fu",
  "key22": "415bJqH5qXdzLbeEPBM6p66zcBFm3MuAtE1JYi6gd8VKNFkBbg1civH1LAKGzLskYwC8LiQ1VZQn8fRq38uJWUhW",
  "key23": "4zqfLXYWCciJDW8MXCqokSC5vt1ZmRgdYtxqqkRXwnN1FHV4JU6azThJALi1hCLR4NnRNywRAzT3RU8xH8mdjXY1",
  "key24": "63ir3zkLMH9ZJoHVzr3XateygQfT53vTsiviXNv9WQYUwxZfoHJwVp41cKKXMY5mHmkng2v6x5TZie6kCHyifjud",
  "key25": "4BBBoVNzuPdVK7zXEm6qWUfgAA9QBMLCWX82HCDzfVQNHtf4uVFnipqsqzHmXZ2yH2zdcCAs1cbgs5wPhSXhtKTt",
  "key26": "5RWQAvchYDoUXW78yz3he3sHpsA9N342BDVKByDjPxQCaUjVZ5izY8i8hunpYykskEAFbagrVB1cawCLmQ8M9aMj",
  "key27": "QUkw9iRu1BzN2Dg4X3A7bzDfhoWrwb3f41oJMDdGD1AZwRqfcVPBFyHVGdwg4LBZPSdVd3NxbdwuZMjGMqUpVLj",
  "key28": "26tXSb6Q2Ti68SoEAULywqim75cikKaoHo5NjodWDQdcWUzmScjmgv6WvC1Nbjuz7hbp7v86Se4kLni8iWd8AF7e",
  "key29": "49h6EEN6voRWCU2w6LKiowZfp66jyuRZ74oh17LssTtgZGsmeHh4ME6JyWk3dagf5DEWR9XdMfVdvPSTYJKr7TGE",
  "key30": "4aXjSD8EyT6SmcQNyioyzCckWBzTKhMFB8iDs44eEiHM3Dr3gQ6DshBoNqcKgvnHSrLekYVkLSH4Y8QzY8kBiuEQ",
  "key31": "25zQxyLSD3uuGBQfmF2bS5zLexjnmdxkpdkZyxUSJrohr8zS35G8TDJSQzFJ7NT4e2ftmpwpk3ogiTT9hTM5DMwZ",
  "key32": "groqvrn431971qLEqnUG7uyVuJCFQza5XnHFALbm25xvV8V1qjomRXR2C69WuzBGuDqwFfCdpZZMthFj4LoQon1",
  "key33": "5jFk2x2hShJ4kTfn2SHLzxy9MaR54uQzYFtLWixRuzAE1Z9aH19KEUS5DntFSGY6QuKpYjP5aoTkDCeGh9QEqzeN",
  "key34": "2JM8vaBtbPa3k1sHwFBgnzn1jVtQzDPSV7Pzyoe4njsFcDTFvcrLQWcB3ciL15YavM7fCN72oarRC3Zr2cP8xw68",
  "key35": "2LEFFsXnuSR8Ufw9PRaxV1aaqJLgX76Fp4sMYRQouPJrJDQP3QEWwG5LniCx2HaghawZAjtN2e5pymzS9AwaanoV",
  "key36": "5WbU6nAYnBZTdCbgihbLfttWszibcmoNWF4amQ6kQadnoKZofSQK4TtPmdbX3Lwg1GrvxBZb5RMR65NEKmzFDSMD",
  "key37": "43ukae2tTxWKcBhR8AiRNrQTMs9PqzZrAuLsynZkMM4Ceec9mnX1zRjLDu1MTZZx5yqsxq3tNWDhmP3f6Erx2ew4",
  "key38": "25EugaQbB5jbeXHH7UGDh3GygfndAgJPv5YyFJcjYkcSJcuFnrrDVht4hubZYKa73yRbRHpQuG2hxRjchFqjQjkj",
  "key39": "4QFd63XdGLCHMgEajM3kPUAFkQqujtYNETjDc3HQodyfTzL12fKGKx2MVTyptLD67zKLQgTWnVkoWK6QfqmxAGLH",
  "key40": "5huDmpSZdkWvha9kdk7d1gRzhfExshLLixS4x5CNz6WBTc1FtSHjSZ6gVC1XPPwfxCc8DoV28YgqUwmcXuvsPMo9",
  "key41": "3c3uaFRCm6JfHHBB8ZMCcVVj6VaAF2qbmjDsWC1Nbx5TDu3uqZ5e8THF5aZ8YiuTrB4iAXcotK7M1XuLtFaU7NpF"
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
