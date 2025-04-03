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
    "4Z62hpVjoThokUvejXmGjyHHch4hwPQNPoqZ4azBtr8kRMFc1eggXznSaRiqtpw8gpu9aK8FxqDdsZr5Uj8znif3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sk7oHBLrVZ6Zba3XoF1UyYU4wer4zsBxzjkWD1tip5yfZKBB8tczA4ECwGNQowcCPsU4Vr4HXSvdDYEU9rpQm3P",
  "key1": "3rxdrPBM4ZbToxjpuMQKYJWrc8Vt2ThJWtNwagae8wwuNbzGbUYXuPNSFrvUu4FwLSBcok5RqG9DHYN8nuJxE4Ey",
  "key2": "3Xs7ez6f5vWjxEoPMtg5p6qAdbeMPiK7k8vpLLsChyuG7wwxRy5b5zkLWMUBCjzErh8RxruCHY9Cq2EmKfmy6R7t",
  "key3": "1514gYvxYVxiVMusvQHPKemhHfDeooEfL6dw4DUYabzwBkUdbqj3dXjWpzBctFJEmujdmobnZwLHJ6YiU3Pn9JL",
  "key4": "5MHGLS9yLL7C1eGq7vriHkEB69oq3kVim7dq2ZzUyUA5PB1kbh2282U5MsxMrs3o6sa6ixcJSythT6hDCtNb3k1d",
  "key5": "3qJmDXQQi84mBXzmq1mJwkfZ9hCKRb7MVsudU7Kru5SaU7DXvr74ZxqYn5mqVFebCpruktrFWu75bFyR3rCEcgaa",
  "key6": "5sLZcmape53wNho6Pq1gv1b6B2XkZGRs8E3aMobzM4d95Q7dHyx1Rq5LngTwk9LSzxVYopQSqKh9XGTHV7V5vPdp",
  "key7": "8WxEaQbD5WwrsuX8F9fPLSUeAzMw2P8Pgsci85THgasS37CXe2F36DAvucG54L7qaowKpq5Bxh44Fk6mMEPQSyq",
  "key8": "2cB1VDr8gKTfVMGPX2zqRy8TynrFaD7Wyh2QCiSPigKV5AsRVFp2ZfdiTN7s1bhzyPhWJES2seowjaWCJmJ9G2YG",
  "key9": "4vDt14SQGUwRABkLWTVQ87v1s7njCe5KdgFNbmXvN5JojD87RSpCggQmrC4qH7hPZJUHdxNUYtm8Q9oqSBJgjQXn",
  "key10": "2fVWoBWxENPwSsyEjH43cpvkfneCESPcPDwLiqmroL1tB4avUJJ4oD1Feq3QDGiG1KYuiPhgAVb2iinVc6dR1rnH",
  "key11": "FxU99wpUBpcniEXwBKVubmPs8iMn6wpP6yD4toN5GyYyzGhX3eeGD6oTTJkW8YU9fLx4g1xyTh6VqQx8eibPYaa",
  "key12": "3ojvSG9WCK2uwsjxP58aqufvLcncmdd1dEa4vMyjTWnD5mQXNUYr2WyG8jXkLF5a3ekFqy9URoFNFwwrYUokwhko",
  "key13": "kMX3baYzxFGisQt57cPUokeBk57tEwXK9zGTtyQUrji3X2jofsip5i3mQPu1uJBN575gw9BNJrhzDFePGkz9B6o",
  "key14": "5kSQdwaHSGmdPt8rx67Gsy1K1G8zB3k237eEpe8McMymupbL283sTFsyUbCHU9xDecrQhdawDfddbFBLanq9N1BK",
  "key15": "5iZGEjFzEzm8siEQEAY8Pd4oayp5nUeXYNVJbsNXMV9X6K8EyKYFeS1RnPA9R6kch7R75Hnjwq35PjoXbgo6WpDP",
  "key16": "2Rou7z59CgnRHkXPoDEttZEf2C3R5RNL6eBeF5p48vZcXCgua2UsTPRy2q8xuotGsYXgyFpEMM97xjiV9VP3yNjG",
  "key17": "GjhrDYzkYs88CBwFS14SnPtyFo3qfy1YX1oaMzU22tBM5tLqLB6wAUvwMK6hkNetTHbDbRCSn6BcgBBG3wQECGj",
  "key18": "36k1p66L9HnjKK4122AaYSDjqAV76NXz17chrm3SuEDBArurPqrhHhiVYsdzh3dW9LTs9X3b7w6fvTTKjKvZBqCU",
  "key19": "4AuBnwAPTG9eAyNp3uWEAiz9k6g9YVYLWeZt9yKmvBhtW3LXbLCUNi1qAiBDKLAVznRVaBdtV9byhpBKzDG2sb2z",
  "key20": "z1Fbk8yD1SS7bQiAjPeRjsoj8oMjbrEA2AhfcNU3EX2w1wuSazbwkwtroTVwF5sGir2WfFasZ5gsJokkwZDX7LG",
  "key21": "5XeRzNwuV546pg9JzaEWtj6hvUrEZbACTeN1oP89cHwvmsm4TMMtix9gz3zpXpYLKPXFgUZzq9tLwVNHq9QDBsTT",
  "key22": "53hP1HYMj2gbDBNPpAGQ2DMwpCNYwL47AmPhCx2KpNtFdDFaKCF46oBDYUFYFDwtJcUL5n9Co4uBK9DSBVdkSk2C",
  "key23": "5dsbkcrrtCAn4LGYsjnGtjJagFMY92DQhUW9oG3RCsKAyJjWncMxMLVTfJbaQKTMf2h2aiK2ppLCMvnnJDtB4tHK",
  "key24": "2EszzzRWVc47fkPLJsXJqi4zy6kFBZyAreiQsVKhzsgKom32VGBEnK6yQ1MRWnM6u3eWLnUVPJHxurQTW7814uWg",
  "key25": "4xjk3uJZyUKBegq9V34Nv5Mvpe1NP2eaoKGBBEG2tNKmFr2vmLWuMQPz1xEDFDSt87nr4N4v2z8XXajQNDFijbYE",
  "key26": "5gWUQZV2rMvZkoxn415S9MzSb4R7h996oomEntEMcyby9XrnXsNHXr5hT9fVpVBr951pd28BjgSfn9sxmMeRcf9i",
  "key27": "ZFS9dEnaxM9EnvfvFRvnTsPEYT9Go2qZ2HyXdtdVNZAwhThTjHLDsBe2TURH2hU3SqxJVuVMT62eYPTf4Bq99nC",
  "key28": "2qZHDDzju37hg57rZsxEqMo77qKqE6hSx7aWuqF1XaaGuDZkDSqM3NPe8fJWpRxsvZdpW3ArRScULHrsvfpHb5ZQ",
  "key29": "wXna9ybb3X4WfpFuvJCfvVtNosUcY6cLaJwdiPR3ry3SMYkn7sLygjhmXtpygnuaRXfAdS55AnvZbWHFhXPFaLz",
  "key30": "22FmkhgYA5Veo6WsTqWgzMk3VbPAVmwXufCbc83zeKAYKVQqDpT1cEjgsHJaiQYbWC6hhNdnXn9k8JWRFbNcHhkL",
  "key31": "JjN11kXBaZmPync7VMYYeerruRHtS4nSV2od4iVyUb61ZscHx2Cggmx2SMdiDMy7QQT3xDem8oMRWhjesmJ6kPW",
  "key32": "2DJCyr4dtuwhf3bRmHvB1jLkrcxoVNTfpfzrwfj3ttvm1nyZSxrXugnXdauwgz3Jrcv3pRWyX9eW3yrRJjSJkbzm",
  "key33": "3GWdirKwEXgozhsgPPJbqJHSvufWQfubBedb66QxAPE8owraxP6hUbSsAkye8A7c7NXcA9jGxwEqnmkuk2GvK9Q3",
  "key34": "2wvFaBhjVsYPP2qd3tUAZdi9tTHcYU3CoLAmjg3PDtic2xcrkjd8fwoP7a6KLYj2zPeo5WX6Cq1vbtbJ5DqGpFJE",
  "key35": "QByYu2DXhtFcyzMsqg9LNGTbRDxy9NpxGmquN9TGbCEQVwXy5hEqMh9WwuvCWcPqyH5FeDUFaW8gBRHFjQyBp5j",
  "key36": "4N2dvYdMKpv7EJV4BxGQAE5Dm5SkPpE15mp9ZgEhaefvUefuxsGnvUVWxtsNju4QxAktWeaFmk4Qs3yGJv64mX8n",
  "key37": "37mUsS9qJP58sx3pA17bECsgYFNhtLFE1z5EXveLRzaFjHPd44bz9daoJrhAD4wcoAyn5brCJRYiZu8WGgSQG6UY",
  "key38": "xTiMaakWMCid3CacNfQPtbEfpNbmsa9u2MUKB9Cr1ZSmnahGvknnVXmXAVDSipXAb9HCvhs1kPatr8sX9fH1cEu",
  "key39": "2xFLS8ceGYuSW3CYpVhGw5AwSNyGaRvucDf3qBRq5LQeF2NUn98yCqmXuVeXDiUNNu8NEnmsiwmKjpT9yDvPs92v",
  "key40": "4xYLNzLV8HhnwYtFcaZwdu4Vw6Qy2yTULRTYrjWq4bTmygAE7DCHkn2CiswxMuTa8RdX813jJ5udFZzDZykhvPnk",
  "key41": "1tik1GrSUsX58HoEkzT2sqBRfoo2My8jxGsZnSs1ZKNqZNB29sbdVqukyxVTsDjpeCTRD2dcovzoUbEQvA3jr5y"
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
