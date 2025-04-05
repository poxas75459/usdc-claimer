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
    "FDRzdkv282tGXeExs1ub5M2rCEKo5miZgheQyHUVD8TZuyGwS71vax8kF9eEryvieyJPqf87V9iebWAxiPxAs58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ELXDYLDv9qNR71u88c9Axx1J4XcKc6DjwgUg3T9oBRCoLh5yYC9PWXDfCM8Zs76LriTMhV469sjFFzfzTtQb2of",
  "key1": "5QFRGRhyofATTEe7ZLPfK8H7wkRn71GmJhHGYeZNBBPGaCyKX2Twm5aBeW5rMDCdLKeemNav9Ht9bNNwAN7xgUvL",
  "key2": "5d5hcVh8rU9RyDpnm8CbrRB2zy4DZmCFh3bbCknHhpRgWEbEhCTDSDiJDGNQcmZWz9hbKB3UedspKfBq9D2ubb3h",
  "key3": "2AYp3jX37f9snJQDPtUiQvnhtFZs1PjNa5EFLjehBS2A8zSCTrMZuvj2SkWuoPb3xz13bp6JR63XxvAApeL2pocT",
  "key4": "3NDBzP5KxJMpbW6KCpvVXGAYNcBEEnRnKsHG9zZ4cYa9TPbbBvQGJDms2V7T4vD1uWgz6BYdYyJ5uSnwfhBGwWjk",
  "key5": "3FK81ukynzm22yQ7zrxUEAJhwWABWCXyPx27NYzNTEhr87jvjDuSceZnUT8QNvS3ysWVh6bfkD3hzCCHuuAXYLPp",
  "key6": "4gvDamcKKESASJB77mtx92g29CipRLBpZygpp7dek5h77xkDdWmyHdiTHJrJbRP3AFuYQwhrKpdvgaZb8CA9zJsm",
  "key7": "2Aebi2d5PfsL3oHHZuXd9RLTUGBKGqejWj55PTp3qcUhpFCCVv3VFF2tBpJv2ALS4jxwjYZAocFNWLZTSaJimNEP",
  "key8": "5SYRv4VyJdggERgqcKAdirksoubhmbndu9YzWWgkWXWYkHF61a2X2FWdA8CNxyhtCYyA7WacWYyAri58DbXpXiuW",
  "key9": "3FkfRDoAxLqysm32yxx5XrtGZ8Jj3r7RjoGZbjXHhipSEpAj3KZC28WRLG2wfvzRtEsrMqsQvWKvzwUkTiA3RviR",
  "key10": "iwYpWFpmdZmU7h8pZdnrwCt69gUARvcE4Xpa3DwQwnGdgGVTKw1mpJRyQwBnvw6ruTLMgvwW8nqHPdwQzrzqDDJ",
  "key11": "3knRnzxTRc8dt5dNTvfCz2rJwvCQAyLJPgtrRZBw2dgaLJ7CMjuUxe5xukQUttc2mUQgTPU1jywN8TsyNfTwFnC6",
  "key12": "2ikRCyHfpGDFjSXw9zed5fNu3VJ6atQC3U99CZWtcimLY4kRFEoecuF5vQad86jCLozoKr9mXcVf883dnD6G3Xqs",
  "key13": "21PbzJMx2EMHUxdqhwtbhZhp76whry1ZZ3zvasa9QpoPLiLUhu5c5Kmnkf4zyPYmoWnsPioFTUiHur27TEfApu6t",
  "key14": "29xurSdhmwDD1zrSXv2tSSimUYj6YKUubywvKZo7mNMnfJsnD7LPc2W5rvaZr12sT4Zpr5hYZ7iyEte9bPE3WA3C",
  "key15": "GnmhzCegaxDhY4ezc212XkvMw98TKTXZo9SrwarVCTwPLQuD3oKZQgYfGAEUKjDG3HLnxEUU65YFiDYMNfanwns",
  "key16": "4DEE2nSfJw2LSvrybG48rYPupAQsmjPx4QgQQDHbJdBZvu7tXjm8QH9Y28Dv3tfc8mFbPDtku6ecvqKtwcEmFbof",
  "key17": "WyytyLSa6yKcGscuKqTsGGCZfuajeeoUqjaFBqLazbo9XTdMJrAo8jYEQy2GdCCcG3LF4dfhjP5YGfEdcSjEf57",
  "key18": "4pcRQWsG7mSjCDiPGYpVR44wLS5HAj1JZ7cSr3ndyBbu7xgSNS8KbDArXm6xQf3zyK9D5p3wfgCHydvoFtbhw8gd",
  "key19": "pUxk8HbgXVR1aoLFkg9Q4PGB8gqGUesUEomBTRoZYRgjGG2ZDzyZUWP8UxUAwwEuKsxwTRTTHXn4Uxyvq9PTMwD",
  "key20": "fSL3HpmuRg2YEnup6vKkh2ysBwzEDrx9pxSD24v9LtQekYn8mNpuZ9XFDEaKLznho4fFpNupUxRKsXpzVoPYAab",
  "key21": "22HbkBnhsqnVu1wHoQDPUHf5fJSsVwqmbPQU6npwrY32WjDQgNSVhekV2dF8LHWb5ZmDQUFUd96PJTrnFZZujWwJ",
  "key22": "k8iia4TYjeScv6iVcDXDpBCMTCRWXzHp9Vr4BeopsQGDZ9kXv9WqTJ6FuptXaEvydMLbNdX3ovWhT8tmBWtzCtn",
  "key23": "2u4eTEUdoxKs8edGX28vTvUqFkbQirfTdgGDi5efGcU3JWNc7wXaXRBQNLTWHRtX5uwwjgZ52J5uL7GAaM7ccpYs",
  "key24": "4mazz5xkXyAL1uDjJUFjF6cwmKNdwdqDPm51eeQc2VpjsZBVxBAyDfoLvp6sxdsTFzw93H6sxjXFHnQewygQ9Me7",
  "key25": "rUdd9xY4jbTj1T3gGcMtH9F8DBeFydLEJS8Pm3Gp3EQQuDea3pCwvNrSYXBUdLW2DCykekpe7cMbPCDSg1e6waH",
  "key26": "2Lu3MU28trCDdL1eTp2H1a25j4UuhSoYVVhvryL2nhcKK1yzvzGHCiFBUzRDFfUJxHZjCtMKPxcucVzqKmeWog5z",
  "key27": "3upn3BU5CUZ7K1gdCowFTGTxQfDySUsvJ27EkzrgyHeisG4zLMw61LMethY5LCcGUWPYQB5r644dbu9rfmb8uRL4",
  "key28": "2smoe9zwQVf1XyzrmvUVnBzUMBwxtJwouRLA3WhMtJtbNHd8DtYG6L2dN2G5g3wQrYnZKRCNmqseADq5fAGx9sQq",
  "key29": "pHe4yTZDG5fty2yvwjsHgB8gBYhBddJZSyqQnRfJ67vRXckb3jeXuxrFFYrMyED3YDcZXd1KTJbRTV1i48KoSTY",
  "key30": "3JxC2qvTsBqtxxGxjo4EDpVRTXhZgYTDuiJpNeZhAxdbnJCtuaEfszW186NR1pWACwDdQpCQkRkP4LRuVhkDhmEH",
  "key31": "5yC9w2pYMKpU6s65usmyfyDm22YzT8J2TFfZhUfkhDwo74EcpWG8BjeVbR4XWcyJgXFNvLG8D3Yt2fwnTW6Qhibf",
  "key32": "38prPqaNtA4deR2ateaXFGuvZjXWrSguohc4BdM5jUbxRbvxNs3ivqcofHnpRDXrxzTXZDVs3dbVSuUCxENjiCEH",
  "key33": "2r5RjqpzjUMotxr1LzQnGper9GjJmQaL5Gk7D1vHwa421pTu3ABFreA6uHgxVjLLu6vDfEXYkfsCUN3NH9GjgjWo",
  "key34": "2L16LxU7NUFcjuAJExHLEBiNZ2jZR6h1uE1ijWdpE7Rq43PPByDVNtR9ZtANpx9sKUqZjhvngHWbcMkuJnJSadp2",
  "key35": "5wYVhE9H4LPAvPLFrwZhULrUpWyuoZJsXhW38kZXChmBc6qs2KVCP57yFxrEZiZ7MwkXpjueng5h7Ms746hv8ek1",
  "key36": "3ciPy65yDDypon3jQzvz7JBHc6Yc15Ah7G2ryVrvmpgbebejHn6ZQLrT1XuWeBQnqGNxZxMihwvUVjiU4eMcuWvR",
  "key37": "5dpzCHQ9XZRs4GJr129gA2kzxUvdx6H1vugJZ8nTQdGoYBczvNb3idPJ4tz7nWNV9NZqsLu2nH2vQ3FWa4m6hTLR"
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
