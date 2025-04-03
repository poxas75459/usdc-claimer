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
    "59xXw3jK3qHTnUKtsmW1Ym6u5HjxX5WXcu5XgZihMjwiCnLfiDQwsZxCydHvXhesfavyQ3bpCUqq1m43166BmWMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gpPg9m3yENirDgkwBHsUCQS3rLyP9NN8nHhhe6Fhz1CLypq4uWGzzK55snHn1SuViaB9ZmHDq8zn9usZcKX5mT2",
  "key1": "44VXu1VGGoGqLYxaTY5VAJkZMZuqnAqCPpMpqXtMTfagZU7NWyBa5pXR9zrUfCamU1srVesi8QLXCG7FMbB2YajM",
  "key2": "4d66RUptHegVDA1pFtN9x7WFJV3Vnd1yY8BC8Ce3u7RNgDyYT1Rbse8HAjRPwKerL83cjk7CyHKqKrWFdE9Ay18z",
  "key3": "5dee7uhkFBrTyZm8F5k4P2PXYEpZbYWBPYoC2Rqf6qFYgiWuuSEh71MiBpqXaNeQygdM7upQSeu5JqZUo3VfkUz8",
  "key4": "5vpX8u6cbLZhYzR5Yr1LCh1p6cuoBXCDAmKX8qnwppuLyP9uUQwQHh753RAjDzd13QShc59jaD1CkQRDEXZW78hr",
  "key5": "3z2GsGsHrkYzm6w79Rg4rbA7FQ9SMky7uV6Szzgpb5UwyVPxhUodEU7mC9CTZ6UCEddW5stznwDfpFmAmKb3J9mT",
  "key6": "yo1azWNqXzEqvTaHn3okPcGfgc9cNpbXdhmnha9ijTGtgCSrqwNkUxgNuZr7mJRa7tcX5sji7ZUXLFDhqKfEka3",
  "key7": "Btev5HarQ7eZto1Fnn1omNkLQ6NigeUDG9QJNsiUmhpEFnKznCT8u6ZducF7Bue3tbYvs9Vqzy1q4FaUT6qD8vN",
  "key8": "QzV6CSdcAe74ANW8VmdTjKg61QM1ywRkTxCwTtX7JYob7t4ebC8qzWZpFgJtE6r4ksYjPEV2pMfxYawjeZfXwRX",
  "key9": "5P1eC4sVWGo9C5Q17YBmW6SQ4DzFQmuvsrsDFsmH9hGMZ8tWvM2W5p966bpbmPSdrB8hQsPUc5XSZ8UDcVM7RdDz",
  "key10": "25RnFVQdVcrbLBogfY8mdpi1VMeH9GJP75PWrP2mEQccbb7SRFf8CFM5gCTC6XmzhBCMmeLkJPYMPQx965eZjAN5",
  "key11": "4Wwf1VPP8fdDwoaU5CiNzeZVDeXEZgwJZCJVuANkYxVeGjisrQQwP8nA5AWnVrNXGWmLAXRiJ4e7BKWGgsrmdFgT",
  "key12": "4qfpizcf12MBNFrppQvnw5WycZ3NwYX1LvXVxFTMK2NXJcY3ciHY2T4mJgxXLZ2uaC6fTbMVoUrHUY9ogp5pE4Zb",
  "key13": "4un5QhX3huf6HfRiuriEEPKwcAtBgPYUf9aLxvxaBzbXTpKHuyjACL8wzzh3s9UB3tv7hVDbCyTQTMcJEcBNPcyw",
  "key14": "2uDtysAEFjdwmh7S1uirC25KF36NEyY9eu57uYv72qoALLUnqVoH8z3hyMz96rihLLRDLmkguRLWczrgH8twwMRC",
  "key15": "3EzgJcwnR7ozzuXyQa76XScX6FTpbYnSnAwbHZh6beFYWgLW21NnhJDNXV7BY7XqnV5ou2ikvPiwGatJVQXzHtmT",
  "key16": "2KsfkPquC5uphozcTCvjE2YrapcVzLhzeLFfEocPSSb2S6VGuT3xoAQ3BeGvJxauHCWTsSwjeqdth4n1Gzvq7K9u",
  "key17": "2BmCLg7bwwxLPXVVU7oRk3uQP37jbtzMveUgEZTCQzerdkpFq6jFsrs3zqHDSTrNHPLvR1cwZk34LT51H2nLQt8Z",
  "key18": "4uxXECAGhj6KMFk3NJVwsEu3ti8BZc8SpBsjauCYE4wbGycHXVxucXVQMV4gqg6ZEvJYxdHGoHHAB8ho3iDNX69a",
  "key19": "4wQwQYnLNywepDFjSw2HnpadTpb49AcXbQK4cm2yhzUVsZb5xfaijhRV2dnQELr36SRhLSjZ84aAL7cNET5Hpjmt",
  "key20": "3ssmdCyVBQvraehrJ3cuMxLotVYc8m2YKyLu3gw4PJ5s2dobPri8fH138GYvRrtGha8DyeJ7v26XmRHWbdEB8oq1",
  "key21": "yrnBVQArXYupH9gHFs4CutZXaoeU4KjLDRo9DKyeCAp2V2iukUQsSVmgfbJFXHm2YzJvm5fb1bNzSqgqB7jwaEv",
  "key22": "51UPv3sGENqwYCKSVKPLx6qwMhucY8eaYRwagKyGKdkNqS1oNioSFYDtQH9VttRNMQjoSos9deJViNgVq9FUEhq2",
  "key23": "4fMjuuYdHgHbvXtNhXn8hCLfnRwWHQ2cVmmuzBtqitFEx9WFYTC2F7rC9YwYnLdyziEJxFvwY61W3DCgrtznC3bU",
  "key24": "3WtXyhUq8UmG6AdDjX4wMkvxRpCoUgXf8CJB7HQuTgV47MoQAn5a6fy4H5T149sof3oaZffxj2RrvjY2ce8JtyFy",
  "key25": "QsjiWpD5jfxnamND9zFR1XzUeCvUTS3hY6ozAvq3YCLurJWi6KTwbaBeKaWGLB2Pgd1nLdPk4F9Dr5djdvZDebk",
  "key26": "juYbJjQrUAnSY2Gk8gQh9ZoWLfbyXq4NNw4sDpVQVvcCrrMbXsuLc6fPxHpDUkHLP7AMddG9oPuTNyPnNFvg7NG",
  "key27": "3JVwhNyFW8TXKqzk1DWwf81mN5Umb7Kc8TCYjDNmcsLszzSAtzLfGQZiWaMnr7jUA5fuwcB3g1DM79gTpeFRB5qu",
  "key28": "46US5Vc9WREZdwRyYsYYo4o3koLEMejMJVATiBZ1SfHJbJVABUibbTn887cXGrczysJHEVMTsVcVRaCnuMP9g6AH",
  "key29": "5z9k6Z2eo1o41B4hzbD2i83HbNWNX3cuxWbw2HEh3uBNA61samNAjAD5AEfuNjbABSZtvNM1hUp2nb41ip5jsJLM",
  "key30": "5njnwhpAELJB39YGhGuvG2DAmrnbpCHeXZLXrYkkKm19eQJCZ8W3ftqwCwJewU7hPmizVaYMJw4cnFyM6Rc72Rbr",
  "key31": "3eCEeJuSAG7CwNUzxQvDNWZJ7KnRSfy12BQDU72z4enniFiZfjEstJhibrCMCkPrWp5eEFg1biWd9yiXaHDTKEZQ",
  "key32": "3avFNueLZan3gZVSFEKQjLpHwn1o4cyVq5cvfZSrUzANUKuGAjBBShhJce3Bww8tNnaUsY6YMBfQDH4eNj9YL8nf",
  "key33": "rouxx1h315omQkonih6fWKX25kZXCfihXLETELUi38rGB4wKWaDSDjyfXGVRcau7MKpj5kVdtj7pRfcveJx2prh",
  "key34": "4GCXtbY993QgNhBdSkCTKMAxErpGn3oswXAyCU7NydAg9icscv52etRXXScCoWjUb8SEaZ21jKFyQ4DVgDjYAqKt",
  "key35": "4xZhCkM21EKvbWJy2unsjYKV7h8Yb3ULMBVkYV8TKABHmESgqdQggDTUFynxNBns9ko6nZ2sanZKqDkYu62SwYXP",
  "key36": "3wHA8NGFXuYHUzKaX2ram6Sb9j2zYZuAW74sG7Lixx2k5RAHgqRBvQDGgHakrerRyH9adG7XrHJcoyJTdBdh7ofD",
  "key37": "837PkjGi74fjgTnZVMDYDnLag66QgKPgpwuubEHbZWDiUkf5EFTipuye5f2Ng4UQZQkHh71MTGASEV4BaRcyaKN",
  "key38": "3g49zCFjQWgcvTLJrL4UPj6YfcmDtx66FmA2FQj1XLuNpEBwFPFJo4fJ1CtTwnDXRbnKhSs81ZeZm5ngRSbUPaAc",
  "key39": "3zpg4FoUCyiJQLpVwwihk13WUn1BZeu86AXeXis45zrzebR4mVaXZ4ssHfYmTjNL7GVMzfZbApzryuAQSsSKMqCn",
  "key40": "44MXJVjebgteNhRZpBez747HQHkW9eR2GX3QiBDccrEzCpnUKnD4Vs3NZYeaGa1ETAnkLCkpsUcmeDNs8JDUf1Gb"
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
