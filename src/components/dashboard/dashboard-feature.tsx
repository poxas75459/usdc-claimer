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
    "3JC4HDMR3DGcQgRixSjfcctnEAwQLwrXwUULt37ZsALxDz3sdHdrShy9tnKr3nTHy5BKxJPHve3CSETDiFDQhwP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YuhtmEJ6BhioffjWv8epN3FCAiJXsK2Gbuc5BK9caUgNwt7YUDbUMVhdT2psmCM2BFNhqBwsyLnszCitzPbHQ3N",
  "key1": "7pZa8jhCECd6iENBYj5kEwFztTABHNgxtfvNBpQnskC1q6oWtZhmwoGPEeNkid2ZPSVRamJsrLTKAuo3GeJ8PWB",
  "key2": "ioziuVK3rYF1jAGa1ke4JHsrtUm889ZivfALdfoqquqzHuZjaFH3o39nt1PamLaoz9Hh3Rn6GxnoKEmE1M7kCio",
  "key3": "4vko8KTJsTShpo5dCiGK8fiQm8cRWfUgpeXiqGojyCcsuLudqiDNczsB55di4x5avrchzWKxLZp9WJeDvVHCYdz4",
  "key4": "3VqXkotzmjfJhmEHbY6Q4S7N2ZGyhJxevFeFu9c9tYWv65FKwkcT5JvSGAeGBABRHPr35cGNZt28V7LTJnhNmhHn",
  "key5": "CJj7NnQei95s2zSf48zucwSfcfqUVk3HuGkNSvTmaXx8tAXPxj5rSGJqw7GkR7vTrn2irYGGVb6bauiBM3iDzh2",
  "key6": "SLyohh47kVzuiw2Jw6JmnzPjpk6nXXCNJBerEmkLuGt92pgXYri9ybyWDAaKxaXJZsPkN2Nmddm9VwdqaiwWG1W",
  "key7": "4CoRtrGaXqnjhstco5UDjyGG7bM4osB7pEhgEEQWqfXg6HcHyAJMAog2yrHzSxV2Zx4jWqpNbqf1VEDyZc3byGyA",
  "key8": "5cASY724stmvGbsXs3d1BcLoWhEqtjJbs3HHLgSGPcdk1d3Yng912H2bk6Ju2X7eGQfbqVZ1KiXiEnt2gyHtkhFq",
  "key9": "5aFcC5csK3xNnmw3JNBYeLoe5ga89xD2nB49UmjsGZVKFdXnPracyZqu8SkGqDRaj6VnhuGoN4rLuxBpZpFJaHGZ",
  "key10": "4Z7Cx7VgtnDddJG8ogvvbsSva3eBfnC746d1rNGkVVaELzkNTTdFNCB8btps3HPcZWMSGbrJriY5AREdXxGPHbmm",
  "key11": "tQoLxdSqPHY2Mx7nEe1CNRDijFSkN3pLzkyynbJGYTRoAdv46GYH3cCqU8RiSBUFWW4rEoa4U7LBuZV96o7fm1d",
  "key12": "mgZgkS2mTLWCwgPT8npkaBehy95AT84ZEiwY8XpHTq3SKzhvfVHpyraTo8KnHsMR3F8VDWmfdWt6ATMQS7jHW7s",
  "key13": "UJuZ1fC3NRG4C2cSjgn7bfo86JpRRQAHm35vKogWFi9n7bUY86iP3vxJauymGCgcUr9rC5zWrphub6H54S2FUzr",
  "key14": "2kRrkwZHGQDiKSudGqMLhNFYmaaqq9fGApRpPTj43o2TfSqeegF6aFAmLk4TXwqyQMY8fBfutLJoxNgi7aTRSnui",
  "key15": "4sY1mw2m6LgVL7hSnLgrFtANPCiWkp7F3ektHZQNbYWfoE9peZ9FqzhWUYkgTrTz3xkozVHsSmCq61yoBvXRQU7e",
  "key16": "4EjyCX6gHayLui4q8JtJPWvsKWrQmRcPhrCCVDDi68Xt1mKDzCFn4Q3vMqP5LeSzZ2wGApRzAU4BYA7cXXw1mxzY",
  "key17": "28UXfjuTQaXhrdzrRgmzyqsfd18qpoUEk8KDmQ11f48478eQ7WqQxS88bkFkSaiLD8eSVE98QhaPsgco8tuY6jYc",
  "key18": "5AfSdS9S8YchsTCD2bEzwA9LrrnAXQWZS2voeNoy3KiBqb59ShJYNH1qqqikK7evCr5UfRJ7syWZ5sDQTKzKVmXn",
  "key19": "tUw8sbDtV57WLm4JziM6m3sV4CL89A1je5MvYegth2812barn8VFH6eqBbGw4ju1tLa3QP88mGV1seEZoH9XBXu",
  "key20": "559yfit2oiE3TAnaBY6YXbndkpaZEj487bq3qjQz8ARdqKvTKhH59eYzwcL2UytDYJtQooZWPXnYfmtAAKHHr4pz",
  "key21": "3tmHRCvRrDdxNi8kWd2RAueYmPugeSrZG4nU6NJ9wgJY4275r1VgZ4aVGkLjDxYt17fosascmpVjYdYutsPZsmGQ",
  "key22": "WRUaQ1cmSY6GP9aZ7iNRmzzVsxp4FkBgFVTSC8D1PTS5172HNSjtZWXGAS28eteGLGH2AHVsvQvdQxeRERryf2m",
  "key23": "36n3fYA6rRY9kduKTCYTprgkub3dJ2QCAeJww46vm2fMJXkHJPiqCinVRhQpYQdCsVaFQ3uxyiYefG8rKZ2eTyM9",
  "key24": "Vzxr4owWQHxQfKrNeuUHszch6XNWJUcWK2nuVBznth8mVBGBneQ3HMEf3Ps75kK39FGbv64Luoq3MdEc9noszVz",
  "key25": "4XuF17GbPWp8ASzWbaqvuTjJcWn4G8vgKRyvbJeN5SwU7qV3Gx999ZmWnwNPgrNz63WnubQYgpVYh838Yz1C1VeZ",
  "key26": "5CTdEPGZwaEF9UE4QVxeKsYoASsTT7njkKYyNeqr2EfQo6Sy6knKmPcF7RbmmxzdmHAXym5imr2vWfqv2LGWZBVe",
  "key27": "3rM28fNhkugN945r5P1goxXDJ7tQqbUmU6X7UzjZqb8CdhbYfrf9AJg5NE4TqHBwr6ZLkN1kgzH8dzJtuSKSkSua",
  "key28": "4AcCNXGAfVHnzQbgpAxdYgWhrgm3cNfxcU2NiRfqaBSzQtMDzCRWhXg4sQVZG7eAobsWteNAyWQXa7sFPXqkd6ND",
  "key29": "yMw5WxNvpRLY4DGxF8JXEbnZbbnUua8VffCHKLg3cQNXpJrhTcqTdWa9vzRKJhsuvnXdZRw9HW4Z2zT924DRojt",
  "key30": "M3p5MvUhCDFithfYHxLeBTRKWZqGqhUegNa98v1wSe4eKYyDB7ESUxvqDDMWZDGjQimbfrjnABXn9nb9yXzF8z3",
  "key31": "536SKYNJcstVbbXyFLT5ichdRfDBUJuzQS5xGaKoKsL2PJr23AsAVJ6S4d4vhSZX73aGvMidk5xfC7UVhr8p74jN"
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
