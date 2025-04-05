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
    "5dr5kWtHZoFopmMdDHutTQScZsMan7rLJxtRdVN4fUyUh4KHwAnyX2vAXuniS7wb1Ryz9dFSdN68Jn8YUjDXpbyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TBnBVrYzkHWH6Ye6DS52gD94ygEmmkTkAyxZ5rGnZ7NgHUgN4VK49Gy6ABtBxzJf1aa7nqeQMgVP7EX5wJbRiFf",
  "key1": "3pGHVgCXb4NJznaLHB83G7AHkKgksEZn78rZP22fo6WUBncCn2chSH862vm7oRzYiMumExSQTxLV88WsvZMrXjFk",
  "key2": "2UfnrAvpezAXxnofWeoi5wQMM7pRDhYPLkLWjYtjGgRZYx6WS2wjdK4nsVKZ4Cxn2wiAYnKUM5rmWx1zrpck8d1N",
  "key3": "2sxdHdyfwYCWbjucfzKhe9ZZa28xPcbhK4oUJveb4ssk8fkfnQoAZp1yNtxt5r8iuep4CoMXa2LeamXfaxK5D3JA",
  "key4": "3NbCALk2HydxPdMLuyUoiAFQtRiEbCpgZsg74KM9TXP3MDx6HmBycCgAoyu88HUpc7NMF9QTtGiJG4c72Uhbv9qX",
  "key5": "54mL1CpojKhETDdjCkhJi8S14rZEhSTUTBUDEJnUCZxgkHHk6MC3YG98pmFXGaMa6eQe18c2CjFx7r3u7FfZSuA1",
  "key6": "55CutTG1yHXsWZJ3w5FLQDA91rDaxkaRHFcimi4HKqiaxXfk53M8Bv7isiHYu5yFhGc5Bu9sYLgqigLLi6xCDDbT",
  "key7": "22z7W5urnMD5x8H18KjuTchw9wHhBuPMimT3YKLiCdF9xsRCzc155gKLjb3y7jG3U6ZNjKDWeRFyCJMvzkqbaZB3",
  "key8": "3LhknRCVBDNRphB6ec1b6b9Bu8wYQvh32VMEQZQkhDiSAXG5EFLALEZyo7iUxmZuWWtG4eY2xu87rXTZjWLogGiR",
  "key9": "52bp2PqkHX4ermHCjXZ3iKhhhtG7U5UpeypbNMgvrcoab1terg6ZQtuio3Gp8Ft1vuTxT3Ed45csKTmuBp8QcHry",
  "key10": "5ak5kMRosXey7K5Zis9j9zWZfZKbCkxUDEG1SNfm5t4QK7bHcbEKGxM1C5ELdEVgETFV2n99hjsngT72seUHLTVg",
  "key11": "C9btNB3D154nQAzMC8VqM8N8DSS5jXeLLnaFBupy5MUeYMcRcGDG5YvwerfNYGCg2qVJAvzv6ri3PQacGSQyfPb",
  "key12": "58Hi1BadJXJnSvWGpgGCQsRUK7MWWuRjPqziaqqS9agAvy1ye2CghP7UahvtDSrXxuUjH6JusAavcExkgru6Ctw5",
  "key13": "QTYqHuWJZbdYDRxkb2qR8W7PaDcMuRLX8jFvDMfhHtHuFE8V8NEormMgNMvt5i5jiW6CXUWAekRN4QKD5fwcsZs",
  "key14": "65DUtb3eLorrLkiL89iibibMjWznEzMPuu2SWpXvDEDchRFuY2oEhV5UuGuGNhb4yc14EAXexRPd7JzHVmFGFoYn",
  "key15": "2GH7sa61NFpSHp4TPpvwTk8catke6hmcu4K2smJqmS9148vbSqx46g3iP5C5gFf4byGM4xKorpc96SZPkahx9BR2",
  "key16": "3WG23L16Z2GbjL6XvWmQPPeXcN3JgYYe6uSbV9wJeTBEJjjihoNnBRRDYmR7f6bzNn1jBrhQiKwnq5MhPnkiGx5m",
  "key17": "4kMeZcginD2eCYjPfo6KD3GycFrU3fqqR4krSpNXaXUSnM5NPUUndTbggbayM2nhUfpWFCZjYUk9rcpaJ3ZyJpPu",
  "key18": "5MY9KQSjE4j51wZVWPX4Ax7d9WjbihxpFciuSoKigkrakDHpyLkLBLzDdDoN6yW348MWNsL4wSqVR8HLTxwSWR62",
  "key19": "46XhaGzgRWkbig2D6FxpwusMmc78NPesYDpq4tGFX9SV5wxPt2ScpxerznKLKXAqbrixhfL7uhJZc7kcFQJFmM7z",
  "key20": "2zJnpYd6m5DYGHwcaWK1KRKSrD79m3iajYwH6ZAR4zw18fw9eebE9ruhFHyeUDeCDtpCZTzet59rgm5uV68StaHy",
  "key21": "62TBA7YhGzqkkfF7juXPLqPmgzpyNUJshsum4KKAPxAHELssewLS3BBM9Da3MQKCTN8trHREAkBauvEmMz1KujdG",
  "key22": "5LjrCjr3bjin9g6wyXHuMq5Axk3G4hihghQfs6zifVeStDiVdiQ4JWhg5aBzxt5HvDPyDqR1jAdEwtaXi6Ep7ofS",
  "key23": "5zRDkKpFJiaXRtGnK2FXbKHk1Yeya12C2dP6hKg56xTH8Q2WpVH7E8iWgGDxRwvWfcv936nie13YFmj121Hd6j4c",
  "key24": "2k3HcaQQbFQJpwhJQ9AEuztQpUExHEnRjGDyAQjPUmzspcMeS4J2dWfjJVwHMky6R4HF2cFx5RdKmkgBVwEFrCnJ",
  "key25": "49WXjmMesEJwnALHHch1cfHCXQNF7ao6jLmZzJWd2yrDYjRJik7tosQzP5xjUtDCJr9rxcSaXAkvpquM3xphLb9X",
  "key26": "4ompPxuvV9a8rpvsqUxFBhefSkTt1b9H2VCbwBLRgM4qreq3Uc7MgdBxKXejkLfDVqu7fgsVuKjuUKfmSHUJuQcg",
  "key27": "5P65Lp5cUz7fxkT8caEfYUfwMJx6BjDrxac3RCjRasEoBJQxtLTR2zdSCQtb9X4kqWUzpfWsuKMFC4qTDPu3uCmV",
  "key28": "3jq7qNpad6QzGcwTxWZCCqkonuxJyjwtejCwSvPckt2d6attnv2us7YjKtK6ZaEjdtCqG7s9uieW13eJdQMottN2",
  "key29": "8zymigDA1qhkaifH5Gsy7hyydMU3pdVvK5QbVD4VkunVRg9apn6RyHT1xZV67sL2SMBZVBadwadmXCbBnEHzkjM",
  "key30": "4z7ZpMunN1W6NuudRKsGYkVWwQDHtPsk8fiN6HGRdxEGbaTuwyXk236FzZhVb4GeyMHJHiaBVou4x9zPmyzMysGu",
  "key31": "edHvYXiCfmT4XakiLiLCFAFKEtWxGYsBrmCCCnLSp7pDyMoeEAi1ghdb7VGcU3a4GzCby7NY9hGAVSbivC9SGru",
  "key32": "4M8YvRQ8QTk5g254Ezp1XzKZ2D52jZA5zL9NeqrmZd2sg1ByraboDkyzfYvKyne1GkdVjzBghArAUZadC5KYAAQP",
  "key33": "2RXPNVdxTDK3AbnDymJDenP9aXSfwGMSzky7fQgnZGvbPLnL7sB6DFXdSXkNdti6c7ezXi6P68VazP3icWbvVM7h",
  "key34": "zYxLdLnxttYCpmkxHpZDHkBB4XSkjPtyfqkV1ZKKkrxpTxXMscmyvmaJQtMN5yRcWAjUJRmHzMMsm4hiCvWuZZ8",
  "key35": "3FhmsPKNxTykySWuf2Gyz1RPoiTF6YfHw3TuA5xaUzR8GsncdRwgyLQPQ9hjYNSs87nFVZkGeeZpJyZgBZDdktNw",
  "key36": "4YGw65A3ZLjLRWfCBoy2EPMsU3WmdRjgyaxr86gV8MpkKXXgZLcPiJqRmp8RRfDRJ9zkAwDGYY1tMT4g1y2vHrDV",
  "key37": "4Nozoyw1QJYUdqyHS13SRzr3G4rvsKpxQu6aVqmi8sBecjv43WAJr7ZKtH1dNkpCfSwUhcfdLG4NospUrte8rKe1"
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
