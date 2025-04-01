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
    "NsGfHYmzdpUCGxXZqT3FPQR1qKifcaSq7QMW7dKytRbDWviDj1LjYLEr4kggKi64LBk54Yf3oAS8SmEbeQFJGTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NWyeBWe9X8B4HuqZEcRAZWbeDSqK9RngHjAYxhoEYkmTNhyEiWseGreNZEw7hKxLehUeX8CsayhiUEMbremjqqJ",
  "key1": "3KVKhLQRZiwtgp3jDHo6j52XbiNcwJWyTs9XSBheTzKrKSwk1SqBsv7omo7SZjfAj2QXkGywXmqgQ8nFc4AigtR1",
  "key2": "5hWskG6pgs1Xo9XhbcE5DDC2vfToF4P6QyLNfnAvnHQbr2Px7NCDRFxs2VGKEYVvmhtrKRZ2pnKjaW6pktD1RMeN",
  "key3": "ABxjcD3kzGNcUT7BBUPmfZsBKAN6WQKtNgHuFZBCqwN6uPNn5NqmVUUm4aENTZ7ViRv2h4qUcJqpqK3aB7mQarc",
  "key4": "52SXYFehMXzzdxzwuHcvfRCqKfyatwYR5JzBCnPRLcQsryLRRk9GYd5DgxqhJrmXSoJhZSgU46Ru6qHxgows6yBR",
  "key5": "5mP7zEoiAnVZdcpkP2kTSuVmfxUrj2DZyyP8ESnzwg6jgtMGSqEeHW8LW39DLjkH8AE8c5kotL2S3rWTx7WwokHQ",
  "key6": "3mEwmudiVsgwhcBuELRfDWwyTJQoakYvf8inahesZZdQs8buWVQ8mcjXQU2GiDxJesv7uDsLYnTuwrWv1bUQYrfj",
  "key7": "2b1DcSuPYmZqmoBMxGeg7qrXGX4zwDfYWPgQKpi7CueeeVQUH8zaQqm8JAAdJwLyxmBct6x7QcncRzGX2mV81SXf",
  "key8": "q4DyV5ZWGNPqRR1Up1eFXVqkRFFHL9Hpo8RPMpGN2xhbe3gFebkVBuVQjmxnT4X38944sDJP1w8L8mQu415arr1",
  "key9": "5sWVt8mnq5ATRHCRonyEkzhmE2zqDWzRLyP99biY4cdVfzArZfyX3Urt2uTefT7vi7PxWHtYocjAFW3bbsi6ruj5",
  "key10": "4sWn5JUCVD3yCw7nBhu4ZmYgdFXCJHir4zHiwBSvz5yZ4PzPPErSx25qWQ514FfFn8Es1Z4pNYpYGgXDLVrHqseV",
  "key11": "3YAFZJKEQ4dbaB7teSnGNGWE5J6DPgX4sSs6ZYHCEXJGqvowsfbJRCQ7S6mLF7pHRmazCh5RuFxrBkfY9or78omS",
  "key12": "5TEpJyPPAsjfgagEP4u8qfKwoUeQ7GyH7fnUs7ZG4AwdpFbAK19hjNwAbP11Mb8NYMtx1oC4zdEzQ5VcTHyRwAWb",
  "key13": "29hRDSwyBQrbXohNd7poJiFNg2vsHrL9PFrS8quFo1HkHhYyQmqL4TFSNCHLjY7ycoh8Y5DJFMeavuGHLoKSPZyU",
  "key14": "3v7ujUJS22kkixQe4TUKxBgSYWdrrSe2E6sobd6XWZDKdMWuDCQMWFTuX2F3MXWxiF7cS4tzT2M8RfVJxY9MXk87",
  "key15": "ZphdosNmqspr9JMi1eBatwpaNiQnng2mFq4W4omLNXiErUQP4xvzNzP6zVRGVMB9BKs2yoL7dHWcaXUG45PZaYy",
  "key16": "5WMBsx5PhXFsL1WmW4D9RQ42K8CkhcGGisSrFbPedD3HGaQFumVXsD4fLg4TgV2PFHVESLKBfiDpSjLZRuD27yEh",
  "key17": "3rzmuQjXPVM8qjfX4dAP3wgxi5VA4MqmsLTGbcPydzviaY6ieM2aRtrh6L7ADjGpHVj4G12LH5L7r5NUUNhhYNBf",
  "key18": "4cfzy2VihHZKKPqgHDaouNT411r31MnxnVVbgGQ6CyCAPnNCS7SgjaNgK66oahZVzULr4qbHw9C9FPqyTwCeGh3K",
  "key19": "5rzCbEu41TX4mbcnQZZ29TTA2NqxzPswR8Nfo5ZK6UDs1iZ1tA34XVYQSy4QgKKG2SxAiwa3dzMjkb7M383XDdEV",
  "key20": "4weDgQGfyhezGtE7K8zcLFFwWqKfngLSbQcNq1TCzZY41ZgXpvKcZy68z2Kk8t1GxjmpfpkcRWDY868Hj68p35SN",
  "key21": "3yFUBbtJ1DoQDwTdVNhewVZaLqshyNpkY3vFYFCQpfsRZ41mYPrtDDeJLWKpgZvo9y6KWmCY3tTganntEGAEfzvA",
  "key22": "2dRnYWGHuZhjWduxbUnUEv2kXaJjHKb5dRgBJNUkUguijysjMcKgpKDvV5QkMzfFpZAuNj3mFD9w7iPQ8HaKZ3g",
  "key23": "Q8j5mseKkQUBpX7YmvRKvNyn1iJNMAZ2iPSpywPJwwjMM31bR1AAnKEop7fCzccdJbvmQPQsv2AaKHufm9vDQJN",
  "key24": "5xZaxbDkac2rS8nyHgNRGPQzMWjQ6V8sz8MGpqSkpy5inXdrbpzmoFxUVK9FqvCc1bJjwEcLgnV627qoeJoMwd82",
  "key25": "2TL1UBZBg83zgqK6DSmTMa6ndc4tWCNyu4RZ1MtVH3GqNESa2Zz8CK9vYDMdRs9svWZFxcDQu6gmcUzNjeJi9LqV",
  "key26": "21WNuQD7Mj5nbu3T2NzjkGJUFqatsPt95TSfkptrVDRj2vTQm7Gu9Ymwh6YHFZho3CPPSTHSRcaAp5xs7DRmZrSH",
  "key27": "2cVw4bcF9nuoRA8g8AsQZMX7YF9ggUVyjfWZZeU5PkBb9hgPr6bivuqUga1bCeUhXWyYBLE9iKD2kEhXvFDedDxE",
  "key28": "RaVz9fEBVyfVA1vz7ch1fgoEMAsZ3V76HqZbYGGzMgCERARTgrWZ1kj7wqPkJFteYZTM1MuVdTHeHxDthEHYsjf",
  "key29": "5XXWXHM3MsjfwpFUnY9YZervdroS7xxRJSBiEmEA61Jt7wfLLkwLraQ8vDpcRUjqqkCqYPr15WWQRnWdhSYRioU2",
  "key30": "2o7iS9qa1ucLoXAiKhi6o3q9DUvXm3WukG4UoofLxjBC5UAQDzAgNJBPPxrsTLwNANqymnfEWkeQo2cepSwt8AnD",
  "key31": "4tqHDXo7k4rAEW2buTxbMsruEdNjo6Xgoyr2pa4hhWpcprNStxtysDMvQhHx13eqWJ1jfgCsVNroB2EaJdtmHVDw",
  "key32": "3EnoYKmWxQU7bZVasDGwf4wh8KxaPHdTE8Rrbu73iPXUfbgtwYyyvEuF2L9o2WEhA1xRa9UnEuRuHGCProF3wkVa",
  "key33": "63cKPgtLDezb1tNMzbEQ8DRNwR7NV563bb9TVzCTGYFUL9Jm45QmBwTrCQ7qZiXE6WrtSDEXibawCSdryEW7GzA4",
  "key34": "r5f87gAWAgCxN47EnABoYoGzZjiC8PskoGofPUxDSf4WNxERWogGm3W5gMvevYWoXBUm2aft4ssu3Qhfcpkz1yU",
  "key35": "4jTfoDBVRRpnQUUAYEfHkdTbBDpngsRR9iYUbrH3cAqdrkAZKLMmVHe43wRjr7GTnK5tQGWxdYzYkcvDLkcKEqUb",
  "key36": "3yMNAzzqkXoZ19h8AUz3k52z7W9M8PRiQmGCvvEPa8G5R9gmZHhyR1MxYpjBHwiSXXxdjF1iTxvExuAXbD9XF2BW",
  "key37": "54zdau6Xy8SK8RBej4ciFVQ3AAJJCMLKMkZiZhsKvBQn6k9WbP5Duy22oXj96tsi3omYpsffnZNrEWZGP4uvHyyJ",
  "key38": "Hh2au7VtTmNEZpArcnnfanocbJXtCcANjpkdei3aB1XJCEgyat3HySfm73R7t7w9MtZ56DPqaJg49Mn35jr8T5P",
  "key39": "2nUbA4FPHYSiGcnYsmvocA6EqQYSGV5zRE9tSvyB1p5Ykh3y8UPwCUc15Szjmoy3unBfDa9Hv2f7gJp8URuTJCXn",
  "key40": "2zF8qCPKmekHa8ahP3nZAGBXxNbcRZBPdtvbAMm9KKaAb9pk1PryTF7gDBcyQ947JMa3p6dY5sqFn2P9gF9bUA7o",
  "key41": "42pTKdr5ayArgDYGuEUA7Mgc7jy1ux1k1x8hC7L6cmBCWE1ux6ENJmcq73cbFbSqnzHfwqfE6hGFLGaxKnWSnT9k",
  "key42": "33jX5KsJcqyEWAneWCVQ5pQrLCewetoyt41gpsbZdqtnwmzm8izHCkTTtzpfn1KYyxmr7yQegFpSPz2E8s4eu8za",
  "key43": "4BGvTbe7m9mZXMCSxFDEB628JkG93nqMannaSxc4LaWGhSa2vbU9SxX23RybwZyJBHDB8DE1r7jAKoMko9D7XHqf",
  "key44": "63PCK1s5q3cNJdiVs88NpvzTje8GcPsiztbKXijF9pnsaNeLrfBRSzFHjchrWvsoq7WR4E58CgcJf6WBd5eHGHUq",
  "key45": "339zcavVYwugAgUWUJXfL6ZiuCHobWQmWgfupSSq2vPDKhr3C5tcv5BBSS2DLsgTUVu35USzRnPSbaiBrmdCR7Th",
  "key46": "4eiybx7fL8KFxgBprCoXeMaBZ1Lt7d8K15uYY9RFyBLRXwJjkK8tUS5dbHGeZh31yhjUmwJhoVxbpJW2X3pvLvMo",
  "key47": "x7dKiYcdz82jS6ahuU7Kq2LrMsAJqS9U3ko1ALmMWdDuHE7xiPfoc7J7peuLHniNQVgpWqueA214VL7KJzSYd8a",
  "key48": "65qqXDHohraRyB2mnVYnNPDbHE5jtWKz3VpnUZ1MnWL3iqd8EVv9qu578KpzMhzcvFodVuBxaeg4iyJnqdLakSYj",
  "key49": "uq7FWJ3ksycDTduZtW8hFKKhXMdzyAEDbs1J3wPRg2LR5H6tPiYh4rV4RJ4PnBVqksNKV4f1Y5GJYxdFq4Afn9a"
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
