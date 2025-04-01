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
    "bqeviYF6AZcbMWPQRWTtyoXwnAbAi4pXyGHJVhcUp7ZqKKZkmkmro7H7K6FMmkkKQfeoXTkwCuNJLdSpeJ7WLkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Ao44raJPK5es2udj7AWHNsw6YNxrUvr8tumQFzhkht5XcFJuJZGvEp31yByGSsHKNPr2mysUZd2CGWHHZrPPdf",
  "key1": "2cZhbqPdNiMgG2WTV6G2vjr5ideM4yRTUB5q1BvsW5Lyjb9JHR55uUgx7RwH7G7YX61T6bvkLMaJdHFHTwDVGSdX",
  "key2": "5SstvjgW6wqrYTVa1qfHuniYhqyaujb9RkNRBBY1MNKF62WbpBJc4Xjjsivpn6T36pM4aYgNcZ4w7VKPgSTWjFew",
  "key3": "5Ekjzg17qrXCf1Vq9Ctffs4zxxGB1pu55oLzxpMsbq9GJCpAnwwsjF7Aw9veG8Afji2JfcXmeu2eJPRB44i5ewnQ",
  "key4": "nzcHVvPnxwnoxdtnKpE6wsBApRuRBqefaXwZK5z3j2tydyewkYJsBXT3SmYPEDHEADK1VJeF6tv4uGpP579VkKn",
  "key5": "Cnx2UiFMkjQMdvGmbbdoXufa5UcBtv4qstzK1QBuAA2ux8D6jnwBPc3Vs8S1LSLLP1bCk18uxJjVjZLeYUAS4ZX",
  "key6": "4dVWjNroB9En4MADUxU2hpfbz3EMQA1VoRGgboqKHZqp8bvEL9rQRBcV4ShMcU5dephPP6RyFeBDmBCofsoxdK5R",
  "key7": "2wgsmoB6L88ABiphuy8CqJ8qgDwynH16m3Phs2M5YYKms9feMw7PSs8SV2ZMnrtRocpgxJR3KQVzC4xwSxcQpqMu",
  "key8": "33MgVu1NpQLUD5vsPEpC9rBsSeNKPLtrH7EaEaHLmQoRW1oe18httEvcjm5VHh64HAHdALgngdFJubRuM8fA5F3J",
  "key9": "3sJmizvE7CAaHE8M7kAG8xv3SkPkePFE8b4ZrAQZSKu7xeVMireZ1fhUzNctxWmWmiD4jQ1ERaVpS21HSkJcguW2",
  "key10": "3oXn7dbBc1sp2ckfXVxjcLtjXqXuUez8R9M29wwsXECLzBhRTP5rrsJmhAj1vjYEQ1wGMoVyrDcX12wqgVBm3WFc",
  "key11": "3ypUa5Ue2yETHL4HDSZqQetSnL1nyvMfCwUtWPqyBHPT7LXz141aqWLBeWeKJyLzaLd5RX3t7LMCyqRrr6T5nYXH",
  "key12": "dR2a6Lif23WuHH5MU26vYm9AssERWHs71a8vyaDswrE2Pmi4e9mae1DKVnEMXuVpjGBeVxhRNxxP56zsEoZ4mWB",
  "key13": "8mMdFzFJ8dMyJfWsXhDdUqezK4McUBNcvRV7ZSh5jAyQdG4BZhE8YFvhAHjzHgWzaR7mdftgyVForFFaoLuXYYX",
  "key14": "3ia6AWRE37VQ6T8XJ2vD5v9XEn71ZGv4iwUjJ4BCE54aSGgEwo4iVDbZYE3wUDYkZhK5sgy7CDdnmCKUWx6U2hnZ",
  "key15": "424kJ331gR1aRWiEVK5wrXNHT7EoAUVf2Vfr8LhSPr3uHbsdutDnnz4d5wUbgQUaugywzh2UoRAniSSFHLLoQWyh",
  "key16": "4aGzLMkra91Yz3VssXPSBjwZ7TJKXYFG1fdGUUtEb2R7afJJsieQaVzGhU8RsipsGP6NzY69aHSeX5SarUy4kiZ5",
  "key17": "9F68xucMD4QBZFsVsu5NhRVj5AEij6EkW4g6f18j9R5XGgW7fRvXFxLrPswU4m5VfsKrN2D157xF8Zh3wB9mKWv",
  "key18": "2QgJ9NAC5Agf6GsF2YiEZSGRndvuDUVT1SDSohP9P13eRbUqg5s93erLjTTMn3fpBKk828gVjeBY83JNpChQvDw3",
  "key19": "351maBAgiBW8zk6SagtcsdWR7ro5AgCf9kStC3MT1NjvvqhXegXEFPedzGyVE8knJTgnmvnW6S1JL1UpKZfrmneb",
  "key20": "5AMXvTxan7JaEhfNXM4cZKamRES1LHHuD3bHqJKugeACPtjfUqsF245zNQhtycUawGSso9mKVFSwKUQBrfhE94He",
  "key21": "5meHdWw5VYWPdYNhe6t7gU6Vy3i6onaKTdT4uSZYzrMYSboWR2Gp9Wqie5a6kYg3uWigCyQFCG3cp98GmLaqxg5s",
  "key22": "5Se2DJSjfeEKPeouQYCtJfqtegWafvyC1S7UT3AYK32xcn94PrZRWJAYZKVUhJCMQ8ZePpenJAEPvuR9ctPPYXLQ",
  "key23": "5fYZR4TpevcakX73A6vSsXqUdzEpwaP1Uk4oaMqbW3pVv9U4Y7wkBVMe34fttTqb22s7SZp2aPyxkDYVWpRd1DB3",
  "key24": "ukCPV3PjXigEJijoeL4X16xi7GuUtR5ZGVLhU6pyYVopZ9dncuGofsgnMY8aEfFoS9oaDeTb4M3KUH6MQKJbK2Y",
  "key25": "4A88qQieJdrGAV67vxauoWy8iGrtdg1b2348djqa76ruNHG3hMZo8AnRdWyaX3gnohMC9XVf53v7dtivkaYiHz5g",
  "key26": "5cthda6KPvsew1bdDpZ8KgEQk8zAENf3zCY7y9HJK7AWoJYFwNvP3pAC9yKty5GvXbV7G5KQjBFPeuycF7NxTgbm",
  "key27": "2oJ13E3tGqhWncEEEnGx7nr8wrfKxSeBcQ8QKJWoGA4k6G9WGyQUYNwRey6XrRetPaqpCDxmLq6jDSstm129tm6p",
  "key28": "2SSRf83wyWkusnXYdWLFzkVpgZp7QVaWE2vy3pLRTcnidTvJY8bbxdaPiNDxXSR7SVg3oFcpRfHQH2H96M2JMH3g",
  "key29": "2EWN2z8LPJChNPVaAmQbvz2xkvGXgWoCtxz56zPhmK3DRRLfafQNd9cFZw3MGiCfK5poLJoZc67tSUYW4GBY63RH",
  "key30": "da13DCg3cp7xY7tpE9vLQGcN8xjzeoVye6cEfNoDLodgm6wRnNGu9KF3H1FwHnDDxU6gx4WdFyvoCSYC1jwVCk4",
  "key31": "5MuhTxnvu3SvcQ96JnDAdWjYG9QovtP66vNEgANANmVRMGaQQCvzw845kHe8BKcv6EwQduYMbV8GWSRDvKPyjZfH",
  "key32": "2WnUWoBLaCCH32VqzLYzKFCqWr9J32cEr49etcSnQVhBwoedDxdG9cQqdTW3H84B4VbhQyAQJKHjWRpFXt8CRzS8",
  "key33": "5wJUoy65gCgL78xfaPJ7cKwhuMxrs3MeYPPZVLeayoote3kidbuZNz6tirWfqecnLzSLZye7Y8rbkUTnWJUSCZUZ",
  "key34": "2ftj3rwD83xAW7gJZ3b3v7ZEFWB5fgweDKi4sN8wvWsrfDSLwhQrRTBW1kBSy5RokH1b1WHUrdahwk3mS2sRPbwY"
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
