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
    "tATupvW1tv6rPvU7E3Brju21P6FnMG9DWa7TNGrFaM4W9ouCynNxmdUo85QQaU9Huk476f88orRNCV7o13CdDFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCNMPvEJUmmFHwQKZNLdLDEAMqiHNtnQtYT1efbETpvYuAt5RWguyBvsagvRacWgizzF26GKTqGeLxfNSBKBq2E",
  "key1": "2cpokbkBnprkz9PFGVd5t8M7tdKE9GpFQfvqRXVDhMkXXNMVTsjDAebWaZL3AuTFEgJUXYbKbhRtr7YdrWJoAo8L",
  "key2": "3wP7BnSTMsZVVaxLhCx4f2tF7SiMRhbr8gxp3D1dif5pGP1QHToSFMga6E6V9etUAtYDYPLDkp9qx6neBy8TZD5T",
  "key3": "A7KdWLrUnpWWkBsU2fWhXcRDk5a54tZ8EMtPKkEdiNLgsoN8Bczt7uWM7rDAFccYaBGxzoLvYhppyVYFyPCQQU6",
  "key4": "4ZQAzK6eQyrXzaYSu6ywkvgTxNvNZjDHzSDMWy9TEiYYjoxuWzKoaXaGfpb3mSQg5PfVcei7aRwKYkcoAhqPEMP7",
  "key5": "BJgNVRfbC61TP57fEAVkaoB2vuz3E7xShun2eZkL5uM1BaR5NeEvHiaQuXFeRosgKcP3sesULtu2Epen8Bg9Xps",
  "key6": "b2k1RdM6UaEQEqrhHXMAB97safBQrQCKdDrfGuFs9p38QMk9XXuUMFRSK9HMA1onAjdNcjTzfzNN9hguyonWNay",
  "key7": "42ivtiYtqpxt4bPW74oVBHBhhBwz4kKL9qpGKikJktbKJoykAM8tntTNhurErm1NtrHLe2MXigxxGZtpmLwKp1v3",
  "key8": "JwfDsb5NuFFMRfW7tEctbvkrWeRtNADWScHD6fzmLGAkhHgtE8MpWiGdJZ455JAXTysB9nnDQaLgVZEgVoexhDk",
  "key9": "3AS9sWdffsk1ZiyYwN4DBAdfQcr3quvjZHM2VWSsaLis6wFHmZh2TU3EAz4bkEUF8YrcdV1kpGRdCjP9bphhWVnf",
  "key10": "4fCKTqH4Db8HiKyVnfMZjyg9YgpCk5XQJZ8piWuqRcUzSqRhPqTfAELLT57Qkk3nwhviydfK8LKmZQ5Rchst5zaY",
  "key11": "36vWguo9vLa1qTksJ4nXEy2E5YdvkDBpExRh3ie8uwJCHBxTnvZMJjb3Z11cv1xmDdoEaLzRNta86tTvM1YMuhxe",
  "key12": "2rQecVa7EkrMnoY5vLdn7XYo9sTbD99JPKB82GAs2LFyoVXcyPkeFZS4P3iMVzBdU1jmkVrP7zAaAxoijyQiJdRH",
  "key13": "iHj5p4x3jXeJ2JTiiRUHiJR7Up2Yp2KzY34QApFjUSTWBscvvyfJUJfr3cMQNKtLQFvkKNVgxwBwA3x6iG7XMYs",
  "key14": "2NnD27GKoJTEQHvviNwHuGdAD55BrnnF3Nc32285uZtcuwVMe6CnfhCbFMpbuaQGsD62TJ5PVz66meiZoxUpmqwg",
  "key15": "Kpohi66snHAnU3nV9gn9RaQ3RZZ6tcfYudq71z9azSHYvFACDz2tNMbgy8iG27Fgw1BmAm2V3ZDroyzGF8AJsbc",
  "key16": "49eZ4AjXgATKW458dh6hWTCMxKBXbga2h3hCoLR84Nh1LxS4uKmGhM2hcuqSq5AbB2XFhmjuc8BbYjzD2TjDMusJ",
  "key17": "3JQCbS1Y5DQvng1zUtDSDGe7SwQgFPoWzPo7FpGA7K1KqJnUQN3hy619CDLefGqpSReiZsiR3fhVLwxRN958NU8r",
  "key18": "sZb5sc7xqofrj9aQRq54iGK1EV4bo6omKJ5qYCEA3c56iaSH1wfr2THz99X1XBUjYfPqLrX5Sok52WxQvPyQyB6",
  "key19": "2waRZJ6nvGyxqRrAoycqXyLvHt5uMkjPk6B3TrFDLVpx6dYfhrGeoXu3TNeFWPHQKMeX6oBZFTZadR6Myrm5Mqfz",
  "key20": "4NGUXEbQdHp4Nye6Wdyu7fbN86Us8D5P4XXnFAzoLTuu1465EQ13rdqwMtsPN9Bp4utgCJK5UcRTTvmSZH78qDqT",
  "key21": "4wzwJYHnaDD6cLbn7DQ8RRJYvbsSUxbt6jQhpLK5cTv9NznVvvHzSFPgG4hzVzop73YkXud7EfThVD9mkZL28v8B",
  "key22": "4Qoc2yCxGzFodMXHPbu52cMmfa1KbnwKNPyoBy4C6PLo7ZNrGvUbcJdXgvztSrmS5c9kMF9n7C6ShNxFfEqsQwRL",
  "key23": "i86GNQMPCujNri5G2zgd9hAz2CKqnkZEGEGKeCrN6ymAKKs2AUWhft5ReaYEkC8Tm8AaRfvWwtNi1VEGx5rhep6",
  "key24": "2oNMFWRXHLJP2DLmcDoELCsKiW226HqU1ueuzEq1jjn6JXY2y93hjZSbRkPpVMVqJfFk7KCQXoYpegiV5VhBEq68",
  "key25": "59YjvrXyvRtqh1fBFcG8zzoroFZJoRaF4yUPwJvuvNywj3fmxnrseqYTFxHmKrgWfqf1CvG5JnithpkiKthd9S9D",
  "key26": "7a89yovdrLyKJN4BbWqoH6nqaZQTaR3aMJ8kay7qqmGTvHq2jkh8srAwuwRQFYgoYR5fVV4EB1XaZMsSZfhyfrt",
  "key27": "2b7ds1dtKxSFVM8NqntPQz5GX4qjXXGJ5X7RDfsbV3gi3m6wGPgva7Normt6Y1UUAG8FXsVtLwgaj41gj63zx9wR",
  "key28": "2tm4DvSUMdGhYunngn1UJPxB3FnRZxXtWBo79U8c6rKonrpbJsNN6xvU6VikbqCvA4MiLugDvcRLaypcF9Qr79Fy",
  "key29": "417REgMdGYrmy4iSe9znbQEw71J4foJ5uubMiUgwvGg98YukdzZM263PBzbAQndaVXb1hn87moAVBuy7Hx1PfuWB",
  "key30": "5gLMitVvaL8uQAeqKXucA2wD87hiSHX6tmmLNtHCbkqENeG2adhBeBvvSsK2Kgp9xpu7v8gyPrGTcHKhQcdLqBx5",
  "key31": "QrBiRupcSXjPTs8KmfP9Yvr25d8eso3WRAX2RLYGS5a3uFSCxWxzRDdk29tWXvczC24faVtvFTpyYbiC6XhtTHM",
  "key32": "5aW8Kx9Y5cqMF8UJJ1jfs6B8pAMsNXPyXuXaJbGM1o2e6cpTgUKA615PvyBUdxeicWPcHTpKq5pd6uzddtmTExAS",
  "key33": "3GQqBUsqt75rzSdHfp5KNMLHEtPgXY2nviveDoSwc76Ne4h38M7qRpEk2KAqBUYRAErGmNdFd4u3MFPm9DrwbcyC",
  "key34": "41ZogUkmDr9mtA2A7iPfPLdQmv9QgqeefLXJocLeFrHUDdYV2NMegTm3gBEmFtHEop4zkzXbEubcSj1TpqBu6gEq",
  "key35": "4oVW2Up5EaXwswHQDhWEUnXFtnMNkTG7SH56QX9DFpu2mF97yzdkisyt6t8y65kj7gt9F8VjEHRghN78neuLq8hJ"
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
