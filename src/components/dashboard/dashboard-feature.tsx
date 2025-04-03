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
    "3aWEw2Q3huhGFucpctn4xmQ3VrtRNdXPgqBwNws12JqhUf7kdSX8QeRKYpYRuUjjcF9QDGNR3SkFjnJ8DoQ9ecPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BVvABkwJdUnieuYdtYqtVnWkTvWmjAduoFJsouN55ag4bK9LGztAzvZR3HUZnSvPw3UKEQcMrP3kQksvzHr9NVJ",
  "key1": "2a6TiTkEyPqmS5JT2BxQhoWrFiVsyFAn9FjdxSqW55FwoPQM6SeNjqMpFhcoXK2efHWn7yYyDxBtpRussCzqCEv4",
  "key2": "4R2wAbwiTh6XoH5P3zKrQqNAh3KmubKYG3xrqFSgTKQH3kzEjnmtiMmLvD6D9bwd1foSenJhkY6dv2WNbWRk4UMJ",
  "key3": "4t2UyzkUZTbXMLj4jnEHT6ZwoPKV5LMobzMKQLUm9iDW8zX44GRKFxjVRwDf3r3a3oB9XFdjcTyWBqqRrji35DgJ",
  "key4": "4pQRQQrDMbF4irTZib8ynZkzr964gekMAweC2Ay5ykPFYfib7GAfSCfiYcxcdDPgXZVSiJWa2tP5QdW16xCn45RE",
  "key5": "SsuQxTdwuVFKGkzsLb2U91NpvWk68GzaVGKuFnNYQT55dLBtpPmdBUbEG6S6P61zaHWEzk9zPNsx7cR96DdNRDM",
  "key6": "453G5uxv8qaTsRcQkNoz9WUYiyTg7o7eVsccUP4WuppjqSit7bSqx6NwTQ2TbZLVkmQWxrp8oTarPceGMeKzikdv",
  "key7": "2nDQWddbiPY25xY5qcSPnSkH2ddcCzntpxjRW1nTTkkak8LDiB7KKVpDyhqiuVwjAti3NsAreqe5YzihB5NpuFKj",
  "key8": "4FUGqYqvRwjZR2bJkdPvMojSNRgroiAdsYz8k6EZFXWTxmEwBdVonM885vr2GaEdvVn5CqZPnx6js8iQwcZjCoUc",
  "key9": "5fq5vUY1EfMMCA9ssrr51dduZmcRtZd37LDMbeZeZZQ3fcxXiyLYu7w4ef629xMMDkYAUbZEQ3pUE5WU8NbUJNs3",
  "key10": "4U7fuemJG5treD3fsxRJ9vC1fGsUvqZEjhZmoPgUgqPLo4PGfhPr8ZokUjh5JApE5uCEx75d9wr6c8caHVQPu69E",
  "key11": "u1ne5DepUjNJPXnVUd2xdrYmvGDJxGeuLX1RUdggaEtWGATE9xZdzKRvcUxBi5uUcREi7NY2c9E3o51Wy7pHoU6",
  "key12": "2wFh2o3GsaEAkAdFxff5xRAESWWrPauBXg9jVyfPDkRPpZ3uzJahAq3g39wokdnSohj4fSm8qiPifQ8exLWEDKwy",
  "key13": "2u7hwymxkCJMhhM9EGZCZTgHNeKHsN6Swigo1yMp6KN8wxRqJ2DLw2cPzjBiy1U3j5zopdWBW71AcdTShwN4uFPj",
  "key14": "4RuW8PrVoGiRefiAZyZeuhpmidD2MVeZLyKPuspKEGCEKK4CMnxr4HpWXBcqgMV5XLQJ6BbmJRwtPXHK8pqJB54G",
  "key15": "3bXDodqr96osUbwSPhPzRCY2pT46QPsrQZBu95zUHgsHxPp6EG9AsuAGMBKbUSmJ6gWhGGBNo5U2PzcvCUz1JgT4",
  "key16": "4BPBrRGq6vgteeLR2WJmnVmSmiiWYrqMWTRCTdiRoSY25zKp8CnnYebA9C1J8WbRbugh72G1gFFCfAZJE1dWA7Rx",
  "key17": "L6x5qx6vHYGG7GYU1FtbQXuLUNMUmNup46jF2PpmPx67kesojy5u77jrUBMm1zBnnvj8DLU1CUT9EqrUmDQP5pi",
  "key18": "46W5hLCD7B9dFi25p6pqZb7QEzfoboSQWaYZx2A5snmNJ16iMjBEbNXiafgEetRW47zDdA2n3FCUGEXUSq2Xa3zh",
  "key19": "3xBznKTK476pQS1WLqWpqgZobikY7uJfuARFRqwK7mx52MCBbXrX9tJauzWyMTVacymoiXQbUeZNXaUTe4P5vobQ",
  "key20": "2u68Yh8beBtYFkcvF7sr3rfsHP5kkT5ZtQDuthDxUULhpBUQTZPtJwWnnJ8LbF7coLzvHpTpV268M64vBTZtvttG",
  "key21": "5Ee2QqvH9H3nhdm9pmE7FcAsdvgfxy7Cbd9DYcyt5euAEn3CGJ9QUXCRFkhnjpyTni7LfLBUJiTqv9UekJheMxxw",
  "key22": "TbxRKUAHwVRqp8CGjhPakfQSrPs3vbZ1n65pyafR5gLfJMw4DVuAkMUcDnipVmHB4wDqaK2hfFefHphyRkwjc4R",
  "key23": "2cCtpi8oC3xbLAKYabT9dVPiCQZ5u5GELmpfCzzT6bpC3b98Eb2ePaYfpf3HJXQt2JkoXZHX94uJk8XiANoYbzVi",
  "key24": "fskBJ6axiSZYFQfw4Sa63X4NLF39d1zCWsk7iAg36sw4sG7xEPDX58F3CJ3QCcaFdgpxy2kdnLypnWq3yWYpadJ",
  "key25": "31rhjJ6cUhXitKy6n8F3ZaRr4cD1S4iMBh8Qo6rPmLb8qCh5LBrivShcc8bbGPgNgpMr32ZEsJVkBYsrxea3umE6",
  "key26": "5Ltu83S2gChTJ4CatCxjbE2skvrTdaXHP3fV7i9hmNFuD5g1c1EpgS1jWqs9stvQAybJixJApKWeh5Ut6j9YVHo2",
  "key27": "2vEEsXNsJG5jntgAHW6p4LsH4MqDGQN7iRtZQvo6WMttBCogKyy5p7KFQDHcmqp7r2RWgu57vksGFWHzVrFcPbA8",
  "key28": "5jZ627Vf8prWEkkpisRDkoFiBD4rtmsTXa8y3dvCqovTpcunyZNRNyjMP5CULcHFvfUzcy6brBXMfRdfSroXUTF7"
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
