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
    "2qh5Z4BmXHeY2PCyhsvn4kXmcZgjxxPgtEzMyVRyuy4699hP7MBEPiUDGF2xxDWsTsptJgC6ZLs42bCm9GqL3sux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G73CHYt8ggd7pdxXUyShdNZSwVqJcHdL49MznTyPHyg4g73Drt2B8h2kj69PxxhXfTHsDhR1UfNTos2F8m1yM1t",
  "key1": "x2oc8n1jhNi3HNXTHbGsS33uzHrGpwZAVwNZEr9gq6D1DPEofeb3V3xdd5DGtsFaRpgy3Z5EARLVpX8JerFzFae",
  "key2": "5AbjsemJKsQGj8GYSgEPsQcpNneEY7q9YJFNRf44kmibuMaBeTUFnTVLNE5cnGZT3KjTiQFEqf4zoFEHHxihDA7v",
  "key3": "325uUYwpanKJYngy8SGDZWHV5bHqGZg1LXYHDhzXcmt6THeGQ9it3Mmyjqm9WzUsfdeH5daRzvp8audCkYPGA9vA",
  "key4": "5HwhArTfbUsqsLHsRYu82mcGSqcvHRvsVUjQJsxzeEoPsCwPKoxFiLAE1mZB1cGznJtejYWGyDnbXeGiDC9nUMRW",
  "key5": "2jnasTqXr3k1QfkJGwH5ViM5jew3sQHZgbfJAyVjs2zgBw3EHqy8v7yfm6ussCb6GsbsA5cHyscQTEmV3PnHnUTY",
  "key6": "4rNbmrA7Q76gSpyQoD9mz216ZactqS7CNPPeeLWAF3pogvWuRMq8TU7j9ZzySqNPgjsTKLofhSQ9vUuSNU7hdrm5",
  "key7": "3bZg9kVQiR5c3jdzGZawmBGGH9kHZodY7bLh5k6bekJSn4fsA5mRQyDWtfu4LE5yAdVZ1npdrVHHAQb2yWWsCFU4",
  "key8": "35NW7BWBcgTSUMoqzxjg4FmvHysdEgNpwQQ1SWrKQQbWsqgijKozcSBJNNz8Upbbv11XsA56VKciQWS36vsUYShP",
  "key9": "JXBbF2SDjabynsRiQV67hV47YALE5orsmXiHB8YdhJkqfTiyVYy6gxdPivB8iLuVC74ZpbTBBQPssqdcEsh1cyp",
  "key10": "4RW4xPE1wjmUdU5f6ffLChUu4XTn5DnekMizeuQuipQ9nBJWivnnzSVTKuPYMri3YZV1zhxzGYm17e4yzNZbohBZ",
  "key11": "5V3Aizu8b9K6L4aPVSqfJZS8qQmd3mKeDmwau5j6c8hR1eMPyHsgq2ppuE3qSzSRqgMPfTL4aUSJktPn7xQLhyWi",
  "key12": "4yVNFCf4ZDG614U7ZiHkiAV7kb7EytuhLbDEfEYpnA9KKUErpytq87r1AgBy8cgHnF9pmPjqj7QWRDi9ismR2mp4",
  "key13": "5xjiX2SWD1hZuip7r7FKgyxdy1zCr9xm6X9mtwK6MqJkdQUYUTm3CSibN9Qa4fnGPmyCofNRuuxL1a7CNrpKspB3",
  "key14": "3RLhKYLt77RdnLprofJhgMJWz4SgecEm3CRnDDNWdb27m9r4qDAhK4Ayqaxvy7zDRvFJF33rHz823bwwYzLkqJeb",
  "key15": "65B5nVgPLS4ViZtRnQRRTzVfUeDMCqLMjpJrsJswXLvdVqTrZQBSqiJ6C33VKiq3FvFPmrh89m6QMtbsrThC8Rtj",
  "key16": "5Fq2bvjzwMzFLFjSNV6niNzyfmd9GwuW3CUdf6pucv27Ai2MzKw6s8wx2nkEtJbX8AqX7HwZ963VKxtun6EpL6BQ",
  "key17": "3nodHktx5LYDwQZ8M56GihkB3FdwB417UKisbs2J2aQFd3U492rJS15Tdt8eP569fdWgoqYZB9qwTwVZnjKrsauo",
  "key18": "3U6qzyuBSy9MwAeziVBmJs7aaHjTF9TenE1piUm7BKxduEivYB543X8sxTn1wvAkiBzHfLYYj6h1LHVhwF54uGH7",
  "key19": "3fGiFEaJQsz9XZWNCR3F6VjMQ7969fL5WdsKHVLqbyRmJyyL8mEajQBu9P4hR4GPRQnNzv7AqKBoTn3EEVMtiHK3",
  "key20": "3G3p3j3B1Gx5y79G5nDHxfVxNJRLseJPHjVyUb9wHa5wWMcecwRRBdzMuKu96qz3cVZtaeD4cuCaXbh5SdCghCnB",
  "key21": "43TEsET3PX4wbqGnpvFi2kGmUAT1YdzC3np93irxt8WUw97pYnyqNbc2tfbcoLChbKvFMgwucHte6q8TcVob5Dt7",
  "key22": "4m9kmugUQuoLEyUuEUq9pQrAF9x5EQ3kqtdFVnPuR8qCye4tRUgAEnSEFgVbuVNYud7JADSHGXPG1J2C5y8T38r2",
  "key23": "5Yrjw7VovXE7vnsxEcRyQnxBeTaWV8BnsU9qmEEmXnAJh2yS17F2FjGksxSDHvpzuAJ6oaLubxdqZJUpWFRKQYjm",
  "key24": "RgRL2PmxW85RXbD2isgiL8D3XfNyBYUQPj9vamZipoQPnws7QAcSQGPZBipuZ5Pjs63GKazrie38hGrr5mYHB4R",
  "key25": "UWU9g86eg4w1Ri7wY4XaxnLFLa7MXnSdMu3SCpCQ6VKm1xAHexwfqjUFRHpEdXRgGZ4X4DfZzU3NprT6Eg4tGu8",
  "key26": "JhVNRuzWUjyQBirke7J7EBxB6aP242dU7VuZFsocxF4Ptp5LhuxoNh2fAhF86EZ8r94383cycPajXXNdHgkoFRy",
  "key27": "3557mEEn2YCbeYQHE5WvX8zZwAZ3WHqiVsN5sbxoK5c1Xchx8U61p98iBfNZHQacLm6gTHNMQYotmNhT9ijJdFkv",
  "key28": "Re34EcXfCTvJwUMwSG84AmgpuRshNahyo4buxP2p1NXE3JsSX8gNGNE9H2FzUxVhXffBGwAk19FqWZ4vLae2vGX",
  "key29": "snT1JSCwi8dE8YHzf9PC3fSYPWGfvrVyQpTxKFMi9BRuVqBYib4d8xRcMUurDfZzsEXHvN5Tmqcoz9xiAGTXKT7",
  "key30": "4nzHqT89pX5By7aXE7t5bWEMTwkATQo7kZaFT5M64Az2Xb7X6JD15GtvVsQGwBBpF1P1ZxTx42by7cCPW3b9La9V",
  "key31": "XRXf2TXxuu1iHBRscN6pBEy8Q1H7NYXKiujtcWUpq2H55dcrr9yQRnXJ98xTs4xpjwVLCFmtFN3z929SwjBggUo",
  "key32": "5M2ycc9QANqvtv1nhuEaxuBURKyVbfUiWvme4hgG43xzn2Bq4jpEqyWv8c4e2dGVvBeX5VGhSk1cVayxUWZb5Ejw",
  "key33": "3K14SREqnzqVDijRzVdxHNbjhDqFWnxKH1zA6X6dyVE9vUHmypDZhfgWb9PzfYtk2rekLT4RJGcacu54tRvyXMdc",
  "key34": "3odtzSjZnEyFZSeqppu8pvzxEP8tFfqSE8zH77KnazgDqFBFpg1izo6CbJe6VFcfH2pxEGErrZZpUwG8nXb8abpg",
  "key35": "3eQxqL3yy87rfL28gwA84aPDb7CvM5phimsowwFpmPgQSVTMywVr8akVRaVNs7U2GGLrq2yaPg8stgzHiAZ2X1PL",
  "key36": "2LxBY68YAsM3xRAJTWpK2seAB6KSEs2N7wDhA2XdFnn9Sjy1QCd9G22hhCzyWVeLyRFTCiZkapy1mhjiEaMURgWD",
  "key37": "5xtZS7CqtJ2onABUQm5kz8tcQfZPjE7pvh6nzBV2F3pExc3uWJX5mDyMmyVEEHKPf7x79PfKrHtxQDaS7GqsNVWY",
  "key38": "37JQYr2Vpt2HdZGAW5ath7YDL76b52Zdf869kRGcSVcjqGYwrUt2g4UxyHftbLmDWKewDtsdRDdBFAkSBxfLXDpL",
  "key39": "3j7bKbLnotwrj5cmPj1GPN44rF8JCPxxfyKNAAJrFPHDpd3pdJMsR3DjjkvMK2QYg8LUeXnJhLZBurW7Qf4xExV7",
  "key40": "26TenZkRUVf3KAW6uMVNfrgAerNwoQUYyC2H56wVPNyJdUGnvGC3asTYTwpYeCWS2eAEHhabFLtkA9kkhAgz1RdX"
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
