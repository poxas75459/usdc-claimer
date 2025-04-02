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
    "2zG8HxcyEA7U3HfNP7XX7vKvZMqakq7YaoatAVLqbhs58L4nubJKHxqFAe6iEhK6GY78Lat9S9DscJJdDGtsZbpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52U4jYPwjxX2sod5dw3ZcGN9gMKggdatLgdUhUaJhARamFXYS91yh3fLRo9r6WMqbAmvTttmX2XYdD5iFbSTt1B9",
  "key1": "2B41MgRN2qLGTz64e9BQq4mS18uB2u7MkuVNoTi9cYEry5AkoaamxcSrxyEsT768XaHARySths3szKeyJQQu4KWC",
  "key2": "5ScMNAz5CdV7s2Jt3MsEoP5uyHaVks2p5fYjE5ErFvgUbT9pEXycej3D5VCxaqXQND8YYBiU1jDJYp5izmPv1e8Y",
  "key3": "TvARERhTDVVeP8iUSKupxhnJ32oy8Xu2mZN46wpc3iTnTf8Vh4cktJLePZMmFSX8Pys4xmvbYxJtiESquxF5iLN",
  "key4": "5gzarxiEtRTYHQaFh4rDD6Y3qaWhSgBRRR2cdYmpo9HR2MJd7U71HkUCWcdsHsFvEmjtzAFRcxgHHfqiGDb8NEtE",
  "key5": "2Gh9wP7qaC5vbXdYrRnQgSnaHYobXv7SV1aSraxTwLDU44yfM1KxSN4EQ7QGoL1JimPzNAC8oZhZqFPFNczj9GoL",
  "key6": "3jALYchGWhsQQxzrGLano3LkgQQeM23MiK8BrB2RCPZvyuPT1N3jASPrXLRN14AqcJGh9QHhpLwjy9dUhJQ3yzV9",
  "key7": "s3s2LFH1CSUeb1UJ4kAgGzGLNUUMxM45kZFkaJQrh2vvyPVUyZAbrxQ6TWxAiFQxKTuNQyWTZi2NvQdL592cFgu",
  "key8": "61k76dM4tG2zwGC3ui3BgfNBaYSD47HFKcTaWAK5W5WsCVnyw1XELsTpfM9PGYhZbqhY65N4A7AchBq97MhavmtL",
  "key9": "urNPLn6DMyudmhgWe68jTzkuRWK1MWC52tK4ANPg2TC4PPhwbwbiVMi41mQtmpqDkCmhVrfLex2sPFLRsDFLhw1",
  "key10": "4SPxwASFoqPFTSbvaEuLiqe67jHADyCmzPAXAEp85ahCyvPR44PsaT9hanEK3Cu6CSgzYjzVVJettGbSw3D6k3cb",
  "key11": "3FgoQbhZVU4Noj8sAb5TepikLLWn3yAAT31EF5N7WtaMtcEj1dmTTY2MPfup24NCZPLKcyUNHJE37vamWJEyTwpK",
  "key12": "34tPUGFBMH4kPwy8HwB5BLY2WYiQ11LCFFoG7UyY949HWLWumDp5GdmSz5u6uWXXJH1CHU6CGntDtmMtmr65pUUT",
  "key13": "4EGc6bP5Wo9MQ1u9abRZsqazWyquV9jxJ7LjWh2FjC9BwDqpnk1RUNQWs3UR1XBss4QjgVyUQatYLvv2J2yBHqR4",
  "key14": "2cXjPtnNhqp9vsFbMS9HAx4NXb2jUHu1zqZzSKGyGarNL36iJHnUwt1Y1ppm7ukoeACbiPNKrR7nJZ9bgoA4w8nD",
  "key15": "e829m5vW8ygbCm64JTDYRdSAqhaanjZVwRiP6CgeoVruGNYwDsKgLU3xsK7jSApGHab1exDTDWCQzwqW2WqkLm2",
  "key16": "GKn33BXrxkrbPNaM353GWVrXvSSdUEJPX7Yrr2YVwLRFdMZoPVYNwh6WWaqDcfAUJ5T4tzj3yrKmnddiyUuLHm4",
  "key17": "4ivqC3b1DPip8nCmgRjV27ty3ysWYcukGvnLXFTecLgjYUeu9oHkUcmf5n3fLy6f2PVPCtsF2arX9HyXCU2ZeB5K",
  "key18": "4NKkcwFyrSndutYWtxhgDspYhuMdYKfZ1mtinD91XGuwmgy4VbgeEBjEeEXaTLNLz5MLE6vX7H9mvi1z8VYnYpDE",
  "key19": "5UrTc3MMt8qAcNkV5a3QQpKkHWfaGX9Rgss8drGVHaA94EZDu7X5p3mUXRP7oaAEf4YXFXrW8skTwZJDehbEMZkS",
  "key20": "63V6wRH8GdWfST8DVnfhaBP9ihXbHYUetsHT9KsYs1b6sjBMU1dUWWnwPPoxRLfPwPQnAUeAiJ1ei351hPYe4i3c",
  "key21": "2Tw3TADZVU3bzAM4xbofV4BcFKRcMdM52iMDzD6ruFxjVsupZ6XSfVjM1wPvSRQnXkMtrzJft6DoAfH4UNadKyaS",
  "key22": "4tjo3FU3m498eBC2pmVbgjt5FAYtENJAqQG6hPATwbZ9hqyktQ3m2PbV3TvKTwhcfkfDgY5MTcQ1skBjJtXrAWqx",
  "key23": "514PZsp4e6nbQwKaf1LRAJAkWoUbi52GManHGGCxvCj14b5GJPWEXMjx2FdZLxNwLFV9cHptjMvWta6UFTcLiTes",
  "key24": "4qgVuHmJqJHUtayf1XsgsKM6fPc8mbk5MYhKh56C5A8sHekMDVhq5JWpK9ENte6y6wd7vAVecuFCZeB6fDYJY4wK",
  "key25": "4WikxugjQvTJX94LCWYMGyu5NjgPGXQgS3Wmt4KLmNgEKMwHsX2RXmG4pzE2N8c7ifZueCVSb68rTufAfDCoVdMt",
  "key26": "3fcxSSA4N9mAEBUPFBhHBiU9LqodhxgNzvh2Vyv7F5BFkFsmTdjcB17cHsSWcL49W9HRUJwhDLg7HtsLNaU3Aqu2",
  "key27": "v7uhvQnAPdEGU3zsZ8ZVr3NSGdm6hHwHWjWkEdChLFTyaJydN3jXDNBuCoAX6N581mKj2kWZgezDzHs6XnqAUp7",
  "key28": "2vZ9A5os2LWJB6fTsifxXCXYYHs1RE43s39Ux1hYemnZi9ti7kMUw6RCeVPVYVG3JTc4pi2NikygYRiWiX4JUzB4",
  "key29": "3etntWByrqjVEFWPJbGixiii5wARBUhCdmdNXoSCZDFBLtDXn1VfxD1XS5M99hQ4V5FqZQMUQSdEXmhwL13TXMA8",
  "key30": "5gw1L7M8B7Km67t65t3weZLwefFxxXMaDuHDxwe39TsfKVKyvBEoLLsEvHzEZ2Jn9VjF1sCt8JhH9D1LHSM1Euas",
  "key31": "4GDFX4zKRGurNiMjFz5bzWhxJtjH8tEiUjB5HDUkQ2Bts399UBritcuqimjme7tzD6e4TmmXvBBnzoR9VtRjcCE5",
  "key32": "25MDCy7j5FurkTqTMGx9A1TbVokSDs8gZfeW48wjjqzGTHqFYznjkxSQ8LjipKXHRirnnHyyXTvUU7GZs4jkFVu7",
  "key33": "4FLcDMW8PprQDNyM6F67S4hT3mjPNTvFo9B2mhVaucE5A2aTHXWb7EWdrcj6y6xUHPBbTXADLWvamJ4QhRuUFH5U",
  "key34": "4gBGzPvhVesw83FWjAiuu4XuEEUtCsr45YD1VW9HGPhFxFakNPYWZYg8PqgVQicWoyzdRxRE8mfw5M6sNhpD4hKc",
  "key35": "2zkn6kaJbuEXEsirWZeRmFNn9LTnybYSB6WBUr6HSG4WYsvB2ALZRyMsdUZQkzhDxr2tivBG1i3AVGcgE8wAoKrw",
  "key36": "4hKyjU8o7rwdPN9xwQrNpWx8DCELJxApHVfm1VoFpY5zMs1CjxNTGU5yfsw3xhQ8SSoUdmxkvECxNZS7WET6uPxk",
  "key37": "3sgJDhcTMxgHwMetXWbX9uNEXhabmVvcWYBPRt3fFNSQQkpKrJeTsKvFQnLa5UEJ1Pwucoq55MnaUZ8BPKkTCSnV",
  "key38": "7ZXPJXmQUc7aDA1Sd1djdbRUAiBj51S2v1dwYmkCJFaAr7Ye7qM5tEuHrus85cDRA1dn6833MAfLi3SWAmA5saD",
  "key39": "5ciWGjPijHd6XZccak5gNDv3vLKc5Fq9ZnMoDdogCQe4AHCXJwxwQB5eg1bwQVYbchd72iLEnrLaaJ73KXQfrVzJ",
  "key40": "4fAJjNqaju3yxpuFUnjVrAcqYq2ZedKhYMv4yH8gJgYqn5uzcGaWQe8xzwKYcjsgzszQdAqrGSidGiZ9CGZydxFV",
  "key41": "4bYUcNe8k26fh6R7ZWnM8vznJqLmNDd8xjnVXRX6gRQV2eSqpjyAef8HdvSiN6Tf8w8CFsLxYZiDrZjn7vyu41KF",
  "key42": "8PCr5yBM4z3yuCAWyGMFoaRbeXJTRHC4Cz9Q2Jz6DLzXQAN6ab6SJeLWghGucPGGcCcuX4xWmNYLiAHeNGHWkku",
  "key43": "3a9d8m79EHFPqAKGjxMDU92GDBRQFA5U1ukGPXzqwcN2oyFy2UKraKo8U9TTcZ6mN78fDzo6j3ntBULVPCxyNnMf",
  "key44": "2n5pYi8b919TzLW6G7DLGgHjhq83EyWxRRQoUURFSZTuzHGsJFVer6bsjHu2qxoTcgRiDF1V7tfMXNFidVYdgt2S",
  "key45": "1jkvo2wRtALmFLfWgwgwAX1dhQw7YEFD4ckVf7PTDEoyUfJbDDcHQzuFHch3CRU1NQa5CG7rpLRjtw23TCUujZC",
  "key46": "3BQa95Y3wKn9iD64YUsumNpJkafSUE6kyRa9djTjiv9XBTsnFZMiYEzof7Kz9WaS5o5TtYAuzRy8riqpM6wTBNA1",
  "key47": "454Hy7vVgkEzUdpMV3ofEryiMdJgjaFWwDWmU3FSWf35Lm5yYwp8orP2SvJYSTFWwduV531YQGyGzVW8TJRBtAse",
  "key48": "4R1jtjbFDZBEKwbeEPF4mNboBR3gtVDJdQYJpjdgDdC9EumvzafzspFMjuiKuDqQRRTdeKdn598MFE56w8ZzECuE"
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
