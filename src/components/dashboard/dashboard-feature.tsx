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
    "4UZLWsjwM9gaVLRbiYcxEsokV2oeeg9ZeD7sckzRenPiMnmt6JZZktWJyLefqQCsEyZhr32BSx8AbXo2WSiyipsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRzLMqtqtqeZSSjHQcENLm4SCJBpXC7cpuw34jbEsoDxuytKq1ty1j5vsNRiCxzAbtARvbrb6kKTp9VQGS9dkFM",
  "key1": "61mLPWCXgnCu384ZZHxXP2VJfCMgtFQwC1WurUKkmpKXL9csXptYqnkSXC9gV6r8je3XrhqfDkpLQrCFuQWY88bi",
  "key2": "22QTfxf63zc25xmzH9wTeCjeG3LSZeXfXpZgLzifyQs9VHqkSfxLpBwqXyCVtrA56AB6Go3Eqnij4PJ5RyNzE1x9",
  "key3": "4kmbRf9LKVLEkEeBY7dBgcdoCPPGDYE3eJ3UPDdsZvtbCLfwTpZwqMXcHcbv52u7VVfRHqDw1Z1KvZMdsdRwULQv",
  "key4": "3VJahig4L5S51p9LKUptAMZFRfGCwsxHCo2Ej4uvn7TNPTJHh88g33RaJoBjdoHbrQFUp6Fn41kL1j4JWzGHDuqD",
  "key5": "3VuBR1NH3fcXwi6D8ozCwG6t83avcUGTeczfTbDfWWrPW1FRKVJP4bUzX9BGZrmnpjGAgJjXwGrRiZorC8UcN4Ss",
  "key6": "2KKbBesMSq86R8MvTQCj1GJ7PLNYvgWTxcyCQ5ZBDkdnnne126rwoKMnXT5dPeGDqFZgnLMZ4kWwTJQgM68Sm9rR",
  "key7": "3WH9rjBVuMnLuojo3eZNqmDq1kvkpKv9TAnVqEBJGAcaPRrVzvhZiffD4LFa2hquxZHo1ZuF1KHNUgHZKQTC56CS",
  "key8": "3EFoSbwm7HnnYn356kEp6dZRY4F494AtKwpT4ncwsHMJfC2hqtbSToCw72P9Hqcdw27YMTxjFAB8yVU4wrF4dWyi",
  "key9": "5DZjQRQgKcDQET4Vt5u4jpANb3uP7Q9CuwboNUcXgt2sbSGNHjEjsWK1K5tpXmRNxwvR41hW4RQpgSBBFX1C2GGC",
  "key10": "4vWK6qyNZM1U5w5ReAKzj6To1iT4uzyXJnXvzJ5ydDtPRbQRUyT5uXxx7k3R9fCis2HMA84HDhaNFrDwmUpJ7F6B",
  "key11": "611jYoC2WSfD1X2HLnsN27L8RXpZG1XDPeUS45EYU6FtcWp4Zhzgx7f2vakup1QmFXSUM4snDq1uMdqnSyTwZ5Nm",
  "key12": "55vza1grGs2tqa8KWErUdQQyuuE7684XSmt7hHWXZW59gYEHZE4uGrSV4TgaCMkiGe7xmoXSrrpuT9UzHtAL86q7",
  "key13": "2M1ZTUjsUNGRRgcMmEnE7otQByteE9z9BMBaMSDRtacuMPZRewJRcd4hkbTa6aQwKKhmKwQUVRfEijYrWZkvYgae",
  "key14": "42b1kQCR9in3kvxYajQMocUaMEEz3bPDp1T4PZSfELEfcFzhb4mXcG6E5ZVLLHYqeoknCyTH2JjuVJQSmJGrRoka",
  "key15": "64iyzgRqCGXtoZhrYzBGA5PExiCbhu7XMARwGZSKhoNTgaEu9V5rDLVq4Le54DnnRUKMFRKB8aHtbyXeGoHba6Do",
  "key16": "ZFAcdBc8k8DXPK8JCGPE4Db2hijpjM8Qr4KG6XJfG2T4usYsnifujtMsvhkGmLE4qwhxVSzQySbhNm3tn6stQnZ",
  "key17": "EYtGcA5RKc8A8nmRydwHqVtP5BG1FuksJqftwnGxRrLCrYAizN7GFJrKYv1xjLZkPUENCSHP1LBUHEzxq7ZMnRx",
  "key18": "5WJPWPbRuWEQNtSQRn2CC1qZ6AfwgbVQNwvMZp6n7XZh37MCGumTPKNMsb3cuydr2KwKdAoouWzuNWzcQ4wEoQS2",
  "key19": "3z3nhY5zwXxsNNsVDUqTT1trpAW81wXetj83eJiDYhFmLCfRPnTqdbmsCbcbuaSq4vAze3ZSp51bYXK876w2YFaM",
  "key20": "2BVsrJY7DtZvRSey4Rdr2ifsBU9QmbbeRkpezp5Cevt79cfM7wRkub2U5qyUBXqbAzh1rgrEVQzfSN235Jhtz7Us",
  "key21": "4Bh4LXmduk5reomVRMyMyfFpox7PaSuJs6p7o3PNGmX9F4bBpwoDACqjLZKbptghWuizCVBpsTBJuVfVGBd3Ev5D",
  "key22": "25cKW9mayrT7tqDgs2iLDGCxaJuRKAmMk9P7rQXr9R6LsxvhzMkVgH5kZRBd3kYbvQ6JLdn4qSyUo36ME6wUKQpd",
  "key23": "4nstBaTKSfN3kGtcmKktTDCbNHou8YpWmma1AyetDPQntJ3fvVaawBDV875ASH6EPpeLBKKn7Pxuurm3JfwVoGbB",
  "key24": "33JEZTy2sXZiLYx8kDniV383CvKMQCuYYTAKgAaFKfMkeCamu6f6JJs6y9T76JkGzYwoWUtjuXYRNRbHwoRaZyGm",
  "key25": "3UazgDZx1iYJGMEACe27xU2Xig28gckxscvoPgGEDETGnKQmqiLYwxUk2GEDKwxKynvL7fRcTpBrx2PMN7dydMja",
  "key26": "vniYPh6vGf1eUfbG5t8br9Sbd7it15J7T4T93s95fKeur6Ea63kNfbW95D8ztBMFarFSM5QrxFGhcsJbFPakb16",
  "key27": "4LQbdG8oE71bqm7vJDFmNM85XbgGph4FkyEmiqjidP3ESUV1Y7CKzp3xi9eUU4XLeffsiDwpS6PkPbzLs8aMk4PD",
  "key28": "4komZxNGU8po4zpJ1XkbyRdecagPw6Phw7ZypjYJENdTx6NEh4ZCrpa7VKWRCuv8G6fzWwkzRwsGTB2TAgR7q24E",
  "key29": "22M3fjPr1zy13W9FoZZXVmryqmDrKzyERpKYujXQGo5MdjZ5i9H2z5HVz6Ay3QBHrq3nTLtVVLfgjnz5SyPRd34K",
  "key30": "BTtWZSEgbAtTDkS19QHdzgNbjsugoGijCTx1iJZJfj7u2gvP7hqwYxejnuSrQ72Uuzx3V4cLbmXYwfcCbjEyQKg",
  "key31": "35soMx8LsEHPkAaazkB4NpB4RCdNoK4Z1PqwLS8UkDxPe8utmH5Kjv5zKtM4iArFQxpQFw3fen44ENyrzWZA3Vk2"
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
