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
    "4YRMZJg9kD1cA8dbxnwJxWFyhytDpCcmU7tUL6Bbxyk6VJmJmsL5YiKeHy9Rd63QDuunbE9HiVpCynQqoLnju3Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFVCpLv812oMq5BvWUrihm2371dwy4LpM2MRT7KT2yxVuHtSejVtSsE92KZsXt7aerxmY6fHe5cYvX7unDcSLZv",
  "key1": "9fFJP7dRJVh6b2v7bzNWvuDFNSywrSZ7Ae9XzS8WDQV4ct9Q6TDRg7ZvbSCMSQ9rG7kpkv4vLGVDW2yxou23btq",
  "key2": "2CoXQjRUbuuAr43sKHakuoc9CP6uYR9UNawmXXNFqxAhK8s6fYbKnAPY95zm6Zgxk3xXCXEAk6YoXaoSdYsKxLUQ",
  "key3": "3yZEcUNWUi4hwNTFPmEHmaU1x1wQ5KUdtbXLN7GyX1CcdrWg5jL4fLXCwU5LqVR3k5zJRaXDH5QHvvnDYzqLwE1a",
  "key4": "3FEvRjNbTgo6mMsBWkd5MCCDgzBFxTvCTYvkUUxLh8YsUAvwujNN7MDPwPhoWiM9AqxqKbUJrQigdg1zbH27jtAK",
  "key5": "5S1nSnT7QyaFUwBG7ELxqWuhqQ5L8whHfFBQ9qBWisHo2DFHjknCSP2zHt3qgLzahqigjRCjuwiHdaJpdYnysvez",
  "key6": "2m8nMzhDERjtQHvWqwFWAaoQKf42puxwriU8Jh84n7E7binqrtrsCFEXX3L9zE1KpDHFBeCW4R3owFmRVjLZ3Acx",
  "key7": "57fuXoKwmb86aC2dFYWdBXjPJe2Ujq1Qzvq3yQKG2euo3NcrGxXbyLvNHpqxX7ivbVoKiYgBG4XhJTBir29mWKwb",
  "key8": "2zGZNkx8X7poCf449oQBiHT85rEVEfiSzW91bJjhtc8rE5zH4MN8rsbua6SZSmVbyWvvvhvUqotc8wQ15vPoYprD",
  "key9": "4HLzFFq1zjb8GbGVtUDq9ioxXoM8ByyvD9ezfEKbmk1mxQDizQFeJB5owwdvtgV71MNEphD715tgNTxvfRRg4gbx",
  "key10": "LDHEsb4NwtB8ECx88QcX2yuUwA99Jjs4fZqsUdCG3vSXP4sRBq7qcDsypjABdqhtxuiPbRMCGERB2qK8isMoNiy",
  "key11": "5ys6JXpXKmwHpB2CZMkwVM4NTZKuCpnR923CgMXjYFgQhon9eRz6dqzBJCkn8ii83tM67sgNwUW51jvA8WGNNE31",
  "key12": "2xrM8w9XX6hahjuSyEvrPVvwGPURhCakYwY6ivdHuAQUF4Ni9rU4JGPXRxf146RokvP2j2HAQsoCze6QRZbcqBGa",
  "key13": "5LPdh4q5ruwhKSiNLuxDjZW9xcYsZfSzkNDDw9wgH5wLdBYQW7axYYoaSXTSEcxoDuCxdF2EzAL7W92hHVWEVdci",
  "key14": "3sXGnNHBx4sd7hxNL2ZSAyX9TSBGRCiKKqam6RVPC1hAv7CKv16q61YqcU6xSY9syZuLFq5KxKCXqZPqqTKcVf9M",
  "key15": "2UEnWocmzQUjci86RySqkMsQsvStDV2SmWAUjx9FcpTU8VSVgwzgJaANpDySpFpsLMcQNHH5zFR43GkVw8Kw8MkU",
  "key16": "yZwuanuExbnw4GmwwBmQnZvfX6FyDqGgWy4deQ7LqW4t3okiXM9GcVjqHEUJ9B8re2vz2sxqp2dJpti3aXh4yqh",
  "key17": "3usE9vzRmaurK3huYsTg2kJqLedXuvi68VSGA28Duht84TChNMHsdKosmuHguG8H7SXqEwGfeUHBfFNcbHMJp2h3",
  "key18": "2tFTHaTPPX7nXRp2XMQhsFuMvUNz3KoXptx31S3LHeLan2RsDNTyVnVP3oU4NQdAuDg2xaFxkHTvPxu56y9qkUtN",
  "key19": "2PWDJcxT3XMLQwPpvUVPAcX6nqmv6LnFFtp4J8q1iy86VQCV3DZLb3CPzsB1LeQKBVgS1vJuMKjRP1m5SMWMnERg",
  "key20": "4sDj5WH9KZEMuAp6evJpbVNkNx1i5x76ZhJomdstFjDUugDFXB6dhDXQXb4SAD7T7JerCgjs5zbUQBkHHVWRSxX7",
  "key21": "2zAVTmYdeg1rhMb3WVkRWHNkCFhLKZgqtL7t4Qh7c9BiAuyjHY7RRx3A3JCHz4VtZkDxXyA3x2HCZr9jevmHzYn9",
  "key22": "nVdPuXmCNZRjB7a83QjpQm7fBeeZabisbq74UiHe76hKmn5fuKRVqSWyc6DwWJDdnnA8sizxp4Nx2ThKp1ovYTj",
  "key23": "ZJfkZaLBKgiz1cWL3PEJ6HV13MAbVqw92wvtYmD7Z1pxvmaMwhpgZLg5KBnneFwMkxEP7c4bY4dY5L2GJwCRCDG",
  "key24": "5LP3dM1Z9jW5dLTrmp7Lufzaz1XJ84out7o14sAJAGoa2wJEMtoDkag7W41cW9Uwgs8yFrpPZ1gWAeADxTZ6jp4Z",
  "key25": "5JnD97xgmrNcE5fkMN5srFGFhH6MmBbYRV7zpRDyPsjXkPrWZwKNevzZbUJbz5AESnKEg47Un1N1kYb2zYHcivRV",
  "key26": "5nU114G2kLASpsrNefPFzCXpKB4vJbibgugkNx2ncbpRpxNw9RTjkpXpGcyJGrFY6TAgUV8PFX3JsV2EzCRmg1m8",
  "key27": "3eHtGvXVj2f1oBQZMb3i5kZvBE8oc78ySfHotwNGksoTNKan8yC6Jx4nwyVx24W2uU6Eem7xXJdLeUihndk9TFvt",
  "key28": "Wo2hHMpYK3Ez2zwNxPvLVcjgcCqeB6EobS3NpFsGMjRxreZrfKCAdVm1GzoLdyL5SrcpiUDDLameH7MX5vopEED",
  "key29": "4Gv3qfDahUMqEgSR6gxjHSwLctqBw9QrZzXXrDdFYRcfP7ez638V6z7NkoBGAg3hwFXqyvaeY1eUkLxWjdzD8k6a",
  "key30": "4WihjKt5rAMAeeoDXPM4g6FNEfMECuQ514xrhRK4XgagXPvmh9Kyrf8UuD8i2uK5yGYipXK4NWv58QGDZNDpxLM2",
  "key31": "4zmiyVEgN5bXboj4L9Fv8tAMExc6z8HCwTsmTtp9UrAFdZB1xY7FdcnRXw7H52KJDdbrYKvJMUhA5SPPZq2LAwqu",
  "key32": "5BoMELGkUFVzkKJqBzda96x8tiqHcnBBjUMAua7gZ4t4PSzCaWSstoDHVW4HPujLkuewUE1aKu8QvCjs3mH7EeNf",
  "key33": "2jPJq8MDvsf3mauQUMxSxx1B6AFjzw85Weq5VbwtUmyWbDduc7hpPwPN7x7RvoxjRKyeGWJp829MauReYMsACenC",
  "key34": "5Ehva48TUhHSniFrpSGqaqmGhbsQz78hoSFxyx9axM5JLHgPDTNDi8q3KadCmBy4rJ1qTsCcP1ENgkqS7B2Wtc2C",
  "key35": "32V4STGmuH2XfqLxvYywgNLiG9uih4CrHg4aXwEP81ShvRYjZ2WEjm9MRfYuHGZmLi94GhJ2pGn2LoVJP4uG14w3",
  "key36": "63K4EqiRAdDsL39sQSGxSsT7QCKegagDZVjdZr59TNN6KxARrsTARwkFcgSBnvqZaidrZikmKhZ52mAntQ442DfJ",
  "key37": "ofYkEk84HLzMfK97ouo72mQMthx5dSFheyan7y4G9BT6WhmEzFGxvpyQtf4uqUxg6mTMGPP8CjSTKAvpctxzxHt",
  "key38": "2nnM3iPjMjmZ31qvVk3TqFvzSNcLLp5TZk2Zfi9KDHvNLTVphMZeNFT5cLYq1W9LMcqi1AiKwGqDVHmdkVWUVQKv",
  "key39": "5fDWUC7D3GrwSZbjUMfqquqPm9CT4S5sjFUVtSURja1mrTX1pmXmtHayDEoH8iFiLwS8P7F3RifigD1f8Spb7hbW",
  "key40": "5a1sNz89QxBicYQ7XqamUU2r5FNCR59wK1UhzDSuXB7StyYhAR2pGVeHAp6aUnmZhqfk5Z1HHxpYNna6FxnUh8cP",
  "key41": "GeubGx1NTi9zKyfvEsTZ7Pxq2fuUF3jzubuV96zroaAi63oiaXFd1zeToFPLNAWLuLRfaSJVuSPA6s7tnNG63Mn",
  "key42": "Psz9avwXzMoNuyN7Rtks4fQ9r1CWZYg6MfdQvSnLKQJtZ6mcgRuqqq68eGUmdApwcMb23FdMyPH4Rk7TT5fWwsq",
  "key43": "5XaVxgv2xoyWcSu2XJtxLFJ72uNcL1bcRcJnWi6Mso87VA1dhBBtGNVJLUKjBoseTKejhTtufftArg72uRVaC7b9"
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
