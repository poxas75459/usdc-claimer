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
    "3x34WecNejxVFCToENQS5wyQA4XSkqMc5mYo9K2PuPMDwJS1BFzqGwmTKRfWqGzHNmHpNeoU5yixGZ4ibysXbvYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CzFMh8TbdUB8k1ULUb8xyj5qRmVRqnJNRC29PJccrWSAwR4Kwku8c8yUh1f4TgxJBxVBEXa7diyMTWXpGw7kqdU",
  "key1": "93VgSYCmg5npFRx7L4RysjnMYnph9M9JWdyoyMsHkLwSc8weHBoE4cqpybtXUw2a3BEnd329bp6g8Hi6tjNmUgA",
  "key2": "4vcCz6WVzTGNBY4YrmGjgWzodQBXkKrB743pYmQgn5gwpWNGB9uPaxZK1kyMUJWXEeWPdF1xKpNPRXtfrXGVDCCE",
  "key3": "gcXEy7UKdpUtm3o9WveYPhYiNLXeB3K7nJAGW7ns8AGjpkLaHkHBWSMpvjqzeayeEUHK1ZTCkpZc6vSBbKYoaak",
  "key4": "3i2xfDoTeK51ZH2ffM3ubs5rBR6xJ5rgcnR9WmPMVGFdcHgnhyx4g91KH3nrfFE9jsLNqieFp7wiMSigBY5Us1Ft",
  "key5": "5DXaBZXjBKJADcZmx8xBuP5PecX6FiY1fL2rxMffoEc1K4BYgu78kAEir7mmnReT68wdGJaR5QD6smxRJyzpqR9p",
  "key6": "3k7R5DfcboSWJN5FUvDR4siapGfsUqofpVvyVz3Uo3wrdyBFBGXkqrWS5CwxNiZvRertB7nuXY2jiDhAdjE4ErJ1",
  "key7": "4aBDNnDCPY4U3uh7S7vrGj9pKahGtvWEuqAVkpZGBzC1QHNnBkK5AY2dihsFxasPX8gEV6hReyPmDaVD2iYr3QZt",
  "key8": "2ELsZCttknE8VGh6ibygAfBCJejJVMAuoPpqZyEhYJWrYDbdWVr7nreEcrmac2BvnAdtTHco5vUivK7sAf2PjFUQ",
  "key9": "5NvKMy6Jb2R2PTFXR3ncRhPguP6Vx4xAwAVtGGWAmRdFCApsHjkARAh9oNFrjRPeizW2U5ggjVF9T9VxBV7PNymw",
  "key10": "4cW2Xz1ENyoRbktwtC1UW8acwccT8aDWMJnkJ19J9j1KwbsEHV2nawLukZNAWRhoCVQ4R8g1PUzocPReqHukBA8e",
  "key11": "4kJUpieMV2U6qgx3qspSsMSuEQ6JUonzEh4xwJFPZVeDQRhf9azu2u3gnrXRrsuYkN4yfr78e7jSuJvtf2XM1xVk",
  "key12": "3tCfVDw9wdbQTFJMp2BMDQrxXWBDiovWrhXM8D1g43WZC6kLxACKttA5iGGGaPJeWFLpGYq2GaX7x6wFtqSRTh8o",
  "key13": "3HSupSkLHyXLebMPGbonar6szrJBtnPzZNhHQCf1CZv5dzQmmJnEjThM2j7fLY4XajUWq1kdGN6PDLv5Mk6C7Gf7",
  "key14": "4aXHqkhUVdAmuSaqPM3RHgbUAdk3CLNfJQcZpwrTSF2KZmQkXnmpEieBVxQait6a2CMrUENweKDGNM8ZEgd88R6v",
  "key15": "3b8gwic31kKbLDPD8YZCEPjkBXCms53PLN6j1rS4msQxjrVzYDg96zvv521w8iFCwjbK53nAZsWMB9EQVX8nUETW",
  "key16": "67gm52UAGfujGNnJQypb37fBVYoEnPJmLRCmtM3edcjbquZ8Au6dZicCocW2K5rWDADGfUynYHKaZEwHg1ACQu6g",
  "key17": "56goG6hPAqgSdr2Jm9PyXKAgp2zXJQQySrNPvwRSsbVzJf179H4iDLUbwPu8Ww4CKf6Gf2Eb45ySegZ2d3L8fFAW",
  "key18": "5SK4jazBBUJY6ZG7ZYm2TBZ7G2o5BrGSRqHfGdadZ9Y2cxibxsuKbPncEq4wCf5Hu25CN9nmKe2xoZFbLi9ifJ99",
  "key19": "3aERX8eineKVHpqHhihCCZMH2fizZ13VxtgHZV4E5p5TH6QeSndTD93QsxEdg6QwwY7DSFkF5JjsTUHw1mp7iK6m",
  "key20": "5nL2ChBgMYvwbC4XrgUpr3SzjxffEUTgCwEWNQDJNyMjJUoxDsUA1Rns4QySYzR68n2E6tsp7euw4eDx2ZjwXveN",
  "key21": "2CGQURt2C74cGNvg1nMkW185yQRKJcHD4g7tFfJqZ5LLNW6RVaz1mM63HCBs1SZBiWWBd1Q4yzgX7v8a9bZe9e4F",
  "key22": "5DQEFDs49Atmw15vwD1yJ3ndCA1zAMYmLgbmcxnTjcKp9wsFy1BJDEU9egCroyNpJyTLxa1xbXJAJoFvJ29akUTC",
  "key23": "2cdHgqrEaxau3uP96Vc9JEa2vDwhATh6f2CgqBnwjZuZmVbMuTEcP7vqhxBAKSLAhT1Z7Ya89JjPbvPcxd9bHkEs",
  "key24": "3dH9Pb8wAwJMzZtT3WZr8QAzfYhpSEFs8G2wJfgvUHkc5jgBvivbrFE9THZiHnA6BbSV4jm5ZSJNNwq7jZcx1Aff",
  "key25": "3LmkDwJiVg2ChApXT26xCQBMFEcKXGy9CYswmfuzA6asD3Nr4xfQP8aQeHhH2cywv73CMn5rLS14VeftapaRo43e",
  "key26": "3ctKmvARv2rxMTiLRXQqcgpKEJboK4hxEE7P14247v2hsW1vGbVRMPBGUcvn7M48oSqRtTCEVJGunCUK1XLZ3hLr",
  "key27": "59yh9om9tDWk4fnuPQb5NoEfbDDskxUXwNTaRmESMt6T3g1HwpxheyXnmVaYqN4iw2H5boMEg5kBDbk9jr2ugGsZ",
  "key28": "2HBNvwNQTurYZxHkV7eVY78Dyca62ww32QzeNgNEsvfK99t29LZGvicNQYpWXPVfMr8jtEpxmVtBkjPkzogvEf91",
  "key29": "5CoB85rX1sSYwvyUvaqXgq9VMyY3FTsHxcbV4iY3kQjkzz24bL6qthv87BRBPf3xNsRrzpSvHvGnaqdsxnjT3rVF",
  "key30": "64Pt7Eyz6RAwo5CXXXnqWxCnHjTNWFY4VHodrMYyUAb2TVUeQ7JuqT5VbMFzNpEG7rN486LYscBRvBT7U5cSceEr",
  "key31": "4MKhTqtdw6mXtV7QTN8SZd6DHjWJZZtGMYxupbYuG44KcHyX46SXrUjJDvVAmWiNUbnt9121M2TouNCuDVviSgqB",
  "key32": "4mzSRP2nnUq2w25AKoLqzcF1vjFGvtwoAWmTkgWhmKis5TdFCQ476JKyvWJvX8pDBWr24iUMBVkFaZjGydWRKKe7",
  "key33": "3C95jH7f2WKFo8q9VnjbMGvZtFBUc7F6tnJk4WBiTZPZPpadZ5pcZC2dW8t8s6RgAmRV6L3Gwbbb83TN219YAZow",
  "key34": "Vm27uayMYZgfVRs2u9LyUhbiQo3mkeu8hKV5vwfYrNj6sk7qT7DXy7yaXVga5JTMX9v17rKwGdW1V1GLyWxj5JE"
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
