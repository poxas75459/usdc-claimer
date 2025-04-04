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
    "3jU8VsDTa3jEJJ4o5KAgDBSZpALXJSh9WX8KCKmRuBFRM1r132JukXyhMStD1wSzq6rGGagqqRpxQJtW5H2JiFQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TQAT665M3Ss5WVvacBTR4EcjN1Jp3Uzgk3vbNntQC9Kz4qX6k8V5wCRF3iQT55EVRLJHhkBhsbqsmQbLvKx8hJb",
  "key1": "47nADUZNDgUVTkTQWpLyE2jCRBDYbbkHBATCs4XmmUoDgxuzz5ZTE78nTXjRqwFJ5mHMNQZoWq9SGhGLJ5guGH4v",
  "key2": "3DGeg6uoSJqbj27hcSYuigVtYvRSHcovGL6phfwXY7gqsjtyXHwCHfXmYcqXdzWiZBkWtgdwjQcri1vSDX6ytZmc",
  "key3": "54ayJdKQtes4s3cxQKBfDGEW5YbihR6J6vXHKYSB5d8cHv96v8ExdG1vCf8wEcYShVYcRJsBs6jZur91RKyXtJGS",
  "key4": "4Vm3sKkP3PHxZLMot8eyKqMC2qCnMZDtLVpnSpAuwt78psyyXLnzaEwyFVfF73R9Uf9CbEgv5mPm21Ci4nNZUyeM",
  "key5": "4fgNqkXVkyuf9eacEs8JxoFkpRdzeqZyMqBEBqhbttt6NHN1hSyKzXYBctf6P7jvt7AEmYY6eRcrTBoDkEu9QvCS",
  "key6": "3EzdM3rrMEQzvkgaiARdL2ZKis1wbSWvepsHwnGHjJNCJ3wwmmaCXd2fXi9khE8R4oktdfRSq2zrsAxzUvhRJEee",
  "key7": "2D5YGateYQBGHtD3ZMXVTUWLPLonCGCnzaogMhtSVXyjwN285NA55Czwz8tvUo75H1NWhjH5VLx6TCPAwt1EsNEw",
  "key8": "LjHHb1192E5Gs7k7A9YWH3969WGKYwDoQcA5zB4dpiYpeDbQkVh8mekQh1tJe2CUhZoTBYGW9zbYfJf2hJfAuji",
  "key9": "3wFTDM24gujMpbf8bvKJhbKZVLYorXcVjGnBfPyYxs9u7VDJZUQqSGkb7oY5KmQYQ2oKAHJ52rQYJgZSZFQmAv1f",
  "key10": "54y45dVEeBrHHzqfgP8pf3GWuAaXjKxa7z5DHLSkVVzVaM4MU9XHtgeLXYVGySjf1HokCoUPYtmtwJjY9hmgaLa6",
  "key11": "5YGgPin3hjQEfBZhijTk4F474YRmgTfBTERhGG9q9ZksDEYw4wC9QE7rvTcHEbZ7SqkUurpoPqTVHjYeiXi1XEFX",
  "key12": "evXjTkn7fLcW8EcHqy9zCBTmBxdtwkJeM6oFS3sf1ZbzNGLQ5TCPgT74YA6oZVH4s7jvvQ3x9ybQ1T17jwy7HX4",
  "key13": "2NFWahNkQkqjqFs4BeZycoDC2Bt3U77pgaHEuyMeDoj6zmQZcZG18dH35cNg9zExheBtG7JwqJ1Jgi4vxf67J3ZT",
  "key14": "2V6GmYohbbPqVCUF6ua72e4mmXBFYNJumf6S6CDuRX9LCC3VaGU85oTFGX3vz8DBKsSZzaKw2FUW6b7zfveXTPKE",
  "key15": "3zLR8ZsWAifuTvgGniWd4XihJP12XEjukM6deM26amKqSWPjxfS338S2XpkYrMYHHyBbY3Q59qT3EPa2R7YZyJ7T",
  "key16": "5gQnCKqavdfo4X1DdhCrKkqwVMhofNohCMdF91tdCeBcuQM8zDFxuj9ymFj7kqY6zGmGWnbShVDex5r4y3kkn87",
  "key17": "4x6wagQckYYYZQ2di32sS2xFHq7SR54bnNx9uHvD3xScGq786yCGBCuYiYvg49DassCxMJBNrcof9isuu6QFfLqT",
  "key18": "2fgYeXFTNCMdDBvntQvh5XUXE7Ge928e5scnCxB5wL4S84x93KDc1TMYqRiAo2MHkM2JsUHJ1PqAda1sPAkXbLYD",
  "key19": "5iyRrR3SKbmvn2NYQi6MzJGbTpTV2QeNQZ56RLisbVUHYMMmMrTKqCdPVUtx3edRuFGq19ZdyVgVsrpMo9A7FcTa",
  "key20": "45YHnsK2hDkGkUQEqVats2Vi5eGhzFqoA2TgDdHgCWV3ix9JZiGbNXPFXmx7LuEctC34fu7o4J3hfirHUrAPfd5Z",
  "key21": "1vBRZH8WPnDmTUTNQrT3t2sQ7HC6UmgryzvQ9Z4WhiefYFTFfkcUgYewVRAHry76Jqj1m5TA1vy13Kpg5h5oFg2",
  "key22": "V5sCmu9pUZWyR4LmnDsegAchqTM8GU1cNSHz417ADx7hsHWEGhVQK8k2Xd3CoykY8pu5mDcYdpwMYrtcqFQuoyq",
  "key23": "5iAPZxvCja8o7yQKam7rkosGbBXsbE8iBpN8GMMJPdV9zVuVdPfnN1P1dggrbu3bvJyQTYZm7XN2HkDpbMc3FMmy",
  "key24": "5oiwN1TxJQBD3NKf2LYL9sdtNbRgg3z3AbekMydvzRC75vH1zLSJDQbkXtS9Rm9aCSgwJsm7tbYJaj42yw88LEr8",
  "key25": "3NPe61dpLaoRv4FJNjyv2irLdWmjtgfzE9pi6nAT8Sfg8dW8pJ6JHLGXSqTMzrdqSMNYa1pjfk7syjj3xi3TDyK6",
  "key26": "2tuT7c3xBMGtVhY8nQKaSx3CC9TNNJkBKJSHXMBYmSvt2UE1vNsr561LcPhLzFue5GZrEoJvoH31QdUmjyemxHoD",
  "key27": "43ASeteCfFC2EZbEdxriRsAg68C9vf3TxCGe9xyo595eXey5Qc7JrBybsVw2EeMJ6cGEwrt7huev88iyDyMQrmxy",
  "key28": "3EDHEdBaXzqtmPuEMENHXZcCnAyuw9yuEP6A5cLvfTmzBc1EJ7jDscQyaUkQURyHBjxEUAaFp1p2xHR6AQ2K1ra4",
  "key29": "uhXfDKHKD3curYPwsVrpMypPsvcy39JQzy7KTLWJDgkBFxbxKweg1fmDsPtzUef2NrjxQnfkV934D7eqon8X3PQ"
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
