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
    "5dzF8nHcHsQaaDfpfBH8jJsbisKgvdoHfpzbJDZmXkp9i18D2U6mWTJhsBSmBXGQMNtYuK5NbHpUUuryZ9wVCqrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U1aGo8KtsKQaQP79yF3APY3YoTuABFq3uC1YiisLA9Xc1vnTCG17SbwoSgZs8N4E9L4zV91UhFc3d2fax9J6L1x",
  "key1": "3qjEacaX91yjMkdu43ar34dPCGx1UiV8EQYCJrDqokULALE2G9FoQveitGzSEc9ab87hNkJeaBjdqocqE78iRvK8",
  "key2": "vurqJ2rXYgYcEePBtwLibqegQXtbk4Zac2ksdNcK5Bw8uKxR3gvVRBDg8SGQuLsGko6yMM5jAZ3rVRtwPnQBsmB",
  "key3": "2w8NidQkx5nDVezZ9tL5xauyUkzrmzdZVfUNSmMJF5An5ffKF9oAxSfhhmcP1ahUBrXaXRKTj2py5NopKopskBeJ",
  "key4": "5wj9T5i13VPvfnY3dFxrC2Kj9qLaZsm2cuU33r8DqVKxkZHxHf1aMexW8BaSHyWgYkeuyFb5Rz4DTZEb8ft5RCKw",
  "key5": "3bjdKKQ3Pdv2i9NNzJ6gr2r52L91jDVp8iz6HnMFQAW4CE5kbzziHJJgbg1KAS78EkgUP1LB4f6jcy1xFj6ypVtX",
  "key6": "kQoHp8DrjGCR2RGvnr2gCTJgGirJKwBMrxkEREyw4RAeq76qKU62hwCYQ6kNhE5o5CwNVP6fN6csgRH7U4JqSrx",
  "key7": "3dCvY73N4QzvS3oFZCJwcysx9zGjkc98QUA3iYkz1pV2NEeVNuZQTJ7gZMu3NKMX7Fj5v9nyjMrR4wtaFdEtoVoj",
  "key8": "3jJviy3cY2Ee1WUeJZVPM4dr6TwokcH3HXvqGdCy1ycvxJ3Qhs44wAqsasjkt7PdmV5HNHCYfvUvoHyZzPQspytc",
  "key9": "3CmqYqszBDJtAQyZRhWJFWihoR1VJi7xdFvURbDGT7HJmiRFgm6XJ6YzeFW3pmcGwPS4sTVqgM4EyGQrJWgiLDEA",
  "key10": "2RefYeuBWpTLf5F8YUqKGxduVsvVuY31N3KE8a1BDiwid87SWJ6FBGKuZWaC2EqegtMnrejsabmKQbS7c4Nra1eF",
  "key11": "PRcL9RrG9Z8J4xS9dCm6G6B56vdGLY7rjdwQoAtG9FZobKJqiPzmjwstuo9aBpgFi9wwbgNty7ijReLUEZjKbXj",
  "key12": "34PuGyqQzjC5TjuNTct3VouKE2Ws2UXNQgGNSg28PxR3oGtnFimCT2zZh5jLLX3xUAb6G774UPLeYVhyMorUYJa5",
  "key13": "2sthomApr9Uwx83g5GzeeuYKwibScN3Mg15Cu6pt9hQxxqvNonfehsJLLHqezBNusj343mQZ7fgdNU3Th97mU6y9",
  "key14": "5NcDZNuoQvyk37RYcvH2HJkKQdMuEKbmxLij6n9HC2FKm4jLoiGMAqMDqwG2RddY65RGnjf9PxPPNwmkxp18FjZy",
  "key15": "4QVnJWaQHaaQqHdMMjiz3VPxy9KKQY4RGixX1Ahb1MyP86VAqcnGRjksSkPzZ4cpbbp6eMvcR6acfp3eTsigPeuq",
  "key16": "VWV6tQv6GsXCARBdU1AQSF46DU9PgKpeYLYi3WDLtQEi9qbj2iuHWaDpRVBdRPuiTze72sngBAkzNCUNxoj1iwL",
  "key17": "3dJANFCKaKA6HBhYvaXRxSk5yTM9YmAsiQX9WuSFAwULpPcJ81cZ3V8sADf4e4LmzuezFQhbs6vGnVDboYWfAwNf",
  "key18": "4xPcFeKmeMkJeRqaLqC2CsdtwFp39QF9YASkmT4jR4zWuss4jH9rEB6a76XxbH5WSiSvZ3KF4h6vgoZTYyYDfcJE",
  "key19": "3TaRxpi5Cgbcbd2Ev5ML2GGqjTD85hHjGeTHC5fv8wzQEfqSGNqhLBrTgPAnEQ4SNDr86upcaF9LzMeh997eSBo4",
  "key20": "JjgY6YkBcGGVtaMxpNH7K7M9xqp6LSdhR2q9uJueb4ruMMZWk57NEfnnENENeT8TGghQYrzkhdhcqZrZuhCBVWp",
  "key21": "3p7fBFhoRr8xd33YKNLoF385KQdXGTNm88GTftWuC3PZ5XHMDV3FP2FeXzpkjfeXe78EkTVv9sPuTdjb5Ekg9mxy",
  "key22": "31hjJyAiEYMNC34NVw84Nkdh1J5dFrQ5ZkNaVFtMvQeivvqLtcwGT86es7mifxkQqLvkrKnYxPD1Tb2RtUp8nMsX",
  "key23": "3C9sUyYtKWNdxTRzW9xb1sm8FgYxWZXxq1AgQhHhpFxJEAALGP3VhBpRPK67VDFiscQjXvbGikz9MZq33iRR5iFQ",
  "key24": "61EQdPZXBchPj5GhQAEoTZUALekuJqoUGkNtiRJsEe1jn1vLDAsV2y3Sxj4PFnHuxme6DB79dLPQgxQZMrwJZdQM",
  "key25": "BQ5rSw43rHDxxgSmZNnLJr15uW2AruymRX26oPWVEj938icJJgBreqxKZJASM95EhDr7ecGBLi3kXT8L6ASkRDy",
  "key26": "rpBBjcm9vzRkJzXrEHdhqFojr5dTiXaSM4znC5CzfCNhASHxBnaU1ij53MLaRgxFyhW64gdyaUEWAbJ6VQ26RMM",
  "key27": "aNxiJhqKqnqDvJLuVJCwk22cGe7GRXeAg8nagF4udY9L6o4NkUw1oL6U3dPgdETWnLbyX75zJFhJBr8GBgXwHkS",
  "key28": "5boDFX6uEEF7KRVn9KqbCVWgaBi8Vtp5vUfcJtpt8oiL8pdCHfKDqqubdcx9piPYGhqf8TBdMspTrYjTf7UZxL5w",
  "key29": "412utMxHwPwW1RrKAsgV6Py73s1tAchvxA8VschXY5wra6jp7rnmAQ6DW1jVGUkAdvdkC7FE1f1RsVzxcmrNMwZ7",
  "key30": "57ASa5312pT5rhmWVV1Wvs7nG1Eba6LvWCJmk6wNPUupSyL9oRDybucicz6rtoGVUtvXfphSWeLQMNhPBH7s7DvP",
  "key31": "2vb4d3uPzy9LN3ck1f2JF8yD3exTxRWrrqcj1S95h1CfY8CUxqxN7toWBscEmPWPyha8YubT1dHjqZFrVSYhNYyi",
  "key32": "4xjW5fW5G6oz1cyTHrYPus7ZxDabN2BhboEBQn5MBBkENwJ48kXuXGBG61asTcvospaaxH4ASPa7sGm6nqgPbPWu",
  "key33": "26EDPzUZXKj7SZgCTghdoh5ijtd4RaJf3s3QoxUrRa6LWtr4NwL9tQi14Wg5NuNvMh4KmSzFgKyYeEWDifZRtuV6",
  "key34": "8ZfmKDCVogc4Mw5ch1k1nbWbnihT3SaVY9SKuvRsE4EGnF9s6DFcNj43KXiGm81SFHSrTxSNgoMvXC5tSTcvd9m",
  "key35": "E7KpjpP3DcZ9JqUiYw2eeJSgpXB1r8Y7URntbWavCKr1cP1eK2j59rFr3NBkAFBWS6b3WZQQv4cNLyZvXoMe35E",
  "key36": "33beU6JQCMepzJEFs9tTZ9yEeUUh6cuQrTUKBANXvKqsqtgkLTbc4FRyfCNi8W8KsUEHpQ3a2Aay9h8SQwrRwdvP",
  "key37": "2YsQVPohCYNBP3kuML6ypkJZvReYE3LvBSMaU7qJN5NKanYmBWxo5bHuJVgYJsNqeiFPWWEajSd95RfjwbYt8Pr8",
  "key38": "5cjsSABEspxma8LLeSHV4SWmGhwPobeokdumNpUJMULh5rSoyLaVHCFbvGNBCfoqQZuqE2mhG6NC2d5jSnyQSS1g",
  "key39": "2b4FnVAsETcgymUk5h2s5oeyh4bD9fzren6mSGmk3HE9o5xHY262eYxi7iJ3o6CQZnnaYVGMVNrXr6kd9uBHWLyp",
  "key40": "5nc8XLnG9QsXzJwoL2kvYcB56CZeXnWXS5EmuQVMSQf5aUktwytsEtr7JXjRp2wL4XoMYbmG8GwDJ9Ya5bUzq3ed",
  "key41": "Gei9sXM2WCo4efuZn3HQK2YWj8TrHMF34aKtxMTVzSUy6bQYhtU2ccJg5Bbmwm7gUdcXy8WbdmYjTxszuWZfALo",
  "key42": "5MugJ5oCugpHQ6QXNLcpSug8M2RVawAeniWSUHdj42MSKACAX896tvrUqZPP7zqX8me33SkJUBg8NazHJyyrLP2h",
  "key43": "3tgJbBTRgdoyEYGtCUsr3BtKCt8ZNAQr912Ds4MeXLbpNwry1iFYHq6f3nGYKUycAFj4DAUZXNosd6omp33PvCq2",
  "key44": "3ZHcyeeGHYvg8VfbvQro8xJ4x4wnwwxBY7GMCp98qKhkWCmW455687E4E1TecESqZ6hqndDyNtiESQKsKUy5rycV",
  "key45": "5utvRTUEzsbviPHj1QxRvg7iVcrkJwtg4YuDP8nZdr1cczEZjYyLDHuGFSfwUWpbbNTYG9XY9VN4GXHs1zzjCMH6",
  "key46": "5DVEveztAKdZgZ6mxfAGz4EkTqp2Z7HQAqiHGXvvrQLhCHLF6RCSEZESFcPq3tTkxkjADdU9nZNwNisH6d8rYhwH",
  "key47": "5sN8mU7FfLspGmmzp6vvKV8DEsERKp1iGyQJKfKYkR7DiuQz8vjs86eK9Uz3jr6VUfVyat62aXtNLUB1Af7Xd23L",
  "key48": "3yPuszRRMudkrEiCTbRrmhQhvB3Z3wgVz7JBa3oNU1R7JmucMiBCsUg3gr1MWXrzL82XdQJgGDZBsjn2GYkQs11j",
  "key49": "3H8RU1kC2dyAZxCDF8eSrcdob9g9bPGRS3WooEVMc64AouxrHTDV9LAy5xrEk74imikb9hsMVVT4u7zqHwvepEPC"
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
