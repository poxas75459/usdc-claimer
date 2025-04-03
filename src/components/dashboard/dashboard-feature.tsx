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
    "5qg3XXQraBvcv3edrNvcmVUvKahpaKZAoEgFFxWh618qGcymCeiDVzdakJLQcxAfu7871wfUDWWGPLvY8eaKKbkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRvzpupzfpdYwh5FL2iHj6DHLNZ2MY7TNszcPPpFTdyrCyrwEDzgZedXMFz7duJuVm19FzMhgjhc6JaQbDpM8KX",
  "key1": "3JMFyHeTkwPbbLcAZn55kvc1SgLgVtdPWWTcMR4WVCvT1XiAHhubEgoYrdLhsUYSJj4HbKyoKZnSqqwRR157fa94",
  "key2": "2u3KwUxK4Tqr8tyxRgMcnWriKhV895zGJB9sPsB2fEkf3kwvt38GDZuuoxKWHHmFnqY6PVPMCGjA3iLg53QMqNZZ",
  "key3": "4rHpwna8tpkc3SNpuXAfbbfPvCM26ttXquX2UmhMwFrNCLJjBHDdyvr37GCQyi2AAQzpX66n4vW4ZkYaT9V2APSD",
  "key4": "4deRxwDzAv8cLbiHzGr486mvAUPMxmFiqukSPV2Qngoc1aw4sWTbHB4s68AWTwbHkaQxyKkr2W8avT1dptGyRuWF",
  "key5": "LpMGmiJhbrUzAJV89jBD6ybCHg2CxYauDQ9u9dshaFVn88DC27HnZbS4icJ4BkRavA1r1BE5dVsycNTyMXX4ZDr",
  "key6": "2eN5VSko77qfM7Zj3zDSB5DFbc5hYuYFihNtSwGWumDGBnY7Bk62AATbTXd3zYrWvbU7EoAt7rCj7hb9LpMeBSeK",
  "key7": "3Kfbi9Sb87C8WuLSp2FUTLbmqmqT1PQJrJqgZhFDDRAbAEBk75StYpwN8vsBy3Kdj21FPANV4qzexXKMZxmpqEMM",
  "key8": "2bwvoXJjhZkmFpLNLLtsDEzbhFWWHxKBeEq7eWgg6j4a8KSdimQPKmUMqhX7w2Ph27m5m1tQUkKYTCCCz47oMUb1",
  "key9": "3nUQUUkeCsgfRedNiR8hd8yo1jf1b41XPAm6NjZqsxAaT9AteHeXSiecyXjBNcpj6DcgjVVGdB1JbbHUqHVccDw9",
  "key10": "2SxNgxSsSogEZgmdL1e6Chs5BsPMjyjBkmy198TfvsyJQRAj4PQ4audrjRGRDj7hq5JzbZcA6ChzLTp2WLMRYxnq",
  "key11": "4KZ3fDfNbs3d4p2VCLUxasj8L4JsWfMee9Gpiox2bib4fSWB1K4gBnpBzUu6GJWYAg78icFZQq9uGxgTR35oxsQD",
  "key12": "5w76jx7QyrMtggPQGoWBoxtMNt2ss1qp7xSHqpYpFu8i2FDuEqKBARmMm6vX67cQGfMb8cvyjDztS67BDrHySDkx",
  "key13": "5FtUmEGiqnS37EWvki1J7qBfpqTMUJ96VpP5YABESRQVK8bvhuz4C1KLMGi1XpssQZaRBy7vzrzhdDgLfYC9rEGR",
  "key14": "3Uq877eu3EVQ2A4nNVFfeTumwS8RB96RLzB9p2dQbUQBTCsDc2vF7yFcqM68h6fpRaBvwNvyP98MQWXbcdi6Hir6",
  "key15": "bFb3zsK5EtAyuj2iEe7arraYTBsKZSMbu9FtcqxnQXBTK9ucZfZjQEtPD2vmDNi9seFDU46KPVk3xg8VoueVUp9",
  "key16": "4JZmg2gboGmU5QiSPSDdG9SJ5opDof7EnWePSoKrEiaA3GWQLv5svLPFg9x963ToyBCCoPZ2pUa4DmCTPdufrGGo",
  "key17": "PSeHb4JydDAP3ETboRC5rjR5aSRTwQRREPi2QTJk7ZMr6kGDWKTRyDcSCQtSeosYjPpmR1wNrPUebwc5H52exZP",
  "key18": "42hZys1CKKuaKPR2a7S1URS7JuyKXf1kwPKbdrXnDA8LZgLrK6SgcN2PrBCCxYaLye2hxcTCHTwKVDgagUSZwxth",
  "key19": "3PH3PeTk2dAxJA6iCAUyrUJpchE4ZkPFRRzT3zPavGSc1QKXG9P9NHouLUg4XkJdksbQ8wvRmAooV998RG3jfLJT",
  "key20": "87Et8ecn4DLRu2S79hSJmMp1v5fVPsXkpHcew4rHUgcFzgRw8rdXcMPqZaZxyYw7d8x6e9yfq1Q5CVcy5Hgd498",
  "key21": "5zt7RiGgDmpSEwVWYzAftiEtVML7MrWxzZzUjRYCwzhtT1qPbVj7PRmw1BAiLAFDCnw4E6jANe3UZLGMrPfxhX4q",
  "key22": "5YFr5NG3BTKvaRuNj3nuTfLFC3WCdxbbWYZDQoLYYnPxHgJkpatrGrcNRfTy6cJpwkt6AeePY7raw6kRttxzzHNJ",
  "key23": "5masnNeCG6663TW85QxqGYciAVpwMzGPHatgpcD1mQ4Uhw9hPvEQ4KFkrWBdkuVZH99zrTBx1eVybq6Gevb9BYDo",
  "key24": "5kZSkdLwb4kDEhGxet5ESbp5BmQErBruzbnhuMkUdiKvCA1hr69Z4eq8r7Gmd8rWkAeQmeX8P28JjxZeMu5RJ5Fr",
  "key25": "59FaZ7DHqx9WJGMWmUJJuTRbGr2aPfY1P9m9VMFAM4b6SqCfY98GS9H2RAtRbQTUyYWDGrobHpEacdPZRMjVaong",
  "key26": "5u1aJzcUuKtrueyNFTs7n4kz5LqDBxjaNmnjJxR9bqDanmrQxBQpNq7ukTP2CyzzKAW2EBQGaG8dn4u78p1oqPJc",
  "key27": "4b1YM2ZSBUM5DqyM3GuyFaoD8o96E5rCa37zhKovefYVGMfjxUbaKLS5ZThJsUdWCmGYjzd6LvGkADK2EoR2S1mg",
  "key28": "2LgBGDcYNkG4gfqoMBbKuDr3vLLtsQHaM2Ama37EdkbunUetom4YF9jVfthXjEDXa45Pi1MxHJhQsKScnid8Y8MA",
  "key29": "2YbEKrNGeUTxdcPSgbexNnJb7aHuLqciqGFvzZWiq8AndgMD7kDhEPbgAtSdBqJc5KZaLTX1CiMqEZxD8Kik5Y5U"
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
