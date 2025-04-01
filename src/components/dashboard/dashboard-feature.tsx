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
    "4gLjte5PxKYswYZGxF3X6SJZL9sZm4zP1tsaWP1D82WGvkcSb8SA49gsv2JNfEBJhMga8BZPUkvXLTxGS4JCf1uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JgnFt4P6rmmZNKFWiNfFHhyNbW73QB9VzirEfsGxiQSs3sc7KZWzD4Cie5R5554TdS9WAVGv8RG58jm678YvXrE",
  "key1": "5QFwSzb3NS8yFLg6t95p47MhpGLVkDUKAHX7uuXBPiGYfBdDdYsbgX36vVszZhwHnk5EYaoPhrrNpZraFfgLNtWB",
  "key2": "2m5Ejn3jhZUcXGgVQSUsss44FuXz37u5WhKceASAvYb6Jyx7VH169RMWg44ufKSuMiUDyKRSZ6vEr9sX1guVrmTV",
  "key3": "3gehGvyzs76S9u4mFH69L2Y7xbeCmZCySZCzGahaZK59kcS5XFZwtxQPueaHiSkQDftRBf36bsuE3N4AQxY4Fanz",
  "key4": "278g8Fk9WuTckfjdSsHpk7chHa9fjpzPxHofmHKAbUYTikh2mQUNhN7txnef7m6d8vPg83S4VwRFgbQWsv7hzoYj",
  "key5": "3XFX9XefjJSsfF8d9DUTjBucxtNRTh86DrziYxgAtWdC2fxZkTReZyQpk1ePCeAm1TBsy9kzZ2nfU4HCDca1gT4Q",
  "key6": "582Z6zt79sRJUAcF7vnNBA7tpYK5QJinwV4cY39KpSBLnXfq9yqrjZ1igf1HDgtoo2QcHqg8nNfexMhFSAKkKJUj",
  "key7": "NqVTCSua6H3KL9MPPQoz5KpKRseGQY9kMn3wBu8yuwc7QS9zUzjF9Hwh2MATVaCX22TpvNj23K4NQE2NaD2tFP4",
  "key8": "52CnYZPwUyjjK9uCyLx1G7a7jkbo7rX1wBF6JjeJuurm1h3XZ5qZobtUS3kisBM44tFpFtonXceMBBtJQJR7jD7V",
  "key9": "auuQUWwruPw61FX6ckwy9Xjemm4wmocJV9oRHh4oLThaz5SmJS1DFTkzaUqBiGxSjtyb66PkFoCLYjJjB5aAkR2",
  "key10": "4p5qxNb4WbzJqrYtHuUfo7SMPTJNfojykdcJhm3i5BH5ufq79MZUHdJUwxwnueF7ieevxVAwsYqEZSfanSgP1BUU",
  "key11": "4DDZL9oTuuy5TEPEZAk6tN8zDWiB1zTuhckrL2ydjKPCRT7o6EUaFwMGAzgUrSHXcuqnMgnYBNwCJUFqeiW26Vc6",
  "key12": "2dJS94hMjWXwWsLZ5ANG6xRpjXP7Prph91kwXSYWDPbkAoNwuM3VYAzewPW9Mg12vfhsSpXfFym6zMKCYUGQnTnQ",
  "key13": "2KnA87MSm8bMdZJ1UVs4WotwhszEBZwUkseBRe6JJKgxPwV9LUuGZc8UULrHavHrvBsw733TN49zPyjchaGBe8vY",
  "key14": "L29y581rLzYwC4ZFYXRo88xZpQTrJUDrujy8HvjnACa7KHqdZDmWWCT3obGjiCz5JCgAmNWzEGip9igHZDro3fE",
  "key15": "5bvnDpn4VDFQz9g4iiw2YCgubyDyvsMF3kDW1H6cEWAWX1J9Hyc2GB9VE7UqR3f562sCBqVeooaz3ZzWvvWAHMWe",
  "key16": "2D4wtmd2r2ffaBywDpgQv1CP39Pfu6SXs8BHNHuFWSB7AN4EQXWPLUS5LsFr4ZedeB1bQgiVaCDAD9XeuW2B78Ge",
  "key17": "4YuEbrfRnmD1XbcaQo49kpJyH2f2jWrQ3yLMABqpoYdFKVHuesatTrsirGtxAe1G1mUjZ91JSKUrrMxpQDmBhHkJ",
  "key18": "5oKcmYUsMgTt4hPuTgRcj6N9k8SjewhQS9vDgSrp5MT3ewmN9k4dUactnzkzVCscUgviHV8BAk7brsNaYkahnN8m",
  "key19": "355vosSQPWLv1F5G1ysJFpCJoZNihRMYVWFDnNrS6q2XGRSwKqoppnqfD4Tm3StNBMdQPsan7F679CZcCSr8WgcW",
  "key20": "3hHvwU1dheSTifwZwHJeX9Da2mBfGMbyeyQqgm9JQHT1ZaJNFijo5X6zyQKXWDMEo8k957MW8n9HZhEpcjC4Fu89",
  "key21": "5bQdwsyhhvkcYLmWDDqRD77eLPrX7VDToA4QizEcW8W4gNXqKcTCENMppGt1XUbJPx6j4vpdyPaT4GBGgSzjFWTF",
  "key22": "3RzaKvxmHvbUMSs7fsboGd8YS9QgbQXzPCZRL2Ef4vm6sNNvET3ysWvoXBH5SY7cFpGdYnTYvmf2wZC9Nf8mzCkC",
  "key23": "xEa57r4Uj9PWjbkL3Np9kpHKmeoEbKVHH86apjGqJyQNqfMuEtEroa185djisx2AEvHaagzoybMJ468vSGjfUSn",
  "key24": "2fBbT7TDmywqvAg5gckqqe7xEJgEvMgEh3RZzh5ATxLLFX8qZEX4oC64pu745Bx9LDwPd9ZJBys44ekQVzaoLvs",
  "key25": "4UcpKPxeKAD9Qfs1VhMk4ey4fCGnbBHDkB5F2RqMpjsHVYPsth8qGZazhgYdHEeeF5NXtazdB6P5jZdgYThr1Hkb",
  "key26": "2h1Gb4xzaYSAFXV29n4JvvpGQhCbrHJTjoFJwYto15jkcxVBLVzJGEZdUP75C7C3u1MAEtUqwAd9qAnhoEWoxFLY",
  "key27": "65TRHwwxVuPj8uJysH93t7dx8SRCVBeo5D1AsjocDAt2XtqsLQ3co3EkweeEzWfEtMA9ZuEsWcHVkwCK2T4c2k8X",
  "key28": "3PJ7Fh71R7kL5o1pAugW9uVitdHg8XtDXZj7tjcMfmxL1yQtz8pdvJtGtmC4dsEK7obqG5z1KKtsqwGUzTNxGKox",
  "key29": "36zCMwLNUaupgZoVZkdV7Q58VsvPFxrkSaU8JPDAMMRrDKGp9XbjD1n5BvD8KYhNF2Qf6cHJZ9DEsbAKGUMysYnq",
  "key30": "5qfCnSf6EY76hEVPbL1pj5mqcfUPadFSoUrbNSzrvrQYkzKtyJ3uxKUKdTmusVHssR1PAum2YUg378RewYig5NRQ",
  "key31": "35favcJupoxKv4ivUg1tCJ7yGgx3VCdJaoBnu8dbKKSEj9Yj1MbpPcpnaE6Ym9o4CtXbmNrVEF8iPnHYFjn1ypCt",
  "key32": "bSyjwcV6FMkvCB9CEhRL8rDigw6Sm8o6MeNor35p32zVch5TrQmhfZX1g74NTQYtPan4w2sveTf7hzyg3fUwP4f",
  "key33": "26sm1DEuQrZvyYQktRYpqsRBEMbUPSLhoDGXWBruB5kjg4r3JizSCSyyY91zWshufwC7zuWQgxH4EpehzPMYgsAB",
  "key34": "3oziv25wbubMq7aXffEMqNuKqnNob3tSN94sGWmoLq7pEd5xxkp7vgRuc3MdxNrAkp5SZBymKXf5JE6Ge2fPG76d",
  "key35": "5zAdUxWPsewHvTLWYNE9fpKULZ6Cygv9LpGL4zor8WN43SoggniL5xAoXvmEEE6uTd5FEzzYN6EkSFr6b8pxZhG5",
  "key36": "3D3SHzS51BD5FUkaQKhAj8QfnJ2eNZmAb4GJhEb9mH4CHTTwat2Hiy7ip628UTdF55Vd8cNkv5HctiaXUoWBTBL8",
  "key37": "4xi6F29qQEXwENXbFL9LwwNX3aDkikxFXUKcEKFahehXkiNRWzdm4YdV24QYPUYdRPq6nsvfvSrxqW69taUUPpeT",
  "key38": "63ZSJ4HaVmhSNmcVDPnJcZb6PN3CgERFkAKVP5ErfDEFzPpoFqWA5RomWrbLTxdR5qjW7NPKKVso99BZyYQk7cJn",
  "key39": "rBhX5TFyuQ5LPsmtETXY8j7jAuxZTo6iR6GKjywgiEDxD1oyuArej6KyjiN8Yx8JQNeA2D5PVNZFwwe7Ybz5JUP",
  "key40": "43y7obpA6NzcaEPdiAiuA5BHQLWtN8dvfdMLrqibU1bhafsbcmkHxZwvVPNhfQegb4KknWQSo1DZy4r6mKbooNg6"
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
