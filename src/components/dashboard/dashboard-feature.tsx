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
    "2qeXmj8TcQyDWQxsA6hPF56rmnjt3rTejvgd6thWLQGYN7FWGpRju4XaXjc7SUwqWDhHnACujvEQrUXJ1jnGvdho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M53Z5f53txNfg4Tv8qwwqwd4GPVvkMTdq5xuqWK5WXf1E4VcJ5rG9B5F3msqRo7S8yxVfGbHWBXsxa9KfM6fG1y",
  "key1": "42XX4b71bVujqNwRr3aJfULbMbueJGn4B9D98PfNuYm8mYgryNyYXenQkKd2wMxUrHkTzxMYRvgG1222mjzRWsJU",
  "key2": "674SsuQX5hhpfviTFbh7qoWUkHpKRBXFR2T1jZXeQDbM2Cp6DatMSK8nWs5hGL6zt48AxuMkgn4HtHDGRe3n6ank",
  "key3": "5CUmCtpbFkNYsCPciKLUF8HRuwT3ymE8xqihjPLVVuhwoWVnc8w6gqQYxJeuQTCurUhV4NNBdSHd9kWh1sGk2iFZ",
  "key4": "3sB9qrxDJyxNZiYhdGyJbKyo7WLmsQbaXZMQVky4UqYvGT59FhML72eUF5bkbT9Q4GmWyDRU9nPuaGcEBMLs6JXv",
  "key5": "3KdQeRXfw4Jd5twXjbm3dFgUvrUXPzUSxCCd8xzowZ5a2mmJYtwqXgyGsd1ipBKwUbKySnDfNVXGZ4RTKvqmbCLD",
  "key6": "a8u5Eyr1LdaovgVfyL3iSvGYzhhC2FHHoQ1wMoXo9rCH6cqBE88y4s7M2LxaSaPVTdojQ4fVwMsqHFxKzE6qWgt",
  "key7": "5c6z2t2EYsdiwF7qmACXgRjhHGrvP5RDFkekJBp91s13jqcaa2GJ6uoq4GReQjP5DyS7cCt9KHesn3tCGbJrXU3Q",
  "key8": "3pQLZvVDQ2Bc9MxtzufR5V3onNdYMpw5LeUPzrArLipMEeBWyWnVV39ir4GKEva9y9r3BxNcoXJu7pPmTo87uJg5",
  "key9": "3ZrG948wDHPx3v66rJWWcrgBBwj7UNjwQFVydjXbp4KyVPXLsFpkehZVYb3uBP7mUpH8fjMDYJwDRwE1oVdnR2zZ",
  "key10": "2EAXw1fAkfAfqCA5XtZW934jGXHzkQbYnTvHQEud7SBGreoBmpTDMKksMSjhyXbj8wKuq5qNxezeWWsqivgVt6hx",
  "key11": "3AJdCroR24dNdgSAkabTo7ZHB7TQDXGfZxcsvXg9p7VEWs4UkWarvu2YQh3YBNN21BmeCRBxvzGK9iM6RUtf9si3",
  "key12": "2ZutycUcduodAhegpAtQUDW6zRXG32diRmA6VFVZgbHNo1X6XRxifNP75AKnMwdyu4xRvdRzDYN21b7jCVdMjtm3",
  "key13": "5syotswWigCT6UM4B22CHdQiKPecNJr34tXQYtcREj26jbv2sT4D8bZm66T1shbTZcmabin73byaoUR2rzndbmTK",
  "key14": "4zcNnw8Ki4cjstNNE1XKqSmKhkXwoFSymJoqvA1UoA2rK3A1QrhxcXAxx5mBbEW8tU2vUKB8C4f8MhuELy6ye2Qa",
  "key15": "3dG8PLzFmMjkk8wknf9tFd1s6WD9pWxxQX5dEQfq5FJcU1LGEmQMoR8RMdn7XAmZGjna87r4d7p3y9mrncVTi5kF",
  "key16": "UujXYstZKeSH1RTbR3fChKd1BP631PB7vqvferq18uRqQv5yU8TN9t1dNhDNxRZJexsR8xKN8ic2d7ifNePCyUF",
  "key17": "4ybh4hTuHoWTBhiGjg2DsmSC68tf3Whd99sNCWGhZuyiVeFK4wiYoPEEqUABw7Zp4G4z656XPgLc1ff4YNMKA7oi",
  "key18": "VcAiE3ZqdhEDSrNacya2kpL8t2JYBJVPvJWUNzf8Qx1nxHhcdSmXU87bNFji7G3irzHSU3DQj9E1QnFB9tq47AW",
  "key19": "pcBDgQZaAHoQVxhjbUcPJy77CJadKqkcN9fNKnE4xDGfW1pgFs3Q8M7YCdndfAsN9xYnnd64otpSGqxMG5Jvod1",
  "key20": "i7b2NwsS1jR7xJ8huiLGpeqJzyUM8HVk1rriBQgfmH7giQbkNi57VmFuPKFxZunmvjn3WUpgDuc4P3pnsMDezyr",
  "key21": "5GG5TPwfFdXDVvX1oSphsneZswUfv1fqeU94X37nzx6L6Xs43uP9RyJKRYXKDqVCFwhCsvgzBAS1LMXVDye5dHbi",
  "key22": "3VnxKXdB8ZtLSTqA1KuhoVbagRamrtt1nDZCBCKws2xFN17RudGDQXXKEMMajXJUuaDYFkqNVUos9M3gRSPMAF92",
  "key23": "2t2UvaV63iBVvLtKo7a6cn57ihCU8oi213JNVjdcra5ZTVsLJDA5vyhVPjaiAvxtcrtuZZKuohHGP1kMWqa1dk5A",
  "key24": "4yRKJYUh4rN9bKrpyEUu7VY6BHfuCQdFNh4RrDigjsF3wZYBRCTLX5TuLQnJ8bq14uVikV4ekNRSLUs1AJwAd7vJ",
  "key25": "4fAZG9geGejaZaCkAFCAX7DwSL6PDTXMbxPWtkLP51DiHNMv6vbYR1uFCkJyb75cABHtJkFnK797L6DLjpuswf3Z",
  "key26": "5EUpmcRPysjaSFUHwusDaPZWGXejeYA7oeuLjwu8B7Wo2eEAwf3sUhZZYQc7x3iLFJQB7PGtPqHdUoVYCe7KjTWW",
  "key27": "3RntMPQdmhowEAK46fNxoihxS2ZCknREuUyftuYMXwSqzqBpDN56C1rXx4zm6izGUoxvXr4NhbnrT7R77veqc8Sc",
  "key28": "2fx2JazGpHdSoLqKFMnWCFYFKdo3UHwHsAZBPjzBc2hnzwFxcqESsUESSFL2f5NKgsWDHBd7deaGq6Apr9QkSJcr",
  "key29": "3RbNXxcxWftukRwpHRgTbz9AcPkFKPfF5bdxjAQfcZZaF8DBYDz7UpMq6F6bx6HVvTGXYm7iqKcqkALSSce4cekE",
  "key30": "4ProUZq9B3c5LHJ67scPTXtkF9nBuytPpfEUjhJtYDmVkF5KNTwYPTNedKGjW6FqXcrxF73As4ajUySP6AhMfYmw",
  "key31": "mXejdRxPz2X3EEhLMdbH9WFQqi1sRSKb7LCD3UkPTKEFZLhKP7H7RiuitQdc7h1m93DvhvdgQQZQq6U7aV2JJQE",
  "key32": "qXEtebKvf4NykAgbtDH6rKNUavLxyB39dEiamGuN3SfC6E3kCskfiqhqVy2roY9G3wHTHhSztjSfVBUPSNeHgTN",
  "key33": "64xNuYfVr8FcnhdKj2bB3oXXgEMvngo8VUT3YGuj13AT3ZJX9Vc19a3RPjjmefGLtPGGjNkZQfwStuNpKYR8nJN3",
  "key34": "khAeVTVPjZdnHVQcG1iyrtpnJdx86GrZzVXqDwib4bn2hFwWzmKsdGQhztoDVGX9CxZwRnYDnhCWGRMJxb7rLj3",
  "key35": "3YZbfaXUMUTc2cLsY1R5QnSdpMRcDbYbfvMpjLXy4LuGjipHAq3Fd4vRwQUYiukionmspkdc3Pzm9JcTsvkgeJMK",
  "key36": "4xKHfReGgyVDhj5vJz7s6woj39191q5kZoFkb1mvdxSJXHEwyE2HmXRTtRzSnhBMSBrhpa1kh8SoKdGvf9L23oq5",
  "key37": "2QXjPYU7bQWaqpjnJqRKFq4pZDnf8GojaPqMbyksuoC4atszh57Ae8vLTVakNoN29Wv7BMC5JpJzR937Mdj78Bja",
  "key38": "34xkSH4hLVdwPwGZkHnZA9xxTQeqko9MgXaFZAdyVAkUrcm6UWsf4pH622vp319SRrDnm9pAQ3rrfFRTR3KujJFA",
  "key39": "4mHZY9uooDr46XtSUFoYojCQob8Pvbe1C4NxPo2Gj1ZSw4KTFqFCvpmBQs7BgXcTynyqTkD3zqirfw41SnWQKfUW",
  "key40": "31qWJUJfHNvWk3ygasEtnjH1EsxaybfezuNrPbKBd6ErKQPgvTCJA6VpzJDjBKD4tzPnuEfrgnABHSKang8mEZT1",
  "key41": "oaoHNvaVEfHJgfv92kXsz3wxqWpcWtD8qnhDv2hu4ULA6AysLKZEPGj6ktVRYt1CWqjAKCKvM9RSjg9RExSsmuh",
  "key42": "4bqZjfmsDvX85G3sjrU6rYyJLTG5Vuhjaj8njMmfsTJrtDkpiceMaoWgB8Z8NgE8AQNYDARXxwNBTWbSwF3TdcWp",
  "key43": "3bJsjSJxWWT72UrFsUrL9T6uXUeFr8z1YsknV5ph8oV3io9RtnvndpAbC6aXXMnDBAooiVL9PiYoxrvCDQzdREAH",
  "key44": "5Rjm1W5ri6Z75FnHp7WFpGpL2FxhRdQkQ2uAueZbBWkRp2fZ6bpu2JrcKdF29robZFNMgJF1NeUBtSnTS4pcADuP"
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
