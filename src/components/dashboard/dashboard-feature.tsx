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
    "2gzjEovnYic81S1djgWw94JeXbpzhp6H7eLXEo7Qrdbv3AL33yeo51BXBRkCJQTHjD2Nf4ETzn8Lc6e6p2a1PC3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r4zk8whaMPkCDE6EQU6UVernMnZkrm1aotE9a2VT1SN4ahHNAe13yFMRFdhr9JUesVsAHxYLU6pZnBKqXG1Vs7w",
  "key1": "v2zALhZihnMoLQbSPL2qK2bswvvdC27YPXyksHiCUepdCtFdVBfWd3p8h5cbhFX48YFcSZNs9T3FipyFrHyuVYB",
  "key2": "5738jN4ozraSGNNF7NaigGpC9ZNec78A5DfLtnRRsaHZAzWurk3pw1bJ8aj2YswpCGM2H3c8VAaS2dMv8zkFTELH",
  "key3": "3nVFZB22q4t99CRAUT3ehxLdFinxFd784xDz53v14aSPTYTMdah1PvAWdzJJabipEEhJ8uNvLMVESBNNNaE9QEGE",
  "key4": "22dhPPFQjSpJQEoXwoAR1d7VUHtnGfgxyEfWsv5BzkZHLG6AbYN582959rAhPAyxqHYB6J7ciUo2qaWFxVmNuPoG",
  "key5": "5Ex6uDoUvVad8xZsEqiyKmhvgLeBrUSFMBRnzw8HmeUrt78GRBHV3N2UevARHPZWdbUoWcs3k3BAHxuZGTBR4RW8",
  "key6": "5r9aj96qHf81jt48ewzT4uBU2ucgFjvcU9TWnFv2ksXNUydW28S5trTRbwaETdEcAG7mLGyEWBUwAn2B4uCaabQH",
  "key7": "5KynMMffzFwj5hjSRnXeMoUW3QQ52BGCdKsM5ai8LQqxqzowARbfP8NBukmofkAcTXvza4tiaV4vZEut2BD4jYFd",
  "key8": "4RegxLK6UuZJ6o9kWXLKWRsouNdNnogHkTe3Dfe9xhJa6nqf5nuWzx8HRxbMZMqW5mrBLUz2dNrDN29zW6nLUQ41",
  "key9": "2oiH1A8vJtAKEL7ptvGLHDFm4nt7hMzNJq9zDiTMzjT5aDoNwDysxT1rcWiigx6MuZGTtwCZ1eDcZcwTNYuM6BDr",
  "key10": "D24By1dFKYfJDvaJDdtNhPnJdn51M8CXBUcgKJukct5stCjUFhkS5CJmKPEgxSKvpBKP4B9GaBH2vU1NWgxmX9T",
  "key11": "3XEM7SK6BVKajMgTY4j4gVj8xtnqpnoMRNkPLbJ1X2i8ehKa3t8DSGfuUtXQEdhc8E2aeHucto39ZHEvrhpKMjSM",
  "key12": "3CjYnK9fKNoeBkb9NfTd8mNVS9afTSti3W3kip3LutV338W6MKbXmERLFvBY6Rb9oJWFuubA9vKBp7cxtBZggFVC",
  "key13": "5NgBukc1JWtqKzoRHLqrNjkpw8DRqzM76AWiXCchq5NzEBifmD8hTAGdrmuvkWfzdXWbGy8bDtjU87DGBsHkykf2",
  "key14": "2Z7GctL8vn6CWiRpP1ovC3CJxpdpQLd8WjtVMouJ9iKF3LBgkw1KwxHeoHpxufU3St3FiyPcoDqJ6AJYZWHYjc6q",
  "key15": "5YcDXAeTr86Bm324S8rMN8cmzSjDfyjuDt6J5ugpGD4P6smJSNDgMGfEMt8cMxaJL7WPtyqcjGDsbunzSiWjTk2L",
  "key16": "2QSnAYgSPVrjGTUCLcUp28b1G1PE9H9ePW2jr6Zkcahb39t1c4ozYTvjParPghmZ8Y2SvamMRpQRHCnUd241VbJb",
  "key17": "2TqAVq2J473gNAJb2RpSM54K2Ezm7QF5u6KnmzoAmpdPH9joNN6JiDKhJWSRpb9EFj5esXcojiYFwtkutoSW8zpc",
  "key18": "4xJ6Bsn9Ammbrc26qA9kBaMkXrkUEUQZMGQwWFXhR7DoJ97b1Sr6Db1w2ya6SK6QH7kwvWHp2zrUkjZcq4JvApbn",
  "key19": "MbFbrWsgkVoN3T3QruwnFVUB55SAehKDF1jtscJthaaMYxAwear63isRjay1MjfpbY1E3QNBxkcCkq5u5Zxk4a9",
  "key20": "dECDw4vyoeuY85AhUfJbmnbYW5nnZWxqSwM29MnegJ2YjpFzZC9DWM18fZNCw2iPQQ7DN5kMu3YftCG2r2okDMy",
  "key21": "575PhbJfYVso6FfzofDY9t1iLqqcpYSrTYFzUT2RpMVu49VfkFKP52xEz6faEBkdRodhMpMjDQ75DBohbUrkc6Fh",
  "key22": "5wYPVM1gB5jtp8PBSAQqMhT2GUqkgdNyu4P5tPpNTXULrdo9a8bhgxpxEb2qWKNmAksSLkhHhRYTvhX7siFF1bPk",
  "key23": "5e6V3MWTLXgXZ9N7qa2DMMU4cVo6Ywq5TcYJiYrxu5yjKB5DwP8ZeEQb65WncLqvnj46wuJQcXa8eQ6QraSKkRj",
  "key24": "4j2gAkc7VYfE7KEC2NXgnS9dXamALV6jZpsLmiacJ8Menq1eQypg4r8tG8Qrv4EaHMX2D5DWS1zgmTC4GnxKJ8LR",
  "key25": "3zScnw7f3d3tgbpL7LwqUJ4vGAKpK8VDRMd1rqvrEpfJZtQgDykirDnMFdCj33hT4WULPeXJuj6M2FaTvQcXtzR6",
  "key26": "515tRMdgTvBfnKkrCA4PiYW9Tc3rdTQKow35z4iBbJH3RCzdTkR4AozDxcwGkjanE6bt4rKeWH1M3YKBGK71U93M",
  "key27": "TFQrN3ndCcz4YpGe5LMJTfuoMePHzu9yyD6zowrCYHPWPj8y7snZppzHF3sgKnTnnx71CaG3zGgSrgS7d6Kczad",
  "key28": "2a96xGtbEmMwFzuE3RRsEebaTvWYzPiEE1i5P84D1z9XZUn55EbUvqgB4AxRCZnrWKF5MAVcH5dTcRRMqnQqUKyj",
  "key29": "5AZJKXZGHDrk7ApUFVhH2bH1jFXTaYYmytt2L5pftg7YDyCCWruSvVJ5NTNeT89NxTyBZQV5s3BrwhpMb8pznA2Q",
  "key30": "3S8oZTwTgq8gnZtdPZeWmCE1jxdBZFvFudqSKXZZx3kyuGubiwnT4XRMLBN3CUMSAHF7yqhSgTxmeJyjs1Fx6Fx6",
  "key31": "3DzGStfu4DkVoV1vQr48AivRC4kk4VT6MecMJSnjcT9iAotAmNfVBVJHGfpYdmL6TPo1jVMCt33rAzzHvAVdhyiW",
  "key32": "3ecn1ghNgCFcHLEvxpPPPgybdR3nnTerDaLGoKZTMsihVyQo83CdRRyGgQwpUZeGd1Y1tStNkiUQULHXtA1C2Lhb",
  "key33": "4a47CJHJLtMpCvwzMNdWwecjVCiQ2Vcv8mDFourJ8UCXhXnfRGMEwzTdebzvscqfpEBcRqMFivm3nAqazNeYYoNh",
  "key34": "UM7v8RAXw6sLisahQsWfTBBzLmZ4LquqJ5GSx5KPRYBkwcRJEgDF2xf4nYaDWsBYiVaG53MPG21vEhksP6fgEUE",
  "key35": "2Y5TvTmNiLmgrhA6hKANCShJT5YGXpd7avGiVVuNK7DFbw4Zv94vKKikoP4J16wEw2BFUdUuH5a4Q9DiKqYiFR1Y"
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
