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
    "3g9NQeydEZYGmZjuQRB6463fx9PczL2CSPzGwPrnCq8RXzX23QeR1TBhzgjn7KiLw5XPdq8AzXwzcpXxTmUeUxse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CPXr23zDW3ZeppLy1TyxLSDk9Ncg4pXhE2Ga14qHxqUEKvuFQ5dGBdKdYyXhtvCA8SCN399zCUzeunz5mEofDK",
  "key1": "2pHgLDiAXLVS1Ev8NekKrSb5fzBS37PkCKMmBfP9S2mEBAQ7Cb3W7rWC9kjFMt938Dwn3nTUpZDk3UyvQSDo2iug",
  "key2": "2Bqn9fqVfJZfuXAabrP5rxrScTHakhFQwPFW2dS6wHKqsxqUeMLx3nspFN5W4uCBaAvCLZzCzarxR2M3Q48ozjwk",
  "key3": "2FMiSM9xH2SeckqACxMgvXU4GWKHMuHA5X23avX2Grn3mcxVBPzNspGiVAAP3Yj912wDuN2KuizLfSdUTYDuQwZ9",
  "key4": "2bPk9YBnimu9UeRz34Di67UWq65ofjK4oRFntDrjnUFPA1bJUJzTbTEM8RtZ6fAXKzXv8dHayNSj65ZgjfDAmUWC",
  "key5": "3vuMGZSEupoQitgFup1J45s1iBaQawyYimWsX9xnshiCkg2TnsWbqvYnsiR3pkYUJy4m6G6nXmavY3K7aFXiQVfD",
  "key6": "3DkkxDttGEgfJAoSXNd3YRCRgnmkN7u9utwFvsPf2iQTB92bDTiqXhsne44Mr2HxyLMrBSNLCmeh3rjkJDBM9jtq",
  "key7": "4CmkFjx2H7idFiZYuvDww4Tep9DX4cVQwY5zLcDWnyU5RW2BAFuPSP3hwJYsYjYJUKJcXEJmrZKhZaoQEvBKKPFz",
  "key8": "2KuNP7XqMvMUvjocLibEUjbB6XqCxhh2YWoDaPaGZUgxnL4MU6DnbuEFJ2TJsvxRGcfpgeS6ZLpwwRTq68DsapWa",
  "key9": "5riMrmm6Wba31UYCWbnVZKFgiPaUKKhUMBTc3JjztmX7EbwkE9XXg57qaeJSY4edXj5gwChyc5cY2HFkw8q9212R",
  "key10": "cj6Db5L1z7532JRqXTzaFRv5h5p59UjP7KHzTLGEXbT3sCVfMBLUkfAztyLCGWLb1DytnEgSgbwhqjS3yv8zSCm",
  "key11": "RuiHJ6xc1ziorPGn9kEMAfKauuohyzxNTS4Zp5DYLvUi22SUXLCsb5yAvepSNvoxcXZvnDECbm3WLeHP27bG67W",
  "key12": "5UPnapskTo49cPyYr26AC7AThMWtCiah4S4Sscv4fuF5vXXVzGtDdPuc1PBafJEDcuxy392f5QyUTyk86xeFujL7",
  "key13": "2nzWN1jkGzby4oBpc7dvw2toRmuZ7vF4vX3tRPtX6x4tDDRweDTfAgVtX1h79MRLEmw1KFy7eFVx5T4NbVwyUddB",
  "key14": "4ZcsYLzHnpZWceAvJi5Y4N5EyyBbcgrtWLCM9HBB2PnJES2LUfPX1CS6KRGsc9grxJJ2Q4aGjL95r7YT8VpPR9ZA",
  "key15": "3VVeL8pZ6tib32fo9iGGikVLR7oDtWQvzYxLvZFFgbDwPNQpEZtm37er6Q5FcraEr36htWET1aPdU4bv2raG16U2",
  "key16": "37gXmRHfon5cCWszZEBEXBrgCfZsfp8KyYhEki1AUHCD1LaCksCQh2txAXP5UsSjpP8hWaD5tadi81VNhMDEJVCt",
  "key17": "5xiqkYfGbhPqMnUXzfB119ZKTTEUMXuusUGbmCe89FJdXKcQ5GyGT79sV7MsGiXWt1Adc6gpeA5AwmdbCDSz33ax",
  "key18": "5PrKQXjC8c4iBP1MgtDnByg1Ynco5NmNyvWWWTJMM9CioKgkKqBr35LmV8gabPeYVDaUhFvpW2pyWM9gicSFXjFr",
  "key19": "3SVPfUVjKY4cyD4hEVrMRVunvH33uHy5uC9R3eJMXQHdkoF3fA5JanQuSzM2Z4zmaPtCzsZrzuZBZSGGoVvkSLco",
  "key20": "5z2x3acsSVZZcgo7iMmRgNPKmkEiccbLseUwsuVUG7p63JnPijjAahTENLgNBbHVvLWKa2WjRsQZeVwE3ftv63pY",
  "key21": "4oYiNwTp9jD4Qo5C8f7wUA1oxpKBMkyqVnrFWvXxQC3ACTfz3nXznHUkHZjmRwtXmhMGcQ2sjPN6YKKk54yxfXL9",
  "key22": "2U8Zi4eviqT6Er7YZsjTYueTDMo8kb3r8BpHEMKjNiyxkuTUoUBgWdqBu7jewMva634UekbHsd2Q5kkZBMgPJHWW",
  "key23": "3QbRuBWvjkvTK62ynmDr4AaR5cuEXSLhxCRmWxtUQdsWZi7coA9KKXYYJ7xUUx9VSJiHDvJ2giqYFJpd1vYHBhRg",
  "key24": "5d2hCJLpkuuiagzUPnzaUcf5tA2UUABzLdqaXLjk5FK9NRacasdXxnFz4YTxgCBVA1ZzpBa9dQ5Ycsugzmqs8jg4",
  "key25": "3u6tdwNGTnDCzMRMuTb9Gt9cXPKVjumQg4DBqc9jMmVoVdazjctJyYvJPRqijUjuZvEnXGCipzvk2SDGEV9Y5WuC",
  "key26": "3KFfo8x2p2bnWNUsfEJiKnUHPffrMbKwESjGhcBS9eAXf869WamyVR4NmgoH3oVHPokVo49KMDFGnPX8CDHgCprh",
  "key27": "5Q69P5MMLDXyMVWe5S2c6hhRq8GCtAKASHFFF8nrKBQGL61rDzAkyskQNv3VzgdS4eRBWvNKPm3f9VaQf73rd21a",
  "key28": "5yyNACRoN6kmxqFHX2q8xNmrrAmYnrubKPYYagXPGVjmkwpt5TB4mD8MmTxBy9xiMT1TR6bZ9qXg1KPr5dShig1p",
  "key29": "nK4jGJspUXJGaYrPTvZbJdTcN5WBdoCn1dY6omt7ebeobti6st8A8AU2VL5SRTnC3X3pbpDoot9C9B49kH5VF9c",
  "key30": "5VWmB2zUsK4Y25MWnfYz2X2i149DSXmAzogT5as7dT9g7ucr8zjeM1xZQykPJtJzRC7qjuysgQinkW594FPHkVEp",
  "key31": "3eWY5k3NF64Y7MGMsZTEoU2qjBeaye7bcEzN4WobBJWEc1M9jQuuH5zDyrRXBQcRqiRCs33bh2aAXj28g6FkyW5x",
  "key32": "4cxUKa2wJ7JqCjCpLKqCzbYiEKXyVLVKpVVBTnQDT9x4jrsR2EQUwjrdKtHXssLuts7oG9AjMQmCryMdTFojmH89",
  "key33": "3s9hc7gsnctXtFrPrqjB48CG9xWigKxvpvvsAgBoHXVCXZbVzU2R55VAaVgYfA2RPKjiA2StyQzKdnMiaHBK2ZYn"
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
