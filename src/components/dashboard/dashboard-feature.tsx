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
    "13huJFJ6YP9c7RuKgF5A2meGiCMtZH8L4p1k3wHNYYoC1orJZZ8EwDDJz7WhfPtSVNHyQYcZ2TkbfHGbAQ1pXAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oV2cPv7z6oWaHHdUyMw2AbX9WA7XMySqaCFXVh8NrFCJtEutnVN3vu12hknwbAniU2oUsxNEYhp2gmj184RgZNr",
  "key1": "3jr5s2KwntQRNjhV3Gq4b3dDTqHFkreYR8FAcE6Pr1Y1FibnUDp6Hsrq4JbkuZqvoZiY9supfTJ1yaJhrJJ7kaid",
  "key2": "4ECdQ7CKgPKQrzKyYnGEEYmFMPCDmvRQvcbk6Yb3z5ZnrkNohE3QgDpQpuLoQCaMF7gNqo13WfYG7VjstumX4nkb",
  "key3": "4oFRDjVyWrvBu2SELYK3ZBkM2PrMAoatDjDkiNsvotJ35dGgvhdyWMstBrm9pJfJMHijabFvzTYdvTWerVWEGjBe",
  "key4": "53MwibSsrpPKxsz7SGQCvS62RpVpk5saBWBtmbUVS5LqoupBPhSD93hUfPLjiDBnByYy3FSzEMYVknBaMXvsUN3Y",
  "key5": "42KmBLHhVSbnr5fNG7z1pnB3TDQPasd1JDQDK9U4MLaLNwW9YP5x1Ww3wWNoT1PCQff5L2jgcrWcwD3zcpT1QZzV",
  "key6": "2s9djdaiKmLx6CHgueAczLaLoC3GcUWQ2zow9wh9aNou3dVgq4kwbp2MVj4QQnYm4bZDxLnP4qkBRKDsSDZZUMV2",
  "key7": "2dBYw7fTPuSrMAeHe3if2sXK1riPD8Vs3hWj3zN3eoUBMMraRTb8DV22WuA2AZ5ruU5PLxcQJ9csRGGP4NFi688F",
  "key8": "4fsGQCfxAzHkfnzE4ZH3B2BoaEfKDk5GREQnCvPdM7ZGGmv4fhWBEgmWTajL3gFsbZres4eeyaSjCnAmfKyomnRh",
  "key9": "SjuR3p2vm4svMAgKsRNSUZ1ZXbZFeiocCV8ak1NC4cZoshpzhgfhMmkm7ajrRuAYE6fiqSpSQyXWK5HRveLS2U3",
  "key10": "5envZFjqcuSJvmNaACioicZdordmVoMBxLuTSAHuxZPr1EEfbJGMruDhj55VKYjucwjP3L2KToDX9iejsP3tzi3H",
  "key11": "4L7P9iUvRibF9D8AfhR6uCQtnWN51GZaVUu2qrLGafo7oETyiRiwaS6GYwNioCCzWBQL3aQ1SrFoNJEUSs5Zxeq2",
  "key12": "4UUTi4wGuiTbzyKNebGbowJA8V5YNxYiFE4TFxG17PLmDUQha6FnVgqjm4J2Dqoop2Xc9CJ888a8fhGU1AC33dPJ",
  "key13": "h3RCDDkgQDP1Cw2wduoMwagJafYbTR9uJrncLSP9mnaL8k6sNEgHE4XbtdtEnK4HN4Hu5WfjNuv9jfLhzkR9ZsR",
  "key14": "4FvNmFTHB4JK1mmga1VmiQrAmwKPYDACw4faH3inBZET91wF2z3FhCM8rjZ9eqG3e2aRxt1PogPQZgTuaooPdncZ",
  "key15": "2fQ6fnvBSrmdef72vLAJdACTjMrfKUNqK1nEWCittrotkCT9bEg5Ddq92ZejgVUGErR7byS9ZibwS23CYCaUtSMR",
  "key16": "5o8eStSN327H77Kx8KyavPhAsCi1QsLzMGsQB9Jxeejfr8gHE3fWML6gNg1bf5DhLKcFp6NGKWHvFohh7c7rudvu",
  "key17": "2WYWejhKchKcJi8nVDUT4uXpq9cNcaEiCfrLvvF763yHv2YUFxyJZk371HFK6c6ure8tXCvLheJodNWq9WoBxDUW",
  "key18": "5h6SbZxYJH9UgVEYyj9JU5EARBX2jsPJpGEGUDttKy4naw7L2obTcZGPAWhHLxA7SNc7aw3T1sxsRvJx9RqW7AaP",
  "key19": "3QBEipZf3M1QP7uiLddDoFbM1qPf5xZYSZjA7Sj9nJm9viFZPCtq715kuAexPQkEyW5urDdukmd4w82LJD2Y1bxB",
  "key20": "5Y3nFgeBv2cCu73XAZFJKcV8VDqLC4QL9NUpX4mut6hoqa6m4TxCWo3ZfGtfWtP51FCP9h1NLooRpdh71bvazRYR",
  "key21": "4xcgFgywANnq3KbqWsZqVyqbvW1XXVqr7qhezpr9ymx2Li5Dicmcz1zKo1UGkaQ5tWJLwW4JvCYyZ9JHfgaoMfHR",
  "key22": "SLWMwXzHtLFrTwTEBThZxFGobJcQnvWN5kmzUoKc96DG74rPM2abBaycL7f9tn1wsy5KfrFZhr5QKCHeV9xgzhS",
  "key23": "4WmXWYoMqyv3hdqT1AoSRushXFGeLZbnnUY2uiFz4PYBxqMNZkYsMpaqB3XcokTi9uLZrQ4suJ7uWmDMxSvjtpg",
  "key24": "2VKggfaxpbJwxjfKknZDc6wDJVynej81V7FKfBuKyHbVXxzcTBaWWTjTgSyA9vcXnmw3YXxkVvfSfrjc7WF4mf38",
  "key25": "5BmpobFswnxsFfcMXq5AYqwwaeym5z4yfMXmGUzuXW3yAD4AxWamEHxCG1Kp9vDkqNExLQYLwwSbX9zyBsB6uGej"
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
