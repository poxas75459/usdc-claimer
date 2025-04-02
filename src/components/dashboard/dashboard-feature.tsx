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
    "iMKrKrxxG5vZibYtoqkcwvVC4yvvq2xnCWLuRooCoTFw6ghMMewGka6gzQH3XQnY3R7hu9dz442EVHZdJZLFdku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RM7ucFbTuax5GfRiLAGhZrHEWgnAV7GZRcLZgyxQBCQ6A8bt71XCCLQ5ds3vWyn7U476xRzQVPpMEHYJEos2dz1",
  "key1": "YoVU65E1M6W4aJxANrKTgNjD7m6S68wYZZT2MwStd7t1oxsj9CJ3PS3Uvbz15xKfuzBNagainmxX7M3aUPeAuwd",
  "key2": "5zp7pMdEsyVarSJocVmKWVy5kLM36v3CMgQNfvRUnfXZ9QLz59C1e9huVf5pC39eyP9da1Bfvq6Qn9NVj2xm6EVn",
  "key3": "8f5ZryDTF3ry6iFt95JEkjYyimBVsVuVZz4dMx3ow4xAsN7wpvdD2TvmkM9Z6RDWkH9zGeSRQYesjiyvD7wnBT2",
  "key4": "3UmdfX9iGSieZn1uyq1rF47g8sQSg3Pf8myR9nV6DZfRNsFrakKJ1QVfrdv7aXWo3MiYDq6AYUwmfgxmrMNtFDeH",
  "key5": "5KdqqFCJt4MWeqi8nju3sEPDxLqUyvRa7UKoFw5hiP7uCzs2fMnr7iMgRCC9FXxo4Zhicg2ARdMz284CXGsS6eR3",
  "key6": "5SHUA9tG6LiP1r7N1oHTWc7X38jdCz84XSev7WHUWHyYcCZA9s2g2yJ5xN1WRQdm2zSJiAa9gtXFgJmkqT1fjoWw",
  "key7": "3N2yJHTBBw9wV6VhqtPUv59SkqMhLoAyMKqsxUddtQfdBoHNMYs5tjuLYph3Q3DbrYjfCpF1cfvUdUjJ1zyTFGNK",
  "key8": "5cYpP8wWo1D5yf4Sc2A2adRioyeibrWyBDyem5iy8f9mMmxZmScdszJNf45Bj9B3RSMyiGHjTjCuxEkCiK5FUDcw",
  "key9": "4p2iMZo3PGS67H3oDZueZs3hD2mTCvWiyiz9Z9w7aDDEzFJk3kZWXbYXmEaNMsLXCNSQFgmMNSPQRbG6cmNassiv",
  "key10": "4BiW3xKYVjQyxps3SgMqMUtuTUpvtsJ4eeDS6GjXLdpvxVwBbQpo2Fj6Nx2J84EkmarvG126saDNfuvz5U3kSsKG",
  "key11": "2EJK8xEXgkJRvX48gPA6Rz3Wb4J1XAVhEpUP4bBtFGt2mRNDsiKVnXU1FKdWAtF7tmwqy7j321BMTLCXgbb3zysp",
  "key12": "4PQQKAKhXHW4xbS1STEHtUwSYACBrHBDwvEwvGFBDT9q2AnNBCWiSVWDAYdkCWv5aRdfFjzcWHKbSExRugC38y5g",
  "key13": "BVnwztBCymH5StWx9UFAXLQ7RCCQMd4E2gEW4qfi7CwUMFa5M4jkJr7gnnbGQMhyBYibwErxxcTcabZjyjtdqK5",
  "key14": "5KSpPqPcEUQEiERbu2io7g9i28rDhnHW9u8MfYcXa2F5Uu8eBR64MvJgfz1icncxcXKEJavTjUGgJ8ou3CJUGuPs",
  "key15": "4Gg1uDnJzy7dX6bDNME9QVyjzWMAMmzS1EFtsUYF9o4279VLqoBhGV1Rcxwr6C3C22C4SbHoJttMwEE4rqSqKxan",
  "key16": "4TKvrqaNhTCuiYH356B2c9XCLhrzWm3pynBxr18hyFtrHociw2JvFLXRrzQVkdHD8q5V67GsScPZ3Sd4ed13S3dG",
  "key17": "4GpxscMmT4McNL9k5wWpsewNvNXgmGurNkxKPKsnVUawixKgix6xwadcjFjk78ZkKREeJMw7jMZPtaPnfB81RDTa",
  "key18": "2wo26XyEA1Ug1Vr83Q1FQBvs5AMtYco6F3he3iWrLr8XUiaGofAKU2G8C8oHWfLyWJ1YeqVDvXjxQu7pCTqh5gLy",
  "key19": "3593SQvBPP2rt9sQypka9AnThgL6nTYr3Ptb2wmtfGKHL9ttE6rgsm62G8GLUrejPZpq5TYkxVeKgyS5NUVcFWHT",
  "key20": "4tXTs7vhVtD8Q8rWdbH2NhVSkVtcyZ2gPo5hBGvcFvQrscAn8vobTpeaPe7Tx1k41sg3ubXmUqHYHK7zXTBCghAP",
  "key21": "62sLaGkk3pKKCTYfKLMkPMqFsoD5ki9KTRZyAwX6QJhYrtVhDUrGBvGGBLo9Gwp6zsZHBByqf7WxhTQnEStMBNmc",
  "key22": "3Ta34PFHDg3Wmou2B34ABeWagArp6Z57Dbak5eEr9N5XiFx1y5VoMUYxgn1xWxezoqXds5AEhM5EsKiHSXrQJbpJ",
  "key23": "49yhstqPjs9H7cuKZL5JkFDgLUUv6ZefcuReQydjbZGSfhJQ6NqM5ggYoaCjze9RBjHit4gp1RqtemDW5rCi7GjN",
  "key24": "41ragVwuGeBj3SMYwwPUw1BoVKzh42xyBefxCCEnW3Bf8XA7m59PyhkGnDPFgPjNodv1JUyAC6Fhr6cVinTBE9Rd",
  "key25": "59Dpm9xxyEYow8uTJeQixmkjRY9LLeVGgAf3hXe7XeKDv6nJsHoSFSK3AqJtBTKFASHiNyJDauBxiiJ4Q7qxT7bf",
  "key26": "5SDusNUeV4vJrXV7G1gz2ZjSHgwfrAgWVzJJhP8t9jenvsK4rXhRZ6TVGySveCfv6prKPE8nBLc8VwVSXQGQQqMG",
  "key27": "5C7aXquPSUXVpY5fmUhbrwZyGFa9rDL5F6rebtnqSzRrU1zSr1bVGsRJbtnFSsRwyA6J79K4rKjA5VwpNcpsgw1n",
  "key28": "39ve3FjofNiAeXTNzJBQayJikSBc1wDXHp6jWfQuWdxVYoueV6EhvZiepEzWcSk9btLNN1jHc2TCm4Q1gk9sXSJc",
  "key29": "3dUskaR769NKLh3mHg8UdzRcichsqCmEEMynTBh6H48djmKvWL4GaDbQFYj1AsvBqon2S8jhoUq9wDJApd6yTo3i",
  "key30": "4cv9CVer28KubcbjKMSVqkNPo5Cxo2y6P9HUiD7bxmrqQ9mCrcB8Kb5KeaBBYafriEckGrxGcbS1WcgnJFVsw4aA",
  "key31": "445Rv5UBTA11wUpoL7umFmwZf47U3ogMuN1YTt8Ey1s138MpqDkaGEwiL9fNGjK34gL286ERGbGebGfwJZBbD8Er",
  "key32": "52bNNyvLu9espHbaGDnKQVkCH2Diem38WnX763FxAVhWsRNpGw2DJ7zC9uh1feGGg4qiYYta9Psdsnub4rJa79Ay",
  "key33": "2Wwp915YLNq5XBPuMmvEhkBCFJg2883SJgHKGw152PYbCmxSv1MdsQWbMbFTAA8hs9Rt5MS4qokyJFb7vp8XHjDs",
  "key34": "3skTtRYMZRyrRb6x4nvh3TrAVfU4hXYj3n82p3ybyS3sSUmYbhqkmXpo5Kp3pJkD5hnQtJAGYDSbLpUaMcTCTWdu",
  "key35": "2MtMxbSG2q7ETifsWSFUmPZNUhEUbDWKw6snY8UMDSwCznHh4o39FqawoJuvPz8u9cvWWRqunm73PdgSVp45P4CQ",
  "key36": "4ck4hetG83A3GRMf5tMFwYKnKfwRiLj57bV3LvLiTV2wJXQLo2EfvQjqUH9ttxpQb5b2h4afneFvMo4KdGRh36dS",
  "key37": "39jzFoEgGB7V9fewvngordxtivrvX2YGXw53b7XwVrPYRvMv5YSLr5dAhRY8RLYrWRZy8YRd4htb1FMXtjn1aDNW",
  "key38": "XyF2Z1kcjLTQ9dzPne7iBA4SkstQdEUY8tKS6kmwBdCY8Wkrj233FTWjYPuoYfqgKYg1ryFELHBBcCDA3HmFwTF",
  "key39": "42fbbt49Xmf2y3JXpam5qgeupzeamnupoWMxqMXqD8y3oTdHbGzC1wadcbukArL2SseZGQPVbbMEnLBtHHkvUS5L",
  "key40": "3deB5LsLY4iAZehwfAfat15LkBeGZ2qiv6BEwuiKbti5VLaue8AT7PgqocnsvNBCThXafSzWcgP3EJwWTSU7VsNV",
  "key41": "3Q7ws3y1iczvW1CHcZk7pCtdYvCZrK66bo5QcFRCbm3FR4gDPao7eWKNP5Q1WFt95ddx5LcRGSrFubZAF2VCSdQG",
  "key42": "4YHLrzuuR8aHyL4oLxaasd27SyzssxhCvLWjByZjQEuR6sMi95LKCeQBqTdyyzmHeidLXHrtENrabaFJBzb2qxnk",
  "key43": "3GzhK22KDauRnokj5xPk2UN7b5SiVEKi7qponddwTcPpYKa6D3fEJw27vG4WcL97ETCHHzncVxkYvXMH1FK8wXuB"
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
