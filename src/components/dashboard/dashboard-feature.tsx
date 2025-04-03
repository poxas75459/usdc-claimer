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
    "3owxiUmiiu1gXVmnBhsboowTpLwHnuuq11Jrk24w6yR1pMCBJDJL5TL9PtDB81u2bNX6LPu528Jc6Qj8f2rpeVq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ERp6LiyqFubp1CKB4MDWMo9rbpoVNLrqPpXx8xwz5qrAW6u2ovcK3BbSn7EqxBTqx4Sia2U9AB8FZpCCUmKsRfx",
  "key1": "4PEbMxhb71wfYXALiGet6ELCr8vEcgVgZpWN9fYVF5j4SgHukQza5uagQ9zvMrrip9JrP1xR9QVnvo3iS3nh6d27",
  "key2": "qgsFCTYDURTGuiZeu9qm2LWV3sWk3G5mqm8B9sK61xCAsazFtbC9Trdrz2qs1FrVvydJHfyB6kRc6urHAqEDZkG",
  "key3": "eR2LAPAWh6bKb3fTJ2KwPpmp4DTfar1YFYQqQwvHaAxFbAbBvoLkLdoPXS87BfaVn9KFzBx2DbHsSUUHaebRDbW",
  "key4": "4XkCVAHRhQLJF6GEPer1xaCimjF4XM4woEofscPrFo5fiNjmVYhy4TAq5vg7oikpWhzoVUTEAHcxbBTpf2BG2NL4",
  "key5": "TyxUyiCBcrJiP1HVAbgenK7oAJgLE6YbcLB5FSRBbGmtjtDCEKn683bWq2PuHjk5gARLb7HAeKVNzm7epdWi5Mq",
  "key6": "2oyYiw6BYExGinAXfgcGj4TEee947SrFn3TPsKajQmfh9mu5ZP5vdigYmXrrmPvBB7A59StpNt4T8LsfbbKWwCFh",
  "key7": "5zuwSkVLS57fhupHdpJYRs4QD9n2fEJBjMRco6rKN2GMZjmjyrHcWuWcqCQMour13gqeMW9mqi3nrH7U2sWewwdF",
  "key8": "BR2zke8YQpR476ZLzW44JRvez4Qn9PQBtyR9PUuk667xAvLSq5bv7pQcgrQyn6mRMxgJfUPjkTBjvjo76UCkZcN",
  "key9": "LaLLjs7JuMuVcTphXk4BDKfnqDfnEVcqNfHQLkaEq8vrS4oKyTjUeaCXnbS1jawCp6SyejRwNUhg8yvHNqMD2VT",
  "key10": "YqMGtNCufurbDaA9HWXKzTWKpWpntwF7z6A7S49QYsDMwbkvFeqDdYT88j415MQQKrNCQBa2zi9y8pen4up9R67",
  "key11": "33GyUsTZGfFczYa237LtRHnDiWfzKUKUpxgptZC5RbhdzaivjD88GmZdZWTBqHkWvceefzXL9MeUjS7UfWGZj3TM",
  "key12": "3KVa3qkiBb2i4ZDjahzrovygBDTbNmcwxDxGq8yRw827apumi5GiKZUquBnsmhj8nzFbfcZBGYn77dkQAsqeBuho",
  "key13": "5fcn48prQ83YkLhQxXGaW7u1v5VYdjC3C2QP992wrz6yTNJwFDB34oj1RxcKh4zXo3hzK1Gd2tYJpKyBXJCnZdr1",
  "key14": "45ey4NFgr4F6vsjbpk3q7hyu9Md36R47eAXeCX82jQ4CjJFj9fcEV1MSz28FXzCPFA4XANosApF3wYeGtbsE4u81",
  "key15": "NuoPv8EJKgEtArV3cwquYLiU5nHrHSsLQHTNuzzEheUXT9iQSuH1EAWWLoPXzqCqAQxHGhvtxw3wMYzfc7LUL88",
  "key16": "2DTMjMh5Ws1vvLZ61gBEVXTcsJgasjfdsfUTmHKtSuWHX7ud3tJLhGvEizEu2fBnbsr1JHZJjVaGQq6QeJbPbh7c",
  "key17": "2D7fBRzVxq4i61XpeLRQ49F1HJmAoCxHzSDbykQCzbf8UuURUAvp5Usg9zP12eXDJ2yY9HimGKZQwwQAkMfDtBX8",
  "key18": "4KMAqZoztTm8hDXh4RmiXLzupSYPjiGRccxs8kkjss5teiscvqGgW7FnCrAHky3abwsyWRUNAEPRZg3ijfugjZ7J",
  "key19": "2Qpydh8CEeRPvaKDKJexkZMJsZUoRMnZvLqaFfiJzhkc22h9PE6ai2RSbbdotwgmBSK9qdxcLAofi3R6cpqu1Np",
  "key20": "29UQPnNAmUGqgBhjVJNxrJdmxsAcupZrv3YvNxiEbVfKm5npTWeeKKLgeELcizfEbkkTw23R3anwxK3fjXwumy3M",
  "key21": "5dexVQEBJqUKArNroqoLV3ssyRtCzr9uE9YaBzdztaGXNeuAFLxW68uUvrq9HJT2rWCgGbZKVHEXyo4z9Rrug9fW",
  "key22": "2KbfG8j66QM4iigtHZjwmBRv8NStJQXqg9FkEYXvfMbnAm5ZnHPEMY5qajgabnoKH65cAL15FCHd6wQHXQUMtogZ",
  "key23": "5Yjz3TYLH2YWYsfgsT7zvxVmezADZg8JRqyKxdVGiSYHaFSoLMr2q2G56e4vC95a1RokLRjCXiK8E4VK1kMfTPRH",
  "key24": "dAwUD8MKX6Tkc1GGefM4oHg2htFquMAHtpe2usWFB2LmZGyQFsiaKQAFpvMFK4e37g342DDAtDXZSBKmPssKoUR",
  "key25": "4ebUHWCaaeCSgej1ZUAz5GyHomNVcKiFsDdLhhbWa6zBsGBPYpcJSex968LxaW728EWqpJRoE4szCXgBXJpPx5nK",
  "key26": "2QJBmakGtmF4VxcNo5heZV56Kbp4JxU729DPc8ARjaiEjTuxYM8eRjbpCZigEqpR4du4LEAsD1pAgPz16HKFH5cU",
  "key27": "5cY1YH1XSxQC53wYDiEqeKwa7jaYZYj7wsAmdeK85prfsQSrfVFCkxWgFsaz1MWruKdouAApRv9bWMZuF1aoKyk8",
  "key28": "4V1WisNAumfJ1N56E3XpjQhLnPHnFBDeUif16qhySRnCQN8CKJgGGNHaepHKWmmceaGdq8cSyHQypY1RFdi1H5Zw",
  "key29": "2EKrHM8ES9n7DkWn1ohDhs6tr5LKGLwNm9RDaKKz2McWTkfGRnJ2hwUV1Fbj92ukmqJpWY1FVt1JkKv9JrSYj3Pr",
  "key30": "5fy4BVW84aeKq5KP3dXzXTM9hhFccz9sfzph89ZpzCf1xJPhNF3HMhqbE4DHpGhkr6B924dhjxNikFe81SnP7gSr",
  "key31": "MtRqsy5ir3wDUfZn38mPpP3jKF77x1bJ3uGYb9LxYQDdDGU6ZezyqyjbzjQBYx113w5HYZhJTBNdGyztKZs78T2",
  "key32": "V45gbSuuoQnmHqtohx3omFHa5s9Uf6baaAfaQaLyqe8VjhbKw9QLaVjvqcPfbJFRrL5QZyUaBT1BWWW36jbXZZS",
  "key33": "2im6pJj9UgP9d5S3m8U4Fe5zDBHYnMCuXa8iogcAcBzuoF2YsKCqxTpaKXRqf395bfXWQJ6ahw6mnrc8Be2WcGAd",
  "key34": "2Mhwm1XjZ5ezkicLvWSZxCcjFE5bCR4njR9F3uarwotnBXqAKgjRRf4Q9bsKeCZuFCQaFs25s5P9RSJRwKqC91AN",
  "key35": "TZdqP7NDbmbxUR8dKMpYErVVLyy7bG4YpqaRFHb1oU32ThHCCR6diemBtHHStDQimKmJybHPgXZmx9ecN5Fcsn5",
  "key36": "4F9H2M5mSPHYxa2e7S1msVphiUhyLTR2hmqi7mBEghQq8Likfa7RUAxQhWdMXbixUB6yq3yDjB3Uy3V8aM3SjHzg",
  "key37": "hMERHjWmsGG1G3Gsy1s9iRZWs3LAPChMkJR2dXRDJzCnYniwas4BLMBnWUtJLWaEHqVCzudhu2ouvxJSVWiKCy4",
  "key38": "41718NTcR2U8eGkJxnkV1HpJhECLChHiQeKph54urEaxYcjavF5U6QnRmAronYUtKHDgJfNpfis5XEqFZbphqhye",
  "key39": "5JFLeasGiGgdsqwwXUYTR8wCqPmM3BV2CejaBhKnjWM43dGzgw7389daVynfLMShNVnhWGdxsUSXDPS8hRujn8Qi",
  "key40": "4CGUh5ED24UrGXsKre2j4536vKiqLJku38fM3Gwc3jCJa7gTdSXy1MpDjQ4HQJiRAdG4uDiTYV4ZQig45bDNtvtC",
  "key41": "2qN1noSWkEDfHYorHhsgD6LXKNzvyVHSucTkJVS5oQDWy6iAGd2MW8LxseCegzpx8XqCpKkq59hToXLoTHCxw5mC"
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
