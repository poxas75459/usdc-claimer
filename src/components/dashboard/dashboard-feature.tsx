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
    "4GTeGyE4eWrma2dsNBbeSkPw8CtQ8T3S1TkFAzHFkHJJ1beCZeUnrzjJeVh41F2rK8iBbYU71FxgYtjBhJJzdjXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2znms4qdUqr3mevwTJQQuV1CaVb34WhTU8k9gxg1dnr5WRijipsVHfR8pWuUBzReJUji4qzkLPv4qzidnPndBjqD",
  "key1": "2FviY6aQusaBZTWuR7Zc8Utn96yvRY98rdfzXSFKzqrcnCZ9SuFgNCep9TvvUQnPfMBezFLnRafqEE4bsrZJozzM",
  "key2": "3TNRQ7zRBCueA4jMGukS26c3GdCmdMKpDkh2FCCWofSt6eRdPrNvUgvyvfhccSsqyXKR6sKiN7oavMpXMyrQWriL",
  "key3": "35jBJxMerLtcpV9kTBboNMpipwWAhbyDi4c866rtBTjNZBJeNRhWJAm4doVGzEa7H6e9yQmsPeWYELaDocza8ZHD",
  "key4": "3DvZfGRu3Td2SuAb6VG7WNyaGUgVYffuW8dGHivwAWadp9yHQAyyAnjsRZcWgcx51NbHbS4ZKrXgaiWF7YaDjvf7",
  "key5": "sBB6xjVTcfHccrHYdDm9Y3JadZXsNKGRa3WTtp4Tjb9MWQTUSVW9L6Pzht2jaQnL3w4UHhUuSWHLVeoyz62havE",
  "key6": "5uhoTkAj6Kwi67hUwh5JGtQWzErahJNM6zZ8HkVsMnYzfHeEf9kz2UrLJCNjjHyofmbnx58WQUTyCYadpEopCP9q",
  "key7": "4hbMUvUXchmg9veirdPhE17THmAYXx1o9tkMSTPkTtHgYmPcmZfGoNGjZPjKt5JBxwWox5DgezxDbqb9kReFv2VW",
  "key8": "5QRgTgFvH8n8MsTsEiMM4i59KgrBEhw9zNTvWwvh6sManqWyq38eZx31dZw99uqHxWySeVs7S55MG525QNHg9yxG",
  "key9": "4vr1Qv4swAGE57n8iQgK1ojnDPoHxmHUQ3rAbsSCdRjUar5vsFgMNVDgNe4UnC1zcuQQ7QbCoXtyY8x7b2Tdqeau",
  "key10": "UGGwACS8qTfTjLuMXnwc9Vm4DZ16bTG5dmeoamj6QyNYjENAigdDEioiho2iR4pzMQQ9k3owN91RGsubY5o1nFy",
  "key11": "24HtZ1hicjpHKRhoCm72RWBnbd1tRnRJRRwkMgeNghZqivW7Y1merzcMVPYAB6bQsYPsKdVQaALKDapgz67Yu8P6",
  "key12": "3W4kvojA9gr3n4Jis175xzgL48FH9FrBJiT1fRkPhBPDui3VfqzHiMqC9SkBEepenC4ibdBYPyKH2nRBPzsc23Nu",
  "key13": "4sHP4KRS1XPqXjNQDwCDFHQu6V6TLULJaTKHcgeEUKgsVxfpyev1Wy8HxRfBRF931spDDghwNDKi3GaGm1UutQU1",
  "key14": "5mswtyGmhaTL2t8RA6BZwNnuZoUJmpTmXnh26hUuHERB5HA5x5F24uhZemL7i5ZDYugKQU942dnB9kvU8XnW7VF5",
  "key15": "3haL7RWcyhsv231xVMjfx4iY5Rf9J4cR69z2xUcoutCnTtEuSZDCabHiWbAr7UHvPC2jrisytv9KaeZzCMvGRtpq",
  "key16": "2xVtiq5r3SJBoZWprLiGoDKAgJg9RGUVP9Jvx6LS1YghCF7EiUW3Tk8kbAbQNU9UWc8HWve49U2krPwkeCMpXWpu",
  "key17": "4hqbRPChPswQf4CBvbx2MArfaboCR2b8AzLZHaWsX5XT9LLazaKQhUiRZfca1r9vwpD9xLRoVDsQW8tw8GpQk9Mo",
  "key18": "2YS2THSpNXj72Xk3qFLdsjoSBsK5viqUAdNxbMdRW8EWGnxEMa6NveYbEXv2NZiLjhyvs7bSCjnTbtSsaYcMzS1h",
  "key19": "2kf3dremxDvJ5HrXc7NQFVgLZqkHvEB3YRmtzGLUHhmzvRgQyAi3kBChT68XHZDWBSJKZr5qb9SPcEnSa57UjvLa",
  "key20": "3w4AcKQhkvRn46cqUopVwbR6iom9GhpSzHeusYEhgNMZWCmAkryU5eH9y6Vxm4oqLWVgPA7Pfw9cNJf3XU8pzJEQ",
  "key21": "CB1AM2yrNSK4WABLSKCtjwwjCgMaaqgzfGWut6YztNkypEus9jrhKMzBwUJAXT6rFLQQMtn4RH7b1Mn3wgEgzuG",
  "key22": "4b9tddUMZGeNLik7tp5S21ZJaDooGbYAJsnGKCBqDBZbAFisbkzKjSYwkMQBdvy7KUV4VKELwapVHQmGSKYb6VcW",
  "key23": "21WNQwZCWNCT1QGtJ575ctobq1pGcwz3g7a8vdBN3wE1EmYpAXaLQ1iHzxL5e1LKr1mL4tYZMUiqatbu4rVoUuoY",
  "key24": "3hnqi75c56B8ryZ1XGVYH5UGL3FzG4XtdhiFN7uSWZSSQLfCeRotffxcWKH3Wa1ZBEXLdFtTcwavw5s4K9zwQcSS",
  "key25": "2B6SWwYgrRCGi6LPa8iUEzLhADFaJgBz4z5FjerEgbgYZKpSMfpQs6WSwQfxbhPtFdn6LDw5QAegF6J3FL2DP6UM",
  "key26": "2dxVmVNHPLy29VVRsxwaKLyzrcg6tk9y6cstWHmqc9a4cWZcctzwGjtydtopzc91jxJ7wgN6ecSYMhijDWoCujxR",
  "key27": "48AeEwm76QAdtkfd1HrySqYVnrVyjrJXWBAGvewvfBGfL78mK4TGzLdk7H4SmKSmUoCeF3Df28BtJtaFPrwmy7aJ",
  "key28": "3kJoRMn89jbFVwedagZzUeYJi5sgVTSqEME7DZPEDng4xfDDBWGZ47tm9AzfguyyYFJybZLbnT9eG6GmaCunn74e",
  "key29": "M57MzXBye3caVV2kVdAeAtZWsmrXvo7jKc1pb7WKmUgAVa4NyoshXmCGWwTSJJqeF2HtXrjT6f4UGAmSLkmY6eV",
  "key30": "3e9M6ohA1zUP4WEn9wFD421t8TXB7seJE22w2puGbW2GB1SegCjsps4MTFUancUFRyuKVgbA9NJf4K4emWL14CU2",
  "key31": "38Y88QxQYkZuoVKEGYYUwg2wLTDWt47xoS772gsDKkQ8DJzEVwYpMcy9EZKFuAV5swg74gDQH8C5aHdQSd1FKLmJ",
  "key32": "VshtkGRRrq2HfkJWTw8p8ddneVtJJqMdwSLbmMPGGDkwSxw72kBYMh8BbUzdJsyoPuLTD8fBUKp9cCfz119qrHW",
  "key33": "4dRS8dDX2SeAcpwpM2HFoVD2VrU9aTNHPVztJm1diJP5ni9v4v1gShi83UCCVSJqKzTrHpuCVURzinLC51pthQis",
  "key34": "3riPNxr61ECqXz4hZLEphDHJP37Btta3ZhnPPtzbffxesXVrhfYyMzGPj1NdjASamj48ifxpdAF8pcY6vJoCtr79",
  "key35": "4YvM8mTGzB8ZxscCV8ouotKcPuajfuw9rwDeWoqyKPXTYYnVRormeNwF2bGEJwgSM4iJLaeKV4o8AaAqzEEaeBbU",
  "key36": "4mwY2seqrWcNvNSe71pacgbJrzpqY7s7fULAV2KEqANPFfyAr2QutQdT14kxeaPup1s7rmWP1QvnVHzJQgCQtz54"
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
