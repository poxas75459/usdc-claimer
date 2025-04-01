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
    "2kYWjjjNBsPnabn4iaZt3XATCRt9kySVS4h6c3MAfwcHHqziEJvdQrNxVii8pEhcknHGtEaCXWJxcKfGi6b5Zf2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Exvp2yhcXpjZm1D7V1uonJP1T5eWbY5pvfcoBGM9WWBwQNbtcm7GArdF95VVPtapTJUF6Qr1V6UM8qtNR4ny2ot",
  "key1": "2FG6eoPNqWXUyXf1mQyC52cbG8Jsts2kjPDHm3edPEnTZyFmmV2vAFKvZeFbiWYRGo9t5DEKMGsrECcpKyPsabjE",
  "key2": "3bH3irH6v2bfas8ZdwHmWxFKY1nsCxYkMasyErZbkth384XnGSVf8GjMjLpbrNyGvHqVKnHtgXDesNCkUJfBeZD8",
  "key3": "5bupRQJWqELGoUynboXnr6D5E5gVuwtGLjqqAZPYSnKPixQ3nsZyMEYjjQfyJXvLqMvzqT8vJorFJEBZUvQtLPff",
  "key4": "2yH5qiodMAPqQWHMe78pZJZBYfkzJMjJghQdJ2x1jYqwkXFfaNBopvXEgAx8T8mXDtZEpdqb7yfeM1g74Hcxw6U2",
  "key5": "2dZQk5fAfoz3Gzqac4B9Jn5cDjCeRnzL3Q4zXnNbmKA6dkRMENWzjUXmNYYVTqYPoqEFqRMXuioESBuUsMZ5QCTQ",
  "key6": "Nm3PjcipqJZ3CNyfsjiy2zSPLsGcN4UyA8PQjU7U9CiBjtZGcWqWQYXLCtS7Bhw4PL6gmRApQ6JaGZFxatDEPyU",
  "key7": "2c5pPKuDUbfKeJPkgWz6c9auaSG2jUb81AKeXFReAWMLweUHi52pQZ2nfPKh9yJLYewKSWMGamaW9QJdrPCqAc6m",
  "key8": "3deTcmiGBrZ9fWRXKg57jDvSWft9TZexJAgnZNTXumUJzK6DoCYjB8XTfRjAfwLzqHHs3DWxDwVVWVhhBMh3gHCu",
  "key9": "53iErHUk4FHvam3nv1LQiY45e94sqY3njwCsMHJJbBDzJw1CGfS48BBzvh51bqNBaeqv6aHWnXeZTyHn1uQy8d1H",
  "key10": "5xAZHBwKmXBmo6RW3WMWWNRgz8R27Qp7VLPeu9fSbvUqabqyua469bECPHMK1TJesVhKyVB2aufRzvvQyd28Msug",
  "key11": "34m3pUMMLHoGuYYEcgSz6UCpZ6Frj9uh25MRA497L9zCGJz6fG2NqFmVqJUhgocuUncN9f3MhgtSGzpEYvHmP1mb",
  "key12": "3QW4Q2RioehteXmyjunpHMSotjGGbAQBBtNxYq4MMH6L4CLyN2qpMqJRXyV8wKXBEb8tcg5VW9HQ1rAbLEdASYQB",
  "key13": "2EMHqm2NL7FbkqwFn1Q8jVetZNUZxmzq6Y5wnw8Db89Ws4Lhjw2YBumQ7H6a6AhvX7nGheTdLNYkCwmwXarCvKoJ",
  "key14": "us1Wu3bJ9zpxzbKyHyKeYMLTumGcG2wVnicPqzDAY648B3RTM2Tp5RX1frfKSsAnvdZhNPo2NVR6n7mzunrs85r",
  "key15": "dJDJRuBSRxgbU4udWQWqFvft9oweqFWPJrn1CSMVA3G7yPBx8kVtoKXcjXzjrnupT5j9dfunBku76o59mpJGNaC",
  "key16": "3qDG8gvgkwGgVFv3zMRiZ5MMySBeHU1J6pYDyPJeCUmawGWqpMpycopXNePKzN8ofgy8J8sPrNaVAo2okKUnhTh5",
  "key17": "68VThn4ewY29U9vQCxAtfPnVj5xPSsGDpXDoHVkaCChozvMLskKPbAMM1gVqUxUXhZrjRTQosrLfVKkutyaNrQd",
  "key18": "5F6jQfnWLG12de4SxsemyDoSQpzZhDesDC8wcQJ9wE73uEf9Q1dv4maqHSMzhc2jq5rR63KWMWprU5SqXipwfCj4",
  "key19": "4C8zd3X2yaurTqag56UBvX1yeZ2NQ1vH7kHJPhTLS91xkBea5AuqDXtdS46B82zPordxnWgwz2NsvqBjq6Lxnufa",
  "key20": "31EnNtuwJ3DD5pxknnbhE8wEskx99P5pmvF6J3mdQLdoXXNU2uM8wxfpQKDsCyk1u6sEyf5pSsJ1NSHuMxgcD91g",
  "key21": "4USrdYbD6aFQkWuz8UbzMLD8r9hBsCU8uqxcG4FsNs4inUdonHHBJMS6WcqMv1XYsP5AfEvLDxbqJbcRbSQAPQaw",
  "key22": "3AuBxjZsbopW3FPeyc7PZStZaB1Kvz6xbUkqNjfGGAxjS8a62mFjY1Y7cTEeUQz3D7br1wCmVC41UkL8wK8kq4h5",
  "key23": "3wJdKhqyaJo2grn1LVZyyjo8kjhYkPLT1v9nTQ7pxpvM6cPa1aFmBrRcMtKLLLAzBWUPN7w9ouKHidsjAwsF6gS7",
  "key24": "DUAtFsN5jCNVQBV8gr37GtNNqxfiuK6nz9Qs7MRvd14LFKFQUMaESksrGhDq9FQHYAGcBjionYnCJ8JGibwt9Tx",
  "key25": "52XKcY1C2HREnZF9xZj6Wnir3zhg7iVtv478SibZEmudg9bB81ib8ZttsrTJDAkER8kCi569i5KkcBxjQnNa39HK",
  "key26": "2oV6M42ZwX5w4XzJ8vv4PbtTV7CaNJ1muCuCpRZKXKaupBj8QpjDZM3u63ANnavePKi5VU24z7qLrgW1CYCqq1yp",
  "key27": "65jFgtaEfbjX3vQR79LLfY5918mZAabsmfQ1UhDSNRudbBAnhHYfF3FLWXoKv6ALqFPuQjeuU3Yds7oaBeZNENEg",
  "key28": "3nA1Tjc4gm1ZdGxirtYiTKp9KqML77ZpkAiXshqMswroVxxcVWkQsoQBg2eGA3oWh11vLJtWgu9AfimQ3hZhLXGT",
  "key29": "2QDwrkcEH9LXFdM2c6KmR6roTqWa7jQBZA64LbJ779ApjpsDS7mSpj4z7t5gni2EXXscN8BT53M3zHB52Gb4PtdW",
  "key30": "32SeK9sLKkr9JNannKYENoLBaPZtxH29SLDgaBYJw2AdttNXAUnS95pF2K4pVchQS4oA68PFj8GpTKgHhxjAd4BX",
  "key31": "j5kbfENfWMnEFiFh4W84PTvDPcveWnFgzKdWWqtmX4cjMuZjDGibXd8WouZzMSvpP8tdURcDuqt3guGQsQJrQTW",
  "key32": "46RTeGom9e93ZDg8jbp38ttBN2HNtjcmRALXdhQYbgvJGVhZj39XkcBA2qqqiX3chDqJM9WZuu2f6iAAuDCfhfaS",
  "key33": "69qYUW2sUsfw4NVSMHNSUHSHUcgY3M26V2BJ8jVQugqqkGahgXodMbGmmmJSuXs4XYu3wTBrNAHpTsE25rNrr55",
  "key34": "3LAkDWQcXWRNrqiCPQtv8tnB5DhTqd4KG8zGWsqMcyMoQqCvMEvNJx1eaJ5PPENrzntZPTRtupGWU3oKh1ig5jm6",
  "key35": "3Zwsm2B8wBeEo4CPArCzPwTgJx45f8TJWRpTr6fucErwWSi3rLYSyj6jWjoHJHN1mF6QDAqg6PiyRPXCmbpFsXe5",
  "key36": "5gtzJ7Zp7kwvJWfcrkiZcvTKSJxv2wfX5v7tuFCC5GkPq2A8fhqnEgbWp5cE4L2yRiwvfDKJHtphrBocM3bUPUbT",
  "key37": "FmAhADvxwb5ZJMpYkGFQtvsbKyG5Xn6iyLjX17hfQX3EsECbHRnawyKkhrsSbYcMGQ3ZPHpirYHc8a5za21QSdK",
  "key38": "2TUMFburajBGwiXtJJ5Q96MdeukpVbSKm7VMT4hXhHJbQm9YpbnJR4BFxim2ZXdLnUeKD1WVtLswKkGaBJTanKSs",
  "key39": "4SmCH7NExLzQUydpS3R2JkJq9uRGrd5zvMqGRhJrfC1JSsMg2uazfxBBwSPfLGwzgt8FgeuRzreM5pbtvqzQbwbA",
  "key40": "2VWbL6LJo9W7BePowTJ7YWRts5uUpJ4ucVKVBoAD7MiLVZy78Ab93B4WinVahnrEqAfywz1bWfS3YTd4qcUepujY",
  "key41": "5tYn8VAXDVTcKcHz76VaxzprpJ4YizMK2YuvRk4vAc2KbSN2GqpgoU2KYSRWB5cC54HKsftn7ApB2KetupJJrjJx"
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
