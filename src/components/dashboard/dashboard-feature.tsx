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
    "PincXGj9fUdGyinXNA5crgC7prKnfaztdkYMRKrAsQu4EYQtx5f5H71uAh9Cd8MQzxnrovsdPiopBapcZkfqEMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVKWo9zbnr4WJv7y5JNncueAxDffHAVahEaaqcSHhrWc2cjwV32C8RHGoTf55Eo68wMPL7DL21bNg5JnLyUKmHG",
  "key1": "VG75CL5VHfLfoYXopaUgaufXZrpTPCfMUjdYLL79BV7t8rNAofmS8ZTdfNttX3JKJuH4un7nQ4ngN46Y8oUGxcj",
  "key2": "488egg5zGyk24ETP5T2T7ALuNvrcedQGy7pukC3LBY2tpjrhpf7pMkjEv8YcmtUUjh8DLiWxfUEdzwSkzN7ck5P9",
  "key3": "3XwSpZgkGVXooVoT9taSBAxKZJKcCDLRjegLoga7ETK4JYao525vqMtYDRgUwnm51L2wQCCsh4vMc6fD7qFt1Zo1",
  "key4": "KnYUX4Uwhh4pFozXZWbKmgYMHBN2JmCDuHYQLTVW8nuLWHVwmRqzLof7rM1229QhWLSYsJwsLj9eeLqqepcNXrU",
  "key5": "3D3rPB6cBeVMDXvK8PiBGaphMafttMpBsnmYMQoPSjTRD7zn9vuf1sB9JaJyK6vvfnuycJqNGd29k3rrjyoRFZkU",
  "key6": "EjaaurTNoK7NsHAap4bJuuRrrPisLq6efQiHEqieYC43av1GvVZhyXVwiSLmwKwtoCs9BVh3Pog7MaKis9YdUFN",
  "key7": "3AUc6gpNxFRarMVznk9h2S5Xd6Vk4UCkGRnMRK49zK2UEHz2dsEw9XVFDb1hCBygg8hM5i2MK9a9VQVnSW3Y6FzE",
  "key8": "NbX9scA1fiVHD13iebGxkih1FLBF7jZ9Yr73WWSNwfvTeEgbRfmXJhc45JcyUBWc4fddTjBtnGwbPDLQzerARYu",
  "key9": "2SzxsqEeoSCe4YLpJeaCMwMoeRyHTf7tRoYoKAtS4Bpg4HHo1XWbwayK5TF7gp2WoMxFc1mPhwrMwitH3ernrGFf",
  "key10": "2Z3XHqR4cERosQCNge1aS1c9K63JvnW4uGYXtkLmvKjJsW5GyVBVJv7Lv1Yt2Fm5ZEj1uFRjKmwzMdQ6p6PEFA1q",
  "key11": "27ZvFCWCBU3caKybwfo1UGjHuKf1pGgEf6ubm7FdkTobkudnpiLsVnXn8ZCkPs3CDoLfkyMBoTW3bmJLHMzDuPRd",
  "key12": "28hpdp6M1C7ZagdTkTn4edgGXjE3WfpzMZr9akMcLxK5f9cJsi5rudwQJSXx9RJK4uaMydsmXjhcTqKAReTt8Ncu",
  "key13": "3Ybt4xiJBbZYsxGEbHsBu3tkXVTbB4tbk3FJ8re51ZJ2D1bM9MuetCCFMDUatRz5sGFpfcoUhuVyFDh8dN5yMLM1",
  "key14": "4rkBqm6best9NjjX61GqoiTzDWfEjKia4HLxvpbKX7eU28ENCdv2PjDstWdgmPmrwv4HRSF7DSmmhp61ewt8Rnrj",
  "key15": "3jmjXHvcejVw1DxhqLE4ZyHtTqMJw55b7drfce4a3wAqvhgngXS4jacjM2oy3zuaPBoNi9XXaLg6bZNiGEJQmbaJ",
  "key16": "EKR8KB3ULfXJxj7VRnnkaekNUCLz1ve23uSQpap7dAakwTkHLxsCVtQMseNALDmyMrtH9SjtDH9zk6Euox2iYgr",
  "key17": "oY3B3SEKPErwAg6k8MZhzb5zyhcH8UNLTbKUGtdXCtoduHAeGTT6iWMJ3r7sCLGqfHimshW33ff3TW2NWK4fP6m",
  "key18": "3euNuxyfikpgSgk3Q9b7vC8g1nqPrHU4txpzM7iD7yHDmXefbr5dMPWcAqPp8TDEhrumPCLu8RPdm6Sr8FZVj9fU",
  "key19": "Ptsw9ddeDaKdp4zvy48RuerduoCWxGFJWGShnt48T57WPw6DxVg9a385CrwFoJ362PyNGFgBSAT8BS7t82rCTMJ",
  "key20": "2TA6VkkDBAwXd4R3FYVVU78kwVpfdvRG1HKJPCsCijEJ8UoZmdWrH6Qdy8qSKuCsmssTGY5yWUL72UUFkk5vdU4w",
  "key21": "5V99nuKqt1W56CafpCfVEscD2pwzmFb2DZXEN5qHigcPKcer5eTgguiQW9ak86aEgJdjCRwE1ypjyKdetwxjuzF1",
  "key22": "4g9X5hAKbUFW6HqV9Rf1sp4jt11whzCww1DwFKusCsdYKYpCYR3TMhPoRZzx3Rmhsvkg8RitP6FJiZchmW3WLqfA",
  "key23": "3MuaXBwfrG7665Yzrz6buJGdxcok5QXuXmG2pHTW8s3AdsDZnfmCBWL9CZtukmSde5nrKVLUF3Xw63AiWkVNuRGx",
  "key24": "3a5vZZzEwL8NoCT3WWQ3JRpcnhS9PjqiPLTAaM33puhA1CbYTymaY6akMcsaavXrSmM5ZKqs9TwH1RZs3bQP6ceD",
  "key25": "363N7sTycHEgckmTvyvusrQWFdN94CuiGKsDBYXzdXpgqVaitTWFdQ7TNpeMxnPvcZbT8X51XyNw5LfTzqgrSnYd",
  "key26": "2u4DhCebcoiygC1gBbutPGVRU7Sqb26ygnzT9S2YAP2uiRKBQU2rEKABygbDEKS3LTMhMg1rAWTjAVZ2CSaS3X9z",
  "key27": "2ZNZebXic665ZBZH5em2B77BHpDyS5t2STNEBoWVo39ijbD8AHhUhEgpRAZLtMbwsdngEujjmfdEpbeEZc2eQjem",
  "key28": "4AyXCFFjRGk6ZSygZXZ6zPqx5N8v37fSUkDKezka3fdVkLf3A3Tqe1wPvRAwwCUYjDtVVZy31PaiwR3NdJmLTVK1",
  "key29": "2VRsS7ZSf68v91EbNcGtBGiyGeAKqZNd5LWjhb8Dte9FzobCBVRvgC6FTAoApyagdv3S7nXMUk3SYG8iRiTbaDFc",
  "key30": "3NDaZmECCRN4J6GArWz9KWPeq3XijuNzi6EYeurxYAmD4neu1JfymFpXbGJkUCHXKnvxunKV3MzBKetJBMo9SyYf",
  "key31": "yM3vmyyFBab9dgbW27PLHm9PGfVMmShgxRj37GWGN2Lcfz4sK2prjiP357mMz8cfbcDGQthRZnRD11CWWuvHBQc",
  "key32": "KAovqrt5G4BqFpkb14Z4MwBxxMddTSu5nsDHQZs74JQy7DtQvWbPkM48N87YpHwfwJxGzTEHR9oNvqcNBtM4can",
  "key33": "5ac8g2w6bwHvMCGx3aidDs75qvDTysPwUS8AFagtYASzEPwX1sJzGSeX4woCCx5SiPHtjgxGoPhYpwKczziduouk",
  "key34": "3RYpVQ57veEn8SZQMjGPZR9C1doJbE4mgNrWWxwtf3KwhUrNve1Yf2WpxLL1qn3bqGgVWMKLwYDjemkKhz7LUUii",
  "key35": "4kWBMLCHLwG8nuChGaurZhvCF2BQDjrkxTZJ6ErKJuM4fmk6nc5g47zZMYtSjJKJ8iXPNyKr86kGjkH5tTJAuBzr",
  "key36": "5KxAq1v3qbjmG3vFGYgQGzeVDQcyQqaAyY17xDra1Eg5JFTK6TjFUm1NEwgtcooZsXqShUoyDJAhhZnBVPzJttdP",
  "key37": "2eXZMNzdEvikUwL55GXEH1DA3Sehc413FAoLjj4xjTwoumHbEec6WpTujDu34c6rRSdd3HdmLZivdWajxmphoZaG",
  "key38": "4Nojyy7k48CHfmphUJpsDnkpG54mC1S88RXGyKhV4B7wJH4vx6e5VjhDWvQxn2PDVzcYMXCF6kSiwZrsogR8gV57",
  "key39": "5emVn3vjAc9hLYCMZPiV4azrnzqpUg1JnUz3h38vjmmURwBTtnY2geqyHqZ47Lyd7BxwyRvERALLH5afRWRzowqW",
  "key40": "4sXgpUunsbNcwnV4vCRSWYhsC5rgZsH7nHXptxfJ7UWywugTtBRZPDKqxGBGjTfm3tZxeHrNoCzvad3wPcHt7Koh",
  "key41": "4pt6yxmktCrSqtcz77vuB2Yjsvyg7m12fi7UZ66q26fQbAk8vEnzwBEDGCVMhr7BRpJ6TCu373nYzM3tcFc2s3fk",
  "key42": "4mmb92ydYqnV9LmiaXhFvFtnUqKtxhgKYfQfXW4jBjLpeZUWvPkm4GhFfsfQ2LjhZwQtkW9W26mFsEPRAEBn7CaN",
  "key43": "5C7EhBKBQ7ygmwXzyYjb3jz8ygg2nDD1sr2kmBQwt3TJmdvWnecenAHAHxiheZ8JucTTM6tr4PvFBx7jQq3Xxs1d",
  "key44": "2sTUzAvW2ymT62mVpNVjHXfXPs1H7bkYnkCN43r4k3rB7dbGYUbK1Uwa2mtFNLv8h61c33rz3Yc8ey61URCUH8pF",
  "key45": "4PWcAxwX2ddkY6QhU3E52ShQrSVLJjAeeg52tymPRAeyHqwmv3jg6mkXXwCqcZd3zqhjKy1jnPDzR5E7JRRWL7kh",
  "key46": "HwTVVKwuuVaMUcPnmVzUxcUnoYKdMLr83wDQYBdUHP6Vp95bqTseEsYx9rUXZpCA9ewH1fiYqmB6CVMpy9XAt7X"
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
