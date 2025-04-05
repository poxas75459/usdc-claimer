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
    "2d7fCFPHUqbyT6YnAJQLBWyT5DUMQnMWZJuFP9c3Uz1bh9XbcDSJbJk5C91gjVkGWobbQqFbDG4oo2VUbFzg1RzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hsGXFDqYQz9nCuZapNf9Jrbh5aJiULhEvLcDoWbuwWGjHM7VrT8Mwq3Rojco3khr9ba5M8iCwyKtfwJpNEc14Kd",
  "key1": "3DmmKnDNXkCR6aFdwapiW8nN2wsZzwbXWqrPsXrUPEXtD2mt2mRgBVxHrXdDhWBsf8cTJt6W8k4nP3JewCrtrx2w",
  "key2": "2PPDKj9vojkhfBvMfG5v5UqSpLdDLeY7f7WK8bWZwT8FUZTF8j5S6kgD6R23HQbeA4eRfEMnTjXxX8vqM9tdfijT",
  "key3": "5xMRcL993WXYeaR7CtnBbXUsfWq62uwVNP3gcp8sd6FQ3asrEw8HhFgeibaNagiy3fU3S7yUpejp2GdeJjQ46tyC",
  "key4": "55cqmjR2jLZe2Ukqy3PBvNDfaw86xXwkUA7JybSvWhRJeLT9ZuCG45fkj6UcU1nqrQsLftfMqAehM9ByjXXasdLy",
  "key5": "qm7xRzz1V1Xoo6kJgmrnKZyd53rjYQe93mteuBM3YYsRzDCoGVEz389GATXPh8mcSV88gFN1n8a9d1RDy661taB",
  "key6": "5pKUFkTzb9fKVMKCfRs8WQ8fLo2vw72NHf1xYwpumnoPdHtJSbDf8CNfoe9qe2nvGfKUsW2xASYoNPXaJsMfo11r",
  "key7": "5opLpvFfpoMFbX6gQ8tU7ZmdmA4ni9yKs5DPvjwtZnrQjjmFoa2WTMLg7YbHgk9utYZrop7zJGdHJu4DPc986Pa8",
  "key8": "2BkHEJGXpLRZnf5KhoCX5wTkMN4F7JNDunvwd8WqawR6CTPB98yt8Y5tEFFsMmnVVXcXHCxUcwvwRTNrzAfEoyov",
  "key9": "25xTQN8WkzYwTRKqLrrf7Qkj3eGCrJspiKt6NSSPgpbg5hZGJLoSbxnBna3Q11evt6akDqcmS4AnobvUKMyWVuWc",
  "key10": "iP69L4qYdRrGvCmX5RzvL8t9qRsKNj7ehTjuad2bEvmc47eJRHTTffHVDwnNDkXiBhKmiEho1jWV1Uwpmvjen3J",
  "key11": "4kk8igvr7cBW6ApXqKYMgd2v7X9WLfFS2SbauYbcBrkc5M1rcxWwKQnw2UqwKUGZMkEbgv2rYBY8WB42N5fSaXL1",
  "key12": "2QgQbfwGdLQZiLKBFWaGk1kjiqk2cQZHPNsVRpGVRtJEvbsu6wTSQjkmtgeqJ1UKZ71WwvYA3yQTFSUfADtnwPHJ",
  "key13": "4foaaAkDUXUaLnf2sJBP3o2vHmLhmLtBHicoeJenPbQhXisFREy98cDfBfepiiMopy2qWwT4QojkzhfM7csy3wN3",
  "key14": "32qFFturCMeSY7WuXWbgNMXmX4jUgVfLv69JX9uSdWWq7Cobfjo4iKgV6QpbCkqRhmWB4WCFxcXGHuLpnaym4A5u",
  "key15": "6ghnMK4KtRLBYKTNomRw5cvHaXnc9hHxTSU54hgeSxef9UK2Ha3DjicRYXigSEfaqbvX8A1Mtym8qT4fdYsYkfb",
  "key16": "fYJu8D9bQpZd1noBssZhZmnDL68R7sAioghZoe4GKfPGQmZm1YxRdMYL9Brav9U1bnbf98opa5dvZyh55hBYova",
  "key17": "3s1errwCfuSBm6YdgU8hZk9GMaF7SZgPZZrBAQphkGmWWeo5RBHV4khaqqgKMbkqWx7bJxjRudHGyFp86Zsf3WKn",
  "key18": "28VMToz5oNuWQysqaKfGsWJxB7Ct6yd6Uukt1ye24bJtMjqYCYs5MBicQz2nJxYn5HL8Gqc7JLibDSVrip3t94NM",
  "key19": "5KYdZmFUQ5d8KgLdCMgaEBdsuPGMceXgQEMKCGJcLy4SVqHqzxUYYNghekPDosPajubv4sP8Ezjx9vhbKip85tmY",
  "key20": "4HxzLxgsVxwHp9RTrB2SSnj4Eja8veTxuCCTd3RCnU1Fpo78MEjru8xFbJp451Bbg1K7vREyQz56VtAhgjiexDpu",
  "key21": "3dx8PTNfRyAXWNpeHUorMf1CFZegPJtvCjQSjLc9zU8oyS1QhKLW28fXX551ESDt118aZaE1aw7kLxd8RFRkQdwj",
  "key22": "5FrcWTjbgaQxyMqKqf7Ed1EN3Y3zmVF7TQCB9sXPr6kc67jiRcLCYQT7NkPi5qTqoHuw6W8qAZ4rc1vJKHyhZqq8",
  "key23": "4SnM5c5AUmaac8PWACw9kzFfSWT7Tx6wAF9N1hzoyzFUEa5CZf5ngnurwxiAVJzRRpZMWxqw1aGb5SpBq3qbts3E",
  "key24": "2LqxTcrMUpT9NeSm31BLT25HrD9WxLnhG9meTmUcqKddV9MgFdBfaApqMf3yJ6KFAhhgtu4BY22LURFfusdBrzgW",
  "key25": "61amnjceHf4ka9d6NPvewt6Sgjm83c7myGkUze9xWJrgiK2jqDyfwcPV73QfXf2bBpm5w9PA7wLkT5URVYFGPdzx",
  "key26": "5AQXbo4VmumCWf6yayAZse9etSXC5PsatMWYW7yp2kMnszvw9p4BMabkJaNm8LTMvsZtM6EeZnPQJBLQAgTp2mfG",
  "key27": "DB1jRbRA7hk2hfYGwVwu3rDTy18NDXsWtGLojqFGs96zHMxvDzEGieLf2QmnNvk3DthPAjUGYYxxmb2vX1py8hU",
  "key28": "3HFY1ie4K62csBp8asqMH4BgJu5h9rK9SWRhT2QsGyX3CcF7kmsGxsrCmCJZBFAtrZSPfCxmxzCYgmNe3QEVoGXz",
  "key29": "2gPWmSKxADPSAfJRh9ywpRzwMbrYJqYeCgDX9vWyQeCirT52aMkdiG98tGXhU4BXzffw2Y7swvpFYBZfzrLcriwu",
  "key30": "5o3PxYxm55bzLDDNW8Zms96fZdSPVyvJCMbbbr8uPxTwiGGAmyzgRrB2x9ybbCB5MLr2YewX8vmhMypXHZkkp6E6",
  "key31": "2PRAhTBEwDAE1iApTB3f1V5oHZZaC4wAskk1xHBDbk7j4uJQUW9nDryZD8TffjK2vr5WaVY3FAG7HCcAsBjjVviU",
  "key32": "4btke98rFvejbx4GcnnLZhHo4wzWFWkC7ttJMsBjFrYiqCv6bWzqJLaxGbFZiLZtqA5fZQ3duBHkQvS8XQExmxPP",
  "key33": "BDmgsXW6xyFW9cp5bwnpWXK9ZYwtxazAw8kuusYLdZkJHzNXh8RpLGxM6G1uJzMwkJN6nxsNJYpm1sERT9DbyeF",
  "key34": "4CRinmbs53Hf9CUML26X8wPdn6WKiZ6XQCszZ7gLPAvdk4eKzJPZ28J4YizogwPTEqmZdEc7pEjrg2aasjDf36V3",
  "key35": "5f2UGtzbqgH4PWKW83N738P1zdYZrPPTYGK43MpHAZ3Tm3n1JXseHWHowAiwNZKix83PR1QAAP4j1dPpgJJNSNxF",
  "key36": "5ymvCCTqJa7eUZM1cyLnA1nYfdakzRDbmiLgjjW5BGMvYS8mdaNwtpNkXJwW8CGAMHB4bypXGfJZUxo4XFFrR6tL",
  "key37": "ZxTCgwJL3dpANcUNNVQNXnTejbAw7gZNhRxnCeuS7CmKDvF8R7LqUVzPvZDzPmoUag4P1U4potfEgYNJVcXgwKN",
  "key38": "42BYEMqHSkYtR7cJBFRcpFirgVjBkzVQo76oZKHsXTHBHL2aMo8aV3rUopPnxAtFcp1Ychs9f7LcE82RVvnvipxN",
  "key39": "2kS7ecS3HTEh9yrBrRaA4q3fkUY4ysVZm1TFvbLMGG6rD1432zL89MAjCihhaHbXWCikfTBYyU67rKwhWPei65eg",
  "key40": "4BY21RGcfMfmaMJSzFHz8kpLeQJ8YEQdvynkFWV8Ch2QRiwsaPnvNgHGzgGtNcL9cVb2SvPyRydKETKVXghgZoU2",
  "key41": "4QvwXZSNceo4jzTaA9RpV5L8XCDWH7e41pMgGPKYaXsV7xmGJVNwcd37TrS9MyEaceidoLWXLvp9GdWg8NUyGQYD",
  "key42": "3APguuJtSS4dg2xKviDBkLg7EQFrNT7tgZ5usH8AJPRiiGiACQzFQcPrtBcKYsY9oCoUMLDgbtFzJGjeS7TdnFmv",
  "key43": "5RqNYYKU7UPbvKrYAiRVT9gmoFNBfXCWmLRqtqC92774sedx5AadAqj9WEpHsqE7tuecdrDXj2Ro9kWT3WSS3ReF",
  "key44": "3jY1jxCwtm7JTjd5s9dwRipRQG8oXeQMCj3M1tTZcmUAzBgsJETx2L4fkxeCgav36zjLhVdCwTmac9dVs8y5sFmB",
  "key45": "5gS7923Dpb9vdNi5SeoGoSmE8zBB1pdMihZSLzSc7UK6W5eK8pWPjJueCgWY6cw6XfxR6dq8Gsc8stM4vH4RSgdY",
  "key46": "3QqqbX4JANrCLdk9rTmWxPp5KVQDLVZtd7YGQ8JaY7Ffko4PmAvWMj79z3F1vLYzvN6Zqdy6LHD34cLA8cpN45f6"
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
