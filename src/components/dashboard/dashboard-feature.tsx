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
    "vJ8i6isAjGjjTWnG71c2hx3JyMDGEwkMiaM9Z1CmNn4zjDfGp3Asa8NntmibXK4uudwhYdDpb9UY1sqwzBL889J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T1NnJx6cr93tPvhpSosMbRmsiYTnRUH4r49wjs8fKr8aEYTKNTiDs2ekwWorwJFBHF8KDZ4DhgFkMXXdVB9uSLh",
  "key1": "2zTdVkGVY5WR5uuXCFaVeiphzU9QyGRtvpPwq13Dpgy1rcx8gK6ud1ZrM26f4k3VVwzYJpuAtxPg2ShikUbwhWd6",
  "key2": "5edFBi2rNHw9xVrHVDZWb5G6AcnrD1EPoQvjDa9JqtS9ipWmgjMMVE6s6JWF7jb1fg4GA6Uwmn9FhZ3C925mVP1q",
  "key3": "3NmZRChAXHceqMeAP89dNhB72v4UvRfpDA7WWvEmG8vxp1VC4EXdaTMs6p3g1pdfZwUH6zGQ3TnXpkzjtFNT9jru",
  "key4": "4ho94RwtASoycdcnDUrKmJqdqNxgHcbWNrAKWqHKocoDS8gDpzGNYkLpaEcHG8FbzdbEc3Gb5Wo7NER2hTwYj6FG",
  "key5": "5ZXHSddXJVkyv7weDywj72w9xK7VHYFgSP6ECuUjZkzJQpSzM29njCGFQWj8RqNBjZoygTuqdXFnMkvQGFYfAL1R",
  "key6": "5WVx8NysSgSEoapfT8PbS8KWAh5h8hryP1bB4ZJMWLVVKGDMj3pofAxmvik1sFvBmAg2qwbpneBgsFsGfRrse31T",
  "key7": "4toueUEZrp686EBpE3tWFxPsykcDet7SPYwvgqTdfdwscst84731zRAXmjMfCmXunsTq1hRtcmtjmfghkTnsPjdN",
  "key8": "Vjrxkof2NdP4MJouf3CPkdJHCpmgieMsvCFStxEZqWGwMexarDXow4HbwewrqQVREZawy8jpUDPczPJZz9z7iPz",
  "key9": "4YUiSQv5Z6MZnDiJaMbMnh7wExuHtPLbjEFK2XArr3yBK9DxXA3rYK1uqSuFJQBnfibCKiU2WCdTJocsyackm8K5",
  "key10": "4ExJS6ZbsNY8Sg5FaxhAWv7pyWyC4rpmfGBqxScbtJya16Nc2h4TeHaLBsLbtwp8Spc7ia6W7L4CAR12T5zjigns",
  "key11": "N1vUw1YzFjxyEjeaiVkDreuUX9v2K5FdUKr7gYFdztfUDrxQYMWyffpWaKKdAZZ2TkoevnDZsCuk49gBgSgCQg6",
  "key12": "4V2oqg3so36xZUZjgidJJsv39dgp2he7B8eC6QfaHNcMJuJg1TJSjNvuPshdzFcToywqitS1sBQCSwKF2qnUA1mG",
  "key13": "4rkrK3xpkDVjsBoXQi6VjC1PZHAtapRaQL4Nebn82cEkz29YUFGD5r6vMqotoraGgYcrJC8KNARdFvxw2tvbBrto",
  "key14": "4zUGGmBcwf3KVop4m1M3b1KVgyMUVwrbHHKf2TfQ8xFpMdn5TE6pAxuV3mWzQVJjvxoefMY5tWWLfKvR6wQ1gBbP",
  "key15": "3KfRZ6GjAidf4J7EsaHk6yy1MApzcLmG5Y7ANhJDuk96ZK66zToPoLeQPYGRNXgiDz35ohTZtCj4cP9rdWGF57pC",
  "key16": "4me1VTqKxdNPKWqe2fe46fzfqkjBFSy7a3yMYnEEoZJSTWXz6bwKXzweatVMU6HBsJv3EezChSVQSVMNykqY3wfE",
  "key17": "4gzARRE9kqfpbdR72sZJJoTa2sB3utA4nrXowV7xhp5foNieTvNVfqkX1R9BHVRSUbdNw8WcQAhSLUfVLA1GyqM1",
  "key18": "4UxssNxLg9AhH65QVbd1S99z7fMgqs5zDqHMqK7yPqoRNwMZFnjjdKi82CwtHXutQJyDaNaSJKRYimsNiPKcGnCJ",
  "key19": "2LNrTUymykADWw6CoHTaNG3NrBwXoARXWSGw6pgETQP7uF2z3upzUCZ24g9tp1xYNnzvweR45P9mo6ZcPk4kEbU7",
  "key20": "5iLsor3Bizb76AcyrMe9WcRLeswtaxP1yKXxn1CBSJpSF3XUwRB6Nyh2uRC3jMe2jz5F1nG9Ee5u8cWZnMv6MtC9",
  "key21": "5ihw3DibLqndpYEEV8TYBG8o93A8iJFRj2cCbaYdFRWYq3s1cCVnWNYs7bFNnUpg91Ms1eSd48yYf1bWBwTDNdhn",
  "key22": "3A7zM9dUM8iiGRyo3GUPWZc7wMaGvMzbPjSXvLVxAdBc3W5dbWiBVFAswcUUQX9EjS2RnazoSHJqdSnN2xaaKxcs",
  "key23": "5FHz6jUiK4Uggkzd4wrjqJW84K9d1F2A8d1czmkRTzdxnrWosXTGVRzpBGWQx4bxqhC4vZ3pMJFiHbu6Jbwe9yWU",
  "key24": "4BLeiNHREu4vW9gt5dCa4BixNKfJf88m312SbgeYzKxssAZARTeEMbUU4C8wnQ2bcGFcoHXoEnAhDVZdhvCLucP2",
  "key25": "VvaxeuwtnKKHb4Vxht72dwfvS7ac4EKvGf494ubHDoYpWsaGTNCyTATbBM8dLH8fd17rRydtYVqoJNR67PothRX",
  "key26": "2RZUSbmkxGinrGYkkWR525sD5BVWmXkYAKoZYZMAEq9AszoMCcf5qPY2gUH4iGh8dxcjz2gHvW768iUmF8ELWsgJ",
  "key27": "3RhmiEXZKPdLxYUHm7hLQnGbxh8mDzzrem5Cxy7E9SYTwdgcdvGz7sZs9NdMCkpWwoeGCm6ispPHSCT9jBfoWwKz",
  "key28": "3TtDyy3d2DJvYHDCSS3YLw1jq1cvvAkE3Meyyd98Y4B3sbrQnDP1mEz1SynKkdcUvtnHCsVPCaqum9G4N9xDgyRT",
  "key29": "4NK8TmY2MPXDhoWEmFTs52StCBzvesq54Si69vBjyMUVMKWMknunmG7qQYJmrqZ3jtynS3vYTzfohmWKNDA5Bmbo",
  "key30": "5Q4zCT76EySazpVNZnhdb4xMJ4pZsuT4DY1iv1T18r7E73R43cqyosXu5UdiJcysUKk1ddYRbmzHccVm44zyD92P",
  "key31": "5ZYfVHsVUkyhmhEcj5T6yCXcZ3Eovf9uu8kXKznByjeUDerggjqmwntnKfiMpN9JVeUPi3VTvxqE1pNPksPcursQ",
  "key32": "317jYowfJZs1tuxmyj6uKcdeE3WFHmMwcS87K1Q1o8VGGNJJBowNuxVu59vtj6gWn5NXsUosgQV9VrecLnLEMh5S",
  "key33": "4XjEWDAE1v3uFYkQeTqTfrg95ikvUcjQh1hv5y22JjWxBJMLFKpBD85ZbBNpgVR2bT21GGPtGfKB8RmZapc51pGA",
  "key34": "3118xNbJshJ8LSPumGfK6qs4phQZCS6EMquPKWw2FzPYPRTfJCj2KQGrPApQ1XFttA7pmy4TTx9fmbcoh2dePEQC",
  "key35": "2WM8ZR83Vdx6txTMA3cwRA86RS8n1XiSE5A22VktMEeRfaeixjUqzgCjrMdjcoNem3ci3GvdQ2x1V8Qznv9ix8pT",
  "key36": "2nSPfsfygZY8CWjZoavNKz3dC4n6wAvVwBzigdHPDopxBBbnmdHH6NaxMSLpAcaXhytwuzbcmUgBpg3qs1ry7tG5",
  "key37": "HpZRZSospR5HEij2aU6xaR2Lg5rU7ccYdNJgALzNMudkyqQPipAFz5fXEUw4knpN5pBWEBLmSvhVhB6zh7xiRvu"
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
