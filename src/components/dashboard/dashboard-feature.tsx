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
    "5LWztbMNbD8KGa2eApxuRjbAsVt2P6puAmcjaeFdbKD2U5nZoE4ay2J3hLFdc18YHJs43a7vGzqCcX3qVVHEmqvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RytfL7vMvFRkirBHdyjBjUSxQnvZvXzuYAUEfByCjJb9f2pyiraNUdGDFqbRefYKYWLszWzvfKVSoVgESLqfZnJ",
  "key1": "2rg5TeBnmDpbUpKKpxTSob2ZryXdUBBex2ib6G8Xt3DfyGcq44iZjNQgimQhyGqGfNezG3HDhEo4RSpTTASzvfGe",
  "key2": "3oWhVtzdhPvkNbyn8ms8YtkRaBuQ6qTB6q1JiQHvszodn1L3KqXohsp7L4ofYsxZ7PDBBJ8vzrGoBn1mTcnBi7Ny",
  "key3": "5vXABNmFS2Tj9njQfwpsKESLFaM5JUuCaukSAWK18M2fcZJ7j3tFv3u9MBMspfTkCE2Rxfwz1M851UFfDgdy2Sqh",
  "key4": "2XS3ncPyu6RCFTxsuYudfELvz34XdVjrug1UW3zjtMeppmcuFS5zWZnxcJ2ZcRmMTaHzHyA7wzFyUMWxLA8jioj6",
  "key5": "4pAwCeESzskY9aKtyF3HwjaJokLNBzmpX9f6tU9Kq6Z1B3AcCJzqjnrCX5WcJAdyWpEkqazxiwDwdygh1XdeoK9b",
  "key6": "Vyband7VoAxzdS4X5dEi5iKCB5vW3xbovzTey2ehFQRz7AeyEvXTJSGSVmRKDQBVxAXtxD996V8KEehBhchE2td",
  "key7": "5jZpKcU61wX6sfhDToncBR5pZpWzoYFTpxiDxZG89Zi7qNvQJngR5PidykRZhnUNNEAuYAnMftojUKs98HDig1UJ",
  "key8": "4D532orvaMd4snNasPNHsNicugXAX1tvJ1RxvnfkoAUA7HonZoF7TRtay3xTi1ayZDgaaZnf7UgQsc6knS2xLH5s",
  "key9": "27gZTrLnH6gGfaQRgPUsbHWs6QQWSAD6fQ3rhyc26dYbf1jtVYKx6YsDo1AwYYpoSsaciUPcSGzG5Y5s7DyJ6PPM",
  "key10": "3EjToKTq7DSMeNFgTXonUGzN16b8uKy2LoggbRhnymAiCR9h3XyujoANfp9SzeXCas24LDZUumstAMPhtgVB3ru",
  "key11": "4KaS6ThFAjAH3wBwUz5fvaLoEwJuedpXhimrNExJ6BigXVpnZUBBv884tAGmzVBSC16rJSNMv3Lhg7YBWw6kP6zN",
  "key12": "UN8Cx8bKpn75oEzP62HNv7g55Z47v62jvQFniWPS1SiTLYtYYoNrPyYGjDzoc1sTC6QMnDF654xMGDQ2be8SDZk",
  "key13": "3C9qU3QJfpoZG4tPmuDSG7vyViNS1wbXxWP23DB95ueczn6Ae3497b6bRv7xQkdgU2JgLw2vnLZmwczzxTk3PA3s",
  "key14": "3hbpxP94gNSKtxbUsgG48JptkX6Ft8LqGmvi9SkaDMUNEcJuXQRxtgrDoJEVtBE7Q2cjNgGkJnZQ84uY7QNcY48J",
  "key15": "4Sk6tntZKH23Jckn4PmUcn8nZi2T3Tx8nHMyWAikDboX4tj6fsNkBebkj5TEB3j89Fe4Xj4th21EjWj3zp81ZTeG",
  "key16": "5AfDw5WdukqoDitL1mboX8vmBkMnVV1QHfA7SY7zqtcRJLZ9kirhSdRwnvNdnZ8DEDqujLiRPnxptUtQbhGKWWdb",
  "key17": "3EHg2wLpYhcdqR1qDy7w3hzMqZWt47ciVkQQeUcFJsF7GM9S3GwugtTn6nDNbmWm6ayzkW2LaPrAxERqwa5vdwes",
  "key18": "5L2mS6cqjnnxqFLFQ58Fw7yuz6WbbSMdxca66sKtp5BmW4FRD6DsDQX1JbNGxNohHZVXcN6L8qwe7T5JPE1Dk5vb",
  "key19": "4VLx1AJ7CuT9YWyowNEqgSLR3N8JjkMi3ck5ZZa6uM8rhhQ9EZ8AWnB9VurtHfDF3QmTBh3cu83WQCyntKuVShTN",
  "key20": "3cdFkqXA42GHizmJRZAUTJKp1KtQviEbrKKHughELfUTXCoNc7h4bfweKQiBwKsy57HT5QmZx8mgVzYztav8BUGa",
  "key21": "4w9WSfYa9AnP8K6sHzkqsLxrUrpEWWb31JeynngsPJywh95jz3uXLG3aSokr3huF88tQdS3f9RUFaordxuG5WEmz",
  "key22": "5V9FKWdwiNyuEKFHuXp84FHBXipuKwfJ2EEvNW3XDYx29v18w5S6AFchMJXVzV6YwEtCosRTtx93VZhGDSSCpqjY",
  "key23": "eSdj51ggVtdU67P5uSjuzjCawfQb5WddDrxSBaDBi1wsFGHe8rnx3zi7BsCtpaJr6MX39SiMxioy98RvJrVm8R7",
  "key24": "3gkHxDYnr74S7XuJxS2Aac96Sk7CLGNbxK3y8E1jM7yWVmpMiqkT9AtSKD5bCdjHiASu5ESKEMNAu2L6fhxZHkdB",
  "key25": "4tTvQqTmy7Sz4Cfs7XJeSKrAzhBqYux2wcZLM2Nbt7LnYVHtkm5nABDygEs8aY6xCiUTa6NiyPWxa8iQ1hZZf1mm",
  "key26": "29BW6HQ6MkEZWDAntVQwvFehY2sMpouPew9aWmPKnKj1vtpktzT4gXg3UvXATY6AJY4phswEMVhZrRbJYAUeYgXs",
  "key27": "4TiFnpy2FVbucmgppeYBfgoqkura2deD3XfMZrt645onHJNUaj8zAc8UiBP56S2oymF6Yvyi8vQLHovpgyrzT5b4",
  "key28": "5g5FKwGQnZpuxHbyzNGze73LoRVNUEnRSbqUynGEoQwQdgGma13YXsvZNCVBjywuTz5kzZJ1Ctm34evrx9KzcAkJ",
  "key29": "5VyVWMMX7w7VBf4WeVitbXrQ9eV7nPEZDqc5xEkq4kHpubRZ3jEiqrK9YxSCLBLVtftYjsgqCZye18RowinGsVNp",
  "key30": "5yXnisKHE6V5BqpnBgkg99hb3naQHBQSqv4W43e5fTDFDwwFy74mJ96c1iboz2g38ohZGQD8Smc5TJZBL5cNpWoD",
  "key31": "MTqWhNiGqPQiBZzFxwWquDqu1tV1crpqLFW8dvhuG8NEmiSJvhKitXNHgz3FyvbkxiJkihGgsFPtXGE6JDYp2j9",
  "key32": "3VPxb4Aw2LgmhGrkWeMnxvLbszix4Q2qRdQnsdbHinYUR6AUV1RHttYpuRZY4XVtoDcx2VwaApK1Uair4tzhQogK",
  "key33": "yZRvrCJvXTTnbWpq8AMBBntgLDdLnypV4vkCDSBAhF9i2x5NxQSr7o2GoENamgwVYBxEtTudV3gKuBQoTJfryAD",
  "key34": "4rPKGgwDb4L1xtGMmyUQknnmqH3CcQGHrVs1jsj72ocrJgdnLBnf1epNGqWpP5y87o53tFseZNqjVBCH1HLqtddQ",
  "key35": "4fpXhPZexkc12v1rukMmHBwToDNVrmFDkLaqseSn1PBi5aVrUX221fuPSUqT72vxprhDCuFw8BtgPexbTfP9wnzs",
  "key36": "5zQZWQqRu1j7PsFZjrB9GSsDhdNuFGiXbLAaH1aoHsUUSeUp5QdRHAixqwK9cN8RviaWGfaFFgQJQPdowd9nT7EK",
  "key37": "JzAi5jD6mG4vbRieijyFbrDaQgBTjjpdoPEU8zEQozkdTDewuweaneAJL6D3eu6nxoSRUtQZxsUNEVatXuQ7Khp",
  "key38": "4XkcY4tTFEHdXDay5XJ9E52TFQ2y4oEM5bk5HEq7wXP75GJfJXj2szwNHLPLRqcBVNXBqkrmwARfm2YHPrRXRXL9"
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
