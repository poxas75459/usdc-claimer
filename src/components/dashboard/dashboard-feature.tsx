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
    "5anutF9DSQH4DaztWuLwsunVoqfd6Exus1tE2F924fk3J7F9o6oVt6LCCnL2pRzupBa8ft2SXiRcKris3TZ3tvQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "235jy6MTvyRog8dQgSWy1kQwYD7re1WYhWRbknjGkFBCsLaQgAjzsSPjZB5zp7HdBzYA2wGWvX7hWYWJMw4SrDXw",
  "key1": "3UuDo1JYVX8btVJfdchTNjL9t3uVMFC69soRmKWqXWtW9GkX33qZirzcmCtKpKcz7xfEpFo5vK7UdHoFSzqYuHn5",
  "key2": "5eXQtCVbzPc79uu22SVnL3cWGPKvMmR2h768HPZViUNVXLx7kMoac2Msa3cXagVoLsgJWdmxh2kMfdv2Re4PM32S",
  "key3": "3aFY5BVo3bU2HdHfagmjAzRKG8AHQAbuuXs2vXNAymuuZ3Dkrx3qyhEFSjqxcHYqr28RLeJrtTD7rVmBY7vyg6MD",
  "key4": "2F3TTVnJDVAJrzSQtzD7tUJFUSNkQonDjbTkDXoJFHHU3vij4zUt8gZcrbmTPsjy9QTxokAQHoABFPTu2RkbyKoB",
  "key5": "2yPdC4UuQ2Wq3D5PREw7s1LF5PP1fuuPrYNoBm2XhAiKS3o4qSJtL7xPSAM7iSqb4zsqRSyxAuETqjTsJ3pZrof7",
  "key6": "49cKtEW24E9mPyCD4nU7swyWSihvBcahKGtWVqPXEQZcrYuhzQgfNYoYXqkUGQubAxzgyVxkgCkmKzcdTJFh4CjY",
  "key7": "4wd5rgdo5WpUBoq74aUrZuwxGANqTBLBh7geMGpC1rYbooGXt29paqMzy61UbqYpwVmM5ny5RyxvUR6a1FWwBeB3",
  "key8": "3qRe2q8snKFBNufpCoHfF255ZWHFRo1UoEHijQGsPXoLBA1KTDdKsirEKf6pbCgXpaXRHEyuYjo5AewZrYsJk4Dc",
  "key9": "2GHdN2zTHRGbNALBRibuo72C9kMRbyLSreNsxv3DiivZB1fHyQ9AM3JWPtPCTCAC999frPKyBqRWeujnDjyQzEiH",
  "key10": "3SMa7nSuuboXQuxHpwZZBxG9Yokz9yW1qYTmZvk32SCQqo48gGF3erkcKFVApVgkdcB4Y6FNaxT1z7p1ZKkr9Vb1",
  "key11": "2ZaFDABapXPGxH7BPNqBKwGNFV1gRhPDVepA3yG3NcQM5uVLxPfm5LhtAtf82BhRikM8y7XPfzTSctYHhJxjtKP9",
  "key12": "QdxL3wk3n9c7jqZ9pa2Tese7cJNsAwyBcJJvo57yLU9MGXuFywx3DakWb9zb6NGxRwvCAVCdzu53oVPhvm5PuWe",
  "key13": "E2V4VyYaQeiWpyYe9UcSMHo1mCqUURjr7k8kR6X9mm7zRE8iJgJT6zruypFRdeaYfvS5SUX8qAnpCtq2SZmMVfq",
  "key14": "3kC1osvTJ31gzM56bKAAQTLtNQBaAFnwb5BoHzx11wBWFNArA9jMifasfcnJUjNigZYH7112mEQWeMFfAp9WUEua",
  "key15": "4biqbrTNqGfSzmKSwL4M2SQ1Q7Zosg9DVPoQX6VVG6dbcAa2pYLZk4LyKscXb9v9twHp4fSbYnS7SvBm9HEdYZUz",
  "key16": "4EqYes3rTsUR2WpTEbeRypc9snPZvv7DZZz74riARZ61cFKp9mJtJfLXE8GHgrxUL1DHxf4YGy9jMMvctj3V1BaP",
  "key17": "tzaD96cXQjxF57NbnYFbvKKX6N2S6czZ6Zw8WKoZqPUcy5pt72F5ZNhpNNXu4QsNbuMxdLkEUHqKy6YLjmUTVD7",
  "key18": "CGQf9XDBS7CAxpdNgFnjWDFBRTAxULcABgbErL2DgAccLeDjvPvkevpugu5uFE16GrktJjCuJzLUi9JUne9hPCA",
  "key19": "2KM3pxW49uBByiSCKETTvPAAdzVuLtiZyyq8FT8pnNCTmUqf5ZhAp1M5fQ3gTvyPQsGtUJKuDBbuhU3istEMHUph",
  "key20": "27qSn1dwWw3JFL7TurATQxxm7Vk3Q9eRdpyp3w4dMa4Cg4AUay97Et87T4w4DpMmwTyjdYAeau9fPp5vii2gcdi8",
  "key21": "GuWP8Jo4V75Ms9QhYTgDSHtLY7i56iVsZdzbvwHPBoog6T9PnbLXTVafK8e9f4VjsL1kJyjayUDPAJdSJ2AsxZQ",
  "key22": "2g1wMgmFYuY4vYCmmMrqQCp4MoGFfGWmcbKJBNdKL7ZxUDDzBu6L5YUj8XY2GhiGmpSAgDDub2fMhW6rNCWxJw1N",
  "key23": "5UP8BHkjfavA3G9iWvsUorwW4LjS29nQK4VEhQ8pmHnnX1kVin3eFor2UWzSFsQPU8GmaMFFVMKzH5NACBqYCVrj",
  "key24": "5jj5Vks2rhp8zQb5r3EqngEqkSkBcUaEbuK3Xk6vuPqCBuuHGyNK6xnSfJfApY3Yy88uY7XPQ4GrP85LJTSvA4SR",
  "key25": "Pu54ynPu6sjJQqGfyi3dHW2gpCsGWbT7FxLNYjFCsT4aDedu6fHECQSiYvYSZc8zv7fBF36eQAAoLVQ929uhjDX",
  "key26": "614BmbddPK6cQuw6h7KyK7krygr7n521P9Hfj2gdzMAFG5VupbHawPuBpt1qGYNjzun2SSMFDG6mCC6kJW6tMXEs",
  "key27": "4KJgBuRSCiVrZLcWYhDhJ5ScjNDxXZeZV7bjm3qN4BB76qj2JdJ45WqJYzpxjUti717K9VXJA2v8btwMZammKQD3",
  "key28": "5WJ1VnYqWjPHHhWVridytVD4Bviedj2Pf9TVRTUo4NEcjDwSRoCGoJJc8cdB6vfL7uCYvoQgYiPnyJqbYaPFsoAn",
  "key29": "4nU6NtxG6dj1GwTF9dx4XGZtraCiiLBMUxRhu8JEwnodRBu5D5QykmZnejFAw1pwMJQcWc2BybxMPmK6uUPov17T",
  "key30": "5jgVHwsFoPFEBV3Mkre4wUqFN5ZfifP3WxbL6Zr5CG4vLUZ2aAWaHcyhqXu1165RxeZfy3g6Vd8iEE9Ec3esRCKF",
  "key31": "2cMtaBBW5nPi2G9q7gHLiZ11g5MDQnrZa5Rx7URLtqn4xr9vYWp5CwXDEZc5vwwqxXPiD1F9pQQn2s7Tkb9i6AZX",
  "key32": "eLNZ8YsxgdE52cvakzsjxVz3aFbSbSpQDCmmNwEgjv5XXBoUHQ7yY5oc93KvXELGn8ZDS262UWGLtKzxVgPFDtm",
  "key33": "2rrx3sP7bb17RZJLC69cRbJfgCBHtXEZfF3g7mkuNvn2c835JrUNvk5BTSnkv19x2xidcgmjZd3h6ZLCah128D1J",
  "key34": "3PFHqbgjvzQMuk3owQ1r4i94DgUVqpgV39vsPv8o8rbDYzfctaj9tcXqTkVZdMPbSh9hDEDM4AZJKbctEuAeiP2M",
  "key35": "4JczUTnfkXKzho7hebWDe8JsM5wkVHbms883hft19zERvSBQzUcJj3LwuFXADcFgsjiRT44shQn4dkutqLX8UBP1",
  "key36": "2eqRzGQAkNxs6XRA9eEsKqAd3GSrQH7cv3NYV3dniFVt7Wjt5abjqmGuvjSCL39iSFtLc88sZs2AUthaKAVu78n6",
  "key37": "4fA7H4hLoS61jtHgDWqpRs58PYZM2tHJGhEURLHL7Ug3Zuup3WYHVBcoPSNoq9iu57siLVmH6ZrUvEuZzqxHyrvr",
  "key38": "23u782aLiVMmaDCBamP1AWZLScMTbmNiuTXDYpzUDzLjUWwbq9pSEgS79mNk7REkTBWCG9wmsEjf4MYgA9p4XXBc"
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
