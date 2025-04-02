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
    "4x1giyDYoaJKUCGv8QSDvSrcX1YxKZRRdd9dpSPMm21HWtbSedPKLh9kqvewK1vBQteQPRUNra41qaBP9CiUcHZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uoWUcxWoVzqzDAn39pPEwwUotEXpBfAbJCmFgQUK1NHDZg6E5VPL1EoWd6ceDekuntNGsVezuJUegxgsgJCBmn6",
  "key1": "aLxKU4Pc1MTmBWgH3FSj1aJrBbQ16qrED7AxtmgQm2RhQKJwMS49tgNQ6JLr5mdgkpL8GQJDP4SUEuphtxD2upe",
  "key2": "7G7KDDa8a5ASZCAHNLNdKiRsqQhHN9muKkPUR2fYwvdDhGuQMNnrPrU1SgZGat15M4vfKG29ZykJ9e7SDFBw1QA",
  "key3": "3a2XD47njy6X6ZmBH4TvcxFHf5TZ2sRow9ZxagEQJGDzK4SgBVynmv3gT2RwvnhU8nkeL1xmuBZY1YhHKRP4yeQ9",
  "key4": "3ThdQjw8baBfRmMKzKTKv4U4f2uJ1ZqdZZGWU14VAfmar7S2w7aXpxy29hZw8SdtQYyJdN3ypwNrK2cYTpzsB44y",
  "key5": "4GiEZwXt3TymbvzDeUBLMR3SCDTAC4RjdKPLrFKniJXyH4dVSry2VBsiQNPw971fnoJeD4YTufqrXGgN6NLYMTY6",
  "key6": "5gSyrQr3G3quMX32MWzyGuTopXqbffuEhS2Jt6bnynWTEqPnBg9tNGKZe1hyzGHwNE3KPiPN9yXpYPfnC6PybuWA",
  "key7": "5YUGttNxb2Xzqe4S9ZDSJn6sQ4dLopzz69Pz1m75Y3xm1GPVf6z8BFMMBzs1VhPMW9u3wWeBgN7AW5L32aj6jTh8",
  "key8": "ont8aun9Xq7wKXLPQm3L1nFu4G8A5J44LNU2t1m6Z6WEq4aiK6t2khcpNMZjzgBevgXz2U8YV4sb9vyg9XgDsgV",
  "key9": "2y52DeaD7dhtSkM4ikDJ7t15FCj545UhGHXsvYTC8jGVGtt6cWGiikDyhhRra1xkJkU565RuASLaFmGNoCWP1efL",
  "key10": "5jXr5Bwbdw4UomXkgwvs1BEbsF3qtPvBfpoJQAYEka4b5qBDXVW7nX1QcxGsw2HWTQX9vBpccJ2nA3F4tWisjqjn",
  "key11": "5269997TRx84GYa7qoNEZimhA28u2T6wM2XfRWgLKqN2TeHMkHXGAXyby4fkbuuAaySmwXzGAaW2jQMjzMqRYEE3",
  "key12": "5kAAVFFb4qsfJ4rPw7VMNjgMNwFQPFdkriUAQZ32caxqm4nWnvzntaf5bqAjz7oBAmyoXMShMzHz42nyAG98cQNd",
  "key13": "5x7PXchT4tabvMVKxDvRmdyfaTvJH6LXysTn2ZTRpahtTzMK4rJDy5hPxrnGPnCQcggBKexFVzGYcHmTwJwkN9F",
  "key14": "2kAShpoUQTFuzFGsGrqc9o7caxh85LEJ8YY2wEXgjoVgyNc4yBvS9BEANzkSfMKaqNPBvFZggcnAwZx5kzX2M5BW",
  "key15": "4Zhmju1fGH8gYGnk4EPYim4STo3SfjMHsnmjYi6Sfw9h4zjHuNcPnjiu2B8WDimi3LWmmDHrZqSc7ejxSz5P1vuJ",
  "key16": "NhmseB28dDUK9LXzZTanug5Ej8rNi9CYR88Ds5qGpeigiGTKziC6A9k3tDiUwSQumGAkqvnaftZ9iXsFohEtqVD",
  "key17": "5BLzwNauATwh9pBSMKJKgLfEp7n2gxfgPGjv3WCv3sQynNwxtF4ivxB3znCfZkYM9ZccYk2NCDkfkuryafVDSkeW",
  "key18": "5kzWf4Wpc4pmWEzXJALCWiD7BarsfRvrDJ1JFm3amEHZiUFiwvHS6XxtXriBEeLxUNJ7P4UniN2hQynYWPYbKF1e",
  "key19": "2FzHztiQthwbZRHHetU8M1JGYxRk377GQGCzvgBUmTJFT7eWC6j1Mr4ktbL87oqNX56kSkNefZuDnGkwookQPfmJ",
  "key20": "3Z2ZsqTukc8iMJEr7W26TxHXytnKQXoeJ9KEQdbP1xpAEn6u6Hy39m676fZWABrsaZRWtuXjTgnRu7XakAqDynaE",
  "key21": "3wt9jfUZ3BGYkupbXycQPnujAhdZzhUq41rtLnAbrvfac19wVWhW7EbBcxjSuWT5dpBKaGT5jd5zHYs3g7BEHzFC",
  "key22": "5jvayHyKBvRE1zQEaEvCMSYCiz8ZZWF9Fw4EHMRGqvZLffzdz8NvkpcYh1mm3AZUXZTDETnVoqWTSzvexeksuMmb",
  "key23": "66Nmz1ER6mJjFy4XvnyGWqvnnD3MEqJ7T3y2kP8EM1YPjcFAFPJ6Y6KdczPHq1jYHo9dQRCXX2vwGPT8pmRvy5vf",
  "key24": "3yGhqjLVjLaNbEJjR9XV2LYH37snE6iJhxrfMcedRw6v3fbnmp1Pb4xfbi9v3VktVoHn9TXYc3suaWWVAC9vaQV8",
  "key25": "fz5BxSgxbECQhYn47soYzNS2LaU63Haxc8wZGsxDfgu6NPvpKJ8h99AiCDS7DQKVNohtbcPKS3my5rDjDtgcfUU",
  "key26": "2nHVmrzv24p9BpRwEb9ka7mAGZ2DXB4SgTBkiAwqQQ9f6LMWt6umxh18UHqF8tnXHLCCrCgnFVUG4WYqKwfsTaK7",
  "key27": "3pHGow46MWpYzQLhK3RYEf4vY6j4F1yVgenewf5w272jknpZnMWzYH1RyxqR6Cx4uKWkJnN5vofCWZxs6irnVm6L",
  "key28": "4V9Q55PBSrznhSP5Ut8NM2cfW2fhcPwYg4YQbtrUWTGKanWyWx6pLZDQ9nYBXqAJgytvJfP1L6s1HiE9dDx9eiRD",
  "key29": "3c6kgVWk6GcpXz6craRHUWEvpJXAUVUcK88XGqEYgx2DhkA1NzHHYjqkbvnwaKUw9t9LnXYeBakhpuBLiJMAcate",
  "key30": "3MFV2a9K22zEAb2FicD3AXst9gzsrQULwJN4PScSzn7xQQDsLVfWckezhHi5MUsrq5dpt2B9regu3qPyDGxU65Bk"
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
