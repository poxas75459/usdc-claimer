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
    "46t6XgALVQUXxhgtasP1DyzQSfG8CcXVmjGXYYUBbrWeJKtH6M5nmgSLEZ84TaMRsT8qt9E3GUBBFcCjjgVJ6dYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fJr93twgFhoubojvYbsTQdUgizJ9FUif8qsKyp8VJW4dVUgJJWUkNipyKUYN54wZ9eYeCnLF6MadNtX9tXnBb3s",
  "key1": "4tDLKBQoZvqseXpb24h6QL6CX95RuVxnSenERrw8MqbUbTqBYPRp3pPxzqgyEUzPSgdUtpLvRZyZnptSmyCAonYj",
  "key2": "N4aRxWEHr7WkiUoWmkJt5oa4wi8GQWCFoK4jMAa38NH35sJKRkGDoU4AHyPBKj191218oAZ3fRPKjyiWxWqC6wF",
  "key3": "qfoWLKSQCcMzE5Sp7AQqSEFbzDizAjRsLfCnnLji5aont81jptpQqTJ5XhF3Bx1jSApBJuEqJC3sTzPvMnxvmvg",
  "key4": "5xS3A2tpd3zMfAKyzeiEfdG7WwxKQsZTDu7PyR8A3ayT7vjCDatBmhTXKrJ1CcKRLGMKAqGVgA2a1gx3YZqMPAsU",
  "key5": "3c8n8UsDfPuVgsVXSP46UQKCvWeANYNLPzKAPa9LbPukhkDV3mTfkRireVuZuuGhkeL25iaM3rmVXZYxhtDc8J1i",
  "key6": "5iBpv66qiSqh2FYahPigi3iSjocSmune1eE7mc4kEPuTkHxZ82D5TbCnQHCXyDGGfCLyBLBsw5WRo1aVaxFVUwCF",
  "key7": "xaopdNznV76AjpYmQkh4Ewd66fQFoapuiPQPSs4ASVcLrtf1XSEuqxncu6uA3qZqZQfEdMsfDcaCNs8QousfVdo",
  "key8": "c6PdZAirWFnQd8JCr51pF5b2mFykSarBhVYZxXA6XGGgB9596hRjCuUHpBZcyZaK9nKmBFMmVgRjyjbLSwdHkdG",
  "key9": "3JcUUpmRK11e8zAi29uposG7AYoawHHNdX7NtP8sWbzJgnoRtth9nFgk4nMVQZeFmkL1n3EN2Y196N5KPg4KzYvM",
  "key10": "4qThupEyLESddrpcHFGNJBRZtVBsKB1K6Zk5FoV3VpxVc6EbNhBHouw3ATzoYp4z8dNdL1wFshDNHHHHm1UytdhB",
  "key11": "2TtXpjpgSvTkC6bA3nPimaPY1u2f3zwcQrz5V9KJM8RQ26RppgCAziWYLhvFopoyW31gHqcoB18AU3AJv4QUY398",
  "key12": "HFAkXaPBuwp3p1mLMJ3sXz8yMebaXZkKt84RZxcNcXxHbCMK9vq8yf8Y8ZZGouJfwgZSx1Einqd8fVTFuDB3WKG",
  "key13": "2i1wBaSAWvDEvj11cvVAjjVgockACMjtCsoPagb2KyoXQXnxgm8syvphi4wzbeafVSGxeVsE2jXna8F1kSNx6QDs",
  "key14": "4fe4B3LaD6UadSbyVKYNopuu5XrpNrD8s9VoMo7w7H3KnGXmSfx2nFcgU5GZCHCatgeaJu1PzozSspW257D4NRkm",
  "key15": "YF7c78BEYNPZExiqYeRTaSJWnb8qcSkVyGkKKKKrhWshUHjcLLYGANSGDyQpmFtnakXsTH5VokifYCZ7j4ihrbB",
  "key16": "5GPH5qh5dpExgP6adjHM1PvSztZK6ivNWMy6cnGJbmNxMdPjwgqAo9JhHwbZRTL2ceyKERrSjMcrCdkWwNXvK6WD",
  "key17": "2Mhz6ZgUsm3JEVavx4wbDiar64AdXPGyrSc8bBxiiJr52326MJxTYhh4VeF9hsxyr47t7djRnSWUx4DtBvJdST4f",
  "key18": "24PhnmbYxcEiDWT9YZZRS1UsNB4pTfru7ifYNyoG4S5GRtoyvKhEAu3AnkaHwNr33EvwKVQeNw8eqtrc98btuy4k",
  "key19": "r4pth7NHjPFY83Sa29627KGAto4zgkSPKd9BSquP3yHfnQYVAgKHW1WpMafSTDyZBqjHvvQRU2kBjmb5Hp2vdah",
  "key20": "2Gt7mHAzWTBpLPGKBC4oxNmEJey5xLMvtGFzJ5gRyfFwQKwdWMaZLZN4ZHxgvX3nGbmPPK6ytTAyxumWSrTcbmHh",
  "key21": "9ym8VsVE2oZP9PPfGJa7XdRnUi6u2hGtKBwvabPC41mYFW5DiRcon8BYrZynvKKbapLVzFf8yEC21uGsVQzPfBp",
  "key22": "53B3ECZTDS1XK7EtpHTShBGnacZjoRHHfXt5sjBMx2ogysXuCndemQGzqi4WMsEDaen6tL9DXX5D4oHZYBV8RGSJ",
  "key23": "5U4gXr3WHkCSgQjPSgaNxzHEeaEFaEoFAeNP8nQhaQTADK1aMBK3aiSWdBfKzEBf2XJpwbMMmAREPU6ykeKQkbhK",
  "key24": "5xKnhecMFsRaMucPAm6P4B2JCFJJ2aMGZaH6nuBvGcRdvZrQE2Gg7Pt2Q5dGf6dX216Pbmu8TsNifxK1jffMTnby",
  "key25": "2CXNpS3R5fBFV5avZvjfBdctp9MQrHYjJ3PaKH2uqpyU4t1kBKvARKxCgPCrGYzKSYieQiooaDMZxyG3HaYnjLCu",
  "key26": "scXjwTEERh1SsAuTUQfpiKxR4Wrm2nHnHv4piDLHiuDksHAESWXVp89iuPB3vyqBkmwSX8fxyCJyNQ8TidqwUBf",
  "key27": "3fCdmz6qPN7a1yrnjGxxrJWuYoBu6PmoDWbn4MatTdDqDtTft4bah9YGxqeWvFBUzZ3BXgDoA93Uyy7zPi3zJzWQ",
  "key28": "3oMEubC3yn2rk6dE7L39TTSyGsaYHgUKKWCZ7oQuMSS74fBfSazN6GkJneqaV8Wqpk9cAwzgUkqx4mvbFXUXtDZP",
  "key29": "2zW9GCt41CHAjb1EsPPdiaPcburGceFoDJ5DYASipjVfYUDHPTRjQp7sWs933ByMXyMKQcBH5BM7YDxxTWkCmjHC",
  "key30": "4aAjY8oCoAn1FoVZ7rrZYNZ7XNrZzPfSZ2tcuNo83vNuaJ3zd63mFb5y5uiK5q6nfXLTqNrdM5b5eaNxCCUBFi6s",
  "key31": "2xWJLEbUzqP2oABxoQWscF2qfFj4RuzD6EtPL3wXWzmR4e8jFWvuSiwsMNTpoCuZrFgKFJXoonR9ChY24vRuSbey",
  "key32": "3RwuTDDdS1xGiYds1iGHNmxN4u4i4rAXokARsV2q1K8fsUd7WP6CE9V7T4BudunMYksTcZXE2XsbEnjJGt9jWa8B",
  "key33": "519fiyP3r7sfbHt4Agyj1XAfxhZKLzvAhxH2X2NAg2uysX4g8P6PUD9AT4n9FDQKSTgZq6dwXZm4KVJ9XegZLeQR",
  "key34": "4RhLQ3Yt4XnHMeLQwG63XFgyJY3hPUSwiohHiKY7EjdqCsPw5CuD2EtPqoz7ozFJJ7kko9BKNarYzEuieEfj2hwq",
  "key35": "62mRCFBGEpsHcAPkviGjZMZzk78FNwtc6oYX1qdEgZgSmmVDM994vCVESuANMEwDoniggLgH5UZB6FpEWQLk1ZPY",
  "key36": "4C1H2rRntM8ipcoSRtsYLzbgTDuCv3E5dDzy3bBsnSdVX3ZCDX1oGNCdZJyELN5nk4RsytRippJ9PgToaELpMmFD",
  "key37": "v5fM9GHjZmvJJDaeoYBnfo2SCntas5VPYJrfJRGhbzjE2qXA8E7679jhzE1hoYYtSkV3bKVfN9XesZt1g41AoYE",
  "key38": "3kMrKBVbJgD8xVHAajdZ1WQMTPATYkKQLGcHnjPbjSMayNHFLHMK1M2tis35DTwNFu3z4ajykkMT7kF3TgxHpuBG",
  "key39": "2pCmS9x6xDcgV2QgkAEqnH7M7hgMyhtRRtT9C291HLxgRPs86UGY1Zy9f8AXQXfg35EPgoTWtjTCFth1GynPVVw7"
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
