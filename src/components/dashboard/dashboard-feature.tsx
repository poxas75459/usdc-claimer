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
    "3gtibfTeDaGjNQifcTFWJvmXyZ7dNbhn8S1KFXMQ87yCjMWkCAgrpzXdoahAu6SNjAc3vPuiX8G49ZEjhmhQiU8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49GAVUBCZXzDi8nWrN9aiGjxBJi88ZZuMtVoVxcmUWKjBLohrXgv4hYefGVGtYXkiDJReebgVpZVx6XTfHqbWKkX",
  "key1": "QuvTx1dB6nJFzVYFLq5NfEioTVM9hEuMfyA2eZYBLCM7S7FTac5mt28WNwGtp4gRbJNf3xoXRQVnWsooVLwNVKH",
  "key2": "5iS2atwyeziLiRBjcL252CPVqn7FZFMaPxKJTqUCHLrHzqe4wNQzZWXL4AQhcj2mFpN8biGgC96u2RFTPKyEoHVw",
  "key3": "2KRZeqKKquQSd3a377gKwAF3ZsKYL6R1iUENqERTrk3dab4UrvG8eTLwL8gsoW38MwUbZgnXNH46dNc5rYrYjLwv",
  "key4": "5hN9HF9kcycmHn4FkntwZbFqguPv7JDMSeQXc1nkoKaNq3US4woYANfudoRescxi8GxB3DWQaz9spMnG9SDrwDjt",
  "key5": "4vwcg4nXMFYggJUKwqEHCZmmKT6aChYADqaUdQuq78M46tt1U3JNiWqAVATNnKPJRUQWXf8rgQqwx4HquoeLuHHK",
  "key6": "3mf3gsrEe7rQDtgAACpxX94GtrZzZgyzHx6KaUS7mctzv8y1q5FFRV7aD5Ytvx6xneTDMHPExt6oYN11vHh5PaGt",
  "key7": "65n7QFtWB7M2TF9i8gSesBTbTxjMcCPHwHz25gKtDH17hjHYcG851XZZvKEqJRj6iGbboJijkCbSQsD9hbvPdY4E",
  "key8": "4vEggNvFNr51AKDiLgcqG4P5Ej9ENdRKH75BrtnoYZ4eR1pZjxPJmz9eW4hdFABpBkfb8mV87iuvRZM9AbVHiiuA",
  "key9": "4W4qEPKE4bGkyniRvoDxXLNeb6u5cKFqaiVft1grnWWmekoDW1h3cJs9iaQkZJXMMYSiRfH2y6ukoocd9wRXtz7i",
  "key10": "2fKp4iX8HMZovR9TFpFLiuJgCEpYDtsaUer84fYRDYmYPxgn18wDP2jkKALELzuESDNjMp5a2dLA5ApfTQT9mDxj",
  "key11": "n4weiniDZ3zUjtpX7xR5xasn2NUARrEPtZa5ZkxUUSF58zp1AXUEfNxXL8tAGvdbJszYcbBZBhBirrQcmfmXx7v",
  "key12": "2Y3DnFLiLNb6geerLWCBMMeq97X8SH9Wtr38b1p9ieCL3PCbZcr8RQjLFT6sKmtgANGT4KuxF3J9odFWYE5hRS1q",
  "key13": "58MqKNNhfrw6nUaeWb9ZQtiaxLSiiY8nxLyvkpd8KPPz1WaJikx6X5oijapmYHrpzLGmA6kcLxPSx3iL8aKnKFKP",
  "key14": "5pKQmCv5MB2dnx9B4xmzs9stVKvzVEQJ4ZRfXM3DykBfQFwH6muEzFwLurCXD9bnyCPH77fWAgCpDamRQLAJwJob",
  "key15": "SLrngD4Gw9shbaQFPrbmEwdeL5Q4gahMY3queC3SMgyJzvbXHSSWMn5NMDb7aNU8wtSRQrNp3i9ZbV1hLBcPPVk",
  "key16": "4SGrdPErGvexaEbw9mYgbQKo9uwAyL5dbAESs8fKh2Jt7twPww7eASMDxJVRyDFKzYQ6PKieVXUTEopc3UxftXSD",
  "key17": "VYdLWBy7uNVfS4UrjZ7sTT4YgK8dTtypj2w3bFHZNkCb2JAiqRQqgj6xExgZqHjJvVgaR3qBkCux3MWqtQGo2q2",
  "key18": "43r6s1oDdDVES28ymzrQdX3rxH1hN1B6QF944e2kWbg1Wakkqptv9ewLFdBe2yuNcUAXXoRbZjAnyvSn6xwM8ATM",
  "key19": "4ehbQX3TbFtnMkvGdJXfHwTddLpU4fxnRQABYiX62R9wuogBfzLRaYUymN73neocc45ghDdr5goaHPy82Yvyhc5S",
  "key20": "2MRoA36yfYfQjyzScTgkMC2Wbq1UpDALvvq9yTi1Uto8MLUe1bFyoYffjFynRYVUd8B6om7ZTNatzwSsG1YqB5a1",
  "key21": "29FyHn2EZjaAxbBVN4JqEyDJ3vbLgw87iSnXsesm6zXeFkzS5CiJe5Ea1dBS8p23Vf7Yu3ySMdUtSRgRNtie1Wz9",
  "key22": "49Gz7z25nvDYpoaUSpFt7mocgUdvtEuPRtQkEwDckzkU94PRtkKak1z2JyjrBnu3jGq3c6zSYCQk7HWZ5PcoBh4w",
  "key23": "3oj4Xzb9PFFQo2SMU7CD1Xre9UVtnDhRErR1EP3zrPu9T39pcTX7i17i6AgkJXA7ms5GNhHHVkDX7E281yGfPxQH",
  "key24": "5P6W5B1VY2M6evKzSkA6oCswYQfryqSX34dGjob6yPsi3JL7JwV6fJU351R3rjRZaLDBt2SAVLLVfSZYC1Dn3Wnz",
  "key25": "3meCqLce3827MZzF1A5X1qcy7PcfWFhyxpH2VtVkWfjtu1fcVVJ9cCZssvh353h4ti1JmVy6drGGHPiKYUaSxGUf",
  "key26": "3Nho8ZtWWCjvdtuJ6Rh9wakpwuyLJvh5X7zdGQShdLgcioKRXpvFa9zfRG57AWoe4rn1gNJbo2KsvqypPQC74Ae4",
  "key27": "43JD5GHj3BfSy87EXaUVyGjU28QQDSTzpTAi86bC2ig7v2xXbbkoTqKebc1QR9NwnuKw43E1qcCHsx5VadnUXN9K",
  "key28": "2UaRUQwZ7i8L6SAs7anjAy2vrJXwH1Q4PgrTN9K4tarFgTpXa6nwfqq2PkkAHgUWJY7RMXe9hwbj1D5wqWKEuzsG",
  "key29": "5isdhA7NDuzy1gH4UkPU7u1vH6d14tgDRDU3AxMBh5qdyVMJo9HuWnqsF4Lzmh3jH9yPspqovm43hCZSTDh7Pyvx",
  "key30": "33frfBDMjXdhtsrkjC2JBLhVhShJcQBE7REb3erDVLRnmVzMnuZZomPh26W9vCsmpEJHa6uc5KvBgkSCVpAsmtLE",
  "key31": "2dYBPVrZASifZN9o3jHSzDKjiDe1C3NULWZ4K6rJwETezKhSp5eGkkPuEQB3ozZdySttiL7TViwM48RanJuUSq4D",
  "key32": "5i3FWTVzSz1zRn4z3DwHBsuiaQ6QX6hKzpmAVmm9tCGbLGFhF3UZGR75MTSJCpEREgQukX23SYxzagUsCTyLd2XL",
  "key33": "3PfDaSn4XWHaxUt8HiJMhE1fUGxhJxu9xfAu71cuZvqTe6vFa68GGNbXjb2ggz8LhTBkbKgxUdxouraoQ6RgYPBR",
  "key34": "LWRfyTYaZp7Aw3TTLXsfnUDZ1BAcE8NJ4nxWWXo7t2WNCxZ2MwyaaEaBj8mMdo2RDf3MLD2S47hM2J4DijxKMmW",
  "key35": "NAJpZA3ovXJdBxJMyH7FgG9hgCeQA8cK7RePgqLjKfSDjVskfFP3KvyjvG2zpkuBJaNE6oVHqxjZgsugafpspCu"
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
