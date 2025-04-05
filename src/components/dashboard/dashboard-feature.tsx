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
    "2xZNA1u77L7ZjR6esSNvTfHbtyk7nfxjNe2MQawfRoY2CFzAp2Rx7EsQv5gzmhCBa9rwtf1s6qvjcHbdpX9Uk9fN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sUUZUAVo3f3cnVWZfmR71m9Wkwch5YYoZGU7RWyVK9H8XoTfbfKWqwayJVq9hmRbmGRuosMz24UTRsBedy2uxvM",
  "key1": "EG1R62yuTxqUD9iTmn71WYTYCuSEGydfdQ87XAaknJtAMush9cPced8N9dQMrgpNAZRGkHGccHVkMTviaRrQiaH",
  "key2": "55benmh4eLvqQeBMduXCRZFLVzFMRCocDBdbdBSLLoB74wAfvEtduKegaJRnLuKT6uNw1aZRim1x9GRx1u6U781T",
  "key3": "3AS2nWmxYGY9wNQnHgNsvcq918C5DB3QuzaW4CXsk1RurpBqY1Q1Tdvv8t57tFqaE2JRuWFNpcNswrewiPSSxbB4",
  "key4": "xoPqcR2hFGWS1xc95kYHMwmACD1mnBJHtiFH1ayimcJyipprCFHmS9xYom9sY5F2mNgHE8Fs815rMQrH5zjyhC4",
  "key5": "43d2zChyyStcjc7Co79jV3d7XTAY26reawemTzHdbP7WU9mxQG9pZFpoyNK3MHT7S5QcTqggrJ3PFBGzhwF9AaMs",
  "key6": "2eWh6PiyszgjYwW8BymEBCsrtDXdYSvvdrxK2e233QjVMTh43occ8MeQFwPrkE8m17ngCKiZCdqyb96hume4MpHr",
  "key7": "2CmY2bqijikD8ssqSgkKyipBMcwnFDua69zszCUrn3J6LuFHxGzfx9uA4t8Mv1raTjwHec2cgsvh3Ri1ZtT5hZvu",
  "key8": "HxaApaVfJXHzPtyLE5irBswoiQ7xDhhpwNNjh2CC6EdbQNY7oWX4JDiyvRKMyvgoF8Us5HHqnuvfdxBoZm4xumQ",
  "key9": "59g37PsFmyMikd17CxBFvAby1poMLw4xC7KZ8kKTbGd5ZyF2E6EnGHgLk9UC84EkDHkzfL9y7ecAY9j7pCuqJajo",
  "key10": "Btp3kVyvyLqgn6xLcWQqmVzMR4AQbVW8NcMtcGay8Cr6uKMLm6eerSKJNXjggJCrjNxKKyMzyfMbbbyz2xxRzFr",
  "key11": "59ybk96LLi3spA47eFprtdjxLruM7QWKvHcLfhnuwnp24d3WxLZDq7gXDS2ftUT9CbGrUvrjQi1EwSgizHGPRzM1",
  "key12": "2g87zMPCynEJ79QqDu4VfwcchuZj4d9P3kJU5zffBgt5ZDwkRiojaX7Bax67JQkWpstaoKDPtE3fLiycD63L6eJL",
  "key13": "5qNWSfkaDtxG3wghfXJF3XFywNGUoGciQ5muuzFR1T8uanion59gFVDwsPonNZAvQs8NTJcqk5eay64WhtmFpSnN",
  "key14": "5yno2a9FRhJ2efbqUNJLyZC5r5zPTMZUgNXf7fXDv7qfd9yLezu8hMwZeSibSu1Nq3sRoLrUtBJqM7fBKncvqw1c",
  "key15": "okdVYDHdfHpDCSnUxSy1ZG4XtDy1vNsAFTW67vW1dy9Fewy5kkQp6ux53zB12VyuUkCCLDEmQVTeCb2U3keKfYS",
  "key16": "2k5aDrrTxpQXUnDuFn6mjMKn7uULhNnGGedsUWp2EVWudMnPf71VL932XVScBSvvmSgXkMkyPkTWWZoUeYXrji4m",
  "key17": "5yN2wZmfurKZsvAMeSXvqA2Jt9f73Qt6fepJh76YUB5XyuEp232wGu3rhTn3hRZyBXeeg2c1AMGfhJmfxWuk74Gt",
  "key18": "3ekbmbQfCGj343HrmZTWHAw4z6hZFHL9NxG3mkHJtangE6DaBYCyMUNvE4Qsui3PyhzAwtdavddKcRKZdZHN5eme",
  "key19": "4sjYsCY4EXJ5HxAmCyg8shL4KGVwbxPJmoipmE17osw4atAh7KjXWf3ZAu36pc15NDhKaPPyXubaWjs54DAkbvt4",
  "key20": "32DJXpNHw3mjWLCJPLc4TmRtYLyCy27xevaz5PQZoqupskeVRb54Bvgwru1CSFGpebqgx9PpMXj64tkE4fbw195K",
  "key21": "63GS8hCNe3DL8tS4cu28E3JyWR2E1jYGgDK7Eg2DxgEYe29bLZtRv5ccBFEUf1NwMMTWw3AEctpEGTdshDV2h5LG",
  "key22": "3wYtHyhhZxq28ass8HPuxiQSXBSL8F98v8AJvT58Z3Vmn3pvZJhdHpXBe8x5Uqyo4SzEJzMdUXiKf8WbfTb8Pn44",
  "key23": "42ZQs15LmRYoj1ZcrsWHGj1aqQLnwRmRJtqvCc4uJP8Wpoo59xjs55CnvRU9ao4iGcNNvPsJ5UvnaYfnd5nsMYjF",
  "key24": "2UQ576cTiB7QGK6gV2w8TxQzqMUaaF68TiGESV4Mupb6Ndckc6aYXYQsonjRKFUxi7gxGqZYA4S41JVS4jjRz9No"
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
