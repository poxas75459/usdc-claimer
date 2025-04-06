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
    "2zxxKmq3zqju4Yd4JpZ5UEWRT9N3YB5SUx6V6n2SFHQqTVwtkwnSwSG7BKteFedw55MMWnAexDKqXn79oYCuWFqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPUqVdbLph5miAiTAsPZxMjKrerNWNuJSmeYEF6P28vdo2ktSAFJ32JQmNYY7RCxn1WYpZTvkUer3YFd6Y2qtCd",
  "key1": "4JtT3F52UsiVTypvDU3HiyyX5a6xibVoKeFUXq3KYuTwopD1EHxRm3nT86SbKhnBiXc2EPdkEfQD6orjA5N9LD6j",
  "key2": "vnsKiY5Zaz5MwfSR3PQLRR77PDHQR5HKXc5d46hcC9Ny9hJXQoqRPfKoyPBTMHjawstLyLUzpNx1TMwasfxTjFb",
  "key3": "5vuTcCanLvmwv4ihXzuhrBSbddND6fMLb6pHUCtSFjfz6YnnTiVmLDZiyLxPEsU1dupj2UJRDSYktkRFJXJHnNHd",
  "key4": "2eMe59FsHwvQ7LFKPY6j7hN4vuv3u5gKHr42psq1Zk6c1SHENhmLoHSgqxHUq3e8GKcWbp4xEcUB95tptBBNH6tP",
  "key5": "ScinYAzz7sJaTHyLDnAUW6wEkZVCHnuXpNZHcf2hMRAmDjh5qQqzESpVrt1ZP6hhqX6R1NjnNos2CfF5SuN2VvD",
  "key6": "2GNSMJwJTL6YZFiaajLS4wSZb1iwvebJa56SbPhJeZ9JWvu1zF7M15ktmiofvvx8zZGPriakoZ3mxgLVrfX4a5f9",
  "key7": "2YHqMsDrzczemTfXpn96Cz4itBAHu9GwKfoEXJr8qNMpsxtrevL5MhhhTMPDbYs7RCQy3xkFKg3py8UmMJFuPeGD",
  "key8": "2P3iS62SyJbKCTs95gpeWzBK1K9s9qfab8WwkgfRFawSrTYs9ovJ429JXZ6P6QbLsBkX5AK6AmpDPbn23dtCRGo3",
  "key9": "5ve8iXkieFHGpNjpa3Ce8KS5j45c5tkhiu2zbynE4FQAMkLFaK77p3SmY4FUTYfsEWHg58cmBcK9qzK7ujK9F6Xn",
  "key10": "5VJTF6cFqfSAEUu15F9VyEFDnefNQMMekBsaGM5Jag2KX6LPqKm59zdjW3BRQ86QnixRxz81ushB1CwgdVMR1Ksa",
  "key11": "XAPdhuajYErhEGefjFSFMCGtcL4haFtknaVv9qqymWjotapw2ucbuSx9Qsj4jCHNApNkhFqo75CBqAdPz296zjN",
  "key12": "47DwJL6KyL9MiT1GzYzMLpmTkBbQfKY5YqHUC2VrpWJyHmxM4RpnAoq6ZQUsyCrDdU8SFH3kYAfSTmB5Wqh4THKV",
  "key13": "5G8AbJkfBHPBisA121vdrQHh8gj5SyLPzmxZs8YhvkfwY11SRpCmJ62TySkMkr3XJzS7ZF8RKn1bHLXc3rseEDmy",
  "key14": "Nbh3MyXEREnTvc2i9tHrtrLEhtXXYeVoCgFyicrekvR6tTHW1JfTXqWGEwJKi51tkcgrDKNnZWv2LQhXnZy8txi",
  "key15": "2KoXHxQc5hyonycK1MZ2pB6mBKNnFELabEKJxhfECsQBFGgGqhjBgjckn9cBYsprXQpEmhc1cndC65bZCqocZKTJ",
  "key16": "2McZGqM9fHC55A65oKjMCBC4XPJQpWKqAJMyHUgDtriw7zS61mmcV8uWuFd9Ayp6EhWKhanpiiGYMSCnwg2gZPYa",
  "key17": "3KgWabkjqPdFw9D58TwrQT5ioprYf8n3MW5AnWwjCfCBLCEzaZLMSAgupJWC5aKjegs8j2pY5dUJkr9MAqMk6aqV",
  "key18": "2k1hQWg7y1JNR8xG2yNowLWoHwjbvGjLt1gChTG72wrSTYdo5i5tpeE7D8S4TYVGa8JULUHTf13Y9jCMc7KdbdFz",
  "key19": "6nVeYPS7oFhPVEQTrhXMrt8JjJVGn46DqjNG5U7h6ekKpbhGu3znzAyTjjY2VMga86r3Sz163bNx9PQeDEzyMWp",
  "key20": "2gzLrQihq43nst8T42NHPBtMuFC99YD5j8bCy4GeoruJtkmdDZC372co42yaf36zZq5MtzDt9sArQQUBJP43WaiQ",
  "key21": "42UpRNLYdMiQVcV6sSa5reL8hxXPSWAo7tj9Vi3hroUaSs2road7pF1uCwksQbnTpW3eyKHKNr8vRihwVLFtAQ1S",
  "key22": "4VJqtdaW9BAmtRFLtCwKp2BqtY1ap2ormDDZcn37FR3YUUZSxugPZDRXB3NcsGQVB2zBW8FPsoXia8T7haFn4Yp1",
  "key23": "u6UaMX6GG7kKkZ8GW1f2kqtLHovubRDHe4j56tLrQNkcq9JndBiuTyqc3UeoB9AAEvgBPgQo87xJePenyYsKpHT",
  "key24": "25rNtciXNepAR8VgmLQPo3zWQZCCx4rtiqt1GAEfZVC54JwD8SQM27H8XvNHsArGWjLsnw27vj6wjqff41yH5baB",
  "key25": "aw3tS7nbAqMAJRVEDhoV1PCRCH1QUo1oBugZE8fN2CQgoKtUHFPeZ84HRkji9NdSPMkCqjhxFyhWZMTg5EexHkN",
  "key26": "22jajYxaERKY8HTS9W4jBkkwZE4Dbi3zXAvBkDRdTzXPNHWxWoB4srWcAUnpDtGPmf677E8ppSJjcvtUjcM1xrrr",
  "key27": "3Vpc94zoqxJNGkFuHG6YECNGB6cesGUKTSppRG4JUfVRBkXeMkCT9uVHsSmC9ACz8aioBBjATu5JUuintSnUGVnm",
  "key28": "AgifvuK5QpK887NBkvxUdH9KBdoXqaxXEvzmnmnu8cjB6AUBUNkFCwxmDxYw9mwNqHSkgp4Y4CuWq38RVfTSNNM",
  "key29": "3FGVXJ5jKe4uBpuUEQzD5gvTS5iTbQUCm1GMAH4e69ZLbmc9RkzzyuThYGm8aJwoDh7i7a8Q26oimGzLnZ83nm4U",
  "key30": "58d2vYeZ9DFaFnX4bSgeuhSb6stNbrUBzB9Jz4vCmfi7ZQqjiaLKqGZhePyaJtD3a5GZTNFmXhY6FrW1hBqSfzzL",
  "key31": "2kP3uU74DmPiHYXeQHuG73xvbWnECVFbjULsiygNryVmBWrLhKANjTpSsGjNoXxRJFXKBefommLgEXYjgXYrMxjN",
  "key32": "2QKJopQJvodg3A9PSPsoN1nT5VdztZWpm2q9J4jQoedUeMNL4q1PJvAjzFQHyFB5kmpfatKS9aqStm4wedJ4tp8c",
  "key33": "1yTSUwRuER1JuuKyWuXSEtQvzqKy8qXdYJtHCTdT1oZazk9j8rBcs4rTHXMWxt91UF6TJBfsJy9hVNSSRJbPC8V",
  "key34": "2SZ9nDAu3A157PehzJ7zCuns624VMfXtW6zvZpprMbZhNnLeWQXaSmp4iUP8dcE1rLWdmLud3CxwuSpsY4G8AG4E",
  "key35": "M5YB2vQV4EScoi8p1RFUSwNRiwi3RfabPg18ej94q8hXD6EPFxZNwg2enGeCJGDeXvsUJAYukbRf5YVwBsZy5Fk",
  "key36": "hwG2w1MrCav3HoYDcpuiQEoU5A73Apun6Nq8dcGEf9esPcPTahJ68ZGQ5eGkRANuF7rqhr3LxWTJ1nFHaZRZXen",
  "key37": "XABE17FyYZp6Q1Cc9HWPFcAyFLd8qgk3PeYEy4azir6aN57LtxLjGREbExMR4sEEtMjeHiJdZvoupFhdACGfi1c",
  "key38": "4BZFfxhuUcNrFavKZkzBz4BXjreQr746DkakUqaBqnCp2SkAodXwHvkHLTbiBTs2NZBTcjGF94Hkjvcqccw73xjv",
  "key39": "4rntEAo3xAy2PnYa4P3qzVN6e4PTmmkXVdbZiYgt7YpypwA5WvFNxVK69jjid1uNziCjkPs3pDeFhVUt7VNpaNaH",
  "key40": "3af55fFU1aBiykUaKmwRvSt7pisg85F9cZhS7SNt865vAQ5XQjbCUsjgxyFbzapvtTrMxPBR5Zb43wuwVHHv1rr3",
  "key41": "5yCudz9S27XuLwgAmmTeLSREzuiVEmV5QaiUj3x5cvJfj3EfrFS2NPNdf1uc8NqgrKKczar6LTxaNtd966dcBoFj",
  "key42": "2hMnyUdAyZVqD5kRfn2vyMVnegTapzC8kLeFUgpNb8pzA9Dsad7Xh8viv9wMSLQzNJYhL4sNo4w36AzheJ7SGRWU",
  "key43": "28r7NYLo9FWacY43GTGxz2SttSMzhX4G45goR6hKAiaMBvdM8A8tYbFbj4Pek9xnpVMwGA8xaMg9ykjqJRHNZ9B7",
  "key44": "3gAAm9AMti36bnyVyWLzL89hARgYH316yt16UKpYSPyMUrb65cEqCNsDXfykPcGuWKh2hjJ5eb511WoSuPc3Sg7D"
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
