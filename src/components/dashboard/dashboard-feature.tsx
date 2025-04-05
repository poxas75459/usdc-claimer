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
    "266EbPKQQLiaX76JxetjuYpFdPxF7LCqUzdL4uUUZMCFvALNc3un6DigQQWi8jPSHahyAtUULL2iHALyDyvKXq1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJhwPch3KQRMDwhYqBcvQBaCmSyZoT9cYLo4hDC3bDGngV3qgdLmYLd6vKUKXihhAZzyczSyh7HMMbU8PcnUZEr",
  "key1": "5XXbBTkYPTSWscB5Lpk1o3MyUt8WZ2v9eKStBHTe2Zcydduq8t16rGj9LEmGqQ4hsG7SrEJdXfmMkMdXbQqpMEsZ",
  "key2": "46b6DJG2te2WCmn5dJkm7nGjtvjGcuNekM4agVNo5z4Domb7KViDLptH38UcS5Fogry132B7gjov8MGzMgUk8AAV",
  "key3": "35JgeQCbYZTtmYf9NmXRnQNgenToLtdcxw5VutCi8NrfMk67hnEKGiEvd7BhZFj5de49H4F2RtM5LDmhig5vCxKX",
  "key4": "vFVzdViRT76r8CkyazbWP3PTr3AYwD4jdxr7Rm2GErDUXtnaP6XsLhV8DCq9nKWJof3hRq4FCgWgijwocCXXgQv",
  "key5": "2C2CAGKMBBT66rXiZddXhnKJTDPjXW9rPsBA5ZRAJ9PD1KTrwUHAvygSBM7UrkCEeuBBtAuu3YLzQbsY3Twj6c7A",
  "key6": "4N5JZr7XJfTfgBETWnYFxZuzpRXwzGB9MtTEwcSoPu89cG7An3jDz6xrFu5dwSPCtErdC5WKyWoBQTqUxtFY5RQr",
  "key7": "563kCcaWrAzm2rnj6ETymFRPjTEbKubxL8eq8GiC95Txi4byw3QDW1ynjumngZMZyncHpMYkNvVd9MDnRP6v31Qy",
  "key8": "cM59p8bN17J3TQNdrz98L9hF2YsKBQc62Cd5uLr8VnDX8h8EKLMsrrTcUQ6vfbEwTipctehts4fvGDeyVx9zV4V",
  "key9": "5ehFQbUgjE1w6PFQ4RWrd8YUu1SMw3WyLPvnbSDnLqFsC1K7SvgXAqvP6xH6yciWFAPjFvZkp25R9N6HBQrPC7zH",
  "key10": "XHgzKDsDrgyLKCDsn3Bi3bneGkCipVnigWeKAdoLdLSCuMGrfXcaA165cjZtwMA9ve1t7LJdbgVVbZkvT39fm3W",
  "key11": "57c5CQwRMm5v8V9gLxSVbcCxWbCMrdHpRE7ckjQ7TmNKhfbB7K7Q3udCeUyA77QTtW1magkR6FeGFwzeaCRg7d4g",
  "key12": "4iZUd5pSYLTohbQRiV2tg7wx65ami36HEQkCrt5tQir9PFfHLLYJwKkcxr9F2Ko1zYbXThjFye6MReYbyHbiuTbP",
  "key13": "5VHJKcscJvX9Soy2Rs4otarRvKZhaHDBb1Agg5aC6ekMAiby7ES8kzDEfV2qbNXfGFsMRrTicXs1cbbkKT44fiJy",
  "key14": "67AJeFTUEMXG2EEDyrh1aeKpKaU6htPet1VzvWu1zK1LaMLUeL3KRDkuStVHaYD4WgUMtLLCAtygaDUE5qyLvV92",
  "key15": "4UFVvnKePMUggcumi8mGiVFLamSt8Lc3VJjCeVqGa3MGGQmnpyPyyD8FiW977wk7PQDAQcvto4iAvBcnCQYyt7Ys",
  "key16": "652vzKP9JgGqrpfCBnW5b6MNgxmRLsNMC1EfyYuB8NZ6RVk5NQUgxz5y3RSmgTK3hEmubCpMKL3ez6SxnCiLteUF",
  "key17": "4gCJGriDdsF4mCRdkqpKbTAw7F99bEE1Ae2cjcr3S1wH4QLEGaQd4gbNBqc1meGgMSR9s7FuUbhiVW8agNknMAEN",
  "key18": "5ss6YPEWUrcrW94xfX9JsqfpmqmVHFKbU5HHSdWV5EsEcLvXbdyfhFk2CZfKEAw3o552dFUgYMamBidXywQW6rKM",
  "key19": "tzhEf3a94oDJe2QoMRWDjGiZk6uWPHsNVCnvLTYWvWUbmxhXLu6xEQMjR4Tmg5tWPemE1tGYDBaWESEWVHPj1eB",
  "key20": "4awbVeG3AtsxNqrMjsWsSDLDiwk4oZCgmcrcAwPHf4g5s9UzXSgZEJ5teZRv9uWvg8SgPAPZiYCkXx7P3CU2jMGp",
  "key21": "ds1aBaNgdgZysDjKnCT8K3D7HnJ7ytoWhAEq4Y698ZhxumSFp6qdx7grhz96jDCZsmiDh8DP49DtqqxhYz6MdAX",
  "key22": "k6d4qGo84ajyZaxTc1iahEkhxdajCJBdJ9h4ogKmiUXKtzWccT4RPTkCKwPTZXCgCMbLAiDEDSyBuivaRd1SaYT",
  "key23": "1jo3pmYFenSB9tRcPJ2egUWYsY8ia4QuvvwxxEZX8cM2uqv63vou6JdMQx3zcbRRPmAqo3f7mxgtAZ4yg8RXcBc",
  "key24": "gQz7LyWh3o11mLqpFuvvhPT2fdjGeEH4gPPhatN7aqEsaabAwWP7r2VaaC9rBMaAYpvqcjmb5ze9fSQZrBs9WKr",
  "key25": "5fudfqQcuNhf81kXaeRWcVYDrCLJGA28EmeqBWSvnewdApeZRLdVPygeutHj9bWKciGJxU8csz6n18x7ezb4UrMg",
  "key26": "1j6mafmZ2PuBPEeB1DbXwb2aH8QYbqRsAnPayZ3LjPRjwtP7jyrYKcbTAqmHahzH7Zfp7nKEv7SHD9GSLzUx32K",
  "key27": "4Penqz2k8qFe3zFpigZzHyerLcLjutgE5XunhZuWNfCHUACBirMG2QvkvFbL1vACcpVtg1hLMBfEGVHdyjZAtFW9",
  "key28": "3Tk6h4MWwgFdZvT8rKbNyB9noM5eYP5dELL5yfp71Rp8Dy51iBZNQWt4uhFoEdNXzpwn6jLS3GPrWPgMT4rScGiq",
  "key29": "3jCP6BnouhrzrTvBEdM55auhLDCK1ikycPXCkiXZNB6PVPUPZiZyzMgKTCMa2bqQmjQAF6NKkMPxXcQWcjeRWygb",
  "key30": "3AytTNZbsdvq1FJoCF5kSyzKbGHcEBvCApLq7hetz14uLrkZKLsBks8GLZN8fUjhUfF2tNCrbnHKSJPu7rK6hB3e",
  "key31": "26FAtoPJFUdYB8qG6kg9oZdNjN7ndzxp8GyU2gaaWWjnRnqWYScqJDFTgwzSGUrjNdaZ3oBhcbL6bossec5d5Pww",
  "key32": "yninwDvr5vFoXrHD5i9ZtLY3vSJ3SsRQK5WbHE3HAMDQJGwg744htu7qjdyD9Z2yqMGB8FYUZwFXUdQqouJwJ6E",
  "key33": "5GLJ5Rcbz7GGWjnnCrdawbnevhiWJKJKRXFZePoDYZqx3NF41X5gpPWUqdGdtVejvH8Somxz7rCThUJ6Nr3S8BWo"
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
