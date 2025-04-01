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
    "x5mzuNgjiPinhri2v5JDwN36c8g2XwVRaHuMBkNFvcZhQ6tnyke451GmuJdN4cZakAgDMzW1Cdggt4FGLzkh13M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1zjuL2x2XBZDSAD29TAzhGnjJGV3ojjJfRsvud3w13UD7y3i8F2mtiLZrTVsxyVFoPE89eLxizZFWVev8t8DGs",
  "key1": "2NLQLEfTk3noU2ryCnZ7bZBNjFpmf2Dx2RkWEVHs36PYqpvzv7wWn4vyRqfoBrw6XDRrnqt2yM4nLX9JqYKxAyRS",
  "key2": "2WuVmURzQmEqae9CELrg2RoGUz72qHFmy8vZZfhBYJM8EcZn2GaazqAfPmSKz6mRfcBFiWfGRDVuptt6QLsTiz2z",
  "key3": "31tojn7jgbvFdzpJvkkxRKya6eJRUdsdNGY1gzmkVvhBw1H4sCWbYqDwqJ4xHXSPqzZrGjJqGEuCjMYQ1C2dzktZ",
  "key4": "3LwYmeUzJHPgJEK6R9ASjtHKzRnkm7doBQeeKBKWmgNX9sK57n32mYeUBaWpE7PsFfjShSkGHChndVbtjzX4wQ7L",
  "key5": "2nySaJP7vR3LQzHWB85g6L43QiJbnqBiLFWcYYf52M4FdKHLPgE3GPfj7T7fAL4BH7x89WshJwHeezoxyTebQsEp",
  "key6": "4yU9fBShkRPjYnQ8HwVWESuvwiBXcTpwujSKWbX7H7btySLUgCWYfFAxpQR4U1tkpU4dFYxsLdt5LdEWazhAFCTv",
  "key7": "nPQrB9pBm9pCnyjNWzBnQUDcbhXxMkHG7sngZuDuyijk8K2SrnimYPM9Xh9ViASqGhLfeyysKwXs6VEYwL3zAeG",
  "key8": "d1DhuE76Qzy9qfSwoXL5qPfDMY3wDPhpjUxmccVvud8eMKNar2xRMx6CxZ5YU4ZqipiRrTTY8whc3Hj5nzzUrjA",
  "key9": "6boUMRj9cEHGiAmdJgPDX6WpvNJc6aR3MSu9hbBuZcxZVaqCKjFpJgEd8mGJfD6FAq2XCXpzUKT3KpSgpckVMdf",
  "key10": "656EXvQ8HAD3Dt2oKQ69kkxsJNsxppswYdSr5w2sHm5t5fRiKTtPTdhNWdmvLKHxaosK4cBXZ1s96Ddm4hLx9aZh",
  "key11": "2Y1pCjpkTqWJcRvLGKYWgrAjFbZ3fh3c8uArmy9mbd3N4S67YkWsBjdfQZXt6SNZ81pyZP7hmavtXUEAHbymKhy4",
  "key12": "41uc8s23QepDvpmuL5d3F4VazqcVkNCMC9shNbGhzNPPX8bomhMbKMSXL43kot5VoZ16ZGQ1otZUyee2VqaSYgJq",
  "key13": "3hC2CGhbHQZR2xVtxZi8ZTUbMSkh1YDVmqLRHGRC75z2muU3F3FBWZ93dDC7FvmY9Rf6boyDEN8wF48gNtmBNhAX",
  "key14": "5YWrEtkQeGJNCY8MipC1vV7VutJ9VjG5NCdKpyGL85gUNncLBuWh4uaU7KD6jtWcpkstYyYWy4WNWNXHTYGVUFBB",
  "key15": "2n8niSDwXFZjNYkUKL5P7uhNq1yUPZaJwXcyuYdVHYVXwwPfH5FsWBqo6g1gGBDmzodixdLqK7pTmva2j4TD3N3P",
  "key16": "LEMEwCnkBsiRTputfGc2BSoX7a7V2PDQBq6z3qRDB4xc7G662Yvi9XNjNPDQebXpPMGrZfdeDrZC5Pm31AZ4wFM",
  "key17": "5cSxKvp5iGAg2JntoaR8LVLMjd6tJpoaaYXdojaHsEPcBGYDgYq9W2TTiHRo2RMGCnHALpHEZY7NnX5mLihQo41K",
  "key18": "2LgQGb5Jrw6KnGquKgcuneumSSfcMsU1sKnj3NVz4u7eCsxVdJ2BfHHPdtWv34LQzt7NzMtw2m6DbBG4dHPieKZo",
  "key19": "5Y8iLcRPatZynfTZJ4Q2siKHxTzQXqAJNDVPrrjnXm94WCQxBD1GwfqysJSTH1pJ88cuMLpmHCZGhvS1fQ3cm586",
  "key20": "2Avt1qZ4vQnyVjg84AyKF6ArpFU27EK5xJTAR4rXnxTkzmooRMsAiSqE2HRBxFBrWY2E6VyLkpGDthJQTH9n3W8Y",
  "key21": "3tKqBokJFFUmagjDA9xenmy1CohgoiZjhU3Mzez7HxwL2wMKo6cte3BDJrv7Jx6GB5Ac3XjFHG4KgfTAQ43w34VW",
  "key22": "Btv3zSdVcf4zqsNnzbRKkmf8XNneRCUq7NbNfhgomY8xk1gYD5zoeQeNH3kUvtP48C5JLcMXbXB1K9WtA36ghJT",
  "key23": "3vT4jrTduhKoTDTQUXq7hrz8WtipFee5Ze5tEYDgSXrsJFM6TKRpfGRudgjMWrWVrUkugHNYLmmsQB2J8XMYrHqE",
  "key24": "55g64GxJ8c6dCjtGpyvqD3xPSthyAXeNjqSAJRH7bvJ1tWWacvVqqpLmoPULehdNYEKrUyaBZ378NJHqS4dBobtd",
  "key25": "2VyzapRy9qLbBEyWEo2xUPxnCVQ9vpinYEph97ZMs4rXXw2FiAaU6fYLuM5W9wgv4KP46J195hG1MsDKdKiPsZKi",
  "key26": "NR5R2b4MV8L3CvJae4wJw4GjwjnLpPSsVBCx8DSEychoSXGV2p3rc8YkHbZKCMefvsQSpVhKEVsvUeejtVMGh3J",
  "key27": "5xLDFDtzfZ97cRDHHbSpVGGe2mBXX2NqCxd68N7yqVH9z4bhDVu9kWMrvEMZ9E5k2qPos1LsqjoJjxqNJrssFN1D",
  "key28": "5V71YSuoNhzgK8TSQFb3aUZWRaZmmmQYgeLPM43SyihgLQcZB8kxArTzHo8NizarWKF8Jh9CVt9BrvsLoEi7ExkW",
  "key29": "3sgfdRFLXGgAebP9iB4qtF4yjv3PMTEB5f9YBe4H6LFfLfHviiCgQTPofj2QadetmM5hfWqpgEddQTb7X6CQfN2s",
  "key30": "3CsCLbwP7xbwwEvzRMQraBGnmCAANreEBW3QgbCjJdpJCZQR1EoNNztQ4VeEvHzkKb9f4UBtNvV1YqzP7o1USULS",
  "key31": "54BVaENjEoJRfJ8kKcfN36fEytjxCsMnQo5xwhBxy3iEoScEwLgqNRuAq1YVyvw51mMA87i85eDRB4HkxZGaSmVq",
  "key32": "4otc3P8bRcnXa6GNoPvtc32nNfxNRhgnKTf13pyq2qq2oLrdioG14mc6krQ51YtmYv4cdsBWFKiyAwpYMayy9cy8",
  "key33": "4aGh1FTzHU8VRegQ9Fz6ZESmCPYbcvsLLDP22CuUqUh1D6MAPUFUMwhPg1WMjnTR3d8wPDiwKhrVswpGyqryAv3c",
  "key34": "NtGUdEMu24o4UKoi14MqMQESHcurgUNQ8kiG9aiwt1QeKQijtSVdg8LwdVKrWFXbF4v8dEFUu1SbG4nWd5coSx9",
  "key35": "5BWpQi8E5FduCsScV6s2gWKXjHdBxjoXm61DFrJNBDFgjVbT4uqMTSdpUL8aikCZZeUDrW7J9TokPNxgWSwTvUCJ",
  "key36": "RcU8vDzw1BJ44JaSpUvgnvtXM9qHoELcQYodK2qoRGMKXat2zjNFvbmh3yRuxScfrDSAkGCyfQtdDQdYcas8q7e",
  "key37": "2RQ7zzRaFD2ANoVPvcHYJgWS7WSax5T2RdDchoabHewWfZwaXdqe96JdP8ZSRPEJLxtScpNNbv2tcyodC3emhr2x",
  "key38": "322Jg1NVURvwXPgyaKbpCMi76vL3E6bxLxgkTZpYfj992CB2ze9XkacqwXYbhDv9gR6brb6sBbLgqNYB6x9duREn",
  "key39": "5HF8vjFnNAkTXE6rhJYFLKseMf2vSEYgE2U8TvZZcDua2RMrc7wRwtRhjbwhMYHFKBaP6bAYFvZdYNcJa1GX7net",
  "key40": "2wQpPVrMyf8pJdjinYyy56Th9H2ShX8gKBmwhnCJRNKXbJawmqBFFjk6LuvoMsLZ52fH4mgaGeF5bwLZWzFPZNZB",
  "key41": "43jvgusWcMMH5DEKVuoNoTRPp4HKsWKaTvLPYWHW8NNsDvmMwC7SXMjug386MNzkFgKf8NSx1xBkHaDYzXxevQo7",
  "key42": "2BP8tqDTdMFZZutrWrM2mUEwDd72rFjkraY9XszLVWhpsesi9VNiWF4cm5xJDkBJAsQ5tRBNK1937pFnnw1s1A91",
  "key43": "5ayyJHcZYddYNwELEMzHBNxwHSRhigLtKT3TptvJitv6vUBMXB1T7xPQnRRbsswhGwbmzxzxru5uXHqKXW1nmj3y"
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
