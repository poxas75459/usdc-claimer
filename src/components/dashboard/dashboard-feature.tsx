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
    "3Y72qjRxLsiR1mAUYeUFCNUcCmPRU6UXaxfX9RR2njUXAdc71UihpFgut2gsXYzc7Ua6Nh4dUuTZEWT7gaRmFTru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Un2JctiWM8WDZhSMqE4EeZtvAEQTqpVcumhpPFm5mGPzM6g8HX1hsNZbsEiw2TZ6GNb2Nxf3qDm8Rmdx3HwJcnY",
  "key1": "iHFBYCcmKvoLGs2VdXbbG2UZLFZg2K3kvToNc8LnJD2Qq6pWfJHufApifzw867d3rbixGo2CM4P6pKB9xXCmDNk",
  "key2": "cBp47J7wENmbAuc9DKKtaMdUkUcAmvZh1N88B96zA6R1m7riYfvopmWQaP6KmTWKWBPoGWhs1HmCDQ85w37rGRf",
  "key3": "2fah2xCvoaEGNgs4rfr4uFYzCga29C4cWxAunPRAntTTkTH2QT6Grk4cnxdHveqRFiZefq5vBSGc9GnWtPY8eZJf",
  "key4": "5s6rHGenFbf4z7d4jkR5MX9qnU5DrdqQdh8LidwCEb3x9bJ1xMvmcAMemDcvTwfoavoBTP26Jj14aUa4bRbuwRFR",
  "key5": "1ysTspqQQVsdMFfHaxtS4yTi86VfFvLVo6WrpfB5m6VZyy4aGeKmp31uMMe3b7KNeT9BTtWLbTMEvkam8FQJhKe",
  "key6": "4FQoFiUABZU9mYKyLGGtsh6ECBBNGQCTSBgzHPyCtermxpzhUWc92fLUspPJ3CMHbzHKs96QSCtiZqBjAjbUqmoW",
  "key7": "5siodwJyDbt9c2NvywGszbTvd56hEDVwurQYWHDf751KksxGZKAbVPHSJSdpNM9CtjN4A6LiHjQsNw2e668GM6hA",
  "key8": "qSpvsjhkFWnHpzfxGoXDYxdh4svHmHjnnq1UcgBy9m5GqpyuhA7zrx4gGRQvWCKWjxs3gMMWYnkSsaX2KTNLuqF",
  "key9": "3dchSLLmffueHDy3jZdZGsrhTUD39Hg8hFAiuFqn3kmmv6zCSmrq5L2LMDdkcxWSdHPPAQpZ6ZBjCZG3CGJuCMwu",
  "key10": "3VTPsUcebei6RUDNPSQKjU38Z54bdF1Dmt2pjxcYd5pFxweRP7wC3D2BmMRvzYY1aKKA3W2YAgHfzJ3fWM84h1Zc",
  "key11": "2EddyoutvTTUBp2D3vy5NFQbZxY3hRcPSgxM5nSmwVDnYkg2Z13fzPMubycVRAY78BAoxtMLczxU5y9RotGiw7P5",
  "key12": "5XkhSpiyYweQqDLG3L8kCBrZhN5sPSRd7jm5vNBN1H4Qn32BCnfg1hT1u7UpseFYsX2PoeAtsCGSS3B3JDGsbwyP",
  "key13": "ZRDgvkszkFTnkYJ9d3ihR7Wze9hnzn3BGXSmteD3M3QJiNn8K59Nk6w7fCtDkNrW2EDsdgf7zPAgvGsTCnw2r6h",
  "key14": "4AZjACdauVEpCjEdWZyB7PEXzvQAxMjj7UgVoH62PPsAWRcsvZzCiwsm3LukGFQRSzzQ7v42SipT48VX73zZ2Zed",
  "key15": "51BJ9Ln67qNao1tgXZJo1k8c7zJgguj4P5cShXjhjXUtVyyyB8jiMP7y9ZSBqaUzK1DmCkbzfFrGSBrdYPqD9aN5",
  "key16": "5DJfT7FfyUhdrGqj2cxMkKhHeTCA4zxqLsU6dEnm53bPSar3JJgWHuDHSnGDMNGsAS6ppjtviDpmmx4vW5iH3BTK",
  "key17": "4hxYMj3oNTkVCZ1usZ6FfN6hH1C1wbyqaxUfoC4D4SKpM86syZFw2UyFcjwRZADbN4fb7pnwEQU3AB2ZDknb92d7",
  "key18": "3auGjA22wPCfwpXYapZexrL7i9TCVL9bnMgebwDBZaMBa8EZSy9vE9Q4gUrELmtxpLTSgTus89ws3VtR1auUBXby",
  "key19": "LTmZ1bi64cgYDuD3vHppZ3secxJXhFMxPucyk4gjvN4Sm6XtbLHh9P7DGVc3XHLzhcrrFhmNmXArwfUsfykS4nQ",
  "key20": "5ks4HVWAR7D5DLGpzC1catpQaTd3uB2AgEjRZChS11pzxdi5n5VVX8yQNesJJcyoa9NH8o8svaMZriwa5jModXq3",
  "key21": "V8M7f9mD1L2TjbqbtzAifkcSWQ5xKyoj6ReD4XY6HYX19WtC1ceeP39eriNNqqaKJRpGyjGJAdQxwawuGXvEHT2",
  "key22": "2Fmv47j93wdsnbofbADDvsqbhP4FK8bbwayEkr9NC6HVU7tbBpxShRuwiQ42DTf65RRwbuMo6aNNyLxNJYCwnGNY",
  "key23": "5F2NRShWGMQRAmt741F3xM5tVMmXR5kt5AgTVnczLo4yAPBUmcdyMzZM4QNSQE7ebzy5Snzuz4ZQUzHZmwUZzWCT",
  "key24": "i7U4KWuZCkyEL8gyRDSso2c79FBaRMrGeSiXbqTwN6tMSbkbcCWT6VbQY4kMcUj2fjJfZCwtggT8eS3KfkzM7u7",
  "key25": "5ierqNGXhY8tF53opiXjecA4FsoejG6ChgxDX2dN7EUtu2UYG5Hp62vYEzNwyftSnPtpdvuDzNaieuS1He7kyMC7",
  "key26": "325vZSEpzkzBK15CvxgzCpkVDhdNS1XZCJGUQDpzqpj3jBWPuyByUMigaRzgoMN1n3DDVzzBgh5G1RdLMx1d2GGt",
  "key27": "5ZMoKXVXRLpv6G9wzTQ25rWfDqEf9Zu8X7ygGLBjvfHgbKF97DRHRQ3dQ7NBXhrU9eKfYJ5i5aNU6djRVuonM2Q7",
  "key28": "5eAQCst6bTvx43hnqvmXvmDKReuiMtc6GCnBpLZdkUzKe7QoGNvGVbr1mhXmSdiSy8aWbTu7rn6SDpj3saA9pBcm",
  "key29": "4nMvn9FfAtPBMZDQMJFz9v7ivrR5PDActUAwrM6kC6YCU9Jp6EhNs1tzmvDNAxXdM68V9h7WaAt5gD9TBEtVBUM1",
  "key30": "2DnE9G5a2DnDX9GEuev8ybk26QJVgzWCseeaciEhEEkpA5vJd17iXNtEScDxtvfF1gg34WZJrbbHuPoXxA2evB3i",
  "key31": "5qxft3taFbxFkMgBKSTZuQiTu6gydqNXFU2v5o66hJRJdP31W3zKeFn1TYpMLfcsYkTLMGocXHL42x5k4XC9rRaf"
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
