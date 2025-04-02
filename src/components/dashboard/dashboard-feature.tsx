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
    "4e5oyAK8zLACaDkvk2Uh2s7naLHSktyauFwMEARhguJ6sx8xWoRLr59JPosv5VVNRauSBnTpJRt54hC41wDQDtzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38zzR3w7ZptdqNd5TRJBVJzCaSzyB5L9soN6eNEEGYEFgaXKPUSdxpTBCd5svVky3G3KkUum72JdcAnYniQjbooG",
  "key1": "4VTVfxf62qP69azgVxShA2EQGGcG63aeVUoEuiD8udxrto1JEWJs2Vf1EGvKcRA7ARBzNKwJRrUkyMM2Snp362qC",
  "key2": "UhZcT2F2U5a1ETVBoN65xrB4e3Z8v2Lr8JsniSwkPLkExvNuXq9i1CXL7ZtmYUNCsFapYGaRwZWe1pgP2MACV8X",
  "key3": "996vamTH9tLWbUSzAxcR4wkaFFdKdfBAqvLmRuhea6b4oLpajA7PXPmUSE8tpzLgFa1YhTxhsFwLu7QrRSBbRbc",
  "key4": "2g1F6NvJdiK8WnPeq3zNz2Mb9yrRd7vXWRVjuKQ1xFgBrUyHgA8Y6WnXJx9JfMkekmsLMgTW7NuMVxeYUyWLF2CP",
  "key5": "3vzWkTuQfyZ3PkfXzLMhw6LFkqzNoFUX3JtavcqNWS5ont8VfG28csBSrb2Wu3skDNQDPVMox3pqYKZeJ8LXVK8h",
  "key6": "5BHdrLtP5AnvErNzrhCRTNuMWagne8tHQpeJQgoox4oZ7YTaG91vyw2b3oDKvPiNecyTprcWyavYpaopFst7mEQt",
  "key7": "5gZbR3qSicyP1rdDKQJHDojUEByVqmnPYViBSEvDdewK6FNYFWzrhc3jqX6DRLuGuLLzBYxHS6qvzyVRC7byEyud",
  "key8": "58w43uUk8n8RcznCVqzNr2gUgHy4HJ98189QGJQvhHpN88qvjbAX7qGoaxWed99i4jjtEsEDzPHRN6BBUj15SWei",
  "key9": "2Jv1m9ac3YHZ2xM1Fzu15LVTPpjViC4JpFs2WB92TL8CD3BUAwKwPfyUG5TXsjiEHEKYDxoCDcF282TUkd5J3HMy",
  "key10": "2VvDCgnYEuvWrWjVug1Rr9p4Jn3XXETE33SYUevbG71ECBjHA7KXiTnGdnJY29zcNGCboeuetg6GsUhuxHsuABJ4",
  "key11": "2Foz9hKnCm1k4KfnJ7nHVRPe5q21vFTDuiEaEwDJ8LuLwYPa3GCE2U2Gqoz1WRqJTSi4P4jjoAqRRRZp8APHSt2Z",
  "key12": "2orbL1USGQsPDzHGj9NoSvB3yzpipUJNeWaqAjGgWp1ziW25YXeCZ4icjFgEo3B7v5Hrzzn7K8rbVPT1dviAe2Pm",
  "key13": "Dw17aHKx891GpGJ2KMDzGNsKwjtkwj5EvhpHS2NoABM8Uj7PGKorXVKojAeoPv61b1pq1Cp5m8wqjWDHyGPBwpW",
  "key14": "LaAEjBYB15VAZzEwuzVCdae12sLz9DC3KDMy4wRMRxAkb1T48HVZLkQDNEJD55GGP3hUwKm2wxPW2L1H21RuD5L",
  "key15": "5rdqgUw2DzxK2xTxLVmG1YVERz9iknPNzPuqsukBZYBo1of9VRxTtpNsfpUsQT1wHmQUh89m9R8URDdpeUSQHmTJ",
  "key16": "2zLBbfDq7BScAkVywPykqXcCg5KUbG169xDWCTm9kF7zRMeZuwACVpGDgQhmS5nT1VDgGajAAACZ9x3WM9ytk5Jx",
  "key17": "48tUFr7ASKjySWx3FhR4V7i6v83JNA6GPuSkejMQps5RQCLwJ4m9StnD9aK45KLcSkp3jCJmkB7r57djmnbBiTUQ",
  "key18": "34WTtbKadNLncsiPkHhkNZ9GDLc5JbkoEoLdPpDqZRvmSENJsQ8xwr2uagJwhrFcepN1KouNnEZriKJFmWzT76VA",
  "key19": "NAa9PysfD3WJhhXnc37DmLvZhJEgQaVqEENe4DaF8k324vFieZ2gPpuUm3Eex8bXkBuMcrDtQAPy7cx1iPH1EYv",
  "key20": "fjHcYYgbG8WEr2iXk9RS6LXqzXwNXidXWz9Sf3BJvnFfJ9mXJybzgkWDbtELiyDiETxgo4aM6FEgTPNKdtfioWj",
  "key21": "Lf15HYJc8PiHuCxtrwuxQVFYSPfAUhkwRQhroPJipp7xvACHbcot1pAvokQ7PZNRFJMvC8V2C6FBiSmZb76a78t",
  "key22": "UxzYEq7cyNN4YAXums8mhSQYpdrmF9vi54C5XJZesXgpERkKXBoNTBGSZTPAWdkFAqsvUrs6zuJro7x6jX4cY8Z",
  "key23": "4ucDSbhKZe4QPLXH68b9Aebyu1pBCUKczqaL3vfbrWDSK52L1u54MQqHpqfdZHnGeRfKUkqM8rrrhgttA2yp3b7n",
  "key24": "2HPuoSLHbaBTxFr9a76g3zwS4xXhZH4m3Z4YQyUTAKo9LwVb5LehuSZ6FHb57fBztvTHxw8K9P62JgR7Q221kwnK",
  "key25": "2VUtoSpJ9Z3SQrMpCqPGNpQ5bW4sWB5FzuiLXD28YCvaupEhXq4EzBZSMzUHHgMCtMexoNpU9GNwzCqaSFikxdN6",
  "key26": "2LwP3pT6vtdr3rVgsT5hsHD7pMhyGo56AygsTsZHHYxyezidbn3WzWmrAF3uXBXfuba3vxeuxm7m4C9YwrCY2zpD",
  "key27": "3r3tfwu27Rn9gGSy5r3gyDq5jKfKy2PunXKjKkCNnrggv68Fk7MavMeHYvRSKk3keJNWir5ivRnS2t9mFoX1StkG",
  "key28": "4PwcX7pHtNhtMr6jWQy22QcejYyqzs9BCdhTJ9WDnrF3qHyYjwFTeRFHfKYwiuAhJ8xYy62Uzw1Ym7wEkHu47CK2",
  "key29": "4zxXe8tJ795c2mSdxrTqzoHkHD2t7mNCLkzTVRH7HifkfHA9iSNqsdnuJp7wWEzYveu5BE4Ud7eBpDqKU98xbMYB",
  "key30": "4RHqjJE9EHE9wcrAVfuCyuoZAJoeoytgzjb83iuKixUixWb7Ara2VHg671qzzpmhEPwuc3HUCarnhR7PY3enPV3D",
  "key31": "3qQg7X5fCuFa69uvNNvEjBv395w3qi4h5oJ9WatuqEwLCndzb87SVAF5idBUvVXAkMydJqpsK1BxPS8uWSkciXtZ",
  "key32": "5vMfWoToxwXTtagE4wwEKT8QtBHsritq7iqHEQSiXkszUxWJvKmJPJo7ANbduQQwuJ2UFYFwuDvdCuLL82HvwSsn",
  "key33": "duT62qhYLEQuaao24k8Qeh1U6b9rqGUTE6DCgeXWLnyGWiE3zypVwz4MDyVRAtSKokJZ6AxHN4HF61V3zuBdxEi",
  "key34": "43wi3zYDPmxEXXcigdCDPFB9EByjNoGkNUGu5nKoN59QtghDaXpHiDi2FHV4CVxbLQ5DCpnuzf3mA9dJ7QhaU92e",
  "key35": "RNrMYGbtAM4MoMKRcvo3siDpyDduhCTx9YFwV8e9c2FAbnMorYB3e8yd9QVme8CtMSUtyd5YKqz2Gze4X7AjmPr",
  "key36": "5GXT8QNfND63QkpJ1KUYDzds68eBJLmhi5fiRZM6gwUHWELhygKBtCSNfmwXfff19XGJ7j985DhTJAmgJK8tFj5i",
  "key37": "kGRWBqwFz7mgpyqdgHmToGjDc5JZsEy3iYpmSk2PHYiV1t8P4ZbzWHacgjnyrhHMrcEtsRVWMRoXefFN8nmLyyw",
  "key38": "2yinH5RypAwqPetH4UgCEhMhpZ8zGyetawfUTZ8WF1GoLfzhcwmEvdodUCvFgku2i2kMzez3CxCeuoPKgV24EgHM",
  "key39": "3c6RscuPKP3TkZ4Ax8kaZ7qiqAyVThWq424jdHQsXFRPYPjPxXKTnk3UzDBd21gWe7SABNYWteHXQCfPu4jVGQNC",
  "key40": "4wpqqbb7DD1a6gjYHUWwWZ7GrKGf87nA3gHpsEfuSmEJggTMMp8dGhjHadubBrv9soGo22Kr9wrd4iU7a1MenLAu",
  "key41": "3kZr1mL3wNZM9JTQiX3REigMGcRHffFbD3JKoT1r8mryrFFtbiMvEE3C6nV8SaRLb7aamHMiJbuFvay75GApXwBt",
  "key42": "4twd1NTfW7EVX3yqMNNWsykgdSzuHxZsusJGEHTCxPvXooNUzSQDmwzo2KnWTT5UtSCYMrRQKnz599Gb4jmYEnRf",
  "key43": "2T995RUCQYuvMYRWjAhXwH9GjH9udRm8kHK1ujFyimDKjCkYgXCJbT4EQar8hb15WwxBTekctwQSuTZzLPT182mA",
  "key44": "fh9uPRG2UoMFjdXLA7pKjwDiXV37mUB2DTX3EezQ3hKZjKJ5czSogB8JCujEGDdRbD6NAis3qReMtQufpE31562",
  "key45": "2UzNqXTGsFGypRjWwpYJLSbYnbPJJQJ41nbX6eE51oYGGgtytFrq8JjhfE5cgnfY9NgfirWQahSZeoK3iVsjPdwi"
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
