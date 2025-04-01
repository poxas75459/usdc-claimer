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
    "3DbaTDCj67QZ2U8Co6Mn87jrzhQs9vU9CkSxF4ZasHY6a9ZFLSLibKmjTyfqeFdSZ9ZqKrtNHM8v9AzHHnWurPzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C8TLTKysGxKKXT9fSg1H5sB4BVBM7XCy1sjCoPii3yqXXCe7J9BaxLVZnogKUX37h1Mbb9cwXwQhsg4X3k7rcr",
  "key1": "5zSuNcEUrunEnkvX8wgz5cZxDXzymzMtkh2bR4NB2NzytXrXAtymQckxPmDyBji2WqgqjExswK95nCV5gG86Le4T",
  "key2": "4LrsbVoPQ3s85BEBAFF95Fajm9EKRvjekWwrzs5xZwkqZfX3eSm1zY1jnEJnRdWzTohsj4dUnbeqVNzpJy7aNbzn",
  "key3": "dJ24S5e4sAXhiQVAmbcFApzwuiMYfDoFnfWatqC7okTprxLP31XbmtteK7EGpQD4i3ewDJVWSRhvD6jdN6xJX6i",
  "key4": "5z8HdqVwFBQiJiMddcu69m459s4ohgc2HkAdCnrxt1hioW5KRZysLpqMB2ca5UCgqSZNzCgSN367SUN7EPabtt43",
  "key5": "5NcQaaGGEmghpShWbuzTSd6iniKRGYVSxREuAXuKRdP5h5xNkhxtR9UAzJjNjWMBpsnM1vvgZZz9tyD6oivBbJeA",
  "key6": "3dsHgWiR7J5Uny68nMrh6d6Z7ogcbpSzhdKUVPuZoTZX6t6bf1HtzqRhEYz7cUGGDUBT1ugjkG4BPZ9nFek6HU1g",
  "key7": "u9xpb7bX1PZtPQ5sBoNTuFW2givwaTaPHad19imHAaYs5XFE6nLXNcdgBHYDEuTwGjDF5wxb3qU8H4SLu7Wa11m",
  "key8": "38orgqr5M16Cmp4Mgd53SnNn6gez8YiH61kHfhLTwQEm4kHPwa2f8tj3U1LYLg792ZD2aYQ37sWvgGPRWPZpN4Ry",
  "key9": "3TJ34tdKsEZt3p7eAZ5orM7t9rQ7MVDUUuXZcocmcNvapxJ7drX99UkkJdYMQqNLhTFAYEB2ZifjAGVvay9PwLie",
  "key10": "3uy3KxT7KpDmqRdmdoCZm3iLLLcRFRY6GCgwReLw6bhANMULFJnJKcbMjgq2Ek6B9Fe698ZLHJLmHE6UtfRvPwdA",
  "key11": "4JX5poeCh7gypQD1DLvtEfELjH197wCEB1RQd4UijrJmNDMRoo1qpupAHug8yymi1n2jVqkBEeRrsxq4G9udkttE",
  "key12": "2KcZCc7jHQVVZKBzcC6Eng1bDVuifCiYMZjcVSPbfS4myV6jWvmwD7yyvmn5upRyGNmJTCEZVU5ua1WEknkJgAVC",
  "key13": "4SeYDmvJTCxEXgGuPh5rabMkC7oDVcVTEC7uxx8Ef1wr2rMkmw8QNd9vrhAmcg6ZedzVJcb2VthtijAYzFaDbqx7",
  "key14": "2iGKQ8XAQLwwStxpV7gkWvdzotiai8L7jJLXwxGTnJSf4mJzhuXVZuepeHKbBADuVxUqGqvKE5P91qdSEVVVft7F",
  "key15": "JBryWD5ufZK9kXKjofEAYY9kpY9xw6na5JLhvXMDGVj6zYiaUVwMMiwwYF9CwpA2fSsD961BAYZSmkxkZLDKHch",
  "key16": "5JeKLRiQzion3ccim8kHMLnRhVWHJRLxaYQaxv9UEjLhNJAdNWFvwHxgDkRFNA4ArvSwUun6zrQkATYVH6ppCRmD",
  "key17": "5QtYoeuxzfbYmd5WuowHo9TFBFgS27XxzyCTrUn7vrDB4XpvJuN71JZjJE8TbcXtQQnSHPku76G2xzm95vVFtWLd",
  "key18": "oZ747MM4oiabizx4w25JwgGTgzeaKgAcR9jvAXbZi4uMQeqdyvpSFqvSrRyKHE6hGfhwj19jxAcPNpdA6vr2XSf",
  "key19": "5aqaJF9uMNUryx1uBUpNDzvMttn6iGNFGzx2BrmcHG267TZTRBLr4NjrEf9C2o97KTtuLprkydTvYxm4PETh37W1",
  "key20": "3yPk1wU3QJeRB64k1EjyeAdqrcFfWB3ZqXYhLrfHnebxnJWN67oTXXyJftJFRFHY8WYbeqyph9M8Y2pwxFGUvSuc",
  "key21": "xnhqn1Zt49a5BqUSvWBvBS6FaGgaHx7FoQCSQfkWcQF4FF2ZS2xrG9aWT34fWEkoR4vvZcyMKxu41fF7Kvx3VCb",
  "key22": "hVsbpam5ZGafhUJarosFBpVcvd1GLdCTkwjmdkJr9Q9bTYKqVBCFfnBrXRqF7WhKRkDfrTYJuG355FpP1AgBq4u",
  "key23": "2KHSTD9p6eNnjUYF2JczcJYuBXisgigWCv9mXhM79VqFquT9PD22VuADigGEUehJgZwRnnPNi1rL5LejUQBgz6FE",
  "key24": "2gX5LBT4d3EpKVv5tFC1ZuLwJ53jeTnJ2ocG6xqLpnQAnLukUBv2gXqiSY9ywqiPQtPD5DcnNVGEaS6PY9vbXGi2",
  "key25": "3M2phKtUPqP9QgM697H8Hzez5BFr4vpFv14qKp7ZLrKBs5Aj5DsbvYLBaGU15gjRqEt5q4NzYXL7ZG2DdsXh1xZt",
  "key26": "4BGDNYrN6DZgy32nNpawqENkB3ZsgvNPDZF2A4ej5fuA92bPRDaqAFq7DeheKRMPK8DgaMWwrD3pa3gkUGQ2ujzB",
  "key27": "4rTKo9wtmyGwo2T4VQPtDxm8K61XAFTiTXwudEU5nzVV6EEjzTcZvh698SmMuKG7vJdpvrSRjZAEPS9YJTsS5ZYE",
  "key28": "2VLeeoa4dE7P9RAkfCfGUWZJcqm893SuxCbHNTnocwjBtXBa9hvdAYeYHvtedR2Y4yWgchR6BVexxfiyK1tjDz8U",
  "key29": "5zUAVdiyNBwRh1PNS6CwDdVBQbwfauG4nHbPVYKvq8n1mmXwXLBXH6QfweVqRv8RCNWQ2zg9JeiRhXDERnzhpfyL",
  "key30": "51TN7p5K1sMc5ARWNECaMxpztZS3p7XMeHWTFHGeZJn1s85RiBy5D74HoUXBMw84QLb5fPhtnKNufPw9zu6mztJ6",
  "key31": "3kUtvJNRR8h8f8vj1YsFZRejWLWsJEz2ATPtRorDFTRYf4NQbQSRZHdHnKWxAw5x68SXTdBbPisGtCGofUuU39hN",
  "key32": "3W7Vg7XW4ut3Ci1vugLSn4zsjKKqXDeTgLvAbJF33HCXxRGKF67fTce79ZZ8fzHT1ZHWy3NkcNmqyeHH8nfiZbo5",
  "key33": "34XbGftkyu6EuKxJSPMB2g1UndAWUm9bzDYAtQaCQBSXPazwdSXfb7mo4aCygsJhvRwrVynN1gYV4k79vHYZEPvX",
  "key34": "4EQFJMLxsuj2gGpumfuDmJeZfUpYXcnkqaq9ZK1DohMsGvn4hvPp2cvXCfJFzmSxiuU5oHTfXJ4UWDD436yZP2ZV",
  "key35": "3u2fRSsvFHQCyYLY7qEHQm4gKGuVaDpeTqtb8m1XaHtBcsAEQQKHytPoZKrqn2optVSKg16JFNV3TKMEvMAawkvR",
  "key36": "2WPUn8RPJ4v9tQaSPUD73v12vaBgmTrSNmcfQSLYs9mvE1wMSzQzSQbwfKEdLqUPVwLCtgA7LSAxTLCt5hAtkRZp",
  "key37": "2rLRZusBSXQM4gZossZXetwoKNkcLFc4wBnwps9btwuf9uPg4WCRpnhYjYfgaFU9Rj32JgjzzkUEroH5M8T5o5vx",
  "key38": "5jXE8NXwdDy3LXoNKRwjPDBfp4mmoGPojbzS7bjGbAQYLA8Mw9eTSkCyfPj9BDi4Q4wLnnt2q4ezTo53hVYxndmL",
  "key39": "mNfTPyYTi2GfAaqi6WHgu9MgeyfZfWfSTWJMDysnKuZ6GezirHccRFgLQkGzLo6QqZu6JgRWuVTmyKwSM5biCfy",
  "key40": "3cD9sBvG4s6ofWHGFLy2fGK7WZ5wuM1UYyWRDNUiAAyN99VihAtPBKs9UfoK19Ko4nRJy2n8LiftLzVzcF1viu7y",
  "key41": "LmJ6gABGCCfyFgVmy8JPZStDZLHPFJaJUGGgX1U5XgnBJjTNApGw8aKF1JRVMpCzjR2pDbJ9NnHQwAVnPJgzhgW",
  "key42": "4Yfn6mJWX3f7LaXsEUD6QwQowYx8haHSoBGtHwcbcfmRHjXgGCLvuy9GWWX8ua2z31hh9sW6YGMXnXRE9bcQ145h",
  "key43": "3VYEfsg4PgzXtj7hh2vaZJikK93BzKTw8kFhDyzH2EKfQcH8QhMcimTyMWTL8Y7KkszVtkGodeGRxw3Pwe1d1LbA",
  "key44": "42STTducPMDfM2ChBnC9osAui4pXtcUCwJrPsegwZUFJDAvnktKyxbYBjMG4WWdJNJvRgE1qikDLXNNMS9SpBM9j",
  "key45": "2cnBayZiyZ9Wvmt2vjpGjkACvCqPUJ4w5oZG28hvAGVTGWTUW7pdPd9kbyskSToQswwbhhYREdGHsgXQbk5b6RXU"
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
