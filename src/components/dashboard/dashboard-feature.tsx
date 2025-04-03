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
    "SDPrEidMVcWnX8UZS5ZWJVtYmxh18jnBmiPCkcg3cC4ho6VCU1iS6mpw3ZQv57t93W6XXqNw6M2RKXM2yTbU3kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kzxMG52T8En78HQerZRbqCiYkT5RWi6XhJjdi53b9qFP4sDCvj3GNYrfE8GsuRdeJotXVKWPaySpx3S33r1dCMq",
  "key1": "34KD5Hzm6Nusk7vUskhm4UCJJLxez4peZXtekkmGriRjT6JcrQrcDYsknz7pydxpMvMARxgpLdXMW4wzoLToxCvb",
  "key2": "pX88bf5ABSP9rMAi2x1UqLeW6Gthh6PiW7pEBhZCjwV1qeTFts5ULAMdu9Nokg7HX42uSRQtEcB1eJ2vmUWEoNW",
  "key3": "5XJo2yHggMbGxowEKPj31nLgVxnCEMF51JkF7B4bCKM6USEKr2xE2b2NKQGSJ3MW5ebz66GfHZZ9s8EXQrSLbQFa",
  "key4": "3zR6utRfHwR9he6ZxW3KY583ohsQYdAskzJMTb3JvPsxUgvv5gzmZzWtBLUtfVCQTaRZ4cDckqxS5BWtb5FuXkNN",
  "key5": "QRtQ6cZKEqRaQvfhHEciosv3CTy8LHuojYteobkwm4N6DibBtNAZoLgLhfeDprkZ7GQ2FkXoqFtE1BpkNfj4Qtq",
  "key6": "3tikpsVzDh4EG6T3Et7megztxGdGLEDPgXpCtAfSsot1dsZgZJAJLkN9tjKZe3fCUJ3R6DJozEmjotnBp6SpLek3",
  "key7": "63N9QoyCfiCxHqPapsNx7EvF8Cp9DnsrEsQbvztD3HAh9x3VzfdoUcZpdyPKkkKTxaohzLMskQau2vDS3XTkSieH",
  "key8": "7PJU2aFM8c2traHdJg3h8B1H3LzL2GcQGpEfekQpK1ywt47ATrgzHzKPrQFRFGJHzdufw4D5ieeWECfn2F8mmGE",
  "key9": "2gcUXf6GtSsn5qGme7ZhQkdGtFgf8kdReq3jK6FSFffQTUAqKB6bFBtm2PKntHxtJZ2VzbQTFtVYz2zUKAs87gt8",
  "key10": "3Hf9mNi9hpx3dy94Mo4dyGmPyZnbEJgJGRfP6EVVzNA15Uszd8X9KBDv4aKtB7VMkxvYovwGwjg8ydZdp5gNSA59",
  "key11": "maPLgctNQhXkdC1UwGycDPcqcjZdcrrbBBJEEN5U2QWzSdMhmR6S1X3GyKZ7QsprJb5Yaq8AMzDQE5766op3pKi",
  "key12": "VVjsw2EA1ZpzAveJxf11DbLBw9k5z4JtB1jeTAty6G4uZYNm8qf64pSn3FQjXCu7FDU9KxvMWxceA97pEFU77qo",
  "key13": "2pwjwaUYEcoqiMqyfmR5wXN8XQsvKaPbtFQaxeuoDYiNz7sa1C5gzryNKZSS8F9foH2u5GoZsNhhV66QGMd7dKWE",
  "key14": "66N4S8VFpxvbChvdq5DwqkG9mAnM9TaRhB3QCesxoPeQ7FZh1RHKfhj3i3eKod99UujR6Y18cpxM4T68hqdH8F1d",
  "key15": "58NafgZxXyjA6v7q5oTh75wXRpb9N3BACU6sobJBr2WmkBiejMmVNggXTeHY4QCZ1baStBqUj3W8UEkDvGLFQV2k",
  "key16": "571z7o327x4VE6rT6QgroG85pUFc3wZxtCQwN7pB56LyWEzQfZUSSgnKxeBq3SK71u9pfRNY5eAATZNzRXmeFVbR",
  "key17": "3P1xnHmsqNDmaN9NyNhjWv1FqvekXF6DWQhAkRP6nWMJEszcyGLrk1oainEgiEctuAc14s91tiTZWwEDTcD8sYH9",
  "key18": "3zKTaRizXxSgQ5yBxjsX6BA5AZ92xvv9BmuweyGQ4wT5w68v3cQMMG14k24ej14ffsnpYPNkjEivnobeRToheqro",
  "key19": "HLy2iuakziF1DS2ByJhgGWvrZSz8CQiX5f1zj2skxJeXrcNhcsBDknvJRgeLjFZjyQ8GYbiMXZgMAZbwCzoGmZD",
  "key20": "24JY7VrYYhkiP4FpSJULs2ixXK5F5gSinXxaZj9jtEbEzm3J3uBJ3tD8xGwXuGMvacYpZC5ZxV6pjrhP3Sbi4Ea5",
  "key21": "3jqtEX1DGpGvLRwSz6FMg8TCZm2oVtLjuR5pxPdmyQ6b5upo9nEZLpHeSspVGgQi6wMz75tpx96Y45oPYyckVyL1",
  "key22": "56wMdk9nUbXwdmgNystZRaF1nPhascsUbZqsR2tCju5xeuBt5eJkBKhpRoiREuNgNBU96xNPULamDCZNfDM5pj9T",
  "key23": "2c9extuHHhNvV6RxkoHiAfYnp6rfSs5NhJHEbxxtXe1XFz2ymzcu71EoQCtCjyUzbGa6UcoDXQicGTvJrB8w9MGD",
  "key24": "3rPzb9BhrkCb6LDPf5e2CyYKb3G7wuTCJcYRCMnWNLqp8xG6yryG8bDzqwE1JFZKaFM3EpobdFTE4Qc15KeTbC4b",
  "key25": "3JZbbwZt1iVbMC7yAXio77fFrQxkKRpTCTHPuPdwvmNY7LnRGBE55voSaB6vCu8vPPFsMJ8eE7D16vDqaXvTBpQU",
  "key26": "4yct4CPtPjkMP6TXDrRCE9jrrGYf4MpAX6uussTaEGdZTfgSwTx5uDsEXamwkbLtYUbLu9pzZnTxLkV6o49AKWtU",
  "key27": "5B643L9cuawwNEQMhfW4g2bZKQwt4hYmWsoDWvGGXLquhZTHFjQ1hZHT2CURjpHtEAHAxUrTdUCf3phVwJckiv3F",
  "key28": "4WrEXZguDeSVWdmvQSWH4dfbth1TC8MKtJ6wCPQ6fxUXprUH7dynfUrCxj8Av64ZeNJZF354btcptNq3GLQPjPaW",
  "key29": "5zMYJL6WmnA36E1c5pp3dEojPWr9ENoNxNEiWMbvZ6u1yGj7Vq4rP5yfTXB9yYL567FJWq6PwHkX758o3HZ5g6vX",
  "key30": "39bPkUpPjvSWgihcW4pFniDdxLFA551kT24oVVA4DhkQrc7KQMbWBVzbESMhD2HfA8FLRW1GsTCQEr9STBrxGtK6",
  "key31": "3FvREGsuGg6gyRTY7eJ51Lb9Cb9xFAqHkNsRnbxYCJ9bTKmYieCAkWBHhpjYZozd23gr916xv9v7hWLbXFjfS36h",
  "key32": "5KBrShvU4PnyBRkTVoELNTHBHSzprYQvuprBEtpegky8hrkxQuoTDXKmHHxHsRffjxKQ9kbXMXiRoUVPRz6RTTFi",
  "key33": "4a3dmuUUS8kTaGLTexDpY3Rn8HJDgL9MKZKmVsCHVVhsNbY8fjyLoS2tXQvcsHtkTSjUfmMbnWBT1XsxLL6eWvVG",
  "key34": "4M1wxHDLf7dS9ncdm9LK6L27e1VRnaDrznzTff7Pvo2bG5Thad4vEQMohSDtcD649qoYgM9gmpyU9p5tJEDLUZ6P",
  "key35": "3mQva8TxeXf8vKuWb3bF1RwDTwqnjBPLJqQBfV3oxc9F68Su2q1y2ZL61mjCzVi1mukChs6zFNJTyLQHppqRfP62",
  "key36": "2id589yHDSkkEP6Dvir36CVLu4Zmymmbdzw9cxXtih7vLuDYXDe8RP6nG39nnjQXx1tWfbhHqYt9HZ9zDCHDLVDw",
  "key37": "4qu9nfEWJHUXX7ntWVFbUxXZZg13uAB4Pbqr4jRvBTEAHybC28PmP5uLrbRftvAWUS7CFguEzamzfNn32bqQXJ1p",
  "key38": "r4YFQ44TFhmQ9S7kKgHuzZ2S6SXPDvVBCPxEaFGMakfSbxDrHyhqb6X3Z96aZ1dstsSTPQvELx38QPuyHdMQTk8",
  "key39": "64Zw8GDAUsxzNBE7DKWQixzryccAS2iAPcD7Qwqayyc8cxyBZpMApo6VXW22ESaHHwCHUth4gB4nrwuUQV4MJX7s",
  "key40": "PqowxGMSjVHCuKYNoiHYAC7NVrstPbG4NZcgXEDSCV9sBdhBBfaCzF9oSGJXNAjUJ6LjCVLJAusoGUsxUQB1Y5V"
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
