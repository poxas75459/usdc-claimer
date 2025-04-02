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
    "2x8DwBmzrLCPgf9Zha1WZbKzSTGMse4TbqTBfoBHDS9JDHWKvmkxuXnpEYXj578GwoNpoFQqPde1LjEeaBkzMzaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZWeTDScZEfrRthBhS9aFWDxNAgpJHs23CwFavVAPYSRNgpskuWQzdz7rStMzDErqqQbir5wFVPgBzpFdw4apEy",
  "key1": "5CJDNZkhDPcAm9EWhSDEAQRvA5mWLZzmVHtRRGUjCwuamSA1NZcrjRRbgxRjdY2mKH4vcADbpzPspGZmHJPUdK7y",
  "key2": "4oTrBgFFvjvTqTCiPornxCFUoqYoLG2ToQZfHEsE9u7mrFYdZnAJiakHZpjSbjuczUxm8yHXmDS22socqfbfTGZo",
  "key3": "2SAwJ6TGYJifmirR9uPk3nMJsoARU1MU6bjbADgceH7Z99WcgZ4DASbaWrt39ABsc8G3JEyMGek9F9jNJZFTJ9Y4",
  "key4": "HkmBWDteBuWbtSgX4cUMMu2e4a7EdRqNXfBbiZ85XLpE4bD8VZFgyD2EAs4dnQRPhUWEguJMuBhZGp4G9SUR3yt",
  "key5": "2tjY2FPwQqjv2rjzqurv7J6JyydmBVjdCSBanTNxbAB9EXpnuPCvhBrUbnUwWeuutNNux9rvtHQ93s3Mgp1Zghxx",
  "key6": "2wAN9SErNxfvZbgXaFVwJeoESFu5zowmV7uHaXTZbwGqgPKDtYccJeodHU7xoN2qKBcyScVUpiatwVgGfNai7sjL",
  "key7": "4Jja6ahEdJv5sf5V9jWyXWLbhm2Fg6PEE6JuVRhGJU4JZjNpuNzrHDPg4QgcMHwKardQtkf9di8U5TSLsTGhXf3V",
  "key8": "5UUS6vo4MWi3ZuzBZQ8FBhh6hptreCFmLJ6KWSZEjBwrDq843JdfiJCuMLUkfECCnozMd7fS9VR9tk3eiahNFNkb",
  "key9": "3NAa6RXqhh2n7hgD5oBeF6eHV44AeKnX7vM6o6RhY5vJ4bLemcUTN6bBtMaDJoFoq5UwphByH6VakU1yasSshVEs",
  "key10": "5MoBLiCT16ifVuHLn9LLq4g1jhCxJXQSeLnQMAzfvMjHdbN97Chu2nyfbux1gkBqQGdnRUDP5rkRdnPR3Cww7qos",
  "key11": "3Rtgc153SU6CTLzyKmAdSupJR1cDXyWGxiiYfVJhiZpZVRe8DhC9ytiChfqe2N668AGC3hKFtxLQYXh34xg1ARoh",
  "key12": "4p2E49t6jnAYxeT3YFRoGb4oYqpSzZ46j8JH2n2e1mxm4vFN9Wd94QowxRdDbGCWLw1VoUiBxDgHbEGiwns9LuZ1",
  "key13": "33DHeD9z1J86dxrjNrxB2HaSw768kEVBbDPk377Ts9CmwS2bu5AkE8RYrohwJoe1c8J4Twj8acEksj7BtQr5DfNL",
  "key14": "2JPAvGU36ZLhwQ7a5UMEn5u7dD689VHVgBbPEX8hrS7ZWtmEC8nQrJRb4uzm6jNPBrqq5HuBSjKFHUL1UMuUTcWP",
  "key15": "AQcti6jGvGrJbRpttLt5qawKWi1JMpg8DxrrBvmxz6vL8To5w4jN3qwKzgTc44RSyCXMaECUEBi1tjweqquXYCS",
  "key16": "82NsdUvCF9bLXJW9iyf4sW1DirJ5AmqERJ2UPxYmsVUEricyuLhyWgdcKrASdqh4VJJmncd4Jay62dmFgqqUzXu",
  "key17": "ZjDcBDzGcPnNYHSXTrz5uho535XMXB6hwUzQsyvoTWH8fjM9dyhswdVaiAufoKPrsH8Tz3dg8mPALbQiSywg9gs",
  "key18": "5iw6PGSJT8vqWBKQT2MxoQGV9TYURhJZbUdorVzYM4UBjEnt8nKQgwNjx3xtxQg68kpqb4CR3UbRZU2PSxX28G4",
  "key19": "2exHWuskgSfcxXhKrdUnkCHoy55i3AGufrJbxGf9shPTwHm4knKK59uhLuE8Tb9UsztsRkRQPv9xZypjkypQgyYj",
  "key20": "3eGjXQTFvFdWgR8NKQXpRYRX2gzkUJTeEXWmTZvt6LMmpJNCehBxwiWzeYBzmTx1EmxTB42MHpqVGM1m9kY3Uzms",
  "key21": "4Do8rBosTCVtZVdq5ryaqDTaoFpfvGVa3ieiwJ4hDeusu3h8FVUgcipsCauS1HjZETfQDdAriMQ6SPHCa8AJML4s",
  "key22": "4herD4KbbzBT6dnsN6bZpJtc9Gw4C7jJx25qKSoacysB1dQSkDPadEFWT2iAWy9C97L9SNTNW6SsbY8RQF3kdtmb",
  "key23": "2J17kMAXJhPbiSobSjpGtj83cvK8ZWatxHNWbh1YNuZvajxbkYiq1WeFuiwwBzhrdo5XTQbqcuocN2HQwXnGFwrN",
  "key24": "5bujuA1pnmB1zy8NzPw1fjF4EX4j1UzReqkwNVcB5cneJ73RXTfqHv4R6Lh9R1a2gatbsHCfaTPih5mtmvbk2AS",
  "key25": "4iiHWTqNkSMCMxbkiPXSFoJ1GKTLNDeEnXZ83HPoTcV2jxyaEDRhLQ8hyAp8z6KTHUj7bktpd7WYPMGeoaaQMZQx",
  "key26": "4rdkguCgkyxYcKBy2SogH8whP7WVb1cJmBGZN8vMmwdDXhFkE5yahcbaEyaWh1jhWKvgro4JMiGr8HoBBV3xNBG9",
  "key27": "i1jmyNpqjfR7f9EJbY6FcagY3JRDwyaZt3GWHscHUMDQGVk7VrXugUsfEXqKPBt5EdhCZ5wKBSAyXwNgrkzTDCH",
  "key28": "3TDUaoC4m7Jg5Xnuy1P2ZHXDRhNnTZwDgyDoBdvHjpryCPQp8Xgdoquv2fPcMMh1XrNeZ5qasva9vRAu3m1GrrJt",
  "key29": "o2kxamUgBoi7efisDJvu2jxAG37GE5sG1psXnNw7jWDgxRfT95q5WANHqGs85ZAEBTMKRfP4ddX3EKKFsnkxWBo",
  "key30": "PU1f8fzhzrQdKt8fYku9LEr5veQb83Yg1Ygc1U2yGmaY8ggCJiXdfCe1NWbyHD5eexCQQVFRgdhPhGx8cYLyAUe",
  "key31": "5EYPCMigD89kcWeWWuYwcz3rvmVUtbvbXuheM9UyvULNCorLRopUeVZFxR9ojB9uFLH8nUyYfxUwjzsZR8ai7bY1",
  "key32": "2FnK9DWmsaumpAnXHmEppL1StAm2vMez9DFovop3FeyjbtDku1MqaCEEpb4z7t5ZbMsTtmrMbciudhzBC1ZR1u4j",
  "key33": "21T3ofCwadKd815i2LoDtWcyrAE7a1eGLiJShtS22MU8fBjZ3ZiKALtaTUuMWYMazwLqC76dnUQcgaEiwXGcSMov"
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
