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
    "4dqSJc5qfPFVRxjuFWTygGB3qviMjg2RUJ2KTCnK1iMGjRokEoYfCSN4GXsNfd3iwmZm7AosEJ1DdYUmMVHYas1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24cZUJUkmPCZUCtjR1Lw96ULv9g7s1L6X3bSNzKJehT4T3KFHqdgftbr8eA6HMPf12iqBWQWYqV5bQJXx9EvUbTx",
  "key1": "4BvU3x8NvkwXuHCZDWEKer6TTw9TsR2rnmjGSXACEr9Rq9Z7bfLoAVzxU7CoFT2BW6y3YPbshZf6pBVD6JbtVcgJ",
  "key2": "5LAHqaWj9mx7r87N4LxyhQMDgmReyguVhsbEqu4CSamyhbT51m5A7tVywv8RV1DHzG3FLW3jB36kD7tCD3oADh4z",
  "key3": "4MYk442AozBwu3wL74V3bA6RaoTasfnnxqQmgc8C8uHZTfFRGmAfDxmG8Es3Q53fHowgegmRQrB71UBkKCf6B3v1",
  "key4": "3pdtFNsGgNyeHhoS12vuFce6913MRpAhpYQo4KhF4YyecnTUyHWKzaUYqDDge7dR9dsziaRazqRsMdGLAN16Me9u",
  "key5": "rX4LgWuWskcw4GdngxkxhwtsMfY6iAmTc1KmzrhHjy8KESTDVEY1JnANCn4Me4T41XYa7roeMmGAkJ6p9eSeTFB",
  "key6": "5M5P3w2LFeLiczumameGYsVyfQdP5BZTgBqKuH2MGtBnBoTXRPv2LVLr9sFmzYe1aPUCwLV9J5BMjwQGBnNh6TQm",
  "key7": "SwAR6bTgfy7pARkNPaLQGoVjLBiNaWonKhm2tm8usTkA8hKgBVYXPyFK4tZev5f7eZFPGtPgfBPqPrcJGLPEsPx",
  "key8": "3Xmk59kf8YgkTUGizshHXi2SxifjKLZJDgd1YRtEVx2AKZdJymb34Wp3j5AChHRLoEUGA6AWgHEpq4nDjGrJAKUe",
  "key9": "3CsBpKsn8CwNYRknyFqgogG8sRQF7f5BFmfqBYkqVycbvoqjHMHN73eJwX4AayGsVw1rphgPqVJYWe4hYnxTuA4j",
  "key10": "uEREydJt8HbzwRXfyQJxTPyFYdCavAwJpDjGsGJ5HfuEjR4Zun9cHqx8mFEKWYsNRxUpqXCT8eu5smDoHXEDjq1",
  "key11": "2xvPdJvJh2YuhqWLYx7JpMzQ9Bafg7rxwifVJp9um7SwLsTGC5UvbaLVvwkB2siwXRREK6buYR6xYnbP1FcEobk2",
  "key12": "4w5Jz6ZcCqFd5qqwdrEsx1SGqBEGk1VTaFfRxVs7ihjdWMNw3hAxGQAJBa2uwQW5RgzXAdSvcEU1ckWnhNW1Eper",
  "key13": "f7shrwNYjGU6VyW2NZ6bULPkQG9CLDSrczuaP2UzG2HsgAT5HBF8a9QSsLrhBp6pSxDRyM2VHdsC4zYu12Nra5E",
  "key14": "3X9ifevE9431CbQBFKQkPs1rPRL2RKF3LfcbxgXpYuv2JH5s7rvCdbu2v3jovLTNYdDNbnnBjNyvKFqNexdpQHjT",
  "key15": "aeSJ1R2C5JLQ68qd8LWasZ9n1A7hM27TvXZDNEkvYQstR9KBXkjw4Yiax8peEMzcWpBh871KtjhvmeAYbNjkD97",
  "key16": "3L5TTq5TgKy5nYdnMk8NKyGBo5qhvuZ3Vkj5cYdtoWo3FVDU1cYfvogSKZKTCAXWw46PnWnCoqahzVDNrpCQJszc",
  "key17": "2sDzgyiiz9gBn5C9ZNykxwFcXhWdi46tLfx6vEQMKB7jJosGD9CcrX11gXgETcP16vtqNRqFegWrs9YhgWtbAB6x",
  "key18": "39JaR9NT132U4j9DaeSLmFSAtGsmvZ6YR5u34KcksiFBj9YF6upt2vnoXp8qzotJVXTXvUqkQzJTWVWsTxUp46DG",
  "key19": "2SNYBLwWYshfseApbkRVTBoUmmPJLMu4ZZpKZ8cEXmkmsz5cgFNo8ZPkBbKRHRysTcDiLFwcdpZvzHa2BBy82Xji",
  "key20": "dtFv3Sgb9XvcbhtsTMrTqoYyBhVHJhcXFJ4Ky3x3cWNSCxomz4qmzY3jfNTKzy7oqocwoyanQBCu5auBYgQph1d",
  "key21": "3cMSPba8DTCvGtxJC2LCBDc59FX76PUauJ6B13iijgYAPYk7RQxcgWrpcqELsQdB79QaSaxNyVWA1T9ggVyvFeU8",
  "key22": "3kYZuRPH5sRpi9cFSUXkFErudf19RzgfHWSeTV1DE6HSuv3TVZuayEQbxFpqSSrs1hczsedRQNdLmdP5trd8rbhW",
  "key23": "35CEZ3V22imbzfPMktYUaFmAAcR5PG15fNp8JWGWnVwKkpjKa15YzCvc9xApyFXNs7JW54LSz3TMwHsKAWALZciP",
  "key24": "5rnfFJySqAajbhmNKX3PH1sWHqcjSXEzatPJTLd8YK8nUEnxsGT68gWQoSEto1PjdrN4NH9ZQPJxnv9h1NoyEQCZ",
  "key25": "3DgB2fYXDGXfwqEqvryR9cHAu2Yt553iWEVuUjXmXZJZs1xBRQhYJoAqbEZXQw3fbyT14sG5VrFXKs8yik1cM72f",
  "key26": "2KCTXxfd21uTj9ddjD9o5GbMKcNNopZtZ2HghCJjXm3DehCVa19rfgVZUtjCJT1Q1P9VW9Hxh89Xr93ZwBeNJdpz",
  "key27": "3QG5GpF2xwWQwGKYscZ9ASnNjeTQtDCa8FwgrbYGokJx9KQjsrTPsGykqHTTALokyRWydCFtmK9JXrVwGTa3Tap4",
  "key28": "3UrXzgpFQFFaMHnbCgitqTvCA1uExsyFUhwr8xaiJxSarsXsGSVFpy3uBkacx6rQxETNUKeZXyzZiHcEgsUHb96d",
  "key29": "5AYmppkP1NcQnMo5dsDHmxf2dJgb8Aym1ADPwGoLzf6GjzAtF3BUK6BmQkjJZaSJi4MSg3MaYpbvzAkxjg8U5NED",
  "key30": "65DH5kjNojn8gwqmSezkGvTvpmtxQVB8z6hnicKAv2vXw32VUqnM76tMPcF2RyDRegJNYM1Hf7gJCbGVZuwMpT1G",
  "key31": "2WiQ4iSxM63gTDAYhAHE4Tbmg8vWvLqbz4JtVUmDDwFLPKu5z7DDLScfFzM1R9RArJBqfFnnoW4aKaFT9yvadL77",
  "key32": "5TA41UPEk5YbNH7ytJ4raXrr1x9r4ktNiUcZU4kjUy83hzoh8FTFifSZtnEzWPdq4xGBCLW9zTARwzHWSkJGAi8c",
  "key33": "2CsPLmRPUBNUpeLkcyoLSbmMH8vSAtT2dxmN8VzXvDDKCRWA8ApGLcifkqGc7DYH628rMDakAALciw6qzZoetYXC",
  "key34": "2Rnta3794ZZGT1EoHwdiQ5GLirxL3PCvR4ob5rPebTJB4wrZbyqDiFeLKMAbm2fmQneH4ENijaGqizmijzNVi5op",
  "key35": "DHcr7ZpuRYTJVQKty8HCEHKHi82UoxfbdwjVXBS8YqsWmL9FtSycXxkUpczdfTo7d6NMUaC2tGyt4YwCr56E3Ps",
  "key36": "34aFkqbyZWiKCzFBzyBXdGF9w3gyUw7NGFtrHfyxnuNinL6g7hXMmNHYhiJNgVzr3ERtR5mF4i6y2ei8CMw77Uy4",
  "key37": "Fm9BR7pzNEZm599yQ2fkc6CLk5ARWPSTphPpRHktitFmTzyznphTRuTx8PFuCgy9nLXTV8SsWhNL93nYgijgcVp",
  "key38": "nfc368urcK4kFBt8XPyNmQWmwNdJpw6AG7BYkt3Hq379q77DgKcp2McRZX3jMYSdEHcqUMkqC1Z2EtxZwX84MA9",
  "key39": "58kNABFsTuCnkwvYzDSMFnYavW21zm2cKSsMfcXjEnVLQP8X4i6bcD6v34pSJmTioEPQYDJjsTdRkx7jzBFGLFUa",
  "key40": "5AWpGEFQwSMczc8aMiYB5cM93q7SVtKrPygoTds33oZPmSfHzYY1Qp5SY1B3pqYyWmteVEsbFbBX3oxkpKoW4zwp",
  "key41": "2GhYmEZME3fmuLXKm1TxxS3upsTD8jzHhusmewxZq3k5EFFQAmUmDKtH75XGm3MnXdcnei283o8qDepDbgKQEbVt",
  "key42": "459umjUcceSr1fFwiv9Hv4rQWxFaq2XSJJ4nobPDBL8HkPsaLwUSRqydAxGsa9JMD1yiZiGXHH6rDeHd4STqk8ya",
  "key43": "33GNebRWVf6cHHeSo7GNfUsPWfiB8UehdfN4wguzNRqydKsyqp39UYDNWmskr6nNs2BSaVzWyprqniAPvThYBDma",
  "key44": "4SNmTvBV7UswL7PPgFDLdtrYm1JHB5TugeTFkqqjjyhgs1gmoEyY8dCQkx5iuXVzcEcavLNpmfjyv85hDpESt8Mq",
  "key45": "3RvNDhu8tSnNFoauhoRVhhjMqZepvmrhRyoJo1PkJz6Tde2X6kV4Dpmft4F5RafvhLTPDxCDjvV3FYH6Wn6Pj1qy",
  "key46": "n8KZ4eC7KNKxeYABKveguHH5ktbSKcAUHKie1y2ipjVb5ep791AzEy2yQsGn8XXF8vqvoCQZUhesn3JJ6cswrHC",
  "key47": "5LJu64FGhkw1h876hmJUWzH96L1wGBTXnDPDdHeGLLxK6eW188FsH1khc89tY2ptn5wVVVDwR8UgESy4gi4KDoQS",
  "key48": "4a4tZzYbFXuoJwzkjFCyPbjgtCvByrZiJFX6wAt4g3e7ojgyrw4qWmt1zknezqwYiLqohoeQEPooPPp8pfHArhu8",
  "key49": "5vwBAuutxv3DyfRoQ9jaa6MiksNFpaouWZ9YPBKtoKcujWTyJyUGNrbCw7et2atzu2Gf6upW1u36K6x1E6kcXX17"
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
