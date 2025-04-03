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
    "3J6JLGJiNfprhUHjgqx64U8nNxd3oBGoTrhbjAPY9bNvaa1gjhx9NcLjKMKkWpzP4QXGN6aBigfBmpKDFuTfrbcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c1wiR3sF1d67EYZP7gvBLVYZzTevLrP4Bq2sUySZp7DnonM9agXdAYmsdWLAKY5yvGcDXv93XQx6j27z7hLsGQx",
  "key1": "26nZS7r9RxHepF1cAaxqoMFP49o2GWvYQV39HzDCtLuAw4wyPoDhUddbf35Pd1w8M6nfVY2B8JQQy8rJexoVTMns",
  "key2": "3ngfN9UAKejyDHLYtS37ReBkeCEKjg4ZGrqteKYsDtAYNVgiGpGRHpMnEB8njokq3xYPawCcywnWyVh2qHd95Rx",
  "key3": "ezVsvTKXKzZNxjZ8z3PgauwMUVadqmc8qE4jxufdKdZAodTRxjhF8SjHpJh42CD9ntpFh4Ge2qHnL5U7TdJuVm9",
  "key4": "tfopYDkwKT5mw3Hr2PT52ZUQFk6NyGcgTPr62QJPqfMznYekQPbgKoNBbziACdBANsuxZtXKT1EKzdnE4PQheBU",
  "key5": "3Y2EfcWe1JV5Kv6pHkkTXhyWgQqh6kTbXDsXB1RhBWcWd6FK3ST7STqnhb2YHVuV5rnWsyyUz9d2qHTeNGfVBhVa",
  "key6": "394hs4qSiVG5w3uvuXsW5doRq8tbTN1ZcmtXCYtTRoihcmXANbUSuAyzYGHcLM9FCj1dvUUCvpBWQFHdKSZ3dmR7",
  "key7": "HKFkb3cea2WiNyhSH8tmi5DvQjqGuqwYNPbAnECrZkW5dXJs9GUCJLtEd8ZG21R2Fncik8dVqejiCzTFApyg3vd",
  "key8": "3dVhuuEqc6ckb65e6aBw3UqsNdDobxUWekQsFrg9tFJLnkobe1Gw9xakSyN1wkiT2T5gR7i3fXMA6iXfJdyS34wp",
  "key9": "5ftkRGKcwuagmh3nhr5qk429AXsYb1nbkDjv8hMJ1FJg2otZj5jRhWPwuc2Nr8xoVzjydK7dP5RVPxeLgRcPTSZw",
  "key10": "2FqGoBa69JcvoeNo5ZEdp4S3VCfvam7VYiWp4nFfFFpetYH3ssavdCKiC5JS9JYBSzw1v9pvjndch1PRHkNGwNis",
  "key11": "N3mzZpMJDGFNo8tLeuTC6Km5JM3ESMf1tahnQdSDu1D23fNqhzN2KCzEf4goQhiPfBMTU3uNKN6dDywtsFyX2sm",
  "key12": "v2QNhDGd9rEZF54fTxJ1NbEbUvaxE5ueg5xbqCw9uqGaBJZj5dA2e9oU9tcAJAJBMdTTzDFLMx2k6tJeGxiJewK",
  "key13": "3vj82H9tb1sU6vKX4xvWhnRX3ARXXk7hqFpt4iVD1KYHgicaYiu3GDoM7z4gLYo5jPcgLEMNN2i27Rc3pEGe1fks",
  "key14": "4SsD999BnPZRK3xWUQG9WZ5X1VvWNsnQMCVAKvS7c3hq8RcJFA7cacqCh6drytSyHwfV9xAjLBVXgHPZcEUjaaR8",
  "key15": "r7oV7qG9YSJm2NQd1RdsYQeduthUbyTJYcbRzJaWfS56jF3FZC95yrGugDCCmaTGunAfVxq2tgfDLr5ojyEXeoq",
  "key16": "wYXnJWvn9RBFZuo73qT3uLMqfFKonWWU84oH8dUETkS8JEjfd61jQsuzMifHGf4DyYL2sZ4mmqTXBCT3oWhKzS7",
  "key17": "5fgfUverzS6f5KVWR2zTc17Uc9dKhcjSJxoHGVMzvxmC2a2Fez83n7q6nAL7WBk2BHSutXkZuhNNtr4FyC5A8qfd",
  "key18": "5M36goLDnU78yVZ5AynFtEeqwt342dPnSC2e1yd2AYeafYp7Kc3tkrKPXxnKCnQqUcST9a1ZGRk1DTbm3CT7zikH",
  "key19": "5bJBuV9Xkh41qwkMv5s8yGZchKpywMki5ogKhBPV7dF8Zy4StnDCaKz3pMKXdLNdEumKSkgqwMWPkpFxtMuKzEgQ",
  "key20": "3pspyEJVNyadTfF5NuoUe1b6tprd6DgGeBJvy3kTuNwz7ztp14us9nBCDLicyHfD4uGcvFdMaD1GricJz6uwKSr",
  "key21": "5jCe4B6hhg4FSzqyTLwuVsFDKHW5ESwF8LW5SuYsGPKDAmLiD2MF28vyEtWeRYKtMihXML9EQJV1EGSarj2T8QCx",
  "key22": "3HZbNhTUMk9Ueidmzk4ndYNxbVMjLeN2ENGdkPdMFmyaYoXaY99Xqk8LSbbqJ2m3KWgNv1EhNm5PwnWZn5qx5EwP",
  "key23": "5m4uUHQRHiYFT4rNiyqcFAWjQu8fLYvFZELCBWBFwhsBEyCq5saocbKXWqxic3SKcBU4t36d2i1Pm7jvitacyYdq",
  "key24": "29LaBy7xmbGjPhoK3UCMFopq61jq3YmF6QDidKptaCEPVx3chHQjkepP4tgMipG7ag2VKYKBz7FAsRxLzmg9d3QK",
  "key25": "4iTbGhok9JtuiALKVhtF2S6kfeLTip6oyTkNZBKuvPR5ecEg3hrrZ7zwQaGZx7NYo8rqZ3qrboJv34vM7ozEqtNb",
  "key26": "3pawYL1PNzezRZDexLUXxZNivHiYA4aNVE7pTtToU5ZaHEuJd6p7LmkZfEsiaqDTiUxXiRG9ctdrm64akmxkXSX",
  "key27": "3QwXu3AHcxvS2rWbYjbrHqAZQraz17HPfkKWhS8CNbhC3vJE4nmkDX8nLJuk5Riu6VViYGCKZiJ3uPw85BbgNiub",
  "key28": "2Rc4RfwVvANrnB4FfLFbceE5fgwkAz88jTx76xK8vVjr3kAqCNEyCCKQCt6m9akjM5CTcMhKm8ePWoDxGWrrnVbX",
  "key29": "2qSDyhhJvNbC62kXeR1ADHyr9FnDuv9Dztwm1GgZUT5jegjT8GXqC4pq8fGFf2xJioaJoJhrMEUmwCevVgjaZsHJ",
  "key30": "4tgPkDhUfC5GxZQYzqFqvUMAr3zJ2kCVfbZ3ipn8ur2n3mnDrAVSiyzFfiUvEZV5GYwLuK42SVaw1gULXP7ZrAhK",
  "key31": "3VhHxguWQc47c6PjcGur3YEAdSKRZ1kVdbkq2sfpQUeTkEMcnMnW2WybQPa8sd9jYFk9Mn3H7bkByqvyXkViqyzQ",
  "key32": "vpehzjoNf5Bv4s127ts77ZUFzzDGQgHzaRswBvdS7LTHfcfLJArm7LTAApbbtLRYYs5rsoUKQUZ4zTWmsQ6otEj",
  "key33": "5mdDirP3Agz4oycaFjvoQ3YrhcHfC5EhrYp3ZgW5ZE8PtiFnhADjS28wwAKCB8pyF3vj3f5Q25nUvahLFJ1dmpYF",
  "key34": "61HBQREjn8jbNszCMUaqyYL6Fw9ZgjSSKN3j8pGnkBkZzEnWyEJofYSHqAxhnPfE2zoEMnG6szcN8m2VYUAQ49Qe",
  "key35": "2UWNjSTz1RYmheyLxcriWhjkRFhkBUQrhbCPcY6dJq566KoM3gBcdwcdkrH5sTd6PeVYBfQhxdChdyYubi4gs2dH",
  "key36": "4mbJuUWLL75detZRK62sTYZQXpaQCzFAKbXZDVRF3tbR7YVH3a5gHN5mvKq44N3SEm6aksCZsqGBWFYrknHBvTcn",
  "key37": "4jZGGXzBF4QGgRmhLaucUfd5wBvcXYfUudJq8MqgJatLnZjQAfPiRxhTyLi9r46rLVWb3ogfjBNabdSvU1euAUwZ",
  "key38": "3Not2BAewPjAsCEgEee3QUHGJH7TEo9G6W2mo7qyYCSd9bNJcaYrJwtoAstfJMHttfwiZyU7F6c2xGYBev2r5HCc"
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
