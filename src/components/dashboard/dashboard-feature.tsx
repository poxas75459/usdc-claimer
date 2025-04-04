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
    "3ZCt2rVwhUtTrtMQ2w5PEs5mkUyzmJ3hFQjsvthq3c7xeW126xLbarHfrjNaRw4e9VqGEHqCze1emaN41f2Pch3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MyB8zfn7cTLaeZ6JfBkaeLvJGPNyBvkJQPmQpf4XAph6MwuteBSfMDdv2KpyvLGyXJ3ueNqzR9U8t42DiJE3jR",
  "key1": "66oXaC3b7siEJxFoTz76YEofmGWSGFFeTeQwSPqs7nPjcRa4wx78Qiu77GosDUXe7nnCFUrbn5vT9ppApRYCd3SU",
  "key2": "1ZzbZgVuMBFChbF5YtLHrXiJWHWd6ENQ8gfZSeQkG98pzb47Hxkc6Rx1rqiMWVsNJUm8835o9KetEKGyyNW7jvf",
  "key3": "4NsgmfZjyKCmDiAdCW3hzFXmbJyAKJE3wrhPRpofh4YNvjKTkysw1geHSQe8xn5Xa3Zh6dFU6cRTqkh5LMkya9Ku",
  "key4": "5wNjzD5U94Gr9Ncou2DgKUwfKXpNytyDWHD7YGP2do2iuzUjcXcKHy9AaLkL2crEv1MeGGiqgyc4XsfbugnXs2AB",
  "key5": "6YMcPAirxfsyrfDxTXJak4JDMiLyBxBVdyLZ4BvHtKiaWbHF4qrorwDu2bG7AhhY1aevbtTzchcDLBRzaidwPCk",
  "key6": "2pw7sGbLL4THbj6RVCznTH3M7XxzjTU4BSHbFS1mpVYkNt3zqyJ8zro1z1JNqUUd8pXr8s6dNj8WzxvVWqsTw1eG",
  "key7": "HKCavpKzJqHa4dTXME9FFFnvLCQ7xRmmETMw5WfJ7vqa2C5oCrzhqzYCHsJi3WXPvVf8eXwQfJ55sxuGDtHnFwc",
  "key8": "4fzHPBBBd6Z1938wq4ozB9T6G7WfmkD7bBy7KCZouEAtbJXiw2XU7iomJceY6CfEP7HNaNXWneehGGq3QxUZ4cVK",
  "key9": "2EZrfcSDJn1XELCVa3SoiNzgnZYRcXJu1aWm4DTfw9razvpu15K2HnRVm1usnogEojFFNfar5LPoxVbr6HZUjUuC",
  "key10": "5zsWD2MZJQ32m6kZw4bnzoddymcFJ5VTUU3zHaAdfWyeYuA2TwYf8xgiyTT3JBbsSerLJdwueK3P7cS2uZ5udDm3",
  "key11": "3e1mvgn3gdwpZ6QgDn5ULau6EGBZc2CYpafx1aSeLytB1oq77iSkWeY9wSpHsZMHBDbahdZvaJbJwAKFdEEAL9Ay",
  "key12": "3mAiuGm1RDpLwfs4nX1St7xk4bLuPrnVxogserY45mL9d6iMNVv1zJ81SuqvNwQ9HsogNj7R6prKdZQfxWLZytaW",
  "key13": "2mVJRWyuMJRjBawTeE3QqQ7SZH5Qzxg7bgwWDKEGmq7PbsgLHWKguKbWrKSE69qosRuqYXvw1fhvC7ELoiEXqASW",
  "key14": "3Fbt4TJPjC3oc8pfdcEeCiJ3A3uYA17yQH1S4HBBJ6Zuy4fTCkbvYuE97jAtyzx5kL6inN7xUmLVhsZnfV2QYuTD",
  "key15": "47XQRNvMZHQDuAUwAQuCpaMQQPVyBZx4tQHvS5VU8FnphHoNypF4NuH9xRu7i4n7StFwYCBBFNYF89SmryKp3Ryh",
  "key16": "M5eVhZBYQjfnCkQSbFu85JxPQQruJWfCytPD1ayFT96uHcZTGce6wvT2H79rWdESUvg6DcK6UgAsyi5hc9HXtHH",
  "key17": "5oKoqfUMCw8hWd3T9ucjVcjvD8NKmJQRNmKFK2EizC9hdFcxEQtHtfh7AKEiGWCRozAeF71VtggFs5g6zLkRmGVR",
  "key18": "p52pBchYchpEgzNSgCZPSaKebh8Us153D5ew6YXjYyRHZP2GSTKu2MPNHLTy3M1gHDY4xpwrAFvSqpdHwsqYJCg",
  "key19": "W7X3Mct56xKZsDrtLvHm4AivnTtDGAD18cG2T53TQiUy9DR4RXP4uUVHVuKpmYEmVaahgNCttZgfp5Q9KjhfV5B",
  "key20": "4VoPgeGTfJn6JoGrK4XcvNrfoipNpK2B2m3E5sn5h1XkyFUp2J6pZz8dEzry6kvRgQy2Vqg1dNymUVuieVUCqwDr",
  "key21": "nR2xm9oMxPfjaW8r5jGEysDjrTqkpyDA3Zndw739yGtjnhqd1r3SeFjcF9dzXjqkwmqURtxtaWSpxKXyPniHf3j",
  "key22": "37D5oG7maNhoUurBNAYdGVKryWS2RXpxS4VnaSVSXH2yzybhjpdhAK1ZBCnQnJC582QddwPiKV3eZ4NvxaLPFRdJ",
  "key23": "31Xy8fur6n7MEEBpdu7nNMNNyMpgsacqEVaGYRep4gMALuPWibfgYoaFj27jXV8W1GT9xN6wK7jzYHuHpQzAYAUG",
  "key24": "4p9DuWSod3ReQ9wzrD4tAirAc2utoYshTUudWhsswxcWpfY5H97iGdBg2aH2BXWUzVhvxop6i4i9Jbh3VzmhiJRQ",
  "key25": "2K4aL52HjT7pradWetZ2SRjFykaQ1jBSAuFYcZhyHVuQYUQKuetf6bZCf53VQiPue3YZZSWmwnTaHFfavz7d3cwM",
  "key26": "4YXr6DJaMSEFM7oDM6Fbx4uzEqW4DeN6iPTZDJ4uxYXHyzuUHwmjbzfVGzeC7EypXPtGJ2wsqkyyCNo8CErYJpzs",
  "key27": "3w4m6SdgUYResVNz2pmzUspEj1xXrVDtXcB2M4haADCZnjxGMk642Ed41DoqPWiYd9QRrkXdcHhZVW3fPS8QygRP",
  "key28": "4f6oSxvqwtMYypng2zHrBJJFff9cDN88mYgdn9ywYCM6v7Q8erp1G89Muf18FxmSREbYmcW36YduZMmbiAvuVjuR"
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
