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
    "5ykCoAnPo4SdUmtMj1DWb4MDmN44nfmKCuqfSJgkkkJXnRFYUU6hZcZR46aX3ZsYj7CKAhVzpjMsUBiD7ykE3Xiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22v55tbq546YRfTUgqutXSm1djGZhntyyknkNbbPPCpTVvFJaXu32gYLXiSYZfj4zVoMiVRodr9aU5Mmmyk4bgSs",
  "key1": "2eSCr5q6JmXoaCY7Qs5pzt718hntzsupR567xmfyqWXNjWTgUY6AMZLZeZBhf648mtyaMPEbyySnK6nKumFc8Qtz",
  "key2": "3NZrCBqKFTr9Mm2fDP2uc6Jzrsa5uRJ3x35UuTqRMGUgQYremrVntVoWGFBULYE8FwvTANU5zheR8un4965X6UE7",
  "key3": "3rHw3adv1x5rmc2bLnUBbyXju9fHJoaXtL7NvfUoMasQJr44z2yUxsdwTQuSQgAJ3brn2aafPovUJ4FeqLY6aP3r",
  "key4": "UhqCu7r3q9VQT4ofq8Ss4somSDkNPzWBUSYp5FiwC814Zeogct16ttGmLf6x6Aa1wVXVFErjT7ox3yf2z112Uwz",
  "key5": "3VeCy2paHq3KGRcdhdBAiZBts2ub9omdgyX7XFdoAg5T9mxFHm3uUMMLzPrk1v5zVRtYk9eJejU83eJFCJPppwEV",
  "key6": "3nX4vn7xiy7or79h3NVQ7vYnnomX9VJHQV1KXRetMbjUG4FoQB3jQnFjFjhDZBWLzSiQUm7cHFnjNc1r3Yq17iKs",
  "key7": "62n6U1Ww8CzhP9XPqq9TLwbLd4n3crtUjGmwRr17F19y6ivNNN4GgxgjSJE2keLqJARMJ4J4oHTGFvcnuUQEVQXG",
  "key8": "67aQgDdDBPHVKMvgg9z6ehxUFmQpPteCHSnLSK31Uj42CWauQWcm3aWZpGXKatEk7ZP2uywDq53A7LwTm9Mth4RN",
  "key9": "3fjcqUKLaw2HMnATBpVkJNX5ZccbGKUT5Z1xGRS3g5dyuqEShe8LLVhxMP3oVbC2vtPBUgNiPwWrHWiZqHUDbU7R",
  "key10": "5wuBnkPYDGL5wQP1MVqhFdL1duMtQjJkKKcViGt32TTU7T11a6etfL1wGZYJqGsCtpiUpZbjZoPxarMtKvjYJHzA",
  "key11": "3tsADjokkqgKk9DJLEx8ed2X56qoJwTUFwoDFsSuGD863j8dd5qDdaB2mSXB4Dqb8q4pNRgagVeUYDQ6PRWddSBi",
  "key12": "3Z8W62L3pSBvsXaZxDeeeiTpTcL7UbAvAsRmgjtTHN5wrJkEjNrq3kh3R2ActHcu6YNX6TfMwRQFdWcnjzG6msdA",
  "key13": "4MiHMbBkkmAug2jAQjEA4fNApGPTGApoc2jqTaP6ceP8BcE7WJYfamATT4F7xEwpDcdVormsB7xW5nWtfB176Abf",
  "key14": "3YhaNdgchiuNwpYnWie3f7S1Cjq7XpoAYs6KaAKCN8MrJSvt83RW3V6nqkvF2xLRwP6o9cPyKWEUfNAtnpcdrYLX",
  "key15": "3GoCYso8ZCheJ6QVc55dt7KUXrsB7gLdPzS519pSLMPDZJs1XNqVcKkT8VtPwUpyX9ii5pcbKxqsS7FotJ2KTccJ",
  "key16": "37ENfkq3ZSqycmZTxZNxNfv8ZJS2K56CTLRuqjW1vr1Bnwb63R3GaYJEDYym5vJGU1ri7g5AYduATv5WvYLpqgJH",
  "key17": "427LKuHRTYj4xYt2SpZgjk2RhNQq7koT21mz5VhjVLS44HbbESJ6FxDrdhi5c61TskEZqakTigJgScUEpNcjYDjW",
  "key18": "sbu13jsXycTFuoYMLY4Ht4Yk8a1jt9MBChMEEyH8hr5LJ2kvw7nXApXmqX9z7pZHDmuk5Q3GX43NTGFVLB3Hmjq",
  "key19": "3TsX3PGkwBeuH2GLCxxuHHmBtdWQMjJtEJKX8tWnGK2TRKTLAYCLZGk7VL7jScBZBDzLMpNdgyVGPRnb9Lkp3hcR",
  "key20": "5gHX3rvcQgwMCHA9r49FKwieVQFmfqbyhZYRD1fktokS6MKMdWnM36stHogQXSSEn15prenQYhiZRJxydZarr81R",
  "key21": "3VKCwg4Ufi1fTgKHyTS3wpq7xjXJVivQMEKrf54MfXL2WFYr55KdpiY1vCEQZZoYfCAQxyPTbyaho2xG7RQMDWBx",
  "key22": "nDcPAiujQvbWozkUnfjjBTVQxPw7pttvVYKgrPfcY8JonkuFoTrsot9miJdfdYxGDyvHDRLpng2m7zpqxaR38pQ",
  "key23": "39hPs6ymDWrPn6RqyvmHTLacjNn2cs72dMMMjyYusfcMobLEqo2FMEt4AnnV3P6W43hJ24TTQH4hCMxtZFWxMB67",
  "key24": "5T447MwymLt817k9MRK2QcFgUWELEdXPpx2UYGFtghRXz2m1ftDXdpqxwfQC1trF31Pu49otcBzwwFWdgNcjF32x",
  "key25": "5XEn3yz96ThxR5Xdc8gpSKX3is469DNzWbZV4nGeJHARKLCMeLC3wPGh5cZUoAZkzYvMMTk1jqVgiNVqsLWxYkau",
  "key26": "5i7E3Ck6MNHU6TymsXWH4yVYB2ZcsZt4tKn3qXywnMiUkLtr6U9meEXpxXyRuezcvcUwkNokKAr3JsEbgapGCtyo",
  "key27": "3vQ18Hsz4qwkd6Bkm1i2VSoDapc8KqdRG4kVcyi4QtQMhKEGQcusRCtkmzGSVXcRrxJYmSAnTzRLusxrdqKD93uo",
  "key28": "2YgxGnhaF5LpuYcBrqmX6MewhBzyWETzGwsMsVgMgSc2UqcZHMtkH5z3fyZEUzkrgm69LBrZCHANf81Wn2E1eUcv",
  "key29": "2F8H6zgJA8YXS15o4L8SKGwXWZVG17xiwrj5UNYikhapXs5JF9TWfJMzUU3hR7SfTm5Fc7ynnvpX7G8YYi6VPANm",
  "key30": "2C67HhhsUgkPHZmc2E9BvfwvRxHUTGBwETfwUAisGBpVC93veFnQQeK468rAevmc9xyrxys5bkRyy1wWHRSSeZFr",
  "key31": "2zTHMK6mLHvyQrrUvvnYRc5Jj3MS7dHfiR9bytmpRUQUbqXsfWydpRRo72WJM9wTDXopGBfPkaSC542rWe7pfhDC",
  "key32": "67BurG2BRhZzsK3Fz2ZME5rebW49esYTciM6gTfM4mMu7RCu6DXTzjek9FbdTfu6Hxpx8N9WFyfoH238S5g8RXkY",
  "key33": "46nzxokSf58X8oBWws9XbEE48j6ebZX6ihEEr6U4kBf8HdVdot3yZ7dsh4SiaUnxYXpNC8ScX4Lk6XhWYi2r8ZUm"
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
