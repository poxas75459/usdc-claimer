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
    "VVtgVhsa8fppFZQ8WVinQKJBeEd2PwSBeWzdPYau2uPxyJtNKAnnZZdL4m8PykxWErz2RcbWLAhjmzQZJabJqZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Xo6jet4C99qjzp81oVgZHpHo5svD6jt6LzDU6h2cAW9rmmNNowFV2TqUARoFKFGRMdu9r6ExXAJ28gkixCTMk1",
  "key1": "4XyLp79SHdQHq2BWdXNy1awsjw8JkV39GzQF3q3wEt2FHPw5xQcLoepE6Loi47jARw8mojNUgGhjAyAdkTDccboe",
  "key2": "279tCX2oYy1bf1HDcrANPsY2iRx8LhgqKLda7UGQSpYBUCv18XMv4gkTLHJot92Mbr96TYg1CC1HGGbR5MxcRxoC",
  "key3": "2hKkJusJ6viaqC7PNyYGbWf9DADfUEEV9QxNPPmSLYB2crKNk21PVMHeGDRade9pN8aZejW4MGfgyFQk3LyQunir",
  "key4": "574WGj58ha9rEzg2LwoG7tx1Dxc4RiMwEFyetjV6dbvi244ChJVfZLNqNmxR3wxbgrCSPU25CFSBtJ1bBrEHmcd6",
  "key5": "23gDjhA2Vbr9uetKnwRdBnmeSxbbRwJH6C5EV3umSWY9sLfrJzWrrbdiw5dNT18g63UQn27nS4eYgZUas5BV273C",
  "key6": "63N4tMuzP9RRx5ftdVXS4nJbLrkEBFqdX5dAvKi2b1Up1jxfeKFP257h33sm1ES7zNaCx8s8CrriPCE1C2pkYqud",
  "key7": "4zNQ5zkrdhDjsudm62GAWVHr5GRJwZgLtJWi7kM9YP9LkFENfDaUvsbkdzq3NNM7hyseYJfvUJk61JMaygPThZoT",
  "key8": "3rFUYrXippZ67pwAd9mdx3S2HRtz84yHdofxMRDZ4cdmwpkSBZeCHvDsk1ZbaBteBH4mqhsMAKe37N5n8yrNijFK",
  "key9": "4Hfmvia4EcsSB1JsWmh8KpPRS1KJcBCjYckXYs68PuRufMskyuCbjWVAYFt3kssSsJ81zrRg3QjReeVGydqSGnEG",
  "key10": "2rMkbXJN6bq9Nj4avfX6n3phKPtgrPBMBiJ3mALkbxFXDnwwuegSZoQRerSagb3S2V5dgWuQ6uHggKWvUGHrVC1G",
  "key11": "tBw9HzT43sKxnf1RMWptkh2JPyJcTQskB7RGDP85f7XAbEoPPPHYLxktEaSBPNwkkk8fbgpXHvS8bVTStLKENwS",
  "key12": "3aFGR1eYYcEC6p4Wdwk58JW48WtV5gjHKnFnUncnGfnkVQxHfdqR2bacbxZVg1WB89AascAbohNqTKNjdS1zB7nx",
  "key13": "2qL3aw6ojC67BLNcTTJxti4AosGhtiduJCUFftC1d5AF3SgudkEU3WhZimiKS3huMR3rGdqhTjtqT67McnNiXWGr",
  "key14": "hRY2NNDxXZrnD2QTbYYk1kUSECryTvW5ar45CawKCinDHmKWa19Uo6QmkiLHFQ5aWCjRkn6MSy6N1yCpUYacZcy",
  "key15": "M7EQFCkRQZJJU71H3rCWovR7CKsPq5WRjLX3KwnXdRGLm5c9UqeLamh3N6bjGFfCEqqeKodNUrqrUxWAPnB6o9F",
  "key16": "2G3VmtjMSzPJLfoEWmNmQteLk5nLJdeNjCdQc1z2EwfQo7srP63Ahs1g85VWtUPLTuoSxFvG3DUKCpGFAy9t1drx",
  "key17": "3NsEcZLQj1m9nK1q9LvVdMvY5gLfY5KaCoFmbjLiDCN1rHdqdLqC4U399c4fHsaWDZGyfyvtfhPGtjMjh837isCM",
  "key18": "5WUduJp8BUq4BQP1suJupaVyhUgQtr5xsHeTcYR6qjwkhqRYVnDHgsxohXyAg2svjG2WUcvRHRGsPhApwnhU1hsJ",
  "key19": "2RSxwcn4YtnuCRnujTE8S8ENou9AEnBuMQJjHQvyqkAU4vGXy8AgH6Rn5UP57hJAeywZUEkYNB62SeZXJ2CiA2ps",
  "key20": "3wTzdoKYf1fYAsebE5czLyZNmtqQRiGSNTxAJneZzqRRy2YVQAejrXwnkUsjZe7EYMQDzNTvwwRAZPAavgMH7in7",
  "key21": "4pxtts5DiAT2HF5iT7ycLJPm8SuwyMJK2JFZQuJ8gCjYcY3QFdS1yyKiRMhgZmuQ95R3QWXvZAAjMPFkWUJys1qf",
  "key22": "5tTZtvLpYdWmfijgE4c7RmT9T22CpUJ2TAFSGHdJAoWUeg4LcRztRu3iurvMxY5KVEWaN8vecUUT2v5wdYEvNRfm",
  "key23": "27KXyCGpwsFbF9rYTXoCPkJFHxvo2v5wvTrjg3h9GGMc7avow6Tu99qszZsMU6bWqX5XckoLpw4H9fBRpLrsipY2",
  "key24": "GBHa8TkXaA9CoVroNAmVXkwrx31xLpteoxEfeLaWrvpbvnRsVy6dLLZdv5oeduY6d99UyCSBzEfUNsC61YqqHmU",
  "key25": "2nhNc7JUwWaGPxMfAfAoYfXydBScSUYzB8wn6VzohGQsAJ9qygRKYMWSdGXxLgJBTZu3taQssW8pxmSJafdCHs33",
  "key26": "kyEtNy9QLYWq3mArmpW57JoDkYN1B79jVaQmBn2zujfnB8zQRageY3BZk62h3wUDhaSqFuYDETHBuYp8wuYoK5L",
  "key27": "5XhBKPGEY24fLs9D7hrKE2tNdnbrLbu2QspEKPmALBcA5E9jzf2DXih1TXjDG6KhBidnom43kLYuXV8VSyngC7HM",
  "key28": "5WNcCM5ystHvCbezvcoQkmGNjcoYS3KR3uUbbSoFZ8MFnB1fVCxb4onqebQyXodVbyUciQigmJPwoBJx4EjzqYGL",
  "key29": "2M48FWMRC8LMpoyKdxUGSzKaiSkXq7V6GPRkqSLjXUJxN3LLsw2bYG32wpJ9oXyBo32K2nUhEN4wHe5mh82kXhoA",
  "key30": "5qpZi7F44xsnt5zb7oMfm63DFV8a12bB56CHD2raz4RydLbiuLgP1ekCkw71XBBhkT8NpSKAWyPQZyBZLtuUAFPh",
  "key31": "4WJsXp2NhGEd6Rsw7BKRtDqr99LQD7WjVuYmiqcFDVpNLFrK51aV3KLmt4HwgZExStynbocHNpvUNVGntfdtodU3",
  "key32": "4Ds9tciq7UD4ncqHYBx1717JoLRCxavDMFc6Tcvx8V5PYMiUpWdYHGsBQzXDDw4VfN5akvsPmp9qRKwYRoHBpxJJ",
  "key33": "3fkfBCitCvcUCcrKu7LbzkPRCcoqgiDiGyY5Dq4DPAmhKpNDATTP9zvpHiVg7iavHjs8sQSJAt8DFDfGaASv5dx3",
  "key34": "4eLjHF59LE14KE9y8bzCRFi6BdMpj84ib2ijDGbvcYCPzfd5gS3K1VT8HoJ3awsRghuVcLDzFM1U76kmiS61Pwws",
  "key35": "4YKu5jDQytPWyWfrMiATK4GkXHiNbPkaQo1gLoWDgtCuAC9fo7nuNSWhwq8WxQdXpmXTWHfTrDruEGntzPUBMmFG",
  "key36": "3ThyuKVcifrXTN6SEcwReR84UF4cS7egqQTaxa6K4Ygcv8Lbx6bdZVWRrefN9EvBZuH7No7FRcgMGbQQiQx6oHxg",
  "key37": "3jFrE2Ty587F1nFMYFPd6fyzFHee57LXHEg5MASxBqxB7muL9Vq1bDdT7PybbNvsDR6GHgNE99HQL67nTDi7LLWA",
  "key38": "4dPmJGcoLpZ2DEYZhCJHMn5z1LwY9wHLnejefgGD1Qk31qsTH6QfW8HqD9VMMT8jvJwKy188pz9xV7X6Q4BbzH89",
  "key39": "2Zf31atWtgun3jT7R5KT9FouefQPZBLmk3ApnTtXaQf7eb7BrhMKZcTy5octrtxqerovYwLJ6mXCTY4uQbiMpyqU",
  "key40": "5hhbt6SvNZXFmwDCPCEh3HYPN7vf5dzDcfZ2R7ZmtzwwYu73aHRhiskdE3rR2hEczzNh6A6eT9PemXp33e6TsK5R",
  "key41": "5HDKpmFF1eHgYSbBveA6jRkqKecT82kv1gQVgAzWZ5pJWhq2CEpYx76LAxBJxG9mz8HYarJxhV66C7ZS3kY4Kycy",
  "key42": "2kDzs9gYCGYUznmQ3VZ4qKapps5LHcNyKYfMbbVG4rCiNnbKXRZVVwty7Rm1XJoTEwN3uHiziMWxbfncsvzh4Zfs",
  "key43": "2w9bRnKbvybcDnz8Qf48qt5cGLpmYAMT4D43s8Yw5S2SZuym77Hs8faUksLFSPCYx2RUSdozD4iU7k4QphcL3qqh",
  "key44": "2ngZiVsfytw9oCHD9jEvaNkWXwDa8bopcANzPsYd8niEZh5eee2RVQk4VRM8sweX2HDNx9UjRMWdofd3Jf4Eefj",
  "key45": "5SuYAuesw2pZtMt3Z6iX8SJtJYj5P4ieHdvyKkRXDwuiLhc6ttVTGTseYNuz7bDh672MEPJp7yA1SdUNHX9M529T"
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
