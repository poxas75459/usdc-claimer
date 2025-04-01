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
    "5ev5mNWg4c7KuqDv4TAJjbHk9z89MLgdiavsz6EGMw1tsWjKJ7gAVzRGtYMBivAnP6RPVvAoHiLo8WudsxfG7g39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMFKHTGPkHP5Gva8PtG1mDxkqmFPXoiYx9K4rXcj3kh5zJ9SRwwCioJu7mWrJvmDNBNn6ioynn3u4zHCjDxc5yc",
  "key1": "65QMkSNw7kPytQe7tbKntrYHkZAt9MkWxagKZmZsM9JiJ2Ed5PHDbaPw18fNNqUJCTnNhxbgB9cLp3DnpUjBfSJ",
  "key2": "5vo4gKsfUVXBNHpWtKXeWEwVkcm8RCHrYqtBgn5BMeuYpLsUUEERBvFTTUHowS5zJjJ2WGFHouxQG3qnf3sYEnL6",
  "key3": "4SsKb63Zh1UC7gAiJq2H96zsComs6GsCoyNr9qdPMMZhhbUCHfh7Ho1sWmiFUyiZZ14G3wo2w2V1diRuJ5KqF5cM",
  "key4": "QMcVP2ue6f1XD7TMUHZH1ZRf8CPjvAmaHm2UhEoHteKCTuWYgNrfURfFAMsJZy2iJyna7mnaVeiUxqnWNHngKej",
  "key5": "4tuGBcPcnTLd6L5xSitkrqwindMtxzm8h69324m2xzVZSptNB4BNVmp9XqC8FgnL8xTMQKLmXvagF8iTQSmhye1X",
  "key6": "43bwxSpeQpUoWgDngsuuuEndFcKLxCEBetcQ6NyncaAaJ3dEVJdbkPbRCcKyeq3eDYYpS4cmmxAKgGs6GfuxR2N4",
  "key7": "DUBbvj32wqfpbeRM1y9WDJPQ1RsroqCDqJsrwTwGPmGq43GDLvyXUr6VRN9KetGZ7dxUPSeNLX6TzWXgFGzNLEi",
  "key8": "2AeKytEAVtTrQPMionSBKnvQBWb6v2m8yn6VPKyi7pDBUanvw3e4C2kJFc6XWcXJZAkyVjjD8JwWB7nvbj3r7edF",
  "key9": "3bM8jmVaruqYhxjqWgRQmdb8aRq7Rdd4ta57XXgTqfevXbXCEVs6u2ngnhF7dZNB3TNosWK6gYv2vdzu4cvDAoBY",
  "key10": "4wa6MEpq1kZhndsqRyybBbwjgCAot2zhfBeZzyuVywCWKE9hm18afhD5hnLRUnv6NPZJrJk7XskrZvGVEeJMcdA",
  "key11": "5jMuDwmrHKBRV2hafPHvMnRZV86X7ZibEc9voapApLyrrksc1HtUva2zucEsxGPFZozPqh2W3yXP6j69yWPX9De6",
  "key12": "3sFHrJcGa2Qqht7kWE7BxxymkfyHZoPkiMMz2eA7JLSWebXcpQS1zx1i4egHZigxihGYccuib8GbBPNZnnsbXhj1",
  "key13": "2XnsS8rabLnoMjs6wQTtbUDbva4KMv2YSLHTmtaScBtqJ6PxKFMvfLNyFrEAAssEKw5QZiuRAAx1CirkS9MBsGX8",
  "key14": "5xvHvgGLaznezk9TRCwjxZJa44NbwHCcEgCuikDqBGik1kgEs5dbLuUVt5DvCDfZP2iLkepUr4D9HJ1y1T9gbueQ",
  "key15": "3hZRP6YLMxTVYpZxYbiC1XPdVc8HzAJgbUTqWJXyXcvCZ7pMhTwxnNwvYMAw7Qh6qEuVM1c4pJgykYqkYmwwnEEs",
  "key16": "3A4jhv6rhYPXXogzrp6Qy5N6rcAWhhtmugTTqAmNJT857ppfxRuApx6c27wcTybi4PN35FndkNhytVDHisc2MBD7",
  "key17": "3d7LRXAkPowk483PRBPLdYxQrdki8VDBBF7r5FhSQU3saSFtGjDRvWxSwREfXdxRogAk1UejPnADiukhpHMiSPB9",
  "key18": "Epw2DxoLhh5WaBpHtB7iFcojKQwqtgTGe9XXvmEs1esKLtqfSH6Xio9uAkGwTHei2E9vJ7dsMeGxCRqooBxqjbb",
  "key19": "5jTvRuiLvkTJRaV8zULXU8xUowKw9regnmhGCrh7GS4SMn2iGNpwiaLRNaExZnB1KUfT7kWoi8Xz9byV3pbVQ5pd",
  "key20": "4C6mS1MRUc8wegGzUdGZVrftQMPcmLCPgdJgaYcTs2Kb7yXSGgiKryu8ZjYu4ndFDtgi6Kp1LJNvSFNgNmsaB6Sk",
  "key21": "4qNYrT3xbjWw9sDAV57KQg3kXkuMd1QWySimWNJ641apCZBtCG4biFRNEGnUQk3RpCeMhVCJp2acozZ7NcyLbDUB",
  "key22": "5J9XGTQsWLnxWTdwQD9Mo17RLXG7ru7YFk29KHJuDoWe4iZz8xPyr3MSZLBPCtDcrYQ6mKhZAq4XT9tQm35qbGSZ",
  "key23": "2x44r15JGuL5Kfq2kn1Pu5gnJcSSeaK3V8DTuVwR7R3d7Tgsbin6B9ZVASoH9rd8mQHjZ4PoBhWpqPFpZad924jA",
  "key24": "55pTj9KfSwxm6EmqXgEjnfMT1hbAEfv5ViRbZyXGUm6u1WjiWevfFzqe3hEVbcowFzsgjJTxJ3NeRCCso7va7bq4",
  "key25": "3MYwcuUfS5TTMxstDRP8pK2FSVYGfkZUTrz6qWKnvhHMQMuv9zQAm2Lpmx5GhNi29tgZd85t2qRt48nxnTT5efoC",
  "key26": "2PPaxbAShAx7mYVYNtYbkb4yvzmLEovPT5oZThFFX1efq7MBNFqtDdE45RYV1uyeMBeXYJMQaT5oYDTfqZXMBCNi",
  "key27": "5EHL8h813NESJrSSBjnUGgo9XCdoG8tLiY2gvFWi7x8BVRxkHqkpqSo4HGsQ1XByygtonYcdVzzXrEqJS9xN5ZUA",
  "key28": "4koJWMGZPsyvq8KUb2a2aX8XpX4CH8SdUJpQp6C248wau9f3qZnAtDiZa8svGZuWbLmGYjgQdkcoD3cZJz8C4xpt",
  "key29": "4sTBziG8oC9na5Jtfj4m4GZsabQfLJ148qAtzjQUxUg5zSm7JK63t8en4k8pqmCnbmFbCu2KpjuWQTVLcivNmjpm",
  "key30": "5UiKrikxhZwmwnSd6XKkuJsufpHuVaEYGo26QmF3bPmVDDK5JMZdotcsbYmRJodhBDMw9H5MXWru6ta6tXa6XXB7",
  "key31": "3eBwVRH2Q5AAXisDGKKfuUnf7nfD4nFbzuZPuNNm7eavyXP5zG4XmXj1N4ekCFrCNrPbjccTF3XqzWL9oYef2iXz",
  "key32": "4Z3NUGzAFm52ARXmoJp5BSPNCLHZoyRafWEhyrDYxgYMyoGtuaZJSYF5GLZGrzCi5Dggou8t3x9hNMGqM4KBUXVg",
  "key33": "3GBWtaXg1hrwSxk2ops74y2ruhPtpcWeWbJThangwGVewpRgd5pzraE4x3GJmrDn8cm4DPkxkyXes2BPcWDDaDuV",
  "key34": "4usdfz7nouTmwqC3zGGZnw4X6ecMgAcvD445onoLKNsaTqF4qPa1KPBAdLERbuQatRyEHWUzeR93GBL8PymzSLnD",
  "key35": "33ocB3m5sNPesZFDbi536BzahbunKe7hvR2PG5hauUbZGCfgrYg2ZBLTwMTQLtfsPuswxM4Msa92YD9j7Xs98DGE",
  "key36": "5cvEtSXX5tuYV8cKJfJPxxztZ6RczPGV6vY9X5e237rPzMFP19zkMjkFoB3Dki8HrWqLXxJZV5i7ro7K6rR6KXGc",
  "key37": "29ZF2BctbPWPzzjB45D5fFN8MLRZmkD7iAjVUqbZSrN8CybquvcY6wXpzPbeQ5SaAsQ71Q32UwgmpWUgxYFVCisA",
  "key38": "2wiSyifyZNAfxm9knA5msvt4ibDyHWzmnBvRs7ACH1ULZDxo9U6wCfhrMWFGHVibEUrF7b6gE7zBujHgnAUkYrZw",
  "key39": "4dQ2RpomCH2TNgQckMSbEtFfSEcft96FUFuJwKb5PVHhG2nZwD1eygkDoi9976E6VfUxRjTcHxV31Z31cnxcyQ9P",
  "key40": "2jLvprEaWWrg1qTfdrDMCXJzQ9UR52AdLT4CJ3wthzRjpwh45UunJTRtcVZVe7T8cu97vE2rAdiqR18PGjtbEseS",
  "key41": "4LsUiJFpZsP1ey8VkTwKX6iBaGyKjCv8bkLiEW27CMEo5A579UCNdj6guRdSk1vmE2Co4CpHCgabGx14p8eF5Tyq",
  "key42": "3B1Vb7AHTeD4fx5MB8QsdXprEaUoAqKGRkFK4MKVGE6pJn2yK9UKQeLY9A9Me1z361NGsVXVe7b4LzZaXjBW2oiN",
  "key43": "3VviDNr23rctmHrWgfRXSuC3zGVzYHRhU5QeFaA8kWdWhW7Zdum9divqUpE3VKweB1XztwJjVf4X5mQZKrBqFY7v",
  "key44": "5PxwknuzwX7nKFgjT2kQnP2JFzmXhSrfeFf8tkoJiFYkXeBnVfcjWRUx12kxJnC7PEijjkPCkMbCc4DwVNSZthqb",
  "key45": "2zB6RrSjiuTy28Gv82TrBzhVJASiwpwCrCi2HC6cn2h4jVRvN8vGBFhXCZD2sRoM3G8XU9PMUamFbnuKGF6SwJ3A",
  "key46": "5pwsfJHEd7JhoDGghD4zcgvhmFeo5DBe6NQ3yB3iD1755nmMNEnksuNNBvJDyf18jvGw1Puszi1BChuzSa5rimJk"
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
