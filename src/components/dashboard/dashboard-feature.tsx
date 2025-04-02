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
    "sitrY948ssNiKd87AbYdB8DoZRTEPqbg5szxdGWU7nmj4aKLBz7iPQr9FAs3hcriMmpaScS9LWN17Dg6nNxGirx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sCGfuca5F7xZdyqUNmdSQDV841WgvYnynWwXJMGtuvNT2ikXiNXEXn57c8GuTXbQQLjNMHo43BseDE4DAnGT5nv",
  "key1": "FuZhF4Y1cQUomzpB525hzg2wwqGt1r6EGCdaK2uqZYLrBD6358e32RCXXprdYRBpvh1phkwQWR4i8eh3EmPUGuD",
  "key2": "TJEZnsTd1mBzhE6JetX8WzPjvuFtHaA3eAxdbmKrpwfjfnGYevdXVLx1btB4iM8GnLWYBAMf4zzeuhZntFqLCPJ",
  "key3": "aZT6s9pRgXmBMWqWeKGJ2VVH3pVUjuBNuWaRjCwMR41YZUB9JnXBSM35CAtvMswxy4JXGVZdbgVMdCMfBzZF1ri",
  "key4": "3fP9QsKEzzyxx6i5vE5gFx5L1NnCFzJdDcvCsGcrjfTK5wdwMkEGoqB2mvCAc28h2hAJju9SaE85kdgeuBQVVdBq",
  "key5": "31uWCjbsiDutw2XFguHg1zQBuyjdWdQfy3zRYe4QLbD8MtyKmmbHfiEYZGJEs7hwk65VzHXEbKt5XQnYRDs3uu9d",
  "key6": "4w1a8NXaQd76DQeTFnMFLQkC8rJqo4UrvY3UduwTEC6GCXDWg2Zp28hexPQb8m3ekjLXZ1oiVWLtGyuZBN7DrFyh",
  "key7": "49ZLT7zcUuBSiLPbLCjHj2XAn9dM5koDET8ynCWesP2rKqVmtTh8xTv692Ybvs69AgsdLj25bJv1jE7NJ9kSycuk",
  "key8": "3W2UU251UyicFzYW4Sw3HetotCW9MvuMfDKRTQ54zqeWCPxinSGn5Pi3z1SJNy2cVK2xiv2JuCJc3g6mYufvKjrW",
  "key9": "FGtwPaEumE7NcW6WMNTyDSifUAQ48jQMbBxpzu53jHjP2VwbqEz2KzuVWJPFoWTxY4FtKTxr4DiejxbSD1ZxwFv",
  "key10": "2dJNWuKEmMo7sxUAG45eXrckSc98JjeingudTs5cB1thY7QsTKQN5uGq9vDRFRGhQosqc1oJHruAwDk7fB3MKw6A",
  "key11": "63YpL4ew6SPsPb7XWBjfCkpikDkXJpYonV9LpC4UNjWP336U9ERVL1G6NCbMJrNbgUU8KavXfYzmVJ6Fs84yxcTM",
  "key12": "4YLLaB4wVCsnYMqCcUfh9zMLhSbyVXZ1Kp1mWFGQZT7umfzdXS8TNRhCMV69YcMfcPrUmhd7dMbHKdKEpxdDAtsy",
  "key13": "4Bo1LqYpWBDGbYMgHeqL8avmBrvGfABBNnJaiW46Da4Xs59M7PcxHkfPsxPx8w3TKkZzhB9LYEQSQUaVvPGChHgq",
  "key14": "5xRjjQqMWe8pT1pd1DauiwSgy2pHeQX6Zy2spsJnkYCFg8Gmc5NC7svCpg9mhPKXmyZrBXXsJ4WiqsdKCrq4JZvR",
  "key15": "2rsNkH3Uxwzs1xv3T14AwSJRPyzDuzYoDcuMP6bWQHACYrDLgT6B2kemiAyAsd1nxbF562veVyCSjKPs585rPWwu",
  "key16": "2DUnmjzCZnsy91TTX7iWcLyHbjDcPsGndjafcZSsyA16wEE9ozoWqk446r5ceWQraHy4LAjYamJ1zA7rPxBsyVas",
  "key17": "3AgxSfC5pGLnBxgPG13FyvhU7yHiGHBGk2kabELCHUR97HtWhMKhe73czmwUzQm2SK4Ncisz6j8cPshoDkFDv8SR",
  "key18": "37bfxRTRGdgzSBzVVj6tfsRMAWuC1nMVbPLtZWfcwUUxy3obSMeXN5VAn3ecmDZBhWDQkoLeUQ3Top7VFzf96SUZ",
  "key19": "2RHHNp2hDLKmjenPqXPVSctPVSvwsy526MUJasZ13Dbk8TUr4TizGUssMSJ551rS5e2wzwTiLw4EhATEd5kFNMgL",
  "key20": "5njHk7EgBxDC6BYvBELHASf1rGwQckbujpS353cbVa4eFuePwbuc4UByX9p1E768ygcFfaxFsKKYTEwWFJnCWmKm",
  "key21": "5QgpWXTPzxVcju7JoHsKk43D8vxQAiHG5a3xJR7dVVa7QPgeq53vJPizzSMuGji1PDgLVCYmU62yvs7Yz8GdzdXc",
  "key22": "21Q69TqjEWZBsKmqJs7Cxc7M9uTN1Edw4A1QLQhChsxBMK11t7FVPtuyxveh98KJfMyWPVRx1N5GFg599pfjnvHP",
  "key23": "UQrLj1QB2GRhpRapP6bV2f29Wauq4RUnvQhZhJJJZGtpW9b1g4yLPy79Jnis7CVSMrUb4oXyXz6kh6PMQsdgM87",
  "key24": "3rWi487uRA4g1UDjmiGzMk5qPvvjQ5aChkoKWYkATQwdY89TBmraLhJxeAzXRmwvMMGC6G2Z1z4V7WWf8fNpQtFf",
  "key25": "5G9YiMF7ghM8AbaVEgEBu79wiTNg3AXRB2UxdWWuYLadSGrx77tMZxAAM5VcpqRtPxFLNMY8HFZfFLBbZ5wqq5uM",
  "key26": "5mHacgYb8gNAxnJypJXqASkJJKoL1rTFhcFABQMCsz55evmktpLHtAsXgbhtQLNZhqmQe827cps8Dpry6Dpu8DY7",
  "key27": "ir7ztHFN8ypZbs3uwJDhdP2kXjKe8YT8iDxmffb6bSwYx4VajSw1GvuXUJhh7mUcS53pVwQX6Yxf5DSWyXqJYcW",
  "key28": "4TzmvGaXxg9G4u3jRN8UpWp8ijgWv28Vk1jn3RRqzvSVGz3P7F2y3cVQo7f4aGfsuhaPfx8aButytEXmHQKQ7Wx1",
  "key29": "36Psy2vghfRDnCyfXdn1zHd4q4rgnijAEdL1bnVnxG1qEamLhRbDv3116ChdBMRe7dZ2DKXmb2GLsvVkYyCa4RPy",
  "key30": "P4SLSRuNtTRoYEUk3gWKmgk3vxZ4PeegNPzvJ7jvEqPdhPkXHC458qboeMBtqnV2tYawYpAWnA8DyCCJYLEBR7W",
  "key31": "2o86kdyPEYYv4UD21qKkoYLJfuLdNwdKhso8wLP49keRGoWTyQPcmh6rY7dbUGKixtiwi8BRKA9BwNGnRyTBJFfp",
  "key32": "HeF6zWWgiMyaH1VjwFKg6vZqCxkgbpsQsaFDxUYopbtbzCEwBGpWNs6T8DpW6yc73Hte1iRySouL8fMMWxXy8Yh",
  "key33": "3D4ZTeB5ybSudPv8vqskCMZ8tgHG7QQ3ansPzZxDZNYNEedczhjGLKf1ax3knuh74RB8ebutPD5apx51Wdsx8vBs",
  "key34": "21sHKYZrkgVyrFfwdXvH83UbDnk1ezwKPiKZAc1jSazK4hWbMQmqBTsqimotRmfrPMXAj8FUgsJa1PXsg7QCYKEZ",
  "key35": "2enrtaAP4kPDqTHbdNxVieEQmsEf2iebJ36bm4nqee1YqhZtFvGzFo8gTHME2FivBrXohxThrag2SgXAKFN2aqRJ",
  "key36": "2wExXt9dC6CTLCTshgHbv4kQ3MZ7ymE3azd9t1Ky5QXaeHxs6Dev7SCmTQfYtD5zHcJF4oV1DZ7Nd7U33gLvU2cf",
  "key37": "2ZQnd584fHwgYx8PxqbTHNiKPgryWKAxLQRhStyAtcTL9LR8zCNTHageogjhaGzC8g89B7KGgq3hoj2ZBCx54NUg",
  "key38": "bKoRDgyWyjKMxu61vb5BdPawBn6LruorojCHKrkSHV4EWdsXUhAgiTYxNpk8XjPbo7BQuJs5gUvyXs4h41cnpyf",
  "key39": "devu7Myig2ueRYR6pcEqXUc9gT2erHGWkmov86NGqHA5jDnS7BcrcsdkRcuuNbHnZCBW9KBd3bdLmmgBsWNZiKE",
  "key40": "4YARWzFsuGzM1TxUsStbZBU5FXab8dyaeUmWBrcw9rgDDmzvdqsSJJa7D4jnbPZRXXH5ifxeqTApeGLXCMBEgH4B",
  "key41": "4VQRrqMiHr1UsAaLVecSY5VNDSySC17SdbLfMjPujbbGG7vNrCZuPdu2Qx8Q9HSA1hLMxLTkUyqjVLvvtcFCxNWe",
  "key42": "5bB2tSpqW6sPTUrMAkv718Cb3mRgKitLGCAcCtX86KDoNTdsEiEz6SiXmsp4jWkPNF2JRktFkYtD9XQtV9DFy21q",
  "key43": "3QhugT2T4ttV5AKGmXeAmJvsUbkmbCyTagGrotfiBcEzUTgHd1zgdDqr8wB5j66SpUJcEoLm5FPV8LseQPtFrhiS",
  "key44": "2daBhJJnZbrBTwrrnxJCztFJhbCfpJVcuWqzRRf8jZc64DjYzsB5rapEa66hNFhiSvk7QaC1rGJ6JZQAbNuuQP7R",
  "key45": "5UQ3gRig2vxnadjcvnNxpDtE5S4VWNkcupaaUHrtvJDiruC6Vb4zGWdKz46QXcsDvNSQsyN7Tj3zQ55iGr6hPY63",
  "key46": "3UBcW8LAc2mBtd1LavPrXp9xUyiDyQUTghd1fB4uxGeX1B1zkHgspozeHYgK3k2D6Ah6YqFibZv8dvB1ATrvCHba",
  "key47": "VBYYjC51bsTxobKBMSKM2DwZdinxcHXEtJPAAK6ohtpAY8tJcBVukf8hg5tGveskjkFckapyL9Aqt6L1ogZXFxg",
  "key48": "LyFmRVZPoVD7qFiybKsCU8ELsZXL8R47D1hofzsaFzUEggZSdi8EJ8Ptt2Afs6iifBFXuvYbzhR6c52VQf13zKv"
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
