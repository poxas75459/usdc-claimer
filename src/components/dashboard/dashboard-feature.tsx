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
    "3NxUirajbYAyriBkGbqs5TWiwGpsUNKej7phoYZS9ejWphaoruEZ9FAHS3xHGg4rMpTUCqaNpgr6JFDxSPLMhGLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jb6ZBn6zUWtAdymJAeo3B7ArpBraSwhZHVUJcKy5XsXvDxeESYiC8wSiy7KSPFRxDPWdxJKnET1TKxEmLtDKpWs",
  "key1": "2mC4Jjh7VPCiD1xG2hpUGB4XjGcVphiTeBM9U98JoCy4pwSg4qRgyqii1iFRTcLNJAzc5m37Yu1g7wisFntAYFby",
  "key2": "2cSphLBYGyjAyRgHwZC6dZ7C29Uv5NeTdsUpdYfrBnwJNuZDph3oCMqGgLZ5z3hraXFJxCTYGGibZcrV6dLNhXww",
  "key3": "524x3qgDmgrUFtZp8LnBxFLamAR53tEAWWvQCEVg93BxDSJUhK4u74rK357fHTKQc9NkQDHpFoK4XptjZh47RvUt",
  "key4": "2Ud4LUA44TuYk4mEc1JwcSGzpZUjnTNHDvrdx9qPVjGxhC8DQW7AAtbagZwgi6SJeacBGcb9TwQWvQw8X1hrcYww",
  "key5": "5t5oJrkXeW1aYv12oq1Fmbj6So7DeuksKcLuBYovZc1M9j8NUyYU8ATRJURGEVjERVujUuH8djLfGAZpirMEph1r",
  "key6": "5tuu3m7rMzfBtJLD4TdbPN34seRxf4mYJfZyhSNujNNoQPdDtw4dnZS8VQt2WRmx6s21CPM9c4823pHp8CVbwL1Q",
  "key7": "2K9Jk2ahneQxaUvkSqM9NiwWHqHH5SjDiTjoiM74kGaTCTZuHzZqD8YTDtPhi5RRfBMhMdn4DysoNXZQxGz9sAwg",
  "key8": "5mkZMxz6eqkodnq3Kgrh6TXYcAp1HMayDPWNQgU5nJYai79GFtZ8bK1x94VjKuPB2gGeHD6HaT56f8nFyRPAyhtq",
  "key9": "rr1aFbeY6UXFP6eyutv3i4DyPwUwWVKLZykt173va71qAyAvqNUZeihHxnKpgEY6KYkQ8G5hNH4RWveqo5shtx2",
  "key10": "3H7FR5zKH2mwk8k5wcvVLKps5XQvjugKGeeBSMXaRkhgNrQCVAEeJUjZdkYb8QT6GfydCF33rxGyJoH2borctFMG",
  "key11": "347zUjZP67Xx3T2RMccMDeLcjyYUFeTgey8TFvv3tiWCoudVg6D788brp5gKwDGgKKzGzfASWQ4qdBvXGTc8QpJi",
  "key12": "3Z1HwMWis8XfSPdjFq3zdQb6omzBQTZZwNRtk7Vcj7pFudnXSTtcUmVEw2o4HVXdsxz3ncMwdp7jSCB1SenGWVk4",
  "key13": "33ifbkoYTftRYFdset4UBzYJoZQ7cDBwB1VVwPJYPzCursdK5Bja3fN14ngZAuDAxsabqKCUarZ6kvaBHgBL3tC2",
  "key14": "5fXMXubesW2Nk5v12wHZ5fb1bvGt8NgKU5Yvy1yEdhQySTPBvfj1dJDvw45KpQJp2ZTWYHNKFQ3Zbgey2atqwGba",
  "key15": "4H7XpqXyLg6jUpMwWksrnfvKftnteTq7ed6sgtqGFvP8JB36to4roP86cCgfLWQYUFQPHH1pS8XVr31ZNWipyqQM",
  "key16": "2kr3XztvW1FoBY1XXhtWcLXUKb7LbrrvoVtaG4PHrtUrR6MMahJCqC51bUpCJdbHzC8wDKU43vx3yu34M7dtz9UL",
  "key17": "5HxAkaRwXHjzx5LYUhAyfjd13cs1aLkEgo31eyRo1qaKiwZCZU9UuUL9My9R95R7zM7Wze3MbNcrcsfrgzSSjSpj",
  "key18": "2MsQMRQCSd9hzaEZPcY8aTC6wjksiyqpj56SoHi25qS3GfrsE4Xn687irvKqrxHoJDqSTrH1q4eE8tQtAtfJT2wd",
  "key19": "2GjZh9sctjE9Ue6NGgVjSWxgmwKUCcxAXCPAY58WpWNXwmdsnpqdSdMsq1LxVF7T1Cvayc7RFrm81tvkCqH3sukS",
  "key20": "5CjVKNt5jmk4tb9iCob6kRhufvbTCTKd5gzJkpkBKVQKWq9V5yyDbVYUmauStMSkL3sM34XBJhXVxE9RmsKCrTm5",
  "key21": "39fq8XwAkxUQNdjthhiJ7bmq4jYVtcQ67Dgmc5MXFS46GqxrffxwwwkyzX4ciM1wmQxAsybkHbJ5ay8GaduwcCxY",
  "key22": "3fVu6EUCL3CogwYLeCqDFN4vRQ6BfU4yt1oSxno7WdQzEcMbyXDzzjbeyJBZaR7ATwmy7ReDqenD8ep4FKBrWVgu",
  "key23": "AWNVaiVgthqweCZ34xm5mnwrUGA9kAzL5qzJS2Lv2jVLAiPQJf4VBPg4Jit9YNT5QVwS1GY98qgBP1MDByp88YT",
  "key24": "649HdebeB62NLoPiMMjXDD4nsWtSACp5ApaSaMMMpzLfZVe6oBfxjvKGTzxevXkar6zRSCoUYjjMjXR72jCQFfUk",
  "key25": "52FUFn6jpnZ91N4mhAbNuHK4Cb4MNY1v9P8XN6cjUj42JTepY9PETHa6Wgks8rt1XZq7ags61JsGnHPQWzmZrAV4",
  "key26": "32kDMNtch8L2jfnEco4iu9GxktwkA7gyY5CAjsjQYF2XEbW4PjaMGt9Unh54yFgeM7qKxivfrNAWwGeQtmCkZCVT"
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
