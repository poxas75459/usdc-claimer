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
    "2m27tnEC1YBQrA3njHm2r2J5skr6EkVS9ddy9b7TqGSoqez3VnDkABh36mRUA5fiuGAixfeDLBNhMsV1c3nKw5Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r9LNQQvbtKVJQq4VRYu35KScfGzTvDdXgswnwLezdBWp2JgWEjA5RmV3xQ3gx9ESBDGFWP8vZxpBmcz6ZTTzkBq",
  "key1": "2u8AUqVKrmdhrgoZ6gUkW54b9tUMscMw6h5ESLMxDGozU1VbbSRcBv2s6VwkQVFHgwxH3pXzoqUttgkkUggpN8Wr",
  "key2": "5eKLhHBzz2CzqpS7ijj9JRoDk4aSSmhVuPWfKBmUeDZnRZ2kg77yzxzkw296q2wSnnZ7dbiecM5JMZUdFM8XLryt",
  "key3": "3TYxzbyniCFT45UGfcu6vRhw6JnAJy7BmicsVYwtEcS9bzGaG4hBFfcBrcSQL1sYbemMUrjcHfYyXJKNf9LfK1bh",
  "key4": "2fRb5pk5WP43oSCcaap7ThJU8LfUwBbZLi3F3mhLNezfRg4FMv9Rh65Q2uM3U89DYLHccQ9jWKro2jpqLgnMHP3k",
  "key5": "egkkBWVABRvt5fu8BMd7oAxLqJkNeKs45jzK2ZN5kNpmk5t5CvwjEw1wNhQnjEeHieWHwpcwJZdnTjiKs15BXNR",
  "key6": "49tWwj9cRzGpuCKAd29jApgT2SgwRMf44ySH89iK4g1iBXsbLXEtWbKRubnhRxSKB1xonFfRtnNf3EnMmYEQJdky",
  "key7": "3tR4e1Hbx3TUcaFYt3NPEUZvgYodx1teonNpE13Fmg94UrM9CmUQ3sqXpdwuKdmvjRQNvJChMSCQe6znGzD1s462",
  "key8": "2nsb8BLN27GkrMtckXmzuMYUqREyWNLAH791oUsJfZWcb2goesqWWHdk9Rs3BSLukdgeu5Z9ou4QcVRsKJuD5hNr",
  "key9": "5ZKL6xY5UgZDknbutBhzwxFFxNc7HFRsqDA1NU9eSRe29VDH3cZa7BaUAmnfzAEdyWJgc4x9HcAyLTcbYTXDp5d2",
  "key10": "3JmnosC63ubs3XMEZ4NsGWcfdqmC3DjQ1ZQRSWc1BpkmmpYkkbLs8Q34DoUH4B8YJqFFy8oMBq8BTCmxdGYtXhdy",
  "key11": "5xMUuAiGzgZ6bTprsscAidVwnQmSDVU4bvtWEASS3tXFrQrdjg3a1hSnyk2EKvKrxDQjPPbYFsjKmeZT3hva1z3K",
  "key12": "5EUaJZHqWV1VRZdbnYDxDTF1851c9WGGHArXQMz5CjZY7n5anePn8y2F5GJPGokuvNjM1x6onam8NF1dsKV1TrUe",
  "key13": "4jECKhH6mfSRv1T3LzVj45rWNDEzBcHLmiE6CF69SdFjj2djDVWQc477csFXhdYAVGEvk9cYP3wGGiJ8XpdmydUW",
  "key14": "548gTvC3TTz7mX26Soq7kxi6S9GfYq7iLYkXmd3BdfACLmhUKMh9cNfa9pketbsXQP1QEChsLVeyWQi5XoRhtZqu",
  "key15": "4EWVrkMbw7hBPLKj8LhqBfMtJYf4WWf8nya92j1LHtCN6RfCmEYVxdYmL78tYxJMpYV2vQ5fu8CJjAMsLcC6hNg1",
  "key16": "2BVFnPd7nZmVngyucY3FmCDW3NJJGQynggFfXsM7CeMdV85vrRCWmGD84fJRtAA6DT3BHaWEne2Xnm2pejnPGys2",
  "key17": "55iQtGm1uEy9DnxqUpM1jLkNQ6qK11Uq1HahCnVvoo9rjj9vVBfywD35saZZ4G1vkTBKqeGvCcGDSawe6Uh4GbTE",
  "key18": "7hZBa8CDHJKPAyyiHMiDgmByHDQUMwKrU3ntC9Th79yrJcnP1cuA5dC728UzWn8s8S2L8jZFffteUAY2JHViJSt",
  "key19": "54zVfTjzaYJKw9bMj1QrvsdGPMH5mj2ztE7WEXymta2eU9ExNNRyVmk8fPQ6rvpsZaQo7CxQH2waZ16RTLSibf7a",
  "key20": "2cq7pv4hyfUvhESezvZ6KXp9hSxQQvU7bj77oLApcJZLhVL5Uum1HmQRWdNzUM1jXcTbsssLPJYFTFRtu6bKntzo",
  "key21": "N2BHYXwsQV9sdEdwgwRzBVZoVzLT615FsJAmzkN2PHF6Ut2afmAbqNESDP3bAthXD6VVTbgAk1ySYTf2W5Qfzhk",
  "key22": "5j1jHCBr4mLtZpYpgKTkKZNSo6pw8gBJFnexPeUZKnXu7nci9DV9mPqA33vaWfrX4yDAGbDnEXJfwZKUyq4wbEkA",
  "key23": "5nrqR52pefvhDpdeAPBoqsdE62AQf87npiQCHFocBcdvst2sUtgHkTUHei3tMSHk9PvoTFhp2uXehmSpqJjQigmE",
  "key24": "5sMH5aXiwhnZR8BRXy6VQR1jvBSz98JtAvXtRviQB5vGXC9W11RQuUSUA6HLSMtPKtpmeYD5nuHLhs5QkyqVmU4t",
  "key25": "5CpQ7z4zLrdqMxqKqERkbRGjgFVTqfeQxAjy9t3yFT6P1CfNXCQPyHs2oBtrW1PsG1WqiDm3AYPMurLLWGV9DG1V",
  "key26": "4rJoJ4c1t9UhLkoy7TskoK2zCvhKBGTGU7JZgyMW1XfUq2SoW3Nn7o7DvJt9kFBtsKMBGZApRVUngMDmTZyeXZbk",
  "key27": "5fsz6tSGaVL6x4mVAucFFcGF93zoGutQGhheGn1zQ5bU3q4Uaa346QiVRHWGxPnLVwHHLhxbs34tMjwwRYqKjrZ5",
  "key28": "21HraBG9rCn7fN3ejWnqHiyRBnmd5SKzWkFo7HhdeZF4F2Apsu9SPfB1q4TzQZeKVmPYYddPx9RUvjCpgC9h2HK3"
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
