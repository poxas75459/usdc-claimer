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
    "5bbKNgoVpyGsJYrq1gU8sYHrxszf3b7xxYusvBX2XN4UZtm1zJoRc998LFeA7QBVffZjt2oZ8tpj2eLyged5gcYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2QQuvqoydWAokFoBPfaTh3YLiCE5w8gTofSzdBLtCqcGPFSWYYzHa741VVGuu5bopuDtY2jXaebcv2duo1xP5u",
  "key1": "2i7YqcbTP4Qy9oE1MVHbv14V2ghe6FcHQScZtGijumQPm63r9bUgCaP8G7qwFgt2vyJ7AdD2orojgCZJKJiVe6Kd",
  "key2": "2XwjBofME11mSHmGdQp6K5QsxDFKnPJ6Ky5nxfCEH6AEQn2Kyb8Sp2P8myzqExB9cP7zuooJyTMg1BacCX1YmZGo",
  "key3": "2KanzUiF1vB526V9qiL7j8p2gbxGiVC1dNVL9HMizmW7ZsaXCobvotf2UwM9jerT2y1vHy8wZ3bUFZ2Vzk2xfg3G",
  "key4": "55gTFqy7C5HZZbNQnCFKCXzCYGrvgNFSoKMyjTUJ2PGdVfMqVZKBRmLtevcQP2J98EF7J4oT7T3Nu1pc7gKUPUJJ",
  "key5": "rKm72RRxnoDwYAmeapHK3jP9uEnb6r4U1VMfZjp7wTMtKjuzxrMmEsBhjYSK2xiLBiScLVoLufK3YudGzfzpBk6",
  "key6": "5NxDnooJAQTfG1LygScLGoiYdX3Zmhfsy9vxvdDZqHxUspVy1vCA2ZrtUbfZs8BBCFx51RW8t7DvhdXjqL3dhy5M",
  "key7": "dM3ho4E2HpXPF1WmtiGkhQrD9mGe6V3YkW7qxkyGQeQdBKdcCjsmsmCyGFPPGa7fL4m8Qr4kHv5VNMWtcNSd8Ci",
  "key8": "34i5zpj3FDXh21DEJAakfZG8QFxbqxrHvZfv7iNU8JhzJZVjxGT7grozwzKBvmZHdcmsLRB259ZPYXLsv6pGDPjR",
  "key9": "2isHQ3x5vDCrPZ3tp8FQj72owgDsQxF6XCgUXPAs5SbYuKf7JLCFZHyeSQyxH1sgVD52YMfgd5qJ7qEGqM4244Ur",
  "key10": "4FNXwMybnw41DbZTAzE3ZEMqYX5v5eNBKKv2nqq1TmHcLETTMt1tw8Z8GQWYTEpQkg6LShfMBra4gurnMkmhs5N9",
  "key11": "4ABwesVm4cMKahq5i5V1pVCc8YRXbJVK4MHjA6wBKJGWxh29kuugFnZ6WMK8wxWFxuhSVGKYHxnKvjfrzcqyaZeG",
  "key12": "2xMysjTEjLKRZcEk2snq33bcuN52rUPBLYXWGhKJPUpLfXXeeJXJErmf4YSxdnhAE9XQyhrVQNKqYoN67Hp8ghJY",
  "key13": "2TM2zeSM3cEBDvYtRxwm9sk7jkSGjKG2kq1VsPCsWhoZoNWfKReP1Y2GffKMyefqwmPXKka2HAYRFCDFVZDrtspk",
  "key14": "2YBGQaL4F3V2BcTVfenKh92dKYKxZxmdiLPGeaQTBf6j77xbWkvXGkJddqEQ6mdx6b8z3dZeGTF3mN2ja68TXaqe",
  "key15": "53Ggg96RMK97weCDAP9sA5jisRrdcLUpQepe5K1iyvSGfMiF3ULtyBaw6hfAm55bhMxtESTwNSK9VncWggFy2Se1",
  "key16": "fB7fvtci3ux76emTtvzqNx7WNSkACLBpiSjDG1JPVUzbZEG2YcMnd6WHNP4JwAhWafSvYmBE5YG2pdiMswxAuvM",
  "key17": "37L3AnN2fp7dZEKEh6qzNvCJTJszmpYbgs84Kb7k5WGEy1SvaZeoEkWKTGMBKRgUxgbtCCeiWSrWoxPbhzvTL1DT",
  "key18": "4ghz6kaCbG9M2CfwUmE62BcXV39j1DUhnFGTuULhpF9Tf1gT3iw42etey6VBrJ915zkXqdgbxMaspDiQNyJpLAGe",
  "key19": "F8739LsjGadhG8k3Jsxf6zpjQMKNgJFuJsxpXhTg8vC7XMno7fhK658VwXnuRhFDdSEWpe5h54PgqhX7QSis8kA",
  "key20": "4TcSuAPKjvPKXY5vNt1rWoFa6nzsw5wEjVKkp6mBQRS8ShbNj16Adjz2uMH4s5pUk1uMLXbpt1iYti3tD4GSezrA",
  "key21": "5tygG5Rt5Aov4zemo6Mj9igYi93zpyKVxuQCyQZYhPipSsEiM7f9aMvAB2pQJU23BiTakWpc26fPn5cixRjjZFLZ",
  "key22": "5Fy6rexiVuy8CNa1f8NhqaPT2ECqd2nAmYQfJsUvt3JMEJtMo1epD8HHAaUgeJ52i3zh8vaNXnw5w5H4otQFyuME",
  "key23": "3PboyRygRM47LH2tMQ6E6FpX2d4DXPYCQni46YP7UaPSdLwgRT7PBhudjipp8xEg6UEktiuihw6TKZWUvHxcvbWq",
  "key24": "5DtHqzmYM8dUCLLCwX7315ar3eF9uF835vpu1HszEasbeN1YJ4PjwiFSwxiEbqg588FhiRCeQWKi8axMvxMNnouq",
  "key25": "5NZY22QyCCqQo2bs4ja7yfdaGtZoVznAQyepqD9bt4rqFuurKzjKyuwV2FVegyKMVcZJQEBsLUFj2do5WtWfRg9m",
  "key26": "3JMr8v9u6UtxS7iSgeUkYEVkvpAGczkywu48FHBH99QKck7pyf5Mwdkf88dtUf1ECa7SXDmehT7bWrhU3tsw654s",
  "key27": "3a5tBXnoDBDFdy9tfj1L3kts3XaD1mzZETHNZoEXwsL2S7gPB2h6VuWKWcs4pKEsPbb5Kogv2Y7krz7et9WDvQwC",
  "key28": "47CGQZFEksNDUYqQLRF3b6wuMBkkpxy3BpkXxq5atkxxZpo9hJn1J7FELHFUX16pUA5TaKdArdnf3SNNix3mAUDQ",
  "key29": "4Z6oYAA5bAZ8KjTtDBK2jG7qBxRJfBCGZ5MrM3e8AkVogW4chGyPJC18fnEtxgMdEbbJagvWrUvXn9hgpH3TaB1t",
  "key30": "4h2tqYyWX1SdEnBnnAkvDwB1mRmBB1mXY9854Q54Y9VVZusnuejM3Uv38KkpTZahWp44yp2Zhc7NZthPVMoHXQhD",
  "key31": "51YA1XpxR7cfJR7v31DNwQE3FCgKiTdPmsWNsdpciv4RRhKWx5YPQcoFZu8NYCZGtq3Q6oBK2DisYN6WdJ3yTehC",
  "key32": "5LhimHfSa9GN7hdirxo5xaTh2U6sd5q6XwLoDKEwTinXW4iTDL6HNvCZiginEKk3q2z1g3eyBeCkeYxHDaEeYijs"
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
