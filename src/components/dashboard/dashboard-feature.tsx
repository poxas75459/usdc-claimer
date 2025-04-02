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
    "5uoKA41P6duJArgxZgfGZf4YcKBPKQ6afuEbbQsp4oX6BiBBcGmfj5DUvH7k1nZkhFdjuWQMFrXZQbgci2gci9oV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ziVKqfovgHKpjECFTi6vXtqaherHE2uzgXixXEMn6AMaTcNUypPRH364ndouHqJpRp1Hw2x1ZzFdUWuKta8F562",
  "key1": "4h8nMjMBT1ibZi7p7vEtyDD3QqeiDP7EYc46DaNDZuV4KB5DEHGCChmDLn3fxFNpAjbX3KZd1jxdUbREMkWXVxWU",
  "key2": "2fW5ToTsHBymb8wqiYjYpeNum5CcHJQvp2vPhMCKJF7uy8tbazs24r4hu2MPUGsuwHzVy9pQtK5ZMnfeydAjkC9S",
  "key3": "3FuJc6jBZRYeqk3vBaAWKz5TeLVipwJ4aruuYG4d2T8GNeTLL6xpnNa5NziG43NBfRUMubPm2tT4EeZZexAayH5H",
  "key4": "46fuLVpcVUAofiWbNxfWUFmTruRoUxwtBwU2fBaFRxtotdBShHykkA75zoLmEr1c3hCGuqH6ncAXqBpTwrm4Dr3q",
  "key5": "5cu9xJbJ8yDKCxmfik3wHFVV7CKHFePLrHGBJ3ogjpJugzerUAZLNNjMUEY5KVw6mAmjQjPT3w1Nb6EkstQqsaR5",
  "key6": "nRpSL5khpHkNCJhfP6inBcbvUjFaYX5swKB8E6aMV3oD2Pc2CqDnnTuTzN5uZTiPJkaxjuJRqRWJ9MojNSztAjL",
  "key7": "5i52WAnitC8PmAvKysWd8YL3tYdHKbQ7PAPbmsry6KMLxDzyEhTdeRDk1wWaLuYQA6EwFaPAYjKNP1k3oJHBtWqr",
  "key8": "2c9nCLqg1iN9hCPBVPwnCwgn55S69tHzmNdKS79vgpsrCSthN23ogPpHZHWMPDYU8n14zK5Mxv1MTEaczYEoTRXU",
  "key9": "2yv7Xdo7KUqZYWoDogSodNQZkMGNR3QvpBwffZ773aoqvEbBpU7SQMNUj2Fi2jYsn9JBE8YWq7fpVA8SCbkcQVfJ",
  "key10": "49u2TGjro4Wi4ufNbwbNBpb13kzRvTQi3MbnBgYbXy5ia2fuhVEBJdeZwAnPFRATR4Cs8s6iQF3boZESa2KxFfGw",
  "key11": "4wRZ1taoN66qBtVCNYBfo92BU9B56TB92XPJpvfXwjLBx1ARoG2wRWJLHqdkMoPN1RYK3zUVBuXEkWqnTrgeE9eA",
  "key12": "MWGqSG82aHvo4fKmeijVMwrhBv5DZLsicZEwrui2yGPNX7xLGPD2hFxgngnesoZJfq9hgbTfGj6GHb8CcdhaYLG",
  "key13": "5CkNj39LRnQ4zWF6AFxE1ozzfBcNy3PYDoH1E7cstPV6xJHuM1d2WQrUpgseAnRKxSFWLGDFRSoNcBNmJ8fCnRFK",
  "key14": "3GQP7A2jXRLjmzekCAkSzdKpPGwZKNvFCTeZPPPKgaghguL2RVWhn2uH9AJtKqcFtyGYbHJqCwUmwj66keGCw3EV",
  "key15": "4fX6NTi31gWYNkxQ27W5qKcLMSfmtgvyRBNSWjidEEtQRmt5owAZ7ABanDjN2wDWJJ6VH9SuznPxu8TUBQ9Uuia8",
  "key16": "3Be1T9MrAqxLLVBR43PQEEVzGyBuNi1EAysq65F7nvatHbNH3Q4A9hs8ZBjxxYh7gBCQpTNYy9VV8fPmhUwwTDvZ",
  "key17": "2JprZsXU1hGSLuzujaZ4hcsCNi8ocZ2hKyyaFtctYh1qQEwcSkioudy2zfoe8bF71st5qJiqxtxBXi3FxEbEcu7U",
  "key18": "C6HdrohA1iR1QzwecdJAizHCNPHfUZwsoPArfvf7Fvq9nP9fNZnZjTTS5oRKUUX6LvaFHgGLXenGvFDyksm8WTC",
  "key19": "RMzAPD3kVzW5MTjhTeiTaH9TV72CTpBYpK4cXLLTGtXoCVk4RZrAcW471hmgAbhtEzZ9TgGj9z2ktRy7g8ZzJTr",
  "key20": "5Fo4HUMjMwR1nSW5irEzYbU23RZq7jtPjaftQkHBLCcAz2SsT5dHrabrw7BQTptHqoLbUHrSQ2ZE5MKcdvoPbT3j",
  "key21": "2cP9NYuAooGE8mBvmGWayp22JYXPm2dvi3YE1J4y4jzwjCzrkiDumuLVTxPbEAQX5kqmDWjxFcUkGe2ZML9KeVmH",
  "key22": "29wcRb6e1VWes3Y5WQZDaDuDMDenbx8jZ3FPR4BiP4QTM5GcuEqD6nB3XfXG7cZnZWAypyoi1Wz1wbKSbpCFJx1B",
  "key23": "2Huqys4We5JwQdvy6mP3U4UXMwcnw9M4NJY8FBUNT9GLHXTPEGtTHSdQqg1T8A5pYbBWg8ozSL78Rt7ey72q2zaX",
  "key24": "5SBbz1umXjJykL2yTVFCELadABZ1vb7FAUetP6wyGt5EhTTB9ogKNYWmiqNacdKSc5xadgSQXaHtSUxFD2w7ER1M",
  "key25": "5D1wZDDY7brTfJgrLsz6sFtTTwVvWGTCJLB1jfADcnaDh1GcCYz3a6PMbXMDYumVj96xv9Kibj1JAXAnfhr6fv6k",
  "key26": "2HpH5E286DbPcNSiQPfuvkfcHux7FwS55UKojX1aydwSUM7CTBgBPc9zC71bP3yeyGf6znygafTsgPJ4otBXxh9G",
  "key27": "3rtF67CDCvhiPdK1iCLU4eHixgj5VHU4NZHfL3yQ22g7TtgXRdSFNrRkakQMNKTqjx5tMeDBY6RM51a5i2U9LGXp",
  "key28": "3oouV5SAx7gkyJhE8qMLYMKs8Nip5SYJmaqZzjmMLMhzhANGGgpLE4YPY99FJkwmwEeeRJA5eBotSLU6whzVmcSa",
  "key29": "2htnw2tXxzvJNHbG7nbMWs3cYYNUF6LDTmhNyp9rzprLxrWnXUAA4bgKFZ1uHwogtKhkw4Crw4E4YZg1L2y243UT",
  "key30": "4YWzq7H1vENWHGvhqEhJeUX2ATkdCFjXF5JH1jPLty5aRHM5DoxvHJaLaXyT3hgAS8PivtGbocDJNSWZ1ZDjB61k",
  "key31": "4Z4HU1b3NKUKmi8d8FzEbUXCMLixKHCv7krN7WEufsCwLC2Qp4urGUh3uN2pLi85ZWPJ1rjkUgByGLSpYJqZE3h",
  "key32": "2snMu4jY1CEEXmkHeGHsZTZ4Pw3jNnBfMTTHv3YGJdB83VdsGKEPK7kq2UhkPzrYmLihh3D7d2x8HoHxmDqUoajh",
  "key33": "4DSFsHKqbVmFBpR96CQjKHMioot71sodYS7s7qJ11oiDxfnhq3TBFEWmG9QM6K6yzGdJ1oGrWinE4TLtjgASujer",
  "key34": "5MubsMSSoTFh7BgVFQVgjpENVfi9BAxUmHmBoCM3BuLiXYWPLid1Uvcf9VnXCPcxZuJ5dXtTWpr1mrEtEffDkGUi",
  "key35": "445Hkix2XSEt3oyaLUGZmF841TACDHPcbfxz8SvGgAdjuurr8rsjeU23moGGT2qFnwXjEkaGuQUaqPAaiMkDPJqM",
  "key36": "23QUeNXbiT9e3HGbNeLjNbrvoRD94vuGKkkfmHs5i8pwxMpnaHsC1di1QJnmUA2nVrTkkXCYEjVgJU1AGu6GUfuW",
  "key37": "3ufDq3JRX2BX1DXezbdrKooPXXKusL6t3kviXNXaVAvPqyXJo8WKUSuUm1BEL2WDZqagu9sbiicoc5ocigxymJ4V",
  "key38": "3kauqMotMwgUi73SFJ61V6vKv7obfVbEfUHvHWPbtDskFgBhenGKmxZov7K9TPdhMJRCduJbATMN7UWcMbdabBDX",
  "key39": "yMfUgaZumq8YjvvdpABenqj99z67kwY2P7C4FyZzW6HQ3obUdqefWZYPqm6WcsXZQ7Do4Nh5VNvQPAMnpJzB5sf",
  "key40": "5sVVsc9cZVoF7M9UvoX1VvLwPCnK1wMKxGMZhaFaYcKPpRt9n1fDy81huwMqxRLJENWFvpA1mwsBQKe2ggW9sjUn",
  "key41": "Zf5A7cwF14v5MuHH4WHVoZxAA75tJy6gQmWH4MdyKfSmcCYpbrwd2XrDCuWRwcV4E1PmmJFsKZAQwJSW41sfKDE",
  "key42": "3ZqMvHUZGP3YqszkgzVDsTR4JHxHvzshQVqEKGFnzbH38wUTsFiMDxb8WprRu6aHrkBRq6AN6zKVoopHaTSAJ2EX",
  "key43": "2SmoyuGhz2deREhPSA5VrsRqmwkCutDrvzCTjfYka7D9PuDCXhBeZJ2jCbSJxBYdzobHCuHTwEbNcY9sNvHxSKV4"
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
