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
    "5XnNoigq7dACT58mFhVssDZxDrUBNtsS7MhsL39gwrxAUbokCYwC8P5bSz2aN4NvhY5gCYSjL2mx2TyDhXQezQPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rM4eNa2pd7Gsw95hr5wecSXMsrLX3LECmKDPAhqhWLfwD9BWNcjtU7B1NtvEKpLBANXKcSV1kAiuNC4F1FWcM5k",
  "key1": "5TkNP483WejhrNf9uCXbESSwSmmYSZMBFRnEgC6qTBAPs8ryHiXU1MnDF7uYNh23v9gYhsi452hBXghHPKY798Ji",
  "key2": "3NvJx2dQZ2bGnbbfvY4Mwb1hidfvm1hP5af4EVUx4cDGThuj6aoHr2B7pysqUnbyoFQb2RXjdK1Ci1mJob1uVgEZ",
  "key3": "2C9VcMsD8PwftmLEVTcTVhLrDuXd154rfh1oMPZ5vyoPB4gBVutcW5ofodhjCLYRqbzJCviqG38kGF9TRpkf82sc",
  "key4": "5M574z2LUbGrNqnSeZTDXvsLpediAzrTYRMUPSKDb5cpTi7DTnCvYqbjJMxweuuq6ZMWMvgiv9t8eKJkbRXJ8urM",
  "key5": "2mFezNUkAudGBH2EvWdLrnWDhM3SEnW3YADYSiLPkoj4EXZtFPQex7S3sknkoGoSP2cKvQxJDmMgRKEnSqJFDies",
  "key6": "53uyd5CBV7Wv61bQVNHeZd5dgzNhV1HoP97HHPjmRfR3LQG98is5tkEkCjQvcJ58YWjyJbPQW7RZt2wJTkousJXU",
  "key7": "5BRnm3HkCw1RGJ1MBQnBsPB51yTjtMYxXwV4r7cCyjDr4hB7GrCRy8wAVwZFCbKvJdHhJvvqLKYFLmg71eFxQsaJ",
  "key8": "26TUCkRb8dqm6JKuehcpaLcGcMyt4yKhwmWsbEbFxb6akWBgXXeNf2NV1wtJMa38SSN1iA4YckZGrn9DQprsfWQo",
  "key9": "56nE3sScAV4dy8s2dPsoxvFkdViwSZHhXWxjBf2ZMoptNxgNBGGzU6svL4FS3di4m8suhWFjEEKnTdtpQfsW7pHv",
  "key10": "4C1HRBTjezWKqqqgKvPiNaaDxiLp1V8nnAJUQQ25pRyoiPX4xBsZuX69k4d81zf6yCXk4TJxMkDMQiX7VJAFaKqv",
  "key11": "3sFCTcz9xohJRafjKgKwZgeE9WU1s4yd144vab4hoFKGG5uUWSkc2hPGjXbXNZMpzSEHEHCtr9woq7dBCtQbwn8G",
  "key12": "iAuBq8bSatj2399fVaGnuWoosbNgKKSwoj18aYY8cAnbuqEAdGwAqhavmT9ZCJpoLkEL7hKysmTFg2wyHBS2YTS",
  "key13": "5XRxTpF9CmrRdCQi3YAKUpSSG7MLFPpFBnYeakQYHt91e7ayK4SUvLfghexnJayY9ipsEdim6imdL3qGDRcPLpmW",
  "key14": "2oU6var4YF6Sx7jDCXcLU4DBpZafmN6z6q3amAkt3P7Absu9geUn2ZpR113ZAMU4Jk4CWHAac6MjZv2FeLAZ4Aju",
  "key15": "5UoS1hQrM6QrZMrCdCrmqakRFb7BkXuyxJcaCqEAAH3RK4oZqF79sHXmRgS1cQdBumuin7vsCNZK1qW2Nyjf962C",
  "key16": "2nXyohuWG7gNqU1VdHpgsonjw2WvA2BbVmVc8eArnbwRuaVZfcDZBVJHsLDqmAqxFVhRP28taPn2ZU7T4pz1GEPz",
  "key17": "8W9S9SKmuMqNp1jYoCp7Zq2hJH1nX73CpAsiSQbqfRGJobykssWpPzJhuGRvNB5FBC18rpFhDXVrNcCfb6sjuBn",
  "key18": "FZrkJQ44KGPV8dgiu3DC42FiZL647wcbCkSPRH3kPHE15aNPsgmSuM3w4dQ4wahyLYAFzpSamPpJcdqB8J5brHp",
  "key19": "6K6kRGQAx2FJ5Mjdgeu85AvEtdkRcebj6Lf8kp2EbiUjzj1cy2RJUNxhUVeZptMqTBkyT1DxTnXJodHpdpnstkD",
  "key20": "3fjw5tgwnSeBVmRY2wUphga57YXVNRYs7EWz2MZZm3VccNQNqcrQ7rfBdqjKuF6eGs33Ec5piZprhirQNzsTNaQ3",
  "key21": "Lf93Lrx82vGAaUv3w7dQ6DjfmN7vyriWfX71jbqQwrGQTGLB9eUniJhWDxFtyH5zETi8EB19EyYnmL4UuZ4u7LX",
  "key22": "598wvKKJ1Zcw73gLVsqXrdsogAePpy7TZU7KZ9gcKhrP2NCxRdXN7ynUzc6FaSYHxJPd7yDabDjKMWTnk8zDE2zx",
  "key23": "3m4wzHpa5mNFJHcERwRtKkyTDiaE5FwD95Egt2GQQwFL5Tv1a7dSGnYYisoBrAkb4Z3XVbiGq4dUAW8GuR3Zam2m",
  "key24": "2aL2Hc5ue6TdKWL5mLyhHXQPKy56p8s4RsxhQk7ocqRqhfd836xyVjubchjW6mzSzak2gC5Vzk2ziTjDNu995Lac",
  "key25": "5ZFusQ22rtsC5BpAef8DpvG2vvnffYhXtvevfZxyrF2wcnDJ8zcZmmKbR4BQrofcigEB6fUqYGdqzvRdTEjUsEGi",
  "key26": "4PiJqrMPvm6qAH5nHrBF2xgKAQSHDHciBtUPaUrPwLivkg6bW8chnKeqpAqn5cmHRBMLDpQV6jcafrH6Soy8Xh8v",
  "key27": "HurigBxQiLqNa2LwfbpbtZhNUhUtDzByVuoHfkQcjL7LJjUphxyc2UwMWT82PM4ykvB568LfwYDYSbcoU2fcYHr",
  "key28": "5mJNvsFqzNeug1zhWoiGr1tgVFrEipUTsGmRUnBQkdG6pynH8ekTrFNDafvTXNn2hJuTeNqnFMrAB9u6pHd8FrrZ",
  "key29": "wGauAPtMm2JFBXgW42brz9KE6M2F94gDUBM9Cf4SJh72pgPu8AY2DqK431J6xu3jRLWiyGEa6nMtZuFva7Xoqyy",
  "key30": "5U8NxrexZGnxfyuYnGTdq3dj6RQJFazbm5PEF4ENf4Ca7PbrBZMuoVMYPhkhAHityX4LbRtsLYh1sEgzMd1kjLYS",
  "key31": "ASimTpWGfWZgNEgbzwMfqLNtxC281AxraFa5gsiZPqHMZRVx2p7kx5Jcx34Hbgspa7q21XirZAePyTe1cF9weg1"
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
