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
    "7fQYJQGhQeqCiHyJ67r56mo14BwDAviHR46u76UpgcGModeJ6Grw5FDX8Tm6LqfzBs59PQBFusphJ9S117tiGJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQnuYcE7DZcwCiZJT7kHg78J3tWybAFM9kazk7E9HJF24VPcp73vjChQFF6i3Y78wwQQxkP6akLkJ5pKmbZsNSR",
  "key1": "4xiSWubcrYAV25ftSQB6vF7misFAWRo5gABosqmZYM8GVcQTqjhDP2SbT9e36XsZ8wgdausEeMyZFfBqdUtorZcS",
  "key2": "3vUuZo73dx7nKLJdCgow9AKWdgbxoCXQ3opg5w7xcr2pcBN8XgpWj431LYLb3nSiUcgxoardEGB3pWiXWDPdZaTi",
  "key3": "43CGZrR5AAq38GuGfAeMexJkANf8B7mYUyVTLiGBLocad8qWmCzGrQVhS9Jb98ecs4XnB3oB4PNfkGfk5pbp39K",
  "key4": "kdsuasZ7rx23f8CkHs15DCwRjHG5gU45ciNfFJv7X7hDjdpCk5DzLApD19URokTWY56UnnZsCiXLW2xkT9VVGTp",
  "key5": "GXKbdFCVirZQQ6NYnt79CRVnzhs49UMPeJy77hwnsJsuyRV56qibZXWbPt9pN44ky4cGMgURpsVXYoWT3iimgYo",
  "key6": "5gAhsVGPGonikxTf1Ao6Ec7ZKeJAfybaNszofENBdJ36FzsPW8mRzhbHbxJFCH2JUsHCtgC14jnHymQej2Q4piyX",
  "key7": "3XmHhxLaiagyiNBXQM8CyXuVNQL82Agkn3uJGiPPAiNEaDfe1rTGfQopLH2Ls5iCZVAN6kheZNKmAqej8Jx9xEPz",
  "key8": "5J8WYhSntp5aS7D3vvuSEfk38K2XsXeFJMHXaRfHPTpRwB3bFDfXyiwVKn9jtf2htx4ufrpTTvD1Kappyiym67Ph",
  "key9": "4bA3bVJ9q2ayCyTvvSumykvFXW8TUf3iYjEiAU6be9EVW29Fd77na3CLM5neigWPC3WmJAG6V7s7AManKPBHNQfN",
  "key10": "5foC8PZSsfJWVNB3Wjr8YXRW7553uSaCNWjB2WhtCG7eqnZAVA3SeuvP33CKkJtMceRCUQkYRwF87mqYuBiYpXL6",
  "key11": "2xDLEvjsyZcDigUKzzUK2unfRt7xe4SXGw89GGrN8kN6pdR6yeb4hDmqwHpG8456xxmHDGtGA3WMy9J2yjyhe9pi",
  "key12": "3eekimi2uGyTF2v4oJ9r1tEvAjabs4W5bcVpynfq1As9NGHQc6BGxwi823MvbQiNFrw21K5uZYoX3bvBQ5ryxX77",
  "key13": "4Li1fdivib5DCXg9kZAWA2QSrAyV5HvDDA2EQbBGJdknoEKHmaQNjMLoYykNv5nJGN8bQkAtmU4W7emfQz4863R3",
  "key14": "62Q4a2kmpWRcxoKSHtkSguxqtr9696nve9tTDxysJG65eZ2X1DBNJUvYmTKvCvMketf9HNeFxx2YjX1PDP5HkyeG",
  "key15": "5kHNhn5xBnPMmc8DTUiJm7YNiTNScCkFJ5aKtJfboi829MPqg7aKtU62jrZTKniBNLcTGWyeH2Vtu7cqnM7odU9H",
  "key16": "2vgQejuZ1fZbHCG5xZyakrXogTo4mhyufuApvLZTGQSMzGzT9uKf3WagvJX5nepDy5y4HCKPs6c6mDSgDctAWvrx",
  "key17": "3CMg2VgVErSTwaoGpkUHPXQYsqat3wcfBoT1Ub5HjvutCgiLeeE25cNhPREZR8Jtt3zAoRJSXPsEWKgvpCmU4JmS",
  "key18": "KMNJXeo27HPXL8fw8onBfeAmHxtEtt7tN2qoTTpNNFgsYDBQYGyAL4QuThtacyj3pdsvLWUenbmLU4fQZ2JZ6Cb",
  "key19": "VjfDrUC8GDw7LqTk4aA8PVQbnVKozkdaLJCJAoNdzwbZgEAT88aKxWUD8QhynaEvZCwFwZvRtFUSKsPDE4vq5SY",
  "key20": "4W3o3ASxFHdfjQ7FZrkeh3MazvpthMknf49PJtKPBKFhkZ2rUCrtH8qMg7A7R2bPqz1nuPWLQy4GavvJrBja1r3R",
  "key21": "2emY5TXZ7iHE7XS1zFf1pCqQ7bVPm3V9LtrZ3k1CR6AFBNFofPYjt2g1oC8bRK2kNYvXtm9mJh2MrPwoKAQN97W7",
  "key22": "5LSvFuPgQwbrLVhbvUdBZjinxGD255TvFgoqWs9tbB5eBfj7SXWzhaNksVCtvqVSoGWayteXCMhWVH2f7QH9St38",
  "key23": "2Ewb2i4Va9ATiPLWRt3vVdtZ26Pu9tBQXPcTNrV2tiPUc6exKAUWgH5dpK9W47rawdGybeJ1cHyCXTzUGjBuXk7b",
  "key24": "5Tohj91KZYefhEwGnS5SjxSknrtzEkb4i1RqkkxVZeexHz8d3mUrVVa35i9invQm4AyzUEHBBFruER184D8ztzFV",
  "key25": "2ftpisLxat5onsoGJhFXKj76ZZZoy9qLzowaHkoLQDd9ZEK7tgoQuWbagkyNGwiNtmDNfqDz7n6pAUMqVxM3S5LX",
  "key26": "5pCgiGHDV4cgcYARbxhEXDdVoni3VY3JjHm4JaxscLGNLiPovnbbtGpXwZ8TWodQ5rKk3mfCbxuD4HP4tF1HbdkR",
  "key27": "tmCvRL6XFfRhAqH4Qx2qWvfBmMn5cs1YnLbQuJjzUDPEW95mYFYNyWZXvThGFKHKkjzafu1RTAWafWg6FLjmi9v",
  "key28": "4GDyos1T2i4f3ZeKSVtxHpMa1BoeDF3G88uREtU5tkPEqBvxg7S9iMZJcirPgWQjnicdKXTjxVBB8gfeTe4vnSB4",
  "key29": "51or4RQYCqfaDhXRnEjiwNhtJjBh5x6j9D5YX2szfKC4fzkxi4uiND2oxAvZyP4GAGa2yk9nCzkpT35dRAYc6Mtn",
  "key30": "5szdteaz2Pg1qwUh56dgNS9rMEeoYhfCk9D8jLYxDEcxiJKcdzPuLdiJSTRRckaUyQf14Yho4EqHshkvbvqLaSpL",
  "key31": "2Q6zxT3ACrFAvNHsSQKgVbkLdf8MSnRWk4aDJPpDQnVPkCZwiujVGwr2WSPDHszzmhvchsziypRDcMTP4AHL6wJK",
  "key32": "LjrHG7i5Rp4i9aSJsiKJvyFxkxhz8z5WmAVmbtnrA1nYRkKRYXiqgdcZF1oe8WsWMAMbSYjfcoEXoSSoiaTSkoX",
  "key33": "kGJ7PToVaDk5kqixEJVzo8cPDJoEMnwAtMSDZFCdcgEKBTwNVhcijTCWFtSGg2nodmiF4KWxM7pZ57xVZeQZaKY",
  "key34": "37S2LPTF7V1uq9sNmPArB68yMHgsrbGfiXSJ5MjbQmHf2BgBJy5cQME8odvuCs9TSQ7roPNaHRWBW5NDM1jDMVHu",
  "key35": "5L5kuj17u2PTgWV5tC2mMPjjtvDUvNYaYY68WzZj1ZjmQAkbApbqYjC3Qy4ttPb9kPTwixpu14mqE5iooUxpSrrT",
  "key36": "8d1nmCTbh5xXoUWyBtLuhVRBQBRadB8XZGkoSFAGu7T9NyQ9MGvsVTc7iuV86r7HkEVqhEVByQVFjZ5Pin12yM2",
  "key37": "gnacjFS1MntzFoQT6cG8aizd7ozatW7vJMjGdjFn9ZoJ1qB4Fx7M5Y14z96ENL28zQV5dQsTbgmy6w4jjs88qqQ",
  "key38": "5xLa6ZSxU96zRRThkJL6W77vs2YJYYkWZGQYZv9gBxAGJhyvbuT6DdA5HXYiHNwwKWUhNHVibpmi8aTqJhR4AQYD",
  "key39": "4QnZ6NoTkXv3dJ4XEnE388NnW6VK7preyYrDrd1mX9UouE75fvzi74DUH4swQRnMYave6pjKNKiCvWTsK4ESMrQe",
  "key40": "5UV7R7b5Dddi2u1sKDHkWJ71PGBc9binYRyBF4hbTaVyLQAPLj5gCfy6WnLVL717L8ypSPZdYYHRe6F2nppd5ts6",
  "key41": "exmG9bjoiDnL7wmyHyKzRtYegGjX6Kv777dDM1QSMHkpJAYuKDjPoiY7DfM9DLcWfUL2qzLqcQWykqFSYgZ4hKu",
  "key42": "3PYgzWED6xQKvCcM5GeZrFET3JVFu1WQX7TkyYX6PD4QUMuaYktJYs2TsdN9y6aKZG9RoGUZGS3TtNvy9NPTX16W",
  "key43": "4RTqcyxaUBcLVnxe6FYmGm2Gu8gQAqhRHyMuKG2Pqycv1AMoMAUSFNcxaXB4AQyja7rqhrFgfttfF6zGj7rDLKq3",
  "key44": "5kSGHGA5CrXxk2Hnj7GfkbTHxBmLXFnhcmcMQbzanXa8uqXGGJVQvhU9cG4aPP2A3vvLy9SYU9CJYoxqAsnYEMCH",
  "key45": "4Xgxw6o4D1DEx2Nj36aMhCsvY8vzzT6EEHLFfkiZm9u7GdDrgMrS62zddTLJqborH3e23BwADMWktzuhs4HDUKtG",
  "key46": "2ViiTqjEeeYsYcFwSQ1WUYtBNaMw4eFTq5494s95paoYq2TCFBoGrmfayTr6gzBHmytiBvBVbBRgKMXvR86aRuBd",
  "key47": "ZmpoqsbbRoEjW5NV3tCiRwCb85Et7c5hU9RsPbZ9LKwRidc9CAnYESRXzV6PDEc2ATV9Z2mx3KLFnhYFgUszxrh",
  "key48": "4J2tkaGA89eYFCZU31UzVuhAHediu6iLAmBjsgLEZcJ9QDqVEPCyLUurvLyBPFden5QLa6TbioQs5GTB6eNY26xu"
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
