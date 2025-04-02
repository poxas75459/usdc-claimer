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
    "3M8bthNDQhmhhSzzSrWTibnfLWeULqDWrrxTdC6imvSEqEU4bBt9VEGzgYpWtRvD86bKN3A1QnvKBFSfyMCcAoVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjNNcmSTTjfxU12m1ajFXnRRNLQxJVaqvZwgkPkkiG9w3TRWx7wHm7utNNwfipgr67AV7smHp7X8b6h6rJLnkFx",
  "key1": "4Pv5tu1xyuBY5Pbnp8KGPAE4ZNtSKBKQHz22e8UGVr1MMm5A9v3UdbzUpNovEi5KBFmPEkSGx7p1uvoCm7WnDUeB",
  "key2": "3Y17eH1nwcnvtyxZJPbpiepWaejbsM5YnhEJNQqnnao6nk8NME8HMSzj7w1MZfzK2dFGpmf91VSAgaR6To7RVFp3",
  "key3": "2tCCGBtFbyBXPRxcUUb1RpdvPb82VYrTPFxMRgFUibsKb2APwPtxmGbyd8Keg7Tij4mUJ5TyHabKKq3eofG4kvc2",
  "key4": "62oi1xJRjyXYcgRw8abgdoJtNDgDFRaFWynJEKFZrzunocGjMGUkFDG56ptZVQ6VTYy4jKjscwWJnMwkG84CBZz8",
  "key5": "24r2apetXT7RrA4r8h7NJ9QGfEbkpF8272t1a8MCrHRXZ1GmYnVXJX3vfoq2nxAox2yHgpwj4fy9n2CUu1ebXQxw",
  "key6": "51ZfrqviJwpqgn5UqZbveKcRv7K9jwPPAqxcm8wmieNMuD5uqG9xo8JUujkmSg2Chd2ZzZC3zKz57UvSkFsc3Vbk",
  "key7": "DbE6ZKk5DaZtx5NVxjQHKLbHCYCKgtTUxzq1Y7SYwUvswfJWLcmoPjbzoQkjhZ4CPTvgQ9HC9F14E3oSUYmCjPz",
  "key8": "5gWdW2aNVi4S3jUyM5W73SfeF5Scy6d98g6Fcf4vihJnQQaAiazmWmJ437RMyAfACvN2njCmUaTErnoBc4LZJqof",
  "key9": "4k8p8SyrKvj3Su1dZociRnUzB7o89hUnJSGP9xVxvXYuMg3x6rF8HyfPmqicP6JpPzKKM8VcU47ZUFsLqGMXAAKh",
  "key10": "49ToD7C7VHpSRFK1GcCjJeECyjuyiXJdkXgxgP1ibdP3k3SoGfUzEPyk6srAMXSqb15zJ14pcDqKWh3A7j3ckx1M",
  "key11": "328rhzs5pkVQ9ETjy44TbL6ZJWXE79bCtMoqbXhWN7iX1nxCmHUSqpoPz1TeJPx7aGyMJRxDvHTk3rtYQD5a5qs6",
  "key12": "5eLaQjztQ4hTm9Q82vt84eTHA23NtgrXdoPZVPqUFM4ucjVY5rGGQjNsE7WX3GFyT9gYrvHy3uXRe1bCKtGAGKnj",
  "key13": "5trbzJeQeagD9VpD9iy5wmg43sfq3i8UEpYCmvEjukj1FRt5g4Hoi4UvgRXuZPbEs3kARnraFZ9vY6vWXvpWZ6Yj",
  "key14": "w31bjHPi7ehKwomVGUwCd6ZoUJ5yAYauKiUYins9sweZHvWPSPevMrNQELTmCr9eDutEdZoc751sVBabfUoVD8y",
  "key15": "8FbCBgPA5tDsFs8myah5MiqzycYYeBH2ffbUAyYGxJr5QCHv7wVBj8XAjXHSPAwLLRSQgrV4EhMRZjQBV5mkubx",
  "key16": "44eeguH7xdQS3SLAcY9USug6T5ywNTdRXvuPzwBNcDK8rFcE7kCaXB2WTU9L4rSartDTU7koLZZZiuABFFPt6tGq",
  "key17": "5TJZZWdHP1GoQrCg4rLXjF3wen8AQk6PuiW3h8ZpumHVsZnjNiNEgiyBrixXkR9rUhCr6YsvFwRasbQGij5WjwVe",
  "key18": "Uz4U61xBUChxDAkhj86GQffdwGQ53PB2bT7gMK6GCgJyaiZ599ntAREQBVHJStEWHuzfxsJpdwGZAatFPtLHL6A",
  "key19": "4sb2mxckoahGJcvscmBAZ4EFqCtmiFo7fdqeHNjJSLGy2vwFdud5PkC6B1GZgntLg75zQ1rP6B1rFHRFDbheVawX",
  "key20": "5hNm4CgukcVtnzUHBSoh7bCmg8rzuWVrD8p862yfbm8DEbv8E4NvB53NRw2L7AzSkpnnQnL2Y7ckWYMSW7D66vzk",
  "key21": "3igkVkTQiTZnFEFLBmeMKjeCPTZZfhR8RgPYTqwMjRAxZWqxLR3G9n8u6HEXhBttXTm3aBQEw44v5xXwZZ2Agq4p",
  "key22": "nYeEHjUi8Wyqb45syZ78M3Pu9s7Yc3xFF1DkVvycdTcX7F9k2rm6Kn1KCS6mGbABLBW9vcTATfYyfituCBnAsxw",
  "key23": "3tngTrJPJbiWC9RrRsA8nNUyfU9iXtAuvEgBe72LogTGgFBorH889nV9tTTsjnjTQ7ZAWeGxj1WQ8qnfhxqrViCm",
  "key24": "YAca8xHtz47k3Q4gJTqxNkurbpdPHaDkvco7ERdT4qbsVNBGyAmP7EmyqpjNmN7F8B3Pw8ZiT4CMxSomNFKgxtP",
  "key25": "3sShgFRDZqjtDoJSFeEWCCvi8xFjRaxUddQf7EXNerNKqtyqif7vcbqGbXTDiF5FzAtoSzjGr5THqoNgVUtFpJ5Y",
  "key26": "34tsa5MrPMwhK1Lr6cYMQ4mq4J4egHr3r7fSCGLecHrNGEgePvVLyrpTDjYL6AmX99zDWKMGk5iJ6ajxaketPRPV",
  "key27": "45hRzWBCnXXatdFaRYQBc2sBzaDNsDT11embmzNEmW2rqAvdnU8W5tZxJBLFRJYDh9FPpqc4vcwvt8rpsSf6BvCX",
  "key28": "38NYAv4mAqRHFk28XJ1bH8V1vKqUXx7Bygj238jRmMvU2ZiYChQfLHvN9b71bDRgFh4qdVFBevXWRhExgMtzF3BY",
  "key29": "SC9Ly4A8tre56JYc2DzLozuhY57TWXmeJmrwW6U2eDsCpF3XU9i73UQRYiET5SJ3yb4fdTjg4omQGmsCDp8Q33Q",
  "key30": "4jSeRMc4RRdYnNsJoQUx6g3p33Xb9FQ9czoJ3Rx3PFqBq9nwYD1BUg5rXDMF5rYK8u1Ss9ZvV7bnDKTXp6u3PVuY",
  "key31": "375AYzhf4SPmPbeJtRxizcPztvhg61w7e7Ew7HxZwNKUWpZ3NMWKnYrnQUfuC7yXQQ62Ck6ozHh3EhKyiNWhEL2a",
  "key32": "3FVp6X13n3yw4ffDVJHp6ooQHJzcKbmS9G2DU4TgJC1WpN3fEPRjRQHDQNSozSJKBKSbaFNDGkgHd1ynezVUcEAo",
  "key33": "4PXqaUWKoXKLH1h6fwy1ma3rZfxp1s3LA3oGQZLTJxutkYV2iLzQCxC6mNB7YC784132YgFuSqTUoZo6yUfJnHg7"
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
