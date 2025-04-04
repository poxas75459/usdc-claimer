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
    "4T5yqKiZfHahwc127RnbCfp6AHdiD147uvXcNfFK2NX8sfW157W9ERssqXeNUUKChmfdwKjNNZyMFbYsGi2rmCBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aP3JLw5v6RuWBPueFvhRY25ivQyxkHFxj3c22ou2WxTyd2phqMP9ePY4uWJsenDZbddEeNSmyQyzoXuAvvCkj6P",
  "key1": "emfwG7g8GQUxU4ryx4AdgW1AKHbFEnaJd8uxFVoK9uTBqatgYCovGaE1YQoFRNjipZgPkeV24n1xvtYAMgq91LY",
  "key2": "492xWtCGhshxdJau16JC26FbDgUXgDXtnpJTA2Dj4UrZA2mVWwBFVRvko7S2HsYGoejhSx39G5erEJpN6AeyBSyY",
  "key3": "2crikRdrJMcwPMSyrowLL5jw17UPuEaM2ZrsbBoyKq3LzJhdMypXn7TjE2S14qCAmjxdMXFit7htioKkQ3E9LPyJ",
  "key4": "hHkAZ5qS4GTjwVBz2MudNChZ3YgxRPBxSwpCDQerQSrTQd1Y65JP5HWHLmtMEAJ7GZ4N1Wxj5mQAMtdErvMiGHC",
  "key5": "5fn9XxFk4czBhgXTpVNnLSzpf1UyRn46ciAumBLBfPzf3nq8WXb5B76h5yZJvemMUNHodRNB7GGLtDfmBTAUEnVr",
  "key6": "2z7UwYRSKvk34hX8QDMAM7cDv75akrkdSae8QMPbHWEkrc4GGstHKMNnojYEhYs51oX7rDcK5c4hLhtRcFUqHiyL",
  "key7": "2xEygBQ7i2hfUpx4hJbZUWwgUqRBYbHHdnf7HzFc1tbeYsQuF16mLBe3rjGq912ZnoHgBSaajfU7a4kJDiNrDRQx",
  "key8": "5cBKJpZuNmWCjpsdfmZ5rfhd64KVNK8rsMNqB6ALo5iJFhUz8pAmagwma3f6s6phduKnXkBYXtQE9V9PP26y68NP",
  "key9": "4bYg5BKdeWVZxdL1oJK2evNresWBPNJynbP4WMszgSKWQTom1j1tGu3HHnxk15yQqg9G4LvLyfxErbVNQBAaMhsM",
  "key10": "4xrTnnTvtfiWPt71tFP9dFgxrESsDzoTqridCoRnsUnjiAs4zc1o6rXa8BV697xYiYk4J8JekZHkLwcYG6gxzMxQ",
  "key11": "34NHtA2nULykYiP4sJ1Yp9TW9g5opVG7y4XxKeHdHaTg3HuLPLXnyhujJ4d5hNvZM9oPxuKWxgu8s9kBD1dUD9g1",
  "key12": "4ppPy5hx8MuQQp8J8QMaVDy5xBtzA5UNxEsqBrGSHwWJUgik4bMQj8W39YoKBPW76wtgpjeYpD88ShQGxihhva1H",
  "key13": "339nYYCEpRbzc2ExF9C4VSuftxKuuS7GWzg2grR2QCAF5J4TMLJvVk2U86CTFRRV3TtVZAHAbvzYaRTznVoXbCXL",
  "key14": "4fkJcjM3EsFYMYLj7wa1DcvD3rvs9PS1J8RQitNk9B9pbz2QX8g6mNLNd8LnEP3fzfPMCNfgft7pnZzvj8TJhYxQ",
  "key15": "3i24dALEGvkzATXTCqdzvYjJ3zP54u8iZmrc7YnMfTdgW8c5YpjqUsiRZ7mQnWWM4yvGRFat99ajoF9fLqbfTcMB",
  "key16": "FS4tctm3jTFzFnBKjFkUDkiRQK4Lgw7nTjdV785FrRexYFWgj4nKbWVCppaPvHhxa1Y8QxsunQVhmSUUrTPd3qu",
  "key17": "3F2L3qXYFpoZ3A821RgF5FykTktRc1GAzFqxW2aNrFrFxNWket1tthDzkqwSqsn3S5pEuL3jG5cqw6N9gAqDMuPi",
  "key18": "4xHk66ZEV8X5vxjC2X8UEt1wrYvDnA4jpsCV2763dRX4ttjuSf97iMSRy8roYJtNx3vn4jxDL6KLBFaWroTA7z5M",
  "key19": "2P76gbsgS7omPAQDdGZ19nPe38gSHVTF33q4rvZx5R9xquTjhSWLwMS7zJmp4M6XVZDXLMSbth7zBR2y1pfs1sC",
  "key20": "5bBQHDnWevC5ZE9GFPaL2LbU6v2kLw6fq5VtqngUVBQj6j9ssoNXCjgTGZRQLRYvwafuFfzSr8xKg7YYFEhzE9x6",
  "key21": "4YZ7g7Asr6MZakDp5SNtBXHHTsUfw4UV8bLCgvMoyvNsHBZnMq7zKtQR4BwqqUpoW2maQCXSXroCVbQn9ApzB2y3",
  "key22": "4VpkPSGE3myeGduYyPTSXQFfmYqDmN8CH5dhNmvynVVyVJa2oam6VwD4zQBxD1dvyMmipSxPSFD8Xjuuy16YHwfq",
  "key23": "3ZApJodVzYFLqBhFwEbvv3LhCaScq2HUV1tV37ZcFJBKRvMfVzHBzPm1Bwo8jMmqDFWXmoCDoo4CvF8A3Cotdxda",
  "key24": "2jJDoX4ba4vCfgYUfe5d4oMXYxcuLCF7ioydJ4Np6MBFvrD3QTFBASy69uvpedY9oRJBn1u9VUvy8FrgLuCRqE7A",
  "key25": "2Bx7c46xsGsmvRX4nawHjitF3Kh6wrtLV3MzjGuqYBpRxYC4DGwQQrqXCkk2m2ESATD375uuSokaMVC9XqVdQfdb",
  "key26": "27RukvgPwagcoBniGfzzDqhrTzd7EytRp9e8khthoh5W51tBXD3228aDTejLpAQVFbs7hkgvRiawcq74SHU3Fvms",
  "key27": "5XcNx1346QDojF3DcSqbSyePmAbqgtrxpiYeRy8V69snUoFi7nDrtu1tQ2FNwpej8sSd31V35Y6nMaNh3KHpSj4i",
  "key28": "2pcaTQgzvaGrm5q52pLence8KBuEeKSSdom4sfXEBDasNnV8tEmMcsfQZN9UtxPLAGP9b2PDwxHAYNAYC3B9qv1j",
  "key29": "5DUnbVZQz6Gvv3UPUmcnDkg5YSetp9tiVkc6NtwxqsoicoKGHSeQd7erzpFtyvH7tEXWEktoa3ccqJ7JCkvpcRrk",
  "key30": "2itPGqmy5oKZ6hHAHSk7MzBnNYFA1JpZhfRhAsGTDYDSHrdKUmy8L7vsnKky6cYR2XjdoWFE1FVVEVeUbiRhc4gt",
  "key31": "2Ug23bCYKD7KokfMCScvX8Bwwbi6BKaX6WgPb4QvLGN94TdgUhVdEkgFXuWUcJWGJ1Cy47KTPY13ba8DPt7duAny",
  "key32": "4oAf2Zxnn8wepTqnrVWTDnj9M3qKKEWBUypuReV8G41VRMsMM9iqyxo2uCJKo7ftueUNGUJk7h3jmgiCwmcrhwoS",
  "key33": "4EXFNqzC2dmbauvpFC59GpAVxAjKhELTf4L9BDbXZKQhH2ZFP3xNf34De5WdveSPfaZoeURQwmbp9k3fn1wZvmLo",
  "key34": "57P8CyEKPAks5fTzifXwFqsGP2QHEevjJCSCifU9W1YQJtWeqCctFqFhxGMBbtxZii8kHErBNB726KJs1pAS6LvK",
  "key35": "4WSuafueFAZmLcdGrgcpHbXo4cZ7Z6gE19We6TYX7FzJD4KUWcNcyjnQYoV13YrqbGktjpbHdnpC4pKGkSfB889N",
  "key36": "8YkeVysfNgH3mineDyXPkuAL75j7aGu1h1Agzk3ju7wKsituEmzY9tcxntQz5BNi8ECT4iZXbTWKr1FK4RY1Fhr",
  "key37": "Z4mGnNydyQuJ7WwyF76QwfJ42BrBCfBu136brdksxrjxZoF8RZkBqYRcwzanqEmg5KZYkKx6N6tXtQxdDUYVzhz",
  "key38": "673xZf9ndug33QUEZzuY8uJk1PDZeBxAiJHyLrQiwpK2CzV9vALniwLAme9Ge7MSm8yJDJQPgvizjN5V3THj7qF",
  "key39": "2S96L6ksTgoTqkvbikbipncQ5uGH65aAwnTZZW6p2Vit9troA2h3HLptZQWS1Lt6gs1hDBB9j4NnPGWAEVdrRcop",
  "key40": "58U4EuucdKq2yU4e75j3cjKQ5MdqWFHM4gVk8yfcboZRf3peS6h3Hra1GCmw4E6zpMX7vaxy9njr52xDX3y1fbep",
  "key41": "3t6WbfM9bkrt4P5UuGSrmQWrxe77zjHeiEc3tRjMxrkrk8hkwjenkY3GqtNSW2ABA5wRqTPwRSsCB2RSChm1S8Gf",
  "key42": "kMkepoCro5ZJSUmpkTRtCeYXrfKgkhGZqbzNVFDDKyAjvZM8pgirmcJSEVFgh8c2aPJQvgccjn6JA9dsWypVKGQ",
  "key43": "22js8zjWscrxGsqdckTbfF8Epr7bzHBwgmazcBueExLqtd9HFgBa46KzpTa9LEmBXuKrECyMux6AjWa9anB3zroX",
  "key44": "d1BwnQssrV1CrSSWUwNAG8odK6vTR9UtfDY7dJgYGDaC8LU9BEB1nD6Rxb3Awb7CL4VzPt7eydLbPCUDXbtBUfn",
  "key45": "5k41vDPBY9FLuMeZ5AJA6co1JhG6abWe9fHmoeh5GkFDvoo55ZmFADec2wYmbS6EVDywXmcinjBVaRprH7r3RqQ8",
  "key46": "3TWtGKFdh9C4i2Zn72i8HLNGycioPyFTk77bCVGZZTffHtXps8cqxostJhTDjSVfCknkYXdyxtJuGD8SwgY7KXZC"
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
