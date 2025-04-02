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
    "3zLBXgUkvx3UJZrpzq8uApztffRpqYXSpoQJ7ddKSQVb1MSoMH7bKkjBGeuHN3ELkphmu83adehk9jiPZZcr7ukg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tPPpCY2pMD8DSx9Qvu73PJqVAyJvUKAqp2DP1meDjN4h4LbBF8XyZ7pFtH89UEnXmFP4JhbZWw2DejiVWTJXEHw",
  "key1": "3LuA5odXuysz4SqvBUfXkZWdJpB1SkWCEyFBQrT1j4U1FL1ig3aLppkNaJM6AoMTV82ehVPDbgdyQ8BftB4sT23J",
  "key2": "5jjHJBneVQWD6K924ueRTBNQm6svVnuENwWYePonCD4dW6dKZfZCXFc6fkyPjdiNNEqRFXQXGXLktoAxW5qpKZvg",
  "key3": "3YqpuCYShp4reJZjMUR1wK3LcQTbjGeZAMhepV71mRMjVtngTxdQnjLuqFiecHD2w8gjZ2STSFgwZttqTaDVShXG",
  "key4": "2pZzzFoj69N9kWQQ1Y9qvujoTUj9sbAdJcJhMp765aCSPg9B7vCNH4LFRcnBFDkr4DnA1hAc5ReJTkj3odY3YSfc",
  "key5": "65eiodNyLSPpUGnK3uUZ93fiiEfH4ERGKhv4JVK6dzUvjenST85ctTv4yoof6acKaweU4B62V47A3vYyinrobnLb",
  "key6": "4A3P55cAUipvgd78ZTWsnjTohrb1fJsWBwMeJTsm9fFm2bYuTqbDjGVW3cvjDTm5zN9ZSP4CTQ7AiXjXQvBbKEni",
  "key7": "4SA45czUivyvbQbBYAmLpMS48SpjDqH3knBmoCzjEb54o4XN1ixVwDFdLNKNdbP6xdALXqo1bvtEughQoms4GVAH",
  "key8": "4b1x54o6MBrSo1mWaxnBa9zy7v7NPALP6651SsVZS17Gs3bSE8yXcXzULtThUzYCkzfMCQ6M9G9MyBRY7TJZntxY",
  "key9": "obpZKx6YHMUHTre7Aa2C8ycFW6J3Rd6oX1e6EmcU9Bva9FKTeWh4cpPLTQhS1gpZsQggXysCUFQjFu235PFzhXK",
  "key10": "44mfcSCHnX5zW5jTTN3FP8Jshe9Fxexw6FNmpNUoF7qvp6N4BsGDoQgC5tGG75pK7LDJpKh1mSJD7g88xF9LUEGq",
  "key11": "3881yjs8piTQK6tm19xzebdBw9ez5u4VD2XEAdKbM9vokjRy34tkYFBLxieSeVgXzESkmwyREeXzzqTAbkAfNcjn",
  "key12": "5BMoUmZEjFmqdBH6ki7DE7a2WQuu5BtZuxEhTczWZ9bb3ZsYNLGBx8Fx6oB3TwFbZ9gvg9zXaErdb4s2eQugGAzd",
  "key13": "5VZRSWG6zc3JM8c4WYcMvo69ZgEnuVLYSs1ogJv4sAsCCSka9LPKdKWrCxGgvvJQpYGYwV8WeMi2TNU9EAnoPoGw",
  "key14": "3CL8z1ogTT2kfs8Q7wjpHoNSfXkxjqEk4xbUfdFKurMqvmAypg8jkExEhLxEBSbAKE17TF2Eycn1t7LHjq569VqY",
  "key15": "498Twt3WgdfQStPLn5ypiuW6Nk9NDWPex2NmdCoCjffFVdSqZH3Dhn2oGcgdQmbmdYUkkfZ7CdZn364B2KzzX6kN",
  "key16": "3XRfLjbdrdPwtBHCghAccLzRmPFXe3gXzJjVBYX6qDM2NhakP383eWbFKyky87gNwn2YFgyUKiCzCeWySMFqhDJE",
  "key17": "55iudkPJYWtZB5zFNFogQQvr6KD8yUaFW43spaEWjQP84XVudeDDQ2gdVLLF6Hy9RtYoSmnogWfC5AGQ1SNwnmrT",
  "key18": "3rZspLJeVZ4FmjLqub5qARRBzddyghb25NfnqtMH4xRWBZUxE7gEto5Ehv8KGFE5s1nyHHiM2SvzpbRx3qrPPpXE",
  "key19": "2EgBCMnqcUcf5ZSgHuFTj6u18VhJj7pNehcy7H3Qzr6c9v3SXzfdsDNMvciaJQc8LhqbsN7fp3uY6qkdYfYVPuWU",
  "key20": "2LpaBzmx48pCn6iU571K5MFchxmvZFtndU9A5jkErDamtX4DxNoApXS244p9NhkMap3CpJwNgF92jws86W3GF7Vc",
  "key21": "5jgoAvE62GHWf5MuVQ4kxjzDRfRmvd7yJMMA6gDnKFWtYN6Xz7aU3r2MCQUqutVrNrKPUWVkoBumJFanpssmxpZZ",
  "key22": "LD8MjdQmDCX3kcsr9cn9z78rSe8dVpdLfHNM8BJqs7TqtT5sCHngcfzg97Koqet53iWxVh8LStP2n96HEoj91nK",
  "key23": "7WbBt7JKMjrvsxhrdYxD2MSNEqMXm52TvoqP2ryic2cFpqfkue1k6N9Xkzt75oHpztwYJdS1KBhzVwEMEELuRvo",
  "key24": "2KhViVMsDva96kLBhYJ8eVT24bQD6QhvisNBoVnop1QFWnZoDLZiz13jYdrEkc8FXG6y6qgH8RRCuWuoQWHukUwG",
  "key25": "4CEX89V5GQGPtnWby5WphonMtqdejvxSTr1sasjkk2kWpAPgTfLFc68BGkDL2Wt5eAoYg8Zc8TZAFVWcoCrBGR9r",
  "key26": "4wJx6SFqcuqGw4MNpJCMg9B3y7stk2VoLuJ9HMD8kEqtVwL3H7AzryfrGANGgetx6H6zsit9P1bTRCa6odxRpFim",
  "key27": "3rAo3MBj7RswxbNMd7ptLrJwS7Ldq2QgiJMu4V2FhR1umykadFH6yCFe37E8s6xAa6LbiY53Q3wL5Gt8KviJqnCA",
  "key28": "28crHk8aJzi9gx4MnBaVCB32zUwdDZHjKFUJtjUGAwn8STddZ8w2tsa5uJR1y3jWXnUHfuexHDVgKYnrhpFhPnLu",
  "key29": "3vXceSKDJYtWTYyeX2fGmgi66K6jJukfFMmPMjqv59H6vCofwEmummpvgmRSFK8orvc14EP55HgqZHZydmVR6b3c",
  "key30": "2oadazMAN52deBLp1cBu1tNSucYtYVNKejDNc3XLRe2i7PFXuM2ZCdsonAhqKFsmhdJpk3y8KmSqdbgPPjtEqVbP",
  "key31": "yU6yhds4s8eNSszUKr9J7mo5UVrvaPBimt6PW3jXxVschzuDpRRL8jMezeKC9FsF96QoayP9fwvFMKDm1VeavQ2",
  "key32": "az27r2ECFcTUdyoL3wvLK3U63XKWKFzY64QzirfVbSwF6DT81QHTtL1dKKJsqVSywF3f3hNSsjC8gLVmRXqttTF",
  "key33": "NWuDQiTjbEtuLPgcgBDfQz2YEy5mAhstBcjkHA9LinQWMGjm9RCmeogMkbLxUuY2zA11Jrf1k6jQ3m9r8U8NQgf",
  "key34": "sCU9srsUsieQHKwScbfphD59jXVuPa2yfvwwaSgH4hvSfjCVpPk56QLS9G8gqQQYFKHWFR29bBSpmecMTd5VuMM",
  "key35": "3f5MLy1Mym4wEKo73isD8Z5kFEcS6XzP3Xu3XquYAup79cJjMKruZvJAic1PLK8qrqc1PGn5KbEpCo17TZDMRbcq",
  "key36": "35YvhkadDSMg8rH63Ltyh6gLK9HoNzFzZPm8GxonB8WsvsGwWKS1Z8Z3MMnx2uFvdBJY48zSJHXnLXagBSDXnmja",
  "key37": "3BRsbwCw5YfHeJ2TuKRTiGQTi8Pa1ZPRqnQjqxFCuwrYKZAcC4aBtuKKpGJE5VS6SytJS11vbRUjmysCCHe33EzB",
  "key38": "63k9AKt9UDAiHyGHT4HjZgHgsvszyFM3kBJKCW2HrvwArxFVtmR4oxoWpsVt5Vc3huvErTuKiegBT1EffVHGba9U",
  "key39": "3F2Nfc5bQYEAYQAS5qXwMdRAKYdY1YUn8H2hmy9YW9i8yb7FhSoaTHG7dwBQvSLvRDwxUriLHfQLkKGa8iqJDmxS"
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
