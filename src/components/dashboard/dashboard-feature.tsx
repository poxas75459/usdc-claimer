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
    "2Z8Ssuf76VhkybtAno7TuQpv21g3YaZ2L2qLmaDtuL8fFvUGQj3xEVb5mDrR7M9XqFjrysWSc2srEPYLkdhkKdt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4LHp81fepiKjTLu7NWiZm9PeqhB3PASMevKqCYJGBs3Z5ZMNRSBxhFfw6T5j98GTizgw2AEdR6FXqzkpRJFdf4",
  "key1": "28WpA4wHeKwGa7oBTNDLKXBRZKbVL2DczMuB93o7NEuisdZFEHJPDMWkoAd8ytGxJpbM5M7p4NVixL3XbaCreMR1",
  "key2": "3HDGnu3C9zVxJTubYwNmLfsu5xEahjBUfgmPr9q61MDKZWJhUhYuFJ5nzuGGw4fNjGFXPzpVRRzbQP4J5eNcgbFP",
  "key3": "3nvBkLJSaA4AHoQKaw7j4vZZtWddQ4N4dHstiiQk2eeFeExZ5eBcCFPCyYMXf7AcsCWqURCELouSVJ4av4MTc5pD",
  "key4": "2ybgpeeq65NPaHCv4Gemidm3QJJRR2rw1PAEzDrcLxhQ5h9qAdLsSHc2pGF86Mq86XPKm621r2qwiPHGf1G4LRbY",
  "key5": "61yV4RWsVg86PYmYPLudtujiqLTN3pzDftFQ3wgATqwV8QhoyAL6jaBa8J8TiZ3ZtBX7UutYKDGPaFfPauRANPKs",
  "key6": "2a8u2ZEbTAfAwrTxG9BXd3trr9fnk4p8qxbkejnpHe1oiTCrwVx4cCLwsWTwHqLkfzSDjN9vZ7eRv2Z4MBar6JbS",
  "key7": "ioRfbWiJS8a1YRzzGmj2J1hiE38dwiCjQDtUkADCJqVrHif9W2ie8js1iAhXd4fD3wevMYXoTP5BvzZEwP7HtHC",
  "key8": "2Wnp3NfXAseN2g645P1bwWgVjY2yDMvNMXxkQyWha7wefaCakUUhaBu7XYKXgtYtCVSM9JkUwNLXFuysGqg6qqUq",
  "key9": "3mNhCWdJDAoU8BxRK6B3FguEGGSEJH3dK4SmdmrUvabLsfAii45oocuRToz4o5rE1UY2Xf6exQeznASnMNcnYBFb",
  "key10": "5xGLt7LCw6LPR1Kx7p1TwCm3yDDdwAqE3MTcNJamG4krdhfU6Zp55Xws71UfSNFH6vSoY59FpESSxcGxr4pYLuRe",
  "key11": "5VigqfDkmyyFPWqVLZUpwcMg2QkhNRijeWBPB4KoC8q7geWazcB71RGtJT2i4zJLKNEGP8us1GUgx7vAQgwYRHfY",
  "key12": "FNF8zv214sr8wLpNSYCEksXbeRnwUJwkpaofcScSs5MMTseL9ixyEpEkXVjKwLYvRybmkUg7oLpoQCdhsncT9QE",
  "key13": "2jbfcwAiQaSot7FsnukYgSDrFCVaTQi4XZdg7WU6B3MC511sLEo76YjpT26nFZHCTN2Vbm8e5g58kiwLpJiK2zHj",
  "key14": "43B174YjnMeGeENvbJJ7w8T6gVKA4Hgw7ZQmbwuNtFkpSzQYSQpBw9eKYEnEzP5MqgSQLZVyVLEAsaKs4q2PVy74",
  "key15": "SXcXwSH55MBJmYBHeJbKK7S2oRQE2SGa6oJcvcpC2MpkwRzkMob79TMmevrvVDxtD19npje8jxS9RL9agiLAZrd",
  "key16": "4QAcAPtLciNQM9Smk37CCPZQGHgFhJE1qoAsD9m21E7Eq59Z1kaC6PUzQqq3bRi8h2rBS99mXifpkLoB1T3SqTKT",
  "key17": "2qmnMJJ86zCEBExYA75y9zyNM7od7TbJzeSGPxaBn3ipGt97ME56MkLZsmTDsts84dXCc2ZQfAt9QGLU1TJru5jq",
  "key18": "4p3BwQknRVoGzsYjWzb5CFCggr2s2YQAJywEn6NedtzaT8uMfpjtAFUTh9WbLFTcVByfQZKfmB5msvGu7z6cCebd",
  "key19": "3ui1QXbfD4Fc4VfSYTeDGcBky9acLgzEZ8dbt1p4Kn8yAj6CWWMxgYPbZyEyBrXZoaVcQNZk4mjhY8DdQfn76kYY",
  "key20": "5GNwBAwdCDmzMsCWLAL7hVCSRgbGt1Bj68PhJuDGBqVjhqswYE6dNrBW4wTDDsQSjXhvbmDootGCP8georrTxTaC",
  "key21": "3ixCX8vKENHURQGifAeeibsyJgocJPWEs64ZWRQWuKHLyQu1XvbEyngUzw7xyXkMpeQjjRhnM5NaBD341w88M7qa",
  "key22": "n5eje9PFVvtXxjUCp6yHWEJacc51SurJi44Rvn6H8vxyUHF5niBDtU1TNH3yfVqdorT7i4ccLUopLNpvYzDBvAs",
  "key23": "1C1HAQDZCiBLJTuTRHd8DJxrduUym75S1j2xBVFyhtvSFamHvba57NwJd9887sEKverZ9s1pJktpma3M1qBCgtd",
  "key24": "5QejkUydVVDRi58AwdXGimUbzg62Gz3MJS2MWyUfM573PoARXP4qDKeCoCTL5rAxVVejyrJkyx3MD8a7eSAb7RLa",
  "key25": "3qM4eVTNyatXcADQU4WRioWxZGqkEsMWAWcMR5P2J4dtCkQBE4zHhtqprbrqjjRsB8pnrphMGDRSHwCdTw9djFVR",
  "key26": "31dKednCigHWxCDkPAvJTxyUFg6HzqMAbhwHoaGfdbjFpAqr3fQT4U6pSXQWcqqd72sYgJyM23EVeWFm5S2X36p4",
  "key27": "4SK3Gxq9hu4Y3kWUQ9NdSGkQY1Xj5eLDPicU6nT7edBkLV1Mp5yxcDR1cDvKphnVKMGqY9Jm9RgX9yeMNZys9fKD",
  "key28": "4Lnf8h8cfVDnKfRhwQKUqrMP4ETuwexBiDTqVz7sVGBHs2DkzvbLco3xxt2mcKkByX8gC8x631ew8DqVaCYn9ruG",
  "key29": "WKzmp4KtRzgtcepsrYCzBnEsemU16gkkFsYharabGEc7hyLnvWgiqtfX4hDuPoRAU8EExyGmLizV9j2TuhwHSWu",
  "key30": "39m9LV2CgW7SnJKZBns58W9vM5mk2gEXQ78fzfUy2yiYRZPtHGmfbcg5WQsuhKmKH9GsBnVvJ1Vi4rtZbQidriy5",
  "key31": "3NubgtNm5mZQW4skajmjF2d1SJP3m5FcgDy2ARtQVx38RMtH754fYGXdQVvA5UnocjwYApa5cm33LfQEoohRxrj2",
  "key32": "2p7fe9bnLmDChnPySUztPJaK5N7NZwr8unAUkixv36N8UdYaAP9KARH85b7nj8h1iaQWnj5UkDUST4mf2c3VowV3",
  "key33": "4a9X9Hy66MY5ASzpBPqtnCZfQDh3kf6RwnCUqwouersbx4a7DXseKeVXmmHKzxYrkXHf9o2RG2zXYy9NYzaLvaP3",
  "key34": "tskJbBR29wt4dRr1eniGcQRkedLuK7YJUEY37FmmQj8FczxbpWS4Hbkx4yKd1Kq1iUT9HY5Eqs63gH2Eh2FC4Uc",
  "key35": "2FNPvdps5RenxhSLQ9wNtqYNdpoZth2PGAxFmY2uXaA7KMkkrxCNcCw9gcaovhmivqcf3uqJELNP9QwjhwBTnBpD",
  "key36": "2NZNnTKnRF3S5VFm6t4bwR3avc7ah2KoNGH2Ji59LNm1MywG8sdrZ7Ff59EhmE1M4bsDRW2AzuHgYUTsKCeVJxXH",
  "key37": "2vt2djKSYeevf5ZezNdcQhF25E2k4qGFsW8mqk8yrJxXQtjo5XGwhdaDB6ucPGqZWwk8ZZc4uqeQRNULUk49epyX",
  "key38": "3z5vK7KGdoXALFMEi4hif64nXL2odtoAk4X4b1YS8ezj3dZdqEY8mofZoKturbAkyHJMTmLtaKQKvjaUP2PKcvbG",
  "key39": "UMaDwfgjsPSEd1FAx59SR9XMwoc1EjEczTnVFG2cuhUkdxfMFFUVkn44htcienPb4FdugA2bYuYMUY4iVk77FYL",
  "key40": "53j35rCBaPq8FuyMUHweFc6xcAXjJqKTUjHMLfPpWgcjBpUM3nZGMmrdrCAfbQmeHY1XcoKapYXLfKrTRVLhuCg1",
  "key41": "5L2AGahTPWGu24sxLePhQisTRCfAZqKyVJrDcTD7QJko27pqy4UH4dvnTH64Eg4Rom2rPrJpP6ycQ3NZwSQFJHUC",
  "key42": "4mgZAxQ4c5m1Nm272hTHUuKKkeRSv8gxjEkchCdipsU2afGujJQXP1wAEdho3PzP4UCGyjSQ4JJARoftEwyzaVLH",
  "key43": "4UqtksQg5N6TWe7o1SwcSvgGA3o31GnLjpG4dbCUbKc3HqYtMBXrC1mp2x2yA9Nn7H8bo5s3pkW38amutXzn9ZPx",
  "key44": "225teXcA89DLYT7htvk33C6g4KqT1phYL57Av4ryWKnLmupmtKfd3PmkHoxabeNJVkZivsh2o2eR2Y637ig3pL9g",
  "key45": "gjxew54xttRro3KVVY5uAtcRVvHMrqG6qXGqmKMU1qNoRwZUuaFmMpN6tQv9kmA648jHFjYue4Pb8u5oPZ87APj"
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
