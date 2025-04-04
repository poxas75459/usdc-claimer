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
    "4QrHKXgwDi3uWNEgxWRmNdHFp4r7FchMW8SKuqzARZ1MuaEAtUeTGZuD836GzSwRnMFgV5LtCmPhQJG3RPbTNaSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66zHNZDMjn3wV2xr85KjiupopMKPP5EvGWJMAJJjuAQ8kYRhEeW6U6vWBZcFgP9jDnM75212neRmQExNYYTQR3ZK",
  "key1": "2hCriTxnDTNiHpCywweTk6MoLE2q2yGG2nLsrUKi5oMYiQ14GjdvpKUK8JahtGUgGtu4QP7qPvdDJ6EXPsNEN264",
  "key2": "47uVEGZcQ8RAicpHEN8LXt4BbZTzT3nuCeqfx2hnuz1ho2mscPv3F96WfGkugLZybvrjfFoiFKEWn75w3g61Ecy6",
  "key3": "JuqbuzSHFHXcZJEk698ymMzc2vT1w4KEWt8iCSyETbLaEBmQYHHGtcpXdihue7SxwLJWPdLdgZUH312Ewm9RQzo",
  "key4": "5qj9co5pz2rP5joX4FUAiUsu3LzEdxMUvLhq1PzuCb6rL6oFAzHwV2Yw2KHMHKDzoLSZNi4UA4CRSNffLyRWD5a7",
  "key5": "664TfTg4sFXv9wCoBXpyVf1QPzWejtb4SDfxwwbJ74WDHL2g5jAECHPkuw9cqFesvTLYCPH6t9AjQdyq7Kmafkyb",
  "key6": "633tztgn8XdfheQCEYM9DJK2yRB6L9C9MGM4U3jvm1FTcpYFiDd2NHEqLiwSUkMFmdBfnC6F5z9JzYdxUhNbj77i",
  "key7": "YDZnuTGWp9V6crxuiduTHabtxvoub9juPiRB3CTG3epSx1amuQthBJCMTXqPNSdFApqSMFAxSsvQLgMTmdFFMjF",
  "key8": "4WtVxD4YUWappuAzdqz8KoJkRFndA2U2YR9p77NYC9hwvqDGtAc2k3kXrkZdQhDXxsfXpPBRME6sE1bgAHHuUQvu",
  "key9": "2xGVUcM372Uc6S4bNiVBx9QXsrsoRECzyhQ2v7MAsGpgdFvbWy5YzaVCevzEB43uVtegsRRv6rqj9PLdE2iaLB5",
  "key10": "4w7MDk8PhFG9X4wCvZ1SmVPmY3thRcD6YzJus8CMvixVPiuz8hno4ceazfreCLmr9doGABUwNieDUFJ2EksRChoV",
  "key11": "T1pHh9RffzxnemwCqZiLKfUXUAEmUpZS3yKNKxAxXgB5yu5WB56ppEuP8vkafqwi2AwKGJvrXFEXJDDEWvgPop8",
  "key12": "3CrceLEGYFBYEGASLhje5YwZpDRpa3hUxjKmu1xLHS5bsbB2Y8WhVhXJuy1TvRVhGEpxCvcvsR3iZVF53Zwzt7bi",
  "key13": "2zvMkf5D5rT9Xfc7wxfEsBVS2RvSfQFcNC4Zhxoyx6isDnty65S1NGbdK617H8GuwBFS3uBeBZJNo7dkbZYdfLP8",
  "key14": "2vakiNDxkYjqvbsPUALTmj6bFpnDjhUt7h7zgbmapqv1fLMiZeLGKgM8GExdSsXc1VTXKKgMvpTgdTzxxW9enXjU",
  "key15": "2gjj8aVmaUZTTEwFrggBizLpSqadcWFQYGezAQQYwq2BAz6WXmpJt8P3gr9yAiEU65UpzkL2k71sSJQQtTYzQshX",
  "key16": "33gRNuXwFNGKBEEib9j8gZN5okcEnLoEe7ioPCxkm1JDjVJDsAGQAKuKNrze4JvRRE5K3wMF6DxMgGCgibE3PoZi",
  "key17": "2Uav85vcoFVjMpfFYTDVVVG7pxfSAZU9rgdH7H5BQ4EY8ALtkUaDsMpwYQtcVZKwt2b1u5TD23ooWX78xYrk97dT",
  "key18": "2X2XX342Q8uKtYq92HQi2CcBwJcRcug9d6PLGzRVA55KoHckYYYnfQqUUUT2dLS2kFH1Gvi1os1cdG1oD2TYJrL9",
  "key19": "2hrVzVKM2Tad2dqqA5YAyYzU5KMe2mrHUKZTyhhXJxKMCdoJmdn9psz7hmVJjY881VuMUGGGa18exR6LBBUy9xjr",
  "key20": "3tAgmMcRN3CY4iPJi1wJSnn3Md56YFjgcFjz9QW1t3yGSW1ibheyCykF92qVenhawsnTc5h942PTCLoTxHBVB2jb",
  "key21": "3M7kwrRTvHoEUWQQTr21zScmwg7JqW31JfCvvjPp7BQj1X7Xiv6zVsSLgN1qQ1oPWJxChoCaTgPxQ8L88uArQEFr",
  "key22": "L2kcRwVgfUNznuJ2Tvrdrnq4X8FAjrHBMquise5wsXtoyjUJP1jDWngXuUhyohY1mRuNzsq6ndqdpnZ7C3oXcep",
  "key23": "5aSAmBeKt1KK6rZWxCkVWYd6zLLvUv9wpyXYp5iRBWJd8tXQT6che8X3S2bC2d8aH2eLpTh1uHZFX51nKZnW3oZE",
  "key24": "TJbytvFWVKvxZPCzn3WeKsSbGE2s2mk4iuVbezgZFKwco1K91wLyBrnMyei6VVwXwsH3XYZ5nT55WHes5QrqsmR",
  "key25": "2d8Dog8us4hPyMnZdLheBRJf1gE8a58pKbqCnZ6JKoaCuR7v8fonabXb3NqmXgPRdWrLQ35Ev1kpQWesPUSb7uSt",
  "key26": "3NSYPwDasnLjhBhSivQbPEVWKRrZofVBbZHMjSfCDkxv6nFhJjBmG4vuAuqwjBpanBhMdgVFa7d1E7wRwPaoaHhY",
  "key27": "5AD6QSAHo6Hxjg7E4BFmniLDj36mUGyNBvBKozrbmfZStHK2MRcomzCaMUy693ekqZcNLf3ogxqP2ELkvpRcTSJ6",
  "key28": "4suY7x1rU4vfM8ifAa9Kd7w1hRao89o558K4hYvc2jUJvXFxpeGZx8e91XGqw8KTrf7B9rFwXfs2wgYPqB7Ray3N",
  "key29": "hE2atVA9Zxh1HvmAnACTvmhRZqUAZ1pJPaAEKqbnaFuirsrtvK9hc5hraLnu55Jxj7QJfiJGMAZszsJD9ucwQ4m",
  "key30": "5LZBHdkWs5qAai2LPVagHJBfE4n8wFQiByoacM5CrNShj8oDH7gZ6BHAPBQ6KwhnVLeNae1xcdYk5Z1Cyjij2Rtu",
  "key31": "1bVu6RUu77J4zgseVNW3G5ehta7f1DTEva58fqvwAsJUP9iQLfvpuMqHSaUUNvoDnuHcCC6XvTcJTTKP76vbHde",
  "key32": "4RMxYxrgBV49tFKnk2CBtdCyUHkqoBbkQgka9D7MwbKr8BtiQWsDFBABe3CpFJLzrWZfUC2qU9gCb4UhugqKjGfJ"
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
