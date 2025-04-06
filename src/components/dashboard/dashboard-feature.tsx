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
    "2XzsfdnEBUFvWr7jeqEB5EaJVH8czZWHHPYLc47jmNyUfTLbx97uhxDEuXaKyneBh9k15yDz859SQxgbXHNAo6Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zeLwyp5ACVkQW91ohgbU5SKJ9AiLwBPppyH9HsN5UdJ1DMT9kZ2fB4qQsCgpn6SvR1XbYKjw7LxYpDEPJx7ptcS",
  "key1": "5DkmRp9CzBfzsTSDoFxyUYtWtigcCPt7pmFQp6Lao4yz4SG7az5TuHZPK7E8KmoY9JTf2EzXybZsa22fSq1yzyVp",
  "key2": "3BDyxNi5YzH6eJYmWYNKj8J5GFz6ktNrWhcmHe3kKsgRbJg1gpHH6ydp9NiUPJ8SdWnWa1KyHRyxheNzU2phRjzj",
  "key3": "6163YwYeaEihyophHv8p9Jiwsiffuar8LPyvRdVwCjjAh5evT4JdEvQwhyAferWFan2eCsjUWptfQg8k3j98RBXp",
  "key4": "3wUJdHByak9DLy6z61YEvwiYi58qAFDxM86Wzx6fMpDbuEtaiXagyzGQn8xH3KUV7fGCLQ3rc415VMxjCFYREuqX",
  "key5": "26k7RxKT3UmsMhPkcLwCEUd7WAgH85fwVtks6YcpUzqihCrXF7rJj5rCAAXFL66kp4x3UKyiL53Me9qK95BybahU",
  "key6": "kyPB1bGnDs91BTemWnBWAxyB9UbXZuN1fy25kof7ey4yQ5LXB7Unpct1yhTGGY8hLJmtpaCjDuhHc6uKgFcmooZ",
  "key7": "3nrEKENk4gXVhiCcjVYnaCAitqX4wSPrMvenHRGePViuLvZ2FY2mVUQfUQG4UeouyXjQr4AZHixm93tpBWcuNdka",
  "key8": "3UoXCbdWGHVPzXVGnemVh2tRDZEUZSop19TmSkRsdMt33rAdJKqiQGTUFkiRAup1KS79Y8Bo9xmLfUU8UuKKbep1",
  "key9": "3sBim1NdsqPo2SE6qkckwyJ1eViRJLLxXYDrzUCToc2k2knjayG5C5xY1XCcyoVdvkvdbJsZqNqbKgY6prMkvDJq",
  "key10": "3RU8zAnbnjDa5bLLEc3dimJ871WNvnMVQVvH27fR5rxvzMPuSxnkeK77CRhdaFhTzLi6wyKWczTZ7bcaxhLEGTos",
  "key11": "5YVFnXsFnqvyFJRx9NkvEN9DrjKqJbNS7hZknkTiiE8ohBgjB9F8wj4kGE6YFEEpz8ZzocQFMT92V6HNyYuXeLqq",
  "key12": "2QBVMS316zoRYLG1rsgSH553yR482EqNuJXNXxX9jonssJ8EEQ8VMQefBofrQaNzM7TrLGj2AEitESxv8QMjQjVC",
  "key13": "4gWA64P3RDHs5szTXSKRVwBi634UHh2o7mj5NuDMkQBr5hpS8DPxUmDTv1B94TkBoCZtm6zbdrk5b7dF2xwBFSnk",
  "key14": "5pPoSUiF5Jdf5eqbB5Asx1gf4ePQS1ZH6bcDuyQ6jGtux1GcPgF7HhbFY6oCHcQtznqmto9MWnZEP5r8hb3ft8GD",
  "key15": "bvQFFqJdsnUj3tuhf2zeftPGZaCCyafkcJus4Jv9UB2CGacQS6g7GqFspErFHypT2NC42ARzCjJBXUhwWhPWhCf",
  "key16": "56CSV8mhGRBxF3YuoMRaFuzz2wrxzpVLPGpajLugRbPh1dYSLMbJAQ2aKtatPC7c3q6B3FUrxJE8kJHj9cZ9qHhX",
  "key17": "2Y1qCqTHKd5LY2WwdnRatQN63pxkgS5W1iJ3oBCw3YghVSTpfKhuiLLd3PTaDohQZrM8qmTkRdVDv6KSpvsJyzhf",
  "key18": "5JgTid4cZoHEdr1RPcMo4ftLxX9YzU6rwKNpmJZVj7hrVv4cZxMxwWerKyb5a5sZ5KZ2FPtS61vR4KRxf7kVVqnW",
  "key19": "3YctPMj8kTQn3ZkDirJpTpSNk6BR3bhqcLc8T6WNcJeZSjEjN3DngyrNnSEGejXPTKzkMk4kLKh7N6x713kUktcV",
  "key20": "5sFykbt9GZ3vY1UwS5Ras2ibYq2Bp6xv1mepNCRzzUqDgictADqAXNiWJUJL8L9VRNavqwet2YNmMYEAzSCpo6rn",
  "key21": "2REHGoAnBVrY3eFKVp9pVe1YiYtqJG7BTL36TrzXNc9CgNy1d4x8j1m6hR9axLZ2u2SwGsvn7n9KM2MdFYkFHTYv",
  "key22": "55qNwJzDwjhc94RVc9CfZ8EdffDi6RYPoUss6jQ5KUZvVZGo87YU9tU4oSjYPXpASBzz6tHhEgez4z5h8qNnzaZi",
  "key23": "2D4YP46FYXKnaaUzpiiqWr3fNs22yq4XCmZ2vRnPx3oVEGWjVhG2WtKvAuDxvj6SQagJtRgMF9g5WBG5FCFCQpWE",
  "key24": "g11B8CGG8pVrbFjFrwG7d5ftArDQmiYGmKSnk26CD57VK4fmk3hmRQodqoRnyh6VDoEuxw1xcZ3gnTPCSfQY1b5",
  "key25": "mk3cKWPiCtw1Y7TBZ3Dwbd1Bba46J6BEiKBPMpL1gq4jRWuAgP9yb5wV9wqer73pjFoLYtRNgZeR5GUwgw3dSCt",
  "key26": "58hpafZeT7zqa6bh9siAyLdd97NVGi2NeFHcPQsAXyRv5iwtydLHgpiZ47MjUv4q4wmXCrzKbH3thjVtQcPwC3SY",
  "key27": "5F5Zib9f1CQeQnhbJc5UP8dFXjzJp1jEEPXBsCwE3dtkJa9xXvu9ubdexcNc26B5XFrV5tKj4hfNQZXhPssZBNUK",
  "key28": "4K7pHioWQALWd35xAAGH9keFit7k8vHwfKJcDTr53DY7ytKecu72ATcFzB1eQTosBvGqaR9pHkGM9UcHzFmHChUk",
  "key29": "bUwu7XN72StzkWRcXfzPdVHf7NUBgyeKAdq2n38QbBdtLwrA7AwXrGsmPLCEHAsy9WLozVWGbkaQMHuCTpZxmSP",
  "key30": "4kGBpqxRx6dMS15eScoTDsUsQPu8skWRG1Sy3ptK3KJxAXR7YjKHNoUe4NucV5ALyixCFfwQkDuKEcBtfgN8ED1o",
  "key31": "3uNcYq8s9Ggig3K4kZzmQAD469XvVSHMZeQhAqa39n7DhGSMicYjjUG6XYZL3WKrzFDNrL46M88tKYaqPHpGWbGZ",
  "key32": "2BMvKb6faroFFZWBodMZ7HRnxuynYL9KJUxWi2vedfTwyfKLqX3BYYNMKjLkUnY42vZuryUhMVR3AzHJdC5aFEM6",
  "key33": "5urjrtbGCESahHxBSBCiMEPq1G9YiqX9BbvfmnHwA1KmwAgQybjh7wcFJ4qq8GsQLwa7k9kzDKwmEQn4LrfWVvLW",
  "key34": "28HCi2FtZkcYRypEzABd3cCYyCQnj8NcpQCkLHtGp1Xk4mcNXE1m63agiDKDq1ZydRs91JowAe2Jud5fFEeqhKhK",
  "key35": "4kmxQ1WvG5yqPZDBQnut6dUTr7DBuTSPWUfmk1cRyLtmC4UEmWjWA38j2SmBFKTHiJKxqp3GhzSB5wsCaQU1daXv",
  "key36": "21tmNcY6CkZDXngccEsn4YPE7gA59gt2urXp3eyzodiD76DUhLSGLGTgYYeqiXGhdVYPFryZ1FpW63Q2VVBizd8q",
  "key37": "32M9dH1DbH3GDKfLXwMXGn5hqE917wsghwiEeLzM3nnArBN6KyRPVYeci5FPPhMDgzV9e8VCUmEajndEKpmtDskt",
  "key38": "CWRzhP9QpP2MdbJWML8HcKGx2wpBThAKxjggaTsq93HYWn6NFJi5siHEKuMyUVUYttzK9mTPtrGPKvMqRcDKdBM",
  "key39": "2y7Ke8P7PYZhFRmiVuHhT343xdM4nrJXSLrPwdjdsW3ieAxB9mCiNEpGUpi2dSD472YnWqzKj3uSmYbCAg2vxyLc",
  "key40": "3TjtnpDwHbUWj1NSVf8BcJRCLkBdxFbgRjGeywT9UPLjDuniTUx3d5eLE8i1hB8dK4vvrNByhDCJJaNN8rzYMa3L",
  "key41": "2RtCoEkLArriUUVF3PL6oCc6oxTzcgKcfrx9scAahjoezer91rm7hxuDe7Tc87ipyEB8YMdzVTAoPLDKEvYBuCJP",
  "key42": "4tbWNm34kytBSVYWhGFBaY53QfnxPata7Ddi9BPdrs3xqm19QyBTMkvgRMhknNPeoFA5t3DtH5iBFiyjj6iefuQd"
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
