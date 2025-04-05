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
    "5Xpz15tFka4fCMCng86CXin8NBHHc6ya7s4EqMCFHrGH6AdPkjvSGyXUPnqqVBzWhNdW3UHjgF8K8fDw4YZg79Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TrSriKZbvLZjcutJmvvDVo3Qkx59XXdsEZiahh4pF4Ytr41He4moRJYKWkK5MHNNrWKRYF22Zd2E9sUhVWikMWz",
  "key1": "3ss3H8NgBQtbAMDbyAokReQ4CC1xHSrBmEGFBMReBGg6PPx12ozn3wwAyP4521vHuLojzPentB6fAy7wEwkH9DXw",
  "key2": "3dhxx1bqUzf1kcqdNUVjzVjBDUHwzA4rS8axmZWJH76QPbZcayp61VkmzDLaWEmcc6R3cqaXKG4oC5SQXJmM9tta",
  "key3": "2TQaLopHrepPM8bzB8zUBqhj634fZKTwgagGuYLgjbPJAh5xE1uk3qfWx2UXza2qRSYqFpu583HrkF2Kur8GRCJ",
  "key4": "2RUDfbCUeWS57QWuHdxFrZG5DBKurL97caGHtYTKW6xmQJXxtwNhZemkuSB57c5vhexDxmehJtQANBDshtPj8eD7",
  "key5": "5r63sbXdY119gVMUpot75F5ny82Pw4ZyYzhLoWfy8WR7fUxR4cRJCEmwsktYHvS269nnoMZpMXGjhGKzPBZv9mFo",
  "key6": "32Vdvmf9XbGSigqEfW4uN4CYQPJy9GybbGtBNHeFSVkj7AptaCttR47RhXibLvToYwSWxG6KKUvdHQmcR3bkk1Lf",
  "key7": "951DhpS8c49roZ9qg6YfZNd41kkA95Ghq6TcJqfRwzq8qyaoa7p5R1P9mFwa3po245HRAEL2LpRxhc53SmLefE4",
  "key8": "3aF9J91E1KTFrg21RXRebFR3hh6XR6XDCy7VwnxtsQdUVaejjqnB44YNuJSMm3XaXrByrKXutNw97Ps3ahbTmf1N",
  "key9": "5BdBJe9EzEsFXTonfutpqprzY8hYh7YbxXHuoixmP6FUU7Z2WytjivbZYAAtKsyE6uKkTgN9tHXXKie31T2F2UCh",
  "key10": "4JEpmityvEfURgs1ea1tA7Y3hk3x9Fy8fn5MEPbTh1erjvnx4ZToUZpAAaV8qqjVeP1EVXqfHf5XoVBJEwdka7Jx",
  "key11": "4yYDJnhJXe4z5faw9dYoHVooh1T4WNXZZ72Sr4UBznoGS64i2peo43nT9ErMcr32gcJi38rMp2pie9pXmutnp1NG",
  "key12": "5FgBVC4gW2RAnPbQps5kivsx93m9vKaQKA22xrbXFNjddjWhiSQ73znWTcqfpo2XGw7LHXVF76E6Gm2tz1miz4KG",
  "key13": "kfARY24ecodSV71XaiV7vZPFKHVA5TQk5VWVVhdsWdu29o6RL6WLt5WsETMyq5VyJaG2EZcuCK5YhjNaN1bxfWd",
  "key14": "2jtYQRyUsDXmDhnteQUkQXizEEqAw9cTdjho13MDhHKkkET9C3phqbBuwyCnBkjE64dWL7LjwzdVe9Wd29B3E3FC",
  "key15": "7CrrXJLKZwAS1wH7B8WJAVrbQs9HBjmV63k2QUDHJKFj3qm8H8Cs4BceGA1aCNffwHWLARLJRXoZwivkKLozZfd",
  "key16": "3pBVn7fsNYpJCckiyA9yuEMFz4eLJs7A9N8xAxcgb1bGTALMvgpgZxzP7A3DLmjHL83wk1AoEoQcp17bazhTbAfG",
  "key17": "3ruFctMeKtVaTZaZFZfoPoh39QVL8ngbPu6gap3epkpTpmM6ffJaNBu5fZFXh4ADYUgrFxeMyoLDHzhDzFJd9HEN",
  "key18": "4K7kq94WT8jydmfybqv6DrdLrhFKDS71Q8zmX4xikx3irdYE6WS1AWVeXLkkhXu1c8WD1Y2N2KtEXXA1fv4dMtAX",
  "key19": "43BqFFgtEo2TLgBZpLeCnVwqbzGBesGhmvUDX7dPpVQYLzuqGXmXLthAKrDU1Xpk3mVmm1FJjJpcjiKCHWSZ63Gd",
  "key20": "3z618UvAB1j5ygfH9YZN8XfLCWz67uFu7UmbD946V1CVtFN2ViBLT3KCBA1SCSHbZHQCz5xZ2ydQWPo7nck4QnHM",
  "key21": "4cQbc6GN4FB1TwkkS8zC6u9bZChZDdTrxQBFsXYRyiwDbMtV1arfQs3bSwf9szSJD1yAereeDQQHPxVRtyPGdfCe",
  "key22": "ef5TmQmnBFvxFr4QUocWPsCfto4pkU2RC3sUvLubNmp3JUB6hqHafKnESsLum1yC4Hj9T6sNotWbkHquzmxmQCt",
  "key23": "VPWTv8hscDAF1iVXuNrDfWxR9RTZ2UkUHjQTuy5EwQQtM2kuCbGknyhC1wkKgUASGDfY15RwceuSmkVN3yGm7Ld",
  "key24": "3cSxwE1VNNs51bLtuwETD9VD48raHHXr43ftRWKjBkbJcsskHM3AoKqi25PhVUpfq4xxxZvQXjdBf2MMAc2Hsphf",
  "key25": "4y18Nn2AMyPguX2QqXReUFCthueViRdhQX2xCJxB1RxJxaYEPqrm66vJNqG66xFyNyv7xXHmLS1bBx6WgRxj84KN",
  "key26": "56fDfzH4seL3CEBzk4aLt6hQUBMDJtkSTtcCNJBM9P8mzjsyyTdsQ95KH3WeLEpAK2jkppDLJcYr97nkVFmJ84Yh",
  "key27": "QpEiTiW1ujvn2uYTjHDG2AuZtgqKs5bMUzS5316NrdmUvc66PzhzUo79JSv11gdi1A5vwot4gVBeasSmwdt5ASq",
  "key28": "3ZABLuvXUAKDfs4ARjbdncu8wXTpvjpYTeHKt53o21x5CvzxPDGQfYu7axg4LAi5tVhTLqTX3F6EdVpCf1rTunyB",
  "key29": "5rEgwH23F2rRTWKSyeYhzc9DKqFJYDNtahhkWuCz7t2XSj6JbZDaMjjKRLg24fNfai16ijL6AYWz486gP6rzwtMM",
  "key30": "4FTUrRxmfSFWxEVfcY9YnuexbURDyCxKQ3Zec3F6VEs9h7bL7Y6pymxmNJDLcH4JpFy8oSRLkqFTSv3PvC7EMxnL",
  "key31": "3YL5jEY34tphdAxqy63cvCAJVhQi3Ya1qX1QXeY53HcuaYpJvXdCxiHEZajmdYFTAfa482fTRXnMFnzyozuaxsE",
  "key32": "52TyGduXoThW5sPnJNdj2pvuPF7UZXQN4ozbDFyCpTpwBYk5cyhntSDtCRgXjbnynBzg6HpuY2K1RWty7uWCECyv",
  "key33": "jqVxurb1yXunRhAiorSrsq8jTMovhJDPaxjHqDMKJf8HGCCv2KY1HpCndHtnGN24RGyFBPYGabUwLH1dU4TuCaR"
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
