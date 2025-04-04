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
    "5CBaB92gTZKvRzxXp2GcyzKL6Go2Rz2S3QgETHdAQsfxtmjqyeRbLgqyaEkDYDpU7gk14N4xbf6spic1X3U7QJ94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgcsWAw4zAv1FvfYGbyw7ryyiUv3FE4vtdcSgFmXwnpEYSpxnW2Xh8vMjzYhp2w8U9MNqa34vhcJ1kxB4Ers99t",
  "key1": "AiQo7RtsFHpSfJeN9bz9MqY553NGrLeQYdL8L8TsMemy67dupbjd8R3DTEg3qm3KeCc2GyrKVnGXfNSzMeyD7nE",
  "key2": "4GUJYGEAwP74kxdQErBy3JUVum2Q2uD7Kowd1UfxJpkW6T1uwvs6arKZ3KRxkmHHLFcbB3kQeVRJNX5WgAozC45n",
  "key3": "3dhgLSKSHW6Y6zm7v96BaMHJZybAbuUPDY2EkjGF2hXekjBnkMmV4myzYTy12YdWKtSoCHnmkrArnghS9cxcJBfd",
  "key4": "2BfTsrrhtzWUo5UAZeQhKAQpgdSsEDUYRQFAQo198fgEWxatBuzjtgkiAhJwhtwqYj5efgL9ee3YjhPJL4Ppw5dn",
  "key5": "2ZqB4NQ9QNWA71jZBhyJ7BCkpUjQb8oSUyMNkJjpTtGwMgq3Btmmee4ENdSsEARKkgNg2fySx9q3aaLbSfCk9XF9",
  "key6": "27DQh9X4SvMXkZax8CkZTdAuzSdvU3aRZxTtxzUXomXCBeFsL7fghXSHbt4LyjWXpDH4tbHKWdXx62eHocwWB12V",
  "key7": "2ZkATWPcAtPgLA89nPmKJZ9rfXWmWKMR7w69uRqWehWQkxHVwZCEixWQt4LLCz1x49v1H2WrtWdquXvXnA1TKfyC",
  "key8": "RpKPU1iSraXefGz96dPEgWqWorg3NoRj1gTi8hFazsHg2Pm1tpCbxseoninZzBgsbbVyADP117p1pdy3sTGC3fb",
  "key9": "2bnfwv5ffQ5Qutvd9R2kVXVPc8c5q4rgpg7K56fxQfL7SPtcH1HgNzC66JVaUvkxXaX27Qb5gBHybii2WwwhW9VQ",
  "key10": "4b9Sjwboc8ww5RRdWtx6sVyUVegUJzvHNFx5cTYEogYhoSegM55sq1UvpDdFazHvazuWJCkCn92qXH1fvNMEyQ5v",
  "key11": "4ihZTPmb8Ut5VvgXzg1Wo1YHsZsXmtiBig4duXTmryUzBjSZ1FosCLaAxmpj5EqYZpoV1sTAcG8TDSgSNfcrevRS",
  "key12": "5J5bBcVorcSRoiRXWyGZm29wfJLdTSwyyxH5Y7StEBtGXHZp7XsYMYpbb65yrZnRRxogqm5RPUoGjzrhnQSruzg3",
  "key13": "Pq9YwRcjk4PvVky7pdjFd2BmS28uBGLVXbrDAjUF1EsDF1DQLCeCuofqm9swinyvXpGTeHUMk68UJT7h9gM7rMF",
  "key14": "5UTGd8EiLfdwbKtaviEe8xFisrphgz6rneu53T1Q22q25cTxrXj4rFptk3L37njvf69euUaMJtv81gRfRhiLoW2L",
  "key15": "5JLcvjrP8FbXQpckU9QzYmUhBUzCbGKp5npW8KCnoGWFuDdmAfi7rkeDKZega6BRJUp95jEZA9exrRqojMvq1tVS",
  "key16": "2pHm2u88efLzNw4JviLaPhnTxFqgBxKQxAJU3yzfXjqGTkJAqeadC3EJBZubV8qtJTgF5MSx89m5sLc4rqPzooTf",
  "key17": "i7ckiHi4f9QPr5QyeHL8Y48JyHFkz76T3wjLbk4tRC2SXganvya5Fe4GiNJacHLspqTQofVJgwfqtFqMdLa3vEU",
  "key18": "3F21DzZrizTGrSHi95bRyP8WwrZH5XXitBR3pdzcN5EYPfbtzgAFvqpi4FrE39yczXV4VXb2Ssjm8zNcbefer75T",
  "key19": "2WFfXLV2odZP5BWooLR128j6yKfZjkQCE1L82Safr5Nig7qb6CiJEbad2b5HLHCkjraWnSkngDySo1xJe5Aup35f",
  "key20": "65nHXKk8RFFKSU2ghJwVWZgMvQGv5c4yXPksQwdv7sD8achAALN3i8GT2RxJVcQaCWxgPTdJMn3gU9BpmEtcPpCG",
  "key21": "3tD1Y2HJQ8yzUCoiW1WwkHubbJRUF3goXvggX33a3FdiyQqZNJURUYUUJ5v8ubb1CYLz3CDZj8u5jikz8g5pNChX",
  "key22": "V2hfqnuwczRs4vT9tZ6CVZtiWS8STaS4yAqyDy8rbJW5MZ1pBKTz6ttS5VsFBovrbEzPkh4Jmot31nnzT1mUHpB",
  "key23": "3eLjbB4pD7jZMpfKo6yhTMnmVC6n2hCD2zZHTmDysrTkyaKdvKhKDcHzCKU2hr45bkbGmNV1UrxbvvGcnJvth66a",
  "key24": "2ER1D7bFvM1Dz31XwVXpfXGH5EtTKQGXrS2LQQJmyyZbrwu2gAiUQ4JwUtFp5UkrXMrdwZJSCRq9cAxzBUj9jqux",
  "key25": "3EiiCCZtrAsUXJftPwHRHoNEzZDwMcHdEJ3GGGHkjgLwxLMD8L63CWh7MBcakwfX4iySwAJ6UGsTcXKMCJb2bGDb",
  "key26": "UWVWFUvC5CbhWSQR4LhVGyZyW1oyS6Mj7cHHKqhT46gV5K6qMo3z4WN7PsiL1HnjLuQD6vXon2u6cNxDXpdx5ur",
  "key27": "5ambkRGC4RbR85R2aQKqtDQ1Q6EjqB8BLm8RWyvknq5PkmbtBUhBRVzW47kKGXAcyypPwewADiQ23PMrroqu7k9p",
  "key28": "5kJ1sABuSqnsGTA77pJYMwrqh217ShPEQmT5p2FQ7RyYGLKVCtRThTd8pHp644H3qD4WRbXFxq8EqR9hf6VTsj9B",
  "key29": "3UWmfLtQ54mxKwFzJJA5KzXpYAURCW55Ww7FfkrDHmpN6vBrUyLFGZNkL9r5bo1XzHANqLhkJjBzgmnaBScTzBdY",
  "key30": "4zg2ut5RJqqeP3epjLSrSTAfbVp3ftBcYt7N6rqjC6daCmCMSGGuxwMFBVCHuyNYczWDAJtMvLj91fXuNmnwM6S8",
  "key31": "tkqgp2JTb5MWBt4e9LzrPc5wN6SFgs6yNdGoQXgpUxadu9mZ7WWQhVgLDXV5qSAK7jXLc3FagqYckyyyJaczJTE",
  "key32": "2zfTpz4VVtFxLXuSVFJeq5PZyZmvzHEASY1dwLVBCKxh7L8CDfkSKCbgne1RCs7yhD5gYFu5JvhjgHyQmWLu1QbY",
  "key33": "2Z88NB52ovoZNKZZpL3K1UHXBueKS9MbRD6mzhUPWRaEAwe8ASCTpE7an18vtD8PKucKeY8aMGNwdrQfjsWHnHGT",
  "key34": "29p12TtoJzBh5qkhzncwFxUeZ4kpVQRM1XRpcX5jpjEcBpvEkPNtf6A7traKevqtePqEeKd3g3vQ8GCgLLs6PjRR",
  "key35": "28G4DZcoAppaSg5ivYBRxeKudYmexvwMsv5mXF7MhHnL1LewaKjhoa9QmNC5M4ziwDQ2QRfTrzXo3npSMhqiQZkp",
  "key36": "5VS6534ZCSaZk4rK5gutDiY1fb5kxPs7z6Py1aC7To9mehh7WD4CxNXSeFVRKZU3oqXeenvcKcybRssyJBE3qgNp",
  "key37": "LKaK5FQVC4aecdFr9HMWiHMJ3qDWeYLtDkr7Zf3wnD4jc4eS3PVnfGzCBdfS8dJoZeB4vP394EgT82f1D4FcqMi",
  "key38": "5gFY8s7hEcsyzzv5dQXHQ3FRF57ZCBxy1BdGUPdjBiuBachF5XPF2jwadQnmXpyziBHwqSg2ujUy1F4qrNNubq31",
  "key39": "2o31k2EbZWdZLx8PNQMwavMLaaed7VuoX71XhLQ3PGjQLJHSqSF5mmBk34gZQQZBnxDxQ4cR4Gd1SzSYKq6YRp8X",
  "key40": "5WCnhCJouYd663d2MYKpP3zEKGPhqrqX5pxJHJSAJXDrPnBEZDjrbjQ8RtYnMJVyhDzb9mYdtFZsRFVJQSXgBYjM",
  "key41": "u2Wa5mh3M6AHeyctq77u6sKANrgydHx2pTc8VobYDyZvVDVsYtQ7J7MQdzqtpALCA5VCybHFkbST8qjzXocuBcD",
  "key42": "3Bxp4JnuVgCbwHgDRk8tp14bgdH3xJcJY4KmAPnbqWyEhfKkfnZNJXpxuVRjdsxgZbfSgW8vHFpFsruQedbhKcQp",
  "key43": "2y6PX4ydUp5DEVCDZghhpYTxk9kkKBJ67FzgAQcSSVHSX6QgxdBrwWX9SbKYcu5Kzo6itNqXGZRB3hEiDWPEaGUc",
  "key44": "2g9Dn3PooASoWACKTBTpU1Neupd7UnuBLpPeS6v6vnnKVUAj5dpYtF6YBtNdetq16iiSQLEYKWjHivMwhUh7MvHw",
  "key45": "2eVA2prRgNN6NyLQuVh9RUyJhZ6EnstrcxQc6vc3tHQ1qUTbaGCP3fMp2ME76MNskQMJQdPXPsD9Y2M7j8W6LoyB",
  "key46": "3sJ56wUNWjj4yutSfC9KcjzTw6zxGy2mUKhpm4P5YYjtA2VRPhY9i9tEPR9NqW6Ebh17X4bAPPmz1iHS6wSirzzf"
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
