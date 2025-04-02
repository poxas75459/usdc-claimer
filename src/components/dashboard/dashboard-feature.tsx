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
    "4qrv1CDRkCDRjYycVk5eJHsWoNbSiMAGNPigEo9cr54jcYMGAUxi41AMojKnPgVnbYRpxDyoZATL3TX9vdSS1Md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Te3ZcG24unLHFRUmr4mLRGtTnoBSRne1xYQsCoZ2ZZxZhAYuyAMfYjo5Ln6sNjpFLnLNshJkWPhkGeDhY2qmc5q",
  "key1": "2yZuBygXw1MdqyucgSYr4jvjjQ1HNk25qLEq2fhG76jdQwNkv1BWYebFMDxpHsLJo15eDHFnRLExRUELnFF8iko",
  "key2": "tmiV5SJL8nXBBZZXXwcLoUNEQnLZ6MK5kmdEyYfA6xGcPovZtaxG5w13bjbVqv1qGVG3BpHsuZGAikY3R8WGyWY",
  "key3": "3WtQatn6QHsn4uDFzi8cy6WiyjDzgtaZ9BEBYcVgb35Sg3JvYKnVk7ckk7JKkJ3Q1yo4qeUvTuujcapRNo9G7j4Q",
  "key4": "3f35X2M3Cznz1C21AFHxiaBw2YaJbNYhpGSKkrPBu56Yxt6KAPNeYPXCyqMNTmh8yf78ALoER1bvhN45uzA3JNsk",
  "key5": "4dN4yBzJoeNixCsbksG1rAjr9ENPMMJMKKHQFsQ7k1gz5Ydyf1dCe9gJJpXMWZmxp8MGYSNN6w9xGzJXiUaNAQ1Z",
  "key6": "4Uwk3x7HRyWx5zLJxZZFrdCu3n8Fmp2sBW4L1mmmBwpX1RbfSwotzsZDESmZpQLqLpwToM5UrNnehjmLDEBHHt3i",
  "key7": "4nhdC8tQvU8jLBZsK8vDAT2LLwq676BEhzHEgxzx4sAzhMEpwCDNud1okLihHTZfnQ6Zt3gPg6HQuY8bUgJ8dgCy",
  "key8": "5VnuPihXV5BdFwJW1UNkTXQzRZBJmWjoLAZvSYCUxnSfhSzcqvRJPhMkhSKjefHseADMV8PUAMNdJ2U6oYTVSDmW",
  "key9": "4QkUyDZ43LM42FexJ5sKF26ev6YBog2UAwPvvkYvZv2TdMZCnGR5Tj1AbUqxWYnZMJWeAR2iQpmoxeWJ28erjn7E",
  "key10": "5dsrU9m33QtFL6qdJQoTwWyt6gvv6FtByTNNMSwRiJ9rqv7H2YVR91x6RE9qtgRvg9M12jjX5qieAxcsNMWzLpJH",
  "key11": "5qcWz3juEns649sEj8MBKD49TKkebnR7Eh7cgBbAKso24emKgy1KPRC6Jka5DTmGfpGhJEw4CtZ8KDytJp6St7mb",
  "key12": "4JqpYQiLe8Q6qK3RyiuJ6mNnZ93Pg8d9FdMvmKjsiiaFyrNvtw4CqMSrepqPiBHsGK5qoeDUd2vmZkhsJ8X4yGd",
  "key13": "3nWasiokJZtrAgSdzTQ8KPHududp8syQ4ZvpxPsvbeS85jyvxPGNn9BbeJHMGzCErRJUav1Lu8Z9Lq3edZJbcYFG",
  "key14": "5rmdvsF2wTn2DJCtXnqDQcXkXabZg1DRjAKxbgrVSP8Pz9jHGhkU1SKpqxMuRVpkDKhJzC38Vz9gGQJcqLyTJr3d",
  "key15": "j6xg2DQoiAhWzDgvpm8aovCF5tnUw5spaheJfATNMF9TjfLbgsSVuJnQN669ZQcVZKuXTg9zBjADEvj3ptjqbm6",
  "key16": "3iVGRRW47qHmN7oRfHsYkWPTeHjkgAcCEpVqnvhzgzSVmo62SPsfeBEpuJ2XuYLUzLwBhZ9ZMKMV7E7uoW3o3RB8",
  "key17": "54eAyMMnyeMVo72GLHEXp8gJvNps4RdCa8hAJvUCHzfFwfXRtdZDcw5yftpuXHoedf8ymcEEz32yQBdUNivJNxdG",
  "key18": "2wpaGyJnK6g29CbWV338jUZFteHBF61xtgtLnAFTnD89awREcuGtKKE9UEzbWACxJrcA2xJqD3YYZGL3KZndgPBL",
  "key19": "3Sa1pao7iJrHzbRRjkRqiWuPucUtfEpzdQgDrTYzYFM8tuH5jJw6hAX1FX2tyMocTPuBQvNRrSitQ8h6LBdfjVzY",
  "key20": "2JRhJR8WQdJXY5UudtLmA9Lr7G4NADvTjCn4MPCucTPivsgxQreUNuvEzBfxFAq2yMBi2WmHsaR8W5gNSVpKu71c",
  "key21": "55xJJfRSpMdDHEt2dcQ1ToVVuVPM3zsMLyBWabCYEfixG1zJE7JJgYuQ5cXTg8sfEw6mZSU89UpKQyn2fmrLvtFo",
  "key22": "4hw1Hw6nxZx9eEM2bTVtwZF8Kccqbe8nJtpaCcHbDjjt3f6WDkSCU7tiZqzsKMLfTbDzkudDnNhdmFTrJz3A9ueM",
  "key23": "35wS5tWbcZ1fwKnjYcTDiFXxrkKZ54RcaoYxh7qknCmWhBURqz9px7Xs9B8npUCH11Af36hUQR66CgJM6PzKCiUD",
  "key24": "2aZPHBKRJXCDM1SYZqkPCdJUGWb3PTfbHn5HDarin4ZMJzBBYdLosxsorhrhea4ggZQD5tVkaVC866rNrK47EUjq",
  "key25": "5kdf1f69N4qzgUrDw8N9ZtrXwumsW5w1jkGN63UBY2YfFqqPcigqrLK72LQwgHU9DvHkj95Qo46mKZ6qQVQJUQym",
  "key26": "5Mu3PG9iC899XjyL8GdM3v4mba8ynoKdSfwpVaFndU9QS4HKee936Hyybx91nSA2Vr8ZfiY8jJJ3WyGGydU3EHK8",
  "key27": "w7aQYZWDWzxhUcyo9q6DMnBRmty3hkQdwzSLxm9Xz6qdCZua21mT2sem3SFfukKECANbyRWhy7xM3mFbauz97rd",
  "key28": "5SdFDZrkMFhQYZMyzzA1io1vp152h7FUtdXSJqBwAn3Lx7pQrSQLEDn59EakJTMaTSWaUWiEdkuvUfLLosuh4cUG",
  "key29": "3oyzoxVJtbSnrPjYNnpfbgHGqDc8Yoe6yGC4Ga1NsMUQomtVJoFkKCpobQgUGQDV46pDdQgcyz2RuFFCNPgSTPeQ",
  "key30": "5h8LP6ma4D2DRE6SHoLgMgBxQsu3xanuWSgjzRnjc8DWaPV8NPRqZZuLLMv1GSS9UfvMA6nkseMDvWoD1C7g79an"
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
